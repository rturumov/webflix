const CACHE_NAME = 'pwa-cache';
const STATIC_FILES = [
    '/', 
    '/index.html',
    '/index.css', 
    'vite.svg',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[Service Worker] Pre-caching static files');
            return cache.addAll(STATIC_FILES);
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(
                keyList.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.log('[Service Worker] Removing old cache:', key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    if (event.request.method === 'GET') {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                if (cachedResponse) {
                    console.log('[Service Worker] Serving from cache:', event.request.url);
                    return cachedResponse;
                }

                return fetch(event.request).then((networkResponse) => {
                    return caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                });
            })
        );
    }
});

self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-favorites') {
        event.waitUntil(syncFavorites());
    }
});

async function syncFavorites() {
    const outbox = await getOutbox(); 
    for (const request of outbox) {
        try {
            await fetch(request.url, {
                method: 'POST',
                body: JSON.stringify(request.body),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('[Service Worker] Synced:', request.url);
            removeFromOutbox(request); // Remove from local storage
        } catch (error) {
            console.error('[Service Worker] Sync failed:', error);
        }
    }
}

// self.addEventListener('push', (event) => {
//     const data = event.data ? event.data.json() : {};
//     const title = data.title || 'New Notification';
//     const options = {
//         body: data.body || 'You have new updates!',
//         icon: '/vite.svg', 
//     };
//     event.waitUntil(self.registration.showNotification(title, options));
// });

