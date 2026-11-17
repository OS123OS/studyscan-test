"""Fotos aus dem 3D-Studio (render.js) → Prüfordner für tool/edge_bench.dart.

python3 gl_prep.py <render-ordner> <bench-ordner> [seed]
Fügt Handy-Kamera-Effekte hinzu (Belichtung, Farbstich, Vignette,
Unschärfe, Rauschen, JPEG) und schreibt p/s/l-Bilder + list.json.
"""
import glob, io, json, math, os, random, sys
import numpy as np
from PIL import Image, ImageFilter

src, out = sys.argv[1], sys.argv[2]
random.seed(int(sys.argv[3]) if len(sys.argv) > 3 else 7)
os.makedirs(out, exist_ok=True)
meta = []
for f in sorted(glob.glob(os.path.join(src, 'meta_*.json'))):
    meta += json.load(open(f))
meta.sort(key=lambda m: m['name'])


def camera(im):
    a = np.asarray(im).astype(np.float32) / 255
    H, W = a.shape[:2]
    a = a ** random.uniform(0.85, 1.15) * random.uniform(0.85, 1.15)
    a *= np.array([random.uniform(0.95, 1.05), 1, random.uniform(0.93, 1.07)], np.float32)
    if random.random() < 0.6:
        yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
        r = np.hypot((xx - W / 2) / (W / 2), (yy - H / 2) / (H / 2)) / math.sqrt(2)
        a *= (1 - random.uniform(0.1, 0.4) * r ** 2)[..., None]
    a = np.clip(a, 0, 1)
    im = Image.fromarray((a * 255).astype(np.uint8))
    if random.random() < 0.6:
        im = im.filter(ImageFilter.GaussianBlur(random.uniform(0.3, 1.4)))
    a = np.asarray(im).astype(np.float32)
    sigma = random.uniform(1, 6)
    a += np.random.normal(0, sigma, a.shape) * (1.3 - a / 255)
    im = Image.fromarray(np.clip(a, 0, 255).astype(np.uint8))
    buf = io.BytesIO(); im.save(buf, 'JPEG', quality=random.randint(70, 95)); buf.seek(0)
    return Image.open(buf).convert('RGB')


def order(q, W, H):
    pts = [(x / W, y / H) for x, y in q]
    cx = sum(p[0] for p in pts) / 4; cy = sum(p[1] for p in pts) / 4
    pts.sort(key=lambda p: math.atan2(p[1] - cy, p[0] - cx))  # Bild: y nach unten → im Uhrzeigersinn
    k = min(range(4), key=lambda i: pts[i][0] + pts[i][1])
    pts = pts[k:] + pts[:k]
    return [v for p in pts for v in p]


items = []
for m in meta:
    im = Image.open(os.path.join(src, m['name'] + '.png')).convert('RGB')
    W, H = im.size
    im = camera(im)
    sizes = {}
    for tag, side in (('p', 320), ('s', 480)):
        f = side / max(W, H)
        sm = im.resize((round(W * f), round(H * f)), Image.BILINEAR).convert('RGBA')
        open(os.path.join(out, f"{m['name']}.{tag}.rgba"), 'wb').write(sm.tobytes()); sizes[tag] = list(sm.size)
    f = 1600 / max(W, H)
    lg = im.resize((round(W * f), round(H * f)), Image.BILINEAR)
    lg.save(os.path.join(out, f"{m['name']}.l.jpg"), quality=92); sizes['l'] = list(lg.size)
    items.append({'name': m['name'], 'sizes': sizes, 'kind': m['kind'], 'stack': m['stack'],
                  'gt': None if m['quad'] is None else order(m['quad'], W, H)})
json.dump(items, open(os.path.join(out, 'list.json'), 'w'))
print(out, len(items), 'Bilder,', sum(1 for i in items if i['gt'] is None), 'ohne Blatt')
