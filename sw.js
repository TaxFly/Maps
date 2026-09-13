// Service worker — deja usable el checklist (Outlets/Comidas/Market/Parques)
// sin señal, típico en un parque con wifi malo o sin datos.
// Si tocás app.js/styles.css y no ves el cambio reflejado, subí CACHE_VERSION.
const CACHE_VERSION = 'v1';
const CACHE_NAME = 'orlando-planning-' + CACHE_VERSION;

const APP_SHELL = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './theme.js',
  './firebase-sync.js',
  './manifest.json',
  './favicon.png',
  './apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Firestore / Firebase: siempre red, la app ya maneja el offline de datos
  // con localStorage — no queremos servir una respuesta vieja acá.
  if (url.hostname.includes('firestore') || url.hostname.includes('firebaseio')) return;

  // App shell propio: cache-first, así abre instantáneo y sin red.
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then((cached) => {
        const network = fetch(req).then((res) => {
          if (res && res.ok) caches.open(CACHE_NAME).then((c) => c.put(req, res.clone()));
          return res;
        }).catch(() => cached);
        return cached || network;
      })
    );
    return;
  }

  // Recursos externos (fuente, Leaflet): network-first con fallback a cache,
  // para no pisar una versión nueva pero sí poder seguir usándolos offline.
  event.respondWith(
    fetch(req).then((res) => {
      if (res && (res.ok || res.type === 'opaque')) {
        caches.open(CACHE_NAME).then((c) => c.put(req, res.clone()));
      }
      return res;
    }).catch(() => caches.match(req))
  );
});
