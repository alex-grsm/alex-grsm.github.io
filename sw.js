// Define and register the service worker
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('my-cache').then(function(cache) {
        return cache.addAll([
          '/*.html',
          '/css/main.css',
          '/js/main.js',
          '/img/*',
          '/fonts/*'
        ]).catch(function(error) {
          console.error('Error adding resources to cache:', error);
        });
      })
    );
  });
  
  // Fetch resources from cache first, and fallback to network
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.open('my-cache').then(function(cache) {
        return cache.match(event.request).then(function(response) {
          // Check if the response exists in the cache and return it
          if (response) {
            return response;
          }
  
          // Fetch the resource from the network and cache it for 30 days
          return fetch(event.request).then(function(networkResponse) {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  });
  
  // Set the cache expiration time to 30 days
  self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            return caches.open(cacheName).then(function(cache) {
              cache.delete(event.request, {
                ignoreSearch: true
              });
            });
          })
        );
      })
    );
  });