// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ik2hV":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"aenu9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _resultsViewJs = require("./views/resultsView.js");
var _resultsViewJsDefault = parcelHelpers.interopDefault(_resultsViewJs);
var _recipeViewJs = require("./views/recipeView.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _bookmarksViewJs = require("./views/bookmarksView.js");
var _bookmarksViewJsDefault = parcelHelpers.interopDefault(_bookmarksViewJs);
var _accordionJs = require("./module/accordion.js");
var _popupJs = require("./module/popup.js");
var _calcJs = require("./module/calc.js");
var _aos = require("aos");
var _aosDefault = parcelHelpers.interopDefault(_aos);
const controlRecipes = async function() {
    try {
        const id = window.location.hash.slice(1);
        const query = _modelJs.state.search.query;
        if (!id) return;
        // Update results view to mark selected search results
        (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultsPage(), query);
        (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
        (0, _bookmarksViewJsDefault.default).renderNumBookmarks(_modelJs.state.bookmarks);
        // Spinner works before load recipe
        (0, _recipeViewJsDefault.default).renderSpinner();
        // Load recipe
        await _modelJs.loadRecipe(id);
        // Render recipe
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
        // Init accordion
        (0, _accordionJs.accordion).init('.accordion');
        // Smooth scroll to recipe
        (0, _recipeViewJsDefault.default).smoothScroll();
    } catch (error) {
        // Render error message
        (0, _recipeViewJsDefault.default).renderError();
    }
};
const controlSearchResults = async function() {
    try {
        // Get search query from form input
        const query = (0, _searchViewJsDefault.default).getQuery();
        if (!query) return;
        // Spinner works before load search results
        (0, _resultsViewJsDefault.default).renderSpinner();
        // Load search results
        await _modelJs.loadSearchResults(query);
        // Render result
        (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultsPage(), query);
        // Render pagination
        (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
    } catch (error) {
        console.log(error);
        // Render error message
        (0, _resultsViewJsDefault.default).renderError();
    }
};
const controlPagination = function(page) {
    const query = _modelJs.state.search.query;
    // Render NEW result
    (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultsPage(page), query);
    // Render NEW pagination
    (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
};
const controlAddBookmark = function() {
    // Add/remove bookmark
    if (!_modelJs.state.recipe.bookmarked) _modelJs.addBookmark(_modelJs.state.recipe);
    else _modelJs.deleteBookmark(_modelJs.state.recipe.id);
    // Render bookmarks
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
    (0, _bookmarksViewJsDefault.default).renderNumBookmarks(_modelJs.state.bookmarks);
};
const controlBookmarks = function() {
    _modelJs.restoreBookmarks();
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
    (0, _bookmarksViewJsDefault.default).renderNumBookmarks(_modelJs.state.bookmarks);
};
const controlDeleteBookmarks = function() {
    _modelJs.clearBookmarks();
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
    (0, _bookmarksViewJsDefault.default).renderNumBookmarks(_modelJs.state.bookmarks);
};
const controlPopup = function() {
    (0, _popupJs.bookmarksPopup).init('.popup-bookmarks', '.open-bookmarks');
    (0, _popupJs.menuPopup).init('.popup-menu', '.open-menu');
};
const controlMenuResults = async function() {
    try {
        const query = (0, _calcJs.calcCalories).calcResult();
        if (!query) return;
        // Spinner works before load search results
        (0, _resultsViewJsDefault.default).renderSpinner();
        // Load search results
        await _modelJs.loadSearchResults(query);
        // Render result
        (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultsPage(), query);
        // Render pagination
        (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
    } catch (error) {
        (0, _resultsViewJsDefault.default).renderError();
    }
};
const init = function() {
    (0, _aosDefault.default).init();
    controlPopup();
    (0, _recipeViewJsDefault.default).addHandlerRender(controlRecipes);
    (0, _bookmarksViewJsDefault.default).addHandlerRender(controlBookmarks);
    (0, _bookmarksViewJsDefault.default).addHandlerDeleteBookmarks(controlDeleteBookmarks);
    (0, _recipeViewJsDefault.default).addHandlerAddBookmark(controlAddBookmark);
    (0, _searchViewJsDefault.default).addHandlerSearch(controlSearchResults);
    (0, _paginationViewJsDefault.default).addHandlerClick(controlPagination);
    (0, _calcJs.calcCalories).init();
    (0, _calcJs.calcCalories).addHandlerClick(controlMenuResults);
};
init();

},{"./model.js":"Y4A21","./views/searchView.js":"9OQAM","./views/resultsView.js":"cSbZE","./views/recipeView.js":"l60JC","./views/paginationView.js":"6z7bi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./module/accordion.js":"K5W82","./views/bookmarksView.js":"4Lqzq","./module/popup.js":"v4Jc8","./module/calc.js":"bmqdL","aos":"eRzTM"}],"Y4A21":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe);
parcelHelpers.export(exports, "loadSearchResults", ()=>loadSearchResults);
parcelHelpers.export(exports, "getSearchResultsPage", ()=>getSearchResultsPage);
parcelHelpers.export(exports, "restoreBookmarks", ()=>restoreBookmarks);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark);
parcelHelpers.export(exports, "deleteBookmark", ()=>deleteBookmark);
parcelHelpers.export(exports, "clearBookmarks", ()=>clearBookmarks);
var _configJs = require("./config.js");
var _helpersJs = require("./helpers.js");
const state = {
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: (0, _configJs.RES_PER_PAGE)
    },
    recipe: {},
    bookmarks: []
};
const createRecipeObj = function(recipe) {
    return {
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        servings: recipe.servings,
        cookingTime: recipe.readyInMinutes,
        sourceUrl: recipe.sourceUrl,
        ingredients: recipe.nutrition.ingredients,
        nutrition: recipe.nutrition.nutrients,
        summary: recipe.summary,
        instructions: recipe.instructions
    };
};
const loadRecipe = async function(id) {
    try {
        const data = await (0, _helpersJs.makeRequest)(`${(0, _configJs.API_URL)}recipes/${id}/information?apiKey=${(0, _configJs.API_KEY)}&includeNutrition=true`);
        state.recipe = createRecipeObj(data);
        if (state.bookmarks.some((bookmark)=>bookmark.id === +id)) state.recipe.bookmarked = true;
        else state.recipe.bookmarked = false;
    } catch (error) {
        throw error;
    }
};
const loadSearchResults = async function(query) {
    try {
        state.search.query = query;
        const request = typeof query !== 'number' ? `${0, _configJs.API_URL}recipes/complexSearch?apiKey=${0, _configJs.API_KEY}&query=${query}&number=100` : `${0, _configJs.API_URL}mealplanner/generate?apiKey=${0, _configJs.API_KEY}&timeFrame=day&targetCalories=${query}`;
        const data = await (0, _helpersJs.makeRequest)(`${request}`);
        const res = typeof query !== 'number' ? data.results : data.meals;
        state.search.results = res.map((recipe)=>{
            return {
                id: recipe.id,
                title: recipe.title,
                image: recipe.image
            };
        });
        state.search.page = 1;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
const getSearchResultsPage = function(page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage;
    const end = page * state.search.resultsPerPage;
    return state.search.results.slice(start, end);
};
const storeBookmarks = function() {
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};
const restoreBookmarks = function() {
    const storage = localStorage.getItem('bookmarks');
    if (storage) state.bookmarks = JSON.parse(storage);
};
const addBookmark = function(recipe) {
    // Add bookmark
    state.bookmarks.push(recipe);
    state.recipe.bookmarked = true;
    storeBookmarks();
};
const deleteBookmark = function(id) {
    // Delete bookmark
    const filterArr = state.bookmarks.filter((bookmark)=>bookmark.id !== id);
    state.bookmarks = filterArr;
    // Mark current recipe as NOT bookmarked
    if (id === state.recipe.id) state.recipe.bookmarked = false;
    storeBookmarks();
};
const clearBookmarks = function() {
    localStorage.clear('bookmarks');
    state.bookmarks = [];
};

},{"./config.js":"k5Hzs","./helpers.js":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports,__globalThis) {
// https://spoonacular.com/food-api
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "API_KEY", ()=>API_KEY);
parcelHelpers.export(exports, "RES_PER_PAGE", ()=>RES_PER_PAGE);
const API_URL = 'https://api.spoonacular.com/';
const API_KEY = '4c417e01ad3344be8aa24da0ea396019';
const RES_PER_PAGE = 5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hGI1E":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeRequest", ()=>makeRequest);
const makeRequest = async function(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (!res.ok) throw new Error(`${res.status} - ${res.statusText}. ${data.message}`);
        return data;
    } catch (error) {
        throw error;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9OQAM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    _parentElement = document.querySelector(".search-form");
    _clearInput() {
        this._parentElement.querySelector(".search-field").value = "";
    }
    getQuery() {
        const query = this._parentElement.querySelector(".search-field").value;
        this._clearInput();
        return query;
    }
    addHandlerSearch(handler) {
        this._parentElement.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cSbZE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reviewViewJs = require("./reviewView.js");
var _reviewViewJsDefault = parcelHelpers.interopDefault(_reviewViewJs);
class ResultsView extends (0, _reviewViewJsDefault.default) {
    _parentElement = document.querySelector('.results');
    _message = '';
    _errorMessage = 'No recipes found for your query! Please try again!';
}
exports.default = new ResultsView();

},{"./reviewView.js":"fQORg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fQORg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class ReviewView extends (0, _viewJsDefault.default) {
    _parentElement = '';
    _generateMarkup() {
        return `
      <h2>Search results for <span class="query">${this._createSearchMessage()}</span></h2>
      ${this._data.map(this._generateMarkupPreview).join(' ')}
    `;
    }
    _createSearchMessage() {
        return typeof this._query === 'number' ? `${this._query} kcal menu` : this._query;
    }
    _generateMarkupPreview(res) {
        const id = +window.location.hash.slice(1);
        return `
    <div data-aos="fade-in" data-aos-duration="300"
      data-aos-easing="ease-in-out">
      <a href="#${res.id}" class="recipe-block ${res.id === id ? 'active' : ''}">
    ${res.image ? `<div class="img-block">
      <img src="${res.image}" alt="${res.title}" />
    </div>
    ` : ``}
    <div class="text-block">
      <h3>${res.title}</h3>
    </div>    
          </a>
    </div>
         
    `;
    }
}
exports.default = ReviewView;

},{"./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5cUXS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    _data;
    _query;
    render(data, query = 'null') {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this._data = data;
        this._query = query;
        const markup = this._generateMarkup();
        this._clear();
        this._add(markup);
    }
    _clear() {
        this._parentElement.innerHTML = '';
    }
    _add(markup) {
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderSpinner() {
        const markup = `
      <div class="spinner">
          <i class="icon-spinner"></i>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderMessage(message = this._message) {
        const markup = `
          <div class="message">
            <i class="icon-inform"></i>
            <p>${message}</p>
          </div>
        `;
        this._clear();
        this._add(markup);
    }
    renderError(message = this._errorMessage) {
        const markup = `
          <div class="message error">
            <i class="icon-error"></i>
            <p>${message}</p>
          </div>
        `;
        this._clear();
        this._add(markup);
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l60JC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class RecipeView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector('.recipe');
    _message = '';
    _errorMessage = 'We could not find that recipe. Please try another one!';
    addHandlerRender(handler) {
        [
            'hashchange',
            'load'
        ].forEach((ev)=>window.addEventListener(ev, handler));
    }
    addHandlerAddBookmark(handler) {
        this._parentElement.addEventListener('click', function(e) {
            e.preventDefault();
            const btn = e.target.closest('.btn-bookmark');
            if (!btn) return;
            btn.classList.toggle('bookmarked');
            handler();
        });
    }
    _generateMarkup() {
        return `
      <div data-aos="fade-in" data-aos-duration="300" data-aos-easing="ease-in-out">
          <div class="img-block">
            <img src="${this._data.image}" alt="${this._data.title}" />
        </div>
        <h1>${this._data.title}</h1>
        <div class="info-block">
          <ul class="recipe-info">
              <li>
                    <i class="icon-people"></i>
                    ${this._data.servings} ${this._data.servings > 1 ? 'people' : 'person'}
              </li>
              ${this._data.cookingTime ? `<li><i class="icon-time"></i>${this._data.cookingTime} min</li>` : ''}
          </ul>
          <a href="#" class="btn-bookmark ${this._data.bookmarked ? 'bookmarked' : ''}"><i class="icon-bookmark-o"></i></a>
        </div>
        <ul class="accordion">
            <li>
                <a class="opener" href="#">Ingredients</a>
                <div class="slide">
                    <ul class="ingredients-list">
                    ${this._data.ingredients.map(this._generateMarkupIngredient).join(' ')}
                    </ul>
                </div>
            </li>
            <li>
                <a class="opener" href="#">Nutritional information</a>
                <div class="slide">
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Percent of daily needs</th>
                        </tr>
                        ${this._data.nutrition.map(this._generateMarkupNutrition).join(' ')}
                    </table>
                </div>
            </li>
            <li>
                <a class="opener" href="#">Summary</a>
                <div class="slide">
                  <p>${this._data.summary}</p>
                  ${this._data.instructions}
                </div>
            </li>
        </ul>
      </div>
`;
    }
    _generateMarkupIngredient(ing) {
        return `
        <li>${ing.amount} ${ing.unit} ${ing.name}</li>
    `;
    }
    _generateMarkupNutrition(nut) {
        return `
        <tr>
            <th>${nut.name}</th>
            <td>${nut.amount} ${nut.unit}</td>
            <td>${nut.percentOfDailyNeeds}%</td>
        </tr>
    `;
    }
    smoothScroll() {
        // Need to fix
        this._parentElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
}
exports.default = new RecipeView();

},{"./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6z7bi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class PaginationView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector('.pagination');
    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function(e) {
            e.preventDefault();
            const btn = e.target.closest('a');
            if (!btn) return;
            const page = +btn.dataset.page;
            handler(page);
        });
    }
    _generateMarkup() {
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        // Many pages
        if (numPages > 1) return `
        <li class="${curPage === 1 && numPages > 1 ? 'disabled' : ''}"><a href="#" data-page='${curPage - 1}'>Prev</a></li>
        <li>
            <div class="count-block">
                <span class="current-page">${curPage}</span>
                <span class="count-devider">/</span>
                <span class="total-page">${numPages}</span>
            </div>
        </li>
        <li class="${curPage === numPages && numPages > 1 ? 'disabled' : ''}"><a href="#" data-page='${curPage + 1}'>Next</a></li>
      `;
        // Only one page
        return '';
    }
}
exports.default = new PaginationView();

},{"./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"K5W82":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "accordion", ()=>accordion);
class Accordion {
    constructor(){
        this.holder = null;
        this.items = null;
        this.activeClass = 'active';
        this.hiddenClass = 'js-hidden';
        this.opener = '.opener';
        this.slide = '.slide';
        this.animSpeed = 300;
    }
    init(accordionSelector) {
        this.findElements(accordionSelector);
        this.hideSlides();
        this.addEventListeners();
    }
    findElements(accordionSelector) {
        this.holder = document.querySelector(accordionSelector);
        this.items = this.holder.querySelectorAll(this.slide);
    }
    addEventListeners() {
        this.holder.addEventListener('click', this.toggleSlide.bind(this));
    }
    hideSlides() {
        this.items.forEach((slider)=>slider.classList.add(this.hiddenClass));
    }
    toggleSlide(e) {
        e.preventDefault();
        const linksArr = this.holder.querySelectorAll(this.opener);
        const opener = e.target.closest(this.opener);
        if (!opener) return;
        if (opener.parentElement.classList.contains(this.activeClass)) linksArr.forEach((opener)=>{
            opener.parentElement.classList.remove(this.activeClass);
            this.slideUp(opener.nextElementSibling);
        });
        else {
            linksArr.forEach((opener)=>{
                opener.parentElement.classList.remove(this.activeClass);
            });
            opener.parentElement.classList.add(this.activeClass);
            this.slideDown(opener.nextElementSibling);
            linksArr.forEach((opener)=>{
                if (!opener.parentElement.classList.contains(this.activeClass)) this.slideUp(opener.nextElementSibling);
            });
        }
    }
    slideDown(slide) {
        slide.classList.remove(this.hiddenClass);
        let height = slide.offsetHeight;
        slide.style.overflow = 'hidden';
        slide.style.height = 0;
        slide.style.paddingTop = 0;
        slide.style.paddingBottom = 0;
        slide.offsetHeight;
        slide.style.transitionProperty = 'height, padding';
        slide.style.transitionDuration = this.animSpeed + 'ms';
        slide.style.height = height + 'px';
        slide.style.removeProperty('padding-top');
        slide.style.removeProperty('padding-bottom');
        window.setTimeout(()=>{
            slide.style.removeProperty('height');
            slide.style.removeProperty('overflow');
            slide.style.removeProperty('transition-duration');
            slide.style.removeProperty('transition-property');
        }, this.animSpeed);
    }
    slideUp(slide) {
        slide.style.transitionProperty = 'height, padding';
        slide.style.transitionDuration = this.animSpeed + 'ms';
        slide.style.height = slide.offsetHeight + 'px';
        slide.offsetHeight;
        slide.style.overflow = 'hidden';
        slide.style.height = 0;
        slide.style.paddingTop = 0;
        slide.style.paddingBottom = 0;
        setTimeout(()=>{
            slide.style.removeProperty('height');
            slide.style.removeProperty('padding-top');
            slide.style.removeProperty('padding-bottom');
            slide.style.removeProperty('overflow');
            slide.style.removeProperty('transition-duration');
            slide.style.removeProperty('transition-property');
            slide.classList.add(this.hiddenClass);
        }, this.animSpeed);
    }
}
const AccordionPlugin = {
    create: ()=>new Accordion()
};
const accordion = AccordionPlugin.create();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Lqzq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reviewViewJs = require("./reviewView.js");
var _reviewViewJsDefault = parcelHelpers.interopDefault(_reviewViewJs);
class BookmarksView extends (0, _reviewViewJsDefault.default) {
    _parentElement = document.querySelector('.popup-bookmarks .popup-content');
    _message = '';
    _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
    addHandlerRender(handler) {
        window.addEventListener('load', handler);
    }
    addHandlerDeleteBookmarks(handler) {
        this._parentElement.addEventListener('click', function(e) {
            e.preventDefault();
            const btn = e.target.closest('.btn-clear');
            const btnBookmark = document.querySelector('.recipe .btn-bookmark');
            if (!btn) return;
            btnBookmark.classList.toggle('bookmarked');
            handler();
        });
    }
    _generateMarkup() {
        return `
      <h2>Your bookmarks</h2>
      ${this._data.map(this._generateMarkupPreview).join(' ')}
      <div class="btn-holder">
        <button class="btn btn-clear">Delete all</button>     
      </div>
    `;
    }
    renderNumBookmarks(data) {
        const numHolder = document.querySelector('.open-bookmarks .num');
        numHolder.innerHTML = `${data.length ? data.length : ''}`;
    }
}
exports.default = new BookmarksView();

},{"./reviewView.js":"fQORg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"v4Jc8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bookmarksPopup", ()=>bookmarksPopup);
parcelHelpers.export(exports, "menuPopup", ()=>menuPopup);
class Popup {
    constructor(){
        this.holder = null;
        this.popup = null;
        this.btnOpen = null;
        this.btnClose = null;
        this.activeClass = 'popup-active';
    }
    init(popupSelector, btnOpenSelector, btnCloseSelector = '.btn-close') {
        this.findElements(popupSelector, btnOpenSelector, btnCloseSelector);
        this.hide();
        this.addEventListeners();
    }
    findElements(popupSelector, btnOpenSelector, btnCloseSelector) {
        this.holder = document.querySelector('body');
        this.popup = document.querySelector(popupSelector);
        this.btnOpen = document.querySelector(btnOpenSelector);
        this.btnClose = document.querySelector(btnCloseSelector);
    }
    addEventListeners() {
        this.btnOpen.addEventListener('click', this.showPopup.bind(this));
        this.popup.addEventListener('click', this.hidePopup.bind(this));
    }
    showPopup(e) {
        e.preventDefault();
        this.toggleClass();
        this.popup.style.cssText = 'opacity: 1; visibility: visible';
    }
    hidePopup(e) {
        if (e.target.closest(`.${this.btnClose.className}`) || e.target === this.popup) {
            this.toggleClass();
            this.hide();
        }
        this.changeWindowHash(e);
    }
    hide() {
        this.popup.style.cssText = 'opacity: 0; visibility: hidden';
    }
    toggleClass() {
        this.holder.classList.toggle(this.activeClass);
    }
    changeWindowHash(e) {
        const link = e.target.closest('.recipe-block');
        if (link) {
            window.location.hash = link.getAttribute('href');
            this.toggleClass();
            this.hide();
        }
    }
}
const PopupPlugin = {
    create: ()=>new Popup()
};
const bookmarksPopup = PopupPlugin.create();
const menuPopup = PopupPlugin.create();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bmqdL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcCalories", ()=>calcCalories);
var _popup = require("./popup");
class Calc {
    constructor(){
        // Calc calories
        this.holder = document.querySelector('.calc-form');
        this.inputs = null;
        this.sex = null;
        this.height = null;
        this.weight = null;
        this.age = null;
        this.activity = null;
        this.validate = false;
        // Slider
        this.slider = null;
        this.track = null;
        this.slides = null;
        this.slideWidth = null;
        this.btnPrev = null;
        this.btnNext = null;
        this.slideClass = '.slider-slide';
        this.disadledClass = 'disabled';
        this.curSlide = 0;
        this.maxSlides = null;
    }
    init() {
        this.findElements();
        // this.setCalc();
        this.setSlider();
        this.addEventListeners();
    }
    findElements() {
        // Calc
        this.inputs = this.holder.querySelectorAll('input');
        // Slider
        this.slider = this.holder.querySelector('.slider');
        this.track = this.slider.querySelector('.slider-track');
        this.slides = this.slider.querySelectorAll(this.slideClass);
        this.btnPrev = this.slider.querySelector('.btn-prev');
        this.btnNext = this.slider.querySelector('.btn-next');
        this.maxSlides = this.slides.length;
        this.slideWidth = this.slider.offsetWidth;
    }
    addEventListeners() {
        this.btnPrev.addEventListener('click', this.moveToPrevSlide.bind(this));
        this.btnNext.addEventListener('click', this.moveToNextSlide.bind(this));
        this.inputs.forEach((input)=>{
            input.addEventListener('change', this.validateData.bind(this));
            input.addEventListener('input', this.validateData.bind(this));
        });
        this.holder.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') e.preventDefault();
        });
    // this.holder.addEventListener('submit', this.calcResult.bind(this));
    }
    addHandlerClick(handler) {
        this.holder.addEventListener('submit', function(e) {
            e.preventDefault();
            handler();
            e.target.reset();
        });
    }
    validateData(e) {
        e.preventDefault();
        const inputName = e.target.getAttribute('name');
        const inputValue = e.target.value;
        const parent = e.target.closest('.form-block');
        if (e.target.type === 'number') {
            const value = +inputValue;
            const minNum = +e.target.min;
            const maxNum = +e.target.max;
            if (typeof value === 'number' && value >= minNum && value <= maxNum) {
                parent.classList.remove('error');
                this.validate = true;
                this.takeData(inputName, inputValue);
            } else {
                parent.classList.add('error');
                this.validate = false;
            }
        } else if (inputValue) {
            parent.classList.remove('error');
            this.validate = true;
            this.takeData(inputName, inputValue);
        }
        this.toggleClass();
        this.checkSlides();
        if (inputName === 'activity') this.holder.querySelector('.btn-submit').classList.remove(this.disadledClass);
    }
    calcResult() {
        let result;
        if (this.sex === 'male') result = Math.round((88.36 + 13.4 * this.weight + 4.8 * this.height - 5.7 * this.age) * this.activity);
        else result = Math.round((447.6 + 9.2 * this.weight + 3.1 * this.height - 4.3 * this.age) * this.activity);
        (0, _popup.menuPopup).hide();
        (0, _popup.menuPopup).toggleClass();
        setTimeout(()=>{
            this.curSlide = 0;
            this.setSlider();
        }, 1000);
        return result;
    }
    takeData(name, value) {
        switch(name){
            case 'sex':
                this.sex = value;
                break;
            case 'age':
                this.age = +value;
                break;
            case 'height':
                this.height = +value;
                break;
            case 'weight':
                this.weight = +value;
                break;
            case 'activity':
                this.activity = +value;
                break;
            default:
                console.log('Error');
                break;
        }
    }
    setSlider() {
        this.slides.forEach((slide)=>slide.style.width = `${this.slideWidth}px`);
        this.track.style.width = `${this.slideWidth * this.maxSlides}px`;
        this.moveToSlide(this.curSlide);
    }
    moveToSlide(num) {
        this.track.style.transform = `translate3d(${-this.slideWidth * num}px, 0, 0)`;
        this.checkData();
        this.checkSlides();
    }
    moveToNextSlide(e) {
        e.preventDefault();
        this.curSlide++;
        this.moveToSlide(this.curSlide);
    }
    moveToPrevSlide(e) {
        e.preventDefault();
        this.curSlide--;
        this.moveToSlide(this.curSlide);
    }
    checkSlides() {
        if (this.curSlide === this.maxSlides - 1) this.btnNext.classList.add(this.disadledClass);
        if (this.curSlide === 0) this.btnPrev.classList.add(this.disadledClass);
        else this.btnPrev.classList.remove(this.disadledClass);
    }
    toggleClass() {
        if (this.validate) this.btnNext.classList.remove(this.disadledClass);
        else this.btnNext.classList.add(this.disadledClass);
    }
    checkData() {
        const curEl = this.slides[this.curSlide];
        const elements = curEl.querySelectorAll('input');
        if (elements.length > 1) {
            const checkedEl = [];
            [
                ...elements
            ].forEach((el)=>{
                if (el.checked) checkedEl.push(el);
            });
            if (checkedEl.length > 0) {
                this.validate = true;
                if (checkedEl[0].name === 'activity') this.holder.querySelector('.btn-submit').classList.remove(this.disadledClass);
            } else this.validate = false;
        } else {
            const value = +elements[0].value;
            const min = +elements[0].min;
            const max = +elements[0].max;
            value >= min && value <= max ? this.validate = true : this.validate = false;
        }
        this.toggleClass();
    }
}
const CalcPlugin = {
    create: ()=>new Calc()
};
const calcCalories = CalcPlugin.create();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./popup":"v4Jc8"}],"eRzTM":[function(require,module,exports,__globalThis) {
var global = arguments[3];
!function(e, t) {
    module.exports = t();
}(this, function() {
    "use strict";
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, t = "Expected a function", n = NaN, o = "[object Symbol]", i = /^\s+|\s+$/g, a = /^[-+]0x[0-9a-f]+$/i, r = /^0b[01]+$/i, c = /^0o[0-7]+$/i, s = parseInt, u = "object" == typeof e && e && e.Object === Object && e, d = "object" == typeof self && self && self.Object === Object && self, l = u || d || Function("return this")(), f = Object.prototype.toString, m = Math.max, p = Math.min, b = function() {
        return l.Date.now();
    };
    function v(e, n, o) {
        var i, a, r, c, s, u, d = 0, l = !1, f = !1, v = !0;
        if ("function" != typeof e) throw new TypeError(t);
        function y(t) {
            var n = i, o = a;
            return i = a = void 0, d = t, c = e.apply(o, n);
        }
        function h(e) {
            var t = e - u;
            return void 0 === u || t >= n || t < 0 || f && e - d >= r;
        }
        function k() {
            var e = b();
            if (h(e)) return x(e);
            s = setTimeout(k, function(e) {
                var t = n - (e - u);
                return f ? p(t, r - (e - d)) : t;
            }(e));
        }
        function x(e) {
            return s = void 0, v && i ? y(e) : (i = a = void 0, c);
        }
        function O() {
            var e = b(), t = h(e);
            if (i = arguments, a = this, u = e, t) {
                if (void 0 === s) return function(e) {
                    return d = e, s = setTimeout(k, n), l ? y(e) : c;
                }(u);
                if (f) return s = setTimeout(k, n), y(u);
            }
            return void 0 === s && (s = setTimeout(k, n)), c;
        }
        return n = w(n) || 0, g(o) && (l = !!o.leading, r = (f = "maxWait" in o) ? m(w(o.maxWait) || 0, n) : r, v = "trailing" in o ? !!o.trailing : v), O.cancel = function() {
            void 0 !== s && clearTimeout(s), d = 0, i = u = a = s = void 0;
        }, O.flush = function() {
            return void 0 === s ? c : x(b());
        }, O;
    }
    function g(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
    }
    function w(e) {
        if ("number" == typeof e) return e;
        if (function(e) {
            return "symbol" == typeof e || function(e) {
                return !!e && "object" == typeof e;
            }(e) && f.call(e) == o;
        }(e)) return n;
        if (g(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = g(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(i, "");
        var u = r.test(e);
        return u || c.test(e) ? s(e.slice(2), u ? 2 : 8) : a.test(e) ? n : +e;
    }
    var y = function(e, n, o) {
        var i = !0, a = !0;
        if ("function" != typeof e) throw new TypeError(t);
        return g(o) && (i = "leading" in o ? !!o.leading : i, a = "trailing" in o ? !!o.trailing : a), v(e, n, {
            leading: i,
            maxWait: n,
            trailing: a
        });
    }, h = "Expected a function", k = NaN, x = "[object Symbol]", O = /^\s+|\s+$/g, j = /^[-+]0x[0-9a-f]+$/i, E = /^0b[01]+$/i, N = /^0o[0-7]+$/i, z = parseInt, C = "object" == typeof e && e && e.Object === Object && e, A = "object" == typeof self && self && self.Object === Object && self, q = C || A || Function("return this")(), L = Object.prototype.toString, T = Math.max, M = Math.min, S = function() {
        return q.Date.now();
    };
    function D(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
    }
    function H(e) {
        if ("number" == typeof e) return e;
        if (function(e) {
            return "symbol" == typeof e || function(e) {
                return !!e && "object" == typeof e;
            }(e) && L.call(e) == x;
        }(e)) return k;
        if (D(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = D(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(O, "");
        var n = E.test(e);
        return n || N.test(e) ? z(e.slice(2), n ? 2 : 8) : j.test(e) ? k : +e;
    }
    var $ = function(e, t, n) {
        var o, i, a, r, c, s, u = 0, d = !1, l = !1, f = !0;
        if ("function" != typeof e) throw new TypeError(h);
        function m(t) {
            var n = o, a = i;
            return o = i = void 0, u = t, r = e.apply(a, n);
        }
        function p(e) {
            var n = e - s;
            return void 0 === s || n >= t || n < 0 || l && e - u >= a;
        }
        function b() {
            var e = S();
            if (p(e)) return v(e);
            c = setTimeout(b, function(e) {
                var n = t - (e - s);
                return l ? M(n, a - (e - u)) : n;
            }(e));
        }
        function v(e) {
            return c = void 0, f && o ? m(e) : (o = i = void 0, r);
        }
        function g() {
            var e = S(), n = p(e);
            if (o = arguments, i = this, s = e, n) {
                if (void 0 === c) return function(e) {
                    return u = e, c = setTimeout(b, t), d ? m(e) : r;
                }(s);
                if (l) return c = setTimeout(b, t), m(s);
            }
            return void 0 === c && (c = setTimeout(b, t)), r;
        }
        return t = H(t) || 0, D(n) && (d = !!n.leading, a = (l = "maxWait" in n) ? T(H(n.maxWait) || 0, t) : a, f = "trailing" in n ? !!n.trailing : f), g.cancel = function() {
            void 0 !== c && clearTimeout(c), u = 0, o = s = i = c = void 0;
        }, g.flush = function() {
            return void 0 === c ? r : v(S());
        }, g;
    }, W = function() {};
    function P(e) {
        e && e.forEach(function(e) {
            var t = Array.prototype.slice.call(e.addedNodes), n = Array.prototype.slice.call(e.removedNodes);
            if (function e(t) {
                var n = void 0, o = void 0;
                for(n = 0; n < t.length; n += 1){
                    if ((o = t[n]).dataset && o.dataset.aos) return !0;
                    if (o.children && e(o.children)) return !0;
                }
                return !1;
            }(t.concat(n))) return W();
        });
    }
    function Y() {
        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    }
    var _ = {
        isSupported: function() {
            return !!Y();
        },
        ready: function(e, t) {
            var n = window.document, o = new (Y())(P);
            W = t, o.observe(n.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0
            });
        }
    }, B = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }, F = function() {
        function e(e, t) {
            for(var n = 0; n < t.length; n++){
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), I = Object.assign || function(e) {
        for(var t = 1; t < arguments.length; t++){
            var n = arguments[t];
            for(var o in n)Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
    }, K = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, G = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, J = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, Q = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
    function R() {
        return navigator.userAgent || navigator.vendor || window.opera || "";
    }
    var U = new (function() {
        function e() {
            B(this, e);
        }
        return F(e, [
            {
                key: "phone",
                value: function() {
                    var e = R();
                    return !(!K.test(e) && !G.test(e.substr(0, 4)));
                }
            },
            {
                key: "mobile",
                value: function() {
                    var e = R();
                    return !(!J.test(e) && !Q.test(e.substr(0, 4)));
                }
            },
            {
                key: "tablet",
                value: function() {
                    return this.mobile() && !this.phone();
                }
            },
            {
                key: "ie11",
                value: function() {
                    return "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style;
                }
            }
        ]), e;
    }()), V = function(e, t) {
        var n = void 0;
        return U.ie11() ? (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, {
            detail: t
        }) : n = new CustomEvent(e, {
            detail: t
        }), document.dispatchEvent(n);
    }, X = function(e) {
        return e.forEach(function(e, t) {
            return function(e, t) {
                var n = e.options, o = e.position, i = e.node, a = (e.data, function() {
                    e.animated && (function(e, t) {
                        t && t.forEach(function(t) {
                            return e.classList.remove(t);
                        });
                    }(i, n.animatedClassNames), V("aos:out", i), e.options.id && V("aos:in:" + e.options.id, i), e.animated = !1);
                });
                n.mirror && t >= o.out && !n.once ? a() : t >= o.in ? e.animated || (function(e, t) {
                    t && t.forEach(function(t) {
                        return e.classList.add(t);
                    });
                }(i, n.animatedClassNames), V("aos:in", i), e.options.id && V("aos:in:" + e.options.id, i), e.animated = !0) : e.animated && !n.once && a();
            }(e, window.pageYOffset);
        });
    }, Z = function(e) {
        for(var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);)t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
        return {
            top: n,
            left: t
        };
    }, ee = function(e, t, n) {
        var o = e.getAttribute("data-aos-" + t);
        if (void 0 !== o) {
            if ("true" === o) return !0;
            if ("false" === o) return !1;
        }
        return o || n;
    }, te = function(e, t) {
        return e.forEach(function(e, n) {
            var o = ee(e.node, "mirror", t.mirror), i = ee(e.node, "once", t.once), a = ee(e.node, "id"), r = t.useClassNames && e.node.getAttribute("data-aos"), c = [
                t.animatedClassName
            ].concat(r ? r.split(" ") : []).filter(function(e) {
                return "string" == typeof e;
            });
            t.initClassName && e.node.classList.add(t.initClassName), e.position = {
                in: function(e, t, n) {
                    var o = window.innerHeight, i = ee(e, "anchor"), a = ee(e, "anchor-placement"), r = Number(ee(e, "offset", a ? 0 : t)), c = a || n, s = e;
                    i && document.querySelectorAll(i) && (s = document.querySelectorAll(i)[0]);
                    var u = Z(s).top - o;
                    switch(c){
                        case "top-bottom":
                            break;
                        case "center-bottom":
                            u += s.offsetHeight / 2;
                            break;
                        case "bottom-bottom":
                            u += s.offsetHeight;
                            break;
                        case "top-center":
                            u += o / 2;
                            break;
                        case "center-center":
                            u += o / 2 + s.offsetHeight / 2;
                            break;
                        case "bottom-center":
                            u += o / 2 + s.offsetHeight;
                            break;
                        case "top-top":
                            u += o;
                            break;
                        case "bottom-top":
                            u += o + s.offsetHeight;
                            break;
                        case "center-top":
                            u += o + s.offsetHeight / 2;
                    }
                    return u + r;
                }(e.node, t.offset, t.anchorPlacement),
                out: o && function(e, t) {
                    window.innerHeight;
                    var n = ee(e, "anchor"), o = ee(e, "offset", t), i = e;
                    return n && document.querySelectorAll(n) && (i = document.querySelectorAll(n)[0]), Z(i).top + i.offsetHeight - o;
                }(e.node, t.offset)
            }, e.options = {
                once: i,
                mirror: o,
                animatedClassNames: c,
                id: a
            };
        }), e;
    }, ne = function() {
        var e = document.querySelectorAll("[data-aos]");
        return Array.prototype.map.call(e, function(e) {
            return {
                node: e
            };
        });
    }, oe = [], ie = !1, ae = {
        offset: 120,
        delay: 0,
        easing: "ease",
        duration: 400,
        disable: !1,
        once: !1,
        mirror: !1,
        anchorPlacement: "top-bottom",
        startEvent: "DOMContentLoaded",
        animatedClassName: "aos-animate",
        initClassName: "aos-init",
        useClassNames: !1,
        disableMutationObserver: !1,
        throttleDelay: 99,
        debounceDelay: 50
    }, re = function() {
        return document.all && !window.atob;
    }, ce = function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (ie = !0), ie && (oe = te(oe, ae), X(oe), window.addEventListener("scroll", y(function() {
            X(oe, ae.once);
        }, ae.throttleDelay)));
    }, se = function() {
        if (oe = ne(), de(ae.disable) || re()) return ue();
        ce();
    }, ue = function() {
        oe.forEach(function(e, t) {
            e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay"), ae.initClassName && e.node.classList.remove(ae.initClassName), ae.animatedClassName && e.node.classList.remove(ae.animatedClassName);
        });
    }, de = function(e) {
        return !0 === e || "mobile" === e && U.mobile() || "phone" === e && U.phone() || "tablet" === e && U.tablet() || "function" == typeof e && !0 === e();
    };
    return {
        init: function(e) {
            return ae = I(ae, e), oe = ne(), ae.disableMutationObserver || _.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), ae.disableMutationObserver = !0), ae.disableMutationObserver || _.ready("[data-aos]", se), de(ae.disable) || re() ? ue() : (document.querySelector("body").setAttribute("data-aos-easing", ae.easing), document.querySelector("body").setAttribute("data-aos-duration", ae.duration), document.querySelector("body").setAttribute("data-aos-delay", ae.delay), -1 === [
                "DOMContentLoaded",
                "load"
            ].indexOf(ae.startEvent) ? document.addEventListener(ae.startEvent, function() {
                ce(!0);
            }) : window.addEventListener("load", function() {
                ce(!0);
            }), "DOMContentLoaded" === ae.startEvent && [
                "complete",
                "interactive"
            ].indexOf(document.readyState) > -1 && ce(!0), window.addEventListener("resize", $(ce, ae.debounceDelay, !0)), window.addEventListener("orientationchange", $(ce, ae.debounceDelay, !0)), oe);
        },
        refresh: ce,
        refreshHard: se
    };
});

},{}]},["ik2hV","aenu9"], "aenu9", "parcelRequire94c2")

//# sourceMappingURL=index.e37f48ea.js.map
