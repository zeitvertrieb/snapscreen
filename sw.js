/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-e365de7d6537d410da67.js"
  },
  {
    "url": "framework-02fcab78320a77685ff9.js"
  },
  {
    "url": "app-1fc15417a3597d7b522d.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "5b096743ecfaf2e2d3e3a9826045aca3"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5a1ee105f05b3144b807.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "243534c4146999de94375adbd80795e3"
  },
  {
    "url": "static/d/63159454.json"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "1b2ef43bf2b8488d732c2d3a88fa9f02"
  },
  {
    "url": "polyfill-1c73eff1cb06dfe3be93.js"
  },
  {
    "url": "styles.06da8195d06abf87e6ec.css"
  },
  {
    "url": "styles-c2fe8482057191dca484.js"
  },
  {
    "url": "01f6d17db53167da3c8e76ece80f2168fb039962-d9ade09f98d787649ae7.js"
  },
  {
    "url": "dc389e94862d1bc536d0ebc364f0a7490ba7b454-7fc57738536a3a7123e0.js"
  },
  {
    "url": "component---src-pages-vision-js-88ca8d41df9683e8f351.js"
  },
  {
    "url": "page-data/vision/page-data.json",
    "revision": "a666d7dca68482aeba9f64c61a8579bc"
  },
  {
    "url": "ee7e2504872fb7e9ccb2dd02a943b90c6b0e35c1-0674552d8fbfba1624e3.js"
  },
  {
    "url": "component---src-pages-solution-js-002065ef2a13b189385d.js"
  },
  {
    "url": "page-data/solution/page-data.json",
    "revision": "04c9d906036425a39417f601fb6ff562"
  },
  {
    "url": "component---src-pages-business-js-bbb37d1b4d5697eecfa9.js"
  },
  {
    "url": "page-data/business/page-data.json",
    "revision": "76a65cfb0d1fee359a0edb53bcc5eec1"
  },
  {
    "url": "component---src-pages-contact-js-31876960c6f80c7c767f.js"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "6a763fb8d83da277ac5f6c8b7d4aab3a"
  },
  {
    "url": "component---src-pages-try-js-c4bac994ccc126672951.js"
  },
  {
    "url": "page-data/try/page-data.json",
    "revision": "de65d30b1344454a14d1d06959852086"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "d1752e2bbbb54d565f8ba2b84873cf82"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/app-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/clipshare`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/clipshare/app-1fc15417a3597d7b522d.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/clipshare/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
