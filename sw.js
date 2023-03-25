// Define and register the service worker
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('my-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/*.html',
          '/css/main.css',
          '/js/main.js',
          '/img/*'
        ]);
      })
    );
  });
  
  // Fetch resources from cache first, and fallback to network
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });