"""Studio-Fotos als Trainingsfotos (wie SmartDoc): <ordner>/studio_<name>.jpg
und Ecken in labels.json ergänzen.

python3 to_real.py <render-ordner> <real_train-ordner>
"""
import glob, json, os, random, sys
from PIL import Image

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import importlib.util
spec = importlib.util.spec_from_file_location('gl_prep_fx', os.path.join(os.path.dirname(os.path.abspath(__file__)), 'camera_fx.py'))
fx = importlib.util.module_from_spec(spec); spec.loader.exec_module(fx)

src, dst = sys.argv[1], sys.argv[2]
random.seed(5)
os.makedirs(dst, exist_ok=True)
lp = os.path.join(dst, 'labels.json')
labels = json.load(open(lp)) if os.path.exists(lp) else {}
n = 0
for f in sorted(glob.glob(os.path.join(src, 'meta_*.json'))):
    for m in json.load(open(f)):
        if m['quad'] is None:
            continue
        im = Image.open(os.path.join(src, m['name'] + '.png')).convert('RGB')
        W, H = im.size
        im = fx.camera(im)
        name = f"studio_{m['name']}.jpg"
        im.save(os.path.join(dst, name), quality=90)
        labels[name] = [[x / W, y / H] for x, y in m['quad']]
        n += 1
json.dump(labels, open(lp, 'w'))
print('Studio-Fotos fürs Training:', n, '– echte Fotos insgesamt:', len(labels))
