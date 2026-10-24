"""Daten für das Training holen (läuft in der GitHub-Action).

1. Texturen für Untergründe: CC0 (ambientCG, Poly Haven).
2. Echte Fotos: SmartDoc 2015 Challenge 1 (CC BY 4.0, Burie et al., ICDAR
   2015). Hintergründe 1-3 zum Üben, 4-5 nur zum Prüfen.
"""

from __future__ import annotations

import csv
import gzip
import io
import json
import os
import random
import sys
import tarfile
import time
import urllib.request
import zipfile
from concurrent.futures import ThreadPoolExecutor, TimeoutError, as_completed

from PIL import Image

UA = {'User-Agent': 'studyscan-training/1.0'}
SMARTDOC = ('https://github.com/jchazalon/smartdoc15-ch1-dataset/releases/'
            'download/v2.0.0/frames.tar.gz')


def get(url, timeout=120):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read()


def _urls(obj, pattern):
    if isinstance(obj, dict):
        for v in obj.values():
            yield from _urls(v, pattern)
    elif isinstance(obj, list):
        for v in obj:
            yield from _urls(v, pattern)
    elif isinstance(obj, str) and pattern in obj and obj.startswith('http'):
        yield obj


# Höchstens so lange Texturen laden (der Rest des Trainings wartet).
TEXTURE_SECONDS = 360


def _deadline_pool(jobs, seconds):
    """Führt jobs (Funktionen ohne Argumente) parallel aus, bis die Zeit um
    ist. Gibt die Zahl der erfolgreichen Jobs zurück."""
    start = time.time()
    ok = 0
    pool = ThreadPoolExecutor(8)
    futures = [pool.submit(j) for j in jobs]
    try:
        for f in as_completed(futures, timeout=seconds):
            try:
                ok += 1 if f.result() else 0
            except Exception as e:  # noqa
                print('Fehler:', e)
    except TimeoutError:
        print(f'Zeit um nach {time.time() - start:.0f} s')
    for f in futures:
        f.cancel()
    pool.shutdown(wait=False, cancel_futures=True)
    return ok


def textures_ambientcg(out, per_category=6, seconds=TEXTURE_SECONDS):
    cats = ['Wood', 'WoodFloor', 'Planks', 'Fabric', 'Carpet', 'Tiles',
            'Marble', 'Plastic', 'Leather', 'Concrete', 'Paint', 'Terrazzo',
            'Granite', 'Laminate', 'Cardboard', 'Wicker', 'Metal']
    start = time.time()
    links = []
    for cat in cats:
        if time.time() - start > seconds / 3:
            break
        try:
            data = json.loads(get(
                'https://ambientcg.com/api/v2/full_json?type=Material'
                f'&category={cat}&limit={per_category}&include=downloadData'
                '&sort=Popular', timeout=30))
        except Exception as e:  # noqa
            print('ambientCG', cat, e)
            continue
        for asset in data.get('foundAssets', []):
            found = [u for u in _urls(asset, '1K-JPG.zip')]
            if not found and asset.get('assetId'):
                found = ['https://ambientcg.com/get?file='
                         f'{asset["assetId"]}_1K-JPG.zip']
            if found:
                links.append((cat, found[0]))
    print('ambientCG Links:', len(links), f'{time.time() - start:.0f} s')

    def job(k, cat, url):
        def run():
            z = zipfile.ZipFile(io.BytesIO(get(url, timeout=40)))
            for name in z.namelist():
                if name.lower().endswith(('_color.jpg', '_color.png')):
                    im = Image.open(io.BytesIO(z.read(name))).convert('RGB')
                    im.save(os.path.join(out, f'acg_{cat}_{k}.jpg'),
                            quality=90)
                    return True
            return False
        return run

    rest = max(30, seconds - (time.time() - start))
    return _deadline_pool([job(k, c, u) for k, (c, u) in enumerate(links)],
                          rest)


def textures_polyhaven(out, limit=80, seconds=TEXTURE_SECONDS / 2):
    try:
        assets = json.loads(get('https://api.polyhaven.com/assets?t=textures',
                                timeout=30))
    except Exception as e:  # noqa
        print('polyhaven', e)
        return 0
    keys = list(assets.keys())
    random.Random(3).shuffle(keys)
    keys = [k for k in keys
            if any(c in assets[k].get('categories', [])
                   for c in ('wood', 'fabric', 'floor', 'plaster',
                             'concrete', 'man made', 'clean'))][:limit]

    def job(key):
        def run():
            files = json.loads(get(f'https://api.polyhaven.com/files/{key}',
                                   timeout=30))
            diff = files.get('Diffuse') or files.get('diff') or {}
            url = diff['1k']['jpg']['url']
            im = Image.open(io.BytesIO(get(url, timeout=40))).convert('RGB')
            im.save(os.path.join(out, f'ph_{key}.jpg'), quality=90)
            return True
        return run

    return _deadline_pool([job(k) for k in keys], seconds)


def smartdoc(train_dir, eval_dir, train_step=4, eval_step=5, long_side=384):
    os.makedirs(train_dir, exist_ok=True)
    os.makedirs(eval_dir, exist_ok=True)
    tmp = 'frames.tar.gz'
    if not os.path.exists(tmp):
        urllib.request.urlretrieve(SMARTDOC, tmp)
    meta = None
    with tarfile.open(tmp, 'r:gz') as tar:
        for m in tar:
            if m.name.endswith('metadata.csv.gz'):
                meta = list(csv.DictReader(io.TextIOWrapper(
                    gzip.open(tar.extractfile(m)), 'utf-8')))
                break
    rows = {}
    for r in meta:
        bg = int(r['bg_name'][-2:])
        idx = int(r['frame_index'])
        if bg <= 3 and idx % train_step == 0:
            rows[r['image_path']] = ('train', r)
        elif bg >= 4 and idx % eval_step == 0:
            rows[r['image_path']] = ('eval', r)
    labels = {'train': {}, 'eval': {}}
    with tarfile.open(tmp, 'r:gz') as tar:
        for m in tar:
            key = None
            for k in (m.name, m.name.split('/', 1)[-1]):
                if k in rows:
                    key = k
            if key is None:
                continue
            split, r = rows[key]
            im = Image.open(tar.extractfile(m)).convert('RGB')
            W, H = im.size
            s = long_side / max(W, H)
            im = im.resize((round(W * s), round(H * s)), Image.BILINEAR)
            name = key.replace('/', '_')
            im.save(os.path.join(train_dir if split == 'train' else eval_dir,
                                 name), quality=88)
            q = [[float(r['tl_x']) / W, float(r['tl_y']) / H],
                 [float(r['tr_x']) / W, float(r['tr_y']) / H],
                 [float(r['br_x']) / W, float(r['br_y']) / H],
                 [float(r['bl_x']) / W, float(r['bl_y']) / H]]
            labels[split][name] = q
    for split, d in (('train', train_dir), ('eval', eval_dir)):
        json.dump(labels[split], open(os.path.join(d, 'labels.json'), 'w'))
    os.remove(tmp)
    return len(labels['train']), len(labels['eval'])


if __name__ == '__main__':
    what = sys.argv[1]
    if what == 'textures':
        out = sys.argv[2]
        os.makedirs(out, exist_ok=True)
        a = textures_ambientcg(out)
        b = textures_polyhaven(out)
        print(f'Texturen: ambientCG {a}, Poly Haven {b}')
    elif what == 'smartdoc':
        print('SmartDoc (Übung, Prüfung):', smartdoc(sys.argv[2], sys.argv[3]))
