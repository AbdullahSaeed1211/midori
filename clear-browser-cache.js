// Run this in browser console to clear service workers and localStorage
console.log('Clearing browser cache and service workers...');

// Clear all caches
if ('caches' in window) {
  caches.keys().then(names => {
    names.forEach(name => {
      caches.delete(name);
    });
  });
}

// Unregister all service workers
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(registration => {
      registration.unregister();
      console.log('Unregistered service worker:', registration.scope);
    });
  });
}

// Clear localStorage
if (typeof localStorage !== 'undefined') {
  localStorage.clear();
}

// Clear sessionStorage
if (typeof sessionStorage !== 'undefined') {
  sessionStorage.clear();
}

console.log('Cache cleared! Please refresh the page.');
