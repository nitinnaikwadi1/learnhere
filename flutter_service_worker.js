'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "677625082c9a6c363c4728d7a2a313bd",
"assets/AssetManifest.bin.json": "a8a2be6fd5b9e4c1b905ef16d6dd62f1",
"assets/AssetManifest.json": "a4d21094e0e1284c3065817169c5d562",
"assets/assets/images/backgrounds/back1.gif": "5f7a147e1cd3191e96cd6e511110bc2a",
"assets/assets/images/backgrounds/back2.gif": "b0cc70e529101dea0720ae28e17de062",
"assets/assets/images/backgrounds/dandelion.gif": "e41468b5db4f9e77487b8ccc81b0d3e8",
"assets/assets/images/backgrounds/elephants.gif": "dafa5d4483287ae05a80fa74655cfdb6",
"assets/assets/images/backgrounds/flowers.gif": "c51a159f0e51011f9382c99d5d126dea",
"assets/assets/images/backgrounds/fluid.gif": "d0fc81f43aef8b31bdb663c65fd5ebab",
"assets/assets/images/backgrounds/road.gif": "746b60691d2b4ab2c0ebf254aae134d7",
"assets/assets/images/backgrounds/rocks.gif": "4f8933f237308fb973d7822431224986",
"assets/assets/images/backgrounds/submarine.gif": "dfce6e660b0e995037dc5ed84cd6b889",
"assets/assets/images/backgrounds/sunrise.gif": "d757e9a82c599ab4634ebc5f20dbc82f",
"assets/assets/images/dashboard/alphabets.gif": "107850f512e76f1006c2f7f431a7eb49",
"assets/assets/images/dashboard/animals.gif": "a205f9ee60e4b902d7351c3b538221cf",
"assets/assets/images/dashboard/birds.gif": "aa58306b9eb711c5f34e2b282e48b966",
"assets/assets/images/dashboard/colors.gif": "2035ed19265e612a9cbfec43a8d379e1",
"assets/assets/images/dashboard/flowers.gif": "689d5611cfb06c614c242e774093a1b7",
"assets/assets/images/dashboard/fruits.gif": "467a8a9a94ec841579275cf6e2e336ec",
"assets/assets/images/dashboard/insects.gif": "25101ac69c9e5aa342e063ff914f6252",
"assets/assets/images/dashboard/numbers.gif": "1f11d13f5068c8dff661f332856ff766",
"assets/assets/images/dashboard/objects.gif": "37b510a29ec7dd9223fa2c7d5b693557",
"assets/assets/images/dashboard/reptiles.gif": "c640a2211acf7f7a981e688a6d8e4e9b",
"assets/assets/images/dashboard/sea_animals.gif": "a14c5a27ee666b3c1eeaed24c32c9202",
"assets/assets/images/dashboard/shapes.gif": "f4bb8adce53deba49c0e59b3a3748de2",
"assets/assets/images/dashboard/trees.gif": "0a7f009a44a2b84eca1ed9f106b542af",
"assets/assets/images/dashboard/vegetables.gif": "593fd1cabcab3421f6359b2182cd09c6",
"assets/assets/images/dashboard/vehicle.gif": "431d5328ae1c96fd7e29c482480625bf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "58a4f0888339b37507e8470a39fa9759",
"assets/NOTICES": "838d56acb20b64d37e57f0833ff49cf0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "98c6ed2f565d7be54648005d70b5c787",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "51b40046ca861db3e72e9f220d59eb73",
"icons/Icon-192.png": "2922f2c9802c6d9611a357e10cfb6d26",
"icons/Icon-512.png": "1f9281ab196f737b5194c7d1292bdf8e",
"index.html": "3664f4f09f7f12f1faf5f26bcbc539a9",
"/": "3664f4f09f7f12f1faf5f26bcbc539a9",
"main.dart.js": "62f9c56708d11ee8114e3871843fc8bb",
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
