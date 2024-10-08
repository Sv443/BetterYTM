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
// @icon              https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/images/logo/logo_dev_48.png
// @match             https://music.youtube.com/*
// @match             https://www.youtube.com/*
// @run-at            document-start
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
// @resource          css-bundle              https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/dist/BetterYTM.css
// @resource          css-above_queue_btns    https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/style/aboveQueueBtns.css
// @resource          css-anchor_improvements https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/style/anchorImprovements.css
// @resource          css-fix_hdr             https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/style/fixHDR.css
// @resource          css-fix_spacing         https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/style/fixSpacing.css
// @resource          css-show_votes          https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/style/showVotes.css
// @resource          css-vol_slider_size     https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/style/volSliderSize.css
// @resource          doc-changelog           https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/changelog.md
// @resource          icon-advanced_mode      https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/icons/plus_circle_small.svg
// @resource          icon-arrow_down         https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/icons/arrow_down.svg
// @resource          icon-auto_like_enabled  https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/icons/auto_like_enabled.svg
// @resource          icon-auto_like          https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/icons/auto_like.svg
// @resource          icon-clear_list         https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/icons/clear_list.svg
// @resource          icon-delete             https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/icons/delete.svg
// @resource          icon-edit               https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/icons/edit.svg
// @resource          icon-error              https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/icons/error.svg
// @resource          icon-experimental       https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/icons/beaker_small.svg
// @resource          icon-globe_small        https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/icons/globe_small.svg
// @resource          icon-globe              https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/icons/globe.svg
// @resource          icon-help               https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/icons/help.svg
// @resource          icon-image_filled       https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/icons/image_filled.svg
// @resource          icon-image              https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/icons/image.svg
// @resource          icon-link               https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/icons/link.svg
// @resource          icon-lyrics             https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/icons/lyrics.svg
// @resource          icon-reload             https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/icons/refresh.svg
// @resource          icon-skip_to            https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/icons/skip_to.svg
// @resource          icon-spinner            https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/icons/spinner.svg
// @resource          img-close               https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/images/close.png
// @resource          img-discord             https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/images/external/discord.png
// @resource          img-github              https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/images/external/github.png
// @resource          img-greasyfork          https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/images/external/greasyfork.png
// @resource          img-logo_dev            https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/images/logo/logo_dev_48.png
// @resource          img-logo                https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/images/logo/logo_48.png
// @resource          img-openuserjs          https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/images/external/openuserjs.png
// @resource          trans-de_DE             https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/translations/de_DE.json
// @resource          trans-en_US             https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/translations/en_US.json
// @resource          trans-en_UK             https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/translations/en_UK.json
// @resource          trans-es_ES             https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/translations/es_ES.json
// @resource          trans-fr_FR             https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/translations/fr_FR.json
// @resource          trans-hi_IN             https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/translations/hi_IN.json
// @resource          trans-ja_JA             https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/translations/ja_JA.json
// @resource          trans-pt_BR             https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/translations/pt_BR.json
// @resource          trans-zh_CN             https://raw.githubusercontent.com/Sv443/BetterYTM/7712b85a/assets/translations/zh_CN.json
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
};// I know TS enums are impure but it doesn't really matter here, plus imo they are cooler than pure enums anyway
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
    /** Plugin can read and write auto-like data */
    PluginIntent[PluginIntent["ReadAndWriteAutoLikeData"] = 32] = "ReadAndWriteAutoLikeData";
})(PluginIntent || (PluginIntent = {}));const modeRaw = "development";
const branchRaw = "develop";
const hostRaw = "github";
const buildNumberRaw = "7712b85a";
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
/** URL search parameters at the earliest possible time */
const initialParams = new URL(location.href).searchParams;
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
    if (entry && Date.now() - (entry === null || entry === void 0 ? void 0 : entry.added) > getFeature("lyricsCacheTTL") * 1000 * 60 * 60 * 24) {
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
    cache.splice(getFeature("lyricsCacheMaxSize"));
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
    cache.splice(getFeature("lyricsCacheMaxSize"));
    log("Added penalized cache entry for", artist, "-", song, "with penalty fraction", penaltyFr, "\n", entry);
    emitInterface("bytm:lyricsCacheEntryAdded", { entry, type: "penalized" });
    return lyricsCacheMgr.setData({ cache });
}let createNanoEvents = () => ({
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
});/** Class that can be extended or instantiated by itself to create an event emitter with helper methods and a strongly typed event map */
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
                unsub();
                cb === null || cb === void 0 ? void 0 : cb(...args);
                resolve(args);
            });
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
            bgElem.classList.add("bytm-dialog-bg");
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
            var _a, _b, _c;
            e === null || e === void 0 ? void 0 : e.preventDefault();
            e === null || e === void 0 ? void 0 : e.stopImmediatePropagation();
            if (this.isOpen())
                return;
            this.dialogOpen = true;
            if (openDialogs.includes(this.id))
                throw new Error(`A dialog with the same ID of '${this.id}' already exists and is open!`);
            if (!this.isMounted())
                yield this.mount();
            const dialogBg = document.querySelector(`#bytm-${this.id}-dialog-bg`);
            if (!dialogBg)
                return warn(`Couldn't find background element for dialog with ID '${this.id}'`);
            dialogBg.style.visibility = "visible";
            dialogBg.style.display = "block";
            dialogBg.inert = false;
            currentDialogId = this.id;
            openDialogs.unshift(this.id);
            // make sure all other dialogs are inert
            for (const dialogId of openDialogs) {
                if (dialogId !== this.id) {
                    // special treatment for the old config menu, as always
                    if (dialogId === "cfg-menu")
                        (_a = document.querySelector("#bytm-cfg-menu-bg")) === null || _a === void 0 ? void 0 : _a.setAttribute("inert", "true");
                    else
                        (_b = document.querySelector(`#bytm-${dialogId}-dialog-bg`)) === null || _b === void 0 ? void 0 : _b.setAttribute("inert", "true");
                }
            }
            // make sure body is inert and scroll is locked
            document.body.classList.add("bytm-disable-scroll");
            (_c = document.querySelector(getDomain() === "ytm" ? "ytmusic-app" : "ytd-app")) === null || _c === void 0 ? void 0 : _c.setAttribute("inert", "true");
            this.events.emit("open");
            emitInterface("bytm:dialogOpened", this);
            emitInterface(`bytm:dialogOpened:${this.id}`, this);
            return dialogBg;
        });
    }
    /** Closes the dialog - prevents default action and immediate propagation of the passed event */
    close(e) {
        var _a, _b, _c, _d;
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
        openDialogs.splice(openDialogs.indexOf(this.id), 1);
        currentDialogId = (_a = openDialogs[0]) !== null && _a !== void 0 ? _a : null;
        // make sure the new top-most dialog is not inert
        if (currentDialogId) {
            // special treatment for the old config menu, as always
            if (currentDialogId === "cfg-menu")
                (_b = document.querySelector("#bytm-cfg-menu-bg")) === null || _b === void 0 ? void 0 : _b.removeAttribute("inert");
            else
                (_c = document.querySelector(`#bytm-${currentDialogId}-dialog-bg`)) === null || _c === void 0 ? void 0 : _c.removeAttribute("inert");
        }
        // remove the scroll lock and inert attribute on the body if no dialogs are open
        if (openDialogs.length === 0) {
            document.body.classList.remove("bytm-disable-scroll");
            (_d = document.querySelector(getDomain() === "ytm" ? "ytmusic-app" : "ytd-app")) === null || _d === void 0 ? void 0 : _d.removeAttribute("inert");
        }
        this.events.emit("close");
        emitInterface("bytm:dialogClosed", this);
        emitInterface(`bytm:dialogClosed:${this.id}`, this);
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
            dialogWrapperEl.classList.add("bytm-dialog");
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
 * Creates an element with a ripple effect on click.
 * @param clickEl If passed, this element will be modified to have the ripple effect. Otherwise, a new element will be created.
 * @returns The passed element or the newly created element with the ripple effect.
 */
function createRipple(rippleElement, properties) {
    const props = Object.assign({ speed: "normal" }, properties);
    const rippleEl = rippleElement !== null && rippleElement !== void 0 ? rippleElement : document.createElement("div");
    rippleEl.classList.add("bytm-ripple", props.speed);
    const updateRippleWidth = () => rippleEl.style.setProperty("--bytm-ripple-cont-width", `${rippleEl.clientWidth}px`);
    rippleEl.addEventListener("mousedown", (e) => {
        updateRippleWidth();
        const x = e.clientX - rippleEl.getBoundingClientRect().left;
        const y = e.clientY - rippleEl.getBoundingClientRect().top;
        const rippleAreaEl = document.createElement("span");
        rippleAreaEl.classList.add("bytm-ripple-area");
        rippleAreaEl.style.left = `${x}px`;
        rippleAreaEl.style.top = `${y}px`;
        if (rippleEl.firstChild)
            rippleEl.insertBefore(rippleAreaEl, rippleEl.firstChild);
        else
            rippleEl.appendChild(rippleAreaEl);
        rippleAreaEl.addEventListener("animationend", () => rippleAreaEl.remove());
    });
    updateRippleWidth();
    return rippleEl;
}/**
 * Creates a generic, circular button element.
 * If `href` is provided, the button will be an anchor element.
 * If `onClick` is provided, the button will be a div element.
 * Provide either `resourceName` or `src` to specify the icon inside the button.
 */
function createCircularBtn(_a) {
    return __awaiter(this, void 0, void 0, function* () {
        var { title, ripple = true } = _a, rest = __rest(_a, ["title", "ripple"]);
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
        imgElem.src = "src" in rest
            ? rest.src instanceof Promise
                ? yield rest.src
                : rest.src
            : yield getResourceUrl(rest.resourceName);
        btnElem.appendChild(imgElem);
        return ripple ? createRipple(btnElem) : btnElem;
    });
}const interactionKeys = ["Enter", " ", "Space"];
/**
 * Adds generic, accessible interaction listeners to the passed element.
 * All listeners have the default behavior prevented and stop propagation (for keyboard events only as long as the captured key is valid).
 * @param listenerOptions Provide a {@linkcode listenerOptions} object to configure the listeners
 */
function onInteraction(elem, listener, listenerOptions) {
    const _a = listenerOptions !== null && listenerOptions !== void 0 ? listenerOptions : {}, { preventDefault = true, stopPropagation = true } = _a, listenerOpts = __rest(_a, ["preventDefault", "stopPropagation"]);
    const proxListener = (e) => {
        if (e instanceof KeyboardEvent) {
            if (interactionKeys.includes(e.key)) {
                preventDefault && e.preventDefault();
                stopPropagation && e.stopPropagation();
            }
            else
                return;
        }
        else if (e instanceof MouseEvent) {
            preventDefault && e.preventDefault();
            stopPropagation && e.stopPropagation();
        }
        // clean up the other listener that isn't automatically removed if `once` is set
        (listenerOpts === null || listenerOpts === void 0 ? void 0 : listenerOpts.once) && e.type === "keydown" && elem.removeEventListener("click", proxListener, listenerOpts);
        (listenerOpts === null || listenerOpts === void 0 ? void 0 : listenerOpts.once) && e.type === "click" && elem.removeEventListener("keydown", proxListener, listenerOpts);
        listener(e);
    };
    elem.addEventListener("click", proxListener, listenerOpts);
    elem.addEventListener("keydown", proxListener, listenerOpts);
}//#region class
/** Generic dialog for exporting and importing any string of data */
class ExImDialog extends BytmDialog {
    constructor(options) {
        super(Object.assign({ renderHeader: () => ExImDialog.renderHeader(options), renderBody: () => ExImDialog.renderBody(options), closeOnBgClick: true, closeOnEscPress: true, closeBtnEnabled: true, unmountOnClose: true, small: true }, options));
        Object.defineProperty(this, "mode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "export"
        });
    }
    //#region header
    static renderHeader(opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const headerEl = document.createElement("h2");
            headerEl.classList.add("bytm-menu-title");
            headerEl.role = "heading";
            headerEl.ariaLevel = "1";
            headerEl.tabIndex = 0;
            headerEl.textContent = headerEl.ariaLabel = t(opts.trKeyTitle, scriptInfo.name);
            return headerEl;
        });
    }
    //#region body
    static renderBody(opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const panesCont = document.createElement("div");
            panesCont.classList.add("bytm-exim-dialog-panes-cont");
            //#region export
            const exportPane = document.createElement("div");
            exportPane.classList.add("bytm-exim-dialog-pane", "export");
            {
                const descEl = document.createElement("p");
                descEl.classList.add("bytm-exim-dialog-desc");
                descEl.role = "note";
                descEl.tabIndex = 0;
                descEl.textContent = descEl.ariaLabel = t(opts.trKeyDescExport);
                const dataEl = document.createElement("textarea");
                dataEl.classList.add("bytm-exim-dialog-data");
                dataEl.readOnly = true;
                dataEl.tabIndex = 0;
                dataEl.value = t("click_to_reveal");
                onInteraction(dataEl, () => __awaiter(this, void 0, void 0, function* () {
                    dataEl.value = typeof opts.exportData === "function" ? yield opts.exportData() : opts.exportData;
                }));
                const exportCenterBtnCont = document.createElement("div");
                exportCenterBtnCont.classList.add("bytm-exim-dialog-center-btn-cont");
                const copyBtn = createRipple(yield createLongBtn({
                    title: t("copy_hidden_value"),
                    text: t("copy"),
                    resourceName: "icon-experimental",
                    onClick(_a) {
                        return __awaiter(this, arguments, void 0, function* ({ shiftKey }) {
                            const copyData = shiftKey && opts.exportDataSpecial ? opts.exportDataSpecial : opts.exportData;
                            copyToClipboard(typeof copyData === "function" ? yield copyData() : copyData);
                            yield showToast({ message: t("copied_to_clipboard") });
                        });
                    },
                }));
                exportCenterBtnCont.appendChild(copyBtn);
                exportPane.append(descEl, dataEl, exportCenterBtnCont);
            }
            //#region import
            const importPane = document.createElement("div");
            importPane.classList.add("bytm-exim-dialog-pane", "import");
            {
                const descEl = document.createElement("p");
                descEl.classList.add("bytm-exim-dialog-desc");
                descEl.role = "note";
                descEl.tabIndex = 0;
                descEl.textContent = descEl.ariaLabel = t(opts.trKeyDescImport);
                const dataEl = document.createElement("textarea");
                dataEl.classList.add("bytm-exim-dialog-data");
                dataEl.tabIndex = 0;
                const importCenterBtnCont = document.createElement("div");
                importCenterBtnCont.classList.add("bytm-exim-dialog-center-btn-cont");
                const importBtn = createRipple(yield createLongBtn({
                    title: t("start_import_tooltip"),
                    text: t("import"),
                    resourceName: "icon-experimental",
                    onClick: () => opts.onImport(dataEl.value),
                }));
                importCenterBtnCont.appendChild(importBtn);
                importPane.append(descEl, dataEl, importCenterBtnCont);
            }
            panesCont.append(exportPane, importPane);
            return panesCont;
        });
    }
}/** EventEmitter instance that is used to detect various changes to the site and userscript */
const siteEvents = new NanoEmitter({
    publicEmit: true,
});
let observers = [];
let lastWatchId = null;
let lastPathname = null;
let lastFullscreen;
/** Creates MutationObservers that check if parts of the site have changed, then emit an event on the `siteEvents` instance. */
function initSiteEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (getDomain() === "ytm") {
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
                        runIntervalChecks();
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
            }
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
}
//#region other
/** Periodically called to check for changes in the URL and emit associated siteEvents */
function runIntervalChecks() {
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
        var { title, text, iconPosition, ripple } = _a, rest = __rest(_a, ["title", "text", "iconPosition", "ripple"]);
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
        const imgElem = document.createElement("src" in rest ? "img" : "div");
        imgElem.classList.add("bytm-generic-btn-img", iconPosition !== null && iconPosition !== void 0 ? iconPosition : "left");
        if ("src" in rest)
            imgElem.src = rest.src;
        else
            imgElem.innerHTML = (_b = yield resourceToHTMLString(rest.resourceName)) !== null && _b !== void 0 ? _b : "";
        const txtElem = document.createElement("span");
        txtElem.classList.add("bytm-generic-long-btn-txt", "bytm-no-select");
        txtElem.textContent = txtElem.ariaLabel = text;
        iconPosition === "left" || !iconPosition && btnElem.appendChild(imgElem);
        btnElem.appendChild(txtElem);
        iconPosition === "right" && btnElem.appendChild(imgElem);
        return ripple ? createRipple(btnElem, { speed: "normal" }) : btnElem;
    });
}let timeout;
/** Shows a toast message with an icon */
function showIconToast(_a) {
    return __awaiter(this, void 0, void 0, function* () {
        var { duration = getFeature("toastDuration"), position = "tr" } = _a, rest = __rest(_a, ["duration", "position"]);
        if (duration <= 0)
            return info("Toast duration is <= 0, so it won't be shown");
        const toastWrapper = document.createElement("div");
        toastWrapper.classList.add("bytm-toast-flex-wrapper");
        if ("iconSrc" in rest) {
            const toastIcon = document.createElement("img");
            toastIcon.classList.add("bytm-toast-icon", "img");
            toastIcon.src = rest.iconSrc instanceof Promise ? yield rest.iconSrc : rest.iconSrc;
            toastWrapper.appendChild(toastIcon);
        }
        else {
            const toastIcon = document.createElement("div");
            toastIcon.classList.add("bytm-toast-icon");
            const iconHtml = yield resourceToHTMLString(rest.icon);
            if (iconHtml)
                toastIcon.innerHTML = iconHtml;
            toastWrapper.appendChild(toastIcon);
        }
        const toastMessage = document.createElement("div");
        toastMessage.classList.add("bytm-toast-message");
        if ("message" in rest)
            toastMessage.textContent = rest.message;
        else
            toastMessage.appendChild(rest.element);
        toastWrapper.appendChild(toastMessage);
        yield showToast({
            duration,
            position,
            element: toastWrapper,
            title: "message" in rest ? rest.message : rest.title,
        });
    });
}
/** Shows a toast message in the top right corner of the screen by default */
function showToast(_a) {
    return __awaiter(this, void 0, void 0, function* () {
        var { duration = getFeature("toastDuration"), position = "tr" } = _a, rest = __rest(_a, ["duration", "position"]);
        if (duration <= 0)
            return info("Toast duration is <= 0, so it won't be shown");
        const toastEl = document.querySelector("#bytm-toast");
        if (toastEl)
            yield closeToast();
        const toastElem = document.createElement("div");
        toastElem.id = "bytm-toast";
        toastElem.role = "alert";
        toastElem.ariaLive = "polite";
        toastElem.ariaAtomic = "true";
        toastElem.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () { return yield closeToast(); }), { once: true });
        if ("message" in rest)
            toastElem.title = toastElem.ariaLabel = toastElem.textContent = rest.message;
        else {
            toastElem.appendChild(rest.element);
            toastElem.title = toastElem.ariaLabel = rest.title;
        }
        document.body.appendChild(toastElem);
        yield UserUtils.pauseFor(100);
        toastElem.classList.add("visible", `pos-${position}`);
        timeout = setTimeout(() => __awaiter(this, void 0, void 0, function* () { return yield closeToast(); }), duration * 1000);
    });
}
/** Closes the currently open toast */
function closeToast() {
    return __awaiter(this, void 0, void 0, function* () {
        timeout && clearTimeout(timeout);
        const toastEls = document.querySelectorAll("#bytm-toast");
        if (toastEls.length === 0)
            return;
        yield Promise.allSettled(Array.from(toastEls).map((toastEl) => __awaiter(this, void 0, void 0, function* () {
            toastEl.classList.remove("visible");
            yield UserUtils.pauseFor(300);
            toastEl.remove();
            yield UserUtils.pauseFor(100);
        })));
    });
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
}let autoLikeDialog = null;
let autoLikeImExDialog = null;
/** Creates and/or returns the import dialog */
function getAutoLikeDialog() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!autoLikeDialog) {
            yield initAutoLikeStore();
            autoLikeDialog = new BytmDialog({
                id: "auto-like-channels",
                width: 700,
                height: 1000,
                closeBtnEnabled: true,
                closeOnBgClick: true,
                closeOnEscPress: true,
                destroyOnClose: true,
                small: true,
                renderHeader: renderHeader$6,
                renderBody: renderBody$6,
                renderFooter: renderFooter$3,
            });
            siteEvents.on("autoLikeChannelsUpdated", () => __awaiter(this, void 0, void 0, function* () {
                if (autoLikeImExDialog === null || autoLikeImExDialog === void 0 ? void 0 : autoLikeImExDialog.isOpen())
                    autoLikeImExDialog.unmount();
                if (autoLikeDialog === null || autoLikeDialog === void 0 ? void 0 : autoLikeDialog.isOpen()) {
                    autoLikeDialog.unmount();
                    yield autoLikeDialog.open();
                    log("Auto-like channels updated, refreshed dialog");
                }
            }));
        }
        if (!autoLikeImExDialog) {
            autoLikeImExDialog = new ExImDialog({
                id: "auto-like-channels-import-export",
                width: 800,
                height: 600,
                // try to compress the data if possible
                exportData: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield compressionSupported())
                        ? yield UserUtils.compress(JSON.stringify(autoLikeStore.getData()), compressionFormat, "string")
                        : JSON.stringify(autoLikeStore.getData());
                }),
                // copy plain when shift-clicking the copy button
                exportDataSpecial: () => JSON.stringify(autoLikeStore.getData()),
                onImport: (data) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        const parsed = yield tryToDecompressAndParse(data);
                        if (!parsed || typeof parsed !== "object")
                            return alert(t("import_error_invalid"));
                        if (!parsed.channels || typeof parsed.channels !== "object" || Object.keys(parsed.channels).length === 0)
                            return alert(t("import_error_no_data"));
                        yield autoLikeStore.setData(parsed);
                        siteEvents.emit("autoLikeChannelsUpdated");
                        showToast({ message: t("import_success") });
                        autoLikeImExDialog === null || autoLikeImExDialog === void 0 ? void 0 : autoLikeImExDialog.unmount();
                    }
                    catch (err) {
                        error("Couldn't import auto-like channels data:", err);
                    }
                }),
                trKeyTitle: "auto_like_export_import_title",
                trKeyDescImport: "auto_like_import_desc",
                trKeyDescExport: "auto_like_export_desc",
                dataHidden: false,
            });
        }
        return autoLikeDialog;
    });
}
//#region header
function renderHeader$6() {
    return __awaiter(this, void 0, void 0, function* () {
        const headerEl = document.createElement("h2");
        headerEl.classList.add("bytm-dialog-title");
        headerEl.role = "heading";
        headerEl.ariaLevel = "1";
        headerEl.tabIndex = 0;
        headerEl.textContent = headerEl.ariaLabel = t("auto_like_channels_dialog_title");
        return headerEl;
    });
}
//#region body
function renderBody$6() {
    return __awaiter(this, void 0, void 0, function* () {
        const contElem = document.createElement("div");
        const descriptionEl = document.createElement("p");
        descriptionEl.classList.add("bytm-auto-like-channels-desc");
        descriptionEl.textContent = t("auto_like_channels_dialog_desc");
        descriptionEl.tabIndex = 0;
        contElem.appendChild(descriptionEl);
        const channelListCont = document.createElement("div");
        channelListCont.id = "bytm-auto-like-channels-list";
        const removeChannel = (id) => autoLikeStore.setData({
            channels: autoLikeStore.getData().channels.filter((ch) => ch.id !== id),
        });
        const setChannelEnabled = (id, enabled) => UserUtils.debounce(() => autoLikeStore.setData({
            channels: autoLikeStore.getData().channels
                .map((ch) => ch.id === id ? Object.assign(Object.assign({}, ch), { enabled }) : ch),
        }), 250, "rising");
        const sortedChannels = autoLikeStore
            .getData().channels
            .sort((a, b) => a.name.localeCompare(b.name));
        for (const { name: chanName, id: chanId, enabled } of sortedChannels) {
            const rowElem = document.createElement("div");
            rowElem.classList.add("bytm-auto-like-channel-row");
            const leftCont = document.createElement("div");
            leftCont.classList.add("bytm-auto-like-channel-row-left-cont");
            const nameLabelEl = document.createElement("label");
            nameLabelEl.ariaLabel = nameLabelEl.title = chanName;
            nameLabelEl.htmlFor = `bytm-auto-like-channel-list-toggle-${chanId}`;
            nameLabelEl.classList.add("bytm-auto-like-channel-name-label");
            const nameElem = document.createElement("a");
            nameElem.classList.add("bytm-auto-like-channel-name", "bytm-link");
            nameElem.ariaLabel = nameElem.textContent = chanName;
            nameElem.href = (!chanId.startsWith("@") && getDomain() === "ytm")
                ? `https://music.youtube.com/channel/${chanId}`
                : `https://youtube.com/${chanId.startsWith("@") ? chanId : `channel/${chanId}`}`;
            nameElem.target = "_blank";
            nameElem.rel = "noopener noreferrer";
            nameElem.tabIndex = 0;
            const idElem = document.createElement("span");
            idElem.classList.add("bytm-auto-like-channel-id");
            idElem.textContent = idElem.title = chanId;
            nameLabelEl.appendChild(nameElem);
            nameLabelEl.appendChild(idElem);
            const toggleElem = yield createToggleInput({
                id: `bytm-auto-like-channel-list-toggle-${chanId}`,
                labelPos: "off",
                initialValue: enabled,
                onChange: (en) => setChannelEnabled(chanId, en),
            });
            toggleElem.classList.add("bytm-auto-like-channel-toggle");
            const btnCont = document.createElement("div");
            btnCont.classList.add("bytm-auto-like-channel-row-btn-cont");
            const editBtn = yield createCircularBtn({
                resourceName: "icon-edit",
                title: t("edit_entry"),
                onClick() {
                    return __awaiter(this, void 0, void 0, function* () {
                        var _a, _b, _c;
                        const newNamePr = (_a = prompt(t("auto_like_channel_edit_name_prompt"), chanName)) === null || _a === void 0 ? void 0 : _a.trim();
                        if (!newNamePr || newNamePr.length === 0)
                            return;
                        const newName = newNamePr.length > 0 ? newNamePr : chanName;
                        const newIdPr = (_b = prompt(t("auto_like_channel_edit_id_prompt"), chanId)) === null || _b === void 0 ? void 0 : _b.trim();
                        if (!newIdPr || newIdPr.length === 0)
                            return;
                        const newId = newIdPr.length > 0 ? (_c = getChannelIdFromPrompt(newIdPr)) !== null && _c !== void 0 ? _c : chanId : chanId;
                        yield autoLikeStore.setData({
                            channels: autoLikeStore.getData().channels
                                .map((ch) => ch.id === chanId ? Object.assign(Object.assign({}, ch), { name: newName, id: newId }) : ch),
                        });
                        siteEvents.emit("autoLikeChannelsUpdated");
                    });
                },
            });
            btnCont.appendChild(editBtn);
            const removeBtn = yield createCircularBtn({
                resourceName: "icon-delete",
                title: t("remove_entry"),
                onClick() {
                    return __awaiter(this, void 0, void 0, function* () {
                        yield removeChannel(chanId);
                        rowElem.remove();
                    });
                },
            });
            btnCont.appendChild(removeBtn);
            leftCont.appendChild(toggleElem);
            leftCont.appendChild(nameLabelEl);
            rowElem.appendChild(leftCont);
            rowElem.appendChild(btnCont);
            channelListCont.appendChild(rowElem);
        }
        contElem.appendChild(channelListCont);
        return contElem;
    });
}
//#region footer
function renderFooter$3() {
    const wrapperEl = document.createElement("div");
    wrapperEl.classList.add("bytm-auto-like-channels-footer-wrapper");
    const addNewBtnElem = document.createElement("button");
    addNewBtnElem.classList.add("bytm-btn");
    addNewBtnElem.textContent = t("new_entry");
    addNewBtnElem.ariaLabel = addNewBtnElem.title = t("new_entry_tooltip");
    wrapperEl.appendChild(addNewBtnElem);
    const importExportBtnElem = document.createElement("button");
    importExportBtnElem.classList.add("bytm-btn");
    importExportBtnElem.textContent = t("export_import");
    importExportBtnElem.ariaLabel = importExportBtnElem.title = t("auto_like_export_or_import_tooltip");
    wrapperEl.appendChild(importExportBtnElem);
    onInteraction(addNewBtnElem, addAutoLikeEntryPrompts);
    onInteraction(importExportBtnElem, openImportExportAutoLikeChannelsDialog);
    return wrapperEl;
}
function openImportExportAutoLikeChannelsDialog() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (autoLikeImExDialog === null || autoLikeImExDialog === void 0 ? void 0 : autoLikeImExDialog.open());
    });
}
//#region add prompt
function addAutoLikeEntryPrompts() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c;
        yield autoLikeStore.loadData();
        const idPrompt = (_a = prompt(t("add_auto_like_channel_id_prompt"))) === null || _a === void 0 ? void 0 : _a.trim();
        if (!idPrompt)
            return;
        const id = (_b = parseChannelIdFromUrl(idPrompt)) !== null && _b !== void 0 ? _b : (idPrompt.trim().startsWith("@") ? idPrompt.trim() : null);
        if (!id || id.length <= 0)
            return alert(t("add_auto_like_channel_invalid_id"));
        let overwriteName = false;
        if (autoLikeStore.getData().channels.some((ch) => ch.id === id)) {
            if (!confirm(t("add_auto_like_channel_already_exists_prompt_new_name")))
                return;
            overwriteName = true;
        }
        const name = (_c = prompt(t("add_auto_like_channel_name_prompt"))) === null || _c === void 0 ? void 0 : _c.trim();
        if (!name || name.length === 0)
            return;
        yield autoLikeStore.setData(overwriteName
            ? {
                channels: autoLikeStore.getData().channels
                    .map((ch) => ch.id === id ? Object.assign(Object.assign({}, ch), { name }) : ch),
            }
            : {
                channels: [
                    ...autoLikeStore.getData().channels,
                    { id, name, enabled: true },
                ],
            });
        siteEvents.emit("autoLikeChannelsUpdated");
        const unsub = autoLikeDialog === null || autoLikeDialog === void 0 ? void 0 : autoLikeDialog.on("clear", () => __awaiter(this, void 0, void 0, function* () {
            unsub === null || unsub === void 0 ? void 0 : unsub();
            yield (autoLikeDialog === null || autoLikeDialog === void 0 ? void 0 : autoLikeDialog.open());
        }));
        autoLikeDialog === null || autoLikeDialog === void 0 ? void 0 : autoLikeDialog.unmount();
    });
}
function getChannelIdFromPrompt(promptStr) {
    const isId = promptStr.match(/^@?.+$/);
    const isUrl = promptStr.match(/^(?:https?:\/\/)?(?:www\.)?(?:music\.)?youtube\.com\/(?:channel\/|@)([a-zA-Z0-9_-]+)/);
    const id = ((isId === null || isId === void 0 ? void 0 : isId[0]) || (isUrl === null || isUrl === void 0 ? void 0 : isUrl[1]) || "").trim();
    return id.length > 0 ? id : null;
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
        headerEl.tabIndex = 0;
        headerEl.textContent = headerEl.ariaLabel = t("changelog_menu_title", scriptInfo.name);
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
        headerEl.tabIndex = 0;
        headerEl.textContent = headerEl.ariaLabel = t("export_menu_title", scriptInfo.name);
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
        headerEl.tabIndex = 0;
        headerEl.textContent = headerEl.ariaLabel = t("import_menu_title", scriptInfo.name);
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
                const parsed = yield tryToDecompressAndParse(textAreaElem.value.trim());
                if (!parsed || typeof parsed !== "object")
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
	dev: "concurrently \"nodemon --exec pnpm run build-dev\" \"pnpm run serve\"",
	serve: "pnpm run node-ts ./src/tools/serve.ts",
	lint: "tsc --noEmit && eslint .",
	build: "rollup -c",
	"build-dev": "rollup -c --config-mode development --config-host github --config-branch develop --config-assetSource=local",
	"build-preview": "rollup -c --config-mode development --config-host github --config-branch develop",
	preview: "pnpm run build-preview && pnpm run serve --auto-exit=3",
	"build-prod": "pnpm run build-prod-gh && pnpm run build-prod-gf && pnpm run build-prod-oujs",
	"build-prod-base": "rollup -c --config-mode production --config-branch main",
	"build-prod-gh": "pnpm run build-prod-base --config-host github",
	"build-prod-gf": "pnpm run build-prod-base --config-host greasyfork --config-suffix _gf",
	"build-prod-oujs": "pnpm run build-prod-base --config-host openuserjs --config-suffix _oujs",
	"post-build": "pnpm run node-ts ./src/tools/post-build.ts",
	"tr-progress": "pnpm run node-ts ./src/tools/tr-progress.ts",
	"tr-format": "pnpm run node-ts ./src/tools/tr-format.ts",
	"tr-prep": "pnpm run tr-format -p",
	"gen-readme": "pnpm run node-ts ./src/tools/gen-readme.ts",
	"node-ts": "node --no-warnings=ExperimentalWarning --enable-source-maps --loader ts-node/esm",
	invisible: "node --enable-source-maps src/tools/run-invisible.mjs",
	test: "pnpm run node-ts ./test.ts",
	knip: "knip",
	storybook: "storybook dev -p 6006",
	"build-storybook": "storybook build"
};
var engines = {
	node: ">=19",
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
	"@chromatic-com/storybook": "^1.5.0",
	"@eslint/eslintrc": "^3.1.0",
	"@rollup/plugin-json": "^6.0.1",
	"@rollup/plugin-node-resolve": "^15.2.3",
	"@rollup/plugin-terser": "^0.4.4",
	"@rollup/plugin-typescript": "^11.1.5",
	"@storybook/addon-essentials": "^8.1.5",
	"@storybook/addon-interactions": "^8.1.5",
	"@storybook/addon-links": "^8.1.5",
	"@storybook/blocks": "^8.1.5",
	"@storybook/html": "^8.1.5",
	"@storybook/html-vite": "^8.1.5",
	"@storybook/test": "^8.1.5",
	"@types/express": "^4.17.17",
	"@types/greasemonkey": "^4.0.4",
	"@types/node": "^20.12.12",
	"@typescript-eslint/eslint-plugin": "^8.0.0-alpha.26",
	"@typescript-eslint/parser": "^8.0.0-alpha.26",
	"@typescript-eslint/utils": "^8.0.0-alpha.26",
	concurrently: "^8.1.0",
	dotenv: "^16.4.1",
	eslint: "^9.4.0",
	"eslint-plugin-storybook": "^0.9.0--canary.156.da7873a.0",
	express: "^4.18.2",
	knip: "^5.15.1",
	nodemon: "^3.0.1",
	pnpm: "^9.2.0",
	rollup: "^4.6.0",
	"rollup-plugin-execute": "^1.1.1",
	"rollup-plugin-import-css": "^3.3.5",
	storybook: "^8.1.5",
	"storybook-dark-mode": "^4.0.1",
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
		"dev/*",
		"*/stories/*"
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
        const logoEl = document.createElement("img");
        logoEl.classList.add("bytm-dialog-header-img", "bytm-no-select");
        logoEl.src = yield getResourceUrl(mode === "development" ? "img-logo_dev" : "img-logo");
        logoEl.alt = "BetterYTM logo";
        return logoEl;
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
        if (!getFeature("versionCheck"))
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
let isCfgMenuMounted = false;
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
function mountCfgMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        if (isCfgMenuMounted)
            return;
        isCfgMenuMounted = true;
        initLocale = getFeature("locale");
        initConfig$1 = getFeatures();
        const initLangReloadText = t("lang_changed_prompt_reload");
        //#region bg & container
        const backgroundElem = document.createElement("div");
        backgroundElem.id = "bytm-cfg-menu-bg";
        backgroundElem.classList.add("bytm-menu-bg");
        backgroundElem.ariaLabel = backgroundElem.title = t("close_menu_tooltip");
        backgroundElem.style.visibility = "hidden";
        backgroundElem.style.display = "none";
        backgroundElem.addEventListener("click", (e) => {
            var _a;
            if (isCfgMenuOpen && ((_a = e.target) === null || _a === void 0 ? void 0 : _a.id) === "bytm-cfg-menu-bg")
                closeCfgMenu(e);
        });
        document.body.addEventListener("keydown", (e) => {
            if (isCfgMenuOpen && e.key === "Escape" && BytmDialog.getCurrentDialogId() === "cfg-menu")
                closeCfgMenu(e);
        });
        const menuContainer = document.createElement("div");
        menuContainer.ariaLabel = menuContainer.title = ""; // prevent bg title from propagating downwards
        menuContainer.classList.add("bytm-menu");
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
        reloadFooterEl.ariaLive = "polite";
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
        const exImDlg = new ExImDialog({
            id: "bytm-config-import-export",
            width: 800,
            height: 600,
            // try to compress the data if possible
            exportData: () => __awaiter(this, void 0, void 0, function* () {
                return (yield compressionSupported())
                    ? yield UserUtils.compress(JSON.stringify({ formatVersion, data: getFeatures() }), compressionFormat, "string")
                    : JSON.stringify({ formatVersion, data: getFeatures() });
            }),
            // copy plain when shift-clicking the copy button
            exportDataSpecial: () => JSON.stringify(getFeatures()),
            onImport: (data) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const parsed = yield tryToDecompressAndParse(data.trim());
                    console.log(">> parsed", parsed);
                    if (!parsed || typeof parsed !== "object")
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
                    exImDlg.unmount();
                    emitSiteEvent("rebuildCfgMenu", parsed.data);
                }
                catch (err) {
                    warn("Couldn't import configuration:", err);
                    alert(t("import_error_invalid"));
                }
            }),
            trKeyTitle: "bytm_config_export_import_title",
            trKeyDescImport: "bytm_config_import_desc",
            trKeyDescExport: "bytm_config_export_desc",
            dataHidden: false,
        });
        const exportImportBtn = document.createElement("button");
        exportImportBtn.classList.add("bytm-btn");
        exportImportBtn.textContent = exportImportBtn.ariaLabel = exportImportBtn.title = t("export_import");
        onInteraction(exportImportBtn, () => __awaiter(this, void 0, void 0, function* () { return yield exImDlg.open(); }));
        const exportElem = document.createElement("button");
        exportElem.classList.add("bytm-btn");
        exportElem.ariaLabel = exportElem.title = t("export_tooltip");
        exportElem.textContent = t("export");
        onInteraction(exportElem, () => __awaiter(this, void 0, void 0, function* () {
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
        onInteraction(importElem, () => __awaiter(this, void 0, void 0, function* () {
            const dlg = yield getImportDialog();
            dlg.on("close", openCfgMenu);
            yield dlg.mount();
            closeCfgMenu(undefined, false);
            yield dlg.open();
        }));
        const buttonsCont = document.createElement("div");
        buttonsCont.classList.add("bytm-menu-footer-buttons-cont");
        buttonsCont.appendChild(exportImportBtn);
        buttonsCont.appendChild(exportElem);
        buttonsCont.appendChild(importElem);
        footerCont.appendChild(reloadFooterCont);
        footerCont.appendChild(buttonsCont);
        //#region feature list
        const featuresCont = document.createElement("div");
        featuresCont.id = "bytm-menu-opts";
        const onCfgChange = (key, initialVal, newVal) => __awaiter(this, void 0, void 0, function* () {
            var _e, _f;
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
            (_f = (_e = featInfo[key]) === null || _e === void 0 ? void 0 : _e.change) === null || _f === void 0 ? void 0 : _f.call(_e, key, initialVal, newVal);
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
        const confChanged = UserUtils.debounce(onCfgChange, 333, "falling");
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
            catch (_b) {
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
                    if (getFeature("advancedMode")) {
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
                    if ((getFeature("advancedMode") || mode === "development") && ftInfo.valueHidden) {
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
        getFeature("advancedMode") && modeItems.push("advanced_mode");
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
            isCfgMenuMounted = false;
            yield mountCfgMenu();
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
    clearTimeout(hiddenCopiedTxtTimeout);
    openDialogs.splice(openDialogs.indexOf("cfg-menu"), 1);
    setCurrentDialogId((_b = openDialogs === null || openDialogs === void 0 ? void 0 : openDialogs[0]) !== null && _b !== void 0 ? _b : null);
    // since this menu doesn't have a BytmDialog instance, it's undefined here
    emitInterface("bytm:dialogClosed", undefined);
    emitInterface("bytm:dialogClosed:cfg-menu", undefined);
    if (!menuBg)
        return warn("Couldn't close config menu because background element couldn't be found. The config menu is considered closed but might still be open. In this case please reload the page. If the issue persists, please create an issue on GitHub.");
    (_c = menuBg.querySelectorAll(".bytm-ftconf-adv-copy-hint")) === null || _c === void 0 ? void 0 : _c.forEach((el) => el.style.display = "none");
    menuBg.style.visibility = "hidden";
    menuBg.style.display = "none";
}
/** Opens the config menu if it is closed */
function openCfgMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        if (!isCfgMenuMounted)
            yield mountCfgMenu();
        if (isCfgMenuOpen)
            return;
        isCfgMenuOpen = true;
        document.body.classList.add("bytm-disable-scroll");
        (_a = document.querySelector(getDomain() === "ytm" ? "ytmusic-app" : "ytd-app")) === null || _a === void 0 ? void 0 : _a.setAttribute("inert", "true");
        const menuBg = document.querySelector("#bytm-cfg-menu-bg");
        setCurrentDialogId("cfg-menu");
        openDialogs.unshift("cfg-menu");
        // since this menu doesn't have a BytmDialog instance, it's undefined here
        emitInterface("bytm:dialogOpened", undefined);
        emitInterface("bytm:dialogOpened:cfg-menu", undefined);
        checkToggleScrollIndicator();
        if (!menuBg)
            return warn("Couldn't open config menu because background element couldn't be found. The config menu is considered open but might still be closed. In this case please reload the page. If the issue persists, please create an issue on GitHub.");
        menuBg.style.visibility = "visible";
        menuBg.style.display = "block";
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
        titleElem.tabIndex = 0;
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
        localeSelectElem.value = getFeature("locale");
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
        line1Elem.tabIndex = 0;
        textElems.push(line1Elem);
        const br1Elem = document.createElement("br");
        textElems.push(br1Elem);
        const line2Elem = document.createElement("span");
        line2Elem.id = "bytm-welcome-text-line2";
        line2Elem.tabIndex = 0;
        textElems.push(line2Elem);
        const br2Elem = document.createElement("br");
        textElems.push(br2Elem);
        const br3Elem = document.createElement("br");
        textElems.push(br3Elem);
        const line3Elem = document.createElement("span");
        line3Elem.id = "bytm-welcome-text-line3";
        line3Elem.tabIndex = 0;
        textElems.push(line3Elem);
        const br4Elem = document.createElement("br");
        textElems.push(br4Elem);
        const line4Elem = document.createElement("span");
        line4Elem.id = "bytm-welcome-text-line4";
        line4Elem.tabIndex = 0;
        textElems.push(line4Elem);
        const br5Elem = document.createElement("br");
        textElems.push(br5Elem);
        const br6Elem = document.createElement("br");
        textElems.push(br6Elem);
        const line5Elem = document.createElement("span");
        line5Elem.id = "bytm-welcome-text-line5";
        line5Elem.tabIndex = 0;
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
        "#bytm-welcome-menu-title": (e) => e.textContent = e.ariaLabel = t("welcome_menu_title", scriptInfo.name),
        "#bytm-welcome-menu-title-close": (e) => e.ariaLabel = e.title = t("close_menu_tooltip"),
        "#bytm-welcome-menu-open-cfg": (e) => {
            e.textContent = e.ariaLabel = t("config_menu");
            e.ariaLabel = e.title = t("open_config_menu_tooltip");
        },
        "#bytm-welcome-menu-open-changelog": (e) => {
            e.textContent = e.ariaLabel = t("open_changelog");
            e.ariaLabel = e.title = t("open_changelog_tooltip");
        },
        "#bytm-welcome-menu-footer-close": (e) => {
            e.textContent = e.ariaLabel = t("close");
            e.ariaLabel = e.title = t("close_menu_tooltip");
        },
        "#bytm-welcome-text-line1": (e) => e.innerHTML = e.ariaLabel = t("welcome_text_line_1"),
        "#bytm-welcome-text-line2": (e) => e.innerHTML = e.ariaLabel = t("welcome_text_line_2", scriptInfo.name),
        "#bytm-welcome-text-line3": (e) => e.innerHTML = e.ariaLabel = t("welcome_text_line_3", scriptInfo.name, ...getLink(`${pkg.hosts.greasyfork}/feedback`), ...getLink(pkg.hosts.openuserjs)),
        "#bytm-welcome-text-line4": (e) => e.innerHTML = e.ariaLabel = t("welcome_text_line_4", ...getLink(pkg.funding.url)),
        "#bytm-welcome-text-line5": (e) => e.innerHTML = e.ariaLabel = t("welcome_text_line_5", ...getLink(pkg.bugs.url)),
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
            if (getFeature("versionCheck") === false)
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
}//#region cfg menu btns
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
//#region anchor impr.
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
//#region share tracking
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
//#region ab.queue btns
function initAboveQueueBtns() {
    return __awaiter(this, void 0, void 0, function* () {
        const { scrollToActiveSongBtn, clearQueueBtn } = getFeatures();
        const contBtns = [
            {
                condition: scrollToActiveSongBtn,
                id: "scroll-to-active",
                resourceName: "icon-skip_to",
                titleKey: "scroll_to_playing",
                interaction(evt) {
                    return __awaiter(this, void 0, void 0, function* () {
                        const activeItem = document.querySelector("#side-panel .ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"loading\"], #side-panel .ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"playing\"], #side-panel .ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"paused\"]");
                        if (!activeItem)
                            return;
                        activeItem.scrollIntoView({
                            behavior: evt.shiftKey ? "instant" : "smooth",
                            block: evt.ctrlKey ? "end" : "center",
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
                interaction(evt) {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            // TODO: better confirmation dialog?
                            if (evt.shiftKey || confirm(t("clear_list_confirm"))) {
                                const url = new URL(location.href);
                                url.searchParams.delete("list");
                                url.searchParams.set("time_continue", String(yield getVideoTime(0)));
                                location.assign(url);
                            }
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
//#region thumb.overlay
/** To be changed when the toggle button is pressed - used to invert the state of "showOverlay" */
let invertOverlay = false;
function initThumbnailOverlay() {
    return __awaiter(this, void 0, void 0, function* () {
        const toggleBtnShown = getFeature("thumbnailOverlayToggleBtnShown");
        if (getFeature("thumbnailOverlayBehavior") === "never" && !toggleBtnShown)
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
                const behavior = getFeature("thumbnailOverlayBehavior");
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
                if (getFeature("thumbnailOverlayToggleBtnShown")) {
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
                if (getFeature("thumbnailOverlayShowIndicator")) {
                    indicatorElem = document.createElement("img");
                    indicatorElem.id = "bytm-thumbnail-overlay-indicator";
                    indicatorElem.src = yield getResourceUrl("icon-image");
                    indicatorElem.role = "presentation";
                    indicatorElem.title = indicatorElem.ariaLabel = t("thumbnail_overlay_indicator_tooltip");
                    indicatorElem.ariaHidden = "true";
                    indicatorElem.style.display = "none";
                    indicatorElem.style.opacity = String(getFeature("thumbnailOverlayIndicatorOpacity") / 100);
                }
                const thumbImgElem = document.createElement("img");
                thumbImgElem.id = "bytm-thumbnail-overlay-img";
                thumbImgElem.role = "presentation";
                thumbImgElem.ariaHidden = "true";
                thumbImgElem.style.objectFit = getFeature("thumbnailOverlayImageFit");
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
                    const toggleBtnElem = createRipple(document.createElement("a"));
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
//#region idle hide cursor
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
                    if (!getFeature("hideCursorOnIdle"))
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
                const cursorHideTimerCb = () => cursorHideTimer = setTimeout(hide, getFeature("hideCursorOnIdleDelay") * 1000);
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
}
//#region show dis-/likes
/** Shows the amount of likes and dislikes on the current song */
function initShowVotes() {
    return __awaiter(this, void 0, void 0, function* () {
        const voteContSelector = ".middle-controls-buttons ytmusic-like-button-renderer";
        addSelectorListener("playerBar", voteContSelector, {
            listener(voteCont) {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        const watchId = getWatchId();
                        if (!watchId)
                            return error("Couldn't get watch ID while initializing showVotes");
                        const voteObj = yield fetchVideoVotes(watchId);
                        if (!voteObj || !("likes" in voteObj) || !("dislikes" in voteObj) || !("rating" in voteObj))
                            return error("Couldn't fetch votes from ReturnYouTubeDislikes API");
                        getFeature("showVotes") && addVoteNumbers(voteCont, voteObj);
                    }
                    catch (err) {
                        error("Couldn't initialize show votes feature due to an error:", err);
                    }
                });
            },
        });
        siteEvents.on("watchIdChanged", (watchId) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const labelLikes = document.querySelector("ytmusic-like-button-renderer .bytm-vote-label.likes");
            const labelDislikes = document.querySelector("ytmusic-like-button-renderer .bytm-vote-label.dislikes");
            if (!labelLikes || !labelDislikes)
                return error("Couldn't find vote label elements while updating like and dislike counts");
            if (labelLikes.dataset.watchId === watchId && labelDislikes.dataset.watchId === watchId)
                return log("Vote labels already updated for this video");
            const voteObj = yield fetchVideoVotes(watchId);
            if (!voteObj || !("likes" in voteObj) || !("dislikes" in voteObj) || !("rating" in voteObj))
                return error("Couldn't fetch votes from ReturnYouTubeDislikes API");
            labelLikes.dataset.watchId = (_a = getWatchId()) !== null && _a !== void 0 ? _a : "";
            labelLikes.textContent = formatVoteNumber(voteObj.likes);
            labelLikes.title = labelLikes.ariaLabel = t("vote_label_likes", formatVoteNumber(voteObj.likes, "full"));
            labelDislikes.textContent = formatVoteNumber(voteObj.dislikes);
            labelDislikes.title = labelDislikes.ariaLabel = t("vote_label_dislikes", formatVoteNumber(voteObj.dislikes, "full"));
            labelDislikes.dataset.watchId = (_b = getWatchId()) !== null && _b !== void 0 ? _b : "";
        }));
    });
}
function addVoteNumbers(voteCont, voteObj) {
    const likeBtn = voteCont.querySelector("#button-shape-like");
    const dislikeBtn = voteCont.querySelector("#button-shape-dislike");
    if (!likeBtn || !dislikeBtn)
        return error("Couldn't find like or dislike button while adding vote numbers");
    const createLabel = (amount, type) => {
        var _a;
        const label = document.createElement("span");
        label.classList.add("bytm-vote-label", "bytm-no-select", type);
        label.textContent = String(formatVoteNumber(amount));
        label.title = label.ariaLabel = t(`vote_label_${type}`, formatVoteNumber(amount, "full"));
        label.dataset.watchId = (_a = getWatchId()) !== null && _a !== void 0 ? _a : "";
        label.addEventListener("click", (e) => {
            var _a;
            e.preventDefault();
            e.stopPropagation();
            (_a = (type === "likes" ? likeBtn : dislikeBtn).querySelector("button")) === null || _a === void 0 ? void 0 : _a.click();
        });
        return label;
    };
    addStyleFromResource("css-show_votes").catch((e) => error("Couldn't add CSS for show votes feature due to an error:", e));
    const likeLblEl = createLabel(voteObj.likes, "likes");
    likeBtn.insertAdjacentElement("afterend", likeLblEl);
    const dislikeLblEl = createLabel(voteObj.dislikes, "dislikes");
    dislikeBtn.insertAdjacentElement("afterend", dislikeLblEl);
}
/** Formats a number formatted based on the config or the passed {@linkcode notation} */
function formatVoteNumber(num, notation = getFeature("showVotesFormat")) {
    return num.toLocaleString(getLocale().replace(/_/g, "-"), notation === "short"
        ? {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 1,
        }
        : {
            style: "decimal",
            maximumFractionDigits: 0,
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
        const animTimeout = 300;
        addSelectorListener("popupContainer", "ytmusic-notification-action-renderer", {
            all: true,
            continuous: true,
            listener: (toastContElems) => __awaiter(this, void 0, void 0, function* () {
                try {
                    for (const toastContElem of toastContElems) {
                        const toastElem = toastContElem.querySelector("tp-yt-paper-toast#toast");
                        if (!toastElem || !toastElem.hasAttribute("allow-click-through"))
                            continue;
                        if (toastElem.classList.contains("bytm-closing"))
                            continue;
                        toastElem.classList.add("bytm-closing");
                        const closeTimeout = Math.max(getFeature("closeToastsTimeout") * 1000 + animTimeout, animTimeout);
                        yield UserUtils.pauseFor(closeTimeout);
                        toastElem.classList.remove("paper-toast-open");
                        toastElem.addEventListener("transitionend", () => {
                            toastElem.classList.remove("bytm-closing");
                            toastElem.style.display = "none";
                            clearNode(toastElem);
                            log(`Automatically closed toast after ${getFeature("closeToastsTimeout") * 1000}ms`);
                        }, { once: true });
                    }
                }
                catch (err) {
                    error("Error in automatic toast closing:", err);
                }
            }),
        });
        log("Initialized automatic toast closing");
    });
}
let remVidsCache = [];
/**
 * Remembers the time of the last played video and resumes playback from that time.
 * **Needs to be called *before* DOM is ready!**
 */
function initRememberSongTime() {
    return __awaiter(this, void 0, void 0, function* () {
        if (getFeature("rememberSongTimeSites") !== "all" && getFeature("rememberSongTimeSites") !== getDomain())
            return;
        const storedDataRaw = yield GM.getValue("bytm-rem-songs");
        if (!storedDataRaw)
            yield GM.setValue("bytm-rem-songs", "[]");
        remVidsCache = JSON.parse(String(storedDataRaw !== null && storedDataRaw !== void 0 ? storedDataRaw : "[]"));
        log(`Initialized video time restoring with ${remVidsCache.length} initial entr${remVidsCache.length === 1 ? "y" : "ies"}`);
        if (location.pathname.startsWith("/watch"))
            yield restVidRestoreTime();
        if (!domLoaded)
            document.addEventListener("DOMContentLoaded", restVidStartUpdateLoop);
        else
            restVidStartUpdateLoop();
    });
}
/** Tries to restore the time of the currently playing video */
function restVidRestoreTime() {
    return __awaiter(this, void 0, void 0, function* () {
        if (location.pathname.startsWith("/watch")) {
            const watchID = new URL(location.href).searchParams.get("v");
            if (!watchID)
                return;
            if (initialParams.has("t"))
                return info("Not restoring song time because the URL has the '&t' parameter", LogLevel.Info);
            const entry = remVidsCache.find(entry => entry.watchID === watchID);
            if (entry) {
                if (Date.now() - entry.updateTimestamp > getFeature("rememberSongTimeDuration") * 1000) {
                    yield restVidDeleteEntry(entry.watchID);
                    return;
                }
                else if (isNaN(Number(entry.songTime)))
                    return;
                else {
                    const doRestoreTime = () => __awaiter(this, void 0, void 0, function* () {
                        var _a;
                        const vidElem = yield waitVideoElementReady();
                        const vidRestoreTime = entry.songTime - ((_a = getFeature("rememberSongTimeReduction")) !== null && _a !== void 0 ? _a : 0);
                        vidElem.currentTime = UserUtils.clamp(Math.max(vidRestoreTime, 0), 0, vidElem.duration);
                        yield restVidDeleteEntry(entry.watchID);
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
let lastSongTime = -1;
let remVidCheckTimeout;
/** Only call once as this calls itself after a timeout! - Updates the currently playing video's entry in GM storage */
function restVidStartUpdateLoop() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c;
        if (location.pathname.startsWith("/watch")) {
            const songTime = (_a = yield getVideoTime()) !== null && _a !== void 0 ? _a : 0;
            if (songTime === lastSongTime)
                return;
            lastSongTime = songTime;
            const watchID = getWatchId();
            if (!watchID)
                return;
            const paused = (_c = (_b = document.querySelector(getVideoSelector())) === null || _b === void 0 ? void 0 : _b.paused) !== null && _c !== void 0 ? _c : false;
            // don't immediately update to reduce race conditions and only update if the video is playing
            // also it just sounds better if the song starts at the beginning if only a couple seconds have passed
            if (songTime > getFeature("rememberSongTimeMinPlayTime") && !paused) {
                const entry = {
                    watchID,
                    songTime,
                    updateTimestamp: Date.now(),
                };
                yield restVidSetEntry(entry);
            }
            // if the song is rewound to the beginning, delete the entry
            else {
                const entry = remVidsCache.find(entry => entry.watchID === watchID);
                if (entry && songTime <= getFeature("rememberSongTimeMinPlayTime"))
                    yield restVidDeleteEntry(entry.watchID);
            }
        }
        const expiredEntries = remVidsCache.filter(entry => Date.now() - entry.updateTimestamp > getFeature("rememberSongTimeDuration") * 1000);
        for (const entry of expiredEntries)
            yield restVidDeleteEntry(entry.watchID);
        // for no overlapping calls and better error handling:
        if (remVidCheckTimeout)
            clearTimeout(remVidCheckTimeout);
        remVidCheckTimeout = setTimeout(restVidStartUpdateLoop, 1000);
    });
}
/** Updates an existing or creates a new entry */
function restVidSetEntry(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const foundIdx = remVidsCache.findIndex(entry => entry.watchID === data.watchID);
        if (foundIdx >= 0)
            remVidsCache[foundIdx] = data;
        else
            remVidsCache.push(data);
        yield GM.setValue("bytm-rem-songs", JSON.stringify(remVidsCache));
    });
}
/** Deletes an entry */
function restVidDeleteEntry(watchID) {
    return __awaiter(this, void 0, void 0, function* () {
        remVidsCache = [...remVidsCache.filter(entry => entry.watchID !== watchID)];
        yield GM.setValue("bytm-rem-songs", JSON.stringify(remVidsCache));
    });
}
//#region disable darkreader
/** Disables Dark Reader if it is present */
function disableDarkReader() {
    if (getFeature("disableDarkReaderSites") !== getDomain() && getFeature("disableDarkReaderSites") !== "all")
        return;
    const metaElem = document.createElement("meta");
    metaElem.name = "darkreader-lock";
    metaElem.classList.add("bytm-disable-darkreader");
    document.head.appendChild(metaElem);
    info("Disabled Dark Reader");
}const inputIgnoreTagNames = ["INPUT", "TEXTAREA", "SELECT", "BUTTON", "A", "TP-YT-PAPER-SLIDER"];
//#region arrow key skip
function initArrowKeySkip() {
    return __awaiter(this, void 0, void 0, function* () {
        document.addEventListener("keydown", (evt) => {
            var _a, _b, _c, _d, _e, _f;
            if (!getFeature("arrowKeySupport"))
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
            let skipBy = (_f = getFeature("arrowKeySkipBy")) !== null && _f !== void 0 ? _f : featInfo.arrowKeySkipBy.default;
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
            var _a, _b;
            if (!getFeature("switchBetweenSites"))
                return;
            if (inputIgnoreTagNames.includes((_b = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.tagName) !== null && _b !== void 0 ? _b : ""))
                return;
            const hk = getFeature("switchSitesHotkey");
            if (siteSwitchEnabled && e.code === hk.code && e.shiftKey === hk.shift && e.ctrlKey === hk.ctrl && e.altKey === hk.alt)
                switchSite(domain === "yt" ? "ytm" : "yt");
        });
        siteEvents.on("hotkeyInputActive", (state) => {
            if (!getFeature("switchBetweenSites"))
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
                .filter((param) => !param.match(/^\??(t|time_continue)=/))
                .join("&");
            const newSearch = typeof vt === "number" && vt > videoTimeThreshold ?
                cleanSearch.includes("?")
                    ? `${cleanSearch.startsWith("?")
                        ? cleanSearch
                        : "?" + cleanSearch}&time_continue=${vt}`
                    : `?time_continue=${vt}`
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
const numKeysIgnoreTagNames = [...inputIgnoreTagNames];
/** Adds the ability to skip to a certain time in the video by pressing a number key (0-9) */
function initNumKeysSkip() {
    return __awaiter(this, void 0, void 0, function* () {
        document.addEventListener("keydown", (e) => {
            var _a, _b;
            if (!getFeature("numKeysSkipToTime"))
                return;
            if (!e.key.trim().match(/^[0-9]$/))
                return;
            // discard the event when an unexpected element is currently active or in focus, like when editing a playlist or when the search bar is focused
            const ignoreElement = numKeysIgnoreTagNames.includes((_b = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.tagName) !== null && _b !== void 0 ? _b : "");
            if ((document.activeElement !== document.body && ignoreElement) || ignoreElement)
                return info("Captured valid key to skip video to, but ignored it since this element is currently active:", document.activeElement);
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
//#region auto-like vids
let canCompress$1 = false;
/** DataStore instance for all auto-liked channels */
const autoLikeStore = new UserUtils.DataStore({
    id: "bytm-auto-like-channels",
    formatVersion: 2,
    defaultData: {
        channels: [],
    },
    encodeData: (data) => canCompress$1 ? UserUtils.compress(data, compressionFormat, "string") : data,
    decodeData: (data) => canCompress$1 ? UserUtils.decompress(data, compressionFormat, "string") : data,
    migrations: {
        // 1 -> 2 (v2.1-pre) - add @ prefix to channel IDs if missing
        2: (oldData) => ({
            channels: oldData.channels.map((ch) => (Object.assign(Object.assign({}, ch), { id: ch.id.trim().match(/^(UC|@).+$/)
                    ? ch.id.trim()
                    : `@${ch.id.trim()}` }))),
        }),
    },
});
let autoLikeStoreLoaded = false;
/** Inits the auto-like DataStore instance */
function initAutoLikeStore() {
    if (autoLikeStoreLoaded)
        return;
    autoLikeStoreLoaded = true;
    return autoLikeStore.loadData();
}
/** Initializes the auto-like feature */
function initAutoLike() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            canCompress$1 = yield compressionSupported();
            yield initAutoLikeStore();
            if (getDomain() === "ytm") {
                let timeout;
                siteEvents.on("songTitleChanged", () => {
                    var _a;
                    timeout && clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        const artistEls = document.querySelectorAll("ytmusic-player-bar .content-info-wrapper .subtitle a.yt-formatted-string[href]");
                        const channelIds = [...artistEls].map(a => a.href.split("/").pop()).filter(a => typeof a === "string");
                        const likeChan = autoLikeStore.getData().channels.find((ch) => channelIds.includes(ch.id));
                        if (!likeChan || !likeChan.enabled)
                            return;
                        if (artistEls.length === 0)
                            return error("Couldn't auto-like channel because the artist element couldn't be found");
                        const likeRendererEl = document.querySelector(".middle-controls-buttons ytmusic-like-button-renderer");
                        const likeBtnEl = likeRendererEl === null || likeRendererEl === void 0 ? void 0 : likeRendererEl.querySelector("#button-shape-like button");
                        if (!likeRendererEl || !likeBtnEl)
                            return error("Couldn't auto-like channel because the like button couldn't be found");
                        if (likeRendererEl.getAttribute("like-status") !== "LIKE") {
                            likeBtnEl.click();
                            getFeature("autoLikeShowToast") && showIconToast({
                                message: t(`auto_liked_a_channels_${currentMediaType()}`, likeChan.name),
                                icon: "icon-auto_like",
                            });
                            log(`Auto-liked ${currentMediaType()} from channel '${likeChan.name}' (${likeChan.id})`);
                        }
                    }, ((_a = getFeature("autoLikeTimeout")) !== null && _a !== void 0 ? _a : 5) * 1000);
                });
                siteEvents.on("pathChanged", (path) => {
                    if (getFeature("autoLikeChannelToggleBtn") && path.match(/\/channel\/.+/)) {
                        const chanId = getCurrentChannelId();
                        if (!chanId)
                            return error("Couldn't extract channel ID from URL");
                        document.querySelectorAll(".bytm-auto-like-toggle-btn").forEach((btn) => clearNode(btn));
                        addSelectorListener("browseResponse", "ytmusic-browse-response #header.ytmusic-browse-response", {
                            listener(headerCont) {
                                var _a, _b, _c, _d;
                                const buttonsCont = headerCont.querySelector(".buttons");
                                if (buttonsCont) {
                                    const lastBtn = buttonsCont.querySelector("ytmusic-subscribe-button-renderer");
                                    const chanName = (_b = (_a = document.querySelector("ytmusic-immersive-header-renderer .content-container yt-formatted-string[role=\"heading\"]")) === null || _a === void 0 ? void 0 : _a.textContent) !== null && _b !== void 0 ? _b : null;
                                    lastBtn && addAutoLikeToggleBtn(lastBtn, chanId, chanName);
                                }
                                else {
                                    // some channels don't have a subscribe button and instead only have a "share" button for some bullshit reason
                                    const shareBtnEl = headerCont.querySelector("ytmusic-menu-renderer #top-level-buttons yt-button-renderer:last-of-type");
                                    const chanName = (_d = (_c = headerCont.querySelector("ytmusic-visual-header-renderer .content-container h2 yt-formatted-string")) === null || _c === void 0 ? void 0 : _c.textContent) !== null && _d !== void 0 ? _d : null;
                                    shareBtnEl && chanName && addAutoLikeToggleBtn(shareBtnEl, chanId, chanName);
                                }
                            }
                        });
                    }
                });
            }
            else if (getDomain() === "yt") {
                let timeout;
                siteEvents.on("watchIdChanged", () => {
                    var _a;
                    timeout && clearTimeout(timeout);
                    if (!location.pathname.startsWith("/watch"))
                        return;
                    timeout = setTimeout(() => {
                        addSelectorListener("ytWatchMetadata", "#owner ytd-channel-name yt-formatted-string a", {
                            listener(chanElem) {
                                var _a, _b;
                                const chanElemId = (_b = (_a = chanElem.href.split("/").pop()) === null || _a === void 0 ? void 0 : _a.split("/")[0]) !== null && _b !== void 0 ? _b : null;
                                const likeChan = autoLikeStore.getData().channels.find((ch) => ch.id === chanElemId);
                                if (!likeChan || !likeChan.enabled)
                                    return;
                                addSelectorListener("ytWatchMetadata", "#actions ytd-menu-renderer like-button-view-model button", {
                                    listener(likeBtn) {
                                        if (likeBtn.getAttribute("aria-pressed") !== "true") {
                                            likeBtn.click();
                                            getFeature("autoLikeShowToast") && showIconToast({
                                                message: t(`auto_liked_a_channels_${currentMediaType()}`, likeChan.name),
                                                icon: "icon-auto_like",
                                            });
                                            log(`Auto-liked ${currentMediaType()} from channel '${likeChan.name}' (${likeChan.id})`);
                                        }
                                    }
                                });
                            }
                        });
                    }, ((_a = getFeature("autoLikeTimeout")) !== null && _a !== void 0 ? _a : 5) * 1000);
                });
                siteEvents.on("pathChanged", (path) => {
                    if (path.match(/(\/?@|\/channel\/).+/)) {
                        const chanId = getCurrentChannelId();
                        if (!chanId)
                            return error("Couldn't extract channel ID from URL");
                        document.querySelectorAll(".bytm-auto-like-toggle-btn").forEach((btn) => clearNode(btn));
                        addSelectorListener("ytChannelHeader", "#channel-header-container", {
                            listener(headerCont) {
                                var _a, _b;
                                const titleCont = headerCont.querySelector("ytd-channel-name #container");
                                if (!titleCont)
                                    return;
                                const chanName = (_b = (_a = titleCont.querySelector("yt-formatted-string")) === null || _a === void 0 ? void 0 : _a.textContent) !== null && _b !== void 0 ? _b : null;
                                const buttonsCont = headerCont.querySelector("#inner-header-container #buttons");
                                if (buttonsCont) {
                                    addSelectorListener("ytChannelHeader", "#channel-header-container #other-buttons", {
                                        listener(otherBtns) {
                                            addAutoLikeToggleBtn(otherBtns, chanId, chanName, ["left-margin"]);
                                        }
                                    });
                                }
                                else if (titleCont)
                                    addAutoLikeToggleBtn(titleCont, chanId, chanName);
                            }
                        });
                    }
                });
            }
            log("Initialized auto-like channels feature");
        }
        catch (err) {
            error("Error while auto-liking channel:", err);
        }
    });
}
function addAutoLikeToggleBtn(siblingEl, channelId, channelName, extraClasses) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const chan = autoLikeStore.getData().channels.find((ch) => ch.id === channelId);
        siteEvents.on("autoLikeChannelsUpdated", () => {
            var _a, _b;
            const buttonEl = document.querySelector(`.bytm-auto-like-toggle-btn[data-channel-id="${channelId}"]`);
            if (!buttonEl)
                return warn("Couldn't find auto-like toggle button for channel ID:", channelId);
            const enabled = (_b = (_a = autoLikeStore.getData().channels.find((ch) => ch.id === channelId)) === null || _a === void 0 ? void 0 : _a.enabled) !== null && _b !== void 0 ? _b : false;
            if (enabled)
                buttonEl.classList.add("toggled");
            else
                buttonEl.classList.remove("toggled");
        });
        const buttonEl = yield createLongBtn({
            resourceName: `icon-auto_like${(chan === null || chan === void 0 ? void 0 : chan.enabled) ? "_enabled" : ""}`,
            text: t("auto_like"),
            title: t(`auto_like_button_tooltip${(chan === null || chan === void 0 ? void 0 : chan.enabled) ? "_enabled" : "_disabled"}`),
            toggle: true,
            toggleInitialState: (_a = chan === null || chan === void 0 ? void 0 : chan.enabled) !== null && _a !== void 0 ? _a : false,
            onToggle(toggled, evt) {
                return __awaiter(this, void 0, void 0, function* () {
                    var _a;
                    try {
                        yield autoLikeStore.loadData();
                        if (evt.shiftKey) {
                            buttonEl.classList.toggle("toggled");
                            getAutoLikeDialog().then((dlg) => dlg.open());
                            return;
                        }
                        buttonEl.title = buttonEl.ariaLabel = t(`auto_like_button_tooltip${toggled ? "_enabled" : "_disabled"}`);
                        const chanId = (_a = buttonEl.dataset.channelId) !== null && _a !== void 0 ? _a : channelId;
                        const imgEl = buttonEl.querySelector(".bytm-generic-btn-img");
                        const imgHtml = yield resourceToHTMLString(`icon-auto_like${toggled ? "_enabled" : ""}`);
                        if (imgEl && imgHtml)
                            imgEl.innerHTML = imgHtml;
                        if (autoLikeStore.getData().channels.find((ch) => ch.id === chanId) === undefined) {
                            yield autoLikeStore.setData({
                                channels: [
                                    ...autoLikeStore.getData().channels,
                                    { id: chanId, name: channelName !== null && channelName !== void 0 ? channelName : "", enabled: toggled },
                                ],
                            });
                        }
                        else {
                            yield autoLikeStore.setData({
                                channels: autoLikeStore.getData().channels
                                    .map((ch) => ch.id === chanId ? Object.assign(Object.assign({}, ch), { enabled: toggled }) : ch),
                            });
                        }
                        siteEvents.emit("autoLikeChannelsUpdated");
                        showIconToast({
                            message: toggled ? t("auto_like_enabled_toast") : t("auto_like_disabled_toast"),
                            icon: `icon-auto_like${toggled ? "_enabled" : ""}`,
                        });
                        log(`Toggled auto-like for channel '${channelName}' (ID: '${chanId}') to ${toggled ? "enabled" : "disabled"}`);
                    }
                    catch (err) {
                        error("Error while toggling auto-like channel:", err);
                    }
                });
            }
        });
        buttonEl.classList.add(...["bytm-auto-like-toggle-btn", ...(extraClasses !== null && extraClasses !== void 0 ? extraClasses : [])]);
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
                utm_source: `${scriptInfo.name} v${scriptInfo.version}${mode === "development" ? "-pre" : ""}`,
                q: `${artist} ${song}`,
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
        onInteraction(linkElem, (e) => __awaiter(this, void 0, void 0, function* () {
            if (e.ctrlKey) {
                e.preventDefault();
                e.stopPropagation();
                const search = prompt(t("open_lyrics_search_prompt"));
                if (search)
                    openInTab(`https://genius.com/search?q=${encodeURIComponent(search)}`);
            }
        }), {
            preventDefault: false,
            stopPropagation: false,
        });
        return linkElem;
    });
}
/** Splits a video title that contains a hyphen into an artist and song */
function splitVideoTitle(title) {
    const [artist, ...rest] = title.split("-").map((v, i) => i < 2 ? v.trim() : v);
    return { artist, song: rest.join("-") };
}//#region init queue btns
/** Initializes the queue buttons */
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
            const queueItems = listElem.querySelectorAll("ytmusic-responsive-list-item-renderer");
            if (queueItems.length === 0)
                return;
            queueItems.forEach(itm => {
                if (itm.classList.contains("bytm-has-btns"))
                    return;
                itm.classList.add("bytm-has-btns");
                addQueueButtons(itm, ".flex-columns", "genericList", ["bytm-generic-list-queue-btn-container"], "afterParent");
            });
            log(`Added buttons to ${queueItems.length} new "generic song list" ${UserUtils.autoPlural("item", queueItems)}`);
        };
        const listSelector = `\
ytmusic-playlist-shelf-renderer #contents,
ytmusic-section-list-renderer[main-page-type="MUSIC_PAGE_TYPE_ALBUM"] ytmusic-shelf-renderer #contents,
ytmusic-section-list-renderer[main-page-type="MUSIC_PAGE_TYPE_ARTIST"] ytmusic-shelf-renderer #contents,
ytmusic-section-list-renderer[main-page-type="MUSIC_PAGE_TYPE_PLAYLIST"] ytmusic-shelf-renderer #contents\
`;
        if (getFeature("listButtonsPlacement") === "everywhere") {
            const checkAddGenericBtns = (songLists) => {
                for (const list of songLists)
                    addGenericListQueueBtns(list);
            };
            addSelectorListener("body", listSelector, {
                all: true,
                continuous: true,
                debounce: 100,
                // TODO: switch to longer debounce time and edge type "risingIdle" after UserUtils update
                debounceEdge: "falling",
                listener: checkAddGenericBtns,
            });
            siteEvents.on("pathChanged", () => {
                const songLists = document.querySelectorAll(listSelector);
                if (songLists.length > 0)
                    checkAddGenericBtns(songLists);
            });
        }
    });
}
//#region add queue btns
/**
 * Adds the buttons to each item in the current song queue.
 * Also observes for changes to add new buttons to new items in the queue.
 * @param queueItem The element with tagname `ytmusic-player-queue-item` or `ytmusic-responsive-list-item-renderer` to add queue buttons to
 * @param listType The type of list the queue item is in
 * @param classes Extra CSS classes to apply to the container
 * @param insertPosition Where to insert the button container in relation to the parent element
 */
function addQueueButtons(queueItem_1) {
    return __awaiter(this, arguments, void 0, function* (queueItem, containerParentSelector = ".song-info", listType = "currentQueue", classes = [], insertPosition = "child") {
        const queueBtnsCont = document.createElement("div");
        queueBtnsCont.classList.add(...["bytm-queue-btn-container", ...classes]);
        const lyricsIconUrl = yield getResourceUrl("icon-lyrics");
        const deleteIconUrl = yield getResourceUrl("icon-delete");
        //#region lyrics btn
        let lyricsBtnElem;
        if (getFeature("lyricsQueueButton")) {
            lyricsBtnElem = yield createLyricsBtn(undefined, false);
            lyricsBtnElem.ariaLabel = lyricsBtnElem.title = t("open_lyrics");
            lyricsBtnElem.style.display = "inline-flex";
            lyricsBtnElem.style.visibility = "initial";
            lyricsBtnElem.style.pointerEvents = "initial";
            lyricsBtnElem.role = "link";
            lyricsBtnElem.tabIndex = 0;
            onInteraction(lyricsBtnElem, (e) => __awaiter(this, void 0, void 0, function* () {
                var _a;
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
                else if (listType === "genericList") {
                    const songEl = queueItem.querySelector(".title-column yt-formatted-string a");
                    let artistEl = null;
                    if (location.pathname.startsWith("/playlist"))
                        artistEl = document.querySelector("ytmusic-detail-header-renderer .metadata .subtitle-container yt-formatted-string a");
                    if (!artistEl || !artistEl.textContent)
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
                    lyricsUrl = (_a = cachedLyricsEntry === null || cachedLyricsEntry === void 0 ? void 0 : cachedLyricsEntry.url) !== null && _a !== void 0 ? _a : yield fetchLyricsUrlTop(artistsSan, songSan);
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
        //#region delete btn
        let deleteBtnElem;
        if (getFeature("deleteFromQueueButton")) {
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
                    }
                    else {
                        warn("Couldn't find three dots button in queue item, trying to open the context menu manually");
                        queueItem.dispatchEvent(new MouseEvent("contextmenu", { bubbles: true, cancelable: false }));
                    }
                    queuePopupCont = document.querySelector("ytmusic-app ytmusic-popup-container tp-yt-iron-dropdown");
                    queuePopupCont === null || queuePopupCont === void 0 ? void 0 : queuePopupCont.setAttribute("data-bytm-hidden", "true");
                    yield UserUtils.pauseFor(15);
                    const removeFromQueueBtn = queuePopupCont === null || queuePopupCont === void 0 ? void 0 : queuePopupCont.querySelector("tp-yt-paper-listbox ytmusic-menu-service-item-renderer:nth-of-type(3)");
                    removeFromQueueBtn === null || removeFromQueueBtn === void 0 ? void 0 : removeFromQueueBtn.click();
                    // queue items aren't removed automatically outside of the current queue
                    if (removeFromQueueBtn && listType === "genericList") {
                        yield UserUtils.pauseFor(200);
                        clearInner(queueItem);
                        queueItem.remove();
                    }
                    if (!removeFromQueueBtn) {
                        error("Couldn't find 'remove from queue' button in queue item three dots menu.\nPlease make sure all autoplay restrictions on your browser's side are disabled for this page.");
                        dotsBtnElem === null || dotsBtnElem === void 0 ? void 0 : dotsBtnElem.click();
                        imgElem.src = yield getResourceUrl("icon-error");
                        if (deleteBtnElem)
                            deleteBtnElem.ariaLabel = deleteBtnElem.title = (listType === "currentQueue" ? t("couldnt_remove_from_queue") : t("couldnt_delete_from_list"));
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
        lyricsBtnElem && queueBtnsCont.appendChild(createRipple(lyricsBtnElem));
        deleteBtnElem && queueBtnsCont.appendChild(createRipple(deleteBtnElem));
        const parentEl = queueItem.querySelector(containerParentSelector);
        if (insertPosition === "child")
            parentEl === null || parentEl === void 0 ? void 0 : parentEl.appendChild(queueBtnsCont);
        else if (insertPosition === "beforeParent")
            parentEl === null || parentEl === void 0 ? void 0 : parentEl.before(queueBtnsCont);
        else if (insertPosition === "afterParent")
            parentEl === null || parentEl === void 0 ? void 0 : parentEl.after(queueBtnsCont);
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
                if (getFeature("volumeSliderScrollStep") !== featInfo.volumeSliderScrollStep.default)
                    initScrollStep(volSliderCont, sliderElem);
                UserUtils.addParent(sliderElem, volSliderCont);
                if (typeof getFeature("volumeSliderSize") === "number")
                    setVolSliderSize();
                if (getFeature("volumeSliderLabel"))
                    yield addVolumeSliderLabel(sliderElem, volSliderCont);
                setVolSliderStep(sliderElem);
                if (getFeature("volumeSharedBetweenTabs")) {
                    sliderElem.addEventListener("change", () => sharedVolumeChanged(Number(sliderElem.value)));
                    checkSharedVolume();
                }
                if (getFeature("setInitialTabVolume"))
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
            const newVolume = String(Number(sliderElem.value) + (getFeature("volumeSliderScrollStep") * volumeDir));
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
        const volShared = getFeature("volumeSharedBetweenTabs");
        if (volShared) {
            const linkIconHtml = yield resourceToHTMLString("icon-link");
            if (linkIconHtml) {
                const linkIconElem = document.createElement("div");
                linkIconElem.id = "bytm-vol-slider-shared";
                linkIconElem.innerHTML = linkIconHtml;
                linkIconElem.role = "alert";
                linkIconElem.ariaLive = "polite";
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
        const getLabelText = (slider) => { var _a; return t("volume_tooltip", slider.value, (_a = getFeature("volumeSliderStep")) !== null && _a !== void 0 ? _a : slider.step); };
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
    const size = getFeature("volumeSliderSize");
    if (typeof size !== "number" || isNaN(Number(size)))
        return error("Invalid volume slider size:", size);
    addStyleFromResource("css-vol_slider_size", (css) => css.replace(/\/\*\s*\{WIDTH\}\s*\*\//gm, `${size}px`));
}
//#region volume slider step
/** Sets the `step` attribute of the volume slider */
function setVolSliderStep(sliderElem) {
    sliderElem.setAttribute("step", String(getFeature("volumeSliderStep")));
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
        const initialVol = getFeature("initialTabVolumeLevel");
        if (getFeature("volumeSharedBetweenTabs")) {
            lastCheckedSharedVolume = ignoreVal = initialVol;
            if (getFeature("volumeSharedBetweenTabs"))
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
    reloadRequired: () => __awaiter(void 0, void 0, void 0, function* () { return getFeature("advancedMode") ? getAdornHtml("bytm-reload-icon", t("feature_requires_reload"), "icon-reload") : undefined; }),
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
 * <!-------------------------------------------------------------------------------------------------------------------------------------------------------->
 * | Property             | Description                                                                                                                      |
 * | :------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
 * | `type`               | type of the feature configuration element - use autocomplete or check `FeatureTypeProps` in `src/types.ts`                       |
 * | `category`           | category of the feature - use autocomplete or check `FeatureCategory` in `src/types.ts`                                          |
 * | `default`            | default value of the feature - type of the value depends on the given `type`                                                     |
 * | `enable(value: any)` | (required if reloadRequired = false) - function that will be called when the feature is enabled / initialized for the first time |
 *
 *
 * **Optional props:**
 * <!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
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
 * | `renderValue: (val: any) => string`                            | If provided, is called before rendering the value's label in the config menu                                                                             |
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
        advanced: true,
        textAdornment: () => combineAdornments([adornments.advanced, adornments.reloadRequired]),
    },
    fixSpacing: {
        type: "toggle",
        category: "layout",
        default: true,
        advanced: true,
        textAdornment: () => combineAdornments([adornments.advanced, adornments.reloadRequired]),
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
        advanced: true,
        textAdornment: () => combineAdornments([adornments.advanced, adornments.reloadRequired]),
    },
    disableDarkReaderSites: {
        type: "select",
        category: "layout",
        options: options.siteSelectionOrNone,
        default: "all",
        advanced: true,
        textAdornment: () => combineAdornments([adornments.advanced, adornments.reloadRequired]),
    },
    showVotes: {
        type: "toggle",
        category: "layout",
        default: true,
        textAdornment: adornments.reloadRequired,
    },
    showVotesFormat: {
        type: "select",
        category: "layout",
        options: () => [
            { value: "full", label: t("votes_format_full") },
            { value: "short", label: t("votes_format_short") },
        ],
        default: "short",
        reloadRequired: false,
        enable: noop,
    },
    // archived idea for future version:
    // showVoteRatio: {
    //   type: "select",
    //   category: "layout",
    //   options: () => [
    //     { value: "disabled", label: t("vote_ratio_disabled") },
    //     { value: "greenRed", label: t("vote_ratio_green_red") },
    //     { value: "blueGray", label: t("vote_ratio_blue_gray") },
    //   ],
    //   default: "disabled",
    //   textAdornment: adornments.reloadRequired,
    // },
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
        default: 4,
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
        textAdornment: () => getFeature("volumeSharedBetweenTabs")
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
        textAdornment: () => getFeature("volumeSharedBetweenTabs")
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
        advanced: true,
        textAdornment: () => combineAdornments([adornments.advanced, adornments.reloadRequired]),
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
        helpText: () => tp("feature_helptext_rememberSongTime", getFeature("rememberSongTimeMinPlayTime"), getFeature("rememberSongTimeMinPlayTime")),
        textAdornment: adornments.reloadRequired,
    },
    rememberSongTimeSites: {
        type: "select",
        category: "behavior",
        options: options.siteSelection,
        default: "all",
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
        default: true,
        textAdornment: adornments.reloadRequired,
    },
    autoLikeChannelToggleBtn: {
        type: "toggle",
        category: "input",
        default: true,
        reloadRequired: false,
        enable: noop,
    },
    // TODO(v2.2):
    // autoLikePlayerBarToggleBtn: {
    //   type: "toggle",
    //   category: "input",
    //   default: false,
    //   textAdornment: adornments.reloadRequired,
    // },
    autoLikeTimeout: {
        type: "slider",
        category: "input",
        min: 3,
        max: 30,
        step: 0.5,
        default: 5,
        unit: "s",
        advanced: true,
        reloadRequired: false,
        enable: noop,
        textAdornment: adornments.advanced,
    },
    autoLikeShowToast: {
        type: "toggle",
        category: "input",
        default: true,
        reloadRequired: false,
        advanced: true,
        enable: noop,
        textAdornment: adornments.advanced,
    },
    autoLikeOpenMgmtDialog: {
        type: "button",
        category: "input",
        click: () => getAutoLikeDialog().then(d => d.open()),
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
    toastDuration: {
        type: "slider",
        category: "general",
        min: 0,
        max: 15,
        default: 3,
        step: 0.5,
        unit: "s",
        reloadRequired: false,
        advanced: true,
        textAdornment: adornments.advanced,
        enable: noop,
        change: () => showIconToast({
            duration: getFeature("toastDuration") * 1000,
            message: "Example",
            iconSrc: getResourceUrl(`img-logo${mode === "development" ? "_dev" : ""}`),
        }),
    },
    resetConfig: {
        type: "button",
        category: "general",
        click: promptResetConfig,
        textAdornment: adornments.reloadRequired,
    },
    advancedMode: {
        type: "toggle",
        category: "general",
        default: false,
        textAdornment: () => getFeature("advancedMode") ? adornments.advanced() : undefined,
        change: (_key, prevValue, newValue) => prevValue !== newValue &&
            emitSiteEvent("recreateCfgMenu"),
    },
};
function noop() {
}/** If this number is incremented, the features object data will be migrated to the new format */
const formatVersion = 6;
const defaultData = Object.keys(featInfo)
    // @ts-ignore
    .filter((ftKey) => { var _a; return ((_a = featInfo === null || featInfo === void 0 ? void 0 : featInfo[ftKey]) === null || _a === void 0 ? void 0 : _a.default) !== undefined; })
    .reduce((acc, key) => {
    var _a;
    // @ts-ignore
    acc[key] = (_a = featInfo === null || featInfo === void 0 ? void 0 : featInfo[key]) === null || _a === void 0 ? void 0 : _a.default;
    return acc;
}, {});
/** Config data format migration dictionary */
const migrations = {
    // 1 -> 2 (<=v1.0)
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
    6: (oldData) => {
        const newData = useNewDefaultIfUnchanged(useDefaultConfig(oldData, [
            "autoLikeChannels", "autoLikeChannelToggleBtn",
            "autoLikeTimeout", "autoLikeShowToast",
            "autoLikeOpenMgmtDialog", "showVotes",
            "showVotesFormat", "toastDuration",
            "initTimeout",
            // forgot to add this to the migration when adding the feature way before so now will have to do:
            "volumeSliderLabel",
        ]), [
            { key: "rememberSongTimeSites", oldDefault: "ytm" },
            { key: "volumeSliderScrollStep", oldDefault: 10 },
        ]);
        "removeUpgradeTab" in newData && delete newData.removeUpgradeTab;
        return newData;
    },
    // TODO(v2.2): use default for "autoLikePlayerBarToggleBtn"
    // TODO: once advanced filtering is fully implemented, clear cache on migration to fv6
    // 6 -> 7 (vX.X)
    // 7: (oldData: FeatureConfig) => 
};
/** Uses the default config as the base, then overwrites all values with the passed {@linkcode baseData}, then sets all passed {@linkcode resetKeys} to their default values */
function useDefaultConfig(baseData, resetKeys) {
    var _a;
    const newData = Object.assign(Object.assign({}, defaultData), (baseData !== null && baseData !== void 0 ? baseData : {}));
    for (const key of resetKeys) // @ts-ignore
        newData[key] = (_a = featInfo === null || featInfo === void 0 ? void 0 : featInfo[key]) === null || _a === void 0 ? void 0 : _a.default; // typescript funny moments
    return newData;
}
/**
 * Uses {@linkcode oldData} as the base, then sets all keys provided in {@linkcode defaults} to their old default values, as long as their current value is equal to the provided old default.
 * This essentially means if someone has changed a feature's value from its old default value, that decision will be respected. Only if it has been left on its old default value, it will be reset to the new default value.
 * Returns a copy of the object.
 */
function useNewDefaultIfUnchanged(oldData, defaults) {
    var _a;
    const newData = Object.assign({}, oldData);
    for (const { key, oldDefault } of defaults) {
        // @ts-ignore
        const defaultVal = (_a = featInfo === null || featInfo === void 0 ? void 0 : featInfo[key]) === null || _a === void 0 ? void 0 : _a.default;
        if (newData[key] === oldDefault)
            newData[key] = defaultVal; // we love TS
    }
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
        // since the config changes so much in development keys need to be fixed in this special way
        if (mode === "development") {
            yield cfgDataStore.setData(fixCfgKeys(data));
            data = cfgDataStore.getData();
        }
        log(`Initialized feature config DataStore (formatVersion = ${cfgDataStore.formatVersion})`);
        if (isNaN(oldFmtVer))
            info("  !- Config data was initialized with default values");
        else if (oldFmtVer !== cfgDataStore.formatVersion) {
            try {
                yield cfgDataStore.setData(data = fixCfgKeys(data));
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
 * Fixes missing keys in the passed config object with their default values or removes extraneous keys and returns a copy of the fixed object.
 * Returns a copy of the originally passed object if nothing needs to be fixed.
 */
function fixCfgKeys(cfg) {
    const newCfg = Object.assign({}, cfg);
    const passedKeys = Object.keys(cfg);
    const defaultKeys = Object.keys(defaultData);
    const missingKeys = defaultKeys.filter(k => !passedKeys.includes(k));
    if (missingKeys.length > 0) {
        for (const key of missingKeys)
            newCfg[key] = defaultData[key];
    }
    const extraKeys = passedKeys.filter(k => !defaultKeys.includes(k));
    if (extraKeys.length > 0) {
        for (const key of extraKeys)
            delete newCfg[key];
    }
    return newCfg;
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
function promptResetConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        if (confirm(t("reset_config_confirm"))) {
            closeCfgMenu();
            disableBeforeUnload();
            yield setDefaultFeatures();
            if (location.pathname.startsWith("/watch")) {
                const videoTime = yield getVideoTime(0);
                const url = new URL(location.href);
                url.searchParams.delete("t");
                if (videoTime)
                    url.searchParams.set("time_continue", String(videoTime));
                location.replace(url.href);
            }
            else
                location.reload();
        }
    });
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
    // meta:
    registerPlugin,
    /**/ getPluginInfo,
    // bytm-specific:
    getResourceUrl,
    getSessionId,
    // dom:
    addSelectorListener,
    onInteraction,
    getVideoTime,
    getThumbnailUrl,
    getBestThumbnailUrl,
    // translations:
    /**/ setLocale: setLocaleInterface,
    getLocale,
    hasKey,
    hasKeyFor,
    t,
    tp,
    // feature config:
    /**/ getFeatures: getFeaturesInterface,
    /**/ saveFeatures: saveFeaturesInterface,
    // lyrics:
    fetchLyricsUrlTop,
    getLyricsCacheEntry,
    sanitizeArtists,
    sanitizeSong,
    // auto-like:
    /**/ getAutoLikeData: getAutoLikeDataInterface,
    /**/ saveAutoLikeData: saveAutoLikeDataInterface,
    // components:
    createHotkeyInput,
    createToggleInput,
    createCircularBtn,
    createRipple,
    showToast,
    showIconToast,
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
const queuedPlugins = new Map();
/** Map of plugin ID and all registered plugins */
const registeredPlugins = new Map();
/** Map of plugin ID to auth token for plugins that have been registered */
const registeredPluginTokens = new Map();
/** Initializes plugins that have been registered already. Needs to be run after `bytm:ready`! */
function initPlugins() {
    // TODO(v1.3): check perms and ask user for initial activation
    for (const [key, { def, events }] of queuedPlugins) {
        try {
            registeredPlugins.set(key, { def, events });
            queuedPlugins.delete(key);
            emitOnPlugins("pluginRegistered", (d) => sameDef(d, def), pluginDefToInfo(def));
            info(`Initialized plugin '${getPluginKey(def)}'`, LogLevel.Info);
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
    for (const { def, events } of registeredPlugins.values())
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
    return pluginDefToInfo((_a = registeredPlugins.get(typeof args[1] === "string" && typeof args[2] === "undefined"
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
    const events = new NanoEmitter({ publicEmit: true });
    const token = randomId(32, 36);
    const { plugin: { name } } = def;
    queuedPlugins.set(getPluginKey(def), {
        def: def,
        events,
    });
    registeredPluginTokens.set(getPluginKey(def), token);
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
    return typeof token === "string" && token.length > 0
        ? (_b = (_a = [...registeredPluginTokens.entries()]
            .find(([, t]) => token === t)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : undefined
        : undefined;
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
}
/**
 * Returns the auto-like data.
 * This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.
 */
function getAutoLikeDataInterface(token) {
    if (resolveToken(token) === undefined)
        return;
    return autoLikeStore.getData();
}
/**
 * Saves new auto-like data, synchronously to the in-memory cache and asynchronously to the persistent storage.
 * This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.
 */
function saveAutoLikeDataInterface(token, data) {
    if (resolveToken(token) === undefined)
        return;
    return autoLikeStore.setData(data);
}//#region globals
/** Options that are applied to every SelectorObserver instance */
const defaultObserverOptions = {
    disableOnNoListeners: false,
    enableOnAddListener: false,
    defaultDebounce: 150,
    defaultDebounceEdge: "rising",
};
/** Global SelectorObserver instances usable throughout the script for improved performance */
const globservers = {};
//#region add listener func
/**
 * Interface function for adding listeners to the {@linkcode globservers}
 * @param selector Relative to the observer's root element, so the selector can only start at of the root element's children at the earliest!
 * @param options Options for the listener
 * @template TElem The type of the element that the listener will be attached to. If set to `0`, the default type `HTMLElement` will be used.
 * @template TDomain This restricts which observers are available with the current domain
 */
function addSelectorListener(observerName, selector, options) {
    globservers[observerName].addListener(selector, options);
}
//#region init
/** Call after DOM load to initialize all SelectorObserver instances */
function initObservers() {
    try {
        //#region both sites
        //#region body
        // -> the entire <body> element - use sparingly due to performance impacts!
        //    enabled immediately
        globservers.body = new UserUtils.SelectorObserver(document.body, Object.assign(Object.assign({}, defaultObserverOptions), { defaultDebounceEdge: "falling", defaultDebounce: 150, subtree: false }));
        globservers.body.enable();
        switch (getDomain()) {
            case "ytm": {
                //#region YTM
                //#region browseResponse
                // -> for example the /channel/UC... page#
                //    enabled by "body"
                const browseResponseSelector = "ytmusic-browse-response";
                globservers.browseResponse = new UserUtils.SelectorObserver(browseResponseSelector, Object.assign(Object.assign({}, defaultObserverOptions), { subtree: true }));
                globservers.body.addListener(browseResponseSelector, {
                    listener: () => globservers.browseResponse.enable(),
                });
                //#region navBar
                // -> the navigation / title bar at the top of the page
                //    enabled by "body"
                const navBarSelector = "ytmusic-nav-bar";
                globservers.navBar = new UserUtils.SelectorObserver(navBarSelector, Object.assign(Object.assign({}, defaultObserverOptions), { subtree: false }));
                globservers.body.addListener(navBarSelector, {
                    listener: () => globservers.navBar.enable(),
                });
                //#region mainPanel
                // -> the main content panel - includes things like the video element
                //    enabled by "body"
                const mainPanelSelector = "ytmusic-player-page #main-panel";
                globservers.mainPanel = new UserUtils.SelectorObserver(mainPanelSelector, Object.assign(Object.assign({}, defaultObserverOptions), { subtree: true }));
                globservers.body.addListener(mainPanelSelector, {
                    listener: () => globservers.mainPanel.enable(),
                });
                //#region sideBar
                // -> the sidebar on the left side of the page
                //    enabled by "body"
                const sidebarSelector = "ytmusic-app-layout tp-yt-app-drawer";
                globservers.sideBar = new UserUtils.SelectorObserver(sidebarSelector, Object.assign(Object.assign({}, defaultObserverOptions), { subtree: true }));
                globservers.body.addListener(sidebarSelector, {
                    listener: () => globservers.sideBar.enable(),
                });
                //#region sideBarMini
                // -> the minimized sidebar on the left side of the page
                //    enabled by "body"
                const sideBarMiniSelector = "ytmusic-app-layout #mini-guide";
                globservers.sideBarMini = new UserUtils.SelectorObserver(sideBarMiniSelector, Object.assign(Object.assign({}, defaultObserverOptions), { subtree: true }));
                globservers.body.addListener(sideBarMiniSelector, {
                    listener: () => globservers.sideBarMini.enable(),
                });
                //#region sidePanel
                // -> the side panel on the right side of the /watch page
                //    enabled by "body"
                const sidePanelSelector = "#side-panel";
                globservers.sidePanel = new UserUtils.SelectorObserver(sidePanelSelector, Object.assign(Object.assign({}, defaultObserverOptions), { subtree: true }));
                globservers.body.addListener(sidePanelSelector, {
                    listener: () => globservers.sidePanel.enable(),
                });
                //#region playerBar
                // -> media controls bar at the bottom of the page
                //    enabled by "body"
                const playerBarSelector = "ytmusic-app-layout ytmusic-player-bar.ytmusic-app";
                globservers.playerBar = new UserUtils.SelectorObserver(playerBarSelector, Object.assign(Object.assign({}, defaultObserverOptions), { defaultDebounce: 200 }));
                globservers.body.addListener(playerBarSelector, {
                    listener: () => {
                        globservers.playerBar.enable();
                    },
                });
                //#region playerBarInfo
                // -> song title, artist, album, etc. inside the player bar
                //    enabled by "playerBar"
                const playerBarInfoSelector = `${playerBarSelector} .middle-controls .content-info-wrapper`;
                globservers.playerBarInfo = new UserUtils.SelectorObserver(playerBarInfoSelector, Object.assign(Object.assign({}, defaultObserverOptions), { attributes: true, attributeFilter: ["title"] }));
                globservers.playerBar.addListener(playerBarInfoSelector, {
                    listener: () => globservers.playerBarInfo.enable(),
                });
                //#region playerBarMiddleButtons
                // -> the buttons inside the player bar (like, dislike, lyrics, etc.)
                //    enabled by "playerBar"
                const playerBarMiddleButtonsSelector = ".middle-controls .middle-controls-buttons";
                globservers.playerBarMiddleButtons = new UserUtils.SelectorObserver(playerBarMiddleButtonsSelector, Object.assign(Object.assign({}, defaultObserverOptions), { subtree: true }));
                globservers.playerBar.addListener(playerBarMiddleButtonsSelector, {
                    listener: () => globservers.playerBarMiddleButtons.enable(),
                });
                //#region playerBarRightControls
                // -> the controls on the right side of the player bar (volume, repeat, shuffle, etc.)
                //    enabled by "playerBar"
                const playerBarRightControls = "#right-controls";
                globservers.playerBarRightControls = new UserUtils.SelectorObserver(playerBarRightControls, Object.assign(Object.assign({}, defaultObserverOptions), { subtree: true }));
                globservers.playerBar.addListener(playerBarRightControls, {
                    listener: () => globservers.playerBarRightControls.enable(),
                });
                //#region popupContainer
                // -> the container for popups (e.g. the queue popup)
                //    enabled by "body"
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
                //    enabled by "body"
                const ytGuideSelector = "#content tp-yt-app-drawer#guide #guide-inner-content";
                globservers.ytGuide = new UserUtils.SelectorObserver(ytGuideSelector, Object.assign(Object.assign({}, defaultObserverOptions), { subtree: true }));
                globservers.body.addListener(ytGuideSelector, {
                    listener: () => globservers.ytGuide.enable(),
                });
                //#region ytdBrowse
                // -> channel pages for example
                //    enabled by "body"
                const ytdBrowseSelector = "ytd-app ytd-page-manager ytd-browse";
                globservers.ytdBrowse = new UserUtils.SelectorObserver(ytdBrowseSelector, Object.assign(Object.assign({}, defaultObserverOptions), { subtree: true }));
                globservers.body.addListener(ytdBrowseSelector, {
                    listener: () => globservers.ytdBrowse.enable(),
                });
                //#region ytChannelHeader
                // -> header of a channel page
                //    enabled by "ytdBrowse"
                const ytChannelHeaderSelector = "#header tp-yt-app-header #channel-header";
                globservers.ytChannelHeader = new UserUtils.SelectorObserver(ytChannelHeaderSelector, Object.assign(Object.assign({}, defaultObserverOptions), { subtree: true }));
                globservers.ytdBrowse.addListener(ytChannelHeaderSelector, {
                    listener: () => globservers.ytChannelHeader.enable(),
                });
                //#region ytWatchFlexy
                // -> the main content of the /watch page
                //    enabled by "body"
                const ytWatchFlexySelector = "ytd-app ytd-watch-flexy";
                globservers.ytWatchFlexy = new UserUtils.SelectorObserver(ytWatchFlexySelector, Object.assign(Object.assign({}, defaultObserverOptions), { subtree: true }));
                globservers.body.addListener(ytWatchFlexySelector, {
                    listener: () => globservers.ytWatchFlexy.enable(),
                });
                //#region ytWatchMetadata
                // -> the metadata section of the /watch page (title, channel, views, description, buttons, etc. but not comments)
                //    enabled by "ytWatchFlexy"
                const ytWatchMetadataSelector = "#columns #primary-inner ytd-watch-metadata";
                globservers.ytWatchMetadata = new UserUtils.SelectorObserver(ytWatchMetadataSelector, Object.assign(Object.assign({}, defaultObserverOptions), { subtree: true }));
                globservers.ytWatchFlexy.addListener(ytWatchMetadataSelector, {
                    listener: () => globservers.ytWatchMetadata.enable(),
                });
                //#region ytMasthead
                // -> the masthead (title bar) at the top of the page
                //    enabled by "body"
                const mastheadSelector = "#content ytd-masthead#masthead";
                globservers.ytMasthead = new UserUtils.SelectorObserver(mastheadSelector, Object.assign(Object.assign({}, defaultObserverOptions), { subtree: true }));
                globservers.body.addListener(mastheadSelector, {
                    listener: () => globservers.ytMasthead.enable(),
                });
            }
        }
        //#region finalize
        emitInterface("bytm:observersReady");
    }
    catch (err) {
        error("Failed to initialize observers:", err);
    }
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
        yield waitVideoElementReady();
        try {
            if (getDomain() === "ytm") {
                const vidElem = document.querySelector(getVideoSelector());
                if (vidElem)
                    return res(Number(precision <= 0 ? Math.floor(vidElem.currentTime) : vidElem.currentTime.toFixed(precision)));
                addSelectorListener("playerBar", "tp-yt-paper-slider#progress-bar tp-yt-paper-progress#sliderBar", {
                    listener: (pbEl) => res(!isNaN(Number(pbEl.value)) ? Math.floor(Number(pbEl.value)) : null)
                });
            }
            else if (getDomain() === "yt") {
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
/**
 * Waits for the video element to be in its readyState 4 / canplay state and returns it.
 * Resolves immediately if the video element is already ready.
 */
function waitVideoElementReady() {
    return new Promise((res) => __awaiter(this, void 0, void 0, function* () {
        const waitForEl = () => addSelectorListener("body", getVideoSelector(), {
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
        if (!location.pathname.startsWith("/watch"))
            yield siteEvents.once("watchIdChanged");
        waitForEl();
    }));
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
 * This function should only be called after awaiting {@linkcode waitVideoElementReady}!
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
    catch (_a) {
        alert(t("copy_to_clipboard_error", String(text)));
    }
}let curLogLevel = LogLevel.Info;
/** Common prefix to be able to tell logged messages apart and filter them in devtools */
const consPrefix = `[${scriptInfo.name}]`;
const consPrefixDbg = `[${scriptInfo.name}/#DEBUG]`;
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
}
/** Logs all passed values to the console with a debug-specific prefix */
function dbg(...args) {
    console.log(consPrefixDbg, ...args);
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
        catch (_a) {
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
/**
 * Returns the ID of the current channel in the format `@User` or `UC...` from URLs with the path `/@User`, `/@User/videos`, `/channel/UC...` or `/channel/UC.../videos`
 * Returns null if the current page is not a channel page or there was an error parsing the URL
 */
function getCurrentChannelId() {
    return parseChannelIdFromUrl(location.href);
}
/** Returns the channel ID from a URL or null if the URL is invalid */
function parseChannelIdFromUrl(url) {
    try {
        const { pathname } = url instanceof URL ? url : new URL(url);
        if (pathname.includes("/channel/"))
            return pathname.split("/channel/")[1].split("/")[0];
        else if (pathname.includes("/@"))
            return pathname.split("/@")[1].split("/")[0];
        else
            return null;
    }
    catch (_a) {
        return null;
    }
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
    catch (_a) {
        window.open(href, "_blank", "noopener noreferrer");
    }
}
/** Tries to parse an uncompressed or compressed input string as a JSON object */
function tryToDecompressAndParse(input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return JSON.parse(input);
        }
        catch (_a) {
            try {
                return JSON.parse(yield UserUtils.decompress(input, compressionFormat, "string"));
            }
            catch (err) {
                error("Couldn't decompress and parse data due to an error:", err);
                return null;
            }
        }
    });
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
 * If a value is null, the parameter will be valueless. If a value is undefined, the parameter will be omitted.
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
 * If a value is null, the parameter will be valueless. If a value is undefined, the parameter will be omitted.
 * All values will be URI-encoded.
 * @returns Returns a URL object instead of a string
 */
function constructUrl(base, params) {
    return new URL(constructUrlString(base, params));
}
/**
 * Sends a request with the specified parameters and returns the response as a Promise.
 * Ignores [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), contrary to fetch and fetchAdvanced.
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
}
/** Cache for the vote data of YouTube videos to prevent unnecessary requests */
const voteCache = new Map();
/** Time-to-live for the vote cache in milliseconds */
const voteCacheTTL = 1000 * 60 * 5;
/**
 * Fetches the votes object for a YouTube video from the [Return YouTube Dislike API.](https://returnyoutubedislike.com/docs)
 * @param watchId The watch ID of the video
 */
function fetchVideoVotes(watchId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (voteCache.has(watchId)) {
                const cached = voteCache.get(watchId);
                if (Date.now() - cached.timestamp < voteCacheTTL)
                    return cached;
                else
                    voteCache.delete(watchId);
            }
            const votesRaw = JSON.parse((yield sendRequest({
                method: "GET",
                url: `https://returnyoutubedislikeapi.com/votes?videoId=${watchId}`,
            })).response);
            if (!("id" in votesRaw) || !("likes" in votesRaw) || !("dislikes" in votesRaw) || !("rating" in votesRaw)) {
                error("Couldn't parse video votes due to an error:", votesRaw);
                return undefined;
            }
            const votesObj = {
                id: votesRaw.id,
                likes: votesRaw.likes,
                dislikes: votesRaw.dislikes,
                rating: votesRaw.rating,
                timestamp: Date.now(),
            };
            voteCache.set(votesObj.id, votesObj);
            return votesObj;
        }
        catch (err) {
            error("Couldn't fetch video votes due to an error:", err);
            return undefined;
        }
    });
}//#region console watermark
{
    // console watermark with sexy gradient
    const styleGradient = "background: rgba(165, 38, 38, 1); background: linear-gradient(90deg, rgb(154, 31, 103) 0%, rgb(135, 31, 31) 40%, rgb(184, 64, 41) 100%);";
    const styleCommon = "color: #fff; font-size: 1.3rem;";
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
}
//#region preInit
/** Stuff that needs to be called ASAP, before anything async happens */
function preInit() {
    try {
        log("Session ID:", getSessionId());
        initInterface();
        setLogLevel(defaultLogLevel);
        if (getDomain() === "ytm")
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
        const feats = getFeatures();
        const ftInit = [];
        // for being able to apply domain-specific styles (prefix any CSS selector with "body.bytm-dom-yt" or "body.bytm-dom-ytm")
        document.body.classList.add(`bytm-dom-${domain}`);
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
            //#region welcome dlg
            if (typeof (yield GM.getValue("bytm-installed")) !== "string") {
                // open welcome menu with language selector
                const dlg = yield getWelcomeDialog();
                dlg.on("close", () => GM.setValue("bytm-installed", JSON.stringify({ timestamp: Date.now(), version: scriptInfo.version })));
                info("Showing welcome menu");
                yield dlg.open();
            }
            if (domain === "ytm") {
                //#region (ytm) layout
                if (feats.watermarkEnabled)
                    ftInit.push(["addWatermark", addWatermark()]);
                if (feats.fixSpacing)
                    ftInit.push(["fixSpacing", fixSpacing()]);
                ftInit.push(["thumbnailOverlay", initThumbnailOverlay()]);
                if (feats.hideCursorOnIdle)
                    ftInit.push(["hideCursorOnIdle", initHideCursorOnIdle()]);
                if (feats.fixHdrIssues)
                    ftInit.push(["fixHdrIssues", fixHdrIssues()]);
                if (feats.showVotes)
                    ftInit.push(["showVotes", initShowVotes()]);
                //#region (ytm) volume
                ftInit.push(["volumeFeatures", initVolumeFeatures()]);
                //#region (ytm) song lists
                if (feats.lyricsQueueButton || feats.deleteFromQueueButton)
                    ftInit.push(["queueButtons", initQueueButtons()]);
                ftInit.push(["aboveQueueBtns", initAboveQueueBtns()]);
                //#region (ytm) behavior
                if (feats.closeToastsTimeout > 0)
                    ftInit.push(["autoCloseToasts", initAutoCloseToasts()]);
                //#region (ytm) input
                ftInit.push(["arrowKeySkip", initArrowKeySkip()]);
                if (feats.anchorImprovements)
                    ftInit.push(["anchorImprovements", addAnchorImprovements()]);
                ftInit.push(["numKeysSkip", initNumKeysSkip()]);
                //#region (ytm) lyrics
                if (feats.geniusLyrics)
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
                //#region general
                ftInit.push(["initSiteEvents", initSiteEvents()]);
                //#region (ytm+yt) layout
                if (feats.disableDarkReaderSites !== "none")
                    disableDarkReader();
                if (feats.removeShareTrackingParamSites && (feats.removeShareTrackingParamSites === domain || feats.removeShareTrackingParamSites === "all"))
                    ftInit.push(["initRemShareTrackParam", initRemShareTrackParam()]);
                //#region (ytm+yt) input
                ftInit.push(["siteSwitch", initSiteSwitch(domain)]);
                if (feats.autoLikeChannels)
                    ftInit.push(["autoLikeChannels", initAutoLike()]);
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
                UserUtils.pauseFor(feats.initTimeout > 0 ? feats.initTimeout * 1000 : 8000),
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
    GM.registerMenuCommand("Fix config values", () => __awaiter(this, void 0, void 0, function* () {
        const oldFeats = JSON.parse(JSON.stringify(getFeatures()));
        yield setFeatures(fixCfgKeys(oldFeats));
        dbg("Fixed missing or extraneous config values.\nFrom:", oldFeats, "\n\nTo:", getFeatures());
        if (confirm("All missing or config values were set to their default values and extraneous ones were removed.\nDo you want to reload the page now?"))
            location.reload();
    }));
    GM.registerMenuCommand("List GM values in console with decompression", () => __awaiter(this, void 0, void 0, function* () {
        const keys = yield GM.listValues();
        dbg(`GM values (${keys.length}):`);
        if (keys.length === 0)
            dbg("  No values found.");
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
            dbg(`  "${key}"${" ".repeat(longestKey - key.length)} -${isEncoded ? "-[decoded]-" : ""}> ${lengthStr}${finalVal}`);
        }
    }), "l");
    GM.registerMenuCommand("List GM values in console, without decompression", () => __awaiter(this, void 0, void 0, function* () {
        const keys = yield GM.listValues();
        dbg(`GM values (${keys.length}):`);
        if (keys.length === 0)
            dbg("  No values found.");
        const values = {};
        let longestKey = 0;
        for (const key of keys) {
            const val = yield GM.getValue(key, undefined);
            values[key] = val;
            longestKey = Math.max(longestKey, key.length);
        }
        for (const [key, val] of Object.entries(values)) {
            const lengthStr = String(val).length >= 16 ? `(${String(val).length} chars) ` : "";
            dbg(`  "${key}"${" ".repeat(longestKey - key.length)} -> ${lengthStr}${val}`);
        }
    }));
    GM.registerMenuCommand("Delete all GM values", () => __awaiter(this, void 0, void 0, function* () {
        const keys = yield GM.listValues();
        if (confirm(`Clear all ${keys.length} GM values?\nSee console for details.`)) {
            dbg(`Clearing ${keys.length} GM values:`);
            if (keys.length === 0)
                dbg("  No values found.");
            for (const key of keys) {
                yield GM.deleteValue(key);
                dbg(`  Deleted ${key}`);
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
                dbg(`Deleted GM value '${key}' with previous value '${oldVal && String(oldVal).length > truncLength ? String(oldVal).substring(0, truncLength) + `… (${String(oldVal).length} / ${truncLength} chars.)` : oldVal}'`);
            }
        }
    }), "n");
    GM.registerMenuCommand("Reset install timestamp", () => __awaiter(this, void 0, void 0, function* () {
        yield GM.deleteValue("bytm-installed");
        dbg("Reset install time.");
    }), "t");
    GM.registerMenuCommand("Reset version check timestamp", () => __awaiter(this, void 0, void 0, function* () {
        yield GM.deleteValue("bytm-version-check");
        dbg("Reset version check time.");
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
                    lines.push(`        ${v.length > 1 && i !== v.length - 1 ? "├" : "└"}> ${continuous ? "continuous" : "single-shot"}${all ? ", multiple" : ""}`);
                });
            });
        }
        dbg(`Showing currently active listeners for ${Object.keys(globservers).length} observers with ${listenersAmt} total listeners:\n${lines.join("\n")}`);
    }), "s");
    GM.registerMenuCommand("Compress value", () => __awaiter(this, void 0, void 0, function* () {
        const input = prompt("Enter the value to compress.\nSee console for output.");
        if (input && input.length > 0) {
            const compressed = yield UserUtils.compress(input, compressionFormat);
            dbg(`Compression result (${input.length} chars -> ${compressed.length} chars)\nValue: ${compressed}`);
        }
    }));
    GM.registerMenuCommand("Decompress value", () => __awaiter(this, void 0, void 0, function* () {
        const input = prompt("Enter the value to decompress.\nSee console for output.");
        if (input && input.length > 0) {
            const decompressed = yield UserUtils.decompress(input, compressionFormat);
            dbg(`Decompresion result (${input.length} chars -> ${decompressed.length} chars)\nValue: ${decompressed}`);
        }
    }));
    log("Registered dev menu commands");
}
preInit();})(UserUtils,compareVersions,marked,Fuse);//# sourceMappingURL=http://localhost:8710/BetterYTM.user.js.map
