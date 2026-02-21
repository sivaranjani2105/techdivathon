// ============================================================
// RAKSHAK OS — Service Worker v1
// Cache-First Strategy with Offline Fallback
// ============================================================

const CACHE_NAME = 'rakshak-pwa-v1';
const OFFLINE_URL = './offline.html';

// Assets to precache on install
const PRECACHE_ASSETS = [
    './',
    './landing.html',
    './index.html',
    './rakshak.html',
    './optics.html',
    './admin.html',
    './offline.html',
    './manifest.json',
    './icons/icon-192.svg',
    './icons/icon-512.svg',
    'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Share+Tech+Mono&display=swap'
];

// ── INSTALL: Precache core assets ──
self.addEventListener('install', (event) => {
    console.log('[RAKSHAK SW] Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[RAKSHAK SW] Precaching core assets');
                return cache.addAll(PRECACHE_ASSETS);
            })
            .then(() => self.skipWaiting()) // Activate immediately
    );
});

// ── ACTIVATE: Clean old caches & claim clients ──
self.addEventListener('activate', (event) => {
    console.log('[RAKSHAK SW] Activating...');
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames
                        .filter((name) => name !== CACHE_NAME)
                        .map((name) => {
                            console.log('[RAKSHAK SW] Removing old cache:', name);
                            return caches.delete(name);
                        })
                );
            })
            .then(() => self.clients.claim()) // Take control of all pages
    );
});

// ── FETCH: Cache-first with background update ──
self.addEventListener('fetch', (event) => {
    const { request } = event;

    // Skip non-GET requests
    if (request.method !== 'GET') return;

    // Cache-first for all assets (HTML, fonts, icons)
    event.respondWith(
        caches.match(request)
            .then((cachedResponse) => {
                if (cachedResponse) {
                    // Return cache hit, but also update cache in background
                    const fetchPromise = fetch(request)
                        .then((networkResponse) => {
                            caches.open(CACHE_NAME)
                                .then((cache) => cache.put(request, networkResponse.clone()));
                            return networkResponse;
                        })
                        .catch(() => { }); // Silently fail background update

                    return cachedResponse;
                }

                // Not in cache — fetch from network
                return fetch(request)
                    .then((networkResponse) => {
                        // Cache new resources dynamically (fonts, external assets)
                        if (networkResponse && networkResponse.status === 200) {
                            const clone = networkResponse.clone();
                            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
                        }
                        return networkResponse;
                    })
                    .catch(() => {
                        // Offline fallback for navigation requests (HTML pages)
                        if (request.mode === 'navigate') {
                            return caches.match(OFFLINE_URL);
                        }
                        // For other resources, return nothing
                        return new Response('', { status: 408, statusText: 'Offline' });
                    });
            })
    );
});
