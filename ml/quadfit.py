"""Aus der Blatt-Maske des Netzes ein Viereck machen (wie später in Dart).

1. Größte zusammenhängende Fläche über 0.5.
2. Konvexe Hülle, daraus das Viereck mit der größten Fläche.
3. Jede Seite genauer: Randpunkte der Maske (Untergenauigkeit über den
   0.5-Übergang) nahe der Seite, Gerade durch sie legen, Ecken = Schnittpunkte.
"""

from __future__ import annotations

import numpy as np


def largest_component(binary: np.ndarray) -> np.ndarray:
    h, w = binary.shape
    labels = np.zeros((h, w), np.int32)
    best, best_size, cur = 0, 0, 0
    for y in range(h):
        for x in range(w):
            if binary[y, x] and labels[y, x] == 0:
                cur += 1
                stack = [(y, x)]
                labels[y, x] = cur
                size = 0
                while stack:
                    cy, cx = stack.pop()
                    size += 1
                    for ny, nx in ((cy - 1, cx), (cy + 1, cx), (cy, cx - 1),
                                   (cy, cx + 1)):
                        if 0 <= ny < h and 0 <= nx < w and binary[ny, nx] \
                                and labels[ny, nx] == 0:
                            labels[ny, nx] = cur
                            stack.append((ny, nx))
                if size > best_size:
                    best, best_size = cur, size
    return labels == best if best else np.zeros_like(binary, bool)


def convex_hull(points: np.ndarray) -> np.ndarray:
    pts = sorted(set(map(tuple, points.tolist())))
    if len(pts) < 3:
        return np.array(pts, float)

    def cross(o, a, b):
        return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])

    lower, upper = [], []
    for p in pts:
        while len(lower) >= 2 and cross(lower[-2], lower[-1], p) <= 0:
            lower.pop()
        lower.append(p)
    for p in reversed(pts):
        while len(upper) >= 2 and cross(upper[-2], upper[-1], p) <= 0:
            upper.pop()
        upper.append(p)
    return np.array(lower[:-1] + upper[:-1], float)


def poly_area(p: np.ndarray) -> float:
    x, y = p[:, 0], p[:, 1]
    return 0.5 * abs(np.dot(x, np.roll(y, -1)) - np.dot(y, np.roll(x, -1)))


def max_area_quad(hull: np.ndarray) -> np.ndarray | None:
    """Viereck aus Hüllen-Ecken mit größter Fläche (Hülle vorher ausdünnen)."""
    n = len(hull)
    if n < 4:
        return None
    if n > 40:  # ausdünnen, sonst O(n^4)
        idx = np.linspace(0, n, 40, endpoint=False).astype(int)
        hull = hull[idx]
        n = 40
    best, best_q = -1.0, None
    for a in range(n):
        for c in range(a + 2, n):
            # Für feste Diagonale a-c: b und d unabhängig maximieren.
            pa, pc = hull[a], hull[c]
            dx, dy = pc - pa

            def dist(i):
                return (hull[i][0] - pa[0]) * dy - (hull[i][1] - pa[1]) * dx

            bs = range(a + 1, c)
            ds = [i for i in range(n) if i > c or i < a]
            if not ds:
                continue
            b = max(bs, key=lambda i: abs(dist(i)))
            d = max(ds, key=lambda i: abs(dist(i)))
            area = (abs(dist(b)) + abs(dist(d))) / 2
            if area > best:
                best, best_q = area, np.array([hull[a], hull[b], hull[c],
                                               hull[d]])
    return best_q


def boundary_points(prob: np.ndarray, region: np.ndarray) -> np.ndarray:
    """Untergenaue 0.5-Übergänge der Maske nahe der Fläche."""
    pts = []
    h, w = prob.shape
    # Fläche etwas ausdehnen, damit Übergänge außen mitzählen.
    grown = region.copy()
    grown[1:] |= region[:-1]
    grown[:-1] |= region[1:]
    grown[:, 1:] |= region[:, :-1]
    grown[:, :-1] |= region[:, 1:]
    a, b = prob[:, :-1], prob[:, 1:]
    ys, xs = np.nonzero(((a - 0.5) * (b - 0.5) < 0) & (grown[:, :-1] | grown[:, 1:]))
    t = (0.5 - a[ys, xs]) / (b[ys, xs] - a[ys, xs])
    pts.append(np.stack([xs + t + 0.5, ys + 0.5], 1))
    a, b = prob[:-1], prob[1:]
    ys, xs = np.nonzero(((a - 0.5) * (b - 0.5) < 0) & (grown[:-1] | grown[1:]))
    t = (0.5 - a[ys, xs]) / (b[ys, xs] - a[ys, xs])
    pts.append(np.stack([xs + 0.5, ys + t + 0.5], 1))
    return np.concatenate(pts, 0)


def fit_line(p: np.ndarray):
    c = p.mean(0)
    u, s, vt = np.linalg.svd(p - c)
    d = vt[0]
    return c, d


def intersect(l1, l2):
    (c1, d1), (c2, d2) = l1, l2
    m = np.array([d1, -d2]).T
    if abs(np.linalg.det(m)) < 1e-9:
        return None
    t = np.linalg.solve(m, c2 - c1)
    return c1 + t[0] * d1


def order_corners(q: np.ndarray) -> np.ndarray:
    """Im Uhrzeigersinn ab links oben (Bildkoordinaten, y nach unten)."""
    c = q.mean(0)
    ang = np.arctan2(q[:, 1] - c[1], q[:, 0] - c[0])
    q = q[np.argsort(ang)]
    start = np.argmin(q[:, 0] + q[:, 1])
    return np.roll(q, -start, axis=0)


def quad_from_mask(prob: np.ndarray, min_area: float = 0.02):
    """prob: HxW Werte 0..1. Ergebnis: 4x2 in Pixeln der Maske oder None."""
    h, w = prob.shape
    region = largest_component(prob > 0.5)
    if region.sum() < min_area * h * w:
        return None
    ys, xs = np.nonzero(region)
    # Pixel-Ecken, damit die Hülle die Fläche umschließt.
    corners = np.concatenate([np.stack([xs, ys], 1),
                              np.stack([xs + 1, ys], 1),
                              np.stack([xs, ys + 1], 1),
                              np.stack([xs + 1, ys + 1], 1)])
    hull = convex_hull(corners)
    quad = max_area_quad(hull)
    if quad is None:
        return None
    quad = order_corners(quad)
    pts = boundary_points(prob, region)
    lines = []
    for i in range(4):
        a, b = quad[i], quad[(i + 1) % 4]
        d = b - a
        L = np.hypot(*d)
        if L < 2:
            return order_corners(quad)
        n = np.array([-d[1], d[0]]) / L
        rel = pts - a
        along = rel @ (d / L)
        off = np.abs(rel @ n)
        sel = (along > 0.15 * L) & (along < 0.85 * L) & (off < max(1.5, 0.04 * L))
        if sel.sum() >= 4:
            lines.append(fit_line(pts[sel]))
        else:
            lines.append((a, d / L))
    out = []
    for i in range(4):
        p = intersect(lines[i - 1], lines[i])
        if p is None or np.hypot(*(p - quad[i])) > 0.25 * max(h, w):
            p = quad[i]
        out.append(p)
    return order_corners(np.array(out))


def quad_iou(q1: np.ndarray, q2: np.ndarray, size: int = 256) -> float:
    """IoU zweier Vierecke (Koordinaten relativ 0..1), gerastert."""
    from PIL import Image, ImageDraw

    def raster(q):
        im = Image.new('1', (size, size), 0)
        ImageDraw.Draw(im).polygon([(x * size, y * size) for x, y in q], fill=1)
        return np.asarray(im)

    a, b = raster(q1), raster(q2)
    union = (a | b).sum()
    return float((a & b).sum() / union) if union else 1.0
