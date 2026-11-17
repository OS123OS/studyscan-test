// node render.js <ausgabe-ordner> <von> <bis> [nodoc-Anteil]
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
(async () => {
  const [out, from, to, nodocShare] = [process.argv[2], +process.argv[3], +process.argv[4], +(process.argv[5] || 0)];
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--disable-gpu-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 400, height: 400 } });
  page.on('console', (m) => { if (m.type() === 'error') console.error('Seite:', m.text()); });
  page.on('pageerror', (e) => console.error('Fehler:', e.message));
  await page.goto('file://' + path.resolve(__dirname, 'studio.html'));
  const meta = [];
  // STUDIO_SCALE: kleinere Bilder (fürs Training), STUDIO_SECONDS: Zeitlimit.
  const scale = +(process.env.STUDIO_SCALE || 1);
  const deadline = Date.now() + (+(process.env.STUDIO_SECONDS || 0) || 1e9) * 1000;
  for (let i = from; i < to; i++) {
    if (Date.now() > deadline) { console.log('Zeit um bei', i); break; }
    // Seitenverhältnis wie Handyfotos: meist hochkant 3:4, auch 9:16 und quer
    const ar = [[1200, 1600], [1200, 1600], [1200, 1600], [900, 1600], [1600, 1200], [1600, 900]][i % 6]
      .map((v) => Math.round(v * scale));
    const nodoc = ((i * 2654435761) % 1000) / 1000 < nodocShare;
    const t0 = Date.now();
    const r = await page.evaluate(([s, w, h, nd]) => window.renderScene(s, w, h, { nodoc: nd }), [i, ar[0], ar[1], nodoc]);
    if (!r) { console.log(i, 'übersprungen'); continue; }
    const name = `gl${String(i).padStart(4, '0')}`;
    fs.writeFileSync(path.join(out, name + '.png'), Buffer.from(r.png.split(',')[1], 'base64'));
    meta.push({ name, quad: r.quad, kind: r.kind, stack: r.stack, size: ar });
    console.log(i, r.kind, r.stack, Date.now() - t0, 'ms');
  }
  fs.writeFileSync(path.join(out, `meta_${from}_${to}.json`), JSON.stringify(meta));
  await browser.close();
})();
