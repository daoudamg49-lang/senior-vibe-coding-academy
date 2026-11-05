const SHELL_CACHE = 'svca-shell-v6';
const RUNTIME_CACHE = 'svca-runtime-v6';
const APP_ROOT = new URL('./', self.registration.scope).href;
const CORE_FILES = [
  './',
  './index.html',
  './styles.css',
  './themes.css',
  './accessibility-themes.css',
  './curriculum.js',
  './app.js',
  './ui-enhancements.js',
  './manifest.webmanifest',
  './icon.svg'
].map(path => new URL(path, self.registration.scope).href);

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(SHELL_CACHE)
      .then(cache => cache.addAll(CORE_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames
      .filter(name => name.startsWith('svca-') && ![SHELL_CACHE, RUNTIME_CACHE].includes(name))
      .map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  event.respondWith((async () => {
    const url = new URL(request.url);
    const cached = await caches.match(request);

    try {
      const response = await fetch(request);
      if (response.ok || response.type === 'opaque') {
        const cacheName = url.origin === self.location.origin ? SHELL_CACHE : RUNTIME_CACHE;
        try {
          const cache = await caches.open(cacheName);
          await cache.put(request, response.clone());
        } catch {}
      }
      return response;
    } catch {
      if (cached) return cached;
      if (request.mode === 'navigate') {
        return await caches.match(APP_ROOT) || Response.error();
      }
      return new Response('', { status: 504, statusText: 'Offline' });
    }
  })());
});
