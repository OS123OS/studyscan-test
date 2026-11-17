"""Handy-Kamera-Effekte für Studio-Fotos."""
import io, math, random
import numpy as np
from PIL import Image, ImageFilter


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
