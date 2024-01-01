// ==UserScript==
// @name              BetterYTM
// @namespace         https://github.com/Sv443/BetterYTM
// @version           1.1.0
// @description       Configurable layout and user experience improvements for YouTube Music
// @description:de-DE Konfigurierbare Layout- und Benutzererfahrungs-Verbesserungen für YouTube Music
// @description:en-US Configurable layout and user experience improvements for YouTube Music
// @description:en-UK Configurable layout and user experience improvements for YouTube Music
// @description:es-ES Mejoras de diseño y experiencia de usuario configurables para YouTube Music
// @description:fr-FR Améliorations de la mise en page et de l'expérience utilisateur configurables pour YouTube Music
// @description:hi-IN YouTube Music के लिए विन्यास और यूजर अनुभव में सुधार करने योग्य लेआउट और यूजर अनुभव सुधार
// @description:ja-JA YouTube Musicのレイアウトとユーザーエクスペリエンスの改善を設定可能にする
// @description:pt-BR Melhorias configuráveis no layout e na experiência do usuário para o YouTube Music
// @description:zh-CN 可配置的布局和YouTube Music的用户体验改进
// @homepageURL       https://github.com/Sv443/BetterYTM#readme
// @supportURL        https://github.com/Sv443/BetterYTM/issues
// @license           AGPL-3.0
// @author            Sv443
// @copyright         Sv443 (https://github.com/Sv443)
// @icon              https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/logo/logo_48.png
// @match             https://music.youtube.com/*
// @match             https://www.youtube.com/*
// @run-at            document-start
// @downloadURL       https://raw.githubusercontent.com/Sv443/BetterYTM/develop/dist/BetterYTM.user.js
// @updateURL         https://raw.githubusercontent.com/Sv443/BetterYTM/develop/dist/BetterYTM.user.js
// @connect           api.sv443.net
// @grant             GM.getValue
// @grant             GM.setValue
// @grant             GM.deleteValue
// @grant             GM.getResourceUrl
// @grant             GM.setClipboard
// @grant             unsafeWindow
// @noframes
// @resource          close      https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/icons/close.png
// @resource          logo       https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/logo/logo_48.png
// @resource          arrow_down https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/icons/arrow_down.svg
// @resource          delete     https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/icons/delete.svg
// @resource          error      https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/icons/error.svg
// @resource          globe      https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/icons/globe.svg
// @resource          help       https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/icons/help.svg
// @resource          lyrics     https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/icons/lyrics.svg
// @resource          skip_to    https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/icons/skip_to.svg
// @resource          spinner    https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/icons/spinner.svg
// @resource          discord    https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/external/discord.png
// @resource          github     https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/external/github.png
// @resource          greasyfork https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/external/greasyfork.png
// @resource          openuserjs https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/external/openuserjs.png
// @resource          tr-de_DE   https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/translations/de_DE.json
// @resource          tr-en_US   https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/translations/en_US.json
// @resource          tr-en_UK   https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/translations/en_UK.json
// @resource          tr-es_ES   https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/translations/es_ES.json
// @resource          tr-fr_FR   https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/translations/fr_FR.json
// @resource          tr-hi_IN   https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/translations/hi_IN.json
// @resource          tr-ja_JA   https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/translations/ja_JA.json
// @resource          tr-pt_BR   https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/translations/pt_BR.json
// @resource          tr-zh_CN   https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/translations/zh_CN.json
// ==/UserScript==
/*
▄▄▄                    ▄   ▄▄▄▄▄▄   ▄
█  █ ▄▄▄ █   █   ▄▄▄ ▄ ▄█ █  █  █▀▄▀█
█▀▀▄ █▄█ █▀  █▀  █▄█ █▀  █   █  █   █
█▄▄▀ ▀▄▄ ▀▄▄ ▀▄▄ ▀▄▄ █   █   █  █   █

        Made with ❤️ by Sv443
I welcome every contribution on GitHub!
  https://github.com/Sv443/BetterYTM
*/

/* Disclaimer: I am not affiliated with or endorsed by YouTube, Google, Alphabet, Genius or anyone else */
/* C&D this 🖕 */

(function () {
    'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol */


    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    var __defProp = Object.defineProperty;
    var __defProps = Object.defineProperties;
    var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
    var __spreadValues = (a, b) => {
      for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b)) {
          if (__propIsEnum.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
        }
      return a;
    };
    var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
    var __publicField = (obj, key, value) => {
      __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
      return value;
    };
    var __async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };

    // lib/math.ts
    function clamp(value, min, max) {
      return Math.max(Math.min(value, max), min);
    }
    function mapRange(value, range1min, range1max, range2min, range2max) {
      if (Number(range1min) === 0 && Number(range2min) === 0)
        return value * (range2max / range1max);
      return (value - range1min) * ((range2max - range2min) / (range1max - range1min)) + range2min;
    }
    function randomId(length = 16, radix = 16) {
      const arr = new Uint8Array(length);
      crypto.getRandomValues(arr);
      return Array.from(
        arr,
        (v) => mapRange(v, 0, 255, 0, radix).toString(radix).substring(0, 1)
      ).join("");
    }

    // lib/ConfigManager.ts
    var ConfigManager = class {
      /**
       * Creates an instance of ConfigManager to manage a user configuration that is cached in memory and persistently saved across sessions.  
       * Supports migrating data from older versions of the configuration to newer ones and populating the cache with default data if no persistent data is found.  
       *   
       * ⚠️ Requires the directives `@grant GM.getValue` and `@grant GM.setValue`  
       * ⚠️ Make sure to call {@linkcode loadData()} at least once after creating an instance, or the returned data will be the same as `options.defaultConfig`
       * 
       * @template TData The type of the data that is saved in persistent storage (will be automatically inferred from `config.defaultConfig`) - this should also be the type of the data format associated with the current `options.formatVersion`
       * @param options The options for this ConfigManager instance
      */
      constructor(options) {
        __publicField(this, "id");
        __publicField(this, "formatVersion");
        __publicField(this, "defaultConfig");
        __publicField(this, "cachedConfig");
        __publicField(this, "migrations");
        this.id = options.id;
        this.formatVersion = options.formatVersion;
        this.defaultConfig = options.defaultConfig;
        this.cachedConfig = options.defaultConfig;
        this.migrations = options.migrations;
      }
      /**
       * Loads the data saved in persistent storage into the in-memory cache and also returns it.  
       * Automatically populates persistent storage with default data if it doesn't contain any data yet.  
       * Also runs all necessary migration functions if the data format has changed since the last time the data was saved.
       */
      loadData() {
        return __async(this, null, function* () {
          try {
            const gmData = yield GM.getValue(`_uucfg-${this.id}`, this.defaultConfig);
            let gmFmtVer = Number(yield GM.getValue(`_uucfgver-${this.id}`));
            if (typeof gmData !== "string") {
              yield this.saveDefaultData();
              return this.defaultConfig;
            }
            if (isNaN(gmFmtVer))
              yield GM.setValue(`_uucfgver-${this.id}`, gmFmtVer = this.formatVersion);
            let parsed = JSON.parse(gmData);
            if (gmFmtVer < this.formatVersion && this.migrations)
              parsed = yield this.runMigrations(parsed, gmFmtVer);
            return this.cachedConfig = typeof parsed === "object" ? parsed : void 0;
          } catch (err) {
            yield this.saveDefaultData();
            return this.defaultConfig;
          }
        });
      }
      /**
       * Returns a copy of the data from the in-memory cache.  
       * Use {@linkcode loadData()} to get fresh data from persistent storage (usually not necessary since the cache should always exactly reflect persistent storage).
       */
      getData() {
        return this.deepCopy(this.cachedConfig);
      }
      /** Saves the data synchronously to the in-memory cache and asynchronously to the persistent storage */
      setData(data) {
        this.cachedConfig = data;
        return new Promise((resolve) => __async(this, null, function* () {
          yield Promise.all([
            GM.setValue(`_uucfg-${this.id}`, JSON.stringify(data)),
            GM.setValue(`_uucfgver-${this.id}`, this.formatVersion)
          ]);
          resolve();
        }));
      }
      /** Saves the default configuration data passed in the constructor synchronously to the in-memory cache and asynchronously to persistent storage */
      saveDefaultData() {
        return __async(this, null, function* () {
          this.cachedConfig = this.defaultConfig;
          return new Promise((resolve) => __async(this, null, function* () {
            yield Promise.all([
              GM.setValue(`_uucfg-${this.id}`, JSON.stringify(this.defaultConfig)),
              GM.setValue(`_uucfgver-${this.id}`, this.formatVersion)
            ]);
            resolve();
          }));
        });
      }
      /**
       * Call this method to clear all persistently stored data associated with this ConfigManager instance.  
       * The in-memory cache will be left untouched, so you may still access the data with {@linkcode getData()}  
       * Calling {@linkcode loadData()} or {@linkcode setData()} after this method was called will recreate persistent storage with the cached or default data.  
       *   
       * ⚠️ This requires the additional directive `@grant GM.deleteValue`
       */
      deleteConfig() {
        return __async(this, null, function* () {
          yield Promise.all([
            GM.deleteValue(`_uucfg-${this.id}`),
            GM.deleteValue(`_uucfgver-${this.id}`)
          ]);
        });
      }
      /** Runs all necessary migration functions consecutively - may be overwritten in a subclass */
      runMigrations(oldData, oldFmtVer) {
        return __async(this, null, function* () {
          if (!this.migrations)
            return oldData;
          let newData = oldData;
          const sortedMigrations = Object.entries(this.migrations).sort(([a], [b]) => Number(a) - Number(b));
          let lastFmtVer = oldFmtVer;
          for (const [fmtVer, migrationFunc] of sortedMigrations) {
            const ver = Number(fmtVer);
            if (oldFmtVer < this.formatVersion && oldFmtVer < ver) {
              try {
                const migRes = migrationFunc(newData);
                newData = migRes instanceof Promise ? yield migRes : migRes;
                lastFmtVer = oldFmtVer = ver;
              } catch (err) {
                console.error(`Error while running migration function for format version ${fmtVer}:`, err);
              }
            }
          }
          yield Promise.all([
            GM.setValue(`_uucfg-${this.id}`, JSON.stringify(newData)),
            GM.setValue(`_uucfgver-${this.id}`, lastFmtVer)
          ]);
          return newData;
        });
      }
      /** Copies a JSON-compatible object and loses its internal references */
      deepCopy(obj) {
        return JSON.parse(JSON.stringify(obj));
      }
    };

    // lib/dom.ts
    function getUnsafeWindow() {
      try {
        return unsafeWindow;
      } catch (e) {
        return window;
      }
    }
    function insertAfter(beforeElement, afterElement) {
      var _a;
      (_a = beforeElement.parentNode) == null ? void 0 : _a.insertBefore(afterElement, beforeElement.nextSibling);
      return afterElement;
    }
    function addParent(element, newParent) {
      const oldParent = element.parentNode;
      if (!oldParent)
        throw new Error("Element doesn't have a parent node");
      oldParent.replaceChild(newParent, element);
      newParent.appendChild(element);
      return newParent;
    }
    function addGlobalStyle(style) {
      const styleElem = document.createElement("style");
      styleElem.innerHTML = style;
      document.head.appendChild(styleElem);
    }
    function openInNewTab(href) {
      const openElem = document.createElement("a");
      Object.assign(openElem, {
        className: "userutils-open-in-new-tab",
        target: "_blank",
        rel: "noopener noreferrer",
        href
      });
      openElem.style.display = "none";
      document.body.appendChild(openElem);
      openElem.click();
      setTimeout(openElem.remove, 50);
    }
    function isScrollable(element) {
      const { overflowX, overflowY } = getComputedStyle(element);
      return {
        vertical: (overflowY === "scroll" || overflowY === "auto") && element.scrollHeight > element.clientHeight,
        horizontal: (overflowX === "scroll" || overflowX === "auto") && element.scrollWidth > element.clientWidth
      };
    }

    // lib/misc.ts
    function autoPlural(word, num) {
      if (Array.isArray(num) || num instanceof NodeList)
        num = num.length;
      return `${word}${num === 1 ? "" : "s"}`;
    }
    function pauseFor(time) {
      return new Promise((res) => {
        setTimeout(() => res(), time);
      });
    }
    function debounce(func, timeout = 300) {
      let timer;
      return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), timeout);
      };
    }
    function fetchAdvanced(_0) {
      return __async(this, arguments, function* (url, options = {}) {
        const { timeout = 1e4 } = options;
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeout);
        const res = yield fetch(url, __spreadProps(__spreadValues({}, options), {
          signal: controller.signal
        }));
        clearTimeout(id);
        return res;
      });
    }
    function insertValues(input, ...values) {
      return input.replace(/%\d/gm, (match) => {
        var _a, _b;
        const argIndex = Number(match.substring(1)) - 1;
        return (_b = (_a = values[argIndex]) != null ? _a : match) == null ? void 0 : _b.toString();
      });
    }
    function compress(input, compressionFormat, outputType = "base64") {
      return __async(this, null, function* () {
        const byteArray = typeof input === "string" ? new TextEncoder().encode(input) : input;
        const comp = new CompressionStream(compressionFormat);
        const writer = comp.writable.getWriter();
        writer.write(byteArray);
        writer.close();
        const buf = yield new Response(comp.readable).arrayBuffer();
        return outputType === "arrayBuffer" ? buf : ab2str(buf);
      });
    }
    function decompress(input, compressionFormat, outputType = "string") {
      return __async(this, null, function* () {
        const byteArray = typeof input === "string" ? str2ab(input) : input;
        const decomp = new DecompressionStream(compressionFormat);
        const writer = decomp.writable.getWriter();
        writer.write(byteArray);
        writer.close();
        const buf = yield new Response(decomp.readable).arrayBuffer();
        return outputType === "arrayBuffer" ? buf : new TextDecoder().decode(buf);
      });
    }
    function ab2str(buf) {
      return getUnsafeWindow().btoa(
        new Uint8Array(buf).reduce((data, byte) => data + String.fromCharCode(byte), "")
      );
    }
    function str2ab(str) {
      return Uint8Array.from(getUnsafeWindow().atob(str), (c) => c.charCodeAt(0));
    }

    // lib/SelectorObserver.ts
    var SelectorObserver = class {
      constructor(baseElement, options = {}) {
        __publicField(this, "enabled", false);
        __publicField(this, "baseElement");
        __publicField(this, "observer");
        __publicField(this, "observerOptions");
        __publicField(this, "listenerMap");
        this.baseElement = baseElement;
        this.listenerMap = /* @__PURE__ */ new Map();
        this.observer = new MutationObserver(() => this.checkAllSelectors());
        this.observerOptions = __spreadValues({
          childList: true,
          subtree: true
        }, options);
      }
      checkAllSelectors() {
        for (const [selector, listeners] of this.listenerMap.entries())
          this.checkSelector(selector, listeners);
      }
      checkSelector(selector, listeners) {
        var _a;
        if (!this.enabled)
          return;
        const baseElement = typeof this.baseElement === "string" ? document.querySelector(this.baseElement) : this.baseElement;
        if (!baseElement)
          return;
        const all = listeners.some((listener) => listener.all);
        const one = listeners.some((listener) => !listener.all);
        const allElements = all ? baseElement.querySelectorAll(selector) : null;
        const oneElement = one ? baseElement.querySelector(selector) : null;
        for (const options of listeners) {
          if (options.all) {
            if (allElements && allElements.length > 0) {
              options.listener(allElements);
              if (!options.continuous)
                this.removeListener(selector, options);
            }
          } else {
            if (oneElement) {
              options.listener(oneElement);
              if (!options.continuous)
                this.removeListener(selector, options);
            }
          }
          if (((_a = this.listenerMap.get(selector)) == null ? void 0 : _a.length) === 0)
            this.listenerMap.delete(selector);
        }
      }
      debounce(func, time) {
        let timeout;
        return function(...args) {
          clearTimeout(timeout);
          timeout = setTimeout(() => func.apply(this, args), time);
        };
      }
      /**
       * Starts observing the children of the base element for changes to the given {@linkcode selector} according to the set {@linkcode options}
       * @param selector The selector to observe
       * @param options Options for the selector observation
       * @param options.listener Gets called whenever the selector was found in the DOM
       * @param [options.all] Whether to use `querySelectorAll()` instead - default is false
       * @param [options.continuous] Whether to call the listener continuously instead of just once - default is false
       * @param [options.debounce] Whether to debounce the listener to reduce calls to `querySelector` or `querySelectorAll` - set undefined or <=0 to disable (default)
       */
      addListener(selector, options) {
        options = __spreadValues({ all: false, continuous: false, debounce: 0 }, options);
        if (options.debounce && options.debounce > 0 || this.observerOptions.defaultDebounce && this.observerOptions.defaultDebounce > 0) {
          options.listener = this.debounce(
            options.listener,
            options.debounce || this.observerOptions.defaultDebounce
          );
        }
        if (this.listenerMap.has(selector))
          this.listenerMap.get(selector).push(options);
        else
          this.listenerMap.set(selector, [options]);
        this.checkSelector(selector, [options]);
      }
      /** Disables the observation of the child elements */
      disable() {
        if (!this.enabled)
          return;
        this.enabled = false;
        this.observer.disconnect();
      }
      /**
       * Enables or reenables the observation of the child elements.
       * @param immediatelyCheckSelectors Whether to immediately check if all previously registered selectors exist (default is true)
       * @returns Returns true when the observation was enabled, false otherwise (e.g. when the base element wasn't found)
       */
      enable(immediatelyCheckSelectors = true) {
        const baseElement = typeof this.baseElement === "string" ? document.querySelector(this.baseElement) : this.baseElement;
        if (this.enabled || !baseElement)
          return false;
        this.enabled = true;
        this.observer.observe(baseElement, this.observerOptions);
        if (immediatelyCheckSelectors)
          this.checkAllSelectors();
        return true;
      }
      /** Returns whether the observation of the child elements is currently enabled */
      isEnabled() {
        return this.enabled;
      }
      /** Removes all listeners that have been registered with {@linkcode addListener()} */
      clearListeners() {
        this.listenerMap.clear();
      }
      /**
       * Removes all listeners for the given {@linkcode selector} that have been registered with {@linkcode addListener()}
       * @returns Returns true when all listeners for the associated selector were found and removed, false otherwise
       */
      removeAllListeners(selector) {
        return this.listenerMap.delete(selector);
      }
      /**
       * Removes a single listener for the given {@linkcode selector} and {@linkcode options} that has been registered with {@linkcode addListener()}
       * @returns Returns true when the listener was found and removed, false otherwise
       */
      removeListener(selector, options) {
        const listeners = this.listenerMap.get(selector);
        if (!listeners)
          return false;
        const index = listeners.indexOf(options);
        if (index > -1) {
          listeners.splice(index, 1);
          return true;
        }
        return false;
      }
      /** Returns all listeners that have been registered with {@linkcode addListener()} */
      getAllListeners() {
        return this.listenerMap;
      }
      /** Returns all listeners for the given {@linkcode selector} that have been registered with {@linkcode addListener()} */
      getListeners(selector) {
        return this.listenerMap.get(selector);
      }
    };

    // lib/translation.ts
    var trans = {};
    var curLang;
    function tr(key, ...args) {
      var _a;
      if (!curLang)
        return key;
      const trText = (_a = trans[curLang]) == null ? void 0 : _a[key];
      if (!trText)
        return key;
      if (args.length > 0 && trText.match(/%\d/)) {
        return insertValues(trText, ...args);
      }
      return trText;
    }
    tr.addLanguage = (language, translations) => {
      trans[language] = translations;
    };
    tr.setLanguage = (language) => {
      curLang = language;
    };
    tr.getLanguage = () => {
      return curLang;
    };

    const selectorMap = new Map();
    /**
     * Calls the {@linkcode listener} as soon as the {@linkcode selector} exists in the DOM.
     * Listeners are deleted when they are called once, unless `options.continuous` is set.
     * Multiple listeners with the same selector may be registered.
     * @param selector The selector to listen for
     * @param options Used for switching to `querySelectorAll()` and for calling the listener continuously
     * @template TElem The type of element that the listener will return as its argument (defaults to the generic type HTMLElement)
     * @deprecated To be replaced with UserUtils v3's SelectorObserver class
     */
    function onSelectorOld(selector, options) {
        let selectorMapItems = [];
        if (selectorMap.has(selector))
            selectorMapItems = selectorMap.get(selector);
        // I don't feel like dealing with intersecting types, this should work just fine at runtime
        // @ts-ignore
        selectorMapItems.push(options);
        selectorMap.set(selector, selectorMapItems);
        checkSelectorExists(selector, selectorMapItems);
    }
    function checkSelectorExists(selector, options) {
        const deleteIndices = [];
        options.forEach((option, i) => {
            try {
                const elements = option.all ? document.querySelectorAll(selector) : document.querySelector(selector);
                if ((elements !== null && elements instanceof NodeList && elements.length > 0) || elements !== null) {
                    // I don't feel like dealing with intersecting types, this should work just fine at runtime
                    // @ts-ignore
                    option.listener(elements);
                    if (!option.continuous)
                        deleteIndices.push(i);
                }
            }
            catch (err) {
                console.error(`Couldn't call listener for selector '${selector}'`, err);
            }
        });
        if (deleteIndices.length > 0) {
            const newOptsArray = options.filter((_, i) => !deleteIndices.includes(i));
            if (newOptsArray.length === 0)
                selectorMap.delete(selector);
            else {
                // once again laziness strikes
                // @ts-ignore
                selectorMap.set(selector, newOptsArray);
            }
        }
    }
    /**
     * Initializes a MutationObserver that checks for all registered selectors whenever an element is added to or removed from the `<body>`
     * @param options For fine-tuning what triggers the MutationObserver's checking function - `subtree` and `childList` are set to true by default
     */
    function initOnSelector(options = {}) {
        const observer = new MutationObserver(() => {
            for (const [selector, options] of selectorMap.entries())
                checkSelectorExists(selector, options);
        });
        observer.observe(document.body, Object.assign({ subtree: true, childList: true }, options));
    }

    var LogLevel;
    (function (LogLevel) {
        LogLevel[LogLevel["Debug"] = 0] = "Debug";
        LogLevel[LogLevel["Info"] = 1] = "Info";
    })(LogLevel || (LogLevel = {}));

    const modeRaw = "production";
    const branchRaw = "develop";
    /** The mode in which the script was built (production or development) */
    const mode = (modeRaw.match(/^{{.+}}$/) ? "production" : modeRaw);
    /** The branch to use in various URLs that point to the GitHub repo */
    const branch = (branchRaw.match(/^{{.+}}$/) ? "main" : branchRaw);
    /** Path to the GitHub repo */
    const repo = "Sv443/BetterYTM";
    /**
     * How much info should be logged to the devtools console
     * 0 = Debug (show everything) or 1 = Info (show only important stuff)
     */
    const defaultLogLevel = mode === "production" ? LogLevel.Info : LogLevel.Debug;
    /** Info about the userscript, parsed from the userscript header (tools/post-build.js) */
    const scriptInfo = {
        name: GM.info.script.name,
        version: GM.info.script.version,
        namespace: GM.info.script.namespace,
        buildNumber: "30d4062", // asserted as generic string instead of literal
    };

    var de_DE = {
    	name: "Deutsch (Deutschland)",
    	userscriptDesc: "Konfigurierbare Layout- und Benutzererfahrungs-Verbesserungen für YouTube Music",
    	authors: [
    		"Sv443"
    	]
    };
    var en_US = {
    	name: "English (United States)",
    	userscriptDesc: "Configurable layout and user experience improvements for YouTube Music",
    	authors: [
    		"Sv443"
    	]
    };
    var en_UK = {
    	name: "English (United Kingdom)",
    	userscriptDesc: "Configurable layout and user experience improvements for YouTube Music",
    	authors: [
    		"Sv443"
    	]
    };
    var es_ES = {
    	name: "Español (España)",
    	userscriptDesc: "Mejoras de diseño y experiencia de usuario configurables para YouTube Music",
    	authors: [
    		"Sv443"
    	]
    };
    var fr_FR = {
    	name: "Français (France)",
    	userscriptDesc: "Améliorations de la mise en page et de l'expérience utilisateur configurables pour YouTube Music",
    	authors: [
    		"Sv443"
    	]
    };
    var hi_IN = {
    	name: "हिंदी (भारत)",
    	userscriptDesc: "YouTube Music के लिए विन्यास और यूजर अनुभव में सुधार करने योग्य लेआउट और यूजर अनुभव सुधार",
    	authors: [
    		"Sv443"
    	]
    };
    var ja_JA = {
    	name: "日本語 (日本)",
    	userscriptDesc: "YouTube Musicのレイアウトとユーザーエクスペリエンスの改善を設定可能にする",
    	authors: [
    		"Sv443"
    	]
    };
    var pt_BR = {
    	name: "Português (Brasil)",
    	userscriptDesc: "Melhorias configuráveis no layout e na experiência do usuário para o YouTube Music",
    	authors: [
    		"Sv443"
    	]
    };
    var zh_CN = {
    	name: "中文（简化，中国）",
    	userscriptDesc: "可配置的布局和YouTube Music的用户体验改进",
    	authors: [
    		"Sv443"
    	]
    };
    var locales = {
    	de_DE: de_DE,
    	en_US: en_US,
    	en_UK: en_UK,
    	es_ES: es_ES,
    	fr_FR: fr_FR,
    	hi_IN: hi_IN,
    	ja_JA: ja_JA,
    	pt_BR: pt_BR,
    	zh_CN: zh_CN
    };

    /** Options that are applied to every SelectorObserver instance */
    const defaultObserverOptions = {
        defaultDebounce: 100,
    };
    const observers$1 = {};
    /** Call after DOM load to initialize all SelectorObserver instances */
    function initObservers() {
        observers$1.body = new SelectorObserver(document.body, Object.assign(Object.assign({}, defaultObserverOptions), { subtree: false }));
        observers$1.body.enable();
        const playerBarSelector = "ytmusic-app-layout ytmusic-player-bar.ytmusic-app";
        observers$1.playerBar = new SelectorObserver(playerBarSelector, Object.assign(Object.assign({}, defaultObserverOptions), { defaultDebounce: 200 }));
        observers$1.body.addListener(playerBarSelector, {
            listener: () => {
                console.log("#DBG-UU enabling playerBar observer");
                observers$1.playerBar.enable();
            },
        });
        const playerBarInfoSelector = `${playerBarSelector} .middle-controls .content-info-wrapper`;
        observers$1.playerBarInfo = new SelectorObserver(playerBarInfoSelector, Object.assign(Object.assign({}, defaultObserverOptions), { attributes: true, attributeFilter: ["title"] }));
        observers$1.playerBarInfo.addListener(playerBarInfoSelector, {
            listener: () => {
                console.log("#DBG-UU enabling playerBarTitle observer");
                observers$1.playerBarInfo.enable();
            },
        });
        // #DEBUG example: listen for title change:
        observers$1.playerBarInfo.addListener("yt-formatted-string.title", {
            continuous: true,
            listener: (titleElem) => {
                console.log("#DBG-UU >>>>> title changed", titleElem.title);
            },
        });
        emitInterface("bytm:observersReady");
    }
    /** Interface function for adding listeners to the already present observers */
    function interfaceAddListener(observerName, selector, options) {
        observers$1[observerName].addListener(selector, options);
    }

    const globalFuncs = {
        addObserverListener: interfaceAddListener,
        getResourceUrl,
        getSessionId,
        getVideoTime,
        t,
    };
    /** Initializes the BYTM interface */
    function initInterface() {
        const props = Object.assign({ mode,
            branch }, scriptInfo);
        for (const [key, value] of Object.entries(props))
            setGlobalProp(key, value);
        for (const [key, value] of Object.entries(globalFuncs))
            setGlobalProp(key, value);
        log("Initialized BYTM interface");
    }
    /** Sets a global property on the window.BYTM object */
    function setGlobalProp(key, value) {
        // use unsafeWindow so the properties are available outside of the userscript's scope
        const win = getUnsafeWindow();
        if (!win.BYTM)
            win.BYTM = {};
        win.BYTM[key] = value;
    }
    /** Emits an event on the BYTM interface */
    function emitInterface(type, ...data) {
        getUnsafeWindow().dispatchEvent(new CustomEvent(type, { detail: data[0] }));
    }

    //#SECTION logging
    let curLogLevel = LogLevel.Info;
    /** Common prefix to be able to tell logged messages apart and filter them in devtools */
    const consPrefix = `[${scriptInfo.name}]`;
`[${scriptInfo.name}/#DEBUG]`;
    /** Sets the current log level. 0 = Debug, 1 = Info */
    function setLogLevel(level) {
        if (curLogLevel !== level)
            console.log(consPrefix, "Setting log level to", level === 0 ? "Debug" : "Info");
        curLogLevel = level;
        setGlobalProp("logLevel", level);
    }
    /** Extracts the log level from the last item from spread arguments - returns 0 if the last item is not a number or too low or high */
    function getLogLevel(args) {
        const minLogLvl = 0, maxLogLvl = 1;
        if (typeof args.at(-1) === "number")
            return clamp(args.splice(args.length - 1)[0], minLogLvl, maxLogLvl);
        return LogLevel.Debug;
    }
    /**
     * Logs all passed values to the console, as long as the log level is sufficient.
     * @param args Last parameter is log level (0 = Debug, 1/undefined = Info) - any number as the last parameter will be stripped out! Convert to string if they shouldn't be.
     */
    function log(...args) {
        if (curLogLevel <= getLogLevel(args))
            console.log(consPrefix, ...args);
    }
    /**
     * Logs all passed values to the console as info, as long as the log level is sufficient.
     * @param args Last parameter is log level (0 = Debug, 1/undefined = Info) - any number as the last parameter will be stripped out! Convert to string if they shouldn't be.
     */
    function info(...args) {
        if (curLogLevel <= getLogLevel(args))
            console.info(consPrefix, ...args);
    }
    /** Logs all passed values to the console as a warning, no matter the log level. */
    function warn(...args) {
        console.warn(consPrefix, ...args);
    }
    /** Logs all passed values to the console as an error, no matter the log level. */
    function error(...args) {
        console.error(consPrefix, ...args);
    }
    //#SECTION video time
    const videoSelector = getDomain() === "ytm" ? "ytmusic-player video" : "#content ytd-player video";
    /**
     * Returns the current video time in seconds
     * Dispatches mouse movement events in case the video time can't be read from the video or progress bar elements (needs a prior user interaction to work)
     * @returns Returns null if the video time is unavailable or no user interaction has happened prior to calling in case of the fallback behavior being used
     */
    function getVideoTime() {
        return new Promise((res) => {
            const domain = getDomain();
            try {
                if (domain === "ytm") {
                    const vidElem = document.querySelector(videoSelector);
                    if (vidElem)
                        return res(Math.floor(vidElem.currentTime));
                    onSelectorOld("tp-yt-paper-slider#progress-bar tp-yt-paper-progress#sliderBar", {
                        listener: (pbEl) => res(!isNaN(Number(pbEl.value)) ? Math.floor(Number(pbEl.value)) : null)
                    });
                }
                else if (domain === "yt") {
                    const vidElem = document.querySelector(videoSelector);
                    if (vidElem)
                        return res(Math.floor(vidElem.currentTime));
                    // YT doesn't update the progress bar when it's hidden (contrary to YTM which never hides it)
                    ytForceShowVideoTime();
                    const pbSelector = ".ytp-chrome-bottom div.ytp-progress-bar[role=\"slider\"]";
                    let videoTime = -1;
                    const mut = new MutationObserver(() => {
                        // .observe() is only called when the element exists - no need to check for null
                        videoTime = Number(document.querySelector(pbSelector).getAttribute("aria-valuenow"));
                    });
                    const observe = (progElem) => {
                        mut.observe(progElem, {
                            attributes: true,
                            attributeFilter: ["aria-valuenow"],
                        });
                        if (videoTime >= 0 && !isNaN(videoTime)) {
                            res(Math.floor(videoTime));
                            mut.disconnect();
                        }
                        else
                            setTimeout(() => {
                                res(videoTime >= 0 && !isNaN(videoTime) ? Math.floor(videoTime) : null);
                                mut.disconnect();
                            }, 500);
                    };
                    onSelectorOld(pbSelector, { listener: observe });
                }
            }
            catch (err) {
                error("Couldn't get video time due to error:", err);
                res(null);
            }
        });
    }
    /**
     * Sends events that force the video controls to become visible for about 3 seconds.
     * This only works once, then the page needs to be reloaded!
     */
    function ytForceShowVideoTime() {
        const player = document.querySelector("#movie_player");
        if (!player)
            return false;
        const defaultProps = {
            // needed because otherwise YTM errors out - see https://github.com/Sv443/BetterYTM/issues/18#show_issue
            view: getUnsafeWindow(),
            bubbles: true,
            cancelable: false,
        };
        player.dispatchEvent(new MouseEvent("mouseenter", defaultProps));
        const { x, y, width, height } = player.getBoundingClientRect();
        const screenY = Math.round(y + height / 2);
        const screenX = x + Math.min(50, Math.round(width / 3));
        player.dispatchEvent(new MouseEvent("mousemove", Object.assign(Object.assign({}, defaultProps), { screenY,
            screenX, movementX: 5, movementY: 0 })));
        return true;
    }
    //#SECTION misc
    /**
     * Returns the current domain as a constant string representation
     * @throws Throws if script runs on an unexpected website
     */
    function getDomain() {
        if (location.hostname.match(/^music\.youtube/))
            return "ytm";
        else if (location.hostname.match(/youtube\./))
            return "yt";
        else
            throw new Error("BetterYTM is running on an unexpected website. Please don't tamper with the @match directives in the userscript header.");
    }
    /**
     * Returns the URL of a resource by its name, as defined in `assets/resources.json`, from GM resource cache - [see GM.getResourceUrl docs](https://wiki.greasespot.net/GM.getResourceUrl)
     * Falls back to a `raw.githubusercontent.com` URL or base64-encoded data URI if the resource is not available in the GM resource cache
     */
    function getResourceUrl(name) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let url = yield GM.getResourceUrl(name);
            if (!url || url.length === 0) {
                const resource = (_a = GM.info.script.resources) === null || _a === void 0 ? void 0 : _a[name].url;
                if (typeof resource === "string") {
                    const resourceUrl = new URL(resource);
                    const resourcePath = resourceUrl.pathname;
                    if (resourcePath)
                        return `https://raw.githubusercontent.com/${repo}/${branch}${resourcePath}`;
                }
                warn(`Couldn't get blob URL nor external URL for @resource '${name}', trying to use base64-encoded fallback`);
                // @ts-ignore
                url = yield GM.getResourceUrl(name, false);
            }
            return url;
        });
    }
    /**
     * Returns the preferred locale of the user, provided it is supported by the userscript.
     * Prioritizes `navigator.language`, then `navigator.languages`, then `"en_US"` as a fallback.
     */
    function getPreferredLocale() {
        var _a;
        const navLang = navigator.language.replace(/-/g, "_");
        const navLangs = navigator.languages
            .filter(lang => lang.match(/^[a-z]{2}(-|_)[A-Z]$/) !== null)
            .map(lang => lang.replace(/-/g, "_"));
        if (Object.entries(locales).find(([key]) => key === navLang))
            return navLang;
        for (const loc of navLangs) {
            if (Object.entries(locales).find(([key]) => key === loc))
                return loc;
        }
        // if navigator.languages has entries that aren't locale codes in the format xx_XX
        if (navigator.languages.some(lang => lang.match(/^[a-z]{2}$/))) {
            for (const lang of navLangs) {
                const foundLoc = (_a = Object.entries(locales).find(([key]) => key.startsWith(lang))) === null || _a === void 0 ? void 0 : _a[0];
                if (foundLoc)
                    return foundLoc;
            }
        }
        return "en_US";
    }
    function getSessionId() {
        let sesId = window.sessionStorage.getItem("bytm-session-id");
        if (!sesId) {
            sesId = randomId(8, 36);
            window.sessionStorage.setItem("bytm-session-id", sesId);
        }
        return sesId;
    }
    /** Returns the SVG content behind the passed resource identifier to be assigned to an element's innerHTML property */
    function resourceToHTMLString(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resourceUrl = yield getResourceUrl(resource);
                if (!resourceUrl)
                    throw new Error(`Couldn't find URL for resource '${resource}'`);
                return yield (yield fetchAdvanced(resourceUrl)).text();
            }
            catch (err) {
                error("Couldn't get SVG element from resource:", err);
                return null;
            }
        });
    }

    const fetchOpts = {
        timeout: 10000,
    };
    /** Contains all translation keys of all initialized and loaded translations */
    const allTrKeys = new Map();
    /** Contains the identifiers of all initialized and loaded translation locales */
    const initializedLocales = new Set();
    /** Initializes the translations */
    function initTranslations(locale) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (initializedLocales.has(locale))
                return;
            try {
                const transUrl = yield getResourceUrl(`tr-${locale}`);
                const transFile = yield (yield fetchAdvanced(transUrl, fetchOpts)).json();
                // merge with base translations if specified
                const baseTransUrl = transFile.base ? yield getResourceUrl(`tr-${transFile.base}`) : undefined;
                const baseTransFile = baseTransUrl ? yield (yield fetchAdvanced(baseTransUrl, fetchOpts)).json() : undefined;
                const translations = Object.assign(Object.assign({}, ((_a = baseTransFile === null || baseTransFile === void 0 ? void 0 : baseTransFile.translations) !== null && _a !== void 0 ? _a : {})), transFile.translations);
                tr.addLanguage(locale, translations);
                allTrKeys.set(locale, new Set(Object.keys(translations)));
                info(`Loaded translations for locale '${locale}'`);
            }
            catch (err) {
                const errStr = `Couldn't load translations for locale '${locale}'`;
                error(errStr, err);
                throw new Error(errStr);
            }
        });
    }
    /** Sets the current language for translations */
    function setLocale(locale) {
        tr.setLanguage(locale);
        setGlobalProp("locale", locale);
        emitInterface("bytm:setLocale", { locale });
    }
    /** Returns the currently set language */
    function getLocale() {
        return tr.getLanguage();
    }
    /** Returns whether the given translation key exists in the current locale */
    function hasKey(key) {
        return hasKeyFor(getLocale(), key);
    }
    /** Returns whether the given translation key exists in the given locale */
    function hasKeyFor(locale, key) {
        var _a, _b;
        return (_b = (_a = allTrKeys.get(locale)) === null || _a === void 0 ? void 0 : _a.has(key)) !== null && _b !== void 0 ? _b : false;
    }
    /** Returns the translated string for the given key, after optionally inserting values */
    function t(key, ...values) {
        return tr(key, ...values);
    }
    /**
     * Returns the translated string for the given key with an added pluralization identifier based on the passed `num`
     * Tries to fall back to the non-pluralized syntax if no translation was found
     */
    function tp(key, num, ...values) {
        if (typeof num !== "number")
            num = num.length;
        const plNum = num === 1 ? "1" : "n";
        const trans = t(`${key}-${plNum}`, ...values);
        if (trans === key)
            return t(key, ...values);
        return trans;
    }

    let features$3;
    function preInitBehavior(feats) {
        features$3 = feats;
    }
    //#MARKER beforeunload popup
    let beforeUnloadEnabled = true;
    /** Disables the popup before leaving the site */
    function disableBeforeUnload() {
        beforeUnloadEnabled = false;
        info("Disabled popup before leaving the site");
    }
    /**
     * Adds a spy function into `window.__proto__.addEventListener` to selectively discard `beforeunload`
     * event listeners before they can be called by the site.
     */
    function initBeforeUnloadHook() {
        return __awaiter(this, void 0, void 0, function* () {
            Error.stackTraceLimit = 1000; // default is 25 on FF so this should hopefully be more than enough
            (function (original) {
                // @ts-ignore
                window.__proto__.addEventListener = function (...args) {
                    const origListener = typeof args[1] === "function" ? args[1] : args[1].handleEvent;
                    args[1] = function (...a) {
                        if (!beforeUnloadEnabled && args[0] === "beforeunload") {
                            info("Prevented beforeunload event listener from being called");
                            return false;
                        }
                        else
                            return origListener.apply(this, a);
                    };
                    original.apply(this, args);
                };
                // @ts-ignore
            })(window.__proto__.addEventListener);
        });
    }
    //#MARKER auto close toasts
    /** Closes toasts after a set amount of time */
    function initAutoCloseToasts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const animTimeout = 300;
                const closeTimeout = Math.max(features$3.closeToastsTimeout * 1000 + animTimeout, animTimeout);
                onSelectorOld("tp-yt-paper-toast#toast", {
                    all: true,
                    continuous: true,
                    listener: (toastElems) => __awaiter(this, void 0, void 0, function* () {
                        var _a;
                        for (const toastElem of toastElems) {
                            if (!toastElem.hasAttribute("allow-click-through"))
                                continue;
                            if (toastElem.classList.contains("bytm-closing"))
                                continue;
                            toastElem.classList.add("bytm-closing");
                            yield pauseFor(closeTimeout);
                            toastElem.classList.remove("paper-toast-open");
                            log(`Automatically closed toast '${(_a = toastElem.querySelector("#text-container yt-formatted-string")) === null || _a === void 0 ? void 0 : _a.innerText}' after ${features$3.closeToastsTimeout * 1000}ms`);
                            // wait for the transition to finish
                            yield pauseFor(animTimeout);
                            toastElem.style.display = "none";
                        }
                    }),
                });
                log("Initialized automatic toast closing");
            }
            catch (err) {
                error("Error in automatic toast closing:", err);
            }
        });
    }
    /** After how many milliseconds a remembered entry should expire */
    const remSongEntryExpiry = 1000 * 60 * 1;
    /** Minimum time a song has to be played before it is committed to GM storage */
    const remSongMinPlayTime = 10;
    let remSongsCache = [];
    /** Remembers the time of the last played song and resumes playback from that time */
    function initRememberSongTime() {
        return __awaiter(this, void 0, void 0, function* () {
            if (features$3.rememberSongTimeSites !== "all" && features$3.rememberSongTimeSites !== getDomain())
                return;
            const storedDataRaw = yield GM.getValue("bytm-rem-songs");
            if (!storedDataRaw)
                yield GM.setValue("bytm-rem-songs", "[]");
            remSongsCache = JSON.parse(String(storedDataRaw !== null && storedDataRaw !== void 0 ? storedDataRaw : "[]"));
            log(`Initialized song time remembering with ${remSongsCache.length} initial entries`);
            if (location.pathname.startsWith("/watch"))
                yield restoreSongTime();
            remSongUpdateEntry();
            setInterval(remSongUpdateEntry, 1000);
        });
    }
    /** Tries to restore the time of the currently playing song */
    function restoreSongTime() {
        return __awaiter(this, void 0, void 0, function* () {
            if (location.pathname.startsWith("/watch")) {
                const { searchParams } = new URL(location.href);
                const watchID = searchParams.get("v");
                if (!watchID)
                    return;
                const entry = remSongsCache.find(entry => entry.watchID === watchID);
                if (entry) {
                    if (Date.now() - entry.updateTimestamp > remSongEntryExpiry) {
                        yield delRemSongData(entry.watchID);
                        return;
                    }
                    else {
                        onSelectorOld(videoSelector, {
                            listener: (vidElem) => __awaiter(this, void 0, void 0, function* () {
                                if (vidElem) {
                                    const applyTime = () => __awaiter(this, void 0, void 0, function* () {
                                        if (isNaN(entry.songTime))
                                            return;
                                        vidElem.currentTime = clamp(Math.max(entry.songTime, 0), 0, vidElem.duration);
                                        yield delRemSongData(entry.watchID);
                                        info(`Restored song time to ${Math.floor(entry.songTime / 60)}m, ${(entry.songTime % 60).toFixed(1)}s`, LogLevel.Info);
                                    });
                                    if (vidElem.readyState === 4)
                                        applyTime();
                                    else
                                        vidElem.addEventListener("canplay", applyTime, { once: true });
                                }
                            }),
                        });
                    }
                }
            }
        });
    }
    /** Updates the currently playing song's entry in GM storage */
    function remSongUpdateEntry() {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            if (location.pathname.startsWith("/watch")) {
                const { searchParams } = new URL(location.href);
                const watchID = searchParams.get("v");
                if (!watchID)
                    return;
                const songTime = (_a = yield getVideoTime()) !== null && _a !== void 0 ? _a : 0;
                const paused = (_c = (_b = document.querySelector(videoSelector)) === null || _b === void 0 ? void 0 : _b.paused) !== null && _c !== void 0 ? _c : false;
                // don't immediately update to reduce race conditions and only update if the video is playing
                // also it just sounds better if the song starts at the beginning if only a couple seconds have passed
                if (songTime > remSongMinPlayTime && !paused) {
                    const entry = {
                        watchID,
                        songTime,
                        updateTimestamp: Date.now(),
                    };
                    yield setRemSongData(entry);
                }
                // if the song is rewound to the beginning, delete the entry
                else {
                    const entry = remSongsCache.find(entry => entry.watchID === watchID);
                    if (entry && songTime <= remSongMinPlayTime)
                        yield delRemSongData(entry.watchID);
                }
            }
            const expiredEntries = remSongsCache.filter(entry => Date.now() - entry.updateTimestamp > remSongEntryExpiry);
            for (const entry of expiredEntries)
                yield delRemSongData(entry.watchID);
        });
    }
    /** Adds an entry or updates it if it already exists */
    function setRemSongData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundIdx = remSongsCache.findIndex(entry => entry.watchID === data.watchID);
            if (foundIdx >= 0)
                remSongsCache[foundIdx] = data;
            else
                remSongsCache.push(data);
            yield GM.setValue("bytm-rem-songs", JSON.stringify(remSongsCache));
        });
    }
    /** Deletes an entry */
    function delRemSongData(watchID) {
        return __awaiter(this, void 0, void 0, function* () {
            remSongsCache = [...remSongsCache.filter(entry => entry.watchID !== watchID)];
            yield GM.setValue("bytm-rem-songs", JSON.stringify(remSongsCache));
        });
    }
    //#MARKER disable darkreader
    /** Disables Dark Reader if it is enabled */
    function disableDarkReader() {
        if (document.querySelector(".darkreader")) {
            const metaElem = document.createElement("meta");
            metaElem.name = "darkreader-lock";
            metaElem.classList.add("bytm-disable-darkreader");
            document.head.appendChild(metaElem);
            info("Sent hint to Dark Reader to disable itself");
        }
    }

    let createNanoEvents = () => ({
      emit(event, ...args) {
        let callbacks = this.events[event] || [];
        for (let i = 0, length = callbacks.length; i < length; i++) {
          callbacks[i](...args);
        }
      },
      events: {},
      on(event, cb) {
        this.events[event]?.push(cb) || (this.events[event] = [cb]);
        return () => {
          this.events[event] = this.events[event]?.filter(i => cb !== i);
        }
      }
    });

    /** EventEmitter instance that is used to detect changes to the site */
    const siteEvents = createNanoEvents();
    let observers = [];
    /** Creates MutationObservers that check if parts of the site have changed, then emit an event on the `siteEvents` instance. */
    function initSiteEvents() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //#SECTION queue
                // the queue container always exists so it doesn't need an extra init function
                const queueObs = new MutationObserver(([{ addedNodes, removedNodes, target }]) => {
                    if (addedNodes.length > 0 || removedNodes.length > 0) {
                        info(`Detected queue change - added nodes: ${[...addedNodes.values()].length} - removed nodes: ${[...removedNodes.values()].length}`);
                        emitSiteEvent("queueChanged", target);
                    }
                });
                // only observe added or removed elements
                queueObs.observe(document.querySelector(".side-panel.modular #contents.ytmusic-player-queue"), {
                    childList: true,
                });
                const autoplayObs = new MutationObserver(([{ addedNodes, removedNodes, target }]) => {
                    if (addedNodes.length > 0 || removedNodes.length > 0) {
                        info(`Detected autoplay queue change - added nodes: ${[...addedNodes.values()].length} - removed nodes: ${[...removedNodes.values()].length}`);
                        emitSiteEvent("autoplayQueueChanged", target);
                    }
                });
                autoplayObs.observe(document.querySelector(".side-panel.modular ytmusic-player-queue #automix-contents"), {
                    childList: true,
                });
                info("Successfully initialized SiteEvents observers");
                observers = observers.concat([
                    queueObs,
                    autoplayObs,
                ]);
            }
            catch (err) {
                error("Couldn't initialize SiteEvents observers due to an error:\n", err);
            }
        });
    }
    /** Emits a site event with the given key and arguments */
    function emitSiteEvent(key, ...args) {
        siteEvents.emit(key, ...args);
        emitInterface(`bytm:siteEvent:${key}`, args);
    }

    var changelog = {"html":"<h2 id=\"110\">1.1.0</h2>\n<ul>\n<li><strong>Added Features:</strong><ul>\n<li>The userscript is now available in 9 languages! To submit or edit translations, please <a href=\"https://github.com/Sv443/BetterYTM/blob/main/contributing.md#submitting-translations\">view this guide</a></li>\n<li>Added an audio amplification button to the media controls</li>\n<li>Added feature to restore the song time when reloading or restoring the tab</li>\n<li>BetterYTM now sends a hint to the Dark Reader extension to disable itself if it isn't already</li></ul></li>\n<li><strong>Changes & Fixes:</strong><ul>\n<li>Interval of arrow key skipping is configurable now</li>\n<li>Site switch hotkey is also configurable now</li>\n<li>Skipping to a specific point in the song is more reliable now</li></ul></li>\n</ul>\n<div class=\"split\"></div>\n<p><br></p>\n<h2 id=\"102\">1.0.2</h2>\n<ul>\n<li><strong>Changes:</strong><ul>\n<li>Script is now published to OpenUserJS!</li>\n<li>Added a OpenUserJS link to the configuration menu</li></ul></li>\n</ul>\n<div class=\"split\"></div>\n<p><br></p>\n<h2 id=\"101\">1.0.1</h2>\n<ul>\n<li><strong>Changes:</strong><ul>\n<li>Script is now published to GreasyFork!</li>\n<li>Added a GreasyFork link to the configuration menu</li></ul></li>\n</ul>\n<div class=\"split\"></div>\n<p><br></p>\n<h2 id=\"100\">1.0.0</h2>\n<ul>\n<li><strong>Added Features:</strong><ul>\n<li>Added configuration menu to toggle and configure all features</li>\n<li>Added lyrics button to each song in the queue</li>\n<li>Added \"remove from queue\" button to each song in the queue</li>\n<li>Use number keys to skip to a specific point in the song</li>\n<li>Added feature to make volume slider bigger and volume control finer</li>\n<li>Added percentage label next to the volume slider &amp; title on hover</li>\n<li>Improvements to link hitboxes &amp; more links in general</li>\n<li>Permanent toast notifications can be automatically closed now</li>\n<li>Remove tracking parameter <code>&amp;si</code> from links in the share menu</li>\n<li>Fix spacing issues throughout the site</li>\n<li>Added a button to scroll to the currently active song in the queue</li>\n<li>Added an easter egg to the watermark and config menu option :)</li></ul></li>\n<li><strong>Changes & Fixes:</strong><ul>\n<li>Now the lyrics button will directly link to the lyrics (using my API <a href=\"https://github.com/Sv443/geniURL\">geniURL</a>)</li>\n<li>Video time is now kept when switching site on regular YT too</li>\n<li>Fixed compatibility with the new site design</li>\n<li>A loading indicator is shown while the lyrics are loading</li>\n<li>Images are now smaller and cached by the userscript extension</li>\n<li>Song names with hyphens are now resolved better for lyrics lookup</li>\n<li>Site switch with <kbd>F9</kbd> will now keep the video time</li>\n<li>Moved lots of utility code to my new library <a href=\"https://github.com/Sv443-Network/UserUtils\">UserUtils</a></li></ul></li>\n</ul>\n<div class=\"split\"></div>\n<p><br></p>\n<h2 id=\"020\">0.2.0</h2>\n<ul>\n<li><strong>Added Features:</strong><ul>\n<li>Switch between YouTube and YT Music (with <kbd>F9</kbd> by default)</li>\n<li>Search for song lyrics with new button in media controls</li>\n<li>Remove \"Upgrade to YTM Premium\" tab</li></ul></li>\n</ul>\n<div class=\"split\"></div>\n<p><br></p>\n<h2 id=\"010\">0.1.0</h2>\n<ul>\n<li>Added support for arrow keys to skip forward or backward (currently only by fixed 10 second interval)</li>\n</ul>","metadata":{},"filename":"changelog.md","path":"C:\\Users\\sven1\\code\\sv443\\BetterYTM\\changelog.md"};

    /** Creates a hotkey input element */
    function createHotkeyInput({ initialValue, resetValue, onChange }) {
        var _a;
        const wrapperElem = document.createElement("div");
        wrapperElem.classList.add("bytm-hotkey-wrapper");
        const infoElem = document.createElement("span");
        infoElem.classList.add("bytm-hotkey-info");
        const inputElem = document.createElement("input");
        inputElem.type = "button";
        inputElem.classList.add("bytm-ftconf-input", "bytm-hotkey-input", "bytm-btn");
        inputElem.dataset.state = "inactive";
        inputElem.value = (_a = initialValue === null || initialValue === void 0 ? void 0 : initialValue.code) !== null && _a !== void 0 ? _a : t("hotkey_input_click_to_change");
        inputElem.title = t("hotkey_input_click_to_change_tooltip");
        const resetElem = document.createElement("a");
        resetElem.classList.add("bytm-hotkey-reset", "bytm-link");
        resetElem.role = "button";
        resetElem.innerText = `(${t("reset")})`;
        resetElem.addEventListener("click", () => {
            onChange(resetValue);
            inputElem.value = resetValue.code;
            inputElem.dataset.state = "inactive";
            infoElem.innerText = getHotkeyInfo(resetValue);
        });
        if (initialValue)
            infoElem.innerText = getHotkeyInfo(initialValue);
        let lastKeyDown;
        document.addEventListener("keypress", (e) => {
            if (inputElem.dataset.state !== "active")
                return;
            if ((lastKeyDown === null || lastKeyDown === void 0 ? void 0 : lastKeyDown.code) === e.code && (lastKeyDown === null || lastKeyDown === void 0 ? void 0 : lastKeyDown.shift) === e.shiftKey && (lastKeyDown === null || lastKeyDown === void 0 ? void 0 : lastKeyDown.ctrl) === e.ctrlKey && (lastKeyDown === null || lastKeyDown === void 0 ? void 0 : lastKeyDown.alt) === e.altKey)
                return;
            e.preventDefault();
            e.stopImmediatePropagation();
            const hotkey = {
                code: e.code,
                shift: e.shiftKey,
                ctrl: e.ctrlKey,
                alt: e.altKey,
            };
            inputElem.value = hotkey.code;
            inputElem.dataset.state = "inactive";
            infoElem.innerText = getHotkeyInfo(hotkey);
            onChange(hotkey);
        });
        document.addEventListener("keydown", (e) => {
            if (inputElem.dataset.state !== "active")
                return;
            if (["ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight"].includes(e.code))
                return;
            e.preventDefault();
            e.stopImmediatePropagation();
            const hotkey = {
                code: e.code,
                shift: e.shiftKey,
                ctrl: e.ctrlKey,
                alt: e.altKey,
            };
            lastKeyDown = hotkey;
            inputElem.value = hotkey.code;
            inputElem.dataset.state = "inactive";
            infoElem.innerText = getHotkeyInfo(hotkey);
            inputElem.title = t("hotkey_input_click_to_cancel_tooltip");
            onChange(hotkey);
        });
        const deactivate = () => {
            var _a, _b;
            siteEvents.emit("hotkeyInputActive", false);
            const curVal = (_a = getFeatures().switchSitesHotkey) !== null && _a !== void 0 ? _a : initialValue;
            inputElem.value = (_b = curVal === null || curVal === void 0 ? void 0 : curVal.code) !== null && _b !== void 0 ? _b : t("hotkey_input_click_to_change");
            inputElem.dataset.state = "inactive";
            inputElem.title = t("hotkey_input_click_to_change_tooltip");
            infoElem.innerText = curVal ? getHotkeyInfo(curVal) : "";
        };
        const activate = () => {
            siteEvents.emit("hotkeyInputActive", true);
            inputElem.value = "< ... >";
            inputElem.dataset.state = "active";
            inputElem.title = t("hotkey_input_click_to_cancel_tooltip");
        };
        siteEvents.on("cfgMenuClosed", deactivate);
        inputElem.addEventListener("click", () => {
            if (inputElem.dataset.state === "active")
                deactivate();
            else
                activate();
        });
        wrapperElem.appendChild(infoElem);
        wrapperElem.appendChild(inputElem);
        resetValue && wrapperElem.appendChild(resetElem);
        return wrapperElem;
    }
    function getHotkeyInfo(hotkey) {
        const modifiers = [];
        hotkey.ctrl && modifiers.push(t("hotkey_key_ctrl"));
        hotkey.shift && modifiers.push(t("hotkey_key_shift"));
        hotkey.alt && modifiers.push(getOS() === "mac" ? t("hotkey_key_mac_option") : t("hotkey_key_alt"));
        return modifiers.reduce((a, c) => a += `${c} + `, "");
    }
    /** Crude OS detection for keyboard layout purposes */
    function getOS() {
        if (navigator.userAgent.match(/mac(\s?os|intel)/i))
            return "mac";
        return "other";
    }

    var name = "betterytm";
    var userscriptName = "BetterYTM";
    var version = "1.1.0";
    var description = "Configurable layout and user experience improvements for YouTube Music";
    var homepage = "https://github.com/Sv443/BetterYTM";
    var main = "./src/index.ts";
    var type = "module";
    var scripts = {
    	test: "npm run node-ts -- ./test.ts",
    	build: "rollup -c",
    	"build-dev": "rollup -c --config-mode development",
    	"build-prod": "rollup -c --config-mode production",
    	"build-prod-gh": "rollup -c --config-mode production --config-host github",
    	"build-prod-gf": "rollup -c --config-mode production --config-host greasyfork",
    	"build-prod-oujs": "rollup -c --config-mode production --config-host openuserjs",
    	"post-build": "npm run node-ts -- ./src/tools/post-build.ts",
    	serve: "npm run node-ts -- ./src/tools/serve.ts",
    	dev: "concurrently \"nodemon --exec npm run build-dev\" \"npm run serve\"",
    	lint: "tsc --noEmit && eslint .",
    	"tr-progress": "npm run node-ts -- ./src/tools/tr-progress.ts",
    	"tr-format": "npm run node-ts -- ./src/tools/tr-format.ts",
    	"node-ts": "node --no-warnings=ExperimentalWarning --enable-source-maps --loader ts-node/esm",
    	invisible: "node src/tools/run-invisible.mjs"
    };
    var engines = {
    	node: ">=18",
    	npm: ">=8"
    };
    var repository = {
    	type: "git",
    	url: "git+https://github.com/Sv443/BetterYTM.git"
    };
    var author = {
    	name: "Sv443",
    	url: "https://github.com/Sv443"
    };
    var license = "AGPL-3.0";
    var bugs = {
    	url: "https://github.com/Sv443/BetterYTM/issues"
    };
    var funding = {
    	type: "github",
    	url: "https://github.com/sponsors/Sv443"
    };
    var cdn = {
    	greasyfork: "https://greasyfork.org/en/scripts/475682-betterytm",
    	openuserjs: "https://openuserjs.org/scripts/Sv443/BetterYTM"
    };
    var dependencies = {
    	"@sv443-network/userutils": "^4.0.0",
    	nanoevents: "^8.0.0"
    };
    var devDependencies = {
    	"@jackfranklin/rollup-plugin-markdown": "^0.4.0",
    	"@rollup/plugin-json": "^6.0.1",
    	"@rollup/plugin-node-resolve": "^15.2.3",
    	"@rollup/plugin-terser": "^0.4.4",
    	"@rollup/plugin-typescript": "^11.1.5",
    	"@types/express": "^4.17.17",
    	"@types/greasemonkey": "^4.0.4",
    	"@types/node": "^20.2.4",
    	"@typescript-eslint/eslint-plugin": "^6.7.4",
    	"@typescript-eslint/parser": "^6.7.4",
    	concurrently: "^8.1.0",
    	dotenv: "^16.1.4",
    	eslint: "^8.51.0",
    	express: "^4.18.2",
    	nodemon: "^3.0.1",
    	rollup: "^4.6.0",
    	"rollup-plugin-execute": "^1.1.1",
    	"rollup-plugin-html": "^0.2.1",
    	"rollup-plugin-import-css": "^3.3.5",
    	"ts-node": "^10.9.1",
    	tslib: "^2.5.2",
    	typescript: "^5.0.4"
    };
    var browserslist = [
    	"last 1 version",
    	"> 1%",
    	"not dead"
    ];
    var nodemonConfig = {
    	watch: [
    		"src/**",
    		"assets/**",
    		"rollup.config.mjs",
    		".env",
    		"changelog.md"
    	],
    	ext: "ts,js,json,html,css,svg,png",
    	ignore: [
    		"dist/*",
    		"dev/*"
    	]
    };
    var pkg = {
    	name: name,
    	userscriptName: userscriptName,
    	version: version,
    	description: description,
    	homepage: homepage,
    	main: main,
    	type: type,
    	scripts: scripts,
    	engines: engines,
    	repository: repository,
    	author: author,
    	license: license,
    	bugs: bugs,
    	funding: funding,
    	cdn: cdn,
    	dependencies: dependencies,
    	devDependencies: devDependencies,
    	browserslist: browserslist,
    	nodemonConfig: nodemonConfig
    };

    //#MARKER create menu elements
    let isCfgMenuAdded = false;
    let isCfgMenuOpen = false;
    const compressionFormat = "deflate-raw";
    function compressionSupported() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield compress(".", compressionFormat);
                return true;
            }
            catch (e) {
                return false;
            }
        });
    }
    /** Threshold in pixels from the top of the options container that dictates for how long the scroll indicator is shown */
    const scrollIndicatorOffsetThreshold = 30;
    let scrollIndicatorEnabled = true;
    let initLocale;
    /**
     * Adds an element to open the BetterYTM menu
     * @deprecated to be replaced with new menu - see https://github.com/Sv443/BetterYTM/issues/23
     */
    function addCfgMenu() {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            if (isCfgMenuAdded)
                return;
            isCfgMenuAdded = true;
            initLocale = getFeatures().locale;
            const initLangReloadText = t("lang_changed_prompt_reload");
            const toggled_on = t("toggled_on");
            const toggled_off = t("toggled_off");
            //#SECTION backdrop & menu container
            const backgroundElem = document.createElement("div");
            backgroundElem.id = "bytm-cfg-menu-bg";
            backgroundElem.classList.add("bytm-menu-bg");
            backgroundElem.title = t("close_menu_tooltip");
            backgroundElem.style.visibility = "hidden";
            backgroundElem.style.display = "none";
            backgroundElem.addEventListener("click", (e) => {
                var _a;
                if (isCfgMenuOpen && ((_a = e.target) === null || _a === void 0 ? void 0 : _a.id) === "bytm-cfg-menu-bg")
                    closeCfgMenu(e);
            });
            document.body.addEventListener("keydown", (e) => {
                if (isCfgMenuOpen && e.key === "Escape")
                    closeCfgMenu(e);
            });
            const menuContainer = document.createElement("div");
            menuContainer.title = ""; // prevent bg title from propagating downwards
            menuContainer.classList.add("bytm-menu");
            menuContainer.id = "bytm-cfg-menu";
            //#SECTION title bar
            const headerElem = document.createElement("div");
            headerElem.classList.add("bytm-menu-header");
            const titleCont = document.createElement("div");
            titleCont.className = "bytm-menu-titlecont";
            titleCont.role = "heading";
            titleCont.ariaLevel = "1";
            const titleElem = document.createElement("h2");
            titleElem.className = "bytm-menu-title";
            titleElem.innerText = t("config_menu_title", scriptInfo.name);
            const linksCont = document.createElement("div");
            linksCont.id = "bytm-menu-linkscont";
            const addLink = (imgSrc, href, title) => {
                const anchorElem = document.createElement("a");
                anchorElem.className = "bytm-menu-link bytm-no-select";
                anchorElem.rel = "noopener noreferrer";
                anchorElem.target = "_blank";
                anchorElem.href = href;
                anchorElem.title = title;
                const imgElem = document.createElement("img");
                imgElem.className = "bytm-menu-img";
                imgElem.src = imgSrc;
                imgElem.style.width = "32px";
                imgElem.style.height = "32px";
                anchorElem.appendChild(imgElem);
                linksCont.appendChild(anchorElem);
            };
            addLink(yield getResourceUrl("github"), scriptInfo.namespace, t("open_github", scriptInfo.name));
            addLink(yield getResourceUrl("discord"), "https://dc.sv443.net/", t("open_discord"));
            addLink(yield getResourceUrl("greasyfork"), pkg.cdn.greasyfork, t("open_greasyfork", scriptInfo.name));
            addLink(yield getResourceUrl("openuserjs"), pkg.cdn.openuserjs, t("open_openuserjs", scriptInfo.name));
            const closeElem = document.createElement("img");
            closeElem.classList.add("bytm-menu-close");
            closeElem.src = yield getResourceUrl("close");
            closeElem.title = t("close_menu_tooltip");
            closeElem.addEventListener("click", closeCfgMenu);
            titleCont.appendChild(titleElem);
            titleCont.appendChild(linksCont);
            headerElem.appendChild(titleCont);
            headerElem.appendChild(closeElem);
            //#SECTION feature list
            const featuresCont = document.createElement("div");
            featuresCont.id = "bytm-menu-opts";
            /** Gets called whenever the feature config is changed */
            const confChanged = debounce((key, initialVal, newVal) => __awaiter(this, void 0, void 0, function* () {
                const fmt = (val) => typeof val === "object" ? JSON.stringify(val) : String(val);
                info(`Feature config changed at key '${key}', from value '${fmt(initialVal)}' to '${fmt(newVal)}'`);
                const featConf = JSON.parse(JSON.stringify(getFeatures()));
                featConf[key] = newVal;
                yield saveFeatures(featConf);
                if (initLocale !== featConf.locale) {
                    yield initTranslations(featConf.locale);
                    setLocale(featConf.locale);
                    const newText = t("lang_changed_prompt_reload");
                    const confirmText = newText !== initLangReloadText ? `${newText}\n\n────────────────────────────────\n\n${initLangReloadText}` : newText;
                    if (confirm(confirmText)) {
                        closeCfgMenu();
                        disableBeforeUnload();
                        location.reload();
                    }
                }
                else if (getLocale() !== featConf.locale)
                    setLocale(featConf.locale);
            }));
            const featureCfg = getFeatures();
            const featureCfgWithCategories = Object.entries(featInfo)
                .reduce((acc, [key, { category }]) => {
                if (!acc[category])
                    acc[category] = {};
                acc[category][key] = featureCfg[key];
                return acc;
            }, {});
            const fmtVal = (v) => String(v).trim();
            const toggleLabelText = (toggled) => toggled ? toggled_on : toggled_off;
            for (const category in featureCfgWithCategories) {
                const featObj = featureCfgWithCategories[category];
                const catHeaderElem = document.createElement("h3");
                catHeaderElem.classList.add("bytm-ftconf-category-header");
                catHeaderElem.role = "heading";
                catHeaderElem.ariaLevel = "2";
                catHeaderElem.innerText = `${t(`feature_category_${category}`)}:`;
                featuresCont.appendChild(catHeaderElem);
                for (const featKey in featObj) {
                    const ftInfo = featInfo[featKey];
                    // @ts-ignore
                    if (!ftInfo || ftInfo.hidden === true)
                        continue;
                    const { type, default: ftDefault } = ftInfo;
                    // @ts-ignore
                    const step = (_a = ftInfo === null || ftInfo === void 0 ? void 0 : ftInfo.step) !== null && _a !== void 0 ? _a : undefined;
                    const val = featureCfg[featKey];
                    const initialVal = (_b = val !== null && val !== void 0 ? val : ftDefault) !== null && _b !== void 0 ? _b : undefined;
                    const ftConfElem = document.createElement("div");
                    ftConfElem.classList.add("bytm-ftitem");
                    {
                        const featLeftSideElem = document.createElement("div");
                        featLeftSideElem.classList.add("bytm-ftitem-leftside");
                        const textElem = document.createElement("span");
                        textElem.innerText = t(`feature_desc_${featKey}`);
                        let helpElem;
                        // @ts-ignore
                        const hasHelpTextFunc = typeof ((_c = featInfo[featKey]) === null || _c === void 0 ? void 0 : _c.helpText) === "function";
                        if (hasKey(`feature_helptext_${featKey}`) || hasHelpTextFunc) {
                            const helpElemImgHtml = yield resourceToHTMLString("help");
                            if (helpElemImgHtml) {
                                helpElem = document.createElement("div");
                                helpElem.classList.add("bytm-ftitem-help-btn", "bytm-generic-btn");
                                helpElem.title = t("feature_help_button_tooltip");
                                helpElem.role = "button";
                                helpElem.innerHTML = helpElemImgHtml;
                                helpElem.addEventListener("click", (e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    openHelpDialog(featKey);
                                });
                            }
                            else {
                                error(`Couldn't create help button SVG element for feature '${featKey}'`);
                            }
                        }
                        featLeftSideElem.appendChild(textElem);
                        helpElem && featLeftSideElem.appendChild(helpElem);
                        ftConfElem.appendChild(featLeftSideElem);
                    }
                    {
                        let inputType = "text";
                        let inputTag = "input";
                        switch (type) {
                            case "toggle":
                                inputType = "checkbox";
                                break;
                            case "slider":
                                inputType = "range";
                                break;
                            case "number":
                                inputType = "number";
                                break;
                            case "select":
                                inputTag = "select";
                                inputType = undefined;
                                break;
                            case "hotkey":
                                inputTag = undefined;
                                inputType = undefined;
                                break;
                        }
                        const inputElemId = `bytm-ftconf-${featKey}-input`;
                        const ctrlElem = document.createElement("span");
                        ctrlElem.classList.add("bytm-ftconf-ctrl");
                        if (inputTag) {
                            // standard input element:
                            const inputElem = document.createElement(inputTag);
                            inputElem.classList.add("bytm-ftconf-input");
                            inputElem.id = inputElemId;
                            if (inputType)
                                inputElem.type = inputType;
                            // @ts-ignore
                            if (typeof ftInfo.min !== "undefined" && ftInfo.max !== "undefined") {
                                // @ts-ignore
                                inputElem.min = ftInfo.min;
                                // @ts-ignore
                                inputElem.max = ftInfo.max;
                            }
                            if (typeof initialVal !== "undefined")
                                inputElem.value = String(initialVal);
                            if (type === "number" || type === "slider" && step)
                                inputElem.step = String(step);
                            if (type === "toggle" && typeof initialVal !== "undefined")
                                inputElem.checked = Boolean(initialVal);
                            // @ts-ignore
                            const unitTxt = typeof ftInfo.unit === "string" ? " " + ftInfo.unit : "";
                            let labelElem;
                            if (type === "slider") {
                                labelElem = document.createElement("label");
                                labelElem.classList.add("bytm-ftconf-label", "bytm-slider-label");
                                labelElem.innerText = fmtVal(initialVal) + unitTxt;
                                inputElem.addEventListener("input", () => {
                                    if (labelElem)
                                        labelElem.innerText = fmtVal(Number(inputElem.value)) + unitTxt;
                                });
                            }
                            else if (type === "toggle") {
                                labelElem = document.createElement("label");
                                labelElem.classList.add("bytm-ftconf-label", "bytm-toggle-label");
                                labelElem.innerText = toggleLabelText(Boolean(initialVal)) + unitTxt;
                                inputElem.addEventListener("input", () => {
                                    if (labelElem)
                                        labelElem.innerText = toggleLabelText(inputElem.checked) + unitTxt;
                                });
                            }
                            else if (type === "select") {
                                const ftOpts = typeof ftInfo.options === "function"
                                    ? ftInfo.options()
                                    : ftInfo.options;
                                for (const { value, label } of ftOpts) {
                                    const optionElem = document.createElement("option");
                                    optionElem.value = String(value);
                                    optionElem.innerText = label;
                                    if (value === initialVal)
                                        optionElem.selected = true;
                                    inputElem.appendChild(optionElem);
                                }
                            }
                            inputElem.addEventListener("input", () => {
                                let v = String(inputElem.value).trim();
                                if (["number", "slider"].includes(type) || v.match(/^-?\d+$/))
                                    v = Number(v);
                                if (typeof initialVal !== "undefined")
                                    confChanged(featKey, initialVal, (type !== "toggle" ? v : inputElem.checked));
                            });
                            if (labelElem) {
                                labelElem.id = `bytm-ftconf-${featKey}-label`;
                                labelElem.htmlFor = inputElemId;
                                ctrlElem.appendChild(labelElem);
                            }
                            ctrlElem.appendChild(inputElem);
                        }
                        else {
                            // custom input element:
                            let wrapperElem;
                            switch (type) {
                                case "hotkey":
                                    wrapperElem = createHotkeyInput({
                                        initialValue: initialVal,
                                        resetValue: featInfo.switchSitesHotkey.default,
                                        onChange: (hotkey) => {
                                            confChanged(featKey, initialVal, hotkey);
                                        },
                                    });
                                    break;
                            }
                            ctrlElem.appendChild(wrapperElem);
                        }
                        ftConfElem.appendChild(ctrlElem);
                    }
                    featuresCont.appendChild(ftConfElem);
                }
            }
            //#SECTION set values of inputs on external change
            siteEvents.on("rebuildCfgMenu", (newConfig) => {
                for (const ftKey in featInfo) {
                    const ftElem = document.querySelector(`#bytm-ftconf-${ftKey}-input`);
                    const labelElem = document.querySelector(`#bytm-ftconf-${ftKey}-label`);
                    if (!ftElem)
                        continue;
                    const ftInfo = featInfo[ftKey];
                    const value = newConfig[ftKey];
                    if (ftInfo.type === "toggle")
                        ftElem.checked = Boolean(value);
                    else
                        ftElem.value = String(value);
                    if (!labelElem)
                        continue;
                    // @ts-ignore
                    const unitTxt = typeof ftInfo.unit === "string" ? " " + ftInfo.unit : "";
                    if (ftInfo.type === "slider")
                        labelElem.innerText = fmtVal(Number(value)) + unitTxt;
                    else if (ftInfo.type === "toggle")
                        labelElem.innerText = toggleLabelText(Boolean(value)) + unitTxt;
                }
                info("Rebuilt config menu");
            });
            //#SECTION scroll indicator
            const scrollIndicator = document.createElement("img");
            scrollIndicator.id = "bytm-menu-scroll-indicator";
            scrollIndicator.src = yield getResourceUrl("arrow_down");
            scrollIndicator.role = "button";
            scrollIndicator.title = t("scroll_to_bottom");
            featuresCont.appendChild(scrollIndicator);
            scrollIndicator.addEventListener("click", () => {
                const bottomAnchor = document.querySelector("#bytm-menu-bottom-anchor");
                bottomAnchor === null || bottomAnchor === void 0 ? void 0 : bottomAnchor.scrollIntoView({
                    behavior: "smooth",
                });
            });
            featuresCont.addEventListener("scroll", (evt) => {
                var _a, _b;
                const scrollPos = (_b = (_a = evt.target) === null || _a === void 0 ? void 0 : _a.scrollTop) !== null && _b !== void 0 ? _b : 0;
                const scrollIndicator = document.querySelector("#bytm-menu-scroll-indicator");
                if (!scrollIndicator)
                    return;
                if (scrollIndicatorEnabled && scrollPos > scrollIndicatorOffsetThreshold && !scrollIndicator.classList.contains("bytm-hidden")) {
                    scrollIndicator.classList.add("bytm-hidden");
                }
                else if (scrollIndicatorEnabled && scrollPos <= scrollIndicatorOffsetThreshold && scrollIndicator.classList.contains("bytm-hidden")) {
                    scrollIndicator.classList.remove("bytm-hidden");
                }
            });
            const bottomAnchor = document.createElement("div");
            bottomAnchor.id = "bytm-menu-bottom-anchor";
            featuresCont.appendChild(bottomAnchor);
            //#SECTION footer
            const footerCont = document.createElement("div");
            footerCont.className = "bytm-menu-footer-cont";
            const footerElem = document.createElement("div");
            footerElem.classList.add("bytm-menu-footer");
            footerElem.innerText = t("reload_hint");
            const reloadElem = document.createElement("button");
            reloadElem.classList.add("bytm-btn");
            reloadElem.style.marginLeft = "10px";
            reloadElem.innerText = t("reload_now");
            reloadElem.title = t("reload_tooltip");
            reloadElem.addEventListener("click", () => {
                closeCfgMenu();
                disableBeforeUnload();
                location.reload();
            });
            footerElem.appendChild(reloadElem);
            const resetElem = document.createElement("button");
            resetElem.classList.add("bytm-btn");
            resetElem.title = t("reset_tooltip");
            resetElem.innerText = t("reset");
            resetElem.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
                if (confirm(t("reset_confirm"))) {
                    yield setDefaultFeatures();
                    closeCfgMenu();
                    disableBeforeUnload();
                    location.reload();
                }
            }));
            const exportElem = document.createElement("button");
            exportElem.classList.add("bytm-btn");
            exportElem.title = t("export_tooltip");
            exportElem.innerText = t("export");
            exportElem.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
                closeCfgMenu();
                openExportMenu();
            }));
            const importElem = document.createElement("button");
            importElem.classList.add("bytm-btn");
            importElem.title = t("import_tooltip");
            importElem.innerText = t("import");
            importElem.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
                closeCfgMenu();
                openImportMenu();
            }));
            const buttonsCont = document.createElement("div");
            buttonsCont.id = "bytm-menu-footer-buttons-cont";
            buttonsCont.appendChild(exportElem);
            buttonsCont.appendChild(importElem);
            buttonsCont.appendChild(resetElem);
            footerCont.appendChild(footerElem);
            footerCont.appendChild(buttonsCont);
            //#SECTION finalize
            menuContainer.appendChild(headerElem);
            menuContainer.appendChild(featuresCont);
            const versionCont = document.createElement("div");
            versionCont.id = "bytm-menu-version-cont";
            const versionElem = document.createElement("a");
            versionElem.id = "bytm-menu-version";
            versionElem.classList.add("bytm-link");
            versionElem.role = "button";
            versionElem.title = t("version_tooltip", scriptInfo.version, scriptInfo.buildNumber);
            versionElem.innerText = `v${scriptInfo.version} (${scriptInfo.buildNumber})`;
            versionElem.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                closeCfgMenu();
                openChangelogMenu("cfgMenu");
            });
            versionCont.appendChild(versionElem);
            menuContainer.appendChild(footerCont);
            menuContainer.appendChild(versionCont);
            backgroundElem.appendChild(menuContainer);
            document.body.appendChild(backgroundElem);
            window.addEventListener("resize", debounce(checkToggleScrollIndicator, 150));
            yield addChangelogMenu();
            yield addExportMenu();
            yield addImportMenu();
            log("Added menu element");
        });
    }
    /** Closes the config menu if it is open. If a bubbling event is passed, its propagation will be prevented. */
    function closeCfgMenu(evt) {
        if (!isCfgMenuOpen)
            return;
        isCfgMenuOpen = false;
        (evt === null || evt === void 0 ? void 0 : evt.bubbles) && evt.stopPropagation();
        document.body.classList.remove("bytm-disable-scroll");
        const menuBg = document.querySelector("#bytm-cfg-menu-bg");
        siteEvents.emit("cfgMenuClosed");
        if (!menuBg)
            return;
        menuBg.style.visibility = "hidden";
        menuBg.style.display = "none";
    }
    /** Opens the config menu if it is closed */
    function openCfgMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!isCfgMenuAdded)
                yield addCfgMenu();
            if (isCfgMenuOpen)
                return;
            isCfgMenuOpen = true;
            document.body.classList.add("bytm-disable-scroll");
            const menuBg = document.querySelector("#bytm-cfg-menu-bg");
            if (!menuBg)
                return;
            menuBg.style.visibility = "visible";
            menuBg.style.display = "block";
            checkToggleScrollIndicator();
        });
    }
    /** Checks if the features container is scrollable and toggles the scroll indicator accordingly */
    function checkToggleScrollIndicator() {
        const featuresCont = document.querySelector("#bytm-menu-opts");
        const scrollIndicator = document.querySelector("#bytm-menu-scroll-indicator");
        // disable scroll indicator if container doesn't scroll
        if (featuresCont && scrollIndicator) {
            const verticalScroll = isScrollable(featuresCont).vertical;
            /** If true, the indicator's threshold is under the available scrollable space and so it should be disabled */
            const underThreshold = featuresCont.scrollHeight - featuresCont.clientHeight <= scrollIndicatorOffsetThreshold;
            if (!underThreshold && verticalScroll && !scrollIndicatorEnabled) {
                scrollIndicatorEnabled = true;
                scrollIndicator.classList.remove("bytm-hidden");
            }
            if ((!verticalScroll && scrollIndicatorEnabled) || underThreshold) {
                scrollIndicatorEnabled = false;
                scrollIndicator.classList.add("bytm-hidden");
            }
        }
    }
    //#MARKER help dialog
    let isHelpDialogOpen = false;
    /** Key of the feature currently loaded in the help dialog */
    let helpDialogCurFeature;
    /** Opens the feature help dialog for the given feature */
    function openHelpDialog(featureKey) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (isHelpDialogOpen)
                return;
            isHelpDialogOpen = true;
            let menuBgElem;
            if (!helpDialogCurFeature) {
                // create menu
                const headerElem = document.createElement("div");
                headerElem.classList.add("bytm-menu-header", "small");
                const titleCont = document.createElement("div");
                titleCont.className = "bytm-menu-titlecont-no-title";
                titleCont.role = "heading";
                titleCont.ariaLevel = "1";
                const helpIconHtml = yield resourceToHTMLString("help");
                if (helpIconHtml)
                    titleCont.innerHTML = helpIconHtml;
                const closeElem = document.createElement("img");
                closeElem.classList.add("bytm-menu-close", "small");
                closeElem.src = yield getResourceUrl("close");
                closeElem.title = t("close_menu_tooltip");
                closeElem.addEventListener("click", (e) => closeHelpDialog(e));
                headerElem.appendChild(titleCont);
                headerElem.appendChild(closeElem);
                menuBgElem = document.createElement("div");
                menuBgElem.id = "bytm-feat-help-menu-bg";
                menuBgElem.classList.add("bytm-menu-bg");
                menuBgElem.title = t("close_menu_tooltip");
                menuBgElem.style.visibility = "hidden";
                menuBgElem.style.display = "none";
                menuBgElem.addEventListener("click", (e) => {
                    var _a;
                    if (isHelpDialogOpen && ((_a = e.target) === null || _a === void 0 ? void 0 : _a.id) === "bytm-feat-help-menu-bg")
                        closeHelpDialog(e);
                });
                document.body.addEventListener("keydown", (e) => {
                    if (isHelpDialogOpen && e.key === "Escape")
                        closeHelpDialog(e);
                });
                const menuContainer = document.createElement("div");
                menuContainer.title = ""; // prevent bg title from propagating downwards
                menuContainer.classList.add("bytm-menu");
                menuContainer.id = "bytm-feat-help-menu";
                const helpTextElem = document.createElement("div");
                helpTextElem.id = "bytm-feat-help-menu-text";
                menuContainer.appendChild(headerElem);
                menuContainer.appendChild(helpTextElem);
                menuBgElem.appendChild(menuContainer);
                document.body.appendChild(menuBgElem);
            }
            else
                menuBgElem = document.querySelector("#bytm-feat-help-menu-bg");
            if (helpDialogCurFeature !== featureKey) {
                const helpTextElem = menuBgElem.querySelector("#bytm-feat-help-menu-text");
                // @ts-ignore
                const helpText = (_a = featInfo[featureKey]) === null || _a === void 0 ? void 0 : _a.helpText();
                helpTextElem.innerText = helpText !== null && helpText !== void 0 ? helpText : t(`feature_helptext_${featureKey}`);
            }
            helpDialogCurFeature = featureKey;
            // show menu
            const menuBg = document.querySelector("#bytm-feat-help-menu-bg");
            if (!menuBg)
                return warn("Couldn't find feature help dialog background element");
            menuBg.style.visibility = "visible";
            menuBg.style.display = "block";
        });
    }
    function closeHelpDialog(evt) {
        if (!isHelpDialogOpen)
            return;
        isHelpDialogOpen = false;
        (evt === null || evt === void 0 ? void 0 : evt.bubbles) && evt.stopPropagation();
        const menuBg = document.querySelector("#bytm-feat-help-menu-bg");
        if (!menuBg)
            return warn("Couldn't find feature help dialog background element");
        menuBg.style.visibility = "hidden";
        menuBg.style.display = "none";
    }
    //#MARKER export menu
    let isExportMenuOpen = false;
    let copiedTxtTimeout = undefined;
    /** Adds a menu to copy the current configuration as JSON (hidden by default) */
    function addExportMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            const canCompress = yield compressionSupported();
            const menuBgElem = document.createElement("div");
            menuBgElem.id = "bytm-export-menu-bg";
            menuBgElem.classList.add("bytm-menu-bg");
            menuBgElem.title = t("close_menu_tooltip");
            menuBgElem.style.visibility = "hidden";
            menuBgElem.style.display = "none";
            menuBgElem.addEventListener("click", (e) => {
                var _a;
                if (isExportMenuOpen && ((_a = e.target) === null || _a === void 0 ? void 0 : _a.id) === "bytm-export-menu-bg") {
                    closeExportMenu(e);
                    openCfgMenu();
                }
            });
            document.body.addEventListener("keydown", (e) => {
                if (isExportMenuOpen && e.key === "Escape") {
                    closeExportMenu(e);
                    openCfgMenu();
                }
            });
            const menuContainer = document.createElement("div");
            menuContainer.title = ""; // prevent bg title from propagating downwards
            menuContainer.classList.add("bytm-menu");
            menuContainer.id = "bytm-export-menu";
            //#SECTION title bar
            const headerElem = document.createElement("div");
            headerElem.classList.add("bytm-menu-header");
            const titleCont = document.createElement("div");
            titleCont.className = "bytm-menu-titlecont";
            titleCont.role = "heading";
            titleCont.ariaLevel = "1";
            const titleElem = document.createElement("h2");
            titleElem.className = "bytm-menu-title";
            titleElem.innerText = t("export_menu_title", scriptInfo.name);
            const closeElem = document.createElement("img");
            closeElem.classList.add("bytm-menu-close");
            closeElem.src = yield getResourceUrl("close");
            closeElem.title = t("close_menu_tooltip");
            closeElem.addEventListener("click", (e) => {
                closeExportMenu(e);
                openCfgMenu();
            });
            titleCont.appendChild(titleElem);
            headerElem.appendChild(titleCont);
            headerElem.appendChild(closeElem);
            //#SECTION body
            const menuBodyElem = document.createElement("div");
            menuBodyElem.classList.add("bytm-menu-body");
            const textElem = document.createElement("div");
            textElem.id = "bytm-export-menu-text";
            textElem.innerText = t("export_hint");
            const textAreaElem = document.createElement("textarea");
            textAreaElem.id = "bytm-export-menu-textarea";
            textAreaElem.readOnly = true;
            const cfgString = JSON.stringify({ formatVersion, data: getFeatures() });
            textAreaElem.value = canCompress ? yield compress(cfgString, compressionFormat) : cfgString;
            siteEvents.on("configChanged", (data) => __awaiter(this, void 0, void 0, function* () {
                const textAreaElem = document.querySelector("#bytm-export-menu-textarea");
                const cfgString = JSON.stringify({ formatVersion, data });
                if (textAreaElem)
                    textAreaElem.value = canCompress ? yield compress(cfgString, compressionFormat) : cfgString;
            }));
            //#SECTION footer
            const footerElem = document.createElement("div");
            footerElem.classList.add("bytm-menu-footer-right");
            const copyBtnElem = document.createElement("button");
            copyBtnElem.classList.add("bytm-btn");
            copyBtnElem.innerText = t("copy_to_clipboard");
            copyBtnElem.title = t("copy_config_tooltip");
            const copiedTextElem = document.createElement("span");
            copiedTextElem.id = "bytm-export-menu-copied-txt";
            copiedTextElem.classList.add("bytm-menu-footer-copied");
            copiedTextElem.innerText = t("copied_notice");
            copiedTextElem.style.display = "none";
            copyBtnElem.addEventListener("click", (evt) => __awaiter(this, void 0, void 0, function* () {
                (evt === null || evt === void 0 ? void 0 : evt.bubbles) && evt.stopPropagation();
                const textAreaElem = document.querySelector("#bytm-export-menu-textarea");
                if (textAreaElem) {
                    GM.setClipboard(textAreaElem.value);
                    copiedTextElem.style.display = "inline-block";
                    if (typeof copiedTxtTimeout !== "number") {
                        copiedTxtTimeout = setTimeout(() => {
                            copiedTextElem.style.display = "none";
                            copiedTxtTimeout = undefined;
                        }, 3000);
                    }
                }
            }));
            // flex-direction is row-reverse
            footerElem.appendChild(copyBtnElem);
            footerElem.appendChild(copiedTextElem);
            //#SECTION finalize
            menuBodyElem.appendChild(textElem);
            menuBodyElem.appendChild(textAreaElem);
            menuBodyElem.appendChild(footerElem);
            menuContainer.appendChild(headerElem);
            menuContainer.appendChild(menuBodyElem);
            menuBgElem.appendChild(menuContainer);
            document.body.appendChild(menuBgElem);
        });
    }
    /** Closes the export menu if it is open. If a bubbling event is passed, its propagation will be prevented. */
    function closeExportMenu(evt) {
        if (!isExportMenuOpen)
            return;
        isExportMenuOpen = false;
        (evt === null || evt === void 0 ? void 0 : evt.bubbles) && evt.stopPropagation();
        document.body.classList.remove("bytm-disable-scroll");
        const menuBg = document.querySelector("#bytm-export-menu-bg");
        if (!menuBg)
            return warn("Couldn't find export menu background element");
        menuBg.style.visibility = "hidden";
        menuBg.style.display = "none";
        const copiedTxt = document.querySelector("#bytm-export-menu-copied-txt");
        if (copiedTxt) {
            copiedTxt.style.display = "none";
            if (typeof copiedTxtTimeout === "number") {
                clearTimeout(copiedTxtTimeout);
                copiedTxtTimeout = undefined;
            }
        }
    }
    /** Opens the export menu if it is closed */
    function openExportMenu() {
        if (isExportMenuOpen)
            return;
        isExportMenuOpen = true;
        document.body.classList.add("bytm-disable-scroll");
        const menuBg = document.querySelector("#bytm-export-menu-bg");
        if (!menuBg)
            return warn("Couldn't find export menu background element");
        menuBg.style.visibility = "visible";
        menuBg.style.display = "block";
    }
    //#MARKER import menu
    let isImportMenuOpen = false;
    /** Adds a menu to import a configuration from JSON (hidden by default) */
    function addImportMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            const menuBgElem = document.createElement("div");
            menuBgElem.id = "bytm-import-menu-bg";
            menuBgElem.classList.add("bytm-menu-bg");
            menuBgElem.title = t("close_menu_tooltip");
            menuBgElem.style.visibility = "hidden";
            menuBgElem.style.display = "none";
            menuBgElem.addEventListener("click", (e) => {
                var _a;
                if (isImportMenuOpen && ((_a = e.target) === null || _a === void 0 ? void 0 : _a.id) === "bytm-import-menu-bg") {
                    closeImportMenu(e);
                    openCfgMenu();
                }
            });
            document.body.addEventListener("keydown", (e) => {
                if (isImportMenuOpen && e.key === "Escape") {
                    closeImportMenu(e);
                    openCfgMenu();
                }
            });
            const menuContainer = document.createElement("div");
            menuContainer.title = ""; // prevent bg title from propagating downwards
            menuContainer.classList.add("bytm-menu");
            menuContainer.id = "bytm-import-menu";
            //#SECTION title bar
            const headerElem = document.createElement("div");
            headerElem.classList.add("bytm-menu-header");
            const titleCont = document.createElement("div");
            titleCont.className = "bytm-menu-titlecont";
            titleCont.role = "heading";
            titleCont.ariaLevel = "1";
            const titleElem = document.createElement("h2");
            titleElem.className = "bytm-menu-title";
            titleElem.innerText = t("import_menu_title", scriptInfo.name);
            const closeElem = document.createElement("img");
            closeElem.classList.add("bytm-menu-close");
            closeElem.src = yield getResourceUrl("close");
            closeElem.title = t("close_menu_tooltip");
            closeElem.addEventListener("click", (e) => {
                closeImportMenu(e);
                openCfgMenu();
            });
            titleCont.appendChild(titleElem);
            headerElem.appendChild(titleCont);
            headerElem.appendChild(closeElem);
            //#SECTION body
            const menuBodyElem = document.createElement("div");
            menuBodyElem.classList.add("bytm-menu-body");
            const textElem = document.createElement("div");
            textElem.id = "bytm-import-menu-text";
            textElem.innerText = t("import_hint");
            const textAreaElem = document.createElement("textarea");
            textAreaElem.id = "bytm-import-menu-textarea";
            //#SECTION footer
            const footerElem = document.createElement("div");
            footerElem.classList.add("bytm-menu-footer-right");
            const importBtnElem = document.createElement("button");
            importBtnElem.classList.add("bytm-btn");
            importBtnElem.innerText = t("import");
            importBtnElem.title = t("start_import_tooltip");
            importBtnElem.addEventListener("click", (evt) => __awaiter(this, void 0, void 0, function* () {
                (evt === null || evt === void 0 ? void 0 : evt.bubbles) && evt.stopPropagation();
                const textAreaElem = document.querySelector("#bytm-import-menu-textarea");
                if (!textAreaElem)
                    return warn("Couldn't find import menu textarea element");
                try {
                    const decode = (input) => __awaiter(this, void 0, void 0, function* () {
                        try {
                            return JSON.parse(input);
                        }
                        catch (_a) {
                            try {
                                return JSON.parse(yield decompress(input, compressionFormat));
                            }
                            catch (err) {
                                warn("Couldn't import configuration:", err);
                                alert(t("import_error_invalid"));
                            }
                        }
                    });
                    const parsed = yield decode(textAreaElem.value.trim());
                    if (typeof parsed !== "object")
                        return alert(t("import_error_invalid"));
                    if (typeof parsed.formatVersion !== "number")
                        return alert(t("import_error_no_format_version"));
                    if (typeof parsed.data !== "object")
                        return alert(t("import_error_no_data"));
                    if (parsed.formatVersion < formatVersion) {
                        let newData = JSON.parse(JSON.stringify(parsed.data));
                        const sortedMigrations = Object.entries(migrations)
                            .sort(([a], [b]) => Number(a) - Number(b));
                        let curFmtVer = Number(parsed.formatVersion);
                        for (const [fmtVer, migrationFunc] of sortedMigrations) {
                            const ver = Number(fmtVer);
                            if (curFmtVer < formatVersion && curFmtVer < ver) {
                                try {
                                    const migRes = JSON.parse(JSON.stringify(migrationFunc(newData)));
                                    newData = migRes instanceof Promise ? yield migRes : migRes;
                                    curFmtVer = ver;
                                }
                                catch (err) {
                                    console.error(`Error while running migration function for format version ${fmtVer}:`, err);
                                }
                            }
                        }
                        parsed.formatVersion = curFmtVer;
                        parsed.data = newData;
                    }
                    else if (parsed.formatVersion !== formatVersion)
                        return alert(t("import_error_wrong_format_version", formatVersion, parsed.formatVersion));
                    yield saveFeatures(Object.assign(Object.assign({}, getFeatures()), parsed.data));
                    if (confirm(t("import_success_confirm_reload"))) {
                        disableBeforeUnload();
                        return location.reload();
                    }
                    emitSiteEvent("rebuildCfgMenu", parsed.data);
                    closeImportMenu();
                    openCfgMenu();
                }
                catch (err) {
                    warn("Couldn't import configuration:", err);
                    alert(t("import_error_invalid"));
                }
            }));
            footerElem.appendChild(importBtnElem);
            //#SECTION finalize
            menuBodyElem.appendChild(textElem);
            menuBodyElem.appendChild(textAreaElem);
            menuBodyElem.appendChild(footerElem);
            menuContainer.appendChild(headerElem);
            menuContainer.appendChild(menuBodyElem);
            menuBgElem.appendChild(menuContainer);
            document.body.appendChild(menuBgElem);
        });
    }
    /** Closes the import menu if it is open. If a bubbling event is passed, its propagation will be prevented. */
    function closeImportMenu(evt) {
        if (!isImportMenuOpen)
            return;
        isImportMenuOpen = false;
        (evt === null || evt === void 0 ? void 0 : evt.bubbles) && evt.stopPropagation();
        document.body.classList.remove("bytm-disable-scroll");
        const menuBg = document.querySelector("#bytm-import-menu-bg");
        const textAreaElem = document.querySelector("#bytm-import-menu-textarea");
        if (textAreaElem)
            textAreaElem.value = "";
        if (!menuBg)
            return warn("Couldn't find import menu background element");
        menuBg.style.visibility = "hidden";
        menuBg.style.display = "none";
    }
    /** Opens the import menu if it is closed */
    function openImportMenu() {
        if (isImportMenuOpen)
            return;
        isImportMenuOpen = true;
        document.body.classList.add("bytm-disable-scroll");
        const menuBg = document.querySelector("#bytm-import-menu-bg");
        if (!menuBg)
            return warn("Couldn't find import menu background element");
        menuBg.style.visibility = "visible";
        menuBg.style.display = "block";
    }
    //#MARKER changelog menu
    let isChangelogMenuOpen = false;
    /** Adds a changelog menu (hidden by default) */
    function addChangelogMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            const menuBgElem = document.createElement("div");
            menuBgElem.id = "bytm-changelog-menu-bg";
            menuBgElem.classList.add("bytm-menu-bg");
            menuBgElem.title = t("close_menu_tooltip");
            menuBgElem.style.visibility = "hidden";
            menuBgElem.style.display = "none";
            menuBgElem.addEventListener("click", (e) => {
                var _a;
                if (isChangelogMenuOpen && ((_a = e.target) === null || _a === void 0 ? void 0 : _a.id) === "bytm-changelog-menu-bg") {
                    closeChangelogMenu(e);
                    if (menuBgElem.dataset.returnTo === "cfgMenu")
                        openCfgMenu();
                }
            });
            document.body.addEventListener("keydown", (e) => {
                if (isChangelogMenuOpen && e.key === "Escape") {
                    closeChangelogMenu(e);
                    if (menuBgElem.dataset.returnTo === "cfgMenu")
                        openCfgMenu();
                }
            });
            const menuContainer = document.createElement("div");
            menuContainer.title = ""; // prevent bg title from propagating downwards
            menuContainer.classList.add("bytm-menu");
            menuContainer.id = "bytm-changelog-menu";
            //#SECTION title bar
            const headerElem = document.createElement("div");
            headerElem.classList.add("bytm-menu-header");
            const titleCont = document.createElement("div");
            titleCont.className = "bytm-menu-titlecont";
            titleCont.role = "heading";
            titleCont.ariaLevel = "1";
            const titleElem = document.createElement("h2");
            titleElem.className = "bytm-menu-title";
            titleElem.innerText = t("changelog_menu_title", scriptInfo.name);
            const closeElem = document.createElement("img");
            closeElem.classList.add("bytm-menu-close");
            closeElem.src = yield getResourceUrl("close");
            closeElem.title = t("close_menu_tooltip");
            closeElem.addEventListener("click", (e) => {
                closeChangelogMenu(e);
                if (menuBgElem.dataset.returnTo === "cfgMenu")
                    openCfgMenu();
            });
            titleCont.appendChild(titleElem);
            headerElem.appendChild(titleCont);
            headerElem.appendChild(closeElem);
            //#SECTION body
            const menuBodyElem = document.createElement("div");
            menuBodyElem.id = "bytm-changelog-menu-body";
            menuBodyElem.classList.add("bytm-menu-body");
            const textElem = document.createElement("div");
            textElem.id = "bytm-changelog-menu-text";
            textElem.classList.add("bytm-markdown-container");
            textElem.innerHTML = changelog.html;
            //#SECTION finalize
            menuBodyElem.appendChild(textElem);
            menuContainer.appendChild(headerElem);
            menuContainer.appendChild(menuBodyElem);
            menuBgElem.appendChild(menuContainer);
            document.body.appendChild(menuBgElem);
            const anchors = document.querySelectorAll("#bytm-changelog-menu-text a");
            for (const anchor of anchors)
                anchor.target = "_blank";
        });
    }
    /** Closes the changelog menu if it is open. If a bubbling event is passed, its propagation will be prevented. */
    function closeChangelogMenu(evt) {
        if (!isChangelogMenuOpen)
            return;
        isChangelogMenuOpen = false;
        (evt === null || evt === void 0 ? void 0 : evt.bubbles) && evt.stopPropagation();
        document.body.classList.remove("bytm-disable-scroll");
        const menuBg = document.querySelector("#bytm-changelog-menu-bg");
        if (!menuBg)
            return warn("Couldn't find changelog menu background element");
        menuBg.style.visibility = "hidden";
        menuBg.style.display = "none";
    }
    /**
     * Opens the changelog menu if it is closed
     * @param returnTo What menu to open after the changelog menu is closed
     */
    function openChangelogMenu(returnTo = "cfgMenu") {
        if (isChangelogMenuOpen)
            return;
        isChangelogMenuOpen = true;
        document.body.classList.add("bytm-disable-scroll");
        const menuBg = document.querySelector("#bytm-changelog-menu-bg");
        if (!menuBg)
            return warn("Couldn't find changelog menu background element");
        menuBg.dataset.returnTo = returnTo;
        menuBg.style.visibility = "visible";
        menuBg.style.display = "block";
    }

    let features$2;
    function preInitLayout(feats) {
        features$2 = feats;
    }
    //#MARKER BYTM-Config buttons
    let menuOpenAmt = 0, logoExchanged = false, improveLogoCalled = false;
    /** Adds a watermark beneath the logo */
    function addWatermark() {
        return __awaiter(this, void 0, void 0, function* () {
            const watermark = document.createElement("a");
            watermark.role = "button";
            watermark.id = "bytm-watermark";
            watermark.className = "style-scope ytmusic-nav-bar bytm-no-select";
            watermark.innerText = scriptInfo.name;
            watermark.title = t("open_menu_tooltip", scriptInfo.name);
            watermark.tabIndex = 1000;
            improveLogo();
            watermark.addEventListener("click", (e) => {
                e.stopPropagation();
                menuOpenAmt++;
                if ((!e.shiftKey || logoExchanged) && menuOpenAmt !== 5)
                    openCfgMenu();
                if ((!logoExchanged && e.shiftKey) || menuOpenAmt === 5)
                    exchangeLogo();
            });
            // when using the tab key to navigate
            watermark.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    e.stopPropagation();
                    menuOpenAmt++;
                    if ((!e.shiftKey || logoExchanged) && menuOpenAmt !== 5)
                        openCfgMenu();
                    if ((!logoExchanged && e.shiftKey) || menuOpenAmt === 5)
                        exchangeLogo();
                }
            });
            onSelectorOld("ytmusic-nav-bar #left-content", {
                listener: (logoElem) => insertAfter(logoElem, watermark),
            });
            log("Added watermark element");
        });
    }
    /** Turns the regular `<img>`-based logo into inline SVG to be able to animate and modify parts of it */
    function improveLogo() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (improveLogoCalled)
                    return;
                improveLogoCalled = true;
                const res = yield fetchAdvanced("https://music.youtube.com/img/on_platform_logo_dark.svg");
                const svg = yield res.text();
                onSelectorOld("ytmusic-logo a", {
                    listener: (logoElem) => {
                        var _a;
                        logoElem.classList.add("bytm-mod-logo", "bytm-no-select");
                        logoElem.innerHTML = svg;
                        logoElem.querySelectorAll("ellipse").forEach((e) => {
                            e.classList.add("bytm-mod-logo-ellipse");
                        });
                        (_a = logoElem.querySelector("path")) === null || _a === void 0 ? void 0 : _a.classList.add("bytm-mod-logo-path");
                        log("Swapped logo to inline SVG");
                    },
                });
            }
            catch (err) {
                error("Couldn't improve logo due to an error:", err);
            }
        });
    }
    /** Exchanges the default YTM logo into BetterYTM's logo with a sick ass animation */
    function exchangeLogo() {
        onSelectorOld(".bytm-mod-logo", {
            listener: (logoElem) => __awaiter(this, void 0, void 0, function* () {
                if (logoElem.classList.contains("bytm-logo-exchanged"))
                    return;
                logoExchanged = true;
                logoElem.classList.add("bytm-logo-exchanged");
                const iconUrl = yield getResourceUrl("logo");
                const newLogo = document.createElement("img");
                newLogo.className = "bytm-mod-logo-img";
                newLogo.src = iconUrl;
                logoElem.insertBefore(newLogo, logoElem.querySelector("svg"));
                document.head.querySelectorAll("link[rel=\"icon\"]").forEach((e) => {
                    e.href = iconUrl;
                });
                setTimeout(() => {
                    logoElem.querySelectorAll(".bytm-mod-logo-ellipse").forEach(e => e.remove());
                }, 1000);
            }),
        });
    }
    /** Called whenever the avatar popover menu exists to add a BYTM-Configuration button to the user menu popover */
    function addConfigMenuOption(container) {
        return __awaiter(this, void 0, void 0, function* () {
            const cfgOptElem = document.createElement("div");
            cfgOptElem.role = "button";
            cfgOptElem.className = "bytm-cfg-menu-option";
            const cfgOptItemElem = document.createElement("div");
            cfgOptItemElem.className = "bytm-cfg-menu-option-item";
            cfgOptItemElem.ariaLabel = cfgOptItemElem.title = t("open_menu_tooltip", scriptInfo.name);
            cfgOptItemElem.addEventListener("click", (e) => __awaiter(this, void 0, void 0, function* () {
                const settingsBtnElem = document.querySelector("ytmusic-nav-bar ytmusic-settings-button tp-yt-paper-icon-button");
                settingsBtnElem === null || settingsBtnElem === void 0 ? void 0 : settingsBtnElem.click();
                menuOpenAmt++;
                yield pauseFor(100);
                if ((!e.shiftKey || logoExchanged) && menuOpenAmt !== 5)
                    openCfgMenu();
                if ((!logoExchanged && e.shiftKey) || menuOpenAmt === 5)
                    exchangeLogo();
            }));
            const cfgOptIconElem = document.createElement("img");
            cfgOptIconElem.className = "bytm-cfg-menu-option-icon";
            cfgOptIconElem.src = yield getResourceUrl("logo");
            const cfgOptTextElem = document.createElement("div");
            cfgOptTextElem.className = "bytm-cfg-menu-option-text";
            cfgOptTextElem.innerText = t("config_menu_option", scriptInfo.name);
            cfgOptItemElem.appendChild(cfgOptIconElem);
            cfgOptItemElem.appendChild(cfgOptTextElem);
            cfgOptElem.appendChild(cfgOptItemElem);
            container.appendChild(cfgOptElem);
            improveLogo();
            log("Added BYTM-Configuration button to menu popover");
        });
    }
    //#MARKER remove upgrade tab
    /** Removes the "Upgrade" / YT Music Premium tab from the sidebar */
    function removeUpgradeTab() {
        return __awaiter(this, void 0, void 0, function* () {
            onSelectorOld("ytmusic-app-layout tp-yt-app-drawer #contentContainer #guide-content #items ytmusic-guide-entry-renderer:nth-of-type(4)", {
                listener: (tabElemLarge) => {
                    tabElemLarge.remove();
                    log("Removed large upgrade tab");
                },
            });
            onSelectorOld("ytmusic-app-layout #mini-guide ytmusic-guide-renderer #sections ytmusic-guide-section-renderer[is-primary] #items ytmusic-guide-entry-renderer:nth-of-type(4)", {
                listener: (tabElemSmall) => {
                    tabElemSmall.remove();
                    log("Removed small upgrade tab");
                },
            });
        });
    }
    //#MARKER volume slider
    function initVolumeFeatures() {
        return __awaiter(this, void 0, void 0, function* () {
            // not technically an input element but behaves pretty much the same
            onSelectorOld("tp-yt-paper-slider#volume-slider", {
                listener: (sliderElem) => {
                    const volSliderCont = document.createElement("div");
                    volSliderCont.id = "bytm-vol-slider-cont";
                    if (features$2.volumeSliderScrollStep !== featInfo.volumeSliderScrollStep.default) {
                        for (const evtName of ["wheel", "scroll", "mousewheel", "DOMMouseScroll"]) {
                            volSliderCont.addEventListener(evtName, (e) => {
                                var _a, _b;
                                e.preventDefault();
                                // cancels all the other events that would be fired
                                e.stopImmediatePropagation();
                                const delta = (_b = (_a = e.deltaY) !== null && _a !== void 0 ? _a : e.detail) !== null && _b !== void 0 ? _b : 1;
                                const volumeDir = -Math.sign(delta);
                                const newVolume = String(Number(sliderElem.value) + (features$2.volumeSliderScrollStep * volumeDir));
                                sliderElem.value = newVolume;
                                sliderElem.setAttribute("aria-valuenow", newVolume);
                                // make the site actually change the volume
                                sliderElem.dispatchEvent(new Event("change", { bubbles: true }));
                            }, {
                                // takes precedence over the slider's own event listener
                                capture: true,
                            });
                        }
                    }
                    addParent(sliderElem, volSliderCont);
                    if (typeof features$2.volumeSliderSize === "number")
                        setVolSliderSize();
                    if (features$2.volumeSliderLabel)
                        addVolumeSliderLabel(sliderElem, volSliderCont);
                    setVolSliderStep(sliderElem);
                },
            });
        });
    }
    /** Adds a percentage label to the volume slider and tooltip */
    function addVolumeSliderLabel(sliderElem, sliderContainer) {
        const labelElem = document.createElement("div");
        labelElem.id = "bytm-vol-slider-label";
        labelElem.innerText = `${sliderElem.value}%`;
        // prevent video from minimizing
        labelElem.addEventListener("click", (e) => e.stopPropagation());
        const getLabelText = (slider) => { var _a; return t("volume_tooltip", slider.value, (_a = features$2.volumeSliderStep) !== null && _a !== void 0 ? _a : slider.step); };
        const labelFull = getLabelText(sliderElem);
        sliderContainer.setAttribute("title", labelFull);
        sliderElem.setAttribute("title", labelFull);
        sliderElem.setAttribute("aria-valuetext", labelFull);
        const updateLabel = () => {
            const labelFull = getLabelText(sliderElem);
            sliderContainer.setAttribute("title", labelFull);
            sliderElem.setAttribute("title", labelFull);
            sliderElem.setAttribute("aria-valuetext", labelFull);
            const labelElem2 = document.querySelector("#bytm-vol-slider-label");
            if (labelElem2)
                labelElem2.innerText = `${sliderElem.value}%`;
        };
        sliderElem.addEventListener("change", () => updateLabel());
        onSelectorOld("#bytm-vol-slider-cont", {
            listener: (volumeCont) => {
                volumeCont.appendChild(labelElem);
            },
        });
        let lastSliderVal = Number(sliderElem.value);
        // show label if hovering over slider or slider is focused
        const sliderHoverObserver = new MutationObserver(() => {
            if (sliderElem.classList.contains("on-hover") || document.activeElement === sliderElem)
                labelElem.classList.add("bytm-visible");
            else if (labelElem.classList.contains("bytm-visible") || document.activeElement !== sliderElem)
                labelElem.classList.remove("bytm-visible");
            if (Number(sliderElem.value) !== lastSliderVal) {
                lastSliderVal = Number(sliderElem.value);
                updateLabel();
            }
        });
        sliderHoverObserver.observe(sliderElem, {
            attributes: true,
        });
    }
    /** Sets the volume slider to a set size */
    function setVolSliderSize() {
        const { volumeSliderSize: size } = features$2;
        if (typeof size !== "number" || isNaN(Number(size)))
            return;
        addGlobalStyle(`\
#bytm-vol-slider-cont tp-yt-paper-slider#volume-slider {
  width: ${size}px !important;
}`);
    }
    /** Sets the `step` attribute of the volume slider */
    function setVolSliderStep(sliderElem) {
        sliderElem.setAttribute("step", String(features$2.volumeSliderStep));
    }
    //#MARKER anchor improvements
    /** Adds anchors around elements and tweaks existing ones so songs are easier to open in a new tab */
    function addAnchorImprovements() {
        return __awaiter(this, void 0, void 0, function* () {
            //#SECTION carousel shelves
            try {
                const preventDefault = (e) => e.preventDefault();
                /** Adds anchor improvements to &lt;ytmusic-responsive-list-item-renderer&gt; */
                const addListItemAnchors = (items) => {
                    var _a;
                    for (const item of items) {
                        if (item.classList.contains("bytm-anchor-improved"))
                            continue;
                        item.classList.add("bytm-anchor-improved");
                        const thumbnailElem = item.querySelector(".left-items");
                        const titleElem = item.querySelector(".title-column .title a");
                        if (!thumbnailElem || !titleElem)
                            continue;
                        const anchorElem = document.createElement("a");
                        anchorElem.classList.add("bytm-anchor", "bytm-carousel-shelf-anchor");
                        anchorElem.href = (_a = titleElem === null || titleElem === void 0 ? void 0 : titleElem.href) !== null && _a !== void 0 ? _a : "#";
                        anchorElem.target = "_self";
                        anchorElem.role = "button";
                        anchorElem.addEventListener("click", preventDefault);
                        addParent(thumbnailElem, anchorElem);
                    }
                };
                // home page
                onSelectorOld("#contents.ytmusic-section-list-renderer ytmusic-carousel-shelf-renderer ytmusic-responsive-list-item-renderer", {
                    continuous: true,
                    all: true,
                    listener: addListItemAnchors,
                });
                // related tab in /watch
                onSelectorOld("ytmusic-tab-renderer[page-type=\"MUSIC_PAGE_TYPE_TRACK_RELATED\"] ytmusic-responsive-list-item-renderer", {
                    continuous: true,
                    all: true,
                    listener: addListItemAnchors,
                });
                // playlists
                onSelectorOld("#contents.ytmusic-section-list-renderer ytmusic-playlist-shelf-renderer ytmusic-responsive-list-item-renderer", {
                    continuous: true,
                    all: true,
                    listener: addListItemAnchors,
                });
                // generic shelves
                onSelectorOld("#contents.ytmusic-section-list-renderer ytmusic-shelf-renderer ytmusic-responsive-list-item-renderer", {
                    continuous: true,
                    all: true,
                    listener: addListItemAnchors,
                });
            }
            catch (err) {
                error("Couldn't improve carousel shelf anchors due to an error:", err);
            }
            //#SECTION sidebar
            try {
                const addSidebarAnchors = (sidebarCont) => {
                    const items = sidebarCont.parentNode.querySelectorAll("ytmusic-guide-entry-renderer tp-yt-paper-item");
                    improveSidebarAnchors(items);
                    return items.length;
                };
                onSelectorOld("ytmusic-app-layout tp-yt-app-drawer #contentContainer #guide-content #items ytmusic-guide-entry-renderer", {
                    listener: (sidebarCont) => {
                        const itemsAmt = addSidebarAnchors(sidebarCont);
                        log(`Added anchors around ${itemsAmt} sidebar ${autoPlural("item", itemsAmt)}`);
                    },
                });
                onSelectorOld("ytmusic-app-layout #mini-guide ytmusic-guide-renderer ytmusic-guide-section-renderer #items ytmusic-guide-entry-renderer", {
                    listener: (miniSidebarCont) => {
                        const itemsAmt = addSidebarAnchors(miniSidebarCont);
                        log(`Added anchors around ${itemsAmt} mini sidebar ${autoPlural("item", itemsAmt)}`);
                    },
                });
            }
            catch (err) {
                error("Couldn't add anchors to sidebar items due to an error:", err);
            }
        });
    }
    const sidebarPaths = [
        "/",
        "/explore",
        "/library",
    ];
    /**
     * Adds anchors to the sidebar items so they can be opened in a new tab
     * @param sidebarItem
     */
    function improveSidebarAnchors(sidebarItems) {
        sidebarItems.forEach((item, i) => {
            var _a;
            const anchorElem = document.createElement("a");
            anchorElem.classList.add("bytm-anchor", "bytm-no-select");
            anchorElem.role = "button";
            anchorElem.target = "_self";
            anchorElem.href = (_a = sidebarPaths[i]) !== null && _a !== void 0 ? _a : "#";
            anchorElem.title = t("middle_click_open_tab");
            anchorElem.addEventListener("click", (e) => {
                e.preventDefault();
            });
            addParent(item, anchorElem);
        });
    }
    //#MARKER remove share tracking param
    /** Continuously removes the ?si tracking parameter from share URLs */
    function removeShareTrackingParam() {
        return __awaiter(this, void 0, void 0, function* () {
            onSelectorOld("yt-copy-link-renderer input#share-url", {
                continuous: true,
                listener: (inputElem) => {
                    try {
                        const url = new URL(inputElem.value);
                        if (!url.searchParams.has("si"))
                            return;
                        url.searchParams.delete("si");
                        inputElem.value = String(url);
                        log(`Removed tracking parameter from share link: ${url}`);
                    }
                    catch (err) {
                        warn("Couldn't remove tracking parameter from share link due to error:", err);
                    }
                },
            });
        });
    }
    //#MARKER fix margins
    /** Applies global CSS to fix various spacings */
    function fixSpacing() {
        return __awaiter(this, void 0, void 0, function* () {
            addGlobalStyle(`\
ytmusic-carousel-shelf-renderer ytmusic-carousel ytmusic-responsive-list-item-renderer {
  margin-bottom: var(--ytmusic-carousel-item-margin-bottom, 16px) !important;
}

ytmusic-carousel-shelf-renderer ytmusic-carousel {
  --ytmusic-carousel-item-height: 60px !important;
}`);
        });
    }
    /** Adds a button to the queue to scroll to the active song */
    function addScrollToActiveBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            onSelectorOld(".side-panel.modular #tabsContent tp-yt-paper-tab:nth-of-type(1)", {
                listener: (tabElem) => __awaiter(this, void 0, void 0, function* () {
                    const containerElem = document.createElement("div");
                    containerElem.id = "bytm-scroll-to-active-btn-cont";
                    const linkElem = document.createElement("div");
                    linkElem.id = "bytm-scroll-to-active-btn";
                    linkElem.className = "ytmusic-player-bar bytm-generic-btn";
                    linkElem.title = t("scroll_to_playing");
                    linkElem.role = "button";
                    const imgElem = document.createElement("img");
                    imgElem.className = "bytm-generic-btn-img";
                    imgElem.src = yield getResourceUrl("skip_to");
                    linkElem.addEventListener("click", (e) => {
                        const activeItem = document.querySelector(".side-panel.modular .ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"loading\"], .side-panel.modular .ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"playing\"], .side-panel.modular .ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"paused\"]");
                        if (!activeItem)
                            return;
                        e.preventDefault();
                        e.stopImmediatePropagation();
                        activeItem.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                            inline: "center",
                        });
                    });
                    linkElem.appendChild(imgElem);
                    containerElem.appendChild(linkElem);
                    tabElem.appendChild(containerElem);
                }),
            });
        });
    }

    let features$1;
    function preInitInput(feats) {
        features$1 = feats;
    }
    //#MARKER arrow key skip
    function initArrowKeySkip() {
        return __awaiter(this, void 0, void 0, function* () {
            document.addEventListener("keydown", (evt) => {
                var _a, _b, _c, _d;
                if (!["ArrowLeft", "ArrowRight"].includes(evt.code))
                    return;
                // discard the event when a (text) input is currently active, like when editing a playlist
                if (["INPUT", "TEXTAREA", "SELECT"].includes((_b = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.tagName) !== null && _b !== void 0 ? _b : "_"))
                    return info(`Captured valid key to skip forward or backward but the current active element is <${(_c = document.activeElement) === null || _c === void 0 ? void 0 : _c.tagName.toLowerCase()}>, so the keypress is ignored`);
                evt.preventDefault();
                evt.stopImmediatePropagation();
                let skipBy = (_d = features$1.arrowKeySkipBy) !== null && _d !== void 0 ? _d : featInfo.arrowKeySkipBy.default;
                if (evt.code === "ArrowLeft")
                    skipBy *= -1;
                log(`Captured arrow key '${evt.code}' - skipping by ${skipBy} seconds`);
                const vidElem = document.querySelector(videoSelector);
                if (vidElem)
                    vidElem.currentTime = clamp(vidElem.currentTime + skipBy, 0, vidElem.duration);
            });
            log("Added arrow key press listener");
        });
    }
    //#MARKER site switch
    /** switch sites only if current video time is greater than this value */
    const videoTimeThreshold = 3;
    let siteSwitchEnabled = true;
    /** Initializes the site switch feature */
    function initSiteSwitch(domain) {
        return __awaiter(this, void 0, void 0, function* () {
            document.addEventListener("keydown", (e) => {
                const hotkey = features$1.switchSitesHotkey;
                if (siteSwitchEnabled && e.code === hotkey.code && e.shiftKey === hotkey.shift && e.ctrlKey === hotkey.ctrl && e.altKey === hotkey.alt)
                    switchSite(domain === "yt" ? "ytm" : "yt");
            });
            siteEvents.on("hotkeyInputActive", (state) => {
                siteSwitchEnabled = !state;
            });
            log("Initialized site switch listener");
        });
    }
    /** Switches to the other site (between YT and YTM) */
    function switchSite(newDomain) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!(["/watch", "/playlist"].some(v => location.pathname.startsWith(v))))
                    return warn("Not on a supported page, so the site switch is ignored");
                let subdomain;
                if (newDomain === "ytm")
                    subdomain = "music";
                else if (newDomain === "yt")
                    subdomain = "www";
                if (!subdomain)
                    throw new Error(`Unrecognized domain '${newDomain}'`);
                disableBeforeUnload();
                const { pathname, search, hash } = new URL(location.href);
                const vt = yield getVideoTime();
                log(`Found video time of ${vt} seconds`);
                const cleanSearch = search.split("&")
                    .filter((param) => !param.match(/^\??t=/))
                    .join("&");
                const newSearch = typeof vt === "number" && vt > videoTimeThreshold ?
                    cleanSearch.includes("?")
                        ? `${cleanSearch.startsWith("?")
                        ? cleanSearch
                        : "?" + cleanSearch}&t=${vt}`
                        : `?t=${vt}`
                    : cleanSearch;
                const newUrl = `https://${subdomain}.youtube.com${pathname}${newSearch}${hash}`;
                info(`Switching to domain '${newDomain}' at ${newUrl}`);
                location.assign(newUrl);
            }
            catch (err) {
                error("Error while switching site:", err);
            }
        });
    }
    //#MARKER number keys skip to time
    /** Adds the ability to skip to a certain time in the video by pressing a number key (0-9) */
    function initNumKeysSkip() {
        return __awaiter(this, void 0, void 0, function* () {
            document.addEventListener("keydown", (e) => {
                var _a, _b, _c, _d;
                if (!e.key.trim().match(/^[0-9]$/))
                    return;
                if (isCfgMenuOpen)
                    return;
                // discard the event when a (text) input is currently active, like when editing a playlist or when the search bar is focused
                if (document.activeElement !== document.body
                    && !["progress-bar"].includes((_b = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : "_")
                    && !["BUTTON", "A"].includes((_d = (_c = document.activeElement) === null || _c === void 0 ? void 0 : _c.tagName) !== null && _d !== void 0 ? _d : "_"))
                    return info("Captured valid key to skip video to but an unexpected element is focused, so the keypress is ignored");
                const vidElem = document.querySelector(videoSelector);
                if (!vidElem)
                    return warn("Could not find video element, so the keypress is ignored");
                const newVidTime = vidElem.duration / (10 / Number(e.key));
                if (!isNaN(newVidTime)) {
                    log(`Captured number key [${e.key}], skipping to ${Math.floor(newVidTime / 60)}m ${(newVidTime % 60).toFixed(1)}s`);
                    vidElem.currentTime = newVidTime;
                }
            });
            log("Added number key press listener");
        });
    }

    /** Base URL of geniURL */
    const geniUrlBase = "https://api.sv443.net/geniurl";
    /** GeniURL endpoint that gives song metadata when provided with a `?q` or `?artist` and `?song` parameter - [more info](https://api.sv443.net/geniurl) */
    const geniURLSearchTopUrl = `${geniUrlBase}/search/top`;
    /** Ratelimit budget timeframe in seconds - should reflect what's in geniURL's docs */
    const geniUrlRatelimitTimeframe = 30;
    //#MARKER cache
    /** Cache with key format `ARTIST - SONG` (sanitized) and lyrics URLs as values. Used to prevent extraneous requests to geniURL. */
    const lyricsUrlCache = new Map();
    /** How many cache entries can exist at a time - this is used to cap memory usage */
    const maxLyricsCacheSize = 100;
    /**
     * Returns the lyrics URL from the passed un-/sanitized artist and song name, or undefined if the entry doesn't exist yet.
     * **The passed parameters need to be sanitized first!**
     */
    function getLyricsCacheEntry(artists, song) {
        return lyricsUrlCache.get(`${artists} - ${song}`);
    }
    /** Adds the provided entry into the lyrics URL cache */
    function addLyricsCacheEntry(artists, song, lyricsUrl) {
        lyricsUrlCache.set(`${sanitizeArtists(artists)} - ${sanitizeSong(song)}`, lyricsUrl);
        // delete oldest entry if cache gets too big
        if (lyricsUrlCache.size > maxLyricsCacheSize)
            lyricsUrlCache.delete([...lyricsUrlCache.keys()].at(-1));
    }
    //#MARKER media control bar
    let currentSongTitle = "";
    /** Adds a lyrics button to the media controls bar */
    function addMediaCtrlLyricsBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            onSelectorOld(".middle-controls-buttons ytmusic-like-button-renderer#like-button-renderer", { listener: addActualMediaCtrlLyricsBtn });
        });
    }
    /** Actually adds the lyrics button after the like button renderer has been verified to exist */
    function addActualMediaCtrlLyricsBtn(likeContainer) {
        return __awaiter(this, void 0, void 0, function* () {
            const songTitleElem = document.querySelector(".content-info-wrapper > yt-formatted-string");
            if (!songTitleElem)
                return warn("Couldn't find song title element");
            // run parallel without awaiting so the MutationObserver below can observe the title element in time
            (() => __awaiter(this, void 0, void 0, function* () {
                const gUrl = yield getCurrentLyricsUrl();
                const linkElem = yield createLyricsBtn(gUrl !== null && gUrl !== void 0 ? gUrl : undefined);
                linkElem.id = "betterytm-lyrics-button";
                log("Inserted lyrics button into media controls bar");
                insertAfter(likeContainer, linkElem);
            }))();
            currentSongTitle = songTitleElem.title;
            const spinnerIconUrl = yield getResourceUrl("spinner");
            const lyricsIconUrl = yield getResourceUrl("lyrics");
            const errorIconUrl = yield getResourceUrl("error");
            const onMutation = (mutations) => { var _a, mutations_1, mutations_1_1; return __awaiter(this, void 0, void 0, function* () {
                var _b, e_1, _c, _d;
                try {
                    for (_a = true, mutations_1 = __asyncValues(mutations); mutations_1_1 = yield mutations_1.next(), _b = mutations_1_1.done, !_b; _a = true) {
                        _d = mutations_1_1.value;
                        _a = false;
                        const mut = _d;
                        const newTitle = mut.target.title;
                        if (newTitle !== currentSongTitle && newTitle.length > 0) {
                            const lyricsBtn = document.querySelector("#betterytm-lyrics-button");
                            if (!lyricsBtn)
                                continue;
                            info(`Song title changed from '${currentSongTitle}' to '${newTitle}'`);
                            lyricsBtn.style.cursor = "wait";
                            lyricsBtn.style.pointerEvents = "none";
                            const imgElem = lyricsBtn.querySelector("img");
                            imgElem.src = spinnerIconUrl;
                            imgElem.classList.add("bytm-spinner");
                            currentSongTitle = newTitle;
                            const url = yield getCurrentLyricsUrl(); // can take a second or two
                            imgElem.src = lyricsIconUrl;
                            imgElem.classList.remove("bytm-spinner");
                            if (!url) {
                                let artist, song;
                                if ("mediaSession" in navigator && navigator.mediaSession.metadata) {
                                    artist = navigator.mediaSession.metadata.artist;
                                    song = navigator.mediaSession.metadata.title;
                                }
                                const query = artist && song ? "?q=" + encodeURIComponent(sanitizeArtists(artist) + " - " + sanitizeSong(song)) : "";
                                imgElem.src = errorIconUrl;
                                imgElem.title = t("lyrics_not_found_click_open_search");
                                lyricsBtn.style.cursor = "pointer";
                                lyricsBtn.style.pointerEvents = "all";
                                lyricsBtn.style.display = "inline-flex";
                                lyricsBtn.style.visibility = "visible";
                                lyricsBtn.href = `https://genius.com/search${query}`;
                                continue;
                            }
                            lyricsBtn.href = url;
                            lyricsBtn.title = t("open_current_lyrics");
                            lyricsBtn.style.cursor = "pointer";
                            lyricsBtn.style.visibility = "visible";
                            lyricsBtn.style.display = "inline-flex";
                            lyricsBtn.style.pointerEvents = "initial";
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (!_a && !_b && (_c = mutations_1.return)) yield _c.call(mutations_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }); };
            // since YT and YTM don't reload the page on video change, MutationObserver needs to be used to watch for changes in the video title
            const obs = new MutationObserver(onMutation);
            obs.observe(songTitleElem, { attributes: true, attributeFilter: ["title"] });
        });
    }
    //#MARKER utils
    /** Removes everything in parentheses from the passed song name */
    function sanitizeSong(songName) {
        const parensRegex = /\(.+\)/gmi;
        const squareParensRegex = /\[.+\]/gmi;
        // trim right after the song name:
        const sanitized = songName
            .replace(parensRegex, "")
            .replace(squareParensRegex, "");
        return sanitized.trim();
    }
    /** Removes the secondary artist (if it exists) from the passed artists string */
    function sanitizeArtists(artists) {
        artists = artists.split(/\s*\u2022\s*/gmiu)[0]; // split at &bull; [•] character
        if (artists.match(/&/))
            artists = artists.split(/\s*&\s*/gm)[0];
        if (artists.match(/,/))
            artists = artists.split(/,\s*/gm)[0];
        return artists.trim();
    }
    /** Returns the lyrics URL from genius for the currently selected song */
    function getCurrentLyricsUrl() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // In videos the video title contains both artist and song title, in "regular" YTM songs, the video title only contains the song title
                const isVideo = typeof ((_a = document.querySelector("ytmusic-player")) === null || _a === void 0 ? void 0 : _a.hasAttribute("video-mode"));
                const songTitleElem = document.querySelector(".content-info-wrapper > yt-formatted-string");
                const songMetaElem = document.querySelector("span.subtitle > yt-formatted-string :first-child");
                if (!songTitleElem || !songMetaElem)
                    return undefined;
                const songNameRaw = songTitleElem.title;
                let songName = songNameRaw;
                let artistName = songMetaElem.innerText;
                if (isVideo) {
                    // for some fucking reason some music videos have YTM-like song title and artist separation, some don't
                    if (songName.includes("-")) {
                        const split = splitVideoTitle(songName);
                        songName = split.song;
                        artistName = split.artist;
                    }
                }
                const url = yield getGeniusUrl(sanitizeArtists(artistName), sanitizeSong(songName));
                if (url) {
                    emitInterface("bytm:lyricsLoaded", {
                        type: "current",
                        artists: artistName,
                        title: songName,
                        url,
                    });
                }
                return url;
            }
            catch (err) {
                error("Couldn't resolve lyrics URL:", err);
                return undefined;
            }
        });
    }
    /** Fetches the actual lyrics URL from geniURL - **the passed parameters need to be sanitized first!** */
    function getGeniusUrl(artist, song) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cacheEntry = getLyricsCacheEntry(artist, song);
                if (cacheEntry) {
                    info(`Found lyrics URL in cache: ${cacheEntry}`);
                    return cacheEntry;
                }
                const startTs = Date.now();
                const fetchUrl = `${geniURLSearchTopUrl}?disableFuzzy&artist=${encodeURIComponent(artist)}&song=${encodeURIComponent(song)}`;
                log(`Requesting URL from geniURL at '${fetchUrl}'`);
                const fetchRes = yield fetchAdvanced(fetchUrl);
                if (fetchRes.status === 429) {
                    const waitSeconds = Number((_a = fetchRes.headers.get("retry-after")) !== null && _a !== void 0 ? _a : geniUrlRatelimitTimeframe);
                    alert(tp("lyrics_rate_limited", waitSeconds, waitSeconds));
                    return undefined;
                }
                else if (fetchRes.status < 200 || fetchRes.status >= 300) {
                    error(`Couldn't fetch lyrics URL from geniURL - status: ${fetchRes.status} - response: ${(_c = (_b = (yield fetchRes.json()).message) !== null && _b !== void 0 ? _b : yield fetchRes.text()) !== null && _c !== void 0 ? _c : "(none)"}`);
                    return undefined;
                }
                const result = yield fetchRes.json();
                if (typeof result === "object" && result.error) {
                    error("Couldn't fetch lyrics URL:", result.message);
                    return undefined;
                }
                const url = result.url;
                info(`Found lyrics URL (after ${Date.now() - startTs}ms): ${url}`);
                addLyricsCacheEntry(artist, song, url);
                return url;
            }
            catch (err) {
                error("Couldn't get lyrics URL due to error:", err);
                return undefined;
            }
        });
    }
    /** Creates the base lyrics button element */
    function createLyricsBtn(geniusUrl, hideIfLoading = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const linkElem = document.createElement("a");
            linkElem.className = "ytmusic-player-bar bytm-generic-btn";
            linkElem.title = geniusUrl ? t("open_lyrics") : t("lyrics_loading");
            if (geniusUrl)
                linkElem.href = geniusUrl;
            linkElem.role = "button";
            linkElem.target = "_blank";
            linkElem.rel = "noopener noreferrer";
            linkElem.style.visibility = hideIfLoading && geniusUrl ? "initial" : "hidden";
            linkElem.style.display = hideIfLoading && geniusUrl ? "inline-flex" : "none";
            const imgElem = document.createElement("img");
            imgElem.className = "bytm-generic-btn-img";
            imgElem.src = yield getResourceUrl("lyrics");
            linkElem.appendChild(imgElem);
            return linkElem;
        });
    }
    /** Splits a video title that contains a hyphen into an artist and song */
    function splitVideoTitle(title) {
        const [artist, ...rest] = title.split("-").map((v, i) => i < 2 ? v.trim() : v);
        return { artist, song: rest.join("-") };
    }

    let features;
    function preInitSongLists(feats) {
        features = feats;
    }
    /** Initializes the queue buttons */
    function initQueueButtons() {
        return __awaiter(this, void 0, void 0, function* () {
            const addCurrentQueueBtns = (evt) => {
                let amt = 0;
                for (const queueItm of evt.childNodes) {
                    if (!queueItm.classList.contains("bytm-has-queue-btns")) {
                        addQueueButtons(queueItm);
                        amt++;
                    }
                }
                if (amt > 0)
                    log(`Added buttons to ${amt} new queue ${autoPlural("item", amt)}`);
            };
            // current queue
            siteEvents.on("queueChanged", addCurrentQueueBtns);
            siteEvents.on("autoplayQueueChanged", addCurrentQueueBtns);
            const queueItems = document.querySelectorAll("#contents.ytmusic-player-queue > ytmusic-player-queue-item");
            if (queueItems.length > 0) {
                queueItems.forEach(itm => addQueueButtons(itm));
                log(`Added buttons to ${queueItems.length} existing "current song queue" ${autoPlural("item", queueItems)}`);
            }
            // generic lists
            // TODO:FIXME: dragging the items around removes the queue buttons
            const addGenericListQueueBtns = (listElem) => {
                if (listElem.classList.contains("bytm-list-has-queue-btns"))
                    return;
                const queueItems = listElem.querySelectorAll("ytmusic-responsive-list-item-renderer");
                if (queueItems.length === 0)
                    return;
                queueItems.forEach(itm => addQueueButtons(itm, ".flex-columns", ["bytm-generic-list-queue-btn-container"]));
                listElem.classList.add("bytm-list-has-queue-btns");
                log(`Added buttons to ${queueItems.length} new "generic song list" ${autoPlural("item", queueItems)}`);
            };
            const listSelectors = [
                "ytmusic-playlist-shelf-renderer #contents",
                "ytmusic-section-list-renderer[main-page-type=\"MUSIC_PAGE_TYPE_ALBUM\"] ytmusic-shelf-renderer #contents",
                "ytmusic-section-list-renderer[main-page-type=\"MUSIC_PAGE_TYPE_ARTIST\"] ytmusic-shelf-renderer #contents",
            ];
            if (features.listButtonsPlacement === "everywhere") {
                for (const selector of listSelectors) {
                    onSelectorOld(selector, {
                        all: true,
                        continuous: true,
                        listener: (songLists) => {
                            for (const list of songLists)
                                addGenericListQueueBtns(list);
                        },
                    });
                }
            }
            // TODO: support grids?
        });
    }
    /**
     * Adds the buttons to each item in the current song queue.
     * Also observes for changes to add new buttons to new items in the queue.
     * @param queueItem The element with tagname `ytmusic-player-queue-item` to add queue buttons to
     * @param containerParentSelector The selector of the parent element of the queue button container
     * @param classes Extra CSS classes to apply to the container
     */
    function addQueueButtons(queueItem, containerParentSelector = ".song-info", classes = []) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            //#SECTION general queue item stuff
            const queueBtnsCont = document.createElement("div");
            queueBtnsCont.classList.add("bytm-queue-btn-container", ...classes);
            const lyricsIconUrl = yield getResourceUrl("lyrics");
            const deleteIconUrl = yield getResourceUrl("delete");
            //#SECTION lyrics btn
            let lyricsBtnElem;
            if (features.lyricsQueueButton) {
                lyricsBtnElem = yield createLyricsBtn(undefined, false);
                lyricsBtnElem.title = t("open_lyrics");
                lyricsBtnElem.style.display = "inline-flex";
                lyricsBtnElem.style.visibility = "initial";
                lyricsBtnElem.style.pointerEvents = "initial";
                lyricsBtnElem.addEventListener("click", (e) => __awaiter(this, void 0, void 0, function* () {
                    e.stopPropagation();
                    const songInfo = queueItem.querySelector(".song-info");
                    if (!songInfo)
                        return;
                    const [songEl, artistEl] = songInfo.querySelectorAll("yt-formatted-string");
                    const song = songEl === null || songEl === void 0 ? void 0 : songEl.innerText;
                    const artist = artistEl === null || artistEl === void 0 ? void 0 : artistEl.innerText;
                    if (!song || !artist)
                        return;
                    let lyricsUrl;
                    const artistsSan = sanitizeArtists(artist);
                    const songSan = sanitizeSong(song);
                    const splitTitle = splitVideoTitle(songSan);
                    const cachedLyricsUrl = songSan.includes("-")
                        ? getLyricsCacheEntry(splitTitle.artist, splitTitle.song)
                        : getLyricsCacheEntry(artistsSan, songSan);
                    if (cachedLyricsUrl)
                        lyricsUrl = cachedLyricsUrl;
                    else if (!songInfo.hasAttribute("data-bytm-loading")) {
                        const imgEl = lyricsBtnElem === null || lyricsBtnElem === void 0 ? void 0 : lyricsBtnElem.querySelector("img");
                        if (!imgEl)
                            return;
                        if (!cachedLyricsUrl) {
                            songInfo.setAttribute("data-bytm-loading", "");
                            imgEl.src = yield getResourceUrl("spinner");
                            imgEl.classList.add("bytm-spinner");
                        }
                        lyricsUrl = cachedLyricsUrl !== null && cachedLyricsUrl !== void 0 ? cachedLyricsUrl : yield getGeniusUrl(artistsSan, songSan);
                        if (lyricsUrl) {
                            emitInterface("bytm:lyricsLoaded", {
                                type: "queue",
                                artists: artist,
                                title: song,
                                url: lyricsUrl,
                            });
                        }
                        const resetImgElem = () => {
                            imgEl.src = lyricsIconUrl;
                            imgEl.classList.remove("bytm-spinner");
                        };
                        if (!cachedLyricsUrl) {
                            songInfo.removeAttribute("data-bytm-loading");
                            // so the new image doesn't "blink"
                            setTimeout(resetImgElem, 100);
                        }
                        if (!lyricsUrl) {
                            resetImgElem();
                            if (confirm(t("lyrics_not_found_confirm_open_search")))
                                openInNewTab(`https://genius.com/search?q=${encodeURIComponent(`${artistsSan} - ${songSan}`)}`);
                            return;
                        }
                    }
                    lyricsUrl && openInNewTab(lyricsUrl);
                }));
            }
            //#SECTION delete from queue btn
            let deleteBtnElem;
            if (features.deleteFromQueueButton) {
                deleteBtnElem = document.createElement("a");
                Object.assign(deleteBtnElem, {
                    title: t("remove_from_queue"),
                    className: "ytmusic-player-bar bytm-delete-from-queue bytm-generic-btn",
                    role: "button",
                });
                deleteBtnElem.style.visibility = "initial";
                deleteBtnElem.addEventListener("click", (e) => __awaiter(this, void 0, void 0, function* () {
                    e.stopPropagation();
                    // container of the queue item popup menu - element gets reused for every queue item
                    let queuePopupCont = document.querySelector("ytmusic-app ytmusic-popup-container tp-yt-iron-dropdown");
                    try {
                        // three dots button to open the popup menu of a queue item
                        const dotsBtnElem = queueItem.querySelector("ytmusic-menu-renderer yt-button-shape button");
                        if (queuePopupCont)
                            queuePopupCont.setAttribute("data-bytm-hidden", "true");
                        dotsBtnElem === null || dotsBtnElem === void 0 ? void 0 : dotsBtnElem.click();
                        yield pauseFor(20);
                        queuePopupCont = document.querySelector("ytmusic-app ytmusic-popup-container tp-yt-iron-dropdown");
                        queuePopupCont === null || queuePopupCont === void 0 ? void 0 : queuePopupCont.setAttribute("data-bytm-hidden", "true");
                        // a little bit janky and unreliable but the only way afaik
                        const removeFromQueueBtn = queuePopupCont === null || queuePopupCont === void 0 ? void 0 : queuePopupCont.querySelector("tp-yt-paper-listbox ytmusic-menu-service-item-renderer:nth-of-type(3)");
                        yield pauseFor(10);
                        removeFromQueueBtn === null || removeFromQueueBtn === void 0 ? void 0 : removeFromQueueBtn.click();
                    }
                    catch (err) {
                        error("Couldn't remove song from queue due to error:", err);
                    }
                    finally {
                        queuePopupCont === null || queuePopupCont === void 0 ? void 0 : queuePopupCont.removeAttribute("data-bytm-hidden");
                    }
                }));
                const imgElem = document.createElement("img");
                imgElem.className = "bytm-generic-btn-img";
                imgElem.src = deleteIconUrl;
                deleteBtnElem.appendChild(imgElem);
            }
            //#SECTION append elements to DOM
            lyricsBtnElem && queueBtnsCont.appendChild(lyricsBtnElem);
            deleteBtnElem && queueBtnsCont.appendChild(deleteBtnElem);
            (_a = queueItem.querySelector(containerParentSelector)) === null || _a === void 0 ? void 0 : _a.appendChild(queueBtnsCont);
            queueItem.classList.add("bytm-has-queue-btns");
        });
    }

    //#MARKER feature dependencies
    const localeOptions = Object.entries(locales).reduce((a, [locale, { name }]) => {
        return [...a, {
                value: locale,
                label: name,
            }];
    }, [])
        .sort((a, b) => a.label.localeCompare(b.label));
    //#MARKER features
    /**
     * Contains all possible features with their default values and other configuration.
     *
     * **Required props:**
     * | Property | Description |
     * | :-- | :-- |
     * | `type` | type of the feature - see below for possible values |
     * | `category` | category of the feature - see what `FeatureCategory` above expands to for possible values |
     * | `default` | default value of the feature - type of the value depends on the `type` property |
     * | `enable(value: any)` | function that will be called when the feature is enabled / initialized for the first time |
     *
     * **Optional props:**
     * | Property | Description |
     * | :-- | :-- |
     * | `disable(newValue: any)` | for type `toggle` only - function that will be called when the feature is disabled - can be a synchronous or asynchronous function |
     * | `change(prevValue: any, newValue: any)` | for types `number`, `select`, `slider` and `hotkey` only - function that will be called when the value is changed |
     * | `helpText(): string` | function that returns an HTML string that will be the help text for this feature - useful for pluralizing or inserting values into the translation - if not set, translation with key `feature_helptext_featureKey` will be used instead |
     * | `hidden` | if true, the feature will not be shown in the settings - default is undefined (false) |
     * | `min` | Only if type is `number` or `slider` - Overwrites the default of the `min` property of the HTML input element |
     * | `max` | Only if type is `number` or `slider` - Overwrites the default of the `max` property of the HTML input element |
     * | `step` | Only if type is `number` or `slider` - Overwrites the default of the `step` property of the HTML input element |
     * | `unit` | Only if type is `number` or `slider` - The unit text that is displayed next to the input element |
     *
     * **Notes:**
     * - If no `disable()` or `change()` function is present, the page needs to be reloaded for the changes to take effect
     */
    const featInfo = {
        //#SECTION layout
        removeUpgradeTab: {
            type: "toggle",
            category: "layout",
            default: true,
            enable: () => void "TODO",
        },
        volumeSliderLabel: {
            type: "toggle",
            category: "layout",
            default: true,
            enable: () => void "TODO",
            disable: () => void "TODO",
        },
        volumeSliderSize: {
            type: "number",
            category: "layout",
            min: 50,
            max: 500,
            step: 5,
            default: 150,
            unit: "px",
            enable: () => void "TODO",
            change: () => void "TODO",
        },
        volumeSliderStep: {
            type: "slider",
            category: "layout",
            min: 1,
            max: 25,
            default: 2,
            unit: "%",
            enable: () => void "TODO",
            change: () => void "TODO",
        },
        volumeSliderScrollStep: {
            type: "slider",
            category: "layout",
            min: 1,
            max: 25,
            default: 10,
            unit: "%",
            enable: () => void "TODO",
            change: () => void "TODO",
        },
        watermarkEnabled: {
            type: "toggle",
            category: "layout",
            default: true,
            enable: () => void "TODO",
            disable: () => void "TODO",
        },
        removeShareTrackingParam: {
            type: "toggle",
            category: "layout",
            default: true,
            enable: () => void "TODO",
            disable: () => void "TODO",
        },
        fixSpacing: {
            type: "toggle",
            category: "layout",
            default: true,
            enable: () => void "TODO",
            disable: () => void "TODO",
        },
        scrollToActiveSongBtn: {
            type: "toggle",
            category: "layout",
            default: true,
            enable: () => void "TODO",
            disable: () => void "TODO",
        },
        //#SECTION song lists
        lyricsQueueButton: {
            type: "toggle",
            category: "songLists",
            default: true,
            enable: () => void "TODO",
            disable: () => void "TODO",
        },
        deleteFromQueueButton: {
            type: "toggle",
            category: "songLists",
            default: true,
            enable: () => void "TODO",
            disable: () => void "TODO",
        },
        listButtonsPlacement: {
            type: "select",
            category: "songLists",
            options: () => [
                { value: "queueOnly", label: t("list_button_placement_queue_only") },
                { value: "everywhere", label: t("list_button_placement_everywhere") },
            ],
            default: "everywhere",
            enable: () => void "TODO",
            disable: () => void "TODO",
        },
        //#SECTION behavior
        disableBeforeUnloadPopup: {
            type: "toggle",
            category: "behavior",
            default: false,
            enable: () => void "TODO",
        },
        closeToastsTimeout: {
            type: "number",
            category: "behavior",
            min: 0,
            max: 30,
            step: 0.5,
            default: 0,
            unit: "s",
            enable: () => void "TODO",
            change: () => void "TODO",
        },
        rememberSongTime: {
            type: "toggle",
            category: "behavior",
            default: true,
            enable: () => void "TODO",
            disable: () => void "TODO",
            helpText: () => tp("feature_helptext_rememberSongTime", remSongMinPlayTime, remSongMinPlayTime)
        },
        rememberSongTimeSites: {
            type: "select",
            category: "behavior",
            options: () => [
                { value: "all", label: t("remember_song_time_sites_all") },
                { value: "yt", label: t("remember_song_time_sites_yt") },
                { value: "ytm", label: t("remember_song_time_sites_ytm") },
            ],
            default: "ytm",
            enable: () => void "TODO",
            change: () => void "TODO",
        },
        //#SECTION input
        arrowKeySupport: {
            type: "toggle",
            category: "input",
            default: true,
            enable: () => void "TODO",
            disable: () => void "TODO",
        },
        arrowKeySkipBy: {
            type: "number",
            category: "input",
            min: 0.5,
            max: 60,
            step: 0.5,
            default: 5,
            enable: () => void "TODO",
            change: () => void "TODO",
        },
        switchBetweenSites: {
            type: "toggle",
            category: "input",
            default: true,
            enable: () => void "TODO",
            disable: () => void "TODO",
        },
        switchSitesHotkey: {
            type: "hotkey",
            category: "input",
            default: {
                code: "F9",
                shift: false,
                ctrl: false,
                alt: false,
            },
            enable: () => void "TODO",
            change: () => void "TODO",
        },
        anchorImprovements: {
            type: "toggle",
            category: "input",
            default: true,
            enable: () => void "TODO",
            disable: () => void "TODO",
        },
        numKeysSkipToTime: {
            type: "toggle",
            category: "input",
            default: true,
            enable: () => void "TODO",
            disable: () => void "TODO",
        },
        //#SECTION lyrics
        geniusLyrics: {
            type: "toggle",
            category: "lyrics",
            default: true,
            enable: () => void "TODO",
            disable: () => void "TODO",
        },
        //#SECTION general
        locale: {
            type: "select",
            category: "general",
            options: localeOptions,
            default: getPreferredLocale(),
            enable: () => void "TODO",
        },
        logLevel: {
            type: "select",
            category: "general",
            options: () => [
                { value: 0, label: t("log_level_debug") },
                { value: 1, label: t("log_level_info") },
            ],
            default: 1,
            enable: () => void "TODO",
        },
    };

    /** If this number is incremented, the features object data will be migrated to the new format */
    const formatVersion = 4;
    /** Config data format migration dictionary */
    const migrations = {
        // 1 -> 2
        2: (oldData) => {
            const queueBtnsEnabled = Boolean(oldData.queueButtons);
            delete oldData.queueButtons;
            return Object.assign(Object.assign({}, oldData), { deleteFromQueueButton: queueBtnsEnabled, lyricsQueueButton: queueBtnsEnabled });
        },
        // 2 -> 3
        3: (oldData) => (Object.assign(Object.assign({}, oldData), { removeShareTrackingParam: getFeatureDefault("removeShareTrackingParam"), numKeysSkipToTime: getFeatureDefault("numKeysSkipToTime"), fixSpacing: getFeatureDefault("fixSpacing"), scrollToActiveSongBtn: getFeatureDefault("scrollToActiveSongBtn"), logLevel: getFeatureDefault("logLevel") })),
        // 3 -> 4
        4: (oldData) => {
            var _a, _b, _c, _d;
            const oldSwitchSitesHotkey = oldData.switchSitesHotkey;
            return Object.assign(Object.assign({}, oldData), { locale: getFeatureDefault("locale"), rememberSongTime: getFeatureDefault("rememberSongTime"), rememberSongTimeSites: getFeatureDefault("rememberSongTimeSites"), arrowKeySkipBy: 10, switchSitesHotkey: {
                    code: (_a = oldSwitchSitesHotkey.key) !== null && _a !== void 0 ? _a : "F9",
                    shift: Boolean((_b = oldSwitchSitesHotkey.shift) !== null && _b !== void 0 ? _b : false),
                    ctrl: Boolean((_c = oldSwitchSitesHotkey.ctrl) !== null && _c !== void 0 ? _c : false),
                    alt: Boolean((_d = oldSwitchSitesHotkey.meta) !== null && _d !== void 0 ? _d : false),
                }, listButtonsPlacement: "queueOnly", volumeSliderScrollStep: getFeatureDefault("volumeSliderScrollStep") });
        },
    };
    function getFeatureDefault(key) {
        return featInfo[key].default;
    }
    const defaultConfig = Object.keys(featInfo)
        .reduce((acc, key) => {
        acc[key] = featInfo[key].default;
        return acc;
    }, {});
    const cfgMgr = new ConfigManager({
        id: "bytm-config",
        formatVersion,
        defaultConfig,
        migrations,
    });
    /** Initializes the ConfigManager instance and loads persistent data into memory */
    function initConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            const oldFmtVer = Number(yield GM.getValue(`_uucfgver-${cfgMgr.id}`, NaN));
            const data = yield cfgMgr.loadData();
            log(`Initialized ConfigManager (format version = ${cfgMgr.formatVersion})`);
            if (isNaN(oldFmtVer))
                info("Config data initialized with default values");
            else if (oldFmtVer !== cfgMgr.formatVersion)
                info(`Config data migrated from version ${oldFmtVer} to ${cfgMgr.formatVersion}`);
            return data;
        });
    }
    /** Returns the current feature config from the in-memory cache */
    function getFeatures() {
        return cfgMgr.getData();
    }
    /** Saves the feature config synchronously to the in-memory cache and asynchronously to the persistent storage */
    function saveFeatures(featureConf) {
        const res = cfgMgr.setData(featureConf);
        emitSiteEvent("configChanged", cfgMgr.getData());
        info("Saved new feature config:", featureConf);
        return res;
    }
    /** Saves the default feature config synchronously to the in-memory cache and asynchronously to persistent storage */
    function setDefaultFeatures() {
        const res = cfgMgr.saveDefaultData();
        emitSiteEvent("configChanged", cfgMgr.getData());
        info("Reset feature config to its default values");
        return res;
    }
    /** Clears the feature config from the persistent storage - since the cache will be out of whack, this should only be run before a site re-/unload */
    function clearConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            yield cfgMgr.deleteConfig();
            info("Deleted config from persistent storage");
        });
    }

    //#MARKER menu
    let isWelcomeMenuOpen = false;
    /** Adds the welcome menu to the DOM */
    function addWelcomeMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            //#SECTION backdrop & menu container
            const backgroundElem = document.createElement("div");
            backgroundElem.id = "bytm-welcome-menu-bg";
            backgroundElem.classList.add("bytm-menu-bg");
            backgroundElem.style.visibility = "hidden";
            backgroundElem.style.display = "none";
            const menuContainer = document.createElement("div");
            menuContainer.title = ""; // prevent bg title from propagating downwards
            menuContainer.classList.add("bytm-menu");
            menuContainer.id = "bytm-welcome-menu";
            //#SECTION title bar
            const headerElem = document.createElement("div");
            headerElem.classList.add("bytm-menu-header");
            const titleWrapperElem = document.createElement("div");
            titleWrapperElem.id = "bytm-welcome-menu-title-wrapper";
            const titleLogoElem = document.createElement("img");
            titleLogoElem.id = "bytm-welcome-menu-title-logo";
            titleLogoElem.classList.add("bytm-no-select");
            titleLogoElem.src = yield getResourceUrl("logo");
            const titleElem = document.createElement("h2");
            titleElem.id = "bytm-welcome-menu-title";
            titleElem.className = "bytm-menu-title";
            titleElem.role = "heading";
            titleElem.ariaLevel = "1";
            titleWrapperElem.appendChild(titleLogoElem);
            titleWrapperElem.appendChild(titleElem);
            headerElem.appendChild(titleWrapperElem);
            //#SECTION footer
            const footerCont = document.createElement("div");
            footerCont.id = "bytm-welcome-menu-footer-cont";
            footerCont.className = "bytm-menu-footer-cont";
            const openCfgElem = document.createElement("button");
            openCfgElem.id = "bytm-welcome-menu-open-cfg";
            openCfgElem.classList.add("bytm-btn");
            openCfgElem.addEventListener("click", () => {
                closeWelcomeMenu();
                openCfgMenu();
            });
            const openChangelogElem = document.createElement("button");
            openChangelogElem.id = "bytm-welcome-menu-open-changelog";
            openChangelogElem.classList.add("bytm-btn");
            openChangelogElem.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
                closeWelcomeMenu();
                yield addCfgMenu();
                openChangelogMenu("exit");
            }));
            const closeBtnElem = document.createElement("button");
            closeBtnElem.id = "bytm-welcome-menu-footer-close";
            closeBtnElem.classList.add("bytm-btn");
            closeBtnElem.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
                closeWelcomeMenu();
            }));
            const leftButtonsCont = document.createElement("div");
            leftButtonsCont.id = "bytm-menu-footer-left-buttons-cont";
            leftButtonsCont.appendChild(openCfgElem);
            leftButtonsCont.appendChild(openChangelogElem);
            footerCont.appendChild(leftButtonsCont);
            footerCont.appendChild(closeBtnElem);
            //#SECTION content
            const contentWrapper = document.createElement("div");
            contentWrapper.id = "bytm-welcome-menu-content-wrapper";
            // locale switcher
            const localeCont = document.createElement("div");
            localeCont.id = "bytm-welcome-menu-locale-cont";
            const localeImg = document.createElement("img");
            localeImg.id = "bytm-welcome-menu-locale-img";
            localeImg.classList.add("bytm-no-select");
            localeImg.src = yield getResourceUrl("globe");
            const localeSelectElem = document.createElement("select");
            localeSelectElem.id = "bytm-welcome-menu-locale-select";
            for (const [locale, { name }] of Object.entries(locales)) {
                const localeOptionElem = document.createElement("option");
                localeOptionElem.value = locale;
                localeOptionElem.innerText = name;
                localeSelectElem.appendChild(localeOptionElem);
            }
            localeSelectElem.value = getFeatures().locale;
            localeSelectElem.addEventListener("change", () => __awaiter(this, void 0, void 0, function* () {
                const selectedLocale = localeSelectElem.value;
                const feats = Object.assign({}, getFeatures());
                feats.locale = selectedLocale;
                saveFeatures(feats);
                yield initTranslations(selectedLocale);
                setLocale(selectedLocale);
                retranslateWelcomeMenu();
            }));
            localeCont.appendChild(localeImg);
            localeCont.appendChild(localeSelectElem);
            contentWrapper.appendChild(localeCont);
            // text
            const textCont = document.createElement("div");
            textCont.id = "bytm-welcome-menu-text-cont";
            const textElem = document.createElement("p");
            textElem.id = "bytm-welcome-menu-text";
            const textElems = [];
            const line1Elem = document.createElement("span");
            line1Elem.id = "bytm-welcome-text-line1";
            textElems.push(line1Elem);
            const br1Elem = document.createElement("br");
            textElems.push(br1Elem);
            const line2Elem = document.createElement("span");
            line2Elem.id = "bytm-welcome-text-line2";
            textElems.push(line2Elem);
            const br2Elem = document.createElement("br");
            textElems.push(br2Elem);
            const br3Elem = document.createElement("br");
            textElems.push(br3Elem);
            const line3Elem = document.createElement("span");
            line3Elem.id = "bytm-welcome-text-line3";
            textElems.push(line3Elem);
            const br4Elem = document.createElement("br");
            textElems.push(br4Elem);
            const line4Elem = document.createElement("span");
            line4Elem.id = "bytm-welcome-text-line4";
            textElems.push(line4Elem);
            const br5Elem = document.createElement("br");
            textElems.push(br5Elem);
            const br6Elem = document.createElement("br");
            textElems.push(br6Elem);
            const line5Elem = document.createElement("span");
            line5Elem.id = "bytm-welcome-text-line5";
            textElems.push(line5Elem);
            textElems.forEach((elem) => textElem.appendChild(elem));
            textCont.appendChild(textElem);
            contentWrapper.appendChild(textCont);
            //#SECTION finalize
            menuContainer.appendChild(headerElem);
            menuContainer.appendChild(contentWrapper);
            menuContainer.appendChild(footerCont);
            backgroundElem.appendChild(menuContainer);
            document.body.appendChild(backgroundElem);
            retranslateWelcomeMenu();
        });
    }
    //#MARKER (re-)translate
    /** Retranslates all elements inside the welcome menu */
    function retranslateWelcomeMenu() {
        const getLink = (href) => {
            return [`<a href="${href}" class="bytm-link" target="_blank" rel="noopener noreferrer">`, "</a>"];
        };
        const changes = {
            "#bytm-welcome-menu-title": (e) => e.innerText = t("welcome_menu_title", scriptInfo.name),
            "#bytm-welcome-menu-title-close": (e) => e.title = t("close_menu_tooltip"),
            "#bytm-welcome-menu-open-cfg": (e) => {
                e.innerText = t("config_menu");
                e.title = t("open_config_menu_tooltip");
            },
            "#bytm-welcome-menu-open-changelog": (e) => {
                e.innerText = t("open_changelog");
                e.title = t("open_changelog_tooltip");
            },
            "#bytm-welcome-menu-footer-close": (e) => {
                e.innerText = t("close");
                e.title = t("close_menu_tooltip");
            },
            "#bytm-welcome-text-line1": (e) => e.innerHTML = t("welcome_text_line_1"),
            "#bytm-welcome-text-line2": (e) => e.innerHTML = t("welcome_text_line_2", scriptInfo.name),
            "#bytm-welcome-text-line3": (e) => e.innerHTML = t("welcome_text_line_3", scriptInfo.name, ...getLink(`${pkg.cdn.greasyfork}/feedback`), ...getLink(pkg.cdn.openuserjs)),
            "#bytm-welcome-text-line4": (e) => e.innerHTML = t("welcome_text_line_4", ...getLink(pkg.funding.url)),
            "#bytm-welcome-text-line5": (e) => e.innerHTML = t("welcome_text_line_5", ...getLink(pkg.bugs.url)),
        };
        for (const [selector, cb] of Object.entries(changes)) {
            const elem = document.querySelector(selector);
            if (!elem) {
                warn(`Couldn't find element ${selector} in welcome menu`);
                continue;
            }
            cb(elem);
        }
    }
    /** Closes the welcome menu if it is open. If a bubbling event is passed, its propagation will be prevented. */
    function closeWelcomeMenu(evt) {
        if (!isWelcomeMenuOpen)
            return;
        isWelcomeMenuOpen = false;
        (evt === null || evt === void 0 ? void 0 : evt.bubbles) && evt.stopPropagation();
        document.body.classList.remove("bytm-disable-scroll");
        const menuBg = document.querySelector("#bytm-welcome-menu-bg");
        siteEvents.emit("welcomeMenuClosed");
        if (!menuBg)
            return warn("Couldn't find welcome menu background element");
        menuBg.style.visibility = "hidden";
        menuBg.style.display = "none";
    }
    //#MARKER open, show & close
    /** Opens the welcome menu if it is closed */
    function openWelcomeMenu() {
        if (isWelcomeMenuOpen)
            return;
        isWelcomeMenuOpen = true;
        document.body.classList.add("bytm-disable-scroll");
        const menuBg = document.querySelector("#bytm-welcome-menu-bg");
        if (!menuBg)
            return warn("Couldn't find welcome menu background element");
        menuBg.style.visibility = "visible";
        menuBg.style.display = "block";
    }
    /** Shows the welcome menu and returns a promise that resolves when the menu is closed */
    function showWelcomeMenu() {
        return new Promise((resolve) => {
            const unsub = siteEvents.on("welcomeMenuClosed", () => {
                unsub();
                resolve();
            });
            openWelcomeMenu();
        });
    }

    {
        // console watermark with sexy gradient
        const styleGradient = "background: rgba(165, 38, 38, 1); background: linear-gradient(90deg, rgb(154, 31, 103) 0%, rgb(135, 31, 31) 40%, rgb(184, 64, 41) 100%);";
        const styleCommon = "color: #fff; font-size: 1.5em; padding-left: 6px; padding-right: 6px;";
        console.log();
        console.log(`%c${scriptInfo.name}%cv${scriptInfo.version}%c\n\nBuild #${scriptInfo.buildNumber} ─ ${scriptInfo.namespace}`, `font-weight: bold; ${styleCommon} ${styleGradient}`, `background-color: #333; ${styleCommon}`, "padding: initial;");
        console.log([
            "Powered by:",
            "─ lots of ambition",
            `─ my song metadata API: ${geniUrlBase}`,
            "─ my userscript utility library: https://github.com/Sv443-Network/UserUtils",
            "─ this tiny event listener library: https://github.com/ai/nanoevents",
        ].join("\n"));
        console.log();
    }
    let domLoaded = false;
    const domain = getDomain();
    /** Stuff that needs to be called ASAP, before anything async happens */
    function preInit() {
        log("Session ID:", getSessionId());
        initInterface();
        setLogLevel(defaultLogLevel);
        if (domain === "ytm")
            initBeforeUnloadHook();
        init();
    }
    function init() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                registerMenuCommands();
            }
            catch (e) {
            }
            try {
                document.addEventListener("DOMContentLoaded", () => {
                    domLoaded = true;
                });
                const features = yield initConfig();
                yield initTranslations((_a = features.locale) !== null && _a !== void 0 ? _a : "en_US");
                setLocale((_b = features.locale) !== null && _b !== void 0 ? _b : "en_US");
                setLogLevel(features.logLevel);
                preInitLayout(features);
                preInitBehavior(features);
                preInitInput(features);
                preInitSongLists(features);
                if (features.disableBeforeUnloadPopup && domain === "ytm")
                    disableBeforeUnload();
                if (!domLoaded)
                    document.addEventListener("DOMContentLoaded", onDomLoad);
                else
                    onDomLoad();
                if (features.rememberSongTime)
                    initRememberSongTime();
            }
            catch (err) {
                error("General Error:", err);
            }
            // init menu separately from features
            try {
                void "TODO(v1.2):";
                // initMenu();
            }
            catch (err) {
                error("Couldn't initialize menu:", err);
            }
        });
    }
    /** Called when the DOM has finished loading and can be queried and altered by the userscript */
    function onDomLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            // post-build these double quotes are replaced by backticks (because if backticks are used here, the bundler converts them to double quotes)
            addGlobalStyle(`.bytm-menu-bg {
  --bytm-menu-bg: #333333;
  --bytm-menu-bg-highlight: #252525;
  --bytm-scroll-indicator-bg: rgba(10, 10, 10, 0.7);
  --bytm-menu-separator-color: #797979;
  --bytm-menu-border-radius: 10px;
}

#bytm-cfg-menu-bg {
  --bytm-menu-height-max: 750px;
  --bytm-menu-width-max: 1000px;
}

#bytm-changelog-menu-bg {
  --bytm-menu-height-max: 800px;
  --bytm-menu-width-max: 800px;
}

#bytm-export-menu-bg, #bytm-import-menu-bg {
  --bytm-menu-height-max: 500px;
  --bytm-menu-width-max: 600px;
}

#bytm-feat-help-menu-bg {
  --bytm-menu-height-max: 400px;
  --bytm-menu-width-max: 600px;
}

.bytm-menu-bg {
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 15;
  background-color: rgba(0, 0, 0, 0.6);
}

.bytm-menu {
  position: fixed;
  display: flex;
  flex-direction: column;
  width: calc(min(100% - 60px, var(--bytm-menu-width-max)));
  border-radius: var(--bytm-menu-border-radius);
  height: auto;
  max-height: calc(min(100% - 40px, var(--bytm-menu-height-max)));
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 16;
  color: #fff;
  background-color: var(--bytm-menu-bg);
}

.bytm-menu-body {
  padding: 20px;
}

#bytm-menu-opts {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 30px 0px;
  overflow-y: auto;
}

.bytm-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
  padding: 15px 20px 15px 20px;
  background-color: var(--bytm-menu-bg);
  border: 2px solid var(--bytm-menu-separator-color);
  border-style: none none solid none;
  border-radius: var(--bytm-menu-border-radius) var(--bytm-menu-border-radius) 0px 0px;
}

.bytm-menu-header.small {
  padding: 10px 15px;
}

.bytm-menu-titlecont {
  display: flex;
  align-items: center;
}

.bytm-menu-titlecont-no-title {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.bytm-menu-title {
  display: inline-block;
  font-size: 22px;
}

#bytm-menu-linkscont {
  display: flex;
  align-items: center;
  margin-left: 32px;
}

.bytm-menu-link {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.bytm-menu-link:not(:last-of-type) {
  margin-right: 10px;
}

.bytm-menu-close {
  width: 32px;
  height: 32px;
  cursor: pointer;
}

.bytm-menu-close.small {
  width: 24px;
  height: 24px;
}

.bytm-menu-footer {
  font-size: 17px;
  text-decoration: underline;
}

.bytm-menu-footer-cont {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 6px;
  padding: 20px 20px 8px 20px;
  background: var(--bytm-menu-bg);
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, var(--bytm-menu-bg) 30%, var(--bytm-menu-bg) 100%);
  border: 2px solid var(--bytm-menu-separator-color);
  border-style: solid none none none;
}

#bytm-menu-footer-buttons-cont button:not(:last-of-type) {
  margin-right: 15px;
}

.bytm-menu-footer-right {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-top: 15px;
}

#bytm-menu-version-cont {
  display: flex;
  justify-content: space-around;
  font-size: 1.2em;
  padding-bottom: 8px;
  border-radius: var(--bytm-menu-border-radius) var(--bytm-menu-border-radius) 0px 0px;
}

#bytm-menu-footer-left-buttons-cont button:not(:last-of-type) {
  margin-right: 15px;
}

#bytm-menu-scroll-indicator {
  --bytm-scroll-indicator-padding: 5px;
  position: sticky;
  bottom: -15px;
  left: 50%;
  margin-top: calc(-32px - var(--bytm-scroll-indicator-padding) * 2);
  padding: var(--bytm-scroll-indicator-padding);
  transform: translateX(-50%);
  width: 32px;
  height: 32px;
  z-index: 101;
  background-color: var(--bytm-scroll-indicator-bg);
  border-radius: 50%;
  cursor: pointer;
}

.bytm-hidden {
  visibility: hidden !important;
}

.bytm-ftconf-category-header {
  font-size: 18px;
  margin-top: 32px;
  margin-bottom: 8px;
  padding: 0px 20px;
}

.bytm-ftconf-category-header:first-of-type {
  margin-top: 0;
}

.bytm-ftitem {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4em;
  padding: 8px 20px;
  transition: background-color 0.15s ease-out;
}

.bytm-ftitem:hover {
  background-color: var(--bytm-menu-bg-highlight);
}

.bytm-ftitem-leftside {
  display: flex;
  align-items: center;
  min-height: 24px;
}

.bytm-ftconf-ctrl {
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  margin-left: 10px;
}

.bytm-ftconf-label {
  user-select: none;
}

.bytm-slider-label {
  margin-right: 10px;
}

.bytm-toggle-label {
  padding-left: 10px;
  padding-right: 5px;
}

.bytm-ftconf-input.bytm-hotkey-input {
  cursor: pointer;
  min-width: 50px;
}

.bytm-ftconf-input[type=number] {
  width: 75px;
}

.bytm-ftconf-input[type=checkbox] {
  margin-left: 5px;
}

#bytm-export-menu-text, #bytm-import-menu-text {
  font-size: 1.6em;
  margin-bottom: 15px;
}

.bytm-menu-footer-copied {
  font-size: 1.6em;
  margin-right: 15px;
}

#bytm-changelog-menu-body {
  overflow-y: auto;
}

#bytm-export-menu-textarea, #bytm-import-menu-textarea {
  width: 100%;
  height: 150px;
  resize: none;
}

.bytm-markdown-container {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  font-size: 1.5em;
  line-height: 20px;
}

/* Markdown stuff */

.bytm-markdown-container kbd {
  --bytm-easing: cubic-bezier(0.31, 0.58, 0.24, 1.15);
  display: inline-block;
  vertical-align: bottom;
  padding: 4px;
  padding-top: 2px;
  font-size: 0.95em;
  line-height: 11px;
  background-color: #222;
  border: 1px solid #777;
  border-radius: 5px;
  box-shadow: inset 0 -2px 0 #515559;
  transition: padding 0.1s var(--bytm-easing), box-shadow 0.1s var(--bytm-easing);
}

.bytm-markdown-container kbd:active {
  padding-bottom: 2px;
  box-shadow: inset 0 0 0 initial;
}

.bytm-markdown-container kbd::selection {
  background: rgba(0, 0, 0, 0);
}

.bytm-markdown-container code {
  background-color: #222;
  border-radius: 3px;
  padding: 1px 5px;
}

.bytm-markdown-container h2 {
  margin-bottom: 5px;
}

.bytm-markdown-container h2:not(:first-of-type) {
  margin-top: 30px;
}

.bytm-markdown-container ul li::before {
  content: "• ";
  font-weight: bolder;
}

.bytm-markdown-container ul li > ul li::before {
  white-space: pre;
  content: "    • ";
  font-weight: bolder;
}

#bytm-feat-help-menu-text {
  overflow-wrap: break-word;
  white-space: pre-wrap;
  padding: 10px 10px 15px 20px;
  font-size: 1.5em;
}

.bytm-ftitem-help-btn {
  width: 24px !important;
  height: 24px !important;
}

.bytm-ftitem-help-btn svg {
  width: 18px !important;
  height: 18px !important;
}

.bytm-ftitem-help-btn svg > path {
  fill: #b3bec7 !important;
}

.bytm-hotkey-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}

.bytm-hotkey-reset {
  font-size: 0.9em;
  margin-left: 5px;
}

.bytm-hotkey-info {
  font-size: 0.9em;
  margin-right: 5px;
  white-space: nowrap;
}

/* #MARKER misc */

.bytm-disable-scroll {
  overflow: hidden !important;
}

.bytm-generic-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  vertical-align: middle;
  cursor: pointer;

  margin-left: 8px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: transparent;
}

.bytm-generic-btn:hover {
  background-color: var(--yt-spec-10-percent-layer, #1d1d1d);
}

.bytm-generic-btn-img {
  display: inline-block;
  z-index: 10;
  width: 24px;
  height: 24px;
  padding: 5px;
}

.bytm-spinner {
  animation: rotate 1.2s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.bytm-anchor {
  all: unset;
  cursor: pointer;
}

/* ytmusic-logo a[bytm-animated="true"] .bytm-mod-logo-ellipse {
  transform-origin: 12px 12px;
  animation: rotate 1s ease-in-out infinite;
} */

ytmusic-logo a.bytm-logo-exchanged .bytm-mod-logo-path {
  transform-origin: 12px 12px;
  animation: rotate 1s ease-in-out;
}

ytmusic-logo a.bytm-logo-exchanged .bytm-mod-logo-img {
  width: 24px;
  height: 24px;
  z-index: 1000;
  position: absolute;
  animation: rotate-fade-in 1s ease-in-out;
}

@keyframes rotate-fade-in {
  0% {
    opacity: 0;
    transform: rotate(0deg);
  }
  30% {
    opacity: 0;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: rotate(360deg);
  }
}

.bytm-no-select {
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
}

/* YTM does some weird styling that breaks everything, so this reverts all of BYTM's buttons to the browser default style */
button.bytm-btn {
  padding: revert;
  border: revert;
  outline: revert;
  font: revert;
  text-transform: revert;
  color: revert;
  background: revert;
  line-height: 1.4em;
}

.bytm-link, .bytm-markdown-container a {
  color: #369bff;
  text-decoration: none;
  cursor: pointer;
}

.bytm-link:hover, .bytm-markdown-container a:hover {
  text-decoration: underline;
}

/* #MARKER menu */

.bytm-cfg-menu-option {
  display: block;
  padding: 8px 0;
}

.bytm-cfg-menu-option-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  padding: var(--yt-compact-link-paper-item-padding, 0px 36px 0 16px);
  min-height: var(--paper-item-min-height, 40px);
  white-space: nowrap;
  cursor: pointer;
}

.bytm-cfg-menu-option-item:hover {
  background-color: var(--yt-spec-badge-chip-background, #3e3e3e);
}

.bytm-cfg-menu-option-icon {
  width: 24px;
  height: 24px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex: none;
}

.bytm-cfg-menu-option-text {
  font-size: 1.4rem;
  line-height: 2rem;
}

yt-multi-page-menu-section-renderer.ytd-multi-page-menu-renderer {
  border-bottom: 1px solid var(--yt-spec-10-percent-layer, #3e3e3e);
}

/* #MARKER watermark */

#bytm-watermark {
  font-size: 10px;
  display: inline-block;
  position: absolute;
  left: 97px;
  top: 45px;
  z-index: 10;
  color: white;
  text-decoration: none;
  cursor: pointer;
}

#bytm-watermark:hover {
  text-decoration: underline;
}

/* #MARKER anchor improvements */

ytmusic-responsive-list-item-renderer:not([unplayable_]) .left-items {
  margin-right: 0 !important;
}

.bytm-carousel-shelf-anchor {
  margin-right: var(--ytmusic-responsive-list-item-thumbnail-margin-right, 24px);
}

/* #MARKER volume slider */

#bytm-vol-slider-cont {
  position: relative;
}

#bytm-vol-slider-label {
  opacity: 0.000001;
  position: absolute;
  font-size: 15px;
  top: 50%;
  left: 0;
  transform: translate(calc(-50% - 10px), -50%);
  text-align: right;
  transition: opacity 0.2s ease;
}

#bytm-vol-slider-label.bytm-visible {
  opacity: 1;
}

/* #MARKER scroll to active */

#bytm-scroll-to-active-btn-cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 5px;
  top: 0;
  height: 100%;
}

#bytm-scroll-to-active-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
}

#bytm-scroll-to-active-btn {
  width: revert;
  height: revert;
}

#bytm-scroll-to-active-btn .bytm-generic-btn-img {
  padding: 4px;
}

/* #MARKER queue buttons */

.side-panel.modular ytmusic-player-queue-item .song-info.ytmusic-player-queue-item {
  position: relative;
}

.side-panel.modular ytmusic-player-queue-item .bytm-queue-btn-container {
  background: rgb(0, 0, 0);
  background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #030303 15%);
  display: none;
  position: absolute;
  right: 0;
  padding-left: 25px;
  height: 100%;
}

.side-panel.modular ytmusic-player-queue-item[selected] .bytm-queue-btn-container {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #1D1D1D 15%);
}

.bytm-generic-list-queue-btn-container {
  /* otherwise the queue buttons render over the currently playing song page */
  z-index: 1;
}

.side-panel.modular ytmusic-player-queue-item:hover .bytm-queue-btn-container,
ytmusic-playlist-shelf-renderer ytmusic-responsive-list-item-renderer:hover .bytm-queue-btn-container,
ytmusic-shelf-renderer ytmusic-responsive-list-item-renderer:hover .bytm-queue-btn-container {
  display: inline-block;
}

ytmusic-responsive-list-item-renderer .title-column {
  align-items: center;
}

.side-panel.modular ytmusic-player-queue-item[play-button-state="loading"] .bytm-queue-btn-container,
.side-panel.modular ytmusic-player-queue-item[play-button-state="playing"] .bytm-queue-btn-container,
.side-panel.modular ytmusic-player-queue-item[play-button-state="paused"] .bytm-queue-btn-container {
  /* using a var() with predefined value from YTM is not viable since the nesting changes the actual value of the variable */
  background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #030303 15%);
}

.side-panel.modular ytmusic-player-queue-item[selected][play-button-state="loading"] .bytm-queue-btn-container,
.side-panel.modular ytmusic-player-queue-item[selected][play-button-state="playing"] .bytm-queue-btn-container,
.side-panel.modular ytmusic-player-queue-item[selected][play-button-state="paused"] .bytm-queue-btn-container {
  /* using a var() with predefined value from YTM is not viable since the nesting changes the actual value of the variable */
  background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #1D1D1D 15%);
}

ytmusic-app ytmusic-popup-container tp-yt-iron-dropdown[data-bytm-hidden=true] {
  display: none !important;
}

#bytm-welcome-menu-bg {
  --bytm-menu-height-max: 500px;
  --bytm-menu-width-max: 700px;
}

#bytm-welcome-menu-title-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}

#bytm-welcome-menu-title-logo {
  width: 32px;
  height: 32px;
  margin-right: 20px;
}

#bytm-welcome-menu-content-wrapper {
  overflow-y: auto;
}

#bytm-welcome-menu-locale-cont {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

#bytm-welcome-menu-locale-img {
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}

#bytm-welcome-menu-text {
  font-size: 1.6em;
  padding: 8px 20px;
  margin: 10px 0px;
  line-height: 20px;
}

#bytm-welcome-menu-locale-select {
  font-size: 1.6em;
}

#bytm-welcome-menu-footer-cont {
  border-radius: 0px 0px var(--bytm-menu-border-radius) var(--bytm-menu-border-radius);
  padding: 20px;
}`);
            initObservers();
            initOnSelector();
            const features = getFeatures();
            const ftInit = [];
            log(`DOM loaded. Initializing features for domain "${domain}"...`);
            try {
                if (domain === "ytm") {
                    disableDarkReader();
                    ftInit.push(initSiteEvents());
                    if (typeof (yield GM.getValue("bytm-installed")) !== "string") {
                        // open welcome menu with language selector
                        yield addWelcomeMenu();
                        info("Showing welcome menu");
                        yield showWelcomeMenu();
                        yield GM.setValue("bytm-installed", JSON.stringify({ timestamp: Date.now(), version: scriptInfo.version }));
                    }
                    try {
                        ftInit.push(addCfgMenu()); // TODO(v1.2): remove
                    }
                    catch (err) {
                        error("Couldn't add menu:", err);
                    }
                    observers$1.body.addListener("tp-yt-iron-dropdown #contentWrapper ytd-multi-page-menu-renderer #container.menu-container", {
                        listener: addConfigMenuOption,
                    });
                    if (features.arrowKeySupport)
                        ftInit.push(initArrowKeySkip());
                    if (features.removeUpgradeTab)
                        ftInit.push(removeUpgradeTab());
                    if (features.watermarkEnabled)
                        ftInit.push(addWatermark());
                    if (features.geniusLyrics)
                        ftInit.push(addMediaCtrlLyricsBtn());
                    if (features.deleteFromQueueButton || features.lyricsQueueButton)
                        ftInit.push(initQueueButtons());
                    if (features.anchorImprovements)
                        ftInit.push(addAnchorImprovements());
                    if (features.closeToastsTimeout > 0)
                        ftInit.push(initAutoCloseToasts());
                    if (features.removeShareTrackingParam)
                        ftInit.push(removeShareTrackingParam());
                    if (features.numKeysSkipToTime)
                        ftInit.push(initNumKeysSkip());
                    if (features.fixSpacing)
                        ftInit.push(fixSpacing());
                    if (features.scrollToActiveSongBtn)
                        ftInit.push(addScrollToActiveBtn());
                    ftInit.push(initVolumeFeatures());
                }
                if (["ytm", "yt"].includes(domain)) {
                    if (features.switchBetweenSites)
                        ftInit.push(initSiteSwitch(domain));
                }
                Promise.allSettled(ftInit).then(() => {
                    emitInterface("bytm:ready");
                });
            }
            catch (err) {
                error("Feature error:", err);
            }
        });
    }
    function registerMenuCommands() {
        if (mode === "development") {
            GM.registerMenuCommand("Reset config", () => __awaiter(this, void 0, void 0, function* () {
                if (confirm("Reset the configuration to its default values?\nThis will automatically reload the page.")) {
                    yield clearConfig();
                    disableBeforeUnload();
                    location.reload();
                }
            }), "r");
            GM.registerMenuCommand("List GM values", () => __awaiter(this, void 0, void 0, function* () {
                const keys = yield GM.listValues();
                console.log("GM values:");
                if (keys.length === 0)
                    console.log("  No values found.");
                for (const key of keys)
                    console.log(`  ${key} -> ${yield GM.getValue(key)}`);
                alert("See console.");
            }), "l");
            GM.registerMenuCommand("Delete all GM values", () => __awaiter(this, void 0, void 0, function* () {
                if (confirm("Clear all GM values?\nSee console for details.")) {
                    const keys = yield GM.listValues();
                    console.log("Clearing GM values:");
                    if (keys.length === 0)
                        console.log("  No values found.");
                    for (const key of keys) {
                        yield GM.deleteValue(key);
                        console.log(`  Deleted ${key}`);
                    }
                }
            }), "d");
            GM.registerMenuCommand("Delete GM value by name", () => __awaiter(this, void 0, void 0, function* () {
                const key = prompt("Enter the name of the GM value to delete.\nEmpty input cancels the operation.");
                if (key && key.length > 0) {
                    const oldVal = yield GM.getValue(key);
                    yield GM.deleteValue(key);
                    console.log(`Deleted GM value '${key}' with previous value '${oldVal}'`);
                }
            }), "n");
            GM.registerMenuCommand("Reset install timestamp", () => __awaiter(this, void 0, void 0, function* () {
                yield GM.deleteValue("bytm-installed");
                console.log("Reset install time.");
            }), "t");
            GM.registerMenuCommand("List active selector listeners", () => __awaiter(this, void 0, void 0, function* () {
                const lines = [];
                let listenersAmt = 0;
                for (const [obsName, obs] of Object.entries(observers$1)) {
                    const listeners = obs.getAllListeners();
                    lines.push(`- "${obsName}" (${listeners.size} listeners):`);
                    [...listeners].forEach(([k, v]) => {
                        listenersAmt += v.length;
                        lines.push(`    [${v.length}] ${k}`);
                        v.forEach(({ all, continuous }, i) => {
                            lines.push(`        ${v.length > 1 && i !== v.length - 1 ? "├" : "└"}> ${continuous ? "continuous" : "single-shot"}, ${all ? "select multiple" : "select single"}`);
                        });
                    });
                }
                console.log(`Showing currently active listeners for ${Object.keys(observers$1).length} observers with ${listenersAmt} total listeners:\n${lines.join("\n")}`);
                alert("See console.");
            }), "s");
        }
    }
    preInit();

})();
