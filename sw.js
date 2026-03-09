const CACHE_NAME = 'wordofday-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install — cache app shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});

// Listen for notification schedule messages from the main thread
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SCHEDULE_NOTIFICATION') {
    const { hour, minute } = event.data;
    scheduleDaily(hour, minute);
  }
  if (event.data && event.data.type === 'CANCEL_NOTIFICATION') {
    if (self._notifTimer) clearTimeout(self._notifTimer);
    self._notifTimer = null;
  }
  if (event.data && event.data.type === 'TEST_NOTIFICATION') {
    self.registration.showNotification('Word of the Day 📖', {
      body: 'Your new word is ready! Tap to expand your vocabulary.',
      icon: './icons/icon-192.png',
      badge: './icons/icon-192.png',
      tag: 'wotd-test',
      renotify: true,
      data: { url: './' }
    });
  }
});

function scheduleDaily(hour, minute) {
  if (self._notifTimer) clearTimeout(self._notifTimer);

  function getNextTrigger() {
    const now = new Date();
    const target = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute, 0, 0);
    if (target <= now) target.setDate(target.getDate() + 1);
    return target - now;
  }

  function fire() {
    self.registration.showNotification('Word of the Day 📖', {
      body: 'A new word and saying are waiting for you! Tap to learn something cool.',
      icon: './icons/icon-192.png',
      badge: './icons/icon-192.png',
      tag: 'wotd-daily',
      renotify: true,
      data: { url: './' }
    });
    // Schedule next day
    self._notifTimer = setTimeout(fire, getNextTrigger());
  }

  self._notifTimer = setTimeout(fire, getNextTrigger());
}

// Handle notification click — open the app
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clients => {
      if (clients.length > 0) {
        return clients[0].focus();
      }
      return self.clients.openWindow(event.notification.data?.url || './');
    })
  );
});
