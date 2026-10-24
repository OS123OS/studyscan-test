"""Trainiert das kleine Blatt-Erkennungsnetz (Maske + Rand) auf CPU.

Aufruf (siehe .github/workflows/train.yml):
  python ml/train.py --minutes 300 --out out/ --textures tex/ --real real/
"""

from __future__ import annotations

import argparse
import json
import math
import os
import random
import struct
import time

import numpy as np
import torch
import torch.nn as nn
import torch.nn.functional as F
from PIL import Image, ImageFilter

import quadfit
import synth

SIZE = 192
OUT = SIZE // 2


# ---------------------------------------------------------------------------
# Netz
# ---------------------------------------------------------------------------


class ConvBN(nn.Sequential):
    def __init__(self, cin, cout, k=1, stride=1, groups=1, act=True):
        layers = [nn.Conv2d(cin, cout, k, stride, k // 2, groups=groups,
                            bias=False), nn.BatchNorm2d(cout)]
        if act:
            layers.append(nn.ReLU(inplace=True))
        super().__init__(*layers)


class DW(nn.Module):
    """Tiefen-Faltung 3x3 + Punkt-Faltung 1x1 (MobileNet), mit Abkürzung."""

    def __init__(self, cin, cout, stride=1):
        super().__init__()
        self.dw = ConvBN(cin, cin, 3, stride, groups=cin)
        self.pw = ConvBN(cin, cout, 1, act=stride != 1 or cin != cout)
        self.res = stride == 1 and cin == cout

    def forward(self, x):
        y = self.pw(self.dw(x))
        return F.relu(y + x) if self.res else y


class Net(nn.Module):
    def __init__(self, w=(16, 24, 40, 64, 96), dec=32):
        super().__init__()
        self.w, self.dec = w, dec
        self.stem = ConvBN(3, w[0], 3, 2)
        self.s1 = nn.Sequential(DW(w[0], w[0]))
        self.s2 = nn.Sequential(DW(w[0], w[1], 2), DW(w[1], w[1]))
        self.s3 = nn.Sequential(DW(w[1], w[2], 2), DW(w[2], w[2]))
        self.s4 = nn.Sequential(DW(w[2], w[3], 2), DW(w[3], w[3]),
                                DW(w[3], w[3]))
        self.s5 = nn.Sequential(DW(w[3], w[4], 2), DW(w[4], w[4]),
                                DW(w[4], w[4]))
        self.ctx = ConvBN(w[4], w[4], 1)
        self.l5 = ConvBN(w[4], dec, 1)
        self.l4 = ConvBN(w[3], dec, 1)
        self.l3 = ConvBN(w[2], dec, 1)
        self.l2 = ConvBN(w[1], dec, 1)
        self.l1 = ConvBN(w[0], dec, 1)
        self.d4 = DW(dec, dec)
        self.d3 = DW(dec, dec)
        self.d2 = DW(dec, dec)
        self.d1 = DW(dec, dec)
        self.head = nn.Conv2d(dec, 2, 1)

    def forward(self, x):
        f1 = self.s1(self.stem(x))   # 1/2
        f2 = self.s2(f1)             # 1/4
        f3 = self.s3(f2)             # 1/8
        f4 = self.s4(f3)             # 1/16
        f5 = self.s5(f4)             # 1/32
        # Ganzes Bild im Blick: Wo ist "das" Blatt?
        f5 = F.relu(f5 + self.ctx(f5.mean((2, 3), keepdim=True)))
        up = lambda t: F.interpolate(t, scale_factor=2, mode='nearest')  # noqa
        p = self.l5(f5)
        p = self.d4(up(p) + self.l4(f4))
        p = self.d3(up(p) + self.l3(f3))
        p = self.d2(up(p) + self.l2(f2))
        p = self.d1(up(p) + self.l1(f1))
        return self.head(p)  # 2 x 96 x 96: Maske, Rand (Logits)


def preprocess(img_u8: np.ndarray) -> torch.Tensor:
    x = torch.from_numpy(img_u8).float().permute(2, 0, 1) / 255.0 - 0.5
    return x


# ---------------------------------------------------------------------------
# Daten
# ---------------------------------------------------------------------------


def load_real(folder):
    """Echte Fotos: real/<name>.jpg + real/labels.json {name: [[x,y]*4] rel}."""
    if not folder or not os.path.exists(os.path.join(folder, 'labels.json')):
        return []
    labels = json.load(open(os.path.join(folder, 'labels.json')))
    return [(os.path.join(folder, k), np.array(v, np.float64))
            for k, v in labels.items()]


def augment_real(path, corners):
    img = Image.open(path).convert('RGB')
    W, H = img.size
    q = corners * np.array([W, H])
    # Zufälliger Ausschnitt, Blatt bleibt größtenteils drin.
    for _ in range(10):
        s = random.uniform(0.6, 1.0)
        cw, ch = W * s * random.uniform(0.85, 1.0), H * s
        x0, y0 = random.uniform(0, W - cw), random.uniform(0, H - ch)
        qq = q - [x0, y0]
        inside = ((qq[:, 0] >= 0) & (qq[:, 0] <= cw) & (qq[:, 1] >= 0) &
                  (qq[:, 1] <= ch)).sum()
        if inside >= 3:
            break
    else:
        x0, y0, cw, ch, qq = 0, 0, W, H, q
    img = img.crop((int(x0), int(y0), int(x0 + cw), int(y0 + ch)))
    q = qq / [cw, ch]
    # Drehen/Spiegeln (Handy hoch oder quer).
    k = random.randint(0, 3)
    for _ in range(k):
        img = img.transpose(Image.ROTATE_90)  # gegen den Uhrzeigersinn
        q = np.stack([q[:, 1], 1 - q[:, 0]], 1)
    if random.random() < 0.5:
        img = img.transpose(Image.FLIP_LEFT_RIGHT)
        q = np.stack([1 - q[:, 0], q[:, 1]], 1)
    img = img.resize((SIZE, SIZE), Image.BILINEAR)
    arr = np.asarray(img).astype(np.float32)
    arr = arr * random.uniform(0.7, 1.25) + random.uniform(-20, 20)
    arr *= np.random.uniform(0.9, 1.1, 3)
    img = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))
    if random.random() < 0.3:
        img = img.filter(ImageFilter.GaussianBlur(random.uniform(0.3, 1.2)))
    q = quadfit.order_corners(q)
    mask = synth._quad_mask(q * OUT, OUT, OUT)
    edge = synth._edge_band(q * OUT, OUT, OUT, 2.0)
    return np.asarray(img), mask, edge


class Stream(torch.utils.data.IterableDataset):
    def __init__(self, textures, real, real_frac):
        self.textures, self.real, self.real_frac = textures, real, real_frac

    def __iter__(self):
        info = torch.utils.data.get_worker_info()
        seed = (info.id if info else 0) * 9973 + int(time.time() * 1000) % 100000
        random.seed(seed)
        np.random.seed(seed % (2 ** 31))
        gen = synth.Generator(size=SIZE, textures=self.textures, page_pool=150)
        while True:
            if self.real and random.random() < self.real_frac:
                img, mask, edge = augment_real(*random.choice(self.real))
            else:
                img, mask, edge, _ = gen.sample()
            yield preprocess(img), torch.from_numpy(np.stack([mask, edge]))


# ---------------------------------------------------------------------------
# Bewertung
# ---------------------------------------------------------------------------


def make_val(n, textures, seed=12345):
    random.seed(seed)
    np.random.seed(seed)
    gen = synth.Generator(size=SIZE, textures=textures, page_pool=60)
    out = []
    while len(out) < n:
        img, mask, edge, corners = gen.sample()
        out.append((img, corners))
    return out


def load_eval_real(folder, limit=None):
    items = load_real(folder)
    random.Random(7).shuffle(items)
    out = []
    for path, corners in items[:limit]:
        img = Image.open(path).convert('RGB').resize((SIZE, SIZE),
                                                      Image.BILINEAR)
        out.append((np.asarray(img), corners))
    return out


@torch.no_grad()
def evaluate(net, items, batch=64):
    net.eval()
    ious = []
    for i in range(0, len(items), batch):
        chunk = items[i:i + batch]
        x = torch.stack([preprocess(img) for img, _ in chunk])
        prob = torch.sigmoid(net(x)[:, 0]).numpy()
        for p, (_, corners) in zip(prob, chunk):
            q = quadfit.quad_from_mask(p)
            if corners is None:
                ious.append(1.0 if q is None else 0.0)
            elif q is None:
                ious.append(0.0)
            else:
                ious.append(quadfit.quad_iou(q / OUT, corners))
    net.train()
    a = np.array(ious)
    return {'mean_iou': float(a.mean()), 'ok90': float((a > 0.9).mean()),
            'ok95': float((a > 0.95).mean()), 'n': len(a)}


# ---------------------------------------------------------------------------
# Export: BatchNorm in die Faltungen einrechnen, Gewichte als float32-Datei
# ---------------------------------------------------------------------------


def fused(seq):
    """(Gewicht, Bias) einer ConvBN-Folge mit eingerechneter BatchNorm."""
    conv, bn = seq[0], seq[1]
    w = conv.weight.detach().double()
    scale = bn.weight.detach().double() / torch.sqrt(bn.running_var.double()
                                                    + bn.eps)
    b = bn.bias.detach().double() - bn.running_mean.double() * scale
    return (w * scale[:, None, None, None]).float(), b.float()


def export(net, out_dir):
    """weights.bin (float32, little endian) + model.json (Reihenfolge)."""
    net.eval()
    layers, blobs = [], []

    def add(name, seq, kind, stride=1, relu=True):
        w, b = fused(seq)
        layers.append({'name': name, 'kind': kind, 'stride': stride,
                       'relu': relu, 'cin': int(seq[0].in_channels),
                       'cout': int(seq[0].out_channels),
                       'shape': list(w.shape)})
        blobs.append(w.numpy().astype('<f4').tobytes())
        blobs.append(b.numpy().astype('<f4').tobytes())

    def add_dw(name, m):
        add(name + '.dw', m.dw, 'dw', m.dw[0].stride[0], True)
        add(name + '.pw', m.pw, 'pw', 1, len(m.pw) == 3)
        layers[-1]['res'] = m.res

    add('stem', net.stem, 'conv3', 2, True)
    for si, s in enumerate([net.s1, net.s2, net.s3, net.s4, net.s5], 1):
        for bi, m in enumerate(s):
            add_dw(f's{si}.{bi}', m)
    add('ctx', net.ctx, 'pw', 1, True)
    for n in ('l5', 'l4', 'l3', 'l2', 'l1'):
        add(n, getattr(net, n), 'pw', 1, True)
    for n in ('d4', 'd3', 'd2', 'd1'):
        add_dw(n, getattr(net, n))
    hw = net.head.weight.detach().float()
    hb = net.head.bias.detach().float()
    layers.append({'name': 'head', 'kind': 'pw', 'stride': 1, 'relu': False,
                   'cin': int(hw.shape[1]), 'cout': int(hw.shape[0]),
                   'shape': list(hw.shape)})
    blobs.append(hw.numpy().astype('<f4').tobytes())
    blobs.append(hb.numpy().astype('<f4').tobytes())
    os.makedirs(out_dir, exist_ok=True)
    with open(os.path.join(out_dir, 'weights.bin'), 'wb') as f:
        for b in blobs:
            f.write(b)
    json.dump({'input': SIZE, 'output': OUT, 'widths': list(net.w),
               'dec': net.dec, 'layers': layers,
               'normalize': 'x/255 - 0.5'},
              open(os.path.join(out_dir, 'model.json'), 'w'), indent=1)
    torch.onnx.export(net, torch.zeros(1, 3, SIZE, SIZE),
                      os.path.join(out_dir, 'model.onnx'),
                      input_names=['image'], output_names=['logits'],
                      opset_version=13)
    # Testbild + Ausgabe für den Abgleich mit der Dart-Umsetzung.
    rng = np.random.RandomState(0)
    probe = rng.randint(0, 256, (SIZE, SIZE, 3)).astype(np.uint8)
    with torch.no_grad():
        o = net(preprocess(probe)[None])[0].numpy()
    np.save(os.path.join(out_dir, 'probe_in.npy'), probe)
    np.save(os.path.join(out_dir, 'probe_out.npy'), o)
    net.train()


def count_macs(net):
    macs = 0

    def hook(m, i, o):
        nonlocal macs
        if isinstance(m, nn.Conv2d):
            macs += (o.numel() * m.in_channels // m.groups
                     * m.kernel_size[0] * m.kernel_size[1])

    hs = [m.register_forward_hook(hook) for m in net.modules()
          if isinstance(m, nn.Conv2d)]
    with torch.no_grad():
        net(torch.zeros(1, 3, SIZE, SIZE))
    for h in hs:
        h.remove()
    return macs


# ---------------------------------------------------------------------------
# Training
# ---------------------------------------------------------------------------


def dice_loss(logit, target):
    p = torch.sigmoid(logit)
    inter = (p * target).sum((1, 2))
    return (1 - (2 * inter + 1) / (p.sum((1, 2)) + target.sum((1, 2)) + 1)).mean()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--minutes', type=float, default=10)
    ap.add_argument('--out', default='out')
    ap.add_argument('--textures', default=None)
    ap.add_argument('--real', default=None)
    ap.add_argument('--eval-real', default=None)
    ap.add_argument('--real-frac', type=float, default=0.25)
    ap.add_argument('--widths', default='16,24,40,64,96')
    ap.add_argument('--dec', type=int, default=32)
    ap.add_argument('--batch', type=int, default=32)
    ap.add_argument('--lr', type=float, default=3e-3)
    ap.add_argument('--workers', type=int, default=3)
    ap.add_argument('--resume', default=None)
    args = ap.parse_args()
    torch.set_num_threads(max(1, os.cpu_count() - args.workers + 1))
    os.makedirs(args.out, exist_ok=True)
    log = open(os.path.join(args.out, 'log.txt'), 'a')

    def say(msg):
        print(msg, flush=True)
        log.write(msg + '\n')
        log.flush()

    net = Net(tuple(int(v) for v in args.widths.split(',')), args.dec)
    if args.resume and os.path.exists(args.resume):
        net.load_state_dict(torch.load(args.resume))
        say(f'weiter mit {args.resume}')
    params = sum(p.numel() for p in net.parameters())
    say(f'Parameter {params}, MACs {count_macs(net) / 1e6:.1f} M')

    real = load_real(args.real)
    say(f'echte Trainingsfotos: {len(real)}')
    val_syn = make_val(300, args.textures)
    val_real = load_eval_real(args.eval_real, limit=600)
    say(f'Prüfbilder: synthetisch {len(val_syn)}, echt {len(val_real)}')

    loader = torch.utils.data.DataLoader(
        Stream(args.textures, real, args.real_frac if real else 0),
        batch_size=args.batch, num_workers=args.workers,
        persistent_workers=args.workers > 0, prefetch_factor=4)
    opt = torch.optim.AdamW(net.parameters(), lr=args.lr, weight_decay=1e-4)
    budget = args.minutes * 60
    start = time.time()
    step, seen = 0, 0
    best = -1
    next_eval = start + 20 * 60
    pos_w = torch.tensor(4.0)
    for x, y in loader:
        elapsed = time.time() - start
        frac = min(1.0, elapsed / budget)
        lr = args.lr * (0.5 * (1 + math.cos(math.pi * frac))) * \
            min(1.0, step / 300 + 0.05)
        for g in opt.param_groups:
            g['lr'] = lr
        out = net(x)
        m, e = y[:, 0], y[:, 1]
        loss = (F.binary_cross_entropy_with_logits(out[:, 0], m)
                + dice_loss(out[:, 0], m)
                + 0.5 * F.binary_cross_entropy_with_logits(out[:, 1], e,
                                                           pos_weight=pos_w))
        opt.zero_grad()
        loss.backward()
        opt.step()
        step += 1
        seen += x.shape[0]
        if step % 100 == 0:
            say(f'{elapsed / 60:6.1f} min  Schritt {step}  Bilder {seen}  '
                f'Verlust {loss.item():.4f}  lr {lr:.5f}  '
                f'{seen / max(1, elapsed):.0f}/s')
        last = elapsed >= budget
        if time.time() >= next_eval or last:
            next_eval = time.time() + 20 * 60
            rs = evaluate(net, val_syn)
            rr = evaluate(net, val_real) if val_real else None
            say(f'PRÜFUNG synthetisch {json.dumps(rs)} echt {json.dumps(rr)}')
            score = (rr or rs)['mean_iou']
            torch.save(net.state_dict(), os.path.join(args.out, 'last.pt'))
            if score > best:
                best = score
                torch.save(net.state_dict(), os.path.join(args.out, 'best.pt'))
                export(net, os.path.join(args.out, 'best'))
                json.dump({'synthetic': rs, 'real': rr, 'step': step,
                           'minutes': elapsed / 60, 'params': params},
                          open(os.path.join(args.out, 'best', 'metrics.json'),
                               'w'), indent=1)
        if last:
            break
    say('fertig')


if __name__ == '__main__':
    main()
