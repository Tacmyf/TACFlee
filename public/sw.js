if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let s = Promise.resolve();
      return (
        a[e] ||
          (s = new Promise(async (s) => {
            if ("document" in self) {
              const a = document.createElement("script");
              (a.src = e), document.head.appendChild(a), (a.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!a[e]) throw new Error(`Module ${e} didn’t register its module`);
          return a[e];
        })
      );
    },
    s = (s, a) => {
      Promise.all(s.map(e)).then((e) => a(1 === e.length ? e[0] : e));
    },
    a = { require: Promise.resolve(s) };
  self.define = (s, c, i) => {
    a[s] ||
      (a[s] = Promise.resolve().then(() => {
        let a = {};
        const n = { uri: location.origin + s.slice(1) };
        return Promise.all(
          c.map((s) => {
            switch (s) {
              case "exports":
                return a;
              case "module":
                return n;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = i(...e);
          return a.default || (a.default = s), a;
        });
      }));
  };
}
define("./sw.js", ["./workbox-c2b5e142"], function (e) {
  "use strict";
  importScripts(),
    e.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/Yova3dqmlgvDi5rS7XVex/_buildManifest.js",
          revision: "33f1459078c1d21e06002e715a195710",
        },
        {
          url: "/_next/static/Yova3dqmlgvDi5rS7XVex/_ssgManifest.js",
          revision: "abee47769bf307639ace4945f9cfd4ff",
        },
        {
          url:
            "/_next/static/chunks/0f5c36d157f20a51fab2a8a408eb2625b2973dc3.0321c45c39651311c023.js",
          revision: "d58b0d096f11ebd8f642977204d8d1d7",
        },
        {
          url:
            "/_next/static/chunks/2ec7d336389c9636d8474f7b9f632ef410a432b3.4a67f7014e6e7aa98e04.js",
          revision: "c2cd49ec1c06766f880ba1e4bd46b087",
        },
        {
          url:
            "/_next/static/chunks/44999b490483b336f0ff151bcabb15587405bc42.2ad935003d9227e0236c.js",
          revision: "2d8f3a12178f4f0332312f04e54cc2da",
        },
        {
          url:
            "/_next/static/chunks/54a4f8c2e2ec7160e7917812bc6d353b3db47f7b.894ecc17cea1e1952d2b.js",
          revision: "ff20ca6103b90200342c5b53c70793c6",
        },
        {
          url: "/_next/static/chunks/6728d85a.5efc241a9fb432a697e8.js",
          revision: "b2514a352a98e9e1ea2757ca0f7f84de",
        },
        {
          url: "/_next/static/chunks/95b64a6e.8ff0a61ee038efdedb62.js",
          revision: "398ac2d44a0c547d20630e150dc5b553",
        },
        {
          url: "/_next/static/chunks/commons.729cd93fa6ca0686e16c.js",
          revision: "0fa83d1f5a2dc891a5de60582a2563bf",
        },
        {
          url:
            "/_next/static/chunks/e37081098ce9ad2249ee2e0487043b9ad716383d.59679a921a822aa0437a.js",
          revision: "c08b1fa38b6f1de03b2284524b05c6f7",
        },
        {
          url:
            "/_next/static/chunks/efbe5f7bf6ae55eea849ff11b24b46d88d55ed88.8a57e8f1130c44cca30a.js",
          revision: "d570ca0e99302ee78a70f268a1dd7650",
        },
        {
          url: "/_next/static/chunks/f2e80800.8cb4150971556cfd6978.js",
          revision: "a5eba14fea974f4d1408ccd8356dbd20",
        },
        {
          url: "/_next/static/chunks/framework.1d36bc031662b4dc4c28.js",
          revision: "7eafc2b810ea3395615465510119d273",
        },
        {
          url: "/_next/static/chunks/main-f346e9223df5e9b5bc60.js",
          revision: "f855e7e7c4e39ce3d404b4090b7cf10a",
        },
        {
          url: "/_next/static/chunks/pages/_app-9fa2191592a22d8f9e49.js",
          revision: "0bdaf7c258634ede445814569acdd6c7",
        },
        {
          url: "/_next/static/chunks/pages/_error-4d6b328cdce6d51911e1.js",
          revision: "d21543a3497ca7be769a02833d4df11d",
        },
        {
          url: "/_next/static/chunks/pages/article-63d4eb2409206cc98a81.js",
          revision: "428ecbf5e240e245082312170eeef53b",
        },
        {
          url: "/_next/static/chunks/pages/contact-43435e665a3e3f8540f3.js",
          revision: "b33300172bc2650e1d7d4c1df4db50aa",
        },
        {
          url: "/_next/static/chunks/pages/counselling-e70ab69ed34e4346fa44.js",
          revision: "6398b032313a547a2b1697fd5d7e3b66",
        },
        {
          url: "/_next/static/chunks/pages/index-268ff006d157072cef94.js",
          revision: "9e70e572dfd424fb9b628a998e584f77",
        },
        {
          url: "/_next/static/chunks/pages/lesson-b0ec0c38ddd8bda336bc.js",
          revision: "236e0ef8be9daf02ee80eb39d337b7b1",
        },
        {
          url: "/_next/static/chunks/pages/ministry-ee945ea5c9c8b652517e.js",
          revision: "2717fb117b1a7bc33278a88cf7ecd5c6",
        },
        {
          url: "/_next/static/chunks/polyfills-78cde1760acba30b47d6.js",
          revision: "7b6f151944f42d2eba3fef9f8cfa18ce",
        },
        {
          url: "/_next/static/chunks/webpack-eb080e3f091731f228fb.js",
          revision: "2019297a9ccffe0e261600bad1b1f98a",
        },
        {
          url: "/_next/static/css/7b2e09b8efd1f60ac994.css",
          revision: "b707999a1268054c79be1db4217e0366",
        },
        {
          url: "/assets/art1.jpg",
          revision: "3a292e887bb7f677819ded55e5a90858",
        },
        {
          url: "/assets/art2.jpg",
          revision: "ec0575c14b32439bdcfbc7ed8ad22453",
        },
        {
          url: "/assets/art3.jpg",
          revision: "5f651883c66cd810c7670ea2ec49a267",
        },
        {
          url: "/assets/art4.jpg",
          revision: "3c4c331690c5b5b4caf3c3b3b0c8e20c",
        },
        {
          url: "/assets/art5.jpg",
          revision: "cc2530626c34cb3f34de39d9f0781395",
        },
        {
          url: "/assets/art6.jpg",
          revision: "77db9d7bb98d88b7132f2d51df6a2a22",
        },
        {
          url: "/assets/art7.jpg",
          revision: "a99989ea2caef1be1227377e1bfc59c1",
        },
        {
          url: "/assets/art8.jpg",
          revision: "6a25ff5b46a6c849860f568b8c0140d8",
        },
        {
          url: "/assets/art9.jpg",
          revision: "b6f63ff08ccc91364e11a2dd2d27f9f0",
        },
        {
          url: "/assets/contact.svg",
          revision: "4fb2f3636268a61a2713b306c58757a3",
        },
        {
          url: "/assets/home.svg",
          revision: "729977585fdc1786d3d748a80cae8087",
        },
        {
          url: "/assets/logo-white.png",
          revision: "0de3dea4bd15955ec511fa146c1017dd",
        },
        {
          url: "/assets/logo.png",
          revision: "941ed5edd9570571219c5cdf227edd75",
        },
        {
          url: "/assets/underconst.svg",
          revision: "90b76d400a22838518cc748a6f02b5f1",
        },
        { url: "/finale.pdf", revision: "c088de70b4c0778f5a36843b8902dbc5" },
        {
          url: "/ico/icon-192x192.png",
          revision: "a9eea386f921a4bd937d9102db8e6096",
        },
        {
          url: "/ico/icon-256x256.png",
          revision: "12fea9955538eaa0f5b64fe4f9159e85",
        },
        {
          url: "/ico/icon-384x384.png",
          revision: "03b9f3dd49082245d0a8111ce3cf0c72",
        },
        {
          url: "/ico/icon-512x512.png",
          revision: "d5a0856ac7628371d0c526e536d2348b",
        },
        { url: "/lesson1.pdf", revision: "923aa6e2421c4bd8f77d6a84bcffa275" },
        { url: "/lesson2.pdf", revision: "ce3f56e2822edf3d3af13838f33ae0bc" },
        { url: "/lesson3.pdf", revision: "4d89956f8738725ffcfe27d03d253624" },
        { url: "/lesson4.pdf", revision: "9bfa4b3951a92a8baa7dbc50ee813016" },
        { url: "/manifest.json", revision: "1847a6f5a566c5b6117164526faeaa63" },
        { url: "/preface.pdf", revision: "da3eb53e7854694527a17365c8f833e3" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 1,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/api\/.*$/i,
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /.*/i,
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    );
});
