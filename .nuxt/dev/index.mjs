import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { Server } from 'node:http';
import { resolve, dirname, join } from 'node:path';
import nodeCrypto from 'node:crypto';
import { isMainThread, parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, createError, sendRedirect, proxyRequest, getRequestProtocol, getRequestHost as getRequestHost$1, getRequestURL, readRawBody, getRequestHeader, isError, setResponseHeaders, setResponseStatus, send as send$2, setResponseHeader, appendResponseHeader, getResponseHeader, getRequestHeaders, getResponseStatus, getCookie, setCookie, sanitizeStatusCode, removeResponseHeader, getRouterParam, setHeader, writeEarlyHints, getQuery as getQuery$1, getRequestWebStream, getHeader, readBody, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getRequestIP, toWebRequest } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/h3/dist/index.mjs';
import { escapeHtml } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/@vue/shared/dist/shared.cjs.js';
import viteNodeEntry_mjs from 'file:///D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/@nuxt/vite-builder/dist/vite-node-entry.mjs';
import { viteNodeFetch } from 'file:///D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/@nuxt/vite-builder/dist/vite-node.mjs';
import { stringify as stringify$1, uneval } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/nuxt/node_modules/devalue/src/index.js';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withTrailingSlash, joinRelativeURL, withoutTrailingSlash, parsePath, withLeadingSlash, decodePath } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/ufo/dist/index.mjs';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import destr, { destr as destr$1 } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/destr/dist/index.mjs';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/unhead/dist/server.mjs';
import { existsSync, readFileSync, promises } from 'node:fs';
import process$1 from 'node:process';
import { klona } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/klona/dist/index.mjs';
import defu, { defuFn, defu as defu$1, createDefu } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/scule/dist/index.mjs';
import { createHooks } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/node-mock-http/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/unstorage/drivers/fs.mjs';
import { digest, hash as hash$1 } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/ohash/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/radix3/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import consola, { consola as consola$1 } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/youch-core/build/index.js';
import { Youch } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/source-map/source-map.js';
import { defineDiagnostics, createConsoleReporter } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/nostics/dist/index.mjs';
import { ansiFormatter } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/nostics/dist/formatters/ansi.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { stringify } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/@nuxt/nitro-server/node_modules/devalue/src/index.js';
import { getContext } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/unctx/dist/index.mjs';
import { captureRawStackTrace, parseRawStackTrace } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/errx/dist/index.mjs';
import { isRef, toValue, isVNode } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/vue/index.mjs';
import _Nt21vChmTD3yUJFD3W9D5Ev7bjZrBDRuVT2x7ZA1UQQ from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/@nuxt/cli/runtime/dev-close-sockets.mjs';
import { createRouterMatcher } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/@nuxtjs/i18n/node_modules/vue-router/vue-router.node.mjs';
import { formatWithOptions } from 'node:util';
import _Z4Vm0BJMJeyU_KFYzGBgSOBoZ4JOQn4jYmko_KtDwU from 'file:///D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/@nuxt/vite-builder/dist/ssr-sourcemap.mjs';
import _LB91z6Ht2T49ncvhFWMKIA26eT4mdBc7tIFl06yLKKs from 'file:///D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/@nuxt/vite-builder/dist/vite-node-warmup.mjs';
import { fileURLToPath } from 'node:url';
import { dirname as dirname$1, resolve as resolve$1, isAbsolute } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/pathe/dist/index.mjs';
import { resolveTags, walkResolver } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/unhead/dist/utils.mjs';
import { PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin, SafeInputPlugin } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/unhead/dist/plugins.mjs';
import { renderToString } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/vue/server-renderer/index.mjs';
import { DeprecationsPlugin } from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/unhead/dist/legacy.mjs';
import localAdapter from 'file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/db0/dist/connectors/better-sqlite3.mjs';

const serverAssets = [{"baseName":"server","dir":"D:/1_RITHY/1_PROJECT PROGRAMMING/PROJECTS/OFFICIAL PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage$3 = createStorage({});

storage$3.mount('/assets', assets$1);

storage$3.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:/1_RITHY/1_PROJECT PROGRAMMING/PROJECTS/OFFICIAL PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT","ignore":["**/node_modules","**/*.stories.js","**/*.stories.cts","**/*.stories.mts","**/*.stories.ts","**/*.stories.jsx","**/*.stories.tsx","**/*.spec.js","**/*.spec.cts","**/*.spec.mts","**/*.spec.ts","**/*.spec.jsx","**/*.spec.tsx","**/*.test.js","**/*.test.cts","**/*.test.mts","**/*.test.ts","**/*.test.jsx","**/*.test.tsx","**/*.d.cts","**/*.d.mts","**/*.d.ts","**/*.d.vue.cts","**/*.d.vue.mts","**/*.d.vue.ts","**/.pnpm-store","**/.vercel","**/.netlify","**/.wrangler","**/.output","**/.git","**/.cache","**/.data","**/.direnv","D:/1_RITHY/1_PROJECT PROGRAMMING/PROJECTS/OFFICIAL PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/vendor","**/node-compile-cache","**/test-results","**/*.sock","D:/1_RITHY/1_PROJECT PROGRAMMING/PROJECTS/OFFICIAL PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/.nuxt/analyze","**/.nuxt","**/-*.*","D:/1_RITHY/1_PROJECT PROGRAMMING/PROJECTS/OFFICIAL PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/content/**"]}));
storage$3.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:/1_RITHY/1_PROJECT PROGRAMMING/PROJECTS/OFFICIAL PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/server","ignore":["**/node_modules","**/*.stories.js","**/*.stories.cts","**/*.stories.mts","**/*.stories.ts","**/*.stories.jsx","**/*.stories.tsx","**/*.spec.js","**/*.spec.cts","**/*.spec.mts","**/*.spec.ts","**/*.spec.jsx","**/*.spec.tsx","**/*.test.js","**/*.test.cts","**/*.test.mts","**/*.test.ts","**/*.test.jsx","**/*.test.tsx","**/*.d.cts","**/*.d.mts","**/*.d.ts","**/*.d.vue.cts","**/*.d.vue.mts","**/*.d.vue.ts","**/.pnpm-store","**/.vercel","**/.netlify","**/.wrangler","**/.output","**/.git","**/.cache","**/.data","**/.direnv","**/node-compile-cache","**/test-results","**/*.sock","**/-*.*"]}));
storage$3.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:/1_RITHY/1_PROJECT PROGRAMMING/PROJECTS/OFFICIAL PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/.nuxt"}));
storage$3.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:/1_RITHY/1_PROJECT PROGRAMMING/PROJECTS/OFFICIAL PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/.nuxt/cache"}));
storage$3.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"D:/1_RITHY/1_PROJECT PROGRAMMING/PROJECTS/OFFICIAL PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage$3, base) : storage$3;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event._path = incomingEvent._path;
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_riththy/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/": {
        "prerender": true
      },
      "/__nuxt_content/**": {
        "robots": false,
        "cache": false
      },
      "/__nuxt_content/docs/sql_dump.txt": {
        "prerender": true
      },
      "/_fonts/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        },
        "cache": {
          "maxAge": 31536000
        }
      },
      "/_riththy/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_riththy/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "appSecret": "656d4bb744a67f9e870ade5b21274c0d0c3752c6e56b5a3d7de35965332fe17f",
  "public": {
    "googleClientId": "",
    "telegramBotUsername": "",
    "facebookAppId": "",
    "tiktokClientKey": "",
    "apiUrl": "http://192.168.43.52:8080",
    "webUrl": "http://localhost:3000",
    "anthropicApiKey": "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",
    "googleApiKey": "AQ.Ab8RN6KiNf4PYrygsEdCSRwdvOCBswrCTBRuCcFFfmrN15yXoQ",
    "colorMode": {
      "cookieAttrs": ""
    },
    "mdc": {
      "components": {
        "prose": true,
        "map": {
          "accordion": "ProseAccordion",
          "accordion-item": "ProseAccordionItem",
          "badge": "ProseBadge",
          "callout": "ProseCallout",
          "card": "ProseCard",
          "card-group": "ProseCardGroup",
          "caution": "ProseCaution",
          "code-collapse": "ProseCodeCollapse",
          "code-group": "ProseCodeGroup",
          "code-icon": "ProseCodeIcon",
          "code-preview": "ProseCodePreview",
          "code-tree": "ProseCodeTree",
          "collapsible": "ProseCollapsible",
          "field": "ProseField",
          "field-group": "ProseFieldGroup",
          "icon": "ProseIcon",
          "kbd": "ProseKbd",
          "note": "ProseNote",
          "prompt": "ProsePrompt",
          "steps": "ProseSteps",
          "tabs": "ProseTabs",
          "tabs-item": "ProseTabsItem",
          "tip": "ProseTip",
          "warning": "ProseWarning"
        },
        "customElements": []
      },
      "headings": {
        "anchorLinks": {
          "h1": false,
          "h2": true,
          "h3": true,
          "h4": true,
          "h5": false,
          "h6": false
        }
      },
      "highlight": {
        "noApiRoute": true,
        "theme": {
          "light": "material-theme-lighter",
          "default": "material-theme",
          "dark": "material-theme-palenight"
        },
        "highlighter": "shiki",
        "shikiEngine": "oniguruma",
        "langs": [
          "js",
          "jsx",
          "json",
          "ts",
          "tsx",
          "vue",
          "css",
          "html",
          "bash",
          "md",
          "mdc",
          "yaml"
        ]
      }
    },
    "i18n": {
      "baseUrl": "",
      "defaultLocale": "en",
      "rootRedirect": "",
      "redirectStatusCode": 302,
      "skipSettingLocaleOnNavigate": false,
      "locales": [
        {
          "code": "en",
          "name": "English",
          "iso": "en-US",
          "flag": "/flags/gb.svg",
          "language": "",
          "domains": [],
          "defaultForDomains": []
        },
        {
          "code": "km",
          "name": "ខ្មែរ",
          "iso": "km-KH",
          "flag": "/flags/kh.svg",
          "language": "",
          "domains": [],
          "defaultForDomains": []
        }
      ],
      "detectBrowserLanguage": false,
      "experimental": {
        "localeDetector": "",
        "typedPages": true,
        "typedOptionsAndMessages": false,
        "alternateLinkCanonicalQueries": true,
        "devCache": false,
        "cacheLifetime": "",
        "stripMessagesPayload": false,
        "preload": false,
        "strictSeo": false,
        "nitroContextDetection": true,
        "httpCacheDuration": 10,
        "compactRoutes": false,
        "prerenderMessages": false,
        "optimizeMessageBundling": false
      },
      "domainLocales": {
        "en": {
          "domain": ""
        },
        "km": {
          "domain": ""
        }
      }
    },
    "content": {
      "wsUrl": ""
    }
  },
  "anthropicApiKey": "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",
  "googleApiKey": "AQ.Ab8RN6KiNf4PYrygsEdCSRwdvOCBswrCTBRuCcFFfmrN15yXoQ",
  "icon": {
    "serverKnownCssClasses": []
  },
  "content": {
    "databaseVersion": "v3.5.0",
    "version": "3.16.2",
    "database": {
      "type": "sqlite",
      "filename": "./contents.sqlite"
    },
    "localDatabase": {
      "type": "sqlite",
      "filename": "D:/1_RITHY/1_PROJECT PROGRAMMING/PROJECTS/OFFICIAL PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/.data/content/contents.sqlite"
    },
    "integrityCheck": true
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function isPathInScope(pathname, base) {
  let canonical;
  try {
    const pre = pathname.replace(/%2f/gi, "/").replace(/%5c/gi, "\\");
    canonical = new URL(pre, "http://_").pathname;
  } catch {
    return false;
  }
  return !base || canonical === base || canonical.startsWith(base + "/");
}

const config$2 = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config$2.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules$1(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          if (!isPathInScope(event.path.split("?")[0], strpBase)) {
            throw createError({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          if (!isPathInScope(event.path.split("?")[0], strpBase)) {
            throw createError({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules$1(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

// src/runtime/utils/event.ts
const ENC_PIPE_RE = /%7C/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_ENC_SLASH_RE = /%252F/gi;
const HASH_RE = /#/g;
const QUESTION_MARK_RE = /\?/g;
const DOT_SEGMENT_RE = /(?:^|\/)\.{1,2}(?:\/|$)/;
function encodeEventPath(path) {
	const queryIndex = path.indexOf("?");
	if (queryIndex === -1) return encodeVueRouterPath(path);
	return encodeVueRouterPath(path.slice(0, queryIndex)) + path.slice(queryIndex);
}
function encodeVueRouterPath(path) {
	return encodeURI(path).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]").replace(HASH_RE, "%23").replace(QUESTION_MARK_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F");
}
/**
* The response headers of an h3 v1 event, in the shape the renderer writes them in.
*
* Backed by the node response rather than a copy of it, so a header the app sets through
* h3 and a header the renderer sets are the same header, and both are sent.
*/
var NodeResponseHeaders = class {
	res;
	constructor(res) {
		this.res = res;
	}
	get(name) {
		const value = this.res.getHeader(name);
		if (value === void 0) return null;
		return Array.isArray(value) ? value.join(", ") : String(value);
	}
	has(name) {
		return this.res.hasHeader(name);
	}
	set(name, value) {
		this.res.setHeader(name, value);
	}
	append(name, value) {
		const existing = this.res.getHeader(name);
		if (existing === void 0) {
			this.res.setHeader(name, value);
			return;
		}
		this.res.setHeader(name, Array.isArray(existing) ? [...existing, value] : [String(existing), value]);
	}
	delete(name) {
		this.res.removeHeader(name);
	}
	getSetCookie() {
		const value = this.res.getHeader("set-cookie");
		if (value === void 0) return [];
		return Array.isArray(value) ? value.map(String) : [String(value)];
	}
	*entries() {
		const headers = this.res.getHeaders();
		for (const name of Object.keys(headers).sort()) {
			const value = headers[name];
			if (value === void 0) continue;
			if (name === "set-cookie" && Array.isArray(value)) for (const entry of value) yield [name, entry];
			else yield [name, Array.isArray(value) ? value.join(", ") : String(value)];
		}
	}
	*keys() {
		for (const [name] of this.entries()) yield name;
	}
	*values() {
		for (const [, value] of this.entries()) yield value;
	}
	forEach(callback, thisArg) {
		for (const [name, value] of this.entries()) callback.call(thisArg, value, name, this);
	}
	[Symbol.iterator]() {
		return this.entries();
	}
};
const PAYLOAD_METHODS = /* @__PURE__ */ new Set([
	"PATCH",
	"POST",
	"PUT",
	"DELETE"
]);
const BODY_READ_METHODS = /* @__PURE__ */ new Set([
	"arrayBuffer",
	"blob",
	"bytes",
	"formData",
	"json",
	"text"
]);
/**
* The request in the web-standard shape, with every read of its body served from the bytes
* h3 v1 caches on the node request.
*
* A body read here and a `readBody(event)` elsewhere in the same request therefore resolve
* to the same bytes whichever happens first, and reading the request twice - directly, from
* a clone, or as a stream - resolves the same bytes each time rather than the second read
* finding a stream the first has drained.
*/
function toWebRequest$1(event) {
	const existing = event.web?.request;
	if (existing) return existing;
	const method = event.method;
	if (!PAYLOAD_METHODS.has(method)) return new Request(getRequestURL(event), {
		method,
		headers: event.headers,
		signal: toRequestSignal(event)
	});
	const request = new Request(getRequestURL(event), {
		method,
		headers: event.headers,
		body: toBufferedBodyStream(event),
		signal: toRequestSignal(event),
		duplex: "half"
	});
	const read = () => readRawBody(event, false).then((body) => body ? new Uint8Array(body) : /* @__PURE__ */ new Uint8Array());
	const copy = () => read().then((body) => new Response(body, { headers: request.headers }));
	const buffered = new Proxy(request, { get(target, property) {
		if (property === "bodyUsed") return false;
		if (property === "body") return toBufferedBodyStream(event);
		if (property === "clone") return () => buffered;
		if (typeof property === "string" && BODY_READ_METHODS.has(property)) return () => copy().then((response) => response[property]());
		const value = Reflect.get(target, property, target);
		return typeof value === "function" ? value.bind(target) : value;
	} });
	return buffered;
}
/**
* Aborts when the client disconnects before the response is finished, the same moment an h3 v1
* handler would catch with `event.node.req.on('close')`.
*/
function toRequestSignal(event) {
	const controller = new AbortController();
	const res = event.node?.res;
	if (typeof res?.once === "function") res.once("close", () => {
		if (!res.writableFinished) controller.abort();
	});
	return controller.signal;
}
function toBufferedBodyStream(event) {
	return new ReadableStream({ async pull(controller) {
		const body = await readRawBody(event, false);
		if (body) controller.enqueue(new Uint8Array(body));
		controller.close();
	} });
}
/**
* The Nuxt context a request nitro made to itself was fetched with: `node-mock-http` carries
* it on the mock request rather than in the h3 event's own context. A request that arrives
* over the network has none, whoever sent it.
*/
function getFetchedRequestContext(event) {
	return event.node.req.__unenv__?.nuxt;
}
/**
* The event the SSR renderer reads, which reaches the h3 v1 event itself through `~app`.
* Of the Nuxt context a request nitro made to itself was fetched with, only the error render
* flag carries over.
*
* Paths with `.` or `..` segments 404, as `url` would resolve them to a page other than the
* one `event.path` names.
*/
function toRequestEvent(event) {
	const queryIndex = event.path.indexOf("?");
	if (DOT_SEGMENT_RE.test(queryIndex === -1 ? event.path : event.path.slice(0, queryIndex))) throw createError({
		statusCode: 404,
		statusMessage: "Page Not Found"
	});
	const requestEvent = toWebView(event);
	if (getFetchedRequestContext(event)?.["~rendering-error"]) event.context.nuxt = {
		"~rendering-error": true,
		...event.context.nuxt
	};
	return requestEvent;
}
/**
* Describe an h3 v1 event in the web-standard shape, rather than adapting it in place:
* `event.req` and `event.res` already name the node request and response, and that is the
* shape `useRequestEvent()` and the render hooks must keep seeing.
*
* Everything is resolved on access, and the response is backed by the node response rather
* than a copy of it, so a header the application sets through h3 and a header the renderer
* sets are the same header.
*/
function toWebView(event, resolveURL = () => new URL(encodeEventPath(event.path), `${getRequestProtocol(event)}://${getRequestHost$1(event)}`)) {
	const node = event.node;
	let request;
	let url;
	const res = {
		get status() {
			return node.res.statusCode;
		},
		set status(status) {
			node.res.statusCode = status;
		},
		get statusText() {
			return node.res.statusMessage;
		},
		set statusText(statusText) {
			node.res.statusMessage = statusText;
		},
		headers: new NodeResponseHeaders(node.res)
	};
	const requestEvent = {
		context: event.context,
		res,
		get req() {
			return request ??= toWebRequest$1(event);
		},
		get url() {
			return url ??= resolveURL();
		},
		set url(value) {
			url = value;
			event._path = node.req.url = value.pathname + value.search;
		}
	};
	requestEvent["~app"] = event;
	return requestEvent;
}

// src/runtime/utils/error.ts
/**
* Nitro internal functions extracted from https://github.com/nitrojs/nitro/blob/v2/src/runtime/internal/utils.ts
*/
function isJsonRequest(event) {
	if (hasReqHeader(event, "accept", "text/html")) return false;
	return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
	const value = getRequestHeader(event, name);
	return !!(value && typeof value === "string" && value.toLowerCase().includes(includes));
}

const appId$1 = "nuxt-app";

const headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

const VueResolver = /* @__PURE__ */ Object.assign(
  (_, value) => isRef(value) ? toValue(value) : value,
  // identity for plain non-reactive values, so the SSR default init entry
  // keeps its precomputed fast path (see unhead/server createHead)
  { _static: true }
);

// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const legacyPlugins = [DeprecationsPlugin, PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin];

const unheadOptions = {
  disableDefaults: true,
  plugins: legacyPlugins,
};

const renderSSRHeadOptions = {"omitLineBreaks":true};

const NUXT_PRERENDER_NO_SSR_ROUTES = ["/index.html","/200.html","/404.html"];
const NUXT_NO_SCRIPTS_PATTERNS = [];
const NUXT_PAGE_PATTERNS = ["/","/en/content/articles","/km/content/articles","/en/content/categories","/km/content/categories","/en/docs/*","/km/docs/*","/en/:locale/docs/*","/km/:locale/docs/*","/en","/km"];
const NUXT_SSR_STREAMING = false;
const appHead = {"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"description","content":"Premium event management platform"},{"property":"og:title","content":"Sarika Event Management"},{"property":"og:description","content":"Premium event management platform"},{"property":"og:type","content":"website"},{"name":"theme-color","content":"#111111"}],"link":[{"rel":"icon","type":"image/svg+xml","href":"/favicon.svg"},{"rel":"preconnect","href":"https://fonts.googleapis.com"},{"rel":"preconnect","href":"https://fonts.gstatic.com","crossorigin":""},{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=Noto+Serif+Khmer:wght@300;400;500&display=swap"},{"rel":"stylesheet","href":"https://cdn.jsdelivr.net/npm/remixicon@4.9.1/fonts/remixicon.min.css"}],"style":[],"script":[],"noscript":[],"htmlAttrs":{"lang":"en","dir":"ltr"},"title":"IT CONTENT DOCS","bodyAttrs":{"class":"riththy-main"}};
const appRootTag = "riththy-main";
const appRootAttrs = {"id":"riththy","class":"isolate"};
const appTeleportTag = "div";
const appTeleportAttrs = {"id":"teleports"};
const appSpaLoaderTag = "div";
const appSpaLoaderAttrs = {"id":"__nuxt-loader"};
const appId = "nuxt-app";

// src/runtime/handlers/error.ts
var error_default = async function errorhandler(error, event, { defaultHandler }) {
	if (event.handled) return;
	const isRenderingError = !!(event.context.nuxt?.["~rendering-error"] || getFetchedRequestContext(event)?.["~rendering-error"]);
	let devError;
	let errorCause;
	{
		const errorChannel = await Promise.resolve().then(function () { return errorChannel$1; });
		const isHTTPError = isError(error);
		const isExpected = !error.unhandled && isHTTPError && (error.statusCode || 500) < 500 && !(THROWN_VALUE in error);
		devError = await errorChannel.observeDevError(error, event, {
			expected: isExpected,
			publish: !isRenderingError && true,
			print: !isRenderingError && (error.unhandled ?? !isHTTPError)
		});
		errorCause = errorChannel.serializeErrorCause(error.cause);
	}
	const stacks = snapshotStacks(error) ;
	if (isJsonRequest(event)) {
		if (!devError && true) return;
		const { headers, status, statusText, body } = await defaultHandler(error, event, {
			json: true,
			silent: !!devError
		});
		stacks?.restore();
		setResponseHeaders(event, headers);
		appendVary(event, "accept, sec-fetch-mode");
		setResponseStatus(event, status, statusText);
		return send$2(event, typeof body === "string" ? body : JSON.stringify(body, null, 2));
	}
	const defaultRes = await defaultHandler(error, event, {
		json: true,
		silent: !!devError
	});
	stacks?.restore();
	if ((error.status || error.statusCode || 500) === 404 && defaultRes.status === 302) {
		setResponseHeaders(event, defaultRes.headers);
		appendVary(event, "accept, sec-fetch-mode");
		setResponseStatus(event, defaultRes.status, defaultRes.statusText);
		return send$2(event, JSON.stringify(defaultRes.body, null, 2));
	}
	if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) defaultRes.body.stack = defaultRes.body.stack.join("\n");
	const errorObject = defaultRes.body;
	const url = new URL(errorObject.url);
	errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
	errorObject.message = error.unhandled ? errorObject.message || "Server Error" : error.message || errorObject.message || "Server Error";
	if (!error.unhandled) errorObject.data ||= error.data;
	errorObject.statusText ||= error.statusText || error.statusMessage;
	delete defaultRes.headers["content-type"];
	delete defaultRes.headers["content-security-policy"];
	setResponseHeaders(event, defaultRes.headers);
	appendVary(event, "accept, sec-fetch-mode");
	if (!isRenderingError) event.context.nuxt = {
		...event.context.nuxt,
		"~rendering-error": true
	};
	const res = isRenderingError ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), {
		...errorObject,
		...errorCause !== void 0 && { cause: JSON.stringify(errorCause) }
	}), {
		headers: event.headers,
		redirect: "manual",
		context: { nuxt: { "~rendering-error": true } }
	}).catch(() => null);
	if (event.handled) return;
	if (!res) {
		setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
		if (isRenderingError) setResponseHeader(event, ERROR_PAGE_HEADER, "1");
		else if (devError) {
			const body = await devError.page().catch(() => void 0);
			if (body) return send$2(event, body);
		}
		const { template } = await Promise.resolve().then(function () { return errorTemplate; });
		errorObject.description = errorObject.message;
		return send$2(event, template(errorObject));
	}
	let html = await res.text();
	for (const [header, value] of res.headers.entries()) {
		if (header === ERROR_PAGE_HEADER) continue;
		if (header === "set-cookie" || header === "x-nitro-prerender") {
			appendResponseHeader(event, header, value);
			continue;
		}
		setResponseHeader(event, header, value);
	}
	setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
	if (devError && typeof html === "string") try {
		html = res.headers.has(ERROR_PAGE_HEADER) ? await devError.page() : await devError.overlay(html);
	} catch {}
	return send$2(event, html);
};
/** The stacks of an error and its causes as raised, before Nitro rewrites them. */
function snapshotStacks(error) {
	const stacks = [];
	const seen = /* @__PURE__ */ new Set();
	for (let current = error; current instanceof Error && !seen.has(current); current = current.cause) {
		seen.add(current);
		stacks.push([current, current.stack]);
	}
	return { restore() {
		for (const [target, stack] of stacks) if (target.stack !== stack) try {
			Object.defineProperty(target, "stack", {
				value: stack,
				writable: true,
				configurable: true
			});
		} catch {}
	} };
}
/** Set on an error created from a thrown value that was not an `Error`. */
const THROWN_VALUE = Symbol.for("nuxt:dev:thrown");
/** Set when the app's own error page could not render. */
const ERROR_PAGE_HEADER = "x-nuxt-error-page";
/**
* Add `value`'s tokens to the response `vary` header, keeping any already
* present. `*` absorbs everything else, since it means the response varies on
* all headers.
*/
function appendVary(event, value) {
	const incoming = parseVary(value);
	if (!incoming.length) return;
	const existing = parseVary(getResponseHeader(event, "vary"));
	if (existing.includes("*")) return;
	if (incoming.includes("*")) {
		setResponseHeader(event, "vary", "*");
		return;
	}
	const merged = existing.slice();
	for (const token of incoming) if (!merged.includes(token)) merged.push(token);
	setResponseHeader(event, "vary", merged.join(", "));
}
function parseVary(value) {
	return (Array.isArray(value) ? value : typeof value === "string" ? value.split(",") : []).map((token) => token.trim().toLowerCase()).filter(Boolean);
}

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send$2(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json ?? !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const consumerCache = /* @__PURE__ */ new Map();
  let parsed;
  try {
    parsed = await new ErrorParser().defineSourceLoader((frame) => sourceLoader(frame, consumerCache)).parse(error);
  } finally {
    for (const consumer of consumerCache.values()) {
      await consumer.then((c) => c?.destroy()).catch(() => {
      });
    }
  }
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
function loadConsumer(fileName, cache) {
  const cached = cache.get(fileName);
  if (cached) {
    return cached;
  }
  const promise = (async () => {
    const rawSourceMap = await readFile(`${fileName}.map`, "utf8").catch(
      () => {
      }
    );
    if (!rawSourceMap) {
      return void 0;
    }
    return await new SourceMapConsumer(rawSourceMap);
  })().catch(() => void 0);
  cache.set(fileName, promise);
  return promise;
}
async function sourceLoader(frame, consumerCache) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const bundleFileName = frame.fileName;
    try {
      const consumer = await loadConsumer(bundleFileName, consumerCache);
      if (consumer) {
        const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
        if (originalPosition.source && originalPosition.line) {
          frame.fileName = resolve(dirname(bundleFileName), originalPosition.source);
          frame.lineNumber = originalPosition.line;
          frame.columnNumber = originalPosition.column || 0;
        }
      }
    } catch {
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [error_default, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const decodeRoutePath = function decodeRoutePath(path) {
	if (!path.includes("%")) return path;
	const queryIndex = path.indexOf("?");
	const pathname = queryIndex === -1 ? path : path.slice(0, queryIndex);
	try {
		return queryIndex === -1 ? decodeURI(pathname) : decodeURI(pathname) + path.slice(queryIndex);
	} catch {
		return path;
	}
};
const resolveRoutePathDotSegments = function resolveRoutePathDotSegments(path) {
	const queryIndex = path.indexOf("?");
	const pathname = queryIndex === -1 ? path : path.slice(0, queryIndex);
	if (!/(?:^|\/)(?:\.|%2e)/i.test(pathname)) return path;
	const input = pathname.split("/");
	const output = [];
	const root = pathname.startsWith("/") ? 1 : 0;
	for (const [i, segment] of input.entries()) {
		const dots = /^(?:\.|%2e)(\.|%2e)?$/i.exec(segment);
		if (!dots) {
			output.push(segment);
			continue;
		}
		if (dots[1] && output.length > root) output.pop();
		if (i === input.length - 1) output.push("");
	}
	const resolved = output.join("/");
	return queryIndex === -1 ? resolved : resolved + path.slice(queryIndex);
};
const foldRouteCase = function foldRouteCase(path) {
	return path.replace(/[A-Z]+|[^\0-\x7F]/g, (char) => {
		if (char.charCodeAt(0) < 128) return char.toLowerCase();
		const upper = char.toUpperCase();
		if (upper.length !== 1 || upper.charCodeAt(0) < 128) return char;
		const lower = upper.toLowerCase();
		return lower.length === 1 && lower.toUpperCase() === upper ? lower : upper;
	});
};
const normalizePath = (path, fold) => {
  if (typeof path !== 'string') { return path }
  const decoded = decodeRoutePath(resolveRoutePathDotSegments(path));
  return fold ? foldRouteCase(decoded) : decoded
};
const normalizeRouteRulePath = path => normalizePath(path, true);

// src/runtime/utils/route-rules.ts
let matcher;
function getMatcher() {
	if (!matcher) {
		const routes = {};
		for (const [route, rules] of Object.entries(useRuntimeConfig().nitro?.routeRules || {})) routes[normalizeRouteRulePath(route)] = rules;
		matcher = toRouteMatcher(createRouter({ routes }));
	}
	return matcher;
}
/**
* Resolve the route rules for a path without the base URL. Keys and path are decoded,
* and case-folded unless routing is `sensitive`.
*/
function matchRouteRules(path) {
	return defu$1({}, ...getMatcher().matchAll(normalizeRouteRulePath(path)).reverse());
}
/** Resolve the route rules for a request, as {@link matchRouteRules} does for its path. */
function resolveRequestRouteRules(event) {
	return matchRouteRules(withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL));
}
/** The route rules for a request, reusing those already resolved for it. */
function getRouteRules(event) {
	const context = event.context._nitro ||= {};
	return context.routeRules ||= resolveRequestRouteRules(event);
}

// src/runtime/plugins/route-rules.ts
var route_rules_default = (nitroApp) => {
	nitroApp.hooks.hook("request", (event) => {
		event.context._nitro ||= {};
		event.context._nitro.routeRules = resolveRequestRouteRules(event);
	});
};

// src/runtime/diagnostics.ts
const ansi$1 = (open, close) => (s) => `\x1B[${open}m${s}\x1B[${close}m`;
const colors$1 = {
	red: ansi$1(31, 39),
	yellow: ansi$1(33, 39),
	cyan: ansi$1(36, 39),
	gray: ansi$1(90, 39),
	bold: ansi$1(1, 22),
	dim: ansi$1(2, 22)
};
/**
* E8xxx
* Nitro server runtime (dev server) diagnostics, sharing the range with the
* SSR renderer.
*/
const docsBase$1 = (code) => `https://nuxt.com/docs/4.x/errors/${code.replace("NUXT_", "").toLowerCase()}`;
const serverDiagnostics = /* #__PURE__ */ defineDiagnostics({
	docsBase: docsBase$1,
	reporters: [/* @__PURE__ */ createConsoleReporter({ formatter: ansiFormatter(colors$1) } )],
	codes: {
		NUXT_E8003: {
			why: (p) => `Failed to stringify dev server logs.${p.error ? ` Received \`${p.error}\`.` : ""}`,
			fix: "You can define your own reducer/reviver for rich types following the instructions in `https://nuxt.com/docs/4.x/api/composables/use-nuxt-app#payload`.",
			docs: false
		},
		NUXT_E8005: {
			why: "Island props cannot contain a `template` key, which the Vue runtime compiler would compile and execute.",
			fix: "Rename the prop (e.g. `templateName`), or disable `vue.runtimeCompiler` if you do not need runtime template compilation.",
			docs: false
		},
		NUXT_E8012: {
			why: (p) => `\`${p.helper}\` from \`nuxt/server\` was called with an h3 event. The handler was defined with h3's \`defineEventHandler\` (auto-imported), which passes a different event.`,
			fix: "Import `defineEventHandler` from `nuxt/server` alongside the helpers. See `https://nuxt.com/docs/4.x/getting-started/upgrade#moving-to-nuxtserver`.",
			docs: false
		}
	}
});

const rootDir = "D:/1_RITHY/1_PROJECT PROGRAMMING/PROJECTS/OFFICIAL PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT";
const srcDir = "D:/1_RITHY/1_PROJECT PROGRAMMING/PROJECTS/OFFICIAL PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/app";

// src/runtime/plugins/dev-server-logs.ts
const devReducers = {
	VNode: (data) => isVNode(data) ? {
		type: data.type,
		props: data.props
	} : void 0,
	URL: (data) => data instanceof URL ? data.toString() : void 0,
	Symbol: (data) => typeof data === "symbol" ? data.description ?? "" : void 0
};
const asyncContext = getContext("nuxt-dev", {
	asyncContext: true,
	AsyncLocalStorage
});
var dev_server_logs_default = (nitroApp) => {
	const handler = nitroApp.h3App.handler;
	nitroApp.h3App.handler = (event) => {
		return asyncContext.callAsync({
			logs: [],
			event
		}, () => handler(event));
	};
	onConsoleLog((_log) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) return;
		const rawStack = captureRawStackTrace();
		if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) return;
		const trace = [];
		let filename = "";
		for (const entry of parseRawStackTrace(rawStack)) {
			if (entry.source === globalThis._importMeta_.url) continue;
			if (EXCLUDE_TRACE_RE.test(entry.source)) continue;
			filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
			trace.push({
				...entry,
				source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
			});
		}
		const log = {
			..._log,
			filename,
			stack: trace
		};
		ctx.logs.push(log);
	});
	nitroApp.hooks.hook("afterResponse", () => {
		const ctx = asyncContext.tryUse();
		if (!ctx) return;
		return nitroApp.hooks.callHook("dev:ssr-logs", {
			logs: ctx.logs,
			path: ctx.event.path
		});
	});
	nitroApp.hooks.hook("render:html", (htmlContext) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) return;
		try {
			const reducers = Object.assign(Object.create(null), devReducers, ctx.event.context["~payloadReducers"]);
			htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId$1}">${stringify(ctx.logs, reducers)}<\/script>`);
		} catch (e) {
			serverDiagnostics.NUXT_E8003({
				error: e instanceof Error ? e.toString() : void 0,
				cause: e
			});
		}
	});
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
	consola$1.addReporter({ log(logObj) {
		callback(logObj);
	} });
	consola$1.wrapConsole();
}

const script = "\"use strict\";(()=>{const o=window,e=document.documentElement,c=[\"dark\",\"light\"],s=getStorageValue(\"localStorage\",\"sarika-color-mode\")||\"system\";let r=s===\"system\"?f():s;const l=e.getAttribute(\"data-color-mode-forced\");l&&(r=l),i(r),o[\"__NUXT_COLOR_MODE__\"]={preference:s,value:r,getColorScheme:f,addColorScheme:i,removeColorScheme:d};function i(t){const a=\"\"+t+\"\",n=\"\";e.classList?e.classList.add(a):e.className+=\" \"+a,n&&e.setAttribute(\"data-\"+n,t)}function d(t){const a=\"\"+t+\"\",n=\"\";e.classList?e.classList.remove(a):e.className=e.className.replace(new RegExp(a,\"g\"),\"\"),n&&e.removeAttribute(\"data-\"+n)}function u(t){return o.matchMedia(\"(prefers-color-scheme\"+t+\")\")}function f(){if(o.matchMedia&&u(\"\").media!==\"not all\"){for(const t of c)if(u(\":\"+t).matches)return t}return\"dark\"}})();function getStorageValue(o,e){switch(o){case\"localStorage\":try{return window.localStorage.getItem(e)}catch{return null}case\"sessionStorage\":try{return window.sessionStorage.getItem(e)}catch{return null}case\"cookie\":try{return getCookie(e)}catch{return null}default:return null}}function getCookie(o){const c=(\"; \"+window.document.cookie).split(\"; \"+o+\"=\");if(c.length===2){const s=c.pop();return s?s.split(\";\").shift():null}}";

const _9RvCDC87erfatAVEfLGv1H_gV57WFqfuntR6sf8Ug = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

/*!
  * shared v11.4.16
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */
/**
 * Original Utilities
 * written by kazuya kawaguchi
 */
const _create = Object.create;
const create$2 = (obj = null) => _create(obj);
/**
 * Useful Utilities By Evan you
 * Modified by kazuya kawaguchi
 * MIT License
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/index.ts
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/codeframe.ts
 */
const isArray = Array.isArray;
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isObject = (val) => val !== null && typeof val === 'object';
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);

const isNotObjectOrIsArray = (val) => !isObject(val) || isArray(val);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deepCopy(src, des) {
    // src and des should both be objects, and none of them can be a array.
    // des can't be `Object.prototype` either: copying into it would pollute
    // every object
    if (isNotObjectOrIsArray(src) ||
        isNotObjectOrIsArray(des) ||
        des === Object.prototype) {
        throw new Error('Invalid value');
    }
    const stack = [{ src, des }];
    while (stack.length) {
        const { src, des } = stack.pop();
        // using `Object.keys` which skips prototype properties
        Object.keys(src).forEach(key => {
            if (key === '__proto__') {
                return;
            }
            const value = src[key];
            if (isArray(value)) {
                // replace arrays instead of merging them, without retaining source references
                const copied = [];
                copied.length = value.length;
                des[key] = copied;
                stack.push({ src: value, des: copied });
            }
            else if (isObject(value)) {
                if (!isObject(des[key]) || isArray(des[key])) {
                    des[key] = create$2();
                }
                stack.push({ src: value, des: des[key] });
            }
            else {
                des[key] = value;
            }
        });
    }
}

const __nuxtMock = { runWithContext: async (fn) => await fn() };
function cloneDeep(value) {
  if (value == null || typeof value !== "object") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(cloneDeep);
  }
  const out = create$2(null);
  for (const key of Object.keys(value)) {
    out[key] = cloneDeep(value[key]);
  }
  return out;
}
function hasMessageFunction(value, seen = /* @__PURE__ */ new WeakSet()) {
  if (isFunction(value)) {
    return true;
  }
  if (value == null || typeof value !== "object") {
    return false;
  }
  if (seen.has(value)) {
    return false;
  }
  seen.add(value);
  return Object.values(value).some((x) => hasMessageFunction(x, seen));
}
function warnMissedMessageFunctions(locale, messages) {
  const undeliverable = [];
  if (undeliverable.includes(locale) || !hasMessageFunction(messages)) {
    return;
  }
  console.warn(
    `[nuxt-i18n] Messages for locale "${locale}" contain message functions the build did not detect - they are dropped when messages are delivered as JSON. Write message functions literally in a locale file to make them detectable.`
  );
}
const merger = createDefu((obj, key, value) => {
  if (key === "messages" || key === "datetimeFormats" || key === "numberFormats") {
    obj[key] ??= create$2(null);
    deepCopy(value, obj[key]);
    return true;
  }
});
async function loadVueI18nOptions(vueI18nConfigs) {
  const nuxtApp = __nuxtMock;
  let vueI18nOptions = { messages: create$2(null) };
  for (const configFile of vueI18nConfigs) {
    const resolver = await configFile().then((x) => isModule(x) ? x.default : x);
    const resolved = isFunction(resolver) ? await nuxtApp.runWithContext(() => resolver()) : resolver;
    vueI18nOptions = merger(create$2(null), resolved, vueI18nOptions);
  }
  vueI18nOptions.fallbackLocale ??= false;
  return vueI18nOptions;
}
const isModule = (val) => toTypeString(val) === "[object Module]";
async function getLocaleMessages(locale, loader) {
  const nuxtApp = __nuxtMock;
  try {
    const getter = await nuxtApp.runWithContext(loader.load).then((x) => isModule(x) ? x.default : x);
    return isFunction(getter) ? await nuxtApp.runWithContext(() => getter(locale)) : getter;
  } catch (e) {
    throw new Error(`Failed loading locale (${locale}): ` + e.message, { cause: e });
  }
}
async function getLocaleMessagesMerged(locale, loaders = []) {
  const nuxtApp = __nuxtMock;
  const messages = await Promise.all(
    loaders.map((loader) => nuxtApp.runWithContext(() => getLocaleMessages(locale, loader)))
  );
  const merged = {};
  for (const message of messages) {
    deepCopy(message, merged);
  }
  return merged;
}

var app$1 = {
	name: "Sarika",
	tagline: "Premium Wedding Ceremony Management",
	description: "Plan your perfect wedding with elegance and precision"
};
var System$1 = "-------System Translate-----------";
var app_name$1 = "Wedding Planner";
var dark_mode$1 = "Dark Mode";
var light_mode$1 = "Light Mode";
var light_dark$1 = "Switch to Dark Mode";
var dark_light$1 = "Switch to Light Mode";
var language_change$1 = "Change Language";
var english$1 = "English";
var khmer$1 = "Khmer";
var collapse$1 = "Collapse";
var expand$1 = "Expand";
var months_$1 = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
var days_$1 = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
var khmer_$1 = {
	months: [
		"Indra",
		"Vesak",
		"Sangkran",
		"Phnom",
		"Kati",
		"Vora",
		"Bhadra",
		"Chaitra",
		"Vaisakhi",
		"Jeth",
		"Ashad",
		"Magha"
	],
	year: "Khmer Year",
	day: "Day"
};
var bold$1 = "Bold";
var italic$1 = "Italic";
var underline$1 = "Underline";
var strikethrough$1 = "Strikethrough";
var heading$1 = "Heading";
var bullet_list$1 = "Bullet List";
var ordered_list$1 = "Ordered List";
var task_list$1 = "Task List";
var blockquote$1 = "Blockquote";
var horizontal_rule$1 = "Horizontal Rule";
var highlight$1 = "Highlight";
var link$1 = "Link";
var image$1 = "Image";
var youtube$1 = "YouTube Video";
var table$1 = "Table";
var undo$1 = "Undo";
var redo$1 = "Redo";
var characters$1 = "characters";
var words$1 = "words";
var loading_editor$1 = "Loading editor...";
var search$1 = "Search";
var open_sidebar$1 = "To Big Sidebar";
var close_sidebar$1 = "To small Sidebar";
var waiting_internet_connection$1 = "Waiting for internet connection...";
var restore_internet_connection$1 = "Your internet connection was restored!";
var notification$1 = "Notifications";
var readall$1 = "Read All";
var clearall$1 = "Clear All";
var unreadall$1 = "Unread All";
var unread$1 = "Unread";
var read$1 = "Read";
var no_notification$1 = "No Notifications!";
var minute_last$1 = "minutes ago";
var time$1 = "TimeTime";
var show_unread_only$1 = "Show Unread Only";
var show_all$1 = "Show Alll";
var dashboard_data$1 = "Dashboards &Data Trackings";
var learner_enrollment$1 = "Learners and Enrollment";
var learning_course$1 = "Learnings and Courses";
var socialboard_forum$1 = "Social Boards &Forums";
var report_analytic$1 = "Reports &Analytics";
var user_privillege$1 = "Users &Privilleges";
var financial$1 = "Financial";
var skill_testing$1 = "Skill Testings";
var employee$1 = "Employees";
var payment$1 = "Payments";
var developed$1 = " Developed by : RITHTHY";
var developer_name = "RITHTHY";
var developedby$1 = "Developed By";
var welcome$1 = "Welcome";
var description1$1 = "This is a sample page.";
var work$1 = "asdfasdgfas";
var team$1 = "Thisdaf.";
var home$1 = "Home";
var events$1 = {
	new_event: "New Event",
	select_event: "Select Event",
	no_event_selected: "No event selected",
	no_wedding_found: "No event found",
	no_wedding_hint: "Create your first event to get started",
	no_weddings_yet: "No events yet"
};
var ceremony_schedule = "Ceremony Schedule";
var overview$1 = "Overview";
var task$1 = "Tasks";
var course_management$1 = "Course Management";
var course$1 = "Courses";
var instructor$1 = "Instructor";
var learner$1 = "Learners";
var assign$1 = "Assign";
var config$1 = "User Configuration";
var lecture$1 = "Lecture";
var academic$1 = "Academic Year";
var learner_enroll$1 = "Learner Enrollment";
var learner_enrollweb$1 = "Enrollment by Web";
var learner_profile$1 = "Learner Profiles";
var information$1 = "ព៌ត៌មាន";
var learner_config$1 = "Learners Config";
var report$1 = "Reports";
var user$1 = "Users";
var dashboard_user = "User Dashboards";
var tutordas_hboard = "Tutors Dashboard";
var invoice$1 = "Invoice";
var receipt$1 = "Receipt";
var refund_manage$1 = "Refund Management";
var subscription$1 = "Subscription";
var social$1 = "Social";
var forum$1 = "Forum";
var content$1 = {
	articles: "Articles",
	article_categories: "Article Categories",
	categories: "Categories",
	category: "Category",
	new_article: "New Article",
	edit_article: "Edit Article",
	delete_article: "Delete Article",
	add_category: "Add Category",
	edit_category: "Edit Category",
	delete_category: "Delete Category",
	delete_category_warning: "This will permanently delete the category.",
	category_name: "Category Name",
	parent_category: "Parent Category",
	none_top_level: "None (top level)",
	cover_image: "Cover Image",
	article_images: "Article Images",
	select_cover_image: "Select Cover Image",
	select_article_images: "Select Article Images",
	add_images: "Add Images",
	content: "Content",
	content_placeholder: "Write your article content here...",
	excerpt: "Excerpt",
	excerpt_placeholder: "Short summary of the article...",
	tags: "Tags",
	all_categories: "All Categories",
	published: "Published",
	draft: "Draft",
	archived: "Archived",
	article_title: "Article Title"
};
var feature$1 = "Feature";
var document$1 = "Document";
var announcement$1 = "Announcement";
var user_profile$1 = "User Profile";
var user_permission = "User Permission";
var role_permission = "Role Permission";
var access_log = "Access Log";
var user_directory = "Document";
var suspension_reactive = "Announcement";
var name$1 = "Name";
var name_khmer$1 = "Khmer Name";
var name_english$1 = "English Name";
var name_en$1 = "Name(English)";
var name_km$1 = "Name(Khmer)";
var academic_setting$1 = "Academic Setting";
var user_create$1 = "Created By";
var user_update$1 = "Updated By";
var created_date$1 = "Created Date";
var updated_date$1 = "Updated Date";
var action$1 = "Actions";
var code$1 = "Code";
var edit$1 = "Edit";
var gender$1 = "Gender";
var teaching$1 = "Teaching";
var year$1 = "Year";
var semester$1 = "Semester";
var subject$1 = "Subject";
var score_entry$1 = "Score Entry";
var student_list$1 = "Student List";
var attendance_entry$1 = "Attendance Entry";
var archive$1 = "Achieve";
var batch$1 = "Batch";
var room$1 = "Room";
var select_room$1 = "Select room";
var select_time$1 = "Select time";
var select_subject$1 = "Select subject";
var no_data$1 = "No Data";
var time_record$1 = "Time Record";
var professor$1 = "Professor";
var degree_level$1 = "Degree Level";
var subject_taught$1 = "Subject Taught";
var generation$1 = "Generation";
var classroom$1 = "Classroom";
var students_in_list$1 = "Students in List";
var phone_number$1 = "Phone Number";
var specialization$1 = "Specialization";
var group$1 = "Group";
var teaching_days$1 = "Teaching Days";
var students_attendance$1 = "Students Attendance";
var date_of_birth$1 = "Date of Birth";
var graduation_year$1 = "Graduation Year";
var major$1 = "Major";
var hours$1 = "Hours";
var dropped_students$1 = "Dropped Students";
var class_code$1 = "Class Code";
var phone_penh_capital$1 = "Phnom Penh Capital";
var academic_year$1 = "Academid Year";
var online_student$1 = "Online Student";
var no_num$1 = "No.";
var teaching_day$1 = "Teaching Day";
var lesson_content$1 = "Lesson Content";
var note$1 = "Note";
var times$1 = "Time";
var hour$1 = "Hour";
var duration$1 = "Duration";
var attendance$1 = "Attendance";
var other$1 = "Other";
var print$1 = "Print";
var student_score_record_list$1 = "Student Score Record List";
var export_as_excel$1 = "Export As Excel";
var goto_telegram_group$1 = "Go to Telegram Group";
var name_latin$1 = "English Name";
var surname_name$1 = "Surname &Name";
var dob$1 = "DOB";
var midterm$1 = "Midterm";
var final$1 = "Final";
var total$1 = "Total";
var kingdom_of_cambodia$1 = "Kingdom Of Cambodia";
var nation_religion_king$1 = "Nation Religion King";
var moeys$1 = "Ministry of Education Youth and Sport";
var school_name$1 = "NOKORTECH";
var school$1 = "School";
var enter_password$1 = "Enter your password";
var enter_username$1 = "Enter your username";
var login$1 = "Login";
var username$1 = "Username";
var password$1 = "Password";
var confirm_password$1 = "Confirm Password";
var invalid_username_password$1 = "Invalid username or password";
var login_failed$1 = "Login failed!";
var loading_$1 = "Loading...";
var loading$1 = "Loading";
var no_account$1 = "Don't have an account?";
var login_successful$1 = "Login successfully";
var sign_up$1 = "Sign Up";
var teaching_class$1 = "Teaching Class";
var username_required$1 = "Username is required";
var password_required$1 = "Password is required";
var fill_all_fields$1 = "Please fill out all fields";
var invalid_credentials$1 = "Invalid username or password";
var missing_field$1 = "Missing fields";
var email$1 = "Email";
var email_invalid$1 = "Please enter a valid email address.";
var english_name$1 = "English Name";
var code_$1 = "Code";
var add$1 = "Add User";
var view$1 = "View";
var create$1 = "Create";
var update$1 = "Edit";
var cancel$1 = "Cancel";
var save$1 = "Save";
var migrate$1 = "Migrate";
var close$1 = "Close";
var reject$1 = "Reject";
var approve$1 = "Approve";
var upload$1 = "Upload";
var download$1 = "Download";
var settings$1 = "Settings";
var info$1 = "Info";
var warning$1 = "Warning";
var success$1 = "Success";
var danger$1 = "Danger";
var share$1 = "Share";
var send$1 = "Send";
var user_information$1 = "User Inforation";
var new_user$1 = "New User";
var edit_user$1 = "Edit User";
var do_you_want_to_delete$1 = "Do you want to delete {value}?";
var this_action_cannot_be_undone$1 = "This action cannot be undone.";
var user_deleted_successfully$1 = "User deleted successfully.";
var failed_to_delete_user$1 = "Failed to delete user.";
var created_by$1 = "Created By";
var updated_by$1 = "Updated By";
var user_management$1 = "User Management";
var user_type$1 = "User Type";
var user_list$1 = "User List";
var user_role$1 = "User Role";
var user_role_list = "User Role List";
var search_user = "Search User";
var user_group$1 = "User Group";
var user_group_list$1 = "User Group List";
var user_group_name$1 = "User Group Name";
var user_group_code$1 = "User Group Code";
var user_group_description$1 = "User Group Description";
var user_group_create$1 = "Create User Group";
var user_group_edit$1 = "Edit User Group";
var user_group_delete$1 = "Delete User Group";
var user_group_view$1 = "View User Group";
var user_group_add$1 = "Add User Group";
var user_group_remove$1 = "Remove User Group";
var user_group_assign$1 = "Assign User Group";
var user_group_unassign$1 = "Unassign User Group";
var search_by_subject$1 = "Search by Subject";
var search_by_class$1 = "Search by Class";
var no_scores_found$1 = "No scores found for this teaching.";
var no_attendance_found$1 = "No attendance found for this teaching.";
var no_students_found$1 = "No students found for this teaching.";
var no_students_in_class$1 = "No students in this class.";
var no_students_in_batch$1 = "No students in this batch.";
var no_students_in_room$1 = "No students in this room.";
var confirm$1 = "Confirm";
var confirm_delete = "Confirm Delete";
var confirm_delete_user = "Confirm Delete User";
var confirm_delete_user_group = "Confirm Delete User Group";
var confirm_delete_user_role = "Confirm Delete User Role";
var confirm_delete_user_permission = "Confirm Delete User Permission";
var confirm_delete_user_directory = "Confirm Delete User Directory";
var confirm_delete_user_profile = "Confirm Delete User Profile";
var student_score_record$1 = "Student Score Record";
var student_attendance_record$1 = "Student Attendance Record";
var student_attendance$1 = "Student Attendance";
var record$1 = "Record";
var record_list$1 = "Record List";
var username_requirements$1 = "Username must be 3-15 characters (letters, numbers, _)";
var password_requirements$1 = "Password must be at least 8 characters";
var logging_in$1 = "Logging in...";
var student_score$1 = "Student Score";
var student$1 = "Student";
var student_list_$1 = "Student List";
var student_score_list = "Student Score List";
var student_attendance_list = "Student Attendance List";
var description$1 = "Description";
var description_khmer = "Khmer Description";
var home_page$1 = "Home Page";
var user_profile_information$1 = "User Information";
var updated_at$1 = "Updated At";
var created_at$1 = "Created At";
var no_address_provided$1 = "No Address Provide";
var system_information$1 = "System Information";
var place_of_birth$1 = "Place Of Birth";
var user_detail$1 = "User Detail";
var address$1 = "Address";
var personal_information$1 = "Personal Information";
var basic_information$1 = "Basic Information";
var back$1 = "Back";
var edit_profile$1 = "Edit Profile";
var score$1 = "Score";
var ranking$1 = "Ranking";
var search_placeholder = "Search by name, score...";
var student_score_detail$1 = "Student Score Detail";
var student_attendance_detail$1 = "Student Attendance Detail";
var student_score_record_detail = "Student Score Record Detail";
var student_attendance_record_detail = "Student Attendance Record Detail";
var student_score_record_list_detail = "Student Score Record List Detail";
var student_attendance_record_list_detail = "Student Attendance Record List Detail";
var student_score_list_detail = "Student Score List Detail";
var student_attendance_list_detail = "Student Attendance List Detail";
var user_profile_detail = "User Profile Detail";
var user_group_detail = "User Group Detail";
var user_role_detail = "User Role Detail";
var user_permission_detail = "User Permission Detail";
var user_directory_detail = "User Directory Detail";
var user_profile_information_detail = "User Profile Information Detail";
var user_information_detail = "User Information Detail";
var user_management_detail = "User Management Detail";
var user_type_detail = "User Type Detail";
var user_list_detail = "User List Detail";
var user_role_list_detail = "User Role List Detail";
var user_group_list_detail = "User Group List Detail";
var user_group_name_detail = "User Group Name Detail";
var user_group_code_detail = "User Group Code Detail";
var user_group_description_detail = "User Group Description Detail";
var total_score$1 = "Total Score";
var total_attendance$1 = "Total Attendance";
var summary$1 = "Summary";
var average = "Average";
var average_score = "Average Score";
var average_attendance = "Average Attendance";
var total_students = "Total Students";
var gpa = "GPA";
var gpa_score = "GPA Score";
var count = "Count";
var performance = "Performance";
var excellent = "Excellent";
var very_good = "Very Good";
var good = "Good";
var satisfactory = "Satisfactory";
var needs_improvement = "Needs Improvement";
var new_score$1 = "New Score";
var reload$1 = "Reload";
var reload_data = "Reload Data";
var save_and_close$1 = "Save &Close";
var save_all$1 = "Save All";
var student_score_entry$1 = "Student Score Entry";
var select_course$1 = "Select Course";
var current_password$1 = "Current Password";
var new_password_required = "New password is required";
var new_password$1 = "New Password";
var confirm_new_password$1 = "Confirm New Password";
var change_password$1 = "Change Password";
var reset_password$1 = "Reset Password";
var assign_role$1 = "Assign Role";
var remove_role$1 = "Remove Role";
var select_role_for_user$1 = "Choose a role to assign to this user";
var add_user$1 = "Add User";
var first_name$1 = "First Name";
var last_name$1 = "Last Name";
var no_users$1 = "No users found";
var roles$1 = "Roles";
var profile_information = "Profile Information";
var full_name$1 = "Full Name";
var update_your_profile$1 = "Update Your Profile";
var bio$1 = "Bio";
var tell_us_about_yourself$1 = "Tell us about yourself";
var update_profile$1 = "Update Profile";
var profile_detail$1 = "Profile Detail";
var view_profile_detail$1 = "View Profile Detail";
var role$1 = "Role";
var nationality$1 = "Nationality";
var do_you_want_to_delete_score_data_that_have_note$1 = "Do you want to delete score {value1} that have note : {value2}?";
var exam_date$1 = "Exam Date";
var telegram_link_setup$1 = "Telegram Link Setup";
var configure_telegram_links$1 = "Configure your Telegram group/channel links";
var link_type$1 = "Link Type";
var group_link$1 = "Group";
var channel_link$1 = "Channel";
var bot_link$1 = "Bot";
var link_information$1 = "Link Information";
var link_title$1 = "Link Title";
var enter_link_title$1 = "Enter link title";
var telegram_link$1 = "Telegram Link";
var enter_link_path$1 = "Enter link path (without t.me/)";
var enter_description$1 = "Enter description";
var optional$1 = "optional";
var link_to$1 = "Link To";
var select_class$1 = "Select Class";
var academic_period$1 = "Academic Period";
var select_academic$1 = "Select Academic Period";
var department$1 = "Department";
var select_department$1 = "Select Department";
var official_link$1 = "Official Link";
var official_link_description$1 = "Mark as official school communication channel";
var active_link$1 = "Active Link";
var active_link_description$1 = "Make this link publicly visible";
var save_changes$1 = "Save Changes";
var no_changes_to_save$1 = "No changes to save!";
var save_success$1 = "Data saved successfully!";
var save_error$1 = "Failed to save data. Please try again.";
var status$1 = {
	active: "Active",
	pending: "Pending",
	confirmed: "Confirmed",
	declined: "Declined",
	completed: "Completed",
	cancelled: "Cancelled",
	in_progress: "In Progress",
	done: "Done",
	upcoming: "Upcoming"
};
var do_you_want_to_delete_$1 = "Do you want to delete {value} ?";
var today_attendance_record$1 = "Today Attendance Record";
var date$1 = "Date";
var attendance_type$1 = "Attendance Type";
var submit$1 = "Submit";
var no_attendance_records_found_for_today$1 = "No Attendance Record Found For Today";
var setup$1 = "Setup";
var offline$1 = "Offline";
var online$1 = "Online";
var student_name$1 = "Student Name";
var professor_information$1 = "Professor Information";
var personal_info$1 = "Personal Info";
var contact_academic$1 = "Contact Academic";
var enter_professor_name$1 = "Enter professor name";
var select_degree$1 = "Select degree";
var enter_subject$1 = "Enter subject";
var enter_batch$1 = "Enter batch";
var enter_classroom$1 = "Enter classroom";
var enter_phone$1 = "Enter phone number";
var enter_specialization$1 = "Enter specialization";
var select_semester$1 = "Select semester";
var enter_group$1 = "Enter group";
var enter_days$1 = "Enter teaching days";
var statistics_details$1 = "Statistics & Details";
var enter_year$1 = "Enter graduation year";
var enter_academic_year$1 = "Enter academic year";
var enter_major$1 = "Enter major";
var enter_hours$1 = "Enter hours";
var reset$1 = "Reset";
var save_information$1 = "Save Information";
var group_chat$1 = "group_chat";
var personal_chat$1 = "personal_chat";
var official_channel$1 = "official_channel";
var study_group$1 = "study_group";
var about$1 = "About";
var about_me$1 = "About Me";
var services$1 = "Services";
var service$1 = "Service";
var blog$1 = "Vlog";
var blogs$1 = "Blogs";
var portfolio$1 = "Portfolio";
var project$1 = "Project";
var projects$1 = "Projects";
var contact$1 = "Contact";
var contact_me$1 = "Contact Me";
var open_navigation$1 = "Open Navigation";
var close_navigation$1 = "Close Navigation";
var artwork$1 = "Artwork";
var gallery$1 = "Gallery";
var wishes$1 = "Wishes";
var wedding_settings$1 = "Wedding Settings";
var articles$1 = "Articles";
var article_categories$1 = "Categories";
var media_library$1 = "Media Library";
var guest_management$1 = "Guests Management";
var gift_records$1 = "Gift Records";
var event$1 = "Events";
var setup_invitation$1 = "Setup & Invitation";
var invitations_list$1 = "Invitation List";
var invitation_settings$1 = "Invitation Settings";
var scanning$1 = "Scanning";
var tracking$1 = "Tracking";
var inventory$1 = "Inventory";
var analytics$1 = "Analytics";
var inventory_control$1 = "Inventory Control";
var adjustment = "Adjustment";
var shipment$1 = "Shipment";
var add_inventory$1 = "Add Inventory";
var login_signup_with$1 = "Login or Sign Up with";
var transportation_tracking_system = "Transportation & Tracking System";
var chat$1 = "Chat";
var chat_group$1 = "Chat Group";
var user_and_privilege$1 = "User & Privilege";
var privilege$1 = "Privilege";
var chat_monitor$1 = "Chat Monitor";
var monitor$1 = "Monitor";
var storage$2 = "Storage";
var schedule_management = "Schedule Management";
var schedule$1 = "Schedule";
var setting$1 = "Setting";
var layout_grid$1 = "Layout Grid";
var layout = "Layout";
var group_management$1 = "Group Management";
var new_role$1 = "New Role";
var edit_role$1 = "Edit Role";
var delete_role$1 = "Delete Role";
var delete_role_confirm$1 = "Are you sure you want to delete role";
var no_roles$1 = "No roles found";
var permissions$1 = "Permissions";
var role_name_placeholder$1 = "e.g. MANAGER";
var role_desc_placeholder$1 = "Short description";
var customer_payment = "Customer Payment";
var customer$1 = "Customer";
var payment_management$1 = "Payment Management";
var payment_history$1 = "Payment History";
var history$1 = "History";
var vehicle_management$1 = "Vehicle Management";
var vehicle$1 = "Vehicle";
var driver_management$1 = "Driver Management";
var driver$1 = "Driver";
var telegram_chat$1 = "Telegram Chat";
var telegram$1 = "Telegram";
var chat_history$1 = "Chat History";
var map_integration$1 = "Map Integration";
var chat_storage$1 = "Chat Storage";
var file_storage$1 = "File Storage";
var continue_with_google$1 = "Continue with Google";
var do_not_have_an_account$1 = "Don't have an account?";
var sign_in$1 = "Sign In";
var forgot_password$1 = "Forgot password?";
var sign_in_to_your_account_to_continue$1 = "Sign in to your account to continue";
var enter_your_password$1 = "Enter your password";
var enter_your_username$1 = "Enter your username";
var remember_me$1 = "Remember me";
var enter_your_useranme$1 = "Enter your username";
var fleet$1 = "Fleet";
var products$1 = "Products";
var booking$1 = "Booking";
var order_management$1 = "Order Management";
var purchase$1 = "Purchase";
var shipments$1 = "Shipments";
var total_record$1 = "Total Record";
var users$1 = "Users";
var subscription_plans$1 = "Subscription Plans";
var languages$1 = "Languages";
var translations$1 = "Translations";
var theme_manager$1 = "Theme Manager";
var ai_translate$1 = "AI Translate";
var ai_config$1 = "AI Configuration";
var prompt_manager$1 = "Prompt Manager";
var ai_batch_translate$1 = "Batch Translate";
var ceremonySetup = "Ceremony Setup";
var timeline$1 = "Timeline";
var invitationLetter = "Invitation Letter";
var sendInvitation = "Send Invitation";
var welcome_back$1 = "Welcome Back";
var continue_with_facebook = "Continue with Facebook";
var terms$1 = "By signing up, you agree to our Terms of Service and Privacy Policy";
var username_label = "Username";
var upcoming_events = "Upcoming Events";
var totalEvents$1 = "Total Events";
var totalGuests$1 = "Total Guests";
var confirmed$1 = "Confirmed";
var pending$1 = "Pending";
var budgetUsed$1 = "Budget Used";
var tasksCompleted$1 = "Tasks Completed";
var addEvent$1 = "Add Event";
var addGuest$1 = "Add Guest";
var sendInvite$1 = "Send Invite";
var viewAll$1 = "View All";
var rsvpStats$1 = "RSVP Statistics";
var ceremonyTimeline = "Ceremony Timeline";
var budgetOverview = "Budget Overview";
var newEvent$1 = "New Event";
var editEvent$1 = "Edit Event";
var deleteEvent$1 = "Delete Event";
var eventName$1 = "Event Name";
var eventDate$1 = "Date";
var eventTime$1 = "Time";
var active$1 = "Active";
var planning$1 = "Planning";
var wedding$1 = "Wedding";
var event_types$1 = "Event Types";
var event_type$1 = "Event Type";
var event_name$1 = "Event Name";
var event_date$1 = "Event Date";
var event_management$1 = "Event Management";
var create_your_event$1 = "Create Your First Event";
var select_event_type$1 = "Select event type";
var event_created_success$1 = "Event created successfully";
var host1_name$1 = "Host Name";
var host2_name$1 = "Co-Host Name";
var noEvents$1 = "No events yet";
var createFirst$1 = "Create your first event to get started";
var editGuest$1 = "Edit Guest";
var deleteGuest$1 = "Delete Guest";
var importGuests$1 = "Import Guests";
var exportGuests$1 = "Export";
var bride$1 = "Bride Side";
var groom$1 = "Groom Side";
var seats$1 = "Seats";
var rsvp$1 = "RSVP";
var rsvpConfirmed = "Confirmed";
var rsvpPending = "Pending";
var rsvpDeclined = "Declined";
var family$1 = "Family";
var friend$1 = "Friend";
var colleague$1 = "Colleague";
var noGuests$1 = "No guests added yet";
var attending$1 = "Attending";
var notAttending$1 = "Not Attending";
var unknown$1 = "Unknown";
var phases$1 = "Phases";
var addPhase$1 = "Add Phase";
var phaseName$1 = "Phase Name";
var startTime$1 = "Start Time";
var location$1 = "Location";
var noPhases$1 = "No ceremony phases added";
var invitation$1 = "Invitations";
var addGift = "Add Gift";
var giver$1 = "Giver";
var item$1 = "Item";
var received$1 = "Received";
var thankYouSent$1 = "Thank You Sent";
var totalGifts$1 = "Total Gifts";
var totalValue = "Total Value";
var noGifts$1 = "No gift records yet";
var addTask$1 = "Add Task";
var editTask$1 = "Edit Task";
var markDone$1 = "Mark as Done";
var urgent$1 = "Urgent";
var high$1 = "High";
var medium$1 = "Medium";
var low$1 = "Low";
var inProgress$1 = "In Progress";
var dueDate$1 = "Due Date";
var noTasks = "No tasks yet";
var add_category$1 = "Add Category";
var add_transaction$1 = "Add Transaction";
var allocated$1 = "Allocated";
var spent$1 = "Spent";
var transactions$1 = "Transactions";
var no_transactions$1 = "No transactions yet";
var task_due$1 = "Task Due";
var title$1 = "Settings";
var profile$1 = "Profile";
var security$1 = "Security";
var language$1 = "Language";
var theme$1 = "Theme";
var dark$1 = "Dark";
var light$1 = "Light";
var system$1 = "System";
var filter$1 = "Filter";
var sort$1 = "Sort";
var error$1 = "Something went wrong";
var no_data_available$1 = "No data available";
var view_all$1 = "View All";
var seeMore$1 = "See More";
var next$1 = "Next";
var previous$1 = "Previous";
var of$1 = "of";
var yes$1 = "Yes";
var no$1 = "No";
var required$1 = "Required";
var hero$1 = "Your Perfect Wedding Starts Here";
var heroSub$1 = "Premium ceremony management platform built for modern couples";
var startFree$1 = "Start for Free";
var start_app$1 = "Open App";
var learnMore$1 = "Learn More";
var features$1 = "Features";
var pricing$1 = "Pricing";
var attendance_overview = "Attendance Overview";
var invitation_status$1 = "Invitation Status";
var dashboard_overview$1 = "Dashboard Overview";
var dashboard_events$1 = "Dashboard Events";
var wish_list$1 = "Wish List";
var tables$2 = "Tables";
var checkin$1 = "Check-in";
var qr_center$1 = "QR Center";
var invitations = "Invitation";
var setup_and_invitation$1 = "Setup & Invitation";
var budget_overview$1 = "Budget Overview";
var budget_transactions$1 = "Budget Transactions";
var budget_menu$1 = "Budget";
var notifications_menu$1 = "Notifications";
var help_and_info$1 = "Help & Info";
var logout$1 = "Sign Out";
var letter$1 = "Letter";
var vs_last_month$1 = "vs Last Month";
var mark_read$1 = "Mark as Read";
var actions$1 = "Actions";
var phone$1 = "Phone";
var amount$1 = "Amount";
var type$1 = "Type";
var all$1 = "All";
var refresh$1 = "Refresh";
var preview$1 = "Preview";
var copy$1 = "Copy";
var copied$1 = "Copied!";
var sent$1 = "Sent";
var declined$1 = "Declined";
var completed$1 = "Completed";
var in_progress$1 = "In Progress";
var cancelled$1 = "Cancelled";
var todo$1 = "To Do";
var review$1 = "Review";
var total_events$1 = "Total Events";
var total_guests$1 = "Total Guests";
var invitations_sent$1 = "Invitations Sent";
var total_budget$1 = "Total Budget";
var quick_actions = "Quick Actions";
var recent_activities = "Recent Activities";
var ceremony_progress = "Ceremony Progress";
var budget_summary = "Budget Summary";
var invitation_stats = "Invitation Statistics";
var today$1 = "Today";
var this_week$1 = "This Week";
var days_to_wedding$1 = "days to wedding";
var ceremony_date$1 = "Ceremony Date";
var subtitle$1 = "Manage and view all wedding events";
var add_event$1 = "Add Event";
var event_time$1 = "Event Time";
var event_location$1 = "Location";
var past$1 = "Past";
var calendar_view$1 = "Calendar View";
var timeline_view$1 = "Timeline View";
var grid_view$1 = "Grid View";
var traditional$1 = "Traditional Ceremony";
var reception$1 = "Wedding Reception";
var blessing$1 = "Buddhist Blessing";
var rehearsal$1 = "Rehearsal Dinner";
var engagement$1 = "Engagement Party";
var status_scheduled$1 = "Scheduled";
var status_ongoing$1 = "Ongoing";
var status_completed$1 = "Completed";
var status_cancelled$1 = "Cancelled";
var edit_event$1 = "Edit Event";
var delete_event$1 = "Delete Event";
var view_details$1 = "View Details";
var guests_attending$1 = "Guests Attending";
var venue$1 = "Venue";
var capacity$1 = "Capacity";
var dress_code$1 = "Dress Code";
var add_guest$1 = "Add Guest";
var guest_name$1 = "Guest Name";
var guest_phone$1 = "Phone Number";
var table_number$1 = "Table Number";
var rsvp_status$1 = "RSVP Status";
var dietary$1 = "Dietary Requirements";
var plus_one$1 = "Plus One";
var relationship$1 = "Relationship";
var side$1 = "Family Side";
var bride_side$1 = "Bride's Side";
var groom_side$1 = "Groom's Side";
var both_sides$1 = "Both Sides";
var confirmed_guests$1 = "Confirmed";
var pending_guests$1 = "Pending";
var declined_guests$1 = "Declined";
var import_guests$1 = "Import Guests";
var export_guests$1 = "Export Guests";
var search_guests$1 = "Search guests...";
var filter_status$1 = "Filter by Status";
var filter_side$1 = "Filter by Side";
var mobile_view$1 = "Mobile Card View";
var table_view$1 = "Table View";
var vip$1 = "VIP Guest";
var special_needs$1 = "Special Needs";
var choose_template$1 = "Choose Template";
var template_classic$1 = "Classic Elegance";
var template_floral$1 = "Floral Garden";
var template_royal$1 = "Royal Khmer";
var customize_theme$1 = "Customize Theme";
var primary_color$1 = "Primary Color";
var font_style$1 = "Font Style";
var background_style$1 = "Background Style";
var preview_invitation$1 = "Preview Invitation";
var digital_invitation$1 = "Digital Invitation";
var paper_invitation$1 = "Paper Invitation";
var save_template$1 = "Save Template";
var bride_name$1 = "Bride's Name";
var groom_name$1 = "Groom's Name";
var ceremony_venue$1 = "Ceremony Venue";
var reception_venue$1 = "Reception Venue";
var rsvp_deadline$1 = "RSVP Deadline";
var wedding_website$1 = "Wedding Website URL";
var qr_code$1 = "QR Code";
var add_phase$1 = "Add Phase";
var phase_name$1 = "Phase Name";
var phase_time$1 = "Start Time";
var phase_duration$1 = "Duration (minutes)";
var phase_location$1 = "Location";
var phase_description$1 = "Description";
var multi_ceremony$1 = "Multiple Ceremonies";
var single_ceremony$1 = "Single Ceremony";
var reorder_phases$1 = "Drag to Reorder";
var blessing_ceremony$1 = "Buddhist Blessing";
var hair_ceremony$1 = "Hair Tying Ceremony";
var thread_ceremony$1 = "Thread Ceremony";
var gate_ceremony$1 = "Gate Passing Ceremony";
var reception_ceremony$1 = "Reception Ceremony";
var candle_ceremony$1 = "Candle Ceremony";
var flower_ceremony$1 = "Flower Ceremony";
var officiant$1 = "Officiant";
var musicians$1 = "Musicians";
var photographer$1 = "Photographer";
var videographer$1 = "Videographer";
var send_invitation$1 = "Send Invitation";
var bulk_send$1 = "Bulk Send";
var total_sent$1 = "Total Sent";
var total_pending$1 = "Total Pending";
var response_rate$1 = "Response Rate";
var resend$1 = "Resend";
var qr_code_title$1 = "Invitation QR Code";
var qr_description$1 = "Scan to view digital invitation";
var via_sms$1 = "via SMS";
var via_email$1 = "via Email";
var via_whatsapp$1 = "via WhatsApp";
var via_telegram$1 = "via Telegram";
var schedule_send$1 = "Schedule Send";
var send_now$1 = "Send Now";
var personalize$1 = "Personalize Message";
var invitation_link$1 = "Invitation Link";
var write_letter$1 = "Write Letter";
var both$1 = "Both Languages";
var template_formal$1 = "Formal Traditional";
var template_casual$1 = "Casual & Warm";
var template_modern$1 = "Modern & Brief";
var export_pdf$1 = "Export PDF";
var export_word$1 = "Export Word";
var font_size$1 = "Font Size";
var font_family$1 = "Font Family";
var letter_preview$1 = "Letter Preview";
var dear_guests$1 = "Dear Guests,";
var salutation$1 = "Salutation";
var body$1 = "Body";
var closing$1 = "Closing";
var signature$1 = "Signature";
var add_gift$1 = "Add Gift";
var gift_type$1 = "Gift Type";
var cash$1 = "Cash";
var non_cash$1 = "Non-Cash Gift";
var gift_amount$1 = "Amount";
var gift_description$1 = "Gift Description";
var gifted_by$1 = "Gifted By";
var gift_date$1 = "Gift Date";
var total_gifts$1 = "Total Gifts";
var total_cash$1 = "Total Cash";
var total_items$1 = "Total Items";
var average_gift$1 = "Average Gift";
var thank_you_sent$1 = "Thank You Sent";
var send_thank_you$1 = "Send Thank You";
var currency$1 = "Currency";
var khr$1 = "KHR (Riel)";
var usd$1 = "USD (Dollar)";
var search_gifts$1 = "Search gifts...";
var filter_type$1 = "Filter by Type";
var notes$1 = "Notes";
var add_task$1 = "Add Task";
var task_title$1 = "Task Title";
var task_description$1 = "Description";
var assignee$1 = "Assigned To";
var due_date$1 = "Due Date";
var priority$1 = {
	low: "Low",
	medium: "Medium",
	high: "High",
	urgent: "Urgent"
};
var priority_high$1 = "High";
var priority_medium$1 = "Medium";
var priority_low$1 = "Low";
var column_todo$1 = "To Do";
var column_in_progress$1 = "In Progress";
var column_review$1 = "Review";
var column_done$1 = "Done";
var move_to$1 = "Move to";
var overdue$1 = "Overdue";
var upcoming$1 = "Upcoming";
var filter_priority$1 = "Filter by Priority";
var filter_assignee$1 = "Filter by Assignee";
var checklist$1 = "Checklist";
var add_checklist$1 = "Add Checklist Item";
var attachments$1 = "Attachments";
var comments$1 = "Comments";
var add_expense$1 = "Add Expense";
var total_spent$1 = "Total Spent";
var remaining$1 = "Remaining";
var over_budget$1 = "Over Budget";
var on_track$1 = "On Track";
var category$1 = "Category";
var category_venue$1 = "Venue";
var category_catering$1 = "Catering";
var category_photography$1 = "Photography";
var category_flowers$1 = "Flowers & Decoration";
var category_music$1 = "Music & Entertainment";
var category_attire$1 = "Attire & Beauty";
var category_invitation$1 = "Invitations";
var category_transport$1 = "Transportation";
var category_honeymoon$1 = "Honeymoon";
var category_other$1 = "Other";
var expense_name$1 = "Expense Name";
var vendor$1 = "Vendor";
var paid$1 = "Paid";
var unpaid$1 = "Unpaid";
var partial$1 = "Partially Paid";
var payment_date$1 = "Payment Date";
var deposit$1 = "Deposit";
var balance$1 = "Balance Due";
var set_budget$1 = "Set Budget";
var budget_allocation$1 = "Budget Allocation";
var mark_all_read$1 = "Mark All as Read";
var filter_all$1 = "All";
var filter_rsvp$1 = "RSVP";
var filter_reminder$1 = "Reminders";
var filter_alert$1 = "Alerts";
var filter_task$1 = "Tasks";
var no_notifications$1 = "No notifications yet";
var rsvp_confirmed$1 = "Confirmed Attendance";
var rsvp_declined$1 = "Declined the Invitation";
var task_completed$1 = "completed a task";
var budget_alert$1 = "Budget Alert";
var reminder$1 = "Reminder";
var guest_added$1 = "New guest added";
var gift_received$1 = "Gift received";
var payment_due$1 = "Payment due soon";
var yesterday$1 = "Yesterday";
var earlier$1 = "Earlier";
var register$1 = "Register";
var have_account$1 = "Already have an account?";
var couple_name$1 = "Couple Name";
var wedding_date$1 = "Wedding Date";
var account_settings$1 = "Account Settings";
var preview_link$1 = "Preview Link";
var copy_link$1 = "Copy Link";
var generate_link$1 = "Generate Link";
var editor$1 = "Editor";
var desktop$1 = "Desktop";
var tablet$1 = "Tablet";
var mobile$1 = "Mobile";
var full_preview$1 = "Full Preview";
var save_change$1 = "Save Change";
var live_preview$1 = "Live Preview";
var or_continue_with$1 = "Or Continue With";
var sign_out$1 = "Sign Out";
var signing_in$1 = "Signing In...";
var no_roles_found$1 = "No roles found";
var letter_setup$1 = "Letter Setup";
var template_setup$1 = "Invite Template";
var dashboard$1 = {
	attendance_overview: "Attendance Overview",
	bride_side: "Bride Side",
	groom_side: "Groom Side",
	budget_summary: "Budget Summary",
	by_family_side: "By Family Side",
	ceremony_progress: "Ceremony Progress",
	checked_in: "Checked In",
	invitation_status: "Invitation Status",
	no_recent_activity: "No recent activity",
	recent_activities: "Recent Activities",
	response_rate: "Response Rate"
};
var new_event$1 = "New Event";
var collapse_sidebar$1 = "Collapse Sidebar";
var expand_sidebar$1 = "Expand Sidebar";
var tasks_completed$1 = "Task Completed";
var budget_used$1 = "Budget Used";
var rsvp_stats$1 = "RSVP Statistics";
var decline$1 = "Decline";
var ceremony_timeline$1 = "Ceremony Timeline";
var this_month$1 = "This Month";
var recent_activity$1 = "Recent Activity";
var create_your_wedding$1 = "Create Your Wedding";
var create_wedding_sub$1 = "Set up your first wedding to get started";
var create_wedding_btn$1 = "Create Wedding";
var bride_name_placeholder$1 = "Enter bride's name";
var groom_name_placeholder$1 = "Enter groom's name";
var budget_placeholder$1 = "e.g. 10000";
var venue_placeholder$1 = "e.g. Grand Ballroom, Phnom Penh";
var wedding_created_success$1 = "Your wedding has been created successfully";
var wedding_create_failed$1 = "Failed to create wedding";
var creating$1 = "Creating...";
var rsvp_pending$1 = "RSVP Pending";
var import_guest$1 = "Import Guests";
var modern$1 = "Modern";
var royal_gold$1 = "Royal Gold";
var vintage$1 = "Vintage";
var classic$1 = "Classic";
var forest$1 = "Forest";
var blossom$1 = "Blossom";
var midnight$1 = "Midnight";
var mode$1 = "Mode";
var select_template = "Select Template";
var inactive$1 = "Inactive";
var none$1 = "None";
var or$1 = "or";
var validation_required$1 = "This field is required";
var validation_email$1 = "Please enter a valid email address";
var validation_url$1 = "Please enter a valid URL";
var validation_minLength$1 = "Minimum {min} characters required";
var validation_maxLength$1 = "Maximum {max} characters allowed";
var validation_min$1 = "Value must be at least {min}";
var validation_max$1 = "Value must be at most {max}";
var validation_pattern$1 = "Invalid format";
var validation_phone$1 = "Please enter a valid phone number";
var form_name$1 = "Name";
var form_firstName$1 = "First Name";
var form_lastName$1 = "Last Name";
var form_email$1 = "Email";
var form_phone$1 = "Phone";
var form_password$1 = "Password";
var form_confirm$1 = "Confirm Password";
var form_role$1 = "Role";
var form_department$1 = "Department";
var form_avatar$1 = "Avatar";
var form_message$1 = "Message";
var form_description$1 = "Description";
var form_title$1 = "Title";
var form_date$1 = "Date";
var form_startDate$1 = "Start Date";
var form_endDate$1 = "End Date";
var form_status$1 = "Status";
var form_type$1 = "Type";
var form_color$1 = "Color";
var form_tags$1 = "Tags";
var form_notes$1 = "Notes";
var form_address$1 = "Address";
var form_city$1 = "City";
var form_country$1 = "Country";
var user_invite$1 = "Invite User";
var user_edit$1 = "Edit User";
var user_delete$1 = "Delete User";
var user_inviteEmail$1 = "Email address to invite";
var user_inviteRole$1 = "Assign role";
var user_inviteMessage$1 = "Personal message (optional)";
var user_inviteSend$1 = "Send Invitation";
var user_createSuccess$1 = "User created successfully";
var user_inviteSuccess$1 = "Invitation sent successfully";
var user_deleteConfirm$1 = "Are you sure you want to delete this user?";
var are_you_sure_you_want_to_delete_this_guest$1 = "Are you sure you want to delete this guest <span class='font-semibold'>{ value }</span> ?";
var user_roles_admin$1 = "Administrator";
var user_roles_manager$1 = "Manager";
var user_roles_editor$1 = "Editor";
var user_roles_viewer$1 = "Viewer";
var user_roles_guest$1 = "Guest";
var project_create$1 = "Create Project";
var project_edit$1 = "Edit Project";
var project_name$1 = "Project Name";
var project_members$1 = "Team Members";
var project_schedule$1 = "Schedule";
var report_create$1 = "Create Report";
var report_title$1 = "Report Title";
var report_type$1 = "Report Type";
var report_period$1 = "Period";
var report_filters$1 = "Filters";
var report_schedule$1 = "Schedule";
var report_generate$1 = "Generate Report";
var settings_general$1 = "General Settings";
var settings_appearance$1 = "Appearance";
var settings_language$1 = "Language";
var settings_theme$1 = "Theme";
var settings_notifications$1 = "Notifications";
var settings_security$1 = "Security";
var settings_billing$1 = "Billing";
var settings_theme_light$1 = "Light";
var settings_theme_dark$1 = "Dark";
var settings_theme_system$1 = "System";
var nav_dashboard$1 = "Dashboard";
var nav_users$1 = "Users";
var nav_projects$1 = "Projects";
var nav_reports$1 = "Reports";
var nav_analytics$1 = "Analytics";
var nav_messages$1 = "Messages";
var nav_settings$1 = "Settings";
var nav_help$1 = "Help";
var nav_integrations$1 = "Integrations";
var select$1 = "Select";
var show$1 = "Show";
var page$1 = "Page";
var next_page$1 = "Next page";
var previous_page$1 = "Previous page";
var last_page$1 = "Last page";
var jump_to_page$1 = "Jump to page";
var page_num$1 = "Page {pageNum}";
var entries$1 = "Entries";
var showing$1 = "Showing";
var to$1 = "to";
var organization_name$1 = "Organization / Company Name";
var organization_name_placeholder$1 = "e.g. Golden Bell Events";
var has_account$1 = "Already have an account?";
var saving$1 = "Saving...";
var manage_profile$1 = "Manage Profile";
var occupation$1 = "Occupation";
var n_o$1 = "No.";
var child$1 = "Child";
var guardian$1 = "Guardian";
var registered_user$1 = "Registered User";
var unregistered_guardian$1 = "Unregistered Guardian";
var unregistered_student$1 = "Unregistered Student";
var view_guardian_register$1 = "View Guardian Register";
var create_irst$1 = "Create your first wedding to get started";
var edit_guest$1 = "Edit Guest";
var import_guests_from_excel$1 = "Import from Excel";
var no_guests$1 = "No guests yet";
var no_ceremonies$1 = "No ceremonies scheduled yet";
var add_language = "Add Language";
var start_time$1 = "Start Time";
var end_time$1 = "End Time";
var no_phases = "No Phases";
var tasks$2 = {
	title: "Tasks",
	add_task: "Add Task",
	addTask: "Add Task",
	editTask: "Edit Task",
	name: "Task Name",
	priority: "Priority",
	status: "Status",
	dueDate: "Due Date",
	assignee: "Assignee",
	category: "Category",
	notes: "Notes",
	pending: "Pending",
	inProgress: "In Progress",
	completed: "Completed",
	urgent: "Urgent",
	high: "High",
	medium: "Medium",
	low: "Low",
	noTasks: "No tasks",
	done: "Done",
	addTaskShortcut: "Add task",
	allPriority: "All Priority",
	overdue: "Overdue",
	deleteTask: "Delete Task",
	deleteConfirm: "This cannot be undone.",
	edit_task: "Edit Task",
	delete_task: "Delete Task",
	no_tasks: "No tasks yet",
	title_placeholder: "Task title...",
	notes_placeholder: "Additional notes...",
	due_date: "Due Date",
	assigned_to: "Assigned To",
	user_id_placeholder: "Search user...",
	overall_progress: "Overall Progress",
	mark_done: "Mark Done"
};
var send_invite$1 = "Send Invite";
var send_via_telegram$1 = "Send via Telegram";
var send_via_mail = "Send via Email";
var send_via_whatsapp$1 = "Send via Whatsapp";
var budget$1 = {
	title: "Budget",
	totalBudget: "Total Budget",
	totalSpent: "Total Spent",
	remaining: "Remaining",
	usage: "Usage",
	addTransaction: "Add Transaction",
	editTransaction: "Edit Transaction",
	category: "Category",
	transactions: "Transactions",
	noTransactions: "No transactions yet",
	vendorName: "Vendor Name",
	plannedAmount: "Planned Amount ($)",
	actualAmount: "Actual Amount ($)",
	paymentStatus: "Payment Status",
	notes: "Notes",
	unpaid: "Unpaid",
	partial: "Partial",
	paid: "Paid",
	financeSummary: "Finance Summary",
	giftIncome: "Gift Income (Cash)",
	totalIncome: "Total Income",
	plannedExpenses: "Planned Expenses",
	actualExpenses: "Actual Expenses",
	netProfit: "Net Profit / Loss",
	giftCount: "Gift Count",
	total: "Total Budget",
	spent: "Spent",
	used: "Used",
	no_items: "No budget items yet"
};
var common$1 = {
	save: "Save",
	cancel: "Cancel",
	"delete": "Delete",
	edit: "Edit",
	add: "Add",
	close: "Close",
	success: "Success",
	error: "Error",
	confirm: "Confirm",
	loading: "Loading...",
	noData: "No data",
	all: "All",
	total: "Total",
	name: "Name",
	title: "Title",
	description: "Description",
	status: "Status",
	date: "Date",
	author: "Author",
	categories: "Categories",
	slug: "Slug",
	short_description: "Short Description",
	translations: "Translations",
	selected: "Selected",
	done: "Done",
	none: "None",
	auto_generated: "Auto generated",
	comma_separated: "Comma separated",
	cannot_be_undone: "This action cannot be undone.",
	active: "Active",
	app_name: "Sarika",
	coming_soon: "Coming Soon",
	disabled: "Disabled",
	guardian: "Guardian",
	guests: "Guests",
	manage: "Manage",
	pending: "Pending",
	select_date: "Select Date",
	student: "Student",
	view_all: "View All"
};
var no_results_for$1 = "No Results for {value}";
var no_data_found$1 = "No data found";
var there_is_no_data_available$1 = "There is no data available.";
var no_results_found$1 = "No results found";
var try_adjusting_your_search$1 = "Try adjusting your search or filters.";
var there_is_no_data_to_display$1 = "There is no data to display";
var position$1 = "Position";
var joined_date$1 = "Joined Date";
var birth_date$1 = "Birth Date";
var more_button$1 = "More";
var more$1 = "More";
var clear_all$1 = "Clear All";
var select_all$1 = "Select All";
var deselect_all$1 = "Deselect All";
var selected$1 = "Selected";
var go_to_page$1 = "Go to Page";
var first$1 = "First";
var last$1 = "Last";
var loading_data$1 = "Loading Data";
var total_records$1 = "Total Records";
var data_not_found$1 = "Data Not Found";
var article$1 = {
	status: {
		published: "Published",
		draft: "Draft",
		archived: "Archived"
	},
	stats: {
		drafts: "Drafts"
	}
};
var media$1 = {
	no_images: "No images",
	select_from_library: "Select from Library",
	upload_from_device: "Upload from Device"
};
var auth$1 = {
	login: "Sign In",
	register: "Create Account",
	app_tagline: "Wedding Management Made Easy",
	hero_headline: "Plan Your Perfect Day",
	hero_sub: "All your wedding tools in one place",
	forgot_subtitle: "Enter your email to receive a reset link",
	check_inbox: "Check your inbox",
	reset_link_sent: "Reset link sent to your email",
	send_reset_link: "Send Reset Link",
	sending: "Sending...",
	creating_account: "Creating account...",
	show_password: "Show password",
	hide_password: "Hide password",
	six_plus_chars: "At least 6 characters",
	passwords_match: "Passwords match",
	passwords_no_match: "Passwords do not match",
	resend_email: "Resend email",
	testimonial_text: "The best wedding management platform we have ever used.",
	testimonial_author: "Happy Couple"
};
var ceremony$1 = {
	ceremonies: "Ceremonies",
	add_ceremony: "Add Ceremony",
	no_ceremonies: "No ceremonies yet",
	add_program: "Add Program",
	no_programs: "No programs yet",
	wedding_date: "Wedding Date",
	countdown_days: "Days",
	countdown_hrs: "Hours",
	countdown_min: "Minutes"
};
var guest$1 = {
	no_wedding_selected: "No event selected",
	no_wedding_hint: "Please select an event first"
};
var invite$1 = {
	not_found: "Invitation not found"
};
var plans$1 = {
	max_users: "Max Users"
};
var validation$1 = {
	email_required: "Email is required",
	email_invalid: "Please enter a valid email",
	username_required: "Username is required",
	username_min: "Username must be at least 3 characters",
	username_max: "Username must be at most 50 characters",
	username_no_spaces: "Username cannot contain spaces",
	username_alphanumeric: "Username can only contain letters, numbers, and underscores",
	password_required: "Password is required",
	password_min: "Password must be at least 6 characters",
	password_max: "Password must be at most 100 characters",
	password_no_spaces: "Password cannot contain spaces",
	first_name_required: "First name is required",
	first_name_min: "First name must be at least 2 characters",
	first_name_max: "First name must be at most 50 characters",
	last_name_required: "Last name is required",
	last_name_min: "Last name must be at least 2 characters",
	last_name_max: "Last name must be at most 50 characters",
	org_name_required: "Organization name is required",
	org_name_min: "Organization name must be at least 2 characters",
	org_name_max: "Organization name must be at most 100 characters",
	max_100: "Must be 100 characters or fewer"
};
var please_select$1 = "Please Select";
var no_event_selected$1 = "No event selected";
var add_ceremony_first$1 = "Add Ceremony First";
var add_ceremony$1 = "Add Ceremony";
const locale_en_46json_8b80aec6 = {
	"1": "1",
	"2": "2",
	"3": "3",
	"4": "4",
	"5": "5",
	"6": "6",
	"7": "7",
	"8": "8",
	"9": "9",
	"10": "10",
	"11": "11",
	"12": "12",
	app: app$1,
	System: System$1,
	app_name: app_name$1,
	dark_mode: dark_mode$1,
	light_mode: light_mode$1,
	light_dark: light_dark$1,
	dark_light: dark_light$1,
	language_change: language_change$1,
	english: english$1,
	khmer: khmer$1,
	collapse: collapse$1,
	expand: expand$1,
	months_: months_$1,
	days_: days_$1,
	khmer_: khmer_$1,
	bold: bold$1,
	italic: italic$1,
	underline: underline$1,
	strikethrough: strikethrough$1,
	heading: heading$1,
	bullet_list: bullet_list$1,
	ordered_list: ordered_list$1,
	task_list: task_list$1,
	blockquote: blockquote$1,
	horizontal_rule: horizontal_rule$1,
	highlight: highlight$1,
	link: link$1,
	image: image$1,
	youtube: youtube$1,
	table: table$1,
	undo: undo$1,
	redo: redo$1,
	characters: characters$1,
	words: words$1,
	loading_editor: loading_editor$1,
	search: search$1,
	open_sidebar: open_sidebar$1,
	close_sidebar: close_sidebar$1,
	waiting_internet_connection: waiting_internet_connection$1,
	restore_internet_connection: restore_internet_connection$1,
	notification: notification$1,
	readall: readall$1,
	clearall: clearall$1,
	unreadall: unreadall$1,
	unread: unread$1,
	read: read$1,
	no_notification: no_notification$1,
	minute_last: minute_last$1,
	time: time$1,
	show_unread_only: show_unread_only$1,
	show_all: show_all$1,
	dashboard_data: dashboard_data$1,
	learner_enrollment: learner_enrollment$1,
	learning_course: learning_course$1,
	socialboard_forum: socialboard_forum$1,
	report_analytic: report_analytic$1,
	user_privillege: user_privillege$1,
	financial: financial$1,
	skill_testing: skill_testing$1,
	employee: employee$1,
	payment: payment$1,
	developed: developed$1,
	developer_name: developer_name,
	developedby: developedby$1,
	welcome: welcome$1,
	description1: description1$1,
	work: work$1,
	team: team$1,
	home: home$1,
	events: events$1,
	ceremony_schedule: ceremony_schedule,
	overview: overview$1,
	task: task$1,
	course_management: course_management$1,
	course: course$1,
	instructor: instructor$1,
	learner: learner$1,
	assign: assign$1,
	config: config$1,
	lecture: lecture$1,
	academic: academic$1,
	learner_enroll: learner_enroll$1,
	learner_enrollweb: learner_enrollweb$1,
	learner_profile: learner_profile$1,
	information: information$1,
	learner_config: learner_config$1,
	report: report$1,
	user: user$1,
	dashboard_user: dashboard_user,
	tutordas_hboard: tutordas_hboard,
	"Payment Moduel": "",
	invoice: invoice$1,
	receipt: receipt$1,
	refund_manage: refund_manage$1,
	subscription: subscription$1,
	"Media and Social": "",
	social: social$1,
	forum: forum$1,
	content: content$1,
	feature: feature$1,
	document: document$1,
	announcement: announcement$1,
	"User Privileges": "",
	user_profile: user_profile$1,
	user_permission: user_permission,
	role_permission: role_permission,
	access_log: access_log,
	user_directory: user_directory,
	suspension_reactive: suspension_reactive,
	name: name$1,
	name_khmer: name_khmer$1,
	name_english: name_english$1,
	name_en: name_en$1,
	name_km: name_km$1,
	academic_setting: academic_setting$1,
	user_create: user_create$1,
	user_update: user_update$1,
	created_date: created_date$1,
	updated_date: updated_date$1,
	action: action$1,
	code: code$1,
	edit: edit$1,
	gender: gender$1,
	teaching: teaching$1,
	year: year$1,
	semester: semester$1,
	subject: subject$1,
	score_entry: score_entry$1,
	student_list: student_list$1,
	attendance_entry: attendance_entry$1,
	archive: archive$1,
	batch: batch$1,
	room: room$1,
	"class": "Class",
	select_room: select_room$1,
	select_time: select_time$1,
	select_subject: select_subject$1,
	no_data: no_data$1,
	time_record: time_record$1,
	professor: professor$1,
	degree_level: degree_level$1,
	subject_taught: subject_taught$1,
	generation: generation$1,
	classroom: classroom$1,
	students_in_list: students_in_list$1,
	phone_number: phone_number$1,
	specialization: specialization$1,
	group: group$1,
	teaching_days: teaching_days$1,
	students_attendance: students_attendance$1,
	date_of_birth: date_of_birth$1,
	graduation_year: graduation_year$1,
	major: major$1,
	hours: hours$1,
	dropped_students: dropped_students$1,
	class_code: class_code$1,
	phone_penh_capital: phone_penh_capital$1,
	academic_year: academic_year$1,
	online_student: online_student$1,
	no_num: no_num$1,
	teaching_day: teaching_day$1,
	lesson_content: lesson_content$1,
	note: note$1,
	times: times$1,
	hour: hour$1,
	duration: duration$1,
	attendance: attendance$1,
	other: other$1,
	print: print$1,
	student_score_record_list: student_score_record_list$1,
	"import": "Import",
	export_as_excel: export_as_excel$1,
	goto_telegram_group: goto_telegram_group$1,
	name_latin: name_latin$1,
	surname_name: surname_name$1,
	dob: dob$1,
	midterm: midterm$1,
	final: final$1,
	total: total$1,
	kingdom_of_cambodia: kingdom_of_cambodia$1,
	nation_religion_king: nation_religion_king$1,
	moeys: moeys$1,
	school_name: school_name$1,
	school: school$1,
	enter_password: enter_password$1,
	enter_username: enter_username$1,
	login: login$1,
	username: username$1,
	password: password$1,
	confirm_password: confirm_password$1,
	invalid_username_password: invalid_username_password$1,
	login_failed: login_failed$1,
	loading_: loading_$1,
	loading: loading$1,
	no_account: no_account$1,
	login_successful: login_successful$1,
	sign_up: sign_up$1,
	teaching_class: teaching_class$1,
	username_required: username_required$1,
	password_required: password_required$1,
	fill_all_fields: fill_all_fields$1,
	invalid_credentials: invalid_credentials$1,
	missing_field: missing_field$1,
	email: email$1,
	email_invalid: email_invalid$1,
	english_name: english_name$1,
	code_: code_$1,
	add: add$1,
	view: view$1,
	create: create$1,
	update: update$1,
	"delete": "Delete",
	cancel: cancel$1,
	save: save$1,
	migrate: migrate$1,
	close: close$1,
	reject: reject$1,
	approve: approve$1,
	upload: upload$1,
	download: download$1,
	settings: settings$1,
	info: info$1,
	warning: warning$1,
	success: success$1,
	danger: danger$1,
	share: share$1,
	send: send$1,
	user_information: user_information$1,
	new_user: new_user$1,
	edit_user: edit_user$1,
	do_you_want_to_delete: do_you_want_to_delete$1,
	this_action_cannot_be_undone: this_action_cannot_be_undone$1,
	user_deleted_successfully: user_deleted_successfully$1,
	failed_to_delete_user: failed_to_delete_user$1,
	created_by: created_by$1,
	updated_by: updated_by$1,
	user_management: user_management$1,
	user_type: user_type$1,
	user_list: user_list$1,
	user_role: user_role$1,
	user_role_list: user_role_list,
	search_user: search_user,
	user_group: user_group$1,
	user_group_list: user_group_list$1,
	user_group_name: user_group_name$1,
	user_group_code: user_group_code$1,
	user_group_description: user_group_description$1,
	user_group_create: user_group_create$1,
	user_group_edit: user_group_edit$1,
	user_group_delete: user_group_delete$1,
	user_group_view: user_group_view$1,
	user_group_add: user_group_add$1,
	user_group_remove: user_group_remove$1,
	user_group_assign: user_group_assign$1,
	user_group_unassign: user_group_unassign$1,
	search_by_subject: search_by_subject$1,
	search_by_class: search_by_class$1,
	no_scores_found: no_scores_found$1,
	no_attendance_found: no_attendance_found$1,
	no_students_found: no_students_found$1,
	no_students_in_class: no_students_in_class$1,
	no_students_in_batch: no_students_in_batch$1,
	no_students_in_room: no_students_in_room$1,
	confirm: confirm$1,
	confirm_delete: confirm_delete,
	confirm_delete_user: confirm_delete_user,
	confirm_delete_user_group: confirm_delete_user_group,
	confirm_delete_user_role: confirm_delete_user_role,
	confirm_delete_user_permission: confirm_delete_user_permission,
	confirm_delete_user_directory: confirm_delete_user_directory,
	confirm_delete_user_profile: confirm_delete_user_profile,
	student_score_record: student_score_record$1,
	student_attendance_record: student_attendance_record$1,
	student_attendance: student_attendance$1,
	record: record$1,
	record_list: record_list$1,
	username_requirements: username_requirements$1,
	password_requirements: password_requirements$1,
	logging_in: logging_in$1,
	student_score: student_score$1,
	student: student$1,
	student_list_: student_list_$1,
	student_score_list: student_score_list,
	student_attendance_list: student_attendance_list,
	description: description$1,
	description_khmer: description_khmer,
	home_page: home_page$1,
	user_profile_information: user_profile_information$1,
	updated_at: updated_at$1,
	created_at: created_at$1,
	no_address_provided: no_address_provided$1,
	system_information: system_information$1,
	place_of_birth: place_of_birth$1,
	user_detail: user_detail$1,
	address: address$1,
	personal_information: personal_information$1,
	basic_information: basic_information$1,
	back: back$1,
	edit_profile: edit_profile$1,
	score: score$1,
	ranking: ranking$1,
	search_placeholder: search_placeholder,
	student_score_detail: student_score_detail$1,
	student_attendance_detail: student_attendance_detail$1,
	student_score_record_detail: student_score_record_detail,
	student_attendance_record_detail: student_attendance_record_detail,
	student_score_record_list_detail: student_score_record_list_detail,
	student_attendance_record_list_detail: student_attendance_record_list_detail,
	student_score_list_detail: student_score_list_detail,
	student_attendance_list_detail: student_attendance_list_detail,
	user_profile_detail: user_profile_detail,
	user_group_detail: user_group_detail,
	user_role_detail: user_role_detail,
	user_permission_detail: user_permission_detail,
	user_directory_detail: user_directory_detail,
	user_profile_information_detail: user_profile_information_detail,
	user_information_detail: user_information_detail,
	user_management_detail: user_management_detail,
	user_type_detail: user_type_detail,
	user_list_detail: user_list_detail,
	user_role_list_detail: user_role_list_detail,
	user_group_list_detail: user_group_list_detail,
	user_group_name_detail: user_group_name_detail,
	user_group_code_detail: user_group_code_detail,
	user_group_description_detail: user_group_description_detail,
	total_score: total_score$1,
	total_attendance: total_attendance$1,
	summary: summary$1,
	average: average,
	average_score: average_score,
	average_attendance: average_attendance,
	total_students: total_students,
	gpa: gpa,
	gpa_score: gpa_score,
	count: count,
	performance: performance,
	excellent: excellent,
	very_good: very_good,
	good: good,
	satisfactory: satisfactory,
	needs_improvement: needs_improvement,
	new_score: new_score$1,
	reload: reload$1,
	reload_data: reload_data,
	save_and_close: save_and_close$1,
	save_all: save_all$1,
	student_score_entry: student_score_entry$1,
	select_course: select_course$1,
	current_password: current_password$1,
	new_password_required: new_password_required,
	new_password: new_password$1,
	confirm_new_password: confirm_new_password$1,
	change_password: change_password$1,
	reset_password: reset_password$1,
	assign_role: assign_role$1,
	remove_role: remove_role$1,
	select_role_for_user: select_role_for_user$1,
	add_user: add_user$1,
	first_name: first_name$1,
	last_name: last_name$1,
	no_users: no_users$1,
	roles: roles$1,
	profile_information: profile_information,
	full_name: full_name$1,
	update_your_profile: update_your_profile$1,
	bio: bio$1,
	tell_us_about_yourself: tell_us_about_yourself$1,
	update_profile: update_profile$1,
	profile_detail: profile_detail$1,
	view_profile_detail: view_profile_detail$1,
	role: role$1,
	nationality: nationality$1,
	do_you_want_to_delete_score_data_that_have_note: do_you_want_to_delete_score_data_that_have_note$1,
	exam_date: exam_date$1,
	telegram_link_setup: telegram_link_setup$1,
	configure_telegram_links: configure_telegram_links$1,
	link_type: link_type$1,
	group_link: group_link$1,
	channel_link: channel_link$1,
	bot_link: bot_link$1,
	link_information: link_information$1,
	link_title: link_title$1,
	enter_link_title: enter_link_title$1,
	telegram_link: telegram_link$1,
	enter_link_path: enter_link_path$1,
	enter_description: enter_description$1,
	optional: optional$1,
	link_to: link_to$1,
	select_class: select_class$1,
	academic_period: academic_period$1,
	select_academic: select_academic$1,
	department: department$1,
	select_department: select_department$1,
	official_link: official_link$1,
	official_link_description: official_link_description$1,
	active_link: active_link$1,
	active_link_description: active_link_description$1,
	save_changes: save_changes$1,
	no_changes_to_save: no_changes_to_save$1,
	save_success: save_success$1,
	save_error: save_error$1,
	status: status$1,
	do_you_want_to_delete_: do_you_want_to_delete_$1,
	today_attendance_record: today_attendance_record$1,
	date: date$1,
	attendance_type: attendance_type$1,
	submit: submit$1,
	no_attendance_records_found_for_today: no_attendance_records_found_for_today$1,
	setup: setup$1,
	offline: offline$1,
	online: online$1,
	student_name: student_name$1,
	professor_information: professor_information$1,
	personal_info: personal_info$1,
	contact_academic: contact_academic$1,
	enter_professor_name: enter_professor_name$1,
	select_degree: select_degree$1,
	enter_subject: enter_subject$1,
	enter_batch: enter_batch$1,
	enter_classroom: enter_classroom$1,
	enter_phone: enter_phone$1,
	enter_specialization: enter_specialization$1,
	select_semester: select_semester$1,
	enter_group: enter_group$1,
	enter_days: enter_days$1,
	statistics_details: statistics_details$1,
	enter_year: enter_year$1,
	enter_academic_year: enter_academic_year$1,
	enter_major: enter_major$1,
	enter_hours: enter_hours$1,
	reset: reset$1,
	save_information: save_information$1,
	group_chat: group_chat$1,
	personal_chat: personal_chat$1,
	official_channel: official_channel$1,
	study_group: study_group$1,
	about: about$1,
	about_me: about_me$1,
	services: services$1,
	service: service$1,
	blog: blog$1,
	blogs: blogs$1,
	portfolio: portfolio$1,
	project: project$1,
	projects: projects$1,
	contact: contact$1,
	contact_me: contact_me$1,
	open_navigation: open_navigation$1,
	close_navigation: close_navigation$1,
	artwork: artwork$1,
	gallery: gallery$1,
	wishes: wishes$1,
	wedding_settings: wedding_settings$1,
	articles: articles$1,
	article_categories: article_categories$1,
	media_library: media_library$1,
	guest_management: guest_management$1,
	gift_records: gift_records$1,
	event: event$1,
	setup_invitation: setup_invitation$1,
	invitations_list: invitations_list$1,
	invitation_settings: invitation_settings$1,
	scanning: scanning$1,
	tracking: tracking$1,
	inventory: inventory$1,
	analytics: analytics$1,
	inventory_control: inventory_control$1,
	adjustment: adjustment,
	shipment: shipment$1,
	add_inventory: add_inventory$1,
	login_signup_with: login_signup_with$1,
	transportation_tracking_system: transportation_tracking_system,
	chat: chat$1,
	chat_group: chat_group$1,
	user_and_privilege: user_and_privilege$1,
	privilege: privilege$1,
	chat_monitor: chat_monitor$1,
	monitor: monitor$1,
	storage: storage$2,
	schedule_management: schedule_management,
	schedule: schedule$1,
	setting: setting$1,
	layout_grid: layout_grid$1,
	layout: layout,
	group_management: group_management$1,
	new_role: new_role$1,
	edit_role: edit_role$1,
	delete_role: delete_role$1,
	delete_role_confirm: delete_role_confirm$1,
	no_roles: no_roles$1,
	permissions: permissions$1,
	role_name_placeholder: role_name_placeholder$1,
	role_desc_placeholder: role_desc_placeholder$1,
	customer_payment: customer_payment,
	customer: customer$1,
	payment_management: payment_management$1,
	payment_history: payment_history$1,
	history: history$1,
	vehicle_management: vehicle_management$1,
	vehicle: vehicle$1,
	driver_management: driver_management$1,
	driver: driver$1,
	telegram_chat: telegram_chat$1,
	telegram: telegram$1,
	chat_history: chat_history$1,
	map_integration: map_integration$1,
	chat_storage: chat_storage$1,
	file_storage: file_storage$1,
	continue_with_google: continue_with_google$1,
	do_not_have_an_account: do_not_have_an_account$1,
	sign_in: sign_in$1,
	forgot_password: forgot_password$1,
	sign_in_to_your_account_to_continue: sign_in_to_your_account_to_continue$1,
	enter_your_password: enter_your_password$1,
	enter_your_username: enter_your_username$1,
	remember_me: remember_me$1,
	enter_your_useranme: enter_your_useranme$1,
	fleet: fleet$1,
	products: products$1,
	booking: booking$1,
	order_management: order_management$1,
	purchase: purchase$1,
	shipments: shipments$1,
	total_record: total_record$1,
	users: users$1,
	subscription_plans: subscription_plans$1,
	languages: languages$1,
	translations: translations$1,
	theme_manager: theme_manager$1,
	ai_translate: ai_translate$1,
	ai_config: ai_config$1,
	prompt_manager: prompt_manager$1,
	ai_batch_translate: ai_batch_translate$1,
	ceremonySetup: ceremonySetup,
	timeline: timeline$1,
	invitationLetter: invitationLetter,
	sendInvitation: sendInvitation,
	welcome_back: welcome_back$1,
	continue_with_facebook: continue_with_facebook,
	terms: terms$1,
	username_label: username_label,
	upcoming_events: upcoming_events,
	totalEvents: totalEvents$1,
	totalGuests: totalGuests$1,
	confirmed: confirmed$1,
	pending: pending$1,
	budgetUsed: budgetUsed$1,
	tasksCompleted: tasksCompleted$1,
	addEvent: addEvent$1,
	addGuest: addGuest$1,
	sendInvite: sendInvite$1,
	viewAll: viewAll$1,
	rsvpStats: rsvpStats$1,
	ceremonyTimeline: ceremonyTimeline,
	budgetOverview: budgetOverview,
	newEvent: newEvent$1,
	editEvent: editEvent$1,
	deleteEvent: deleteEvent$1,
	eventName: eventName$1,
	eventDate: eventDate$1,
	eventTime: eventTime$1,
	active: active$1,
	planning: planning$1,
	wedding: wedding$1,
	event_types: event_types$1,
	event_type: event_type$1,
	event_name: event_name$1,
	event_date: event_date$1,
	event_management: event_management$1,
	create_your_event: create_your_event$1,
	select_event_type: select_event_type$1,
	event_created_success: event_created_success$1,
	host1_name: host1_name$1,
	host2_name: host2_name$1,
	noEvents: noEvents$1,
	createFirst: createFirst$1,
	editGuest: editGuest$1,
	deleteGuest: deleteGuest$1,
	importGuests: importGuests$1,
	exportGuests: exportGuests$1,
	bride: bride$1,
	groom: groom$1,
	seats: seats$1,
	rsvp: rsvp$1,
	rsvpConfirmed: rsvpConfirmed,
	rsvpPending: rsvpPending,
	rsvpDeclined: rsvpDeclined,
	family: family$1,
	friend: friend$1,
	colleague: colleague$1,
	noGuests: noGuests$1,
	attending: attending$1,
	notAttending: notAttending$1,
	unknown: unknown$1,
	phases: phases$1,
	addPhase: addPhase$1,
	phaseName: phaseName$1,
	startTime: startTime$1,
	location: location$1,
	noPhases: noPhases$1,
	invitation: invitation$1,
	addGift: addGift,
	giver: giver$1,
	item: item$1,
	received: received$1,
	thankYouSent: thankYouSent$1,
	totalGifts: totalGifts$1,
	totalValue: totalValue,
	noGifts: noGifts$1,
	addTask: addTask$1,
	editTask: editTask$1,
	markDone: markDone$1,
	urgent: urgent$1,
	high: high$1,
	medium: medium$1,
	low: low$1,
	inProgress: inProgress$1,
	dueDate: dueDate$1,
	noTasks: noTasks,
	add_category: add_category$1,
	add_transaction: add_transaction$1,
	allocated: allocated$1,
	spent: spent$1,
	transactions: transactions$1,
	no_transactions: no_transactions$1,
	task_due: task_due$1,
	title: title$1,
	profile: profile$1,
	security: security$1,
	language: language$1,
	theme: theme$1,
	dark: dark$1,
	light: light$1,
	system: system$1,
	filter: filter$1,
	sort: sort$1,
	"export": "Export",
	error: error$1,
	no_data_available: no_data_available$1,
	view_all: view_all$1,
	seeMore: seeMore$1,
	next: next$1,
	previous: previous$1,
	of: of$1,
	yes: yes$1,
	no: no$1,
	required: required$1,
	hero: hero$1,
	heroSub: heroSub$1,
	startFree: startFree$1,
	start_app: start_app$1,
	learnMore: learnMore$1,
	features: features$1,
	pricing: pricing$1,
	attendance_overview: attendance_overview,
	invitation_status: invitation_status$1,
	dashboard_overview: dashboard_overview$1,
	dashboard_events: dashboard_events$1,
	wish_list: wish_list$1,
	tables: tables$2,
	checkin: checkin$1,
	qr_center: qr_center$1,
	invitations: invitations,
	setup_and_invitation: setup_and_invitation$1,
	budget_overview: budget_overview$1,
	budget_transactions: budget_transactions$1,
	budget_menu: budget_menu$1,
	notifications_menu: notifications_menu$1,
	help_and_info: help_and_info$1,
	logout: logout$1,
	letter: letter$1,
	vs_last_month: vs_last_month$1,
	mark_read: mark_read$1,
	actions: actions$1,
	phone: phone$1,
	amount: amount$1,
	type: type$1,
	all: all$1,
	refresh: refresh$1,
	preview: preview$1,
	copy: copy$1,
	copied: copied$1,
	sent: sent$1,
	declined: declined$1,
	completed: completed$1,
	in_progress: in_progress$1,
	cancelled: cancelled$1,
	todo: todo$1,
	review: review$1,
	total_events: total_events$1,
	total_guests: total_guests$1,
	invitations_sent: invitations_sent$1,
	total_budget: total_budget$1,
	quick_actions: quick_actions,
	recent_activities: recent_activities,
	ceremony_progress: ceremony_progress,
	budget_summary: budget_summary,
	invitation_stats: invitation_stats,
	today: today$1,
	this_week: this_week$1,
	days_to_wedding: days_to_wedding$1,
	ceremony_date: ceremony_date$1,
	subtitle: subtitle$1,
	add_event: add_event$1,
	event_time: event_time$1,
	event_location: event_location$1,
	past: past$1,
	calendar_view: calendar_view$1,
	timeline_view: timeline_view$1,
	grid_view: grid_view$1,
	traditional: traditional$1,
	reception: reception$1,
	blessing: blessing$1,
	rehearsal: rehearsal$1,
	engagement: engagement$1,
	status_scheduled: status_scheduled$1,
	status_ongoing: status_ongoing$1,
	status_completed: status_completed$1,
	status_cancelled: status_cancelled$1,
	edit_event: edit_event$1,
	delete_event: delete_event$1,
	view_details: view_details$1,
	guests_attending: guests_attending$1,
	venue: venue$1,
	capacity: capacity$1,
	dress_code: dress_code$1,
	add_guest: add_guest$1,
	guest_name: guest_name$1,
	guest_phone: guest_phone$1,
	table_number: table_number$1,
	rsvp_status: rsvp_status$1,
	dietary: dietary$1,
	plus_one: plus_one$1,
	relationship: relationship$1,
	side: side$1,
	bride_side: bride_side$1,
	groom_side: groom_side$1,
	both_sides: both_sides$1,
	confirmed_guests: confirmed_guests$1,
	pending_guests: pending_guests$1,
	declined_guests: declined_guests$1,
	import_guests: import_guests$1,
	export_guests: export_guests$1,
	search_guests: search_guests$1,
	filter_status: filter_status$1,
	filter_side: filter_side$1,
	mobile_view: mobile_view$1,
	table_view: table_view$1,
	vip: vip$1,
	special_needs: special_needs$1,
	choose_template: choose_template$1,
	template_classic: template_classic$1,
	template_floral: template_floral$1,
	template_royal: template_royal$1,
	customize_theme: customize_theme$1,
	primary_color: primary_color$1,
	font_style: font_style$1,
	background_style: background_style$1,
	preview_invitation: preview_invitation$1,
	digital_invitation: digital_invitation$1,
	paper_invitation: paper_invitation$1,
	save_template: save_template$1,
	bride_name: bride_name$1,
	groom_name: groom_name$1,
	ceremony_venue: ceremony_venue$1,
	reception_venue: reception_venue$1,
	rsvp_deadline: rsvp_deadline$1,
	wedding_website: wedding_website$1,
	qr_code: qr_code$1,
	add_phase: add_phase$1,
	phase_name: phase_name$1,
	phase_time: phase_time$1,
	phase_duration: phase_duration$1,
	phase_location: phase_location$1,
	phase_description: phase_description$1,
	multi_ceremony: multi_ceremony$1,
	single_ceremony: single_ceremony$1,
	reorder_phases: reorder_phases$1,
	blessing_ceremony: blessing_ceremony$1,
	hair_ceremony: hair_ceremony$1,
	thread_ceremony: thread_ceremony$1,
	gate_ceremony: gate_ceremony$1,
	reception_ceremony: reception_ceremony$1,
	candle_ceremony: candle_ceremony$1,
	flower_ceremony: flower_ceremony$1,
	officiant: officiant$1,
	musicians: musicians$1,
	photographer: photographer$1,
	videographer: videographer$1,
	send_invitation: send_invitation$1,
	bulk_send: bulk_send$1,
	total_sent: total_sent$1,
	total_pending: total_pending$1,
	response_rate: response_rate$1,
	resend: resend$1,
	qr_code_title: qr_code_title$1,
	qr_description: qr_description$1,
	via_sms: via_sms$1,
	via_email: via_email$1,
	via_whatsapp: via_whatsapp$1,
	via_telegram: via_telegram$1,
	schedule_send: schedule_send$1,
	send_now: send_now$1,
	personalize: personalize$1,
	invitation_link: invitation_link$1,
	write_letter: write_letter$1,
	both: both$1,
	template_formal: template_formal$1,
	template_casual: template_casual$1,
	template_modern: template_modern$1,
	export_pdf: export_pdf$1,
	export_word: export_word$1,
	font_size: font_size$1,
	font_family: font_family$1,
	letter_preview: letter_preview$1,
	dear_guests: dear_guests$1,
	salutation: salutation$1,
	body: body$1,
	closing: closing$1,
	signature: signature$1,
	add_gift: add_gift$1,
	gift_type: gift_type$1,
	cash: cash$1,
	non_cash: non_cash$1,
	gift_amount: gift_amount$1,
	gift_description: gift_description$1,
	gifted_by: gifted_by$1,
	gift_date: gift_date$1,
	total_gifts: total_gifts$1,
	total_cash: total_cash$1,
	total_items: total_items$1,
	average_gift: average_gift$1,
	thank_you_sent: thank_you_sent$1,
	send_thank_you: send_thank_you$1,
	currency: currency$1,
	khr: khr$1,
	usd: usd$1,
	search_gifts: search_gifts$1,
	filter_type: filter_type$1,
	notes: notes$1,
	add_task: add_task$1,
	task_title: task_title$1,
	task_description: task_description$1,
	assignee: assignee$1,
	due_date: due_date$1,
	priority: priority$1,
	priority_high: priority_high$1,
	priority_medium: priority_medium$1,
	priority_low: priority_low$1,
	column_todo: column_todo$1,
	column_in_progress: column_in_progress$1,
	column_review: column_review$1,
	column_done: column_done$1,
	move_to: move_to$1,
	overdue: overdue$1,
	upcoming: upcoming$1,
	filter_priority: filter_priority$1,
	filter_assignee: filter_assignee$1,
	checklist: checklist$1,
	add_checklist: add_checklist$1,
	attachments: attachments$1,
	comments: comments$1,
	add_expense: add_expense$1,
	total_spent: total_spent$1,
	remaining: remaining$1,
	over_budget: over_budget$1,
	on_track: on_track$1,
	category: category$1,
	category_venue: category_venue$1,
	category_catering: category_catering$1,
	category_photography: category_photography$1,
	category_flowers: category_flowers$1,
	category_music: category_music$1,
	category_attire: category_attire$1,
	category_invitation: category_invitation$1,
	category_transport: category_transport$1,
	category_honeymoon: category_honeymoon$1,
	category_other: category_other$1,
	expense_name: expense_name$1,
	vendor: vendor$1,
	paid: paid$1,
	unpaid: unpaid$1,
	partial: partial$1,
	payment_date: payment_date$1,
	deposit: deposit$1,
	balance: balance$1,
	set_budget: set_budget$1,
	budget_allocation: budget_allocation$1,
	mark_all_read: mark_all_read$1,
	filter_all: filter_all$1,
	filter_rsvp: filter_rsvp$1,
	filter_reminder: filter_reminder$1,
	filter_alert: filter_alert$1,
	filter_task: filter_task$1,
	no_notifications: no_notifications$1,
	rsvp_confirmed: rsvp_confirmed$1,
	rsvp_declined: rsvp_declined$1,
	task_completed: task_completed$1,
	budget_alert: budget_alert$1,
	reminder: reminder$1,
	guest_added: guest_added$1,
	gift_received: gift_received$1,
	payment_due: payment_due$1,
	yesterday: yesterday$1,
	earlier: earlier$1,
	register: register$1,
	have_account: have_account$1,
	couple_name: couple_name$1,
	wedding_date: wedding_date$1,
	account_settings: account_settings$1,
	preview_link: preview_link$1,
	copy_link: copy_link$1,
	generate_link: generate_link$1,
	editor: editor$1,
	desktop: desktop$1,
	tablet: tablet$1,
	mobile: mobile$1,
	full_preview: full_preview$1,
	save_change: save_change$1,
	live_preview: live_preview$1,
	or_continue_with: or_continue_with$1,
	sign_out: sign_out$1,
	signing_in: signing_in$1,
	no_roles_found: no_roles_found$1,
	letter_setup: letter_setup$1,
	template_setup: template_setup$1,
	dashboard: dashboard$1,
	new_event: new_event$1,
	collapse_sidebar: collapse_sidebar$1,
	expand_sidebar: expand_sidebar$1,
	tasks_completed: tasks_completed$1,
	budget_used: budget_used$1,
	rsvp_stats: rsvp_stats$1,
	decline: decline$1,
	ceremony_timeline: ceremony_timeline$1,
	this_month: this_month$1,
	recent_activity: recent_activity$1,
	create_your_wedding: create_your_wedding$1,
	create_wedding_sub: create_wedding_sub$1,
	create_wedding_btn: create_wedding_btn$1,
	bride_name_placeholder: bride_name_placeholder$1,
	groom_name_placeholder: groom_name_placeholder$1,
	budget_placeholder: budget_placeholder$1,
	venue_placeholder: venue_placeholder$1,
	wedding_created_success: wedding_created_success$1,
	wedding_create_failed: wedding_create_failed$1,
	creating: creating$1,
	rsvp_pending: rsvp_pending$1,
	import_guest: import_guest$1,
	modern: modern$1,
	royal_gold: royal_gold$1,
	vintage: vintage$1,
	classic: classic$1,
	forest: forest$1,
	blossom: blossom$1,
	midnight: midnight$1,
	mode: mode$1,
	select_template: select_template,
	inactive: inactive$1,
	none: none$1,
	or: or$1,
	validation_required: validation_required$1,
	validation_email: validation_email$1,
	validation_url: validation_url$1,
	validation_minLength: validation_minLength$1,
	validation_maxLength: validation_maxLength$1,
	validation_min: validation_min$1,
	validation_max: validation_max$1,
	validation_pattern: validation_pattern$1,
	validation_phone: validation_phone$1,
	form_name: form_name$1,
	form_firstName: form_firstName$1,
	form_lastName: form_lastName$1,
	form_email: form_email$1,
	form_phone: form_phone$1,
	form_password: form_password$1,
	form_confirm: form_confirm$1,
	form_role: form_role$1,
	form_department: form_department$1,
	form_avatar: form_avatar$1,
	form_message: form_message$1,
	form_description: form_description$1,
	form_title: form_title$1,
	form_date: form_date$1,
	form_startDate: form_startDate$1,
	form_endDate: form_endDate$1,
	form_status: form_status$1,
	form_type: form_type$1,
	form_color: form_color$1,
	form_tags: form_tags$1,
	form_notes: form_notes$1,
	form_address: form_address$1,
	form_city: form_city$1,
	form_country: form_country$1,
	user_invite: user_invite$1,
	user_edit: user_edit$1,
	user_delete: user_delete$1,
	user_inviteEmail: user_inviteEmail$1,
	user_inviteRole: user_inviteRole$1,
	user_inviteMessage: user_inviteMessage$1,
	user_inviteSend: user_inviteSend$1,
	user_createSuccess: user_createSuccess$1,
	user_inviteSuccess: user_inviteSuccess$1,
	user_deleteConfirm: user_deleteConfirm$1,
	are_you_sure_you_want_to_delete_this_guest: are_you_sure_you_want_to_delete_this_guest$1,
	user_roles_admin: user_roles_admin$1,
	user_roles_manager: user_roles_manager$1,
	user_roles_editor: user_roles_editor$1,
	user_roles_viewer: user_roles_viewer$1,
	user_roles_guest: user_roles_guest$1,
	project_create: project_create$1,
	project_edit: project_edit$1,
	project_name: project_name$1,
	project_members: project_members$1,
	project_schedule: project_schedule$1,
	report_create: report_create$1,
	report_title: report_title$1,
	report_type: report_type$1,
	report_period: report_period$1,
	report_filters: report_filters$1,
	report_schedule: report_schedule$1,
	report_generate: report_generate$1,
	settings_general: settings_general$1,
	settings_appearance: settings_appearance$1,
	settings_language: settings_language$1,
	settings_theme: settings_theme$1,
	settings_notifications: settings_notifications$1,
	settings_security: settings_security$1,
	settings_billing: settings_billing$1,
	settings_theme_light: settings_theme_light$1,
	settings_theme_dark: settings_theme_dark$1,
	settings_theme_system: settings_theme_system$1,
	nav_dashboard: nav_dashboard$1,
	nav_users: nav_users$1,
	nav_projects: nav_projects$1,
	nav_reports: nav_reports$1,
	nav_analytics: nav_analytics$1,
	nav_messages: nav_messages$1,
	nav_settings: nav_settings$1,
	nav_help: nav_help$1,
	nav_integrations: nav_integrations$1,
	select: select$1,
	show: show$1,
	page: page$1,
	next_page: next_page$1,
	previous_page: previous_page$1,
	last_page: last_page$1,
	jump_to_page: jump_to_page$1,
	page_num: page_num$1,
	entries: entries$1,
	showing: showing$1,
	to: to$1,
	organization_name: organization_name$1,
	organization_name_placeholder: organization_name_placeholder$1,
	has_account: has_account$1,
	saving: saving$1,
	manage_profile: manage_profile$1,
	occupation: occupation$1,
	n_o: n_o$1,
	child: child$1,
	guardian: guardian$1,
	registered_user: registered_user$1,
	unregistered_guardian: unregistered_guardian$1,
	unregistered_student: unregistered_student$1,
	view_guardian_register: view_guardian_register$1,
	create_irst: create_irst$1,
	edit_guest: edit_guest$1,
	import_guests_from_excel: import_guests_from_excel$1,
	no_guests: no_guests$1,
	no_ceremonies: no_ceremonies$1,
	add_language: add_language,
	start_time: start_time$1,
	end_time: end_time$1,
	no_phases: no_phases,
	tasks: tasks$2,
	send_invite: send_invite$1,
	send_via_telegram: send_via_telegram$1,
	send_via_mail: send_via_mail,
	send_via_whatsapp: send_via_whatsapp$1,
	budget: budget$1,
	common: common$1,
	no_results_for: no_results_for$1,
	no_data_found: no_data_found$1,
	there_is_no_data_available: there_is_no_data_available$1,
	no_results_found: no_results_found$1,
	try_adjusting_your_search: try_adjusting_your_search$1,
	there_is_no_data_to_display: there_is_no_data_to_display$1,
	position: position$1,
	joined_date: joined_date$1,
	birth_date: birth_date$1,
	more_button: more_button$1,
	more: more$1,
	clear_all: clear_all$1,
	select_all: select_all$1,
	deselect_all: deselect_all$1,
	selected: selected$1,
	go_to_page: go_to_page$1,
	first: first$1,
	last: last$1,
	loading_data: loading_data$1,
	total_records: total_records$1,
	data_not_found: data_not_found$1,
	article: article$1,
	media: media$1,
	auth: auth$1,
	ceremony: ceremony$1,
	guest: guest$1,
	invite: invite$1,
	plans: plans$1,
	validation: validation$1,
	please_select: please_select$1,
	no_event_selected: no_event_selected$1,
	add_ceremony_first: add_ceremony_first$1,
	add_ceremony: add_ceremony$1
};

var app = {
	name: "ស​រិ​កា",
	tagline: "ការគ្រប់គ្រងពិធីអាពាហ៍ពិពាហ៍ប្រណីត",
	description: "រៀបចំអាពាហ៍ពិពាហ៍ដ៏ល្អឥតខ្ចោះរបស់អ្នកដោយអំណោយទាននិងភាពជាក់លាក់"
};
var System = "-------បកប្រែភាសាប្រព័ន្ធ-----------";
var app_name = "ការគ្រប់គ្រងពិធីមង្គលការ";
var dark_mode = "ម៉ូតងងឹត";
var light_mode = "ម៉ូតភ្លឺ";
var light_dark = "ផ្លាស់ទៅម៉ូតងងឹត";
var dark_light = "ផ្លាស់ទៅម៉ូតភ្លឺ";
var language_change = "ប្ដូរភាសា";
var collapse = "បិទ";
var expand = "ពង្រីក";
var months_ = [
	"មករា",
	"កុម្ភៈ",
	"មីនា",
	"មេសា",
	"ឧសភា",
	"មិថុនា",
	"កក្កដា",
	"សីហា",
	"តុលា",
	"វិច្ឆិកា",
	"ធ្នូ",
	"ធ្នូ"
];
var days_ = [
	"អាទិត្យ",
	"ច័ន្ទ",
	"អង្គារ",
	"ពុធ",
	"ព្រហស្បតិ៍",
	"សុក្រ",
	"សៅរ៍"
];
var khmer_ = {
	months: [
		"ឥណ្ឌ្រា",
		"វេសាក",
		"សាងក្រាន់",
		"ភ្នំពេញ",
		"កాటి",
		"វរ",
		"បដ្រា",
		"ចៃត្រា",
		"វ៉ៃសាខា",
		"ជេត",
		"អាសាទ",
		"ម៉ាហា"
	],
	year: "ឆ្នាំខ្មែរ",
	day: "ថ្ងៃ"
};
var bold = "ដិត";
var italic = "ទ្រេត";
var underline = "គូសបន្ទាត់ក្រោម";
var strikethrough = "គូសបន្ទាត់ឆ្លង";
var heading = "ចំណងជើង";
var bullet_list = "បញ្ជីចំណុច";
var ordered_list = "បញ្ជីលេខ";
var task_list = "បញ្ជីកិច្ចការ";
var blockquote = "សម្រង់";
var horizontal_rule = "បន្ទាត់ផ្តេក";
var highlight = "បន្លិច";
var link = "តំណភ្ជាប់";
var image = "រូបភាព";
var youtube = "វីដេអូ YouTube";
var table = "តារាង";
var undo = "មិនធ្វើវិញ";
var redo = "ធ្វើវិញ";
var characters = "តួអក្សរ";
var words = "ពាក្យ";
var loading_editor = "កំពុងផ្ទុកកម្មវិធីនិពន្ធ...";
var english = "ភាសាអង់គ្លេស";
var khmer = "ភាសាខ្មែរ";
var search = "ស្វែងរក";
var open_sidebar = "បើកទៅផ្ទាំងធំ";
var close_sidebar = "បិទទៅផ្ទាំងធំ";
var waiting_internet_connection = "កំពុងព្យាយាមតភ្ជាប់ទៅកាន់បណ្ដាញសេវាអ៊ីនធើណែត...";
var restore_internet_connection = "បណ្ដាញអ៊ីនធើណែតរបស់អ្នកត្រូវបានតភ្ជាប់ឡើងវិញ!";
var notification = "ព័ត៌មាន";
var readall = "អានទាំងអស់";
var clearall = "សម្អាតទាំងអស់";
var unreadall = "មិនអានទាំងអស់";
var unread = "មិនអាន";
var read = "អាន";
var no_notification = "មិនមានព័ត៌មានអ្វីឡើយ!";
var minute_last = "នាទីកន្លងទៅ";
var time = "រយៈពេល";
var show_unread_only = "បង្ហាញតែមិនអាន";
var show_all = "បង្ហាញទាំងអស់";
var dashboard_data = "ផ្ទាំងគ្រប់គ្រង និងទិន្នន័យ";
var learner_enrollment = "អ្នកសិក្សា និងការចុះឈ្មោះ";
var learning_course = "កំណត់ការសិក្សា និងវគ្គសិក្សា";
var socialboard_forum = "មេឌា និងមាតិការ";
var report_analytic = "របាយការណ៍ និង ស្ថិតិ";
var financial = "ហិរញ្ញវត្ថុ";
var skill_testing = "ការតេស្ដសមត្ថភាពសិក្សា";
var employee = "បុគ្គលិក";
var user_privillege = "អ្នកប្រើប្រាស់​ និងទិន្ន័យ";
var payment = "ការបង់ប្រាក់";
var academic = "ឆ្នាំសិក្សា";
var developed = "អ្នកអភិវឌ្ឍ :នី រិទ្ធី";
var developedby = "អភិវឌ្ឍដោយ";
var welcome = "សូមស្វាគមន៍";
var description1 = "នេះគឺជាទំព័រគំរូ។";
var work = "សូមស្វាគមន៍";
var team = "ក្រមការងារ";
var overview = "ទិដ្ឋភាពទូទៅ";
var task = "កិច្ចការ";
var instructor = "គ្រូបង្រៀន";
var lecture = "ការបង្រៀន";
var home = "ទំព័រដើម";
var course_management = "គ្រប់គ្រងវគ្គសិក្សា";
var course = "វគ្គសិក្សា";
var tutor = "គ្រូ";
var learner = "សិស្ស";
var user = "អ្នកប្រើប្រាស់";
var assign = "កំណត់ឲ្យ";
var config = "កំណត់";
var learner_enroll = "ចុះឈ្មោះអ្នកសិក្សា";
var learner_enrollweb = "ការចុះឈ្មោះតាមវេបសាយ";
var learner_profile = "អ្នកសិក្សា";
var learner_config = "កំណត់អ្នកសិក្សា";
var information = "ព៌ត៌មាន";
var report = "របាយការណ៍";
var tutor_dashboard = "ព៌ត៌មានគ្រូ";
var invoice = "វិក្ដយបត្រ";
var receipt = "វិក្ដយបត្របង់ប្រាក់";
var refund_manage = "គ្រប់គ្រងបង្វិលប្រាក់";
var subscription = "ការជាវ";
var social = "សង្គម";
var forum = "វេទិកា";
var content = {
	articles: "អត្ថបទ",
	article_categories: "ប្រភេទអត្ថបទ",
	categories: "ប្រភេទ",
	category: "ប្រភេទ",
	new_article: "អត្ថបទថ្មី",
	edit_article: "កែអត្ថបទ",
	delete_article: "លុបអត្ថបទ",
	add_category: "បន្ថែមប្រភេទ",
	edit_category: "កែប្រភេទ",
	delete_category: "លុបប្រភេទ",
	delete_category_warning: "វានឹងលុបប្រភេទនេះជាអចិន្ត្រៃយ៍។",
	category_name: "ឈ្មោះប្រភេទ",
	parent_category: "ប្រភេទមេ",
	none_top_level: "គ្មាន (កំពូល)",
	cover_image: "រូបភាពគម្រប",
	article_images: "រូបភាពអត្ថបទ",
	select_cover_image: "ជ្រើសរូបភាពគម្រប",
	select_article_images: "ជ្រើសរូបភាពអត្ថបទ",
	add_images: "បន្ថែមរូបភាព",
	content: "មាតិកា",
	content_placeholder: "សរសេរមាតិកាអត្ថបទរបស់អ្នកនៅទីនេះ...",
	excerpt: "សេចក្ដីសង្ខេប",
	excerpt_placeholder: "សេចក្ដីសង្ខេបខ្លីនៃអត្ថបទ...",
	tags: "ស្លាក",
	all_categories: "ប្រភេទទាំងអស់",
	published: "បានផ្សព្វផ្សាយ",
	draft: "សេចក្ដីព្រាង",
	archived: "បានទុកក្នុងប័ណ្ណសារ",
	article_title: "ចំណងជើងអត្ថបទ"
};
var feature = "លក្ខណៈ";
var document = "ឯកសារ";
var announcement = "សេចក្តីប្រកាស";
var name = "ឈ្មោះ";
var name_khmer = "ឈ្មោះជាខ្មែរ";
var name_english = "ឈ្មោះជាអង់គ្លេស";
var name_en = "ឈ្មោះ(អង់គ្លេស)";
var name_km = "ឈ្មោះ(ខ្មែរ)";
var academic_setting = "ការកំណត់ឆ្នាំសិក្សា";
var user_create = "បង្កើតដោយ";
var user_update = "កែប្រែដោយ";
var created_date = "កាលបរិច្ឆេទបង្កើត";
var updated_date = "កាលបរិច្ឆេទកែប្រែ";
var action = "សកម្មភាព";
var code = "កូដ";
var code_ = "លេខសម្គាល់";
var edit = "កែប្រែ";
var gender = "ភេទ";
var teaching = "ការបង្រៀន";
var year = "ឆ្នាំ";
var semester = "ឆមាស";
var subject = "មុខវិជ្ជា";
var score_entry = "បញ្ចូលពិន្ទុ";
var student_list = "បញ្ជីនិស្សិត";
var attendance_entry = "ការចុះវត្តមាន";
var archive = "បណ្ណសារនិស្សិត";
var batch = "ជំនាន់";
var room = "បន្ទប់";
var select_room = "ជ្រើសរើសបន្ទប់";
var select_time = "ជ្រើសរើសពេល";
var select_subject = "ជ្រើសរើសមុខវិជ្ជា";
var no_data = "មិនមានទិន្នន័យ";
var time_record = "សម្រង់ម៉ោង";
var professor = "សាស្ត្រាចារ្យ";
var degree_level = "កម្រិតសញ្ញាបត្រ";
var subject_taught = "បង្រៀនមុខវិជ្ជា";
var generation = "ជំនាន់";
var classroom = "បន្ទប់រៀន";
var students_in_list = "ចំនួននិស្សិតក្នុងបញ្ជី";
var phone_number = "លេខទូរស័ព្ទ";
var specialization = "ឯកទេស";
var group = "ក្រុម";
var teaching_days = "បង្រៀននៅថ្ងៃ";
var students_attendance = "និស្សិតរៀនសង";
var date_of_birth = "ថ្ងៃខែឆ្នាំកំណើត";
var graduation_year = "ឆ្នាំបញ្ចប់ការសិក្សា";
var major = "ជំនាញ";
var hours = "ម៉ោងទី";
var dropped_students = "និស្សិតបោះបង់";
var class_code = "លេខកូដថ្នាក់";
var phone_penh_capital = "រាជធានីភ្នំពេញ";
var academic_year = "ឆ្នាំសិក្សា";
var online_student = "សិស្សរៀនតាមអនឡាញ";
var no_num = "លេខរៀង";
var teaching_day = "ថ្ងៃបង្រៀន";
var lesson_content = "ខ្លឹមសារង្រៀន";
var note = "កំណត់ចំណាំ";
var times = "ម៉ោងទី";
var hour = "ម៉ោង";
var duration = "រយៈពេល";
var attendance = "វត្ដមាន";
var other = "ផ្សេងៗ";
var print = "ព្រីន";
var student_score_record_list = "បញ្ជីពិន្ទុនិស្សិត";
var export_as_excel = "យកចេញជា Excel";
var goto_telegram_group = "ចូលទៅកាន់ក្រុមតេលេក្រាម";
var name_latin = "ឈ្មោះជាឡាតាំង";
var surname_name = "គោតនាម និងនាម";
var dob = "ថ្ងៃខែឆ្នាំកំណើត";
var midterm = "ពាក់កណ្ដាលឆមាស";
var final = "ពិន្ទុបញ្ចប់";
var total = "សរុប";
var kingdom_of_cambodia = "ព្រះរាជាណាចក្រកម្ពុជា";
var nation_religion_king = "ជាតិ សាសនា ព្រះមហាក្សត្រ";
var moeys = "ក្រសួងអប់រំ យុវជន និងកីឡា";
var school_name = "នគរ";
var school = "សាលា";
var enter_password = "សូមបញ្ចូលលេខកូដសម្ងាត់";
var enter_username = "សូមបញ្ចូលឈ្មោះអ្នកប្រើប្រាស់";
var login = "ចូលប្រើប្រាស់";
var username = "ឈ្មោះអ្នកប្រើប្រាស់";
var password = "លេខកូដសម្ងាត់";
var confirm_password = "បញ្ជាក់ពាក្យសម្ងាត់";
var invalid_username_password = "ឈ្មោះអ្នកប្រើប្រាស់ ឬលេខសម្ងាត់មិនត្រឹមត្រូវ";
var login_failed = "ការចូលបានបរាជ័យ";
var loading_ = "កំពុងចូល...";
var loading = "កំពុង់ចូល";
var no_account = "មិនទាន់មានគណនី?";
var sign_up = "ចុះឈ្មោះ";
var teaching_class = "ថ្នាក់កំពុងបង្រៀន";
var username_required = "ឈ្មោះអ្នកប្រើប្រាស់ត្រូវបំពេញ";
var password_required = "ពាក្យសម្ងាត់ត្រូវបំពេញ";
var fill_all_fields = "សូមបំពេញគ្រប់ផ្នែក";
var invalid_credentials = "ឈ្មោះអ្នកប្រើប្រាស់ ឬពាក្យសម្ងាត់មិនត្រឹមត្រូវ";
var login_successful = "ចូលប្រើប្រាស់បានជោគជ័យ!";
var missing_field = "មិនគ្រប់ចន្លោះ";
var email = "អ៊ីម៉ែល";
var email_invalid = "សូមបញ្ចូលអ៊ីម៉ែលត្រឹមត្រូវ។";
var english_name = "ឈ្មោះជាភាសាអង់គ្លេស";
var add = "បន្ថែម";
var view = "មើល";
var create = "បង្កើត";
var update = "កែសម្រួល";
var cancel = "បោះបង់";
var save = "រក្សាទុក";
var migrate = "ផ្លាស់ប្តូរ";
var close = "បិទ";
var reject = "បដិសេធ";
var approve = "អនុម័ត";
var upload = "ផ្ទុកឡើង";
var download = "ទាញយក";
var settings = "ការកំណត់";
var info = "ព័ត៌មាន";
var warning = "ការព្រមាន";
var success = "ជោគជ័យ";
var danger = "គ្រោះថ្នាក់";
var share = "ចែករំលែក";
var send = "ផ្ញើ";
var install = "ដំឡើង";
var user_information = "ព័ត៌មានលម្អិតពីអ្នកប្រើប្រាស់";
var new_user = "អ្នកប្រើប្រាស់ថ្មី";
var edit_user = "កែប្រែអ្នកប្រើប្រាស់";
var do_you_want_to_delete = "តើអ្នកចង់លុប {value} ឬ?";
var this_action_cannot_be_undone = "សកម្មភាពនេះមិនអាចត្រឡប់វិញបានទេ។";
var user_deleted_successfully = "បានលុបអ្នកប្រើប្រាស់ដោយជោគជ័យ។";
var failed_to_delete_user = "ការលុបអ្នកប្រើប្រាស់បានបរាជ័យ។";
var created_by = "បង្កើតដោយ";
var updated_by = "កែប្រែដោយ";
var user_management = "គ្រប់គ្រងអ្នកប្រើប្រាស់";
var user_type = "ប្រភេទអ្នកប្រើប្រាស់";
var user_role = "តួនាទីអ្នកប្រើប្រាស់";
var user_group = "ក្រុមអ្នកប្រើប្រាស់";
var user_list = "បញ្ជីអ្នកប្រើប្រាស់";
var user_group_list = "បញ្ជីក្រុមអ្នកប្រើប្រាស់";
var user_group_name = "ឈ្មោះក្រុមអ្នកប្រើប្រាស់";
var user_group_code = "លេខកូដក្រុមអ្នកប្រើប្រាស់";
var user_group_description = "ការពិពណ៌នាក្រុមអ្នកប្រើប្រាស់";
var user_group_create = "បង្កើតក្រុមអ្នកប្រើប្រាស់";
var user_group_edit = "កែសម្រួលក្រុមអ្នកប្រើប្រាស់";
var user_group_delete = "លុបក្រុមអ្នកប្រើប្រាស់";
var user_group_view = "មើលក្រុមអ្នកប្រើប្រាស់";
var user_group_add = "បន្ថែមក្រុមអ្នកប្រើប្រាស់";
var user_group_remove = "យកចេញក្រុមអ្នកប្រើប្រាស់";
var user_group_assign = "កំណត់ក្រុមអ្នកប្រើប្រាស់";
var user_group_unassign = "ដកចេញក្រុមអ្នកប្រើប្រាស់";
var search_by_subject = "ស្វែងរកតាមមុខវិជ្ជា";
var search_by_class = "ស្វែងរកតាមថ្នាក់";
var no_scores_found = "មិនមានពិន្ទុសម្រាប់ការបង្រៀននេះទេ";
var no_attendance_found = "មិនមានវត្តមានសម្រាប់ការបង្រៀននេះទេ";
var no_students_found = "មិនមាននិស្សិតសម្រាប់ការបង្រៀននេះទេ";
var no_students_in_class = "មិនមាននិស្សិតក្នុងថ្នាក់នេះទេ";
var no_students_in_batch = "មិនមាននិស្សិតក្នុងជំនាន់នេះទេ";
var no_students_in_room = "មិនមាននិស្សិតក្នុងបន្ទប់នេះទេ";
var confirmation = "ការបញ្ជាក់";
var confirm = "បញ្ជាក់";
var student_score_record = "បញ្ជីពិន្ទុនិស្សិត";
var student_attendance_record = "បញ្ជីវត្តមាននិស្សិត";
var student_attendance = "វត្តមាននិស្សិត";
var student_score = "ពិន្ទុនិស្សិត";
var student = "និស្សិត";
var student_list_ = "បញ្ជីនិស្សិត";
var record = "កំណត់ត្រា";
var record_list = "បញ្ជីកំណត់ត្រា";
var username_requirements = "ឈ្មោះអ្នកប្រើត្រូវតែមានពី ៣-១៥ តួអក្សរ (អក្សរ, លេខ, ឬ _)";
var password_requirements = "ពាក្យសម្ងាត់ត្រូវតែមានយ៉ាងហោចណាស់ ៨ តួអក្សរ";
var logging_in = "កំពុងចូល...";
var logging_out = "កំពុងចេញ...";
var logout = "ចេញ";
var logout_successful = "ចេញបានជោគជ័យ";
var logout_failed = "ការចេញបានបរាជ័យ";
var logout_confirmation = "តើអ្នកប្រាកដថាចង់ចេញពីគណនីនេះទេ?";
var logout_confirmation_message = "ការចេញពីគណនីនេះនឹងមិនអាចត្រឡប់វិញបានទេ។";
var logout_confirmation_title = "ការបញ្ជាក់";
var logout_confirmation_button = "ចេញ";
var score = "ពិន្ទុ";
var score_list = "បញ្ជីពិន្ទុ";
var description = "ការពិពណ៌នា";
var description_ = "ពិពណ៌នា";
var home_page = "ទំព័រដើម";
var user_profile = "អ្នកប្រើប្រាស់";
var user_profile_information = "ព័ត៌មានលម្អិតអ្នកប្រើប្រាស់";
var updated_at = "ពេលកែប្រែ";
var created_at = "ពេលបង្កើត";
var no_address_provided = "មិនមានអាសយដ្ឋានបានផ្ដល់ឲ្យ";
var system_information = "ព័ត៌មានពីប្រព័ន្ធ";
var place_of_birth = "ទីកន្លែងកំណើត";
var user_detail = "លម្អីតអ្នកប្រើប្រាស់";
var address = "អាសយដ្ឋាន";
var personal_information = "ព័ត៌មានផ្ទាល់ខ្លួន";
var basic_information = "ព័ត៌មានមូលដ្ឋាន";
var back = "ត្រឡប់ក្រោយ";
var edit_profile = "កែប្រែព័ត៌មាន";
var ranking = "ចំណាត់ថ្នាក់";
var searchPlaceholder = "ស្វែងរកតាមឈ្មោះ ពិន្ទុ...";
var noDataFound = "មិនមានទិន្នន័យ";
var student_score_detail = "ពិន្ទុសិស្សលម្អិត";
var student_attendance_detail = "វត្តមានសិស្សលម្អិត";
var student_attendance_record_list = "បញ្ជីវត្តមានសិស្ស";
var student_score_record_list_ = "បញ្ជីពិន្ទុសិស្ស";
var total_score = "ពិន្ទុសរុប";
var total_attendance = "វត្តមានសរុប";
var summary = "សង្ខេប";
var new_score = "ពិន្ទុថ្មី";
var reload = "ផ្ទុកឡើងវិញ";
var reload_page = "ផ្ទុកទំព័រឡើងវិញ";
var save_and_close = "រក្សាទុក និងបិទ";
var save_all = "រក្សាទុកទាំងអស់";
var student_score_entry = "បញ្ចូលពិន្ទុនិស្សិត";
var select_course = "ជ្រើសរើសវគ្គសិក្សា";
var current_password = "ពាក្យសម្ងាត់បច្ចុប្បន្ន";
var new_password = "ពាក្យសម្ងាត់ថ្មី";
var confirm_new_password = "បញ្ជាក់ពាក្យសម្ងាត់ថ្មី";
var change_password = "ប្តូរពាក្យសម្ងាត់";
var reset_password = "កំណត់ពាក្យសម្ងាត់ឡើងវិញ";
var assign_role = "កំណត់តួនាទី";
var remove_role = "លុបតួនាទី";
var select_role_for_user = "ជ្រើសរើសតួនាទីដើម្បីកំណត់ទៅឱ្យអ្នកប្រើ";
var add_user = "បន្ថែមអ្នកប្រើប្រាស់";
var first_name = "នាមខ្លួន";
var last_name = "នាមត្រកូល";
var no_users = "រក​មិន​ឃើញ​អ្នក​ប្រើ​ប្រាស់";
var roles = "តួនាទី";
var role = "តួនាទី";
var full_name = "ឈ្មោះពេញ";
var update_your_profile = "ធ្វើបច្ចុប្បន្នភាពប្រវត្តិរូបរបស់អ្នក";
var bio = "ប្រវត្តិរូប";
var tell_us_about_yourself = "ប្រាប់យើងអំពីខ្លួនអ្នក";
var update_profile = "ធ្វើបច្ចុប្បន្នភាពប្រវត្តិរូប";
var profile_detail = "ព័ត៌មានលម្អិតប្រវត្តិរូប";
var view_profile_detail = "មើលព័ត៌មានលម្អិតប្រវត្តិរូប";
var nationality = "សញ្ជាតិ";
var do_you_want_to_delete_score_data_that_have_note = "តើអ្នកពិតជាចង់លុបទិន្នន័យពិន្ទុ {value1} ដែលមាន : {value2}?";
var exam_date = "ថ្ងៃប្រឡង";
var telegram_link_setup = "ការកំណត់តំណភ្ជាប់ Telegram";
var configure_telegram_links = "កំណត់តំណភ្ជាប់ក្រុម/ឆានែល Telegram របស់អ្នក";
var link_type = "ប្រភេទតំណភ្ជាប់";
var group_link = "ក្រុម";
var channel_link = "ឆានែល";
var bot_link = "រូបយន្ត";
var link_information = "ព័ត៌មានតំណភ្ជាប់";
var link_title = "ចំណងជើងតំណភ្ជាប់";
var enter_link_title = "បញ្ចូលចំណងជើងតំណភ្ជាប់";
var telegram_link = "តំណភ្ជាប់ Telegram";
var enter_link_path = "បញ្ចូលផ្លូវតំណភ្ជាប់ (ដោយគ្មាន t.me/)";
var enter_description = "បញ្ចូលការពិពណ៌នា";
var optional = "ជាជម្រើស";
var link_to = "ភ្ជាប់ទៅ";
var select_class = "ជ្រើសរើសថ្នាក់";
var academic_period = "ឆ្នាំសិក្សា";
var select_academic = "ជ្រើសរើសឆ្នាំសិក្សា";
var department = "ផ្នែក";
var select_department = "ជ្រើសរើសផ្នែក";
var official_link = "តំណភ្ជាប់ផ្លូវការ";
var official_link_description = "សម្គាល់ថាជាប៉ុស្តិ៍សារផ្លូវការរបស់សាលា";
var active_link = "តំណភ្ជាប់សកម្ម";
var active_link_description = "ធ្វើឲ្យតំណភ្ជាប់នេះមានភាពអាចមើលឃើញជាសាធារណៈ";
var save_changes = "រក្សាទុកការផ្លាស់ប្តូរ";
var no_changes_to_save = "គ្មានការផ្លាស់ប្តូរដើម្បីរក្សាទុក!";
var save_success = "ទិន្នន័យត្រូវបានរក្សាទុកដោយជោគជ័យ!";
var save_error = "មិនអាចរក្សាទុកទិន្នន័យបានទេ។ សូមព្យាយាមម្តងទៀត។";
var status = {
	active: "សកម្ម",
	pending: "កំពុងរង់ចាំ",
	confirmed: "បានបញ្ជាក់",
	declined: "បានបដិសេធ",
	completed: "បានបញ្ចប់",
	cancelled: "បានលុបចោល",
	in_progress: "កំពុងដំណើរការ",
	done: "រួចរាល់",
	upcoming: "នឹងមកដល់"
};
var do_you_want_to_delete_ = "តើអ្នកចង់លុប {value} មែនទេ?";
var today_attendance_record = "កំណត់ត្រាវត្ដមានថ្ងៃនេះ";
var date = "កាលបរិច្ឆេទ";
var attendance_type = "ប្រភេទវត្ដមាន";
var submit = "បញ្ជូន";
var no_attendance_records_found_for_today = "មិនមានទិន្នន័យវត្តមានសម្រាប់ថ្ងៃនេះទេ";
var setup = "កំណត់";
var offline = "មិនមានអ៊ីនធឺណែត";
var online = "មានបណ្ដាញ";
var student_name = "ឈ្មោះសិស្ស";
var professor_information = "ព័ត៌មានសាស្ត្រាចារ្យ";
var personal_info = "ព័ត៌មានផ្ទាល់ខ្លួន";
var enter_professor_name = "បញ្ចូលឈ្មោះសាស្ត្រាចារ្យ";
var select_degree = "ជ្រើសរើសសញ្ញាបត្រ";
var enter_subject = "បញ្ចូលមុខវិជ្ជា";
var enter_batch = "បញ្ចូលជំនាន់";
var enter_classroom = "បញ្ចូលថ្នាក់រៀន";
var contact_academic = "ទំនាក់ទំនង និងសិក្សា";
var enter_phone = "បញ្ចូលលេខទូរស័ព្ទ";
var enter_specialization = "បញ្ចូលជំនាញ";
var select_semester = "ជ្រើសរើសឆមាស";
var enter_group = "បញ្ចូលក្រុម";
var enter_days = "បញ្ចូលថ្ងៃបង្រៀន";
var statistics_details = "ស្ថិតិ និងព័ត៌មានលម្អិត";
var enter_year = "បញ្ចូលឆ្នាំបញ្ចប់";
var enter_academic_year = "បញ្ចូលឆ្នាំសិក្សា";
var enter_major = "បញ្ចូលជំនាញសិក្សា";
var enter_hours = "បញ្ចូលម៉ោង";
var reset = "កំណត់ឡើងវិញ";
var save_information = "រក្សាទុកព័ត៌មាន";
var GROUP = "ជជែកជាក្រុម";
var group_chat = "ជជែកជាក្រុម";
var personal_chat = "ជជែកផ្ទាល់ខ្លួន";
var official_channel = "ឆានែលផ្លូវការ";
var study_group = "ក្រុមសិក្សា";
var about = "អំពី";
var about_me = "អំពីខ្ញុំ";
var services = "សេវាកម្ម";
var service = "សេវាកម្ម";
var blog = "ប្លុក";
var blogs = "ប្លុក";
var portfolio = "ប្រវត្តិការងារ";
var project = "គម្រោង";
var projects = "គម្រោង";
var contact = "ទំនាក់ទំនង";
var contact_me = "ទំនាក់ទំនងខ្ញុំ";
var open_navigation = "បើកការនាវីហ្គេត";
var close_navigation = "បិទការនាវីហ្គេត";
var artwork = "ស្នាដៃសិល្បៈ";
var gallery = "វិចិត្រសាល";
var wishes = "សំណូមភ្ញៀវ";
var wedding_settings = "ការកំណត់ពិធីការៀបការ";
var articles = "អត្ថបទ";
var article_categories = "ប្រភេទ";
var media_library = "បណ្ណាល័យមេឌៀ";
var guest_management = "គ្រប់គ្រងភ្ញៀវ";
var gift_records = "កំណត់ត្រាអំណោយ";
var event = "ព្រឹត្តិការណ៍";
var setup_invitation = "រៀបចំ & អញ្ជើញ";
var invitations_list = "បញ្ជីការអញ្ជើញ";
var invitation_settings = "រចនាសារអញ្ជើញ";
var all = "ទាំងអស់";
var loading_more = "កំពុងផ្ទុកបន្ថែម...";
var no_more_data = "មិនមានទិន្នន័យបន្ថែមទេ";
var scanning = "កំពុងស្កេន...";
var inventory = "សារពើភ័ណ្ឌ";
var add_inventory = "បន្ថែមសារពើភ័ណ្ឌ";
var enventory_control = "ការគ្រប់គ្រងសារពើភ័ណ្ឌ";
var item_name = "ឈ្មោះធាតុ";
var shipment = "ការដឹកជញ្ជូន";
var quantity = "បរិមាណ";
var login_signup_with = "ចូល ឬចុះឈ្មោះជាមួយ";
var chat = "ជជែក";
var no_internet_connection = "មិនមានការតភ្ជាប់អ៊ីនធឺណែត";
var try_again = "ព្យាយាមម្តងទៀត";
var chat_group = "ក្រុមជជែក";
var user_and_privilege = "អ្នកប្រើ និងសិទ្ធិ";
var privilege = "សិទ្ធិ";
var chat_monitor = "ត្រួតពិនិត្យជជែក";
var monitor = "ត្រួតពិនិត្យ";
var storage$1 = "ស្តុក";
var used_storage = "ស្តុកដែលបានប្រើ";
var available_storage = "ស្តុកដែលអាចប្រើបាន";
var total_storage = "ស្តុកសរុប";
var schedule = "កាលវិភាគ";
var my_schedule = "កាលវិភាគរបស់ខ្ញុំ";
var setting = "ការកំណត់";
var theme = "ប្រធានបទ";
var group_management = "ការគ្រប់គ្រងក្រុម";
var new_role = "តួនាទីថ្មី";
var edit_role = "កែសម្រួលតួនាទី";
var delete_role = "លុបតួនាទី";
var delete_role_confirm = "តើអ្នកប្រាកដថាចង់លុបតួនាទី";
var no_roles = "រក​មិន​ឃើញ​តួ​នាទី";
var permissions = "សិទ្ធិ";
var role_name_placeholder = "ឧ. MANAGER";
var role_desc_placeholder = "ការពិពណ៌នាខ្លី";
var create_group = "បង្កើតក្រុម";
var edit_group = "កែសម្រួលក្រុម";
var customer = "អតិថិជន";
var payment_management = "ការគ្រប់គ្រងការបង់ប្រាក់";
var payment_history = "ប្រវត្តិការបង់ប្រាក់";
var history = "ប្រវត្តិ";
var vehicle_management = "ការគ្រប់គ្រងយានយន្ត";
var vehicle = "យានយន្ត";
var driver_management = "ការគ្រប់គ្រងអ្នកបើកបរ";
var driver = "អ្នកបើកបរ";
var telegram_chat = "ជជែក Telegram";
var telegram = "Telegram";
var chat_history = "ប្រវត្តិជជែក";
var map_integration = "ការរួមបញ្ចូលផែនទី";
var chat_storage = "ការផ្ទុកជជែក";
var file_storage = "ការផ្ទុកឯកសារ";
var connect_with_google = "បន្ដចូលជាមួយ Google";
var do_not_have_an_account = "មិនទាន់មានគណនី?";
var sign_in = "ចូល";
var forgot_password = "ភ្លេចលេខសម្ងាត់?";
var sign_in_to_your_account_to_continue = "ចូលគណនីរបស់អ្នកដើម្បីបន្ដ";
var enter_your_password = "បញ្ចូលលេខកូដសម្ងាត់របស់អ្នក";
var enter_your_username = "បញ្ចូលឈ្មោះរបស់អ្នក";
var continue_with_google = "បន្ដជាមួយ Google";
var remember_me = "ចងចាំខ្ញុំ";
var enter_your_useranme = "បញ្ចូលឈ្មោះអ្នកប្រើ";
var fleet = "យានយន្ត";
var products = "ផលិតផល";
var tracking = "តាមដាន";
var booking = "ការកក់";
var analytics = "វិភាគទិន្នន័យ";
var layout_grid = "ប្លង់បណ្តាញ";
var order_management = "ការគ្រប់គ្រងការបញ្ជាទិញ";
var inventory_control = "គ្រប់គ្រងស្តុក";
var purchase = "ការទិញ";
var shipments = "ការដឹកជញ្ជូន";
var total_record = "សរុបក្នុងក្រុម";
var events = {
	new_event: "ព្រឹត្តិការណ៍ថ្មី",
	select_event: "ជ្រើសព្រឹត្តិការណ៍",
	no_event_selected: "មិនទាន់ជ្រើសព្រឹត្តិការណ៍",
	no_wedding_found: "រកមិនឃើញព្រឹត្តិការណ៍",
	no_wedding_hint: "បង្កើតព្រឹត្តិការណ៍ដំបូងរបស់អ្នក",
	no_weddings_yet: "មិនទាន់មានព្រឹត្តិការណ៍"
};
var invitation = "ការអញ្ជើញ";
var users = "អ្នកប្រើ";
var subscription_plans = "គម្រោងជាវ";
var languages = "ភាសា";
var ceremony = {
	ceremonies: "ពិធី",
	add_ceremony: "បន្ថែមពិធី",
	no_ceremonies: "មិនទាន់មានពិធី",
	add_program: "បន្ថែមកម្មវិធី",
	no_programs: "មិនទាន់មានកម្មវិធី",
	wedding_date: "ថ្ងៃមង្គលការ",
	countdown_days: "ថ្ងៃ",
	countdown_hrs: "ម៉ោង",
	countdown_min: "នាទី"
};
var ceremony_setup = "រៀបចំពិធី";
var invitation_letter = "លិខិតអញ្ជើញ";
var welcome_back = "សូមស្វាគមន៍ម្ដងទៀត";
var sign_out = "ចាកចេញ";
var confirmPassword = "បញ្ជាក់លេខសម្ងាត់";
var forgotPassword = "ភ្លេចលេខសម្ងាត់?";
var noAccount = "មិនទាន់មានគណនី?";
var hasAccount = "មានគណនីហើយ?";
var orContinueWith = "ឬបន្តដោយ";
var google = "បន្តដោយ Google";
var facebook = "បន្តដោយ Facebook";
var terms = "ដោយការចុះឈ្មោះ អ្នកយល់ព្រមនឹងលក្ខខណ្ឌ និងគោលការណ៍ឯកជនភាព";
var firstName = "នាមខ្លួន";
var lastName = "នាមត្រកូល";
var usernameLabel = "ឈ្មោះអ្នកប្រើប្រាស់";
var title = "ផ្ទាំងគ្រប់គ្រង";
var recentActivity = "សកម្មភាពថ្មីៗ";
var upcomingEvents = "ព្រឹត្តិការណ៍ខាងមុខ";
var quickActions = "សកម្មភាពរហ័ស";
var totalEvents = "ព្រឹត្តិការណ៍សរុប";
var totalGuests = "ភ្ញៀវសរុប";
var confirmed = "បានបញ្ជាក់";
var pending = "រង់ចាំ";
var budgetUsed = "ថវិកាបានប្រើ";
var tasksCompleted = "កិច្ចការបានបញ្ចប់";
var addEvent = "បន្ថែមព្រឹត្តិការណ៍";
var addGuest = "បន្ថែមភ្ញៀវ";
var sendInvite = "ផ្ញើការអញ្ជើញ";
var viewAll = "មើលទាំងអស់";
var rsvpStats = "ស្ថិតិ RSVP";
var ceremony_timeline = "ពេលវេលាពិធី";
var newEvent = "ព្រឹត្តិការណ៍ថ្មី";
var editEvent = "កែព្រឹត្តិការណ៍";
var deleteEvent = "លុបព្រឹត្តិការណ៍";
var eventName = "ឈ្មោះព្រឹត្តិការណ៍";
var eventDate = "កាលបរិច្ឆេទ";
var eventTime = "ពេលវេលា";
var active = "សកម្ម";
var planning = "ការរៀបចំ";
var wedding = "អាពាហ៍ពិពាហ៍";
var event_types = "ប្រភេទព្រឹត្តិការណ៍";
var event_type = "ប្រភេទព្រឹត្តិការណ៍";
var event_name = "ឈ្មោះព្រឹត្តិការណ៍";
var event_date = "ថ្ងៃព្រឹត្តិការណ៍";
var event_management = "ការគ្រប់គ្រងព្រឹត្តិការណ៍";
var create_your_event = "បង្កើតព្រឹត្តិការណ៍ដំបូងរបស់អ្នក";
var select_event_type = "ជ្រើសរើសប្រភេទព្រឹត្តិការណ៍";
var event_created_success = "ព្រឹត្តិការណ៍ត្រូវបានបង្កើតដោយជោគជ័យ";
var host1_name = "ឈ្មោះម្ចាស់ផ្ទះ";
var host2_name = "ឈ្មោះម្ចាស់ផ្ទះទី២";
var noEvents = "មិនទាន់មានព្រឹត្តិការណ៍";
var createFirst = "បង្កើតព្រឹត្តិការណ៍ដំបូងរបស់អ្នក";
var editGuest = "កែប្រែភ្ញៀវ";
var deleteGuest = "លុបភ្ញៀវ";
var importGuests = "នាំចូលភ្ញៀវ";
var exportGuests = "នាំចេញ";
var bride = "ភ្ញៀវខាងកូនក្រមុំ";
var groom = "ភ្ញៀវខាងកូនកំលោះ";
var seats = "កៅអី";
var rsvp = "RSVP";
var family = "គ្រួសារ";
var friend = "មិត្ត";
var colleague = "សហការី";
var noGuests = "មិនទាន់មានភ្ញៀវ";
var attending = "ចូលរួម";
var notAttending = "មិនចូលរួម";
var unknown = "មិនដឹង";
var phases = "ដំណាក់កាលពិធី";
var addPhase = "បន្ថែមដំណាក់កាល";
var phaseName = "ឈ្មោះដំណាក់កាល";
var startTime = "ម៉ោងចាប់ផ្ដើម";
var location = "ទីកន្លែង";
var noPhases = "មិនទាន់មានដំណាក់កាលពិធី";
var giver = "អ្នកផ្ដល់";
var item = "របស់";
var received = "បានទទួល";
var thankYouSent = "សូមអរគុណ";
var totalGifts = "អំណោយសរុប";
var total_value = "តម្លៃសរុប";
var noGifts = "មិនទាន់មានកំណត់ត្រាអំណោយ";
var addTask = "បន្ថែមកិច្ចការ";
var editTask = "កែប្រែកិច្ចការ";
var markDone = "សម្គាល់ថាបានធ្វើ";
var urgent = "បន្ទាន់";
var high = "ខ្ពស់";
var medium = "មធ្យម";
var low = "ទាប";
var inProgress = "កំពុងធ្វើ";
var dueDate = "ថ្ងៃផុតកំណត់";
var no_tasks = "មិនទាន់មានកិច្ចការ";
var mark_all_read = "សម្គាល់ទាំងអស់ថាបានអាន";
var noNotifications = "គ្មានការជូនដំណឹង";
var rsvp_confirmed = "RSVP បានបញ្ជាក់";
var task_due = "កិច្ចការដល់ហើយ";
var budget_alert = "ការជូនដំណឹងថវិកា";
var security = "សុវត្ថិភាព";
var language = "ភាសា";
var dark = "ងងឹត";
var light = "ភ្លឺ";
var system = "ប្រព័ន្ធ";
var saveChanges = "រក្សាទុកការផ្លាស់ប្ដូរ";
var filter = "តម្រង";
var sort = "តម្រៀប";
var error = "មានបញ្ហា";
var no_data_available = "គ្មានទិន្នន័យដែលអាចដំណើរការ";
var view_all = "មើលទាំងអស់";
var seeMore = "មើលបន្ថែម";
var next = "បន្ទាប់";
var previous = "មុន";
var of = "នៃ";
var yes = "បាទ/ចាស";
var no = "ទេ";
var required = "ត្រូវការ";
var start_app = "ចាប់ផ្ដើម";
var hero = "ថ្ងៃអាពាហ៍ពិពាហ៍ល្អឥតខ្ចោះរបស់អ្នក ចាប់ផ្ដើមនៅទីនេះ";
var heroSub = "វេទិកាគ្រប់គ្រងពិធីប្រណីតសម្រាប់គូស្នេហ៍ទំនើប";
var startFree = "ចាប់ផ្ដើមដោយឥតគិតថ្លៃ";
var startApp = "បើកកម្មវិធី";
var learnMore = "ស្វែងយល់បន្ថែម";
var features = "មុខងារ";
var pricing = "តម្លៃ";
var invitation_status = "ស្ថានភាពការអញ្ជើញ";
var dashboard_overview = "ទិដ្ឋភាពទូទៅផ្ទាំងគ្រប់គ្រង";
var dashboard_events = "ព្រឹត្តិការណ៍ផ្ទាំងគ្រប់គ្រង";
var setup_and_invitation = "ការរៀបចំ និងការអញ្ជើញ";
var wish_list = "បញ្ជីបំណងប្រាថ្នា";
var tables$1 = "តារាង";
var checkin = "ការចូលរួម";
var qr_center = "មជ្ឈមណ្ឌល QR";
var budget_overview = "ទិដ្ឋភាពទូទៅថវិកា";
var budget_transactions = "ប្រតិបត្តិការថវិកា";
var inviation_status = "ស្ថានភាពការអញ្ជើញ";
var inviation = "ការអញ្ជើញ";
var task_management = "ការគ្រប់គ្រងកិច្ចការ";
var gift = "អំណោយ";
var dashboard_tasks = "ទិដ្ឋភាពទូទៅកិច្ចការ";
var timeline = "Timeline";
var dashboard_invitation = "dashboard_invitation";
var tasks_menu = "ភារកិច្ច";
var budget_menu = "ថវិកា";
var notifications_menu = "ការជូនដំណឹង";
var help_and_info = "ជំនួយ";
var letter = "លិខិត";
var vs_last_month = "ធៀបនឹងខែមុន";
var mark_read = "សម្គាល់ថាបានអាន";
var actions = "សកម្មភាព";
var phone = "ទូរស័ព្ទ";
var type = "ប្រភេទ";
var none = "គ្មាន";
var refresh = "ធ្វើឱ្យស្រស់";
var preview = "មើលជាមុន";
var copy = "ចម្លង";
var copied = "បានចម្លង!";
var sent = "បានផ្ញើ";
var declined = "បានបដិសេធ";
var completed = "បានបញ្ចប់";
var in_progress = "កំពុងដំណើរការ";
var cancelled = "បានលុបចោល";
var todo = "ត្រូវធ្វើ";
var review = "ត្រួតពិនិត្យ";
var total_events = "ព្រឹត្តិការណ៍សរុប";
var invitations_sent = "ការអញ្ជើញដែលបានផ្ញើ";
var total_budget = "ថវិកាសរុប";
var this_week = "សប្តាហ៍នេះ";
var days_to_wedding = "ថ្ងៃដល់ពិធីមង្គលការ";
var ceremony_date = "ថ្ងៃពិធីមង្គលការ";
var add_event = "បន្ថែមព្រឹត្តិការណ៍";
var event_time = "ម៉ោងព្រឹត្តិការណ៍";
var event_location = "ទីតាំង";
var past = "ដែលបានកន្លងផ្តាច់";
var calendar_view = "ទិដ្ឋភាពប្រតិទិន";
var timeline_view = "ទិដ្ឋភាពបន្ទាត់ពេលវេលា";
var grid_view = "ទិដ្ឋភាពក្រឡាចត្រង្គ";
var traditional = "ពិធីបុរាណ";
var reception = "ពិធីទទួលភ្ញៀវ";
var blessing = "ពិធីព្រះ";
var rehearsal = "ពិធីហ្វឹកហ្វឺន";
var engagement = "ពិធីដណ្តើម";
var status_scheduled = "បានកំណត់";
var status_ongoing = "កំពុងដំណើរការ";
var status_completed = "បានបញ្ចប់";
var status_cancelled = "បានបោះបង់";
var edit_event = "កែប្រែព្រឹត្តិការណ៍";
var delete_event = "លុបព្រឹត្តិការណ៍";
var view_details = "មើលព័ត៌មានលម្អិត";
var guests_attending = "ភ្ញៀវចូលរួម";
var venue = "ទីកន្លែង";
var capacity = "សមត្ថភាព";
var dress_code = "ការស្លៀកពាក់";
var add_guest = "បន្ថែមភ្ញៀវ";
var guest_name = "ឈ្មោះភ្ញៀវ";
var guest_phone = "លេខទូរស័ព្ទ";
var table_number = "លេខតុ";
var rsvp_status = "ស្ថានភាព RSVP";
var dietary = "តម្រូវការអាហារ";
var plus_one = "ភ្ញៀវដែករ";
var relationship = "ទំនាក់ទំនង";
var side = "ខាងគ្រួសារ";
var bride_side = "ខាងក្រមា";
var groom_side = "ខាងកូនប្រុស";
var both_sides = "ទាំងពីរខាង";
var total_guests = "ភ្ញៀវសរុប";
var confirmed_guests = "បានបញ្ជាក់";
var pending_guests = "កំពុងរង់ចាំ";
var declined_guests = "បានបដិសេធ";
var import_guests = "នាំចូលភ្ញៀវ";
var export_guests = "នាំចេញភ្ញៀវ";
var send_invitation = "ផ្ញើការអញ្ជើញ";
var search_guests = "ស្វែងរកភ្ញៀវ...";
var filter_status = "តម្រងតាមស្ថានភាព";
var filter_side = "តម្រងតាមខាង";
var mobile_view = "ទិដ្ឋភាពបន្ទះ";
var table_view = "ទិដ្ឋភាពតារាង";
var vip = "ភ្ញៀវវីអាយភី";
var special_needs = "តម្រូវការពិសេស";
var choose_template = "ជ្រើសរើសទម្រង់";
var template_classic = "ប្រណីត";
var template_modern = "ទំនើប";
var template_floral = "ផ្កា";
var template_royal = "ខ្មែរព្រះ";
var customize_theme = "តុបតែងរចនាប័ទ្ម";
var primary_color = "ពណ៌ចម្បង";
var font_style = "រចនាប័ទ្មអក្សរ";
var background_style = "រចនាប័ទ្មផ្ទៃខាងក្រោយ";
var preview_invitation = "មើលការអញ្ជើញជាមុន";
var digital_invitation = "ការអញ្ជើញឌីជីថល";
var paper_invitation = "ការអញ្ជើញក្រដាស";
var save_template = "រក្សាទុកទម្រង់";
var bride_name = "ឈ្មោះក្រមា";
var groom_name = "ឈ្មោះកូនប្រុស";
var ceremony_venue = "ទីតាំងពិធី";
var reception_venue = "ទីតាំងទទួលភ្ញៀវ";
var wedding_date = "ថ្ងៃពិធីមង្គលការ";
var rsvp_deadline = "ថ្ងៃកំណត់ RSVP";
var wedding_website = "គេហទំព័រពិធីមង្គលការ";
var qr_code = "លេខកូដ QR";
var add_phase = "បន្ថែមដំណាក់កាល";
var phase_name = "ឈ្មោះដំណាក់កាល";
var phase_time = "ម៉ោងចាប់ផ្តើម";
var phase_duration = "រយៈពេល (នាទី)";
var phase_location = "ទីតាំង";
var phase_description = "ការពិពណ៌នា";
var multi_ceremony = "ពិធីច្រើន";
var single_ceremony = "ពិធីតែមួយ";
var reorder_phases = "អូសដើម្បីរៀបចំឡើងវិញ";
var blessing_ceremony = "ពិធីពរ";
var hair_ceremony = "ពិធីកាត់សក់";
var thread_ceremony = "ពិធីចងដៃ";
var gate_ceremony = "ពិធីឆ្លងទ្វារ";
var reception_ceremony = "ពិធីទទួលភ្ញៀវវិញ";
var candle_ceremony = "ពិធីបំភ្លឺទៀន";
var flower_ceremony = "ពិធីផ្កា";
var officiant = "អ្នកដឹកនាំពិធី";
var musicians = "អ្នកលេងតន្ត្រី";
var photographer = "អ្នកថតរូប";
var videographer = "អ្នកថតវីដេអូ";
var subtitle = "ផ្ញើ និងគ្រប់គ្រងការអញ្ជើញពិធីមង្គលការ";
var bulk_send = "ផ្ញើជាច្រើន";
var total_sent = "ផ្ញើសរុប";
var total_pending = "កំពុងរង់ចាំសរុប";
var response_rate = "អត្រាឆ្លើយតប";
var resend = "ផ្ញើម្តងទៀត";
var qr_code_title = "លេខកូដ QR ការអញ្ជើញ";
var qr_description = "ស្កែនដើម្បីមើលការអញ្ជើញឌីជីថល";
var via_sms = "តាម SMS";
var via_email = "តាមអ៊ីម៉ែល";
var via_whatsapp = "តាម WhatsApp";
var via_telegram = "តាម Telegram";
var schedule_send = "កំណត់ពេលផ្ញើ";
var send_now = "ផ្ញើឥឡូវ";
var personalize = "ប្ដូរសារ";
var invitation_link = "តំណការអញ្ជើញ";
var write_letter = "សរសេរលិខិត";
var both = "ទាំងពីរភាសា";
var template_formal = "ផ្លូវការ";
var template_casual = "ធម្មតា";
var export_pdf = "នាំចេញ PDF";
var export_word = "នាំចេញ Word";
var font_size = "ទំហំអក្សរ";
var font_family = "គ្រួសារអក្សរ";
var letter_preview = "មើលលិខិតជាមុន";
var dear_guests = "ជូនចំពោះភ្ញៀវវណ្ណកថា,";
var salutation = "ការស្វាគមន៍";
var body = "មាតិកា";
var closing = "ការបញ្ចប់";
var signature = "ហត្ថលេខា";
var add_gift = "បន្ថែមអំណោយ";
var gift_type = "ប្រភេទអំណោយ";
var cash = "ប្រាក់";
var non_cash = "អំណោយដែលមិនមែនជាប្រាក់";
var gift_amount = "ចំនួន";
var gift_description = "ការពិពណ៌នាអំណោយ";
var gifted_by = "ផ្ដល់ដោយ";
var gift_date = "ថ្ងៃអំណោយ";
var total_gifts = "អំណោយសរុប";
var total_cash = "ប្រាក់សរុប";
var total_items = "ទំនិញសរុប";
var average_gift = "អំណោយជាមធ្យម";
var thank_you_sent = "បានផ្ញើអំណរគុណ";
var send_thank_you = "ផ្ញើអំណរគុណ";
var currency = "រូបិយប័ណ្ណ";
var khr = "KHR (រៀល)";
var usd = "USD (ដុល្លារ)";
var search_gifts = "ស្វែងរកអំណោយ...";
var filter_type = "តម្រងតាមប្រភេទ";
var notes = "កំណត់ចំណាំ";
var add_task = "បន្ថែមភារកិច្ច";
var task_title = "ចំណងជើងភារកិច្ច";
var task_description = "ការពិពណ៌នា";
var assignee = "ចាត់ចែងឱ្យ";
var due_date = "ថ្ងៃកំណត់";
var priority = {
	low: "ទាប",
	medium: "មធ្យម",
	high: "ខ្ពស់",
	urgent: "បន្ទាន់"
};
var priority_high = "ខ្ពស់";
var priority_medium = "មធ្យម";
var priority_low = "ទាប";
var column_todo = "ត្រូវធ្វើ";
var column_in_progress = "កំពុងដំណើរការ";
var column_review = "ត្រួតពិនិត្យ";
var column_done = "បានបញ្ចប់";
var move_to = "ផ្លាស់ទៅ";
var overdue = "ហួសសំណល់";
var today = "ថ្ងៃនេះ";
var upcoming = "ខាងមុខ";
var filter_priority = "តម្រងតាមអាទិភាព";
var filter_assignee = "តម្រងតាមអ្នកទទួល";
var checklist = "បញ្ជីត្រួតពិនិត្យ";
var add_checklist = "បន្ថែមមុខ";
var attachments = "ឯកសារភ្ជាប់";
var comments = "មតិ";
var add_expense = "បន្ថែមចំណាយ";
var total_spent = "បានចំណាយសរុប";
var remaining = "នៅសល់";
var over_budget = "លើសសន្ទុះថវិកា";
var on_track = "ត្រឹមត្រូវ";
var category = "ប្រភេទ";
var category_venue = "ទីកន្លែង";
var category_catering = "ម្ហូបអាហារ";
var category_photography = "រូបថត";
var category_flowers = "ផ្កា និងតុបតែង";
var category_music = "តន្ត្រី";
var category_attire = "សំលៀកបំពាក់";
var category_invitation = "ការអញ្ជើញ";
var category_transport = "ការដឹកជញ្ជូន";
var category_honeymoon = "ទេសចរណ៍";
var category_other = "ផ្សេងៗ";
var expense_name = "ឈ្មោះចំណាយ";
var vendor = "អ្នកលក់";
var paid = "បានបង់";
var unpaid = "មិនទាន់បង់";
var partial = "បានបង់មួយផ្នែក";
var payment_date = "ថ្ងៃបង់ប្រាក់";
var deposit = "ការដាក់ប្រាក់";
var balance = "ប្រាក់នៅខ្វះ";
var set_budget = "កំណត់ថវិកា";
var budget_allocation = "ការបែងចែកថវិកា";
var add_category = "បន្ថែមប្រភេទ";
var add_transaction = "បន្ថែមប្រតិបត្តិការ";
var allocated = "បានបែងចែក";
var spent = "បានចំណាយ";
var transactions = "ប្រតិបត្តិការ";
var amount = "ចំនួន";
var no_transactions = "មិនទាន់មានប្រតិបត្តិការ";
var filter_all = "ទាំងអស់";
var filter_rsvp = "RSVP";
var filter_reminder = "ការរំលឹក";
var filter_alert = "ការដាស់តឿន";
var filter_task = "ភារកិច្ច";
var no_notifications = "មិនមានការជូនដំណឹងទេ";
var rsvp_declined = "បានបដិសេធការអញ្ជើញ";
var task_completed = "បានបញ្ចប់ភារកិច្ច";
var reminder = "ការរំលឹក";
var guest_added = "ភ្ញៀវថ្មីត្រូវបានបន្ថែម";
var gift_received = "បានទទួលអំណោយ";
var payment_due = "ការបង់ប្រាក់នឹងដល់ពេល";
var yesterday = "ម្សិលមិញ";
var earlier = "មុននេះ";
var register = "ចុះឈ្មោះ";
var have_account = "មានគណនីហើយ?";
var couple_name = "ឈ្មោះគូស្វាមីភរិយា";
var account_settings = "ការកំណត់គណនី";
var setup_template = "រៀបចំគំរូសេចក្តីអញ្ជើញ";
var preview_letter = "មើលសេចក្តីអញ្ជើញជាមុន";
var send_letter = "ផ្ញើសេចក្តីអញ្ជើញ";
var preview_link = "មើលលីងជាមុន";
var copy_link = "ចម្លងលីង";
var generate_link = "បង្កើតលីង";
var editor = "កែសម្រួល";
var desktop = "កុំព្យូទ័រ";
var tablet = "ថេប្លែត";
var mobile = "ទូរស័ព្ទដៃ";
var full_preview = "មើលសេចក្តីអញ្ជើញពេញ";
var save_change = "រក្សាទុកការផ្លាស់ប្តូរ";
var live_preview = "មើលការផ្លាស់ប្តូរផ្ទាល់";
var or_continue_with = "ឬបន្តដោយ";
var signin_in = "កំពុងចូល....";
var no_roles_found = "រកមិនឃើញតួនាទីទេ";
var letter_setup = "រៀបចំសេចក្តីអញ្ជើញ";
var template_setup = "គំរូអញ្ជើញ";
var new_event = "ព្រឹត្ដិការណ៍ថ្មី";
var collapse_sidebar = "បិទ";
var expand_sidebar = "បើក";
var tasks_completed = "បានបញ្ចប់ភារកិច្ច";
var budget_used = "បានចំណាយថវិកា";
var rsvp_stats = "ស្ថិតិ RSVP";
var decline = "បដិសេធ";
var this_month = "ខែនេះ";
var recent_activity = "សកម្មភាពថ្មីៗ";
var create_your_wedding = "បង្កើតពិធីមង្គលការរបស់អ្នក";
var create_wedding_sub = "រៀបចំពិធីមង្គលការដំបូងរបស់អ្នក";
var create_wedding_btn = "បង្កើតពិធីមង្គលការ";
var bride_name_placeholder = "បញ្ចូលឈ្មោះកូនក្មេង";
var groom_name_placeholder = "បញ្ចូលឈ្មោះកូនប្រុស";
var budget_placeholder = "ឧ. 10000";
var venue_placeholder = "ឧ. សណ្ឋាគារ Grand Ballroom";
var wedding_created_success = "ពិធីមង្គលការត្រូវបានបង្កើតដោយជោគជ័យ";
var wedding_create_failed = "បង្កើតពិធីមង្គលការមិនបានជោគជ័យ";
var creating = "កំពុងបង្កើត...";
var dashboard = {
	attendance_overview: "ទិដ្ឋភាពទូទៅនៃការចូលរួម",
	bride_side: "ខាងកូនស្រី",
	groom_side: "ខាងកូនប្រុស",
	budget_summary: "សង្ខេបថវិកា",
	by_family_side: "តាមក្រុមគ្រួសារ",
	ceremony_progress: "វឌ្ឍនភាពពិធី",
	checked_in: "បានចូលរួម",
	invitation_status: "ស្ថានភាពការអញ្ជើញ",
	no_recent_activity: "មិនមានសកម្មភាពថ្មី",
	recent_activities: "សកម្មភាពថ្មីៗ",
	response_rate: "អត្រាការឆ្លើយតប"
};
var rsvp_pending = "មិនទាន់ឆ្លើយតប";
var import_guest = "នាំចូលភ្ញៀវ";
var modern = "ទំនើប";
var royal_gold = "រាជវង្សមាស";
var vintage = "បុរាណវីន";
var classic = "បុរាណ";
var forest = "ព្រៃ";
var blossom = "ផ្ការីក";
var midnight = "ពាក់កណ្តាលអធ្រាត្រ";
var mode = "ម៉ូត";
var signing_in = "កំពុងចូល";
var inactive = "អសកម្ម";
var or = "ឬ";
var validation_required = "វាលនេះចាំបាច់ត្រូវបំពេញ";
var validation_email = "សូមបញ្ចូលអ៊ីមែលត្រឹមត្រូវ";
var validation_url = "សូមបញ្ចូល URL ត្រឹមត្រូវ";
var validation_minLength = "ត្រូវការយ៉ាងហោចណាស់ {min} តួអក្សរ";
var validation_maxLength = "អនុញ្ញាតអតិបរមា {max} តួអក្សរ";
var validation_min = "តម្លៃត្រូវតែយ៉ាងហោចណាស់ {min}";
var validation_max = "តម្លៃត្រូវតែអតិបរមា {max}";
var validation_pattern = "ទម្រង់មិនត្រឹមត្រូវ";
var validation_phone = "សូមបញ្ចូលលេខទូរស័ព្ទត្រឹមត្រូវ";
var form_name = "ឈ្មោះ";
var form_firstName = "នាម";
var form_lastName = "គោត្តនាម";
var form_email = "អ៊ីមែល";
var form_phone = "ទូរស័ព្ទ";
var form_password = "ពាក្យសម្ងាត់";
var form_confirm = "បញ្ជាក់ពាក្យសម្ងាត់";
var form_role = "តួនាទី";
var form_department = "នាយកដ្ឋាន";
var form_avatar = "រូបភាព";
var form_message = "សារ";
var form_description = "ការពិពណ៌នា";
var form_title = "ចំណងជើង";
var form_date = "កាលបរិច្ឆេទ";
var form_startDate = "កាលបរិច្ឆេទចាប់ផ្ដើម";
var form_endDate = "កាលបរិច្ឆេទបញ្ចប់";
var form_status = "ស្ថានភាព";
var form_type = "ប្រភេទ";
var form_color = "ពណ៌";
var form_tags = "ស្លាក";
var form_notes = "កំណត់ចំណាំ";
var form_address = "អាសយដ្ឋាន";
var form_city = "ក្រុង";
var form_country = "ប្រទេស";
var user_invite = "អញ្ជើញអ្នកប្រើ";
var user_edit = "កែសម្រួលអ្នកប្រើ";
var user_delete = "លុបអ្នកប្រើ";
var user_inviteEmail = "អ៊ីមែលដើម្បីអញ្ជើញ";
var user_inviteRole = "កំណត់តួនាទី";
var user_inviteMessage = "សារផ្ទាល់ខ្លួន (ស្រេចចិត្ត)";
var user_inviteSend = "ផ្ញើការអញ្ជើញ";
var user_createSuccess = "បង្កើតអ្នកប្រើដោយជោគជ័យ";
var user_inviteSuccess = "ផ្ញើការអញ្ជើញដោយជោគជ័យ";
var user_deleteConfirm = "តើអ្នកប្រាកដជាចង់លុបអ្នកប្រើនេះ?";
var are_you_sure_you_want_to_delete_this_guest = "តើអ្នកប្រាកដជាចង់លុបភ្ញៀវ {value} នេះទេ?";
var are_you_sure_you_want_to_delete_this_gift = "តើអ្នកប្រាកដជាចង់លុបប្រាក់កាresents{value} នេះទេ?";
var are_you_sure_you_want_to_delete_this_task = "តើអ្នកប្រាកដជាចង់លុបភារកិច្ច {value} នេះទេ?";
var are_you_sure_you_want_to_delete_this_user = "តើអ្នកប្រាកដជាចង់លុបអ្នកប្រើ {value} នេះទេ?";
var user_roles_admin = "អ្នកគ្រប់គ្រង";
var user_roles_manager = "អ្នកដឹកនាំ";
var user_roles_editor = "អ្នកកែសម្រួល";
var user_roles_viewer = "អ្នកមើល";
var user_roles_guest = "ភ្ញៀវ";
var project_create = "បង្កើតគម្រោង";
var project_edit = "កែសម្រួលគម្រោង";
var project_name = "ឈ្មោះគម្រោង";
var project_members = "សមាជិកក្រុម";
var project_schedule = "កាលវិភាគ";
var report_create = "បង្កើតរបាយការណ៍";
var report_title = "ចំណងជើងរបាយការណ៍";
var report_type = "ប្រភេទរបាយការណ៍";
var report_period = "រយៈពេល";
var report_filters = "ការត្រង";
var report_schedule = "កាលវិភាគ";
var report_generate = "បង្កើតរបាយការណ៍";
var settings_general = "ការកំណត់ទូទៅ";
var settings_appearance = "រូបរាង";
var settings_language = "ភាសា";
var settings_theme = "រូបតម្រង់";
var settings_notifications = "ការជូនដំណឹង";
var settings_security = "សុវត្ថិភាព";
var settings_billing = "វិក្កយបត្រ";
var settings_theme_light = "ស្រាល";
var settings_theme_dark = "ងងឹត";
var settings_theme_system = "ប្រព័ន្ធ";
var nav_dashboard = "ផ្ទាំងគ្រប់គ្រង";
var nav_users = "អ្នកប្រើ";
var nav_projects = "គម្រោង";
var nav_reports = "របាយការណ៍";
var nav_analytics = "ការវិភាគ";
var nav_messages = "សារ";
var nav_settings = "ការកំណត់";
var nav_help = "ជំនួយ";
var nav_integrations = "ការរួមបញ្ចូល";
var select = "ជ្រើសរើស…";
var show = "បង្ហាញ";
var page = "ទំព័រ";
var next_page = "ទំព័របន្ទាប់";
var previous_page = "ទំព័រមុន";
var last_page = "ទំព័រចុងក្រោយ";
var jump_to_page = "ទំព័រទៅកាន់";
var page_num = "ទំព័រ {pageNum}";
var entries = "ធាតុ";
var showing = "កំពុងបង្ហាញ";
var to = "ដល់";
var organization_name = "ឈ្មោះអង្គការ / ក្រុមហ៊ុន";
var organization_name_placeholder = "ឧ. Golden Bell Events";
var has_account = "មានគណនីរួចហើយ?";
var saving = "កំពុងរក្សាទុក...";
var notifications = "ការជូនដំណឹង";
var manage_profile = "គ្រប់គ្រងប្រវត្តិរូប";
var occupation = "មុខរបរ";
var n_o = "លរ.";
var child = "កុមារ";
var guardian = "អាណាព្យាបាល";
var registered_user = "អ្នកប្រើប្រាស់ដែលបានចុះឈ្មោះ";
var unregistered_guardian = "អាណាព្យាបាលដែលមិនទាន់ចុះឈ្មោះ";
var unregistered_student = "សិស្សដែលមិនទាន់ចុះឈ្មោះ";
var view_guardian_register = "មើលការចុះឈ្មោះអាណាព្យាបាល";
var create_irst = "បង្កើតពិធីមង្គលការដំបូងរបស់អ្នកដើម្បីចាប់ផ្ដើម";
var edit_guest = "កែសម្រួលភ្ញៀវ";
var import_guests_from_excel = "នាំចូលពី Excel";
var no_guests = "មិនទាន់មានភ្ញៀវ";
var no_ceremonies = "មិនទាន់មានពិធីការដែលបានកំណត់";
var ai_batch_translate = "បកប្រែជាបាច់ដោយ AI";
var ai_translate = "បកប្រែដោយ AI";
var start_time = "ម៉ោងចាប់ផ្ដើម";
var end_time = "ម៉ោងបញ្ចប់";
var ai_config = "កំណត់ដោយ AI";
var prompt_manager = "គ្រប់គ្រង Prompt";
var translations = "ការបកប្រែ";
var theme_manager = "គ្រប់គ្រងរចនាប័ទ្ម";
var send_invite = "ផ្ញើការអញ្ជើញ";
var send_via_telegram = "ផ្ញើតាម Telegram";
var send_via_email = "ផ្ញើតាម Email";
var send_via_whatsapp = "ផ្ញើតាម Whatsapp";
var budget = {
	title: "ថវិកា",
	totalBudget: "ថវិកាសរុប",
	totalSpent: "បានចំណាយសរុប",
	remaining: "នៅសល់",
	usage: "ការប្រើប្រាស់",
	addTransaction: "បន្ថែមប្រតិបត្តិការ",
	editTransaction: "កែប្រែប្រតិបត្តិការ",
	category: "ប្រភេទ",
	transactions: "ប្រតិបត្តិការ",
	noTransactions: "មិនទាន់មានប្រតិបត្តិការ",
	vendorName: "ឈ្មោះអ្នកផ្គត់ផ្គង់",
	plannedAmount: "ចំនួនដែលគ្រោង ($)",
	actualAmount: "ចំនួនជាក់ស្ដែង ($)",
	paymentStatus: "ស្ថានភាពការបង់ប្រាក់",
	notes: "កំណត់ចំណាំ",
	unpaid: "មិនទាន់បង់",
	partial: "បង់មួយផ្នែក",
	paid: "បានបង់",
	financeSummary: "សង្ខេបហិរញ្ញវត្ថុ",
	giftIncome: "ចំណូលអំណោយ (សាច់ប្រាក់)",
	totalIncome: "ចំណូលសរុប",
	plannedExpenses: "ចំណាយដែលគ្រោង",
	actualExpenses: "ចំណាយជាក់ស្ដែង",
	netProfit: "ចំណេញ / ខាតសុទ្ធ",
	giftCount: "ចំនួនអំណោយ",
	total: "ថវិកាសរុប",
	spent: "បានចំណាយ",
	used: "បានប្រើ",
	no_items: "មិនទាន់មានធាតុថវិកា"
};
var common = {
	save: "រក្សាទុក",
	cancel: "បោះបង់",
	"delete": "លុប",
	edit: "កែប្រែ",
	add: "បន្ថែម",
	close: "បិទ",
	success: "ជោគជ័យ",
	error: "កំហុស",
	confirm: "បញ្ជាក់",
	loading: "កំពុងផ្ទុក...",
	noData: "គ្មានទិន្នន័យ",
	all: "ទាំងអស់",
	total: "សរុប",
	name: "ឈ្មោះ",
	title: "ចំណងជើង",
	description: "ការពិពណ៌នា",
	status: "ស្ថានភាព",
	date: "កាលបរិច្ឆេទ",
	author: "អ្នកនិពន្ធ",
	categories: "ប្រភេទ",
	slug: "Slug",
	short_description: "ការពិពណ៌នាខ្លី",
	translations: "ការបកប្រែ",
	selected: "ត្រូវបានជ្រើស",
	done: "រួចរាល់",
	none: "គ្មាន",
	auto_generated: "បង្កើតដោយស្វ័យប្រវត្តិ",
	comma_separated: "បំបែកដោយក្បៀស",
	cannot_be_undone: "សកម្មភាពនេះមិនអាចត្រឡប់វិញបានទេ។",
	active: "សកម្ម",
	app_name: "Sarika",
	coming_soon: "មកដល់ឆាប់ៗ",
	disabled: "បិទ",
	guardian: "អាណាព្យាបាល",
	guests: "ភ្ញៀវ",
	manage: "គ្រប់គ្រង",
	pending: "កំពុងរង់ចាំ",
	select_date: "ជ្រើសកាលបរិច្ឆេទ",
	student: "សិស្ស",
	view_all: "មើលទាំងអស់"
};
var tasks$1 = {
	title: "កិច្ចការ",
	add_task: "បន្ថែមកិច្ចការ",
	addTask: "បន្ថែមកិច្ចការ",
	editTask: "កែប្រែកិច្ចការ",
	name: "ឈ្មោះកិច្ចការ",
	priority: "អាទិភាព",
	status: "ស្ថានភាព",
	dueDate: "កាលបរិច្ឆេទផុតកំណត់",
	assignee: "អ្នកទទួលបន្ទុក",
	category: "ប្រភេទ",
	notes: "កំណត់ចំណាំ",
	pending: "រង់ចាំ",
	inProgress: "កំពុងដំណើរការ",
	completed: "បានបញ្ចប់",
	urgent: "បន្ទាន់",
	high: "ខ្ពស់",
	medium: "មធ្យម",
	low: "ទាប",
	noTasks: "គ្មានកិច្ចការ",
	done: "រួចរាល់",
	addTaskShortcut: "បន្ថែមកិច្ចការ",
	allPriority: "អាទិភាពទាំងអស់",
	overdue: "ហួសកំណត់",
	deleteTask: "លុបកិច្ចការ",
	deleteConfirm: "សកម្មភាពនេះមិនអាចត្រឡប់វិញបានទេ។",
	edit_task: "កែភារកិច្ច",
	delete_task: "លុបភារកិច្ច",
	no_tasks: "មិនទាន់មានភារកិច្ច",
	title_placeholder: "ចំណងជើងភារកិច្ច...",
	notes_placeholder: "កំណត់ចំណាំបន្ថែម...",
	due_date: "ថ្ងៃកំណត់",
	assigned_to: "ផ្ដល់ជូន",
	user_id_placeholder: "ស្វែងរកអ្នកប្រើ...",
	overall_progress: "វឌ្ឍនភាពសរុប",
	mark_done: "សម្គាល់ថារួចរាល់"
};
var no_matching_results = "មិនមានលទ្ធផលដែលត្រូវគ្នាទេ";
var no_results_for = "មិនមានលទ្ធផលសម្រាប់ {value}";
var no_data_found = "មិនមានទិន្នន័យ";
var there_is_no_data_available = "មិនមានទិន្នន័យដែលត្រូវបង្ហាញទេ";
var no_results_found = "មិនមានលទ្ធផលដែលត្រូវគ្នាទេ";
var try_adjusting_your_search = "សាកល្បងកែប្រែការស្វែងរក ឬតម្រងរបស់អ្នក។";
var there_is_no_data_to_display = "មិនមានទិន្នន័យដែលត្រូវបង្ហាញទេ";
var position = "តួនាទី";
var joined_date = "ថ្ងៃចូលបម្រើការងារ";
var birth_date = "ថ្ងៃខែឆ្នាំកំណើត";
var more_button = "ច្រើនទៀត";
var more = "ច្រើនទៀត";
var clear_all = "សម្អាតទាំងអស់";
var select_all = "ជ្រើសរើសទាំងអស់";
var deselect_all = "មិនជ្រើសរើសទាំងអស់";
var selected = "បានជ្រើសរើស";
var go_to_page = "ទៅទំព័រ";
var first = "ទីមួយ";
var last = "ទីចុងក្រោយ";
var profile = "ប្រវត្តិរូប";
var loading_data = "កំពុងផ្ទុកទិន្នន័យ";
var total_records = "ទិន្នន័យសរុប";
var data_not_found = "រកមិនឃើញទិន្នន័យ";
var article = {
	status: {
		published: "បានផ្សព្វផ្សាយ",
		draft: "សេចក្ដីព្រាង",
		archived: "ក្នុងប័ណ្ណសារ"
	},
	stats: {
		drafts: "សេចក្ដីព្រាង"
	}
};
var media = {
	no_images: "គ្មានរូបភាព",
	select_from_library: "ជ្រើសពីបណ្ណាល័យ",
	upload_from_device: "បញ្ចូលពីឧបករណ៍"
};
var auth = {
	login: "ចូលគណនី",
	register: "បង្កើតគណនី",
	app_tagline: "គ្រប់គ្រងពិធីមង្គលការបានងាយ",
	hero_headline: "រៀបចំថ្ងៃដ៏ល្អឥតខ្ចោះ",
	hero_sub: "ឧបករណ៍ទាំងអស់ក្នុងកន្លែងតែមួយ",
	forgot_subtitle: "បញ្ចូលអ៊ីមែលដើម្បីទទួលតំណផ្លាស់ប្ដូរពាក្យសម្ងាត់",
	check_inbox: "ពិនិត្យប្រអប់ទទួល",
	reset_link_sent: "តំណផ្លាស់ប្ដូរត្រូវបានផ្ញើ",
	send_reset_link: "ផ្ញើតំណផ្លាស់ប្ដូរ",
	sending: "កំពុងផ្ញើ...",
	creating_account: "កំពុងបង្កើតគណនី...",
	show_password: "បង្ហាញពាក្យសម្ងាត់",
	hide_password: "លាក់ពាក្យសម្ងាត់",
	six_plus_chars: "យ៉ាងហោចណាស់ ៦ តួអក្សរ",
	passwords_match: "ពាក្យសម្ងាត់ត្រូវគ្នា",
	passwords_no_match: "ពាក្យសម្ងាត់មិនត្រូវគ្នា",
	resend_email: "ផ្ញើអ៊ីមែលម្ដងទៀត",
	testimonial_text: "វេទិកាគ្រប់គ្រងពិធីមង្គលការដ៏ល្អបំផុត។",
	testimonial_author: "គូស្វាមីភរិយាសប្បាយចិត្ត"
};
var guest = {
	no_wedding_selected: "មិនទាន់ជ្រើសព្រឹត្តិការណ៍",
	no_wedding_hint: "សូមជ្រើសព្រឹត្តិការណ៍ជាមុន"
};
var invite = {
	not_found: "រកមិនឃើញការអញ្ជើញ"
};
var plans = {
	max_users: "អ្នកប្រើប្រាស់អតិបរមា"
};
var validation = {
	email_required: "អ៊ីមែលត្រូវការ",
	email_invalid: "អ៊ីមែលមិនត្រឹមត្រូវ",
	username_required: "ឈ្មោះអ្នកប្រើត្រូវការ",
	username_min: "ឈ្មោះអ្នកប្រើយ៉ាងហោចណាស់ ៣ តួ",
	username_max: "ឈ្មោះអ្នកប្រើអតិបរមា ៥០ តួ",
	username_no_spaces: "ឈ្មោះអ្នកប្រើមិនអាចមានដកឃ្លា",
	username_alphanumeric: "ឈ្មោះអ្នកប្រើអក្សរ លេខ និង _ ប៉ុណ្ណោះ",
	password_required: "ពាក្យសម្ងាត់ត្រូវការ",
	password_min: "ពាក្យសម្ងាត់យ៉ាងហោចណាស់ ៦ តួ",
	password_max: "ពាក្យសម្ងាត់អតិបរមា ១០០ តួ",
	password_no_spaces: "ពាក្យសម្ងាត់មិនអាចមានដកឃ្លា",
	first_name_required: "នាមខ្លួនត្រូវការ",
	first_name_min: "នាមខ្លួនយ៉ាងហោចណាស់ ២ តួ",
	first_name_max: "នាមខ្លួនអតិបរមា ៥០ តួ",
	last_name_required: "នាមត្រកូលត្រូវការ",
	last_name_min: "នាមត្រកូលយ៉ាងហោចណាស់ ២ តួ",
	last_name_max: "នាមត្រកូលអតិបរមា ៥០ តួ",
	org_name_required: "ឈ្មោះអង្គការត្រូវការ",
	org_name_min: "ឈ្មោះអង្គការយ៉ាងហោចណាស់ ២ តួ",
	org_name_max: "ឈ្មោះអង្គការអតិបរមា ១០០ តួ",
	max_100: "អតិបរមា ១០០ តួអក្សរ"
};
var please_select = "សូមជ្រើសរើស";
var no_event_selected = "មិនទាន់ជ្រើសព្រឹត្តិការណ៍";
var add_ceremony_first = "សូមបន្ថែមព្រឹត្តិការណ៍ជាមុន";
var add_ceremony = "បន្ថែមព្រឹត្តិការណ៍";
var event_info = "ទំព័រព៌ត៌មានព្រឹត្តិការណ៍";
const locale_km_46json_a4af907d = {
	"1": "១",
	"2": "២",
	"3": "៣",
	"4": "៤",
	"5": "៥",
	"6": "៦",
	"7": "៧",
	"8": "៨",
	"9": "៩",
	"10": "១០",
	"11": "១១",
	"12": "១២",
	app: app,
	System: System,
	app_name: app_name,
	dark_mode: dark_mode,
	light_mode: light_mode,
	light_dark: light_dark,
	dark_light: dark_light,
	language_change: language_change,
	collapse: collapse,
	expand: expand,
	months_: months_,
	days_: days_,
	khmer_: khmer_,
	bold: bold,
	italic: italic,
	underline: underline,
	strikethrough: strikethrough,
	heading: heading,
	bullet_list: bullet_list,
	ordered_list: ordered_list,
	task_list: task_list,
	blockquote: blockquote,
	horizontal_rule: horizontal_rule,
	highlight: highlight,
	link: link,
	image: image,
	youtube: youtube,
	table: table,
	undo: undo,
	redo: redo,
	characters: characters,
	words: words,
	loading_editor: loading_editor,
	english: english,
	khmer: khmer,
	search: search,
	open_sidebar: open_sidebar,
	close_sidebar: close_sidebar,
	waiting_internet_connection: waiting_internet_connection,
	restore_internet_connection: restore_internet_connection,
	notification: notification,
	readall: readall,
	clearall: clearall,
	unreadall: unreadall,
	unread: unread,
	read: read,
	no_notification: no_notification,
	minute_last: minute_last,
	time: time,
	show_unread_only: show_unread_only,
	show_all: show_all,
	dashboard_data: dashboard_data,
	learner_enrollment: learner_enrollment,
	learning_course: learning_course,
	socialboard_forum: socialboard_forum,
	report_analytic: report_analytic,
	financial: financial,
	skill_testing: skill_testing,
	employee: employee,
	user_privillege: user_privillege,
	payment: payment,
	academic: academic,
	developed: developed,
	"developer-name": "រិទ្ធី",
	developedby: developedby,
	welcome: welcome,
	description1: description1,
	work: work,
	team: team,
	"Dashboard Module": "",
	overview: overview,
	task: task,
	instructor: instructor,
	lecture: lecture,
	home: home,
	course_management: course_management,
	course: course,
	tutor: tutor,
	learner: learner,
	user: user,
	assign: assign,
	config: config,
	learner_enroll: learner_enroll,
	learner_enrollweb: learner_enrollweb,
	learner_profile: learner_profile,
	learner_config: learner_config,
	information: information,
	report: report,
	tutor_dashboard: tutor_dashboard,
	"Payment Moduel": "",
	invoice: invoice,
	receipt: receipt,
	refund_manage: refund_manage,
	subscription: subscription,
	"Media and Social": "",
	social: social,
	forum: forum,
	content: content,
	feature: feature,
	document: document,
	announcement: announcement,
	name: name,
	name_khmer: name_khmer,
	name_english: name_english,
	name_en: name_en,
	name_km: name_km,
	academic_setting: academic_setting,
	user_create: user_create,
	user_update: user_update,
	created_date: created_date,
	updated_date: updated_date,
	action: action,
	code: code,
	code_: code_,
	edit: edit,
	gender: gender,
	teaching: teaching,
	year: year,
	semester: semester,
	subject: subject,
	score_entry: score_entry,
	student_list: student_list,
	attendance_entry: attendance_entry,
	archive: archive,
	batch: batch,
	room: room,
	"class": "ថ្នាក់រៀន",
	select_room: select_room,
	select_time: select_time,
	select_subject: select_subject,
	no_data: no_data,
	time_record: time_record,
	professor: professor,
	degree_level: degree_level,
	subject_taught: subject_taught,
	generation: generation,
	classroom: classroom,
	students_in_list: students_in_list,
	phone_number: phone_number,
	specialization: specialization,
	group: group,
	teaching_days: teaching_days,
	students_attendance: students_attendance,
	date_of_birth: date_of_birth,
	graduation_year: graduation_year,
	major: major,
	hours: hours,
	dropped_students: dropped_students,
	class_code: class_code,
	phone_penh_capital: phone_penh_capital,
	academic_year: academic_year,
	online_student: online_student,
	no_num: no_num,
	teaching_day: teaching_day,
	lesson_content: lesson_content,
	note: note,
	times: times,
	hour: hour,
	duration: duration,
	attendance: attendance,
	other: other,
	print: print,
	student_score_record_list: student_score_record_list,
	"import": "ទាញបញ្ចូល",
	export_as_excel: export_as_excel,
	goto_telegram_group: goto_telegram_group,
	name_latin: name_latin,
	surname_name: surname_name,
	dob: dob,
	midterm: midterm,
	final: final,
	total: total,
	kingdom_of_cambodia: kingdom_of_cambodia,
	nation_religion_king: nation_religion_king,
	moeys: moeys,
	school_name: school_name,
	school: school,
	enter_password: enter_password,
	enter_username: enter_username,
	login: login,
	username: username,
	password: password,
	confirm_password: confirm_password,
	invalid_username_password: invalid_username_password,
	login_failed: login_failed,
	loading_: loading_,
	loading: loading,
	no_account: no_account,
	sign_up: sign_up,
	teaching_class: teaching_class,
	username_required: username_required,
	password_required: password_required,
	fill_all_fields: fill_all_fields,
	invalid_credentials: invalid_credentials,
	login_successful: login_successful,
	missing_field: missing_field,
	email: email,
	email_invalid: email_invalid,
	english_name: english_name,
	add: add,
	view: view,
	create: create,
	update: update,
	"delete": "លុប",
	cancel: cancel,
	save: save,
	migrate: migrate,
	close: close,
	reject: reject,
	approve: approve,
	upload: upload,
	download: download,
	settings: settings,
	info: info,
	warning: warning,
	success: success,
	danger: danger,
	share: share,
	send: send,
	install: install,
	user_information: user_information,
	new_user: new_user,
	edit_user: edit_user,
	do_you_want_to_delete: do_you_want_to_delete,
	this_action_cannot_be_undone: this_action_cannot_be_undone,
	user_deleted_successfully: user_deleted_successfully,
	failed_to_delete_user: failed_to_delete_user,
	created_by: created_by,
	updated_by: updated_by,
	user_management: user_management,
	user_type: user_type,
	user_role: user_role,
	user_group: user_group,
	user_list: user_list,
	user_group_list: user_group_list,
	user_group_name: user_group_name,
	user_group_code: user_group_code,
	user_group_description: user_group_description,
	user_group_create: user_group_create,
	user_group_edit: user_group_edit,
	user_group_delete: user_group_delete,
	user_group_view: user_group_view,
	user_group_add: user_group_add,
	user_group_remove: user_group_remove,
	user_group_assign: user_group_assign,
	user_group_unassign: user_group_unassign,
	search_by_subject: search_by_subject,
	search_by_class: search_by_class,
	no_scores_found: no_scores_found,
	no_attendance_found: no_attendance_found,
	no_students_found: no_students_found,
	no_students_in_class: no_students_in_class,
	no_students_in_batch: no_students_in_batch,
	no_students_in_room: no_students_in_room,
	confirmation: confirmation,
	confirm: confirm,
	student_score_record: student_score_record,
	student_attendance_record: student_attendance_record,
	student_attendance: student_attendance,
	student_score: student_score,
	student: student,
	student_list_: student_list_,
	record: record,
	record_list: record_list,
	username_requirements: username_requirements,
	password_requirements: password_requirements,
	logging_in: logging_in,
	logging_out: logging_out,
	logout: logout,
	logout_successful: logout_successful,
	logout_failed: logout_failed,
	logout_confirmation: logout_confirmation,
	logout_confirmation_message: logout_confirmation_message,
	logout_confirmation_title: logout_confirmation_title,
	logout_confirmation_button: logout_confirmation_button,
	score: score,
	score_list: score_list,
	description: description,
	description_: description_,
	home_page: home_page,
	user_profile: user_profile,
	user_profile_information: user_profile_information,
	updated_at: updated_at,
	created_at: created_at,
	no_address_provided: no_address_provided,
	system_information: system_information,
	place_of_birth: place_of_birth,
	user_detail: user_detail,
	address: address,
	personal_information: personal_information,
	basic_information: basic_information,
	back: back,
	edit_profile: edit_profile,
	ranking: ranking,
	searchPlaceholder: searchPlaceholder,
	noDataFound: noDataFound,
	student_score_detail: student_score_detail,
	student_attendance_detail: student_attendance_detail,
	student_attendance_record_list: student_attendance_record_list,
	student_score_record_list_: student_score_record_list_,
	total_score: total_score,
	total_attendance: total_attendance,
	summary: summary,
	new_score: new_score,
	reload: reload,
	reload_page: reload_page,
	save_and_close: save_and_close,
	save_all: save_all,
	student_score_entry: student_score_entry,
	select_course: select_course,
	current_password: current_password,
	new_password: new_password,
	confirm_new_password: confirm_new_password,
	change_password: change_password,
	reset_password: reset_password,
	assign_role: assign_role,
	remove_role: remove_role,
	select_role_for_user: select_role_for_user,
	add_user: add_user,
	first_name: first_name,
	last_name: last_name,
	no_users: no_users,
	roles: roles,
	role: role,
	full_name: full_name,
	update_your_profile: update_your_profile,
	bio: bio,
	tell_us_about_yourself: tell_us_about_yourself,
	update_profile: update_profile,
	profile_detail: profile_detail,
	view_profile_detail: view_profile_detail,
	nationality: nationality,
	do_you_want_to_delete_score_data_that_have_note: do_you_want_to_delete_score_data_that_have_note,
	exam_date: exam_date,
	telegram_link_setup: telegram_link_setup,
	configure_telegram_links: configure_telegram_links,
	link_type: link_type,
	group_link: group_link,
	channel_link: channel_link,
	bot_link: bot_link,
	link_information: link_information,
	link_title: link_title,
	enter_link_title: enter_link_title,
	telegram_link: telegram_link,
	enter_link_path: enter_link_path,
	enter_description: enter_description,
	optional: optional,
	link_to: link_to,
	select_class: select_class,
	academic_period: academic_period,
	select_academic: select_academic,
	department: department,
	select_department: select_department,
	official_link: official_link,
	official_link_description: official_link_description,
	active_link: active_link,
	active_link_description: active_link_description,
	save_changes: save_changes,
	no_changes_to_save: no_changes_to_save,
	save_success: save_success,
	save_error: save_error,
	status: status,
	do_you_want_to_delete_: do_you_want_to_delete_,
	today_attendance_record: today_attendance_record,
	date: date,
	attendance_type: attendance_type,
	submit: submit,
	no_attendance_records_found_for_today: no_attendance_records_found_for_today,
	setup: setup,
	offline: offline,
	online: online,
	student_name: student_name,
	professor_information: professor_information,
	personal_info: personal_info,
	enter_professor_name: enter_professor_name,
	select_degree: select_degree,
	enter_subject: enter_subject,
	enter_batch: enter_batch,
	enter_classroom: enter_classroom,
	contact_academic: contact_academic,
	enter_phone: enter_phone,
	enter_specialization: enter_specialization,
	select_semester: select_semester,
	enter_group: enter_group,
	enter_days: enter_days,
	statistics_details: statistics_details,
	enter_year: enter_year,
	enter_academic_year: enter_academic_year,
	enter_major: enter_major,
	enter_hours: enter_hours,
	reset: reset,
	save_information: save_information,
	GROUP: GROUP,
	group_chat: group_chat,
	personal_chat: personal_chat,
	official_channel: official_channel,
	study_group: study_group,
	about: about,
	about_me: about_me,
	services: services,
	service: service,
	blog: blog,
	blogs: blogs,
	portfolio: portfolio,
	project: project,
	projects: projects,
	contact: contact,
	contact_me: contact_me,
	open_navigation: open_navigation,
	close_navigation: close_navigation,
	artwork: artwork,
	gallery: gallery,
	wishes: wishes,
	wedding_settings: wedding_settings,
	articles: articles,
	article_categories: article_categories,
	media_library: media_library,
	guest_management: guest_management,
	gift_records: gift_records,
	event: event,
	setup_invitation: setup_invitation,
	invitations_list: invitations_list,
	invitation_settings: invitation_settings,
	all: all,
	loading_more: loading_more,
	no_more_data: no_more_data,
	scanning: scanning,
	inventory: inventory,
	add_inventory: add_inventory,
	enventory_control: enventory_control,
	item_name: item_name,
	shipment: shipment,
	quantity: quantity,
	login_signup_with: login_signup_with,
	chat: chat,
	no_internet_connection: no_internet_connection,
	try_again: try_again,
	chat_group: chat_group,
	user_and_privilege: user_and_privilege,
	privilege: privilege,
	chat_monitor: chat_monitor,
	monitor: monitor,
	storage: storage$1,
	used_storage: used_storage,
	available_storage: available_storage,
	total_storage: total_storage,
	schedule: schedule,
	my_schedule: my_schedule,
	setting: setting,
	theme: theme,
	group_management: group_management,
	new_role: new_role,
	edit_role: edit_role,
	delete_role: delete_role,
	delete_role_confirm: delete_role_confirm,
	no_roles: no_roles,
	permissions: permissions,
	role_name_placeholder: role_name_placeholder,
	role_desc_placeholder: role_desc_placeholder,
	create_group: create_group,
	edit_group: edit_group,
	customer: customer,
	payment_management: payment_management,
	payment_history: payment_history,
	history: history,
	vehicle_management: vehicle_management,
	vehicle: vehicle,
	driver_management: driver_management,
	driver: driver,
	telegram_chat: telegram_chat,
	telegram: telegram,
	chat_history: chat_history,
	map_integration: map_integration,
	chat_storage: chat_storage,
	file_storage: file_storage,
	connect_with_google: connect_with_google,
	do_not_have_an_account: do_not_have_an_account,
	sign_in: sign_in,
	forgot_password: forgot_password,
	sign_in_to_your_account_to_continue: sign_in_to_your_account_to_continue,
	enter_your_password: enter_your_password,
	enter_your_username: enter_your_username,
	continue_with_google: continue_with_google,
	remember_me: remember_me,
	enter_your_useranme: enter_your_useranme,
	fleet: fleet,
	products: products,
	tracking: tracking,
	booking: booking,
	analytics: analytics,
	layout_grid: layout_grid,
	order_management: order_management,
	inventory_control: inventory_control,
	purchase: purchase,
	shipments: shipments,
	total_record: total_record,
	events: events,
	invitation: invitation,
	users: users,
	subscription_plans: subscription_plans,
	languages: languages,
	ceremony: ceremony,
	ceremony_setup: ceremony_setup,
	invitation_letter: invitation_letter,
	welcome_back: welcome_back,
	sign_out: sign_out,
	confirmPassword: confirmPassword,
	forgotPassword: forgotPassword,
	noAccount: noAccount,
	hasAccount: hasAccount,
	orContinueWith: orContinueWith,
	google: google,
	facebook: facebook,
	terms: terms,
	firstName: firstName,
	lastName: lastName,
	usernameLabel: usernameLabel,
	title: title,
	recentActivity: recentActivity,
	upcomingEvents: upcomingEvents,
	quickActions: quickActions,
	totalEvents: totalEvents,
	totalGuests: totalGuests,
	confirmed: confirmed,
	pending: pending,
	budgetUsed: budgetUsed,
	tasksCompleted: tasksCompleted,
	addEvent: addEvent,
	addGuest: addGuest,
	sendInvite: sendInvite,
	viewAll: viewAll,
	rsvpStats: rsvpStats,
	ceremony_timeline: ceremony_timeline,
	newEvent: newEvent,
	editEvent: editEvent,
	deleteEvent: deleteEvent,
	eventName: eventName,
	eventDate: eventDate,
	eventTime: eventTime,
	active: active,
	planning: planning,
	wedding: wedding,
	event_types: event_types,
	event_type: event_type,
	event_name: event_name,
	event_date: event_date,
	event_management: event_management,
	create_your_event: create_your_event,
	select_event_type: select_event_type,
	event_created_success: event_created_success,
	host1_name: host1_name,
	host2_name: host2_name,
	noEvents: noEvents,
	createFirst: createFirst,
	editGuest: editGuest,
	deleteGuest: deleteGuest,
	importGuests: importGuests,
	exportGuests: exportGuests,
	bride: bride,
	groom: groom,
	seats: seats,
	rsvp: rsvp,
	family: family,
	friend: friend,
	colleague: colleague,
	noGuests: noGuests,
	attending: attending,
	notAttending: notAttending,
	unknown: unknown,
	phases: phases,
	addPhase: addPhase,
	phaseName: phaseName,
	startTime: startTime,
	location: location,
	noPhases: noPhases,
	giver: giver,
	item: item,
	received: received,
	thankYouSent: thankYouSent,
	totalGifts: totalGifts,
	total_value: total_value,
	noGifts: noGifts,
	addTask: addTask,
	editTask: editTask,
	markDone: markDone,
	urgent: urgent,
	high: high,
	medium: medium,
	low: low,
	inProgress: inProgress,
	dueDate: dueDate,
	no_tasks: no_tasks,
	mark_all_read: mark_all_read,
	noNotifications: noNotifications,
	rsvp_confirmed: rsvp_confirmed,
	task_due: task_due,
	budget_alert: budget_alert,
	security: security,
	language: language,
	dark: dark,
	light: light,
	system: system,
	saveChanges: saveChanges,
	filter: filter,
	sort: sort,
	"export": "នាំចេញ",
	error: error,
	no_data_available: no_data_available,
	view_all: view_all,
	seeMore: seeMore,
	next: next,
	previous: previous,
	of: of,
	yes: yes,
	no: no,
	required: required,
	start_app: start_app,
	hero: hero,
	heroSub: heroSub,
	startFree: startFree,
	startApp: startApp,
	learnMore: learnMore,
	features: features,
	pricing: pricing,
	invitation_status: invitation_status,
	dashboard_overview: dashboard_overview,
	dashboard_events: dashboard_events,
	setup_and_invitation: setup_and_invitation,
	wish_list: wish_list,
	tables: tables$1,
	checkin: checkin,
	qr_center: qr_center,
	budget_overview: budget_overview,
	budget_transactions: budget_transactions,
	inviation_status: inviation_status,
	inviation: inviation,
	task_management: task_management,
	gift: gift,
	dashboard_tasks: dashboard_tasks,
	timeline: timeline,
	dashboard_invitation: dashboard_invitation,
	tasks_menu: tasks_menu,
	budget_menu: budget_menu,
	notifications_menu: notifications_menu,
	help_and_info: help_and_info,
	letter: letter,
	vs_last_month: vs_last_month,
	mark_read: mark_read,
	actions: actions,
	phone: phone,
	type: type,
	none: none,
	refresh: refresh,
	preview: preview,
	copy: copy,
	copied: copied,
	sent: sent,
	declined: declined,
	completed: completed,
	in_progress: in_progress,
	cancelled: cancelled,
	todo: todo,
	review: review,
	total_events: total_events,
	invitations_sent: invitations_sent,
	total_budget: total_budget,
	this_week: this_week,
	days_to_wedding: days_to_wedding,
	ceremony_date: ceremony_date,
	add_event: add_event,
	event_time: event_time,
	event_location: event_location,
	past: past,
	calendar_view: calendar_view,
	timeline_view: timeline_view,
	grid_view: grid_view,
	traditional: traditional,
	reception: reception,
	blessing: blessing,
	rehearsal: rehearsal,
	engagement: engagement,
	status_scheduled: status_scheduled,
	status_ongoing: status_ongoing,
	status_completed: status_completed,
	status_cancelled: status_cancelled,
	edit_event: edit_event,
	delete_event: delete_event,
	view_details: view_details,
	guests_attending: guests_attending,
	venue: venue,
	capacity: capacity,
	dress_code: dress_code,
	add_guest: add_guest,
	guest_name: guest_name,
	guest_phone: guest_phone,
	table_number: table_number,
	rsvp_status: rsvp_status,
	dietary: dietary,
	plus_one: plus_one,
	relationship: relationship,
	side: side,
	bride_side: bride_side,
	groom_side: groom_side,
	both_sides: both_sides,
	total_guests: total_guests,
	confirmed_guests: confirmed_guests,
	pending_guests: pending_guests,
	declined_guests: declined_guests,
	import_guests: import_guests,
	export_guests: export_guests,
	send_invitation: send_invitation,
	search_guests: search_guests,
	filter_status: filter_status,
	filter_side: filter_side,
	mobile_view: mobile_view,
	table_view: table_view,
	vip: vip,
	special_needs: special_needs,
	choose_template: choose_template,
	template_classic: template_classic,
	template_modern: template_modern,
	template_floral: template_floral,
	template_royal: template_royal,
	customize_theme: customize_theme,
	primary_color: primary_color,
	font_style: font_style,
	background_style: background_style,
	preview_invitation: preview_invitation,
	digital_invitation: digital_invitation,
	paper_invitation: paper_invitation,
	save_template: save_template,
	bride_name: bride_name,
	groom_name: groom_name,
	ceremony_venue: ceremony_venue,
	reception_venue: reception_venue,
	wedding_date: wedding_date,
	rsvp_deadline: rsvp_deadline,
	wedding_website: wedding_website,
	qr_code: qr_code,
	add_phase: add_phase,
	phase_name: phase_name,
	phase_time: phase_time,
	phase_duration: phase_duration,
	phase_location: phase_location,
	phase_description: phase_description,
	multi_ceremony: multi_ceremony,
	single_ceremony: single_ceremony,
	reorder_phases: reorder_phases,
	blessing_ceremony: blessing_ceremony,
	hair_ceremony: hair_ceremony,
	thread_ceremony: thread_ceremony,
	gate_ceremony: gate_ceremony,
	reception_ceremony: reception_ceremony,
	candle_ceremony: candle_ceremony,
	flower_ceremony: flower_ceremony,
	officiant: officiant,
	musicians: musicians,
	photographer: photographer,
	videographer: videographer,
	subtitle: subtitle,
	bulk_send: bulk_send,
	total_sent: total_sent,
	total_pending: total_pending,
	response_rate: response_rate,
	resend: resend,
	qr_code_title: qr_code_title,
	qr_description: qr_description,
	via_sms: via_sms,
	via_email: via_email,
	via_whatsapp: via_whatsapp,
	via_telegram: via_telegram,
	schedule_send: schedule_send,
	send_now: send_now,
	personalize: personalize,
	invitation_link: invitation_link,
	write_letter: write_letter,
	both: both,
	template_formal: template_formal,
	template_casual: template_casual,
	export_pdf: export_pdf,
	export_word: export_word,
	font_size: font_size,
	font_family: font_family,
	letter_preview: letter_preview,
	dear_guests: dear_guests,
	salutation: salutation,
	body: body,
	closing: closing,
	signature: signature,
	add_gift: add_gift,
	gift_type: gift_type,
	cash: cash,
	non_cash: non_cash,
	gift_amount: gift_amount,
	gift_description: gift_description,
	gifted_by: gifted_by,
	gift_date: gift_date,
	total_gifts: total_gifts,
	total_cash: total_cash,
	total_items: total_items,
	average_gift: average_gift,
	thank_you_sent: thank_you_sent,
	send_thank_you: send_thank_you,
	currency: currency,
	khr: khr,
	usd: usd,
	search_gifts: search_gifts,
	filter_type: filter_type,
	notes: notes,
	add_task: add_task,
	task_title: task_title,
	task_description: task_description,
	assignee: assignee,
	due_date: due_date,
	priority: priority,
	priority_high: priority_high,
	priority_medium: priority_medium,
	priority_low: priority_low,
	column_todo: column_todo,
	column_in_progress: column_in_progress,
	column_review: column_review,
	column_done: column_done,
	move_to: move_to,
	overdue: overdue,
	today: today,
	upcoming: upcoming,
	filter_priority: filter_priority,
	filter_assignee: filter_assignee,
	checklist: checklist,
	add_checklist: add_checklist,
	attachments: attachments,
	comments: comments,
	add_expense: add_expense,
	total_spent: total_spent,
	remaining: remaining,
	over_budget: over_budget,
	on_track: on_track,
	category: category,
	category_venue: category_venue,
	category_catering: category_catering,
	category_photography: category_photography,
	category_flowers: category_flowers,
	category_music: category_music,
	category_attire: category_attire,
	category_invitation: category_invitation,
	category_transport: category_transport,
	category_honeymoon: category_honeymoon,
	category_other: category_other,
	expense_name: expense_name,
	vendor: vendor,
	paid: paid,
	unpaid: unpaid,
	partial: partial,
	payment_date: payment_date,
	deposit: deposit,
	balance: balance,
	set_budget: set_budget,
	budget_allocation: budget_allocation,
	add_category: add_category,
	add_transaction: add_transaction,
	allocated: allocated,
	spent: spent,
	transactions: transactions,
	amount: amount,
	no_transactions: no_transactions,
	filter_all: filter_all,
	filter_rsvp: filter_rsvp,
	filter_reminder: filter_reminder,
	filter_alert: filter_alert,
	filter_task: filter_task,
	no_notifications: no_notifications,
	rsvp_declined: rsvp_declined,
	task_completed: task_completed,
	reminder: reminder,
	guest_added: guest_added,
	gift_received: gift_received,
	payment_due: payment_due,
	yesterday: yesterday,
	earlier: earlier,
	register: register,
	have_account: have_account,
	couple_name: couple_name,
	account_settings: account_settings,
	setup_template: setup_template,
	preview_letter: preview_letter,
	send_letter: send_letter,
	preview_link: preview_link,
	copy_link: copy_link,
	generate_link: generate_link,
	editor: editor,
	desktop: desktop,
	tablet: tablet,
	mobile: mobile,
	full_preview: full_preview,
	save_change: save_change,
	live_preview: live_preview,
	or_continue_with: or_continue_with,
	signin_in: signin_in,
	no_roles_found: no_roles_found,
	letter_setup: letter_setup,
	template_setup: template_setup,
	new_event: new_event,
	collapse_sidebar: collapse_sidebar,
	expand_sidebar: expand_sidebar,
	tasks_completed: tasks_completed,
	budget_used: budget_used,
	rsvp_stats: rsvp_stats,
	decline: decline,
	this_month: this_month,
	recent_activity: recent_activity,
	create_your_wedding: create_your_wedding,
	create_wedding_sub: create_wedding_sub,
	create_wedding_btn: create_wedding_btn,
	bride_name_placeholder: bride_name_placeholder,
	groom_name_placeholder: groom_name_placeholder,
	budget_placeholder: budget_placeholder,
	venue_placeholder: venue_placeholder,
	wedding_created_success: wedding_created_success,
	wedding_create_failed: wedding_create_failed,
	creating: creating,
	dashboard: dashboard,
	rsvp_pending: rsvp_pending,
	import_guest: import_guest,
	modern: modern,
	royal_gold: royal_gold,
	vintage: vintage,
	classic: classic,
	forest: forest,
	blossom: blossom,
	midnight: midnight,
	mode: mode,
	signing_in: signing_in,
	inactive: inactive,
	or: or,
	validation_required: validation_required,
	validation_email: validation_email,
	validation_url: validation_url,
	validation_minLength: validation_minLength,
	validation_maxLength: validation_maxLength,
	validation_min: validation_min,
	validation_max: validation_max,
	validation_pattern: validation_pattern,
	validation_phone: validation_phone,
	form_name: form_name,
	form_firstName: form_firstName,
	form_lastName: form_lastName,
	form_email: form_email,
	form_phone: form_phone,
	form_password: form_password,
	form_confirm: form_confirm,
	form_role: form_role,
	form_department: form_department,
	form_avatar: form_avatar,
	form_message: form_message,
	form_description: form_description,
	form_title: form_title,
	form_date: form_date,
	form_startDate: form_startDate,
	form_endDate: form_endDate,
	form_status: form_status,
	form_type: form_type,
	form_color: form_color,
	form_tags: form_tags,
	form_notes: form_notes,
	form_address: form_address,
	form_city: form_city,
	form_country: form_country,
	user_invite: user_invite,
	user_edit: user_edit,
	user_delete: user_delete,
	user_inviteEmail: user_inviteEmail,
	user_inviteRole: user_inviteRole,
	user_inviteMessage: user_inviteMessage,
	user_inviteSend: user_inviteSend,
	user_createSuccess: user_createSuccess,
	user_inviteSuccess: user_inviteSuccess,
	user_deleteConfirm: user_deleteConfirm,
	are_you_sure_you_want_to_delete_this_guest: are_you_sure_you_want_to_delete_this_guest,
	are_you_sure_you_want_to_delete_this_gift: are_you_sure_you_want_to_delete_this_gift,
	are_you_sure_you_want_to_delete_this_task: are_you_sure_you_want_to_delete_this_task,
	are_you_sure_you_want_to_delete_this_user: are_you_sure_you_want_to_delete_this_user,
	user_roles_admin: user_roles_admin,
	user_roles_manager: user_roles_manager,
	user_roles_editor: user_roles_editor,
	user_roles_viewer: user_roles_viewer,
	user_roles_guest: user_roles_guest,
	project_create: project_create,
	project_edit: project_edit,
	project_name: project_name,
	project_members: project_members,
	project_schedule: project_schedule,
	report_create: report_create,
	report_title: report_title,
	report_type: report_type,
	report_period: report_period,
	report_filters: report_filters,
	report_schedule: report_schedule,
	report_generate: report_generate,
	settings_general: settings_general,
	settings_appearance: settings_appearance,
	settings_language: settings_language,
	settings_theme: settings_theme,
	settings_notifications: settings_notifications,
	settings_security: settings_security,
	settings_billing: settings_billing,
	settings_theme_light: settings_theme_light,
	settings_theme_dark: settings_theme_dark,
	settings_theme_system: settings_theme_system,
	nav_dashboard: nav_dashboard,
	nav_users: nav_users,
	nav_projects: nav_projects,
	nav_reports: nav_reports,
	nav_analytics: nav_analytics,
	nav_messages: nav_messages,
	nav_settings: nav_settings,
	nav_help: nav_help,
	nav_integrations: nav_integrations,
	select: select,
	show: show,
	page: page,
	next_page: next_page,
	previous_page: previous_page,
	last_page: last_page,
	jump_to_page: jump_to_page,
	page_num: page_num,
	entries: entries,
	showing: showing,
	to: to,
	organization_name: organization_name,
	organization_name_placeholder: organization_name_placeholder,
	has_account: has_account,
	saving: saving,
	notifications: notifications,
	manage_profile: manage_profile,
	occupation: occupation,
	n_o: n_o,
	child: child,
	guardian: guardian,
	registered_user: registered_user,
	unregistered_guardian: unregistered_guardian,
	unregistered_student: unregistered_student,
	view_guardian_register: view_guardian_register,
	create_irst: create_irst,
	edit_guest: edit_guest,
	import_guests_from_excel: import_guests_from_excel,
	no_guests: no_guests,
	no_ceremonies: no_ceremonies,
	ai_batch_translate: ai_batch_translate,
	ai_translate: ai_translate,
	start_time: start_time,
	end_time: end_time,
	ai_config: ai_config,
	prompt_manager: prompt_manager,
	translations: translations,
	theme_manager: theme_manager,
	send_invite: send_invite,
	send_via_telegram: send_via_telegram,
	send_via_email: send_via_email,
	send_via_whatsapp: send_via_whatsapp,
	budget: budget,
	common: common,
	tasks: tasks$1,
	no_matching_results: no_matching_results,
	no_results_for: no_results_for,
	no_data_found: no_data_found,
	there_is_no_data_available: there_is_no_data_available,
	no_results_found: no_results_found,
	try_adjusting_your_search: try_adjusting_your_search,
	there_is_no_data_to_display: there_is_no_data_to_display,
	position: position,
	joined_date: joined_date,
	birth_date: birth_date,
	more_button: more_button,
	more: more,
	clear_all: clear_all,
	select_all: select_all,
	deselect_all: deselect_all,
	selected: selected,
	go_to_page: go_to_page,
	first: first,
	last: last,
	profile: profile,
	loading_data: loading_data,
	total_records: total_records,
	data_not_found: data_not_found,
	article: article,
	media: media,
	auth: auth,
	guest: guest,
	invite: invite,
	plans: plans,
	validation: validation,
	please_select: please_select,
	no_event_selected: no_event_selected,
	add_ceremony_first: add_ceremony_first,
	add_ceremony: add_ceremony,
	event_info: event_info
};

// @ts-nocheck
const localeCodes =  [
  "en",
  "km"
];
const localeLoaders = {
  en: [
    {
      key: "locale_en_46json_8b80aec6",
      load: () => Promise.resolve(locale_en_46json_8b80aec6),
      cache: true
    }
  ],
  km: [
    {
      key: "locale_km_46json_a4af907d",
      load: () => Promise.resolve(locale_km_46json_a4af907d),
      cache: true
    }
  ]
};
const vueI18nConfigs = [];
const normalizedLocales = [
  {
    code: "en",
    name: "English",
    iso: "en-US",
    flag: "/flags/gb.svg",
    language: undefined,
    domains: [],
    defaultForDomains: []
  },
  {
    code: "km",
    name: "ខ្មែរ",
    iso: "km-KH",
    flag: "/flags/kh.svg",
    language: undefined,
    domains: [],
    defaultForDomains: []
  }
];

const setupVueI18nOptions = async (defaultLocale) => {
  const options = await loadVueI18nOptions(vueI18nConfigs);
  options.locale = defaultLocale || options.locale || "en-US";
  options.defaultLocale = defaultLocale;
  options.fallbackLocale ??= false;
  options.messages ??= {};
  for (const locale of localeCodes) {
    options.messages[locale] ??= {};
  }
  return options;
};

function defineNitroPlugin(def) {
  return def;
}

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send$2(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send$2(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function buildAssetsDir() {
	return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
	return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
	const app = useRuntimeConfig().app;
	const publicBase = app.cdnURL || app.baseURL;
	return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

const checksums = {
  "docs": "v3.5.0--T0rw5pfr2r_kQrHQVg88tSPkFb5CcUPW3JEKo19q0-A"
};
const checksumsStructure = {
  "docs": "quFkNIUZZFAwcn0ok74-KsIERem9u0p5DW-cqEgxrPA"
};
const tables = {
  "docs": "_content_docs",
  "info": "_content_info"
};
const contentManifest = {
  "docs": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "description": "string",
      "extension": "string",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string"
    }
  },
  "info": {
    "type": "data",
    "fields": {}
  }
};

async function fetchContent(event, collection, path, options) {
  const headers = event ? getRequestHeaders(event) : {};
  headers["accept-encoding"] = void 0;
  for (const name of ["content-length", "transfer-encoding", "content-encoding", "expect"]) {
    headers[name] = void 0;
  }
  const url = `/__nuxt_content/${collection}/${path}`;
  const fetchOptions = {
    ...options,
    headers: {
      ...headers,
      ...options.headers
    },
    query: { v: checksums[String(collection)], t: Date.now()  }
  };
  return event ? await event.$fetch(url, fetchOptions) : await $fetch(url, fetchOptions);
}
async function fetchDatabase(event, collection) {
  return fetchContent(event, collection, "sql_dump.txt", {
    responseType: "text",
    headers: {
      "content-type": "text/plain"
    }
  });
}

function parseAcceptLanguage(value) {
  return value.split(",").map((tag) => tag.split(";")[0]).filter(
    (tag) => !(tag === "*" || tag === "")
  );
}
function createPathIndexLanguageParser(index = 0) {
  return (path) => {
    const rawPath = typeof path === "string" ? path : path.pathname;
    const normalizedPath = rawPath.split("?")[0];
    const parts = normalizedPath.split("/");
    if (parts[0] === "") {
      parts.shift();
    }
    return parts.length > index ? parts[index] || "" : "";
  };
}

function useRuntimeI18n(nuxtApp, event) {
  {
    const getRuntimeConfig = useRuntimeConfig;
    return getRuntimeConfig(event).public.i18n;
  }
}
function useI18nDetection(nuxtApp) {
  const detectBrowserLanguage = useRuntimeI18n().detectBrowserLanguage;
  const detect = detectBrowserLanguage || {};
  return {
    ...detect,
    enabled: !!detectBrowserLanguage,
    cookieKey: detect.cookieKey || "i18n_redirected"
  };
}
function resolveRootRedirect(config) {
  if (!config) {
    return void 0;
  }
  return {
    path: "/" + (isString(config) ? config : config.path).replace(/^\//, ""),
    code: !isString(config) && config.statusCode || 302
  };
}

const normalizeDomain = (domain = "") => domain.replace(/^https?:\/\//i, "").toLowerCase();
function isLocaleOnHost(locale, host) {
  return !!locale?.domains.some((x) => normalizeDomain(x) === host);
}
function resolveLocaleReach(locales, host, locale) {
  const target = locales.find((l) => l.code === locale);
  if (!target?.domains.length || isLocaleOnHost(target, host)) {
    return "here";
  }
  return locales.some((l) => isLocaleOnHost(l, host)) ? "other-domain" : "off-host";
}
function isLocaleServedOnHost(locales, host, locale) {
  return resolveLocaleReach(locales, host, locale) !== "other-domain";
}
function matchDomainLocale(locales, host, pathLocale) {
  const matches = locales.filter((locale) => isLocaleOnHost(locale, host));
  return (
    // match by current path locale
    (matches.find((l) => l.code === pathLocale) || matches.find((l) => l.defaultForDomains.some((domain) => normalizeDomain(domain) === host)) || matches[0])?.code
  );
}
function cookieSpansDomains(locales, cookieDomain) {
  const scope = cookieDomain.replace(/^\./, "").replace(/:\d+$/, "").toLowerCase();
  return locales.every(
    (l) => l.domains.concat(l.domain || []).every((domain) => {
      const host = normalizeDomain(domain).replace(/:\d+$/, "");
      return host === scope || host.endsWith("." + scope);
    })
  );
}
function withRuntimeDomain(locale, domainLocales) {
  if (typeof locale === "string") {
    return locale;
  }
  const properties = locale;
  const domain = domainLocales[properties.code]?.domain;
  if (!domain || domain === properties.domain) {
    return locale;
  }
  return {
    ...properties,
    domain,
    domains: [domain],
    defaultForDomains: properties.defaultForDomains.length ? [domain] : []
  };
}

function createLocaleConfigs(fallbackLocale) {
  const localeConfigs = {};
  for (const locale of localeCodes) {
    const fallbacks = getFallbackLocaleCodes(fallbackLocale, [locale]);
    const cacheable = isLocaleWithFallbacksCacheable(locale, fallbacks);
    localeConfigs[locale] = { fallbacks, cacheable };
  }
  return localeConfigs;
}
function getFallbackLocaleCodes(fallback, locales) {
  if (fallback === false) {
    return [];
  }
  if (isArray(fallback)) {
    return fallback;
  }
  let fallbackLocales = [];
  if (isString(fallback)) {
    if (locales.every((locale) => locale !== fallback)) {
      fallbackLocales.push(fallback);
    }
    return fallbackLocales;
  }
  const targets = [...locales, "default"];
  for (const locale of targets) {
    if (locale in fallback == false) {
      continue;
    }
    fallbackLocales = [...fallbackLocales, ...fallback[locale].filter(Boolean)];
  }
  return fallbackLocales;
}
function isLocaleCacheable(locale) {
  return localeLoaders[locale] != null && localeLoaders[locale].every((loader) => loader.cache !== false);
}
function isLocaleWithFallbacksCacheable(locale, fallbackLocales) {
  return isLocaleCacheable(locale) && fallbackLocales.every((fallbackLocale) => isLocaleCacheable(fallbackLocale));
}
function getDefaultLocaleForDomain(host, locales = normalizedLocales) {
  return locales.find((l) => l.defaultForDomains.some((domain) => normalizeDomain(domain) === host))?.code;
}
function resolveDefaultLocale(host, defaultLocale, locales = normalizedLocales) {
  const resolved = getDefaultLocaleForDomain(host, locales) || defaultLocale;
  if (resolved) {
    return resolved;
  }
  return (locales.some((l) => l.domains.length) ? locales[0]?.code : "") || "";
}
const isSupportedLocale = (locale) => localeCodes.includes(locale || "");

const storage = prefixStorage(useStorage(), "i18n");
function deepFreeze(value) {
  if (value == null || typeof value !== "object" || Object.isFrozen(value)) {
    return value;
  }
  for (const key of Object.keys(value)) {
    deepFreeze(value[key]);
  }
  return Object.freeze(value);
}
function cachedFunctionI18n(fn, opts) {
  opts = { maxAge: 1, ...opts };
  const pending = {};
  async function get(key, resolver) {
    const isPending = pending[key];
    if (!isPending) {
      pending[key] = Promise.resolve(resolver());
    }
    try {
      return await pending[key];
    } finally {
      delete pending[key];
    }
  }
  return async (...args) => {
    const key = [opts.name, opts.getKey(...args)].join(":").replace(/:\/$/, ":index");
    const maxAge = opts.maxAge ?? 1;
    const isCacheable = !opts.shouldBypassCache(...args) && maxAge >= 0;
    const cache = isCacheable && await storage.getItemRaw(key);
    if (!cache || cache.ttl < Date.now()) {
      pending[key] = Promise.resolve(fn(...args));
      const value = await get(key, () => fn(...args));
      if (isCacheable) {
        deepFreeze(value);
        await storage.setItemRaw(key, { ttl: Date.now() + maxAge * 1e3, value, mtime: Date.now() });
      }
      return value;
    }
    return cache.value;
  };
}

const _getMessages = async (locale) => {
  return { [locale]: await getLocaleMessagesMerged(locale, localeLoaders[locale]) };
};
cachedFunctionI18n(_getMessages, {
  name: "messages",
  maxAge: -1 ,
  getKey: (locale) => locale,
  shouldBypassCache: (locale) => !isLocaleCacheable(locale)
});
const getMessages = _getMessages ;
function appContextHint(e) {
  if (!/ is not defined|Nuxt instance unavailable/.test(e.message)) {
    return "";
  }
  return ". Locale loaders run outside the Nuxt app when the server produces messages, so Nuxt app composables (`useNuxtApp`, `useState`, `useCookie`, ...) are unavailable - call them in the locale file itself to have the build keep that locale in the app instead.";
}
const _getMergedMessages = async (locale, fallbackLocales) => {
  try {
    if (fallbackLocales.length === 0) {
      return await getMessages(locale) ?? {};
    }
    const merged = {};
    const messages = await Promise.all(fallbackLocales.map(getMessages));
    for (const message of messages) {
      deepCopy(message, merged);
    }
    deepCopy(await getMessages(locale), merged);
    return merged;
  } catch (e) {
    throw new Error("Failed to merge messages: " + e.message + appContextHint(e), { cause: e });
  }
};
const getMergedMessages = cachedFunctionI18n(_getMergedMessages, {
  name: "merged-single",
  maxAge: -1 ,
  getKey: (locale, fallbackLocales) => `${locale}-[${[...new Set(fallbackLocales)].sort().join("-")}]`,
  shouldBypassCache: (locale, fallbackLocales) => !isLocaleWithFallbacksCacheable(locale, fallbackLocales)
});

function useI18nContext(event) {
  if (event.context.nuxtI18n == null) {
    throw new Error("Nuxt I18n server context has not been set up yet.");
  }
  return event.context.nuxtI18n;
}
function tryUseI18nContext(event) {
  return event.context.nuxtI18n;
}
const getHost = (event) => getRequestURL(event, { xForwardedHost: true }).host;
async function initializeI18nContext(event) {
  const runtimeI18n = useRuntimeI18n(void 0, event);
  const defaultLocale = runtimeI18n.defaultLocale || "";
  const options = await setupVueI18nOptions(resolveDefaultLocale(getHost(event), defaultLocale));
  const localeConfigs = createLocaleConfigs(options.fallbackLocale);
  const ctx = createI18nContext();
  ctx.vueI18nOptions = options;
  ctx.localeConfigs = localeConfigs;
  event.context.nuxtI18n = ctx;
  return ctx;
}
function createI18nContext() {
  return {
    messages: {},
    slp: {},
    localeConfigs: {},
    trackMap: {},
    vueI18nOptions: void 0,
    trackKey(key, locale) {
      this.trackMap[locale] ??= /* @__PURE__ */ new Set();
      this.trackMap[locale].add(key);
    },
    async loadMessages(locale) {
      const messages = await getMergedMessages(locale, this.localeConfigs?.[locale]?.fallbacks ?? []) ?? {};
      return this.vueI18nOptions?.flatJson ? cloneDeep(messages) : messages;
    }
  };
}

const separator = "___";
const createTrailingSlashFormatter = (trailingSlash) => trailingSlash ? withTrailingSlash : withoutTrailingSlash;
const pathLanguageParser = createPathIndexLanguageParser(0);
const getLocaleFromRoutePath = (path) => pathLanguageParser(path);
const getLocaleFromRouteName = (name) => name.split(separator).at(1) ?? "";
function normalizeInput(input) {
  return typeof input !== "object" ? String(input) : String(input?.name || input?.path || "");
}
function getLocaleFromRoute(route) {
  const input = normalizeInput(route);
  if (input[0] === "/") {
    return getLocaleFromRoutePath(input);
  }
  const fromName = getLocaleFromRouteName(input);
  if (fromName) {
    return fromName;
  }
  if (typeof route === "object" && route?.path) {
    return getLocaleFromRoutePath(String(route.path));
  }
  return "";
}

function matchBrowserLocale(locales, browserLocales) {
  const matchedLocales = [];
  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = locales.find((l) => l.language?.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 1 - index / browserLocales.length });
      break;
    }
  }
  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split("-")[0].toLowerCase();
    const matchedLocale = locales.find((l) => l.language?.split("-")[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 0.999 - index / browserLocales.length });
      break;
    }
  }
  return matchedLocales;
}
function compareBrowserLocale(a, b) {
  if (a.score === b.score) {
    return b.code.length - a.code.length;
  }
  return b.score - a.score;
}
function findBrowserLocale(locales, browserLocales) {
  const matchedLocales = matchBrowserLocale(
    locales.map((l) => ({ code: l.code, language: l.language || l.code })),
    browserLocales
  );
  return matchedLocales.sort(compareBrowserLocale).at(0)?.code ?? "";
}

const getCookieLocale = (event, cookieName) => (getCookie(event, cookieName)) || void 0;
const getRouteLocale = (event, route) => getLocaleFromRoute(route);
const getHeaderLocale = (event) => findBrowserLocale(normalizedLocales, parseAcceptLanguage(getRequestHeader(event, "accept-language") || ""));
const getRequestHost = (event) => getRequestURL(event, { xForwardedHost: true }).host;
const getRefererHost = (event) => {
  const referer = getRequestHeader(event, "referer");
  try {
    return referer && new URL(referer).host || void 0;
  } catch {
    return void 0;
  }
};
const getDomainLocales = (domainLocales) => normalizedLocales.map((l) => withRuntimeDomain(l, domainLocales));
const useDetectors = (event, config, nuxtApp) => {
  if (!event) {
    throw new Error("H3Event is required for server-side locale detection");
  }
  const runtimeI18n = useRuntimeI18n();
  let host;
  let locales;
  const getHost = () => host ??= getRequestHost(event);
  const getLocales = () => locales ??= getDomainLocales(runtimeI18n.domainLocales);
  return {
    cookie: () => getCookieLocale(event, config.cookieKey),
    header: () => getHeaderLocale(event) ,
    navigator: () => void 0,
    host: (path) => matchDomainLocale(getLocales(), getHost(), getLocaleFromRoutePath(path)),
    route: (path) => getRouteLocale(event, path),
    /** Passes the locale through when the current host serves it, `undefined` otherwise */
    onHost: (locale) => !locale || isLocaleServedOnHost(getLocales(), getHost(), locale) ? locale : void 0,
    /** Whether the visitor arrived from one of the configured domains */
    fromOwnDomain: () => {
      const referer = getRefererHost(event);
      return !!referer && getLocales().some((l) => isLocaleOnHost(l, referer));
    },
    /** Whether a cookie scoped to the configured `cookieDomain` is readable on every domain */
    cookieSpans: () => !!config.cookieDomain && cookieSpansDomains(getLocales(), config.cookieDomain)
  };
};
function createLocaleDetector(config) {
  const { detection} = config;
  const isSupported = config.isSupportedLocale ?? isSupportedLocale;
  function skipDetect(path, pathLocale) {
    if (detection.redirectOn === "root" && path !== "/") {
      return true;
    }
    if (detection.redirectOn === "no prefix" && !detection.alwaysRedirect && isSupported(pathLocale)) {
      return true;
    }
    return false;
  }
  return function detectLocale(detectors, route, initial) {
    const path = isString(route) ? parsePath(route).pathname : route.path;
    const pass = (locale) => locale;
    const onHost = pass;
    function* detect() {
      const detecting = initial && detection.enabled && !skipDetect(path, detectors.route(path));
      if (detecting) {
        const cookie = onHost;
        const browser = onHost;
        yield cookie(detectors.cookie());
        yield browser(detectors.header());
        yield browser(detectors.navigator());
      }
      {
        yield detectors.route(route);
      }
      if (detecting) {
        yield onHost(detection.fallbackLocale);
      }
    }
    for (const detected of detect()) {
      if (detected && isSupported(detected)) {
        return detected;
      }
    }
    return "";
  };
}

// Generated by @nuxtjs/i18n
const localizedPaths = [
  "/content/articles",
  "/content/categories",
  "/docs/:slug(.*)*",
  "/:locale()/docs/:slug(.*)*",
  "/"
];
const pathToI18nConfig = {};
const i18nPathToPath = {};
const disabledPaths = [];

const emptyRoute = { path: "/", name: "", matched: [], params: {}, meta: {} };
function createPathMatcher(resources, config) {
  const matcher = createRouterMatcher([], {});
  for (const path of [...resources.localizedPaths, ...Object.keys(resources.i18nPathToPath)]) {
    matcher.addRoute({ path, component: () => "", meta: {} });
  }
  const disabledI18nMatcher = createRouterMatcher([], {});
  for (const path of resources.disabledPaths) {
    disabledI18nMatcher.addRoute({ path, component: () => "", meta: {} });
  }
  const formatTrailingSlash = createTrailingSlashFormatter(config.trailingSlash);
  const getI18nPathToI18nPath = (path, locale) => {
    if (!path || !locale) {
      return;
    }
    const plainPath = resources.i18nPathToPath[path] ?? path;
    const i18nConfig = resources.pathToI18nConfig[plainPath];
    if (i18nConfig == null || !(locale in i18nConfig)) {
      return plainPath;
    }
    return i18nConfig[locale] || void 0;
  };
  function isExistingNuxtRoute2(path) {
    if (path === "") {
      return;
    }
    if (path.endsWith("/__nuxt_error")) {
      return;
    }
    if (disabledI18nMatcher.resolve({ path }, emptyRoute).matched.length > 0) {
      return;
    }
    const resolvedMatch = matcher.resolve({ path }, emptyRoute);
    return resolvedMatch.matched.length > 0 ? resolvedMatch : void 0;
  }
  function matchLocalized2(path, locale, defaultLocale) {
    if (path === "") {
      return;
    }
    const parsed = parsePath(path);
    const resolvedMatch = matcher.resolve({ path: parsed.pathname || "/" }, emptyRoute);
    if (resolvedMatch.matched.length === 0) {
      return;
    }
    const alternate = getI18nPathToI18nPath(resolvedMatch.matched[0].path, locale);
    if (!alternate) {
      return;
    }
    const match = matcher.resolve({ params: resolvedMatch.params }, { ...emptyRoute, path: alternate });
    return formatTrailingSlash(withLeadingSlash(joinURL(locale , match.path)), true);
  }
  return { isExistingNuxtRoute: isExistingNuxtRoute2, matchLocalized: matchLocalized2 };
}
const { isExistingNuxtRoute, matchLocalized } = createPathMatcher(
  { localizedPaths, i18nPathToPath, pathToI18nConfig, disabledPaths },
  { trailingSlash: false }
);

function createRedirectResolver(config) {
  const { detection, rootRedirect, matchLocalized, strategy} = config;
  const isSupported = config.isSupportedLocale ?? isSupportedLocale;
  const detectLocale = createLocaleDetector({ detection, isSupportedLocale: isSupported});
  return function resolveRedirectPath(fullPath, path, pathLocale, defaultLocale, detectors, relocate) {
    let locale = detectLocale(detectors, fullPath, true) || defaultLocale;
    function getLocalizedMatch(locale2) {
      const res = matchLocalized(path || "/", locale2, defaultLocale);
      if (res && res !== fullPath) {
        return res;
      }
    }
    let resolvedPath = void 0;
    let redirectCode = 302;
    const pathname = parsePath(fullPath).pathname;
    if (rootRedirect && pathname === "/") {
      locale = detection.enabled && locale || defaultLocale;
      resolvedPath = isSupported(detectors.route(rootRedirect.path)) && rootRedirect.path || matchLocalized(rootRedirect.path, locale, defaultLocale);
      redirectCode = rootRedirect.code;
    } else if (config.redirectStatusCode) {
      redirectCode = config.redirectStatusCode;
    }
    switch (detection.redirectOn) {
      case "root":
        if (pathname !== "/") {
          break;
        }
      // fallthrough (root has no prefix)
      case "no prefix":
        if (pathLocale) {
          break;
        }
      // fallthrough to resolve
      case "all":
        resolvedPath ??= getLocalizedMatch(locale);
        break;
    }
    if (pathname === "/" && strategy === "prefix") {
      resolvedPath ??= getLocalizedMatch(defaultLocale);
    }
    return { path: resolvedPath, code: redirectCode, locale };
  };
}

function createRedirectResponse(event, dest, code) {
  event.node.res.setHeader("location", dest);
  event.node.res.statusCode = sanitizeStatusCode(code, event.node.res.statusCode);
  return {
    headers: event.node.res.getHeaders(),
    statusCode: event.node.res.statusCode,
    body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${dest.replace(/"/g, "%22")}"></head></html>`
  };
}
const _D271gTVk5HrtYL5Rrm8qUpg6GzUKAKJrdFcyX9XI = defineNitroPlugin(async (nitro) => {
  const runtimeI18n = useRuntimeI18n();
  const rootRedirect = resolveRootRedirect(runtimeI18n.rootRedirect);
  runtimeI18n.defaultLocale || "";
  try {
    const cacheStorage = useStorage("cache");
    const cachedKeys = await cacheStorage.getKeys("nitro:handlers:i18n");
    await Promise.all(cachedKeys.map((key) => cacheStorage.removeItem(key)));
  } catch {
  }
  const detection = useI18nDetection();
  const cookieOptions = {
    path: "/",
    domain: detection.cookieDomain || void 0,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: detection.cookieSecure
  };
  const legacyBaseUrl = isFunction(runtimeI18n.baseUrl);
  if (legacyBaseUrl) {
    console.warn("[nuxt-i18n] Configuring baseUrl as a function is deprecated and will be removed in v11.");
  }
  const baseUrlGetter = (event) => {
    return "";
  };
  const resolveRedirectPath = createRedirectResolver({
    detection,
    rootRedirect,
    redirectStatusCode: runtimeI18n.redirectStatusCode,
    matchLocalized,
    strategy: "prefix"});
  nitro.hooks.hook("request", async (event) => {
    await initializeI18nContext(event);
  });
  nitro.hooks.hook("render:before", async (context) => {
    const { event } = context;
    const ctx = useI18nContext(event);
    const url = getRequestURL(event);
    const detector = useDetectors(event, detection);
    const localeSegment = detector.route(event.path);
    const pathLocale = isSupportedLocale(localeSegment) && localeSegment || void 0;
    const { pathname } = parsePath(event.path);
    const path = pathLocale ? pathname.slice(pathLocale.length + 1) || "/" : pathname;
    if (!url.pathname.includes("/_i18n") && !isExistingNuxtRoute(path)) {
      return;
    }
    const resolved = resolveRedirectPath(
      event.path,
      path,
      pathLocale,
      ctx.vueI18nOptions.defaultLocale,
      detector);
    if (resolved.path && (resolved.origin || resolved.path !== pathname)) {
      ctx.detectLocale = resolved.locale;
      detection.useCookie && (!resolved.origin || detection.cookieDomain) && setCookie(event, detection.cookieKey, resolved.locale, cookieOptions);
      context.response = createRedirectResponse(
        event,
        // the resolved path is base-free (matched against base-free routes), re-add `app.baseURL`
        joinURL(
          resolved.origin || baseUrlGetter(),
          useRuntimeConfig(event).app.baseURL,
          resolved.path + url.search
        ),
        resolved.code
      );
      return;
    }
  });
  nitro.hooks.hook("render:html", (htmlContext, { event }) => {
    tryUseI18nContext(event);
  });
});

// src/runtime/server/dev-error/index.ts
/** Base path the dev server owning the channel serves it at. */
const ERROR_CHANNEL_ENV$1 = "NUXT_DEV_ERROR_CHANNEL";
/** `BroadcastChannel` name reports are forwarded on. */
const ERROR_CHANNEL_BROADCAST$1 = "nuxt:dev:error";
const CHANNEL_KEY = Symbol.for("nuxt:dev:error-channel");
let isForwarding = () => false;
/**
* Whether reports are forwarded to a dev server in front rather than served from here.
* Read when the channel is first used, not when this module loads.
*/
function setErrorChannelForwarding(forward) {
	isForwarding = forward;
}
/** The live error channel, forwarding to the dev server in front when there is one. */
function useErrorChannel$1() {
	const store = globalThis;
	store[CHANNEL_KEY] ||= isForwarding() ? Promise.resolve(createForwardingChannel()) : import('file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/my-bad/dist/channel/index.mjs').then(({ createChannel }) => createOwnedChannel(createChannel({ open: true })));
	return store[CHANNEL_KEY];
}
/** The `BroadcastChannel` reports travel between threads on, which must not hold the process open. It drops every message where none can be opened. */
function openErrorBroadcast() {
	try {
		const broadcast = new BroadcastChannel(ERROR_CHANNEL_BROADCAST$1);
		broadcast.unref?.();
		return broadcast;
	} catch {
		return {
			onmessage: null,
			postMessage() {},
			close() {}
		};
	}
}
function openBroadcast() {
	const broadcast = openErrorBroadcast();
	return {
		broadcast,
		post: (message) => broadcast.postMessage(message)
	};
}
/** A channel of this process, which also relays reports to and from other threads. */
function createOwnedChannel(channel) {
	const { broadcast, post } = openBroadcast();
	broadcast.onmessage = (event) => {
		const message = event.data;
		switch (message?.type) {
			case "nuxt:dev:error:report": return channel.setError(message.report);
			case "nuxt:dev:error:clear": return channel.clearError(message.id);
			case "nuxt:dev:error:log": return channel.log(message.entry);
			case "nuxt:dev:error:warning": return channel.warn(message.report);
			case "nuxt:dev:error:progress": return channel.progress(message.progress);
		}
	};
	post({ type: "nuxt:dev:error:sync" });
	return {
		...channel,
		setError(report, requestId, request) {
			channel.setError(report, requestId, request);
			post({
				type: "nuxt:dev:error:report",
				report,
				requestId,
				request
			});
		},
		clearError(id) {
			channel.clearError(id);
			post({
				type: "nuxt:dev:error:clear",
				id
			});
		},
		get current() {
			return channel.current;
		},
		get clients() {
			return channel.clients;
		},
		get history() {
			return channel.history;
		}
	};
}
function createForwardingChannel() {
	const { broadcast, post } = openBroadcast();
	let current;
	return {
		handler: () => Promise.resolve(false),
		fetchHandler: () => Promise.resolve(void 0),
		setError(report, requestId, request) {
			current = report;
			post({
				type: "nuxt:dev:error:report",
				report,
				requestId,
				request
			});
		},
		clearError(id) {
			current = void 0;
			post({
				type: "nuxt:dev:error:clear",
				id
			});
		},
		warn(report) {
			post({
				type: "nuxt:dev:error:warning",
				report
			});
		},
		log(entry) {
			post({
				type: "nuxt:dev:error:log",
				entry: {
					timestamp: Date.now(),
					...entry
				}
			});
		},
		progress(progress) {
			post({
				type: "nuxt:dev:error:progress",
				progress
			});
		},
		get current() {
			return current;
		},
		history: [],
		getReport: () => void 0,
		clients: 0,
		close() {
			broadcast.close();
		}
	};
}
/** Publish a report as the current error, paired with the request it came from. */
async function publishErrorReport$1(report, request) {
	const channel = await useErrorChannel$1();
	const description = request && `${request.method} ${request.url.pathname}${request.url.search}`;
	channel.setError(report, requestIdOf(request), description);
}
/** The id a dev server in front gave the request. */
function requestIdOf(request) {
	return request?.headers.get("x-nuxt-dev-request-id") ?? void 0;
}
/** Retire the current report, dismissing overlays showing it. */
async function clearErrorReport() {
	const channel = await useErrorChannel$1();
	if (channel.current) channel.clearError();
}
/** Stream a log entry to connected error pages and overlays. */
async function publishDevLog(entry) {
	(await useErrorChannel$1()).log(entry);
}
/** Report build progress. A `percent` of 100 retires the progress bar. */
async function publishDevProgress(progress) {
	(await useErrorChannel$1()).progress(progress);
}
const THROWN_CONTEXT = Symbol.for("nuxt:dev:context");
/** The component instance and route the app recorded on `error` when it threw. */
function thrownContext(error) {
	return (typeof error === "object" && error !== null && THROWN_CONTEXT in error ? error[THROWN_CONTEXT] : void 0) ?? {};
}
/**
* Build a report for an error raised while rendering. Must run before anything rewrites
* `error.stack`, as frames are mapped by the loaders rather than read off the stack.
*/
async function createErrorReport$1(error, options) {
	const [{ createReport, fsLoader }, { nuxtPreset }] = await Promise.all([import('file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/my-bad/dist/index.mjs'), import('file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/my-bad/dist/presets/index.mjs')]);
	return withoutEchoingCauses(await createReport(error, {
		cwd: options.cwd,
		loaders: [...options.loaders ?? [], fsLoader()],
		presets: [nuxtPreset()],
		context: {
			...thrownContext(error),
			...options.context
		}
	}));
}
/** Add the error overlay to an already-rendered page. */
async function withErrorOverlay(html, report, options) {
	const [{ injectOverlay }, { nuxtTheme }] = await Promise.all([import('file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/my-bad/dist/index.mjs'), import('file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/my-bad/dist/presets/index.mjs')]);
	return injectOverlay(html, report, {
		cwd: options.cwd,
		channel: options.channel,
		requestId: options.requestId,
		theme: nuxtTheme,
		tag: "nuxt-error-overlay",
		startMinimized: options.startMinimized
	});
}
/** Render a standalone error page, for when the app itself cannot render one. */
async function renderErrorPage(report, options) {
	const [{ renderPage }, { nuxtTheme }] = await Promise.all([import('file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/my-bad/dist/index.mjs'), import('file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/my-bad/dist/presets/index.mjs')]);
	return renderPage(report, {
		cwd: options.cwd,
		channel: options.channel,
		requestId: options.requestId,
		theme: nuxtTheme
	});
}
/** Render a report for the terminal. It carries its own icon and colours. */
async function renderErrorAnsi(report, options) {
	const { renderAnsi } = await import('file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/my-bad/dist/index.mjs');
	return renderAnsi(withoutEchoingCauses(report), { cwd: options.cwd });
}
/** Print a report to the terminal, falling back to the raw error when it cannot be rendered. */
async function printErrorReport(report, options) {
	const label = options.request ? ` [${options.request.method}] ${options.request.url.href}` : "";
	const rendered = await renderErrorAnsi(report, { cwd: options.cwd }).catch(() => void 0);
	if (rendered) console.log(`[request error]${label}\n\n${rendered}`);
	else console.error(`[request error]${label}\n\n`, options.error ?? report.message);
}
/**
* Build the reporter a builder hands the renderer as `onDevError`. The report is built on the
* stack as raised, so this must run before anything rewrites it.
*/
function createDevErrorReporter(options) {
	return async function observeDevError(error, event, observe = {}) {
		const request = event && options.requestInfo(event);
		const report = observe.expected ? void 0 : await options.createReport(error, event).catch(() => void 0);
		options.mapStack?.(error);
		if (!report) return;
		if (observe.publish !== false) await publishErrorReport$1(report, request).catch(() => {});
		if (observe.print !== false && !isForwarding()) await printErrorReport(report, {
			cwd: options.cwd,
			error,
			request
		});
		const requestId = requestIdOf(request);
		return {
			report,
			overlay: (html) => withErrorOverlay(html, report, {
				cwd: options.cwd,
				channel: options.channel(),
				requestId,
				startMinimized: true
			}),
			page: () => renderErrorPage(report, {
				cwd: options.cwd,
				channel: options.channel(),
				requestId
			})
		};
	};
}
/** A line of a code frame, as a compiler embeds one in a message. */
const FRAME_LINE_RE = /^[^\S\n]*(?:\d+[^\S\n]*[|:│]|[|│][^\S\n]*\^|\^)/m;
/**
* Drop causes that only repeat the report's own message, so the failure is read once. A
* wrapper is only dropped when all it adds is the code frame the report shows as a snippet.
*/
function withoutEchoingCauses(report) {
	const causes = report.causes.filter((cause) => !echoesMessage(cause.message, report.message)).map(withoutEchoingCauses);
	return causes.length === report.causes.length ? report : {
		...report,
		causes
	};
}
function echoesMessage(candidate, message) {
	if (candidate === message) return true;
	if (!candidate.startsWith(message)) return false;
	const remainder = candidate.slice(message.length);
	return remainder.trim() === "" || FRAME_LINE_RE.test(remainder);
}
/**
* Rewrite the module ids a transform failure names, and those of its causes, with
* `resolve`. A bundler names the module it was serving, which is not always a path.
*/
function resolveErrorPaths(error, resolve, seen = /* @__PURE__ */ new Set()) {
	if (typeof error !== "object" || error === null || seen.has(error)) return;
	seen.add(error);
	const candidate = error;
	if (typeof candidate.id === "string") candidate.id = resolve(candidate.id);
	if (candidate.loc && typeof candidate.loc.file === "string") candidate.loc.file = resolve(candidate.loc.file);
	resolveErrorPaths(candidate.cause, resolve, seen);
	if (Array.isArray(candidate.errors)) for (const nested of candidate.errors) resolveErrorPaths(nested, resolve, seen);
}
/** Flatten an error's `cause` chain into something the payload can carry. */
function serializeErrorCause(cause, depth = 0, seen = /* @__PURE__ */ new WeakSet()) {
	if (depth >= 10 || cause instanceof Error && seen.has(cause)) return;
	if (cause instanceof Error) {
		seen.add(cause);
		const nestedCause = serializeErrorCause(cause.cause, depth + 1, seen);
		return {
			name: cause.name,
			message: cause.message,
			...cause.stack && { stack: cause.stack },
			...nestedCause !== void 0 && { cause: nestedCause }
		};
	}
	if (cause === null || typeof cause === "string" || typeof cause === "number" || typeof cause === "boolean") return cause;
}

const NUXT_ERROR_CHANNEL = "/__nuxt_dev__/error";

// src/runtime/utils/error-channel.ts
const ERROR_CHANNEL_ENV = ERROR_CHANNEL_ENV$1;
const ERROR_CHANNEL_BROADCAST = ERROR_CHANNEL_BROADCAST$1;
/** Whether reports should be forwarded to the dev server that set {@link ERROR_CHANNEL_ENV}. */
function shouldForwardReports(env = process$1.env, mainThread = isMainThread) {
	return !!env[ERROR_CHANNEL_ENV] && !mainThread;
}
/** Base path pages should subscribe to. */
function getErrorChannelPath() {
	return process$1.env[ERROR_CHANNEL_ENV] || joinURL(useRuntimeConfig().app.baseURL, NUXT_ERROR_CHANNEL);
}
setErrorChannelForwarding(() => shouldForwardReports());
/** The live error channel, forwarding to the dev server in front when there is one. */
function useErrorChannel() {
	return useErrorChannel$1();
}
/** Publish a report as the current error, paired with the request it came from. */
function publishErrorReport(report, event) {
	return publishErrorReport$1(report, event && {
		method: event.method,
		url: getRequestURL(event),
		headers: event.headers
	});
}
/**
* Build a report for an error raised while rendering. Must run on the stack as it was
* raised, since frames are mapped through the SSR bundle's sourcemaps.
*/
function createErrorReport(error, event) {
	resolveErrorPaths(error, resolveTransformPath);
	const ssrSourceMaps = useNitroApp().ssrSourceMaps;
	return createErrorReport$1(error, {
		cwd: rootDir,
		loaders: ssrSourceMaps ? [compiledPositionLoader(ssrSourceMaps)] : [],
		context: { event }
	});
}
/**
* Resolve a bundler module id such as `/app.vue`, which reads as an absolute path but is
* relative to the environment root, to a file the developer can open.
*/
function resolveTransformPath(path) {
	const query = path.indexOf("?");
	const file = query === -1 ? path : path.slice(0, query);
	if (!file.startsWith("/") || existsSync(file)) return path;
	for (const root of [srcDir, rootDir]) {
		const resolved = join(root, file);
		if (existsSync(resolved)) return query === -1 ? resolved : resolved + path.slice(query);
	}
	return path;
}
/**
* Recover the generated position of frames the runner has already mapped. A frame mapped
* to its module but not to a line in it points at generated code, so counts as a vendor frame.
*/
function compiledPositionLoader(ssrSourceMaps) {
	return {
		name: "nuxt-compiled-position",
		map(frame) {
			if (!frame.file || frame.line === void 0 || frame.compiled) return;
			const compiled = ssrSourceMaps.getCompiledPosition?.(frame.file, frame.line, frame.column);
			if (compiled) return {
				...frame,
				compiled
			};
			return ssrSourceMaps.getCode(frame.file) !== void 0 && frame.line > lineCount(frame.file) ? {
				...frame,
				type: "vendor"
			} : void 0;
		},
		readCompiled: (file) => ssrSourceMaps.getCode(file)
	};
}
function lineCount(file) {
	try {
		return readFileSync(file, "utf8").split("\n").length;
	} catch {
		return Number.POSITIVE_INFINITY;
	}
}
/** Report an error raised while serving a request. */
const observeDevError = createDevErrorReporter({
	cwd: rootDir,
	channel: getErrorChannelPath,
	createReport: (error, event) => createErrorReport(error, event),
	requestInfo: (event) => ({
		method: event.method,
		url: getRequestURL(event),
		headers: event.headers
	})
});

// src/runtime/plugins/dev-errors.ts
/** Opens the error channel before anything requests a page. */
var dev_errors_default = (_nitroApp) => {
	useErrorChannel().catch(() => {});
	streamLogsToChannel();
};
/** Mirror what the server logs onto the error channel. */
function streamLogsToChannel() {
	let publishing = false;
	consola$1.addReporter({ log(logObject) {
		if (publishing) return;
		publishing = true;
		try {
			publishDevLog(toLogEntry(logObject)).catch(() => {});
		} finally {
			publishing = false;
		}
	} });
}
function toLogEntry(logObject) {
	const args = logObject.args ?? [];
	const message = formatWithOptions({
		colors: false,
		depth: 2
	}, ...args);
	return {
		level: toLogLevel(logObject),
		text: logObject.tag ? `[${logObject.tag}] ${message}` : message,
		timestamp: logObject.date ? new Date(logObject.date).getTime() : void 0
	};
}
const LOG_LEVELS = {
	trace: "trace",
	debug: "debug",
	verbose: "debug",
	info: "info",
	log: "log",
	warn: "warn",
	error: "error",
	fail: "error",
	fatal: "fatal"
};
/** Fallback for consola types whose names say nothing about severity. */
const LOG_LEVELS_BY_SEVERITY = [
	"error",
	"warn",
	"log",
	"info",
	"debug",
	"trace"
];
function toLogLevel(logObject) {
	if (LOG_LEVELS[logObject.type]) return LOG_LEVELS[logObject.type];
	const severity = Math.round(logObject.level);
	return LOG_LEVELS_BY_SEVERITY[Math.max(0, Math.min(severity, LOG_LEVELS_BY_SEVERITY.length - 1))] ?? "log";
}

const plugins = [
  route_rules_default,
dev_server_logs_default,
_Nt21vChmTD3yUJFD3W9D5Ev7bjZrBDRuVT2x7ZA1UQQ,
_9RvCDC87erfatAVEfLGv1H_gV57WFqfuntR6sf8Ug,
_D271gTVk5HrtYL5Rrm8qUpg6GzUKAKJrdFcyX9XI,
dev_errors_default,
_Z4Vm0BJMJeyU_KFYzGBgSOBoZ4JOQn4jYmko_KtDwU,
_LB91z6Ht2T49ncvhFWMKIA26eT4mdBc7tIFl06yLKKs
];

const assets = {};

function readAsset (id) {
  const serverDir = dirname$1(fileURLToPath(globalThis._importMeta_.url));
  // Public dirs might be pruned after the build (uploaded to a CDN, sourcemaps
  // stripped), so a manifest entry with no file behind it reads as absent, not broken.
  return promises.readFile(resolve$1(serverDir, assets[id].path)).catch((error) => {
    if (error?.code !== 'ENOENT') { throw error }
  })
}

const publicAssetBases = {"/_riththy/builds/meta/":{"maxAge":31536000},"/_riththy/builds/":{"maxAge":1},"/_fonts/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _yXwb91 = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  if (asset.encoding !== void 0) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  const data = readAsset(id);
  return typeof data?.then === "function" ? data.then(
    (resolved) => assertAssetData(event, resolved)
  ) : assertAssetData(event, data);
});
function assertAssetData(event, data) {
  if (data === null || data === void 0) {
    removeResponseHeader(event, "Cache-Control");
    throw createError({ statusCode: 404 });
  }
  return data;
}

const _messagesHandler = defineEventHandler(async (event) => {
  const locale = getRouterParam(event, "locale");
  if (!locale) {
    throw createError({ status: 400, message: "Locale not specified." });
  }
  const ctx = useI18nContext(event);
  if (ctx.localeConfigs && locale in ctx.localeConfigs === false) {
    throw createError({ status: 404, message: `Locale '${locale}' not found.` });
  }
  const messages = await ctx.loadMessages(locale);
  {
    for (const k of Object.keys(messages)) {
      warnMissedMessageFunctions(k, messages[k]);
    }
  }
  return messages;
});
const getCacheKey = (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-");
async function shouldBypassCache(event) {
  const locale = getRouterParam(event, "locale");
  if (locale == null) {
    return false;
  }
  const ctx = tryUseI18nContext(event) || await initializeI18nContext(event);
  return !ctx.localeConfigs?.[locale]?.cacheable;
}
const _cachedMessageLoader = defineCachedFunction(_messagesHandler, {
  name: "i18n:messages-internal",
  maxAge: -1 ,
  getKey: getCacheKey,
  shouldBypassCache
});
defineCachedEventHandler(_cachedMessageLoader, {
  name: "i18n:messages",
  maxAge: -1 ,
  swr: false,
  getKey: getCacheKey,
  shouldBypassCache
});
const __W5Ecr = _messagesHandler ;

const _RUucGA = eventHandler(async (event) => {
  const collection = getRouterParam(event, "collection") || event.path?.split("/")?.[2] || "";
  setHeader(event, "Content-Type", "text/plain");
  const data = await useStorage().getItem(`build:content:database.compressed.mjs`) || "";
  if (data) {
    const lineStart = `export const ${collection} = "`;
    const content = String(data).split("\n").find((line) => line.startsWith(lineStart));
    if (content) {
      return content.substring(lineStart.length, content.length - 1);
    }
  }
  return await import('file://D:/1_RITHY/1_PROJECT%20PROGRAMMING/PROJECTS/OFFICIAL%20PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/.nuxt/content/database.compressed.mjs').then((m) => m[collection]);
});

// ../nuxt/src/app/island-hash.ts
/**
* Strip Vue scoped-style attributes (`data-v-*`) from island props before hashing
* or rendering. Scoped-id markers leak in from parent components and are not part
* of the logical island input.
*
* Used before island props are serialized and sent to the island handler.
*
* @internal
*/
function filterIslandProps(props) {
	if (!props) return {};
	const out = {};
	for (const key in props) if (!key.startsWith("data-v-")) out[key] = props[key];
	return out;
}
/**
* Compute the `hashId` segment embedded in an island URL (`/__nuxt_island/<Name>_<hashId>.json`).
*
* The hash binds the response to the requested `(name, props, context, source)` tuple, so the
* server can reject requests whose URL hash does not match the supplied query/body. Use this
* from island clients if you need to ensure a hash stays in step with Nuxt's implementation.
*
* `props` may be passed either as the raw props object or as the JSON string that will be sent
* over the wire; the two produce the same hash when the round-trip is identity.
*
* @since 4.5.0
*/
function getIslandHash(input) {
	const props = typeof input.props === "string" ? parseSerializedProps(input.props) : input.props ?? {};
	return hash$1([
		input.name,
		props,
		input.context ?? {},
		input.source
	]).replace(/[-_]/g, "");
}
function parseSerializedProps(serializedProps) {
	try {
		return JSON.parse(serializedProps);
	} catch {
		return serializedProps;
	}
}

// src/runtime/utils/island-props.ts
/** @internal */
const MAX_ISLAND_BODY_BYTES = 65536;
/**
* Whether the bracket nesting of a JSON-ish string exceeds `maxDepth`, in a single linear
* pass. Brackets inside string values are ignored.
*
* @internal
*/
function exceedsMaxDepth(raw, maxDepth = 64) {
	let depth = 0;
	let inString = false;
	let escaped = false;
	for (let i = 0; i < raw.length; i++) {
		const ch = raw[i];
		if (inString) {
			if (escaped) escaped = false;
			else if (ch === "\\") escaped = true;
			else if (ch === "\"") inString = false;
			continue;
		}
		if (ch === "\"") inString = true;
		else if (ch === "{" || ch === "[") {
			if (++depth > maxDepth) return true;
		} else if (ch === "}" || ch === "]") {
			if (depth > 0) depth--;
		}
	}
	return false;
}
/** @internal */
function exceedsMaxBytes(raw, maxBytes = MAX_ISLAND_BODY_BYTES) {
	return Buffer.byteLength(raw, "utf8") > maxBytes;
}

// src/runtime/utils/island-head.ts
const TAG_CONFIG_KEYS = [
	"key",
	"tagPosition",
	"tagPriority"
];
/**
* Apply the `useHeadSafe` allowlist to resolved head input, returning input that renders
* the same tags when pushed without it.
*/
function toSafeHeadInput(input) {
	const { titleTemplate, ...rest } = input;
	const head = createHead({
		disableDefaults: true,
		plugins: [SafeInputPlugin]
	});
	head.push(rest, { _safe: true });
	const safe = {};
	if (typeof titleTemplate === "string" || titleTemplate === null) safe.titleTemplate = titleTemplate;
	for (const tag of resolveTags(head)) {
		if (tag.tag === "title") {
			safe.title = tag.textContent;
			continue;
		}
		const value = toInputValue(tag);
		if (tag.tag === "htmlAttrs" || tag.tag === "bodyAttrs" || tag.tag === "base") safe[tag.tag] = value;
		else (safe[tag.tag] ||= []).push(value);
	}
	return safe;
}
function toInputValue(tag) {
	const value = {};
	for (const [name, prop] of Object.entries(tag.props)) value[name] = prop instanceof Set ? [...prop].join(" ") : prop instanceof Map ? [...prop].map(([property, propertyValue]) => `${property}:${propertyValue}`).join(";") : prop;
	if (tag.textContent !== void 0) value.textContent = tag.textContent;
	for (const key of TAG_CONFIG_KEYS) if (tag[key] !== void 0) value[key] = tag[key];
	return value;
}

// src/runtime/utils/response.ts
/**
* The response the renderer builds, keeping its body as the renderer produced it.
*
* A real `Response` turns every body into a `ReadableStream`, which would send a rendered
* document as a chunked stream where nitro sends the string it was given. The renderer only
* reads the fields below back, so this describes just those.
*/
var NodeRenderResponse = class {
	body;
	status;
	statusText;
	headers;
	constructor(body, init) {
		this.body = body;
		this.status = init?.status || 200;
		this.statusText = init?.statusText || "";
		this.headers = init?.headers instanceof Headers ? init.headers : new Headers(init?.headers);
	}
};
/**
* The headers of a node response as the record nitro's `render:response` hook passes,
* read from and written to the node response itself. `set-cookie` is omitted, as it
* cannot be represented as one string. The proxy target is kept as a snapshot for
* `util.inspect`, which bypasses the traps.
*/
function createResponseHeaderRecord(res) {
	const read = (name) => {
		if (typeof name !== "string" || name.toLowerCase() === "set-cookie") return;
		const value = res.getHeader(name);
		if (value === void 0) return;
		return Array.isArray(value) ? value.join(", ") : String(value);
	};
	const snapshot = {};
	const sync = (name) => {
		const value = read(name);
		if (value === void 0) delete snapshot[name.toLowerCase()];
		else snapshot[name.toLowerCase()] = value;
	};
	for (const name of res.getHeaderNames()) sync(name);
	return new Proxy(snapshot, {
		get: (_, name) => read(name),
		has: (_, name) => read(name) !== void 0,
		set(_, name, value) {
			if (typeof name === "string") {
				if (value === void 0 || value === null) res.removeHeader(name);
				else res.setHeader(name, value);
				sync(name);
			}
			return true;
		},
		deleteProperty(_, name) {
			if (typeof name === "string") {
				res.removeHeader(name);
				sync(name);
			}
			return true;
		},
		ownKeys: () => res.getHeaderNames().filter((name) => name !== "set-cookie"),
		getOwnPropertyDescriptor(_, name) {
			const value = read(name);
			return value === void 0 ? void 0 : {
				value,
				writable: true,
				enumerable: true,
				configurable: true
			};
		}
	});
}

// src/runtime/server/renderer/cache.ts
function lazyCachedFunction(fn) {
	let res = null;
	return () => {
		if (res === null) res = fn().catch((err) => {
			res = null;
			throw err;
		});
		return res;
	};
}

// src/runtime/server/renderer/diagnostics.ts
const ansi = (open, close) => (s) => `\x1B[${open}m${s}\x1B[${close}m`;
const colors = {
	red: ansi(31, 39),
	yellow: ansi(33, 39),
	cyan: ansi(36, 39),
	gray: ansi(90, 39),
	bold: ansi(1, 22),
	dim: ansi(2, 22)
};
/**
* E8xxx
* SSR rendering diagnostics, sharing the range with the server runtime that
* hosts the renderer.
*/
const docsBase = (code) => `https://nuxt.com/docs/4.x/errors/${code.replace("NUXT_", "").toLowerCase()}`;
const rendererDiagnostics = /* #__PURE__ */ defineDiagnostics({
	docsBase,
	reporters: [/* @__PURE__ */ createConsoleReporter({ formatter: ansiFormatter(colors) } )],
	codes: {
		NUXT_E8001: {
			why: (p) => `\`render:html\` mutated \`body\`/\`bodyAppend\` while streaming (\`${p.path}\`). These fields are silently dropped because the body is about to stream.`,
			fix: "Use the `render:html:close` hook instead.",
			docs: false
		},
		NUXT_E8002: {
			why: (p) => `SSR streaming committed the response before render completed (\`${p.path}\`). The following mutations did not reach the client and were dropped:\n  - ${p.mutations}`,
			fix: (p) => `Move the mutation into a plugin (which runs before the shell is flushed), or opt this route out of streaming with \`routeRules: { '${p.path}': { streaming: false } }\` or the \`render:route\` hook.`,
			docs: false
		},
		NUXT_E8004: {
			why: "The server bundle is not available.",
			fix: "Ensure the Nuxt build completed successfully and the server entry was emitted by your builder.",
			docs: false
		},
		NUXT_E8006: {
			why: (p) => `The payload for \`${p.path}\` is ${p.size}, which will increase the page size and slow down hydration.${p.keys ? ` Largest payload keys:\n  - ${p.keys}` : ""}`,
			fix: "Use the `pick` or `transform` options of `useAsyncData`/`useFetch` to strip out data the client does not need.",
			docs: false
		},
		NUXT_E8007: {
			why: (p) => `\`${p.path}\` relies on client-side JavaScript, but \`features.noScripts: 'production'\` will strip scripts from this route in production:\n  - ${p.reasons}`,
			fix: "Remove the client-side dependency from this route, or scope script stripping with the `noScripts` route rule instead of enabling it globally."
		},
		NUXT_E8009: {
			why: (p) => `A page error interrupted the stream for \`${p.path}\`, and ${p.what} also failed while rendering the error response.\n  ${p.cause}`,
			fix: "Fix the page error first. If it keeps happening, report the failure below - the browser will show a blank or partial page instead of the error page."
		}
	}
});

// src/runtime/server/renderer/build-files.ts
const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const getServerEntry = () => Promise.resolve().then(function () { return entry; }).then((r) => r.default || r);
const getClientManifest = () => Promise.resolve().then(function () { return manifest$1; }).then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
/** Load the build artifacts for a set of renderer options, caching each of them on the returned object. */
function createBuildFiles(options) {
	const buildAssetsURL = (...path) => options.buildAssetsURL(...path);
	const getSSRRenderer = lazyCachedFunction(async () => {
		const createSSRApp = await getServerEntry();
		if (!createSSRApp) throw rendererDiagnostics.NUXT_E8004();
		const precomputed = void 0 ;
		const renderer = createRenderer(createSSRApp, {
			precomputed,
			manifest: await getClientManifest() ,
			renderToString: renderToString$1,
			buildAssetsURL
		});
		async function renderToString$1(input, context) {
			const html = await renderToString(input, context);
			if (process.env.NUXT_VITE_NODE_OPTIONS) renderer.rendererContext.updateManifest(await getClientManifest());
			return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
		}
		return renderer;
	});
	const getSPARenderer = lazyCachedFunction(async () => {
		const precomputed = void 0 ;
		const template = renderSPATemplate();
		const renderer = createRenderer(() => () => {}, {
			precomputed,
			manifest: await getClientManifest() ,
			renderToString: () => template,
			buildAssetsURL
		});
		const result = await renderer.renderToString({});
		const renderToString = (ssrContext) => {
			const config = ssrContext.runtimeConfig;
			ssrContext.modules ||= /* @__PURE__ */ new Set();
			ssrContext.payload.serverRendered = false;
			ssrContext.config = {
				public: config.public,
				app: config.app
			};
			return Promise.resolve(result);
		};
		return {
			rendererContext: renderer.rendererContext,
			renderToString
		};
	});
	return {
		getRenderer: (ssrContext) => getSPARenderer() ,
		getSSRRenderer,
		getServerApp: lazyCachedFunction(getServerEntry)
	};
}
function renderSPATemplate() {
	{
		`<${appSpaLoaderTag}${propsToString(appSpaLoaderAttrs)}>`;
		return APP_ROOT_OPEN_TAG + APP_ROOT_CLOSE_TAG + ("");
	}
}
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));

// src/runtime/server/renderer/instance.ts
/**
* Create the renderer state for a set of options.
*
* Called by `createNuxtRenderer()`; call it directly only to render against the same
* artifacts as a renderer created elsewhere (an island handler sharing the server bundle
* loaded for page renders), and pass the result to `createNuxtRenderer()`.
*/
function createRendererInstance(options) {
	return {
		options,
		...createBuildFiles(options)
	};
}

// src/runtime/server/renderer/runtime.ts
/** The event to pass to application code and to the render hooks. */
function appEvent(event) {
	return event["~app"] ?? event;
}
function getRequestState(event) {
	return event.context.nuxt;
}

// src/runtime/utils/renderer/options.ts
globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
/** The capabilities a nitropack v2 host provides to the Nuxt renderer. */
const rendererOptions = {
	runtimeConfig: (event) => useRuntimeConfig(appEvent(event)),
	buildAssetsURL,
	publicAssetsURL,
	getRouteRules: (event) => getRouteRules(appEvent(event)),
	hooks: () => useNitroApp().hooks,
	createResponse: (body, init) => new NodeRenderResponse(body, init),
	createError: (init) => createError({
		statusCode: init.status,
		statusMessage: init.statusText,
		message: init.statusText,
		data: init.data
	}),
	writeEarlyHints: (event, hints) => writeEarlyHints(appEvent(event), hints.link),
	onRenderSuccess: () => {
		Promise.resolve().then(function () { return errorChannel$1; }).then(({ clearErrorReport }) => clearErrorReport()).catch(() => {});
	} ,
	prerender: void 0
};
rendererOptions.onDevError = (error, event, options) => Promise.resolve().then(function () { return errorChannel$1; }).then(({ observeDevError }) => observeDevError(error, appEvent(event), options));
/**
* The renderer the page and island handlers share, so that both render against a single
* load of the server bundle and its manifest.
*/
const rendererInstance = createRendererInstance(rendererOptions);

// src/runtime/server/renderer/url.ts
/**
* The fragment of a request URL, avoiding the lazy URL parse that reading `hash` triggers when
* there is none. A fragment is never sent over the wire, so it can only appear on a URL the
* server constructed itself.
*/
function urlHash(url) {
	return url.href.includes("#") ? url.hash : "";
}
const PAYLOAD_BUILD_ID_PARAM = "_b";
/** Parse a request path without treating a leading `//` as an authority. */
function parseRequestPath(path) {
	return new URL("http://localhost" + path);
}
/** The page route a `_payload.json` (or `_payload.js`) request renders, without the build id param. */
function payloadRequestToRoute(path, filename = "_payload.json") {
	const payloadURL = parseRequestPath(path);
	const url = payloadURL.pathname.slice(0, -`/${filename}`.length) || "/";
	payloadURL.searchParams.delete(PAYLOAD_BUILD_ID_PARAM);
	return url + payloadURL.search;
}
const LEADING_SLASHES_RE = /^\/+/;
const TRAILING_SLASHES_RE = /\/*$/;
/** The same-origin `_payload.json` (or `_payload.js`) URL for a page route, tagged with the build id. */
function routeToPayloadURL(baseURL, path, buildId, filename = "_payload.json") {
	const request = parseRequestPath(path);
	const base = new URL(baseURL.replace(TRAILING_SLASHES_RE, "/"), "http://localhost");
	const route = request.pathname.replace(LEADING_SLASHES_RE, "").replace(TRAILING_SLASHES_RE, "/");
	const url = new URL("./" + (route === "/" ? "" : route) + filename, base);
	url.search = request.search;
	url.searchParams.set(PAYLOAD_BUILD_ID_PARAM, buildId);
	return URL.canParse(baseURL) ? url.href : url.pathname + url.search;
}
/** `url` with its path and query replaced by those of the request path `path`, keeping its origin. */
function withRequestPath(url, path) {
	const request = parseRequestPath(path);
	const target = new URL(url);
	target.pathname = request.pathname;
	target.search = request.search;
	return target;
}

// src/runtime/server/renderer/app.ts
new Set(NUXT_PRERENDER_NO_SSR_ROUTES);
function createServerHead() {
	return createHead(unheadOptions);
}
function createSSRContext(options, event) {
	const url = event.url.pathname + event.url.search + urlHash(event.url);
	const ssrContext = {
		url,
		event: appEvent(event),
		runtimeConfig: options.runtimeConfig(event),
		noSSR: true,
		head: createServerHead(),
		error: false,
		nuxt: void 0,
		payload: {},
		["~payloadReducers"]: Object.create(null),
		modules: /* @__PURE__ */ new Set()
	};
	return ssrContext;
}
/**
* Turn the response the renderer assembled into a web-standard `Response`, carrying the
* headers queued on the event alongside the ones the response names for itself.
*/
function returnRenderResponse(options, event, response) {
	const headers = new Headers(event.res.headers);
	for (const name in response.headers) headers.set(name, response.headers[name]);
	return options.createResponse(response.body ?? null, {
		status: response.statusCode ?? event.res.status,
		statusText: response.statusMessage ?? event.res.statusText,
		headers
	});
}
function setSSRError(ssrContext, error) {
	ssrContext.error = true;
	ssrContext.payload = { error };
	ssrContext.url = error.url;
}

// src/runtime/server/renderer/inline-styles.ts
async function renderInlineStyles(usedModules) {
	const styleMap = await getSSRStyles();
	const inlinedStyles = /* @__PURE__ */ new Set();
	const promises = [];
	for (const mod of usedModules) if (mod in styleMap && styleMap[mod]) promises.push(styleMap[mod]());
	for (const styles of await Promise.all(promises)) for (const style of styles) inlinedStyles.add(style);
	return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

// src/runtime/server/renderer/islands.ts
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
/**
* remove the root node from the html body
*/
function getServerComponentHTML(body) {
	return body.match(ROOT_NODE_REGEX)?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) return;
	const response = {};
	for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) response[name] = {
		...slot,
		fallback: ssrContext.teleports?.[`island-fallback=${name}`]
	};
	return response;
}
function getClientIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) return;
	const response = {};
	for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
		let html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
		if (!html && ssrContext.teleports) for (const [key, value] of Object.entries(ssrContext.teleports)) {
			const [, , componentUid] = key.match(SSR_CLIENT_TELEPORT_MARKER) ?? [];
			if (componentUid === clientUid) {
				html = value.replaceAll("<!--teleport start anchor-->", "");
				break;
			}
		}
		response[clientUid] = {
			...component,
			html,
			slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
		};
	}
	return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
	const entries = Object.entries(teleports);
	const slots = {};
	for (const [key, value] of entries) {
		const match = key.match(SSR_CLIENT_SLOT_MARKER);
		if (match) {
			const [, id, slot] = match;
			if (!slot || clientUid !== id) continue;
			slots[slot] = value;
		}
	}
	return slots;
}
const ISLAND_TELEPORT_ANCHOR_RE = / data-island-uid="([^"]*)" data-island-(component|slot)="([^"]*)"[^>]*>/g;
function replaceIslandTeleports(ssrContext, html) {
	const { teleports, islandContext } = ssrContext;
	if (islandContext || !teleports) return html;
	const contentsByAnchor = /* @__PURE__ */ new Map();
	const uids = /* @__PURE__ */ new Set();
	for (const key in teleports) {
		const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
		if (matchClientComp) {
			const [, uid, clientId] = matchClientComp;
			if (!uid || !clientId) continue;
			contentsByAnchor.set(`${uid};component;${clientId}`, teleports[key]);
			uids.add(uid);
			continue;
		}
		const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
		if (matchSlot) {
			const [, uid, slot] = matchSlot;
			if (!uid || !slot) continue;
			contentsByAnchor.set(`${uid};slot;${slot}`, teleports[key]);
			uids.add(uid);
		}
	}
	if (!contentsByAnchor.size) return html;
	const stitch = (html) => {
		const anchorRE = new RegExp(ISLAND_TELEPORT_ANCHOR_RE);
		let out = "";
		let cursor = 0;
		let m;
		while (contentsByAnchor.size && (m = anchorRE.exec(html))) {
			if (!uids.has(m[1])) continue;
			const anchor = `${m[1]};${m[2]};${m[3]}`;
			const content = contentsByAnchor.get(anchor);
			if (content === void 0) continue;
			contentsByAnchor.delete(anchor);
			const end = m.index + m[0].length;
			out += html.slice(cursor, end) + stitch(content);
			cursor = end;
		}
		return cursor ? out + html.slice(cursor) : html;
	};
	return stitch(html);
}

// src/runtime/server/renderer/dev-css.ts
const QUERY_RE = /\?.*$/;
const LEADING_RELATIVE_RE = /^(?:\.\.?\/)+/;
/**
* Whether a dev stylesheet belongs to one of the modules a render actually used.
*
* The dev CSS set is the builder's whole module graph, not a per-request subset, so
* consumers that must not leak unrelated styles (islands) narrow it with the modules
* Vue registered during their own render.
*/
function isStyleOfModule(file, modules) {
	const path = file.replace(QUERY_RE, "");
	for (const mod of modules) {
		const normalized = mod.replace(LEADING_RELATIVE_RE, "");
		if (normalized && (path === normalized || path.endsWith("/" + normalized))) return true;
	}
	return false;
}

// src/runtime/handlers/island.ts
const ISLAND_SUFFIX_RE = /\.json(?:\?.*)?$/;
const handler$1 = defineEventHandler(async (event) => {
	setResponseHeaders(event, {
		"content-type": "application/json;charset=utf-8",
		"x-powered-by": "Nuxt"
	});
	return toResponse(event, await renderIsland(event));
});
function toResponse(event, result) {
	return "raw" in result ? returnIslandResponse(event, result.raw) : result;
}
async function renderIsland(event) {
	const nitroApp = useNitroApp();
	const islandContext = await getIslandContext(event);
	const ssrContext = {
		...createSSRContext(rendererInstance.options, toRequestEvent(event)),
		islandContext,
		noSSR: false,
		url: islandContext.url
	};
	const renderer = await rendererInstance.getSSRRenderer();
	const renderResult = await (renderer.renderToString(ssrContext)).catch(async (err) => {
		if (ssrContext["~renderResponse"] && err?.message === "skipping render") return {};
		await ssrContext.nuxt?.hooks.callHook("app:error", err);
		throw err;
	});
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult
	});
	if (ssrContext["~renderResponse"]) {
		const response = ssrContext["~renderResponse"];
		if (response.statusCode && response.statusCode >= 400) throw createError({
			statusCode: response.statusCode,
			statusMessage: response.statusMessage
		});
		return { raw: response };
	}
	if (ssrContext.payload?.error) throw ssrContext.payload.error;
	const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
	if (inlinedStyles.length) ssrContext.head.push({ style: inlinedStyles });
	{
		const { styles } = getRequestDependencies(ssrContext, renderer.rendererContext);
		const link = [];
		const modules = ssrContext.modules ?? [];
		for (const resource of Object.values(styles)) {
			if ("inline" in getQuery(resource.file)) continue;
			if (isStyleOfModule(resource.file, modules)) link.push({
				rel: "stylesheet",
				href: renderer.rendererContext.buildAssetsURL(resource.file),
				crossorigin: ""
			});
		}
		if (link.length) ssrContext.head.push({ link });
	}
	const islandHead = {};
	for (const entry of ssrContext.head.entries.values()) {
		const input = walkResolver(entry.input, VueResolver);
		for (const [key, value] of Object.entries(entry.options?._safe ? toSafeHeadInput(input) : input)) {
			const currentValue = islandHead[key];
			if (Array.isArray(currentValue)) currentValue.push(...value);
			else islandHead[key] = value;
		}
	}
	const islandResponse = {
		id: islandContext.id,
		head: islandHead,
		html: getServerComponentHTML(renderResult.html),
		components: getClientIslandResponse(ssrContext),
		slots: getSlotIslandResponse(ssrContext)
	};
	await nitroApp.hooks.callHook("render:island", islandResponse, {
		event,
		islandContext
	});
	return islandResponse;
}
function returnIslandResponse(event, response) {
	for (const header in response.headers || {}) setResponseHeader(event, header, response.headers[header]);
	if (response.statusCode) setResponseStatus(event, response.statusCode, response.statusMessage);
	return response.body;
}
const ISLAND_PATH_PREFIX = "/__nuxt_island/";
const VALID_COMPONENT_NAME_RE = /^[a-z][\w.-]*$/i;
async function drainBody(event) {
	const stream = getRequestWebStream(event);
	if (!stream) return;
	const reader = stream.getReader();
	try {
		for (;;) {
			const { done } = await reader.read();
			if (done) break;
		}
	} finally {
		reader.releaseLock();
	}
}
async function readGuardedIslandBody(event) {
	const contentLength = Number(getRequestHeader(event, "content-length"));
	if (contentLength > 65536) {
		if (contentLength <= 4194304) await drainBody(event);
		throw createError({
			statusCode: 413,
			statusMessage: "Island request body too large"
		});
	}
	let received = 0;
	let raw = "";
	let overflowed = false;
	const stream = getRequestWebStream(event);
	if (stream) {
		const decoder = new TextDecoder();
		const reader = stream.getReader();
		try {
			for (;;) {
				const { done, value } = await reader.read();
				if (done) break;
				received += value.byteLength;
				if (received > 65536) {
					overflowed = true;
					continue;
				}
				raw += decoder.decode(value, { stream: true });
			}
		} finally {
			reader.releaseLock();
		}
		raw += decoder.decode();
	}
	if (overflowed) throw createError({
		statusCode: 413,
		statusMessage: "Island request body too large"
	});
	if (!raw) return {};
	if (exceedsMaxDepth(raw)) throw createError({
		statusCode: 400,
		statusMessage: "Island request body too deeply nested"
	});
	return destr$1(raw) || {};
}
async function getIslandContext(event) {
	let url = event.path || "";
	url.replace(/\?.*$/, "");
	if (!url.startsWith(ISLAND_PATH_PREFIX)) throw createError({
		statusCode: 400,
		statusMessage: "Invalid island request path"
	});
	const componentParts = url.substring(15).replace(ISLAND_SUFFIX_RE, "").split("_");
	const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
	const componentName = componentParts.join("_");
	if (!componentName || !VALID_COMPONENT_NAME_RE.test(componentName)) throw createError({
		statusCode: 400,
		statusMessage: "Invalid island component name"
	});
	const rawContext = event.method === "GET" ? getQuery$1(event) : await readGuardedIslandBody(event);
	const serializedProps = typeof rawContext?.props === "string" ? rawContext.props : "{}";
	if (exceedsMaxBytes(serializedProps)) throw createError({
		statusCode: 413,
		statusMessage: "Island request props too large"
	});
	if (exceedsMaxDepth(serializedProps)) throw createError({
		statusCode: 400,
		statusMessage: "Island request props too deeply nested"
	});
	const clientContext = {};
	if (rawContext && typeof rawContext === "object") {
		for (const key in rawContext) if (key !== "props") clientContext[key] = rawContext[key];
	}
	const parsed = destr$1(serializedProps);
	if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) throw createError({
		statusCode: 400,
		statusMessage: "Invalid island request props"
	});
	const parsedProps = filterIslandProps(parsed);
	const expectedHash = getIslandHash({
		name: componentName,
		props: parsedProps,
		context: clientContext
	});
	if (!hashId || hashId !== expectedHash) throw createError({
		statusCode: 400,
		statusMessage: "Invalid island request hash"
	});
	return {
		url: typeof rawContext?.url === "string" ? rawContext.url : "/",
		id: hashId,
		name: componentName,
		props: parsedProps,
		slots: {},
		components: {}
	};
}

async function decompressSQLDump(base64Str, compressionType = "gzip") {
  let binaryData;
  if (typeof Buffer !== "undefined") {
    const buffer = Buffer.from(base64Str, "base64");
    binaryData = Uint8Array.from(buffer);
  } else if (typeof atob !== "undefined") {
    binaryData = Uint8Array.from(atob(base64Str), (c) => c.charCodeAt(0));
  } else {
    throw new TypeError("No base64 decoding method available");
  }
  const response = new Response(new Blob([binaryData]));
  const decompressedStream = response.body?.pipeThrough(new DecompressionStream(compressionType));
  const text = await new Response(decompressedStream).text();
  return JSON.parse(text);
}

function refineContentFields(sql, doc) {
  const fields = findCollectionFields(sql);
  const item = { ...doc };
  for (const key in item) {
    if (fields[key] === "json" && item[key] && item[key] !== "undefined") {
      item[key] = JSON.parse(item[key]);
    }
    if (fields[key] === "boolean" && item[key] !== "undefined") {
      item[key] = Boolean(item[key]);
    }
  }
  for (const key in item) {
    if (item[key] === "NULL") {
      item[key] = void 0;
    }
  }
  return item;
}
function findCollectionFields(sql) {
  const table = sql.match(/FROM\s+(\w+)/);
  if (!table) {
    return {};
  }
  const info = contentManifest[getCollectionName(table[1])];
  return info?.fields || {};
}
function getCollectionName(table) {
  return table.replace(/^_content_/, "");
}

let db;
let _databasePromise;
async function getDatabase(config) {
  if (db) {
    return db;
  }
  if (!_databasePromise) {
    _databasePromise = (async () => {
      const { database, localDatabase } = config;
      {
        return localAdapter(refineDatabaseConfig(localDatabase));
      }
    })().catch((error) => {
      _databasePromise = void 0;
      throw error;
    });
  }
  db = await _databasePromise;
  return db;
}
async function loadDatabaseAdapter(config) {
  await getDatabase(config);
  return {
    all: async (sql, params = []) => {
      return db.prepare(sql).all(...params).then((result) => (result || []).map((item) => refineContentFields(sql, item)));
    },
    first: async (sql, params = []) => {
      return db.prepare(sql).get(...params).then((item) => item ? refineContentFields(sql, item) : item);
    },
    exec: async (sql, params = []) => {
      return db.prepare(sql).run(...params);
    }
  };
}
const checkDatabaseIntegrity = /* @__PURE__ */ new Map();
const integrityCheckPromise = /* @__PURE__ */ new Map();
async function checkAndImportDatabaseIntegrity(event, collection, config) {
  if (checkDatabaseIntegrity.get(collection) !== false) {
    checkDatabaseIntegrity.set(collection, false);
    if (!integrityCheckPromise.has(collection)) {
      const _integrityCheck = _checkAndImportDatabaseIntegrity(event, collection, checksums[collection], checksumsStructure[collection], config).then((isValid) => {
        checkDatabaseIntegrity.set(collection, !isValid);
      }).catch((error) => {
        console.error("Database integrity check failed", error);
        checkDatabaseIntegrity.set(collection, true);
        integrityCheckPromise.delete(collection);
      });
      integrityCheckPromise.set(collection, _integrityCheck);
    }
  }
  if (integrityCheckPromise.has(collection)) {
    await integrityCheckPromise.get(collection);
  }
}
async function _checkAndImportDatabaseIntegrity(event, collection, integrityVersion, structureIntegrityVersion, config) {
  const db2 = await loadDatabaseAdapter(config);
  const before = await db2.first(`SELECT * FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]).catch(() => null);
  if (before?.version && !String(before.version)?.startsWith(`${config.databaseVersion}--`)) {
    await db2.exec(`DROP TABLE IF EXISTS ${tables.info}`);
    before.version = "";
  }
  const unchangedStructure = before?.structureVersion === structureIntegrityVersion;
  if (before?.version) {
    if (before.version === integrityVersion) {
      if (before.ready) {
        return true;
      }
      await waitUntilDatabaseIsReady(db2, collection);
      return true;
    }
    await db2.exec(`DELETE FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]);
    if (!unchangedStructure) {
      await db2.exec(`DROP TABLE IF EXISTS ${tables[collection]}`);
    }
  }
  const dump = await loadDatabaseDump(event, collection).then(decompressSQLDump);
  const dumpLinesHash = dump.map((row) => row.split(" -- ").pop());
  let hashesInDb = /* @__PURE__ */ new Set();
  if (unchangedStructure) {
    const hashListFromTheDump = new Set(dumpLinesHash);
    const hashesInDbRecords = await db2.all(`SELECT __hash__ FROM ${tables[collection]}`).catch(() => []);
    hashesInDb = new Set(hashesInDbRecords.map((r) => r.__hash__));
    const hashesToDelete = hashesInDb.difference(hashListFromTheDump);
    if (hashesToDelete.size) {
      await db2.exec(`DELETE FROM ${tables[collection]} WHERE __hash__ IN (${Array(hashesToDelete.size).fill("?").join(",")})`, Array.from(hashesToDelete));
    }
  }
  await dump.reduce(async (prev, sql, index) => {
    await prev;
    const hash = dumpLinesHash[index];
    const statement = sql.substring(0, sql.length - hash.length - 4);
    if (unchangedStructure) {
      if (hash === "structure") {
        return Promise.resolve();
      }
      if (hashesInDb.has(hash)) {
        return Promise.resolve();
      }
    }
    await db2.exec(statement).catch((err) => {
      const message = err.message || "Unknown error";
      console.error(`Failed to execute SQL ${sql}: ${message}`);
    });
  }, Promise.resolve());
  const after = await db2.first(`SELECT version FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]).catch(() => ({ version: "" }));
  return after?.version === integrityVersion;
}
const REQUEST_TIMEOUT = 90;
async function waitUntilDatabaseIsReady(db2, collection) {
  let iterationCount = 0;
  let interval;
  await new Promise((resolve, reject) => {
    interval = setInterval(async () => {
      const row = await db2.first(`SELECT ready FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]).catch(() => ({ ready: true }));
      if (row?.ready) {
        clearInterval(interval);
        resolve(0);
      }
      if (iterationCount++ > REQUEST_TIMEOUT) {
        clearInterval(interval);
        reject(new Error("Waiting for another database initialization timed out"));
      }
    }, 1e3);
  }).catch((e) => {
    throw e;
  }).finally(() => {
    if (interval) {
      clearInterval(interval);
    }
  });
}
async function loadDatabaseDump(event, collection) {
  return await fetchDatabase(event, collection).catch((e) => {
    console.error("Failed to fetch compressed dump", e);
    return "";
  });
}
function refineDatabaseConfig(config) {
  if (config.type === "d1") {
    return { ...config, bindingName: config.bindingName || config.binding };
  }
  if (config.type === "sqlite") {
    const _config = { ...config };
    if (config.filename === ":memory:") {
      return { name: ":memory:" };
    }
    if ("filename" in config) {
      const filename = isAbsolute(config?.filename || "") || config?.filename === ":memory:" ? config?.filename : new URL(config.filename, globalThis._importMeta_.url).pathname;
      _config.path = process.platform === "win32" && filename.startsWith("/") ? filename.slice(1) : filename;
    }
    return _config;
  }
  if (config.type === "pglite") {
    return {
      dataDir: config.dataDir,
      // Pass through any other PGlite-specific options
      ...config
    };
  }
  return config;
}

const SQL_COUNT_REGEX = /^COUNT\((DISTINCT )?([a-z_]\w+|\*)\) as count$/i;
const MAX_SQL_QUERY_LENGTH = 1e5;
function isWordChar(code) {
  return code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95;
}
function parseSelectQuery(sql) {
  if (!sql.startsWith("SELECT ")) {
    return null;
  }
  let rest = sql;
  let offset;
  let limit;
  let order;
  {
    const m = / OFFSET \d+$/.exec(rest);
    if (m) {
      offset = m[0];
      rest = rest.slice(0, -offset.length);
    }
  }
  {
    const m = / LIMIT \d+$/.exec(rest);
    if (m) {
      limit = m[0];
      rest = rest.slice(0, -limit.length);
    }
  }
  if (rest.endsWith(" ASC")) {
    order = "ASC";
    rest = rest.slice(0, -4);
  } else if (rest.endsWith(" DESC")) {
    order = "DESC";
    rest = rest.slice(0, -5);
  } else {
    return null;
  }
  const orderByMarker = " ORDER BY ";
  const orderByIdx = rest.lastIndexOf(orderByMarker);
  if (orderByIdx === -1) {
    return null;
  }
  const orderBy = rest.slice(orderByIdx + orderByMarker.length);
  if (!orderBy.length) {
    return null;
  }
  rest = rest.slice(0, orderByIdx);
  const afterSelect = rest.slice("SELECT ".length);
  const fromMarker = " FROM ";
  const fromIdx = afterSelect.indexOf(fromMarker);
  if (fromIdx === -1) {
    return null;
  }
  const select = afterSelect.slice(0, fromIdx);
  const afterFrom = afterSelect.slice(fromIdx + fromMarker.length);
  let tableEnd = 0;
  while (tableEnd < afterFrom.length && isWordChar(afterFrom.charCodeAt(tableEnd))) {
    tableEnd += 1;
  }
  if (tableEnd === 0) {
    return null;
  }
  const from = afterFrom.slice(0, tableEnd);
  const afterTable = afterFrom.slice(tableEnd);
  let where;
  if (afterTable.length) {
    if (!afterTable.startsWith(" WHERE ")) {
      return null;
    }
    where = afterTable;
  }
  return { select, from, where, orderBy, order, limit, offset };
}
function assertSafeQuery(sql, collection) {
  if (!sql) {
    throw new Error("Invalid query: Query cannot be empty");
  }
  if (sql.length > MAX_SQL_QUERY_LENGTH) {
    throw new Error("Invalid query: Query exceeds maximum allowed length");
  }
  const cleanedupQuery = cleanupQuery(sql);
  if (cleanedupQuery !== sql) {
    throw new Error("Invalid query: SQL comments are not allowed");
  }
  const parsed = parseSelectQuery(sql);
  if (!parsed) {
    throw new Error("Invalid query: Query must be a valid SELECT statement with proper syntax");
  }
  const { select, from, where, orderBy, order, limit, offset } = parsed;
  const columns = select?.trim().split(", ") || [];
  if (columns.length === 1) {
    if (columns[0] !== "*" && !columns[0]?.match(SQL_COUNT_REGEX) && !columns[0]?.match(/^"[a-z_]\w+"$/i)) {
      throw new Error(`Invalid query: Column '${columns[0]}' has invalid format. Expected *, COUNT(), or a quoted column name`);
    }
  } else if (!columns.every((column) => column.match(/^"[a-z_]\w+"$/i))) {
    throw new Error("Invalid query: Multiple columns must be properly quoted and alphanumeric");
  }
  if (from !== `_content_${collection}`) {
    const collection2 = String(from || "").replace(/^_content_/, "");
    throw new Error(`Invalid query: Collection '${collection2}' does not exist`);
  }
  if (where && !isBuilderWhere(where)) {
    throw new Error("Invalid query: WHERE clause must match the query builder syntax");
  }
  const _order = (orderBy + " " + order).split(", ");
  if (!_order.every((column) => column.match(/^("[a-zA-Z_]+"|[a-zA-Z_]+) (ASC|DESC)$/))) {
    throw new Error("Invalid query: ORDER BY clause must contain valid column names followed by ASC or DESC");
  }
  if (limit !== void 0 && !limit.match(/^ LIMIT \d+$/)) {
    throw new Error("Invalid query: LIMIT clause must be a positive number");
  }
  if (offset !== void 0 && !offset.match(/^ OFFSET \d+$/)) {
    throw new Error("Invalid query: OFFSET clause must be a positive number");
  }
  return true;
}
function isBuilderWhere(where) {
  if (!where.startsWith(" WHERE ")) {
    return false;
  }
  const end = parseWhereBody(where, " WHERE ".length);
  return end === where.length;
}
function parseWhereBody(sql, i) {
  let next = parseGroup(sql, i);
  if (next < 0) {
    return -1;
  }
  while (sql.startsWith(" AND ", next)) {
    next = parseGroup(sql, next + " AND ".length);
    if (next < 0) {
      return -1;
    }
  }
  return next;
}
function parseGroup(sql, i) {
  if (sql[i] !== "(") {
    return -1;
  }
  const end = parseExpr(sql, i + 1);
  if (end < 0 || sql[end] !== ")") {
    return -1;
  }
  return end + 1;
}
function parseExpr(sql, i) {
  let next = parseItem(sql, i);
  if (next < 0) {
    return -1;
  }
  let joiner = "";
  while (sql.startsWith(" AND ", next) || sql.startsWith(" OR ", next)) {
    const found = sql.startsWith(" AND ", next) ? " AND " : " OR ";
    if (joiner && joiner !== found) {
      return -1;
    }
    joiner = found;
    next = parseItem(sql, next + found.length);
    if (next < 0) {
      return -1;
    }
  }
  return next;
}
function parseItem(sql, i) {
  if (sql[i] === "(") {
    return parseGroup(sql, i);
  }
  return parseLeaf(sql, i);
}
const WHERE_OPS = [
  { op: "IS NOT NULL", kind: "none" },
  { op: "IS NULL", kind: "none" },
  { op: "NOT BETWEEN", kind: "between" },
  { op: "BETWEEN", kind: "between" },
  { op: "NOT LIKE", kind: "value" },
  { op: "NOT IN", kind: "list" },
  { op: "LIKE", kind: "value" },
  { op: "IN", kind: "list" },
  { op: "<>", kind: "value" },
  { op: ">=", kind: "value" },
  { op: "<=", kind: "value" },
  { op: ">", kind: "value" },
  { op: "<", kind: "value" },
  { op: "=", kind: "value" }
];
function parseLeaf(sql, i) {
  const identEnd = parseQuotedIdent(sql, i);
  if (identEnd < 0 || sql[identEnd] !== " ") {
    return -1;
  }
  const matched = WHERE_OPS.find((candidate) => sql.startsWith(candidate.op, identEnd + 1));
  if (!matched) {
    return -1;
  }
  let j = identEnd + 1 + matched.op.length;
  if (matched.kind === "none") {
    return j;
  }
  if (sql[j] !== " ") {
    return -1;
  }
  j += 1;
  if (matched.kind === "list") {
    return parseValueList(sql, j);
  }
  if (matched.kind === "between") {
    const left = parseBuilderString(sql, j);
    if (left < 0 || !sql.startsWith(" AND ", left)) {
      return -1;
    }
    return parseBuilderString(sql, left + " AND ".length);
  }
  return parseBuilderString(sql, j);
}
function parseQuotedIdent(sql, i) {
  if (sql[i] !== '"') {
    return -1;
  }
  let j = i + 1;
  if (j >= sql.length || sql[j] === '"') {
    return -1;
  }
  while (j < sql.length && sql[j] !== '"') {
    j += 1;
  }
  return sql[j] === '"' ? j + 1 : -1;
}
function parseBuilderString(sql, i) {
  if (sql[i] !== "'") {
    return -1;
  }
  let j = i + 1;
  while (j < sql.length) {
    if (sql[j] === "'") {
      if (sql[j + 1] === "'") {
        j += 2;
        continue;
      }
      return j + 1;
    }
    j += 1;
  }
  return -1;
}
function parseValueList(sql, i) {
  if (sql[i] !== "(") {
    return -1;
  }
  let j = i + 1;
  if (sql[j] === ")") {
    return j + 1;
  }
  while (j < sql.length) {
    const end = parseBuilderString(sql, j);
    if (end < 0) {
      return -1;
    }
    if (sql.startsWith(", ", end)) {
      j = end + 2;
      continue;
    }
    return sql[end] === ")" ? end + 1 : -1;
  }
  return -1;
}
function cleanupQuery(query, options = {}) {
  let fence = null;
  let result = "";
  const stripAll = Boolean(options.removeString);
  const stripSingle = Boolean(options.removeSingleQuoted) && !stripAll;
  const strippingFence = (active) => {
    if (stripAll) {
      return true;
    }
    return stripSingle && active === "'";
  };
  for (let i = 0; i < query.length; i++) {
    const char = query[i];
    const nextChar = query[i + 1];
    if (fence) {
      if (fence === "[") {
        if (char === "]") {
          if (!strippingFence(fence)) {
            result += char;
          }
          fence = null;
        } else if (!strippingFence(fence)) {
          result += char;
        }
        continue;
      }
      if (char === fence) {
        if (nextChar === fence) {
          if (!strippingFence(fence)) {
            result += char + nextChar;
          }
          i += 1;
          continue;
        }
        if (!strippingFence(fence)) {
          result += char;
        }
        fence = null;
        continue;
      }
      if (!strippingFence(fence)) {
        result += char;
      }
      continue;
    }
    if (char === "'" || char === '"' || !options.standardQuotesOnly && (char === "`" || char === "[")) {
      fence = char;
      if (!strippingFence(fence)) {
        result += char;
      }
      continue;
    }
    if (char === "-" && nextChar === "-") {
      return result;
    }
    if (char === "/" && nextChar === "*") {
      i += 2;
      while (i < query.length && !(query[i] === "*" && query[i + 1] === "/")) {
        i += 1;
      }
      i += 2;
      continue;
    }
    result += char;
  }
  return result;
}

const JSON_WRAPPER_OVERHEAD = 16;
const MAX_BODY_BYTES = MAX_SQL_QUERY_LENGTH * 6 + JSON_WRAPPER_OVERHEAD;
const _a1AIop = eventHandler(async (event) => {
  const contentLength = Number(getHeader(event, "content-length") || 0);
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    throw createError({
      statusCode: 413,
      statusMessage: "Request body too large"
    });
  }
  const { sql } = await readBody(event);
  const collection = getRouterParam(event, "collection") || event.path?.split("/")?.[2] || "";
  assertSafeQuery(sql, collection);
  const conf = useRuntimeConfig().content;
  if (conf.integrityCheck) {
    await checkAndImportDatabaseIntegrity(event, collection, conf);
  }
  return (await loadDatabaseAdapter(conf)).all(sql);
});

const _lazy_3a_yVG = () => Promise.resolve().then(function () { return renderer$1; });
const _lazy_XqCuSQ = () => Promise.resolve().then(function () { return errorChannel; });

const handlers = [
  { route: '', handler: _yXwb91, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_3a_yVG, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_dev__/error/**', handler: _lazy_XqCuSQ, lazy: true, middleware: false, method: undefined },
  { route: '/_i18n/:hash/:locale/messages.json', handler: __W5Ecr, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/docs/sql_dump.txt', handler: _RUucGA, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/info/sql_dump.txt', handler: _RUucGA, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: handler$1, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/docs/query', handler: _a1AIop, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/info/query', handler: _a1AIop, lazy: false, middleware: false, method: undefined },
  { route: '/_fonts/**', handler: _lazy_3a_yVG, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_3a_yVG, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto.webcrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
let listener;
const upgradedSockets = /* @__PURE__ */ new Set();
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server.closeAllConnections?.();
  for (const socket of upgradedSockets) {
    socket.destroy();
  }
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const errorChannel$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ERROR_CHANNEL_BROADCAST: ERROR_CHANNEL_BROADCAST,
  ERROR_CHANNEL_ENV: ERROR_CHANNEL_ENV,
  clearErrorReport: clearErrorReport,
  createErrorReport: createErrorReport,
  getErrorChannelPath: getErrorChannelPath,
  observeDevError: observeDevError,
  publishDevLog: publishDevLog,
  publishDevProgress: publishDevProgress,
  publishErrorReport: publishErrorReport,
  serializeErrorCause: serializeErrorCause,
  shouldForwardReports: shouldForwardReports,
  useErrorChannel: useErrorChannel
}, Symbol.toStringTag, { value: 'Module' }));

// src/runtime/server/renderer/error-template.ts
const _messages = {
	"appName": "Nuxt",
	"status": 500,
	"statusText": "Internal server error",
	"description": "This page is temporarily unavailable.",
	"refresh": "Refresh this page"
};
const template = (messages) => {
	messages = {
		..._messages,
		...messages
	};
	return "<!DOCTYPE html><html lang=\"en\"><head><title>" + escapeHtml(messages.status) + " - " + escapeHtml(messages.statusText) + " | " + escapeHtml(messages.appName) + "</title><meta charset=\"utf-8\"><meta content=\"width=device-width,initial-scale=1,minimum-scale=1\" name=\"viewport\"><style>*,:after,:before{box-sizing:border-box;border-style:solid;border-width:0;border-color:var(--un-default-border-color,#e5e7eb);--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 #0000;--un-ring-shadow:0 0 #0000;--un-shadow-inset: ;--un-shadow:0 0 #0000;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:#93c5fd80;--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }:after,:before{--un-content:\"\"}html{-webkit-text-size-adjust:100%;tab-size:4;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}body{line-height:inherit;margin:0}h1,h2{font-size:inherit;font-weight:inherit}h1,h2,p{margin:0}.grid{display:grid}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-2{padding-left:.5rem;padding-right:.5rem}.text-center{text-align:center}.text-\\[56px\\]{font-size:56px}.text-2xl{font-size:1.5rem;line-height:2rem}.text-neutral-500{--un-text-opacity:1;color:rgb(115 115 115/var(--un-text-opacity))}.text-neutral-950{--un-text-opacity:1;color:rgb(10 10 10/var(--un-text-opacity))}.font-medium{font-weight:500}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-wide{letter-spacing:.025em}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media(prefers-color-scheme:dark){.dark\\:bg-neutral-950{--un-bg-opacity:1;background-color:rgb(10 10 10/var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media(width>=640px){.sm\\:text-\\[72px\\]{font-size:72px}.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}</style></head><body class=\"antialiased bg-white dark:bg-neutral-950 dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-neutral-950 tracking-wide\"><div class=\"max-w-520px text-center\"><h1 class=\"font-medium leading-none mb-4 sm:text-[72px] tabular-nums text-[56px]\">" + escapeHtml(messages.status) + "</h1><h2 class=\"font-semibold mb-2 sm:text-3xl text-2xl\">" + escapeHtml(messages.statusText) + "</h2><p class=\"mb-4 px-2 text-md text-neutral-500\">" + escapeHtml(messages.description) + "</p></div></body></html>";
};

const errorTemplate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template
}, Symbol.toStringTag, { value: 'Module' }));

const entry = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: viteNodeEntry_mjs
}, Symbol.toStringTag, { value: 'Module' }));

const manifest = () => viteNodeFetch.getManifest();

const manifest$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: manifest
}, Symbol.toStringTag, { value: 'Module' }));

const styles = {};
const inlinedCSS = {};

const styles$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: styles,
  inlinedCSS: inlinedCSS
}, Symbol.toStringTag, { value: 'Module' }));

// src/runtime/server/renderer/payload.ts
function renderPayloadResponse(ssrContext, event) {
	return {
		body: encodeForwardSlashes(stringify$1(splitPayload(ssrContext).payload, ssrContext["~payloadReducers"])) ,
		statusCode: event.res.status,
		statusMessage: event.res.statusText,
		headers: {
			"content-type": "application/json;charset=utf-8" ,
			"x-powered-by": "Nuxt"
		}
	};
}
function renderPayloadJsonScript(opts) {
	const contents = opts.data ? encodeForwardSlashes(stringify$1(opts.data, opts.ssrContext["~payloadReducers"])) : "";
	warnOnLargePayload(opts.ssrContext, opts.data, contents.length);
	const payload = {
		"type": "application/json",
		"innerHTML": contents,
		"data-nuxt-data": appId,
		"data-ssr": false
	};
	payload.id = "__NUXT_DATA__";
	if (opts.src) payload["data-src"] = opts.src;
	const config = uneval(opts.ssrContext.config);
	return [payload, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}` }];
}
/**
* Encode forward slashes as unicode escape sequences to prevent
* Google from treating them as internal links and trying to crawl them.
* @see https://github.com/nuxt/nuxt/issues/24175
*/
function encodeForwardSlashes(str) {
	return str.replaceAll("/", "\\u002F");
}
const PAYLOAD_SIZE_WARNING_BYTES = 102400;
const warnedPayloadURLs = /* @__PURE__ */ new Set();
function formatPayloadSize(bytes) {
	return `${(bytes / 1024).toFixed(1)} kB`;
}
function getPayloadKeySizes(data, reducers) {
	const sizes = [];
	for (const key in data) try {
		sizes.push([key, stringify$1(data[key], reducers).length]);
	} catch {}
	return sizes.sort((a, b) => b[1] - a[1]);
}
function warnOnLargePayload(ssrContext, data, size) {
	if (size <= PAYLOAD_SIZE_WARNING_BYTES || warnedPayloadURLs.has(ssrContext.url)) return;
	warnedPayloadURLs.add(ssrContext.url);
	const keys = getPayloadKeySizes(data?.data, ssrContext["~payloadReducers"]).slice(0, 5).map(([key, keySize]) => `\`${key}\` (${formatPayloadSize(keySize)})`).join("\n  - ");
	rendererDiagnostics.NUXT_E8006({
		path: ssrContext.url,
		size: formatPayloadSize(size),
		keys: keys || void 0
	});
}
function splitPayload(ssrContext) {
	const { data, prerenderedAt, prefetchLinks, ...initial } = ssrContext.payload;
	const payload = {
		data,
		prerenderedAt
	};
	if (prefetchLinks?.length) payload.prefetchLinks = prefetchLinks;
	return {
		initial: {
			...initial,
			prerenderedAt
		},
		payload
	};
}

// src/runtime/server/renderer/index.ts
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const PAYLOAD_FILENAME = "_payload.json" ;
/**
* Create a Nuxt SSR renderer, returning a web-standard handler for the requests a Nuxt
* app serves from its pages.
*
* Everything the renderer reads belongs to the renderer it was created for, so a bundle
* may create as many as it needs. Pass an instance from `createRendererInstance()` to
* render against the artifacts already loaded for another renderer.
*/
function createNuxtRenderer(optionsOrInstance) {
	const instance = "getRenderer" in optionsOrInstance ? optionsOrInstance : createRendererInstance(optionsOrInstance);
	return { fetch: (event) => fetch(instance, event) };
}
function fetch(instance, event) {
	const runtime = instance.options;
	if (runtime.renderIsland && event.url.pathname.startsWith("/__nuxt_island/")) return Promise.resolve(runtime.renderIsland(event));
	const isErrorRoute = event.url.pathname.startsWith("/__nuxt_error");
	if (isErrorRoute && !getRequestState(event)?.["~rendering-error"]) {
		return Promise.reject(runtime.createError({
			status: 404,
			statusText: "Page Not Found: /__nuxt_error"
		}));
	}
	const ssrError = isErrorRoute ? getQuery(event.url.href) : null;
	const render = () => renderRoute(instance, event, ssrError).then((response) => returnRenderResponse(runtime, event, response));
	const rendering = render();
	return rendering;
}
async function renderRoute(instance, event, ssrError) {
	const runtime = instance.options;
	const hooks = runtime.hooks();
	const hookEvent = appEvent(event);
	runtime.prerender?.payloadCache;
	const ssrContext = createSSRContext(runtime, event);
	ssrContext.head.push(appHead);
	if (ssrError) {
		const status = ssrError.status || ssrError.statusCode;
		if (status) ssrError.status = ssrError.statusCode = Number.parseInt(status);
		if (typeof ssrError.data === "string") try {
			ssrError.data = destr(ssrError.data);
		} catch {}
		if (typeof ssrError.cause === "string") ssrError.cause = destr(ssrError.cause);
		setSSRError(ssrContext, ssrError);
	}
	const routeOptions = runtime.getRouteRules(event);
	const NO_SCRIPTS = !!routeOptions.noScripts;
	if (routeOptions.ssr === false && true) ssrContext.noSSR = true;
	const _PAYLOAD_EXTRACTION = !ssrContext.noSSR && !ssrError && !!((routeOptions.isr || routeOptions.cache));
	const isRenderingPayload = (_PAYLOAD_EXTRACTION || routeOptions.prerender) && PAYLOAD_URL_RE.test(ssrContext.url);
	if (isRenderingPayload) {
		ssrContext.url = payloadRequestToRoute(ssrContext.url, PAYLOAD_FILENAME);
		event.url = withRequestPath(event.url, ssrContext.url);
		getPayloadCacheKey(ssrContext.url);
	}
	_PAYLOAD_EXTRACTION ? buildPayloadURL(ssrContext) : void 0;
	const renderer = await instance.getRenderer(ssrContext);
	const canStream = NUXT_SSR_STREAMING;
	const renderRouteContext = {
		canStream,
		prefersStream: false
	};
	await hooks.callHook("render:route", renderRouteContext, { event: hookEvent });
	const _rendered = await (renderer.renderToString(ssrContext)).catch(async (error) => {
		if ((ssrContext["~renderResponse"] || ssrContext._renderResponse) && error.message === "skipping render") return {};
		const _err = !ssrError && ssrContext.payload?.error || error;
		await ssrContext.nuxt?.hooks.callHook("app:error", _err);
		throw _err;
	});
	const inlinedStyles = [];
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult: _rendered
	});
	if (ssrContext["~renderResponse"] || ssrContext._renderResponse) return ssrContext["~renderResponse"] || ssrContext._renderResponse;
	if (ssrContext.payload?.error && !ssrError) throw ssrContext.payload.error;
	if (isRenderingPayload) {
		const response = renderPayloadResponse(ssrContext, event);
		return response;
	}
	if (!ssrError && !ssrContext.error) runtime.onRenderSuccess?.(event);
	const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
	pushNoScriptsHints(ssrContext, NO_SCRIPTS);
	if (inlinedStyles.length) ssrContext.head.push({ style: inlinedStyles });
	const link = [];
	const inlinedHrefs = [];
	for (const resource of Object.values(styles)) {
		if ("inline" in getQuery(resource.file)) continue;
		link.push({
			rel: "stylesheet",
			href: renderer.rendererContext.buildAssetsURL(resource.file),
			crossorigin: ""
		});
	}
	if (link.length) ssrContext.head.push({ link });
	const dependencyOptions = {
		exclude: ssrContext["~lazyHydratedModules"]?.size ? ssrContext["~lazyHydratedModules"] : void 0,
		scripts: !NO_SCRIPTS
	};
	const excludeHrefs = new Set(link.map((l) => l.href));
	for (const href of inlinedHrefs) excludeHrefs.add(href);
	for (const id of ssrContext["~neverHydratedModules"] ?? []) {
		const file = renderer.rendererContext.manifest?.[id]?.file;
		if (file) excludeHrefs.add(renderer.rendererContext.buildAssetsURL(file));
	}
	const hints = [];
	for (const l of getPreloadLinks(ssrContext, renderer.rendererContext, dependencyOptions)) if (!excludeHrefs.has(l.href)) hints.push(l);
	for (const l of getPrefetchLinks(ssrContext, renderer.rendererContext, dependencyOptions)) if (!excludeHrefs.has(l.href)) hints.push(l);
	if (hints.length) ssrContext.head.push({ link: hints });
	if (!NO_SCRIPTS) ssrContext.head.push({ script: renderPayloadJsonScript({
		ssrContext,
		data: stripInlineOnlyPayloadFields(ssrContext.payload)
	})   }, {
		tagPosition: "bodyClose",
		tagPriority: "high"
	});
	if (!routeOptions.noScripts) {
		const tagPosition = "head";
		ssrContext.head.push({ script: Object.values(scripts).map((resource) => ({
			type: resource.module ? "module" : null,
			src: renderer.rendererContext.buildAssetsURL(resource.file),
			defer: resource.module ? null : true,
			tagPosition,
			crossorigin: ""
		})) });
	}
	const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = renderSSRHead(ssrContext.head, renderSSRHeadOptions);
	const htmlContext = {
		htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
		head: normalizeChunks([headTags]),
		bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
		bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
		body: [replaceIslandTeleports(ssrContext, _rendered.html) , APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG],
		bodyAppend: [bodyTags]
	};
	await hooks.callHook("render:html", htmlContext, { event: hookEvent });
	return {
		body: renderHTMLDocument(htmlContext),
		statusCode: event.res.status,
		statusMessage: event.res.statusText,
		headers: {
			"content-type": "text/html;charset=utf-8",
			"x-powered-by": "Nuxt"
		}
	};
}
function getPayloadCacheKey(url) {
	const { pathname, search } = new URL(url, "http://localhost");
	return (pathname === "/" ? "/" : pathname.replace(/\/$/, "")) + (search ? encodeURIComponent(search) : "") + ".json";
}
/**
* Routes served without scripts navigate with full-page loads. This emits the
* declarative navigation hints that speed those up, on both the pages served
* without scripts (a blanket rule over same-origin links) and scripted pages
* that may link to them (rules scoped to the `noScripts` route patterns):
*
* - speculation rules, so supporting browsers prefetch and prerender the
*   target ahead of the navigation;
* - when view transitions are enabled, an opt-in to same-origin cross-document
*   view transitions, animating the navigation without a client runtime (the
*   client-side `startViewTransition` plugin is not shipped).
*
* Both tags are declarative and execute no JavaScript.
*/
function pushNoScriptsHints(ssrContext, noScripts) {
	if (noScripts) pushSpeculationRulesScript(ssrContext, NUXT_PAGE_PATTERNS.length ? NUXT_PAGE_PATTERNS : ["/*"]);
	else if (NUXT_NO_SCRIPTS_PATTERNS.length) pushSpeculationRulesScript(ssrContext, NUXT_NO_SCRIPTS_PATTERNS);
	else return;
}
function pushSpeculationRulesScript(ssrContext, patterns) {
	const rules = patterns.map((href_matches) => ({
		where: { href_matches },
		eagerness: "moderate"
	}));
	ssrContext.head.push({ script: [{
		tagPosition: "head",
		type: "speculationrules",
		innerHTML: {
			prefetch: rules,
			prerender: rules
		}
	}] });
}
function buildPayloadURL(ssrContext) {
	const baseURL = ssrContext.runtimeConfig.app.cdnURL || ssrContext.runtimeConfig.app.baseURL;
	return routeToPayloadURL(baseURL, ssrContext.url, ssrContext.runtimeConfig.app.buildId, PAYLOAD_FILENAME);
}
function normalizeChunks(chunks) {
	const result = [];
	for (const _chunk of chunks) {
		const chunk = _chunk?.trim();
		if (chunk) result.push(chunk);
	}
	return result;
}
function joinTags(tags) {
	return tags.join("");
}
function joinAttrs(chunks) {
	if (chunks.length === 0) return "";
	return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
	return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}
function stripInlineOnlyPayloadFields(payload) {
	if (!payload.prefetchLinks) return payload;
	const { prefetchLinks: _, ...rest } = payload;
	return rest;
}

const renderer = createNuxtRenderer(rendererInstance);
const handler = defineRenderHandler(async (event) => {
	const response = await renderer.fetch(toRequestEvent(event));
	for (const [name, value] of response.headers) {
		if (name === "set-cookie") continue;
		setResponseHeader(event, name, value);
	}
	return {
		body: response.body,
		statusCode: response.status,
		statusMessage: response.statusText || void 0,
		headers: createResponseHeaderRecord(event.node.res)
	};
});

const renderer$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: handler
}, Symbol.toStringTag, { value: 'Module' }));

// src/runtime/server/dev/peer.ts
/**
* Peer checks shared by the dev-only endpoints that disclose local state.
*
* @module nuxt/internal/dev/peer
*/
/**
* Whether the connected peer is a loopback address.
*
* This inspects the TCP peer address rather than request metadata, so a
* non-browser client cannot make itself look local by choosing its `Host`,
* `Origin`, `Referer` or `Sec-Fetch-*` headers. `x-forwarded-for` is ignored on
* purpose: only the address of the socket we are actually talking to counts.
*/
function isLoopbackAddress(address) {
	if (!address) return false;
	let normalized = address.trim().toLowerCase().replace(/^\[/, "").replace(/\]$/, "");
	const zoneIndex = normalized.indexOf("%");
	if (zoneIndex !== -1) normalized = normalized.slice(0, zoneIndex);
	if (normalized.startsWith("::ffff:")) normalized = normalized.slice(7);
	if (normalized === "::1") return true;
	return /^127\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(normalized);
}

// src/runtime/handlers/error-channel.ts
/**
* Serves the live error channel: the SSE stream, report lookups and "open in editor".
*
* Trust follows the socket, since a request's origin headers are forgeable over a direct
* connection.
*/
var error_channel_default = defineEventHandler(async (event) => {
	const channel = await useErrorChannel();
	const trusted = isLoopbackAddress(getRequestIP(event));
	return await channel.fetchHandler(toWebRequest(event), { trusted }) ?? new Response("Not Found", { status: 404 });
});

const errorChannel = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: error_channel_default
}, Symbol.toStringTag, { value: 'Module' }));
//# sourceMappingURL=index.mjs.map
