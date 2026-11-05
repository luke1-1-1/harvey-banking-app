self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('apexpay-v1').then((cache) => cache.addAll([
      '/harvey-banking-app/',
      '/harvey-banking-app/index.html'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
