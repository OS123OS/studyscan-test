// node render.js <ausgabe-ordner> <von> <bis> [nodoc-Anteil]
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
(async () => {
  const [out, from, to, nodocShare] = [process.argv[2], +process.argv[3], +process.argv[4], +(process.argv[5] || 0)];
  fs.mkdirSync(out, { recursive: true });
  // Hängt ein Bild (Lauf 15 blieb stehen), startet der Browser neu und das
  // Bild wird übersprungen, statt dass der ganze Lauf stehen bleibt.
  const perImage = (+(process.env.STUDIO_IMAGE_SECONDS || 60)) * 1000;
  const within = (promise, ms, fallback) => {
    let timer;
    return Promise.race([
      promise.finally(() => clearTimeout(timer)),
      new Promise((resolve) => { timer = setTimeout(() => resolve(fallback), ms); }),
    ]);
  };
  let browser = null, page = null;
  async function open() {
    if (browser) await within(browser.close().catch(() => {}), 15000, null);
    browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--disable-gpu-sandbox'] });
    page = await browser.newPage({ viewport: { width: 400, height: 400 } });
    page.on('console', (m) => { if (m.type() === 'error') console.error('Seite:', m.text()); });
    page.on('pageerror', (e) => console.error('Fehler:', e.message));
    await page.goto('file://' + path.resolve(__dirname, 'studio.html'));
  }
  await open();
  const meta = [];
  const metaFile = path.join(out, `meta_${from}_${to}.json`);
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
    const r = await within(
      page.evaluate(([s, w, h, nd, dev]) => window.renderScene(s, w, h, { nodoc: nd, device: dev }), [i, ar[0], ar[1], nodoc, process.env.STUDIO_DEVICE || null])
        .catch((e) => { console.error(i, 'Fehler beim Rendern:', e.message); return 'error'; }),
      perImage, 'timeout');
    if (r === 'timeout' || r === 'error') {
      console.log(i, r === 'timeout' ? 'hängt, Browser neu' : 'Fehler, Browser neu');
      await open();
      continue;
    }
    if (!r) { console.log(i, 'übersprungen'); continue; }
    const name = `gl${String(i).padStart(4, '0')}`;
    fs.writeFileSync(path.join(out, name + '.png'), Buffer.from(r.png.split(',')[1], 'base64'));
    meta.push({ name, quad: r.quad, kind: r.kind, stack: r.stack, size: ar });
    console.log(i, r.kind, r.stack, Date.now() - t0, 'ms');
    // Zwischendurch sichern, damit bei einem Abbruch die fertigen Bilder zählen.
    if (meta.length % 100 === 0) fs.writeFileSync(metaFile, JSON.stringify(meta));
  }
  fs.writeFileSync(metaFile, JSON.stringify(meta));
  await within(browser.close().catch(() => {}), 15000, null);
  process.exit(0);
})();
