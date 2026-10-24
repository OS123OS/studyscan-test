"""Synthetische Übungsfotos: ein Blatt auf einem Untergrund, wie vom Handy.

Liefert Bild (RGB, uint8) und Ziel (Blatt-Maske amodal, Rand-Band) in der
Netz-Auflösung. Nur numpy + Pillow, damit es lokal und in der CI gleich läuft.

Was nachgestellt wird (die schweren Fälle für Schüler-Fotos):
- Blätter: gedruckter Text, liniert, kariert, Arbeitsblatt, Magazin mit
  Bildern, farbiges Papier, Notizzettel, Kassenzettel.
- Untergrund: echte Texturen (CC0, falls vorhanden), sonst prozedural:
  helles/dunkles Holz, weißer Tisch, Stoff, Fliesen, Unordnung mit Stiften,
  Büchern, weiteren Blättern.
- Kamera: Perspektive, angeschnittene Ecken, Finger, Wellen im Papier,
  Schatten, Licht-Verlauf, Farbstich, Unschärfe, Rauschen, JPEG.
"""

from __future__ import annotations

import glob
import io
import math
import os
import random

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

_FONTS = sorted(
    glob.glob('/usr/share/fonts/**/*.ttf', recursive=True)
    + glob.glob('/usr/share/fonts/**/*.otf', recursive=True)
)
_FONTS = [f for f in _FONTS if 'Emoji' not in f and 'Symbol' not in f][:40]
_WORDS = (
    'der die das und ist nicht ein eine zu den mit von sich auf für dem '
    'Aufgabe Lösung Beispiel Mathematik Deutsch Englisch Biologie Chemie '
    'Physik Geschichte Funktion Gleichung Grafik Tabelle Seite Kapitel '
    'Zusammenfassung Definition Beweis Satz Formel Wert Ergebnis daher '
    'because the of and to in is that for it as with was on are lorem ipsum '
    'dolor sit amet consectetur adipiscing elit sed do eiusmod tempor 2024 '
    '3,5 x² f(x) = 12 % (a) (b) 1. 2. 3. → • – ;'
).split()


def _font(size: int):
    if _FONTS:
        try:
            return ImageFont.truetype(random.choice(_FONTS), size)
        except OSError:
            pass
    return ImageFont.load_default(size=size)


# ---------------------------------------------------------------------------
# Blätter
# ---------------------------------------------------------------------------


def _paper_colour():
    r = random.random()
    if r < 0.70:
        base = random.uniform(228, 255)
        tint = np.array([random.uniform(-6, 6), random.uniform(-4, 4),
                         random.uniform(-10, 6)])
        return np.clip(base + tint, 0, 255)
    if r < 0.85:  # Umweltpapier, vergilbt
        base = random.uniform(200, 235)
        return np.clip(base + np.array([8, 4, -12]) * random.random(), 0, 255)
    # farbiges Papier
    hue = random.choice([(255, 245, 160), (255, 205, 215), (190, 225, 250),
                         (200, 240, 200), (255, 220, 170), (230, 230, 230)])
    return np.array(hue, float) * random.uniform(0.9, 1.0)


def _text_lines(d, x0, y0, x1, y1, size, colour, spacing=1.5, ragged=True):
    f = _font(size)
    y = y0
    while y + size < y1:
        x = x0
        line_end = x1 if not ragged or random.random() < 0.8 else \
            x0 + (x1 - x0) * random.uniform(0.3, 0.9)
        while True:
            w = random.choice(_WORDS)
            try:
                tw = d.textlength(w + ' ', font=f)
            except Exception:
                tw = len(w) * size * 0.55
            if x + tw > line_end:
                break
            d.text((x, y), w, fill=colour, font=f)
            x += tw
        y += size * spacing
        if random.random() < 0.08:
            y += size * random.uniform(0.5, 2)  # Absatz
    return y


def _scribble(d, x0, y0, x1, y1, colour, width):
    """Handschrift-artige Zeilen (Zufallswege)."""
    y = y0
    step = random.uniform(10, 16) * width
    while y < y1:
        x = x0 + random.uniform(0, 20)
        end = x1 - random.uniform(0, (x1 - x0) * 0.4)
        pts = []
        while x < end:
            pts.append((x, y + random.uniform(-0.25, 0.25) * step))
            x += random.uniform(0.3, 0.9) * step * 0.4
            if random.random() < 0.06:
                if len(pts) > 1:
                    d.line(pts, fill=colour, width=width)
                pts = []
                x += step * 0.6
        if len(pts) > 1:
            d.line(pts, fill=colour, width=width)
        y += step * random.uniform(0.9, 1.3)


def render_page(long_side: int = 640) -> Image.Image:
    """Ein Blatt in Draufsicht (ohne Perspektive)."""
    kind = random.choices(
        ['text', 'lined', 'grid', 'worksheet', 'magazine', 'note', 'receipt',
         'blank'],
        weights=[30, 16, 16, 14, 12, 4, 3, 5])[0]
    if kind == 'receipt':
        aspect = random.uniform(2.2, 3.5)
    elif kind == 'note':
        aspect = random.uniform(1.0, 1.4)
    else:
        aspect = random.choice([1.414, 1.414, 1.414, 1.294, 1.5, 1.33,
                                random.uniform(1.1, 1.6)])
    h = long_side
    w = int(round(h / aspect))
    if random.random() < 0.12 and kind not in ('receipt',):
        w, h = h, w  # quer
    paper = _paper_colour()
    img = Image.new('RGB', (w, h), tuple(int(c) for c in paper))
    d = ImageDraw.Draw(img)
    ink = random.choice([(20, 20, 20), (30, 30, 40), (10, 30, 90),
                         (60, 60, 60)])
    m = int(min(w, h) * random.uniform(0.05, 0.12))
    s = max(7, int(h * random.uniform(0.014, 0.024)))

    if kind == 'text':
        y = m
        if random.random() < 0.7:
            y = _text_lines(d, m, y, w - m, y + s * 3, int(s * 1.8), ink,
                            ragged=False) + s
        cols = 2 if random.random() < 0.2 else 1
        cw = (w - 2 * m) / cols
        for c in range(cols):
            yy = y
            while yy < h - m - s * 4:
                if random.random() < 0.12:  # Abbildung / Tabelle
                    bh = int(h * random.uniform(0.08, 0.2))
                    col = tuple(int(v) for v in np.random.randint(60, 230, 3))
                    d.rectangle([m + c * cw, yy, m + (c + 1) * cw - s, yy + bh],
                                fill=col if random.random() < 0.6 else None,
                                outline=ink, width=1)
                    yy += bh + s
                else:
                    yy = _text_lines(d, m + c * cw, yy, m + (c + 1) * cw - s,
                                     min(h - m, yy + s * random.randint(4, 14)),
                                     s, ink) + s * 0.8
    elif kind in ('lined', 'grid'):
        line_col = random.choice([(160, 190, 220), (170, 170, 170),
                                  (150, 200, 210), (190, 200, 230)])
        gap = int(h * random.uniform(0.018, 0.03))
        if kind == 'lined':
            for y in range(int(m * 1.5), h - m // 2, gap):
                d.line([(0, y), (w, y)], fill=line_col, width=1)
            if random.random() < 0.7:
                x = int(w * random.uniform(0.1, 0.15))
                d.line([(x, 0), (x, h)], fill=(220, 120, 120), width=2)
        else:
            gap = int(gap * 0.7)
            off = random.randint(0, gap)
            for y in range(off, h, gap):
                d.line([(0, y), (w, y)], fill=line_col, width=1)
            for x in range(off, w, gap):
                d.line([(x, 0), (x, h)], fill=line_col, width=1)
            if random.random() < 0.5:
                d.rectangle([m // 2, m // 2, w - m // 2, h - m // 2],
                            outline=line_col, width=1)
        if random.random() < 0.85:
            pen = random.choice([(20, 40, 140), (20, 20, 20), (40, 40, 160),
                                 (150, 20, 20)])
            _scribble(d, m * 1.3, m * 1.8, w - m * 0.8,
                      h * random.uniform(0.3, 0.95), pen,
                      max(1, int(s / 6)))
        if random.random() < 0.3:  # Spiralbindung / Lochung
            for y in range(int(m), h - m, int(gap * 1.6)):
                d.ellipse([3, y, 3 + s * 0.6, y + s * 0.6], fill=(70, 70, 70))
    elif kind == 'worksheet':
        y = m
        y = _text_lines(d, m, y, w - m, y + s * 4, int(s * 1.5), ink,
                        ragged=False) + s
        n = 1
        while y < h - m - s * 5:
            d.text((m, y), f'{n}.', fill=ink, font=_font(s))
            y = _text_lines(d, m + s * 2, y, w - m,
                            y + s * random.randint(2, 4), s, ink) + s * 0.5
            if random.random() < 0.6:
                bh = s * random.randint(3, 8)
                d.rectangle([m + s * 2, y, w - m, y + bh], outline=ink,
                            width=1)
                if random.random() < 0.5:
                    for yy in range(int(y + s * 1.2), int(y + bh), int(s * 1.2)):
                        d.line([(m + s * 2.5, yy), (w - m - s, yy)],
                               fill=(170, 170, 170), width=1)
                y += bh + s
            n += 1
    elif kind == 'magazine':
        # Bilder bis an den Rand: schwere Fälle (Rand des Blatts = Rand des Bilds)
        y = 0 if random.random() < 0.5 else m
        while y < h - m:
            if random.random() < 0.45:
                bh = int(h * random.uniform(0.15, 0.4))
                x0 = 0 if random.random() < 0.4 else m
                x1 = w if random.random() < 0.4 else w - m
                a = np.random.randint(20, 235, 3)
                b = np.random.randint(20, 235, 3)
                grad = np.linspace(0, 1, max(1, bh))[:, None, None]
                block = (a * (1 - grad) + b * grad)
                block = np.repeat(block, max(1, x1 - x0), axis=1)
                block += np.random.normal(0, 12, block.shape)
                img.paste(Image.fromarray(np.clip(block, 0, 255).astype(np.uint8)),
                          (int(x0), int(y)))
                y += bh + s
            else:
                y = _text_lines(d, m, y, w - m, y + s * random.randint(3, 10),
                                s, ink) + s
    elif kind == 'note':
        _scribble(d, m, m, w - m, h - m, random.choice([(20, 40, 140),
                                                        (20, 20, 20)]),
                  max(1, int(s / 5)))
    elif kind == 'receipt':
        _text_lines(d, m, m, w - m, h - m, int(s * 1.4), (40, 40, 40),
                    spacing=1.3)
    # 'blank' bleibt leer.

    arr = np.asarray(img).astype(np.float32)
    # Papierstruktur und leichte Unregelmäßigkeit.
    arr += np.random.normal(0, random.uniform(0.5, 3), arr.shape[:2])[..., None]
    if random.random() < 0.15:  # Knick / Falte
        x = random.randint(w // 4, 3 * w // 4)
        arr[:, x:x + 2] *= 0.93
    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))


# ---------------------------------------------------------------------------
# Untergründe
# ---------------------------------------------------------------------------


class Textures:
    """Echte Texturen (CC0) aus einem Ordner, falls vorhanden."""

    def __init__(self, folder: str | None):
        self.files = []
        if folder and os.path.isdir(folder):
            for ext in ('jpg', 'jpeg', 'png'):
                self.files += glob.glob(os.path.join(folder, '**', f'*.{ext}'),
                                        recursive=True)
        self._cache: dict[str, Image.Image] = {}

    def sample(self, w: int, h: int) -> Image.Image | None:
        if not self.files:
            return None
        f = random.choice(self.files)
        im = self._cache.get(f)
        if im is None:
            try:
                im = Image.open(f).convert('RGB')
                im.thumbnail((1024, 1024))
            except Exception:
                return None
            if len(self._cache) > 300:
                self._cache.clear()
            self._cache[f] = im
        scale = random.uniform(0.5, 2.0) * max(w / im.width, h / im.height)
        tw, th = max(w, int(im.width * scale)), max(h, int(im.height * scale))
        t = im.resize((tw, th), Image.BILINEAR)
        if random.random() < 0.5:
            t = t.transpose(Image.ROTATE_90).resize((tw, th), Image.BILINEAR)
        x = random.randint(0, tw - w)
        y = random.randint(0, th - h)
        t = t.crop((x, y, x + w, y + h))
        arr = np.asarray(t).astype(np.float32)
        # Helligkeit/Farbe variieren (gleiche Textur, anderer Tisch).
        arr = arr * random.uniform(0.6, 1.35) + random.uniform(-25, 25)
        arr += np.random.uniform(-15, 15, 3)
        return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))


def _noise(h, w, scale):
    sh, sw = max(2, int(h / scale)), max(2, int(w / scale))
    small = np.random.rand(sh, sw).astype(np.float32)
    return np.asarray(Image.fromarray((small * 255).astype(np.uint8))
                      .resize((w, h), Image.BICUBIC)).astype(np.float32) / 255


def procedural_background(w: int, h: int) -> Image.Image:
    kind = random.choices(['wood', 'plain', 'fabric', 'tiles', 'gradient',
                           'marble'], weights=[30, 30, 12, 8, 10, 10])[0]
    if kind == 'wood':
        palette = random.choice([(205, 170, 125), (160, 110, 70), (230, 205, 170),
                                 (110, 70, 45), (235, 225, 210), (190, 150, 110)])
        y, x = np.mgrid[0:h, 0:w].astype(np.float32)
        ang = random.uniform(0, math.pi)
        u = x * math.cos(ang) + y * math.sin(ang)
        v = -x * math.sin(ang) + y * math.cos(ang)
        warp = _noise(h, w, random.uniform(20, 80)) * random.uniform(5, 30)
        rings = np.sin((v + warp) * random.uniform(0.15, 0.6)) * 0.5 + 0.5
        fine = _noise(h, w, 3)
        g = 0.82 + 0.12 * rings + 0.06 * fine
        arr = np.stack([g * c for c in palette], -1)
        if random.random() < 0.4:  # Dielen / Fugen
            period = random.uniform(60, 200)
            seam = (np.abs(((u % period) / period) - 0.5) > 0.49)
            arr[seam] *= 0.6
    elif kind == 'plain':
        base = np.array(random.choice([
            (240, 240, 238), (225, 225, 228), (250, 248, 240), (60, 60, 65),
            (30, 30, 35), (120, 120, 125), (200, 205, 210), (140, 160, 180),
            (90, 110, 80), (180, 60, 50), (40, 60, 110), (215, 200, 180)]),
            np.float32)
        arr = np.ones((h, w, 3), np.float32) * base
        arr += (_noise(h, w, random.uniform(2, 6))[..., None] - 0.5) * \
            random.uniform(4, 20)
    elif kind == 'fabric':
        base = np.random.randint(30, 230, 3).astype(np.float32)
        y, x = np.mgrid[0:h, 0:w].astype(np.float32)
        p = random.uniform(2, 5)
        weave = (np.sin(x / p) * np.sin(y / p)) * 0.5 + 0.5
        arr = base * (0.85 + 0.15 * weave)[..., None]
        arr += (_noise(h, w, 2)[..., None] - 0.5) * 20
    elif kind == 'tiles':
        base = np.random.randint(120, 245, 3).astype(np.float32)
        arr = np.ones((h, w, 3), np.float32) * base
        p = random.randint(30, 120)
        y, x = np.mgrid[0:h, 0:w]
        grout = ((x % p) < 3) | ((y % p) < 3)
        arr[grout] *= random.uniform(0.6, 0.9)
        arr += (_noise(h, w, 4)[..., None] - 0.5) * 12
    elif kind == 'marble':
        base = np.random.randint(150, 250, 3).astype(np.float32)
        n = _noise(h, w, random.uniform(30, 90))
        veins = np.abs(np.sin((n * random.uniform(8, 20)))) ** 8
        arr = base * (1 - 0.35 * veins)[..., None]
    else:
        a = np.random.randint(20, 250, 3).astype(np.float32)
        b = np.random.randint(20, 250, 3).astype(np.float32)
        t = _noise(h, w, max(h, w) / 2)[..., None]
        arr = a * (1 - t) + b * t
    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))


def _clutter(img: Image.Image, avoid_poly):
    """Gegenstände auf dem Tisch: Stifte, Bücher, Handy, weitere Blätter."""
    w, h = img.size
    d = ImageDraw.Draw(img)
    for _ in range(random.choice([0, 0, 1, 2, 3, 4])):
        kinds = ['pen', 'pen', 'book', 'disc', 'phone']
        if avoid_poly is not None:
            kinds.append('paper')
        kind = random.choice(kinds)
        cx, cy = random.uniform(-0.1, 1.1) * w, random.uniform(-0.1, 1.1) * h
        if kind == 'paper':
            # Weitere Blätter nur angeschnitten am Bildrand: Das Hauptblatt
            # ist das, um das es geht.
            if random.random() < 0.5:
                cx = random.choice([-0.15, 1.15]) * w
            else:
                cy = random.choice([-0.15, 1.15]) * h
        ang = random.uniform(0, math.pi)
        if kind == 'pen':
            L, W = random.uniform(0.15, 0.4) * max(w, h), random.uniform(4, 10)
            col = tuple(np.random.randint(0, 255, 3).tolist())
        elif kind == 'book':
            L, W = random.uniform(0.2, 0.5) * max(w, h), random.uniform(0.15, 0.35) * max(w, h)
            col = tuple(np.random.randint(0, 200, 3).tolist())
        elif kind == 'paper':  # weiteres (Teil-)Blatt: Störer
            L, W = random.uniform(0.3, 0.7) * max(w, h), random.uniform(0.2, 0.5) * max(w, h)
            col = tuple(int(c) for c in _paper_colour())
        elif kind == 'phone':
            L, W = 0.25 * max(w, h), 0.12 * max(w, h)
            col = (20, 20, 25)
        else:
            r = random.uniform(0.05, 0.15) * max(w, h)
            d.ellipse([cx - r, cy - r, cx + r, cy + r],
                      fill=tuple(np.random.randint(0, 255, 3).tolist()))
            continue
        c, s = math.cos(ang), math.sin(ang)
        pts = [(cx + dx * c - dy * s, cy + dx * s + dy * c)
               for dx, dy in ((-L / 2, -W / 2), (L / 2, -W / 2),
                              (L / 2, W / 2), (-L / 2, W / 2))]
        d.polygon(pts, fill=col)
        if kind == 'paper' and random.random() < 0.6:
            dd = ImageDraw.Draw(img)
            for k in range(random.randint(2, 8)):  # etwas "Text"
                t = (k + 1) / 10
                p0 = (pts[0][0] + (pts[3][0] - pts[0][0]) * t,
                      pts[0][1] + (pts[3][1] - pts[0][1]) * t)
                p1 = (pts[1][0] + (pts[2][0] - pts[1][0]) * t,
                      pts[1][1] + (pts[2][1] - pts[1][1]) * t)
                dd.line([p0, p1], fill=(60, 60, 60), width=2)


# ---------------------------------------------------------------------------
# Geometrie
# ---------------------------------------------------------------------------


def _homography(src, dst):
    """3x3-Matrix, die src (4 Punkte) auf dst abbildet."""
    A = []
    for (x, y), (u, v) in zip(src, dst):
        A.append([x, y, 1, 0, 0, 0, -u * x, -u * y])
        A.append([0, 0, 0, x, y, 1, -v * x, -v * y])
    b = np.array(dst, np.float64).reshape(-1)
    h = np.linalg.solve(np.array(A, np.float64), b)
    return np.append(h, 1).reshape(3, 3)


def _random_quad(W, H, aspect, cut_ok):
    """Vier Ecken (im Uhrzeigersinn ab links oben) im Bild WxH."""
    for _ in range(50):
        area = random.uniform(0.12, 0.85) if random.random() < 0.85 else \
            random.uniform(0.85, 1.0)
        # Rechteck mit Seitenverhältnis aspect (h/w) und Fläche area*W*H.
        bw = math.sqrt(area * W * H / aspect)
        bh = bw * aspect
        ang = random.gauss(0, 0.25) if random.random() < 0.75 else \
            random.uniform(-math.pi, math.pi)
        cx = W / 2 + random.uniform(-0.25, 0.25) * W
        cy = H / 2 + random.uniform(-0.25, 0.25) * H
        c, s = math.cos(ang), math.sin(ang)
        pts = []
        for dx, dy in ((-bw / 2, -bh / 2), (bw / 2, -bh / 2), (bw / 2, bh / 2),
                       (-bw / 2, bh / 2)):
            pts.append([cx + dx * c - dy * s, cy + dx * s + dy * c])
        pts = np.array(pts)
        # Perspektive: Handy schräg gehalten.
        tilt = random.uniform(0, 0.22) * min(bw, bh)
        pts += np.random.uniform(-tilt, tilt, pts.shape)
        if random.random() < 0.5:  # typische Trapez-Form (oben schmaler)
            k = random.uniform(0, 0.15) * bw
            pts[0, 0] += k
            pts[1, 0] -= k
        inside = np.all((pts[:, 0] >= 0) & (pts[:, 0] < W)
                        & (pts[:, 1] >= 0) & (pts[:, 1] < H))
        if inside or cut_ok:
            # Mindestens die Hälfte des Blatts muss zu sehen sein.
            if cut_ok and not inside:
                xs = np.clip(pts[:, 0], 0, W)
                ys = np.clip(pts[:, 1], 0, H)
                if _poly_area(np.stack([xs, ys], 1)) < 0.5 * _poly_area(pts):
                    continue
            return pts
    return None


def _poly_area(p):
    x, y = p[:, 0], p[:, 1]
    return 0.5 * abs(np.dot(x, np.roll(y, -1)) - np.dot(y, np.roll(x, -1)))


def _warp_page(page: Image.Image, quad, W, H, bend):
    """Blatt ins Bild legen. Liefert RGBA (Alpha = Blatt)."""
    pw, ph = page.size
    src = [(0, 0), (pw, 0), (pw, ph), (0, ph)]
    # PIL braucht die Abbildung Ziel -> Quelle.
    Hm = _homography([tuple(p) for p in quad], src)
    coeffs = (Hm / Hm[2, 2]).reshape(-1)[:8]
    rgba = page.convert('RGBA')
    if bend > 0:
        # Leichte Welle im Papier: Seiten verbiegen sich etwas.
        arr = np.asarray(rgba).copy()
        yy = np.arange(ph)[:, None]
        shift = (np.sin(np.linspace(0, math.pi, pw)) * bend * ph)[None, :]
        src_y = np.clip((yy - shift).round().astype(int), -1, ph)
        valid = (src_y >= 0) & (src_y < ph)
        out = np.zeros_like(arr)
        cols = np.broadcast_to(np.arange(pw)[None, :], src_y.shape)
        out[valid] = arr[src_y[valid], cols[valid]]
        rgba = Image.fromarray(out)
    return rgba.transform((W, H), Image.PERSPECTIVE, coeffs, Image.BILINEAR,
                          fillcolor=(0, 0, 0, 0))


def _quad_mask(quad, W, H, ss=4):
    """Weiche Maske eines Vierecks (Überabtastung für Kantengenauigkeit)."""
    im = Image.new('L', (W * ss, H * ss), 0)
    ImageDraw.Draw(im).polygon([(x * ss, y * ss) for x, y in quad], fill=255)
    return np.asarray(im.resize((W, H), Image.BOX)).astype(np.float32) / 255


def _edge_band(quad, W, H, width):
    im = Image.new('L', (W * 2, H * 2), 0)
    pts = [(x * 2, y * 2) for x, y in quad]
    ImageDraw.Draw(im).line(pts + [pts[0]], fill=255, width=int(width * 2))
    return np.asarray(im.resize((W, H), Image.BOX)).astype(np.float32) / 255


# ---------------------------------------------------------------------------
# Licht und Kamera
# ---------------------------------------------------------------------------


def _lighting(arr):
    h, w = arr.shape[:2]
    # Licht-Verlauf über das ganze Bild.
    g = _noise(h, w, max(h, w) / random.uniform(1, 3))
    arr *= (random.uniform(0.75, 1.0) + random.uniform(0, 0.35) * g)[..., None]
    # Schatten (Handy, Hand, Kopf): weiche dunkle Fläche.
    if random.random() < 0.45:
        sh = Image.new('L', (w, h), 0)
        cx, cy = random.uniform(0, w), random.uniform(0, h)
        r = random.uniform(0.2, 0.8) * max(w, h)
        pts = [(cx + r * math.cos(a) * random.uniform(0.5, 1.2),
                cy + r * math.sin(a) * random.uniform(0.5, 1.2))
               for a in np.linspace(0, 2 * math.pi, 7)[:-1]]
        ImageDraw.Draw(sh).polygon(pts, fill=255)
        sh = sh.filter(ImageFilter.GaussianBlur(random.uniform(2, 0.06 * max(w, h))))
        s = np.asarray(sh).astype(np.float32) / 255
        arr *= (1 - random.uniform(0.2, 0.6) * s)[..., None]
    # Glanz (glattes Papier, Lampe).
    if random.random() < 0.12:
        y, x = np.mgrid[0:h, 0:w]
        cx, cy = random.uniform(0, w), random.uniform(0, h)
        r = random.uniform(0.05, 0.25) * max(w, h)
        spot = np.exp(-((x - cx) ** 2 + (y - cy) ** 2) / (2 * r * r))
        arr += (spot * random.uniform(30, 90))[..., None]
    # Farbstich (Glühbirne, Tageslicht).
    arr *= np.random.uniform(0.88, 1.08, 3)
    # Vignette.
    if random.random() < 0.5:
        y, x = np.mgrid[0:h, 0:w].astype(np.float32)
        r2 = ((x - w / 2) / w) ** 2 + ((y - h / 2) / h) ** 2
        arr *= (1 - random.uniform(0.1, 0.5) * r2)[..., None]
    return arr


def _camera(img: Image.Image) -> Image.Image:
    if random.random() < 0.5:
        img = img.filter(ImageFilter.GaussianBlur(random.uniform(0.3, 1.6)))
    arr = np.asarray(img).astype(np.float32)
    if random.random() < 0.15:  # Verwackeln (waagrecht/senkrecht)
        k = random.randint(2, 5)
        ax = random.choice([0, 1])
        arr = sum(np.roll(arr, i, axis=ax) for i in range(k)) / k
    arr += np.random.normal(0, random.uniform(0, 7), arr.shape)
    gamma = random.uniform(0.8, 1.25)
    arr = 255 * (np.clip(arr, 0, 255) / 255) ** gamma
    img = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))
    if random.random() < 0.7:
        buf = io.BytesIO()
        img.save(buf, 'JPEG', quality=random.randint(35, 92))
        buf.seek(0)
        img = Image.open(buf).convert('RGB')
    return img


def _fingers(img: Image.Image, quad):
    """Finger, die das Blatt am Rand halten (verdecken Ecken/Kanten)."""
    d = ImageDraw.Draw(img)
    skin = random.choice([(224, 172, 140), (198, 134, 100), (141, 85, 60),
                          (240, 200, 170)])
    for _ in range(random.randint(1, 3)):
        i = random.randint(0, 3)
        t = random.uniform(0.1, 0.9)
        p = quad[i] + (quad[(i + 1) % 4] - quad[i]) * t
        r = random.uniform(0.03, 0.07) * max(img.size)
        ang = random.uniform(0, math.pi)
        dx, dy = math.cos(ang) * r * 2.5, math.sin(ang) * r * 2.5
        for k in range(8):
            q = (p[0] + dx * k / 8, p[1] + dy * k / 8)
            d.ellipse([q[0] - r, q[1] - r, q[0] + r, q[1] + r], fill=skin)


# ---------------------------------------------------------------------------
# Ein Beispiel
# ---------------------------------------------------------------------------


class Generator:
    def __init__(self, size: int = 192, out_scale: int = 2,
                 textures: str | None = None, page_pool: int = 200,
                 render: float = 1.5):
        """size: Eingangsgröße (quadratisch), out_scale: Ziel ist size/out_scale.

        render: interne Überabtastung (Bild wird größer erzeugt und dann
        verkleinert, wie bei einer echten Kamera).
        """
        self.size = size
        self.out = size // out_scale
        self.render = render
        self.textures = Textures(textures)
        self.pool: list[Image.Image] = []
        self.pool_size = page_pool

    def _page(self):
        if len(self.pool) < self.pool_size or random.random() < 0.05:
            p = render_page(random.choice([480, 640, 800]))
            if len(self.pool) >= self.pool_size:
                self.pool[random.randrange(len(self.pool))] = p
            else:
                self.pool.append(p)
            return p
        p = random.choice(self.pool)
        r = random.random()
        if r < 0.25:
            p = p.transpose(Image.ROTATE_180)
        elif r < 0.35:
            p = p.transpose(Image.FLIP_LEFT_RIGHT)
        return p

    def sample(self):
        """(Bild size x size x 3 uint8, Maske out x out float, Rand, Ecken)"""
        # Kamerabild hat ein Seitenverhältnis (3:4, 9:16, ...); das Netz sieht
        # es auf ein Quadrat gestaucht, wie später in der App.
        ar = random.choice([4 / 3, 16 / 9, 1.0, 3 / 4, 9 / 16])
        base = int(self.size * self.render)
        W = int(base * (ar if ar > 1 else 1) * random.uniform(1.0, 1.2))
        H = int(W / ar)
        no_doc = random.random() < 0.04
        tex = self.textures.sample(W, H) if random.random() < 0.6 else None
        bg = tex or procedural_background(W // 2, H // 2).resize(
            (W, H), Image.BILINEAR)
        quad = None
        if not no_doc:
            page = self._page()
            aspect = page.size[1] / page.size[0]
            quad = _random_quad(W, H, aspect, cut_ok=random.random() < 0.2)
        if quad is not None:
            _clutter(bg, quad)
            bend = random.uniform(0, 0.02) if random.random() < 0.3 else 0
            layer = _warp_page(page, quad, W, H, bend)
            # Leichter Schlagschatten unter dem Blatt (Papierdicke).
            if random.random() < 0.6:
                a = layer.split()[-1].filter(
                    ImageFilter.GaussianBlur(random.uniform(1, 4)))
                off = (random.randint(-3, 3), random.randint(0, 4))
                shadow = np.asarray(a).astype(np.float32) / 255
                shadow = np.roll(shadow, off, axis=(0, 1))
                arr = np.asarray(bg).astype(np.float32)
                arr *= (1 - random.uniform(0.1, 0.4) * shadow)[..., None]
                bg = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))
            bg.paste(layer, (0, 0), layer)
            if random.random() < 0.12:
                _fingers(bg, quad)
        else:
            _clutter(bg, None)
        img = bg.resize((self.size, self.size), Image.BILINEAR)
        arr = _lighting(np.asarray(img).astype(np.float32))
        img = _camera(Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8)))
        o = self.out
        if quad is None:
            mask = np.zeros((o, o), np.float32)
            edge = np.zeros((o, o), np.float32)
            corners = None
        else:
            q = quad * np.array([o / W, o / H])
            mask = _quad_mask(q, o, o)
            edge = _edge_band(q, o, o, 2.0)
            corners = quad * np.array([1 / W, 1 / H])  # relativ 0..1
        return np.asarray(img), mask, edge, corners


if __name__ == '__main__':
    import sys
    import time
    out = sys.argv[1] if len(sys.argv) > 1 else 'synth_preview.jpg'
    tex = sys.argv[2] if len(sys.argv) > 2 else None
    g = Generator(textures=tex)
    t0 = time.time()
    tiles = []
    for i in range(48):
        img, mask, edge, corners = g.sample()
        m = np.asarray(Image.fromarray((mask * 255).astype(np.uint8))
                       .resize(img.shape[1::-1]))
        vis = img.copy()
        vis[..., 0] = np.maximum(vis[..., 0], (m > 128) * 0)  # unverändert
        if corners is not None:
            im = Image.fromarray(vis)
            pts = [(x * img.shape[1], y * img.shape[0]) for x, y in corners]
            ImageDraw.Draw(im).line(pts + [pts[0]], fill=(255, 0, 0), width=1)
            vis = np.asarray(im)
        tiles.append(vis)
    dt = (time.time() - t0) / 48
    rows = [np.concatenate(tiles[r * 8:(r + 1) * 8], 1) for r in range(6)]
    Image.fromarray(np.concatenate(rows, 0)).save(out, quality=90)
    print(f'{dt * 1000:.1f} ms/Beispiel -> {out}')
