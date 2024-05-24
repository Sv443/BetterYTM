// ==UserScript==
// @name              BetterYTM
// @namespace         https://github.com/Sv443/BetterYTM
// @version           2.0.0
// @description       Lots of configurable layout and user experience improvements for YouTube Music™ and YouTube™
// @description:de-DE Konfigurierbare Layout- und Benutzererfahrungs-Verbesserungen für YouTube Music™ und YouTube™
// @description:en-US Configurable layout and user experience improvements for YouTube Music™ and YouTube™
// @description:en-UK Configurable layout and user experience improvements for YouTube Music™ and YouTube™
// @description:es-ES Mejoras de diseño y experiencia de usuario configurables para YouTube Music™ y YouTube™
// @description:fr-FR Améliorations de la mise en page et de l'expérience utilisateur configurables pour YouTube Music™ et YouTube™
// @description:hi-IN YouTube Music™ और YouTube™ के लिए कॉन्फ़िगर करने योग्य लेआउट और उपयोगकर्ता अनुभव में सुधार
// @description:ja-JA YouTube Music™ と YouTube™ の構成可能なレイアウトとユーザー エクスペリエンスの向上
// @description:pt-BR Melhorias configuráveis no layout e na experiência do usuário para o YouTube Music™ e o YouTube™
// @description:zh-CN YouTube Music™ 和 YouTube™ 的可配置布局和用户体验改进
// @homepageURL       https://github.com/Sv443/BetterYTM#readme
// @supportURL        https://github.com/Sv443/BetterYTM/issues
// @license           AGPL-3.0-only
// @author            Sv443
// @copyright         Sv443 (https://github.com/Sv443)
// @icon              https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/images/logo/logo_dev_48.png
// @match             https://music.youtube.com/*
// @match             https://www.youtube.com/*
// @run-at            document-start
// @downloadURL       https://raw.githubusercontent.com/Sv443/BetterYTM/main/dist/BetterYTM.user.js
// @updateURL         https://raw.githubusercontent.com/Sv443/BetterYTM/main/dist/BetterYTM.user.js
// @connect           api.sv443.net
// @connect           github.com
// @connect           raw.githubusercontent.com
// @grant             GM.getValue
// @grant             GM.setValue
// @grant             GM.deleteValue
// @grant             GM.getResourceUrl
// @grant             GM.setClipboard
// @grant             GM.xmlHttpRequest
// @grant             GM.openInTab
// @grant             unsafeWindow
// @noframes
// @resource          css-bundle              https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/dist/BetterYTM.css
// @resource          css-above_queue_btns    https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/style/aboveQueueBtns.css
// @resource          css-anchor_improvements https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/style/anchorImprovements.css
// @resource          css-fix_hdr             https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/style/fixHDR.css
// @resource          css-fix_spacing         https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/style/fixSpacing.css
// @resource          css-vol_slider_size     https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/style/volSliderSize.css
// @resource          doc-changelog           https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/changelog.md
// @resource          icon-advanced_mode      https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/icons/plus_circle_small.svg
// @resource          icon-arrow_down         https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/icons/arrow_down.svg
// @resource          icon-auto_like_enabled  https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/icons/auto_like_enabled.svg
// @resource          icon-auto_like          https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/icons/auto_like.svg
// @resource          icon-clear_list         https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/icons/clear_list.svg
// @resource          icon-delete             https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/icons/delete.svg
// @resource          icon-error              https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/icons/error.svg
// @resource          icon-experimental       https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/icons/beaker_small.svg
// @resource          icon-globe_small        https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/icons/globe_small.svg
// @resource          icon-globe              https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/icons/globe.svg
// @resource          icon-help               https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/icons/help.svg
// @resource          icon-image_filled       https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/icons/image_filled.svg
// @resource          icon-image              https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/icons/image.svg
// @resource          icon-link               https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/icons/link.svg
// @resource          icon-lyrics             https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/icons/lyrics.svg
// @resource          icon-reload             https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/icons/refresh.svg
// @resource          icon-skip_to            https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/icons/skip_to.svg
// @resource          icon-spinner            https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/icons/spinner.svg
// @resource          img-close               https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/images/close.png
// @resource          img-discord             https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/images/external/discord.png
// @resource          img-github              https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/images/external/github.png
// @resource          img-greasyfork          https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/images/external/greasyfork.png
// @resource          img-logo_dev            https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/images/logo/logo_dev_48.png
// @resource          img-logo                https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/images/logo/logo_48.png
// @resource          img-openuserjs          https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/images/external/openuserjs.png
// @resource          trans-de_DE             https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/translations/de_DE.json
// @resource          trans-en_US             https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/translations/en_US.json
// @resource          trans-en_UK             https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/translations/en_UK.json
// @resource          trans-es_ES             https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/translations/es_ES.json
// @resource          trans-fr_FR             https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/translations/fr_FR.json
// @resource          trans-hi_IN             https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/translations/hi_IN.json
// @resource          trans-ja_JA             https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/translations/ja_JA.json
// @resource          trans-pt_BR             https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/translations/pt_BR.json
// @resource          trans-zh_CN             https://raw.githubusercontent.com/Sv443/BetterYTM/90dd8f03/assets/translations/zh_CN.json
// @require           https://cdn.jsdelivr.net/npm/@sv443-network/userutils@6.3.0/dist/index.global.js
// @require           https://cdn.jsdelivr.net/npm/fuse.js@7.0.0/dist/fuse.basic.js
// @require           https://cdn.jsdelivr.net/npm/marked@12.0.0/lib/marked.umd.js
// @require           https://cdn.jsdelivr.net/npm/compare-versions@6.1.0/lib/umd/index.js
// @grant             GM.registerMenuCommand
// @grant             GM.listValues
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

(function(UserUtils,compareVersions,marked,Fuse){'use strict';function _interopNamespaceDefault(e){var n=Object.create(null);if(e){Object.keys(e).forEach(function(k){if(k!=='default'){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:true,get:function(){return e[k]}});}})}n.default=e;return Object.freeze(n)}var UserUtils__namespace=/*#__PURE__*/_interopNamespaceDefault(UserUtils);var compareVersions__namespace=/*#__PURE__*/_interopNamespaceDefault(compareVersions);/******************************************************************************
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


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

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
};let createNanoEvents = () => ({
  emit(event, ...args) {
    for (
      let i = 0,
        callbacks = this.events[event] || [],
        length = callbacks.length;
      i < length;
      i++
    ) {
      callbacks[i](...args);
    }
  },
  events: {},
  on(event, cb) {
(this.events[event] ||= []).push(cb);
    return () => {
      this.events[event] = this.events[event]?.filter(i => cb !== i);
    }
  }
});// I know TS enums are impure but it doesn't really matter here, plus they look cooler
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Debug"] = 0] = "Debug";
    LogLevel[LogLevel["Info"] = 1] = "Info";
})(LogLevel || (LogLevel = {}));
//#region plugins
/**
 * Intents (permissions) BYTM has to grant your plugin for it to be able to access certain features.
 * TODO: this feature is unfinished, but you should still specify the intents your plugin needs.
 * Never request more permissions than you need, as this is a bad practice and can lead to your plugin being rejected.
 */
var PluginIntent;
(function (PluginIntent) {
    /** Plugin has access to hidden config values */
    PluginIntent[PluginIntent["HiddenConfigValues"] = 1] = "HiddenConfigValues";
    /** Plugin can write to the feature configuration */
    PluginIntent[PluginIntent["WriteFeatureConfig"] = 2] = "WriteFeatureConfig";
    /** Plugin can write to the lyrics cache */
    PluginIntent[PluginIntent["WriteLyricsCache"] = 4] = "WriteLyricsCache";
    /** Plugin can add new translations and overwrite existing ones */
    PluginIntent[PluginIntent["WriteTranslations"] = 8] = "WriteTranslations";
    /** Plugin can create modal dialogs */
    PluginIntent[PluginIntent["CreateModalDialogs"] = 16] = "CreateModalDialogs";
})(PluginIntent || (PluginIntent = {}));const modeRaw = "development";
const branchRaw = "develop";
const hostRaw = "github";
const buildNumberRaw = "90dd8f03";
/** The mode in which the script was built (production or development) */
const mode = (modeRaw.match(/^#{{.+}}$/) ? "production" : modeRaw);
/** The branch to use in various URLs that point to the GitHub repo */
const branch = (branchRaw.match(/^#{{.+}}$/) ? "main" : branchRaw);
/** Path to the GitHub repo */
const repo = "Sv443/BetterYTM";
/** Which host the userscript was installed from */
const host = (hostRaw.match(/^#{{.+}}$/) ? "github" : hostRaw);
/** The build number of the userscript */
const buildNumber = (buildNumberRaw.match(/^#{{.+}}$/) ? "BUILD_ERROR!" : buildNumberRaw); // asserted as generic string instead of literal
/** Default compression format used throughout BYTM */
const compressionFormat = "deflate-raw";
/** Whether sessionStorage is available and working */
typeof (sessionStorage === null || sessionStorage === void 0 ? void 0 : sessionStorage.setItem) !== "undefined"
    && (() => {
        try {
            const key = `_bytm_test_${UserUtils.randomId(4)}`;
            sessionStorage.setItem(key, "test");
            sessionStorage.removeItem(key);
            return true;
        }
        catch (_a) {
            return false;
        }
    })();
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
};/** A fraction of this max value will be removed from the "last viewed" timestamp when adding penalized cache entries */
const maxViewedPenalty = 1000 * 60 * 60 * 24 * 5; // 5 days
/** A fraction of this max value will be removed from the "added" timestamp when adding penalized cache entries */
const maxAddedPenalty = 1000 * 60 * 60 * 24 * 15; // 15 days
let canCompress$2 = true;
const lyricsCacheMgr = new UserUtils.DataStore({
    id: "bytm-lyrics-cache",
    defaultData: {
        cache: [],
    },
    formatVersion: 1,
    encodeData: (data) => canCompress$2 ? UserUtils.compress(data, compressionFormat, "string") : data,
    decodeData: (data) => canCompress$2 ? UserUtils.decompress(data, compressionFormat, "string") : data,
});
function initLyricsCache() {
    return __awaiter(this, void 0, void 0, function* () {
        canCompress$2 = yield compressionSupported();
        const data = yield lyricsCacheMgr.loadData();
        log(`Initialized lyrics cache with ${data.cache.length} entries:`, data);
        emitInterface("bytm:lyricsCacheReady");
        return data;
    });
}
/**
 * Returns the cache entry for the passed artist and song, or undefined if it doesn't exist yet
 * {@linkcode artist} and {@linkcode song} need to be sanitized first!
 * @param refreshEntry If true, the timestamp of the entry will be set to the current time
 */
function getLyricsCacheEntry(artist, song, refreshEntry = true) {
    const { cache } = lyricsCacheMgr.getData();
    const entry = cache.find(e => e.artist === artist && e.song === song);
    if (entry && Date.now() - (entry === null || entry === void 0 ? void 0 : entry.added) > getFeatures().lyricsCacheTTL * 1000 * 60 * 60 * 24) {
        deleteLyricsCacheEntry(artist, song);
        return undefined;
    }
    // refresh timestamp of the entry by mutating cache
    if (entry && refreshEntry)
        updateLyricsCacheEntry(artist, song);
    return entry;
}
/** Updates the "last viewed" timestamp of the cache entry for the passed artist and song */
function updateLyricsCacheEntry(artist, song) {
    const { cache } = lyricsCacheMgr.getData();
    const idx = cache.findIndex(e => e.artist === artist && e.song === song);
    if (idx !== -1) {
        const newEntry = cache.splice(idx, 1)[0];
        newEntry.viewed = Date.now();
        log(`Updating cache entry for '${artist} - ${song}' to`, newEntry);
        lyricsCacheMgr.setData({ cache: [newEntry, ...cache] });
    }
}
/** Deletes the cache entry for the passed artist and song */
function deleteLyricsCacheEntry(artist, song) {
    const { cache } = lyricsCacheMgr.getData();
    const idx = cache.findIndex(e => e.artist === artist && e.song === song);
    if (idx !== -1) {
        cache.splice(idx, 1);
        lyricsCacheMgr.setData({ cache });
    }
}
/** Clears the lyrics cache locally and clears it in persistent storage */
function clearLyricsCache() {
    emitInterface("bytm:lyricsCacheCleared");
    return lyricsCacheMgr.setData({ cache: [] });
}
/** Returns the full lyrics cache array */
function getLyricsCache() {
    return lyricsCacheMgr.getData().cache;
}
/**
 * Adds the provided "best" (non-penalized) entry into the lyrics URL cache, synchronously to RAM and asynchronously to GM storage
 * {@linkcode artist} and {@linkcode song} need to be sanitized first!
 */
function addLyricsCacheEntryBest(artist, song, url) {
    // refresh entry if it exists and don't overwrite / duplicate it
    const cachedEntry = getLyricsCacheEntry(artist, song, true);
    if (cachedEntry)
        return;
    const { cache } = lyricsCacheMgr.getData();
    const entry = {
        artist, song, url, viewed: Date.now(), added: Date.now(),
    };
    cache.push(entry);
    cache.sort((a, b) => b.viewed - a.viewed);
    // always keep the cache <= max size
    cache.splice(getFeatures().lyricsCacheMaxSize);
    log("Added cache entry for best result", artist, "-", song, "\n", entry);
    emitInterface("bytm:lyricsCacheEntryAdded", { entry, type: "best" });
    return lyricsCacheMgr.setData({ cache });
}
/**
 * Adds the provided entry into the lyrics URL cache, synchronously to RAM and asynchronously to GM storage
 * Also adds a penalty to the viewed timestamp and added timestamp to decrease entry's lifespan in cache
 *
 * ⚠️ `artist` and `song` need to be sanitized first!
 * @param penaltyFr Fraction of the max bounds {@linkcode maxViewedPenalty} and {@linkcode maxAddedPenalty} to remove from the timestamp values - has to be between 0 and 1 - default is 0 (no penalty) - (0.25 = only penalized by a quarter of the max penalty)
 */
function addLyricsCacheEntryPenalized(artist, song, url, penaltyFr = 0) {
    // refresh entry if it exists and don't overwrite / duplicate it
    const cachedEntry = getLyricsCacheEntry(artist, song, true);
    if (cachedEntry)
        return;
    const { cache } = lyricsCacheMgr.getData();
    penaltyFr = UserUtils.clamp(penaltyFr, 0, 1);
    const viewedPenalty = maxViewedPenalty * penaltyFr;
    const addedPenalty = maxAddedPenalty * penaltyFr;
    const entry = {
        artist,
        song,
        url,
        viewed: Date.now() - viewedPenalty,
        added: Date.now() - addedPenalty,
    };
    cache.push(entry);
    cache.sort((a, b) => b.viewed - a.viewed);
    // always keep the cache <= max size
    cache.splice(getFeatures().lyricsCacheMaxSize);
    log("Added penalized cache entry for", artist, "-", song, "with penalty fraction", penaltyFr, "\n", entry);
    emitInterface("bytm:lyricsCacheEntryAdded", { entry, type: "penalized" });
    return lyricsCacheMgr.setData({ cache });
}/** Abstract class that can be extended to create an event emitter with helper methods and a strongly typed event map */
class NanoEmitter {
    constructor(settings = {}) {
        Object.defineProperty(this, "events", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: createNanoEvents()
        });
        Object.defineProperty(this, "eventUnsubscribes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "emitterSettings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.emitterSettings = Object.assign({ publicEmit: false }, settings);
    }
    /** Subscribes to an event - returns a function that unsubscribes the event listener */
    on(event, cb) {
        // eslint-disable-next-line prefer-const
        let unsub;
        const unsubProxy = () => {
            if (!unsub)
                return;
            unsub();
            this.eventUnsubscribes = this.eventUnsubscribes.filter(u => u !== unsub);
        };
        unsub = this.events.on(event, cb);
        this.eventUnsubscribes.push(unsub);
        return unsubProxy;
    }
    /** Subscribes to an event and calls the callback or resolves the Promise only once */
    once(event, cb) {
        return new Promise((resolve) => {
            // eslint-disable-next-line prefer-const
            let unsub;
            const onceProxy = ((...args) => {
                unsub === null || unsub === void 0 ? void 0 : unsub();
                cb === null || cb === void 0 ? void 0 : cb(...args);
                resolve(args);
            });
            // eslint-disable-next-line prefer-const
            unsub = this.on(event, onceProxy);
        });
    }
    /** Emits an event on this instance - Needs `publicEmit` to be set to true in the constructor! */
    emit(event, ...args) {
        if (this.emitterSettings.publicEmit) {
            this.events.emit(event, ...args);
            return true;
        }
        return false;
    }
    /** Unsubscribes all event listeners */
    unsubscribeAll() {
        for (const unsub of this.eventUnsubscribes)
            unsub();
        this.eventUnsubscribes = [];
    }
}const fetchOpts = {
    timeout: 6000,
};
/** Contains all translation keys of all initialized and loaded translations */
const allTrKeys = new Map();
/** Contains the identifiers of all initialized and loaded translation locales */
const initializedLocales = new Set();
/** Initializes the translations */
function initTranslations(locale) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        if (initializedLocales.has(locale))
            return;
        initializedLocales.add(locale);
        try {
            const transUrl = yield getResourceUrl(`trans-${locale}`);
            const transFile = yield (yield UserUtils.fetchAdvanced(transUrl, fetchOpts)).json();
            let fallbackTrans = {};
            if (getFeature("localeFallback"))
                fallbackTrans = (yield (yield UserUtils.fetchAdvanced(yield getResourceUrl("trans-en_US"), fetchOpts)).json()).translations;
            // merge with base translations if specified
            const baseTransUrl = transFile.base ? yield getResourceUrl(`trans-${transFile.base}`) : undefined;
            const baseTransFile = baseTransUrl ? yield (yield UserUtils.fetchAdvanced(baseTransUrl, fetchOpts)).json() : undefined;
            const translations = Object.assign(Object.assign(Object.assign({}, fallbackTrans), ((_a = baseTransFile === null || baseTransFile === void 0 ? void 0 : baseTransFile.translations) !== null && _a !== void 0 ? _a : {})), transFile.translations);
            UserUtils.tr.addLanguage(locale, translations);
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
    UserUtils.tr.setLanguage(locale);
    setGlobalProp("locale", locale);
    emitInterface("bytm:setLocale", { locale });
}
/** Returns the currently set language */
function getLocale() {
    return UserUtils.tr.getLanguage();
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
    return UserUtils.tr(key, ...values);
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
}// TODO: remove export as soon as config menu is migrated to use BytmDialog
/** ID of the last opened (top-most) dialog */
let currentDialogId = null;
/** IDs of all currently open dialogs, top-most first */
const openDialogs = [];
/** TODO: remove as soon as config menu is migrated to use BytmDialog */
const setCurrentDialogId = (id) => currentDialogId = id;
/** Creates and manages a modal dialog element */
class BytmDialog extends NanoEmitter {
    constructor(options) {
        super();
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "dialogOpen", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "dialogMounted", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        this.options = Object.assign({ closeOnBgClick: true, closeOnEscPress: true, closeBtnEnabled: true, destroyOnClose: false, unmountOnClose: true, smallHeader: false }, options);
        this.id = options.id;
    }
    //#region public
    /** Call after DOMContentLoaded to pre-render the dialog and invisibly mount it in the DOM */
    mount() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.dialogMounted)
                return;
            this.dialogMounted = true;
            const bgElem = document.createElement("div");
            bgElem.id = `bytm-${this.id}-dialog-bg`;
            bgElem.classList.add("bytm-dialog-bg", `bytm-dom-${getDomain()}`);
            if (this.options.closeOnBgClick)
                bgElem.ariaLabel = bgElem.title = t("close_menu_tooltip");
            bgElem.style.visibility = "hidden";
            bgElem.style.display = "none";
            bgElem.inert = true;
            bgElem.appendChild(yield this.getDialogContent());
            document.body.appendChild(bgElem);
            this.attachListeners(bgElem);
            addStyle(`\
#bytm-${this.id}-dialog-bg {
  --bytm-dialog-width-max: ${this.options.width}px;
  --bytm-dialog-height-max: ${this.options.height}px;
}`, `dialog-${this.id}`);
            this.events.emit("render");
            return bgElem;
        });
    }
    /** Closes the dialog and clears all its contents (unmounts elements from the DOM) in preparation for a new rendering call */
    unmount() {
        var _a;
        this.close();
        this.dialogMounted = false;
        const clearSelectors = [
            `#bytm-${this.id}-dialog-bg`,
            `#bytm-style-dialog-${this.id}`,
        ];
        for (const sel of clearSelectors) {
            const elem = document.querySelector(sel);
            (elem === null || elem === void 0 ? void 0 : elem.hasChildNodes()) && clearInner(elem);
            (_a = document.querySelector(sel)) === null || _a === void 0 ? void 0 : _a.remove();
        }
        this.events.emit("clear");
    }
    /** Clears the DOM of the dialog and then renders it again */
    remount() {
        return __awaiter(this, void 0, void 0, function* () {
            this.unmount();
            yield this.mount();
        });
    }
    /**
     * Opens the dialog - also mounts it if it hasn't been mounted yet
     * Prevents default action and immediate propagation of the passed event
     */
    open(e) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            e === null || e === void 0 ? void 0 : e.preventDefault();
            e === null || e === void 0 ? void 0 : e.stopImmediatePropagation();
            if (this.isOpen())
                return;
            this.dialogOpen = true;
            if (openDialogs.includes(this.id))
                throw new Error(`A dialog with the same ID of '${this.id}' already exists and is open!`);
            if (!this.isMounted())
                yield this.mount();
            document.body.classList.add("bytm-disable-scroll");
            (_a = document.querySelector(getDomain() === "ytm" ? "ytmusic-app" : "ytd-app")) === null || _a === void 0 ? void 0 : _a.setAttribute("inert", "true");
            const dialogBg = document.querySelector(`#bytm-${this.id}-dialog-bg`);
            if (!dialogBg)
                return warn(`Couldn't find background element for dialog with ID '${this.id}'`);
            dialogBg.style.visibility = "visible";
            dialogBg.style.display = "block";
            dialogBg.inert = false;
            currentDialogId = this.id;
            openDialogs.unshift(this.id);
            this.events.emit("open");
            emitInterface("bytm:dialogOpened", this);
            emitInterface(`bytm:dialogOpened:${this.id}`, this);
            return dialogBg;
        });
    }
    /** Closes the dialog - prevents default action and immediate propagation of the passed event */
    close(e) {
        var _a;
        e === null || e === void 0 ? void 0 : e.preventDefault();
        e === null || e === void 0 ? void 0 : e.stopImmediatePropagation();
        if (!this.isOpen())
            return;
        this.dialogOpen = false;
        const dialogBg = document.querySelector(`#bytm-${this.id}-dialog-bg`);
        if (!dialogBg)
            return warn(`Couldn't find background element for dialog with ID '${this.id}'`);
        dialogBg.style.visibility = "hidden";
        dialogBg.style.display = "none";
        dialogBg.inert = true;
        if (BytmDialog.getCurrentDialogId() === this.id)
            currentDialogId = null;
        openDialogs.splice(openDialogs.indexOf(this.id), 1);
        if (openDialogs.length === 0) {
            document.body.classList.remove("bytm-disable-scroll");
            (_a = document.querySelector(getDomain() === "ytm" ? "ytmusic-app" : "ytd-app")) === null || _a === void 0 ? void 0 : _a.removeAttribute("inert");
        }
        this.events.emit("close");
        if (this.options.destroyOnClose)
            this.destroy();
        // don't destroy *and* unmount at the same time
        else if (this.options.unmountOnClose)
            this.unmount();
    }
    /** Returns true if the dialog is currently open */
    isOpen() {
        return this.dialogOpen;
    }
    /** Returns true if the dialog is currently mounted */
    isMounted() {
        return this.dialogMounted;
    }
    /** Clears the DOM of the dialog and removes all event listeners */
    destroy() {
        this.unmount();
        this.events.emit("destroy");
        this.unsubscribeAll();
    }
    //#region static
    /** Returns the ID of the top-most dialog (the dialog that has been opened last) */
    static getCurrentDialogId() {
        return currentDialogId;
    }
    /** Returns the IDs of all currently open dialogs, top-most first */
    static getOpenDialogs() {
        return openDialogs;
    }
    //#region protected
    /** Called once to attach all generic event listeners */
    attachListeners(bgElem) {
        if (this.options.closeOnBgClick) {
            bgElem.addEventListener("click", (e) => {
                var _a;
                if (this.isOpen() && ((_a = e.target) === null || _a === void 0 ? void 0 : _a.id) === `bytm-${this.id}-dialog-bg`)
                    this.close(e);
            });
        }
        if (this.options.closeOnEscPress) {
            document.body.addEventListener("keydown", (e) => {
                if (e.key === "Escape" && this.isOpen() && BytmDialog.getCurrentDialogId() === this.id)
                    this.close(e);
            });
        }
    }
    //#region private
    /** Returns the dialog content element and all its children */
    getDialogContent() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            const header = (_b = (_a = this.options).renderHeader) === null || _b === void 0 ? void 0 : _b.call(_a);
            const footer = (_d = (_c = this.options).renderFooter) === null || _d === void 0 ? void 0 : _d.call(_c);
            const dialogWrapperEl = document.createElement("div");
            dialogWrapperEl.id = `bytm-${this.id}-dialog`;
            dialogWrapperEl.classList.add("bytm-dialog", `bytm-dom-${getDomain()}`);
            dialogWrapperEl.ariaLabel = dialogWrapperEl.title = "";
            dialogWrapperEl.role = "dialog";
            dialogWrapperEl.setAttribute("aria-labelledby", `bytm-${this.id}-dialog-title`);
            dialogWrapperEl.setAttribute("aria-describedby", `bytm-${this.id}-dialog-body`);
            //#region header
            const headerWrapperEl = document.createElement("div");
            headerWrapperEl.classList.add("bytm-dialog-header");
            this.options.small && headerWrapperEl.classList.add("small");
            if (header) {
                const headerTitleWrapperEl = document.createElement("div");
                headerTitleWrapperEl.id = `bytm-${this.id}-dialog-title`;
                headerTitleWrapperEl.classList.add("bytm-dialog-title-wrapper");
                headerTitleWrapperEl.role = "heading";
                headerTitleWrapperEl.ariaLevel = "1";
                headerTitleWrapperEl.appendChild(header instanceof Promise ? yield header : header);
                headerWrapperEl.appendChild(headerTitleWrapperEl);
            }
            else {
                // insert element to pad the header height
                const padEl = document.createElement("div");
                padEl.classList.add("bytm-dialog-header-pad", this.options.small ? "small" : "");
                headerWrapperEl.appendChild(padEl);
            }
            if (this.options.closeBtnEnabled) {
                const closeBtnEl = document.createElement("img");
                closeBtnEl.classList.add("bytm-dialog-close");
                this.options.small && closeBtnEl.classList.add("small");
                closeBtnEl.src = yield getResourceUrl("img-close");
                closeBtnEl.role = "button";
                closeBtnEl.tabIndex = 0;
                closeBtnEl.alt = closeBtnEl.title = closeBtnEl.ariaLabel = t("close_menu_tooltip");
                onInteraction(closeBtnEl, () => this.close());
                headerWrapperEl.appendChild(closeBtnEl);
            }
            dialogWrapperEl.appendChild(headerWrapperEl);
            //#region body
            const dialogBodyElem = document.createElement("div");
            dialogBodyElem.id = `bytm-${this.id}-dialog-body`;
            dialogBodyElem.classList.add("bytm-dialog-body");
            this.options.small && dialogBodyElem.classList.add("small");
            const body = this.options.renderBody();
            dialogBodyElem.appendChild(body instanceof Promise ? yield body : body);
            dialogWrapperEl.appendChild(dialogBodyElem);
            //#region footer
            if (footer) {
                const footerWrapper = document.createElement("div");
                footerWrapper.classList.add("bytm-dialog-footer-cont");
                dialogWrapperEl.appendChild(footerWrapper);
                footerWrapper.appendChild(footer instanceof Promise ? yield footer : footer);
            }
            return dialogWrapperEl;
        });
    }
}/**
 * Creates a generic, circular button element.
 * If `href` is provided, the button will be an anchor element.
 * If `onClick` is provided, the button will be a div element.
 * Provide either `resourceName` or `src` to specify the icon inside the button.
 */
function createCircularBtn(_a) {
    return __awaiter(this, void 0, void 0, function* () {
        var { title } = _a, rest = __rest(_a, ["title"]);
        let btnElem;
        if ("href" in rest && rest.href) {
            btnElem = document.createElement("a");
            btnElem.href = rest.href;
            btnElem.role = "button";
            btnElem.target = "_blank";
            btnElem.rel = "noopener noreferrer";
        }
        else if ("onClick" in rest && rest.onClick) {
            btnElem = document.createElement("div");
            rest.onClick && onInteraction(btnElem, rest.onClick);
        }
        else
            throw new TypeError("Either 'href' or 'onClick' must be provided");
        btnElem.classList.add("bytm-generic-btn");
        btnElem.ariaLabel = btnElem.title = title;
        btnElem.tabIndex = 0;
        btnElem.role = "button";
        const imgElem = document.createElement("img");
        imgElem.classList.add("bytm-generic-btn-img");
        imgElem.src = "src" in rest ? rest.src : yield getResourceUrl(rest.resourceName);
        btnElem.appendChild(imgElem);
        return btnElem;
    });
}/** EventEmitter instance that is used to detect changes to the site */
const siteEvents = createNanoEvents();
let observers = [];
let lastWatchId = null;
let lastPathname = null;
let lastFullscreen;
/** Creates MutationObservers that check if parts of the site have changed, then emit an event on the `siteEvents` instance. */
function initSiteEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //#region queue
            // the queue container always exists so it doesn't need an extra init function
            const queueObs = new MutationObserver(([{ addedNodes, removedNodes, target }]) => {
                if (addedNodes.length > 0 || removedNodes.length > 0) {
                    info(`Detected queue change - added nodes: ${[...addedNodes.values()].length} - removed nodes: ${[...removedNodes.values()].length}`);
                    emitSiteEvent("queueChanged", target);
                }
            });
            // only observe added or removed elements
            addSelectorListener("sidePanel", "#contents.ytmusic-player-queue", {
                listener: (el) => {
                    queueObs.observe(el, {
                        childList: true,
                    });
                },
            });
            const autoplayObs = new MutationObserver(([{ addedNodes, removedNodes, target }]) => {
                if (addedNodes.length > 0 || removedNodes.length > 0) {
                    info(`Detected autoplay queue change - added nodes: ${[...addedNodes.values()].length} - removed nodes: ${[...removedNodes.values()].length}`);
                    emitSiteEvent("autoplayQueueChanged", target);
                }
            });
            addSelectorListener("sidePanel", "ytmusic-player-queue #automix-contents", {
                listener: (el) => {
                    autoplayObs.observe(el, {
                        childList: true,
                    });
                },
            });
            //#region player bar
            let lastTitle = null;
            addSelectorListener("playerBarInfo", "yt-formatted-string.title", {
                continuous: true,
                listener: (titleElem) => {
                    const oldTitle = lastTitle;
                    const newTitle = titleElem.textContent;
                    if (newTitle === lastTitle || !newTitle)
                        return;
                    lastTitle = newTitle;
                    info(`Detected song change - old title: "${oldTitle}" - new title: "${newTitle}"`);
                    emitSiteEvent("songTitleChanged", newTitle, oldTitle);
                },
            });
            info("Successfully initialized SiteEvents observers");
            observers = observers.concat([
                queueObs,
                autoplayObs,
            ]);
            //#region player
            const playerFullscreenObs = new MutationObserver(([{ target }]) => {
                var _a;
                const isFullscreen = ((_a = target.getAttribute("player-ui-state")) === null || _a === void 0 ? void 0 : _a.toUpperCase()) === "FULLSCREEN";
                if (lastFullscreen !== isFullscreen || typeof lastFullscreen === "undefined") {
                    emitSiteEvent("fullscreenToggled", isFullscreen);
                    lastFullscreen = isFullscreen;
                }
            });
            addSelectorListener("mainPanel", "ytmusic-player#player", {
                listener: (el) => {
                    playerFullscreenObs.observe(el, {
                        attributeFilter: ["player-ui-state"],
                    });
                },
            });
            //#region other
            const runIntervalChecks = () => {
                if (location.pathname.startsWith("/watch")) {
                    const newWatchId = new URL(location.href).searchParams.get("v");
                    if (newWatchId && newWatchId !== lastWatchId) {
                        info(`Detected watch ID change - old ID: "${lastWatchId}" - new ID: "${newWatchId}"`);
                        emitSiteEvent("watchIdChanged", newWatchId, lastWatchId);
                        lastWatchId = newWatchId;
                    }
                }
                if (location.pathname !== lastPathname) {
                    emitSiteEvent("pathChanged", String(location.pathname), lastPathname);
                    lastPathname = String(location.pathname);
                }
            };
            window.addEventListener("bytm:ready", () => {
                runIntervalChecks();
                setInterval(runIntervalChecks, 100);
            }, {
                once: true,
            });
        }
        catch (err) {
            error("Couldn't initialize SiteEvents observers due to an error:\n", err);
        }
    });
}
let bytmReady = false;
window.addEventListener("bytm:ready", () => bytmReady = true, { once: true });
/** Emits a site event with the given key and arguments - if `bytm:ready` has not been emitted yet, all events will be queued until it is */
function emitSiteEvent(key, ...args) {
    if (!bytmReady) {
        window.addEventListener("bytm:ready", () => {
            bytmReady = true;
            emitSiteEvent(key, ...args);
        }, { once: true });
        return;
    }
    siteEvents.emit(key, ...args);
    emitInterface(`bytm:siteEvent:${key}`, args);
}let otherHotkeyInputActive = false;
const reservedKeys = ["ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "Meta", "Tab", "Space", " "];
/** Creates a hotkey input element */
function createHotkeyInput({ initialValue, onChange }) {
    var _a;
    const initialHotkey = initialValue;
    let currentHotkey;
    const wrapperElem = document.createElement("div");
    wrapperElem.classList.add("bytm-hotkey-wrapper");
    const infoElem = document.createElement("span");
    infoElem.classList.add("bytm-hotkey-info");
    const inputElem = document.createElement("input");
    inputElem.type = "button";
    inputElem.classList.add("bytm-ftconf-input", "bytm-hotkey-input", "bytm-btn");
    inputElem.dataset.state = "inactive";
    inputElem.value = (_a = initialValue === null || initialValue === void 0 ? void 0 : initialValue.code) !== null && _a !== void 0 ? _a : t("hotkey_input_click_to_change");
    inputElem.ariaLabel = inputElem.title = t("hotkey_input_click_to_change_tooltip");
    const resetElem = document.createElement("span");
    resetElem.classList.add("bytm-hotkey-reset", "bytm-link", "bytm-hidden");
    resetElem.role = "button";
    resetElem.tabIndex = 0;
    resetElem.textContent = `(${t("reset")})`;
    resetElem.ariaLabel = resetElem.title = t("reset");
    const deactivate = () => {
        var _a;
        if (!otherHotkeyInputActive)
            return;
        siteEvents.emit("hotkeyInputActive", false);
        otherHotkeyInputActive = false;
        const curHk = currentHotkey !== null && currentHotkey !== void 0 ? currentHotkey : initialValue;
        inputElem.value = (_a = curHk === null || curHk === void 0 ? void 0 : curHk.code) !== null && _a !== void 0 ? _a : t("hotkey_input_click_to_change");
        inputElem.dataset.state = "inactive";
        inputElem.ariaLabel = inputElem.title = t("hotkey_input_click_to_change_tooltip");
        infoElem.innerHTML = curHk ? getHotkeyInfoHtml(curHk) : "";
    };
    const activate = () => {
        if (otherHotkeyInputActive)
            return;
        siteEvents.emit("hotkeyInputActive", true);
        otherHotkeyInputActive = true;
        inputElem.value = "< ... >";
        inputElem.dataset.state = "active";
        inputElem.ariaLabel = inputElem.title = t("hotkey_input_click_to_cancel_tooltip");
    };
    const resetClicked = (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        onChange(initialValue);
        currentHotkey = initialValue;
        deactivate();
        inputElem.value = initialValue.code;
        infoElem.innerHTML = getHotkeyInfoHtml(initialValue);
        resetElem.classList.add("bytm-hidden");
    };
    onInteraction(resetElem, resetClicked);
    if (initialValue)
        infoElem.innerHTML = getHotkeyInfoHtml(initialValue);
    let lastKeyDown;
    document.addEventListener("keypress", (e) => {
        if (inputElem.dataset.state === "inactive")
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
        infoElem.innerHTML = getHotkeyInfoHtml(hotkey);
        inputElem.ariaLabel = inputElem.title = t("hotkey_input_click_to_cancel_tooltip");
        onChange(hotkey);
        currentHotkey = hotkey;
    });
    document.addEventListener("keydown", (e) => {
        if (reservedKeys.filter(k => k !== "Tab").includes(e.code))
            return;
        if (inputElem.dataset.state !== "active")
            return;
        if (e.code === "Tab" || e.code === " " || e.code === "Space" || e.code === "Escape" || e.code === "Enter") {
            deactivate();
            return;
        }
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
        const keyChanged = (initialHotkey === null || initialHotkey === void 0 ? void 0 : initialHotkey.code) !== hotkey.code || (initialHotkey === null || initialHotkey === void 0 ? void 0 : initialHotkey.shift) !== hotkey.shift || (initialHotkey === null || initialHotkey === void 0 ? void 0 : initialHotkey.ctrl) !== hotkey.ctrl || (initialHotkey === null || initialHotkey === void 0 ? void 0 : initialHotkey.alt) !== hotkey.alt;
        lastKeyDown = hotkey;
        onChange(hotkey);
        currentHotkey = hotkey;
        if (keyChanged) {
            deactivate();
            resetElem.classList.remove("bytm-hidden");
        }
        else
            resetElem.classList.add("bytm-hidden");
        inputElem.value = hotkey.code;
        inputElem.dataset.state = "inactive";
        infoElem.innerHTML = getHotkeyInfoHtml(hotkey);
    });
    siteEvents.on("cfgMenuClosed", deactivate);
    inputElem.addEventListener("click", () => {
        if (inputElem.dataset.state === "inactive")
            activate();
        else
            deactivate();
    });
    inputElem.addEventListener("keydown", (e) => {
        if (reservedKeys.includes(e.code))
            return;
        if (inputElem.dataset.state === "inactive")
            activate();
    });
    wrapperElem.appendChild(resetElem);
    wrapperElem.appendChild(infoElem);
    wrapperElem.appendChild(inputElem);
    return wrapperElem;
}
function getHotkeyInfoHtml(hotkey) {
    const modifiers = [];
    hotkey.ctrl && modifiers.push(`<kbd class="bytm-kbd">${t("hotkey_key_ctrl")}</kbd>`);
    hotkey.shift && modifiers.push(`<kbd class="bytm-kbd">${t("hotkey_key_shift")}</kbd>`);
    hotkey.alt && modifiers.push(`<kbd class="bytm-kbd">${getOS() === "mac" ? t("hotkey_key_mac_option") : t("hotkey_key_alt")}</kbd>`);
    return `\
<div style="display: flex; align-items: center;">
  <span>
    ${modifiers.reduce((a, c) => `${a ? a + " " : ""}${c}`, "")}
  </span>
  <span style="padding: 0px 5px;">
    ${modifiers.length > 0 ? "+" : ""}
  </span>
</div>`;
}
/** Crude OS detection for keyboard layout purposes */
function getOS() {
    if (navigator.userAgent.match(/mac(\s?os|intel)/i))
        return "mac";
    return "other";
}/** Creates a simple toggle element */
function createToggleInput(_a) {
    return __awaiter(this, arguments, void 0, function* ({ onChange, initialValue = false, id = UserUtils.randomId(8, 26), labelPos = "left", }) {
        const wrapperEl = document.createElement("div");
        wrapperEl.classList.add("bytm-toggle-input-wrapper", "bytm-no-select");
        wrapperEl.role = "switch";
        wrapperEl.tabIndex = 0;
        const labelEl = labelPos !== "off" && document.createElement("label");
        if (labelEl) {
            labelEl.classList.add("bytm-toggle-input-label");
            labelEl.textContent = t(`toggled_${initialValue ? "on" : "off"}`);
            if (id)
                labelEl.htmlFor = `bytm-toggle-input-${id}`;
        }
        const toggleWrapperEl = document.createElement("div");
        toggleWrapperEl.classList.add("bytm-toggle-input");
        toggleWrapperEl.tabIndex = -1;
        const toggleEl = document.createElement("input");
        toggleEl.type = "checkbox";
        toggleEl.checked = initialValue;
        toggleEl.dataset.toggled = String(Boolean(initialValue));
        toggleEl.tabIndex = -1;
        if (id)
            toggleEl.id = `bytm-toggle-input-${id}`;
        const toggleKnobEl = document.createElement("div");
        toggleKnobEl.classList.add("bytm-toggle-input-knob");
        toggleKnobEl.innerHTML = "&nbsp;";
        const toggleElClicked = (e) => {
            e.preventDefault();
            e.stopPropagation();
            onChange(toggleEl.checked);
            toggleEl.dataset.toggled = String(Boolean(toggleEl.checked));
            if (labelEl)
                labelEl.textContent = t(`toggled_${toggleEl.checked ? "on" : "off"}`);
            wrapperEl.ariaValueText = t(`toggled_${toggleEl.checked ? "on" : "off"}`);
        };
        toggleEl.addEventListener("change", toggleElClicked);
        wrapperEl.addEventListener("keydown", (e) => {
            if (["Space", " ", "Enter"].includes(e.code)) {
                toggleEl.checked = !toggleEl.checked;
                toggleElClicked(e);
            }
        });
        toggleEl.appendChild(toggleKnobEl);
        toggleWrapperEl.appendChild(toggleEl);
        labelEl && labelPos === "left" && wrapperEl.appendChild(labelEl);
        wrapperEl.appendChild(toggleWrapperEl);
        labelEl && labelPos === "right" && wrapperEl.appendChild(labelEl);
        return wrapperEl;
    });
}let autoLikeChannelsDialog = null;
/** Creates and/or returns the import dialog */
function getAutoLikeChannelsDialog() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!autoLikeChannelsDialog) {
            yield initAutoLikeChannelsStore();
            autoLikeChannelsDialog = new BytmDialog({
                id: "auto-like-channels",
                width: 600,
                height: 800,
                closeBtnEnabled: true,
                closeOnBgClick: true,
                closeOnEscPress: true,
                destroyOnClose: true,
                small: true,
                renderHeader: renderHeader$6,
                renderBody: renderBody$6,
            });
        }
        return autoLikeChannelsDialog;
    });
}
let isLoaded = false;
/** Inits autoLikeChannels DataStore instance */
function initAutoLikeChannelsStore() {
    if (isLoaded)
        return;
    isLoaded = true;
    return autoLikeChannelsStore.loadData();
}
function renderHeader$6() {
    return __awaiter(this, void 0, void 0, function* () {
        const headerEl = document.createElement("h2");
        headerEl.classList.add("bytm-dialog-title");
        headerEl.role = "heading";
        headerEl.ariaLevel = "1";
        headerEl.textContent = t("auto_like_channels_dialog_title");
        return headerEl;
    });
}
function renderBody$6() {
    return __awaiter(this, void 0, void 0, function* () {
        const contElem = document.createElement("div");
        const descriptionEl = document.createElement("p");
        descriptionEl.classList.add("bytm-auto-like-channels-desc");
        descriptionEl.textContent = t("auto_like_channels_dialog_desc");
        descriptionEl.tabIndex = 0;
        contElem.appendChild(descriptionEl);
        const addNewWrapper = document.createElement("div");
        const addNewEl = document.createElement("span");
        addNewEl.id = "bytm-auto-like-channels-add-new";
        addNewEl.role = "button";
        addNewEl.tabIndex = 0;
        addNewEl.textContent = `+ ${t("create_new_entry")}`;
        addNewEl.classList.add("bytm-link", "bytm-no-select");
        addNewWrapper.appendChild(addNewEl);
        onInteraction(addNewEl, () => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const id = (_a = prompt(t("add_auto_like_channel_id_prompt"))) === null || _a === void 0 ? void 0 : _a.trim();
            if (!id)
                return;
            if (!id.match(/^[a-zA-Z0-9_-]{20,}$/))
                return alert(t("add_auto_like_channel_invalid_id"));
            let overwriteName = false;
            if (autoLikeChannelsStore.getData().channels.some((ch) => ch.id === id)) {
                if (!confirm(t("add_auto_like_channel_already_exists_prompt_new_name")))
                    return;
                overwriteName = true;
            }
            const name = (_b = prompt(t("add_auto_like_channel_name_prompt"))) === null || _b === void 0 ? void 0 : _b.trim();
            if (!name || name.length === 0)
                return;
            yield autoLikeChannelsStore.setData(overwriteName
                ? {
                    channels: autoLikeChannelsStore.getData().channels
                        .map((ch) => ch.id === id ? Object.assign(Object.assign({}, ch), { name }) : ch),
                }
                : {
                    channels: [
                        ...autoLikeChannelsStore.getData().channels,
                        { id, name, enabled: true },
                    ],
                });
            const unsub = autoLikeChannelsDialog === null || autoLikeChannelsDialog === void 0 ? void 0 : autoLikeChannelsDialog.on("clear", () => __awaiter(this, void 0, void 0, function* () {
                unsub === null || unsub === void 0 ? void 0 : unsub();
                yield (autoLikeChannelsDialog === null || autoLikeChannelsDialog === void 0 ? void 0 : autoLikeChannelsDialog.open());
            }));
            autoLikeChannelsDialog === null || autoLikeChannelsDialog === void 0 ? void 0 : autoLikeChannelsDialog.unmount();
        }));
        contElem.appendChild(addNewWrapper);
        const channelListCont = document.createElement("div");
        channelListCont.id = "bytm-auto-like-channels-list";
        const removeChannel = (id) => autoLikeChannelsStore.setData({
            channels: autoLikeChannelsStore.getData().channels.filter((ch) => ch.id !== id),
        });
        const setChannelEnabled = (id, enabled) => UserUtils.debounce(() => autoLikeChannelsStore.setData({
            channels: autoLikeChannelsStore.getData().channels
                .map((ch) => ch.id === id ? Object.assign(Object.assign({}, ch), { enabled }) : ch),
        }), 250, "rising");
        const sortedChannels = autoLikeChannelsStore
            .getData().channels
            .sort((a, b) => a.name.localeCompare(b.name));
        for (const { name, id, enabled } of sortedChannels) {
            const rowElem = document.createElement("div");
            rowElem.classList.add("bytm-auto-like-channel-row");
            const leftCont = document.createElement("div");
            leftCont.classList.add("bytm-auto-like-channel-row-left-cont");
            const nameLabelEl = document.createElement("label");
            nameLabelEl.ariaLabel = nameLabelEl.title = name;
            nameLabelEl.htmlFor = `bytm-auto-like-channel-list-toggle-${id}`;
            nameLabelEl.classList.add("bytm-auto-like-channel-name-label");
            const nameElem = document.createElement("a");
            nameElem.classList.add("bytm-auto-like-channel-name", "bytm-link");
            nameElem.ariaLabel = nameElem.textContent = name;
            nameElem.href = `https://${getDomain() === "yt" ? "" : "music."}youtube.com/channel/${id}`;
            nameElem.target = "_blank";
            nameElem.rel = "noopener noreferrer";
            nameElem.tabIndex = 0;
            const idElem = document.createElement("span");
            idElem.classList.add("bytm-auto-like-channel-id");
            idElem.textContent = idElem.title = id;
            nameLabelEl.appendChild(nameElem);
            nameLabelEl.appendChild(idElem);
            const toggleElem = yield createToggleInput({
                id: `bytm-auto-like-channel-list-toggle-${id}`,
                labelPos: "off",
                initialValue: enabled,
                onChange: (en) => setChannelEnabled(id, en),
            });
            toggleElem.classList.add("bytm-auto-like-channel-toggle");
            const removeBtn = yield createCircularBtn({
                resourceName: "icon-delete",
                title: t("remove_entry"),
                onClick() {
                    removeChannel(id);
                    rowElem.remove();
                },
            });
            leftCont.appendChild(toggleElem);
            leftCont.appendChild(nameLabelEl);
            rowElem.appendChild(leftCont);
            rowElem.appendChild(removeBtn);
            channelListCont.appendChild(rowElem);
        }
        contElem.appendChild(channelListCont);
        return contElem;
    });
}let changelogDialog = null;
/** Creates and/or returns the changelog dialog */
function getChangelogDialog() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!changelogDialog) {
            changelogDialog = new BytmDialog({
                id: "changelog",
                width: 900,
                height: 800,
                closeBtnEnabled: true,
                closeOnBgClick: true,
                closeOnEscPress: true,
                small: true,
                renderHeader: renderHeader$5,
                renderBody: renderBody$5,
            });
            changelogDialog.on("render", () => {
                const mdContElem = document.querySelector("#bytm-changelog-dialog-text");
                if (!mdContElem)
                    return;
                const anchors = mdContElem.querySelectorAll("a");
                for (const anchor of anchors) {
                    anchor.ariaLabel = anchor.title = anchor.href;
                    anchor.target = "_blank";
                }
                const firstDetails = mdContElem.querySelector("details");
                if (firstDetails)
                    firstDetails.open = true;
            });
        }
        return changelogDialog;
    });
}
function renderHeader$5() {
    return __awaiter(this, void 0, void 0, function* () {
        const headerEl = document.createElement("h2");
        headerEl.classList.add("bytm-dialog-title");
        headerEl.role = "heading";
        headerEl.ariaLevel = "1";
        headerEl.textContent = t("changelog_menu_title", scriptInfo.name);
        return headerEl;
    });
}
function renderBody$5() {
    return __awaiter(this, void 0, void 0, function* () {
        const contElem = document.createElement("div");
        const mdContElem = document.createElement("div");
        mdContElem.id = "bytm-changelog-dialog-text";
        mdContElem.classList.add("bytm-markdown-container");
        mdContElem.innerHTML = yield getChangelogHtmlWithDetails();
        contElem.appendChild(mdContElem);
        return contElem;
    });
}let exportDialog = null;
let copiedTxtTimeout = undefined;
let lastUncompressedCfgString;
/** Creates and/or returns the export dialog */
function getExportDialog() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!exportDialog) {
            exportDialog = new BytmDialog({
                id: "export",
                width: 600,
                height: 500,
                closeBtnEnabled: true,
                closeOnBgClick: true,
                closeOnEscPress: true,
                small: true,
                renderHeader: renderHeader$4,
                renderBody: renderBody$4,
                renderFooter: renderFooter$2,
            });
            exportDialog.on("close", () => {
                const textAreaElem = document.querySelector("#bytm-export-dialog-bg #bytm-export-menu-textarea");
                if (textAreaElem) {
                    textAreaElem.value = t("click_to_reveal_sensitive_info");
                    textAreaElem.setAttribute("revealed", "false");
                }
                const copiedTxtElem = document.querySelector("#bytm-export-menu-copied-txt");
                if (copiedTxtElem) {
                    copiedTxtElem.style.display = "none";
                    if (typeof copiedTxtTimeout === "number") {
                        clearTimeout(copiedTxtTimeout);
                        copiedTxtTimeout = undefined;
                    }
                }
            });
        }
        return exportDialog;
    });
}
function renderHeader$4() {
    return __awaiter(this, void 0, void 0, function* () {
        const headerEl = document.createElement("h2");
        headerEl.classList.add("bytm-menu-title");
        headerEl.role = "heading";
        headerEl.ariaLevel = "1";
        headerEl.textContent = t("export_menu_title", scriptInfo.name);
        return headerEl;
    });
}
function renderBody$4() {
    return __awaiter(this, void 0, void 0, function* () {
        const canCompress = yield compressionSupported();
        const contElem = document.createElement("div");
        const textElem = document.createElement("div");
        textElem.id = "bytm-export-menu-text";
        textElem.textContent = t("export_hint");
        const textAreaElem = document.createElement("textarea");
        textAreaElem.id = "bytm-export-menu-textarea";
        textAreaElem.readOnly = true;
        lastUncompressedCfgString = JSON.stringify({ formatVersion, data: getFeatures() }, undefined, 2);
        textAreaElem.value = t("click_to_reveal_sensitive_info");
        textAreaElem.setAttribute("revealed", "false");
        const textAreaInteraction = (_a) => __awaiter(this, [_a], void 0, function* ({ shiftKey }) {
            const cfgString = JSON.stringify({ formatVersion, data: getFeatures() });
            lastUncompressedCfgString = JSON.stringify({ formatVersion, data: getFeatures() }, undefined, 2);
            textAreaElem.value = shiftKey
                ? lastUncompressedCfgString
                : (canCompress
                    ? yield UserUtils.compress(cfgString, compressionFormat, "string")
                    : cfgString);
            textAreaElem.setAttribute("revealed", "true");
        });
        onInteraction(textAreaElem, textAreaInteraction);
        siteEvents.on("configChanged", (data) => __awaiter(this, void 0, void 0, function* () {
            const textAreaElem = document.querySelector("#bytm-export-menu-textarea");
            const cfgString = JSON.stringify({ formatVersion, data });
            lastUncompressedCfgString = JSON.stringify({ formatVersion, data }, undefined, 2);
            if (textAreaElem) {
                if (textAreaElem.getAttribute("revealed") !== "true")
                    return;
                textAreaElem.value = canCompress ? yield UserUtils.compress(cfgString, compressionFormat, "string") : cfgString;
            }
        }));
        contElem.appendChild(textElem);
        contElem.appendChild(textAreaElem);
        return contElem;
    });
}
function renderFooter$2() {
    return __awaiter(this, void 0, void 0, function* () {
        const footerElem = document.createElement("div");
        footerElem.classList.add("bytm-menu-footer-right");
        const copyBtnElem = document.createElement("button");
        copyBtnElem.classList.add("bytm-btn");
        copyBtnElem.textContent = t("copy_to_clipboard");
        copyBtnElem.ariaLabel = copyBtnElem.title = t("copy_config_tooltip");
        const copiedTextElem = document.createElement("span");
        copiedTextElem.id = "bytm-export-menu-copied-txt";
        copiedTextElem.role = "status";
        copiedTextElem.classList.add("bytm-menu-footer-copied");
        copiedTextElem.textContent = t("copied");
        copiedTextElem.style.display = "none";
        onInteraction(copyBtnElem, (evt) => __awaiter(this, void 0, void 0, function* () {
            (evt === null || evt === void 0 ? void 0 : evt.bubbles) && evt.stopPropagation();
            copyToClipboard(evt.shiftKey && lastUncompressedCfgString
                ? lastUncompressedCfgString
                : yield UserUtils.compress(JSON.stringify({ formatVersion, data: getFeatures() }), compressionFormat, "string"));
            copiedTextElem.style.display = "inline-block";
            if (typeof copiedTxtTimeout === "undefined") {
                copiedTxtTimeout = setTimeout(() => {
                    copiedTextElem.style.display = "none";
                    copiedTxtTimeout = undefined;
                }, 3000);
            }
        }));
        // flex-direction is row-reverse
        footerElem.appendChild(copyBtnElem);
        footerElem.appendChild(copiedTextElem);
        return footerElem;
    });
}let featHelpDialog = null;
let curFeatKey = null;
/** Creates or modifies the help dialog for a specific feature and returns it */
function getFeatHelpDialog(_a) {
    return __awaiter(this, arguments, void 0, function* ({ featKey, }) {
        curFeatKey = featKey;
        if (!featHelpDialog) {
            featHelpDialog = new BytmDialog({
                id: "feat-help",
                width: 600,
                height: 400,
                closeBtnEnabled: true,
                closeOnBgClick: true,
                closeOnEscPress: true,
                small: true,
                renderHeader: renderHeader$3,
                renderBody: renderBody$3,
            });
            // make config menu inert while help dialog is open
            featHelpDialog.on("open", () => { var _a; return (_a = document.querySelector("#bytm-cfg-menu")) === null || _a === void 0 ? void 0 : _a.setAttribute("inert", "true"); });
            featHelpDialog.on("close", () => { var _a; return (_a = document.querySelector("#bytm-cfg-menu")) === null || _a === void 0 ? void 0 : _a.removeAttribute("inert"); });
        }
        return featHelpDialog;
    });
}
function renderHeader$3() {
    return __awaiter(this, void 0, void 0, function* () {
        const headerEl = document.createElement("div");
        headerEl.role = "heading";
        headerEl.ariaLevel = "1";
        const helpIconSvg = yield resourceToHTMLString("icon-help");
        if (helpIconSvg)
            headerEl.innerHTML = helpIconSvg;
        return headerEl;
    });
}
function renderBody$3() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const contElem = document.createElement("div");
        const featDescElem = document.createElement("h3");
        featDescElem.role = "subheading";
        featDescElem.tabIndex = 0;
        featDescElem.textContent = t(`feature_desc_${curFeatKey}`);
        featDescElem.id = "bytm-feat-help-dialog-desc";
        const helpTextElem = document.createElement("div");
        helpTextElem.id = "bytm-feat-help-dialog-text";
        helpTextElem.tabIndex = 0;
        // @ts-ignore
        const helpText = (_b = (_a = featInfo[curFeatKey]) === null || _a === void 0 ? void 0 : _a.helpText) === null || _b === void 0 ? void 0 : _b.call(_a);
        helpTextElem.textContent = helpText !== null && helpText !== void 0 ? helpText : t(`feature_helptext_${curFeatKey}`);
        contElem.appendChild(featDescElem);
        contElem.appendChild(helpTextElem);
        return contElem;
    });
}let importDialog = null;
/** Creates and/or returns the import dialog */
function getImportDialog() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!importDialog) {
            importDialog = new BytmDialog({
                id: "import",
                width: 600,
                height: 500,
                closeBtnEnabled: true,
                closeOnBgClick: true,
                closeOnEscPress: true,
                small: true,
                renderHeader: renderHeader$2,
                renderBody: renderBody$2,
                renderFooter: renderFooter$1,
            });
        }
        return importDialog;
    });
}
function renderHeader$2() {
    return __awaiter(this, void 0, void 0, function* () {
        const headerEl = document.createElement("h2");
        headerEl.classList.add("bytm-dialog-title");
        headerEl.role = "heading";
        headerEl.ariaLevel = "1";
        headerEl.textContent = t("import_menu_title", scriptInfo.name);
        return headerEl;
    });
}
function renderBody$2() {
    return __awaiter(this, void 0, void 0, function* () {
        const contElem = document.createElement("div");
        const textElem = document.createElement("div");
        textElem.id = "bytm-import-menu-text";
        textElem.textContent = t("import_hint");
        const textAreaElem = document.createElement("textarea");
        textAreaElem.id = "bytm-import-menu-textarea";
        contElem.appendChild(textElem);
        contElem.appendChild(textAreaElem);
        return contElem;
    });
}
function renderFooter$1() {
    return __awaiter(this, void 0, void 0, function* () {
        const footerElem = document.createElement("div");
        footerElem.classList.add("bytm-menu-footer-right");
        const importBtnElem = document.createElement("button");
        importBtnElem.classList.add("bytm-btn");
        importBtnElem.textContent = t("import");
        importBtnElem.ariaLabel = importBtnElem.title = t("start_import_tooltip");
        importBtnElem.addEventListener("click", (evt) => __awaiter(this, void 0, void 0, function* () {
            (evt === null || evt === void 0 ? void 0 : evt.bubbles) && evt.stopPropagation();
            const textAreaElem = document.querySelector("#bytm-import-menu-textarea");
            if (!textAreaElem)
                return warn("Couldn't find import menu textarea element");
            try {
                /** Tries to parse an uncompressed or compressed input string as a JSON object */
                const decode = (input) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        return JSON.parse(input);
                    }
                    catch (_a) {
                        try {
                            return JSON.parse(yield UserUtils.decompress(input, compressionFormat, "string"));
                        }
                        catch (err) {
                            warn("Couldn't import configuration:", err);
                            return null;
                        }
                    }
                });
                const parsed = yield decode(textAreaElem.value.trim());
                if (typeof parsed !== "object")
                    return alert(t("import_error_invalid"));
                if (typeof parsed.formatVersion !== "number")
                    return alert(t("import_error_no_format_version"));
                if (typeof parsed.data !== "object" || parsed.data === null || Object.keys(parsed.data).length === 0)
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
                                error(`Error while running migration function for format version ${fmtVer}:`, err);
                            }
                        }
                    }
                    parsed.formatVersion = curFmtVer;
                    parsed.data = newData;
                }
                else if (parsed.formatVersion !== formatVersion)
                    return alert(t("import_error_wrong_format_version", formatVersion, parsed.formatVersion));
                yield setFeatures(Object.assign(Object.assign({}, getFeatures()), parsed.data));
                if (confirm(t("import_success_confirm_reload"))) {
                    disableBeforeUnload();
                    return location.reload();
                }
                emitSiteEvent("rebuildCfgMenu", parsed.data);
                importDialog === null || importDialog === void 0 ? void 0 : importDialog.close();
            }
            catch (err) {
                warn("Couldn't import configuration:", err);
                alert(t("import_error_invalid"));
            }
        }));
        footerElem.appendChild(importBtnElem);
        return footerElem;
    });
}var name = "betterytm";
var userscriptName = "BetterYTM";
var version = "2.0.0";
var description = "Lots of configurable layout and user experience improvements for YouTube Music™ and YouTube™";
var homepage = "https://github.com/Sv443/BetterYTM";
var main = "./src/index.ts";
var type = "module";
var scripts = {
	dev: "concurrently \"nodemon --exec npm run build-dev\" \"npm run serve\"",
	serve: "npm run node-ts -- ./src/tools/serve.ts",
	lint: "tsc --noEmit && eslint .",
	build: "rollup -c",
	"build-dev": "rollup -c --config-mode development --config-host github --config-branch develop --config-assetSource=local",
	"build-preview": "rollup -c --config-mode development --config-host github --config-branch develop",
	"build-prod": "npm run build-prod-gh && npm run build-prod-gf && npm run build-prod-oujs",
	"build-prod-base": "rollup -c --config-mode production --config-branch main",
	"build-prod-gh": "npm run build-prod-base -- --config-host github",
	"build-prod-gf": "npm run build-prod-base -- --config-host greasyfork --config-suffix _gf",
	"build-prod-oujs": "npm run build-prod-base -- --config-host openuserjs --config-suffix _oujs",
	"post-build": "npm run node-ts -- ./src/tools/post-build.ts",
	"tr-progress": "npm run node-ts -- ./src/tools/tr-progress.ts",
	"tr-format": "npm run node-ts -- ./src/tools/tr-format.ts",
	"tr-prep": "npm run tr-format -- -p",
	"gen-readme": "npm run node-ts -- ./src/tools/gen-readme.ts",
	"node-ts": "node --no-warnings=ExperimentalWarning --enable-source-maps --loader ts-node/esm",
	invisible: "node --enable-source-maps src/tools/run-invisible.mjs",
	test: "npm run node-ts -- ./test.ts",
	knip: "knip"
};
var engines = {
	node: ">=18 <22",
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
var license = "AGPL-3.0-only";
var bugs = {
	url: "https://github.com/Sv443/BetterYTM/issues"
};
var funding = {
	type: "github",
	url: "https://github.com/sponsors/Sv443"
};
var hosts = {
	github: "https://github.com/Sv443/BetterYTM",
	greasyfork: "https://greasyfork.org/en/scripts/475682-betterytm",
	openuserjs: "https://openuserjs.org/scripts/Sv443/BetterYTM"
};
var updates = {
	github: "https://github.com/Sv443/BetterYTM/releases",
	greasyfork: "https://greasyfork.org/en/scripts/475682-betterytm",
	openuserjs: "https://openuserjs.org/scripts/Sv443/BetterYTM"
};
var dependencies = {
	"@sv443-network/userutils": "^6.3.0",
	"compare-versions": "^6.1.0",
	"fuse.js": "^7.0.0",
	marked: "^12.0.0",
	nanoevents: "^9.0.0"
};
var devDependencies = {
	"@rollup/plugin-json": "^6.0.1",
	"@rollup/plugin-node-resolve": "^15.2.3",
	"@rollup/plugin-terser": "^0.4.4",
	"@rollup/plugin-typescript": "^11.1.5",
	"@types/express": "^4.17.17",
	"@types/greasemonkey": "^4.0.4",
	"@types/node": "^20.12.12",
	"@typescript-eslint/eslint-plugin": "^6.7.4",
	"@typescript-eslint/parser": "^6.7.4",
	concurrently: "^8.1.0",
	dotenv: "^16.4.1",
	eslint: "^8.51.0",
	express: "^4.18.2",
	knip: "^5.15.1",
	nodemon: "^3.0.1",
	rollup: "^4.6.0",
	"rollup-plugin-execute": "^1.1.1",
	"rollup-plugin-import-css": "^3.3.5",
	"ts-node": "^10.9.1",
	tslib: "^2.5.2",
	typescript: "^5.4.5"
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
		"changelog.md",
		"package.json"
	],
	ext: "ts,mts,js,jsx,mjs,json,html,css,svg,png",
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
	hosts: hosts,
	updates: updates,
	dependencies: dependencies,
	devDependencies: devDependencies,
	browserslist: browserslist,
	nodemonConfig: nodemonConfig
};let verNotifDialog = null;
/** Creates and/or returns the dialog to be shown when a new version is available */
function getVersionNotifDialog(_a) {
    return __awaiter(this, arguments, void 0, function* ({ latestTag, }) {
        if (!verNotifDialog) {
            const changelogMdFull = yield getChangelogMd();
            // I messed up because this should be 0 so the changelog will always need to have an extra div at the top for backwards compatibility
            const changelogMd = changelogMdFull.split("<div class=\"split\">")[1];
            const changelogHtml = yield parseMarkdown(changelogMd);
            verNotifDialog = new BytmDialog({
                id: "version-notif",
                width: 600,
                height: 800,
                closeBtnEnabled: false,
                closeOnBgClick: false,
                closeOnEscPress: true,
                destroyOnClose: true,
                small: true,
                renderHeader: renderHeader$1,
                renderBody: () => renderBody$1({
                    latestTag,
                    changelogHtml,
                }),
            });
        }
        return verNotifDialog;
    });
}
function renderHeader$1() {
    return __awaiter(this, void 0, void 0, function* () {
        const headerEl = document.createElement("div");
        headerEl.role = "heading";
        headerEl.ariaLevel = "1";
        const logoEl = document.createElement("img");
        logoEl.classList.add("bytm-dialog-header-img", "bytm-no-select");
        logoEl.src = yield getResourceUrl(mode === "development" ? "img-logo_dev" : "img-logo");
        logoEl.alt = "BetterYTM logo";
        headerEl.appendChild(logoEl);
        return headerEl;
    });
}
let disableUpdateCheck = false;
function renderBody$1(_a) {
    return __awaiter(this, arguments, void 0, function* ({ latestTag, changelogHtml, }) {
        disableUpdateCheck = false;
        const hostPlatformNames = {
            github: "GitHub",
            greasyfork: "GreasyFork",
            openuserjs: "OpenUserJS",
        };
        const wrapperEl = document.createElement("div");
        const pEl = document.createElement("p");
        pEl.textContent = t("new_version_available", scriptInfo.name, scriptInfo.version, latestTag, hostPlatformNames[host]);
        wrapperEl.appendChild(pEl);
        const changelogDetailsEl = document.createElement("details");
        changelogDetailsEl.id = "bytm-version-notif-changelog-details";
        changelogDetailsEl.open = false;
        const changelogSummaryEl = document.createElement("summary");
        changelogSummaryEl.role = "button";
        changelogSummaryEl.tabIndex = 0;
        changelogSummaryEl.ariaLabel = changelogSummaryEl.title = changelogSummaryEl.textContent = t("expand_release_notes");
        changelogDetailsEl.appendChild(changelogSummaryEl);
        changelogDetailsEl.addEventListener("toggle", () => {
            changelogSummaryEl.ariaLabel = changelogSummaryEl.title = changelogSummaryEl.textContent = changelogDetailsEl.open ? t("collapse_release_notes") : t("expand_release_notes");
        });
        const changelogEl = document.createElement("p");
        changelogEl.id = "bytm-version-notif-changelog-cont";
        changelogEl.classList.add("bytm-markdown-container");
        changelogEl.innerHTML = changelogHtml;
        changelogEl.querySelectorAll("a").forEach((a) => {
            a.target = "_blank";
            a.rel = "noopener noreferrer";
        });
        changelogDetailsEl.appendChild(changelogEl);
        wrapperEl.appendChild(changelogDetailsEl);
        const disableUpdCheckEl = document.createElement("div");
        disableUpdCheckEl.id = "bytm-disable-update-check-wrapper";
        if (getFeatures().versionCheck === false)
            disableUpdateCheck = true;
        const disableToggleEl = yield createToggleInput({
            id: "disable-update-check",
            initialValue: disableUpdateCheck,
            labelPos: "off",
            onChange(checked) {
                disableUpdateCheck = checked;
                if (checked)
                    btnClose.textContent = t("close_and_ignore_until_reenabled");
                else
                    btnClose.textContent = t("close_and_ignore_for_24h");
            },
        });
        const labelWrapperEl = document.createElement("div");
        labelWrapperEl.classList.add("bytm-disable-update-check-toggle-label-wrapper");
        const labelEl = document.createElement("label");
        labelEl.htmlFor = "bytm-toggle-disable-update-check";
        labelEl.textContent = t("disable_update_check");
        const secondaryLabelEl = document.createElement("span");
        secondaryLabelEl.classList.add("bytm-secondary-label");
        secondaryLabelEl.textContent = t("reenable_in_config_menu");
        labelWrapperEl.appendChild(labelEl);
        labelWrapperEl.appendChild(secondaryLabelEl);
        disableUpdCheckEl.appendChild(disableToggleEl);
        disableUpdCheckEl.appendChild(labelWrapperEl);
        wrapperEl.appendChild(disableUpdCheckEl);
        verNotifDialog === null || verNotifDialog === void 0 ? void 0 : verNotifDialog.on("close", () => __awaiter(this, void 0, void 0, function* () {
            const config = getFeatures();
            const recreateCfgMenu = config.versionCheck === disableUpdateCheck;
            if (config.versionCheck && disableUpdateCheck)
                config.versionCheck = false;
            else if (!config.versionCheck && !disableUpdateCheck)
                config.versionCheck = true;
            yield setFeatures(config);
            recreateCfgMenu && siteEvents.emit("recreateCfgMenu");
        }));
        const btnWrapper = document.createElement("div");
        btnWrapper.id = "bytm-version-notif-dialog-btns";
        const btnUpdate = document.createElement("button");
        btnUpdate.classList.add("bytm-btn");
        btnUpdate.tabIndex = 0;
        btnUpdate.textContent = t("open_update_page_install_manually", hostPlatformNames[host]);
        onInteraction(btnUpdate, () => {
            window.open(pkg.updates[host]);
            verNotifDialog === null || verNotifDialog === void 0 ? void 0 : verNotifDialog.close();
        });
        const btnClose = document.createElement("button");
        btnClose.classList.add("bytm-btn");
        btnClose.tabIndex = 0;
        btnClose.textContent = t("close_and_ignore_for_24h");
        onInteraction(btnClose, () => verNotifDialog === null || verNotifDialog === void 0 ? void 0 : verNotifDialog.close());
        btnWrapper.appendChild(btnUpdate);
        btnWrapper.appendChild(btnClose);
        wrapperEl.appendChild(btnWrapper);
        return wrapperEl;
    });
}//#region create menu
let isCfgMenuAdded = false;
let isCfgMenuOpen = false;
/** Threshold in pixels from the top of the options container that dictates for how long the scroll indicator is shown */
const scrollIndicatorOffsetThreshold = 30;
let scrollIndicatorEnabled = true;
/** Locale at the point of initializing the config menu */
let initLocale;
/** Stringified config at the point of initializing the config menu */
let initConfig$1;
/** Timeout id for the "copied" text in the hidden value copy button */
let hiddenCopiedTxtTimeout;
/**
 * Adds an element to open the BetterYTM menu
 * @deprecated to be replaced with new menu - see https://github.com/Sv443/BetterYTM/issues/23
 */
function addCfgMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        if (isCfgMenuAdded)
            return;
        isCfgMenuAdded = true;
        initLocale = getFeatures().locale;
        initConfig$1 = getFeatures();
        const initLangReloadText = t("lang_changed_prompt_reload");
        //#region bg & container
        const backgroundElem = document.createElement("div");
        backgroundElem.id = "bytm-cfg-menu-bg";
        backgroundElem.classList.add("bytm-menu-bg", `bytm-dom-${getDomain()}`);
        backgroundElem.ariaLabel = backgroundElem.title = t("close_menu_tooltip");
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
        menuContainer.ariaLabel = menuContainer.title = ""; // prevent bg title from propagating downwards
        menuContainer.classList.add("bytm-menu", `bytm-dom-${getDomain()}`);
        menuContainer.id = "bytm-cfg-menu";
        //#region title bar
        const headerElem = document.createElement("div");
        headerElem.classList.add("bytm-menu-header");
        const titleCont = document.createElement("div");
        titleCont.classList.add("bytm-menu-titlecont");
        titleCont.role = "heading";
        titleCont.ariaLevel = "1";
        const titleElem = document.createElement("h2");
        titleElem.classList.add("bytm-menu-title");
        const titleTextElem = document.createElement("div");
        titleTextElem.textContent = t("config_menu_title", scriptInfo.name);
        titleElem.appendChild(titleTextElem);
        const linksCont = document.createElement("div");
        linksCont.id = "bytm-menu-linkscont";
        linksCont.role = "navigation";
        const linkTitlesShort = {
            github: "GitHub",
            greasyfork: "GreasyFork",
            openuserjs: "OpenUserJS",
            discord: "Discord",
        };
        const addLink = (imgSrc, href, title, titleKey) => {
            const anchorElem = document.createElement("a");
            anchorElem.classList.add("bytm-menu-link", "bytm-no-select");
            anchorElem.rel = "noopener noreferrer";
            anchorElem.href = href;
            anchorElem.target = "_blank";
            anchorElem.tabIndex = 0;
            anchorElem.role = "button";
            anchorElem.ariaLabel = anchorElem.title = title;
            const extendedAnchorEl = document.createElement("a");
            extendedAnchorEl.classList.add("bytm-menu-link", "extended-link", "bytm-no-select");
            extendedAnchorEl.rel = "noopener noreferrer";
            extendedAnchorEl.href = href;
            extendedAnchorEl.target = "_blank";
            extendedAnchorEl.tabIndex = -1;
            extendedAnchorEl.textContent = linkTitlesShort[titleKey];
            extendedAnchorEl.ariaLabel = extendedAnchorEl.title = title;
            const imgElem = document.createElement("img");
            imgElem.classList.add("bytm-menu-img");
            imgElem.src = imgSrc;
            anchorElem.appendChild(imgElem);
            anchorElem.appendChild(extendedAnchorEl);
            linksCont.appendChild(anchorElem);
        };
        const links = [
            ["github", yield getResourceUrl("img-github"), scriptInfo.namespace, t("open_github", scriptInfo.name), "github"],
            ["greasyfork", yield getResourceUrl("img-greasyfork"), pkg.hosts.greasyfork, t("open_greasyfork", scriptInfo.name), "greasyfork"],
            ["openuserjs", yield getResourceUrl("img-openuserjs"), pkg.hosts.openuserjs, t("open_openuserjs", scriptInfo.name), "openuserjs"],
        ];
        const hostLink = links.find(([name]) => name === host);
        const otherLinks = links.filter(([name]) => name !== host);
        const reorderedLinks = hostLink ? [hostLink, ...otherLinks] : links;
        for (const [, ...args] of reorderedLinks)
            addLink(...args);
        addLink(yield getResourceUrl("img-discord"), "https://dc.sv443.net/", t("open_discord"), "discord");
        const closeElem = document.createElement("img");
        closeElem.classList.add("bytm-menu-close");
        closeElem.role = "button";
        closeElem.tabIndex = 0;
        closeElem.src = yield getResourceUrl("img-close");
        closeElem.ariaLabel = closeElem.title = t("close_menu_tooltip");
        onInteraction(closeElem, closeCfgMenu);
        titleCont.appendChild(titleElem);
        titleCont.appendChild(linksCont);
        headerElem.appendChild(titleCont);
        headerElem.appendChild(closeElem);
        //#region footer
        const footerCont = document.createElement("div");
        footerCont.classList.add("bytm-menu-footer-cont");
        const reloadFooterCont = document.createElement("div");
        const reloadFooterEl = document.createElement("div");
        reloadFooterEl.classList.add("bytm-menu-footer", "hidden");
        reloadFooterEl.setAttribute("aria-hidden", "true");
        reloadFooterEl.textContent = t("reload_hint");
        reloadFooterEl.role = "alert";
        const reloadTxtEl = document.createElement("button");
        reloadTxtEl.classList.add("bytm-btn");
        reloadTxtEl.style.marginLeft = "10px";
        reloadTxtEl.textContent = t("reload_now");
        reloadTxtEl.ariaLabel = reloadTxtEl.title = t("reload_tooltip");
        reloadTxtEl.addEventListener("click", () => {
            closeCfgMenu();
            disableBeforeUnload();
            location.reload();
        });
        reloadFooterEl.appendChild(reloadTxtEl);
        reloadFooterCont.appendChild(reloadFooterEl);
        const resetElem = document.createElement("button");
        resetElem.classList.add("bytm-btn");
        resetElem.ariaLabel = resetElem.title = t("reset_tooltip");
        resetElem.textContent = t("reset");
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
        exportElem.ariaLabel = exportElem.title = t("export_tooltip");
        exportElem.textContent = t("export");
        exportElem.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            const dlg = yield getExportDialog();
            dlg.on("close", openCfgMenu);
            yield dlg.mount();
            closeCfgMenu(undefined, false);
            yield dlg.open();
        }));
        const importElem = document.createElement("button");
        importElem.classList.add("bytm-btn");
        importElem.ariaLabel = importElem.title = t("import_tooltip");
        importElem.textContent = t("import");
        importElem.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            const dlg = yield getImportDialog();
            dlg.on("close", openCfgMenu);
            yield dlg.mount();
            closeCfgMenu(undefined, false);
            yield dlg.open();
        }));
        const buttonsCont = document.createElement("div");
        buttonsCont.id = "bytm-menu-footer-buttons-cont";
        buttonsCont.appendChild(exportElem);
        buttonsCont.appendChild(importElem);
        buttonsCont.appendChild(resetElem);
        footerCont.appendChild(reloadFooterCont);
        footerCont.appendChild(buttonsCont);
        //#region feature list
        const featuresCont = document.createElement("div");
        featuresCont.id = "bytm-menu-opts";
        const onCfgChange = (key, initialVal, newVal) => __awaiter(this, void 0, void 0, function* () {
            var _f, _g;
            const fmt = (val) => typeof val === "object" ? JSON.stringify(val) : String(val);
            info(`Feature config changed at key '${key}', from value '${fmt(initialVal)}' to '${fmt(newVal)}'`);
            const featConf = JSON.parse(JSON.stringify(getFeatures()));
            featConf[key] = newVal;
            const changedKeys = initConfig$1 ? Object.keys(featConf).filter((k) => typeof featConf[k] !== "object"
                && featConf[k] !== initConfig$1[k]) : [];
            const requiresReload = 
            // @ts-ignore
            changedKeys.some((k) => { var _a; return ((_a = featInfo[k]) === null || _a === void 0 ? void 0 : _a.reloadRequired) !== false; });
            yield setFeatures(featConf);
            // @ts-ignore
            (_g = (_f = featInfo[key]) === null || _f === void 0 ? void 0 : _f.change) === null || _g === void 0 ? void 0 : _g.call(_f, key, initialVal, newVal);
            if (requiresReload) {
                reloadFooterEl.classList.remove("hidden");
                reloadFooterEl.setAttribute("aria-hidden", "false");
            }
            else if (!requiresReload) {
                reloadFooterEl.classList.add("hidden");
                reloadFooterEl.setAttribute("aria-hidden", "true");
            }
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
            siteEvents.emit("configOptionChanged", key, initialVal, newVal);
        });
        /** Call whenever the feature config is changed */
        const confChanged = UserUtils.debounce(onCfgChange, 200, "falling");
        const featureCfg = getFeatures();
        const featureCfgWithCategories = Object.entries(featInfo)
            .reduce((acc, [key, { category }]) => {
            if (!acc[category])
                acc[category] = {};
            acc[category][key] = featureCfg[key];
            return acc;
        }, {});
        const fmtVal = (v, key) => {
            var _a;
            try {
                // @ts-ignore
                const renderValue = typeof ((_a = featInfo === null || featInfo === void 0 ? void 0 : featInfo[key]) === null || _a === void 0 ? void 0 : _a.renderValue) === "function" ? featInfo[key].renderValue : undefined;
                const retVal = (typeof v === "object" ? JSON.stringify(v) : String(v)).trim();
                return renderValue ? renderValue(retVal) : retVal;
            }
            catch (_e) {
                // because stringify throws on circular refs
                return String(v).trim();
            }
        };
        for (const category in featureCfgWithCategories) {
            const featObj = featureCfgWithCategories[category];
            const catHeaderElem = document.createElement("h3");
            catHeaderElem.classList.add("bytm-ftconf-category-header");
            catHeaderElem.role = "heading";
            catHeaderElem.ariaLevel = "2";
            catHeaderElem.tabIndex = 0;
            catHeaderElem.textContent = `${t(`feature_category_${category}`)}:`;
            featuresCont.appendChild(catHeaderElem);
            for (const featKey in featObj) {
                const ftInfo = featInfo[featKey];
                if (!ftInfo || ("hidden" in ftInfo && ftInfo.hidden === true))
                    continue;
                if (ftInfo.advanced && !featureCfg.advancedMode)
                    continue;
                const { type, default: ftDefault } = ftInfo;
                const step = "step" in ftInfo ? ftInfo.step : undefined;
                const val = featureCfg[featKey];
                const initialVal = (_a = val !== null && val !== void 0 ? val : ftDefault) !== null && _a !== void 0 ? _a : undefined;
                const ftConfElem = document.createElement("div");
                ftConfElem.classList.add("bytm-ftitem");
                {
                    const featLeftSideElem = document.createElement("div");
                    featLeftSideElem.classList.add("bytm-ftitem-leftside");
                    if (getFeatures().advancedMode) {
                        const defVal = fmtVal(ftDefault, featKey);
                        const extraTxts = [
                            `default: ${defVal.length === 0 ? "(undefined)" : defVal}`,
                        ];
                        "min" in ftInfo && extraTxts.push(`min: ${ftInfo.min}`);
                        "max" in ftInfo && extraTxts.push(`max: ${ftInfo.max}`);
                        "step" in ftInfo && extraTxts.push(`step: ${ftInfo.step}`);
                        const rel = "reloadRequired" in ftInfo && ftInfo.reloadRequired !== false ? " (reload required)" : "";
                        const adv = ftInfo.advanced ? " (advanced feature)" : "";
                        featLeftSideElem.title = `${featKey}${rel}${adv}${extraTxts.length > 0 ? `\n${extraTxts.join(" - ")}` : ""}`;
                    }
                    const textElem = document.createElement("span");
                    textElem.tabIndex = 0;
                    textElem.textContent = t(`feature_desc_${featKey}`);
                    let adornmentElem;
                    const adornContent = (_b = ftInfo.textAdornment) === null || _b === void 0 ? void 0 : _b.call(ftInfo);
                    const adornContentAw = adornContent instanceof Promise ? yield adornContent : adornContent;
                    if ((typeof adornContent === "string" || adornContent instanceof Promise) && typeof adornContentAw !== "undefined") {
                        adornmentElem = document.createElement("span");
                        adornmentElem.id = `bytm-ftitem-${featKey}-adornment`;
                        adornmentElem.classList.add("bytm-ftitem-adornment");
                        adornmentElem.innerHTML = adornContentAw;
                    }
                    let helpElem;
                    // @ts-ignore
                    const hasHelpTextFunc = typeof ((_c = featInfo[featKey]) === null || _c === void 0 ? void 0 : _c.helpText) === "function";
                    // @ts-ignore
                    const helpTextVal = hasHelpTextFunc && featInfo[featKey].helpText();
                    if (hasKey(`feature_helptext_${featKey}`) || (helpTextVal && hasKey(helpTextVal))) {
                        const helpElemImgHtml = yield resourceToHTMLString("icon-help");
                        if (helpElemImgHtml) {
                            helpElem = document.createElement("div");
                            helpElem.classList.add("bytm-ftitem-help-btn", "bytm-generic-btn");
                            helpElem.ariaLabel = helpElem.title = t("feature_help_button_tooltip");
                            helpElem.role = "button";
                            helpElem.tabIndex = 0;
                            helpElem.innerHTML = helpElemImgHtml;
                            onInteraction(helpElem, (e) => __awaiter(this, void 0, void 0, function* () {
                                e.preventDefault();
                                e.stopPropagation();
                                yield (yield getFeatHelpDialog({ featKey: featKey })).open();
                            }));
                        }
                        else {
                            error(`Couldn't create help button SVG element for feature '${featKey}'`);
                        }
                    }
                    adornmentElem && featLeftSideElem.appendChild(adornmentElem);
                    featLeftSideElem.appendChild(textElem);
                    helpElem && featLeftSideElem.appendChild(helpElem);
                    ftConfElem.appendChild(featLeftSideElem);
                }
                {
                    let inputType = "text";
                    let inputTag = "input";
                    switch (type) {
                        case "toggle":
                            inputTag = undefined;
                            inputType = undefined;
                            break;
                        case "slider":
                            inputType = "range";
                            break;
                        case "number":
                            inputType = "number";
                            break;
                        case "text":
                            inputType = "text";
                            break;
                        case "select":
                            inputTag = "select";
                            inputType = undefined;
                            break;
                        case "hotkey":
                            inputTag = undefined;
                            inputType = undefined;
                            break;
                        case "button":
                            inputTag = undefined;
                            inputType = undefined;
                            break;
                    }
                    const inputElemId = `bytm-ftconf-${featKey}-input`;
                    const ctrlElem = document.createElement("span");
                    ctrlElem.classList.add("bytm-ftconf-ctrl");
                    let advCopyHiddenCont;
                    if ((getFeatures().advancedMode || mode === "development") && ftInfo.valueHidden) {
                        const advCopyHintElem = document.createElement("span");
                        advCopyHintElem.classList.add("bytm-ftconf-adv-copy-hint");
                        advCopyHintElem.textContent = t("copied");
                        advCopyHintElem.role = "status";
                        advCopyHintElem.style.display = "none";
                        const advCopyHiddenBtn = document.createElement("button");
                        advCopyHiddenBtn.classList.add("bytm-ftconf-adv-copy-btn", "bytm-btn");
                        advCopyHiddenBtn.tabIndex = 0;
                        advCopyHiddenBtn.textContent = t("copy_hidden_value");
                        advCopyHiddenBtn.ariaLabel = advCopyHiddenBtn.title = t("copy_hidden_tooltip");
                        const copyHiddenInteraction = (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            copyToClipboard(getFeatures()[featKey]);
                            advCopyHintElem.style.display = "inline";
                            if (typeof hiddenCopiedTxtTimeout === "undefined") {
                                hiddenCopiedTxtTimeout = setTimeout(() => {
                                    advCopyHintElem.style.display = "none";
                                    hiddenCopiedTxtTimeout = undefined;
                                }, 3000);
                            }
                        };
                        onInteraction(advCopyHiddenBtn, copyHiddenInteraction);
                        advCopyHiddenCont = document.createElement("span");
                        advCopyHiddenCont.appendChild(advCopyHintElem);
                        advCopyHiddenCont.appendChild(advCopyHiddenBtn);
                    }
                    advCopyHiddenCont && ctrlElem.appendChild(advCopyHiddenCont);
                    if (inputTag) {
                        // standard input element:
                        const inputElem = document.createElement(inputTag);
                        inputElem.classList.add("bytm-ftconf-input");
                        inputElem.id = inputElemId;
                        if (inputType)
                            inputElem.type = inputType;
                        if ("min" in ftInfo && typeof ftInfo.min !== "undefined")
                            inputElem.min = String(ftInfo.min);
                        if ("max" in ftInfo && typeof ftInfo.max !== "undefined")
                            inputElem.max = String(ftInfo.max);
                        if (typeof initialVal !== "undefined")
                            inputElem.value = String(initialVal);
                        if (type === "text" && ftInfo.valueHidden) {
                            inputElem.type = "password";
                            inputElem.autocomplete = "off";
                        }
                        if (type === "number" || type === "slider" && step)
                            inputElem.step = String(step);
                        if (type === "toggle" && typeof initialVal !== "undefined")
                            inputElem.checked = Boolean(initialVal);
                        const unitTxt = ("unit" in ftInfo && typeof ftInfo.unit === "string"
                            ? ftInfo.unit
                            : ("unit" in ftInfo && typeof ftInfo.unit === "function"
                                ? ftInfo.unit(Number(inputElem.value))
                                : ""));
                        let labelElem;
                        let lastDisplayedVal;
                        if (type === "slider") {
                            labelElem = document.createElement("label");
                            labelElem.classList.add("bytm-ftconf-label", "bytm-slider-label");
                            labelElem.textContent = `${fmtVal(initialVal, featKey)}${unitTxt}`;
                            inputElem.addEventListener("input", () => {
                                if (labelElem && lastDisplayedVal !== inputElem.value) {
                                    labelElem.textContent = `${fmtVal(inputElem.value, featKey)}${unitTxt}`;
                                    lastDisplayedVal = inputElem.value;
                                }
                            });
                        }
                        else if (type === "select") {
                            const ftOpts = typeof ftInfo.options === "function"
                                ? ftInfo.options()
                                : ftInfo.options;
                            for (const { value, label } of ftOpts) {
                                const optionElem = document.createElement("option");
                                optionElem.value = String(value);
                                optionElem.textContent = label;
                                if (value === initialVal)
                                    optionElem.selected = true;
                                inputElem.appendChild(optionElem);
                            }
                        }
                        if (type === "text") {
                            let lastValue = inputElem.value && inputElem.value.length > 0 ? inputElem.value : ftInfo.default;
                            const textInputUpdate = () => {
                                let v = String(inputElem.value).trim();
                                if (type === "text" && ftInfo.normalize)
                                    v = inputElem.value = ftInfo.normalize(String(v));
                                if (v === lastValue)
                                    return;
                                lastValue = v;
                                if (v === "")
                                    v = ftInfo.default;
                                if (typeof initialVal !== "undefined")
                                    confChanged(featKey, initialVal, v);
                            };
                            const unsub = siteEvents.on("cfgMenuClosed", () => {
                                unsub();
                                textInputUpdate();
                            });
                            inputElem.addEventListener("blur", () => textInputUpdate());
                            inputElem.addEventListener("keydown", (e) => e.key === "Tab" && textInputUpdate());
                        }
                        else {
                            inputElem.addEventListener("input", () => {
                                let v = String(inputElem.value).trim();
                                if (["number", "slider"].includes(type) || v.match(/^-?\d+$/))
                                    v = Number(v);
                                if (typeof initialVal !== "undefined")
                                    confChanged(featKey, initialVal, (type !== "toggle" ? v : inputElem.checked));
                            });
                        }
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
                                    initialValue: typeof initialVal === "object" ? initialVal : undefined,
                                    onChange: (hotkey) => confChanged(featKey, initialVal, hotkey),
                                });
                                break;
                            case "toggle":
                                wrapperElem = yield createToggleInput({
                                    initialValue: Boolean(initialVal),
                                    onChange: (checked) => confChanged(featKey, initialVal, checked),
                                    id: `ftconf-${featKey}`,
                                    labelPos: "left",
                                });
                                break;
                            case "button":
                                wrapperElem = document.createElement("button");
                                wrapperElem.classList.add("bytm-btn");
                                wrapperElem.tabIndex = 0;
                                wrapperElem.textContent = wrapperElem.ariaLabel = wrapperElem.title = hasKey(`feature_btn_${featKey}`) ? t(`feature_btn_${featKey}`) : t("trigger_btn_action");
                                onInteraction(wrapperElem, () => __awaiter(this, void 0, void 0, function* () {
                                    if (wrapperElem.disabled)
                                        return;
                                    const startTs = Date.now();
                                    const res = ftInfo.click();
                                    wrapperElem.disabled = true;
                                    wrapperElem.classList.add("bytm-busy");
                                    wrapperElem.textContent = wrapperElem.ariaLabel = wrapperElem.title = hasKey(`feature_btn_${featKey}_running`) ? t(`feature_btn_${featKey}_running`) : t("trigger_btn_action_running");
                                    if (res instanceof Promise)
                                        yield res;
                                    const finalize = () => {
                                        wrapperElem.disabled = false;
                                        wrapperElem.classList.remove("bytm-busy");
                                        wrapperElem.textContent = wrapperElem.ariaLabel = wrapperElem.title = hasKey(`feature_btn_${featKey}`) ? t(`feature_btn_${featKey}`) : t("trigger_btn_action");
                                    };
                                    // artificial timeout ftw
                                    if (Date.now() - startTs < 350)
                                        setTimeout(finalize, 350 - (Date.now() - startTs));
                                    else
                                        finalize();
                                }));
                                break;
                        }
                        ctrlElem.appendChild(wrapperElem);
                    }
                    ftConfElem.appendChild(ctrlElem);
                }
                featuresCont.appendChild(ftConfElem);
            }
        }
        //#region reset inputs on external change
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
                const unitTxt = ("unit" in ftInfo && typeof ftInfo.unit === "string"
                    ? ftInfo.unit
                    : ("unit" in ftInfo && typeof ftInfo.unit === "function"
                        ? ftInfo.unit(Number(ftElem.value))
                        : ""));
                if (ftInfo.type === "slider")
                    labelElem.textContent = `${fmtVal(Number(value), ftKey)}${unitTxt}`;
            }
            info("Rebuilt config menu");
        });
        //#region scroll indicator
        const scrollIndicator = document.createElement("img");
        scrollIndicator.id = "bytm-menu-scroll-indicator";
        scrollIndicator.src = yield getResourceUrl("icon-arrow_down");
        scrollIndicator.role = "button";
        scrollIndicator.ariaLabel = scrollIndicator.title = t("scroll_to_bottom");
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
        //#region finalize
        menuContainer.appendChild(headerElem);
        menuContainer.appendChild(featuresCont);
        const subtitleElemCont = document.createElement("div");
        subtitleElemCont.id = "bytm-menu-subtitle-cont";
        const versionEl = document.createElement("a");
        versionEl.id = "bytm-menu-version-anchor";
        versionEl.classList.add("bytm-link");
        versionEl.role = "button";
        versionEl.tabIndex = 0;
        versionEl.ariaLabel = versionEl.title = t("version_tooltip", scriptInfo.version, buildNumber);
        versionEl.textContent = `v${scriptInfo.version} (#${buildNumber})`;
        onInteraction(versionEl, (e) => __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            const dlg = yield getChangelogDialog();
            dlg.on("close", openCfgMenu);
            yield dlg.mount();
            closeCfgMenu(undefined, false);
            yield dlg.open();
        }));
        subtitleElemCont.appendChild(versionEl);
        titleElem.appendChild(subtitleElemCont);
        const modeItems = [];
        mode === "development" && modeItems.push("dev_mode");
        getFeatures().advancedMode && modeItems.push("advanced_mode");
        if (modeItems.length > 0) {
            const modeDisplayEl = document.createElement("span");
            modeDisplayEl.id = "bytm-menu-mode-display";
            modeDisplayEl.textContent = `[${t("active_mode_display", arrayWithSeparators(modeItems.map(v => t(`${v}_short`)), ", ", " & "))}]`;
            modeDisplayEl.ariaLabel = modeDisplayEl.title = tp("active_mode_tooltip", modeItems, arrayWithSeparators(modeItems.map(t), ", ", " & "));
            subtitleElemCont.appendChild(modeDisplayEl);
        }
        menuContainer.appendChild(footerCont);
        backgroundElem.appendChild(menuContainer);
        document.body.appendChild(backgroundElem);
        window.addEventListener("resize", UserUtils.debounce(checkToggleScrollIndicator, 250, "rising"));
        log("Added menu element");
        // ensure stuff is reset if menu was opened before being added
        isCfgMenuOpen = false;
        document.body.classList.remove("bytm-disable-scroll");
        (_d = document.querySelector(getDomain() === "ytm" ? "ytmusic-app" : "ytd-app")) === null || _d === void 0 ? void 0 : _d.removeAttribute("inert");
        backgroundElem.style.visibility = "hidden";
        backgroundElem.style.display = "none";
        siteEvents.on("recreateCfgMenu", () => __awaiter(this, void 0, void 0, function* () {
            const bgElem = document.querySelector("#bytm-cfg-menu-bg");
            if (!bgElem)
                return;
            closeCfgMenu();
            bgElem.remove();
            isCfgMenuAdded = false;
            yield addCfgMenu();
            yield openCfgMenu();
        }));
    });
}
//#region open & close
/** Closes the config menu if it is open. If a bubbling event is passed, its propagation will be prevented. */
function closeCfgMenu(evt, enableScroll = true) {
    var _a, _b, _c;
    if (!isCfgMenuOpen)
        return;
    isCfgMenuOpen = false;
    (evt === null || evt === void 0 ? void 0 : evt.bubbles) && evt.stopPropagation();
    if (enableScroll) {
        document.body.classList.remove("bytm-disable-scroll");
        (_a = document.querySelector(getDomain() === "ytm" ? "ytmusic-app" : "ytd-app")) === null || _a === void 0 ? void 0 : _a.removeAttribute("inert");
    }
    const menuBg = document.querySelector("#bytm-cfg-menu-bg");
    siteEvents.emit("cfgMenuClosed");
    if (!menuBg)
        return;
    (_b = menuBg.querySelectorAll(".bytm-ftconf-adv-copy-hint")) === null || _b === void 0 ? void 0 : _b.forEach((el) => el.style.display = "none");
    clearTimeout(hiddenCopiedTxtTimeout);
    menuBg.style.visibility = "hidden";
    menuBg.style.display = "none";
    openDialogs.splice(openDialogs.indexOf("cfg-menu"), 1);
    setCurrentDialogId((_c = openDialogs === null || openDialogs === void 0 ? void 0 : openDialogs[0]) !== null && _c !== void 0 ? _c : null);
}
/** Opens the config menu if it is closed */
function openCfgMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        if (!isCfgMenuAdded)
            yield addCfgMenu();
        if (isCfgMenuOpen)
            return;
        isCfgMenuOpen = true;
        document.body.classList.add("bytm-disable-scroll");
        (_a = document.querySelector(getDomain() === "ytm" ? "ytmusic-app" : "ytd-app")) === null || _a === void 0 ? void 0 : _a.setAttribute("inert", "true");
        const menuBg = document.querySelector("#bytm-cfg-menu-bg");
        if (!menuBg)
            return;
        menuBg.style.visibility = "visible";
        menuBg.style.display = "block";
        setCurrentDialogId("cfg-menu");
        openDialogs.unshift("cfg-menu");
        checkToggleScrollIndicator();
    });
}
//#region chk scroll indicator
/** Checks if the features container is scrollable and toggles the scroll indicator accordingly */
function checkToggleScrollIndicator() {
    const featuresCont = document.querySelector("#bytm-menu-opts");
    const scrollIndicator = document.querySelector("#bytm-menu-scroll-indicator");
    // disable scroll indicator if container doesn't scroll
    if (featuresCont && scrollIndicator) {
        const verticalScroll = UserUtils.isScrollable(featuresCont).vertical;
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
}var de_DE = {
	name: "Deutsch (Deutschland)",
	nameEnglish: "German",
	emoji: "🇩🇪",
	userscriptDesc: "Konfigurierbare Layout- und Benutzererfahrungs-Verbesserungen für YouTube Music™ und YouTube™",
	authors: [
		"Sv443"
	]
};
var en_US = {
	name: "English (United States)",
	nameEnglish: "English (US)",
	emoji: "🇺🇸",
	userscriptDesc: "Configurable layout and user experience improvements for YouTube Music™ and YouTube™",
	authors: [
		"Sv443"
	]
};
var en_UK = {
	name: "English (United Kingdom)",
	nameEnglish: "English (UK)",
	emoji: "🇬🇧",
	userscriptDesc: "Configurable layout and user experience improvements for YouTube Music™ and YouTube™",
	authors: [
		"Sv443"
	]
};
var es_ES = {
	name: "Español (España)",
	nameEnglish: "Spanish",
	emoji: "🇪🇸",
	userscriptDesc: "Mejoras de diseño y experiencia de usuario configurables para YouTube Music™ y YouTube™",
	authors: [
		"Sv443"
	]
};
var fr_FR = {
	name: "Français (France)",
	nameEnglish: "French",
	emoji: "🇫🇷",
	userscriptDesc: "Améliorations de la mise en page et de l'expérience utilisateur configurables pour YouTube Music™ et YouTube™",
	authors: [
		"Sv443"
	]
};
var hi_IN = {
	name: "हिंदी (भारत)",
	nameEnglish: "Hindi",
	emoji: "🇮🇳",
	userscriptDesc: "YouTube Music™ और YouTube™ के लिए कॉन्फ़िगर करने योग्य लेआउट और उपयोगकर्ता अनुभव में सुधार",
	authors: [
		"Sv443"
	]
};
var ja_JA = {
	name: "日本語 (日本)",
	nameEnglish: "Japanese",
	emoji: "🇯🇵",
	userscriptDesc: "YouTube Music™ と YouTube™ の構成可能なレイアウトとユーザー エクスペリエンスの向上",
	authors: [
		"Sv443"
	]
};
var pt_BR = {
	name: "Português (Brasil)",
	nameEnglish: "Portuguese",
	emoji: "🇵🇹",
	userscriptDesc: "Melhorias configuráveis no layout e na experiência do usuário para o YouTube Music™ e o YouTube™",
	authors: [
		"Sv443"
	]
};
var zh_CN = {
	name: "中文（简化，中国）",
	nameEnglish: "Chinese (simpl.)",
	emoji: "🇨🇳",
	userscriptDesc: "YouTube Music™ 和 YouTube™ 的可配置布局和用户体验改进",
	authors: [
		"Sv443"
	]
};
var langMapping = {
	de_DE: de_DE,
	en_US: en_US,
	en_UK: en_UK,
	es_ES: es_ES,
	fr_FR: fr_FR,
	hi_IN: hi_IN,
	ja_JA: ja_JA,
	pt_BR: pt_BR,
	zh_CN: zh_CN
};let welcomeDialog = null;
/** Creates and/or returns the import dialog */
function getWelcomeDialog() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!welcomeDialog) {
            welcomeDialog = new BytmDialog({
                id: "welcome",
                width: 700,
                height: 500,
                closeBtnEnabled: true,
                closeOnBgClick: true,
                closeOnEscPress: true,
                destroyOnClose: true,
                renderHeader,
                renderBody,
                renderFooter,
            });
            welcomeDialog.on("render", retranslateWelcomeMenu);
        }
        return welcomeDialog;
    });
}
function renderHeader() {
    return __awaiter(this, void 0, void 0, function* () {
        const titleWrapperElem = document.createElement("div");
        titleWrapperElem.id = "bytm-welcome-menu-title-wrapper";
        const titleLogoElem = document.createElement("img");
        titleLogoElem.id = "bytm-welcome-menu-title-logo";
        titleLogoElem.classList.add("bytm-no-select");
        titleLogoElem.src = yield getResourceUrl(mode === "development" ? "img-logo_dev" : "img-logo");
        const titleElem = document.createElement("h2");
        titleElem.id = "bytm-welcome-menu-title";
        titleElem.classList.add("bytm-dialog-title");
        titleElem.role = "heading";
        titleElem.ariaLevel = "1";
        titleWrapperElem.appendChild(titleLogoElem);
        titleWrapperElem.appendChild(titleElem);
        return titleWrapperElem;
    });
}
function renderBody() {
    return __awaiter(this, void 0, void 0, function* () {
        const contentWrapper = document.createElement("div");
        contentWrapper.id = "bytm-welcome-menu-content-wrapper";
        // locale switcher
        const localeCont = document.createElement("div");
        localeCont.id = "bytm-welcome-menu-locale-cont";
        const localeImg = document.createElement("img");
        localeImg.id = "bytm-welcome-menu-locale-img";
        localeImg.classList.add("bytm-no-select");
        localeImg.src = yield getResourceUrl("icon-globe");
        const localeSelectElem = document.createElement("select");
        localeSelectElem.id = "bytm-welcome-menu-locale-select";
        for (const [locale, { name }] of Object.entries(langMapping)) {
            const localeOptionElem = document.createElement("option");
            localeOptionElem.value = locale;
            localeOptionElem.textContent = name;
            localeSelectElem.appendChild(localeOptionElem);
        }
        localeSelectElem.value = getFeatures().locale;
        localeSelectElem.addEventListener("change", () => __awaiter(this, void 0, void 0, function* () {
            const selectedLocale = localeSelectElem.value;
            const feats = Object.assign({}, getFeatures());
            feats.locale = selectedLocale;
            setFeatures(feats);
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
        return contentWrapper;
    });
}
/** Retranslates all elements inside the welcome menu */
function retranslateWelcomeMenu() {
    const getLink = (href) => {
        return [`<a href="${href}" class="bytm-link" target="_blank" rel="noopener noreferrer">`, "</a>"];
    };
    const changes = {
        "#bytm-welcome-menu-title": (e) => e.textContent = t("welcome_menu_title", scriptInfo.name),
        "#bytm-welcome-menu-title-close": (e) => e.ariaLabel = e.title = t("close_menu_tooltip"),
        "#bytm-welcome-menu-open-cfg": (e) => {
            e.textContent = t("config_menu");
            e.ariaLabel = e.title = t("open_config_menu_tooltip");
        },
        "#bytm-welcome-menu-open-changelog": (e) => {
            e.textContent = t("open_changelog");
            e.ariaLabel = e.title = t("open_changelog_tooltip");
        },
        "#bytm-welcome-menu-footer-close": (e) => {
            e.textContent = t("close");
            e.ariaLabel = e.title = t("close_menu_tooltip");
        },
        "#bytm-welcome-text-line1": (e) => e.innerHTML = t("welcome_text_line_1"),
        "#bytm-welcome-text-line2": (e) => e.innerHTML = t("welcome_text_line_2", scriptInfo.name),
        "#bytm-welcome-text-line3": (e) => e.innerHTML = t("welcome_text_line_3", scriptInfo.name, ...getLink(`${pkg.hosts.greasyfork}/feedback`), ...getLink(pkg.hosts.openuserjs)),
        "#bytm-welcome-text-line4": (e) => e.innerHTML = t("welcome_text_line_4", ...getLink(pkg.funding.url)),
        "#bytm-welcome-text-line5": (e) => e.innerHTML = t("welcome_text_line_5", ...getLink(pkg.bugs.url)),
    };
    for (const [selector, fn] of Object.entries(changes)) {
        const el = document.querySelector(selector);
        if (!el) {
            warn(`Couldn't find element in welcome menu with selector '${selector}'`);
            continue;
        }
        fn(el);
    }
}
function renderFooter() {
    return __awaiter(this, void 0, void 0, function* () {
        const footerCont = document.createElement("div");
        footerCont.id = "bytm-welcome-menu-footer-cont";
        const openCfgElem = document.createElement("button");
        openCfgElem.id = "bytm-welcome-menu-open-cfg";
        openCfgElem.classList.add("bytm-btn");
        openCfgElem.addEventListener("click", () => {
            welcomeDialog === null || welcomeDialog === void 0 ? void 0 : welcomeDialog.close();
            openCfgMenu();
        });
        const openChangelogElem = document.createElement("button");
        openChangelogElem.id = "bytm-welcome-menu-open-changelog";
        openChangelogElem.classList.add("bytm-btn");
        openChangelogElem.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            const dlg = yield getChangelogDialog();
            yield dlg.mount();
            welcomeDialog === null || welcomeDialog === void 0 ? void 0 : welcomeDialog.close();
            yield dlg.open();
        }));
        const closeBtnElem = document.createElement("button");
        closeBtnElem.id = "bytm-welcome-menu-footer-close";
        closeBtnElem.classList.add("bytm-btn");
        closeBtnElem.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            welcomeDialog === null || welcomeDialog === void 0 ? void 0 : welcomeDialog.close();
        }));
        const leftButtonsCont = document.createElement("div");
        leftButtonsCont.id = "bytm-menu-footer-left-buttons-cont";
        leftButtonsCont.appendChild(openCfgElem);
        leftButtonsCont.appendChild(openChangelogElem);
        footerCont.appendChild(leftButtonsCont);
        footerCont.appendChild(closeBtnElem);
        return footerCont;
    });
}const releaseURL = "https://github.com/Sv443/BetterYTM/releases/latest";
/** Initializes the version check feature */
function initVersionCheck() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (getFeatures().versionCheck === false)
                return info("Version check is disabled");
            const lastCheck = yield GM.getValue("bytm-version-check", 0);
            if (Date.now() - lastCheck < 1000 * 60 * 60 * 24)
                return;
            yield doVersionCheck(false);
        }
        catch (err) {
            error("Version check failed:", err);
        }
    });
}
/**
 * Checks for a new version of the script and shows a dialog.
 * If {@linkcode notifyNoUpdatesFound} is set to true, a dialog is also shown if no updates were found.
 */
function doVersionCheck() {
    return __awaiter(this, arguments, void 0, function* (notifyNoUpdatesFound = false) {
        var _a;
        yield GM.setValue("bytm-version-check", Date.now());
        const res = yield sendRequest({
            method: "GET",
            url: releaseURL,
        });
        // TODO: small dialog for "no update found" message?
        const noUpdateFound = () => notifyNoUpdatesFound ? alert(t("no_updates_found")) : undefined;
        const latestTag = (_a = res.finalUrl.split("/").pop()) === null || _a === void 0 ? void 0 : _a.replace(/[a-zA-Z]/g, "");
        if (!latestTag)
            return noUpdateFound();
        info("Version check - current version:", scriptInfo.version, "- latest version:", latestTag, LogLevel.Info);
        if (compareVersions.compare(scriptInfo.version, latestTag, "<")) {
            const dialog = yield getVersionNotifDialog({ latestTag });
            yield dialog.open();
            return;
        }
        return noUpdateFound();
    });
}//#region cfg menu buttons
let logoExchanged = false, improveLogoCalled = false;
/** Adds a watermark beneath the logo */
function addWatermark() {
    return __awaiter(this, void 0, void 0, function* () {
        const watermark = document.createElement("a");
        watermark.role = "button";
        watermark.id = "bytm-watermark";
        watermark.classList.add("style-scope", "ytmusic-nav-bar", "bytm-no-select");
        watermark.textContent = scriptInfo.name;
        watermark.ariaLabel = watermark.title = t("open_menu_tooltip", scriptInfo.name);
        watermark.tabIndex = 0;
        improveLogo();
        const watermarkOpenMenu = (e) => {
            e.stopPropagation();
            if ((!e.shiftKey && !e.ctrlKey) || logoExchanged)
                openCfgMenu();
            if (!logoExchanged && (e.shiftKey || e.ctrlKey))
                exchangeLogo();
        };
        onInteraction(watermark, watermarkOpenMenu);
        addSelectorListener("navBar", "ytmusic-nav-bar #left-content", {
            listener: (logoElem) => logoElem.insertAdjacentElement("afterend", watermark),
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
            const res = yield UserUtils.fetchAdvanced("https://music.youtube.com/img/on_platform_logo_dark.svg");
            const svg = yield res.text();
            addSelectorListener("navBar", "ytmusic-logo a", {
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
    addSelectorListener("navBar", ".bytm-mod-logo", {
        listener: (logoElem) => __awaiter(this, void 0, void 0, function* () {
            if (logoElem.classList.contains("bytm-logo-exchanged"))
                return;
            logoExchanged = true;
            logoElem.classList.add("bytm-logo-exchanged");
            const iconUrl = yield getResourceUrl(mode === "development" ? "img-logo_dev" : "img-logo");
            const newLogo = document.createElement("img");
            newLogo.classList.add("bytm-mod-logo-img");
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
/** Called whenever the avatar popover menu exists on YTM to add a BYTM config menu button to the user menu popover */
function addConfigMenuOptionYTM(container) {
    return __awaiter(this, void 0, void 0, function* () {
        const cfgOptElem = document.createElement("div");
        cfgOptElem.classList.add("bytm-cfg-menu-option");
        const cfgOptItemElem = document.createElement("div");
        cfgOptItemElem.classList.add("bytm-cfg-menu-option-item");
        cfgOptItemElem.role = "button";
        cfgOptItemElem.tabIndex = 0;
        cfgOptItemElem.ariaLabel = cfgOptItemElem.title = t("open_menu_tooltip", scriptInfo.name);
        onInteraction(cfgOptItemElem, (e) => __awaiter(this, void 0, void 0, function* () {
            const settingsBtnElem = document.querySelector("ytmusic-nav-bar ytmusic-settings-button tp-yt-paper-icon-button");
            settingsBtnElem === null || settingsBtnElem === void 0 ? void 0 : settingsBtnElem.click();
            yield UserUtils.pauseFor(20);
            if ((!e.shiftKey && !e.ctrlKey) || logoExchanged)
                openCfgMenu();
            if (!logoExchanged && (e.shiftKey || e.ctrlKey))
                exchangeLogo();
        }));
        const cfgOptIconElem = document.createElement("img");
        cfgOptIconElem.classList.add("bytm-cfg-menu-option-icon");
        cfgOptIconElem.src = yield getResourceUrl(mode === "development" ? "img-logo_dev" : "img-logo");
        const cfgOptTextElem = document.createElement("div");
        cfgOptTextElem.classList.add("bytm-cfg-menu-option-text");
        cfgOptTextElem.textContent = t("config_menu_option", scriptInfo.name);
        cfgOptItemElem.appendChild(cfgOptIconElem);
        cfgOptItemElem.appendChild(cfgOptTextElem);
        cfgOptElem.appendChild(cfgOptItemElem);
        container.appendChild(cfgOptElem);
        improveLogo();
        log("Added BYTM-Configuration button to menu popover");
    });
}
/** Called whenever the titlebar (masthead) exists on YT to add a BYTM config menu button */
function addConfigMenuOptionYT(container) {
    return __awaiter(this, void 0, void 0, function* () {
        const cfgOptWrapperElem = document.createElement("div");
        cfgOptWrapperElem.classList.add("bytm-yt-cfg-menu-option", "darkreader-ignore");
        cfgOptWrapperElem.role = "button";
        cfgOptWrapperElem.tabIndex = 0;
        cfgOptWrapperElem.ariaLabel = cfgOptWrapperElem.title = t("open_menu_tooltip", scriptInfo.name);
        const cfgOptElem = document.createElement("div");
        cfgOptElem.classList.add("bytm-yt-cfg-menu-option-inner");
        const cfgOptImgElem = document.createElement("img");
        cfgOptImgElem.classList.add("bytm-yt-cfg-menu-option-icon");
        cfgOptImgElem.src = yield getResourceUrl(mode === "development" ? "img-logo_dev" : "img-logo");
        const cfgOptItemElem = document.createElement("div");
        cfgOptItemElem.classList.add("bytm-yt-cfg-menu-option-item");
        cfgOptItemElem.textContent = scriptInfo.name;
        cfgOptElem.appendChild(cfgOptImgElem);
        cfgOptElem.appendChild(cfgOptItemElem);
        cfgOptWrapperElem.appendChild(cfgOptElem);
        onInteraction(cfgOptWrapperElem, openCfgMenu);
        const firstChild = container === null || container === void 0 ? void 0 : container.firstElementChild;
        if (firstChild)
            container.insertBefore(cfgOptWrapperElem, firstChild);
        else
            return error("Couldn't add config menu option to YT titlebar - couldn't find container element");
    });
}
//#region rem upgrade tab
/** Removes the "Upgrade" / YT Music Premium tab from the sidebar */
function removeUpgradeTab() {
    return __awaiter(this, void 0, void 0, function* () {
        addSelectorListener("sideBar", "#contentContainer #guide-content #items ytmusic-guide-entry-renderer:nth-of-type(4)", {
            listener: (tabElemLarge) => {
                tabElemLarge.remove();
                log("Removed large upgrade tab");
            },
        });
        addSelectorListener("sideBarMini", "ytmusic-guide-renderer #sections ytmusic-guide-section-renderer[is-primary] #items ytmusic-guide-entry-renderer:nth-of-type(4)", {
            listener: (tabElemSmall) => {
                tabElemSmall.remove();
                log("Removed small upgrade tab");
            },
        });
    });
}
//#region anchor improvements
/** Adds anchors around elements and tweaks existing ones so songs are easier to open in a new tab */
function addAnchorImprovements() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const css = yield fetchCss("css-anchor_improvements");
            if (css)
                addStyle(css, "anchor-improvements");
        }
        catch (err) {
            error("Couldn't add anchor improvements CSS due to an error:", err);
        }
        //#region carousel shelves
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
                    UserUtils.addParent(thumbnailElem, anchorElem);
                }
            };
            // home page
            addSelectorListener("body", "#contents.ytmusic-section-list-renderer ytmusic-carousel-shelf-renderer ytmusic-responsive-list-item-renderer", {
                continuous: true,
                all: true,
                listener: addListItemAnchors,
            });
            // related tab in /watch
            addSelectorListener("body", "ytmusic-tab-renderer[page-type=\"MUSIC_PAGE_TYPE_TRACK_RELATED\"] ytmusic-responsive-list-item-renderer", {
                continuous: true,
                all: true,
                listener: addListItemAnchors,
            });
            // playlists
            addSelectorListener("body", "#contents.ytmusic-section-list-renderer ytmusic-playlist-shelf-renderer ytmusic-responsive-list-item-renderer", {
                continuous: true,
                all: true,
                listener: addListItemAnchors,
            });
            // generic shelves
            addSelectorListener("body", "#contents.ytmusic-section-list-renderer ytmusic-shelf-renderer ytmusic-responsive-list-item-renderer", {
                continuous: true,
                all: true,
                listener: addListItemAnchors,
            });
        }
        catch (err) {
            error("Couldn't improve carousel shelf anchors due to an error:", err);
        }
        //#region sidebar
        try {
            const addSidebarAnchors = (sidebarCont) => {
                const items = sidebarCont.parentNode.querySelectorAll("ytmusic-guide-entry-renderer tp-yt-paper-item");
                improveSidebarAnchors(items);
                return items.length;
            };
            addSelectorListener("sideBar", "#contentContainer #guide-content #items ytmusic-guide-entry-renderer", {
                listener: (sidebarCont) => {
                    const itemsAmt = addSidebarAnchors(sidebarCont);
                    log(`Added anchors around ${itemsAmt} sidebar ${UserUtils.autoPlural("item", itemsAmt)}`);
                },
            });
            addSelectorListener("sideBarMini", "ytmusic-guide-renderer ytmusic-guide-section-renderer #items ytmusic-guide-entry-renderer", {
                listener: (miniSidebarCont) => {
                    const itemsAmt = addSidebarAnchors(miniSidebarCont);
                    log(`Added anchors around ${itemsAmt} mini sidebar ${UserUtils.autoPlural("item", itemsAmt)}`);
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
        anchorElem.ariaLabel = anchorElem.title = t("middle_click_open_tab");
        anchorElem.addEventListener("click", (e) => {
            e.preventDefault();
        });
        UserUtils.addParent(item, anchorElem);
    });
}
//#region rem tracking param
/** Removes the ?si tracking parameter from share URLs */
function initRemShareTrackParam() {
    return __awaiter(this, void 0, void 0, function* () {
        const removeSiParam = (inputElem) => {
            try {
                if (!inputElem.value.match(/(&|\?)si=/i))
                    return;
                const url = new URL(inputElem.value);
                url.searchParams.delete("si");
                inputElem.value = String(url);
                log(`Removed tracking parameter from share link -> ${url}`);
            }
            catch (err) {
                warn("Couldn't remove tracking parameter from share link due to error:", err);
            }
        };
        const [sharePanelSel, inputSel] = (() => {
            switch (getDomain()) {
                case "ytm": return ["tp-yt-paper-dialog ytmusic-unified-share-panel-renderer", "input#share-url"];
                case "yt": return ["ytd-unified-share-panel-renderer", "input#share-url"];
            }
        })();
        addSelectorListener("body", sharePanelSel, {
            listener: (sharePanelEl) => {
                const obs = new MutationObserver(() => {
                    const inputElem = sharePanelEl.querySelector(inputSel);
                    inputElem && removeSiParam(inputElem);
                });
                obs.observe(sharePanelEl, {
                    childList: true,
                    subtree: true,
                    attributeFilter: ["aria-hidden", "aria-checked", "checked"],
                });
            },
        });
    });
}
//#region fix spacing
/** Applies global CSS to fix various spacings */
function fixSpacing() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(yield addStyleFromResource("css-fix_spacing")))
            error("Couldn't fix spacing");
    });
}
//#region above queue btns
function initAboveQueueBtns() {
    return __awaiter(this, void 0, void 0, function* () {
        const { scrollToActiveSongBtn, clearQueueBtn } = getFeatures();
        const contBtns = [
            {
                condition: scrollToActiveSongBtn,
                id: "scroll-to-active",
                resourceName: "icon-skip_to",
                titleKey: "scroll_to_playing",
                interaction() {
                    return __awaiter(this, void 0, void 0, function* () {
                        const activeItem = document.querySelector("#side-panel .ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"loading\"], #side-panel .ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"playing\"], #side-panel .ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"paused\"]");
                        if (!activeItem)
                            return;
                        activeItem.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                            inline: "center",
                        });
                    });
                },
            },
            {
                condition: clearQueueBtn,
                id: "clear-queue",
                resourceName: "icon-clear_list",
                titleKey: "clear_list",
                interaction() {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            // TODO: better confirmation dialog?
                            if (!confirm(t("clear_list_confirm")))
                                return;
                            const url = new URL(location.href);
                            url.searchParams.delete("list");
                            url.searchParams.set("t", String(yield getVideoTime(0)));
                            location.assign(url);
                        }
                        catch (err) {
                            error("Couldn't clear queue due to an error:", err);
                        }
                    });
                },
            },
        ];
        if (!contBtns.some(b => Boolean(b.condition)))
            return;
        addSelectorListener("sidePanel", "ytmusic-tab-renderer ytmusic-queue-header-renderer #buttons", {
            listener(rightBtnsEl) {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        const aboveQueueBtnCont = document.createElement("div");
                        aboveQueueBtnCont.id = "bytm-above-queue-btn-cont";
                        UserUtils.addParent(rightBtnsEl, aboveQueueBtnCont);
                        const headerEl = rightBtnsEl.closest("ytmusic-queue-header-renderer");
                        if (!headerEl)
                            return error("Couldn't find queue header element while adding above queue buttons");
                        siteEvents.on("fullscreenToggled", (isFullscreen) => {
                            headerEl.classList[isFullscreen ? "add" : "remove"]("hidden");
                        });
                        if (!(yield addStyleFromResource("css-above_queue_btns")))
                            return error("Couldn't add CSS for above queue buttons");
                        const wrapperElem = document.createElement("div");
                        wrapperElem.id = "bytm-above-queue-btn-wrapper";
                        for (const item of contBtns) {
                            if (Boolean(item.condition) === false)
                                continue;
                            const btnElem = yield createCircularBtn({
                                resourceName: item.resourceName,
                                onClick: item.interaction,
                                title: t(item.titleKey),
                            });
                            btnElem.id = `bytm-${item.id}-btn`;
                            btnElem.classList.add("ytmusic-player-bar", "bytm-generic-btn", "bytm-above-queue-btn");
                            wrapperElem.appendChild(btnElem);
                        }
                        rightBtnsEl.insertAdjacentElement("beforebegin", wrapperElem);
                    }
                    catch (err) {
                        error("Couldn't add above queue buttons due to an error:", err);
                    }
                });
            },
        });
    });
}
//#region thumbnail overlay
/** To be changed when the toggle button is pressed - used to invert the state of "showOverlay" */
let invertOverlay = false;
function initThumbnailOverlay() {
    return __awaiter(this, void 0, void 0, function* () {
        const toggleBtnShown = getFeatures().thumbnailOverlayToggleBtnShown;
        if (getFeatures().thumbnailOverlayBehavior === "never" && !toggleBtnShown)
            return;
        // so the script init doesn't keep waiting until a /watch page is loaded
        waitVideoElementReady().then(() => {
            const playerSelector = "ytmusic-player#player";
            const playerEl = document.querySelector(playerSelector);
            if (!playerEl)
                return error("Couldn't find video player element while adding thumbnail overlay");
            /** Checks and updates the overlay and toggle button states based on the current song type (yt video or ytm song) */
            const updateOverlayVisibility = () => __awaiter(this, void 0, void 0, function* () {
                if (!domLoaded)
                    return;
                const behavior = getFeatures().thumbnailOverlayBehavior;
                let showOverlay = behavior === "always";
                const isVideo = currentMediaType() === "video";
                if (behavior === "videosOnly" && isVideo)
                    showOverlay = true;
                else if (behavior === "songsOnly" && !isVideo)
                    showOverlay = true;
                showOverlay = invertOverlay ? !showOverlay : showOverlay;
                const overlayElem = document.querySelector("#bytm-thumbnail-overlay");
                const thumbElem = document.querySelector("#bytm-thumbnail-overlay-img");
                const indicatorElem = document.querySelector("#bytm-thumbnail-overlay-indicator");
                if (overlayElem)
                    overlayElem.style.display = showOverlay ? "block" : "none";
                if (thumbElem)
                    thumbElem.ariaHidden = String(!showOverlay);
                if (indicatorElem) {
                    indicatorElem.style.display = showOverlay ? "block" : "none";
                    indicatorElem.ariaHidden = String(!showOverlay);
                }
                if (getFeatures().thumbnailOverlayToggleBtnShown) {
                    addSelectorListener("playerBarMiddleButtons", "#bytm-thumbnail-overlay-toggle", {
                        listener(toggleBtnElem) {
                            return __awaiter(this, void 0, void 0, function* () {
                                const toggleBtnImgElem = toggleBtnElem.querySelector("img");
                                if (toggleBtnImgElem)
                                    toggleBtnImgElem.src = yield getResourceUrl(`icon-image${showOverlay ? "_filled" : ""}`);
                                if (toggleBtnElem)
                                    toggleBtnElem.ariaLabel = toggleBtnElem.title = t(`thumbnail_overlay_toggle_btn_tooltip${showOverlay ? "_hide" : "_show"}`);
                            });
                        },
                    });
                }
            });
            const applyThumbUrl = (watchId) => __awaiter(this, void 0, void 0, function* () {
                const thumbUrl = yield getBestThumbnailUrl(watchId);
                if (thumbUrl) {
                    const toggleBtnElem = document.querySelector("#bytm-thumbnail-overlay-toggle");
                    const thumbImgElem = document.querySelector("#bytm-thumbnail-overlay-img");
                    if (toggleBtnElem)
                        toggleBtnElem.href = thumbUrl;
                    if (thumbImgElem)
                        thumbImgElem.src = thumbUrl;
                }
                else
                    error("Couldn't get thumbnail URL for watch ID", watchId);
            });
            const unsubWatchIdChanged = siteEvents.on("watchIdChanged", (watchId) => {
                unsubWatchIdChanged();
                addSelectorListener("body", "#bytm-thumbnail-overlay", {
                    listener: () => {
                        applyThumbUrl(watchId);
                        updateOverlayVisibility();
                    },
                });
            });
            const createElements = () => __awaiter(this, void 0, void 0, function* () {
                // overlay
                const overlayElem = document.createElement("div");
                overlayElem.id = "bytm-thumbnail-overlay";
                overlayElem.title = ""; // prevent child titles from propagating
                overlayElem.classList.add("bytm-no-select");
                overlayElem.style.display = "none";
                let indicatorElem;
                if (getFeatures().thumbnailOverlayShowIndicator) {
                    indicatorElem = document.createElement("img");
                    indicatorElem.id = "bytm-thumbnail-overlay-indicator";
                    indicatorElem.src = yield getResourceUrl("icon-image");
                    indicatorElem.role = "presentation";
                    indicatorElem.title = indicatorElem.ariaLabel = t("thumbnail_overlay_indicator_tooltip");
                    indicatorElem.ariaHidden = "true";
                    indicatorElem.style.display = "none";
                    indicatorElem.style.opacity = String(getFeatures().thumbnailOverlayIndicatorOpacity / 100);
                }
                const thumbImgElem = document.createElement("img");
                thumbImgElem.id = "bytm-thumbnail-overlay-img";
                thumbImgElem.role = "presentation";
                thumbImgElem.ariaHidden = "true";
                thumbImgElem.style.objectFit = getFeatures().thumbnailOverlayImageFit;
                overlayElem.appendChild(thumbImgElem);
                playerEl.appendChild(overlayElem);
                indicatorElem && playerEl.appendChild(indicatorElem);
                siteEvents.on("watchIdChanged", (watchId) => __awaiter(this, void 0, void 0, function* () {
                    invertOverlay = false;
                    applyThumbUrl(watchId);
                    updateOverlayVisibility();
                }));
                const params = new URL(location.href).searchParams;
                if (params.has("v")) {
                    applyThumbUrl(params.get("v"));
                    updateOverlayVisibility();
                }
                // toggle button
                if (toggleBtnShown) {
                    const toggleBtnElem = document.createElement("a");
                    toggleBtnElem.id = "bytm-thumbnail-overlay-toggle";
                    toggleBtnElem.role = "button";
                    toggleBtnElem.tabIndex = 0;
                    toggleBtnElem.classList.add("ytmusic-player-bar", "bytm-generic-btn", "bytm-no-select");
                    onInteraction(toggleBtnElem, (e) => {
                        if (e.shiftKey)
                            return openInTab(toggleBtnElem.href, false);
                        invertOverlay = !invertOverlay;
                        updateOverlayVisibility();
                    });
                    const imgElem = document.createElement("img");
                    imgElem.classList.add("bytm-generic-btn-img");
                    toggleBtnElem.appendChild(imgElem);
                    addSelectorListener("playerBarMiddleButtons", "ytmusic-like-button-renderer#like-button-renderer", {
                        listener: (likeContainer) => likeContainer.insertAdjacentElement("afterend", toggleBtnElem),
                    });
                }
                log("Added thumbnail overlay");
            });
            addSelectorListener("mainPanel", playerSelector, {
                listener(playerEl) {
                    if (playerEl.getAttribute("player-ui-state") === "INACTIVE") {
                        const obs = new MutationObserver(() => {
                            if (playerEl.getAttribute("player-ui-state") === "INACTIVE")
                                return;
                            createElements();
                            obs.disconnect();
                        });
                        obs.observe(playerEl, {
                            attributes: true,
                            attributeFilter: ["player-ui-state"],
                        });
                    }
                    else
                        createElements();
                },
            });
        });
    });
}
//#region hide cursor on idle
function initHideCursorOnIdle() {
    return __awaiter(this, void 0, void 0, function* () {
        addSelectorListener("mainPanel", "ytmusic-player#player", {
            listener(vidContainer) {
                const overlaySelector = "ytmusic-player #song-media-window";
                const overlayElem = document.querySelector(overlaySelector);
                if (!overlayElem)
                    return warn("Couldn't find overlay element while initializing cursor hiding");
                /** Timer after which the cursor is hidden */
                let cursorHideTimer;
                /** Timer for the opacity transition while switching to the hidden state */
                let hideTransTimer;
                const hide = () => {
                    if (!getFeatures().hideCursorOnIdle)
                        return;
                    if (vidContainer.classList.contains("bytm-cursor-hidden"))
                        return;
                    overlayElem.style.opacity = ".000001 !important";
                    hideTransTimer = setTimeout(() => {
                        overlayElem.style.display = "none";
                        vidContainer.style.cursor = "none";
                        vidContainer.classList.add("bytm-cursor-hidden");
                        hideTransTimer = undefined;
                    }, 200);
                };
                const show = () => {
                    hideTransTimer && clearTimeout(hideTransTimer);
                    if (!vidContainer.classList.contains("bytm-cursor-hidden"))
                        return;
                    vidContainer.classList.remove("bytm-cursor-hidden");
                    vidContainer.style.cursor = "initial";
                    overlayElem.style.display = "initial";
                    overlayElem.style.opacity = "1 !important";
                };
                const cursorHideTimerCb = () => cursorHideTimer = setTimeout(hide, getFeatures().hideCursorOnIdleDelay * 1000);
                const onMove = () => {
                    cursorHideTimer && clearTimeout(cursorHideTimer);
                    show();
                    cursorHideTimerCb();
                };
                vidContainer.addEventListener("mouseenter", onMove);
                vidContainer.addEventListener("mousemove", UserUtils.debounce(onMove, 200, "rising"));
                vidContainer.addEventListener("mouseleave", () => {
                    cursorHideTimer && clearTimeout(cursorHideTimer);
                    hideTransTimer && clearTimeout(hideTransTimer);
                    hide();
                });
                vidContainer.addEventListener("click", () => {
                    show();
                    cursorHideTimerCb();
                    setTimeout(hide, 3000);
                });
                log("Initialized cursor hiding on idle");
            },
        });
    });
}
//#region fix HDR
/** Prevents visual issues when using HDR */
function fixHdrIssues() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(yield addStyleFromResource("css-fix_hdr")))
            error("Couldn't load stylesheet to fix HDR issues");
        else
            log("Fixed HDR issues");
    });
}//#region beforeunload popup
let beforeUnloadEnabled = true;
/** Disables the popup before leaving the site */
function disableBeforeUnload() {
    beforeUnloadEnabled = false;
    info("Disabled popup before leaving the site");
}
/** Adds a spy function into `window.__proto__.addEventListener` to selectively discard `beforeunload` event listeners before they can be called by the site */
function initBeforeUnloadHook() {
    return __awaiter(this, void 0, void 0, function* () {
        UserUtils.interceptWindowEvent("beforeunload", () => !beforeUnloadEnabled);
    });
}
//#region auto close toasts
/** Closes toasts after a set amount of time */
function initAutoCloseToasts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const animTimeout = 300;
            addSelectorListener("popupContainer", "tp-yt-paper-toast#toast", {
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
                        const closeTimeout = Math.max(getFeatures().closeToastsTimeout * 1000 + animTimeout, animTimeout);
                        yield UserUtils.pauseFor(closeTimeout);
                        toastElem.classList.remove("paper-toast-open");
                        log(`Automatically closed toast '${(_a = toastElem.querySelector("#text-container yt-formatted-string")) === null || _a === void 0 ? void 0 : _a.textContent}' after ${getFeatures().closeToastsTimeout * 1000}ms`);
                        // wait for the transition to finish
                        yield UserUtils.pauseFor(animTimeout);
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
let remSongsCache = [];
/**
 * Remembers the time of the last played song and resumes playback from that time
 * CALLED BEFORE DOM IS READY!
 */
function initRememberSongTime() {
    return __awaiter(this, void 0, void 0, function* () {
        if (getFeatures().rememberSongTimeSites !== "all" && getFeatures().rememberSongTimeSites !== getDomain())
            return;
        const storedDataRaw = yield GM.getValue("bytm-rem-songs");
        if (!storedDataRaw)
            yield GM.setValue("bytm-rem-songs", "[]");
        remSongsCache = JSON.parse(String(storedDataRaw !== null && storedDataRaw !== void 0 ? storedDataRaw : "[]"));
        log(`Initialized song time remembering with ${remSongsCache.length} initial entries`);
        if (location.pathname.startsWith("/watch"))
            yield restoreSongTime();
        if (!domLoaded)
            document.addEventListener("DOMContentLoaded", remSongUpdateEntry);
        else
            remSongUpdateEntry();
    });
}
/** Tries to restore the time of the currently playing song */
function restoreSongTime() {
    return __awaiter(this, void 0, void 0, function* () {
        if (location.pathname.startsWith("/watch")) {
            const watchID = new URL(location.href).searchParams.get("v");
            if (!watchID)
                return;
            const entry = remSongsCache.find(entry => entry.watchID === watchID);
            if (entry) {
                if (Date.now() - entry.updateTimestamp > getFeatures().rememberSongTimeDuration * 1000) {
                    yield delRemSongData(entry.watchID);
                    return;
                }
                else {
                    if (isNaN(entry.songTime))
                        return;
                    const doRestoreTime = () => __awaiter(this, void 0, void 0, function* () {
                        var _a;
                        const vidElem = yield waitVideoElementReady();
                        const vidRestoreTime = entry.songTime - ((_a = getFeatures().rememberSongTimeReduction) !== null && _a !== void 0 ? _a : 0);
                        vidElem.currentTime = UserUtils.clamp(Math.max(vidRestoreTime, 0), 0, vidElem.duration);
                        yield delRemSongData(entry.watchID);
                        info(`Restored song time to ${Math.floor(vidRestoreTime / 60)}m, ${(vidRestoreTime % 60).toFixed(1)}s`, LogLevel.Info);
                    });
                    if (!domLoaded)
                        document.addEventListener("DOMContentLoaded", doRestoreTime);
                    else
                        doRestoreTime();
                }
            }
        }
    });
}
/** Only call once as this calls itself after a timeout! - Updates the currently playing song's entry in GM storage */
function remSongUpdateEntry() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c;
        if (location.pathname.startsWith("/watch")) {
            const watchID = getWatchId();
            if (!watchID)
                return;
            const songTime = (_a = yield getVideoTime()) !== null && _a !== void 0 ? _a : 0;
            const paused = (_c = (_b = document.querySelector(getVideoSelector())) === null || _b === void 0 ? void 0 : _b.paused) !== null && _c !== void 0 ? _c : false;
            // don't immediately update to reduce race conditions and only update if the video is playing
            // also it just sounds better if the song starts at the beginning if only a couple seconds have passed
            if (songTime > getFeatures().rememberSongTimeMinPlayTime && !paused) {
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
                if (entry && songTime <= getFeatures().rememberSongTimeMinPlayTime)
                    yield delRemSongData(entry.watchID);
            }
        }
        const expiredEntries = remSongsCache.filter(entry => Date.now() - entry.updateTimestamp > getFeatures().rememberSongTimeDuration * 1000);
        for (const entry of expiredEntries)
            yield delRemSongData(entry.watchID);
        // for no overlapping calls and better error handling
        setTimeout(remSongUpdateEntry, 1000);
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
//#region disable darkreader
/** Disables Dark Reader if it is present */
function disableDarkReader() {
    if (getFeatures().disableDarkReaderSites !== getDomain() && getFeatures().disableDarkReaderSites !== "all")
        return;
    const metaElem = document.createElement("meta");
    metaElem.name = "darkreader-lock";
    metaElem.classList.add("bytm-disable-darkreader");
    document.head.appendChild(metaElem);
    info("Disabled Dark Reader");
}/**
 * Creates a generic, circular, long button element with an icon and text.
 * Has classes for the enabled and disabled states for easier styling.
 * If `href` is provided, the button will be an anchor element.
 * If `onClick` or `onToggle` is provided, the button will be a div element.
 * Provide either `resourceName` or `src` to specify the icon inside the button.
 */
function createLongBtn(_a) {
    return __awaiter(this, void 0, void 0, function* () {
        var _b;
        var { title, text, iconPosition } = _a, rest = __rest(_a, ["title", "text", "iconPosition"]);
        if (["href", "onClick", "onToggle"].every((key) => !(key in rest)))
            throw new TypeError("Either 'href', 'onClick' or 'onToggle' must be provided");
        let btnElem;
        if ("href" in rest && rest.href) {
            btnElem = document.createElement("a");
            btnElem.href = rest.href;
            btnElem.role = "button";
            btnElem.target = "_blank";
            btnElem.rel = "noopener noreferrer";
        }
        else
            btnElem = document.createElement("div");
        if ("toggle" in rest && rest.toggle) {
            btnElem.classList.add("bytm-toggle");
            if ("toggleInitialState" in rest && rest.toggleInitialState)
                btnElem.classList.add("toggled");
        }
        onInteraction(btnElem, (evt) => {
            if ("onClick" in rest && rest.onClick)
                rest.onClick(evt);
            if ("toggle" in rest && rest.toggle && "onToggle" in rest && rest.onToggle)
                rest.onToggle(btnElem.classList.toggle("toggled"), evt);
        });
        btnElem.classList.add("bytm-generic-btn", "long");
        btnElem.ariaLabel = btnElem.title = title;
        btnElem.tabIndex = 0;
        btnElem.role = "button";
        const imgElem = document.createElement("div");
        imgElem.classList.add("bytm-generic-btn-img", iconPosition !== null && iconPosition !== void 0 ? iconPosition : "left");
        imgElem.innerHTML = "src" in rest ? rest.src : (_b = yield resourceToHTMLString(rest.resourceName)) !== null && _b !== void 0 ? _b : "";
        const txtElem = document.createElement("span");
        txtElem.classList.add("bytm-generic-long-btn-txt", "bytm-no-select");
        txtElem.textContent = txtElem.ariaLabel = text;
        iconPosition === "left" || !iconPosition && btnElem.appendChild(imgElem);
        btnElem.appendChild(txtElem);
        iconPosition === "right" && btnElem.appendChild(imgElem);
        return btnElem;
    });
}const inputIgnoreTagNames = ["INPUT", "TEXTAREA", "SELECT", "BUTTON", "A"];
//#region arrow key skip
function initArrowKeySkip() {
    return __awaiter(this, void 0, void 0, function* () {
        document.addEventListener("keydown", (evt) => {
            var _a, _b, _c, _d, _e, _f;
            if (!getFeatures().arrowKeySupport)
                return;
            if (!["ArrowLeft", "ArrowRight"].includes(evt.code))
                return;
            const allowedClasses = ["bytm-generic-btn", "yt-spec-button-shape-next"];
            // discard the event when a (text) input is currently active, like when editing a playlist
            if ((inputIgnoreTagNames.includes((_b = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.tagName) !== null && _b !== void 0 ? _b : "") || ["volume-slider"].includes((_d = (_c = document.activeElement) === null || _c === void 0 ? void 0 : _c.id) !== null && _d !== void 0 ? _d : ""))
                && !allowedClasses.some((cls) => { var _a; return (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.classList.contains(cls); }))
                return info(`Captured valid key to skip forward or backward but the current active element is <${(_e = document.activeElement) === null || _e === void 0 ? void 0 : _e.tagName.toLowerCase()}>, so the keypress is ignored`);
            evt.preventDefault();
            evt.stopImmediatePropagation();
            let skipBy = (_f = getFeatures().arrowKeySkipBy) !== null && _f !== void 0 ? _f : featInfo.arrowKeySkipBy.default;
            if (evt.code === "ArrowLeft")
                skipBy *= -1;
            log(`Captured arrow key '${evt.code}' - skipping by ${skipBy} seconds`);
            const vidElem = document.querySelector(getVideoSelector());
            if (vidElem)
                vidElem.currentTime = UserUtils.clamp(vidElem.currentTime + skipBy, 0, vidElem.duration);
        });
        log("Added arrow key press listener");
    });
}
//#region site switch
/** switch sites only if current video time is greater than this value */
const videoTimeThreshold = 3;
let siteSwitchEnabled = true;
/** Initializes the site switch feature */
function initSiteSwitch(domain) {
    return __awaiter(this, void 0, void 0, function* () {
        document.addEventListener("keydown", (e) => {
            if (!getFeatures().switchBetweenSites)
                return;
            const hk = getFeatures().switchSitesHotkey;
            if (siteSwitchEnabled && e.code === hk.code && e.shiftKey === hk.shift && e.ctrlKey === hk.ctrl && e.altKey === hk.alt)
                switchSite(domain === "yt" ? "ytm" : "yt");
        });
        siteEvents.on("hotkeyInputActive", (state) => {
            if (!getFeatures().switchBetweenSites)
                return;
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
            const vt = yield getVideoTime(0);
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
//#region num keys skip
const numKeysIgnoreTagNames = [...inputIgnoreTagNames, "TP-YT-PAPER-TAB"];
const numKeysIgnoreIds = ["progress-bar", "song-media-window"];
/** Adds the ability to skip to a certain time in the video by pressing a number key (0-9) */
function initNumKeysSkip() {
    return __awaiter(this, void 0, void 0, function* () {
        document.addEventListener("keydown", (e) => {
            var _a, _b, _c, _d;
            if (!getFeatures().numKeysSkipToTime)
                return;
            if (!e.key.trim().match(/^[0-9]$/))
                return;
            if (isCfgMenuOpen)
                return;
            // discard the event when an unexpected element is currently active or in focus, like when editing a playlist or when the search bar is focused
            if (document.activeElement !== document.body // short-circuit if nothing is active
                || numKeysIgnoreIds.includes((_b = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : "") // video element or player bar active
                || numKeysIgnoreTagNames.includes((_d = (_c = document.activeElement) === null || _c === void 0 ? void 0 : _c.tagName) !== null && _d !== void 0 ? _d : "") // other element active
            )
                return info("Captured valid key to skip video to, but ignored it since an unexpected element is active:", document.activeElement);
            const vidElem = document.querySelector(getVideoSelector());
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
//#region auto-like channels
let canCompress$1 = false;
const autoLikeChannelsStore = new UserUtils.DataStore({
    id: "bytm-auto-like-channels",
    formatVersion: 1,
    defaultData: {
        channels: [],
    },
    encodeData: (data) => canCompress$1 ? UserUtils.compress(data, compressionFormat, "string") : data,
    decodeData: (data) => canCompress$1 ? UserUtils.decompress(data, compressionFormat, "string") : data,
    // migrations: {},
});
function initAutoLikeChannels() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            canCompress$1 = yield compressionSupported();
            yield initAutoLikeChannelsStore();
            if (getDomain() === "ytm") {
                let timeout;
                // TODO:FIXME: needs actual fix instead of timeout
                siteEvents.on("songTitleChanged", () => {
                    timeout && clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        // TODO: support multiple artists
                        const artistEls = document.querySelectorAll("ytmusic-player-bar .content-info-wrapper .subtitle a.yt-formatted-string[href]");
                        const channelIds = [...artistEls].map(a => a.href.split("/").pop()).filter(a => typeof a === "string");
                        const likeChan = autoLikeChannelsStore.getData().channels.find((ch) => channelIds.includes(ch.id));
                        if (!likeChan || !likeChan.enabled)
                            return;
                        if (artistEls.length === 0)
                            return error("Couldn't auto-like channel because the artist element couldn't be found");
                        const likeRenderer = document.querySelector(".middle-controls-buttons ytmusic-like-button-renderer");
                        const likeBtn = likeRenderer === null || likeRenderer === void 0 ? void 0 : likeRenderer.querySelector("#button-shape-like button");
                        if (!likeRenderer || !likeBtn)
                            return error("Couldn't auto-like channel because the like button couldn't be found");
                        if (likeRenderer.getAttribute("like-status") !== "LIKE") {
                            likeBtn.click();
                            log(`Auto-liked channel '${likeChan.name}' (ID: '${likeChan.id}')`);
                        }
                    }, 5000);
                });
                siteEvents.on("pathChanged", (path) => {
                    if (path.match(/\/channel\/.+/)) {
                        const chanId = path.split("/").pop();
                        if (!chanId)
                            return error("Couldn't extract channel ID from URL");
                        document.querySelectorAll(".bytm-auto-like-toggle-btn").forEach((btn) => clearNode(btn));
                        addSelectorListener("browseResponse", "ytmusic-browse-response #header .actions .buttons", {
                            listener(buttonsCont) {
                                var _a, _b;
                                const lastBtn = buttonsCont.querySelector("ytmusic-subscribe-button-renderer");
                                const chanName = (_b = (_a = document.querySelector("ytmusic-immersive-header-renderer .content-container yt-formatted-string[role=\"heading\"]")) === null || _a === void 0 ? void 0 : _a.textContent) !== null && _b !== void 0 ? _b : null;
                                lastBtn && addAutoLikeToggleBtn(lastBtn, chanId, chanName);
                            }
                        });
                    }
                });
            }
            else if (getDomain() === "yt") {
                // TODO:
            }
        }
        catch (err) {
            error("Error while auto-liking channel:", err);
        }
    });
}
function addAutoLikeToggleBtn(siblingEl, channelId, channelName) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const chan = autoLikeChannelsStore.getData().channels.find((ch) => ch.id === channelId);
        const buttonEl = yield createLongBtn({
            resourceName: `icon-auto_like${(chan === null || chan === void 0 ? void 0 : chan.enabled) ? "_enabled" : ""}`,
            text: t("auto_like"),
            title: t(`auto_like_button_tooltip${(chan === null || chan === void 0 ? void 0 : chan.enabled) ? "_enabled" : "_disabled"}`),
            toggle: true,
            toggleInitialState: (_a = chan === null || chan === void 0 ? void 0 : chan.enabled) !== null && _a !== void 0 ? _a : false,
            onToggle(toggled, evt) {
                return __awaiter(this, void 0, void 0, function* () {
                    var _a;
                    if (evt.shiftKey) {
                        buttonEl.classList.toggle("toggled");
                        getAutoLikeChannelsDialog().then((dlg) => dlg.open());
                        return;
                    }
                    buttonEl.title = buttonEl.ariaLabel = t(`auto_like_button_tooltip${toggled ? "_enabled" : "_disabled"}`);
                    const chanId = (_a = buttonEl.dataset.channelId) !== null && _a !== void 0 ? _a : channelId;
                    const imgEl = buttonEl.querySelector(".bytm-generic-btn-img");
                    const imgHtml = yield resourceToHTMLString(`icon-auto_like${toggled ? "_enabled" : ""}`);
                    if (imgEl && imgHtml)
                        imgEl.innerHTML = imgHtml;
                    if (autoLikeChannelsStore.getData().channels.find((ch) => ch.id === chanId) === undefined) {
                        yield autoLikeChannelsStore.setData({
                            channels: [
                                ...autoLikeChannelsStore.getData().channels,
                                { id: chanId, name: channelName !== null && channelName !== void 0 ? channelName : "", enabled: toggled },
                            ],
                        });
                    }
                    else {
                        yield autoLikeChannelsStore.setData({
                            channels: autoLikeChannelsStore.getData().channels
                                .map((ch) => ch.id === chanId ? Object.assign(Object.assign({}, ch), { enabled: toggled }) : ch),
                        });
                    }
                });
            }
        });
        buttonEl.classList.add("bytm-auto-like-toggle-btn");
        buttonEl.dataset.channelId = channelId;
        siblingEl.insertAdjacentElement("afterend", buttonEl);
    });
}/** Ratelimit budget timeframe in seconds - should reflect what's in geniURL's docs */
const geniUrlRatelimitTimeframe = 30;
//#region media control bar
let currentSongTitle = "";
/** Adds a lyrics button to the player bar */
function addPlayerBarLyricsBtn() {
    return __awaiter(this, void 0, void 0, function* () {
        addSelectorListener("playerBarMiddleButtons", "ytmusic-like-button-renderer#like-button-renderer", { listener: addActualLyricsBtn });
    });
}
/** Actually adds the lyrics button after the like button renderer has been verified to exist */
function addActualLyricsBtn(likeContainer) {
    return __awaiter(this, void 0, void 0, function* () {
        const songTitleElem = document.querySelector(".content-info-wrapper > yt-formatted-string");
        if (!songTitleElem)
            return warn("Couldn't find song title element");
        currentSongTitle = songTitleElem.title;
        const spinnerIconUrl = yield getResourceUrl("icon-spinner");
        const lyricsIconUrl = yield getResourceUrl("icon-lyrics");
        const errorIconUrl = yield getResourceUrl("icon-error");
        const onMutation = (mutations) => __awaiter(this, void 0, void 0, function* () {
            var _a, mutations_1, mutations_1_1;
            var _b, e_1, _c, _d;
            try {
                for (_a = true, mutations_1 = __asyncValues(mutations); mutations_1_1 = yield mutations_1.next(), _b = mutations_1_1.done, !_b; _a = true) {
                    _d = mutations_1_1.value;
                    _a = false;
                    const mut = _d;
                    const newTitle = mut.target.title;
                    if (newTitle !== currentSongTitle && newTitle.length > 0) {
                        const lyricsBtn = document.querySelector("#bytm-player-bar-lyrics-btn");
                        if (!lyricsBtn)
                            continue;
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
                            lyricsBtn.ariaLabel = lyricsBtn.title = t("lyrics_not_found_click_open_search");
                            lyricsBtn.style.cursor = "pointer";
                            lyricsBtn.style.pointerEvents = "all";
                            lyricsBtn.style.display = "inline-flex";
                            lyricsBtn.style.visibility = "visible";
                            lyricsBtn.href = `https://genius.com/search${query}`;
                            continue;
                        }
                        lyricsBtn.href = url;
                        lyricsBtn.ariaLabel = lyricsBtn.title = t("open_current_lyrics");
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
        });
        // since YT and YTM don't reload the page on video change, MutationObserver needs to be used to watch for changes in the video title
        const obs = new MutationObserver(onMutation);
        obs.observe(songTitleElem, { attributes: true, attributeFilter: ["title"] });
        const lyricsBtnElem = yield createLyricsBtn(undefined);
        lyricsBtnElem.id = "bytm-player-bar-lyrics-btn";
        // run parallel so the element is inserted as soon as possible
        getCurrentLyricsUrl().then(url => {
            url && addGeniusUrlToLyricsBtn(lyricsBtnElem, url);
        });
        log("Inserted lyrics button into media controls bar");
        const thumbToggleElem = document.querySelector("#bytm-thumbnail-overlay-toggle");
        if (thumbToggleElem)
            thumbToggleElem.insertAdjacentElement("afterend", lyricsBtnElem);
        else
            likeContainer.insertAdjacentElement("afterend", lyricsBtnElem);
    });
}
//#region lyrics utils
/** Removes everything in parentheses from the passed song name */
function sanitizeSong(songName) {
    if (typeof songName !== "string")
        return songName;
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
    if (artists.match(/(f(ea)?t\.?|Remix|Edit|Flip|Cover|Night\s?Core|Bass\s?Boost|pro?d\.?)/i)) {
        const parensRegex = /\(.+\)/gmi;
        const squareParensRegex = /\[.+\]/gmi;
        artists = artists
            .replace(parensRegex, "")
            .replace(squareParensRegex, "");
    }
    return artists.trim();
}
/** Returns the lyrics URL from genius for the currently selected song */
function getCurrentLyricsUrl() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // In videos the video title contains both artist and song title, in "regular" YTM songs, the video title only contains the song title
            const isVideo = currentMediaType() === "video";
            const songTitleElem = document.querySelector(".content-info-wrapper > yt-formatted-string");
            const songMetaElem = document.querySelector("span.subtitle > yt-formatted-string :first-child");
            if (!songTitleElem || !songMetaElem)
                return undefined;
            const songNameRaw = songTitleElem.title;
            let songName = songNameRaw;
            let artistName = songMetaElem.textContent;
            if (isVideo) {
                // for some fucking reason some music videos have YTM-like song title and artist separation, some don't
                if (songName.includes("-")) {
                    const split = splitVideoTitle(songName);
                    songName = split.song;
                    artistName = split.artist;
                }
            }
            if (!artistName)
                return undefined;
            const url = yield fetchLyricsUrlTop(sanitizeArtists(artistName), sanitizeSong(songName));
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
/** Fetches the top lyrics URL result from geniURL - **the passed parameters need to be sanitized first!** */
function fetchLyricsUrlTop(artist, song) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        try {
            return (_b = (_a = (yield fetchLyricsUrls(artist, song))) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.url;
        }
        catch (err) {
            error("Couldn't get lyrics URL due to error:", err);
            return undefined;
        }
    });
}
/**
 * Fetches the 5 best matching lyrics URLs from geniURL using a combo exact-ish and fuzzy search
 * **the passed parameters need to be sanitized first!**
 */
function fetchLyricsUrls(artist, song) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c;
        try {
            const cacheEntry = getLyricsCacheEntry(artist, song);
            if (cacheEntry) {
                info(`Found lyrics URL in cache: ${cacheEntry.url}`);
                return [cacheEntry];
            }
            const startTs = Date.now();
            const fetchUrl = constructUrl(`${getFeature("geniUrlBase")}/search`, {
                disableFuzzy: null,
                utm_source: scriptInfo.name,
                utm_content: `v${scriptInfo.version}${mode === "development" ? "-dev" : ""}`,
                artist,
                song,
            });
            log("Requesting lyrics from geniURL:", fetchUrl);
            const token = getFeature("geniUrlToken");
            const fetchRes = yield UserUtils.fetchAdvanced(fetchUrl, Object.assign({}, (token ? {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            } : {})));
            if (fetchRes.status === 429) {
                const waitSeconds = Number((_a = fetchRes.headers.get("retry-after")) !== null && _a !== void 0 ? _a : geniUrlRatelimitTimeframe);
                alert(tp("lyrics_rate_limited", waitSeconds, waitSeconds));
                return undefined;
            }
            else if (fetchRes.status < 200 || fetchRes.status >= 300) {
                error(`Couldn't fetch lyrics URLs from geniURL - status: ${fetchRes.status} - response: ${(_c = (_b = (yield fetchRes.json()).message) !== null && _b !== void 0 ? _b : yield fetchRes.text()) !== null && _c !== void 0 ? _c : "(none)"}`);
                return undefined;
            }
            const result = yield fetchRes.json();
            if (typeof result === "object" && result.error || !result || !result.all) {
                error("Couldn't fetch lyrics URL:", result.message);
                return undefined;
            }
            const allResults = result.all;
            if (allResults.length === 0) {
                warn("No lyrics URL found for the provided song");
                return undefined;
            }
            const allResultsSan = allResults
                .filter(({ meta, url }) => (meta.title || meta.fullTitle) && meta.artists && url)
                .map(({ meta, url }) => {
                var _a;
                return ({
                    meta: Object.assign(Object.assign({}, meta), { title: sanitizeSong(String((_a = meta.title) !== null && _a !== void 0 ? _a : meta.fullTitle)), artists: sanitizeArtists(String(meta.artists)) }),
                    url,
                });
            });
            if (!getFeature("advancedLyricsFilter")) {
                const topRes = allResultsSan[0];
                topRes && addLyricsCacheEntryBest(topRes.meta.artists, topRes.meta.title, topRes.url);
                return allResultsSan.map(r => ({
                    artist: r.meta.primaryArtist.name,
                    song: r.meta.title,
                    url: r.url,
                }));
            }
            const exactish = (input) => input.toLowerCase()
                .replace(/[\s\-_&,.()[\]]+/gm, "");
            // exact-ish matches, best matching one first
            const exactishResults = [...allResultsSan].sort((a, b) => {
                const aTitleScore = exactish(a.meta.title).localeCompare(exactish(song));
                const bTitleScore = exactish(b.meta.title).localeCompare(exactish(song));
                const aArtistScore = exactish(a.meta.primaryArtist.name).localeCompare(exactish(artist));
                const bArtistScore = exactish(b.meta.primaryArtist.name).localeCompare(exactish(artist));
                return aTitleScore + aArtistScore - bTitleScore - bArtistScore;
            });
            // use fuse.js for fuzzy match
            // search song title and artist separately, then combine the scores
            const titleFuse = new Fuse([...allResultsSan], {
                keys: ["title"],
                includeScore: true,
                threshold: 0.4,
            });
            const artistFuse = new Fuse([...allResultsSan], {
                keys: ["primaryArtist.name"],
                includeScore: true,
                threshold: 0.4,
            });
            let fuzzyResults = allResultsSan.map(r => {
                var _a, _b, _c, _d;
                const titleRes = titleFuse.search(r.meta.title);
                const artistRes = artistFuse.search(r.meta.primaryArtist.name);
                const titleScore = (_b = (_a = titleRes[0]) === null || _a === void 0 ? void 0 : _a.score) !== null && _b !== void 0 ? _b : 0;
                const artistScore = (_d = (_c = artistRes[0]) === null || _c === void 0 ? void 0 : _c.score) !== null && _d !== void 0 ? _d : 0;
                return Object.assign(Object.assign({}, r), { score: titleScore + artistScore });
            });
            // I love TS
            fuzzyResults = fuzzyResults
                .map((_a) => {
                var { score } = _a, rest = __rest(_a, ["score"]);
                return rest;
            });
            const hasExactMatch = exactishResults.slice(0, 3).find(r => exactish(r.meta.title) === exactish(fuzzyResults[0].meta.title) && exactish(r.meta.primaryArtist.name) === exactish(fuzzyResults[0].meta.primaryArtist.name));
            const finalResults = [
                ...(hasExactMatch
                    ? [fuzzyResults[0], ...allResultsSan.filter(r => r.url !== fuzzyResults[0].url)]
                    : [...allResultsSan]),
            ].slice(0, 5);
            // add top 3 results to the cache with a penalty to their time to live
            // so every entry is deleted faster if it's not considered as relevant
            finalResults.slice(0, 3).forEach(({ meta: { artists, title }, url }, i) => {
                const penaltyFraction = hasExactMatch
                    // if there's an exact match, give it 0 penalty and penalize all other results with the full value
                    ? i === 0 ? 0 : 1
                    // if there's no exact match, penalize all results with a fraction of the full penalty since they're more likely to be unrelated
                    : 0.6;
                addLyricsCacheEntryPenalized(sanitizeArtists(artists), sanitizeSong(title), url, penaltyFraction);
            });
            finalResults.length > 0 && log("Found", finalResults.length, "lyrics", UserUtils.autoPlural("URL", finalResults), "in", Date.now() - startTs, "ms:", finalResults);
            // returns search results sorted by relevance
            return finalResults.map(r => ({
                artist: r.meta.primaryArtist.name,
                song: r.meta.title,
                url: r.url,
            }));
        }
        catch (err) {
            error("Couldn't get lyrics URL due to error:", err);
            return undefined;
        }
    });
}
/** Adds the genius URL to the passed lyrics button element if it was previously instantiated with an undefined URL */
function addGeniusUrlToLyricsBtn(btnElem, geniusUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        btnElem.href = geniusUrl;
        btnElem.ariaLabel = btnElem.title = t("open_lyrics");
        btnElem.style.visibility = "visible";
        btnElem.style.display = "inline-flex";
    });
}
/** Creates the base lyrics button element */
function createLyricsBtn(geniusUrl_1) {
    return __awaiter(this, arguments, void 0, function* (geniusUrl, hideIfLoading = true) {
        const linkElem = document.createElement("a");
        linkElem.classList.add("ytmusic-player-bar", "bytm-generic-btn");
        linkElem.ariaLabel = linkElem.title = geniusUrl ? t("open_lyrics") : t("lyrics_loading");
        if (geniusUrl)
            linkElem.href = geniusUrl;
        linkElem.role = "button";
        linkElem.target = "_blank";
        linkElem.rel = "noopener noreferrer";
        linkElem.style.visibility = hideIfLoading && geniusUrl ? "initial" : "hidden";
        linkElem.style.display = hideIfLoading && geniusUrl ? "inline-flex" : "none";
        const imgElem = document.createElement("img");
        imgElem.classList.add("bytm-generic-btn-img");
        imgElem.src = yield getResourceUrl("icon-lyrics");
        linkElem.appendChild(imgElem);
        return linkElem;
    });
}
/** Splits a video title that contains a hyphen into an artist and song */
function splitVideoTitle(title) {
    const [artist, ...rest] = title.split("-").map((v, i) => i < 2 ? v.trim() : v);
    return { artist, song: rest.join("-") };
}/** Initializes the queue buttons */
function initQueueButtons() {
    return __awaiter(this, void 0, void 0, function* () {
        const addCurrentQueueBtns = (evt) => {
            let amt = 0;
            for (const queueItm of evt.childNodes) {
                if (!queueItm.classList.contains("bytm-has-queue-btns")) {
                    addQueueButtons(queueItm, undefined, "currentQueue");
                    amt++;
                }
            }
            if (amt > 0)
                log(`Added buttons to ${amt} new queue ${UserUtils.autoPlural("item", amt)}`);
        };
        // current queue
        siteEvents.on("queueChanged", addCurrentQueueBtns);
        siteEvents.on("autoplayQueueChanged", addCurrentQueueBtns);
        const queueItems = document.querySelectorAll("#contents.ytmusic-player-queue > ytmusic-player-queue-item");
        if (queueItems.length > 0) {
            queueItems.forEach(itm => addQueueButtons(itm, undefined, "currentQueue"));
            log(`Added buttons to ${queueItems.length} existing "current song queue" ${UserUtils.autoPlural("item", queueItems)}`);
        }
        // generic lists
        const addGenericListQueueBtns = (listElem) => {
            if (listElem.classList.contains("bytm-list-has-queue-btns"))
                return;
            const queueItems = listElem.querySelectorAll("ytmusic-responsive-list-item-renderer");
            if (queueItems.length === 0)
                return;
            listElem.classList.add("bytm-list-has-queue-btns");
            queueItems.forEach(itm => addQueueButtons(itm, ".flex-columns", "genericQueue", ["bytm-generic-list-queue-btn-container"]));
            log(`Added buttons to ${queueItems.length} new "generic song list" ${UserUtils.autoPlural("item", queueItems)}`);
        };
        const listSelectors = [
            "ytmusic-playlist-shelf-renderer #contents",
            "ytmusic-section-list-renderer[main-page-type=\"MUSIC_PAGE_TYPE_ALBUM\"] ytmusic-shelf-renderer #contents",
            "ytmusic-section-list-renderer[main-page-type=\"MUSIC_PAGE_TYPE_ARTIST\"] ytmusic-shelf-renderer #contents",
        ];
        if (getFeatures().listButtonsPlacement === "everywhere") {
            for (const selector of listSelectors) {
                addSelectorListener("body", selector, {
                    all: true,
                    continuous: true,
                    listener: (songLists) => {
                        for (const list of songLists)
                            addGenericListQueueBtns(list);
                    },
                });
            }
        }
    });
}
/**
 * Adds the buttons to each item in the current song queue.
 * Also observes for changes to add new buttons to new items in the queue.
 * @param queueItem The element with tagname `ytmusic-player-queue-item` to add queue buttons to
 * @param listType The type of list the queue item is in
 * @param classes Extra CSS classes to apply to the container
 */
function addQueueButtons(queueItem_1) {
    return __awaiter(this, arguments, void 0, function* (queueItem, containerParentSelector = ".song-info", listType = "currentQueue", classes = []) {
        var _a;
        const queueBtnsCont = document.createElement("div");
        queueBtnsCont.classList.add(...["bytm-queue-btn-container", ...classes]);
        const lyricsIconUrl = yield getResourceUrl("icon-lyrics");
        const deleteIconUrl = yield getResourceUrl("icon-delete");
        //#region lyrics
        let lyricsBtnElem;
        if (getFeatures().lyricsQueueButton) {
            lyricsBtnElem = yield createLyricsBtn(undefined, false);
            lyricsBtnElem.ariaLabel = lyricsBtnElem.title = t("open_lyrics");
            lyricsBtnElem.style.display = "inline-flex";
            lyricsBtnElem.style.visibility = "initial";
            lyricsBtnElem.style.pointerEvents = "initial";
            lyricsBtnElem.role = "link";
            lyricsBtnElem.tabIndex = 0;
            onInteraction(lyricsBtnElem, (e) => __awaiter(this, void 0, void 0, function* () {
                var _b;
                e.preventDefault();
                e.stopImmediatePropagation();
                let song, artist;
                if (listType === "currentQueue") {
                    const songInfo = queueItem.querySelector(".song-info");
                    if (!songInfo)
                        return;
                    const [songEl, artistEl] = songInfo.querySelectorAll("yt-formatted-string");
                    song = songEl === null || songEl === void 0 ? void 0 : songEl.textContent;
                    artist = artistEl === null || artistEl === void 0 ? void 0 : artistEl.textContent;
                }
                else if (listType === "genericQueue") {
                    const songEl = queueItem.querySelector(".title-column yt-formatted-string a");
                    let artistEl = null;
                    if (location.pathname.startsWith("/playlist"))
                        artistEl = document.querySelector("ytmusic-detail-header-renderer .metadata .subtitle-container yt-formatted-string a");
                    else
                        artistEl = queueItem.querySelector(".secondary-flex-columns yt-formatted-string:first-child a");
                    song = songEl === null || songEl === void 0 ? void 0 : songEl.textContent;
                    artist = artistEl === null || artistEl === void 0 ? void 0 : artistEl.textContent;
                }
                else
                    return;
                if (!song || !artist)
                    return error("Couldn't get song or artist name from queue item - song:", song, "- artist:", artist);
                let lyricsUrl;
                const artistsSan = sanitizeArtists(artist);
                const songSan = sanitizeSong(song);
                const splitTitle = splitVideoTitle(songSan);
                const cachedLyricsEntry = songSan.includes("-")
                    ? getLyricsCacheEntry(splitTitle.artist, splitTitle.song)
                    : getLyricsCacheEntry(artistsSan, songSan);
                if (cachedLyricsEntry)
                    lyricsUrl = cachedLyricsEntry.url;
                else if (!queueItem.hasAttribute("data-bytm-loading")) {
                    const imgEl = lyricsBtnElem === null || lyricsBtnElem === void 0 ? void 0 : lyricsBtnElem.querySelector("img");
                    if (!imgEl)
                        return;
                    if (!cachedLyricsEntry) {
                        queueItem.setAttribute("data-bytm-loading", "");
                        imgEl.src = yield getResourceUrl("icon-spinner");
                        imgEl.classList.add("bytm-spinner");
                    }
                    lyricsUrl = (_b = cachedLyricsEntry === null || cachedLyricsEntry === void 0 ? void 0 : cachedLyricsEntry.url) !== null && _b !== void 0 ? _b : yield fetchLyricsUrlTop(artistsSan, songSan);
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
                    if (!cachedLyricsEntry) {
                        queueItem.removeAttribute("data-bytm-loading");
                        // so the new image doesn't "blink"
                        setTimeout(resetImgElem, 100);
                    }
                    if (!lyricsUrl) {
                        resetImgElem();
                        if (confirm(t("lyrics_not_found_confirm_open_search")))
                            openInTab(`https://genius.com/search?q=${encodeURIComponent(`${artistsSan} - ${songSan}`)}`);
                        return;
                    }
                }
                lyricsUrl && openInTab(lyricsUrl);
            }));
        }
        //#region delete from queue
        let deleteBtnElem;
        if (getFeatures().deleteFromQueueButton) {
            deleteBtnElem = document.createElement("a");
            deleteBtnElem.ariaLabel = deleteBtnElem.title = (listType === "currentQueue" ? t("remove_from_queue") : t("delete_from_list"));
            deleteBtnElem.classList.add("ytmusic-player-bar", "bytm-delete-from-queue", "bytm-generic-btn");
            deleteBtnElem.role = "button";
            deleteBtnElem.tabIndex = 0;
            deleteBtnElem.style.visibility = "initial";
            const imgElem = document.createElement("img");
            imgElem.classList.add("bytm-generic-btn-img");
            imgElem.src = deleteIconUrl;
            onInteraction(deleteBtnElem, (e) => __awaiter(this, void 0, void 0, function* () {
                e.preventDefault();
                e.stopImmediatePropagation();
                // container of the queue item popup menu - element gets reused for every queue item
                let queuePopupCont = document.querySelector("ytmusic-app ytmusic-popup-container tp-yt-iron-dropdown");
                try {
                    // three dots button to open the popup menu of a queue item
                    const dotsBtnElem = queueItem.querySelector("ytmusic-menu-renderer yt-button-shape[id=\"button-shape\"] button");
                    if (dotsBtnElem) {
                        if (queuePopupCont)
                            queuePopupCont.setAttribute("data-bytm-hidden", "true");
                        dotsBtnElem.click();
                        queuePopupCont = document.querySelector("ytmusic-app ytmusic-popup-container tp-yt-iron-dropdown");
                        queuePopupCont === null || queuePopupCont === void 0 ? void 0 : queuePopupCont.setAttribute("data-bytm-hidden", "true");
                        // TODO: think of something better than this
                        yield UserUtils.pauseFor(25);
                        const removeFromQueueBtn = queuePopupCont === null || queuePopupCont === void 0 ? void 0 : queuePopupCont.querySelector("tp-yt-paper-listbox ytmusic-menu-service-item-renderer:nth-of-type(3)");
                        removeFromQueueBtn === null || removeFromQueueBtn === void 0 ? void 0 : removeFromQueueBtn.click();
                        // queue items aren't removed automatically outside of the current queue
                        if (removeFromQueueBtn && listType === "genericQueue") {
                            yield UserUtils.pauseFor(200);
                            clearInner(queueItem);
                            queueItem.remove();
                        }
                        if (!removeFromQueueBtn) {
                            error("Couldn't find 'remove from queue' button in queue item three dots menu");
                            dotsBtnElem.click();
                            imgElem.src = yield getResourceUrl("icon-error");
                            if (deleteBtnElem)
                                deleteBtnElem.ariaLabel = deleteBtnElem.title = (listType === "currentQueue" ? t("couldnt_remove_from_queue") : t("couldnt_delete_from_list"));
                        }
                    }
                }
                catch (err) {
                    error("Couldn't remove song from queue due to error:", err);
                }
                finally {
                    queuePopupCont === null || queuePopupCont === void 0 ? void 0 : queuePopupCont.removeAttribute("data-bytm-hidden");
                }
            }));
            deleteBtnElem.appendChild(imgElem);
        }
        lyricsBtnElem && queueBtnsCont.appendChild(lyricsBtnElem);
        deleteBtnElem && queueBtnsCont.appendChild(deleteBtnElem);
        (_a = queueItem.querySelector(containerParentSelector)) === null || _a === void 0 ? void 0 : _a.appendChild(queueBtnsCont);
        queueItem.classList.add("bytm-has-queue-btns");
    });
}//#region init vol features
/** Initializes all volume-related features */
function initVolumeFeatures() {
    return __awaiter(this, void 0, void 0, function* () {
        // not technically an input element but behaves pretty much the same
        addSelectorListener("playerBarRightControls", "tp-yt-paper-slider#volume-slider", {
            listener: (sliderElem) => __awaiter(this, void 0, void 0, function* () {
                const volSliderCont = document.createElement("div");
                volSliderCont.id = "bytm-vol-slider-cont";
                if (getFeatures().volumeSliderScrollStep !== featInfo.volumeSliderScrollStep.default)
                    initScrollStep(volSliderCont, sliderElem);
                UserUtils.addParent(sliderElem, volSliderCont);
                if (typeof getFeatures().volumeSliderSize === "number")
                    setVolSliderSize();
                if (getFeatures().volumeSliderLabel)
                    yield addVolumeSliderLabel(sliderElem, volSliderCont);
                setVolSliderStep(sliderElem);
                if (getFeatures().volumeSharedBetweenTabs) {
                    sliderElem.addEventListener("change", () => sharedVolumeChanged(Number(sliderElem.value)));
                    checkSharedVolume();
                }
                if (getFeatures().setInitialTabVolume)
                    setInitialTabVolume(sliderElem);
            }),
        });
    });
}
//#region scroll step
/** Initializes the volume slider scroll step features */
function initScrollStep(volSliderCont, sliderElem) {
    for (const evtName of ["wheel", "scroll", "mousewheel", "DOMMouseScroll"]) {
        volSliderCont.addEventListener(evtName, (e) => {
            var _a, _b;
            e.preventDefault();
            // cancels all the other events that would be fired
            e.stopImmediatePropagation();
            const delta = (_b = (_a = e.deltaY) !== null && _a !== void 0 ? _a : e.detail) !== null && _b !== void 0 ? _b : 1;
            const volumeDir = -Math.sign(delta);
            const newVolume = String(Number(sliderElem.value) + (getFeatures().volumeSliderScrollStep * volumeDir));
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
//#region volume slider label
/** Adds a percentage label to the volume slider and tooltip */
function addVolumeSliderLabel(sliderElem, sliderContainer) {
    return __awaiter(this, void 0, void 0, function* () {
        const labelContElem = document.createElement("div");
        labelContElem.id = "bytm-vol-slider-label";
        const volShared = getFeatures().volumeSharedBetweenTabs;
        if (volShared) {
            const linkIconHtml = yield resourceToHTMLString("icon-link");
            if (linkIconHtml) {
                const linkIconElem = document.createElement("div");
                linkIconElem.id = "bytm-vol-slider-shared";
                linkIconElem.innerHTML = linkIconHtml;
                linkIconElem.role = "alert";
                linkIconElem.title = linkIconElem.ariaLabel = t("volume_shared_tooltip");
                labelContElem.classList.add("has-icon");
                labelContElem.appendChild(linkIconElem);
            }
        }
        const getLabel = (value) => `${value}%`;
        const labelElem = document.createElement("div");
        labelElem.classList.add("label");
        labelElem.textContent = getLabel(sliderElem.value);
        labelContElem.appendChild(labelElem);
        // prevent video from minimizing
        labelContElem.addEventListener("click", (e) => e.stopPropagation());
        labelContElem.addEventListener("keydown", (e) => ["Enter", "Space", " "].includes(e.key) && e.stopPropagation());
        const getLabelText = (slider) => { var _a; return t("volume_tooltip", slider.value, (_a = getFeatures().volumeSliderStep) !== null && _a !== void 0 ? _a : slider.step); };
        const labelFull = getLabelText(sliderElem);
        sliderContainer.setAttribute("title", labelFull);
        sliderElem.setAttribute("title", labelFull);
        sliderElem.setAttribute("aria-valuetext", labelFull);
        const updateLabel = () => {
            const labelFull = getLabelText(sliderElem);
            sliderContainer.setAttribute("title", labelFull);
            sliderElem.setAttribute("title", labelFull);
            sliderElem.setAttribute("aria-valuetext", labelFull);
            const labelElem2 = document.querySelector("#bytm-vol-slider-label div.label");
            if (labelElem2)
                labelElem2.textContent = getLabel(sliderElem.value);
        };
        sliderElem.addEventListener("change", () => updateLabel());
        siteEvents.on("configChanged", () => {
            updateLabel();
        });
        addSelectorListener("playerBarRightControls", "#bytm-vol-slider-cont", {
            listener: (volumeCont) => volumeCont.appendChild(labelContElem),
        });
        let lastSliderVal = Number(sliderElem.value);
        // show label if hovering over slider or slider is focused
        const sliderHoverObserver = new MutationObserver(() => {
            if (sliderElem.classList.contains("on-hover") || document.activeElement === sliderElem)
                labelContElem.classList.add("bytm-visible");
            else if (labelContElem.classList.contains("bytm-visible") || document.activeElement !== sliderElem)
                labelContElem.classList.remove("bytm-visible");
            if (Number(sliderElem.value) !== lastSliderVal) {
                lastSliderVal = Number(sliderElem.value);
                updateLabel();
            }
        });
        sliderHoverObserver.observe(sliderElem, {
            attributes: true,
        });
    });
}
//#region volume slider size
/** Sets the volume slider to a set size */
function setVolSliderSize() {
    const { volumeSliderSize: size } = getFeatures();
    if (typeof size !== "number" || isNaN(Number(size)))
        return error("Invalid volume slider size:", size);
    addStyleFromResource("css-vol_slider_size", (css) => css.replace(/\/\*\s*\{WIDTH\}\s*\*\//gm, `${size}px`));
}
//#region volume slider step
/** Sets the `step` attribute of the volume slider */
function setVolSliderStep(sliderElem) {
    sliderElem.setAttribute("step", String(getFeatures().volumeSliderStep));
}
//#region shared volume
/** Saves the shared volume level to persistent storage */
function sharedVolumeChanged(vol) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield GM.setValue("bytm-shared-volume", String(lastCheckedSharedVolume = ignoreVal = vol));
        }
        catch (err) {
            error("Couldn't save shared volume level due to an error:", err);
        }
    });
}
let ignoreVal = -1;
let lastCheckedSharedVolume = -1;
/** Only call once as this calls itself after a timeout! - Checks if the shared volume has changed and updates the volume slider accordingly */
function checkSharedVolume() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const vol = yield GM.getValue("bytm-shared-volume");
            if (vol && lastCheckedSharedVolume !== Number(vol)) {
                if (ignoreVal === Number(vol))
                    return;
                lastCheckedSharedVolume = Number(vol);
                const sliderElem = document.querySelector("tp-yt-paper-slider#volume-slider");
                if (sliderElem) {
                    sliderElem.value = String(vol);
                    sliderElem.dispatchEvent(new Event("change", { bubbles: true }));
                }
            }
            setTimeout(checkSharedVolume, 333);
        }
        catch (err) {
            error("Couldn't check for shared volume level due to an error:", err);
        }
    });
}
//#region initial volume
/** Sets the volume slider to a set volume level when the session starts */
function setInitialTabVolume(sliderElem) {
    return __awaiter(this, void 0, void 0, function* () {
        yield waitVideoElementReady();
        const initialVol = getFeatures().initialTabVolumeLevel;
        if (getFeatures().volumeSharedBetweenTabs) {
            lastCheckedSharedVolume = ignoreVal = initialVol;
            if (getFeatures().volumeSharedBetweenTabs)
                GM.setValue("bytm-shared-volume", String(initialVol));
        }
        sliderElem.value = String(initialVol);
        sliderElem.dispatchEvent(new Event("change", { bubbles: true }));
        log(`Set initial tab volume to ${initialVol}%`);
    });
}//#region dependencies
/** Creates an HTML string for the given adornment properties */
const getAdornHtml = (className, title, resource, extraParams) => __awaiter(void 0, void 0, void 0, function* () { var _a; return `<span class="${className} bytm-adorn-icon" title="${title}" aria-label="${title}"${extraParams ? " " + extraParams : ""}>${(_a = yield resourceToHTMLString(resource)) !== null && _a !== void 0 ? _a : ""}</span>`; });
/** Combines multiple async functions or promises that resolve with an adornment HTML string into a single string */
const combineAdornments = (adornments) => new Promise((resolve) => __awaiter(void 0, void 0, void 0, function* () {
    const html = [];
    for (const adornment of adornments) {
        const val = typeof adornment === "function" ? yield adornment() : yield adornment;
        val && html.push(val);
    }
    resolve(html.join(""));
}));
/** Decoration elements that can be added next to the label */
const adornments = {
    advanced: () => __awaiter(void 0, void 0, void 0, function* () { return getAdornHtml("bytm-advanced-mode-icon", t("advanced_mode"), "icon-advanced_mode"); }),
    experimental: () => __awaiter(void 0, void 0, void 0, function* () { return getAdornHtml("bytm-experimental-icon", t("experimental_feature"), "icon-experimental"); }),
    globe: () => __awaiter(void 0, void 0, void 0, function* () { var _b; return (_b = yield resourceToHTMLString("icon-globe_small")) !== null && _b !== void 0 ? _b : ""; }),
    alert: (title) => __awaiter(void 0, void 0, void 0, function* () { return getAdornHtml("bytm-warning-icon", title, "icon-error", "role=\"alert\""); }),
    reloadRequired: () => __awaiter(void 0, void 0, void 0, function* () { return getFeatures().advancedMode ? getAdornHtml("bytm-reload-icon", t("feature_requires_reload"), "icon-reload") : undefined; }),
};
/** Common options for config items of type "select" */
const options = {
    siteSelection: () => [
        { value: "all", label: t("site_selection_both_sites") },
        { value: "yt", label: t("site_selection_only_yt") },
        { value: "ytm", label: t("site_selection_only_ytm") },
    ],
    siteSelectionOrNone: () => [
        { value: "all", label: t("site_selection_both_sites") },
        { value: "yt", label: t("site_selection_only_yt") },
        { value: "ytm", label: t("site_selection_only_ytm") },
        { value: "none", label: t("site_selection_none") },
    ],
    locale: () => Object.entries(langMapping)
        .reduce((a, [locale, { name }]) => {
        return [...a, {
                value: locale,
                label: name,
            }];
    }, [])
        .sort((a, b) => a.label.localeCompare(b.label)),
};
//#region features
/**
 * Contains all possible features with their default values and other configuration.
 *
 * **Required props:**
 * | Property             | Description                                                                                                                      |
 * | :------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
 * | `type`               | type of the feature configuration element - use autocomplete or check `FeatureTypeProps` in `src/types.ts`                       |
 * | `category`           | category of the feature - use autocomplete or check `FeatureCategory` in `src/types.ts`                                          |
 * | `default`            | default value of the feature - type of the value depends on the given `type`                                                     |
 * | `enable(value: any)` | (required if reloadRequired = false) - function that will be called when the feature is enabled / initialized for the first time |
 *
 * **Optional props:**
 * | Property                                                       | Description                                                                                                                                              |
 * | :------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | `disable: (newValue: any) => void`                             | for type `toggle` only - function that will be called when the feature is disabled - can be a synchronous or asynchronous function                       |
 * | `change: (key: string, prevValue: any, newValue: any)` => void | for types `number`, `select`, `slider` and `hotkey` only - function that will be called when the value is changed                                        |
 * | `click: () => void`                                            | for type `button` only - function that will be called when the button is clicked                                                                         |
 * | `helpText: string / () => string`                              | function that returns an HTML string or the literal string itself that will be the help text for this feature - writing as function is useful for pluralizing or inserting values into the translation at runtime - if not set, translation with key `feature_helptext_featureKey` will be used instead, if available |
 * | `textAdornment: () => string / Promise<string>`                | function that returns an HTML string that will be appended to the text in the config menu as an adornment element                                        |
 * | `unit: string / (val: number) => string`                       | Only if type is `number` or `slider` - The unit text that is displayed next to the input element, i.e. " px" - a leading space need to be added by hand! |
 * | `min: number`                                                  | Only if type is `number` or `slider` - Overwrites the default of the `min` property of the HTML input element                                            |
 * | `max: number`                                                  | Only if type is `number` or `slider` - Overwrites the default of the `max` property of the HTML input element                                            |
 * | `step: number`                                                 | Only if type is `number` or `slider` - Overwrites the default of the `step` property of the HTML input element                                           |
 * | `options: SelectOption[] / () => SelectOption[]`               | Only if type is `select` - function that returns an array of objects with `value` and `label` properties                                                 |
 * | `reloadRequired: boolean`                                      | if true (default), the page needs to be reloaded for the changes to take effect - if false, `enable()` needs to be provided                              |
 * | `advanced: boolean`                                            | if true, the feature will only be shown if the advanced mode feature has been turned on                                                                  |
 * | `hidden: boolean`                                              | if true, the feature will not be shown in the settings - default is undefined (false)                                                                    |
 * | `valueHidden: boolean`                                         | If true, the value of the feature will be hidden in the settings and via the plugin interface - default is undefined (false)                             |
 * | `normalize: (val: any) => any`                                 | Function that will be called to normalize the value before it is saved - useful for trimming strings or other simple operations                          |
 *
 * TODO: go through all features and set as many as possible to reloadRequired = false
 */
const featInfo = {
    //#region layout
    watermarkEnabled: {
        type: "toggle",
        category: "layout",
        default: true,
        textAdornment: adornments.reloadRequired,
    },
    removeShareTrackingParam: {
        type: "toggle",
        category: "layout",
        default: true,
        textAdornment: adornments.reloadRequired,
    },
    removeShareTrackingParamSites: {
        type: "select",
        category: "layout",
        options: options.siteSelection,
        default: "all",
        textAdornment: adornments.reloadRequired,
    },
    fixSpacing: {
        type: "toggle",
        category: "layout",
        default: true,
        textAdornment: adornments.reloadRequired,
    },
    removeUpgradeTab: {
        type: "toggle",
        category: "layout",
        default: true,
        textAdornment: adornments.reloadRequired,
    },
    thumbnailOverlayBehavior: {
        type: "select",
        category: "layout",
        options: () => [
            { value: "songsOnly", label: t("thumbnail_overlay_behavior_songs_only") },
            { value: "videosOnly", label: t("thumbnail_overlay_behavior_videos_only") },
            { value: "always", label: t("thumbnail_overlay_behavior_always") },
            { value: "never", label: t("thumbnail_overlay_behavior_never") },
        ],
        default: "songsOnly",
        reloadRequired: false,
        enable: noop,
    },
    thumbnailOverlayToggleBtnShown: {
        type: "toggle",
        category: "layout",
        default: true,
        textAdornment: adornments.reloadRequired,
    },
    thumbnailOverlayShowIndicator: {
        type: "toggle",
        category: "layout",
        default: true,
        textAdornment: adornments.reloadRequired,
    },
    thumbnailOverlayIndicatorOpacity: {
        type: "slider",
        category: "layout",
        min: 5,
        max: 100,
        step: 5,
        default: 40,
        unit: "%",
        advanced: true,
        textAdornment: () => combineAdornments([adornments.advanced, adornments.reloadRequired]),
    },
    thumbnailOverlayImageFit: {
        type: "select",
        category: "layout",
        options: () => [
            { value: "cover", label: t("thumbnail_overlay_image_fit_crop") },
            { value: "contain", label: t("thumbnail_overlay_image_fit_full") },
            { value: "fill", label: t("thumbnail_overlay_image_fit_stretch") },
        ],
        default: "cover",
        advanced: true,
        textAdornment: () => combineAdornments([adornments.advanced, adornments.reloadRequired]),
    },
    hideCursorOnIdle: {
        type: "toggle",
        category: "layout",
        default: true,
        reloadRequired: false,
        enable: noop,
    },
    hideCursorOnIdleDelay: {
        type: "slider",
        category: "layout",
        min: 0.5,
        max: 10,
        step: 0.25,
        default: 2,
        unit: "s",
        advanced: true,
        textAdornment: adornments.advanced,
        reloadRequired: false,
        enable: noop,
    },
    fixHdrIssues: {
        type: "toggle",
        category: "layout",
        default: true,
        textAdornment: adornments.reloadRequired,
    },
    disableDarkReaderSites: {
        type: "select",
        category: "layout",
        options: options.siteSelectionOrNone,
        default: "all",
        textAdornment: adornments.reloadRequired,
    },
    //#region volume
    volumeSliderLabel: {
        type: "toggle",
        category: "volume",
        default: true,
        textAdornment: adornments.reloadRequired,
    },
    volumeSliderSize: {
        type: "number",
        category: "volume",
        min: 50,
        max: 500,
        step: 5,
        default: 150,
        unit: "px",
        textAdornment: adornments.reloadRequired,
    },
    volumeSliderStep: {
        type: "slider",
        category: "volume",
        min: 1,
        max: 25,
        default: 2,
        unit: "%",
        textAdornment: adornments.reloadRequired,
    },
    volumeSliderScrollStep: {
        type: "slider",
        category: "volume",
        min: 1,
        max: 25,
        default: 10,
        unit: "%",
        textAdornment: adornments.reloadRequired,
    },
    volumeSharedBetweenTabs: {
        type: "toggle",
        category: "volume",
        default: false,
        textAdornment: adornments.reloadRequired,
    },
    setInitialTabVolume: {
        type: "toggle",
        category: "volume",
        default: false,
        textAdornment: () => getFeatures().volumeSharedBetweenTabs
            ? combineAdornments([adornments.alert(t("feature_warning_setInitialTabVolume_volumeSharedBetweenTabs_incompatible").replace(/"/g, "'")), adornments.reloadRequired])
            : adornments.reloadRequired(),
    },
    initialTabVolumeLevel: {
        type: "slider",
        category: "volume",
        min: 0,
        max: 100,
        step: 1,
        default: 100,
        unit: "%",
        textAdornment: () => getFeatures().volumeSharedBetweenTabs
            ? combineAdornments([adornments.alert(t("feature_warning_setInitialTabVolume_volumeSharedBetweenTabs_incompatible").replace(/"/g, "'")), adornments.reloadRequired])
            : adornments.reloadRequired(),
        reloadRequired: false,
        enable: noop,
    },
    //#region song lists
    lyricsQueueButton: {
        type: "toggle",
        category: "songLists",
        default: true,
        textAdornment: adornments.reloadRequired,
    },
    deleteFromQueueButton: {
        type: "toggle",
        category: "songLists",
        default: true,
        textAdornment: adornments.reloadRequired,
    },
    listButtonsPlacement: {
        type: "select",
        category: "songLists",
        options: () => [
            { value: "queueOnly", label: t("list_button_placement_queue_only") },
            { value: "everywhere", label: t("list_button_placement_everywhere") },
        ],
        default: "everywhere",
        textAdornment: adornments.reloadRequired,
    },
    scrollToActiveSongBtn: {
        type: "toggle",
        category: "songLists",
        default: true,
        textAdornment: adornments.reloadRequired,
    },
    clearQueueBtn: {
        type: "toggle",
        category: "songLists",
        default: true,
        textAdornment: adornments.reloadRequired,
    },
    //#region behavior
    disableBeforeUnloadPopup: {
        type: "toggle",
        category: "behavior",
        default: false,
        textAdornment: adornments.reloadRequired,
    },
    closeToastsTimeout: {
        type: "number",
        category: "behavior",
        min: 0,
        max: 30,
        step: 0.5,
        default: 3,
        unit: "s",
        reloadRequired: false,
        enable: noop,
    },
    rememberSongTime: {
        type: "toggle",
        category: "behavior",
        default: true,
        helpText: () => tp("feature_helptext_rememberSongTime", getFeatures().rememberSongTimeMinPlayTime, getFeatures().rememberSongTimeMinPlayTime),
        textAdornment: adornments.reloadRequired,
    },
    rememberSongTimeSites: {
        type: "select",
        category: "behavior",
        options: options.siteSelection,
        default: "ytm",
        textAdornment: adornments.reloadRequired,
    },
    rememberSongTimeDuration: {
        type: "number",
        category: "behavior",
        min: 1,
        max: 60 * 60 * 24 * 7,
        step: 1,
        default: 60,
        unit: "s",
        advanced: true,
        textAdornment: adornments.advanced,
        reloadRequired: false,
        enable: noop,
    },
    rememberSongTimeReduction: {
        type: "number",
        category: "behavior",
        min: 0,
        max: 30,
        step: 0.05,
        default: 0.2,
        unit: "s",
        advanced: true,
        textAdornment: adornments.advanced,
        reloadRequired: false,
        enable: noop,
    },
    rememberSongTimeMinPlayTime: {
        type: "slider",
        category: "behavior",
        min: 0.5,
        max: 30,
        step: 0.5,
        default: 10,
        unit: "s",
        advanced: true,
        textAdornment: adornments.advanced,
        reloadRequired: false,
        enable: noop,
    },
    //#region input
    arrowKeySupport: {
        type: "toggle",
        category: "input",
        default: true,
        reloadRequired: false,
        enable: noop,
    },
    arrowKeySkipBy: {
        type: "number",
        category: "input",
        min: 0.5,
        max: 60,
        step: 0.5,
        default: 5,
        reloadRequired: false,
        enable: noop,
    },
    switchBetweenSites: {
        type: "toggle",
        category: "input",
        default: true,
        reloadRequired: false,
        enable: noop,
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
        reloadRequired: false,
        enable: noop,
    },
    anchorImprovements: {
        type: "toggle",
        category: "input",
        default: true,
        textAdornment: adornments.reloadRequired,
    },
    numKeysSkipToTime: {
        type: "toggle",
        category: "input",
        default: true,
        reloadRequired: false,
        enable: noop,
    },
    autoLikeChannels: {
        type: "toggle",
        category: "input",
        default: false,
        textAdornment: adornments.reloadRequired,
    },
    autoLikeChannelToggleButtons: {
        type: "toggle",
        category: "input",
        default: true,
        textAdornment: adornments.reloadRequired,
    },
    openAutoLikeChannelsDialog: {
        type: "button",
        category: "input",
        click: () => getAutoLikeChannelsDialog().then(d => d.open()),
    },
    //#region lyrics
    geniusLyrics: {
        type: "toggle",
        category: "lyrics",
        default: true,
    },
    geniUrlBase: {
        type: "text",
        category: "lyrics",
        default: "https://api.sv443.net/geniurl",
        normalize: (val) => val.trim().replace(/\/+$/, ""),
        advanced: true,
        textAdornment: adornments.advanced,
        reloadRequired: false,
        enable: noop,
    },
    geniUrlToken: {
        type: "text",
        valueHidden: true,
        category: "lyrics",
        default: "",
        normalize: (val) => val.trim(),
        advanced: true,
        textAdornment: adornments.advanced,
        reloadRequired: false,
        enable: noop,
    },
    lyricsCacheMaxSize: {
        type: "slider",
        category: "lyrics",
        default: 1000,
        min: 100,
        max: 5000,
        step: 100,
        unit: (val) => " " + tp("unit_entries", val),
        advanced: true,
        textAdornment: adornments.advanced,
        reloadRequired: false,
        enable: noop,
    },
    lyricsCacheTTL: {
        type: "slider",
        category: "lyrics",
        default: 21,
        min: 1,
        max: 100,
        step: 1,
        unit: (val) => " " + tp("unit_days", val),
        advanced: true,
        textAdornment: adornments.advanced,
        reloadRequired: false,
        enable: noop,
    },
    clearLyricsCache: {
        type: "button",
        category: "lyrics",
        click() {
            return __awaiter(this, void 0, void 0, function* () {
                const entries = getLyricsCache().length;
                if (confirm(tp("lyrics_clear_cache_confirm_prompt", entries, entries))) {
                    yield clearLyricsCache();
                    alert(t("lyrics_clear_cache_success"));
                }
            });
        },
        advanced: true,
        textAdornment: adornments.advanced,
    },
    advancedLyricsFilter: {
        type: "toggle",
        category: "lyrics",
        default: false,
        change: () => setTimeout(() => confirm(t("lyrics_cache_changed_clear_confirm")) && clearLyricsCache(), 200),
        advanced: true,
        textAdornment: adornments.experimental,
        reloadRequired: false,
        enable: noop,
    },
    //#region general
    locale: {
        type: "select",
        category: "general",
        options: options.locale,
        default: getPreferredLocale(),
        textAdornment: () => combineAdornments([adornments.globe, adornments.reloadRequired]),
    },
    localeFallback: {
        type: "toggle",
        category: "general",
        default: true,
        advanced: true,
        textAdornment: () => combineAdornments([adornments.advanced, adornments.reloadRequired]),
    },
    versionCheck: {
        type: "toggle",
        category: "general",
        default: true,
        textAdornment: adornments.reloadRequired,
    },
    checkVersionNow: {
        type: "button",
        category: "general",
        click: () => doVersionCheck(true),
    },
    logLevel: {
        type: "select",
        category: "general",
        options: () => [
            { value: 0, label: t("log_level_debug") },
            { value: 1, label: t("log_level_info") },
        ],
        default: 1,
        textAdornment: adornments.reloadRequired,
    },
    initTimeout: {
        type: "number",
        category: "general",
        min: 3,
        max: 30,
        default: 8,
        step: 0.1,
        unit: "s",
        advanced: true,
        textAdornment: () => combineAdornments([adornments.advanced, adornments.reloadRequired]),
    },
    advancedMode: {
        type: "toggle",
        category: "general",
        default: false,
        textAdornment: () => getFeatures().advancedMode ? adornments.advanced() : undefined,
        change: (_key, prevValue, newValue) => prevValue !== newValue &&
            emitSiteEvent("recreateCfgMenu"),
    },
};
function noop() {
}/** If this number is incremented, the features object data will be migrated to the new format */
const formatVersion = 5;
/** Config data format migration dictionary */
const migrations = {
    // 1 -> 2 (v1.0)
    2: (oldData) => {
        const queueBtnsEnabled = Boolean(oldData.queueButtons);
        delete oldData.queueButtons;
        return Object.assign(Object.assign({}, oldData), { deleteFromQueueButton: queueBtnsEnabled, lyricsQueueButton: queueBtnsEnabled });
    },
    // 2 -> 3 (v1.0)
    3: (oldData) => useDefaultConfig(oldData, [
        "removeShareTrackingParam", "numKeysSkipToTime",
        "fixSpacing", "scrollToActiveSongBtn", "logLevel",
    ]),
    // 3 -> 4 (v1.1)
    4: (oldData) => {
        var _a, _b, _c, _d;
        const oldSwitchSitesHotkey = oldData.switchSitesHotkey;
        return Object.assign(Object.assign({}, useDefaultConfig(oldData, [
            "rememberSongTime", "rememberSongTimeSites",
            "volumeSliderScrollStep", "locale", "versionCheck",
        ])), { arrowKeySkipBy: 10, switchSitesHotkey: {
                code: (_a = oldSwitchSitesHotkey.key) !== null && _a !== void 0 ? _a : "F9",
                shift: Boolean((_b = oldSwitchSitesHotkey.shift) !== null && _b !== void 0 ? _b : false),
                ctrl: Boolean((_c = oldSwitchSitesHotkey.ctrl) !== null && _c !== void 0 ? _c : false),
                alt: Boolean((_d = oldSwitchSitesHotkey.meta) !== null && _d !== void 0 ? _d : false),
            }, listButtonsPlacement: "queueOnly" });
    },
    // 4 -> 5 (v2.0)
    5: (oldData) => useDefaultConfig(oldData, [
        "localeFallback", "geniUrlBase", "geniUrlToken",
        "lyricsCacheMaxSize", "lyricsCacheTTL",
        "clearLyricsCache", "advancedMode",
        "checkVersionNow", "advancedLyricsFilter",
        "rememberSongTimeDuration", "rememberSongTimeReduction",
        "rememberSongTimeMinPlayTime", "volumeSharedBetweenTabs",
        "setInitialTabVolume", "initialTabVolumeLevel",
        "thumbnailOverlayBehavior", "thumbnailOverlayToggleBtnShown",
        "thumbnailOverlayShowIndicator", "thumbnailOverlayIndicatorOpacity",
        "thumbnailOverlayImageFit", "removeShareTrackingParamSites",
        "fixHdrIssues", "clearQueueBtn",
        "closeToastsTimeout", "disableDarkReaderSites",
    ]),
    // 5 -> 6 (v2.1)
    6: (oldData) => useDefaultConfig(oldData, [
        "autoLikeChannels", "openAutoLikeChannelsDialog",
        "autoLikeChannelToggleButtons",
    ]),
    // TODO: once advanced filtering is fully implemented, clear cache on migration to fv6
    // 6 -> 7 (v2.x)
    // 7: (oldData: FeatureConfig) => 
};
const defaultData = Object.keys(featInfo)
    .reduce((acc, key) => {
    var _a;
    // @ts-ignore
    acc[key] = (_a = featInfo === null || featInfo === void 0 ? void 0 : featInfo[key]) === null || _a === void 0 ? void 0 : _a.default;
    return acc;
}, {});
/** Uses the default config as the base, then overwrites all values with the passed {@linkcode baseData}, then sets all passed {@linkcode resetKeys} to their default values */
function useDefaultConfig(baseData, resetKeys) {
    var _a;
    const newData = Object.assign(Object.assign({}, defaultData), (baseData !== null && baseData !== void 0 ? baseData : {}));
    for (const key of resetKeys) // @ts-ignore
        newData[key] = (_a = featInfo === null || featInfo === void 0 ? void 0 : featInfo[key]) === null || _a === void 0 ? void 0 : _a.default; // typescript funny moments
    return newData;
}
let canCompress = true;
const cfgDataStore = new UserUtils.DataStore({
    id: "bytm-config",
    formatVersion,
    defaultData,
    migrations,
    encodeData: (data) => canCompress ? UserUtils.compress(data, compressionFormat, "string") : data,
    decodeData: (data) => canCompress ? UserUtils.decompress(data, compressionFormat, "string") : data,
});
/** Initializes the DataStore instance and loads persistent data into memory. Returns a copy of the config object. */
function initConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        canCompress = yield compressionSupported();
        const oldFmtVer = Number(yield GM.getValue(`_uucfgver-${cfgDataStore.id}`, NaN));
        let data = yield cfgDataStore.loadData();
        log(`Initialized feature config DataStore (formatVersion = ${cfgDataStore.formatVersion})`);
        if (isNaN(oldFmtVer))
            info("  !- Config data was initialized with default values");
        else if (oldFmtVer !== cfgDataStore.formatVersion) {
            try {
                yield cfgDataStore.setData(data = fixMissingCfgKeys(data));
                info(`  !- Config data was migrated from version ${oldFmtVer} to ${cfgDataStore.formatVersion}`);
            }
            catch (err) {
                error("  !- Config data migration failed, falling back to default data:", err);
                yield cfgDataStore.setData(data = cfgDataStore.defaultData);
            }
        }
        emitInterface("bytm:configReady");
        return Object.assign({}, data);
    });
}
/**
 * Fixes missing keys in the passed config object with their default values and returns a copy of the fixed object.
 * Returns a copy of the originally passed object if nothing needs to be fixed.
 */
function fixMissingCfgKeys(cfg) {
    cfg = Object.assign({}, cfg);
    const passedKeys = Object.keys(cfg);
    const defaultKeys = Object.keys(defaultData);
    const missingKeys = defaultKeys.filter(k => !passedKeys.includes(k));
    if (missingKeys.length > 0) {
        info("Fixed missing feature config keys:", missingKeys);
        for (const key of missingKeys)
            cfg[key] = defaultData[key];
    }
    return cfg;
}
/** Returns the current feature config from the in-memory cache as a copy */
function getFeatures() {
    return cfgDataStore.getData();
}
/** Returns the value of the feature with the given key from the in-memory cache, as a copy */
function getFeature(key) {
    return cfgDataStore.getData()[key];
}
/** Saves the feature config synchronously to the in-memory cache and asynchronously to the persistent storage */
function setFeatures(featureConf) {
    const res = cfgDataStore.setData(featureConf);
    emitSiteEvent("configChanged", cfgDataStore.getData());
    info("Saved new feature config:", featureConf);
    return res;
}
/** Saves the default feature config synchronously to the in-memory cache and asynchronously to persistent storage */
function setDefaultFeatures() {
    const res = cfgDataStore.saveDefaultData();
    emitSiteEvent("configChanged", cfgDataStore.getData());
    info("Reset feature config to its default values");
    return res;
}
/** Clears the feature config from the persistent storage - since the cache will be out of whack, this should only be run before a site re-/unload */
function clearConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        yield cfgDataStore.deleteData();
        info("Deleted config from persistent storage");
    });
}const { getUnsafeWindow, randomId } = UserUtils__namespace;
/** All functions that can be called on the BYTM interface using `unsafeWindow.BYTM.functionName();` (or `const { functionName } = unsafeWindow.BYTM;`) */
const globalFuncs = {
    // meta
    registerPlugin,
    getPluginInfo,
    // utils
    addSelectorListener,
    getResourceUrl,
    getSessionId,
    getVideoTime,
    setLocale: setLocaleInterface,
    getLocale,
    hasKey,
    hasKeyFor,
    t,
    tp,
    getFeatures: getFeaturesInterface,
    saveFeatures: saveFeaturesInterface,
    fetchLyricsUrlTop,
    getLyricsCacheEntry,
    sanitizeArtists,
    sanitizeSong,
    onInteraction,
    getThumbnailUrl,
    getBestThumbnailUrl,
    createHotkeyInput,
    createToggleInput,
    createCircularBtn,
};
/** Initializes the BYTM interface */
function initInterface() {
    const props = Object.assign(Object.assign(Object.assign({ 
        // meta / constants
        mode,
        branch,
        host,
        buildNumber,
        compressionFormat }, scriptInfo), globalFuncs), { 
        // classes
        NanoEmitter,
        BytmDialog,
        // libraries
        UserUtils: UserUtils__namespace,
        compareVersions: compareVersions__namespace });
    for (const [key, value] of Object.entries(props))
        setGlobalProp(key, value);
    log("Initialized BYTM interface");
}
/** Sets a global property on the unsafeWindow.BYTM object */
function setGlobalProp(key, value) {
    // use unsafeWindow so the properties are available to plugins outside of the userscript's scope
    const win = getUnsafeWindow();
    if (typeof win.BYTM !== "object")
        win.BYTM = {};
    win.BYTM[key] = value;
}
/** Emits an event on the BYTM interface */
function emitInterface(type, ...detail) {
    var _a;
    getUnsafeWindow().dispatchEvent(new CustomEvent(type, { detail: (_a = detail === null || detail === void 0 ? void 0 : detail[0]) !== null && _a !== void 0 ? _a : undefined }));
    //@ts-ignore
    emitOnPlugins(type, undefined, ...detail);
    log(`Emitted interface event '${type}'${detail.length > 0 && (detail === null || detail === void 0 ? void 0 : detail[0]) ? " with data:" : ""}`, ...detail);
}
//#region register plugins
/** Map of plugin ID and plugins that are queued up for registration */
const pluginsQueued = new Map();
/** Map of plugin ID and all registered plugins */
const pluginsRegistered = new Map();
/** Map of plugin ID to auth token for plugins that have been registered */
const pluginTokens = new Map();
/** Initializes plugins that have been registered already. Needs to be run after `bytm:ready`! */
function initPlugins() {
    // TODO(v1.3): check perms and ask user for initial activation
    for (const [key, { def, events }] of pluginsQueued) {
        try {
            pluginsRegistered.set(key, { def, events });
            pluginsQueued.delete(key);
            emitOnPlugins("pluginRegistered", (d) => sameDef(d, def), pluginDefToInfo(def));
        }
        catch (err) {
            error(`Failed to initialize plugin '${getPluginKey(def)}':`, err);
        }
    }
    emitInterface("bytm:pluginsRegistered");
}
/** Returns the key for a given plugin definition */
function getPluginKey(plugin) {
    return `${plugin.plugin.namespace}/${plugin.plugin.name}`;
}
/** Converts a PluginDef object (full definition) into a PluginInfo object (restricted definition) or undefined, if undefined is passed */
function pluginDefToInfo(plugin) {
    return plugin
        ? {
            name: plugin.plugin.name,
            namespace: plugin.plugin.namespace,
            version: plugin.plugin.version,
        }
        : undefined;
}
/** Checks whether two plugins are the same, given their resolvable definition objects */
function sameDef(def1, def2) {
    return getPluginKey(def1) === getPluginKey(def2);
}
/** Emits an event on all plugins that match the predicate (all plugins by default) */
function emitOnPlugins(event, predicate = true, ...data) {
    for (const { def, events } of pluginsRegistered.values())
        if (typeof predicate === "boolean" ? predicate : predicate(def))
            events.emit(event, ...data);
}
/**
 * Returns info about a registered plugin on the BYTM interface, or undefined if the plugin isn't registered.
 * This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.
 * @public Intended for general use in plugins.
 */
function getPluginInfo(...args) {
    var _a;
    if (resolveToken(args[0]) === undefined)
        return undefined;
    return pluginDefToInfo((_a = pluginsRegistered.get(typeof args[1] === "string" && typeof args[2] === "undefined"
        ? args[1]
        : args.length === 2
            ? `${args[2]}/${args[1]}`
            : getPluginKey(args[1]))) === null || _a === void 0 ? void 0 : _a.def);
}
/** Validates the passed PluginDef object and returns an array of errors - returns undefined if there were no errors - never returns an empty array */
function validatePluginDef(pluginDef) {
    const errors = [];
    const addNoPropErr = (jsonPath, type) => errors.push(t("plugin_validation_error_no_property", jsonPath, type));
    const addInvalidPropErr = (jsonPath, value, examples) => errors.push(tp("plugin_validation_error_invalid_property", examples, jsonPath, value, `'${examples.join("', '")}'`));
    // def.plugin and its properties:
    typeof pluginDef.plugin !== "object" && addNoPropErr("plugin", "object");
    const { plugin } = pluginDef;
    !(plugin === null || plugin === void 0 ? void 0 : plugin.name) && addNoPropErr("plugin.name", "string");
    !(plugin === null || plugin === void 0 ? void 0 : plugin.namespace) && addNoPropErr("plugin.namespace", "string");
    if (typeof (plugin === null || plugin === void 0 ? void 0 : plugin.version) !== "string")
        addNoPropErr("plugin.version", "MAJOR.MINOR.PATCH");
    else if (!compareVersions__namespace.validateStrict(plugin.version))
        addInvalidPropErr("plugin.version", plugin.version, ["0.0.1", "2.5.21-rc.1"]);
    return errors.length > 0 ? errors : undefined;
}
/** Registers a plugin on the BYTM interface */
function registerPlugin(def) {
    var _a, _b;
    const validationErrors = validatePluginDef(def);
    if (validationErrors) {
        error(`Failed to register plugin${((_a = def === null || def === void 0 ? void 0 : def.plugin) === null || _a === void 0 ? void 0 : _a.name) ? ` '${(_b = def === null || def === void 0 ? void 0 : def.plugin) === null || _b === void 0 ? void 0 : _b.name}'` : ""} with invalid definition:\n- ${validationErrors.join("\n- ")}`, LogLevel.Info);
        throw new Error(`Invalid plugin definition:\n- ${validationErrors.join("\n- ")}`);
    }
    const events = createNanoEvents();
    const token = randomId(32, 36);
    const { plugin: { name } } = def;
    pluginsQueued.set(getPluginKey(def), {
        def: def,
        events,
    });
    pluginTokens.set(getPluginKey(def), token);
    info(`Registered plugin: ${name}`, LogLevel.Info);
    return {
        info: getPluginInfo(token, def),
        events,
        token,
    };
}
/** Checks whether the passed token is a valid auth token for any registered plugin and returns the plugin ID, else returns undefined */
function resolveToken(token) {
    var _a, _b;
    return token ? (_b = (_a = [...pluginTokens.entries()].find(([, v]) => v === token)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : undefined : undefined;
}
//#region proxy funcs
/**
 * Sets the new locale on the BYTM interface
 * This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.
 */
function setLocaleInterface(token, locale) {
    const pluginId = resolveToken(token);
    if (pluginId === undefined)
        return;
    setLocale(locale);
    emitInterface("bytm:setLocale", { pluginId, locale });
}
/**
 * Returns the current feature config, with sensitive values replaced by `undefined`
 * This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.
 */
function getFeaturesInterface(token) {
    if (resolveToken(token) === undefined)
        return undefined;
    const features = getFeatures();
    for (const ftKey of Object.keys(features)) {
        const info = featInfo[ftKey];
        if (info && info.valueHidden) // @ts-ignore
            features[ftKey] = undefined;
    }
    return features;
}
/**
 * Saves the passed feature config synchronously to the in-memory cache and asynchronously to the persistent storage.
 * This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.
 */
function saveFeaturesInterface(token, features) {
    if (resolveToken(token) === undefined)
        return;
    setFeatures(features);
}/** Options that are applied to every SelectorObserver instance */
const defaultObserverOptions = {
    disableOnNoListeners: false,
    enableOnAddListener: false,
    defaultDebounce: 100,
    defaultDebounceEdge: "rising",
};
/** Global SelectorObserver instances usable throughout the script for improved performance */
const globservers = {};
/** Call after DOM load to initialize all SelectorObserver instances */
function initObservers() {
    try {
        //#region both sites
        //#region body
        // -> the entire <body> element - use sparingly due to performance impacts!
        globservers.body = new UserUtils.SelectorObserver(document.body, Object.assign(Object.assign({}, defaultObserverOptions), { defaultDebounce: 150, subtree: false }));
        globservers.body.enable();
        switch (getDomain()) {
            case "ytm": {
                //#region YTM
                //#region browseResponse
                // -> for example the /channel/UC... page
                const browseResponseSelector = "ytmusic-browse-response";
                globservers.browseResponse = new UserUtils.SelectorObserver(browseResponseSelector, Object.assign(Object.assign({}, defaultObserverOptions), { subtree: true }));
                globservers.body.addListener(browseResponseSelector, {
                    listener: () => globservers.browseResponse.enable(),
                });
                //#region navBar
                // -> the navigation / title bar at the top of the page
                const navBarSelector = "ytmusic-nav-bar";
                globservers.navBar = new UserUtils.SelectorObserver(navBarSelector, Object.assign(Object.assign({}, defaultObserverOptions), { subtree: false }));
                globservers.body.addListener(navBarSelector, {
                    listener: () => globservers.navBar.enable(),
                });
                //#region mainPanel
                // -> the main content panel - includes things like the video element
                const mainPanelSelector = "ytmusic-player-page #main-panel";
                globservers.mainPanel = new UserUtils.SelectorObserver(mainPanelSelector, Object.assign(Object.assign({}, defaultObserverOptions), { subtree: true }));
                globservers.body.addListener(mainPanelSelector, {
                    listener: () => globservers.mainPanel.enable(),
                });
                //#region sideBar
                // -> the sidebar on the left side of the page
                const sidebarSelector = "ytmusic-app-layout tp-yt-app-drawer";
                globservers.sideBar = new UserUtils.SelectorObserver(sidebarSelector, Object.assign(Object.assign({}, defaultObserverOptions), { subtree: true }));
                globservers.body.addListener(sidebarSelector, {
                    listener: () => globservers.sideBar.enable(),
                });
                //#region sideBarMini
                // -> the minimized sidebar on the left side of the page
                const sideBarMiniSelector = "ytmusic-app-layout #mini-guide";
                globservers.sideBarMini = new UserUtils.SelectorObserver(sideBarMiniSelector, Object.assign(Object.assign({}, defaultObserverOptions), { subtree: true }));
                globservers.body.addListener(sideBarMiniSelector, {
                    listener: () => globservers.sideBarMini.enable(),
                });
                //#region sidePanel
                // -> the side panel on the right side of the /watch page
                const sidePanelSelector = "#side-panel";
                globservers.sidePanel = new UserUtils.SelectorObserver(sidePanelSelector, Object.assign(Object.assign({}, defaultObserverOptions), { subtree: true }));
                globservers.body.addListener(sidePanelSelector, {
                    listener: () => globservers.sidePanel.enable(),
                });
                //#region playerBar
                // -> media controls bar at the bottom of the page
                const playerBarSelector = "ytmusic-app-layout ytmusic-player-bar.ytmusic-app";
                globservers.playerBar = new UserUtils.SelectorObserver(playerBarSelector, Object.assign(Object.assign({}, defaultObserverOptions), { defaultDebounce: 200 }));
                globservers.body.addListener(playerBarSelector, {
                    listener: () => {
                        globservers.playerBar.enable();
                    },
                });
                //#region playerBarInfo
                // -> song title, artist, album, etc. inside the player bar
                const playerBarInfoSelector = `${playerBarSelector} .middle-controls .content-info-wrapper`;
                globservers.playerBarInfo = new UserUtils.SelectorObserver(playerBarInfoSelector, Object.assign(Object.assign({}, defaultObserverOptions), { attributes: true, attributeFilter: ["title"] }));
                globservers.playerBar.addListener(playerBarInfoSelector, {
                    listener: () => globservers.playerBarInfo.enable(),
                });
                //#region playerBarMiddleButtons
                // -> the buttons inside the player bar (like, dislike, lyrics, etc.)
                const playerBarMiddleButtonsSelector = ".middle-controls .middle-controls-buttons";
                globservers.playerBarMiddleButtons = new UserUtils.SelectorObserver(playerBarMiddleButtonsSelector, Object.assign(Object.assign({}, defaultObserverOptions), { subtree: true }));
                globservers.playerBar.addListener(playerBarMiddleButtonsSelector, {
                    listener: () => globservers.playerBarMiddleButtons.enable(),
                });
                //#region playerBarRightControls
                // -> the controls on the right side of the player bar (volume, repeat, shuffle, etc.)
                const playerBarRightControls = "#right-controls";
                globservers.playerBarRightControls = new UserUtils.SelectorObserver(playerBarRightControls, Object.assign(Object.assign({}, defaultObserverOptions), { subtree: true }));
                globservers.playerBar.addListener(playerBarRightControls, {
                    listener: () => globservers.playerBarRightControls.enable(),
                });
                //#region popupContainer
                // -> the container for popups (e.g. the queue popup)
                const popupContainerSelector = "ytmusic-app ytmusic-popup-container";
                globservers.popupContainer = new UserUtils.SelectorObserver(popupContainerSelector, Object.assign(Object.assign({}, defaultObserverOptions), { subtree: true }));
                globservers.body.addListener(popupContainerSelector, {
                    listener: () => globservers.popupContainer.enable(),
                });
                break;
            }
            case "yt": {
                //#region YT
                //#region ytGuide
                // -> the left sidebar menu
                const ytGuideSelector = "#content tp-yt-app-drawer#guide #guide-inner-content";
                globservers.ytGuide = new UserUtils.SelectorObserver(ytGuideSelector, Object.assign(Object.assign({}, defaultObserverOptions), { subtree: true }));
                globservers.body.addListener(ytGuideSelector, {
                    listener: () => globservers.ytGuide.enable(),
                });
                // //#region ytMasthead
                // -> the masthead (title bar) at the top of the page
                // const mastheadSelector = "#content ytd-masthead#masthead";
                // globservers.ytMasthead = new SelectorObserver(mastheadSelector, {
                //   ...defaultObserverOptions,
                //   subtree: true,
                // });
                // globservers.body.addListener(mastheadSelector, {
                //   listener: () => globservers.ytMasthead.enable(),
                // });
            }
        }
        //#region finalize
        emitInterface("bytm:observersReady");
    }
    catch (err) {
        error("Failed to initialize observers:", err);
    }
}
//#region add listener func
/**
 * Interface function for adding listeners to the {@linkcode globservers}
 * @param selector Relative to the observer's root element, so the selector can only start at of the root element's children at the earliest!
 * @param options Options for the listener
 * @template TElem The type of the element that the listener will be attached to. If set to `0`, the type HTMLElement will be used.
 * @template TDomain This restricts which observers are available with the current domain
 */
function addSelectorListener(observerName, selector, options) {
    globservers[observerName].addListener(selector, options);
}/** Whether the DOM has finished loading and elements can be added or modified */
let domLoaded = false;
document.addEventListener("DOMContentLoaded", () => domLoaded = true);
//#region video time, volume
/** Returns the video element selector string based on the current domain */
const getVideoSelector = () => getDomain() === "ytm" ? "ytmusic-player video" : "#player-container ytd-player video";
/**
 * Returns the current video time in seconds, with the given {@linkcode precision} (2 decimal digits by default).
 * Rounds down if the precision is set to 0. The maximum average available precision on YTM is 6.
 * Dispatches mouse movement events in case the video time can't be read from the video or progress bar elements (needs a prior user interaction to work)
 * @returns Returns null if the video time is unavailable or no user interaction has happened prior to calling in case of the fallback behavior being used
 */
function getVideoTime(precision = 2) {
    return new Promise((res) => __awaiter(this, void 0, void 0, function* () {
        const domain = getDomain();
        yield waitVideoElementReady();
        try {
            if (domain === "ytm") {
                const vidElem = document.querySelector(getVideoSelector());
                if (vidElem)
                    return res(Number(precision <= 0 ? Math.floor(vidElem.currentTime) : vidElem.currentTime.toFixed(precision)));
                addSelectorListener("playerBar", "tp-yt-paper-slider#progress-bar tp-yt-paper-progress#sliderBar", {
                    listener: (pbEl) => res(!isNaN(Number(pbEl.value)) ? Math.floor(Number(pbEl.value)) : null)
                });
            }
            else if (domain === "yt") {
                const vidElem = document.querySelector(getVideoSelector());
                if (vidElem)
                    return res(Number(precision <= 0 ? Math.floor(vidElem.currentTime) : vidElem.currentTime.toFixed(precision)));
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
                addSelectorListener("body", pbSelector, { listener: observe });
            }
        }
        catch (err) {
            error("Couldn't get video time due to error:", err);
            res(null);
        }
    }));
}
/**
 * Sends events that force the video controls to become visible for about 3 seconds.
 * This only works once (for some reason), then the page needs to be reloaded!
 */
function ytForceShowVideoTime() {
    const player = document.querySelector("#movie_player");
    if (!player)
        return false;
    const defaultProps = {
        // needed because otherwise YTM errors out - see https://github.com/Sv443/BetterYTM/issues/18#show_issue
        view: UserUtils.getUnsafeWindow(),
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
/** Waits for the video element to be in its readyState 4 / canplay state and returns it - resolves immediately if the video is already ready */
function waitVideoElementReady() {
    return new Promise((res) => {
        addSelectorListener("body", getVideoSelector(), {
            listener: (vidElem) => __awaiter(this, void 0, void 0, function* () {
                if (vidElem) {
                    // this is just after YT has finished doing their own shenanigans with the video time and volume
                    if (vidElem.readyState === 4)
                        res(vidElem);
                    else
                        vidElem.addEventListener("canplay", () => res(vidElem), { once: true });
                }
            }),
        });
    });
}
//#region other
/** Removes all child nodes of an element without invoking the slow-ish HTML parser */
function clearInner(element) {
    while (element.hasChildNodes())
        clearNode(element.firstChild);
}
/** Removes all child nodes of an element recursively and also removes the element itself */
function clearNode(element) {
    while (element.hasChildNodes())
        clearNode(element.firstChild);
    element.parentNode.removeChild(element);
}
const interactionKeys = ["Enter", " ", "Space"];
/**
 * Adds generic, accessible interaction listeners to the passed element.
 * All listeners have the default behavior prevented and stop propagation (for keyboard events only as long as the captured key is valid).
 * @param listenerOptions Provide a {@linkcode listenerOptions} object to configure the listeners
 */
function onInteraction(elem, listener, listenerOptions) {
    const proxListener = (e) => {
        if (e instanceof KeyboardEvent) {
            if (interactionKeys.includes(e.key)) {
                e.preventDefault();
                e.stopPropagation();
            }
            else
                return;
        }
        else if (e instanceof MouseEvent) {
            e.preventDefault();
            e.stopPropagation();
        }
        // clean up the other listener that isn't automatically removed if `once` is set
        (listenerOptions === null || listenerOptions === void 0 ? void 0 : listenerOptions.once) && e.type === "keydown" && elem.removeEventListener("click", proxListener, listenerOptions);
        (listenerOptions === null || listenerOptions === void 0 ? void 0 : listenerOptions.once) && e.type === "click" && elem.removeEventListener("keydown", proxListener, listenerOptions);
        listener(e);
    };
    elem.addEventListener("click", proxListener, listenerOptions);
    elem.addEventListener("keydown", proxListener, listenerOptions);
}
/**
 * Adds a style element to the DOM at runtime.
 * @param css The CSS stylesheet to add
 * @param ref A reference string to identify the style element - defaults to a random 5-character string
 * @param transform A function to transform the CSS before adding it to the DOM
 */
function addStyle(css, ref, transform = (c) => c) {
    if (!domLoaded)
        throw new Error("DOM has not finished loading yet");
    const elem = UserUtils.addGlobalStyle(transform(css));
    elem.id = `bytm-global-style-${ref !== null && ref !== void 0 ? ref : UserUtils.randomId(5, 36)}`;
    return elem;
}
/**
 * Checks if the currently playing media is a song or a video.
 * This function should only be called after awaiting `waitVideoElementReady()`!
 */
function currentMediaType() {
    const songImgElem = document.querySelector("ytmusic-player #song-image");
    if (!songImgElem)
        throw new Error("Couldn't find the song image element. Use this function only after `await waitVideoElementReady()`!");
    return UserUtils.getUnsafeWindow().getComputedStyle(songImgElem).display !== "none" ? "song" : "video";
}
/**
 * Adds a global style element with the contents fetched from the specified CSS resource.
 * The CSS can be transformed using the provided function before being added to the DOM.
 */
function addStyleFromResource(key_1) {
    return __awaiter(this, arguments, void 0, function* (key, transform = (c) => c) {
        const css = yield fetchCss(key);
        if (css) {
            addStyle(transform(css), key.slice(4));
            return true;
        }
        return false;
    });
}
/** Copies the provided text to the clipboard and shows an error message for manual copying if the grant `GM.setClipboard` is not given. */
function copyToClipboard(text) {
    try {
        GM.setClipboard(String(text));
    }
    catch (err) {
        alert(t("copy_to_clipboard_error", String(text)));
    }
}let curLogLevel = LogLevel.Info;
/** Common prefix to be able to tell logged messages apart and filter them in devtools */
const consPrefix = `[${scriptInfo.name}]`;
`[${scriptInfo.name}/#DEBUG]`;
/** Sets the current log level. 0 = Debug, 1 = Info */
function setLogLevel(level) {
    curLogLevel = level;
    setGlobalProp("logLevel", level);
    if (curLogLevel !== level)
        log("Set the log level to", LogLevel[level]);
}
/** Extracts the log level from the last item from spread arguments - returns 0 if the last item is not a number or too low or high */
function getLogLevel(args) {
    const minLogLvl = 0, maxLogLvl = 1;
    if (typeof args.at(-1) === "number")
        return UserUtils.clamp(args.splice(args.length - 1)[0], minLogLvl, maxLogLvl);
    return LogLevel.Debug;
}
/**
 * Logs all passed values to the console, as long as the log level is sufficient.
 * @param args Last parameter is log level (0 = Debug, 1/undefined = Info) - any number as the last parameter will be stripped out! Convert to string if it shouldn't be.
 */
function log(...args) {
    if (curLogLevel <= getLogLevel(args))
        console.log(consPrefix, ...args);
}
/**
 * Logs all passed values to the console as info, as long as the log level is sufficient.
 * @param args Last parameter is log level (0 = Debug, 1/undefined = Info) - any number as the last parameter will be stripped out! Convert to string if it shouldn't be.
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
}//#region misc
let cachedDomain;
/**
 * Returns the current domain as a constant string representation
 * @throws Throws if script runs on an unexpected website
 */
function getDomain() {
    if (cachedDomain)
        return cachedDomain;
    if (location.hostname.match(/^music\.youtube/))
        return cachedDomain = "ytm";
    else if (location.hostname.match(/youtube\./))
        return cachedDomain = "yt";
    else
        throw new Error("BetterYTM is running on an unexpected website. Please don't tamper with the @match directives in the userscript header.");
}
/** Returns a pseudo-random ID unique to each session - returns null if sessionStorage is unavailable */
function getSessionId() {
    try {
        let sesId = window.sessionStorage.getItem("_bytm-session-id");
        if (!sesId)
            window.sessionStorage.setItem("_bytm-session-id", sesId = UserUtils.randomId(8, 36));
        return sesId;
    }
    catch (err) {
        warn("Couldn't get session ID, sessionStorage / cookies might be disabled:", err);
        return null;
    }
}
let isCompressionSupported;
/** Tests whether compression via the predefined {@linkcode compressionFormat} is supported (only on the first call, then returns the cached result) */
function compressionSupported() {
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof isCompressionSupported === "boolean")
            return isCompressionSupported;
        try {
            yield UserUtils.compress(".", compressionFormat, "string");
            return isCompressionSupported = true;
        }
        catch (e) {
            return isCompressionSupported = false;
        }
    });
}
/** Returns a string with the given array's items separated by a default separator (`", "` by default), with an optional different separator for the last item */
function arrayWithSeparators(array, separator = ", ", lastSeparator) {
    const arr = [...array];
    if (arr.length === 0)
        return "";
    else if (arr.length <= 2)
        return arr.join(lastSeparator);
    else
        return `${arr.slice(0, -1).join(separator)}${lastSeparator}${arr.at(-1)}`;
}
/** Returns the watch ID of the current video or null if not on a video page */
function getWatchId() {
    const { searchParams, pathname } = new URL(location.href);
    return pathname.includes("/watch") ? searchParams.get("v") : null;
}
/** Returns the thumbnail URL for a video with either a given quality identifier or index */
function getThumbnailUrl(watchId, qualityOrIndex = "maxresdefault") {
    return `https://i.ytimg.com/vi/${watchId}/${qualityOrIndex}.jpg`;
}
/** Returns the best available thumbnail URL for a video with the given watch ID */
function getBestThumbnailUrl(watchId) {
    return __awaiter(this, void 0, void 0, function* () {
        const priorityList = ["maxresdefault", "sddefault", "hqdefault", 0];
        for (const quality of priorityList) {
            let response;
            const url = getThumbnailUrl(watchId, quality);
            try {
                response = yield sendRequest({ url, method: "HEAD", timeout: 6000 });
            }
            catch (e) {
            }
            if (response && response.status < 300 && response.status >= 200)
                return url;
        }
    });
}
/** Opens the given URL in a new tab, using GM.openInTab if available */
function openInTab(href, background = false) {
    try {
        UserUtils.openInNewTab(href, background);
    }
    catch (err) {
        window.open(href, "_blank", "noopener noreferrer");
    }
}
//#region resources
/**
 * Returns the URL of a resource by its name, as defined in `assets/resources.json`, from GM resource cache - [see GM.getResourceUrl docs](https://wiki.greasespot.net/GM.getResourceUrl)
 * Falls back to a `raw.githubusercontent.com` URL or base64-encoded data URI if the resource is not available in the GM resource cache
 */
function getResourceUrl(name) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
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
    if (Object.entries(langMapping).find(([key]) => key === navLang))
        return navLang;
    for (const loc of navLangs) {
        if (Object.entries(langMapping).find(([key]) => key === loc))
            return loc;
    }
    // if navigator.languages has entries that aren't locale codes in the format xx_XX
    if (navigator.languages.some(lang => lang.match(/^[a-z]{2}$/))) {
        for (const lang of navLangs) {
            const foundLoc = (_a = Object.entries(langMapping).find(([key]) => key.startsWith(lang))) === null || _a === void 0 ? void 0 : _a[0];
            if (foundLoc)
                return foundLoc;
        }
    }
    return "en_US";
}
/** Returns the content behind the passed resource identifier to be assigned to an element's innerHTML property */
function resourceToHTMLString(resource) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resourceUrl = yield getResourceUrl(resource);
            if (!resourceUrl)
                throw new Error(`Couldn't find URL for resource '${resource}'`);
            return yield (yield UserUtils.fetchAdvanced(resourceUrl)).text();
        }
        catch (err) {
            error("Couldn't get SVG element from resource:", err);
            return null;
        }
    });
}
/** Parses a markdown string using marked and turns it into an HTML string with default settings - doesn't sanitize against XSS! */
function parseMarkdown(mdString) {
    return marked.marked.parse(mdString, {
        async: true,
        gfm: true,
    });
}
/** Returns the content of the changelog markdown file */
function getChangelogMd() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (yield UserUtils.fetchAdvanced(yield getResourceUrl("doc-changelog"))).text();
    });
}
/** Returns the changelog as HTML with a details element for each version */
function getChangelogHtmlWithDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const changelogMd = yield getChangelogMd();
            let changelogHtml = yield parseMarkdown(changelogMd);
            const getVerId = (verStr) => verStr.trim().replace(/[._#\s-]/g, "");
            changelogHtml = changelogHtml.replace(/<div\s+class="split">\s*<\/div>\s*\n?\s*<br(\s\/)?>/gm, "</details>\n<br>\n<details class=\"bytm-changelog-version-details\">");
            const h2Matches = Array.from(changelogHtml.matchAll(/<h2(\s+id=".+")?>([\d\w\s.]+)<\/h2>/gm));
            for (const match of h2Matches) {
                const [fullMatch, , verStr] = match;
                const verId = getVerId(verStr);
                const h2Elem = `<h2 id="${verId}" role="subheading" aria-level="1">${verStr}</h2>`;
                const summaryElem = `<summary tab-index="0">${h2Elem}</summary>`;
                changelogHtml = changelogHtml.replace(fullMatch, `${summaryElem}`);
            }
            changelogHtml = `<details class="bytm-changelog-version-details">${changelogHtml}</details>`;
            return changelogHtml;
        }
        catch (err) {
            return `Error while preparing changelog: ${err}`;
        }
    });
}/**
 * Constructs a URL from a base URL and a record of query parameters.
 * If a value is null, the parameter will be valueless.
 * All values will be stringified using their `toString()` method and then URI-encoded.
 * @returns Returns a string instead of a URL object
 */
function constructUrlString(baseUrl, params) {
    return `${baseUrl}?${Object.entries(params)
        .filter(([, v]) => v !== undefined)
        .map(([key, val]) => `${key}${val === null ? "" : `=${encodeURIComponent(String(val))}`}`)
        .join("&")}`;
}
/**
 * Constructs a URL object from a base URL and a record of query parameters.
 * If a value is null, the parameter will be valueless.
 * All values will be URI-encoded.
 * @returns Returns a URL object instead of a string
 */
function constructUrl(base, params) {
    return new URL(constructUrlString(base, params));
}
/**
 * Sends a request with the specified parameters and returns the response as a Promise.
 * Ignores the CORS policy, contrary to fetch and fetchAdvanced.
 */
function sendRequest(details) {
    return new Promise((resolve, reject) => {
        GM.xmlHttpRequest(Object.assign(Object.assign({ timeout: 10000 }, details), { onload: resolve, onerror: reject, ontimeout: reject, onabort: reject }));
    });
}
/** Fetches a CSS file from the specified resource with a key starting with `css-` */
function fetchCss(key) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const css = yield (yield UserUtils.fetchAdvanced(yield getResourceUrl(key))).text();
            return css !== null && css !== void 0 ? css : undefined;
        }
        catch (err) {
            error("Couldn't fetch CSS due to an error:", err);
            return undefined;
        }
    });
}//#region console watermark
{
    // console watermark with sexy gradient
    const styleGradient = "background: rgba(165, 38, 38, 1); background: linear-gradient(90deg, rgb(154, 31, 103) 0%, rgb(135, 31, 31) 40%, rgb(184, 64, 41) 100%);";
    const styleCommon = "color: #fff; font-size: 1.3rem;";
    console.log();
    console.log(`%c${scriptInfo.name}%c${scriptInfo.version}%c • ${scriptInfo.namespace}%c\n\nBuild #${buildNumber}`, `${styleCommon} ${styleGradient} font-weight: bold; padding-left: 6px; padding-right: 6px;`, `${styleCommon} background-color: #333; padding-left: 8px; padding-right: 8px;`, "color: #fff; font-size: 1.2rem;", "padding: initial;");
    console.log([
        "Powered by:",
        "─ Lots of ambition and dedication",
        "─ My song metadata API: https://api.sv443.net/geniurl",
        "─ My userscript utility library: https://github.com/Sv443-Network/UserUtils",
        "─ This library for semver comparison: https://github.com/omichelsen/compare-versions",
        "─ This tiny event listener library: https://github.com/ai/nanoevents",
        "─ This markdown parser library: https://github.com/markedjs/marked",
        "─ This fuzzy search library: https://github.com/krisk/Fuse",
    ].join("\n"));
    console.log();
}
//#region preInit
/** Stuff that needs to be called ASAP, before anything async happens */
function preInit() {
    try {
        const domain = getDomain();
        log("Session ID:", getSessionId());
        initInterface();
        setLogLevel(defaultLogLevel);
        if (domain === "ytm")
            initBeforeUnloadHook();
        init();
    }
    catch (err) {
        return error("Fatal pre-init error:", err);
    }
}
//#region init
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        try {
            const domain = getDomain();
            const features = yield initConfig();
            setLogLevel(features.logLevel);
            yield initLyricsCache();
            yield initTranslations((_a = features.locale) !== null && _a !== void 0 ? _a : "en_US");
            setLocale((_b = features.locale) !== null && _b !== void 0 ? _b : "en_US");
            emitInterface("bytm:registerPlugins");
            if (features.disableBeforeUnloadPopup && domain === "ytm")
                disableBeforeUnload();
            if (!domLoaded)
                document.addEventListener("DOMContentLoaded", onDomLoad, { once: true });
            else
                onDomLoad();
            if (features.rememberSongTime)
                initRememberSongTime();
        }
        catch (err) {
            error("Fatal error:", err);
        }
    });
}
//#region onDomLoad
/** Called when the DOM has finished loading and can be queried and altered by the userscript */
function onDomLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        const domain = getDomain();
        const features = getFeatures();
        const ftInit = [];
        try {
            initObservers();
            yield Promise.allSettled([
                insertGlobalStyle(),
                initVersionCheck(),
            ]);
        }
        catch (err) {
            error("Fatal error in feature pre-init:", err);
            return;
        }
        log(`DOM loaded and feature pre-init finished, now initializing all features for domain "${domain}"...`);
        try {
            if (domain === "ytm") {
                //#region (ytm) misc
                ftInit.push(["initSiteEvents", initSiteEvents()]);
                //#region (ytm) welcome dlg
                if (typeof (yield GM.getValue("bytm-installed")) !== "string") {
                    // open welcome menu with language selector
                    const dlg = yield getWelcomeDialog();
                    dlg.on("close", () => GM.setValue("bytm-installed", JSON.stringify({ timestamp: Date.now(), version: scriptInfo.version })));
                    yield dlg.mount();
                    info("Showing welcome menu");
                    yield dlg.open();
                }
                //#region (ytm) layout
                if (features.watermarkEnabled)
                    ftInit.push(["addWatermark", addWatermark()]);
                if (features.fixSpacing)
                    ftInit.push(["fixSpacing", fixSpacing()]);
                if (features.removeUpgradeTab)
                    ftInit.push(["removeUpgradeTab", removeUpgradeTab()]);
                ftInit.push(["thumbnailOverlay", initThumbnailOverlay()]);
                if (features.hideCursorOnIdle)
                    ftInit.push(["hideCursorOnIdle", initHideCursorOnIdle()]);
                if (features.fixHdrIssues)
                    ftInit.push(["fixHdrIssues", fixHdrIssues()]);
                //#region (ytm) volume
                ftInit.push(["volumeFeatures", initVolumeFeatures()]);
                //#region (ytm) song lists
                if (features.lyricsQueueButton || features.deleteFromQueueButton)
                    ftInit.push(["queueButtons", initQueueButtons()]);
                ftInit.push(["aboveQueueBtns", initAboveQueueBtns()]);
                //#region (ytm) behavior
                if (features.closeToastsTimeout > 0)
                    ftInit.push(["autoCloseToasts", initAutoCloseToasts()]);
                //#region (ytm) input
                ftInit.push(["arrowKeySkip", initArrowKeySkip()]);
                if (features.anchorImprovements)
                    ftInit.push(["anchorImprovements", addAnchorImprovements()]);
                ftInit.push(["numKeysSkip", initNumKeysSkip()]);
                //#region (ytm) lyrics
                if (features.geniusLyrics)
                    ftInit.push(["playerBarLyricsBtn", addPlayerBarLyricsBtn()]);
            }
            //#region (ytm+yt) cfg menu option
            try {
                if (domain === "ytm") {
                    addSelectorListener("body", "tp-yt-iron-dropdown #contentWrapper ytd-multi-page-menu-renderer #container.menu-container", {
                        listener: addConfigMenuOptionYTM,
                    });
                }
                else if (domain === "yt") {
                    addSelectorListener("ytGuide", "#sections ytd-guide-section-renderer:nth-child(5) #items ytd-guide-entry-renderer:nth-child(1)", {
                        listener: (el) => el.parentElement && addConfigMenuOptionYT(el.parentElement),
                    });
                }
            }
            catch (err) {
                error("Couldn't add config menu option:", err);
            }
            if (["ytm", "yt"].includes(domain)) {
                //#region (ytm+yt) layout
                if (features.disableDarkReaderSites !== "none")
                    disableDarkReader();
                if (features.removeShareTrackingParamSites && (features.removeShareTrackingParamSites === domain || features.removeShareTrackingParamSites === "all"))
                    ftInit.push(["initRemShareTrackParam", initRemShareTrackParam()]);
                //#region (ytm+yt) input
                ftInit.push(["siteSwitch", initSiteSwitch(domain)]);
                if (getFeatures().autoLikeChannels)
                    ftInit.push(["autoLikeChannels", initAutoLikeChannels()]);
            }
            emitInterface("bytm:featureInitStarted");
            try {
                initPlugins();
            }
            catch (err) {
                error("Plugin loading error:", err);
                emitInterface("bytm:fatalError", "Error while loading plugins");
            }
            const initStartTs = Date.now();
            // wait for feature init or timeout (in case an init function is hung up on a promise)
            yield Promise.race([
                UserUtils.pauseFor(getFeatures().initTimeout > 0 ? getFeatures().initTimeout * 1000 : 8000),
                Promise.allSettled(ftInit.map(([name, prom]) => new Promise((res) => __awaiter(this, void 0, void 0, function* () {
                    const v = yield prom;
                    emitInterface("bytm:featureInitialized", name);
                    res(v);
                })))),
            ]);
            emitInterface("bytm:ready");
            info(`Done initializing all ${ftInit.length} features after ${Math.floor(Date.now() - initStartTs)}ms`);
            try {
                registerDevMenuCommands();
            }
            catch (e) {
                warn("Couldn't register dev menu commands:", e);
            }
        }
        catch (err) {
            error("Feature error:", err);
            emitInterface("bytm:fatalError", "Error while initializing features");
        }
    });
}
//#region insert css bundle
/** Inserts the bundled CSS files imported throughout the script into a <style> element in the <head> */
function insertGlobalStyle() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(yield addStyleFromResource("css-bundle")))
            error("Couldn't add global CSS bundle due to an error");
    });
}
//#region dev menu cmds
/** Registers dev commands using `GM.registerMenuCommand` */
function registerDevMenuCommands() {
    if (mode !== "development")
        return;
    GM.registerMenuCommand("Reset config", () => __awaiter(this, void 0, void 0, function* () {
        if (confirm("Reset the configuration to its default values?\nThis will automatically reload the page.")) {
            yield clearConfig();
            disableBeforeUnload();
            location.reload();
        }
    }), "r");
    GM.registerMenuCommand("Fix missing config values", () => __awaiter(this, void 0, void 0, function* () {
        const oldFeats = JSON.parse(JSON.stringify(getFeatures()));
        yield setFeatures(fixMissingCfgKeys(oldFeats));
        console.log("Fixed missing config values.\nFrom:", oldFeats, "\n\nTo:", getFeatures());
        if (confirm("All missing or invalid config values were set to their default values.\nReload the page now?"))
            location.reload();
    }));
    GM.registerMenuCommand("List GM values in console with decompression", () => __awaiter(this, void 0, void 0, function* () {
        const keys = yield GM.listValues();
        console.log(`GM values (${keys.length}):`);
        if (keys.length === 0)
            console.log("  No values found.");
        const values = {};
        let longestKey = 0;
        for (const key of keys) {
            const isEncoded = key.startsWith("_uucfg-") ? yield GM.getValue(`_uucfgenc-${key.substring(7)}`, false) : false;
            const val = yield GM.getValue(key, undefined);
            values[key] = typeof val !== "undefined" && isEncoded ? yield UserUtils.decompress(val, compressionFormat, "string") : val;
            longestKey = Math.max(longestKey, key.length);
        }
        for (const [key, finalVal] of Object.entries(values)) {
            const isEncoded = key.startsWith("_uucfg-") ? yield GM.getValue(`_uucfgenc-${key.substring(7)}`, false) : false;
            const lengthStr = String(finalVal).length > 50 ? `(${String(finalVal).length} chars) ` : "";
            console.log(`  "${key}"${" ".repeat(longestKey - key.length)} -${isEncoded ? "-[decoded]-" : ""}> ${lengthStr}${finalVal}`);
        }
    }), "l");
    GM.registerMenuCommand("List GM values in console, without decompression", () => __awaiter(this, void 0, void 0, function* () {
        const keys = yield GM.listValues();
        console.log(`GM values (${keys.length}):`);
        if (keys.length === 0)
            console.log("  No values found.");
        const values = {};
        let longestKey = 0;
        for (const key of keys) {
            const val = yield GM.getValue(key, undefined);
            values[key] = val;
            longestKey = Math.max(longestKey, key.length);
        }
        for (const [key, val] of Object.entries(values)) {
            const lengthStr = String(val).length >= 16 ? `(${String(val).length} chars) ` : "";
            console.log(`  "${key}"${" ".repeat(longestKey - key.length)} -> ${lengthStr}${val}`);
        }
    }));
    GM.registerMenuCommand("Delete all GM values", () => __awaiter(this, void 0, void 0, function* () {
        const keys = yield GM.listValues();
        if (confirm(`Clear all ${keys.length} GM values?\nSee console for details.`)) {
            console.log(`Clearing ${keys.length} GM values:`);
            if (keys.length === 0)
                console.log("  No values found.");
            for (const key of keys) {
                yield GM.deleteValue(key);
                console.log(`  Deleted ${key}`);
            }
        }
    }), "d");
    GM.registerMenuCommand("Delete GM values by name (comma separated)", () => __awaiter(this, void 0, void 0, function* () {
        var _a;
        const keys = prompt("Enter the name(s) of the GM value to delete (comma separated).\nEmpty input cancels the operation.");
        if (!keys)
            return;
        for (const key of (_a = keys === null || keys === void 0 ? void 0 : keys.split(",")) !== null && _a !== void 0 ? _a : []) {
            if (key && key.length > 0) {
                const truncLength = 400;
                const oldVal = yield GM.getValue(key);
                yield GM.deleteValue(key);
                console.log(`Deleted GM value '${key}' with previous value '${oldVal && String(oldVal).length > truncLength ? String(oldVal).substring(0, truncLength) + `… (${String(oldVal).length} / ${truncLength} chars.)` : oldVal}'`);
            }
        }
    }), "n");
    GM.registerMenuCommand("Reset install timestamp", () => __awaiter(this, void 0, void 0, function* () {
        yield GM.deleteValue("bytm-installed");
        console.log("Reset install time.");
    }), "t");
    GM.registerMenuCommand("Reset version check timestamp", () => __awaiter(this, void 0, void 0, function* () {
        yield GM.deleteValue("bytm-version-check");
        console.log("Reset version check time.");
    }), "v");
    GM.registerMenuCommand("List active selector listeners in console", () => __awaiter(this, void 0, void 0, function* () {
        const lines = [];
        let listenersAmt = 0;
        for (const [obsName, obs] of Object.entries(globservers)) {
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
        console.log(`Showing currently active listeners for ${Object.keys(globservers).length} observers with ${listenersAmt} total listeners:\n${lines.join("\n")}`);
    }), "s");
    GM.registerMenuCommand("Compress value", () => __awaiter(this, void 0, void 0, function* () {
        const input = prompt("Enter the value to compress.\nSee console for output.");
        if (input && input.length > 0) {
            const compressed = yield UserUtils.compress(input, compressionFormat);
            console.log(`Compression result (${input.length} chars -> ${compressed.length} chars)\nValue: ${compressed}`);
        }
    }));
    GM.registerMenuCommand("Decompress value", () => __awaiter(this, void 0, void 0, function* () {
        const input = prompt("Enter the value to decompress.\nSee console for output.");
        if (input && input.length > 0) {
            const decompressed = yield UserUtils.decompress(input, compressionFormat);
            console.log(`Decompresion result (${input.length} chars -> ${decompressed.length} chars)\nValue: ${decompressed}`);
        }
    }));
    log("Registered dev menu commands");
}
preInit();})(UserUtils,compareVersions,marked,Fuse);//# sourceMappingURL=http://localhost:8710/BetterYTM.user.js.map
