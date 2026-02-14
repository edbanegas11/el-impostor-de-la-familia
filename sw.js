const CACHE_NAME = 'impostor-v5';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './icon.png' // Asegúrate de tener una imagen con este nombre
];

// Instalar y guardar archivos en caché
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Interceptar peticiones para usar la caché si no hay internet
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
