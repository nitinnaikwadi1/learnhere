'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8c53fd6e8d6475dcb628fb3a592de43a",
"assets/AssetManifest.bin.json": "c0dc2baac63a69da47d3bda64059db86",
"assets/AssetManifest.json": "48c01ecb79033e43a377f5ecaa33eb0b",
"assets/assets/animations/tap_button_yellow.json": "0a0509fe22b9cd7d3199107f3de4753f",
"assets/assets/audio/abcd/a.mp3": "11380bdb581b01427955b197ca464ed4",
"assets/assets/audio/abcd/b.mp3": "1acae9e1caccacba130bfcfde432d905",
"assets/assets/audio/abcd/c.mp3": "24f73bc7ff8d50c3b846b2fa830a916b",
"assets/assets/audio/abcd/d.mp3": "af496fa40ce6290839bf2432762bc12a",
"assets/assets/audio/abcd/e.mp3": "305250c3a26ca7bead3d12431817d745",
"assets/assets/audio/abcd/f.mp3": "980f30a71bdb6ceaec0506bb580b0fa7",
"assets/assets/audio/abcd/g.mp3": "12d184351a9a72485614ab48ddf0ae69",
"assets/assets/audio/abcd/h.mp3": "0953e8d8687d0f4811a9a1d380f7ee92",
"assets/assets/audio/abcd/i.mp3": "aca9ba02df180b3248114b0b2ccce640",
"assets/assets/audio/abcd/j.mp3": "058c1aeeb2b857a3320d20b71455ad1d",
"assets/assets/audio/abcd/k.mp3": "be9226d173b6d17a7c4d0241dd8bfa30",
"assets/assets/audio/abcd/l.mp3": "dfe2ae897163b7465b9e7ae8c2f7ee6e",
"assets/assets/audio/abcd/m.mp3": "27c9d68c2a127c17d799508bdc072683",
"assets/assets/audio/abcd/n.mp3": "7557284c816d733ab26f33e1a3fa5590",
"assets/assets/audio/abcd/o.mp3": "17fa5f813b45ba10404749610173a13f",
"assets/assets/audio/abcd/p.mp3": "cdd4cdb1d39fe5288cab1404a109af06",
"assets/assets/audio/abcd/q.mp3": "a7c91d81062b60719ff44380dfc241b4",
"assets/assets/audio/abcd/r.mp3": "92dcfffee4beed10e48ff52465acb798",
"assets/assets/audio/abcd/s.mp3": "6135155578a6ff9ed41c69843f7fe291",
"assets/assets/audio/abcd/t.mp3": "6fc13802ab802b5ba5cf4f44f6c0ac69",
"assets/assets/audio/abcd/u.mp3": "2b5d1ac0b45559098929c155e155459d",
"assets/assets/audio/abcd/v.mp3": "6f8cc6b11170cbc2b466f2b22ad4dfe4",
"assets/assets/audio/abcd/w.mp3": "053ccbcd00e607599359168ea8f970ff",
"assets/assets/audio/abcd/x.mp3": "4e700770ae90aa7acc559fe81b2f6508",
"assets/assets/audio/abcd/y.mp3": "6f90717800b2352f99bd6f0064d637f8",
"assets/assets/audio/abcd/z.mp3": "57dd10f1a2725ba480ed891e41bf0252",
"assets/assets/audio/backg_audio.mp3": "98c0491d7be5726596684cb825224191",
"assets/assets/images/back1.gif": "5f7a147e1cd3191e96cd6e511110bc2a",
"assets/assets/images/back2.gif": "b0cc70e529101dea0720ae28e17de062",
"assets/assets/images/dashboard/alphabets.gif": "107850f512e76f1006c2f7f431a7eb49",
"assets/assets/images/dashboard/animals.gif": "a205f9ee60e4b902d7351c3b538221cf",
"assets/assets/images/dashboard/birds.gif": "aa58306b9eb711c5f34e2b282e48b966",
"assets/assets/images/dashboard/colors.gif": "2035ed19265e612a9cbfec43a8d379e1",
"assets/assets/images/dashboard/flowers.gif": "689d5611cfb06c614c242e774093a1b7",
"assets/assets/images/dashboard/fruits.gif": "467a8a9a94ec841579275cf6e2e336ec",
"assets/assets/images/dashboard/insects.gif": "25101ac69c9e5aa342e063ff914f6252",
"assets/assets/images/dashboard/numbers.gif": "1f11d13f5068c8dff661f332856ff766",
"assets/assets/images/dashboard/reptiles.gif": "c640a2211acf7f7a981e688a6d8e4e9b",
"assets/assets/images/dashboard/sea_animals.gif": "a14c5a27ee666b3c1eeaed24c32c9202",
"assets/assets/images/dashboard/shapes.gif": "f4bb8adce53deba49c0e59b3a3748de2",
"assets/assets/images/dashboard/trees.gif": "0a7f009a44a2b84eca1ed9f106b542af",
"assets/assets/images/dashboard/vegetables.gif": "593fd1cabcab3421f6359b2182cd09c6",
"assets/assets/images/dashboard/vehicle.gif": "431d5328ae1c96fd7e29c482480625bf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "294ed0a94663591f8c0530d4d194eb20",
"assets/NOTICES": "377e2e0504080e5c020b419eafe28727",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "98c6ed2f565d7be54648005d70b5c787",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "f9c11f71bc94e87d1d4feeaa434b8434",
"icons/Icon-192.png": "2922f2c9802c6d9611a357e10cfb6d26",
"icons/Icon-512.png": "1f9281ab196f737b5194c7d1292bdf8e",
"index.html": "3664f4f09f7f12f1faf5f26bcbc539a9",
"/": "3664f4f09f7f12f1faf5f26bcbc539a9",
"main.dart.js": "94c584b59c3abb3fb26ce2b9abdf5819",
"manifest.json": "2f01562ea88ffeaaaef18155d2dfac7b",
"version.json": "bf9b7e925bbbb99253f37c3c67566aca"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
