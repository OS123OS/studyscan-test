// „Teilen“ an StudyScan (Browser-Version, installiert auf Android).
//
// Teilt jemand Fotos aus der Galerie mit der installierten Web-App, schickt
// Chrome sie per POST an „teilen“ (siehe manifest.json, share_target).
// Hier landen sie im Zwischenspeicher „studyscan-geteilt“; danach öffnet
// sich die App, holt sie dort ab und schneidet sie wie importierte Fotos zu
// (lib/features/scanner/shared_photos_web.dart).
//
// Sonst tut dieser Service Worker nichts: Er speichert keine App-Dateien
// zwischen, damit neue Versionen wie bisher sofort ankommen.
'use strict';

const SHARE_CACHE = 'studyscan-geteilt';

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'POST') return;
  const url = new URL(request.url);
  if (!url.pathname.endsWith('/teilen')) return;
  event.respondWith(receiveShare(request));
});

async function receiveShare(request) {
  const app = new URL('./?geteilt=1', self.registration.scope);
  try {
    const form = await request.formData();
    const cache = await caches.open(SHARE_CACHE);
    // Alte, nie abgeholte Fotos weg: es zählt das, was gerade geteilt wurde.
    for (const old of await cache.keys()) await cache.delete(old);
    let index = 0;
    for (const file of form.getAll('fotos')) {
      if (!(file instanceof File) || !file.type.startsWith('image/')) continue;
      index++;
      const key = new URL(
        `geteilt/${Date.now()}-${String(index).padStart(3, '0')}`,
        self.registration.scope,
      );
      await cache.put(
        key,
        new Response(file, { headers: { 'Content-Type': file.type } }),
      );
    }
  } catch (e) {
    // Ohne Fotos öffnet sich einfach die App.
    console.warn('Teilen fehlgeschlagen:', e);
  }
  return Response.redirect(app.href, 303);
}
