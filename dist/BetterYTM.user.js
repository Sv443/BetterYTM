// ==UserScript==
// @name              BetterYTM
// @namespace         https://github.com/Sv443/BetterYTM
// @version           1.1.1
// @description       Lots of configurable layout and user experience improvements for YouTube Music™
// @description:de-DE Konfigurierbare Layout- und Benutzererfahrungs-Verbesserungen für YouTube Music™
// @description:en-US Configurable layout and user experience improvements for YouTube Music™
// @description:en-UK Configurable layout and user experience improvements for YouTube Music™
// @description:es-ES Mejoras de diseño y experiencia de usuario configurables para YouTube Music™
// @description:fr-FR Améliorations de la mise en page et de l'expérience utilisateur configurables pour YouTube Music™
// @description:hi-IN YouTube Music™ के लिए विन्यास और यूजर अनुभव में सुधार करने योग्य लेआउट और यूजर अनुभव सुधार
// @description:ja-JA YouTube Music™のレイアウトとユーザーエクスペリエンスの改善を設定可能にする
// @description:pt-BR Melhorias configuráveis no layout e na experiência do usuário para o YouTube Music™
// @description:zh-CN 可配置的布局和YouTube Music™的用户体验改进
// @homepageURL       https://github.com/Sv443/BetterYTM#readme
// @supportURL        https://github.com/Sv443/BetterYTM/issues
// @license           AGPL-3.0-only
// @author            Sv443
// @copyright         Sv443 (https://github.com/Sv443)
// @icon              https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/images/logo/logo_48.png?b=835fd3a
// @match             https://music.youtube.com/*
// @match             https://www.youtube.com/*
// @run-at            document-start
// @downloadURL       https://raw.githubusercontent.com/Sv443/BetterYTM/develop/dist/BetterYTM.user.js
// @updateURL         https://raw.githubusercontent.com/Sv443/BetterYTM/develop/dist/BetterYTM.user.js
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
// @resource          css-anchor_improvements https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/style/anchorImprovements.css?b=835fd3a
// @resource          css-fix_spacing         https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/style/fixSpacing.css?b=835fd3a
// @resource          doc-changelog           https://raw.githubusercontent.com/Sv443/BetterYTM/develop/changelog.md?b=835fd3a
// @resource          icon-advanced_mode      https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/icons/plus_circle_small.svg?b=835fd3a
// @resource          icon-arrow_down         https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/icons/arrow_down.svg?b=835fd3a
// @resource          icon-delete             https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/icons/delete.svg?b=835fd3a
// @resource          icon-error              https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/icons/error.svg?b=835fd3a
// @resource          icon-experimental       https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/icons/beaker_small.svg?b=835fd3a
// @resource          icon-globe              https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/icons/globe.svg?b=835fd3a
// @resource          icon-help               https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/icons/help.svg?b=835fd3a
// @resource          icon-image_filled       https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/icons/image_filled.svg?b=835fd3a
// @resource          icon-image              https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/icons/image.svg?b=835fd3a
// @resource          icon-link               https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/icons/link.svg?b=835fd3a
// @resource          icon-lyrics             https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/icons/lyrics.svg?b=835fd3a
// @resource          icon-reload             https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/icons/refresh.svg?b=835fd3a
// @resource          icon-skip_to            https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/icons/skip_to.svg?b=835fd3a
// @resource          icon-spinner            https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/icons/spinner.svg?b=835fd3a
// @resource          img-logo                https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/images/logo/logo_48.png?b=835fd3a
// @resource          img-close               https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/images/close.png?b=835fd3a
// @resource          img-discord             https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/images/external/discord.png?b=835fd3a
// @resource          img-github              https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/images/external/github.png?b=835fd3a
// @resource          img-greasyfork          https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/images/external/greasyfork.png?b=835fd3a
// @resource          img-openuserjs          https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/images/external/openuserjs.png?b=835fd3a
// @resource          trans-de_DE             https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/translations/de_DE.json?b=835fd3a
// @resource          trans-en_US             https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/translations/en_US.json?b=835fd3a
// @resource          trans-en_UK             https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/translations/en_UK.json?b=835fd3a
// @resource          trans-es_ES             https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/translations/es_ES.json?b=835fd3a
// @resource          trans-fr_FR             https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/translations/fr_FR.json?b=835fd3a
// @resource          trans-hi_IN             https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/translations/hi_IN.json?b=835fd3a
// @resource          trans-ja_JA             https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/translations/ja_JA.json?b=835fd3a
// @resource          trans-pt_BR             https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/translations/pt_BR.json?b=835fd3a
// @resource          trans-zh_CN             https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/translations/zh_CN.json?b=835fd3a
// @require           https://cdn.jsdelivr.net/npm/@sv443-network/userutils@6.3.0/dist/index.global.js
// @require           https://cdn.jsdelivr.net/npm/fuse.js@7.0.0/dist/fuse.basic.js
// @require           https://cdn.jsdelivr.net/npm/marked@12.0.0/lib/marked.umd.js
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

(function(UserUtils,marked,Fuse){'use strict';function _interopNamespaceDefault(e){var n=Object.create(null);if(e){Object.keys(e).forEach(function(k){if(k!=='default'){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:true,get:function(){return e[k]}});}})}n.default=e;return Object.freeze(n)}var UserUtils__namespace=/*#__PURE__*/_interopNamespaceDefault(UserUtils);/******************************************************************************
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
const buildNumberRaw = "835fd3a";
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
};var de_DE = {
	name: "Deutsch (Deutschland)",
	nameEnglish: "German",
	emoji: "🇩🇪",
	userscriptDesc: "Konfigurierbare Layout- und Benutzererfahrungs-Verbesserungen für YouTube Music™",
	authors: [
		"Sv443"
	]
};
var en_US = {
	name: "English (United States)",
	nameEnglish: "English (US)",
	emoji: "🇺🇸",
	userscriptDesc: "Configurable layout and user experience improvements for YouTube Music™",
	authors: [
		"Sv443"
	]
};
var en_UK = {
	name: "English (United Kingdom)",
	nameEnglish: "English (UK)",
	emoji: "🇬🇧",
	userscriptDesc: "Configurable layout and user experience improvements for YouTube Music™",
	authors: [
		"Sv443"
	]
};
var es_ES = {
	name: "Español (España)",
	nameEnglish: "Spanish",
	emoji: "🇪🇸",
	userscriptDesc: "Mejoras de diseño y experiencia de usuario configurables para YouTube Music™",
	authors: [
		"Sv443"
	]
};
var fr_FR = {
	name: "Français (France)",
	nameEnglish: "French",
	emoji: "🇫🇷",
	userscriptDesc: "Améliorations de la mise en page et de l'expérience utilisateur configurables pour YouTube Music™",
	authors: [
		"Sv443"
	]
};
var hi_IN = {
	name: "हिंदी (भारत)",
	nameEnglish: "Hindi",
	emoji: "🇮🇳",
	userscriptDesc: "YouTube Music™ के लिए विन्यास और यूजर अनुभव में सुधार करने योग्य लेआउट और यूजर अनुभव सुधार",
	authors: [
		"Sv443"
	]
};
var ja_JA = {
	name: "日本語 (日本)",
	nameEnglish: "Japanese",
	emoji: "🇯🇵",
	userscriptDesc: "YouTube Music™のレイアウトとユーザーエクスペリエンスの改善を設定可能にする",
	authors: [
		"Sv443"
	]
};
var pt_BR = {
	name: "Português (Brasil)",
	nameEnglish: "Portuguese",
	emoji: "🇵🇹",
	userscriptDesc: "Melhorias configuráveis no layout e na experiência do usuário para o YouTube Music™",
	authors: [
		"Sv443"
	]
};
var zh_CN = {
	name: "中文（简化，中国）",
	nameEnglish: "Chinese (simpl.)",
	emoji: "🇨🇳",
	userscriptDesc: "可配置的布局和YouTube Music™的用户体验改进",
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
};/** A fraction of this max value will be removed from the "last viewed" timestamp when adding penalized cache entries */
const maxViewedPenalty = 1000 * 60 * 60 * 24 * 5; // 5 days
/** A fraction of this max value will be removed from the "added" timestamp when adding penalized cache entries */
const maxAddedPenalty = 1000 * 60 * 60 * 24 * 15; // 15 days
let canCompress$1 = true;
const lyricsCacheMgr = new UserUtils.DataStore({
    id: "bytm-lyrics-cache",
    defaultData: {
        cache: [],
    },
    formatVersion: 1,
    encodeData: (data) => canCompress$1 ? UserUtils.compress(data, compressionFormat, "string") : data,
    decodeData: (data) => canCompress$1 ? UserUtils.decompress(data, compressionFormat, "string") : data,
});
function initLyricsCache() {
    return __awaiter(this, void 0, void 0, function* () {
        canCompress$1 = yield compressionSupported();
        const data = yield lyricsCacheMgr.loadData();
        log(`Loaded lyrics cache (${data.cache.length} entries):`, data);
        emitInterface("bytm:lyricsCacheReady", data);
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
        log("Updating cache entry for", artist, "-", song, "to", newEntry);
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
 * ⚠️ {@linkcode artist} and {@linkcode song} need to be sanitized first!
 * @param penaltyFr Fraction to remove from the timestamp values - has to be between 0 and 1 - default is 0 (no penalty) - (0.25 = only penalized by a quarter of the predefined max penalty)
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
        initializedLocales.add(locale);
        try {
            const transUrl = yield getResourceUrl(`trans-${locale}`);
            const transFile = yield (yield UserUtils.fetchAdvanced(transUrl, fetchOpts)).json();
            // merge with base translations if specified
            const baseTransUrl = transFile.base ? yield getResourceUrl(`trans-${transFile.base}`) : undefined;
            const baseTransFile = baseTransUrl ? yield (yield UserUtils.fetchAdvanced(baseTransUrl, fetchOpts)).json() : undefined;
            const translations = Object.assign(Object.assign({}, ((_a = baseTransFile === null || baseTransFile === void 0 ? void 0 : baseTransFile.translations) !== null && _a !== void 0 ? _a : {})), transFile.translations);
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
}/** ID of the last opened (top-most) dialog */
let currentDialogId = null;
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
    /** Clears all dialog contents (unmounts them from the DOM) in preparation for a new rendering call */
    unmount() {
        var _a;
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
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            e === null || e === void 0 ? void 0 : e.preventDefault();
            e === null || e === void 0 ? void 0 : e.stopImmediatePropagation();
            if (this.isOpen())
                return;
            this.dialogOpen = true;
            if (!this.isMounted())
                yield this.mount();
            document.body.classList.add("bytm-disable-scroll");
            (_a = document.querySelector("ytmusic-app")) === null || _a === void 0 ? void 0 : _a.setAttribute("inert", "true");
            const dialogBg = document.querySelector(`#bytm-${this.id}-dialog-bg`);
            if (!dialogBg)
                return warn(`Couldn't find background element for dialog with ID '${this.id}'`);
            dialogBg.style.visibility = "visible";
            dialogBg.style.display = "block";
            dialogBg.inert = false;
            currentDialogId = this.id;
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
        document.body.classList.remove("bytm-disable-scroll");
        (_a = document.querySelector("ytmusic-app")) === null || _a === void 0 ? void 0 : _a.removeAttribute("inert");
        const dialogBg = document.querySelector(`#bytm-${this.id}-dialog-bg`);
        if (!dialogBg)
            return warn(`Couldn't find background element for dialog with ID '${this.id}'`);
        dialogBg.style.visibility = "hidden";
        dialogBg.style.display = "none";
        dialogBg.inert = true;
        if (BytmDialog.getCurrentDialogId() === this.id)
            currentDialogId = null;
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
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
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
                closeBtnEl.addEventListener("click", () => this.close());
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
 * Creates a generic button element.
 * If `href` is provided, the button will be an anchor element.
 * If `onClick` is provided, the button will be a div element.
 */
function createGenericBtn({ resourceName, title, href, onClick, }) {
    return __awaiter(this, void 0, void 0, function* () {
        let btnElem;
        if (href) {
            btnElem = document.createElement("a");
            btnElem.href = href;
            btnElem.role = "button";
            btnElem.target = "_blank";
            btnElem.rel = "noopener noreferrer";
        }
        else {
            btnElem = document.createElement("div");
            onClick && onInteraction(btnElem, onClick);
        }
        btnElem.classList.add("bytm-generic-btn");
        btnElem.ariaLabel = btnElem.title = title;
        const imgElem = document.createElement("img");
        imgElem.classList.add("bytm-generic-btn-img");
        imgElem.src = yield getResourceUrl(resourceName);
        btnElem.appendChild(imgElem);
        return btnElem;
    });
}/** Array of all site events */
const allSiteEvents = [
    "configChanged",
    "configOptionChanged",
    "rebuildCfgMenu",
    "cfgMenuClosed",
    "welcomeMenuClosed",
    "hotkeyInputActive",
    "queueChanged",
    "autoplayQueueChanged",
    "songTitleChanged",
    "watchIdChanged",
];
/** EventEmitter instance that is used to detect changes to the site */
const siteEvents = createNanoEvents();
let observers = [];
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
            let initialPlay = true;
            addSelectorListener("playerBarInfo", "yt-formatted-string.title", {
                continuous: true,
                listener: (titleElem) => {
                    const oldTitle = lastTitle;
                    const newTitle = titleElem.textContent;
                    if (newTitle === lastTitle || !newTitle)
                        return;
                    lastTitle = newTitle;
                    info(`Detected song change - old title: "${oldTitle}" - new title: "${newTitle}" - initial play: ${initialPlay}`);
                    emitSiteEvent("songTitleChanged", newTitle, oldTitle, initialPlay);
                    initialPlay = false;
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
                emitSiteEvent("fullscreenToggled", isFullscreen);
            });
            addSelectorListener("mainPanel", "ytmusic-player#player", {
                listener: (el) => {
                    playerFullscreenObs.observe(el, {
                        attributeFilter: ["player-ui-state"],
                    });
                },
            });
            //#region other
            let lastWatchId = null;
            const checkWatchId = () => {
                if (location.pathname.startsWith("/watch")) {
                    const newWatchId = new URL(location.href).searchParams.get("v");
                    if (newWatchId && newWatchId !== lastWatchId) {
                        info(`Detected watch ID change - old ID: "${lastWatchId}" - new ID: "${newWatchId}"`);
                        emitSiteEvent("watchIdChanged", newWatchId, lastWatchId);
                        lastWatchId = newWatchId;
                    }
                }
                setTimeout(checkWatchId, 200);
            };
            window.addEventListener("bytm:ready", checkWatchId, { once: true });
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
}const reservedKeys = ["ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "Meta", "Tab", "Space", " "];
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
        siteEvents.emit("hotkeyInputActive", false);
        const curHk = currentHotkey !== null && currentHotkey !== void 0 ? currentHotkey : initialValue;
        inputElem.value = (_a = curHk === null || curHk === void 0 ? void 0 : curHk.code) !== null && _a !== void 0 ? _a : t("hotkey_input_click_to_change");
        inputElem.dataset.state = "inactive";
        inputElem.ariaLabel = inputElem.title = t("hotkey_input_click_to_change_tooltip");
        infoElem.innerHTML = curHk ? getHotkeyInfoHtml(curHk) : "";
    };
    const activate = () => {
        siteEvents.emit("hotkeyInputActive", true);
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
        console.log(">> keypress", e);
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
function createToggleInput({ onChange, initialValue = false, id = UserUtils.randomId(8, 26), labelPos = "left", }) {
    return __awaiter(this, void 0, void 0, function* () {
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
        const textAreaInteraction = ({ shiftKey }) => __awaiter(this, void 0, void 0, function* () {
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
            GM.setClipboard(String((evt === null || evt === void 0 ? void 0 : evt.shiftKey) ? lastUncompressedCfgString : yield UserUtils.compress(JSON.stringify({ formatVersion, data: getFeatures() }), compressionFormat, "string")));
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
/** Creates and/or returns the help dialog for a specific feature */
function getFeatHelpDialog({ featKey, }) {
    return __awaiter(this, void 0, void 0, function* () {
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
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const contElem = document.createElement("div");
        const featDescElem = document.createElement("h3");
        featDescElem.role = "subheading";
        featDescElem.textContent = t(`feature_desc_${curFeatKey}`);
        featDescElem.id = "bytm-feat-help-dialog-desc";
        const helpTextElem = document.createElement("div");
        helpTextElem.id = "bytm-feat-help-dialog-text";
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
var version = "1.1.1";
var description = "Lots of configurable layout and user experience improvements for YouTube Music™";
var homepage = "https://github.com/Sv443/BetterYTM";
var main = "./src/index.ts";
var type = "module";
var scripts = {
	dev: "concurrently \"nodemon --exec npm run build-watch\" \"npm run serve\"",
	serve: "npm run node-ts -- ./src/tools/serve.ts",
	lint: "tsc --noEmit && eslint .",
	build: "rollup -c",
	"build-watch": "rollup -c --config-mode development --config-host github --config-branch develop --config-assetSource=local",
	"build-develop": "rollup -c --config-mode development --config-host github --config-branch develop",
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
	test: "npm run node-ts -- ./test.ts"
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
	"@types/node": "^20.2.4",
	"@typescript-eslint/eslint-plugin": "^6.7.4",
	"@typescript-eslint/parser": "^6.7.4",
	concurrently: "^8.1.0",
	dotenv: "^16.4.1",
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
function getVersionNotifDialog({ latestTag, }) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!verNotifDialog) {
            const changelogMdFull = yield getChangelogMd();
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
        logoEl.src = yield getResourceUrl("img-logo");
        logoEl.alt = "BetterYTM logo";
        headerEl.appendChild(logoEl);
        return headerEl;
    });
}
let disableUpdateCheck = false;
function renderBody$1({ latestTag, changelogHtml, }) {
    return __awaiter(this, void 0, void 0, function* () {
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
        const disableToggleEl = yield createToggleInput({
            id: "disable-update-check",
            initialValue: false,
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
            config.versionCheck = !disableUpdateCheck;
            yield setFeatures(config);
        }));
        const btnWrapper = document.createElement("div");
        btnWrapper.id = "bytm-version-notif-dialog-btns";
        const btnUpdate = document.createElement("button");
        btnUpdate.className = "bytm-btn";
        btnUpdate.tabIndex = 0;
        btnUpdate.textContent = t("open_update_page_install_manually", hostPlatformNames[host]);
        onInteraction(btnUpdate, () => {
            window.open(pkg.updates[host]);
            verNotifDialog === null || verNotifDialog === void 0 ? void 0 : verNotifDialog.close();
        });
        const btnClose = document.createElement("button");
        btnClose.className = "bytm-btn";
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
    var _a, _b, _c, _d, _f;
    return __awaiter(this, void 0, void 0, function* () {
        if (isCfgMenuAdded)
            return;
        isCfgMenuAdded = true;
        initLocale = getFeatures().locale;
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
            if (isCfgMenuOpen && e.key === "Escape")
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
        titleCont.className = "bytm-menu-titlecont";
        titleCont.role = "heading";
        titleCont.ariaLevel = "1";
        const titleElem = document.createElement("h2");
        titleElem.className = "bytm-menu-title";
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
            anchorElem.className = "bytm-menu-link bytm-no-select";
            anchorElem.rel = "noopener noreferrer";
            anchorElem.href = href;
            anchorElem.target = "_blank";
            anchorElem.tabIndex = 0;
            anchorElem.role = "button";
            anchorElem.ariaLabel = anchorElem.title = title;
            const extendedAnchorEl = document.createElement("a");
            extendedAnchorEl.className = "bytm-menu-link extended-link bytm-no-select";
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
        footerCont.className = "bytm-menu-footer-cont";
        const footerElemCont = document.createElement("div");
        const footerElem = document.createElement("div");
        footerElem.classList.add("bytm-menu-footer", "hidden");
        footerElem.setAttribute("aria-hidden", "true");
        footerElem.textContent = t("reload_hint");
        footerElem.role = "alert";
        const reloadElem = document.createElement("button");
        reloadElem.classList.add("bytm-btn");
        reloadElem.style.marginLeft = "10px";
        reloadElem.textContent = t("reload_now");
        reloadElem.ariaLabel = reloadElem.title = t("reload_tooltip");
        reloadElem.addEventListener("click", () => {
            closeCfgMenu();
            disableBeforeUnload();
            location.reload();
        });
        footerElem.appendChild(reloadElem);
        footerElemCont.appendChild(footerElem);
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
        footerCont.appendChild(footerElemCont);
        footerCont.appendChild(buttonsCont);
        //#region feature list
        const featuresCont = document.createElement("div");
        featuresCont.id = "bytm-menu-opts";
        const onCfgChange = (key, initialVal, newVal) => __awaiter(this, void 0, void 0, function* () {
            var _g, _h;
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
            (_h = (_g = featInfo[key]) === null || _g === void 0 ? void 0 : _g.change) === null || _h === void 0 ? void 0 : _h.call(_g, featConf);
            if (requiresReload) {
                footerElem.classList.remove("hidden");
                footerElem.setAttribute("aria-hidden", "false");
            }
            else if (!requiresReload) {
                footerElem.classList.add("hidden");
                footerElem.setAttribute("aria-hidden", "true");
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
        const fmtVal = (v) => {
            try {
                return (typeof v === "object" ? JSON.stringify(v) : String(v)).trim();
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
            catHeaderElem.textContent = `${t(`feature_category_${category}`)}:`;
            featuresCont.appendChild(catHeaderElem);
            for (const featKey in featObj) {
                const ftInfo = featInfo[featKey];
                // @ts-ignore
                if (!ftInfo || ftInfo.hidden === true)
                    continue;
                if (ftInfo.advanced && !featureCfg.advancedMode)
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
                    if (getFeatures().advancedMode) {
                        const defVal = fmtVal(ftDefault);
                        // @ts-ignore
                        const rel = ftInfo.reloadRequired === false ? "" : " (reload required)";
                        const adv = ftInfo.advanced ? " (advanced feature)" : "";
                        featLeftSideElem.title = `${featKey}${rel}${adv} - default value: ${defVal.length === 0 ? "(undefined)" : defVal}`;
                    }
                    const textElem = document.createElement("span");
                    textElem.textContent = t(`feature_desc_${featKey}`);
                    let adornmentElem;
                    const adornContent = (_c = ftInfo.textAdornment) === null || _c === void 0 ? void 0 : _c.call(ftInfo);
                    const adornContentAw = adornContent instanceof Promise ? yield adornContent : adornContent;
                    if ((typeof adornContent === "string" || adornContent instanceof Promise) && typeof adornContentAw !== "undefined") {
                        adornmentElem = document.createElement("span");
                        adornmentElem.id = `bytm-ftitem-${featKey}-adornment`;
                        adornmentElem.classList.add("bytm-ftitem-adornment");
                        adornmentElem.innerHTML = adornContentAw;
                    }
                    let helpElem;
                    // @ts-ignore
                    const hasHelpTextFunc = typeof ((_d = featInfo[featKey]) === null || _d === void 0 ? void 0 : _d.helpText) === "function";
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
                        advCopyHiddenBtn.classList.add("bytm-ftconf-adv-copy-btn");
                        advCopyHiddenBtn.tabIndex = 0;
                        advCopyHiddenBtn.textContent = t("copy_hidden_value");
                        advCopyHiddenBtn.ariaLabel = advCopyHiddenBtn.title = t("copy_hidden_tooltip");
                        const copyHiddenInteraction = (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            GM.setClipboard(String(getFeatures()[featKey]));
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
                        // @ts-ignore
                        if (typeof ftInfo.min !== "undefined") // @ts-ignore
                            inputElem.min = ftInfo.min;
                        // @ts-ignore
                        if (typeof ftInfo.max !== "undefined") // @ts-ignore
                            inputElem.max = ftInfo.max;
                        if (typeof initialVal !== "undefined")
                            inputElem.value = String(initialVal);
                        if (type === "text" && ftInfo.valueHidden)
                            inputElem.value = String(initialVal).length === 0 ? "" : "•".repeat(16);
                        if (type === "number" || type === "slider" && step)
                            inputElem.step = String(step);
                        if (type === "toggle" && typeof initialVal !== "undefined")
                            inputElem.checked = Boolean(initialVal);
                        // @ts-ignore
                        const unitTxt = (typeof ftInfo.unit === "string" ? ftInfo.unit : (
                        // @ts-ignore
                        typeof ftInfo.unit === "function" ? ftInfo.unit(Number(inputElem.value)) : ""));
                        let labelElem;
                        let lastDisplayedVal;
                        if (type === "slider") {
                            labelElem = document.createElement("label");
                            labelElem.classList.add("bytm-ftconf-label", "bytm-slider-label");
                            labelElem.textContent = `${fmtVal(initialVal)}${unitTxt}`;
                            inputElem.addEventListener("input", () => {
                                if (labelElem && lastDisplayedVal !== inputElem.value) {
                                    labelElem.textContent = `${fmtVal(inputElem.value)}${unitTxt}`;
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
                // @ts-ignore
                if (ftInfo.type === "text" && ftInfo.valueHidden)
                    ftElem.value = String(value).length === 0 ? "" : "•".repeat(16);
                if (!labelElem)
                    continue;
                // @ts-ignore
                const unitTxt = " " + (typeof ftInfo.unit === "string" ? ftInfo.unit : (
                // @ts-ignore
                typeof ftInfo.unit === "function" ? ftInfo.unit(Number(ftElem.value)) : ""));
                if (ftInfo.type === "slider")
                    labelElem.textContent = `${fmtVal(Number(value))}${unitTxt}`;
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
        (_f = document.querySelector("ytmusic-app")) === null || _f === void 0 ? void 0 : _f.removeAttribute("inert");
        backgroundElem.style.visibility = "hidden";
        backgroundElem.style.display = "none";
    });
}
//#region open & close
/** Closes the config menu if it is open. If a bubbling event is passed, its propagation will be prevented. */
function closeCfgMenu(evt, enableScroll = true) {
    var _a, _b;
    if (!isCfgMenuOpen)
        return;
    isCfgMenuOpen = false;
    (evt === null || evt === void 0 ? void 0 : evt.bubbles) && evt.stopPropagation();
    if (enableScroll) {
        document.body.classList.remove("bytm-disable-scroll");
        (_a = document.querySelector("ytmusic-app")) === null || _a === void 0 ? void 0 : _a.removeAttribute("inert");
    }
    const menuBg = document.querySelector("#bytm-cfg-menu-bg");
    siteEvents.emit("cfgMenuClosed");
    if (!menuBg)
        return;
    (_b = menuBg.querySelectorAll(".bytm-ftconf-adv-copy-hint")) === null || _b === void 0 ? void 0 : _b.forEach((el) => el.style.display = "none");
    clearTimeout(hiddenCopiedTxtTimeout);
    menuBg.style.visibility = "hidden";
    menuBg.style.display = "none";
}
/** Opens the config menu if it is closed */
function openCfgMenu() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (!isCfgMenuAdded)
            yield addCfgMenu();
        if (isCfgMenuOpen)
            return;
        isCfgMenuOpen = true;
        document.body.classList.add("bytm-disable-scroll");
        (_a = document.querySelector("ytmusic-app")) === null || _a === void 0 ? void 0 : _a.setAttribute("inert", "true");
        const menuBg = document.querySelector("#bytm-cfg-menu-bg");
        if (!menuBg)
            return;
        menuBg.style.visibility = "visible";
        menuBg.style.display = "block";
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
}let welcomeDialog = null;
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
        titleLogoElem.src = yield getResourceUrl("img-logo");
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
function doVersionCheck(notifyNoUpdatesFound = false) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
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
        const versionComp = compareVersions(scriptInfo.version, latestTag);
        info("Version check - current version:", scriptInfo.version, "- latest version:", latestTag);
        if (versionComp < 0) {
            const dialog = yield getVersionNotifDialog({ latestTag });
            yield dialog.open();
            return;
        }
        return noUpdateFound();
    });
}
/**
 * Crudely compares two semver version strings.
 * The format is assumed to *always* be `MAJOR.MINOR.PATCH`, where each part is a number.
 * @returns Returns 1 if `a > b`, or -1 if `a < b`, or 0 if `a == b`
 */
function compareVersions(a, b) {
    a = String(a).trim();
    b = String(b).trim();
    if ([a, b].some(v => !v.match(/^\d+\.\d+\.\d+$/)))
        throw new TypeError("Invalid version format, expected 'MAJOR.MINOR.PATCH'");
    const pa = a.split(".");
    const pb = b.split(".");
    for (let i = 0; i < 3; i++) {
        const na = Number(pa[i]);
        const nb = Number(pb[i]);
        if (na > nb)
            return 1;
        if (nb > na)
            return -1;
        if (!isNaN(na) && isNaN(nb))
            return 1;
        if (isNaN(na) && !isNaN(nb))
            return -1;
    }
    return 0;
}
/**
 * Compares two version arrays.
 * The format is assumed to *always* be `[MAJOR, MINOR, PATCH]`, where each part is a positive integer number.
 * @returns Returns 1 if `a > b`, or -1 if `a < b`, or 0 if `a == b`
 */
function compareVersionArrays(a, b) {
    if ([a, b].some(v => !Array.isArray(v) || v.length !== 3 || v.some(iv => !Number.isInteger(iv) || iv < 0)))
        throw new TypeError("Invalid version format, expected '[MAJOR, MINOR, PATCH]' consisting only of positive integers");
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i])
            return 1;
        if (b[i] > a[i])
            return -1;
    }
    return 0;
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
        return;
    addStyle(`\
#bytm-vol-slider-cont tp-yt-paper-slider#volume-slider {
  width: ${size}px !important;
}`, "vol-slider-size");
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
function volumeSharedBetweenTabsDisabled() {
    return __awaiter(this, void 0, void 0, function* () {
        yield GM.deleteValue("bytm-shared-volume");
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
}//#region cfg menu buttons
let logoExchanged = false, improveLogoCalled = false;
/** Adds a watermark beneath the logo */
function addWatermark() {
    return __awaiter(this, void 0, void 0, function* () {
        const watermark = document.createElement("a");
        watermark.role = "button";
        watermark.id = "bytm-watermark";
        watermark.className = "style-scope ytmusic-nav-bar bytm-no-select";
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
            listener: (logoElem) => UserUtils.insertAfter(logoElem, watermark),
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
            const iconUrl = yield getResourceUrl("img-logo");
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
/** Called whenever the avatar popover menu exists on YTM to add a BYTM config menu button to the user menu popover */
function addConfigMenuOptionYTM(container) {
    return __awaiter(this, void 0, void 0, function* () {
        const cfgOptElem = document.createElement("div");
        cfgOptElem.className = "bytm-cfg-menu-option";
        const cfgOptItemElem = document.createElement("div");
        cfgOptItemElem.className = "bytm-cfg-menu-option-item";
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
        cfgOptIconElem.className = "bytm-cfg-menu-option-icon";
        cfgOptIconElem.src = yield getResourceUrl("img-logo");
        const cfgOptTextElem = document.createElement("div");
        cfgOptTextElem.className = "bytm-cfg-menu-option-text";
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
        const btnElem = yield createGenericBtn({
            resourceName: "img-logo",
            title: t("open_menu_tooltip", scriptInfo.name),
            onClick(e) {
                if ((!e.shiftKey && !e.ctrlKey) || logoExchanged)
                    openCfgMenu();
                if (!logoExchanged && (e.shiftKey || e.ctrlKey))
                    exchangeLogo();
            },
        });
        const firstChild = container.firstElementChild;
        if (firstChild)
            container.insertBefore(btnElem, firstChild);
        else {
            const notifEl = container.querySelector("ytd-notification-topbar-button-renderer");
            notifEl && UserUtils.insertAfter(notifEl, btnElem);
        }
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
            const css = yield (yield UserUtils.fetchAdvanced(yield getResourceUrl("css-anchor_improvements"))).text();
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
            // TODO: needs to be optimized
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
        try {
            const css = yield (yield UserUtils.fetchAdvanced(yield getResourceUrl("css-fix_spacing"))).text();
            if (css)
                addStyle(css, "fix-spacing");
        }
        catch (err) {
            error("Couldn't fix spacing due to an error:", err);
        }
    });
}
//#region scroll to active
/** Adds a button to the queue to scroll to the active song */
function addScrollToActiveBtn() {
    return __awaiter(this, void 0, void 0, function* () {
        addSelectorListener("sidePanel", "#tabsContent tp-yt-paper-tab:nth-of-type(1)", {
            listener: (tabElem) => __awaiter(this, void 0, void 0, function* () {
                const containerElem = document.createElement("div");
                containerElem.id = "bytm-scroll-to-active-btn-cont";
                const linkElem = document.createElement("div");
                linkElem.id = "bytm-scroll-to-active-btn";
                linkElem.tabIndex = 0;
                linkElem.classList.add("ytmusic-player-bar", "bytm-generic-btn");
                linkElem.ariaLabel = linkElem.title = t("scroll_to_playing");
                linkElem.role = "button";
                const imgElem = document.createElement("img");
                imgElem.classList.add("bytm-generic-btn-img");
                imgElem.src = yield getResourceUrl("icon-skip_to");
                const scrollToActiveInteraction = () => {
                    const activeItem = document.querySelector("#side-panel .ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"loading\"], #side-panel .ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"playing\"], #side-panel .ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"paused\"]");
                    if (!activeItem)
                        return;
                    activeItem.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "center",
                    });
                };
                siteEvents.on("fullscreenToggled", (isFullscreen) => {
                    if (isFullscreen)
                        containerElem.classList.add("hidden");
                    else
                        containerElem.classList.remove("hidden");
                });
                onInteraction(linkElem, scrollToActiveInteraction, { capture: true });
                linkElem.appendChild(imgElem);
                containerElem.appendChild(linkElem);
                tabElem.appendChild(containerElem);
            }),
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
        yield waitVideoElementReady();
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
                const toggleBtnElem = document.querySelector("#bytm-thumbnail-overlay-toggle");
                const toggleBtnImgElem = document.querySelector("#bytm-thumbnail-overlay-toggle > img");
                if (toggleBtnImgElem)
                    toggleBtnImgElem.src = yield getResourceUrl(`icon-image${showOverlay ? "_filled" : ""}`);
                if (toggleBtnElem)
                    toggleBtnElem.ariaLabel = toggleBtnElem.title = t(`thumbnail_overlay_toggle_btn_tooltip${showOverlay ? "_hide" : "_show"}`);
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
            // toggle button
            if (toggleBtnShown) {
                const toggleBtnElem = document.createElement("a");
                toggleBtnElem.id = "bytm-thumbnail-overlay-toggle";
                toggleBtnElem.role = "button";
                toggleBtnElem.tabIndex = 0;
                toggleBtnElem.classList.add("ytmusic-player-bar", "bytm-generic-btn", "bytm-no-select");
                onInteraction(toggleBtnElem, (e) => {
                    if (e.shiftKey)
                        return openInTab(toggleBtnElem.href);
                    invertOverlay = !invertOverlay;
                    updateOverlayVisibility();
                });
                const imgElem = document.createElement("img");
                imgElem.classList.add("bytm-generic-btn-img");
                toggleBtnElem.appendChild(imgElem);
                addSelectorListener("playerBarMiddleButtons", "ytmusic-like-button-renderer#like-button-renderer", {
                    listener: (likeContainer) => UserUtils.insertAfter(likeContainer, toggleBtnElem),
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
            const { searchParams } = new URL(location.href);
            const watchID = searchParams.get("v");
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
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        if (location.pathname.startsWith("/watch")) {
            const watchID = getWatchId();
            if (!watchID)
                return;
            const songTime = (_a = yield getVideoTime()) !== null && _a !== void 0 ? _a : 0;
            const paused = (_c = (_b = document.querySelector(videoSelector)) === null || _b === void 0 ? void 0 : _b.paused) !== null && _c !== void 0 ? _c : false;
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
/** Disables Dark Reader if it is enabled */
function disableDarkReader() {
    if (document.querySelector(".darkreader")) {
        const metaElem = document.createElement("meta");
        metaElem.name = "darkreader-lock";
        metaElem.classList.add("bytm-disable-darkreader");
        document.head.appendChild(metaElem);
        info("Sent hint to Dark Reader to disable itself");
    }
}const inputIgnoreTagNames = ["INPUT", "TEXTAREA", "SELECT", "BUTTON", "A"];
//#region arrow key skip
function initArrowKeySkip() {
    return __awaiter(this, void 0, void 0, function* () {
        document.addEventListener("keydown", (evt) => {
            var _a, _b, _c, _d;
            if (!getFeatures().arrowKeySupport)
                return;
            if (!["ArrowLeft", "ArrowRight"].includes(evt.code))
                return;
            // discard the event when a (text) input is currently active, like when editing a playlist
            if (inputIgnoreTagNames.includes((_b = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.tagName) !== null && _b !== void 0 ? _b : ""))
                return info(`Captured valid key to skip forward or backward but the current active element is <${(_c = document.activeElement) === null || _c === void 0 ? void 0 : _c.tagName.toLowerCase()}>, so the keypress is ignored`);
            evt.preventDefault();
            evt.stopImmediatePropagation();
            let skipBy = (_d = getFeatures().arrowKeySkipBy) !== null && _d !== void 0 ? _d : featInfo.arrowKeySkipBy.default;
            if (evt.code === "ArrowLeft")
                skipBy *= -1;
            log(`Captured arrow key '${evt.code}' - skipping by ${skipBy} seconds`);
            const vidElem = document.querySelector(videoSelector);
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
//#region num key skip to
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
                && !numKeysIgnoreIds.includes((_b = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : "") // video element or player bar active
                && !numKeysIgnoreTagNames.includes((_d = (_c = document.activeElement) === null || _c === void 0 ? void 0 : _c.tagName) !== null && _d !== void 0 ? _d : "") // other element active
            )
                return info("Captured valid key to skip video to, but ignored it since an unexpected element is active:", document.activeElement);
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
}/** Ratelimit budget timeframe in seconds - should reflect what's in geniURL's docs */
const geniUrlRatelimitTimeframe = 30;
//#region media control bar
let currentSongTitle = "";
/** Adds a lyrics button to the media controls bar */
function addMediaCtrlLyricsBtn() {
    return __awaiter(this, void 0, void 0, function* () {
        addSelectorListener("playerBarMiddleButtons", "ytmusic-like-button-renderer#like-button-renderer", { listener: addActualMediaCtrlLyricsBtn });
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
            const lyricsBtnElem = yield createLyricsBtn(gUrl !== null && gUrl !== void 0 ? gUrl : undefined);
            lyricsBtnElem.id = "betterytm-lyrics-button";
            log("Inserted lyrics button into media controls bar");
            const thumbToggleElem = document.querySelector("#bytm-thumbnail-overlay-toggle");
            if (thumbToggleElem)
                UserUtils.insertAfter(thumbToggleElem, lyricsBtnElem);
            else
                UserUtils.insertAfter(likeContainer, lyricsBtnElem);
        }))();
        currentSongTitle = songTitleElem.title;
        const spinnerIconUrl = yield getResourceUrl("icon-spinner");
        const lyricsIconUrl = yield getResourceUrl("icon-lyrics");
        const errorIconUrl = yield getResourceUrl("icon-error");
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
        }); };
        // since YT and YTM don't reload the page on video change, MutationObserver needs to be used to watch for changes in the video title
        const obs = new MutationObserver(onMutation);
        obs.observe(songTitleElem, { attributes: true, attributeFilter: ["title"] });
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
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
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
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const cacheEntry = getLyricsCacheEntry(artist, song);
            if (cacheEntry) {
                info(`Found lyrics URL in cache: ${cacheEntry.url}`);
                return [cacheEntry];
            }
            const startTs = Date.now();
            const fetchUrl = constructUrlString(`${getFeatures().geniUrlBase}/search`, {
                disableFuzzy: null,
                utm_source: scriptInfo.name,
                utm_content: `v${scriptInfo.version}${mode === "development" ? "-dev" : ""}`,
                artist,
                song,
            });
            log(`Requesting URLs from geniURL at '${fetchUrl}'`);
            const { geniUrlToken } = getFeatures();
            const fetchRes = yield UserUtils.fetchAdvanced(fetchUrl, Object.assign({}, (geniUrlToken ? {
                headers: {
                    Authorization: `Bearer ${geniUrlToken}`,
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
            if (!getFeatures().advancedLyricsFilter) {
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
/** Creates the base lyrics button element */
function createLyricsBtn(geniusUrl, hideIfLoading = true) {
    return __awaiter(this, void 0, void 0, function* () {
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
function addQueueButtons(queueItem, containerParentSelector = ".song-info", listType = "currentQueue", classes = []) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const queueBtnsCont = document.createElement("div");
        queueBtnsCont.classList.add("bytm-queue-btn-container", ...classes);
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
                        yield UserUtils.pauseFor(10);
                        queuePopupCont = document.querySelector("ytmusic-app ytmusic-popup-container tp-yt-iron-dropdown");
                        queuePopupCont === null || queuePopupCont === void 0 ? void 0 : queuePopupCont.setAttribute("data-bytm-hidden", "true");
                        // a little bit janky and unreliable but the only way afaik
                        const removeFromQueueBtn = queuePopupCont === null || queuePopupCont === void 0 ? void 0 : queuePopupCont.querySelector("tp-yt-paper-listbox ytmusic-menu-service-item-renderer:nth-of-type(3)");
                        yield UserUtils.pauseFor(10);
                        removeFromQueueBtn === null || removeFromQueueBtn === void 0 ? void 0 : removeFromQueueBtn.click();
                        // queue items aren't removed automatically outside of the current queue
                        if (removeFromQueueBtn && listType === "genericQueue") {
                            yield UserUtils.pauseFor(500);
                            clearInner(queueItem);
                            queueItem.remove();
                        }
                        if (!removeFromQueueBtn) {
                            warn("Couldn't find 'remove from queue' button in queue item three dots menu");
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
}//#region dependencies
/** List of all available locale SelectOptions */
const localeOptions = Object.entries(langMapping).reduce((a, [locale, { name }]) => {
    return [...a, {
            value: locale,
            label: name,
        }];
}, [])
    .sort((a, b) => a.label.localeCompare(b.label));
const getAdornHtml = (className, title, resource, extraParams) => __awaiter(void 0, void 0, void 0, function* () { var _a; return `<span class="${className} bytm-adorn-icon" title="${title}" aria-label="${title}"${extraParams ? " " + extraParams : ""}>${(_a = yield resourceToHTMLString(resource)) !== null && _a !== void 0 ? _a : ""}</span>`; });
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
    globe: () => __awaiter(void 0, void 0, void 0, function* () { var _b; return (_b = yield resourceToHTMLString("icon-globe")) !== null && _b !== void 0 ? _b : ""; }),
    warning: (title) => __awaiter(void 0, void 0, void 0, function* () { return getAdornHtml("bytm-warning-icon", title, "icon-error", "role=\"alert\""); }),
    reloadRequired: () => __awaiter(void 0, void 0, void 0, function* () { return getFeatures().advancedMode ? getAdornHtml("bytm-reload-icon", t("feature_requires_reload"), "icon-reload") : undefined; }),
};
/** Common options for config items of type "select" */
const options = {
    siteSelection: () => [
        { value: "all", label: t("site_selection_both_sites") },
        { value: "yt", label: t("site_selection_only_yt") },
        { value: "ytm", label: t("site_selection_only_ytm") },
    ],
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
 * | Property                                          | Description                                                                                                                                              |
 * | :------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | `disable: (newValue: any) => void`                | for type `toggle` only - function that will be called when the feature is disabled - can be a synchronous or asynchronous function                       |
 * | `change: (prevValue: any, newValue: any)` => void | for types `number`, `select`, `slider` and `hotkey` only - function that will be called when the value is changed                                        |
 * | `click: () => void`                               | for type `button` only - function that will be called when the button is clicked                                                                         |
 * | `helpText: string / () => string`                 | function that returns an HTML string or the literal string itself that will be the help text for this feature - writing as function is useful for pluralizing or inserting values into the translation at runtime - if not set, translation with key `feature_helptext_featureKey` will be used instead, if available |
 * | `textAdornment: () => string / Promise<string>`   | function that returns an HTML string that will be appended to the text in the config menu as an adornment element                                        |
 * | `unit: string / (val: number) => string`          | Only if type is `number` or `slider` - The unit text that is displayed next to the input element, i.e. " px" - a leading space need to be added by hand! |
 * | `min: number`                                     | Only if type is `number` or `slider` - Overwrites the default of the `min` property of the HTML input element                                            |
 * | `max: number`                                     | Only if type is `number` or `slider` - Overwrites the default of the `max` property of the HTML input element                                            |
 * | `step: number`                                    | Only if type is `number` or `slider` - Overwrites the default of the `step` property of the HTML input element                                           |
 * | `options: SelectOption[] / () => SelectOption[]`  | Only if type is `select` - function that returns an array of objects with `value` and `label` properties                                                 |
 * | `reloadRequired: boolean`                         | if true (default), the page needs to be reloaded for the changes to take effect - if false, `enable()` needs to be provided                              |
 * | `advanced: boolean`                               | if true, the feature will only be shown if the advanced mode feature has been turned on                                                                  |
 * | `hidden: boolean`                                 | if true, the feature will not be shown in the settings - default is undefined (false)                                                                    |
 * | `valueHidden: boolean`                            | If true, the value of the feature will be hidden in the settings and via the plugin interface - default is undefined (false)                             |
 * | `normalize: (val: any) => any`                    | Function that will be called to normalize the value before it is saved - useful for trimming strings or other simple operations                          |
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
    scrollToActiveSongBtn: {
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
        reloadRequired: false,
        enable: noop,
        disable: () => volumeSharedBetweenTabsDisabled,
    },
    setInitialTabVolume: {
        type: "toggle",
        category: "volume",
        default: false,
        textAdornment: () => getFeatures().volumeSharedBetweenTabs
            ? combineAdornments([adornments.warning(t("feature_warning_setInitialTabVolume_volumeSharedBetweenTabs_incompatible").replace(/"/g, "'")), adornments.reloadRequired])
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
            ? combineAdornments([adornments.warning(t("feature_warning_setInitialTabVolume_volumeSharedBetweenTabs_incompatible").replace(/"/g, "'")), adornments.reloadRequired])
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
        default: 0,
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
        options: localeOptions,
        default: getPreferredLocale(),
        textAdornment: () => combineAdornments([adornments.globe, adornments.reloadRequired]),
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
    advancedMode: {
        type: "toggle",
        category: "general",
        default: mode === "development",
        textAdornment: () => getFeatures().advancedMode
            ? combineAdornments([adornments.advanced, adornments.reloadRequired])
            : undefined,
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
    3: (oldData) => useDefaultConfig([
        "removeShareTrackingParam", "numKeysSkipToTime",
        "fixSpacing", "scrollToActiveSongBtn", "logLevel",
    ], oldData),
    // 3 -> 4 (v1.1)
    4: (oldData) => {
        var _a, _b, _c, _d;
        const oldSwitchSitesHotkey = oldData.switchSitesHotkey;
        return Object.assign(Object.assign({}, useDefaultConfig([
            "rememberSongTime", "rememberSongTimeSites",
            "volumeSliderScrollStep", "locale", "versionCheck",
        ], oldData)), { arrowKeySkipBy: 10, switchSitesHotkey: {
                code: (_a = oldSwitchSitesHotkey.key) !== null && _a !== void 0 ? _a : "F9",
                shift: Boolean((_b = oldSwitchSitesHotkey.shift) !== null && _b !== void 0 ? _b : false),
                ctrl: Boolean((_c = oldSwitchSitesHotkey.ctrl) !== null && _c !== void 0 ? _c : false),
                alt: Boolean((_d = oldSwitchSitesHotkey.meta) !== null && _d !== void 0 ? _d : false),
            }, listButtonsPlacement: "queueOnly" });
    },
    // 4 -> 5 (v1.2)
    5: (oldData) => (Object.assign({}, useDefaultConfig([
        "geniUrlBase", "geniUrlToken",
        "lyricsCacheMaxSize", "lyricsCacheTTL",
        "clearLyricsCache", "advancedMode",
        "checkVersionNow", "advancedLyricsFilter",
        "rememberSongTimeDuration", "rememberSongTimeReduction",
        "rememberSongTimeMinPlayTime", "volumeSharedBetweenTabs",
        "setInitialTabVolume", "initialTabVolumeLevel",
        "thumbnailOverlayBehavior", "thumbnailOverlayToggleBtnShown",
        "thumbnailOverlayShowIndicator", "thumbnailOverlayImageFit",
        "removeShareTrackingParamSites",
    ], oldData))),
    // TODO: once advanced filtering is fully implemented, clear cache on migration to fv6
    // 5 -> 6 (v1.3)
    // 6: (oldData: FeatureConfig) => 
};
const defaultData = Object.keys(featInfo)
    .reduce((acc, key) => {
    var _a;
    // @ts-ignore
    acc[key] = (_a = featInfo === null || featInfo === void 0 ? void 0 : featInfo[key]) === null || _a === void 0 ? void 0 : _a.default;
    return acc;
}, {});
/** Uses the default config as the base, then overwrites all values with the passed {@linkcode baseData}, then sets all passed {@linkcode resetKeys} to their default values */
function useDefaultConfig(resetKeys, baseData) {
    var _a;
    const newData = Object.assign(Object.assign({}, defaultData), (baseData !== null && baseData !== void 0 ? baseData : {}));
    for (const key of resetKeys) // @ts-ignore
        newData[key] = (_a = featInfo === null || featInfo === void 0 ? void 0 : featInfo[key]) === null || _a === void 0 ? void 0 : _a.default; // typescript funny moments
    return newData;
}
let canCompress = true;
const bytmCfgStore = new UserUtils.DataStore({
    id: "bytm-config",
    formatVersion,
    defaultData,
    migrations,
    encodeData: (data) => canCompress ? UserUtils.compress(data, compressionFormat, "string") : data,
    decodeData: (data) => canCompress ? UserUtils.decompress(data, compressionFormat, "string") : data,
});
/** Initializes the DataStore instance and loads persistent data into memory */
function initConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        canCompress = yield compressionSupported();
        const oldFmtVer = Number(yield GM.getValue(`_uucfgver-${bytmCfgStore.id}`, NaN));
        const data = yield bytmCfgStore.loadData();
        log(`Initialized feature config DataStore (formatVersion = ${bytmCfgStore.formatVersion})`);
        if (isNaN(oldFmtVer))
            info("  !- Config data was initialized with default values");
        else if (oldFmtVer !== bytmCfgStore.formatVersion)
            info(`  !- Config data was migrated from version ${oldFmtVer} to ${bytmCfgStore.formatVersion}`);
        emitInterface("bytm:configReady", getFeaturesInterface());
        return Object.assign({}, data);
    });
}
/** Returns the current feature config from the in-memory cache as a copy */
function getFeatures() {
    return bytmCfgStore.getData();
}
/** Saves the feature config synchronously to the in-memory cache and asynchronously to the persistent storage */
function setFeatures(featureConf) {
    const res = bytmCfgStore.setData(featureConf);
    emitSiteEvent("configChanged", bytmCfgStore.getData());
    info("Saved new feature config:", featureConf);
    return res;
}
/** Saves the default feature config synchronously to the in-memory cache and asynchronously to persistent storage */
function setDefaultFeatures() {
    const res = bytmCfgStore.saveDefaultData();
    emitSiteEvent("configChanged", bytmCfgStore.getData());
    info("Reset feature config to its default values");
    return res;
}
/** Clears the feature config from the persistent storage - since the cache will be out of whack, this should only be run before a site re-/unload */
function clearConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        yield bytmCfgStore.deleteData();
        info("Deleted config from persistent storage");
    });
}const { getUnsafeWindow } = UserUtils__namespace;
const globalFuncs = {
    // meta
    registerPlugin,
    getPluginInfo,
    // utils
    addSelectorListener,
    getResourceUrl,
    getSessionId,
    getVideoTime,
    setLocale,
    getLocale,
    hasKey,
    hasKeyFor,
    t,
    tp,
    getFeatures: getFeaturesInterface,
    saveFeatures: setFeatures,
    fetchLyricsUrlTop,
    getLyricsCacheEntry,
    sanitizeArtists,
    sanitizeSong,
    compareVersions,
    compareVersionArrays,
};
/** Initializes the BYTM interface */
function initInterface() {
    const props = Object.assign(Object.assign(Object.assign({ mode,
        branch,
        host,
        buildNumber,
        compressionFormat }, scriptInfo), globalFuncs), { UserUtils: UserUtils__namespace,
        NanoEmitter,
        BytmDialog,
        createHotkeyInput,
        createToggleInput });
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
function emitInterface(type, ...data) {
    getUnsafeWindow().dispatchEvent(new CustomEvent(type, { detail: data[0] }));
}
//#region register plugins
/** Plugins that are queued up for registration */
const pluginQueue = new Map();
/** Registered plugins including their event listener instance */
const pluginMap = new Map();
/** Initializes plugins that have been registered already. Needs to be run after `bytm:ready`! */
function initPlugins() {
    // TODO(v1.3): check perms and ask user for initial activation
    for (const [key, { def, events }] of pluginQueue) {
        pluginMap.set(key, { def, events });
        pluginQueue.delete(key);
        emitOnPlugins("pluginRegistered", (d) => sameDef(d, def), pluginDefToInfo(def));
    }
    for (const evt of allSiteEvents) // @ts-ignore
        siteEvents.on(evt, (...args) => emitOnPlugins(evt, () => true, ...args));
    emitInterface("bytm:pluginsLoaded");
}
/** Returns the key for a given plugin definition */
function getPluginKey(plugin) {
    return `${plugin.plugin.namespace}/${plugin.plugin.name}`;
}
/** Converts a PluginDef object (full definition) into a PluginInfo object (restricted definition) or undefined, if undefined is passed */
function pluginDefToInfo(plugin) {
    return plugin && {
        name: plugin.plugin.name,
        namespace: plugin.plugin.namespace,
        version: plugin.plugin.version,
    };
}
/** Checks whether two plugin definitions are the same */
function sameDef(def1, def2) {
    return getPluginKey(def1) === getPluginKey(def2);
}
/** Emits an event on all plugins that match the predicate (all plugins by default) */
function emitOnPlugins(event, predicate = () => true, ...data) {
    for (const { def, events } of pluginMap.values())
        predicate(def) && events.emit(event, ...data);
}
/** Returns info about a registered plugin on the BYTM interface, or undefined if the plugin isn't registered */
function getPluginInfo(...args) {
    var _a, _b;
    return pluginDefToInfo(args.length === 2
        ? (_a = pluginMap.get(`${args[1]}/${args[0]}`)) === null || _a === void 0 ? void 0 : _a.def
        : (_b = pluginMap.get(getPluginKey(args[0]))) === null || _b === void 0 ? void 0 : _b.def);
}
/** Validates the passed PluginDef object and returns an array of errors */
function validatePluginDef(pluginDef) {
    const errors = [];
    const addNoPropErr = (prop, type) => errors.push(t("plugin_validation_error_no_property", prop, type));
    // def.plugin and its properties:
    typeof pluginDef.plugin !== "object" && addNoPropErr("plugin", "object");
    const { plugin } = pluginDef;
    !(plugin === null || plugin === void 0 ? void 0 : plugin.name) && addNoPropErr("plugin.name", "string");
    !(plugin === null || plugin === void 0 ? void 0 : plugin.namespace) && addNoPropErr("plugin.namespace", "string");
    !(plugin === null || plugin === void 0 ? void 0 : plugin.version) && addNoPropErr("plugin.version", "[major: number, minor: number, patch: number]");
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
    const { plugin: { name } } = def;
    pluginQueue.set(getPluginKey(def), {
        def: def,
        events,
    });
    info(`Registered plugin: ${name}`, LogLevel.Info);
    return {
        info: getPluginInfo(def),
        events,
    };
}
//#region proxy funcs
/** Returns the current feature config, with sensitive values replaced by `undefined` */
function getFeaturesInterface() {
    const features = getFeatures();
    for (const ftKey of Object.keys(features)) {
        const info = featInfo[ftKey];
        if (info && info.valueHidden) // @ts-ignore
            features[ftKey] = undefined;
    }
    return features;
}/** Options that are applied to every SelectorObserver instance */
const defaultObserverOptions = {
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
                globservers.playerBarInfo.addListener(playerBarInfoSelector, {
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
/**
 * Interface function for adding listeners to the {@linkcode globservers}
 * @param selector Relative to the observer's root element, so the selector can only start at of the root element's children at the earliest!
 * @param options Options for the listener
 * @template TElem The type of the element that the listener will be attached to. If set to `0`, the type HTMLElement will be used.
 * @template TDomain This restricts which observers are available with the current domain
 */
function addSelectorListener(observerName, selector, options) {
    globservers[observerName].addListener(selector, options);
}//#region video time, volume
const videoSelector = getDomain() === "ytm" ? "ytmusic-player video" : "#player-container ytd-player video";
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
                const vidElem = document.querySelector(videoSelector);
                if (vidElem)
                    return res(Number(precision <= 0 ? Math.floor(vidElem.currentTime) : vidElem.currentTime.toFixed(precision)));
                addSelectorListener("playerBar", "tp-yt-paper-slider#progress-bar tp-yt-paper-progress#sliderBar", {
                    listener: (pbEl) => res(!isNaN(Number(pbEl.value)) ? Math.floor(Number(pbEl.value)) : null)
                });
            }
            else if (domain === "yt") {
                const vidElem = document.querySelector(videoSelector);
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
        addSelectorListener("body", videoSelector, {
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
/** Whether the DOM has finished loading and elements can be added or modified */
let domLoaded = false;
document.addEventListener("DOMContentLoaded", () => domLoaded = true);
/** Removes all child nodes of an element without invoking the slow-ish HTML parser */
function clearInner(element) {
    while (element.hasChildNodes())
        clearNode(element.firstChild);
}
function clearNode(element) {
    while (element.hasChildNodes())
        clearNode(element.firstChild);
    element.parentNode.removeChild(element);
}
/**
 * Adds generic, accessible interaction listeners to the passed element.
 * All listeners have the default behavior prevented and stop immediate propagation.
 * @param listenerOptions Provide a {@linkcode listenerOptions} object to configure the listeners
 */
function onInteraction(elem, listener, listenerOptions) {
    const proxListener = (e) => {
        if (e instanceof KeyboardEvent && !(["Enter", " ", "Space", "Spacebar"].includes(e.key)))
            return;
        e.preventDefault();
        e.stopImmediatePropagation();
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
 */
function addStyle(css, ref) {
    if (!domLoaded)
        throw new Error("DOM has not finished loading yet");
    const elem = UserUtils.addGlobalStyle(css);
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
}//#region misc
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
    if (!lastSeparator)
        lastSeparator = separator;
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
function getThumbnailUrl(watchId, qualityOrIndex = "hqdefault") {
    return `https://i.ytimg.com/vi/${watchId}/${qualityOrIndex}.jpg`;
}
/** Returns the best available thumbnail URL for a video with the given watch ID */
function getBestThumbnailUrl(watchId) {
    return __awaiter(this, void 0, void 0, function* () {
        const priorityList = ["maxresdefault", "sddefault", 0];
        for (const quality of priorityList) {
            let response;
            const url = getThumbnailUrl(watchId, quality);
            try {
                response = yield UserUtils.fetchAdvanced(url, { method: "HEAD", timeout: 5000 });
            }
            catch (e) {
            }
            if (response === null || response === void 0 ? void 0 : response.ok)
                return url;
        }
    });
}
/** Copies a JSON-serializable object */
function reserialize(data) {
    return JSON.parse(JSON.stringify(data));
}
/** Opens the given URL in a new tab, using GM.openInTab if available */
function openInTab(href, background = true) {
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
                const h2Elem = `<h2 id="${verId}" role="subheading" aria-level="1">Version ${verStr}</h2>`;
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
 * Sends a request with the specified parameters and returns the response as a Promise.
 * Ignores the CORS policy, contrary to fetch and fetchAdvanced.
 */
function sendRequest(details) {
    return new Promise((resolve, reject) => {
        GM.xmlHttpRequest(Object.assign(Object.assign({ timeout: 10000 }, details), { onload: resolve, onerror: reject, ontimeout: reject, onabort: reject }));
    });
}{
    // console watermark with sexy gradient
    const styleGradient = "background: rgba(165, 38, 38, 1); background: linear-gradient(90deg, rgb(154, 31, 103) 0%, rgb(135, 31, 31) 40%, rgb(184, 64, 41) 100%);";
    const styleCommon = "color: #fff; font-size: 1.5em; padding-left: 6px; padding-right: 6px;";
    console.log();
    console.log(`%c${scriptInfo.name}%cv${scriptInfo.version}%c\n\nBuild #${buildNumber} ─ ${scriptInfo.namespace}`, `font-weight: bold; ${styleCommon} ${styleGradient}`, `background-color: #333; ${styleCommon}`, "padding: initial;");
    console.log([
        "Powered by:",
        "─ Lots of ambition and dedication",
        "─ My song metadata API: https://api.sv443.net/geniurl",
        "─ My userscript utility library: https://github.com/Sv443-Network/UserUtils",
        "─ The fuse.js library: https://github.com/krisk/Fuse",
        "─ This markdown parser library: https://github.com/markedjs/marked",
        "─ This tiny event listener library: https://github.com/ai/nanoevents",
    ].join("\n"));
    console.log();
}
const domain = getDomain();
/** Stuff that needs to be called ASAP, before anything async happens */
function preInit() {
    try {
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
function init() {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const features = yield initConfig();
            setLogLevel(features.logLevel);
            yield initLyricsCache();
            yield initTranslations((_a = features.locale) !== null && _a !== void 0 ? _a : "en_US");
            setLocale((_b = features.locale) !== null && _b !== void 0 ? _b : "en_US");
            emitInterface("bytm:initPlugins");
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
        // init menu separately from features
        try {
            void "TODO(v1.2):";
            // initMenu();
        }
        catch (err) {
            error("Error while initializing menu:", err);
        }
    });
}
/** Called when the DOM has finished loading and can be queried and altered by the userscript */
function onDomLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        const features = getFeatures();
        const ftInit = [];
        try {
            insertGlobalStyle();
            initObservers();
            yield initVersionCheck();
        }
        catch (err) {
            error("Fatal error in feature pre-init:", err);
            return;
        }
        log(`DOM loaded and feature pre-init finished, now initializing all features for domain "${domain}"...`);
        try {
            if (domain === "ytm") {
                //#region (ytm) misc
                disableDarkReader();
                ftInit.push(initSiteEvents());
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
                    ftInit.push(addWatermark());
                if (features.fixSpacing)
                    ftInit.push(fixSpacing());
                if (features.scrollToActiveSongBtn)
                    ftInit.push(addScrollToActiveBtn());
                if (features.removeUpgradeTab)
                    ftInit.push(removeUpgradeTab());
                ftInit.push(initThumbnailOverlay());
                if (features.hideCursorOnIdle)
                    ftInit.push(initHideCursorOnIdle());
                //#region (ytm) volume
                ftInit.push(initVolumeFeatures());
                //#region (ytm) song lists
                if (features.lyricsQueueButton || features.deleteFromQueueButton)
                    ftInit.push(initQueueButtons());
                //#region (ytm) behavior
                if (features.closeToastsTimeout > 0)
                    ftInit.push(initAutoCloseToasts());
                //#region (ytm) input
                ftInit.push(initArrowKeySkip());
                if (features.anchorImprovements)
                    ftInit.push(addAnchorImprovements());
                ftInit.push(initNumKeysSkip());
                //#region (ytm) lyrics
                if (features.geniusLyrics)
                    ftInit.push(addMediaCtrlLyricsBtn());
            }
            //#region (ytm+yt) cfg menu option
            if (domain === "ytm") {
                addSelectorListener("body", "tp-yt-iron-dropdown #contentWrapper ytd-multi-page-menu-renderer #container.menu-container", {
                    listener: addConfigMenuOptionYTM,
                });
            }
            if (domain === "yt") {
                addSelectorListener("ytGuide", "#sections ytd-guide-section-renderer:nth-child(5) #items ytd-guide-entry-renderer:nth-child(1)", {
                    listener: (el) => el.parentElement && addConfigMenuOptionYT(el.parentElement),
                });
            }
            if (["ytm", "yt"].includes(domain)) {
                //#region (ytm+yt) layout
                if (features.removeShareTrackingParamSites && (features.removeShareTrackingParamSites === domain || features.removeShareTrackingParamSites === "all"))
                    ftInit.push(initRemShareTrackParam());
                //#region (ytm+yt) input
                ftInit.push(initSiteSwitch(domain));
                // TODO: for hot reloading features
                // ftInit.push(new Promise((resolve) => {
                //   for(const [k, v] of Object.entries(featInfo)) {
                //     try {
                //       const featVal = features[k as keyof typeof featInfo];
                //       // @ts-ignore
                //       if(v.enable && featVal === true) {
                //         console.log("###> enable", k);
                //         // @ts-ignore
                //         v.enable(features);
                //         console.log("###>> enable ok");
                //       }
                //       // @ts-ignore
                //       else if(v.disable && featVal === false) {
                //         console.log("###> disable", k);
                //         // @ts-ignore
                //         v.disable(features);
                //         console.log("###>> disable ok");
                //       }
                //     }
                //     catch(err) {
                //       error(`Couldn't initialize feature "${k}" due to error:`, err);
                //     }
                //   }
                //   console.log("###>>> done for loop");
                //   resolve();
                // }));
            }
            yield Promise.allSettled(ftInit);
            emitInterface("bytm:ready");
            try {
                initPlugins();
            }
            catch (err) {
                error("Plugin loading error:", err);
            }
            try {
                registerDevMenuCommands();
            }
            catch (e) {
                warn("Couldn't register dev menu commands:", e);
            }
        }
        catch (err) {
            error("Feature error:", err);
        }
    });
}
// TODO(v1.2):
// async function initFeatures() {
//   const ftInit = [] as Promise<void>[];
//   log(`DOM loaded. Initializing features for domain "${domain}"...`);
//   for(const [ftKey, ftInfo] of Object.entries(featInfo)) {
//     try {
//       // @ts-ignore
//       const res = ftInfo?.enable?.() as undefined | Promise<void>;
//       if(res instanceof Promise)
//         ftInit.push(res);
//       else
//         ftInit.push(Promise.resolve());
//     }
//     catch(err) {
//       error(`Couldn't initialize feature "${ftKey}" due to error:`, err);
//     }
//   }
//   siteEvents.on("configOptionChanged", (ftKey, oldValue, newValue) => {
//     try {
//       // @ts-ignore
//       if(featInfo[ftKey].change) {
//         // @ts-ignore
//         featInfo[ftKey].change(oldValue, newValue);
//       }
//       // @ts-ignore
//       else if(featInfo[ftKey].disable) {
//         // @ts-ignore
//         const disableRes = featInfo[ftKey].disable();
//         if(disableRes instanceof Promise) // @ts-ignore
//           disableRes.then(() => featInfo[ftKey]?.enable?.());
//         else // @ts-ignore
//           featInfo[ftKey]?.enable?.();
//       }
//       else {
//         // TODO: set "page reload required" flag in new menu
//         if(confirm("[Work in progress]\nYou changed an option that requires a page reload to be applied.\nReload the page now?")) {
//           disableBeforeUnload();
//           location.reload();
//         }
//       }
//     }
//     catch(err) {
//       error(`Couldn't change feature "${ftKey}" due to error:`, err);
//     }
//   });
//   Promise.all(ftInit).then(() => {
//     emitInterface("bytm:ready");
//   });
// }
/** Inserts the bundled CSS files imported throughout the script into a <style> element in the <head> */
function insertGlobalStyle() {
    // post-build these double quotes are replaced by backticks (because if backticks are used here, the bundler converts them to double quotes)
    addStyle(`:root {
  --bytm-dialog-accent-col: #3683d4;
  --bytm-advanced-mode-color: #c5a73b;
  --bytm-experimental-col: #d07ff0;
  --bytm-warning-col: #ff5233;
  --bytm-reload-col: #42b045;
}

/* TODO(v1.2): leave only dialog */
#bytm-cfg-dialog-bg,
#bytm-cfg-menu-bg
{
  --bytm-dialog-height-max: 800px;
  --bytm-dialog-width-max: 1150px;
  --bytm-menu-height-max: 800px;
  --bytm-menu-width-max: 1150px;
}

.bytm-dialog-body p {
  overflow-wrap: break-word;
}

.bytm-dialog-body details summary {
  cursor: pointer;
  font-style: italic;
}

#bytm-version-notif-dialog-btns {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

#bytm-disable-update-check-wrapper {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin-top: 35px;
}

#bytm-disable-update-check-wrapper label {
  padding-left: 12px;
}

#bytm-version-notif-changelog-cont {
  max-height: calc(max(var(--calc-max-height) - 280px, 0px));
  overflow-y: auto;
  margin: 10px 0px;
}

#bytm-version-notif-changelog-details {
  margin-top: 15px;
}

.bytm-disable-update-check-toggle-label-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.bytm-secondary-label {
  padding-left: 12px;
  font-size: 1.3rem;
}

.bytm-adorn-icon {
  display: inline-flex;
  align-items: center;
  cursor: help;
}

.bytm-ftconf-adv-copy-btn {
  margin: 0px 10px;
}

.bytm-ftitem-adornment svg path {
  fill: var(--bytm-dialog-accent-col, #fff);
}

.bytm-advanced-mode-icon svg path {
  fill: var(--bytm-advanced-mode-color, #fff);
}

.bytm-experimental-icon svg path {
  fill: var(--bytm-experimental-col, #fff);
}

.bytm-warning-icon svg {
  width: 24px;
  height: 24px;
}

.bytm-warning-icon svg path {
  fill: var(--bytm-warning-col, #fff);
}

.bytm-reload-icon svg path {
  fill: var(--bytm-reload-col, #fff);
}

/* #SECTION welcome dialog */

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

#bytm-welcome-menu-text-cont {
  margin-top: 16px;
}

#bytm-welcome-menu-text {
  font-size: 1.6rem;
  line-height: 20px;
}

#bytm-welcome-menu-locale-select {
  font-size: 1.6rem;
}

#bytm-welcome-menu-footer-cont {
  display: flex;
  justify-content: space-between;
  border-radius: 0px 0px var(--bytm-menu-border-radius) var(--bytm-menu-border-radius);
}

.bytm-dialog-bg {
  --bytm-dialog-bg: #333333;
  --bytm-dialog-bg-highlight: #252525;
  --bytm-scroll-indicator-bg: rgba(10, 10, 10, 0.7);
  --bytm-dialog-separator-color: #797979;
  --bytm-dialog-border-radius: 10px;
}

.bytm-dialog-bg {
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.6);
}

.bytm-dialog {
  --calc-max-height: calc(min(100vh - 40px, var(--bytm-dialog-height-max)));
  position: absolute;
  display: flex;
  flex-direction: column;
  width: calc(min(100% - 60px, var(--bytm-dialog-width-max)));
  border-radius: var(--bytm-dialog-border-radius);
  height: auto;
  max-height: var(--calc-max-height);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 6;
  color: #fff;
  background-color: var(--bytm-dialog-bg);
}

.bytm-dialog-body {
  font-size: 1.5rem;
  padding: 20px;
}

.bytm-dialog-body.small {
  padding: 15px;
}

#bytm-dialog-opts {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 30px 0px;
  overflow-y: auto;
}

.bytm-dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
  padding: 15px 20px 15px 20px;
  background-color: var(--bytm-dialog-bg);
  border: 2px solid var(--bytm-dialog-separator-color);
  border-style: none none solid none;
  border-radius: var(--bytm-dialog-border-radius) var(--bytm-dialog-border-radius) 0px 0px;
}

.bytm-dialog-header.small {
  padding: 10px 15px;
}

.bytm-dialog-header-pad {
  content: " ";
  min-height: 32px;
}

.bytm-dialog-header-pad.small {
  min-height: 24px;
}

.bytm-dialog-titlecont {
  display: flex;
  align-items: center;
}

.bytm-dialog-titlecont-no-title {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.bytm-dialog-title {
  position: relative;
  display: inline-block;
  font-size: 22px;
}

#bytm-dialog-version {
  position: absolute;
  width: 100%;
  bottom: -10px;
  left: 0;
  font-size: 10px;
  font-weight: normal;
  z-index: 7;
}

#bytm-dialog-version .bytm-link {
  color: #c6d2db;
}

#bytm-dialog-linkscont {
  display: flex;
  align-items: center;
  margin-left: 32px;
}

.bytm-dialog-link {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.bytm-dialog-link:not(:last-of-type) {
  margin-right: 10px;
}

.bytm-dialog-link .bytm-dialog-img {
  position: relative;
  border-radius: 50%;
  bottom: 0px;
  transition: bottom 0.15s ease-out;
}

.bytm-dialog-link:hover .bytm-dialog-img {
  bottom: 5px;
}

.bytm-dialog-close {
  cursor: pointer;
}

.bytm-dialog-header-img,
.bytm-dialog-close
{
  width: 32px;
  height: 32px;
}

.bytm-dialog-header-img.small,
.bytm-dialog-close.small
{
  width: 24px;
  height: 24px;
}

.bytm-dialog-footer {
  font-size: 17px;
  text-decoration: underline;
}

.bytm-dialog-footer.hidden {
  display: none;
}

.bytm-dialog-footer-cont {
  margin-top: 6px;
  padding: 15px 20px;
  background: var(--bytm-dialog-bg);
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, var(--bytm-dialog-bg) 30%, var(--bytm-dialog-bg) 100%);
  border: 2px solid var(--bytm-dialog-separator-color);
  border-style: solid none none none;
  border-radius: 0px 0px var(--bytm-dialog-border-radius) var(--bytm-dialog-border-radius);
}

#bytm-dialog-footer-buttons-cont button:not(:last-of-type) {
  margin-right: 15px;
}

.bytm-dialog-footer-right {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-top: 15px;
}

#bytm-dialog-footer-left-buttons-cont button:not(:last-of-type) {
  margin-right: 15px;
}

#bytm-dialog-scroll-indicator {
  --bytm-scroll-indicator-padding: 5px;
  position: sticky;
  bottom: -15px;
  left: 50%;
  margin-top: calc(-32px - var(--bytm-scroll-indicator-padding) * 2);
  padding: var(--bytm-scroll-indicator-padding);
  transform: translateX(-50%);
  width: 32px;
  height: 32px;
  z-index: 7;
  background-color: var(--bytm-scroll-indicator-bg);
  border-radius: 50%;
  cursor: pointer;
}

.bytm-hidden {
  visibility: hidden !important;
}

.bytm-ftconf-category-header {
  font-size: 20px;
  margin-top: 32px;
  margin-bottom: 8px;
  padding: 0px 20px;
}

.bytm-ftconf-category-header:first-of-type {
  margin-top: 0;
}

.bytm-dialog .bytm-ftitem {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4em;
  padding: 8px 20px;
  transition: background-color 0.15s ease-out;
}

.bytm-dialog .bytm-ftitem:hover {
  background-color: var(--bytm-dialog-bg-highlight);
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

.bytm-ftconf-input.bytm-hotkey-input {
  cursor: pointer;
  min-width: 80px;
}

.bytm-ftconf-input[type=number] {
  width: 75px;
}

.bytm-ftconf-input[type=range] {
  width: 200px;
}

.bytm-ftconf-input[type=text] {
  width: 200px;
}

.bytm-ftconf-input[type=checkbox] {
  margin-left: 5px;
}

#bytm-export-dialog-text, #bytm-import-dialog-text {
  font-size: 1.6em;
  margin-bottom: 15px;
}

.bytm-dialog-footer-copied {
  font-size: 1.6em;
  margin-right: 15px;
}

#bytm-changelog-dialog-body {
  overflow-y: auto;
}

#bytm-export-dialog-textarea, #bytm-import-dialog-textarea {
  width: 100%;
  height: 150px;
  resize: none;
}

.bytm-markdown-container {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  font-size: 1.4rem;
  line-height: 20px;
}

/* Markdown stuff */

.bytm-markdown-container kbd, .bytm-kbd {
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
  transition: padding 0.1s var(--bytm-easing), margin-top 0.1s var(--bytm-easing), box-shadow 0.1s var(--bytm-easing);
}

.bytm-markdown-container kbd:active, .bytm-kbd:active {
  padding-bottom: 2px;
  margin-top: 2px;
  box-shadow: inset 0 0 0 initial;
}

.bytm-markdown-container kbd::selection, .bytm-kbd::selection {
  background: rgba(0, 0, 0, 0);
}

.bytm-markdown-container code {
  background-color: #222;
  border-radius: 3px;
  padding: 1px 5px;
  font-family: monospace;
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
  white-space: pre-wrap;
  content: "    • ";
  font-weight: bolder;
}

#bytm-feat-help-dialog-desc, #bytm-feat-help-dialog-text {
  overflow-wrap: break-word;
  white-space: pre-wrap;
  font-size: 1.5em;
}

#bytm-feat-help-dialog-desc {
  font-size: 1.65em;
  padding-bottom: 5px;
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

hr {
  display: block;
  margin: 8px 0px 12px 0px;
  border: revert;
}

.bytm-ftitem-adornment {
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 6px;
}

.bytm-hotkey-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}

.bytm-hotkey-reset {
  font-size: 0.9em;
  margin-right: 10px;
}

.bytm-hotkey-info {
  font-size: 0.9em;
  white-space: nowrap;
}

.bytm-toggle-input-wrapper {
  --toggle-height: 20px;
  --toggle-width: 40px;
  --toggle-knob-offset: 4px;
  --toggle-color-on: var(--bytm-dialog-accent-col, #4595c7);
  --toggle-color-off: #707070;
  --toggle-knob-color: #f5f5f5;

  display: flex;
  align-items: center;
}

.bytm-toggle-input-wrapper .bytm-toggle-input-label {
  cursor: pointer;
  font-size: 1.5rem;
  padding: 3px 12px;
}

/* sauce: https://danklammer.com/articles/simple-css-toggle-switch/ */

.bytm-toggle-input {
  display: flex;
  align-items: center;
}

.bytm-toggle-input input {
  appearance: none;
  display: inline-block;
  width: var(--toggle-width);
  height: var(--toggle-height);
  position: relative;
  border-radius: 50px;
  overflow: hidden;
  outline: none;
  border: none;
  margin: 0;
  padding: var(--toggle-knob-offset);
  cursor: pointer;
  background-color: var(--toggle-color-off);
  transition: justify-content 0.2s ease, background-color 0.2s ease;
}

.bytm-toggle-input input[data-toggled="true"] {
  background-color: var(--toggle-color-on);
}

.bytm-toggle-input input .bytm-toggle-input-knob {
  --toggle-knob-calc-width: calc(var(--toggle-height) - (var(--toggle-knob-offset) * 2));
  --toggle-knob-calc-height: calc(var(--toggle-height) - (var(--toggle-knob-offset) * 2));
  width: var(--toggle-knob-calc-width);
  height: var(--toggle-knob-calc-height);
  background-color: var(--toggle-knob-color);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: var(--toggle-knob-offset);
  transition: left 0.2s ease;
}

.bytm-toggle-input input[data-toggled="true"] .bytm-toggle-input-knob {
  left: calc(var(--toggle-width) - var(--toggle-knob-offset) - var(--toggle-knob-calc-width));
}
.bytm-menu-bg {
  --bytm-menu-bg: #333333;
  --bytm-menu-bg-highlight: #252525;
  --bytm-scroll-indicator-bg: rgba(10, 10, 10, 0.7);
  --bytm-menu-separator-color: #797979;
  --bytm-menu-border-radius: 10px;
}

.bytm-menu-bg {
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 5;
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
  z-index: 6;
  color: #fff;
  background-color: var(--bytm-menu-bg);
}

.bytm-menu.top-aligned {
  top: 0;
  transform: translate(-50%, 40px);
}

.bytm-menu-body {
  padding: 20px;
}

#bytm-menu-opts {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px 0px;
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
  position: relative;
  display: flex;
  align-items: center;
}

.bytm-menu-titlecont-no-title {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.bytm-menu-title {
  position: relative;
  display: inline-block;
  font-size: 22px;
}

#bytm-cfg-menu-bg .bytm-menu-title {
  transform: translate(0px, -6px);
}

#bytm-cfg-menu {
  --bytm-menu-subtitle-color: #c6d2db;
}

#bytm-menu-subtitle-cont {
  width: 100%;
  display: flex;
  gap: 6px;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  position: absolute;
  bottom: -12px;
  left: 0;
  font-size: 10px;
  font-weight: normal;
  z-index: 7;
}

#bytm-menu-subtitle-cont, #bytm-menu-version-anchor {
  color: var(--bytm-menu-subtitle-color);
}

#bytm-menu-subtitle-cont, #bytm-menu-mode-display {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#bytm-menu-version-anchor {
  overflow: hidden;
  text-wrap: nowrap;
  text-overflow: ellipsis;
}

#bytm-menu-linkscont {
  display: flex;
  align-items: center;
  margin-left: 32px;
}

.bytm-menu-link {
  position: relative;
  max-height: 32px;
  max-width: 32px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.bytm-menu-link:not(:last-of-type) {
  margin-right: 10px;
}

.bytm-menu-link .bytm-menu-img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  padding: 0px;
  transform: translateY(0px);
  transition: transform 0.15s ease-out, padding 0.15s ease-out;
}

.bytm-menu-link:hover .bytm-menu-img {
  padding: 7px;
  transform: translateY(-14px);
}

.bytm-menu-link .extended-link {
  visibility: hidden;
  position: absolute;
  top: 14px;
  padding-top: 13px;
  padding-bottom: 2px;
  opacity: 0;
  text-decoration: none;
  color: var(--bytm-menu-subtitle-color);
  white-space: pre;
  font-size: 1.1rem;
  transition: visibility 0.15s ease-out, opacity 0.15s ease-out;
}

.bytm-menu-link:hover .extended-link {
  visibility: visible;
  opacity: 1;
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

.bytm-menu-footer.hidden {
  display: none;
}

.bytm-menu-footer-cont {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 6px;
  padding: 15px 20px;
  background: var(--bytm-menu-bg);
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, var(--bytm-menu-bg) 30%, var(--bytm-menu-bg) 100%);
  border: 2px solid var(--bytm-menu-separator-color);
  border-style: solid none none none;
  border-radius: 0px 0px var(--bytm-menu-border-radius) var(--bytm-menu-border-radius);
}

#bytm-menu-footer-buttons-cont button:not(:last-of-type) {
  margin-right: 15px;
}

.bytm-menu-footer-right {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
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
  z-index: 7;
  background-color: var(--bytm-scroll-indicator-bg);
  border-radius: 50%;
  cursor: pointer;
}

.bytm-hidden {
  visibility: hidden !important;
}

.bytm-ftconf-category-header {
  font-size: 20px;
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
  font-size: 1.4rem;
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
  white-space: pre-wrap;
  font-size: 1.6rem;
  margin-bottom: 15px;
}

.bytm-menu-footer-copied {
  font-size: 1.6rem;
  margin-right: 15px;
}

#bytm-changelog-menu-body {
  overflow-y: auto;
}

.bytm-changelog-version-details:not(:first-of-type) {
  margin-top: 15px;
}

.bytm-changelog-version-details summary h2 {
  display: inline-block;
}

.bytm-changelog-version-details summary {
  cursor: pointer;
}

.bytm-changelog-version-details summary::marker {
  font-size: 2rem;
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
  font-size: 1.5rem;
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
  white-space: pre-wrap;
  content: "    • ";
  font-weight: bolder;
}

.bytm-markdown-container ul li > ul li > ul li::before {
  white-space: pre-wrap;
  content: "        • ";
  font-weight: bolder;
}

#bytm-feat-help-dialog-desc, #bytm-feat-help-dialog-text {
  overflow-wrap: break-word;
  white-space: pre-wrap;
  font-size: 1.5rem;
  line-height: 1.25em;
}

#bytm-feat-help-dialog-desc {
  font-size: 1.8rem;
  padding-bottom: 10px;
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

hr {
  display: block;
  margin: 8px 0px 12px 0px;
  border: revert;
}

/* #region volume slider */

#bytm-vol-slider-cont {
  position: relative;
}

#bytm-vol-slider-label {
  opacity: 0.000001;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  font-size: 1.4rem;
  top: 50%;
  left: 0;
  transform: translate(calc(-50% - 10px), -50%);
  text-align: right;
  transition: opacity 0.2s ease;
}

#bytm-vol-slider-label.has-icon {
  transform: translate(calc(-50% - 25px), -50%);
}

#bytm-vol-slider-label svg {
  padding: 4px;
}

#bytm-vol-slider-label svg path {
  fill: #909090;
}

#bytm-vol-slider-label.bytm-visible {
  opacity: 1;
}

#bytm-vol-slider-shared {
  display: flex;
  flex-direction: row;
  align-items: center;
}

#bytm-vol-slider-shared svg {
  width: 20px;
  height: 20px;
}

/* #region misc */

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

  width: 36px;
  height: 36px;

  border: 1px solid transparent;
  border-radius: 100%;
  background-color: transparent;

  transition: background-color 0.2s ease;
}

.bytm-generic-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.bytm-generic-btn:active {
  background-color: #5f5f5f;
  animation: flashBorder 0.4s ease 1;
}

@keyframes flashBorder {
  0% {
    border: 1px solid transparent;
  }
  20% {
    border: 1px solid #808080;
  }
  100% {
    border: 1px solid transparent;
  }
}

.bytm-generic-btn-img {
  display: inline-block;
  z-index: 1;
  width: 24px;
  height: 24px;
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

button[disabled] {
  cursor: not-allowed;
}

button[disabled].bytm-busy {
  cursor: progress;
}

/* #region menu */

.bytm-cfg-menu-option {
  display: block;
  padding: 8px 0;
}

.bytm-cfg-menu-option-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.4rem;
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

/* #region watermark */

#bytm-watermark {
  font-size: 10px;
  display: inline-block;
  position: absolute;
  left: 97px;
  top: 45px;
  z-index: 10;
  color: #f1f1f1;
  text-decoration: none;
  cursor: pointer;
}

#bytm-watermark:hover {
  text-decoration: underline;
}

/* #region scroll to active */

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

#bytm-scroll-to-active-btn-cont.hidden {
  display: none;
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

/** #region thumbnail */

#bytm-thumbnail-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  background-color: #030303;
  z-index: 0;
}

#bytm-thumbnail-overlay-img {
  position: relative;
  width: 100%;
  height: 100%;
}

#bytm-thumbnail-overlay-indicator {
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: calc(min(56px, 100% - 16px));
  height: calc(min(56px, 100% - 16px));
  z-index: 1;
  cursor: help;
  filter: drop-shadow(0 0 3px #000);
}

ytmusic-player#player #bezel {
  z-index: 1;
}

/* #region queue buttons */

#side-panel ytmusic-player-queue-item .song-info.ytmusic-player-queue-item {
  position: relative;
}

#side-panel ytmusic-player-queue-item .bytm-queue-btn-container {
  background: rgb(0, 0, 0);
  background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #030303 15%);
  display: none;
  position: absolute;
  right: 0;
  padding-left: 25px;
  height: 100%;
}

#side-panel ytmusic-player-queue-item[selected] .bytm-queue-btn-container {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #1D1D1D 15%);
}

.bytm-generic-list-queue-btn-container {
  /* otherwise the queue buttons render over the currently playing song page */
  z-index: 1;
}

#side-panel ytmusic-player-queue-item:hover .bytm-queue-btn-container,
ytmusic-playlist-shelf-renderer ytmusic-responsive-list-item-renderer:hover .bytm-queue-btn-container,
ytmusic-shelf-renderer ytmusic-responsive-list-item-renderer:hover .bytm-queue-btn-container,
/* same thing but with :focus-within */
#side-panel ytmusic-player-queue-item:focus-within .bytm-queue-btn-container,
ytmusic-playlist-shelf-renderer ytmusic-responsive-list-item-renderer:focus-within .bytm-queue-btn-container,
ytmusic-shelf-renderer ytmusic-responsive-list-item-renderer:focus-within .bytm-queue-btn-container
{
  display: inline-flex;
  align-items: center;
}

ytmusic-responsive-list-item-renderer .title-column {
  align-items: center;
}

#side-panel ytmusic-player-queue-item[play-button-state="loading"] .bytm-queue-btn-container,
#side-panel ytmusic-player-queue-item[play-button-state="playing"] .bytm-queue-btn-container,
#side-panel ytmusic-player-queue-item[play-button-state="paused"] .bytm-queue-btn-container
{
  /* using a var() with predefined value from YTM is not viable since the nesting changes the actual value of the variable */
  background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #030303 15%);
}

#side-panel ytmusic-player-queue-item[selected][play-button-state="loading"] .bytm-queue-btn-container,
#side-panel ytmusic-player-queue-item[selected][play-button-state="playing"] .bytm-queue-btn-container,
#side-panel ytmusic-player-queue-item[selected][play-button-state="paused"] .bytm-queue-btn-container
{
  /* using a var() with predefined value from YTM is not viable since the nesting changes the actual value of the variable */
  background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #1D1D1D 15%);
}

ytmusic-app ytmusic-popup-container tp-yt-iron-dropdown[data-bytm-hidden=true] {
  display: none !important;
}

ytmusic-responsive-list-item-renderer.bytm-has-queue-btns .bytm-generic-list-queue-btn-container {
  visibility: hidden;
}

ytmusic-responsive-list-item-renderer.bytm-has-queue-btns .bytm-generic-list-queue-btn-container a.bytm-generic-btn {
  visibility: hidden !important;
}

ytmusic-responsive-list-item-renderer.bytm-has-queue-btns:hover .bytm-generic-list-queue-btn-container,
ytmusic-responsive-list-item-renderer.bytm-has-queue-btns:focus-within .bytm-generic-list-queue-btn-container
{
  visibility: visible;
}

ytmusic-responsive-list-item-renderer.bytm-has-queue-btns:hover .bytm-generic-list-queue-btn-container a.bytm-generic-btn,
ytmusic-responsive-list-item-renderer.bytm-has-queue-btns:focus-within .bytm-generic-list-queue-btn-container a.bytm-generic-btn
{
  visibility: visible !important;
}
`, "global");
}
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
        const oldFeats = reserialize(getFeatures());
        yield setFeatures(Object.assign(Object.assign({}, defaultData), getFeatures()));
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
}
preInit();})(UserUtils,marked,Fuse);//# sourceMappingURL=http://localhost:8710/BetterYTM.user.js.map
