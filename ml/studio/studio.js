// 3D-Fotostudio für Testfotos der Kantenerkennung (StudyScan).
//
// Baut mit WebGL2 eine Szene: Tisch (prozedurale Muster), Blattstapel mit
// echter Wölbung, Dinge (Bücher, Stifte, Tassen, Handy, Laptop), Finger,
// gerichtetes Licht mit weichem Schatten, Schatten des Fotografen, Glanz.
// Die Blätter bekommen Inhalt aus einem 2D-Canvas (Text, Linien, Karos,
// Formulare, Folien, Magazin, Kassenzettel, Notizen).
//
// window.renderScene(seed, W, H, opts) → {png, quad, kind}
// quad: Ecken des obersten Blatts in Pixeln (amodal), oder null (kein Blatt).
'use strict';

// ---------------------------------------------------------------- Zufall
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
let R = mulberry32(1);
const rnd = (a = 0, b = 1) => a + (b - a) * R();
const rint = (a, b) => Math.floor(rnd(a, b + 1));
const pick = (arr) => arr[Math.floor(R() * arr.length)];
const chance = (p) => R() < p;
function weighted(pairs) {
  let s = 0; for (const [, w] of pairs) s += w;
  let x = R() * s;
  for (const [v, w] of pairs) { x -= w; if (x <= 0) return v; }
  return pairs[pairs.length - 1][0];
}

// ---------------------------------------------------------------- Mathe
const V = {
  add: (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]],
  sub: (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]],
  mul: (a, s) => [a[0] * s, a[1] * s, a[2] * s],
  dot: (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2],
  cross: (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]],
  norm: (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; },
};
// Spaltenweise 4x4 (wie WebGL).
function mat4mul(a, b) {
  const o = new Float32Array(16);
  for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) {
    let s = 0; for (let k = 0; k < 4; k++) s += a[k * 4 + r] * b[c * 4 + k];
    o[c * 4 + r] = s;
  }
  return o;
}
function perspective(fovy, aspect, near, far) {
  const f = 1 / Math.tan(fovy / 2), nf = 1 / (near - far);
  return new Float32Array([f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) * nf, -1, 0, 0, 2 * far * near * nf, 0]);
}
function ortho(l, r, b, t, n, f) {
  return new Float32Array([2 / (r - l), 0, 0, 0, 0, 2 / (t - b), 0, 0, 0, 0, -2 / (f - n), 0,
    -(r + l) / (r - l), -(t + b) / (t - b), -(f + n) / (f - n), 1]);
}
function lookAt(eye, target, up) {
  const z = V.norm(V.sub(eye, target)), x = V.norm(V.cross(up, z)), y = V.cross(z, x);
  return new Float32Array([x[0], y[0], z[0], 0, x[1], y[1], z[1], 0, x[2], y[2], z[2], 0,
    -V.dot(x, eye), -V.dot(y, eye), -V.dot(z, eye), 1]);
}
function project(m, p) {
  const x = m[0] * p[0] + m[4] * p[1] + m[8] * p[2] + m[12];
  const y = m[1] * p[0] + m[5] * p[1] + m[9] * p[2] + m[13];
  const w = m[3] * p[0] + m[7] * p[1] + m[11] * p[2] + m[15];
  return [x / w, y / w, w];
}

// ---------------------------------------------------------------- Inhalt der Blätter
const FONTS_SERIF = ['DejaVu Serif', 'Liberation Serif', 'FreeSerif', 'Bitstream Charter', 'Caladea'];
const FONTS_SANS = ['DejaVu Sans', 'Liberation Sans', 'FreeSans', 'Inter', 'Carlito'];
const FONTS_MONO = ['DejaVu Sans Mono', 'Liberation Mono', 'FreeMono', 'JetBrains Mono', 'Courier 10 Pitch'];
const WORDS = ('der die das und ist nicht ein eine zu den mit von sich auf für dem Aufgabe Lösung Beispiel ' +
  'Mathematik Deutsch Englisch Biologie Chemie Physik Geschichte Funktion Gleichung Tabelle Seite Kapitel ' +
  'Zusammenfassung Definition Beweis Satz Formel Wert Ergebnis daher Zelle Energie Photosynthese Kraft ' +
  'Revolution Gedicht Analyse because the of and to in is that for it as with was on are learning ' +
  'vocabulary grammar Vokabeln Übung Hausübung Test Schularbeit Prüfung 2026 3,5 x² f(x)=12 % (a) (b) 1. 2. → •').split(' ');
const words = (n) => Array.from({ length: n }, () => pick(WORDS)).join(' ');

function paperColour(kind) {
  if (kind === 'colored') return pick(['#f7ef9a', '#f9c9d6', '#c9e4f6', '#cdeec4', '#ffd8a8', '#e3d4f5']);
  if (kind === 'receipt') return `rgb(${rint(236, 250)},${rint(236, 250)},${rint(232, 246)})`;
  const r = R();
  if (r < 0.7) { const v = rint(236, 255); return `rgb(${v},${v},${Math.max(0, v - rint(0, 6))})`; }
  if (r < 0.88) return `rgb(${rint(238, 250)},${rint(230, 244)},${rint(208, 228)})`; // cremig
  const v = rint(205, 228); return `rgb(${v},${v},${v - rint(0, 8)})`; // Umweltpapier
}

function ink() { return weighted([['#1b1b1f', 6], ['#202a6b', 2], ['#3a3a3a', 2], ['#0b3d91', 1]]); }

function textBlock(g, x0, y0, x1, y1, size, font, colour) {
  g.fillStyle = colour; g.font = `${size}px "${font}"`;
  let y = y0 + size;
  while (y < y1) {
    let line = '', x = x0;
    const end = chance(0.15) ? x0 + (x1 - x0) * rnd(0.3, 0.8) : x1;
    while (true) {
      const w = pick(WORDS) + ' ';
      const ww = g.measureText(w).width;
      if (x + ww > end) break;
      line += w; x += ww;
    }
    g.fillText(line, x0, y);
    y += size * rnd(1.35, 1.7);
    if (chance(0.08)) y += size * 1.2; // Absatz
  }
}

function handwriting(g, x0, y0, x1, y1, lineH, colour) {
  g.strokeStyle = colour; g.lineWidth = rnd(1.2, 2.6); g.lineCap = 'round';
  for (let y = y0 + lineH * 0.8; y < y1; y += lineH) {
    if (chance(0.15)) continue;
    let x = x0 + rnd(0, 20);
    const end = x1 - rnd(0, (x1 - x0) * 0.4);
    while (x < end) {
      const wlen = rnd(20, 90);
      g.beginPath(); g.moveTo(x, y);
      for (let t = 0; t < wlen; t += rnd(4, 9)) {
        g.quadraticCurveTo(x + t + 3, y - rnd(2, lineH * 0.55), x + t + rnd(4, 8), y + rnd(-2, 3));
      }
      g.stroke(); x += wlen + rnd(8, 20);
    }
  }
}

function photoBlock(g, x, y, w, h) {
  const grd = g.createLinearGradient(x, y, x + w, y + h);
  const c = () => `hsl(${rint(0, 360)},${rint(20, 70)}%,${rint(15, 70)}%)`;
  grd.addColorStop(0, c()); grd.addColorStop(1, c());
  g.fillStyle = grd; g.fillRect(x, y, w, h);
  for (let i = 0; i < 6; i++) {
    g.fillStyle = `hsla(${rint(0, 360)},50%,${rint(20, 80)}%,0.5)`;
    g.beginPath(); g.arc(x + rnd(0, w), y + rnd(0, h), rnd(5, Math.min(w, h) / 2), 0, 7); g.fill();
  }
}

/** Inhalt eines Blatts (Canvas in Pixeln, Seitenverhältnis wie das Blatt). */
function renderPage(kind, pw, ph) {
  const c = document.createElement('canvas');
  c.width = pw; c.height = ph;
  const g = c.getContext('2d');
  g.fillStyle = paperColour(kind); g.fillRect(0, 0, pw, ph);
  // leichte Unregelmäßigkeit im Papier
  for (let i = 0; i < 30; i++) {
    g.fillStyle = `rgba(${chance(0.5) ? '0,0,0' : '255,255,255'},${rnd(0.005, 0.025)})`;
    g.beginPath(); g.arc(rnd(0, pw), rnd(0, ph), rnd(pw * 0.05, pw * 0.4), 0, 7); g.fill();
  }
  const m = pw * rnd(0.06, 0.12), u = pw / 100;
  const col = ink();
  switch (kind) {
    case 'text': case 'colored': {
      const font = pick(chance(0.5) ? FONTS_SERIF : FONTS_SANS);
      g.fillStyle = col; g.font = `bold ${u * rnd(3.5, 5.5)}px "${pick(FONTS_SANS)}"`;
      g.fillText(words(rint(2, 5)), m, m + u * 5);
      const cols = chance(0.25) ? 2 : 1, gap = u * 4, cw = (pw - 2 * m - gap * (cols - 1)) / cols;
      for (let k = 0; k < cols; k++) textBlock(g, m + k * (cw + gap), m + u * 9, m + k * (cw + gap) + cw, ph - m, u * rnd(1.6, 2.4), font, col);
      if (chance(0.3)) photoBlock(g, m, ph * rnd(0.3, 0.6), pw - 2 * m, ph * rnd(0.1, 0.2));
      break;
    }
    case 'worksheet': {
      g.fillStyle = col; g.font = `bold ${u * 4.5}px "${pick(FONTS_SANS)}"`;
      g.fillText('Arbeitsblatt ' + pick(WORDS), m, m + u * 5);
      g.strokeStyle = col; g.lineWidth = u * 0.15;
      g.font = `${u * 2}px "${pick(FONTS_SANS)}"`; g.fillText('Name:', m, m + u * 10);
      g.beginPath(); g.moveTo(m + u * 10, m + u * 10.3); g.lineTo(pw * 0.6, m + u * 10.3); g.stroke();
      let y = m + u * 16;
      for (let n = 1; y < ph - m - u * 10; n++) {
        g.fillText(`${n}. ${words(rint(4, 10))}`, m, y);
        const h = u * rnd(8, 20);
        if (chance(0.5)) { g.strokeRect(m, y + u * 2, pw - 2 * m, h); }
        else for (let k = 1; k * u * 4 < h; k++) { g.beginPath(); g.moveTo(m, y + u * 2 + k * u * 4); g.lineTo(pw - m, y + u * 2 + k * u * 4); g.stroke(); }
        if (chance(0.4)) handwriting(g, m + u, y + u * 2, pw - m, y + u * 2 + h, u * 4, pick(['#1f3bb3', '#222']));
        y += h + u * 7;
      }
      break;
    }
    case 'lined': case 'grid': {
      const step = u * (kind === 'grid' ? rnd(2.4, 3.2) : rnd(3.6, 4.6));
      g.strokeStyle = kind === 'grid' ? `rgba(90,120,160,${rnd(0.35, 0.7)})` : `rgba(80,110,190,${rnd(0.4, 0.8)})`;
      g.lineWidth = u * 0.12;
      const top = u * rnd(6, 12);
      for (let y = top; y < ph - u * 3; y += step) { g.beginPath(); g.moveTo(kind === 'grid' ? u * 3 : 0, y); g.lineTo(kind === 'grid' ? pw - u * 3 : pw, y); g.stroke(); }
      if (kind === 'grid') for (let x = u * 3; x < pw - u * 3; x += step) { g.beginPath(); g.moveTo(x, top); g.lineTo(x, ph - u * 3); g.stroke(); }
      else if (chance(0.8)) { g.strokeStyle = 'rgba(210,60,60,0.7)'; g.beginPath(); g.moveTo(u * 12, 0); g.lineTo(u * 12, ph); g.stroke(); }
      if (chance(0.75)) handwriting(g, u * 14, top, pw - u * 4, ph * rnd(0.4, 0.95), step, pick(['#1f3bb3', '#1b1b1b', '#3b3bd0']));
      if (chance(0.4)) { // Lochung
        g.fillStyle = 'rgba(40,40,40,0.85)';
        for (const f of [0.3, 0.7]) { g.beginPath(); g.arc(u * 5, ph * f, u * 1.6, 0, 7); g.fill(); }
      }
      break;
    }
    case 'slides': {
      const n = pick([2, 3, 4, 6]), rows = n <= 3 ? n : n / 2, cols = n <= 3 ? 1 : 2;
      const sw = (pw - 2 * m - (cols - 1) * u * 4) / cols, sh = Math.min((ph - 2 * m - (rows - 1) * u * 4) / rows, sw * 0.75);
      for (let i = 0; i < n; i++) {
        const x = m + (i % cols) * (sw + u * 4), y = m + Math.floor(i / cols) * (sh + u * 4);
        g.strokeStyle = '#333'; g.lineWidth = u * 0.3; g.strokeRect(x, y, sw, sh);
        g.fillStyle = `hsl(${rint(0, 360)},50%,${rint(25, 45)}%)`; g.fillRect(x, y, sw, sh * 0.18);
        textBlock(g, x + u * 2, y + sh * 0.22, x + sw - u * 2, y + sh - u * 2, u * 1.6, pick(FONTS_SANS), '#222');
      }
      break;
    }
    case 'form': {
      g.strokeStyle = col; g.lineWidth = u * rnd(0.3, 0.9);
      g.strokeRect(m * 0.6, m * 0.6, pw - 1.2 * m, ph - 1.2 * m); // gedruckter Rahmen
      g.fillStyle = col; g.font = `bold ${u * 3.5}px "${pick(FONTS_SANS)}"`;
      g.fillText(words(3), m, m + u * 4);
      g.lineWidth = u * 0.15; g.font = `${u * 1.8}px "${pick(FONTS_SANS)}"`;
      const rows = rint(10, 30), cols = rint(2, 5), y0 = m + u * 8, rh = (ph - m - y0) / rows;
      for (let r = 0; r <= rows; r++) { g.beginPath(); g.moveTo(m, y0 + r * rh); g.lineTo(pw - m, y0 + r * rh); g.stroke(); }
      for (let k = 0; k <= cols; k++) { const x = m + (pw - 2 * m) * k / cols; g.beginPath(); g.moveTo(x, y0); g.lineTo(x, ph - m); g.stroke(); }
      for (let r = 0; r < rows; r++) for (let k = 0; k < cols; k++) if (chance(0.6)) g.fillText(pick(WORDS), m + (pw - 2 * m) * k / cols + u, y0 + r * rh + rh * 0.7);
      break;
    }
    case 'magazine': {
      if (chance(0.5)) photoBlock(g, 0, 0, pw, ph * rnd(0.3, 0.6)); // Bild bis an den Rand
      else photoBlock(g, m, m, pw - 2 * m, ph * 0.35);
      const cols = rint(2, 3), cw = (pw - 2 * m) / cols;
      for (let k = 0; k < cols; k++) textBlock(g, m + k * cw + u, ph * 0.62, m + (k + 1) * cw - u, ph - m, u * 1.7, pick(FONTS_SERIF), '#111');
      if (chance(0.3)) { g.fillStyle = `hsl(${rint(0, 360)},60%,35%)`; g.fillRect(0, ph - u * 6, pw, u * 6); }
      break;
    }
    case 'receipt': {
      g.fillStyle = '#333'; g.font = `${u * 5}px "${pick(FONTS_MONO)}"`;
      let y = u * 12;
      while (y < ph - u * 8) { g.fillText(`${words(rint(1, 2)).slice(0, 14).padEnd(14)} ${rnd(0.5, 40).toFixed(2)}`, u * 6, y); y += u * 7; }
      break;
    }
    case 'notes': {
      handwriting(g, m, m, pw - m, ph - m, u * rnd(4, 7), pick(['#1f3bb3', '#111', '#5a1fb3']));
      break;
    }
    case 'blank': default: {
      if (chance(0.5)) { g.fillStyle = '#555'; g.font = `${u * 1.6}px "${pick(FONTS_SANS)}"`; g.fillText(words(3), m, ph - m); }
    }
  }
  if (chance(0.15)) { // Textmarker
    g.fillStyle = `hsla(${pick([55, 100, 320, 190])},95%,55%,0.35)`;
    for (let i = 0; i < 3; i++) g.fillRect(rnd(m, pw * 0.5), rnd(m, ph - m), rnd(pw * 0.1, pw * 0.4), u * 2);
  }
  return c;
}

/** Ausweis/Karte: farbiger Verlauf, Foto, Schrift. */
function renderCard(pw, ph) {
  const c = document.createElement('canvas');
  c.width = pw; c.height = ph;
  const g = c.getContext('2d');
  const h0 = rint(0, 360);
  const grad = g.createLinearGradient(0, 0, pw, ph);
  grad.addColorStop(0, `hsl(${h0},${rint(20, 70)}%,${rint(55, 92)}%)`);
  grad.addColorStop(1, `hsl(${(h0 + rint(-60, 60) + 360) % 360},${rint(20, 70)}%,${rint(40, 85)}%)`);
  g.fillStyle = grad; g.fillRect(0, 0, pw, ph);
  const u = pw / 100;
  if (chance(0.7)) { g.fillStyle = `hsl(${h0},60%,${rint(20, 45)}%)`; g.fillRect(0, 0, pw, ph * rnd(0.12, 0.22)); }
  const portrait = chance(0.8);
  if (portrait) {
    g.fillStyle = `hsl(${rint(0, 40)},${rint(10, 40)}%,${rint(25, 70)}%)`;
    g.fillRect(pw * 0.06, ph * 0.3, pw * 0.25, ph * 0.6);
    g.fillStyle = `hsl(${rint(15, 35)},40%,${rint(45, 80)}%)`;
    g.beginPath(); g.ellipse(pw * 0.185, ph * 0.5, pw * 0.07, ph * 0.12, 0, 0, 7); g.fill();
  }
  g.fillStyle = `rgba(20,20,30,${rnd(0.6, 0.95)})`;
  g.font = `bold ${Math.round(u * 6)}px sans-serif`;
  g.fillText(pick(['SCHÜLERAUSWEIS', 'STUDENT ID', 'Bibliothek', 'Mitgliedskarte', 'Ausweis']), pw * 0.06, ph * 0.13 + u * 2);
  g.font = `${Math.round(u * 4)}px sans-serif`;
  for (let i = 0; i < rint(3, 6); i++) g.fillText(pick(['Name', 'Klasse 7b', 'gültig bis 2027', 'Nr. 482913', 'Gymnasium', 'Max Muster']), pw * (portrait ? 0.36 : 0.06), ph * (0.36 + i * 0.12));
  return c;
}

/** Bildschirm-Inhalt: Folie, Fenster, Code oder Webseite (auch dunkel). */
function renderScreen(pw, ph) {
  const c = document.createElement('canvas');
  c.width = pw; c.height = ph;
  const g = c.getContext('2d');
  const u = Math.max(pw, ph) / 100;
  const mode = weighted([['slide', 4], ['window', 3], ['code', 2], ['web', 3]]);
  const dark = mode === 'code' || chance(0.2);
  const bg = dark ? `hsl(${rint(200, 240)},${rint(5, 20)}%,${rint(8, 18)}%)` : chance(0.7) ? '#fdfdfd' : `hsl(${rint(0, 360)},${rint(20, 60)}%,${rint(85, 95)}%)`;
  const fg = dark ? `hsl(0,0%,${rint(80, 95)}%)` : '#202124';
  g.fillStyle = bg; g.fillRect(0, 0, pw, ph);
  const accent = `hsl(${rint(0, 360)},${rint(40, 80)}%,${rint(30, 55)}%)`;
  if (mode === 'slide') {
    if (chance(0.5)) { g.fillStyle = accent; g.fillRect(0, 0, pw, ph * rnd(0.12, 0.2)); }
    g.fillStyle = chance(0.5) ? fg : accent; g.font = `bold ${u * rnd(4, 6)}px "${pick(FONTS_SANS)}"`;
    g.fillText(words(rint(2, 5)), u * 5, ph * 0.1 + u * 3);
    const img = chance(0.4);
    for (let i = 0, y = ph * 0.3; i < rint(3, 6) && y < ph * 0.9; i++, y += u * rnd(5, 7)) {
      g.fillStyle = accent; g.fillRect(u * 6, y - u * 1.6, u * 1.2, u * 1.2);
      g.fillStyle = fg; g.font = `${u * rnd(2.4, 3.2)}px "${pick(FONTS_SANS)}"`;
      g.fillText(words(rint(3, 7)), u * 9, y);
    }
    if (img) photoBlock(g, pw * 0.6, ph * 0.3, pw * 0.33, ph * 0.5);
  } else if (mode === 'window') {
    const grd = g.createLinearGradient(0, 0, pw, ph);
    grd.addColorStop(0, `hsl(${rint(0, 360)},50%,${rint(20, 60)}%)`); grd.addColorStop(1, `hsl(${rint(0, 360)},50%,${rint(20, 60)}%)`);
    g.fillStyle = grd; g.fillRect(0, 0, pw, ph);
    const x0 = pw * rnd(0, 0.15), y0 = ph * rnd(0, 0.1), x1 = pw * rnd(0.75, 1), y1 = ph * rnd(0.8, 0.93);
    g.fillStyle = dark ? '#2b2b2b' : '#e8e8e8'; g.fillRect(x0, y0, x1 - x0, u * 3);
    g.fillStyle = bg; g.fillRect(x0, y0 + u * 3, x1 - x0, y1 - y0 - u * 3);
    textBlock(g, x0 + u * 3, y0 + u * 6, x1 - u * 3, y1 - u * 2, u * rnd(1.4, 2), pick(FONTS_SANS), fg);
    g.fillStyle = dark ? '#111' : '#d0d0d0'; g.fillRect(0, ph - u * 4, pw, u * 4); // Taskleiste
  } else if (mode === 'code') {
    g.fillStyle = 'rgba(255,255,255,0.04)'; g.fillRect(0, 0, pw * rnd(0.12, 0.22), ph);
    const cols = ['#9cdcfe', '#ce9178', '#c586c0', '#dcdcaa', '#6a9955', '#d4d4d4', '#569cd6'];
    const sz = u * rnd(1.2, 1.8); g.font = `${sz}px "${pick(FONTS_MONO)}"`;
    for (let y = sz * 2, ind = 0; y < ph - sz; y += sz * 1.45) {
      ind = Math.max(0, Math.min(6, ind + rint(-1, 1)));
      let x = pw * 0.24 + ind * sz * 1.2;
      for (let k = 0; k < rint(1, 5); k++) { const w = pick(WORDS); g.fillStyle = pick(cols); g.fillText(w, x, y); x += g.measureText(w + ' ').width; }
    }
  } else {
    g.fillStyle = accent; g.fillRect(0, 0, pw, u * rnd(5, 8));
    g.fillStyle = '#fff'; g.font = `bold ${u * 2.5}px "${pick(FONTS_SANS)}"`; g.fillText(words(2), u * 3, u * 4);
    const cw = pw * rnd(0.55, 0.7);
    textBlock(g, u * 4, u * 12, cw, ph - u * 3, u * rnd(1.4, 2), pick(chance(0.5) ? FONTS_SERIF : FONTS_SANS), fg);
    if (chance(0.7)) photoBlock(g, cw + u * 3, u * 12, pw - cw - u * 6, ph * rnd(0.2, 0.4));
  }
  return c;
}

const SHEETS = [ // Name, Breite × Höhe in cm
  ['A4', 21, 29.7, 60], ['A5', 14.8, 21, 12], ['Letter', 21.6, 27.9, 8],
  ['Heft', 16.5, 21, 8], ['Karteikarte', 14.8, 10.5, 4], ['Kassenzettel', 8, 22, 3],
];
const KINDS = [['text', 22], ['worksheet', 16], ['lined', 14], ['grid', 10], ['slides', 8],
  ['form', 8], ['magazine', 7], ['colored', 5], ['notes', 5], ['blank', 4]];

// ---------------------------------------------------------------- Geometrie
class Mesh {
  constructor() { this.data = []; this.idx = []; }
  vertex(p, n, uv) { this.data.push(p[0], p[1], p[2], n[0], n[1], n[2], uv[0], uv[1]); return this.data.length / 8 - 1; }
}

/** Blatt als Gitter. f(u,v) → Weltpunkt; Normalen aus Nachbarn. */
function sheetMesh(f, nu = 48, nv = 64) {
  const m = new Mesh();
  const P = [];
  for (let j = 0; j <= nv; j++) for (let i = 0; i <= nu; i++) P.push(f(i / nu, j / nv));
  const at = (i, j) => P[Math.min(nv, Math.max(0, j)) * (nu + 1) + Math.min(nu, Math.max(0, i))];
  for (let j = 0; j <= nv; j++) for (let i = 0; i <= nu; i++) {
    const du = V.sub(at(i + 1, j), at(i - 1, j)), dv = V.sub(at(i, j + 1), at(i, j - 1));
    let n = V.norm(V.cross(dv, du));
    if (n[1] < 0) n = V.mul(n, -1);
    m.vertex(at(i, j), n, [i / nu, j / nv]);
  }
  for (let j = 0; j < nv; j++) for (let i = 0; i < nu; i++) {
    const a = j * (nu + 1) + i, b = a + 1, c = a + nu + 1, d = c + 1;
    m.idx.push(a, c, b, b, c, d);
  }
  return m;
}

function boxMesh(center, size, rotY, mesh = new Mesh()) {
  const [cx, cy, cz] = center, [sx, sy, sz] = size.map((s) => s / 2);
  const cs = Math.cos(rotY), sn = Math.sin(rotY);
  const tr = (p) => [cx + p[0] * cs - p[2] * sn, cy + p[1], cz + p[0] * sn + p[2] * cs];
  const rn = (n) => [n[0] * cs - n[2] * sn, n[1], n[0] * sn + n[2] * cs];
  const faces = [
    [[0, 1, 0], [[-1, 1, -1], [1, 1, -1], [1, 1, 1], [-1, 1, 1]]],
    [[1, 0, 0], [[1, -1, -1], [1, 1, -1], [1, 1, 1], [1, -1, 1]]],
    [[-1, 0, 0], [[-1, -1, -1], [-1, -1, 1], [-1, 1, 1], [-1, 1, -1]]],
    [[0, 0, 1], [[-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]]],
    [[0, 0, -1], [[-1, -1, -1], [-1, 1, -1], [1, 1, -1], [1, -1, -1]]],
  ];
  for (const [n, q] of faces) {
    const base = mesh.data.length / 8;
    q.forEach((c, k) => mesh.vertex(tr([c[0] * sx, c[1] * sy, c[2] * sz]), rn(n), [k === 1 || k === 2 ? 1 : 0, k >= 2 ? 1 : 0]));
    mesh.idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
  }
  return mesh;
}

/** Ellipsoid (Finger, Handballen, Tasse als gestauchte Kugel …). */
function ellipsoidMesh(center, radii, yaw, pitch, mesh = new Mesh(), seg = 24) {
  const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
  const rot = (p) => { // erst um x (pitch), dann um y (yaw)
    const y1 = p[1] * cp - p[2] * sp, z1 = p[1] * sp + p[2] * cp;
    return [p[0] * cy + z1 * sy, y1, -p[0] * sy + z1 * cy];
  };
  const base = mesh.data.length / 8;
  for (let j = 0; j <= seg; j++) {
    const th = Math.PI * j / seg;
    for (let i = 0; i <= seg; i++) {
      const ph = 2 * Math.PI * i / seg;
      const s = [Math.sin(th) * Math.cos(ph), Math.cos(th), Math.sin(th) * Math.sin(ph)];
      const p = rot([s[0] * radii[0], s[1] * radii[1], s[2] * radii[2]]);
      const n = V.norm(rot([s[0] / radii[0], s[1] / radii[1], s[2] / radii[2]]));
      mesh.vertex(V.add(center, p), n, [i / seg, j / seg]);
    }
  }
  for (let j = 0; j < seg; j++) for (let i = 0; i < seg; i++) {
    const a = base + j * (seg + 1) + i, b = a + 1, c = a + seg + 1, d = c + 1;
    mesh.idx.push(a, b, c, b, d, c);
  }
  return mesh;
}

function cylinderMesh(a, b, r, mesh = new Mesh(), seg = 20) {
  const axis = V.norm(V.sub(b, a));
  let t = Math.abs(axis[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0];
  const u = V.norm(V.cross(axis, t)), w = V.cross(axis, u);
  const base = mesh.data.length / 8;
  for (let k = 0; k <= 1; k++) for (let i = 0; i <= seg; i++) {
    const ph = 2 * Math.PI * i / seg;
    const n = V.add(V.mul(u, Math.cos(ph)), V.mul(w, Math.sin(ph)));
    mesh.vertex(V.add(k ? b : a, V.mul(n, r)), n, [i / seg, k]);
  }
  for (let i = 0; i < seg; i++) { const p = base + i, q = base + seg + 1 + i; mesh.idx.push(p, q, p + 1, p + 1, q, q + 1); }
  // Deckel oben (b)
  const cb = mesh.vertex(b, axis, [0.5, 0.5]);
  for (let i = 0; i <= seg; i++) {
    const ph = 2 * Math.PI * i / seg;
    mesh.vertex(V.add(b, V.mul(V.add(V.mul(u, Math.cos(ph)), V.mul(w, Math.sin(ph))), r)), axis, [0, 0]);
  }
  for (let i = 0; i < seg; i++) mesh.idx.push(cb, cb + 1 + i, cb + 2 + i);
  return mesh;
}

// ---------------------------------------------------------------- WebGL
const VS = `#version 300 es
layout(location=0) in vec3 aPos; layout(location=1) in vec3 aNrm; layout(location=2) in vec2 aUv;
uniform mat4 uVP, uLightVP;
out vec3 vPos; out vec3 vNrm; out vec2 vUv; out vec4 vLight;
void main(){ vPos=aPos; vNrm=aNrm; vUv=aUv; vLight=uLightVP*vec4(aPos,1.); gl_Position=uVP*vec4(aPos,1.); }`;

const FS = `#version 300 es
precision highp float; precision highp sampler2DShadow;
in vec3 vPos; in vec3 vNrm; in vec2 vUv; in vec4 vLight;
uniform sampler2D uTex; uniform sampler2DShadow uShadow;
uniform int uKind; uniform int uPattern; uniform vec3 uC1; uniform vec3 uC2; uniform float uScale; uniform float uRot;
uniform float uGloss; uniform vec3 uLightDir; uniform vec3 uLightCol; uniform vec3 uAmb; uniform vec3 uEye;
uniform float uSoft; uniform vec4 uBlob; uniform vec4 uLamp; uniform float uTexel; uniform float uEmit;
out vec4 frag;
float h21(vec2 p){ p=fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }
float vnoise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
float fbm(vec2 p){ float s=0., a=.5; for(int i=0;i<5;i++){ s+=a*vnoise(p); p*=2.03; a*=.5; } return s; }
vec3 table(vec2 q){
  float c=cos(uRot), s=sin(uRot); vec2 p=vec2(c*q.x-s*q.y, s*q.x+c*q.y)*uScale;
  if(uPattern==0){ return mix(uC1,uC2,fbm(p*.3)*.6); }                                  // glatt
  if(uPattern==1){ float g=fbm(vec2(p.x*.08,p.y*1.5)); float r=sin((p.x+g*6.)*1.7)*.5+.5;   // Holz
    return mix(uC1,uC2,r*.6+fbm(p*vec2(.2,4.))*.4); }
  if(uPattern==2){ float w=sin(p.x*12.)*sin(p.y*12.); return mix(uC1,uC2,.5+.35*w+.3*(fbm(p*2.)-.5)); } // Stoff
  if(uPattern==3){ float v=abs(sin(p.x*.6+fbm(p*.4)*5.)); return mix(uC2,uC1,smoothstep(0.,.25,v)); } // Marmor
  if(uPattern==4){ vec2 f=abs(fract(p*.12)-.5); float gr=step(.47,max(f.x,f.y));        // Fliesen
    return mix(mix(uC1,uC1*.92,fbm(p)), uC2, gr); }
  if(uPattern==5){ vec2 f=floor(p*.25); float k=mod(f.x+f.y,2.); return mix(uC1,uC2,k)*(.9+.1*fbm(p)); } // Karo-Tischtuch
  if(uPattern==6){ float n=vnoise(p*6.); return mix(uC1,uC2,step(.55,n))*(.85+.3*vnoise(p*25.)); } // Teppich
  // 7: Zeitungs-artig (Text-Streifen auf hellem Grund) – schwer
  float row=fract(p.y*.9); float word=step(.35,vnoise(vec2(p.x*1.6,floor(p.y*.9)*7.)));
  return mix(uC1, uC2, step(.55,row)*step(row,.85)*word*.8);
}
float shadow(){
  vec3 l=vLight.xyz/vLight.w*.5+.5; if(l.x<0.||l.x>1.||l.y<0.||l.y>1.) return 1.;
  float s=0.; float r=uSoft*uTexel;
  for(int i=-2;i<=2;i++) for(int j=-2;j<=2;j++) s+=texture(uShadow, vec3(l.xy+vec2(i,j)*r, l.z-0.0005));
  return s/25.;
}
void main(){
  vec3 base;
  if(uKind==0) base=texture(uTex,vUv).rgb;
  else if(uKind==1) base=uC1;
  else if(uKind==2) base=table(vPos.xz);
  else if(uKind==3){ base=mix(uC1,uC2,step(.5,fract(vUv.y*40.))); }          // Buchseiten-Kante
  else { vec2 k=fract(vUv*vec2(15.,6.)); base=mix(uC1,uC2,step(.12,k.x)*step(.15,k.y)); } // Tastatur
  vec3 n=normalize(vNrm); vec3 v=normalize(uEye-vPos); vec3 l=normalize(-uLightDir);
  float sh=shadow();
  float d=max(dot(n,l),0.);
  vec3 h=normalize(l+v); float sp=pow(max(dot(n,h),0.), mix(8.,90.,uGloss))*uGloss;
  vec3 col=base*(uAmb + uLightCol*d*sh) + uLightCol*sp*sh*.8;
  if(uEmit>0.) col=base*uEmit + uLightCol*sp*sh*.8;                       // Bildschirm leuchtet selbst
  if(uLamp.w>0.){ vec3 L=uLamp.xyz-vPos; float dist=length(L); col+=base*uLamp.w*max(dot(n,L/dist),0.)*2000./(dist*dist); }
  float b=length(vPos.xz-uBlob.xy)/uBlob.z; col*=1.-uBlob.w*(1.-smoothstep(.6,1.,b));    // Schatten des Fotografen
  frag=vec4(col,1.);
}`;

const DVS = `#version 300 es
layout(location=0) in vec3 aPos; uniform mat4 uLightVP; void main(){ gl_Position=uLightVP*vec4(aPos,1.); }`;
const DFS = `#version 300 es
precision mediump float; out vec4 o; void main(){ o=vec4(1); }`;

function compile(gl, vs, fs) {
  const p = gl.createProgram();
  for (const [t, s] of [[gl.VERTEX_SHADER, vs], [gl.FRAGMENT_SHADER, fs]]) {
    const sh = gl.createShader(t); gl.shaderSource(sh, s); gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(sh));
    gl.attachShader(p, sh);
  }
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
  return p;
}

let GL = null;
function setup(W, H) {
  const canvas = document.getElementById('c');
  canvas.width = W; canvas.height = H;
  if (GL && GL.W === W && GL.H === H) return GL;
  const gl = canvas.getContext('webgl2', { antialias: true, preserveDrawingBuffer: true });
  const prog = compile(gl, VS, FS), dprog = compile(gl, DVS, DFS);
  const SM = 4096;
  const depth = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, depth);
  gl.texStorage2D(gl.TEXTURE_2D, 1, gl.DEPTH_COMPONENT24, SM, SM);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_COMPARE_MODE, gl.COMPARE_REF_TO_TEXTURE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  const fbo = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, depth, 0);
  gl.drawBuffers([gl.NONE]); gl.readBuffer(gl.NONE);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  GL = { gl, prog, dprog, depth, fbo, SM, W, H, loc: {} };
  for (const n of ['uVP', 'uLightVP', 'uTex', 'uShadow', 'uKind', 'uPattern', 'uC1', 'uC2', 'uScale', 'uRot', 'uGloss',
    'uLightDir', 'uLightCol', 'uAmb', 'uEye', 'uSoft', 'uBlob', 'uLamp', 'uTexel', 'uEmit']) GL.loc[n] = gl.getUniformLocation(prog, n);
  GL.dloc = gl.getUniformLocation(dprog, 'uLightVP');
  return GL;
}

function upload(gl, mesh) {
  const vao = gl.createVertexArray(); gl.bindVertexArray(vao);
  const vb = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, vb);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mesh.data), gl.STATIC_DRAW);
  const ib = gl.createBuffer(); gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ib);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(mesh.idx), gl.STATIC_DRAW);
  for (const [i, n, o] of [[0, 3, 0], [1, 3, 12], [2, 2, 24]]) {
    gl.enableVertexAttribArray(i); gl.vertexAttribPointer(i, n, gl.FLOAT, false, 32, o);
  }
  gl.bindVertexArray(null);
  return { vao, count: mesh.idx.length, buffers: [vb, ib] };
}

function textureFrom(gl, canvas) {
  const t = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, t);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
  gl.generateMipmap(gl.TEXTURE_2D);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  const ext = gl.getExtension('EXT_texture_filter_anisotropic');
  if (ext) gl.texParameterf(gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, 8);
  return t;
}

// ---------------------------------------------------------------- Szene
function hsl(h, s, l) { // → [r,g,b] 0..1
  s /= 100; l /= 100;
  const k = (n) => (n + h / 30) % 12, a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [f(0), f(8), f(4)];
}

function tableLook() {
  const p = weighted([[0, 3], [1, 5], [2, 2], [3, 2], [4, 1], [5, 1], [6, 1], [7, 1]]);
  const look = { kind: 2, pattern: p, scale: rnd(0.6, 1.6), rot: rnd(0, 6.3) };
  switch (p) {
    case 0: { const light = chance(0.55); const v = light ? rnd(0.75, 0.95) : rnd(0.08, 0.4); const tint = hsl(rint(0, 360), rint(0, 25), v * 100);
      look.c1 = tint; look.c2 = V.mul(tint, rnd(0.85, 1.0)); break; }
    case 1: { const l = rnd(18, 70); look.c1 = hsl(rint(18, 38), rint(35, 65), l); look.c2 = hsl(rint(18, 38), rint(35, 65), l * rnd(0.6, 0.85)); break; }
    case 2: { const h = rint(0, 360); look.c1 = hsl(h, rint(10, 50), rnd(20, 80)); look.c2 = hsl(h, rint(10, 50), rnd(20, 80)); look.scale *= 0.5; break; }
    case 3: look.c1 = hsl(rint(0, 360), rint(0, 10), rnd(80, 95)); look.c2 = hsl(rint(0, 360), rint(0, 15), rnd(30, 60)); break;
    case 4: look.c1 = hsl(rint(0, 360), rint(0, 30), rnd(55, 92)); look.c2 = hsl(0, 0, rnd(30, 70)); break;
    case 5: look.c1 = hsl(rint(0, 360), rint(40, 80), rnd(35, 55)); look.c2 = [0.95, 0.95, 0.93]; break;
    case 6: { const h = rint(0, 360); look.c1 = hsl(h, rint(10, 40), rnd(20, 60)); look.c2 = hsl((h + 40) % 360, rint(10, 40), rnd(20, 60)); look.scale *= 0.4; break; }
    default: look.c1 = [rnd(0.85, 0.95), rnd(0.84, 0.94), rnd(0.8, 0.9)]; look.c2 = [0.1, 0.1, 0.1]; break;
  }
  return look;
}

/** Wölbung eines Blatts: Höhe über der Unterlage für (u,v) in [0,1]². */
function bendFunction() {
  const type = weighted([['flat', 30], ['curl', 25], ['lift', 15], ['wave', 15], ['corner', 15]]);
  const a = rnd(0, Math.PI), ax = Math.cos(a), ay = Math.sin(a);
  if (type === 'flat') return () => 0;
  if (type === 'curl') { const k = rnd(0.5, 4); const off = rnd(-0.3, 0.3); // Rand(er) heben sich
    return (u, v) => { const d = (u - 0.5) * ax + (v - 0.5) * ay - off; return k * Math.max(0, Math.abs(d) - 0.15) ** 2; }; }
  if (type === 'lift') { const k = rnd(1, 5); // eine Seite liegt hoch (Buchseite, Mappe)
    return (u, v) => { const d = (u - 0.5) * ax + (v - 0.5) * ay; return k * Math.max(0, d) ** 2; }; }
  if (type === 'wave') { const amp = rnd(0.1, 0.5), f = rnd(1.5, 4);
    return (u, v) => amp * (1 + Math.sin(((u - 0.5) * ax + (v - 0.5) * ay) * f * Math.PI * 2)) / 2; }
  const cu = rint(0, 1), cv = rint(0, 1), k = rnd(2, 8); // Eselsohr
  return (u, v) => { const d = Math.hypot(u - cu, v - cv); return k * Math.max(0, 0.3 - d) ** 2; };
}

function placeSheet(w, h, cx, cz, rot, y0, bend) {
  const cs = Math.cos(rot), sn = Math.sin(rot);
  const f = (u, v) => {
    const x = (u - 0.5) * w, z = (v - 0.5) * h;
    return [cx + x * cs - z * sn, y0 + bend(u, v), cz + x * sn + z * cs];
  };
  return f;
}

function renderScene(seed, W, H, opts = {}) {
  R = mulberry32(seed * 7919 + 13);
  const { gl, prog, dprog, depth, fbo, SM, loc } = setup(W, H);
  const objs = []; // {mesh, kind, tex, c1, c2, gloss, pattern…}
  const cleanup = [];
  const add = (mesh, look) => objs.push(Object.assign({ m: upload(gl, mesh) }, look));

  // Tisch
  const table = new Mesh();
  for (const [x, z] of [[-300, -300], [300, -300], [300, 300], [-300, 300]]) table.vertex([x, 0, z], [0, 1, 0], [0, 0]);
  table.idx.push(0, 2, 1, 0, 3, 2);
  add(table, Object.assign(tableLook(), { gloss: chance(0.3) ? rnd(0.1, 0.5) : 0 }));

  const nodoc = opts.nodoc ?? false;
  const [, sw0, sh0] = weighted(SHEETS.map((s) => [s, s[3]]));
  let sw = sw0, sh = sh0;
  if (chance(0.15)) [sw, sh] = [sh, sw];
  const rot = rnd(-Math.PI, Math.PI);
  // Statt Blatt: Ausweiskarte oder Tablet/Handy mit Seite auf dem Bildschirm.
  const device = nodoc ? null : (opts.device ?? null);
  if (device === 'card') { [sw, sh] = chance(0.5) ? [8.56, 5.4] : [5.4, 8.56]; }
  if (device === 'tablet') { [sw, sh] = pick([[15, 20], [17.4, 24.8], [19.7, 26.2], [6.8, 14.8]]); if (chance(0.4)) [sw, sh] = [sh, sw]; }
  if (device === 'monitor') { [sw, sh] = pick([[34.5, 19.4], [30.4, 19], [53, 29.8], [47.5, 29.7], [60, 33.8]]); if (chance(0.1)) [sw, sh] = [sh, sw]; }
  const kind = device ?? (sw0 === 8 ? 'receipt' : weighted(KINDS));
  const pageTex = (k, w, h) => { const px = 1100; const c = renderPage(k, Math.round(px * Math.min(1, w / h)), Math.round(px * Math.min(1, h / w))); const t = textureFrom(gl, c); cleanup.push(t); return t; };

  // Stapel darunter (oft gleiches Papier): das Schwerste
  let y = 0.0;
  const stack = !nodoc && !device && chance(0.35) ? rint(1, 6) : 0;
  const under = [];
  for (let i = 0; i < stack; i++) {
    const same = chance(0.6);
    const uw = same ? sw : sw * rnd(0.8, 1.25), uh = same ? sh : sh * rnd(0.8, 1.25);
    const ur = rot + rnd(-0.25, 0.25), ux = rnd(-4, 4), uz = rnd(-4, 4);
    y += 0.06;
    add(sheetMesh(placeSheet(uw, uh, ux, uz, ur, y, chance(0.3) ? bendFunction() : () => 0), 16, 20),
      { kind: 0, tex: pageTex(same && chance(0.5) ? kind : weighted(KINDS), uw, uh), gloss: 0.05 });
    under.push([ux, uz]);
  }
  // Bücher oder Mappe darunter
  // Monitor/Laptop/Beamer: Gehäuse (oder beim Beamer nur helle Wand), Laptop-Tastatur an einer Kante.
  const beamer = device === 'monitor' && chance(0.2);
  if (device === 'monitor' && beamer) {
    objs[0].pattern = 0; const v = rnd(0.55, 0.9); objs[0].c1 = [v, v, v * rnd(0.95, 1.02)]; objs[0].c2 = V.mul(objs[0].c1, rnd(0.9, 1));
  } else if (device === 'monitor') {
    const b = rnd(0.3, 2.5), th = rnd(0.8, 2.5);
    add(boxMesh([0, y + th / 2, 0], [sw + 2 * b, th, sh + 2 * b], rot), { kind: 1, c1: chance(0.75) ? [0.03, 0.03, 0.04] : hsl(0, 0, rnd(55, 85)), gloss: rnd(0.3, 0.8) });
    if (chance(0.35)) { // Laptop: Tastatur an der unteren Kante, aufgeklappt flach gedacht
      const cs = Math.cos(rot), sn = Math.sin(rot), off = sh / 2 + b + sh * 0.5;
      add(boxMesh([-sn * off, 0.8, cs * off], [sw + 2 * b, 1.6, sh * 0.95], rot), { kind: 4, c1: hsl(0, 0, rnd(55, 80)), c2: [0.08, 0.08, 0.09], gloss: 0.3 });
    }
    y += th - 0.04;
  }
  if (device === 'tablet') {
    // Gehäuse mit dunklem Rand, darauf der Bildschirm (Glas glänzt).
    const b = rnd(0.5, 1.6), th = rnd(0.6, 1.0);
    add(boxMesh([0, y + th / 2, 0], [sw + 2 * b, th, sh + 2 * b], rot), { kind: 1, c1: chance(0.7) ? [0.04, 0.04, 0.05] : hsl(0, 0, rnd(70, 90)), gloss: 0.6 });
    y += th - 0.04;
  }
  if (!nodoc && !device && stack === 0 && chance(0.12)) {
    const bh = rnd(1, 4);
    add(boxMesh([rnd(-2, 2), bh / 2, rnd(-2, 2)], [sw * rnd(1.05, 1.3), bh, sh * rnd(1.05, 1.2)], rot + rnd(-0.2, 0.2)),
      { kind: 1, c1: hsl(rint(0, 360), rint(30, 70), rnd(20, 60)), gloss: 0.2 });
    y = bh;
  }

  // Das oberste Blatt
  let corners = null;
  const bend = bendFunction();
  const top = placeSheet(sw, sh, 0, 0, rot, y + 0.06, device ? () => 0 : bend);
  if (device === 'card') {
    const t = textureFrom(gl, renderCard(Math.round(700 * Math.min(1, sw / sh)), Math.round(700 * Math.min(1, sh / sw)))); cleanup.push(t);
    add(sheetMesh(top, 8, 8), { kind: 0, tex: t, gloss: rnd(0.2, 0.7) });
    corners = [top(0, 0), top(1, 0), top(1, 1), top(0, 1)];
  } else if (device === 'tablet') {
    add(sheetMesh(top, 8, 8), { kind: 0, tex: pageTex(pick(['slides', 'text', 'worksheet', 'magazine']), sw, sh), gloss: rnd(0.5, 0.9), emit: chance(0.7) ? rnd(0.75, 1.1) : 0 });
    corners = [top(0, 0), top(1, 0), top(1, 1), top(0, 1)];
  } else if (device === 'monitor') {
    const t = textureFrom(gl, renderScreen(Math.round(1200 * Math.min(1, sw / sh)), Math.round(1200 * Math.min(1, sh / sw)))); cleanup.push(t);
    add(sheetMesh(top, 8, 8), { kind: 0, tex: t, gloss: beamer ? 0 : rnd(0.2, 0.9), emit: beamer ? rnd(0.75, 1.0) : rnd(0.7, 1.15) });
    corners = [top(0, 0), top(1, 0), top(1, 1), top(0, 1)];
  } else if (!nodoc) {
    add(sheetMesh(top), { kind: 0, tex: pageTex(kind, sw, sh), gloss: chance(0.2) ? rnd(0.2, 0.7) : 0.03 });
    corners = [top(0, 0), top(1, 0), top(1, 1), top(0, 1)];
  }

  // Dinge drumherum
  const extent = Math.max(sw, sh);
  const halfDiag = Math.hypot(sw, sh) / 2;
  // Punkt neben dem Blatt: Dinge mit Radius r ragen höchstens an den Ecken
  // ein wenig hinein (niemand scannt ein halb zugedecktes Blatt).
  const free = (r) => {
    const a = rnd(0, 6.3), d = nodoc ? rnd(0, extent * 1.4) : rnd(halfDiag + r * 0.7, halfDiag + r + extent * 0.8);
    return [Math.cos(a) * d, Math.sin(a) * d];
  };
  const nThings = rint(0, nodoc ? 6 : 5);
  for (let i = 0; i < nThings; i++) {
    // Ohne Blatt: keine losen Blätter (die wären ja wieder ein Blatt). Bei
    // der Karte auch nicht: Liegt sie auf einem Blatt, wäre das Blatt gemeint.
    const t = weighted([['book', 3], ['pen', 4], ['mug', 2], ['phone', 2], ['laptop', 1], ...(nodoc ? [] : device === 'card' ? [['sticky', 1]] : [['paper', 3], ['sticky', 1]])]);
    if (t === 'book') {
      const bw = rnd(13, 24), bl = bw * rnd(1.2, 1.5), bh = rnd(1, 4), r = rnd(0, 6.3);
      const [x, z] = free(Math.hypot(bw, bl) / 2);
      const m = boxMesh([x, bh / 2, z], [bw, bh, bl], r);
      add(m, { kind: 1, c1: hsl(rint(0, 360), rint(30, 80), rnd(15, 60)), gloss: 0.25 });
    } else if (t === 'pen') {
      const [x, z] = free(2);
      const a = rnd(0, 6.3), L = rnd(10, 16), r = rnd(0.35, 0.6);
      add(cylinderMesh([x, r, z], [x + Math.cos(a) * L, r, z + Math.sin(a) * L], r), { kind: 1, c1: hsl(rint(0, 360), rint(40, 90), rnd(20, 60)), gloss: 0.6 });
    } else if (t === 'mug') {
      const r = rnd(3.5, 4.5), hh = rnd(8, 11);
      const [x, z] = free(r);
      add(cylinderMesh([x, 0, z], [x, hh, z], r), { kind: 1, c1: hsl(rint(0, 360), rint(0, 70), rnd(20, 90)), gloss: 0.5 });
    } else if (t === 'phone') {
      const [x, z] = free(8.6);
      add(boxMesh([x, 0.4, z], [7.5, 0.8, 15.5], rnd(0, 6.3)), { kind: 1, c1: [0.05, 0.05, 0.06], gloss: 0.9 });
    } else if (t === 'laptop') {
      const [x, z] = free(19.4);
      add(boxMesh([x, 0.8, z], [32, 1.6, 22], rnd(0, 6.3)), { kind: 4, c1: hsl(0, 0, rnd(60, 80)), c2: [0.08, 0.08, 0.09], gloss: 0.3 });
    } else if (t === 'paper') {
      const [x, z] = free(0);
      const pw = rnd(14, 22), ph = pw * rnd(1.3, 1.45);
      add(sheetMesh(placeSheet(pw, ph, x, z, rnd(0, 6.3), 0.04, chance(0.4) ? bendFunction() : () => 0), 12, 16),
        { kind: 0, tex: pageTex(weighted(KINDS), pw, ph), gloss: 0.03 });
    } else {
      const [x, z] = free(5);
      add(sheetMesh(placeSheet(7.6, 7.6, x, z, rnd(0, 6.3), 0.05, () => 0), 4, 4),
        { kind: 0, tex: pageTex('colored', 7.6, 7.6), gloss: 0.03 });
    }
  }
  // Dinge AUF dem Blatt (Stift, Radiergummi)
  if (!nodoc && chance(0.15)) {
    const [px, pz] = [rnd(-sw / 3, sw / 3), rnd(-sh / 3, sh / 3)], a = rnd(0, 6.3), r = 0.45;
    add(cylinderMesh([px, y + 0.5, pz], [px + Math.cos(a) * 14, y + 0.5, pz + Math.sin(a) * 14], r), { kind: 1, c1: hsl(rint(0, 360), 70, 45), gloss: 0.6 });
  }

  // Finger, die das Blatt halten
  if (!nodoc && chance(0.25)) {
    const skin = hsl(rint(15, 35), rint(30, 60), rnd(35, 80));
    const nf = rint(1, 2);
    for (let i = 0; i < nf; i++) {
      const edge = rint(0, 3), t = rnd(0.2, 0.8);
      const [u, v] = [[t, 0], [1, t], [t, 1], [0, t]][edge];
      const p = top(u, v), c = top(0.5, 0.5);
      const out = V.norm([p[0] - c[0], 0, p[2] - c[2]]);
      const tip = V.add(p, V.mul(out, rnd(-2.2, 0.5)));
      const yaw = Math.atan2(out[0], out[2]);
      add(ellipsoidMesh(V.add(tip, [out[0] * 4, 1.0, out[2] * 4]), [0.9, 0.8, 4.5], yaw, rnd(-0.15, 0.05)), { kind: 1, c1: skin, gloss: 0.15 });
      if (chance(0.6)) add(ellipsoidMesh(V.add(tip, [out[0] * 12, 2.5, out[2] * 12]), [5, 2.2, 6], yaw, 0), { kind: 1, c1: skin, gloss: 0.1 });
    }
  }

  // Kamera
  const fov = rnd(50, 72) * Math.PI / 180, aspect = W / H;
  const tilt = rnd(0, 38) * Math.PI / 180, az = rnd(0, 6.3);
  const fill = nodoc ? rnd(0.3, 0.6) : 0.6;
  // Anteil des Blatts an der Bildfläche wie beim Scannen: meist ein Viertel
  // bis zwei Drittel, manchmal von weiter weg.
  const targetArea = weighted([[rnd(0.12, 0.25), 2], [rnd(0.25, 0.45), 5], [rnd(0.45, 0.7), 3]]);
  const roll = rnd(-0.12, 0.12) + (chance(0.5) ? 0 : Math.PI / 2 * rint(0, 3));
  const look = [rnd(-2, 2), y, rnd(-2, 2)];
  let eye, vp, quad = null, best = null, bestEye = null, bestVp = null;
  let dist = Math.max(sw, sh) / (2 * Math.tan(fov / 2) * fill) * (aspect < 1 ? 1 : 1 / Math.min(aspect, 1.5) * 1.2);
  for (let tries = 0; tries < 60; tries++) {
    eye = [look[0] + Math.sin(tilt) * Math.cos(az) * dist, look[1] + Math.cos(tilt) * dist, look[2] + Math.sin(tilt) * Math.sin(az) * dist];
    const fwd = V.norm(V.sub(look, eye)), side = V.norm(V.cross(fwd, [Math.cos(az + Math.PI / 2), 0, Math.sin(az + Math.PI / 2)]));
    let up = V.norm(V.cross(side, fwd));
    if (Math.abs(fwd[1]) > 0.999) up = [Math.cos(az), 0, Math.sin(az)];
    const upr = V.norm(V.add(V.mul(up, Math.cos(roll)), V.mul(V.cross(fwd, up), Math.sin(roll))));
    const view = lookAt(eye, look, upr);
    vp = mat4mul(perspective(fov, aspect, 2, 600), view);
    if (!corners) break;
    const pts = corners.map((c) => project(vp, c)).map(([x, yy]) => [(x + 1) / 2 * W, (1 - yy) / 2 * H]);
    const inside = pts.every(([x, yy]) => x > W * 0.02 && x < W * 0.98 && yy > H * 0.02 && yy < H * 0.98);
    let area = 0;
    for (let k = 0; k < 4; k++) { const [a, b] = [pts[k], pts[(k + 1) % 4]]; area += a[0] * b[1] - b[0] * a[1]; }
    area = Math.abs(area) / 2 / (W * H);
    if (inside && Math.abs(area / targetArea - 1) < 0.12) { quad = pts; break; }
    if (inside && (!best || Math.abs(Math.log(area / targetArea)) < best[1])) { best = [pts, Math.abs(Math.log(area / targetArea))]; bestEye = eye; bestVp = vp; }
    dist *= inside ? Math.sqrt(area / targetArea) : 1.08;
  }
  if (corners && !quad && best) { quad = best[0]; eye = bestEye; vp = bestVp; }
  if (corners && !quad) { objs.forEach((o) => { gl.deleteVertexArray(o.m.vao); o.m.buffers.forEach((b) => gl.deleteBuffer(b)); }); cleanup.forEach((t) => gl.deleteTexture(t)); return null; }

  // Licht
  const sunEl = rnd(35, 80) * Math.PI / 180, sunAz = rnd(0, 6.3);
  const lightDir = V.norm([-Math.cos(sunEl) * Math.cos(sunAz), -Math.sin(sunEl), -Math.cos(sunEl) * Math.sin(sunAz)]);
  const warm = rnd(-0.08, 0.1);
  const strength = rnd(0.45, 0.95);
  const lightCol = [strength * (1 + warm), strength, strength * (1 - warm)];
  const amb = rnd(0.25, 0.55), ambCol = [amb * (1 - warm * 0.5), amb, amb * (1 + warm * 0.5)];
  const lightEye = V.sub([0, 0, 0], V.mul(lightDir, 250));
  const lightVP = mat4mul(ortho(-110, 110, -110, 110, 10, 500), lookAt(lightEye, [0, 0, 0], Math.abs(lightDir[1]) > 0.99 ? [1, 0, 0] : [0, 1, 0]));

  // Schattenkarte
  gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
  gl.viewport(0, 0, SM, SM); gl.clear(gl.DEPTH_BUFFER_BIT); gl.enable(gl.DEPTH_TEST);
  gl.useProgram(dprog); gl.uniformMatrix4fv(GL.dloc, false, lightVP);
  gl.enable(gl.POLYGON_OFFSET_FILL); gl.polygonOffset(2, 4);
  for (const o of objs.slice(1)) { gl.bindVertexArray(o.m.vao); gl.drawElements(gl.TRIANGLES, o.m.count, gl.UNSIGNED_INT, 0); }
  gl.disable(gl.POLYGON_OFFSET_FILL);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);

  // Bild
  gl.viewport(0, 0, W, H);
  gl.clearColor(0.5, 0.5, 0.5, 1); gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.useProgram(prog);
  gl.uniformMatrix4fv(loc.uVP, false, vp); gl.uniformMatrix4fv(loc.uLightVP, false, lightVP);
  gl.uniform3fv(loc.uLightDir, lightDir); gl.uniform3fv(loc.uLightCol, lightCol); gl.uniform3fv(loc.uAmb, ambCol);
  gl.uniform3fv(loc.uEye, eye); gl.uniform1f(loc.uSoft, rnd(0.8, 6)); gl.uniform1f(loc.uTexel, 1 / SM);
  const blob = chance(0.35) ? [rnd(-10, 10), rnd(-10, 10), rnd(15, 45), rnd(0.15, 0.45)] : [0, 0, 1, 0];
  gl.uniform4fv(loc.uBlob, blob);
  gl.uniform4fv(loc.uLamp, chance(0.2) ? [rnd(-40, 40), rnd(30, 60), rnd(-40, 40), rnd(0.2, 0.6)] : [0, 0, 0, 0]);
  gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, depth); gl.uniform1i(loc.uShadow, 1);
  gl.uniform1i(loc.uTex, 0);
  gl.enable(gl.POLYGON_OFFSET_FILL);
  objs.forEach((o, i) => {
    gl.polygonOffset(-i * 0.5, -i * 2); // Blätter übereinander ohne Flimmern
    gl.uniform1i(loc.uKind, o.kind);
    gl.uniform1i(loc.uPattern, o.pattern ?? 0);
    gl.uniform3fv(loc.uC1, o.c1 ?? [1, 1, 1]); gl.uniform3fv(loc.uC2, o.c2 ?? [0, 0, 0]);
    gl.uniform1f(loc.uScale, o.scale ?? 1); gl.uniform1f(loc.uRot, o.rot ?? 0); gl.uniform1f(loc.uGloss, o.gloss ?? 0); gl.uniform1f(loc.uEmit, o.emit ?? 0);
    if (o.tex) { gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, o.tex); }
    gl.bindVertexArray(o.m.vao); gl.drawElements(gl.TRIANGLES, o.m.count, gl.UNSIGNED_INT, 0);
  });
  gl.disable(gl.POLYGON_OFFSET_FILL);
  gl.finish();
  const png = document.getElementById('c').toDataURL('image/png');
  objs.forEach((o) => { gl.deleteVertexArray(o.m.vao); o.m.buffers.forEach((b) => gl.deleteBuffer(b)); });
  cleanup.forEach((t) => gl.deleteTexture(t));
  return { png, quad, kind: nodoc ? 'nodoc' : kind, stack, w: sw, h: sh };
}
window.renderScene = renderScene;
