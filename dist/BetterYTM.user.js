// ==UserScript==
// @name              BetterYTM
// @namespace         https://github.com/Sv443/BetterYTM
// @version           2.2.0
// @description       Lots of configurable layout and user experience improvements for YouTube Music™ and YouTube™
// @homepageURL       https://github.com/Sv443/BetterYTM#readme
// @supportURL        https://github.com/Sv443/BetterYTM/issues
// @license           AGPL-3.0-only
// @author            Sv443
// @copyright         Sv443 (https://github.com/Sv443)
// @icon              https://cdn.jsdelivr.net/gh/Sv443/BetterYTM@b3cbc48c/assets/images/logo/logo_dev_48.png
// @match             https://music.youtube.com/*
// @match             https://www.youtube.com/*
// @run-at            document-start
// @description:de-DE Konfigurierbare Layout- und Benutzererfahrungs-Verbesserungen für YouTube Music™ und YouTube™
// @description:de    Konfigurierbare Layout- und Benutzererfahrungs-Verbesserungen für YouTube Music™ und YouTube™
// @description:de-AT Konfigurierbare Layout- und Benutzererfahrungs-Verbesserungen für YouTube Music™ und YouTube™
// @description:de-CH Konfigurierbare Layout- und Benutzererfahrungs-Verbesserungen für YouTube Music™ und YouTube™
// @description:de-LI Konfigurierbare Layout- und Benutzererfahrungs-Verbesserungen für YouTube Music™ und YouTube™
// @description:de-LU Konfigurierbare Layout- und Benutzererfahrungs-Verbesserungen für YouTube Music™ und YouTube™
// @description:en-US Configurable layout and user experience improvements for YouTube Music™ and YouTube™
// @description:en    Configurable layout and user experience improvements for YouTube Music™ and YouTube™
// @description:en-CA Configurable layout and user experience improvements for YouTube Music™ and YouTube™
// @description:en-GB Configurable layout and user experience improvements for YouTube Music™ and YouTube™
// @description:en-AU Configurable layout and user experience improvements for YouTube Music™ and YouTube™
// @description:en-IE Configurable layout and user experience improvements for YouTube Music™ and YouTube™
// @description:en-NZ Configurable layout and user experience improvements for YouTube Music™ and YouTube™
// @description:en-ZA Configurable layout and user experience improvements for YouTube Music™ and YouTube™
// @description:es-ES Mejoras de diseño y experiencia de usuario configurables para YouTube Music™ y YouTube™
// @description:es    Mejoras de diseño y experiencia de usuario configurables para YouTube Music™ y YouTube™
// @description:es-MX Mejoras de diseño y experiencia de usuario configurables para YouTube Music™ y YouTube™
// @description:fr-FR Améliorations de la mise en page et de l'expérience utilisateur configurables pour YouTube Music™ et YouTube™
// @description:fr    Améliorations de la mise en page et de l'expérience utilisateur configurables pour YouTube Music™ et YouTube™
// @description:fr-CA Améliorations de la mise en page et de l'expérience utilisateur configurables pour YouTube Music™ et YouTube™
// @description:fr-BE Améliorations de la mise en page et de l'expérience utilisateur configurables pour YouTube Music™ et YouTube™
// @description:fr-CH Améliorations de la mise en page et de l'expérience utilisateur configurables pour YouTube Music™ et YouTube™
// @description:fr-LU Améliorations de la mise en page et de l'expérience utilisateur configurables pour YouTube Music™ et YouTube™
// @description:hi-IN YouTube Music™ और YouTube™ के लिए कॉन्फ़िगर करने योग्य लेआउट और उपयोगकर्ता अनुभव में सुधार
// @description:hi    YouTube Music™ और YouTube™ के लिए कॉन्फ़िगर करने योग्य लेआउट और उपयोगकर्ता अनुभव में सुधार
// @description:hi-NP YouTube Music™ और YouTube™ के लिए कॉन्फ़िगर करने योग्य लेआउट और उपयोगकर्ता अनुभव में सुधार
// @description:ja-JP YouTube Music™ と YouTube™ の構成可能なレイアウトとユーザー エクスペリエンスの向上
// @description:ja    YouTube Music™ と YouTube™ の構成可能なレイアウトとユーザー エクスペリエンスの向上
// @description:pt-BR Melhorias configuráveis no layout e na experiência do usuário para o YouTube Music™ e o YouTube™
// @description:pt    Melhorias configuráveis no layout e na experiência do usuário para o YouTube Music™ e o YouTube™
// @description:pt-PT Melhorias configuráveis no layout e na experiência do usuário para o YouTube Music™ e o YouTube™
// @description:zh-CN YouTube Music™ 和 YouTube™ 的可配置布局和用户体验改进
// @description:zh    YouTube Music™ 和 YouTube™ 的可配置布局和用户体验改进
// @description:zh-TW YouTube Music™ 和 YouTube™ 的可配置布局和用户体验改进
// @description:zh-HK YouTube Music™ 和 YouTube™ 的可配置布局和用户体验改进
// @description:zh-SG YouTube Music™ 和 YouTube™ 的可配置布局和用户体验改进
// @connect           api.sv443.net
// @connect           github.com
// @connect           raw.githubusercontent.com
// @connect           youtube.com
// @connect           returnyoutubedislikeapi.com
// @noframes
// @updateURL         https://github.com/Sv443/BetterYTM/raw/refs/heads/main/dist/BetterYTM.meta.js
// @downloadURL       https://github.com/Sv443/BetterYTM/raw/refs/heads/main/dist/BetterYTM.user.js
// @grant             GM.getValue
// @grant             GM.setValue
// @grant             GM.deleteValue
// @grant             GM.getResourceUrl
// @grant             GM.setClipboard
// @grant             GM.xmlHttpRequest
// @grant             GM.openInTab
// @grant             unsafeWindow
// @require           https://cdn.jsdelivr.net/npm/@sv443-network/userutils@9.3.0/dist/index.global.js
// @require           https://cdn.jsdelivr.net/npm/marked@12.0.2/lib/marked.umd.js
// @require           https://cdn.jsdelivr.net/npm/compare-versions@6.1.1/lib/umd/index.js
// @require           https://cdn.jsdelivr.net/npm/dompurify@3.2.4
// @grant             GM.registerMenuCommand
// @grant             GM.listValues

// ==/UserScript==
/*
▄▄▄      ▄   ▄         ▄   ▄▄▄▄▄▄   ▄
█  █ ▄▄▄ █   █   ▄█▄ ▄ ▄█ █  █  █▀▄▀█
█▀▀▄ █▄█ █▀  █▀  █▄█ █▀  █   █  █   █
█▄▄▀ ▀▄▄ ▀▄▄ ▀▄▄ ▀▄▄ █   █   █  █   █

        Made with ❤️ by Sv443
I welcome every contribution on GitHub!
  https://github.com/Sv443/BetterYTM
*/

/* Disclaimer: I am not affiliated with or endorsed by YouTube, Google, Alphabet, Genius or anyone else */
/* C&D this 🖕 */

(function(UserUtils,DOMPurify,marked,compareVersions){'use strict';function _interopNamespaceDefault(e){var n=Object.create(null);if(e){Object.keys(e).forEach(function(k){if(k!=='default'){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:true,get:function(){return e[k]}});}})}n.default=e;return Object.freeze(n)}var UserUtils__namespace=/*#__PURE__*/_interopNamespaceDefault(UserUtils);var compareVersions__namespace=/*#__PURE__*/_interopNamespaceDefault(compareVersions);var resources = {
	"css-above_queue_btns": "style/aboveQueueBtns.css",
	"css-above_queue_btns_sticky": "style/aboveQueueBtnsSticky.css",
	"css-anchor_improvements": "style/anchorImprovements.css",
	"css-auto_like": "style/autoLike.css",
	"css-bundle": "/dist/BetterYTM.css",
	"css-fix_hdr": "style/fixHDR.css",
	"css-fix_playerpage_theming": "style/fixPlayerPageTheming.css",
	"css-fix_spacing": "style/fixSpacing.css",
	"css-fix_sponsorblock": "style/fixSponsorBlock.css",
	"css-hide_themesong_logo": "style/hideThemeSongLogo.css",
	"css-show_votes": "style/showVotes.css",
	"css-vol_slider_size": "style/volSliderSize.css",
	"css-watch_page_full_size": "style/watchPageFullSize.css",
	"doc-license": {
		path: "/LICENSE.txt",
		ref: "$BRANCH",
		integrity: false
	},
	"doc-svg_spritesheet": "spritesheet.svg",
	"font-cousine_ttf": "fonts/Cousine/Cousine-Regular.ttf",
	"font-cousine_woff": "fonts/Cousine/Cousine-Regular.woff",
	"font-cousine_woff2": "fonts/Cousine/Cousine-Regular.woff2",
	"icon-advanced_mode": "icons/plus_circle_small.svg",
	"icon-alert": "icons/alert.svg",
	"icon-arrow_down": "icons/arrow_down.svg",
	"icon-auto_like_enabled": "icons/auto_like_enabled.svg",
	"icon-auto_like": "icons/auto_like.svg",
	"icon-clear_list": "icons/clear_list.svg",
	"icon-copy": "icons/copy.svg",
	"icon-delete": "icons/delete.svg",
	"icon-edit": "icons/edit.svg",
	"icon-error": "icons/error.svg",
	"icon-experimental": "icons/beaker_small.svg",
	"icon-globe_small": "icons/globe_small.svg",
	"icon-globe": "icons/globe.svg",
	"icon-help": "icons/help.svg",
	"icon-image_filled": "icons/image_filled.svg",
	"icon-image": "icons/image.svg",
	"icon-link": "icons/link.svg",
	"icon-lyrics": "icons/lyrics.svg",
	"icon-prompt": "icons/help.svg",
	"icon-reload": "icons/refresh.svg",
	"icon-restore_time": "icons/restore_time.svg",
	"icon-skip_to": "icons/skip_to.svg",
	"icon-speed": "icons/speed.svg",
	"icon-spinner": "icons/spinner.svg",
	"icon-upload": "icons/upload.svg",
	"img-close": "images/close.png",
	"img-discord": "images/external/discord.png",
	"img-github": "images/external/github.png",
	"img-greasyfork": "images/external/greasyfork.png",
	"img-logo_dev": "images/logo/logo_dev_48.png",
	"img-logo": "images/logo/logo_48.png",
	"img-openuserjs": "images/external/openuserjs.png",
	"trans-de-DE": "translations/de-DE.json",
	"trans-en-US": "translations/en-US.json",
	"trans-en-GB": "translations/en-GB.json",
	"trans-es-ES": "translations/es-ES.json",
	"trans-fr-FR": "translations/fr-FR.json",
	"trans-hi-IN": "translations/hi-IN.json",
	"trans-ja-JP": "translations/ja-JP.json",
	"trans-pt-BR": "translations/pt-BR.json",
	"trans-zh-CN": "translations/zh-CN.json"
};
var resourcesJson = {
	resources: resources
};var locales = {
	"de-DE": {
	name: "Deutsch (Deutschland)",
	nameEnglish: "German (Germany)",
	emoji: "🇩🇪",
	userscriptDesc: "Konfigurierbare Layout- und Benutzererfahrungs-Verbesserungen für YouTube Music™ und YouTube™",
	authors: [
		"Sv443"
	],
	altLocales: [
		"de",
		"de-AT",
		"de-CH",
		"de-LI",
		"de-LU"
	],
	textDir: "ltr",
	sentenceTerminator: "."
},
	"en-US": {
	name: "English (United States)",
	nameEnglish: "English (United States)",
	emoji: "🇺🇸",
	userscriptDesc: "Configurable layout and user experience improvements for YouTube Music™ and YouTube™",
	authors: [
		"Sv443"
	],
	altLocales: [
		"en",
		"en-CA"
	],
	textDir: "ltr",
	sentenceTerminator: "."
},
	"en-GB": {
	name: "English (Great Britain)",
	nameEnglish: "English (Great Britain)",
	emoji: "🇬🇧",
	userscriptDesc: "Configurable layout and user experience improvements for YouTube Music™ and YouTube™",
	authors: [
		"Sv443"
	],
	altLocales: [
		"en-AU",
		"en-IE",
		"en-NZ",
		"en-ZA"
	],
	textDir: "ltr",
	sentenceTerminator: "."
},
	"es-ES": {
	name: "Español (España)",
	nameEnglish: "Spanish (Spain)",
	emoji: "🇪🇸",
	userscriptDesc: "Mejoras de diseño y experiencia de usuario configurables para YouTube Music™ y YouTube™",
	authors: [
		"Sv443"
	],
	altLocales: [
		"es",
		"es-MX"
	],
	textDir: "ltr",
	sentenceTerminator: "."
},
	"fr-FR": {
	name: "Français (France)",
	nameEnglish: "French (France)",
	emoji: "🇫🇷",
	userscriptDesc: "Améliorations de la mise en page et de l'expérience utilisateur configurables pour YouTube Music™ et YouTube™",
	authors: [
		"Sv443"
	],
	altLocales: [
		"fr",
		"fr-CA",
		"fr-BE",
		"fr-CH",
		"fr-LU"
	],
	textDir: "ltr",
	sentenceTerminator: "."
},
	"hi-IN": {
	name: "हिंदी (भारत)",
	nameEnglish: "Hindi (India)",
	emoji: "🇮🇳",
	userscriptDesc: "YouTube Music™ और YouTube™ के लिए कॉन्फ़िगर करने योग्य लेआउट और उपयोगकर्ता अनुभव में सुधार",
	authors: [
		"Sv443"
	],
	altLocales: [
		"hi",
		"hi-NP"
	],
	textDir: "ltr",
	sentenceTerminator: "।"
},
	"ja-JP": {
	name: "日本語 (日本)",
	nameEnglish: "Japanese (Japan)",
	emoji: "🇯🇵",
	userscriptDesc: "YouTube Music™ と YouTube™ の構成可能なレイアウトとユーザー エクスペリエンスの向上",
	authors: [
		"Sv443"
	],
	altLocales: [
		"ja"
	],
	textDir: "ltr",
	sentenceTerminator: "。"
},
	"pt-BR": {
	name: "Português (Brasil)",
	nameEnglish: "Portuguese (Brazil)",
	emoji: "🇧🇷",
	userscriptDesc: "Melhorias configuráveis no layout e na experiência do usuário para o YouTube Music™ e o YouTube™",
	authors: [
		"Sv443"
	],
	altLocales: [
		"pt",
		"pt-PT"
	],
	textDir: "ltr",
	sentenceTerminator: "."
},
	"zh-CN": {
	name: "中文（简化，中国）",
	nameEnglish: "Chinese (Simplified, China)",
	emoji: "🇨🇳",
	userscriptDesc: "YouTube Music™ 和 YouTube™ 的可配置布局和用户体验改进",
	authors: [
		"Sv443"
	],
	altLocales: [
		"zh",
		"zh-TW",
		"zh-HK",
		"zh-SG"
	],
	textDir: "ltr",
	sentenceTerminator: "。"
}
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
    /** Plugin can read the feature configuration */
    PluginIntent[PluginIntent["ReadFeatureConfig"] = 1] = "ReadFeatureConfig";
    /** Plugin can write to the feature configuration */
    PluginIntent[PluginIntent["WriteFeatureConfig"] = 2] = "WriteFeatureConfig";
    /** Plugin has access to hidden config values */
    PluginIntent[PluginIntent["SeeHiddenConfigValues"] = 4] = "SeeHiddenConfigValues";
    /** Plugin can write to the lyrics cache */
    PluginIntent[PluginIntent["WriteLyricsCache"] = 8] = "WriteLyricsCache";
    /** Plugin can add new translations and overwrite existing ones */
    PluginIntent[PluginIntent["WriteTranslations"] = 16] = "WriteTranslations";
    /** Plugin can create modal dialogs */
    PluginIntent[PluginIntent["CreateModalDialogs"] = 32] = "CreateModalDialogs";
    /** Plugin can read auto-like data */
    PluginIntent[PluginIntent["ReadAutoLikeData"] = 64] = "ReadAutoLikeData";
    /** Plugin can write to auto-like data */
    PluginIntent[PluginIntent["WriteAutoLikeData"] = 128] = "WriteAutoLikeData";
})(PluginIntent || (PluginIntent = {}));// these strings will have their values replaced by the post-build script:
const rawConsts = {
    mode: "development",
    branch: "develop",
    host: "github",
    buildNumber: "b3cbc48c",
    assetSource: "jsdelivr",
    devServerPort: "8710",
};
const getConst = (constKey, defaultVal) => {
    const val = rawConsts[constKey];
    return (val.match(/^#{{.+}}$/) ? defaultVal : val);
};
/** Path to the GitHub repo */
const repo = "Sv443/BetterYTM";
/** The mode in which the script was built (production or development) */
const mode = getConst("mode", "production");
/** The branch to use in various URLs that point to the GitHub repo */
const branch = getConst("branch", "main");
/** Which host the userscript was installed from */
const host = getConst("host", "github");
/** The build number of the userscript */
const buildNumber = getConst("buildNumber", "!BUILD_ERROR!");
/** The source of the assets - github, jsdelivr or local */
const assetSource = getConst("assetSource", "jsdelivr");
/** The port of the dev server */
const devServerPort = Number(getConst("devServerPort", 8710));
/** URL to the changelog file */
const changelogUrl = `https://raw.githubusercontent.com/${repo}/${buildNumber !== null && buildNumber !== void 0 ? buildNumber : branch}/changelog.md`;
/** The URL search parameters at the earliest possible time */
const initialParams = new URL(location.href).searchParams;
/** Names of platforms by key of {@linkcode host} */
const platformNames = UserUtils.purifyObj({
    github: "GitHub",
    greasyfork: "GreasyFork",
    openuserjs: "OpenUserJS",
});
/** Default compression format used throughout BYTM */
const compressionFormat = "deflate-raw";
/** Whether sessionStorage is available and working */
const sessionStorageAvailable = typeof (sessionStorage === null || sessionStorage === void 0 ? void 0 : sessionStorage.setItem) === "function"
    && (() => {
        try {
            const key = `_bytm_test_${UserUtils.randomId(6, 36, false, true)}`;
            sessionStorage.setItem(key, "test");
            sessionStorage.removeItem(key);
            return true;
        }
        catch (_a) {
            return false;
        }
    })();
/**
 * Fallback and initial value of how much info should be logged to the devtools console
 * 0 = Debug (show everything) or 1 = Info (show only important stuff)
 */
const defaultLogLevel = mode === "production" ? LogLevel.Info : LogLevel.Debug;
/** Info about the userscript, parsed from the userscript header (tools/post-build.js) */
const scriptInfo = UserUtils.purifyObj({
    name: GM.info.script.name,
    version: GM.info.script.version,
    namespace: GM.info.script.namespace,
});let canCompress$2 = true;
const lyricsCacheMgr = new UserUtils.DataStore({
    id: "bytm-lyrics-cache",
    defaultData: {
        cache: [],
    },
    formatVersion: 1,
    encodeData: (data) => canCompress$2 ? UserUtils.compress(data, compressionFormat, "string") : data,
    decodeData: (data) => canCompress$2 ? UserUtils.decompress(data, compressionFormat, "string") : data,
});
async function initLyricsCache() {
    canCompress$2 = await compressionSupported();
    const data = await lyricsCacheMgr.loadData();
    log(`Initialized lyrics cache with ${data.cache.length} entries:`, data);
    emitInterface("bytm:lyricsCacheReady");
    return data;
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
    log("Added lyrics cache entry for best result:", entry);
    emitInterface("bytm:lyricsCacheEntryAdded", { entry, type: "best" });
    return lyricsCacheMgr.setData({ cache });
}/******************************************************************************
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
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


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
};/** Contains the identifiers of all initialized and loaded translation locales */
const initializedLocales = new Set();
/** The currently active locale */
let activeLocale = "en-US";
UserUtils.tr.addTransform(UserUtils.tr.transforms.percent);
UserUtils.tr.addTransform(UserUtils.tr.transforms.templateLiteral);
UserUtils.tr.setFallbackLanguage("en-US");
/** Initializes the translations */
async function initTranslations(locale) {
    if (initializedLocales.has(locale))
        return;
    initializedLocales.add(locale);
    try {
        const transFile = await fetchLocaleJson(locale);
        let fallbackTrans = {};
        if (getFeature("localeFallback"))
            fallbackTrans = await fetchLocaleJson("en-US");
        // merge with base translations if specified
        const baseTransFile = typeof (transFile === null || transFile === void 0 ? void 0 : transFile.meta) === "object" && "base" in transFile.meta && typeof transFile.meta.base === "string"
            ? await fetchLocaleJson(transFile.base)
            : undefined;
        const translations = Object.assign(Object.assign(Object.assign({}, (fallbackTrans !== null && fallbackTrans !== void 0 ? fallbackTrans : {})), (baseTransFile !== null && baseTransFile !== void 0 ? baseTransFile : {})), transFile);
        const _a = translations.meta, { authors: _authors } = _a, meta = __rest(_a, ["authors"]), trans = __rest(translations, ["meta"]);
        UserUtils.tr.addTranslations(locale, Object.assign(Object.assign({}, meta), trans));
        info(`Loaded translations for locale '${locale}'`);
    }
    catch (err) {
        const errStr = `Couldn't load translations for locale '${locale}'`;
        error(errStr, err);
        throw new Error(errStr);
    }
}
/** Fetches the translation JSON file of the passed locale */
async function fetchLocaleJson(locale) {
    const url = await getResourceUrl(`trans-${locale}`);
    const res = await UserUtils.fetchAdvanced(url);
    if (res.status < 200 || res.status >= 300)
        throw new Error(`Failed to fetch translation file for locale '${locale}'`);
    return await res.json();
}
/** Sets the current language for translations */
function setLocale(locale) {
    activeLocale = locale;
    setGlobalProp("locale", locale);
    emitInterface("bytm:setLocale", { locale });
}
/** Returns the currently set language */
function getLocale() {
    return activeLocale;
}
/** Returns whether the given translation key exists in the current locale */
async function hasKey(key) {
    return await hasKeyFor(getLocale(), key);
}
/** Returns whether the given translation key exists in the given locale - if it hasn't been initialized yet, initializes it first. */
async function hasKeyFor(locale, key) {
    var _a;
    if (!initializedLocales.has(locale))
        await initTranslations(locale);
    return typeof ((_a = UserUtils.tr.getTranslations(locale)) === null || _a === void 0 ? void 0 : _a[key]) === "string";
}
/** Returns the translated string for the given key, after optionally inserting values */
function t(key, ...values) {
    return tl(activeLocale, key, ...values);
}
/**
 * Returns the translated string for the given {@linkcode key} with an added pluralization identifier based on the passed {@linkcode num}
 * Also inserts the passed {@linkcode values} into the translation at the markers `%1`, `%2`, etc.
 * Tries to fall back to the non-pluralized syntax if no translation was found
 */
function tp(key, num, ...values) {
    return tlp(getLocale(), key, num, ...values);
}
/** Returns the translated string for the given key in the specified locale, after optionally inserting values */
function tl(locale, key, ...values) {
    return UserUtils.tr.for(locale, key, ...values);
}
/**
 * Returns the translated string for the given {@linkcode key} in the given {@linkcode locale} with an added pluralization identifier based on the passed {@linkcode num}
 * Also inserts the passed {@linkcode values} into the translation at the markers `%1`, `%2`, etc.
 * Tries to fall back to the non-pluralized syntax if no translation was found
 */
function tlp(locale, key, num, ...values) {
    if (typeof num !== "number")
        num = num.length;
    const plNum = num === 1 ? "1" : "n";
    const trans = tl(locale, `${key}-${plNum}`, ...values);
    if (trans === key)
        return t(key, ...values);
    return trans;
}// hoist the class declaration because either rollup or babel is being a hoe
/** Whether the dialog system has been initialized */
let dialogsInitialized = false;
/** Container element for all BytmDialog elements */
let dialogContainer;
// TODO: remove export as soon as config menu is migrated to use BytmDialog
/** ID of the last opened (top-most) dialog */
let currentDialogId = null;
/** IDs of all currently open dialogs, top-most first */
const openDialogs = [];
/** TODO: remove as soon as config menu is migrated to use BytmDialog */
const setCurrentDialogId = (id) => currentDialogId = id;
/** Creates and manages a modal dialog element */
class BytmDialog extends UserUtils.NanoEmitter {
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
        BytmDialog.initDialogs();
        this.options = Object.assign({ closeOnBgClick: true, closeOnEscPress: true, closeBtnEnabled: true, destroyOnClose: false, unmountOnClose: true, removeListenersOnDestroy: true, smallHeader: false, verticalAlign: "center" }, options);
        this.id = options.id;
    }
    //#region public
    /** Call after DOMContentLoaded to pre-render the dialog and invisibly mount it in the DOM */
    async mount() {
        if (this.dialogMounted)
            return;
        this.dialogMounted = true;
        const bgElem = document.createElement("div");
        bgElem.id = `bytm-${this.id}-dialog-bg`;
        bgElem.classList.add("bytm-dialog-bg");
        if (this.options.closeOnBgClick)
            bgElem.ariaLabel = bgElem.title = t("close_menu_tooltip");
        bgElem.style.setProperty("--bytm-dialog-width-max", `${this.options.width}px`);
        bgElem.style.setProperty("--bytm-dialog-height-max", `${this.options.height}px`);
        bgElem.style.visibility = "hidden";
        bgElem.style.display = "none";
        bgElem.inert = true;
        try {
            bgElem.appendChild(await this.getDialogContent());
            if (dialogContainer)
                dialogContainer.appendChild(bgElem);
            else
                document.addEventListener("DOMContentLoaded", () => dialogContainer === null || dialogContainer === void 0 ? void 0 : dialogContainer.appendChild(bgElem));
        }
        catch (e) {
            return error("Failed to render dialog content:", e);
        }
        this.attachListeners(bgElem);
        this.events.emit("render");
        return bgElem;
    }
    /** Closes the dialog and clears all its contents (unmounts elements from the DOM) in preparation for a new rendering call */
    unmount() {
        var _a;
        this.close();
        this.dialogMounted = false;
        const clearSelectors = [
            `#bytm-${this.id}-dialog-bg`,
        ];
        for (const sel of clearSelectors) {
            const elem = document.querySelector(sel);
            (elem === null || elem === void 0 ? void 0 : elem.hasChildNodes()) && clearInner(elem);
            (_a = document.querySelector(sel)) === null || _a === void 0 ? void 0 : _a.remove();
        }
        this.events.emit("clear");
    }
    /** Clears the DOM of the dialog and then renders it again */
    async remount() {
        this.unmount();
        await this.mount();
    }
    /**
     * Opens the dialog - also mounts it if it hasn't been mounted yet
     * Prevents default action and immediate propagation of the passed event
     */
    async open(e) {
        var _a;
        e === null || e === void 0 ? void 0 : e.preventDefault();
        e === null || e === void 0 ? void 0 : e.stopImmediatePropagation();
        if (this.isOpen())
            return;
        this.dialogOpen = true;
        if (openDialogs.includes(this.id)) {
            openDialogs.splice(openDialogs.indexOf(this.id), 1);
            currentDialogId = (_a = openDialogs[0]) !== null && _a !== void 0 ? _a : null;
            this.removeBgInert();
            this.close();
            throw new Error(`A dialog with the same ID of '${this.id}' already exists and is open!`);
        }
        if (!this.isMounted())
            await this.mount();
        this.setBgInert();
        const dialogBg = document.querySelector(`#bytm-${this.id}-dialog-bg`);
        if (!dialogBg)
            return warn(`Couldn't find background element for dialog with ID '${this.id}'`);
        dialogBg.style.visibility = "visible";
        dialogBg.style.display = "block";
        currentDialogId = this.id;
        openDialogs.unshift(this.id);
        this.events.emit("open");
        emitInterface("bytm:dialogOpened", this);
        emitInterface(`bytm:dialogOpened:${this.id}`, this);
        return dialogBg;
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
        openDialogs.splice(openDialogs.indexOf(this.id), 1);
        currentDialogId = (_a = openDialogs[0]) !== null && _a !== void 0 ? _a : null;
        this.removeBgInert();
        this.events.emit("close");
        emitInterface("bytm:dialogClosed", this);
        emitInterface(`bytm:dialogClosed:${this.id}`, this);
        if (this.options.destroyOnClose)
            this.destroy();
        // don't destroy *and* unmount at the same time
        else if (this.options.unmountOnClose)
            this.unmount();
        this.removeBgInert();
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
        this.options.removeListenersOnDestroy && this.unsubscribeAll();
    }
    //#region static
    /** Initializes the dialog system */
    static initDialogs() {
        if (dialogsInitialized)
            return;
        dialogsInitialized = true;
        const createContainer = () => {
            const bytmDialogCont = dialogContainer = document.createElement("div");
            bytmDialogCont.id = "bytm-dialog-container";
            document.body.appendChild(bytmDialogCont);
        };
        if (!UserUtils.isDomLoaded())
            document.addEventListener("DOMContentLoaded", createContainer);
        else
            createContainer();
    }
    /** Returns the ID of the top-most dialog (the dialog that has been opened last) */
    static getCurrentDialogId() {
        return currentDialogId;
    }
    /** Returns the IDs of all currently open dialogs, top-most first */
    static getOpenDialogs() {
        return openDialogs;
    }
    //#region protected
    /** Sets this dialog and the body to be inert and makes sure the top-most dialog is not inert. If no other dialogs are open, the body is not set to be inert. */
    removeBgInert() {
        var _a, _b, _c;
        // make sure the new top-most dialog is not inert
        if (currentDialogId) {
            // special treatment for the old config menu, as always
            if (currentDialogId === "cfg-menu")
                (_a = document.querySelector("#bytm-cfg-menu-bg")) === null || _a === void 0 ? void 0 : _a.removeAttribute("inert");
            else
                (_b = document.querySelector(`#bytm-${currentDialogId}-dialog-bg`)) === null || _b === void 0 ? void 0 : _b.removeAttribute("inert");
        }
        // remove the scroll lock and inert attribute on the body if no dialogs are open
        if (openDialogs.length === 0) {
            document.body.classList.remove("bytm-disable-scroll");
            (_c = document.querySelector(getDomain() === "ytm" ? "ytmusic-app" : "ytd-app")) === null || _c === void 0 ? void 0 : _c.removeAttribute("inert");
        }
        const dialogBg = document.querySelector(`#bytm-${this.id}-dialog-bg`);
        dialogBg === null || dialogBg === void 0 ? void 0 : dialogBg.setAttribute("inert", "true");
    }
    /** Sets this dialog to be not inert and the body and all other dialogs to be inert */
    setBgInert() {
        var _a, _b, _c;
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
        const dialogBg = document.querySelector(`#bytm-${this.id}-dialog-bg`);
        dialogBg === null || dialogBg === void 0 ? void 0 : dialogBg.removeAttribute("inert");
    }
    /** Called on every {@linkcode mount()} to attach all generic event listeners */
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
    /** Returns the dialog content element and all its children */
    async getDialogContent() {
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
        if (this.options.verticalAlign !== "center")
            dialogWrapperEl.classList.add(`align-${this.options.verticalAlign}`);
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
            headerTitleWrapperEl.appendChild(header instanceof Promise ? await header : header);
            headerWrapperEl.appendChild(headerTitleWrapperEl);
        }
        else {
            // insert element to pad the header height
            const padEl = document.createElement("div");
            padEl.classList.add("bytm-dialog-header-pad");
            this.options.small && padEl.classList.add("small");
            headerWrapperEl.appendChild(padEl);
        }
        if (this.options.closeBtnEnabled) {
            const closeBtnEl = document.createElement("img");
            closeBtnEl.classList.add("bytm-dialog-close");
            this.options.small && closeBtnEl.classList.add("small");
            closeBtnEl.src = await getResourceUrl("img-close");
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
        dialogBodyElem.appendChild(body instanceof Promise ? await body : body);
        dialogWrapperEl.appendChild(dialogBodyElem);
        //#region footer
        if (footer) {
            const footerWrapper = document.createElement("div");
            footerWrapper.classList.add("bytm-dialog-footer-cont");
            this.options.small && footerWrapper.classList.add("small");
            dialogWrapperEl.appendChild(footerWrapper);
            footerWrapper.appendChild(footer instanceof Promise ? await footer : footer);
        }
        return dialogWrapperEl;
    }
}/** Creates a simple toggle element */
async function createToggleInput({ onChange, initialValue = false, id = UserUtils.randomId(6, 36), labelPos = "left", }) {
    const wrapperEl = document.createElement("div");
    wrapperEl.classList.add("bytm-toggle-input-wrapper", "bytm-no-select");
    wrapperEl.role = "switch";
    wrapperEl.tabIndex = 0;
    const labelEl = labelPos !== "off" ? document.createElement("label") : undefined;
    if (labelEl) {
        labelEl.id = `bytm-toggle-input-label-${id}`;
        labelEl.classList.add("bytm-toggle-input-label");
        labelEl.textContent = t(`toggled_${initialValue ? "on" : "off"}`);
        if (id)
            labelEl.htmlFor = `bytm-toggle-input-${id}`;
        wrapperEl.setAttribute("aria-labelledby", labelEl.id);
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
    // TODO: this doesn't make the knob show up on Chromium
    setInnerHtml(toggleKnobEl, "&nbsp;");
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
}var name = "betterytm";
var userscriptName = "BetterYTM";
var version = "2.2.0";
var description = "Lots of configurable layout and user experience improvements for YouTube Music™ and YouTube™";
var homepage = "https://github.com/Sv443/BetterYTM";
var main = "./src/index.ts";
var type = "module";
var scripts = {
	dev: "concurrently \"nodemon --exec pnpm build-local-base --config-assetSource=local\" \"pnpm serve\"",
	"dev-cdn": "concurrently \"nodemon --exec pnpm build-local-base\" \"pnpm serve\"",
	"build-dev": "rollup -c --config-mode development --config-host github --config-branch develop",
	"build-prod": "pnpm build-prod-gh && pnpm build-prod-gf && pnpm build-prod-oujs",
	"build-prod-gh": "pnpm build-prod-base --config-host github",
	"build-prod-gf": "pnpm build-prod-base --config-host greasyfork --config-suffix _gf",
	"build-prod-oujs": "pnpm build-prod-base --config-host openuserjs --config-suffix _oujs",
	"post-build": "pnpm node-ts ./src/tools/post-build.ts",
	"build-local-base": "pnpm build-dev --config-gen-meta=false",
	"build-prod-base": "rollup -c --config-mode production --config-branch main",
	preview: "pnpm build-prod-gh --config-assetSource=local && pnpm serve --auto-exit-time=6",
	serve: "pnpm node-ts ./src/tools/serve.ts",
	lint: "eslint . && tsc --noEmit",
	"tr-changed": "pnpm node-ts ./src/tools/tr-changed.ts",
	"tr-progress": "pnpm node-ts ./src/tools/tr-progress.ts",
	"tr-format": "pnpm node-ts ./src/tools/tr-format.ts",
	"tr-prep": "pnpm tr-format -p",
	"gen-readme": "pnpm node-ts ./src/tools/gen-readme.ts",
	"node-ts": "node --import tsx --no-warnings=ExperimentalWarning --enable-source-maps",
	invisible: "node --enable-source-maps src/tools/run-invisible.mjs",
	test: "pnpm node-ts ./test.ts",
	knip: "knip",
	storybook: "storybook dev -p 6006",
	"build-storybook": "storybook build"
};
var engines = {
	node: ">=20",
	pnpm: ">=9"
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
	"@sv443-network/userutils": "^9.3.0",
	"compare-versions": "^6.1.1",
	dompurify: "^3.2.4",
	marked: "^12.0.2",
	tslib: "^2.8.1"
};
var devDependencies = {
	"@chromatic-com/storybook": "^1.9.0",
	"@eslint/eslintrc": "^3.3.0",
	"@eslint/js": "^9.22.0",
	"@rollup/plugin-json": "^6.1.0",
	"@rollup/plugin-node-resolve": "^15.3.1",
	"@rollup/plugin-terser": "^0.4.4",
	"@rollup/plugin-typescript": "^11.1.6",
	"@storybook/addon-essentials": "^8.6.4",
	"@storybook/addon-interactions": "^8.6.4",
	"@storybook/addon-links": "^8.6.4",
	"@storybook/blocks": "^8.6.4",
	"@storybook/html": "^8.6.4",
	"@storybook/html-vite": "^8.6.4",
	"@storybook/test": "^8.6.4",
	"@types/cors": "^2.8.17",
	"@types/express": "^4.17.21",
	"@types/greasemonkey": "^4.0.7",
	"@types/node": "^20.17.24",
	"@typescript-eslint/eslint-plugin": "^8.26.1",
	"@typescript-eslint/parser": "^8.26.1",
	"@typescript-eslint/utils": "^8.26.1",
	concurrently: "^9.1.2",
	cors: "^2.8.5",
	dotenv: "^16.4.7",
	eslint: "^9.22.0",
	"eslint-plugin-storybook": "^0.11.4",
	express: "^4.21.2",
	globals: "^15.15.0",
	kleur: "^4.1.5",
	knip: "^5.45.0",
	nanoevents: "^9.1.0",
	nodemon: "^3.1.9",
	"open-cli": "^8.0.0",
	pnpm: "^10.6.2",
	rollup: "^4.35.0",
	"rollup-plugin-execute": "^1.1.1",
	"rollup-plugin-import-css": "^3.5.8",
	storybook: "^8.6.4",
	"storybook-dark-mode": "^4.0.2",
	tsx: "^4.19.3",
	typescript: "^5.8.2"
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
		"*/stories/*",
		"assets/**/spritesheet.svg"
	]
};
var pnpm = {
	onlyBuiltDependencies: [
		"esbuild"
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
	nodemonConfig: nodemonConfig,
	pnpm: pnpm
};/** EventEmitter instance that is used to detect various changes to the site and userscript */
const siteEvents = new UserUtils.NanoEmitter({
    publicEmit: true,
});
let observers = [];
let lastVidId = null;
let lastPathname = null;
let lastFullscreen;
/** Creates MutationObservers that check if parts of the site have changed, then emit an event on the `siteEvents` instance. */
async function initSiteEvents() {
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
            if (getDomain() === "ytm") {
                const registerFullScreenObs = () => addSelectorListener("mainPanel", "ytmusic-player#player", {
                    listener: (el) => {
                        playerFullscreenObs.observe(el, {
                            attributeFilter: ["player-ui-state"],
                        });
                    },
                });
                if (globserversReady)
                    registerFullScreenObs();
                else
                    window.addEventListener("bytm:observersReady", registerFullScreenObs, { once: true });
            }
        }
        window.addEventListener("bytm:ready", () => {
            runIntervalChecks();
            setInterval(runIntervalChecks, 100);
            if (getDomain() === "ytm") {
                addSelectorListener("mainPanel", "ytmusic-player #song-video #movie_player .ytp-title-text > a", {
                    listener(el) {
                        const urlRefObs = new MutationObserver(([{ target }]) => {
                            var _a;
                            if (!target || !((_a = target === null || target === void 0 ? void 0 : target.href) === null || _a === void 0 ? void 0 : _a.includes("/watch")))
                                return;
                            const videoID = new URL(target.href).searchParams.get("v");
                            checkVideoIdChange(videoID);
                        });
                        urlRefObs.observe(el, {
                            attributeFilter: ["href"],
                        });
                    }
                });
            }
            if (getDomain() === "ytm") {
                setInterval(checkVideoIdChange, 250);
                checkVideoIdChange();
            }
        }, {
            once: true,
        });
    }
    catch (err) {
        error("Couldn't initialize site event observers due to an error:\n", err);
    }
}
let bytmReady = false;
window.addEventListener("bytm:ready", () => bytmReady = true, { once: true });
/** Emits a site event with the given key and arguments - if `bytm:ready` has not been emitted yet, all events will be queued until it is */
function emitSiteEvent(key, ...args) {
    try {
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
    catch (err) {
        error(`Couldn't emit site event "${key}" due to an error:\n`, err);
    }
}
//#region other
/** Checks if the watch ID has changed and emits a `watchIdChanged` siteEvent if it has */
function checkVideoIdChange(newID) {
    const newVidID = newID !== null && newID !== void 0 ? newID : new URL(location.href).searchParams.get("v");
    if (newVidID && newVidID !== lastVidId) {
        info(`Detected watch ID change - old ID: "${lastVidId}" - new ID: "${newVidID}"`);
        emitSiteEvent("watchIdChanged", newVidID, lastVidId);
        lastVidId = newVidID;
    }
}
/** Periodically called to check for changes in the URL and emit associated siteEvents */
function runIntervalChecks() {
    if (!lastVidId)
        checkVideoIdChange();
    if (location.pathname !== lastPathname) {
        emitSiteEvent("pathChanged", String(location.pathname), lastPathname);
        lastPathname = String(location.pathname);
    }
}let verNotifDialog = null;
/** Creates and/or returns the dialog to be shown when a new version is available */
async function getVersionNotifDialog({ latestTag, }) {
    if (!verNotifDialog) {
        const changelogMdFull = await getChangelogMd();
        // I messed up because this should be 0 so the changelog will always need to have an extra div at the top for backwards compatibility
        const changelogMd = changelogMdFull.split("<div class=\"split\">")[1];
        const changelogHtml = await parseMarkdown(changelogMd);
        verNotifDialog = new BytmDialog({
            id: "version-notif",
            width: 600,
            height: 800,
            closeBtnEnabled: false,
            closeOnBgClick: false,
            closeOnEscPress: true,
            destroyOnClose: true,
            small: true,
            renderHeader: renderHeader$5,
            renderBody: () => renderBody$5({ latestTag, changelogHtml }),
        });
    }
    return verNotifDialog;
}
async function renderHeader$5() {
    const logoEl = document.createElement("img");
    logoEl.classList.add("bytm-dialog-header-img", "bytm-no-select");
    logoEl.src = await getResourceUrl(mode === "development" ? "img-logo_dev" : "img-logo");
    logoEl.alt = "BetterYTM logo";
    return logoEl;
}
let disableUpdateCheck = false;
async function renderBody$5({ latestTag, changelogHtml, }) {
    disableUpdateCheck = false;
    const wrapperEl = document.createElement("div");
    const pEl = document.createElement("p");
    pEl.textContent = t("new_version_available", scriptInfo.name, scriptInfo.version, latestTag, platformNames[host]);
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
    setInnerHtml(changelogEl, changelogHtml);
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
    const disableToggleEl = await createToggleInput({
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
    verNotifDialog === null || verNotifDialog === void 0 ? void 0 : verNotifDialog.on("close", async () => {
        const config = getFeatures();
        const recreateCfgMenu = config.versionCheck === disableUpdateCheck;
        if (config.versionCheck && disableUpdateCheck)
            config.versionCheck = false;
        else if (!config.versionCheck && !disableUpdateCheck)
            config.versionCheck = true;
        await setFeatures(config);
        recreateCfgMenu && emitSiteEvent("recreateCfgMenu");
    });
    const btnWrapper = document.createElement("div");
    btnWrapper.id = "bytm-version-notif-dialog-btns";
    const btnUpdate = document.createElement("button");
    btnUpdate.classList.add("bytm-btn");
    btnUpdate.tabIndex = 0;
    btnUpdate.textContent = t("open_update_page_install_manually", platformNames[host]);
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
}//#region PromptDialog
let promptDialog = null;
class PromptDialog extends BytmDialog {
    constructor(props) {
        super({
            id: "prompt-dialog",
            width: 500,
            height: 400,
            destroyOnClose: true,
            closeBtnEnabled: true,
            closeOnBgClick: props.type !== "prompt",
            closeOnEscPress: true,
            small: true,
            renderHeader: () => this.renderHeader(props),
            renderBody: () => this.renderBody(props),
            renderFooter: () => this.renderFooter(props),
        });
        this.on("render", this.focusOnRender);
    }
    emitResolve(val) {
        this.events.emit("resolve", val);
    }
    async renderHeader({ type }) {
        const headerEl = document.createElement("div");
        headerEl.id = "bytm-prompt-dialog-header";
        setInnerHtml(headerEl, await resourceAsString(type === "alert" ? "icon-alert" : "icon-prompt"));
        return headerEl;
    }
    async renderBody(_a) {
        var { type, message } = _a, rest = __rest(_a, ["type", "message"]);
        const contElem = document.createElement("div");
        contElem.classList.add(`bytm-prompt-type-${type}`);
        const upperContElem = document.createElement("div");
        upperContElem.id = "bytm-prompt-dialog-upper-cont";
        contElem.appendChild(upperContElem);
        const messageElem = document.createElement("p");
        messageElem.id = "bytm-prompt-dialog-message";
        messageElem.role = "alert";
        messageElem.ariaLive = "polite";
        messageElem.tabIndex = 0;
        messageElem.textContent = String(message);
        upperContElem.appendChild(messageElem);
        if (type === "prompt") {
            const inputElem = document.createElement("input");
            inputElem.id = "bytm-prompt-dialog-input";
            inputElem.type = "text";
            inputElem.autocomplete = "off";
            inputElem.spellcheck = false;
            inputElem.value = "defaultValue" in rest && rest.defaultValue
                ? await UserUtils.consumeStringGen(rest.defaultValue)
                : "";
            const inputEnterListener = (e) => {
                var _a, _b;
                if (e.key === "Enter") {
                    inputElem.removeEventListener("keydown", inputEnterListener);
                    this.emitResolve((_b = (_a = inputElem === null || inputElem === void 0 ? void 0 : inputElem.value) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : null);
                    promptDialog === null || promptDialog === void 0 ? void 0 : promptDialog.close();
                }
            };
            inputElem.addEventListener("keydown", inputEnterListener);
            promptDialog === null || promptDialog === void 0 ? void 0 : promptDialog.once("close", () => inputElem.removeEventListener("keydown", inputEnterListener));
            upperContElem.appendChild(inputElem);
        }
        return contElem;
    }
    async renderFooter(_a) {
        var { type } = _a, rest = __rest(_a, ["type"]);
        const buttonsWrapper = document.createElement("div");
        buttonsWrapper.id = "bytm-prompt-dialog-button-wrapper";
        const buttonsCont = document.createElement("div");
        buttonsCont.id = "bytm-prompt-dialog-buttons-cont";
        let confirmBtn;
        if (type === "confirm" || type === "prompt") {
            confirmBtn = document.createElement("button");
            confirmBtn.id = "bytm-prompt-dialog-confirm";
            confirmBtn.classList.add("bytm-prompt-dialog-button");
            confirmBtn.textContent = await this.consumePromptStringGen(type, rest.confirmBtnText, t("prompt_confirm"));
            confirmBtn.ariaLabel = confirmBtn.title = await this.consumePromptStringGen(type, rest.confirmBtnTooltip, t("click_to_confirm_tooltip"));
            confirmBtn.tabIndex = 0;
            confirmBtn.addEventListener("click", () => {
                var _a, _b, _c;
                this.emitResolve(type === "confirm" ? true : (_c = (_b = (_a = (document.querySelector("#bytm-prompt-dialog-input"))) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.trim()) !== null && _c !== void 0 ? _c : null);
                promptDialog === null || promptDialog === void 0 ? void 0 : promptDialog.close();
            }, { once: true });
        }
        const closeBtn = document.createElement("button");
        closeBtn.id = "bytm-prompt-dialog-close";
        closeBtn.classList.add("bytm-prompt-dialog-button");
        closeBtn.textContent = await this.consumePromptStringGen(type, rest.denyBtnText, t(type === "alert" ? "prompt_close" : "prompt_cancel"));
        closeBtn.ariaLabel = closeBtn.title = await this.consumePromptStringGen(type, rest.denyBtnTooltip, t(type === "alert" ? "click_to_close_tooltip" : "click_to_cancel_tooltip"));
        closeBtn.tabIndex = 0;
        closeBtn.addEventListener("click", () => {
            const resVals = {
                alert: true,
                confirm: false,
                prompt: null,
            };
            this.emitResolve(resVals[type]);
            promptDialog === null || promptDialog === void 0 ? void 0 : promptDialog.close();
        }, { once: true });
        confirmBtn && getOS() !== "mac" && buttonsCont.appendChild(confirmBtn);
        buttonsCont.appendChild(closeBtn);
        confirmBtn && getOS() === "mac" && buttonsCont.appendChild(confirmBtn);
        buttonsWrapper.appendChild(buttonsCont);
        return buttonsWrapper;
    }
    /** Converts a {@linkcode stringGen} (stringifiable value or sync or async function that returns a stringifiable value) to a string - uses {@linkcode fallback} as a fallback */
    async consumePromptStringGen(curPromptType, stringGen, fallback) {
        if (typeof stringGen === "function")
            return await stringGen(curPromptType);
        return String(stringGen !== null && stringGen !== void 0 ? stringGen : fallback);
    }
    /** Called on render to focus on the confirm or cancel button or text input, depending on prompt type */
    focusOnRender() {
        const inputElem = document.querySelector("#bytm-prompt-dialog-input");
        if (inputElem)
            return inputElem.focus();
        let captureEnterKey = true;
        document.addEventListener("keydown", (e) => {
            var _a;
            if (e.key === "Enter" && captureEnterKey) {
                const confBtn = document.querySelector("#bytm-prompt-dialog-confirm");
                const closeBtn = document.querySelector("#bytm-prompt-dialog-close");
                if (confBtn || closeBtn) {
                    (_a = confBtn === null || confBtn === void 0 ? void 0 : confBtn.click()) !== null && _a !== void 0 ? _a : closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.click();
                    captureEnterKey = false;
                }
            }
        }, { capture: true, once: true });
    }
}
/** Custom dialog to emulate and enhance the behavior of the native `confirm()`, `alert()`, and `prompt()` functions */
function showPrompt(_a) {
    var { type } = _a, rest = __rest(_a, ["type"]);
    return new Promise((resolve) => {
        if (BytmDialog.getOpenDialogs().includes("prompt-dialog"))
            promptDialog === null || promptDialog === void 0 ? void 0 : promptDialog.close();
        promptDialog = new PromptDialog(Object.assign({ type }, rest));
        promptDialog.once("render", () => {
            addSelectorListener("bytmDialogContainer", `#bytm-prompt-dialog-${type === "alert" ? "close" : "confirm"}`, {
                listener: (btn) => btn.focus(),
            });
        });
        // make config menu inert while prompt dialog is open
        promptDialog.once("open", () => { var _a; return (_a = document.querySelector("#bytm-cfg-menu")) === null || _a === void 0 ? void 0 : _a.setAttribute("inert", "true"); });
        promptDialog.once("close", () => { var _a; return (_a = document.querySelector("#bytm-cfg-menu")) === null || _a === void 0 ? void 0 : _a.removeAttribute("inert"); });
        let resolveVal;
        const tryResolve = () => resolve(typeof resolveVal !== "undefined" ? resolveVal : false);
        let closeUnsub; // eslint-disable-line prefer-const
        const resolveUnsub = promptDialog.on("resolve", (val) => {
            resolveUnsub();
            if (resolveVal !== undefined)
                return;
            resolveVal = val;
            tryResolve();
            closeUnsub === null || closeUnsub === void 0 ? void 0 : closeUnsub();
        });
        closeUnsub = promptDialog.on("close", () => {
            closeUnsub();
            if (resolveVal !== undefined)
                return;
            resolveVal = type === "alert";
            if (type === "prompt")
                resolveVal = null;
            tryResolve();
            resolveUnsub();
        });
        promptDialog.open();
    });
}const releaseURL = "https://github.com/Sv443/BetterYTM/releases/latest";
/** Initializes the version check feature */
async function initVersionCheck() {
    try {
        if (getFeature("versionCheck") === false)
            return info("Version check is disabled");
        const lastCheck = await GM.getValue("bytm-version-check", 0);
        if (Date.now() - lastCheck < 1000 * 60 * 60 * 24)
            return;
        await doVersionCheck(false);
    }
    catch (err) {
        error("Version check failed:", err);
    }
}
/**
 * Checks for a new version of the script and shows a dialog.
 * If {@linkcode notifyNoNewVerFound} is set to true, a dialog is also shown if no updates were found.
 */
async function doVersionCheck(notifyNoNewVerFound = false) {
    var _a;
    await GM.setValue("bytm-version-check", Date.now());
    const res = await sendRequest({
        method: "GET",
        url: releaseURL,
    });
    // TODO: small dialog for "no update found" message?
    const noNewVerFound = () => notifyNoNewVerFound ? showPrompt({ type: "alert", message: t("no_new_version_found") }) : undefined;
    const latestTag = (_a = res.finalUrl.split("/").pop()) === null || _a === void 0 ? void 0 : _a.replace(/[a-zA-Z]/g, "");
    if (!latestTag)
        return await noNewVerFound();
    info("Version check - current version:", scriptInfo.version, "- latest version:", latestTag, LogLevel.Info);
    if (compareVersions.compare(scriptInfo.version, latestTag, "<")) {
        const dialog = await getVersionNotifDialog({ latestTag });
        await dialog.open();
        return;
    }
    return await noNewVerFound();
}/** Max amount of seconds a toast can be shown for */
const maxToastDuration = 30000;
let timeout;
/** Shows a toast message with an icon */
async function showIconToast(_a) {
    var { duration, position = "tr", iconPos = "left" } = _a, rest = __rest(_a, ["duration", "position", "iconPos"]);
    if (typeof duration !== "number" || isNaN(duration))
        duration = getFeature("toastDuration") * 1000;
    if (duration <= 0)
        return info("Toast duration is <= 0, so it won't be shown");
    const toastWrapper = document.createElement("div");
    toastWrapper.classList.add("bytm-toast-flex-wrapper");
    let toastIcon;
    if ("iconSrc" in rest) {
        toastIcon = document.createElement("img");
        toastIcon.classList.add("bytm-toast-icon", "img");
        toastIcon.src = rest.iconSrc instanceof Promise
            ? await rest.iconSrc
            : rest.iconSrc;
    }
    else {
        toastIcon = document.createElement("div");
        toastIcon.classList.add("bytm-toast-icon");
        const iconHtml = await resourceAsString(rest.icon);
        if (iconHtml)
            setInnerHtml(toastIcon, iconHtml);
        if ("iconFill" in rest && rest.iconFill)
            toastIcon.style.setProperty("--toast-icon-fill", rest.iconFill);
    }
    const toastMessage = document.createElement("div");
    toastMessage.classList.add("bytm-toast-message");
    if ("message" in rest) {
        toastMessage.textContent = rest.message;
        if ("subtitle" in rest && rest.subtitle) {
            const subtitleEl = document.createElement("div");
            subtitleEl.classList.add("bytm-toast-subtitle");
            subtitleEl.textContent = rest.subtitle;
            toastMessage.appendChild(subtitleEl);
        }
    }
    else
        toastMessage.appendChild(rest.element);
    iconPos === "left" && toastWrapper.appendChild(toastIcon);
    toastWrapper.appendChild(toastMessage);
    iconPos === "right" && toastWrapper.appendChild(toastIcon);
    return await showToast({
        duration,
        position,
        element: toastWrapper,
        title: "message" in rest ? rest.message : rest.title,
        onClick: rest.onClick,
    });
}
/** Shows a toast message or element in the specified position (top right corner by default) and uses the default timeout from the config option `toastDuration` */
async function showToast(arg) {
    const props = typeof arg === "string"
        ? {
            message: arg,
            duration: getFeature("toastDuration") * 1000,
        }
        : arg;
    const { duration: durationMs = getFeature("toastDuration") * 1000, onClick, position = "tr" } = props, rest = __rest(props, ["duration", "onClick", "position"]);
    if (durationMs <= 0)
        return info("Toast duration is <= 0, so it won't be shown");
    if (document.querySelector("#bytm-toast"))
        await closeToast();
    const toastElem = document.createElement("div");
    toastElem.classList.add(`pos-${position.toLowerCase()}`);
    onClick && toastElem.classList.add("clickable");
    toastElem.id = "bytm-toast";
    toastElem.role = "alert";
    toastElem.ariaLive = "polite";
    toastElem.ariaAtomic = "true";
    toastElem.addEventListener("click", async (e) => {
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
        await closeToast();
    }, { once: true });
    if ("message" in rest)
        toastElem.title = toastElem.ariaLabel = toastElem.textContent = rest.message;
    else {
        toastElem.appendChild(rest.element);
        toastElem.title = toastElem.ariaLabel = rest.title;
    }
    document.body.appendChild(toastElem);
    UserUtils.pauseFor(100).then(() => {
        toastElem.classList.add("visible");
        if (durationMs < Number.POSITIVE_INFINITY && durationMs > 0) {
            timeout && clearTimeout(timeout);
            timeout = setTimeout(closeToast, UserUtils.clamp(durationMs, 250, maxToastDuration));
        }
    });
    return toastElem;
}
/** Closes the currently open toast */
async function closeToast() {
    if (timeout) {
        clearTimeout(timeout);
        timeout = undefined;
    }
    const toastEls = document.querySelectorAll("#bytm-toast");
    if (toastEls.length === 0)
        return;
    await Promise.allSettled(Array.from(toastEls).map(async (toastEl) => {
        toastEl.classList.remove("visible");
        await UserUtils.pauseFor(300);
        toastEl.remove();
        await UserUtils.pauseFor(100);
    }));
}//#region beforeunload popup
let discardBeforeUnload = false;
/** Disables the popup before leaving the site */
function enableDiscardBeforeUnload() {
    discardBeforeUnload = true;
    info("Disabled popup before leaving the site");
}
/** Adds a spy function into `window.__proto__.addEventListener` to selectively discard `beforeunload` event listeners before they can be called by the site */
async function initBeforeUnloadHook() {
    try {
        UserUtils.interceptWindowEvent("beforeunload", () => discardBeforeUnload);
    }
    catch (err) {
        error("Error in beforeunload hook:", err);
    }
}
//#region auto close toasts
/** Closes toasts after a set amount of time */
async function initAutoCloseToasts() {
    const animTimeout = 300;
    addSelectorListener("popupContainer", "ytmusic-notification-action-renderer", {
        all: true,
        continuous: true,
        listener: async (toastContElems) => {
            try {
                for (const toastContElem of toastContElems) {
                    const toastElem = toastContElem.querySelector("tp-yt-paper-toast#toast");
                    if (!toastElem || !toastElem.hasAttribute("allow-click-through"))
                        continue;
                    if (toastElem.classList.contains("bytm-closing"))
                        continue;
                    toastElem.classList.add("bytm-closing");
                    const closeTimeout = Math.max(getFeature("closeToastsTimeout") * 1000 + animTimeout, animTimeout);
                    await UserUtils.pauseFor(closeTimeout);
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
        },
    });
    log("Initialized automatic toast closing");
}
//#region auto scroll to active
let initialAutoScrollToActiveSong = true;
let prevVidMaxTime = Infinity;
let prevTime = -1;
/** Initializes the autoScrollToActiveSong feature */
async function initAutoScrollToActiveSong() {
    setInterval(() => {
        var _a, _b, _c, _d;
        prevTime = (_b = (_a = getVideoElement()) === null || _a === void 0 ? void 0 : _a.currentTime) !== null && _b !== void 0 ? _b : -1;
        prevVidMaxTime = (_d = (_c = getVideoElement()) === null || _c === void 0 ? void 0 : _c.duration) !== null && _d !== void 0 ? _d : Infinity;
    }, 50);
    siteEvents.on("watchIdChanged", (_, oldId) => {
        if (!oldId)
            return;
        const isManualChange = prevTime < prevVidMaxTime - 1;
        if (["videoChangeManual", "videoChangeAll"].includes(getFeature("autoScrollToActiveSongMode")) && isManualChange)
            scrollToCurrentSongInQueue();
        else if (["videoChangeAuto", "videoChangeAll"].includes(getFeature("autoScrollToActiveSongMode")) && !isManualChange)
            scrollToCurrentSongInQueue();
    });
    if (getFeature("autoScrollToActiveSongMode") !== "never" && initialAutoScrollToActiveSong) {
        initialAutoScrollToActiveSong = false;
        scrollToCurrentSongInQueue();
    }
}
/**
 * Remembers the time of the last played video and resumes playback from that time.
 * **Needs to be called *before* DOM is ready!**
 */
async function initRememberSongTime() {
    if (getFeature("rememberSongTimeSites") !== "all" && getFeature("rememberSongTimeSites") !== getDomain())
        return;
    const storedDataRaw = await GM.getValue("bytm-rem-songs");
    if (!storedDataRaw)
        await GM.setValue("bytm-rem-songs", "[]");
    let remVids;
    try {
        remVids = JSON.parse(String(storedDataRaw !== null && storedDataRaw !== void 0 ? storedDataRaw : "[]"));
    }
    catch (err) {
        error("Error parsing stored video time data, defaulting to empty cache:", err);
        await GM.setValue("bytm-rem-songs", "[]");
        remVids = [];
    }
    if (remVids.some(e => "watchID" in e)) {
        remVids = remVids.filter(e => "id" in e);
        await GM.setValue("bytm-rem-songs", JSON.stringify(remVids));
        log(`Removed ${remVids.length} ${UserUtils.autoPlural("entry", remVids)} with an outdated format from the video time cache`);
    }
    log(`Initialized video time restoring with ${remVids.length} initial ${UserUtils.autoPlural("entry", remVids)}:`, remVids);
    await remTimeRestoreTime();
    try {
        if (!UserUtils.isDomLoaded())
            document.addEventListener("DOMContentLoaded", remTimeStartUpdateLoop);
        else
            remTimeStartUpdateLoop();
    }
    catch (err) {
        error("Error in video time remembering update loop:", err);
    }
}
/** Tries to restore the time of the currently playing video */
async function remTimeRestoreTime() {
    const remVids = JSON.parse(await GM.getValue("bytm-rem-songs", "[]"));
    if (location.pathname.startsWith("/watch")) {
        const videoID = new URL(location.href).searchParams.get("v");
        if (!videoID)
            return;
        if (initialParams.has("t"))
            return info("Not restoring song time because the URL has the '&t' parameter", LogLevel.Info);
        const entry = remVids.find(entry => entry.id === videoID);
        if (entry) {
            if (Date.now() - entry.updated > getFeature("rememberSongTimeDuration") * 1000) {
                await remTimeDeleteEntry(entry.id);
                return;
            }
            else if (isNaN(Number(entry.time)) || entry.time < 0)
                return warn("Invalid time in remembered song time entry:", entry);
            else {
                let vidElem;
                const doRestoreTime = async () => {
                    var _a;
                    if (!vidElem)
                        vidElem = await waitVideoElementReady();
                    const vidRestoreTime = entry.time - ((_a = getFeature("rememberSongTimeReduction")) !== null && _a !== void 0 ? _a : 0);
                    vidElem.currentTime = UserUtils.clamp(Math.max(vidRestoreTime, 0), 0, vidElem.duration);
                    await remTimeDeleteEntry(entry.id);
                    info(`Restored ${getDomain() === "ytm" ? getCurrentMediaType() : "video"} time to ${Math.floor(vidRestoreTime / 60)}m, ${(vidRestoreTime % 60).toFixed(1)}s`, LogLevel.Info);
                };
                if (!UserUtils.isDomLoaded())
                    document.addEventListener("DOMContentLoaded", doRestoreTime);
                else
                    doRestoreTime();
            }
        }
    }
}
let lastSongTime = -1;
let remVidCheckTimeout;
/** Only call once as this calls itself after a timeout! - Updates the currently playing video's entry in GM storage */
async function remTimeStartUpdateLoop() {
    var _a, _b, _c;
    const remVids = JSON.parse(await GM.getValue("bytm-rem-songs", "[]"));
    if (location.pathname.startsWith("/watch")) {
        const id = getWatchId();
        const songTime = (_a = await getVideoTime()) !== null && _a !== void 0 ? _a : 0;
        if (id && songTime !== lastSongTime) {
            lastSongTime = songTime;
            const paused = (_c = (_b = getVideoElement()) === null || _b === void 0 ? void 0 : _b.paused) !== null && _c !== void 0 ? _c : false;
            // don't immediately update to reduce race conditions and only update if the video is playing
            // also it just sounds better if the song starts at the beginning if only a couple seconds have passed
            if (songTime > getFeature("rememberSongTimeMinPlayTime") && !paused) {
                const entry = {
                    id,
                    time: songTime,
                    updated: Date.now(),
                };
                await remTimeUpsertEntry(entry);
            }
            // if the song is rewound to the beginning, update the entry accordingly
            else if (!paused) {
                const entry = remVids.find(entry => entry.id === id);
                if (entry && songTime <= entry.time)
                    await remTimeUpsertEntry(Object.assign(Object.assign({}, entry), { time: songTime, updated: Date.now() }));
            }
        }
    }
    const expiredEntries = remVids.filter(entry => Date.now() - entry.updated > getFeature("rememberSongTimeDuration") * 1000);
    for (const entry of expiredEntries)
        await remTimeDeleteEntry(entry.id);
    // for no overlapping calls and better error handling:
    if (remVidCheckTimeout)
        clearTimeout(remVidCheckTimeout);
    remVidCheckTimeout = setTimeout(remTimeStartUpdateLoop, 1000);
}
/** Updates an existing or inserts a new entry to be remembered */
async function remTimeUpsertEntry(data) {
    const remVids = JSON.parse(await GM.getValue("bytm-rem-songs", "[]"));
    const foundIdx = remVids.findIndex(entry => entry.id === data.id);
    if (foundIdx >= 0)
        remVids[foundIdx] = data;
    else
        remVids.push(data);
    await GM.setValue("bytm-rem-songs", JSON.stringify(remVids));
}
/** Deletes an entry in the "remember cache" */
async function remTimeDeleteEntry(videoID) {
    const remVids = JSON.parse(await GM.getValue("bytm-rem-songs", "[]"))
        .filter(entry => entry.id !== videoID);
    await GM.setValue("bytm-rem-songs", JSON.stringify(remVids));
}const interactionKeys = ["Enter", " ", "Space"];
/**
 * Adds generic, accessible interaction listeners to the passed element.
 * All listeners have the default behavior prevented and stop propagation (for keyboard events this only applies as long as the captured key is included in {@linkcode interactionKeys}).
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
}/**
 * Creates an element with a ripple effect on click.
 * @param rippleElement If passed, this element will be modified to have the ripple effect. Otherwise, a new element will be created.
 * @returns The passed element or the newly created element with the ripple effect.
 */
function createRipple(rippleElement, properties) {
    const props = Object.assign({ speed: "normal" }, properties);
    const rippleEl = rippleElement !== null && rippleElement !== void 0 ? rippleElement : document.createElement("div");
    "additionalProps" in props && Object.assign(rippleEl, props.additionalProps);
    rippleEl.classList.add("bytm-ripple", props.speed);
    const updateRippleWidth = () => rippleEl.style.setProperty("--bytm-ripple-cont-width", `${rippleEl.clientWidth}px`);
    rippleEl.addEventListener("mousedown", (e) => {
        updateRippleWidth();
        const x = e.clientX - rippleEl.getBoundingClientRect().left;
        const y = e.clientY - rippleEl.getBoundingClientRect().top;
        const rippleAreaEl = document.createElement("span");
        rippleAreaEl.classList.add("bytm-ripple-area");
        rippleAreaEl.style.left = `${Math.round(x)}px`;
        rippleAreaEl.style.top = `${Math.round(y)}px`;
        if (rippleEl.firstChild)
            rippleEl.insertBefore(rippleAreaEl, rippleEl.firstChild);
        else
            rippleEl.appendChild(rippleAreaEl);
        rippleAreaEl.addEventListener("animationend", () => rippleAreaEl.remove());
    });
    updateRippleWidth();
    return rippleEl;
}/**
 * Creates a generic, circular, long button element with an icon and text.
 * Has classes for the enabled and disabled states for easier styling.
 * If `href` is provided, the button will be an anchor element.
 * If `onClick` or `onToggle` is provided, the button will be a div element.
 * Provide either `resourceName` or `src` to specify the icon inside the button.
 */
async function createLongBtn(_a) {
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
        var _a;
        if ("onClick" in rest)
            rest.onClick(evt);
        if ("toggle" in rest && rest.toggle && ((_a = rest.togglePredicate) !== null && _a !== void 0 ? _a : (() => true))(evt))
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
        setInnerHtml(imgElem, await resourceAsString(rest.resourceName));
    const txtElem = document.createElement("span");
    txtElem.classList.add("bytm-generic-long-btn-txt", "bytm-no-select");
    txtElem.textContent = txtElem.ariaLabel = text;
    iconPosition === "left" || !iconPosition && btnElem.appendChild(imgElem);
    btnElem.appendChild(txtElem);
    iconPosition === "right" && btnElem.appendChild(imgElem);
    return ripple ? createRipple(btnElem, { speed: "normal" }) : btnElem;
}//#region class
/** Generic dialog for exporting and importing any string of data */
class ExImDialog extends BytmDialog {
    constructor(options) {
        super(Object.assign({ renderHeader: () => ExImDialog.renderHeader(options), renderBody: () => ExImDialog.renderBody(options), renderFooter: undefined, closeOnBgClick: true, closeOnEscPress: true, closeBtnEnabled: true, unmountOnClose: true, small: true }, options));
    }
    //#region header
    static async renderHeader(opts) {
        const headerEl = document.createElement("h2");
        headerEl.classList.add("bytm-menu-title");
        headerEl.role = "heading";
        headerEl.ariaLevel = "1";
        headerEl.tabIndex = 0;
        headerEl.textContent = headerEl.ariaLabel = await UserUtils.consumeStringGen(opts.title);
        return headerEl;
    }
    //#region body
    static async renderBody(opts) {
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
            descEl.textContent = descEl.ariaLabel = await UserUtils.consumeStringGen(opts.descExport);
            const dataEl = document.createElement("textarea");
            dataEl.classList.add("bytm-exim-dialog-data");
            dataEl.readOnly = true;
            dataEl.tabIndex = 0;
            dataEl.value = t("click_to_reveal");
            onInteraction(dataEl, async () => {
                dataEl.value = await UserUtils.consumeStringGen(opts.exportData);
                dataEl.setSelectionRange(0, dataEl.value.length);
            });
            const exportCenterBtnCont = document.createElement("div");
            exportCenterBtnCont.classList.add("bytm-exim-dialog-center-btn-cont");
            const copyBtn = createRipple(await createLongBtn({
                title: t("copy_to_clipboard"),
                text: t("copy"),
                resourceName: "icon-copy",
                async onClick({ shiftKey }) {
                    const copyData = shiftKey && opts.exportDataSpecial ? opts.exportDataSpecial : opts.exportData;
                    copyToClipboard(await UserUtils.consumeStringGen(copyData));
                    await showToast({ message: t("copied_to_clipboard") });
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
            descEl.textContent = descEl.ariaLabel = await UserUtils.consumeStringGen(opts.descImport);
            const dataEl = document.createElement("textarea");
            dataEl.classList.add("bytm-exim-dialog-data");
            dataEl.tabIndex = 0;
            const importCenterBtnCont = document.createElement("div");
            importCenterBtnCont.classList.add("bytm-exim-dialog-center-btn-cont");
            const importBtn = createRipple(await createLongBtn({
                title: t("start_import_tooltip"),
                text: t("import"),
                resourceName: "icon-upload",
                onClick: () => opts.onImport(dataEl.value),
            }));
            importCenterBtnCont.appendChild(importBtn);
            importPane.append(descEl, dataEl, importCenterBtnCont);
        }
        panesCont.append(exportPane, importPane);
        return panesCont;
    }
}/**
 * Creates a generic, circular button element.
 * If `href` is provided, the button will be an anchor element.
 * If `onClick` is provided, the button will be a div element.
 * Provide either `resourceName` or `src` to specify the icon inside the button.
 */
async function createCircularBtn(_a) {
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
            ? await rest.src
            : rest.src
        : await getResourceUrl(rest.resourceName);
    btnElem.appendChild(imgElem);
    return ripple ? createRipple(btnElem) : btnElem;
}let autoLikeDialog = null;
let autoLikeExImDialog = null;
/** Creates and/or returns the import dialog */
async function getAutoLikeDialog() {
    if (!autoLikeDialog) {
        await initAutoLikeStore();
        autoLikeDialog = new BytmDialog({
            id: "auto-like-channels",
            width: 700,
            height: 1000,
            closeBtnEnabled: true,
            closeOnBgClick: true,
            closeOnEscPress: true,
            destroyOnClose: true,
            removeListenersOnDestroy: false,
            small: true,
            verticalAlign: "top",
            renderHeader: renderHeader$4,
            renderBody: renderBody$4,
            renderFooter: renderFooter$1,
        });
        siteEvents.on("autoLikeChannelsUpdated", async () => {
            try {
                if (autoLikeExImDialog === null || autoLikeExImDialog === void 0 ? void 0 : autoLikeExImDialog.isOpen())
                    autoLikeExImDialog.unmount();
                if (autoLikeDialog === null || autoLikeDialog === void 0 ? void 0 : autoLikeDialog.isOpen()) {
                    autoLikeDialog.unmount();
                    await autoLikeDialog.open();
                    log("Auto-like channels updated, refreshed dialog");
                }
            }
            catch (err) {
                error("Couldn't refresh auto-like channels dialog:", err);
            }
        });
        autoLikeDialog.on("close", () => emitSiteEvent("autoLikeChannelsUpdated"));
    }
    if (!autoLikeExImDialog) {
        autoLikeExImDialog = new ExImDialog({
            id: "auto-like-channels-export-import",
            width: 800,
            height: 600,
            // try to compress the data if possible
            exportData: async () => await compressionSupported()
                ? await UserUtils.compress(JSON.stringify(autoLikeStore.getData()), compressionFormat, "string")
                : JSON.stringify(autoLikeStore.getData()),
            // copy plain when shift-clicking the copy button
            exportDataSpecial: () => JSON.stringify(autoLikeStore.getData()),
            async onImport(data) {
                try {
                    const parsed = await tryToDecompressAndParse(data);
                    log("Trying to import auto-like data:", parsed);
                    if (!parsed || typeof parsed !== "object")
                        return await showPrompt({ type: "alert", message: t("import_error_invalid") });
                    if (!parsed.channels || typeof parsed.channels !== "object" || Object.keys(parsed.channels).length === 0)
                        return await showPrompt({ type: "alert", message: t("import_error_no_data") });
                    await autoLikeStore.setData(parsed);
                    emitSiteEvent("autoLikeChannelsUpdated");
                    showToast({ message: t("import_success") });
                    autoLikeExImDialog === null || autoLikeExImDialog === void 0 ? void 0 : autoLikeExImDialog.unmount();
                }
                catch (err) {
                    error("Couldn't import auto-like channels data:", err);
                }
            },
            title: () => t("auto_like_export_import_title"),
            descImport: () => t("auto_like_import_desc"),
            descExport: () => t("auto_like_export_desc"),
        });
    }
    return autoLikeDialog;
}
//#region header
async function renderHeader$4() {
    const headerEl = document.createElement("h2");
    headerEl.classList.add("bytm-dialog-title");
    headerEl.role = "heading";
    headerEl.ariaLevel = "1";
    headerEl.tabIndex = 0;
    headerEl.textContent = headerEl.ariaLabel = t("auto_like_channels_dialog_title");
    return headerEl;
}
//#region body
async function renderBody$4() {
    const contElem = document.createElement("div");
    const descriptionEl = document.createElement("p");
    descriptionEl.classList.add("bytm-auto-like-channels-desc");
    descriptionEl.textContent = t("auto_like_channels_dialog_desc");
    descriptionEl.tabIndex = 0;
    contElem.appendChild(descriptionEl);
    const searchCont = document.createElement("div");
    searchCont.classList.add("bytm-auto-like-channels-search-cont");
    contElem.appendChild(searchCont);
    const searchbarEl = document.createElement("input");
    searchbarEl.classList.add("bytm-auto-like-channels-searchbar");
    searchbarEl.placeholder = t("search_placeholder");
    searchbarEl.type = searchbarEl.role = "search";
    searchbarEl.tabIndex = 0;
    searchbarEl.autofocus = true;
    searchbarEl.autocomplete = searchbarEl.autocapitalize = "off";
    searchbarEl.spellcheck = false;
    searchbarEl.addEventListener("input", () => {
        var _a, _b, _c, _d, _e, _f;
        const searchVal = searchbarEl.value.trim().toLowerCase();
        const rows = document.querySelectorAll(".bytm-auto-like-channel-row");
        for (const row of rows) {
            const name = (_c = (_b = (_a = row.querySelector(".bytm-auto-like-channel-name")) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim().toLowerCase().replace(/\s/g, "")) !== null && _c !== void 0 ? _c : "";
            const id = (_f = (_e = (_d = row.querySelector(".bytm-auto-like-channel-id")) === null || _d === void 0 ? void 0 : _d.textContent) === null || _e === void 0 ? void 0 : _e.trim()) !== null && _f !== void 0 ? _f : "";
            row.classList.toggle("hidden", !name.includes(searchVal) && !(id.startsWith("@") ? id : "").includes(searchVal));
        }
    });
    searchCont.appendChild(searchbarEl);
    const searchClearEl = document.createElement("button");
    searchClearEl.classList.add("bytm-auto-like-channels-search-clear");
    searchClearEl.title = searchClearEl.ariaLabel = t("search_clear");
    searchClearEl.tabIndex = 0;
    searchClearEl.innerText = "×";
    onInteraction(searchClearEl, () => {
        searchbarEl.value = "";
        searchbarEl.dispatchEvent(new Event("input"));
    });
    searchCont.appendChild(searchClearEl);
    const channelListCont = document.createElement("div");
    channelListCont.id = "bytm-auto-like-channels-list";
    const setChannelEnabled = UserUtils.debounce((id, enabled) => {
        autoLikeStore.setData({
            channels: autoLikeStore.getData().channels
                .map((ch) => ch.id === id ? Object.assign(Object.assign({}, ch), { enabled }) : ch),
        });
    }, 250);
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
        const toggleElem = await createToggleInput({
            id: `auto-like-channel-list-${chanId}`,
            labelPos: "off",
            initialValue: enabled,
            onChange: (en) => setChannelEnabled(chanId, en),
        });
        toggleElem.classList.add("bytm-auto-like-channel-toggle");
        toggleElem.title = toggleElem.ariaLabel = t("auto_like_channel_toggle_tooltip", chanName);
        const btnCont = document.createElement("div");
        btnCont.classList.add("bytm-auto-like-channel-row-btn-cont");
        const editBtn = await createCircularBtn({
            resourceName: "icon-edit",
            title: t("edit_entry"),
            async onClick() {
                var _a, _b, _c;
                const newNamePr = (_a = (await showPrompt({ type: "prompt", message: t("auto_like_channel_edit_name_prompt"), defaultValue: chanName }))) === null || _a === void 0 ? void 0 : _a.trim();
                if (!newNamePr || newNamePr.length === 0)
                    return;
                const newName = newNamePr.length > 0 ? newNamePr : chanName;
                const newIdPr = (_b = (await showPrompt({ type: "prompt", message: t("auto_like_channel_edit_id_prompt"), defaultValue: chanId }))) === null || _b === void 0 ? void 0 : _b.trim();
                if (!newIdPr || newIdPr.length === 0)
                    return;
                const newId = newIdPr.length > 0 ? (_c = getChannelIdFromPrompt(newIdPr)) !== null && _c !== void 0 ? _c : chanId : chanId;
                await autoLikeStore.setData({
                    channels: autoLikeStore.getData().channels
                        .map((ch) => ch.id === chanId ? Object.assign(Object.assign({}, ch), { name: newName, id: newId }) : ch),
                });
                emitSiteEvent("autoLikeChannelsUpdated");
            },
        });
        btnCont.appendChild(editBtn);
        const removeBtn = await createCircularBtn({
            resourceName: "icon-delete",
            title: t("remove_entry"),
            onClick() {
                autoLikeStore.setData({
                    channels: autoLikeStore.getData().channels.filter((ch) => ch.id !== chanId),
                });
                rowElem.remove();
                emitSiteEvent("autoLikeChannelsUpdated");
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
}
//#region footer
function renderFooter$1() {
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
async function openImportExportAutoLikeChannelsDialog() {
    await (autoLikeExImDialog === null || autoLikeExImDialog === void 0 ? void 0 : autoLikeExImDialog.open());
}
//#region add prompt
async function addAutoLikeEntryPrompts() {
    var _a, _b, _c;
    await autoLikeStore.loadData();
    const idPrompt = (_a = (await showPrompt({ type: "prompt", message: t("add_auto_like_channel_id_prompt") }))) === null || _a === void 0 ? void 0 : _a.trim();
    if (!idPrompt)
        return;
    const id = (_b = parseChannelIdFromUrl(idPrompt)) !== null && _b !== void 0 ? _b : (isValidChannelId(idPrompt) ? idPrompt : null);
    if (!id || id.length <= 0)
        return await showPrompt({ type: "alert", message: t("add_auto_like_channel_invalid_id") });
    let overwriteName = false;
    const hasChannelEntry = autoLikeStore.getData().channels.find((ch) => ch.id === id);
    if (hasChannelEntry) {
        if (!await showPrompt({ type: "confirm", message: t("add_auto_like_channel_already_exists_prompt_new_name") }))
            return;
        overwriteName = true;
    }
    const name = (_c = (await showPrompt({ type: "prompt", message: t("add_auto_like_channel_name_prompt"), defaultValue: hasChannelEntry === null || hasChannelEntry === void 0 ? void 0 : hasChannelEntry.name }))) === null || _c === void 0 ? void 0 : _c.trim();
    if (!name || name.length === 0)
        return;
    await autoLikeStore.setData(overwriteName
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
    emitSiteEvent("autoLikeChannelsUpdated");
    const unsub = autoLikeDialog === null || autoLikeDialog === void 0 ? void 0 : autoLikeDialog.on("clear", async () => {
        unsub === null || unsub === void 0 ? void 0 : unsub();
        await (autoLikeDialog === null || autoLikeDialog === void 0 ? void 0 : autoLikeDialog.open());
    });
    autoLikeDialog === null || autoLikeDialog === void 0 ? void 0 : autoLikeDialog.unmount();
}
function getChannelIdFromPrompt(promptStr) {
    const isId = promptStr.match(/^@?.+$/);
    const isUrl = promptStr.match(/^(?:https?:\/\/)?(?:www\.)?(?:music\.)?youtube\.com\/(?:channel\/|@)([a-zA-Z0-9_-]+)/);
    const id = ((isId === null || isId === void 0 ? void 0 : isId[0]) || (isUrl === null || isUrl === void 0 ? void 0 : isUrl[1]) || "").trim();
    return id.length > 0 ? id : null;
}const inputIgnoreTagNames = ["INPUT", "TEXTAREA", "SELECT", "BUTTON", "A"];
//#region arrow key skip
async function initArrowKeySkip() {
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
        const vidElem = getVideoElement();
        if (vidElem && vidElem.readyState > 0)
            vidElem.currentTime = UserUtils.clamp(vidElem.currentTime + skipBy, 0, vidElem.duration);
    });
    log("Added arrow key press listener");
}
//#region frame skip
/** Initializes the feature that lets users skip by a frame with the period and comma keys while the video is paused */
async function initFrameSkip() {
    document.addEventListener("keydown", async (evt) => {
        if (!getFeature("frameSkip"))
            return;
        if (!["Comma", "Period"].includes(evt.code))
            return;
        const vid = getVideoElement();
        if (!vid || vid.readyState === 0)
            return warn("Could not find video element or it hasn't loaded yet, so the keypress is ignored");
        if (!getFeature("frameSkipWhilePlaying") && (vid.playbackRate === 0 || !vid.paused))
            return;
        evt.preventDefault();
        evt.stopImmediatePropagation();
        const newTime = vid.currentTime + getFeature("frameSkipAmount") * (evt.code === "Comma" ? -1 : 1);
        vid.currentTime = UserUtils.clamp(newTime, 0, vid.duration);
        log(`Captured key '${evt.code}' and skipped to ${Math.floor(newTime / 60)}m ${(newTime % 60).toFixed(1)}s (${Math.floor(newTime * 1000 % 1000)}ms)`);
    });
    log("Added frame skip key press listener");
}
//#region site switch
/** switch sites only if current video time is greater than this value */
const videoTimeThreshold = 3;
let siteSwitchEnabled = true;
/** Initializes the site switch feature */
async function initSiteSwitch(domain) {
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
}
/** Switches to the other site (between YT and YTM) */
async function switchSite(newDomain) {
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
        enableDiscardBeforeUnload();
        const { pathname, search, hash } = new URL(location.href);
        const vt = await getVideoTime(0);
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
}
//#region num keys skip
const numKeysIgnoreTagNames = [...inputIgnoreTagNames];
/** Adds the ability to skip to a certain time in the video by pressing a number key (0-9) */
async function initNumKeysSkip() {
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
        const vidElem = getVideoElement();
        if (!vidElem || vidElem.readyState === 0)
            return warn("Could not find video element, so the keypress is ignored");
        const newVidTime = vidElem.duration / (10 / Number(e.key));
        if (!isNaN(newVidTime)) {
            log(`Captured number key [${e.key}], skipping to ${Math.floor(newVidTime / 60)}m ${(newVidTime % 60).toFixed(1)}s`);
            vidElem.currentTime = newVidTime;
        }
    });
    log("Added number key press listener");
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
            channels: oldData.channels.map((ch) => (Object.assign(Object.assign({}, ch), { id: isValidChannelId(ch.id.trim())
                    ? ch.id.trim()
                    : `@${ch.id.trim()}` }))),
        }),
    },
});
let autoLikeStoreLoaded = false;
/** Inits the auto-like DataStore instance */
async function initAutoLikeStore() {
    if (autoLikeStoreLoaded)
        return;
    autoLikeStoreLoaded = true;
    return autoLikeStore.loadData();
}
/** Initializes the auto-like feature */
async function initAutoLike() {
    try {
        canCompress$1 = await compressionSupported();
        await initAutoLikeStore();
        //#SECTION ytm
        if (getDomain() === "ytm") {
            let timeout;
            siteEvents.on("songTitleChanged", () => {
                var _a;
                const autoLikeTimeoutMs = ((_a = getFeature("autoLikeTimeout")) !== null && _a !== void 0 ? _a : 5) * 1000;
                timeout && clearTimeout(timeout);
                const ytmTryAutoLike = () => {
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
                            message: t(`auto_liked_a_channels_${getCurrentMediaType()}`, likeChan.name),
                            subtitle: t("auto_like_click_to_configure"),
                            icon: "icon-auto_like",
                            onClick: () => getAutoLikeDialog().then((dlg) => dlg.open()),
                        }).catch(e => error("Error while showing auto-like toast:", e));
                        log(`Auto-liked ${getCurrentMediaType()} from channel '${likeChan.name}' (${likeChan.id})`);
                    }
                };
                timeout = setTimeout(ytmTryAutoLike, autoLikeTimeoutMs);
                siteEvents.on("autoLikeChannelsUpdated", () => setTimeout(ytmTryAutoLike, autoLikeTimeoutMs));
            });
            const recreateBtn = (headerCont, chanId) => {
                var _a, _b, _c, _d, _e, _f;
                const titleCont = headerCont.querySelector("ytd-channel-name #container, yt-dynamic-text-view-model.page-header-view-model-wiz__page-header-title, ytmusic-immersive-header-renderer .ytmusic-immersive-header-renderer yt-formatted-string.title");
                if (!titleCont)
                    return;
                const checkBtn = () => setTimeout(() => {
                    if (!document.querySelector(".bytm-auto-like-toggle-btn"))
                        recreateBtn(headerCont, chanId);
                }, 250);
                const chanName = (_b = (_a = titleCont.querySelector("yt-formatted-string, span.yt-core-attributed-string")) === null || _a === void 0 ? void 0 : _a.textContent) !== null && _b !== void 0 ? _b : null;
                log("Re-rendering auto-like toggle button for channel", chanName, "with ID", chanId);
                const buttonsCont = headerCont.querySelector(".buttons");
                if (buttonsCont) {
                    const lastBtn = buttonsCont.querySelector("ytmusic-subscribe-button-renderer");
                    const chanName = (_d = (_c = document.querySelector("ytmusic-immersive-header-renderer .content-container yt-formatted-string[role=\"heading\"]")) === null || _c === void 0 ? void 0 : _c.textContent) !== null && _d !== void 0 ? _d : null;
                    lastBtn && addAutoLikeToggleBtn(lastBtn, chanId, chanName).then(checkBtn);
                }
                else {
                    // some channels don't have a subscribe button and instead only have a "share" button for some bullshit reason
                    const shareBtnEl = headerCont.querySelector("ytmusic-menu-renderer #top-level-buttons yt-button-renderer:last-of-type");
                    const chanName = (_f = (_e = headerCont.querySelector("ytmusic-visual-header-renderer .content-container h2 yt-formatted-string")) === null || _e === void 0 ? void 0 : _e.textContent) !== null && _f !== void 0 ? _f : null;
                    shareBtnEl && chanName && addAutoLikeToggleBtn(shareBtnEl, chanId, chanName).then(checkBtn);
                }
            };
            siteEvents.on("pathChanged", (path) => {
                if (getFeature("autoLikeChannelToggleBtn") && path.match(/\/channel\/.+/)) {
                    const chanId = getCurrentChannelId();
                    if (!chanId)
                        return error("Couldn't extract channel ID from URL");
                    document.querySelectorAll(".bytm-auto-like-toggle-btn").forEach((btn) => clearNode(btn));
                    addSelectorListener("browseResponse", "ytmusic-browse-response #header.ytmusic-browse-response", {
                        listener: (el) => recreateBtn(el, chanId),
                    });
                }
            });
        }
        //#SECTION yt
        else if (getDomain() === "yt") {
            addStyleFromResource("css-auto_like");
            let timeout;
            siteEvents.on("watchIdChanged", () => {
                var _a;
                const autoLikeTimeoutMs = ((_a = getFeature("autoLikeTimeout")) !== null && _a !== void 0 ? _a : 5) * 1000;
                timeout && clearTimeout(timeout);
                if (!location.pathname.startsWith("/watch"))
                    return;
                const ytTryAutoLike = () => {
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
                                            message: t("auto_liked_a_channels_video", likeChan.name),
                                            subtitle: t("auto_like_click_to_configure"),
                                            icon: "icon-auto_like",
                                            onClick: () => getAutoLikeDialog().then((dlg) => dlg.open()),
                                        }).catch(e => error("Error while showing auto-like toast:", e));
                                        log(`Auto-liked video from channel '${likeChan.name}' (${likeChan.id})`);
                                    }
                                }
                            });
                        }
                    });
                };
                siteEvents.on("autoLikeChannelsUpdated", () => setTimeout(ytTryAutoLike, autoLikeTimeoutMs));
                timeout = setTimeout(ytTryAutoLike, autoLikeTimeoutMs);
            });
            siteEvents.on("pathChanged", (path) => {
                if (path.match(/(\/?@|\/?channel\/)\S+/)) {
                    const chanId = getCurrentChannelId();
                    if (!chanId)
                        return error("Couldn't extract channel ID from URL");
                    document.querySelectorAll(".bytm-auto-like-toggle-btn").forEach((btn) => clearNode(btn));
                    const recreateBtn = (headerCont) => {
                        var _a, _b;
                        const titleCont = headerCont.querySelector("ytd-channel-name #container, yt-dynamic-text-view-model.page-header-view-model-wiz__page-header-title");
                        if (!titleCont)
                            return;
                        const checkBtn = () => setTimeout(() => {
                            if (!document.querySelector(".bytm-auto-like-toggle-btn"))
                                recreateBtn(headerCont);
                        }, 350);
                        const chanName = (_b = (_a = titleCont.querySelector("yt-formatted-string, span.yt-core-attributed-string")) === null || _a === void 0 ? void 0 : _a.textContent) !== null && _b !== void 0 ? _b : null;
                        log("Re-rendering auto-like toggle button for channel", chanName, "with ID", chanId);
                        const buttonsCont = headerCont.querySelector("#inner-header-container #buttons, yt-flexible-actions-view-model");
                        if (buttonsCont) {
                            addSelectorListener("ytAppHeader", "#channel-header-container #other-buttons, yt-flexible-actions-view-model .yt-flexible-actions-view-model-wiz__action", {
                                listener: (otherBtns) => addAutoLikeToggleBtn(otherBtns, chanId, chanName, ["left-margin", "right-margin"]).then(checkBtn),
                            });
                        }
                        else if (titleCont)
                            addAutoLikeToggleBtn(titleCont, chanId, chanName).then(checkBtn);
                    };
                    addSelectorListener("ytAppHeader", "#channel-header-container, #page-header", {
                        listener: recreateBtn,
                    });
                }
            });
        }
        log("Initialized auto-like channels feature");
    }
    catch (err) {
        error("Error while auto-liking channel:", err);
    }
}
//#SECTION toggle btn
/** Adds a toggle button to enable or disable auto-liking videos from a channel */
async function addAutoLikeToggleBtn(siblingEl, channelId, channelName, extraClasses) {
    var _a;
    const chan = autoLikeStore.getData().channels.find((ch) => ch.id === channelId);
    log(`Adding auto-like toggle button for channel with ID '${channelId}' - current state:`, chan);
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
    const buttonEl = await createLongBtn({
        resourceName: `icon-auto_like${(chan === null || chan === void 0 ? void 0 : chan.enabled) ? "_enabled" : ""}`,
        text: t("auto_like"),
        title: t(`auto_like_button_tooltip${(chan === null || chan === void 0 ? void 0 : chan.enabled) ? "_enabled" : "_disabled"}`),
        toggle: true,
        toggleInitialState: (_a = chan === null || chan === void 0 ? void 0 : chan.enabled) !== null && _a !== void 0 ? _a : false,
        togglePredicate(e) {
            e.shiftKey && getAutoLikeDialog().then((dlg) => dlg.open());
            return !e.shiftKey;
        },
        async onToggle(toggled) {
            var _a;
            try {
                await autoLikeStore.loadData();
                buttonEl.title = buttonEl.ariaLabel = t(`auto_like_button_tooltip${toggled ? "_enabled" : "_disabled"}`);
                const chanId = sanitizeChannelId((_a = buttonEl.dataset.channelId) !== null && _a !== void 0 ? _a : channelId);
                const imgEl = buttonEl.querySelector(".bytm-generic-btn-img");
                imgEl && setInnerHtml(imgEl, await resourceAsString(`icon-auto_like${toggled ? "_enabled" : ""}`));
                if (autoLikeStore.getData().channels.find((ch) => ch.id === chanId) === undefined) {
                    await autoLikeStore.setData({
                        channels: [
                            ...autoLikeStore.getData().channels,
                            { id: chanId, name: channelName !== null && channelName !== void 0 ? channelName : "", enabled: toggled },
                        ],
                    });
                }
                else {
                    await autoLikeStore.setData({
                        channels: autoLikeStore.getData().channels
                            .map((ch) => ch.id === chanId ? Object.assign(Object.assign({}, ch), { enabled: toggled }) : ch),
                    });
                }
                emitSiteEvent("autoLikeChannelsUpdated");
                showIconToast({
                    message: toggled ? t("auto_like_enabled_toast") : t("auto_like_disabled_toast"),
                    subtitle: t("auto_like_click_to_configure"),
                    icon: `icon-auto_like${toggled ? "_enabled" : ""}`,
                    onClick: () => getAutoLikeDialog().then((dlg) => dlg.open()),
                }).catch(e => error("Error while showing auto-like toast:", e));
                log(`Toggled auto-like for channel '${channelName}' (ID: '${chanId}') to ${toggled ? "enabled" : "disabled"}`);
            }
            catch (err) {
                error("Error while toggling auto-like channel:", err);
            }
        }
    });
    buttonEl.classList.add(...["bytm-auto-like-toggle-btn", ...(extraClasses !== null && extraClasses !== void 0 ? extraClasses : [])]);
    buttonEl.dataset.channelId = channelId;
    siblingEl.insertAdjacentElement("afterend", createRipple(buttonEl));
    siteEvents.on("autoLikeChannelsUpdated", async () => {
        var _a, _b;
        const buttonEl = document.querySelector(`.bytm-auto-like-toggle-btn[data-channel-id="${channelId}"]`);
        if (!buttonEl)
            return;
        const enabled = (_b = (_a = autoLikeStore.getData().channels.find((ch) => ch.id === channelId)) === null || _a === void 0 ? void 0 : _a.enabled) !== null && _b !== void 0 ? _b : false;
        if (enabled)
            buttonEl.classList.add("toggled");
        else
            buttonEl.classList.remove("toggled");
        const imgEl = buttonEl.querySelector(".bytm-generic-btn-img");
        imgEl && setInnerHtml(imgEl, await resourceAsString(`icon-auto_like${enabled ? "_enabled" : ""}`));
    });
}class MarkdownDialog extends BytmDialog {
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { id: `md-${options.id}`, renderBody: () => this.renderBody() }));
        Object.defineProperty(this, "opts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.opts = options;
    }
    /** Parses the passed markdown string (supports GitHub flavor and HTML mixins) and returns it as an HTML string */
    static async parseMd(md) {
        return await marked.marked.parse(md, {
            async: true,
            gfm: true,
            breaks: true,
        });
    }
    /** Renders the dialog body elements from a markdown string using what's set in `this.opts.body` */
    async renderBody() {
        const bodyEl = document.createElement("div");
        bodyEl.classList.add("bytm-md-dialog-body");
        const mdCont = await UserUtils.consumeStringGen(this.opts.body);
        const markdownEl = document.createElement("div");
        markdownEl.classList.add("bytm-markdown-dialog-content", "bytm-markdown-container");
        markdownEl.tabIndex = 0;
        setInnerHtml(markdownEl, await MarkdownDialog.parseMd(mdCont));
        bodyEl.appendChild(markdownEl);
        return bodyEl;
    }
}//#region logging fns
let curLogLevel = LogLevel.Info;
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
const showErrToast = UserUtils.debounce((errName, ...args) => showIconToast({
    message: t("generic_error_toast_encountered_error_type", errName),
    subtitle: t("generic_error_toast_click_for_details"),
    icon: "icon-error",
    iconFill: "var(--bytm-error-col)",
    onClick: () => getErrorDialog(errName, Array.isArray(args) ? args : []).open(),
}), 1000);
/** Logs all passed values to the console as an error, no matter the log level. */
function error(...args) {
    var _a, _b;
    console.error(consPrefix, ...args);
    getFeature("showToastOnGenericError") && showErrToast((_b = (_a = args.find(a => a instanceof Error)) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : t("error"), ...args);
}
/** Logs all passed values to the console with a debug-specific prefix */
function dbg(...args) {
    console.log(consPrefixDbg, ...args);
}
//#region error dialog
function getErrorDialog(errName, args) {
    return new MarkdownDialog({
        id: "generic-error",
        height: 400,
        width: 500,
        small: true,
        destroyOnClose: true,
        renderHeader() {
            const header = document.createElement("h2");
            header.classList.add("bytm-dialog-title");
            header.role = "heading";
            header.ariaLevel = "1";
            header.tabIndex = 0;
            header.textContent = header.ariaLabel = errName;
            return header;
        },
        body: `\
${args.length > 0 ? args.join(" ") : t("generic_error_dialog_message")}  
  
${t("generic_error_dialog_open_console_note", consPrefix, pkg.bugs.url)}`,
    });
}
//#region error classes
class CustomError extends Error {
    constructor(name, message, opts) {
        super(message, opts);
        Object.defineProperty(this, "time", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = name;
        this.time = Date.now();
    }
}
class LyricsError extends CustomError {
    constructor(message, opts) {
        super("LyricsError", message, opts);
    }
}
class PluginError extends CustomError {
    constructor(message, opts) {
        super("PluginError", message, opts);
    }
}//#region misc
let domain;
/**
 * Returns the current domain as a constant string representation
 * @throws Throws if script runs on an unexpected website
 */
function getDomain() {
    if (domain)
        return domain;
    if (location.hostname.match(/^music\.youtube/))
        return domain = "ytm";
    else if (location.hostname.match(/youtube\./))
        return domain = "yt";
    else
        throw new Error("BetterYTM is running on an unexpected website. Please don't tamper with the @match directives in the userscript header.");
}
/** Returns a pseudo-random ID unique to each session - returns null if sessionStorage is unavailable */
function getSessionId() {
    try {
        if (!sessionStorageAvailable)
            throw new Error("Session storage unavailable");
        let sesId = window.sessionStorage.getItem("_bytm-session-id");
        if (!sesId)
            window.sessionStorage.setItem("_bytm-session-id", sesId = UserUtils.randomId(10, 36));
        return sesId;
    }
    catch (err) {
        warn("Couldn't get session ID, sessionStorage / cookies might be disabled:", err);
        return null;
    }
}
let isCompressionSupported;
/** Tests whether compression via the predefined {@linkcode compressionFormat} is supported (only on the first call, then returns the cached result) */
async function compressionSupported() {
    if (typeof isCompressionSupported === "boolean")
        return isCompressionSupported;
    try {
        await UserUtils.compress(".", compressionFormat, "string");
        return isCompressionSupported = true;
    }
    catch (_a) {
        return isCompressionSupported = false;
    }
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
            return sanitizeChannelId(pathname.split("/channel/")[1].split("/")[0]);
        else if (pathname.includes("/@"))
            return sanitizeChannelId(pathname.split("/@")[1].split("/")[0]);
        else
            return null;
    }
    catch (_a) {
        return null;
    }
}
/** Sanitizes a channel ID by adding a leading `@` if the ID doesn't start with `UC...` */
function sanitizeChannelId(channelId) {
    channelId = String(channelId).trim();
    return isValidChannelId(channelId) || channelId.startsWith("@")
        ? channelId
        : `@${channelId}`;
}
/** Tests whether a string is a valid channel ID in the format `@User` or `UC...` */
function isValidChannelId(channelId) {
    return channelId.match(/^(UC|@)[a-zA-Z0-9_-]+$/) !== null;
}
/** Returns the thumbnail URL for a video with either a given quality identifier or index */
function getThumbnailUrl(videoID, qualityOrIndex = "maxresdefault") {
    return `https://img.youtube.com/vi/${videoID}/${qualityOrIndex}.jpg`;
}
/** Returns the best available thumbnail URL for a video with the given video ID */
async function getBestThumbnailUrl(videoID) {
    try {
        const priorityList = ["maxresdefault", "sddefault", "hqdefault", 0];
        for (const quality of priorityList) {
            let response;
            const url = getThumbnailUrl(videoID, quality);
            try {
                response = await sendRequest({ url, method: "HEAD", timeout: 6000 });
            }
            catch (err) {
                error(`Error while sending HEAD request to thumbnail URL for video ID '${videoID}' with quality '${quality}':`, err);
                void err;
            }
            if (response && response.status < 300 && response.status >= 200)
                return url;
        }
    }
    catch (err) {
        throw new Error(`Couldn't get thumbnail URL for video ID '${videoID}': ${err}`);
    }
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
async function tryToDecompressAndParse(input) {
    let parsed = null;
    const val = await UserUtils.consumeStringGen(input);
    try {
        parsed = JSON.parse(val);
    }
    catch (_a) {
        try {
            parsed = JSON.parse(await UserUtils.decompress(val, compressionFormat, "string"));
        }
        catch (err) {
            error("Couldn't decompress and parse data due to an error:", err);
            return null;
        }
    }
    // artificial timeout to allow animations to finish and because dumb monkey brains *expect* a delay
    await UserUtils.pauseFor(UserUtils.randRange(250, 500));
    return parsed;
}
/** Very crude OS detection */
function getOS() {
    if (navigator.userAgent.match(/mac(\s?os|intel)/i))
        return "mac";
    return "other";
}
/** Formats a number based on the config or the passed {@linkcode notation} */
function formatNumber(num, notation) {
    return num.toLocaleString(getLocale().replace(/_/g, "-"), (notation !== null && notation !== void 0 ? notation : getFeature("numbersFormat")) === "short"
        ? {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 1,
        }
        : {
            style: "decimal",
            maximumFractionDigits: 0,
        });
}
/** add `time_continue` param only if current video time is greater than this value */
const reloadTabVideoTimeThreshold = 3;
/** Reloads the tab. If a video is currently playing, its time and volume will be preserved through the URL parameter `time_continue` and `bytm-reload-tab-volume` in GM storage */
async function reloadTab() {
    var _a, _b, _c;
    const win = UserUtils.getUnsafeWindow();
    try {
        enableDiscardBeforeUnload();
        if (((_b = (_a = getVideoElement()) === null || _a === void 0 ? void 0 : _a.readyState) !== null && _b !== void 0 ? _b : 0) > 0) {
            const time = (_c = await getVideoTime(0)) !== null && _c !== void 0 ? _c : 0;
            const volume = Math.round(getVideoElement().volume * 100);
            const url = new URL(win.location.href);
            if (!isNaN(time) && time > reloadTabVideoTimeThreshold)
                url.searchParams.set("time_continue", String(time));
            if (!isNaN(volume) && volume > 0)
                await GM.setValue("bytm-reload-tab-volume", String(volume));
            return win.location.replace(url);
        }
        win.location.reload();
    }
    catch (err) {
        error("Couldn't save video time and volume before reloading tab:", err);
        win.location.reload();
    }
}
/** Scrolls to the currently playing queue item in the queue once it's available */
function scrollToCurrentSongInQueue(evt) {
    addSelectorListener("sidePanel", "ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"loading\"], ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"playing\"], ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"paused\"]", {
        listener(activeItem) {
            activeItem.scrollIntoView({
                behavior: (evt === null || evt === void 0 ? void 0 : evt.shiftKey) ? "instant" : "smooth",
                block: (evt === null || evt === void 0 ? void 0 : evt.ctrlKey) || (evt === null || evt === void 0 ? void 0 : evt.altKey) ? "start" : "center",
                inline: "center",
            });
            log("Scrolled to active song in queue:", activeItem);
        }
    });
}
//#region resources
/**
 * Returns the blob-URL of a resource by its name, as defined in `assets/resources.json`, from GM resource cache - [see GM.getResourceUrl docs](https://wiki.greasespot.net/GM.getResourceUrl)
 * Falls back to a CDN URL or base64-encoded data URI if the resource is not available in the GM resource cache
 * @param name The name / key of the resource as defined in `assets/resources.json` - you can use `as "_"` to make TypeScript shut up if the name can not be typed as `ResourceKey`
 * @param uncached Set to true to always fetch from the CDN URL instead of the GM resource cache
 */
async function getResourceUrl(name, uncached = false) {
    var _a;
    let url = !uncached && await GM.getResourceUrl(name);
    if (!url || url.length === 0) {
        const resObjOrStr = (_a = resourcesJson.resources) === null || _a === void 0 ? void 0 : _a[name];
        if (typeof resObjOrStr === "object" || typeof resObjOrStr === "string") {
            const pathName = typeof resObjOrStr === "object" && "path" in resObjOrStr ? resObjOrStr === null || resObjOrStr === void 0 ? void 0 : resObjOrStr.path : resObjOrStr;
            const ghRef = typeof resObjOrStr === "object" && "ref" in resObjOrStr ? resObjOrStr === null || resObjOrStr === void 0 ? void 0 : resObjOrStr.ref : buildNumber;
            if (pathName) {
                return pathName.startsWith("http")
                    ? pathName
                    : (() => {
                        let path = pathName;
                        if (path.startsWith("/"))
                            path = path.slice(1);
                        else
                            path = `assets/${path}`;
                        switch (assetSource) {
                            case "jsdelivr":
                                return `https://cdn.jsdelivr.net/gh/${repo}@${ghRef}/${path}`;
                            case "github":
                                return `https://raw.githubusercontent.com/${repo}/${ghRef}/${path}`;
                            case "local":
                                return `http://localhost:${devServerPort}/${path}`;
                        }
                    })();
            }
        }
        warn(`Couldn't get blob URL nor external URL for @resource '${name}', attempting to use base64-encoded fallback`);
        // @ts-ignore
        url = await GM.getResourceUrl(name, false);
    }
    return url;
}
/**
 * Resolves the preferred locale of the user given their browser's language settings, as long as it is supported by the userscript directly or via the `altLocales` prop in `locales.json`
 * Prioritizes any supported value of `navigator.language`, then `navigator.languages`, then goes over them again, trimming off the part after the hyphen, then falls back to `"en-US"`
 */
function getPreferredLocale() {
    var _a, _b;
    const sanEq = (str1, str2) => str1.trim().toLowerCase() === str2.trim().toLowerCase();
    const allNvLocs = [...new Set([navigator.language, ...navigator.languages])]
        .map((v) => v.replace(/_/g, "-"));
    for (const nvLoc of allNvLocs) {
        const resolvedLoc = (_a = Object.entries(locales)
            .find(([key, { altLocales }]) => sanEq(key, nvLoc) || altLocales.find(al => sanEq(al, nvLoc)))) === null || _a === void 0 ? void 0 : _a[0];
        if (resolvedLoc)
            return resolvedLoc.trim();
        const trimmedNvLoc = nvLoc.split("-")[0];
        const resolvedFallbackLoc = (_b = Object.entries(locales)
            .find(([key, { altLocales }]) => sanEq(key.split("-")[0], trimmedNvLoc) || altLocales.find(al => sanEq(al.split("-")[0], trimmedNvLoc)))) === null || _b === void 0 ? void 0 : _b[0];
        if (resolvedFallbackLoc)
            return resolvedFallbackLoc.trim();
    }
    return "en-US";
}
const resourceCache = new Map();
/**
 * Returns the content behind the passed resource identifier as a string, for example to be assigned to an element's innerHTML property.
 * Caches the resulting string if the resource key starts with `icon-`
 */
async function resourceAsString(resource) {
    if (resourceCache.has(resource))
        return resourceCache.get(resource);
    const resourceUrl = await getResourceUrl(resource);
    try {
        if (!resourceUrl)
            throw new Error(`Couldn't find URL for resource '${resource}'`);
        const str = await (await UserUtils.fetchAdvanced(resourceUrl)).text();
        // since SVG is lightweight, caching it in memory is fine
        if (resource.startsWith("icon-"))
            resourceCache.set(resource, str);
        return str;
    }
    catch (err) {
        error(`Couldn't fetch resource '${resource}' at URL '${resourceUrl}' due to an error:`, err);
        return null;
    }
}
/** Parses a markdown string using marked and turns it into an HTML string with default settings - doesn't sanitize against XSS! */
function parseMarkdown(mdString) {
    return marked.marked.parse(mdString, {
        async: true,
        gfm: true,
    });
}
/** Returns the content of the changelog markdown file */
async function getChangelogMd() {
    const clRes = await UserUtils.fetchAdvanced(changelogUrl);
    log("Fetched changelog:", clRes);
    return await clRes.text();
}
/** Returns the changelog as HTML with a details element for each version */
async function getChangelogHtmlWithDetails() {
    try {
        const changelogMd = await getChangelogMd();
        let changelogHtml = await parseMarkdown(changelogMd);
        const getVerId = (verStr) => verStr.trim().replace(/[._#\s-]/g, "");
        changelogHtml = changelogHtml.replace(/<div\s+class="split">\s*<\/div>\s*\n?\s*<br(\s\/)?>/gm, "</details>\n<br>\n<details class=\"bytm-changelog-version-details\">");
        const h2Matches = Array.from(changelogHtml.matchAll(/<h2(\s+id=".+")?>([\d\w\s.]+)<\/h2>/gm));
        for (const [fullMatch, , verStr] of h2Matches)
            changelogHtml = changelogHtml.replace(fullMatch, `<summary tab-index="0"><h2 id="${getVerId(verStr)}" role="subheading" aria-level="1">${verStr}</h2></summary>`);
        changelogHtml = `<details class="bytm-changelog-version-details">${changelogHtml}</details>`;
        return changelogHtml;
    }
    catch (err) {
        return `Error while preparing changelog: ${err}`;
    }
}/** Central serializer for all data stores */
let serializer;
/** Array of all data stores that are included in the DataStoreSerializer instance */
const getSerializerStores = () => [
    configStore,
    autoLikeStore,
];
/** Returns the serializer for all data stores */
function getStoreSerializer() {
    if (!serializer)
        serializer = new UserUtils.DataStoreSerializer(getSerializerStores(), {
            addChecksum: true,
            ensureIntegrity: true,
        });
    return serializer;
}
/** Downloads the current data stores as a single file */
async function downloadData(useEncoding = true) {
    const serializer = getStoreSerializer();
    const pad = (val, len = 2) => String(val).padStart(len, "0");
    const d = new Date();
    const dateStr = `${pad(d.getFullYear(), 4)}${pad(d.getMonth() + 1)}${pad(d.getDate())}_${pad(d.getHours())}${pad(d.getMinutes())}`;
    const fileName = `BetterYTM ${pkg.version} data export ${dateStr}.json`;
    const data = JSON.stringify(JSON.parse(await serializer.serialize(useEncoding)), undefined, 2);
    downloadFile(fileName, data, "application/json");
}let pluginListDialog = null;
/** Creates and/or returns the import dialog */
async function getPluginListDialog() {
    return pluginListDialog = pluginListDialog !== null && pluginListDialog !== void 0 ? pluginListDialog : new BytmDialog({
        id: "plugin-list",
        width: 800,
        height: 600,
        closeBtnEnabled: true,
        closeOnBgClick: true,
        closeOnEscPress: true,
        destroyOnClose: true,
        small: true,
        renderHeader: renderHeader$3,
        renderBody: renderBody$3,
    });
}
async function renderHeader$3() {
    const titleElem = document.createElement("h2");
    titleElem.id = "bytm-plugin-list-title";
    titleElem.classList.add("bytm-dialog-title");
    titleElem.role = "heading";
    titleElem.ariaLevel = "1";
    titleElem.tabIndex = 0;
    titleElem.textContent = t("plugin_list_title");
    return titleElem;
}
async function renderBody$3() {
    var _a;
    const listContainerEl = document.createElement("div");
    listContainerEl.id = "bytm-plugin-list-container";
    const registeredPlugins = getRegisteredPlugins();
    if (registeredPlugins.length === 0) {
        const noPluginsEl = document.createElement("div");
        noPluginsEl.classList.add("bytm-plugin-list-no-plugins");
        noPluginsEl.tabIndex = 0;
        setInnerHtml(noPluginsEl, t("plugin_list_no_plugins", `<a class="bytm-link" href="${pkg.homepage}#plugins" target="_blank" rel="noopener noreferrer">`, "</a>"));
        noPluginsEl.title = noPluginsEl.ariaLabel = t("plugin_list_no_plugins_tooltip");
        listContainerEl.appendChild(noPluginsEl);
        return listContainerEl;
    }
    for (const [, { def: { plugin, intents } }] of registeredPlugins) {
        const rowEl = document.createElement("div");
        rowEl.classList.add("bytm-plugin-list-row");
        const leftEl = document.createElement("div");
        leftEl.classList.add("bytm-plugin-list-row-left");
        rowEl.appendChild(leftEl);
        const headerWrapperEl = document.createElement("div");
        headerWrapperEl.classList.add("bytm-plugin-list-row-header-wrapper");
        leftEl.appendChild(headerWrapperEl);
        if (plugin.iconUrl) {
            const iconEl = document.createElement("img");
            iconEl.classList.add("bytm-plugin-list-row-icon");
            iconEl.src = plugin.iconUrl;
            iconEl.alt = "";
            headerWrapperEl.appendChild(iconEl);
        }
        const headerEl = document.createElement("div");
        headerEl.classList.add("bytm-plugin-list-row-header");
        headerWrapperEl.appendChild(headerEl);
        const titleEl = document.createElement("div");
        titleEl.classList.add("bytm-plugin-list-row-title");
        titleEl.tabIndex = 0;
        titleEl.textContent = titleEl.title = titleEl.ariaLabel = plugin.name;
        headerEl.appendChild(titleEl);
        const verEl = document.createElement("span");
        verEl.classList.add("bytm-plugin-list-row-version");
        verEl.textContent = verEl.title = verEl.ariaLabel = `v${plugin.version}`;
        titleEl.appendChild(verEl);
        const namespaceEl = document.createElement("div");
        namespaceEl.classList.add("bytm-plugin-list-row-namespace");
        namespaceEl.tabIndex = 0;
        namespaceEl.textContent = namespaceEl.title = namespaceEl.ariaLabel = plugin.namespace;
        headerEl.appendChild(namespaceEl);
        const descEl = document.createElement("p");
        descEl.classList.add("bytm-plugin-list-row-desc");
        descEl.tabIndex = 0;
        descEl.textContent = descEl.title = descEl.ariaLabel = (_a = plugin.description[getLocale()]) !== null && _a !== void 0 ? _a : plugin.description["en-US"];
        leftEl.appendChild(descEl);
        const linksList = document.createElement("div");
        linksList.classList.add("bytm-plugin-list-row-links-list");
        leftEl.appendChild(linksList);
        let linkElCreated = false;
        for (const key in plugin.homepage) {
            const url = plugin.homepage[key];
            if (!url)
                continue;
            if (linkElCreated) {
                const bulletEl = document.createElement("span");
                bulletEl.classList.add("bytm-plugin-list-row-links-list-bullet");
                bulletEl.textContent = "•";
                linksList.appendChild(bulletEl);
            }
            linkElCreated = true;
            const linkEl = document.createElement("a");
            linkEl.classList.add("bytm-plugin-list-row-link", "bytm-link");
            linkEl.href = url;
            linkEl.tabIndex = 0;
            linkEl.target = "_blank";
            linkEl.rel = "noopener noreferrer";
            linkEl.textContent = linkEl.title = linkEl.ariaLabel = t(`plugin_link_type_${key}`);
            linksList.appendChild(linkEl);
        }
        const rightEl = document.createElement("div");
        rightEl.classList.add("bytm-plugin-list-row-right");
        rowEl.appendChild(rightEl);
        const intentsAmount = Object.keys(PluginIntent).length / 2;
        const intentsArr = typeof intents === "number" && intents > 0 ? (() => {
            const arr = [];
            for (let i = 0; i < intentsAmount; i++)
                if (intents & (2 ** i))
                    arr.push(2 ** i);
            return arr;
        })() : [];
        const permissionsHeaderEl = document.createElement("div");
        permissionsHeaderEl.classList.add("bytm-plugin-list-row-permissions-header");
        permissionsHeaderEl.tabIndex = 0;
        permissionsHeaderEl.textContent = permissionsHeaderEl.title = permissionsHeaderEl.ariaLabel = t("plugin_list_permissions_header");
        rightEl.appendChild(permissionsHeaderEl);
        for (const intent of intentsArr) {
            const intentEl = document.createElement("div");
            intentEl.classList.add("bytm-plugin-list-row-intent-item");
            intentEl.tabIndex = 0;
            intentEl.textContent = t(`plugin_intent_name_${PluginIntent[intent]}`);
            intentEl.title = intentEl.ariaLabel = t(`plugin_intent_description_${PluginIntent[intent]}`);
            rightEl.appendChild(intentEl);
        }
        listContainerEl.appendChild(rowEl);
    }
    return listContainerEl;
}let featHelpDialog = null;
let curFeatKey = null;
/** Creates or modifies the help dialog for a specific feature and returns it */
async function getFeatHelpDialog({ featKey, }) {
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
            renderHeader: renderHeader$2,
            renderBody: renderBody$2,
        });
        // make config menu inert while help dialog is open
        featHelpDialog.on("open", () => { var _a; return (_a = document.querySelector("#bytm-cfg-menu")) === null || _a === void 0 ? void 0 : _a.setAttribute("inert", "true"); });
        featHelpDialog.on("close", () => { var _a; return (_a = document.querySelector("#bytm-cfg-menu")) === null || _a === void 0 ? void 0 : _a.removeAttribute("inert"); });
    }
    return featHelpDialog;
}
async function renderHeader$2() {
    const headerEl = document.createElement("div");
    setInnerHtml(headerEl, await resourceAsString("icon-help"));
    return headerEl;
}
async function renderBody$2() {
    var _a, _b;
    const contElem = document.createElement("div");
    const localeObj = locales === null || locales === void 0 ? void 0 : locales[getLocale()];
    // insert sentence terminator if not present, to improve flow with screenreaders
    let featText = t(`feature_desc_${curFeatKey}`);
    if (localeObj) {
        if (!featText.endsWith(localeObj.sentenceTerminator))
            featText = `${localeObj.textDir !== "rtl" ? featText : ""}${localeObj.sentenceTerminator}${localeObj.textDir === "rtl" ? featText : ""}`;
    }
    const featDescElem = document.createElement("h3");
    featDescElem.role = "subheading";
    featDescElem.tabIndex = 0;
    featDescElem.textContent = featText;
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
}let changelogDialog = null;
/** Creates and/or returns the changelog dialog */
async function getChangelogDialog() {
    if (!changelogDialog) {
        changelogDialog = new BytmDialog({
            id: "changelog",
            width: 1000,
            height: 800,
            closeBtnEnabled: true,
            closeOnBgClick: true,
            closeOnEscPress: true,
            small: true,
            verticalAlign: "top",
            renderHeader: renderHeader$1,
            renderBody: renderBody$1,
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
            const kbdElems = mdContElem.querySelectorAll("kbd");
            for (const kbdElem of kbdElems)
                kbdElem.addEventListener("selectstart", (e) => e.preventDefault());
        });
    }
    return changelogDialog;
}
async function renderHeader$1() {
    const headerEl = document.createElement("h2");
    headerEl.classList.add("bytm-dialog-title");
    headerEl.role = "heading";
    headerEl.ariaLevel = "1";
    headerEl.tabIndex = 0;
    headerEl.textContent = headerEl.ariaLabel = t("changelog_menu_title", scriptInfo.name);
    return headerEl;
}
async function renderBody$1() {
    const contElem = document.createElement("div");
    const mdContElem = document.createElement("div");
    mdContElem.id = "bytm-changelog-dialog-text";
    mdContElem.classList.add("bytm-markdown-container");
    setInnerHtml(mdContElem, await getChangelogHtmlWithDetails());
    contElem.appendChild(mdContElem);
    return contElem;
}let otherHotkeyInputActive = false;
const reservedKeys = ["ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "Meta", "Tab", "Space", " "];
/** Creates a hotkey input element */
function createHotkeyInput({ initialValue, onChange, createTitle }) {
    var _a;
    const initialHotkey = initialValue;
    let currentHotkey;
    if (!createTitle)
        createTitle = (value) => value;
    const wrapperElem = document.createElement("div");
    wrapperElem.classList.add("bytm-hotkey-wrapper");
    const infoElem = document.createElement("span");
    infoElem.classList.add("bytm-hotkey-info");
    const inputElem = document.createElement("button");
    inputElem.role = "button";
    inputElem.classList.add("bytm-ftconf-input", "bytm-hotkey-input", "bytm-btn");
    inputElem.dataset.state = "inactive";
    inputElem.innerText = (_a = initialValue === null || initialValue === void 0 ? void 0 : initialValue.code) !== null && _a !== void 0 ? _a : t("hotkey_input_click_to_change");
    inputElem.ariaLabel = inputElem.title = createTitle(hotkeyToString(initialValue));
    const resetElem = document.createElement("span");
    resetElem.classList.add("bytm-hotkey-reset", "bytm-link", "bytm-hidden");
    resetElem.role = "button";
    resetElem.tabIndex = 0;
    resetElem.textContent = `(${t("reset")})`;
    resetElem.ariaLabel = resetElem.title = t("hotkey_input_click_to_reset_tooltip");
    const deactivate = () => {
        var _a;
        if (!otherHotkeyInputActive)
            return;
        emitSiteEvent("hotkeyInputActive", false);
        otherHotkeyInputActive = false;
        const curHk = currentHotkey !== null && currentHotkey !== void 0 ? currentHotkey : initialValue;
        inputElem.innerText = (_a = curHk === null || curHk === void 0 ? void 0 : curHk.code) !== null && _a !== void 0 ? _a : t("hotkey_input_click_to_change");
        inputElem.dataset.state = "inactive";
        inputElem.ariaLabel = inputElem.title = createTitle(hotkeyToString(curHk));
        setInnerHtml(infoElem, curHk ? getHotkeyInfoHtml(curHk) : "");
    };
    const activate = () => {
        if (otherHotkeyInputActive)
            return;
        emitSiteEvent("hotkeyInputActive", true);
        otherHotkeyInputActive = true;
        inputElem.innerText = "< ... >";
        inputElem.dataset.state = "active";
        inputElem.ariaLabel = inputElem.title = t("click_to_cancel_tooltip");
    };
    const resetClicked = (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        onChange(initialValue);
        currentHotkey = initialValue;
        deactivate();
        inputElem.innerText = initialValue.code;
        setInnerHtml(infoElem, getHotkeyInfoHtml(initialValue));
        resetElem.classList.add("bytm-hidden");
        inputElem.ariaLabel = inputElem.title = createTitle(hotkeyToString(initialValue));
    };
    onInteraction(resetElem, resetClicked);
    if (initialValue)
        setInnerHtml(infoElem, getHotkeyInfoHtml(initialValue));
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
        inputElem.innerText = hotkey.code;
        inputElem.dataset.state = "inactive";
        setInnerHtml(infoElem, getHotkeyInfoHtml(hotkey));
        inputElem.ariaLabel = inputElem.title = t("click_to_cancel_tooltip");
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
        inputElem.innerText = hotkey.code;
        inputElem.dataset.state = "inactive";
        setInnerHtml(infoElem, getHotkeyInfoHtml(hotkey));
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
/** Returns HTML for the hotkey modifier keys info element */
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
/** Converts a hotkey object to a string */
function hotkeyToString(hotkey) {
    if (!hotkey)
        return t("hotkey_key_none");
    let str = "";
    if (hotkey.ctrl)
        str += `${t("hotkey_key_ctrl")}+`;
    if (hotkey.shift)
        str += `${t("hotkey_key_shift")}+`;
    if (hotkey.alt)
        str += `${getOS() === "mac" ? t("hotkey_key_mac_option") : t("hotkey_key_alt")}+`;
    str += hotkey.code;
    return str;
}//#region create menu
let isCfgMenuMounted = false;
let isCfgMenuOpen = false;
/** Threshold in pixels from the top of the options container that dictates for how long the scroll indicator is shown */
const scrollIndicatorOffsetThreshold = 50;
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
async function mountCfgMenu() {
    var _a, _b, _c, _d, _e;
    try {
        if (isCfgMenuMounted)
            return;
        isCfgMenuMounted = true;
        BytmDialog.initDialogs();
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
        const titleLogoHeaderCont = document.createElement("div");
        titleLogoHeaderCont.classList.add("bytm-menu-title-logo-header-cont");
        const titleCont = document.createElement("div");
        titleCont.classList.add("bytm-menu-titlecont");
        titleCont.role = "heading";
        titleCont.ariaLevel = "1";
        const titleLogoElem = document.createElement("img");
        const logoSrc = await getResourceUrl(`img-logo${mode === "development" ? "_dev" : ""}`);
        titleLogoElem.classList.add("bytm-cfg-menu-logo", "bytm-no-select");
        if (logoSrc)
            titleLogoElem.src = logoSrc;
        titleLogoHeaderCont.appendChild(titleLogoElem);
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
            ["github", await getResourceUrl("img-github"), scriptInfo.namespace, t("open_github", scriptInfo.name), "github"],
            ["greasyfork", await getResourceUrl("img-greasyfork"), pkg.hosts.greasyfork, t("open_greasyfork", scriptInfo.name), "greasyfork"],
            ["openuserjs", await getResourceUrl("img-openuserjs"), pkg.hosts.openuserjs, t("open_openuserjs", scriptInfo.name), "openuserjs"],
        ];
        const hostLink = links.find(([name]) => name === host);
        const otherLinks = links.filter(([name]) => name !== host);
        const reorderedLinks = hostLink ? [hostLink, ...otherLinks] : links;
        for (const [, ...args] of reorderedLinks)
            addLink(...args);
        addLink(await getResourceUrl("img-discord"), "https://dc.sv443.net/", t("open_discord"), "discord");
        const closeElem = document.createElement("img");
        closeElem.classList.add("bytm-menu-close");
        closeElem.role = "button";
        closeElem.tabIndex = 0;
        closeElem.src = await getResourceUrl("img-close");
        closeElem.ariaLabel = closeElem.title = t("close_menu_tooltip");
        onInteraction(closeElem, closeCfgMenu);
        titleCont.appendChild(titleElem);
        titleCont.appendChild(linksCont);
        titleLogoHeaderCont.appendChild(titleCont);
        headerElem.appendChild(titleLogoHeaderCont);
        headerElem.appendChild(closeElem);
        //#region footer
        const footerCont = document.createElement("div");
        footerCont.classList.add("bytm-menu-footer-cont");
        const reloadFooterCont = document.createElement("div");
        const reloadFooterEl = document.createElement("div");
        reloadFooterEl.id = "bytm-menu-footer-reload-hint";
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
            reloadTab();
        });
        reloadFooterEl.appendChild(reloadTxtEl);
        reloadFooterCont.appendChild(reloadFooterEl);
        /** For copying plain when shift-clicking the copy button or when compression is not supported */
        const exportDataSpecial = () => JSON.stringify({ formatVersion, data: getFeatures() });
        const exImDlg = new ExImDialog({
            id: "bytm-config-export-import",
            width: 800,
            height: 600,
            // try to compress the data if possible
            exportData: async () => await compressionSupported()
                ? await UserUtils.compress(JSON.stringify({ formatVersion, data: getFeatures() }), compressionFormat, "string")
                : exportDataSpecial(),
            exportDataSpecial,
            async onImport(data) {
                try {
                    const parsed = await tryToDecompressAndParse(data.trim());
                    log("Trying to import configuration:", parsed);
                    if (!parsed || typeof parsed !== "object")
                        return await showPrompt({ type: "alert", message: t("import_error_invalid") });
                    if (typeof parsed.formatVersion !== "number")
                        return await showPrompt({ type: "alert", message: t("import_error_no_format_version") });
                    if (typeof parsed.data !== "object" || parsed.data === null || Object.keys(parsed.data).length === 0)
                        return await showPrompt({ type: "alert", message: t("import_error_no_data") });
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
                                    newData = migRes instanceof Promise ? await migRes : migRes;
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
                        return await showPrompt({ type: "alert", message: t("import_error_wrong_format_version", formatVersion, parsed.formatVersion) });
                    await setFeatures(Object.assign(Object.assign({}, getFeatures()), parsed.data));
                    if (await showPrompt({ type: "confirm", message: t("import_success_confirm_reload") })) {
                        log("Reloading tab after importing configuration");
                        return reloadTab();
                    }
                    exImDlg.unmount();
                    emitSiteEvent("rebuildCfgMenu", parsed.data);
                }
                catch (err) {
                    warn("Couldn't import configuration:", err);
                    await showPrompt({ type: "alert", message: t("import_error_invalid") });
                }
            },
            title: () => t("bytm_config_export_import_title"),
            descImport: () => t("bytm_config_import_desc"),
            descExport: () => t("bytm_config_export_desc"),
        });
        const exportImportBtn = document.createElement("button");
        exportImportBtn.classList.add("bytm-btn");
        exportImportBtn.textContent = exportImportBtn.ariaLabel = exportImportBtn.title = t("export_import");
        onInteraction(exportImportBtn, async () => await exImDlg.open());
        const buttonsCont = document.createElement("div");
        buttonsCont.classList.add("bytm-menu-footer-buttons-cont");
        buttonsCont.appendChild(exportImportBtn);
        footerCont.appendChild(reloadFooterCont);
        footerCont.appendChild(buttonsCont);
        //#region feature list
        const featuresCont = document.createElement("div");
        featuresCont.id = "bytm-menu-opts";
        const onCfgChange = async (key, initialVal, newVal) => {
            var _a, _b, _c, _d;
            try {
                const fmt = (val) => typeof val === "object" ? JSON.stringify(val) : String(val);
                info(`Feature config changed at key '${key}', from value '${fmt(initialVal)}' to '${fmt(newVal)}'`);
                const featConf = JSON.parse(JSON.stringify(getFeatures()));
                featConf[key] = newVal;
                const changedKeys = initConfig$1 ? Object.keys(featConf).filter((k) => typeof featConf[k] !== "object"
                    && featConf[k] !== initConfig$1[k]) : [];
                const requiresReload = 
                // @ts-ignore
                changedKeys.some((k) => { var _a; return ((_a = featInfo[k]) === null || _a === void 0 ? void 0 : _a.reloadRequired) !== false; });
                await setFeatures(featConf);
                // @ts-ignore
                (_b = (_a = featInfo[key]) === null || _a === void 0 ? void 0 : _a.change) === null || _b === void 0 ? void 0 : _b.call(_a, key, initialVal, newVal);
                if (requiresReload) {
                    reloadFooterEl.classList.remove("hidden");
                    reloadFooterEl.setAttribute("aria-hidden", "false");
                }
                else {
                    reloadFooterEl.classList.add("hidden");
                    reloadFooterEl.setAttribute("aria-hidden", "true");
                }
                if (initLocale !== featConf.locale) {
                    await initTranslations(featConf.locale);
                    setLocale(featConf.locale);
                    const newText = t("lang_changed_prompt_reload");
                    const newLangEmoji = ((_c = locales[featConf.locale]) === null || _c === void 0 ? void 0 : _c.emoji) ? `${locales[featConf.locale].emoji}\n` : "";
                    const initLangEmoji = ((_d = locales[initLocale]) === null || _d === void 0 ? void 0 : _d.emoji) ? `${locales[initLocale].emoji}\n` : "";
                    const confirmText = newText !== initLangReloadText ? `${newLangEmoji}${newText}\n\n\n${initLangEmoji}${initLangReloadText}` : newText;
                    if (await showPrompt({
                        type: "confirm",
                        message: confirmText,
                        confirmBtnText: () => `${t("prompt_confirm")} / ${tl(initLocale, "prompt_confirm")}`,
                        confirmBtnTooltip: () => `${t("click_to_confirm_tooltip")} / ${tl(initLocale, "click_to_confirm_tooltip")}`,
                        denyBtnText: (type) => `${t(type === "alert" ? "prompt_close" : "prompt_cancel")} / ${tl(initLocale, type === "alert" ? "prompt_close" : "prompt_cancel")}`,
                        denyBtnTooltip: (type) => `${t(type === "alert" ? "click_to_close_tooltip" : "click_to_cancel_tooltip")} / ${tl(initLocale, type === "alert" ? "click_to_close_tooltip" : "click_to_cancel_tooltip")}`,
                    })) {
                        closeCfgMenu();
                        log("Reloading tab after changing language");
                        await reloadTab();
                    }
                }
                else if (getLocale() !== featConf.locale)
                    setLocale(featConf.locale);
            }
            catch (err) {
                error("Error while reacting to config change:", err);
            }
            finally {
                emitSiteEvent("configOptionChanged", key, initialVal, newVal);
            }
        };
        /** Call whenever the feature config is changed */
        const confChanged = UserUtils.debounce(onCfgChange, 333);
        const featureCfg = getFeatures();
        const featureCfgWithCategories = Object.entries(featInfo)
            .reduce((acc, [key, { category }]) => {
            if (!acc[category])
                acc[category] = {};
            acc[category][key] = featureCfg[key];
            return acc;
        }, {});
        /**
         * Formats the value `v` based on the provided `key` using the `featInfo` object.
         * If a custom `renderValue` function is defined for the `key`, it will be used to format the value.
         * If no custom `renderValue` function is defined, the value will be converted to a string and trimmed.
         * If the value is an object, it will be converted to a JSON string representation.
         * If an error occurs during formatting (like when passing objects with circular references), the original value will be returned as a string (trimmed).
         */
        const fmtVal = (v, key) => {
            var _a;
            try {
                // @ts-ignore
                const renderValue = typeof ((_a = featInfo === null || featInfo === void 0 ? void 0 : featInfo[key]) === null || _a === void 0 ? void 0 : _a.renderValue) === "function" ? featInfo[key].renderValue : undefined;
                const retVal = (typeof v === "object" ? JSON.stringify(v) : String(v)).trim();
                return renderValue ? renderValue(retVal) : retVal;
            }
            catch (_b) {
                // absolute last resort fallback because stringify throws on circular refs
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
                const initialVal = val !== null && val !== void 0 ? val : ftDefault;
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
                        ftConfElem.title = `${featKey}${rel}${adv}${extraTxts.length > 0 ? `\n${extraTxts.join(" - ")}` : ""}`;
                    }
                    if (!await hasKeyFor("en-US", `feature_desc_${featKey}`)) {
                        error(`Missing en-US translation with key "feature_desc_${featKey}" for feature description, skipping this config menu feature...`);
                        continue;
                    }
                    const textElem = document.createElement("span");
                    textElem.id = `bytm-ftitem-text-${featKey}`;
                    textElem.classList.add("bytm-ftitem-text", "bytm-ellipsis-wrap");
                    textElem.textContent = textElem.title = textElem.ariaLabel = t(`feature_desc_${featKey}`);
                    let adornmentElem;
                    const adornContentAsync = (_a = ftInfo.textAdornment) === null || _a === void 0 ? void 0 : _a.call(ftInfo);
                    const adornContent = adornContentAsync instanceof Promise ? await adornContentAsync : adornContentAsync;
                    if ((typeof adornContentAsync === "string" || adornContentAsync instanceof Promise) && typeof adornContent !== "undefined") {
                        adornmentElem = document.createElement("span");
                        adornmentElem.id = `bytm-ftitem-${featKey}-adornment`;
                        adornmentElem.classList.add("bytm-ftitem-adornment");
                        setInnerHtml(adornmentElem, adornContent);
                    }
                    let helpElem;
                    // @ts-ignore
                    const hasHelpTextFunc = typeof ((_b = featInfo[featKey]) === null || _b === void 0 ? void 0 : _b.helpText) === "function";
                    // @ts-ignore
                    const helpTextVal = hasHelpTextFunc && featInfo[featKey].helpText();
                    if (await hasKey(`feature_helptext_${featKey}`) || (helpTextVal && await hasKey(helpTextVal))) {
                        const helpElemImgHtml = await resourceAsString("icon-help");
                        if (helpElemImgHtml) {
                            helpElem = document.createElement("div");
                            helpElem.classList.add("bytm-ftitem-help-btn", "bytm-generic-btn");
                            helpElem.ariaLabel = helpElem.title = t("feature_help_button_tooltip", t(`feature_desc_${featKey}`));
                            helpElem.role = "button";
                            helpElem.tabIndex = 0;
                            setInnerHtml(helpElem, helpElemImgHtml);
                            onInteraction(helpElem, async (e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                await (await getFeatHelpDialog({ featKey: featKey })).open();
                            });
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
                    // to prevent dev mode title from propagating:
                    ctrlElem.title = "";
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
                        advCopyHiddenBtn.textContent = t("copy_hidden");
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
                        inputElem.ariaLabel = t(`feature_desc_${featKey}`);
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
                        inputElem.setAttribute("aria-describedby", `bytm-ftitem-text-${featKey}`);
                        inputElem.setAttribute("aria-labelledby", (_c = labelElem === null || labelElem === void 0 ? void 0 : labelElem.id) !== null && _c !== void 0 ? _c : `bytm-ftitem-text-${featKey}`);
                        ctrlElem.appendChild(inputElem);
                    }
                    else {
                        // custom input element:
                        let customInputEl;
                        switch (type) {
                            case "hotkey":
                                customInputEl = createHotkeyInput({
                                    initialValue: typeof initialVal === "object" ? initialVal : undefined,
                                    onChange: (hotkey) => confChanged(featKey, initialVal, hotkey),
                                    createTitle: (value) => t("hotkey_input_click_to_change_tooltip", t(`feature_desc_${featKey}`), value),
                                });
                                break;
                            case "toggle":
                                customInputEl = await createToggleInput({
                                    initialValue: Boolean(initialVal),
                                    onChange: (checked) => confChanged(featKey, initialVal, checked),
                                    id: `ftconf-${featKey}`,
                                    labelPos: "left",
                                });
                                break;
                            case "button":
                                customInputEl = document.createElement("button");
                                customInputEl.classList.add("bytm-btn");
                                customInputEl.tabIndex = 0;
                                customInputEl.textContent = await hasKey(`feature_btn_${featKey}`) ? t(`feature_btn_${featKey}`) : t("trigger_btn_action");
                                customInputEl.ariaLabel = customInputEl.title = t(`feature_desc_${featKey}`);
                                onInteraction(customInputEl, async () => {
                                    if (customInputEl.disabled)
                                        return;
                                    const startTs = Date.now();
                                    const res = ftInfo.click();
                                    customInputEl.disabled = true;
                                    customInputEl.classList.add("bytm-busy");
                                    customInputEl.textContent = await hasKey(`feature_btn_${featKey}_running`) ? t(`feature_btn_${featKey}_running`) : t("trigger_btn_action_running");
                                    if (res instanceof Promise)
                                        await res;
                                    const finalize = async () => {
                                        customInputEl.disabled = false;
                                        customInputEl.classList.remove("bytm-busy");
                                        customInputEl.textContent = await hasKey(`feature_btn_${featKey}`) ? t(`feature_btn_${featKey}`) : t("trigger_btn_action");
                                    };
                                    // artificial timeout ftw
                                    const rTime = UserUtils.randRange(200, 400);
                                    if (Date.now() - startTs < rTime)
                                        setTimeout(finalize, rTime - (Date.now() - startTs));
                                    else
                                        finalize();
                                });
                                break;
                        }
                        if (customInputEl && !customInputEl.hasAttribute("aria-label"))
                            customInputEl.ariaLabel = t(`feature_desc_${featKey}`);
                        customInputEl === null || customInputEl === void 0 ? void 0 : customInputEl.setAttribute("aria-describedby", `bytm-ftitem-text-${featKey}`);
                        if ((customInputEl === null || customInputEl === void 0 ? void 0 : customInputEl.getAttribute("aria-labelledby")) === null) {
                            // try to find a label element to link to for a11y, else default to the text element
                            const lbl = customInputEl === null || customInputEl === void 0 ? void 0 : customInputEl.querySelector("label");
                            customInputEl === null || customInputEl === void 0 ? void 0 : customInputEl.setAttribute("aria-labelledby", lbl && lbl.id.length > 0 ? lbl.id : `bytm-ftitem-text-${featKey}`);
                        }
                        ctrlElem.appendChild(customInputEl);
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
        scrollIndicator.src = await getResourceUrl("icon-arrow_down");
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
        subtitleElemCont.classList.add("bytm-ellipsis");
        const versionEl = document.createElement("a");
        versionEl.id = "bytm-menu-version-anchor";
        versionEl.classList.add("bytm-link", "bytm-ellipsis");
        versionEl.role = "button";
        versionEl.tabIndex = 0;
        versionEl.ariaLabel = versionEl.title = t("version_tooltip", scriptInfo.version, buildNumber);
        versionEl.textContent = `v${scriptInfo.version} (#${buildNumber})`;
        onInteraction(versionEl, async (e) => {
            e.preventDefault();
            e.stopPropagation();
            const dlg = await getChangelogDialog();
            dlg.on("close", () => openCfgMenu());
            await dlg.mount();
            closeCfgMenu(undefined, false);
            await dlg.open();
        });
        subtitleElemCont.appendChild(versionEl);
        titleElem.appendChild(subtitleElemCont);
        const modeItems = [];
        mode === "development" && modeItems.push("dev_mode");
        getFeature("advancedMode") && modeItems.push("advanced_mode");
        if (modeItems.length > 0) {
            const modeDisplayEl = document.createElement("span");
            modeDisplayEl.id = "bytm-menu-mode-display";
            modeDisplayEl.classList.add("bytm-ellipsis");
            modeDisplayEl.textContent = `[${t("active_mode_display", arrayWithSeparators(modeItems.map(v => t(`${v}_short`)), ", ", " & "))}]`;
            modeDisplayEl.ariaLabel = modeDisplayEl.title = tp("active_mode_tooltip", modeItems, arrayWithSeparators(modeItems.map(t), ", ", " & "));
            subtitleElemCont.appendChild(modeDisplayEl);
        }
        menuContainer.appendChild(footerCont);
        backgroundElem.appendChild(menuContainer);
        ((_d = document.querySelector("#bytm-dialog-container")) !== null && _d !== void 0 ? _d : document.body).appendChild(backgroundElem);
        window.addEventListener("resize", UserUtils.debounce(checkToggleScrollIndicator, 250));
        log("Added menu element");
        // ensure stuff is reset if menu was opened before being added
        isCfgMenuOpen = false;
        document.body.classList.remove("bytm-disable-scroll");
        (_e = document.querySelector(getDomain() === "ytm" ? "ytmusic-app" : "ytd-app")) === null || _e === void 0 ? void 0 : _e.removeAttribute("inert");
        backgroundElem.style.visibility = "hidden";
        backgroundElem.style.display = "none";
        siteEvents.on("recreateCfgMenu", async () => {
            const bgElem = document.querySelector("#bytm-cfg-menu-bg");
            if (!bgElem)
                return;
            closeCfgMenu();
            bgElem.remove();
            isCfgMenuMounted = isCfgMenuOpen = false;
            await mountCfgMenu();
            await openCfgMenu();
        });
    }
    catch (err) {
        error("Error while rendering config menu:", err);
        closeCfgMenu();
    }
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
    UserUtils.openDialogs.splice(UserUtils.openDialogs.indexOf("cfg-menu"), 1);
    setCurrentDialogId((_b = UserUtils.openDialogs === null || UserUtils.openDialogs === void 0 ? void 0 : UserUtils.openDialogs[0]) !== null && _b !== void 0 ? _b : null);
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
async function openCfgMenu() {
    var _a;
    try {
        if (!isCfgMenuMounted)
            await mountCfgMenu();
        if (isCfgMenuOpen)
            return;
        isCfgMenuOpen = true;
        document.body.classList.add("bytm-disable-scroll");
        (_a = document.querySelector(getDomain() === "ytm" ? "ytmusic-app" : "ytd-app")) === null || _a === void 0 ? void 0 : _a.setAttribute("inert", "true");
        const menuBg = document.querySelector("#bytm-cfg-menu-bg");
        setCurrentDialogId("cfg-menu");
        UserUtils.openDialogs.unshift("cfg-menu");
        // since this menu doesn't have a BytmDialog instance, it's undefined here
        emitInterface("bytm:dialogOpened", undefined);
        emitInterface("bytm:dialogOpened:cfg-menu", undefined);
        if (!menuBg) {
            warn("Couldn't open config menu because background element couldn't be found. The config menu is considered open but might still be closed. In this case please reload the page. If the issue persists, please create an issue on GitHub.");
            closeCfgMenu();
            return;
        }
        menuBg.style.visibility = "visible";
        menuBg.style.display = "block";
        checkToggleScrollIndicator();
    }
    catch (err) {
        error("Error while opening config menu:", err);
    }
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
}//#region cfg menu btns
let logoExchanged = false, improveLogoCalled = false;
/** Adds a watermark beneath the logo */
async function addWatermark() {
    const watermark = document.createElement("a");
    watermark.role = "button";
    watermark.id = "bytm-watermark";
    watermark.classList.add("style-scope", "ytmusic-nav-bar", "bytm-no-select");
    watermark.textContent = scriptInfo.name;
    watermark.ariaLabel = watermark.title = t("open_menu_tooltip", scriptInfo.name);
    watermark.tabIndex = 0;
    improveLogo();
    const watermarkOpenMenu = (e) => {
        e.stopImmediatePropagation();
        if ((!e.shiftKey && !e.ctrlKey) || logoExchanged)
            openCfgMenu();
        if (!logoExchanged && (e.shiftKey || e.ctrlKey))
            exchangeLogo();
    };
    onInteraction(watermark, (e) => watermarkOpenMenu(e));
    addSelectorListener("navBar", "ytmusic-nav-bar #left-content", {
        listener: (logoElem) => logoElem.insertAdjacentElement("afterend", watermark),
    });
    log("Added watermark element");
}
/** Turns the regular `<img>`-based logo into inline SVG to be able to animate and modify parts of it */
async function improveLogo() {
    try {
        if (improveLogoCalled)
            return;
        improveLogoCalled = true;
        const res = await UserUtils.fetchAdvanced("https://music.youtube.com/img/on_platform_logo_dark.svg");
        const svg = await res.text();
        addSelectorListener("navBar", "ytmusic-logo a", {
            listener: (logoElem) => {
                var _a;
                logoElem.classList.add("bytm-mod-logo", "bytm-no-select");
                setInnerHtml(logoElem, svg);
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
}
/** Exchanges the default YTM logo into BetterYTM's logo with a sick ass animation */
function exchangeLogo() {
    addSelectorListener("navBar", ".bytm-mod-logo", {
        listener: async (logoElem) => {
            if (logoElem.classList.contains("bytm-logo-exchanged"))
                return;
            logoExchanged = true;
            logoElem.classList.add("bytm-logo-exchanged");
            const iconUrl = await getResourceUrl(mode === "development" ? "img-logo_dev" : "img-logo");
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
        },
    });
}
//#region cfg menu options
/** Called whenever the avatar popover menu exists on YTM to add a BYTM config menu button to the user menu popover */
async function addConfigMenuOptionYTM(container) {
    const cfgOptElem = document.createElement("div");
    cfgOptElem.classList.add("bytm-cfg-menu-option");
    const cfgOptItemElem = document.createElement("div");
    cfgOptItemElem.classList.add("bytm-cfg-menu-option-item");
    cfgOptItemElem.role = "button";
    cfgOptItemElem.tabIndex = 0;
    cfgOptItemElem.ariaLabel = cfgOptItemElem.title = t("open_menu_tooltip", scriptInfo.name);
    onInteraction(cfgOptItemElem, async (e) => {
        const settingsBtnElem = document.querySelector("ytmusic-nav-bar ytmusic-settings-button button");
        settingsBtnElem === null || settingsBtnElem === void 0 ? void 0 : settingsBtnElem.click();
        if ((!e.shiftKey && !e.ctrlKey) || logoExchanged)
            openCfgMenu();
        if (!logoExchanged && (e.shiftKey || e.ctrlKey))
            exchangeLogo();
    });
    const cfgOptIconElem = document.createElement("img");
    cfgOptIconElem.classList.add("bytm-cfg-menu-option-icon");
    cfgOptIconElem.src = await getResourceUrl(mode === "development" ? "img-logo_dev" : "img-logo");
    const cfgOptTextElem = document.createElement("div");
    cfgOptTextElem.classList.add("bytm-cfg-menu-option-text");
    cfgOptTextElem.textContent = t("config_menu_option", scriptInfo.name);
    cfgOptItemElem.appendChild(cfgOptIconElem);
    cfgOptItemElem.appendChild(cfgOptTextElem);
    cfgOptElem.appendChild(cfgOptItemElem);
    container.appendChild(cfgOptElem);
    improveLogo();
    log("Added BYTM-Configuration button to menu popover");
}
/** Called whenever the titlebar (masthead) exists on YT to add a BYTM config menu button */
async function addConfigMenuOptionYT(container) {
    const cfgOptWrapperElem = document.createElement("div");
    cfgOptWrapperElem.classList.add("bytm-yt-cfg-menu-option", "darkreader-ignore");
    cfgOptWrapperElem.role = "button";
    cfgOptWrapperElem.tabIndex = 0;
    cfgOptWrapperElem.ariaLabel = cfgOptWrapperElem.title = t("open_menu_tooltip", scriptInfo.name);
    const cfgOptElem = document.createElement("div");
    cfgOptElem.classList.add("bytm-yt-cfg-menu-option-inner");
    const cfgOptImgElem = document.createElement("img");
    cfgOptImgElem.classList.add("bytm-yt-cfg-menu-option-icon");
    cfgOptImgElem.src = await getResourceUrl(mode === "development" ? "img-logo_dev" : "img-logo");
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
}
//#region anchor improvements
/** Adds anchors around elements and tweaks existing ones so songs are easier to open in a new tab */
async function addAnchorImprovements() {
    try {
        await addStyleFromResource("css-anchor_improvements");
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
//#region share track param
/** Removes the ?si tracking parameter from share URLs */
async function initRemShareTrackParam() {
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
                characterData: true,
                attributeFilter: ["aria-hidden", "aria-checked", "checked"],
            });
        },
    });
}
//#region fix spacing
/** Applies global CSS to fix various spacings */
async function fixSpacing() {
    if (!await addStyleFromResource("css-fix_spacing"))
        error("Couldn't fix spacing");
}
//#region ab.queue btns
async function initAboveQueueBtns() {
    const { scrollToActiveSongBtn, clearQueueBtn } = getFeatures();
    if (!await addStyleFromResource("css-above_queue_btns"))
        error("Couldn't add CSS for above queue buttons");
    else if (getFeature("aboveQueueBtnsSticky"))
        addStyleFromResource("css-above_queue_btns_sticky");
    const contBtns = [
        {
            condition: scrollToActiveSongBtn,
            id: "scroll-to-active",
            resourceName: "icon-skip_to",
            titleKey: "scroll_to_playing",
            interaction: async (evt) => scrollToCurrentSongInQueue(evt),
        },
        {
            condition: clearQueueBtn,
            id: "clear-queue",
            resourceName: "icon-clear_list",
            titleKey: "clear_list",
            async interaction(evt) {
                try {
                    if (evt.shiftKey || await showPrompt({ type: "confirm", message: t("clear_list_confirm") })) {
                        const url = new URL(location.href);
                        url.searchParams.delete("list");
                        url.searchParams.set("time_continue", String(await getVideoTime(0)));
                        location.assign(url);
                    }
                }
                catch (err) {
                    error("Couldn't clear queue due to an error:", err);
                }
            },
        },
    ];
    if (!contBtns.some(b => Boolean(b.condition)))
        return;
    addSelectorListener("sidePanel", "ytmusic-tab-renderer ytmusic-queue-header-renderer #buttons", {
        async listener(rightBtnsEl) {
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
                const wrapperElem = document.createElement("div");
                wrapperElem.id = "bytm-above-queue-btn-wrapper";
                for (const item of contBtns) {
                    if (Boolean(item.condition) === false)
                        continue;
                    const btnElem = await createCircularBtn({
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
        },
    });
}
//#region thumb.overlay
/** To be changed when the toggle button is pressed - used to invert the state of "showOverlay" */
let invertOverlay = false;
async function initThumbnailOverlay() {
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
        const updateOverlayVisibility = async () => {
            if (!UserUtils.isDomLoaded())
                return;
            const behavior = getFeature("thumbnailOverlayBehavior");
            let showOverlay = behavior === "always";
            const isVideo = getCurrentMediaType() === "video";
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
                    async listener(toggleBtnElem) {
                        var _a;
                        const toggleBtnIconElem = toggleBtnElem.querySelector("svg");
                        if (toggleBtnIconElem) {
                            setInnerHtml(toggleBtnElem, await resourceAsString(`icon-image${showOverlay ? "_filled" : ""}`));
                            (_a = toggleBtnElem.querySelector("svg")) === null || _a === void 0 ? void 0 : _a.classList.add("bytm-generic-btn-img");
                        }
                        if (toggleBtnElem)
                            toggleBtnElem.ariaLabel = toggleBtnElem.title = t(`thumbnail_overlay_toggle_btn_tooltip${showOverlay ? "_hide" : "_show"}`);
                    },
                });
            }
        };
        const applyThumbUrl = async (watchId) => {
            try {
                const thumbUrl = await getBestThumbnailUrl(watchId);
                if (thumbUrl) {
                    const toggleBtnElem = document.querySelector("#bytm-thumbnail-overlay-toggle");
                    const thumbImgElem = document.querySelector("#bytm-thumbnail-overlay-img");
                    if ((toggleBtnElem === null || toggleBtnElem === void 0 ? void 0 : toggleBtnElem.href) === thumbUrl && (thumbImgElem === null || thumbImgElem === void 0 ? void 0 : thumbImgElem.src) === thumbUrl)
                        return;
                    if (toggleBtnElem)
                        toggleBtnElem.href = thumbUrl;
                    if (thumbImgElem)
                        thumbImgElem.src = thumbUrl;
                    log("Applied thumbnail URL to overlay:", thumbUrl);
                }
                else
                    error("Couldn't get thumbnail URL for watch ID", watchId);
            }
            catch (err) {
                error("Couldn't apply thumbnail URL to overlay due to an error:", err);
            }
        };
        const unsubWatchIdChanged = siteEvents.on("watchIdChanged", (watchId) => {
            unsubWatchIdChanged();
            addSelectorListener("body", "#bytm-thumbnail-overlay", {
                listener: () => {
                    applyThumbUrl(watchId);
                    updateOverlayVisibility();
                },
            });
        });
        const createElements = async () => {
            var _a;
            try {
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
                    indicatorElem.src = await getResourceUrl("icon-image");
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
                siteEvents.on("watchIdChanged", async (watchId) => {
                    invertOverlay = false;
                    applyThumbUrl(watchId);
                    updateOverlayVisibility();
                });
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
                    setInnerHtml(toggleBtnElem, await resourceAsString("icon-image"));
                    (_a = toggleBtnElem.querySelector("svg")) === null || _a === void 0 ? void 0 : _a.classList.add("bytm-generic-btn-img");
                    addSelectorListener("playerBarMiddleButtons", "ytmusic-like-button-renderer#like-button-renderer", {
                        listener: (likeContainer) => likeContainer.insertAdjacentElement("afterend", toggleBtnElem),
                    });
                }
                log("Added thumbnail overlay");
            }
            catch (err) {
                error("Couldn't create thumbnail overlay elements due to an error:", err);
            }
        };
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
//#region idle hide cursor
async function initHideCursorOnIdle() {
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
            vidContainer.addEventListener("mousemove", UserUtils.debounce(onMove, 200));
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
}
//#region fix HDR
/** Prevents visual issues when using HDR */
async function fixHdrIssues() {
    if (!await addStyleFromResource("css-fix_hdr"))
        error("Couldn't load stylesheet to fix HDR issues");
    else
        log("Fixed HDR issues");
}
//#region show vote nums
/** Shows the amount of likes and dislikes on the current song */
async function initShowVotes() {
    addSelectorListener("playerBar", ".middle-controls-buttons ytmusic-like-button-renderer", {
        async listener(voteCont) {
            try {
                const videoID = getWatchId();
                if (!videoID) {
                    await siteEvents.once("watchIdChanged");
                    return initShowVotes();
                }
                const voteObj = await fetchVideoVotes(videoID);
                if (!voteObj || !("likes" in voteObj) || !("dislikes" in voteObj) || !("rating" in voteObj))
                    return error("Couldn't fetch votes from the Return YouTube Dislike API");
                if (getFeature("showVotes")) {
                    addVoteNumbers(voteCont, voteObj);
                    siteEvents.on("watchIdChanged", async (watchId) => {
                        var _a, _b;
                        const labelLikes = document.querySelector("ytmusic-like-button-renderer .bytm-vote-label.likes");
                        const labelDislikes = document.querySelector("ytmusic-like-button-renderer .bytm-vote-label.dislikes");
                        if (!labelLikes || !labelDislikes)
                            return error("Couldn't find vote label elements while updating like and dislike counts");
                        if (labelLikes.dataset.watchId === watchId && labelDislikes.dataset.watchId === watchId)
                            return log("Vote labels already updated for this video");
                        const voteObj = await fetchVideoVotes(watchId);
                        if (!voteObj || !("likes" in voteObj) || !("dislikes" in voteObj) || !("rating" in voteObj))
                            return error("Couldn't fetch votes from the Return YouTube Dislike API");
                        const likesLabelText = tp("vote_label_likes", voteObj.likes, formatNumber(voteObj.likes, "long"));
                        const dislikesLabelText = tp("vote_label_dislikes", voteObj.dislikes, formatNumber(voteObj.dislikes, "long"));
                        labelLikes.dataset.watchId = (_a = getWatchId()) !== null && _a !== void 0 ? _a : "";
                        labelLikes.textContent = formatNumber(voteObj.likes);
                        labelLikes.title = labelLikes.ariaLabel = likesLabelText;
                        labelDislikes.textContent = formatNumber(voteObj.dislikes);
                        labelDislikes.title = labelDislikes.ariaLabel = dislikesLabelText;
                        labelDislikes.dataset.watchId = (_b = getWatchId()) !== null && _b !== void 0 ? _b : "";
                        addSelectorListener("playerBar", "ytmusic-like-button-renderer#like-button-renderer", {
                            listener: (bar) => upsertVoteBtnLabels(bar, likesLabelText, dislikesLabelText),
                        });
                    });
                }
            }
            catch (err) {
                error("Couldn't initialize show votes feature due to an error:", err);
            }
        }
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
        label.textContent = String(formatNumber(amount));
        label.title = label.ariaLabel = tp(`vote_label_${type}`, amount, formatNumber(amount, "long"));
        label.dataset.watchId = (_a = getWatchId()) !== null && _a !== void 0 ? _a : "";
        label.addEventListener("click", (e) => {
            var _a;
            e.preventDefault();
            e.stopPropagation();
            (_a = (type === "likes" ? likeBtn : dislikeBtn).querySelector("button")) === null || _a === void 0 ? void 0 : _a.click();
        });
        return label;
    };
    addStyleFromResource("css-show_votes")
        .catch((e) => error("Couldn't add CSS for show votes feature due to an error:", e));
    const likeLblEl = createLabel(voteObj.likes, "likes");
    likeBtn.insertAdjacentElement("afterend", likeLblEl);
    const dislikeLblEl = createLabel(voteObj.dislikes, "dislikes");
    dislikeBtn.insertAdjacentElement("afterend", dislikeLblEl);
    upsertVoteBtnLabels(voteCont, likeLblEl.title, dislikeLblEl.title);
    log("Added vote number labels to like and dislike buttons");
}
/** Updates or inserts the labels on the native like and dislike buttons */
function upsertVoteBtnLabels(parentEl, likesLabelText, dislikesLabelText) {
    const likeBtn = parentEl.querySelector("#button-shape-like button");
    const dislikeBtn = parentEl.querySelector("#button-shape-dislike button");
    if (likeBtn)
        likeBtn.title = likeBtn.ariaLabel = likesLabelText;
    if (dislikeBtn)
        dislikeBtn.title = dislikeBtn.ariaLabel = dislikesLabelText;
}
//#region watch page full size
/** Makes the watch page full size */
async function initWatchPageFullSize() {
    if (!await addStyleFromResource("css-watch_page_full_size"))
        error("Couldn't load stylesheet to make watch page full size");
    else
        log("Made watch page full size");
}//#region Dark Reader
/** Disables Dark Reader if it is present */
async function disableDarkReader() {
    if (getFeature("disableDarkReaderSites") !== getDomain() && getFeature("disableDarkReaderSites") !== "all")
        return;
    const metaElem = document.createElement("meta");
    metaElem.name = "darkreader-lock";
    metaElem.id = "bytm-disable-dark-reader";
    document.head.appendChild(metaElem);
    info("Disabled Dark Reader");
}
//#region SponsorBlock
/** Fixes the z-index of the SponsorBlock panel */
async function fixSponsorBlock() {
    try {
        return addStyleFromResource("css-fix_sponsorblock");
    }
    catch (err) {
        error("Failed to fix SponsorBlock styling:", err);
    }
}
//#region ThemeSong
/** Adjust the BetterYTM styles if ThemeSong is ***not*** used */
async function fixPlayerPageTheming() {
    try {
        return addStyleFromResource("css-fix_playerpage_theming");
    }
    catch (err) {
        error("Failed to fix BetterYTM player page theming:", err);
    }
}
/** Sets the lightness of the theme color used by BYTM according to the configured lightness value */
async function fixThemeSong() {
    try {
        const cssVarName = (() => {
            switch (getFeature("themeSongLightness")) {
                default:
                case "darker":
                    return "--ts-palette-darkmuted-hex";
                case "normal":
                    return "--ts-palette-muted-hex";
                case "lighter":
                    return "--ts-palette-lightmuted-hex";
            }
            ;
        })();
        document.documentElement.style.setProperty("--bytm-themesong-bg-accent-col", `var(${cssVarName})`);
    }
    catch (err) {
        error("Failed to set ThemeSong integration color lightness:", err);
    }
}/** Ratelimit budget timeframe in seconds - should reflect what's in geniURL's docs */
const geniUrlRatelimitTimeframe = 30;
//#region media control bar
let currentSongTitle = "";
/** Adds a lyrics button to the player bar */
async function addPlayerBarLyricsBtn() {
    addSelectorListener("playerBarMiddleButtons", "ytmusic-like-button-renderer#like-button-renderer", { listener: addActualLyricsBtn });
}
/** Actually adds the lyrics button after the like button renderer has been verified to exist */
async function addActualLyricsBtn(likeContainer) {
    const songTitleElem = document.querySelector(".content-info-wrapper > yt-formatted-string");
    if (!songTitleElem)
        return warn("Couldn't find song title element");
    currentSongTitle = songTitleElem.title;
    const onMutation = async (mutations) => {
        var _a, e_1, _b, _c;
        var _d, _e, _f;
        try {
            for (var _g = true, mutations_1 = __asyncValues(mutations), mutations_1_1; mutations_1_1 = await mutations_1.next(), _a = mutations_1_1.done, !_a; _g = true) {
                _c = mutations_1_1.value;
                _g = false;
                const mut = _c;
                const newTitle = mut.target.title;
                if (newTitle !== currentSongTitle && newTitle.length > 0) {
                    const lyricsBtn = document.querySelector("#bytm-player-bar-lyrics-btn");
                    if (!lyricsBtn)
                        continue;
                    lyricsBtn.style.cursor = "wait";
                    lyricsBtn.style.pointerEvents = "none";
                    setInnerHtml(lyricsBtn, await resourceAsString("icon-spinner"));
                    (_d = lyricsBtn.querySelector("svg")) === null || _d === void 0 ? void 0 : _d.classList.add("bytm-generic-btn-img", "bytm-spinner");
                    currentSongTitle = newTitle;
                    const url = await getCurrentLyricsUrl(); // can take a second or two
                    setInnerHtml(lyricsBtn, await resourceAsString("icon-lyrics"));
                    (_e = lyricsBtn.querySelector("svg")) === null || _e === void 0 ? void 0 : _e.classList.add("bytm-generic-btn-img");
                    if (!url) {
                        let artist, song;
                        if ("mediaSession" in navigator && navigator.mediaSession.metadata) {
                            artist = navigator.mediaSession.metadata.artist;
                            song = navigator.mediaSession.metadata.title;
                        }
                        const query = artist && song ? "?q=" + encodeURIComponent(sanitizeArtists(artist) + " - " + sanitizeSong(song)) : "";
                        setInnerHtml(lyricsBtn, await resourceAsString("icon-error"));
                        (_f = lyricsBtn.querySelector("svg")) === null || _f === void 0 ? void 0 : _f.classList.add("bytm-generic-btn-img");
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
                if (!_g && !_a && (_b = mutations_1.return)) await _b.call(mutations_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    // since YT and YTM don't reload the page on video change, MutationObserver needs to be used to watch for changes in the video title
    const obs = new MutationObserver(onMutation);
    obs.observe(songTitleElem, { attributes: true, attributeFilter: ["title"] });
    const lyricsBtnElem = await createLyricsBtn(undefined);
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
async function getCurrentLyricsUrl() {
    try {
        // In videos the video title contains both artist and song title, in "regular" YTM songs, the video title only contains the song title
        const isVideo = getCurrentMediaType() === "video";
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
        const url = await fetchLyricsUrlTop(sanitizeArtists(artistName), sanitizeSong(songName));
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
        getFeature("errorOnLyricsNotFound") && error("Couldn't resolve lyrics URL:", err);
        return undefined;
    }
}
/** Fetches the top lyrics URL result from geniURL - **the passed parameters need to be sanitized first!** */
async function fetchLyricsUrlTop(artist, song) {
    var _a, _b;
    try {
        return (_b = (_a = (await fetchLyricsUrls(artist, song))) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.url;
    }
    catch (err) {
        getFeature("errorOnLyricsNotFound") && error("Couldn't get lyrics URL due to error:", err);
        return undefined;
    }
}
/**
 * Fetches the 5 best matching lyrics URLs from geniURL using a combo exact-ish and fuzzy search
 * **the passed parameters need to be sanitized first!**
 */
async function fetchLyricsUrls(artist, song) {
    var _a, _b, _c;
    try {
        const cacheEntry = getLyricsCacheEntry(artist, song);
        if (cacheEntry) {
            info(`Found lyrics URL in cache: ${cacheEntry.url}`);
            return [cacheEntry];
        }
        const fetchUrl = constructUrl(`${getFeature("geniUrlBase")}/search`, {
            disableFuzzy: null,
            utm_source: `${scriptInfo.name} v${scriptInfo.version}${mode === "development" ? "-pre" : ""}`,
            q: `${artist} ${song}`,
        });
        log("Requesting lyrics from geniURL:", fetchUrl);
        const token = getFeature("geniUrlToken");
        const fetchRes = await UserUtils.fetchAdvanced(fetchUrl, Object.assign({}, (token ? {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        } : {})));
        if (fetchRes.status === 429) {
            const waitSeconds = Number((_a = fetchRes.headers.get("retry-after")) !== null && _a !== void 0 ? _a : geniUrlRatelimitTimeframe);
            await showPrompt({ type: "alert", message: tp("lyrics_rate_limited", waitSeconds, waitSeconds) });
            return undefined;
        }
        else if (fetchRes.status < 200 || fetchRes.status >= 300) {
            getFeature("errorOnLyricsNotFound") && error(new LyricsError(`Couldn't fetch lyrics URLs from geniURL - status: ${fetchRes.status} - response: ${(_c = (_b = (await fetchRes.json()).message) !== null && _b !== void 0 ? _b : await fetchRes.text()) !== null && _c !== void 0 ? _c : "(none)"}`));
            return undefined;
        }
        const result = await fetchRes.json();
        if (typeof result === "object" && result.error || !result || !result.all) {
            getFeature("errorOnLyricsNotFound") && error(new LyricsError(`Couldn't fetch lyrics URLs from geniURL: ${result.message}`));
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
        const topRes = allResultsSan[0];
        topRes && addLyricsCacheEntryBest(topRes.meta.artists, topRes.meta.title, topRes.url);
        return allResultsSan.map(r => ({
            artist: r.meta.primaryArtist.name,
            song: r.meta.title,
            url: r.url,
        }));
    }
    catch (err) {
        getFeature("errorOnLyricsNotFound") && error("Couldn't get lyrics URL due to error:", err);
        return undefined;
    }
}
/** Adds the genius URL to the passed lyrics button element if it was previously instantiated with an undefined URL */
async function addGeniusUrlToLyricsBtn(btnElem, geniusUrl) {
    btnElem.href = geniusUrl;
    btnElem.ariaLabel = btnElem.title = t("open_lyrics");
    btnElem.style.visibility = "visible";
    btnElem.style.display = "inline-flex";
}
/** Creates the base lyrics button element */
async function createLyricsBtn(geniusUrl, hideIfLoading = true) {
    var _a;
    const linkElem = document.createElement("a");
    linkElem.classList.add("ytmusic-player-bar", "bytm-generic-btn");
    linkElem.ariaLabel = linkElem.title = t("lyrics_loading");
    linkElem.role = "button";
    linkElem.target = "_blank";
    linkElem.rel = "noopener noreferrer";
    linkElem.style.visibility = "hidden";
    linkElem.style.display = "none";
    onInteraction(linkElem, (e) => {
        var _a;
        const url = (_a = linkElem.href) !== null && _a !== void 0 ? _a : geniusUrl;
        if (!url || e instanceof MouseEvent)
            return;
        if (!e.ctrlKey && !e.altKey)
            openInTab(url);
    }, {
        preventDefault: false,
        stopPropagation: false,
    });
    setInnerHtml(linkElem, await resourceAsString("icon-lyrics"));
    (_a = linkElem.querySelector("svg")) === null || _a === void 0 ? void 0 : _a.classList.add("bytm-generic-btn-img");
    onInteraction(linkElem, async (e) => {
        if (e.ctrlKey || e.altKey) {
            e.preventDefault();
            e.stopImmediatePropagation();
            const search = await showPrompt({ type: "prompt", message: t("open_lyrics_search_prompt") });
            if (search && search.length > 0)
                openInTab(`https://genius.com/search?q=${encodeURIComponent(search)}`);
        }
    }, {
        preventDefault: false,
        stopPropagation: false,
    });
    return linkElem;
}
/** Splits a video title that contains a hyphen into an artist and song */
function splitVideoTitle(title) {
    const [artist, ...rest] = title.split("-").map((v, i) => i < 2 ? v.trim() : v);
    return { artist, song: rest.join("-") };
}//#region init queue btns
/** Initializes the queue buttons */
async function initQueueButtons() {
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
        let addedBtnsCount = 0;
        queueItems.forEach(itm => {
            if (itm.classList.contains("bytm-has-btns"))
                return;
            itm.classList.add("bytm-has-btns");
            addQueueButtons(itm, ".flex-columns", "genericList", ["bytm-generic-list-queue-btn-container"], "afterParent");
            addedBtnsCount++;
        });
        addedBtnsCount > 0 &&
            log(`Added buttons to ${addedBtnsCount} new "generic song list" ${UserUtils.autoPlural("item", addedBtnsCount)} in list`, listElem);
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
            debounce: 150,
            listener: checkAddGenericBtns,
        });
        siteEvents.on("pathChanged", () => {
            const songLists = document.querySelectorAll(listSelector);
            if (songLists.length > 0)
                checkAddGenericBtns(songLists);
        });
    }
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
async function addQueueButtons(queueItem, containerParentSelector = ".song-info", listType = "currentQueue", classes = [], insertPosition = "child") {
    const queueBtnsCont = document.createElement("div");
    queueBtnsCont.classList.add(...["bytm-queue-btn-container", ...classes]);
    const lyricsIconUrl = await getResourceUrl("icon-lyrics");
    const deleteIconUrl = await getResourceUrl("icon-delete");
    const spinnerIconUrl = await getResourceUrl("icon-spinner");
    await UserUtils.preloadImages([lyricsIconUrl, deleteIconUrl, spinnerIconUrl]);
    //#region lyrics btn
    let lyricsBtnElem;
    if (getFeature("lyricsQueueButton")) {
        lyricsBtnElem = await createLyricsBtn(undefined, false);
        lyricsBtnElem.classList.add("bytm-song-list-item-btn");
        lyricsBtnElem.ariaLabel = lyricsBtnElem.title = t("open_lyrics");
        lyricsBtnElem.style.display = "inline-flex";
        lyricsBtnElem.style.visibility = "initial";
        lyricsBtnElem.style.pointerEvents = "initial";
        lyricsBtnElem.role = "link";
        lyricsBtnElem.tabIndex = 0;
        onInteraction(lyricsBtnElem, async (e) => {
            var _a, _b;
            e.preventDefault();
            e.stopImmediatePropagation();
            let song, artist;
            if (listType === "currentQueue") {
                const songInfo = queueItem.querySelector(".song-info");
                if (!songInfo)
                    return error("Couldn't find song info element in queue item", queueItem);
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
                if (!artist) {
                    // new playlist design
                    artistEl = document.querySelector("ytmusic-responsive-header-renderer .strapline a.yt-formatted-string[href]");
                    artist = artistEl === null || artistEl === void 0 ? void 0 : artistEl.textContent;
                }
            }
            else
                return error("Invalid list type:", listType);
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
                const imgEl = lyricsBtnElem === null || lyricsBtnElem === void 0 ? void 0 : lyricsBtnElem.querySelector("img, svg");
                if (!cachedLyricsEntry) {
                    queueItem.setAttribute("data-bytm-loading", "");
                    if (imgEl) {
                        if (imgEl.tagName === "IMG") {
                            imgEl.src = await getResourceUrl("icon-spinner");
                            imgEl === null || imgEl === void 0 ? void 0 : imgEl.classList.add("bytm-spinner");
                        }
                        else if (lyricsBtnElem) {
                            setInnerHtml(lyricsBtnElem, await resourceAsString("icon-spinner"));
                            (_a = lyricsBtnElem.querySelector("svg")) === null || _a === void 0 ? void 0 : _a.classList.add("bytm-generic-btn-img", "bytm-spinner");
                        }
                    }
                }
                lyricsUrl = (_b = cachedLyricsEntry === null || cachedLyricsEntry === void 0 ? void 0 : cachedLyricsEntry.url) !== null && _b !== void 0 ? _b : await fetchLyricsUrlTop(artistsSan, songSan);
                if (lyricsUrl) {
                    emitInterface("bytm:lyricsLoaded", {
                        type: "queue",
                        artists: artist,
                        title: song,
                        url: lyricsUrl,
                    });
                }
                const resetImgElem = async () => {
                    var _a;
                    if (imgEl) {
                        if (imgEl.tagName === "IMG") {
                            imgEl.src = lyricsIconUrl;
                            imgEl === null || imgEl === void 0 ? void 0 : imgEl.classList.remove("bytm-spinner");
                        }
                        else if (lyricsBtnElem) {
                            setInnerHtml(lyricsBtnElem, await resourceAsString("icon-lyrics"));
                            (_a = lyricsBtnElem.querySelector("svg")) === null || _a === void 0 ? void 0 : _a.classList.add("bytm-generic-btn-img");
                        }
                    }
                };
                if (!cachedLyricsEntry) {
                    queueItem.removeAttribute("data-bytm-loading");
                    // so the new image doesn't "blink"
                    setTimeout(resetImgElem, 100);
                }
                if (!lyricsUrl) {
                    resetImgElem();
                    if (await showPrompt({ type: "confirm", message: t("lyrics_not_found_confirm_open_search") }))
                        openInTab(`https://genius.com/search?q=${encodeURIComponent(`${artistsSan} - ${songSan}`)}`);
                    return;
                }
            }
            lyricsUrl && openInTab(lyricsUrl);
        });
    }
    //#region delete btn
    let deleteBtnElem;
    if (getFeature("deleteFromQueueButton")) {
        deleteBtnElem = document.createElement("a");
        deleteBtnElem.ariaLabel = deleteBtnElem.title = (listType === "currentQueue" ? t("remove_from_queue") : t("delete_from_list"));
        deleteBtnElem.classList.add("ytmusic-player-bar", "bytm-delete-from-queue", "bytm-generic-btn", "bytm-song-list-item-btn");
        deleteBtnElem.role = "button";
        deleteBtnElem.tabIndex = 0;
        deleteBtnElem.style.visibility = "initial";
        const delImgElem = document.createElement("img");
        delImgElem.classList.add("bytm-generic-btn-img");
        delImgElem.src = deleteIconUrl;
        onInteraction(deleteBtnElem, async (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            delImgElem.src = spinnerIconUrl;
            delImgElem.classList.add("bytm-spinner");
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
                    info("Couldn't find three dots button in queue item, trying to open the context menu manually");
                    queueItem.dispatchEvent(new MouseEvent("contextmenu", { bubbles: true, cancelable: false }));
                }
                queuePopupCont = document.querySelector("ytmusic-app ytmusic-popup-container tp-yt-iron-dropdown");
                queuePopupCont === null || queuePopupCont === void 0 ? void 0 : queuePopupCont.setAttribute("data-bytm-hidden", "true");
                await UserUtils.pauseFor(15);
                delImgElem.src = deleteIconUrl;
                delImgElem.classList.remove("bytm-spinner");
                const removeFromQueueBtn = queuePopupCont === null || queuePopupCont === void 0 ? void 0 : queuePopupCont.querySelector("tp-yt-paper-listbox ytmusic-menu-service-item-renderer:nth-of-type(3)");
                removeFromQueueBtn === null || removeFromQueueBtn === void 0 ? void 0 : removeFromQueueBtn.click();
                // queue items aren't removed automatically outside of the current queue
                if (removeFromQueueBtn && listType === "genericList") {
                    await UserUtils.pauseFor(200);
                    clearInner(queueItem);
                    queueItem.remove();
                }
                if (!removeFromQueueBtn) {
                    error("Couldn't find 'remove from queue' button in queue item three dots menu.\nPlease make sure all autoplay restrictions on your browser's side are disabled for this page.");
                    dotsBtnElem === null || dotsBtnElem === void 0 ? void 0 : dotsBtnElem.click();
                    delImgElem.src = await getResourceUrl("icon-error");
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
        });
        deleteBtnElem.appendChild(delImgElem);
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
}//#region init vol features
/** Initializes all volume-related features */
async function initVolumeFeatures() {
    let listenerOnce = false;
    // sliderElem is not technically an input element but behaves pretty much the same
    const listener = async (type, sliderElem) => {
        const volSliderCont = document.createElement("div");
        volSliderCont.classList.add("bytm-vol-slider-cont");
        if (getFeature("volumeSliderScrollStep") !== featInfo.volumeSliderScrollStep.default)
            initScrollStep(volSliderCont, sliderElem);
        UserUtils.addParent(sliderElem, volSliderCont);
        if (getFeature("volumeSliderLabel"))
            await addVolumeSliderLabel(type, sliderElem, volSliderCont);
        setVolSliderStep(sliderElem);
        if (getFeature("volumeSharedBetweenTabs"))
            sliderElem.addEventListener("change", () => sharedVolumeChanged(Number(sliderElem.value)));
        if (listenerOnce)
            return;
        listenerOnce = true;
        // the following are only run once:
        setInitialTabVolume(sliderElem);
        if (typeof getFeature("volumeSliderSize") === "number")
            setVolSliderSize();
        if (getFeature("volumeSharedBetweenTabs"))
            checkSharedVolume();
    };
    addSelectorListener("playerBarRightControls", "tp-yt-paper-slider#volume-slider", {
        listener: (el) => listener("normal", el),
    });
    let sizeSmOnce = false;
    const onResize = () => {
        if (sizeSmOnce || window.innerWidth >= 1150)
            return;
        sizeSmOnce = true;
        addSelectorListener("playerBarRightControls", "ytmusic-player-expanding-menu tp-yt-paper-slider#expand-volume-slider", {
            listener: (el) => listener("expand", el),
        });
    };
    window.addEventListener("resize", UserUtils.debounce(onResize, 150));
    waitVideoElementReady().then(onResize);
    onResize();
}
//#region scroll step
/** Initializes the volume slider scroll step feature */
function initScrollStep(volSliderCont, sliderElem) {
    for (const evtName of ["wheel", "scroll", "mousewheel", "DOMMouseScroll"]) {
        volSliderCont.addEventListener(evtName, (e) => {
            var _a, _b;
            e.preventDefault();
            // cancels all the other events that would be fired
            e.stopImmediatePropagation();
            const delta = Number((_b = (_a = e.deltaY) !== null && _a !== void 0 ? _a : e === null || e === void 0 ? void 0 : e.detail) !== null && _b !== void 0 ? _b : 1);
            if (isNaN(delta))
                return warn("Invalid scroll delta:", delta);
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
async function addVolumeSliderLabel(type, sliderElem, sliderContainer) {
    const labelContElem = document.createElement("div");
    labelContElem.classList.add("bytm-vol-slider-label");
    const volShared = getFeature("volumeSharedBetweenTabs");
    if (volShared) {
        const linkIconHtml = await resourceAsString("icon-link");
        if (linkIconHtml) {
            const linkIconElem = document.createElement("div");
            linkIconElem.classList.add("bytm-vol-slider-shared");
            setInnerHtml(linkIconElem, linkIconHtml);
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
        const labelElem2 = document.querySelectorAll(".bytm-vol-slider-label div.label");
        for (const el of labelElem2)
            el.textContent = getLabel(sliderElem.value);
    };
    sliderElem.addEventListener("change", updateLabel);
    siteEvents.on("configChanged", updateLabel);
    addSelectorListener("playerBarRightControls", type === "normal" ? ".bytm-vol-slider-cont" : "ytmusic-player-expanding-menu .bytm-vol-slider-cont", {
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
}
//#region volume slider size
/** Sets the volume slider to a set size */
function setVolSliderSize() {
    const size = getFeature("volumeSliderSize");
    if (typeof size !== "number" || isNaN(Number(size)))
        return error("Invalid volume slider size:", size);
    setGlobalCssVar("vol-slider-size", `${size}px`);
    addStyleFromResource("css-vol_slider_size");
}
//#region volume slider step
/** Sets the `step` attribute of the volume slider */
function setVolSliderStep(sliderElem) {
    sliderElem.setAttribute("step", String(getFeature("volumeSliderStep")));
}
//#region shared volume
/** Saves the shared volume level to persistent storage */
async function sharedVolumeChanged(vol) {
    try {
        await GM.setValue("bytm-shared-volume", String(lastCheckedSharedVolume = ignoreVal = vol));
    }
    catch (err) {
        error("Couldn't save shared volume level due to an error:", err);
    }
}
let ignoreVal = -1;
let lastCheckedSharedVolume = -1;
/** Only call once as this calls itself after a timeout! - Checks if the shared volume has changed and updates the volume slider accordingly */
async function checkSharedVolume() {
    try {
        const vol = await GM.getValue("bytm-shared-volume");
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
}
//#region initial volume
/** Sets the volume slider to a set volume level when the session starts */
async function setInitialTabVolume(sliderElem) {
    const reloadTabVol = Number(await GM.getValue("bytm-reload-tab-volume", 0));
    GM.deleteValue("bytm-reload-tab-volume").catch(() => void 0);
    if ((isNaN(reloadTabVol) || reloadTabVol === 0) && !getFeature("setInitialTabVolume"))
        return;
    await waitVideoElementReady();
    const initialVol = Math.round(!isNaN(reloadTabVol) && reloadTabVol > 0 ? reloadTabVol : getFeature("initialTabVolumeLevel"));
    if (isNaN(initialVol) || initialVol < 0 || initialVol > 100)
        return;
    if (getFeature("volumeSharedBetweenTabs")) {
        lastCheckedSharedVolume = ignoreVal = initialVol;
        if (getFeature("volumeSharedBetweenTabs"))
            GM.setValue("bytm-shared-volume", String(initialVol)).catch((err) => error("Couldn't save shared volume level due to an error:", err));
    }
    sliderElem.value = String(initialVol);
    sliderElem.dispatchEvent(new Event("change", { bubbles: true }));
    log(`Set initial tab volume to ${initialVol}%${reloadTabVol > 0 ? " (from GM storage)" : " (from configuration)"}`);
}//#region misc
/** No-operation function used when `reloadRequired` is set to `false` to explicitly indicate that no `enable` function is needed */
const noop = () => void 0;
/** Creates an HTML string for the given adornment properties */
const getAdornHtml = async (className, title, resource, extraAttributes) => {
    var _a;
    title = title ? await UserUtils.consumeStringGen(title) : undefined;
    extraAttributes = extraAttributes ? await UserUtils.consumeStringGen(extraAttributes) : undefined;
    return `<span class="${className} bytm-adorn-icon" ${title ? `title="${title}" aria-label="${title}"` : ""}${extraAttributes ? ` ${extraAttributes}` : ""}>${(_a = await resourceAsString(resource)) !== null && _a !== void 0 ? _a : ""}</span>`;
};
/** Combines multiple async functions or promises that resolve with an adornment HTML string into a single string */
const combineAdornments = (adornments) => new Promise(async (resolve) => {
    const sortedAdornments = adornments.sort((a, b) => {
        const aIndex = adornmentOrder.get(a) ? adornmentOrder.get(a) : -1;
        const bIndex = adornmentOrder.has(b) ? adornmentOrder.get(b) : -1;
        return aIndex - bIndex;
    });
    const html = [];
    for (const adornment of sortedAdornments) {
        const val = typeof adornment === "function"
            ? await adornment()
            : await adornment;
        val && html.push(val);
    }
    resolve(html.join(""));
});
/** Decoration elements that can be added next to the label */
const adornments = {
    advanced: async () => getAdornHtml("bytm-advanced-mode-icon", t("advanced_mode"), "icon-advanced_mode"),
    experimental: async () => getAdornHtml("bytm-experimental-icon", t("experimental_feature"), "icon-experimental"),
    globe: async () => getAdornHtml("bytm-locale-icon", undefined, "icon-globe_small"),
    alert: async (title) => getAdornHtml("bytm-warning-icon", title, "icon-error", "role=\"alert\""),
    reload: async () => getFeature("advancedMode") ? getAdornHtml("bytm-reload-icon", t("feature_requires_reload"), "icon-reload") : undefined,
};
/** Order of adornment elements in the {@linkcode combineAdornments()} function */
const adornmentOrder = new Map();
adornmentOrder.set(adornments.alert, 0);
adornmentOrder.set(adornments.experimental, 1);
adornmentOrder.set(adornments.globe, 2);
adornmentOrder.set(adornments.reload, 3);
adornmentOrder.set(adornments.advanced, 4);
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
    locale: () => Object.entries(locales)
        .reduce((a, [locale, { name }]) => {
        return [...a, {
                value: locale,
                label: name,
            }];
    }, [])
        .sort((a, b) => a.label.localeCompare(b.label)),
    colorLightness: () => [
        { value: "darker", label: t("color_lightness_darker") },
        { value: "normal", label: t("color_lightness_normal") },
        { value: "lighter", label: t("color_lightness_lighter") },
    ],
};
//#region renderers
/** Renders a long number with a thousands separator */
function renderNumberVal(val, maximumFractionDigits = 0) {
    return Number(val).toLocaleString(getLocale().replace(/_/g, "-"), {
        style: "decimal",
        maximumFractionDigits,
    });
}
//#region # features
/**
 * Contains all possible features with their default values and other configuration.
 *
 * **Required props:**
 * <!------------------------------------------------------------------------------------------------------------------------------------------------------------------>
 * | Property                       | Description                                                                                                                      |
 * | :----------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
 * | `type: string`                 | Type of the feature configuration element - use autocomplete or check `FeatureTypeProps` in `src/types.ts`                       |
 * | `category: string`             | Category of the feature - use autocomplete or check `FeatureCategory` in `src/types.ts`                                          |
 * | `default: unknown`             | Default value of the feature - type of the value depends on the given `type`                                                     |
 * | `enable(value: unknown): void` | (required if reloadRequired = false) - function that will be called when the feature is enabled / initialized for the first time |
 * <!------------------------------------------------------------------------------------------------------------------------------------------------------------------>
 *
 *
 * **Optional props:**
 * <!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
 * | Property                                                           | Description                                                                                                                                         |
 * | :----------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------|
 * | `disable(newValue: unknown): void`                                 | For type `toggle` only - function that will be called when the feature is disabled - can be a synchronous or asynchronous function                  |
 * | `change(key: string, prevValue: unknown, newValue: unknown): void` | For types `number`, `select`, `slider` and `hotkey` only - function that will be called when the value is changed                                   |
 * | `click(): void`                                                    | For type `button` only - function that will be called when the button is clicked                                                                    |
 * | `helpText: string \| () => string`                                 | Function that returns an HTML string or the literal string itself that will be the help text for this feature - writing as function is useful for pluralizing or inserting values into the translation at runtime - if not set, translation with key `feature_helptext_featureKey` will be used instead, if available |
 * | `textAdornment(): string \| Promise<string>`                       | Function that returns an HTML string that will be appended to the text in the config menu as an adornment element                                   |
 * | `unit: string \| (val: number) => string`                          | For types `number` or `slider` only - The unit text that is displayed next to the input element, i.e. " px" - a leading space need to be added too! |
 * | `min: number`                                                      | For types `number` or `slider` only - Overwrites the default of the `min` property of the HTML input element                                        |
 * | `max: number`                                                      | For types `number` or `slider` only - Overwrites the default of the `max` property of the HTML input element                                        |
 * | `step: number`                                                     | For types `number` or `slider` only - Overwrites the default of the `step` property of the HTML input element                                       |
 * | `options: SelectOption[] \| () => SelectOption[]`                  | For type `select` only - function that returns an array of objects with `value` and `label` properties                                              |
 * | `reloadRequired: boolean`                                          | If true (default), the page needs to be reloaded for the changes to take effect - if false, `enable()` needs to be provided                         |
 * | `advanced: boolean`                                                | If true, the feature will only be shown if the advanced mode feature has been turned on                                                             |
 * | `hidden: boolean`                                                  | If true, the feature will not be shown in the settings - default is undefined (false)                                                               |
 * | `valueHidden: boolean`                                             | If true, the value of the feature will be hidden in the settings and via the plugin interface - default is undefined (false)                        |
 * | `normalize(val: unknown): unknown`                                 | Function that will be called to normalize the value before it is saved - useful for trimming strings or other simple operations                     |
 * | `renderValue(val: string): string`                                 | If provided, is used to render the value's label in the config menu                                                                                 |
 * <!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
 *
 * TODO: go through all features and set as many as possible to reloadRequired = false
 */
const featInfo = {
    //#region cat:layout
    watermarkEnabled: {
        type: "toggle",
        category: "layout",
        default: true,
        textAdornment: adornments.reload,
    },
    removeShareTrackingParam: {
        type: "toggle",
        category: "layout",
        default: true,
        textAdornment: adornments.reload,
    },
    removeShareTrackingParamSites: {
        type: "select",
        category: "layout",
        options: options.siteSelection,
        default: "all",
        advanced: true,
        textAdornment: () => combineAdornments([adornments.advanced, adornments.reload]),
    },
    fixSpacing: {
        type: "toggle",
        category: "layout",
        default: true,
        advanced: true,
        textAdornment: () => combineAdornments([adornments.advanced, adornments.reload]),
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
        textAdornment: adornments.reload,
    },
    thumbnailOverlayShowIndicator: {
        type: "toggle",
        category: "layout",
        default: true,
        textAdornment: adornments.reload,
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
        textAdornment: () => combineAdornments([adornments.advanced, adornments.reload]),
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
        textAdornment: () => combineAdornments([adornments.advanced, adornments.reload]),
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
        textAdornment: () => combineAdornments([adornments.advanced, adornments.reload]),
    },
    showVotes: {
        type: "toggle",
        category: "layout",
        default: true,
        textAdornment: adornments.reload,
    },
    watchPageFullSize: {
        type: "toggle",
        category: "layout",
        default: true,
        textAdornment: adornments.reload,
    },
    // archived idea for future version (shows a bar under the like/dislike buttons that shows the ratio of likes to dislikes):
    // showVoteRatio: {
    //   type: "select",
    //   category: "layout",
    //   options: () => [
    //     { value: "disabled", label: t("vote_ratio_disabled") },
    //     { value: "greenRed", label: t("vote_ratio_green_red") },
    //     { value: "blueGray", label: t("vote_ratio_blue_gray") },
    //   ],
    //   default: "disabled",
    //   textAdornment: adornments.reload,
    // },
    //#region cat:volume
    volumeSliderLabel: {
        type: "toggle",
        category: "volume",
        default: true,
        textAdornment: adornments.reload,
    },
    volumeSliderSize: {
        type: "number",
        category: "volume",
        min: 50,
        max: 500,
        step: 5,
        default: 150,
        unit: "px",
        textAdornment: adornments.reload,
    },
    volumeSliderStep: {
        type: "slider",
        category: "volume",
        min: 1,
        max: 25,
        default: 2,
        unit: "%",
        textAdornment: adornments.reload,
    },
    volumeSliderScrollStep: {
        type: "slider",
        category: "volume",
        min: 1,
        max: 25,
        default: 4,
        unit: "%",
        textAdornment: adornments.reload,
    },
    volumeSharedBetweenTabs: {
        type: "toggle",
        category: "volume",
        default: false,
        textAdornment: adornments.reload,
    },
    setInitialTabVolume: {
        type: "toggle",
        category: "volume",
        default: false,
        textAdornment: () => getFeature("volumeSharedBetweenTabs")
            ? combineAdornments([adornments.alert(t("feature_warning_setInitialTabVolume_volumeSharedBetweenTabs_incompatible").replace(/"/g, "'")), adornments.reload])
            : adornments.reload(),
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
            ? combineAdornments([adornments.alert(t("feature_warning_setInitialTabVolume_volumeSharedBetweenTabs_incompatible").replace(/"/g, "'")), adornments.reload])
            : adornments.reload(),
        reloadRequired: false,
        enable: noop,
    },
    //#region cat:song lists
    lyricsQueueButton: {
        type: "toggle",
        category: "songLists",
        default: true,
        textAdornment: adornments.reload,
    },
    deleteFromQueueButton: {
        type: "toggle",
        category: "songLists",
        default: true,
        textAdornment: adornments.reload,
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
        textAdornment: () => combineAdornments([adornments.advanced, adornments.reload]),
    },
    scrollToActiveSongBtn: {
        type: "toggle",
        category: "songLists",
        default: true,
        textAdornment: adornments.reload,
    },
    clearQueueBtn: {
        type: "toggle",
        category: "songLists",
        default: true,
        textAdornment: adornments.reload,
    },
    aboveQueueBtnsSticky: {
        type: "toggle",
        category: "songLists",
        default: true,
        advanced: true,
        textAdornment: () => combineAdornments([adornments.advanced, adornments.reload]),
    },
    //#region cat:behavior
    disableBeforeUnloadPopup: {
        type: "toggle",
        category: "behavior",
        default: false,
        textAdornment: adornments.reload,
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
        textAdornment: adornments.reload,
    },
    rememberSongTimeSites: {
        type: "select",
        category: "behavior",
        options: options.siteSelection,
        default: "all",
        textAdornment: adornments.reload,
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
        min: 3,
        max: 30,
        step: 0.5,
        default: 10,
        unit: "s",
        advanced: true,
        textAdornment: adornments.advanced,
        reloadRequired: false,
        enable: noop,
    },
    autoScrollToActiveSongMode: {
        type: "select",
        category: "behavior",
        options: () => [
            { value: "never", label: t("auto_scroll_to_active_song_mode_never") },
            { value: "initialPageLoad", label: t("auto_scroll_to_active_song_mode_initial_page_load") },
            { value: "videoChangeAll", label: t("auto_scroll_to_active_song_mode_video_change_all") },
            { value: "videoChangeManual", label: t("auto_scroll_to_active_song_mode_video_change_manual") },
            { value: "videoChangeAuto", label: t("auto_scroll_to_active_song_mode_video_change_auto") },
        ],
        default: "videoChangeManual",
        reloadRequired: false,
        enable: noop,
    },
    //#region cat:input
    arrowKeySupport: {
        type: "toggle",
        category: "input",
        default: true,
        reloadRequired: false,
        enable: noop,
    },
    arrowKeySkipBy: {
        type: "slider",
        category: "input",
        min: 0.5,
        max: 30,
        step: 0.5,
        default: 5,
        unit: "s",
        reloadRequired: false,
        enable: noop,
    },
    frameSkip: {
        type: "toggle",
        category: "input",
        default: true,
        reloadRequired: false,
        enable: noop,
    },
    frameSkipWhilePlaying: {
        type: "toggle",
        category: "input",
        default: false,
        reloadRequired: false,
        enable: noop,
        advanced: true,
        textAdornment: adornments.advanced,
    },
    frameSkipAmount: {
        type: "number",
        category: "input",
        min: 0,
        max: 1,
        step: 0.0001,
        default: 0.0417,
        reloadRequired: false,
        enable: noop,
        advanced: true,
        textAdornment: adornments.advanced,
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
        textAdornment: adornments.reload,
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
        textAdornment: adornments.reload,
    },
    autoLikeChannelToggleBtn: {
        type: "toggle",
        category: "input",
        default: true,
        reloadRequired: false,
        enable: noop,
        advanced: true,
        textAdornment: adornments.advanced,
    },
    // TODO(v2.2):
    // autoLikePlayerBarToggleBtn: {
    //   type: "toggle",
    //   category: "input",
    //   default: false,
    //   textAdornment: adornments.reload,
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
    //#region cat:lyrics
    geniusLyrics: {
        type: "toggle",
        category: "lyrics",
        default: true,
        textAdornment: adornments.reload,
    },
    errorOnLyricsNotFound: {
        type: "toggle",
        category: "lyrics",
        default: false,
        reloadRequired: false,
        enable: noop,
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
        default: 5000,
        min: 100,
        max: 50000,
        step: 100,
        unit: (val) => ` ${tp("unit_entries", val)}`,
        renderValue: renderNumberVal,
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
        async click() {
            const entries = getLyricsCache().length;
            const formattedEntries = entries.toLocaleString(getLocale(), { style: "decimal", maximumFractionDigits: 0 });
            if (await showPrompt({ type: "confirm", message: tp("lyrics_clear_cache_confirm_prompt", entries, formattedEntries) })) {
                await clearLyricsCache();
                await showPrompt({ type: "alert", message: t("lyrics_clear_cache_success") });
            }
        },
        advanced: true,
        textAdornment: adornments.advanced,
    },
    // advancedLyricsFilter: {
    //   type: "toggle",
    //   category: "lyrics",
    //   default: false,
    //   change: () => setTimeout(async () => await showPrompt({ type: "confirm", message: t("lyrics_cache_changed_clear_confirm") }) && clearLyricsCache(), 200),
    //   advanced: true,
    //   textAdornment: adornments.experimental,
    //   reloadRequired: false,
    //   enable: noop,
    // },
    //#region cat:integrations
    disableDarkReaderSites: {
        type: "select",
        category: "integrations",
        options: options.siteSelectionOrNone,
        default: "all",
        advanced: true,
        textAdornment: () => combineAdornments([adornments.advanced, adornments.reload]),
    },
    sponsorBlockIntegration: {
        type: "toggle",
        category: "integrations",
        default: true,
        advanced: true,
        textAdornment: () => combineAdornments([adornments.advanced, adornments.reload]),
    },
    themeSongIntegration: {
        type: "toggle",
        category: "integrations",
        default: false,
        textAdornment: adornments.reload,
    },
    themeSongLightness: {
        type: "select",
        category: "integrations",
        options: options.colorLightness,
        default: "darker",
        textAdornment: adornments.reload,
    },
    //#region cat:plugins
    openPluginList: {
        type: "button",
        category: "plugins",
        default: undefined,
        click: () => getPluginListDialog().then(d => d.open()),
    },
    initTimeout: {
        type: "number",
        category: "plugins",
        min: 3,
        max: 30,
        default: 8,
        step: 0.1,
        unit: "s",
        advanced: true,
        textAdornment: () => combineAdornments([adornments.advanced, adornments.reload]),
    },
    //#region cat:general
    locale: {
        type: "select",
        category: "general",
        options: options.locale,
        default: getPreferredLocale(),
        textAdornment: () => combineAdornments([adornments.globe, adornments.reload]),
    },
    localeFallback: {
        type: "toggle",
        category: "general",
        default: true,
        advanced: true,
        textAdornment: () => combineAdornments([adornments.advanced, adornments.reload]),
    },
    versionCheck: {
        type: "toggle",
        category: "general",
        default: true,
        textAdornment: adornments.reload,
    },
    checkVersionNow: {
        type: "button",
        category: "general",
        click: () => doVersionCheck(true),
    },
    numbersFormat: {
        type: "select",
        category: "general",
        options: () => [
            { value: "long", label: `${formatNumber(12345678, "long")} (${t("votes_format_long")})` },
            { value: "short", label: `${formatNumber(12345678, "short")} (${t("votes_format_short")})` },
        ],
        default: "short",
        reloadRequired: false,
        enable: noop,
    },
    toastDuration: {
        type: "slider",
        category: "general",
        min: 0,
        max: 15,
        default: 4,
        step: 0.5,
        unit: "s",
        reloadRequired: false,
        advanced: true,
        textAdornment: adornments.advanced,
        enable: noop,
        change: () => showIconToast({
            message: t("example_toast"),
            iconSrc: getResourceUrl(`img-logo${mode === "development" ? "_dev" : ""}`),
        }),
    },
    showToastOnGenericError: {
        type: "toggle",
        category: "general",
        default: true,
        advanced: true,
        textAdornment: () => combineAdornments([adornments.advanced, adornments.reload]),
    },
    resetConfig: {
        type: "button",
        category: "general",
        click: promptResetConfig,
        textAdornment: adornments.reload,
    },
    resetEverything: {
        type: "button",
        category: "general",
        click: async () => {
            if (await showPrompt({
                type: "confirm",
                message: t("reset_everything_confirm"),
            })) {
                await getStoreSerializer().resetStoresData();
                await reloadTab();
            }
        },
        advanced: true,
        textAdornment: () => combineAdornments([adornments.advanced, adornments.reload]),
    },
    logLevel: {
        type: "select",
        category: "general",
        options: () => [
            { value: LogLevel.Debug, label: t("log_level_debug") },
            { value: LogLevel.Info, label: t("log_level_info") },
        ],
        default: LogLevel.Info,
        textAdornment: adornments.reload,
    },
    advancedMode: {
        type: "toggle",
        category: "general",
        default: false,
        textAdornment: () => getFeature("advancedMode") ? adornments.advanced() : undefined,
        change: (_key, prevValue, newValue) => prevValue !== newValue &&
            emitSiteEvent("recreateCfgMenu"),
    },
};/** If this number is incremented, the features object data will be migrated to the new format */
const formatVersion = 10;
const defaultData = UserUtils.purifyObj(Object.keys(featInfo)
    // @ts-ignore
    .filter((ftKey) => { var _a; return ((_a = featInfo === null || featInfo === void 0 ? void 0 : featInfo[ftKey]) === null || _a === void 0 ? void 0 : _a.default) !== undefined; })
    .reduce((acc, key) => {
    var _a;
    // @ts-ignore
    acc[key] = (_a = featInfo === null || featInfo === void 0 ? void 0 : featInfo[key]) === null || _a === void 0 ? void 0 : _a.default;
    return acc;
}, {}));
/** Config data format migration dictionary */
const migrations = {
    // 1 -> 2 (<=v1.0)
    2: (oldData) => {
        if (typeof oldData !== "object" || oldData === null)
            return defaultData;
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
            "numbersFormat", "toastDuration",
            "initTimeout",
            // forgot to add this to the migration when adding the feature way before so now will have to do:
            "volumeSliderLabel",
        ]), [
            { key: "rememberSongTimeSites", oldDefault: "ytm" },
            { key: "volumeSliderScrollStep", oldDefault: 10 },
        ]);
        "removeUpgradeTab" in newData && delete newData.removeUpgradeTab;
        "advancedLyricsFilter" in newData && delete newData.advancedLyricsFilter;
        return newData;
    },
    // TODO(v2.2): use default for "autoLikePlayerBarToggleBtn"
    // TODO(v2.2): set autoLikeChannels to true on migration once feature is fully implemented
    // 6 -> 7 (v2.1-dev)
    7: (oldData) => {
        const newData = useNewDefaultIfUnchanged(useDefaultConfig(oldData, [
            "showToastOnGenericError", "sponsorBlockIntegration",
            "themeSongIntegration", "themeSongLightness",
            "errorOnLyricsNotFound", "openPluginList",
        ]), [
            { key: "toastDuration", oldDefault: 3 },
        ]);
        newData.arrowKeySkipBy = UserUtils.clamp(newData.arrowKeySkipBy, 0.5, 30);
        return newData;
    },
    // 7 -> 8 (v2.1)
    8: (oldData) => {
        if ("showVotesFormat" in oldData) {
            oldData.numbersFormat = oldData.showVotesFormat;
            delete oldData.showVotesFormat;
        }
        return useDefaultConfig(oldData, [
            "autoLikeChannels"
        ]);
    },
    // 8 -> 9 (v2.2)
    9: (oldData) => {
        oldData.locale = oldData.locale.replace("_", "-");
        if (oldData.locale === "ja-JA")
            oldData.locale = "ja-JP";
        if (oldData.locale === "en-GB")
            oldData.locale = "en-GB";
        return useDefaultConfig(oldData, [
            "resetEverything",
            // TODO(V2.2):
            // "autoLikePlayerBarToggleBtn",
        ]);
    },
    // 9 -> 10 (v2.3.0)
    10: (oldData) => useNewDefaultIfUnchanged(useDefaultConfig(oldData, [
        "aboveQueueBtnsSticky", "autoScrollToActiveSongMode",
        "frameSkip", "frameSkipWhilePlaying",
        "frameSkipAmount", "watchPageFullSize",
    ]), [
        { key: "lyricsCacheMaxSize", oldDefault: 2000 },
    ]),
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
const configStore = new UserUtils.DataStore({
    id: "bytm-config",
    formatVersion,
    defaultData,
    migrations,
    encodeData: (data) => canCompress ? UserUtils.compress(data, compressionFormat, "string") : data,
    decodeData: (data) => canCompress ? UserUtils.decompress(data, compressionFormat, "string") : data,
});
/** Initializes the DataStore instance and loads persistent data into memory. Returns a copy of the config object. */
async function initConfig() {
    canCompress = await compressionSupported();
    const oldFmtVer = Number(await GM.getValue(`_uucfgver-${configStore.id}`, NaN));
    // remove extraneous keys
    let data = fixCfgKeys(await configStore.loadData());
    await configStore.setData(data);
    log(`Initialized feature config DataStore with version ${configStore.formatVersion}`);
    if (isNaN(oldFmtVer))
        info("  !- Config data was initialized with default values");
    else if (oldFmtVer !== configStore.formatVersion) {
        try {
            await configStore.setData(data = fixCfgKeys(data));
            info(`  !- Config data was migrated from version ${oldFmtVer} to ${configStore.formatVersion}`);
        }
        catch (err) {
            error("  !- Config data migration failed, falling back to default data:", err);
            await configStore.setData(data = configStore.defaultData);
        }
    }
    emitInterface("bytm:configReady");
    return Object.assign({}, data);
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
    return configStore.getData();
}
/** Returns the value of the feature with the given key from the in-memory cache, as a copy */
function getFeature(key) {
    return configStore.getData()[key];
}
/** Saves the feature config synchronously to the in-memory cache and asynchronously to the persistent storage */
function setFeatures(featureConf) {
    const res = configStore.setData(featureConf);
    emitSiteEvent("configChanged", configStore.getData());
    info("Saved new feature config:", featureConf);
    return res;
}
/** Saves the default feature config synchronously to the in-memory cache and asynchronously to persistent storage */
function setDefaultFeatures() {
    const res = configStore.saveDefaultData();
    emitSiteEvent("configChanged", configStore.getData());
    info("Reset feature config to its default values");
    return res;
}
async function promptResetConfig() {
    if (await showPrompt({ type: "confirm", message: t("reset_config_confirm") })) {
        closeCfgMenu();
        enableDiscardBeforeUnload();
        await setDefaultFeatures();
        if (location.pathname.startsWith("/watch")) {
            const videoTime = await getVideoTime(0);
            const url = new URL(location.href);
            url.searchParams.delete("t");
            if (videoTime)
                url.searchParams.set("time_continue", String(videoTime));
            location.replace(url.href);
        }
        else
            await reloadTab();
    }
}
/** Clears the feature config from the persistent storage - since the cache will be out of whack, this should only be run before a site re-/unload */
async function clearConfig() {
    await configStore.deleteData();
    info("Deleted config from persistent storage");
}const { autoPlural, getUnsafeWindow, purifyObj, randomId, NanoEmitter } = UserUtils__namespace;
/**
 * All functions that can be called on the BYTM interface using `unsafeWindow.BYTM.functionName();` (or `const { functionName } = unsafeWindow.BYTM;`)
 * If prefixed with /\*🔒\*\/, the function is authenticated and requires a token to be passed as the first argument.
 */
const globalFuncs = purifyObj({
    // meta:
    /*🔒*/ getPluginInfo,
    // bytm-specific:
    getDomain,
    getResourceUrl,
    getSessionId,
    reloadTab,
    // dom:
    setInnerHtml,
    addSelectorListener,
    onInteraction,
    getVideoTime,
    getThumbnailUrl,
    getBestThumbnailUrl,
    waitVideoElementReady,
    getVideoElement,
    getVideoSelector,
    getCurrentMediaType,
    // translations:
    /*🔒*/ setLocale: setLocaleInterface,
    getLocale,
    hasKey,
    hasKeyFor,
    t,
    tp,
    tl,
    tlp,
    // feature config:
    /*🔒*/ getFeatures: getFeaturesInterface,
    /*🔒*/ saveFeatures: saveFeaturesInterface,
    getDefaultFeatures: () => JSON.parse(JSON.stringify(defaultData)),
    // lyrics:
    fetchLyricsUrlTop,
    getLyricsCacheEntry,
    sanitizeArtists,
    sanitizeSong,
    // auto-like:
    /*🔒*/ getAutoLikeData: getAutoLikeDataInterface,
    /*🔒*/ saveAutoLikeData: saveAutoLikeDataInterface,
    fetchVideoVotes,
    // components:
    createHotkeyInput,
    createToggleInput,
    createCircularBtn,
    createRipple,
    showToast,
    showIconToast,
    showPrompt,
    // other:
    formatNumber,
});
/** Initializes the BYTM interface */
function initInterface() {
    const props = Object.assign(Object.assign(Object.assign({ 
        // meta / constants
        mode,
        branch,
        host,
        buildNumber,
        initialParams,
        compressionFormat,
        sessionStorageAvailable }, scriptInfo), globalFuncs), { 
        // classes
        NanoEmitter,
        BytmDialog,
        ExImDialog,
        MarkdownDialog,
        // libraries
        UserUtils: UserUtils__namespace,
        compareVersions: compareVersions__namespace });
    for (const [key, value] of Object.entries(props))
        setGlobalProp(key, value);
    log("Initialized BYTM interface");
}
/** Sets a global property on the unsafeWindow.BYTM object - ⚠️ use with caution as these props can be accessed by any script on the page! */
function setGlobalProp(key, value) {
    // use unsafeWindow so the properties are available to plugins outside of the userscript's scope
    const win = getUnsafeWindow();
    if (typeof win.BYTM !== "object")
        win.BYTM = purifyObj({});
    win.BYTM[key] = value;
}
/** Emits an event on the BYTM interface */
function emitInterface(type, ...detail) {
    var _a;
    try {
        getUnsafeWindow().dispatchEvent(new CustomEvent(type, { detail: (_a = detail === null || detail === void 0 ? void 0 : detail[0]) !== null && _a !== void 0 ? _a : undefined }));
        //@ts-ignore
        emitOnPlugins(type, undefined, ...detail);
        log(`Emitted interface event '${type}'${detail.length > 0 && (detail === null || detail === void 0 ? void 0 : detail[0]) ? " with data:" : ""}`, ...detail);
    }
    catch (err) {
        error(`Couldn't emit interface event '${type}' due to an error:\n`, err);
    }
}
//#region register plugins
/** Map of plugin ID and all registered plugins */
const registeredPlugins = new Map();
/** Map of plugin ID to auth token for plugins that have been registered */
const registeredPluginTokens = new Map();
/** Initializes plugins that have been registered already. Needs to be run after `bytm:ready`! */
function initPlugins() {
    // TODO: check perms and ask user for initial activation
    const registerPlugin = (def) => {
        var _a, _b;
        try {
            const plKey = getPluginKey(def);
            if (registeredPlugins.has(plKey))
                throw new PluginError(`Failed to register plugin '${plKey}': Plugin with the same name and namespace is already registered`);
            const validationErrors = validatePluginDef(def);
            if (validationErrors)
                throw new PluginError(`Failed to register plugin${((_a = def === null || def === void 0 ? void 0 : def.plugin) === null || _a === void 0 ? void 0 : _a.name) ? ` '${(_b = def === null || def === void 0 ? void 0 : def.plugin) === null || _b === void 0 ? void 0 : _b.name}'` : ""} with invalid definition:\n- ${validationErrors.join("\n- ")}`);
            const events = new NanoEmitter({ publicEmit: true });
            const token = randomId(32, 36, true);
            registeredPlugins.set(plKey, {
                def: def,
                events,
            });
            registeredPluginTokens.set(plKey, token);
            info(`Successfully registered plugin '${plKey}'`);
            setTimeout(() => emitOnPlugins("pluginRegistered", (d) => sameDef(d, def), pluginDefToInfo(def)), 1);
            return {
                info: getPluginInfo(token, def),
                events,
                token,
            };
        }
        catch (err) {
            error(`Failed to register plugin '${getPluginKey(def)}':`, err instanceof PluginError ? err : new PluginError(String(err)));
            throw err;
        }
    };
    emitInterface("bytm:registerPlugin", (def) => registerPlugin(def));
    if (registeredPlugins.size > 0)
        log(`Registered ${registeredPlugins.size} ${autoPlural("plugin", registeredPlugins.size)}`);
}
/** Returns the registered plugins as an array of tuples with the items `[id: string, item: PluginItem]` */
function getRegisteredPlugins() {
    return [...registeredPlugins.entries()];
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
/** Checks whether the passed token is a valid auth token for any registered plugin and returns the plugin ID, else returns undefined */
function resolveToken(token) {
    var _a, _b;
    return typeof token === "string" && token.length > 0
        ? (_b = (_a = [...registeredPluginTokens.entries()]
            .find(([k, t]) => registeredPlugins.has(k) && token === t)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : undefined
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
};
/** Global SelectorObserver instances usable throughout the script for improved performance */
const globservers = {};
/** Whether all observers have been initialized */
let globserversReady = false;
//#region add listener func
/**
 * Interface function for adding listeners to the {@linkcode globservers}
 * If the observers haven't been initialized yet, the function will queue calls until the `bytm:observersReady` event is emitted
 * @param selector Relative to the observer's root element, so the selector can only start at of the root element's children at the earliest!
 * @param options Options for the listener
 * @template TElem The type of the element that the listener will be attached to. If set to `0`, the default type `HTMLElement` will be used.
 * @template TDomain This restricts which observers are available with the current domain
 */
function addSelectorListener(observerName, selector, options) {
    try {
        if (!globserversReady) {
            window.addEventListener("bytm:observersReady", () => addSelectorListener(observerName, selector, options), { once: true });
            return;
        }
        globservers[observerName].addListener(selector, options);
    }
    catch (err) {
        error(`Couldn't add listener to globserver '${observerName}':`, err);
    }
}
//#region init
/** Call after DOM load to initialize all SelectorObserver instances */
function initObservers() {
    try {
        //#region both sites
        //#region body
        // -> the entire <body> element - use sparingly due to performance impacts!
        //    enabled immediately
        globservers.body = new UserUtils.SelectorObserver(document.body, Object.assign(Object.assign({}, defaultObserverOptions), { defaultDebounce: 150, subtree: false }));
        globservers.body.enable();
        //#region bytmDialogContainer
        // -> the container for all BytmDialog instances
        //    enabled immediately
        const bytmDialogContainerSelector = "#bytm-dialog-container";
        globservers.bytmDialogContainer = new UserUtils.SelectorObserver(bytmDialogContainerSelector, Object.assign(Object.assign({}, defaultObserverOptions), { defaultDebounce: 100, subtree: true }));
        globservers.bytmDialogContainer.enable();
        switch (getDomain()) {
            case "ytm": {
                //#region YTM
                //#region browseResponse
                // -> for example the /channel/UC... page#
                //    enabled by "body"
                const browseResponseSelector = "ytmusic-browse-response";
                globservers.browseResponse = new UserUtils.SelectorObserver(browseResponseSelector, Object.assign(Object.assign({}, defaultObserverOptions), { defaultDebounce: 75, subtree: true }));
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
                //#region ytAppHeader
                // -> header of the page
                //    enabled by "ytdBrowse"
                const ytAppHeaderSelector = "#header tp-yt-app-header";
                globservers.ytAppHeader = new UserUtils.SelectorObserver(ytAppHeaderSelector, Object.assign(Object.assign({}, defaultObserverOptions), { defaultDebounce: 75, subtree: true }));
                globservers.ytdBrowse.addListener(ytAppHeaderSelector, {
                    listener: () => globservers.ytAppHeader.enable(),
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
        globserversReady = true;
        emitInterface("bytm:observersReady");
    }
    catch (err) {
        error("Failed to initialize observers:", err);
    }
}//#region vid elem
/** Returns the video element selector string based on the current domain */
function getVideoSelector() {
    return getDomain() === "ytm"
        ? "ytmusic-player video"
        : "#player-container ytd-player video";
}
/** Returns the video element based on the current domain */
function getVideoElement() {
    return document.querySelector(getVideoSelector());
}
let vidElemReady = false;
//#region vid time
/**
 * Returns the current video time in seconds, with the given {@linkcode precision} (2 decimal digits by default).
 * Rounds down if the precision is set to 0. The maximum average available precision on YTM is 6.
 * Dispatches mouse movement events in case the video time can't be read from the video or progress bar elements (needs a prior user interaction to work)
 * @returns Returns null if the video time is unavailable or no user interaction has happened prior to calling in case of the fallback behavior being used
 */
function getVideoTime(precision = 2) {
    return new Promise(async (res) => {
        if (!vidElemReady) {
            await waitVideoElementReady();
            vidElemReady = true;
        }
        const resolveWithVal = (time) => res(time && !isNaN(time)
            ? Number(precision <= 0 ? Math.floor(time) : time.toFixed(precision))
            : null);
        try {
            if (getDomain() === "ytm") {
                const vidElem = getVideoElement();
                if (vidElem && vidElem.readyState > 0)
                    return resolveWithVal(vidElem.currentTime);
                addSelectorListener("playerBar", "tp-yt-paper-slider#progress-bar tp-yt-paper-progress#sliderBar", {
                    listener: (pbEl) => resolveWithVal(!isNaN(Number(pbEl.value)) ? Math.floor(Number(pbEl.value)) : null)
                });
            }
            else if (getDomain() === "yt") {
                const vidElem = getVideoElement();
                if (vidElem && vidElem.readyState > 0)
                    return resolveWithVal(vidElem.currentTime);
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
                        resolveWithVal(Math.floor(videoTime));
                        mut.disconnect();
                    }
                    else
                        setTimeout(() => {
                            resolveWithVal(videoTime >= 0 && !isNaN(videoTime) ? Math.floor(videoTime) : null);
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
    });
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
//#region vid ready
/**
 * Waits for the video element to be in its readyState 4 / canplay state and returns it.
 * Could take a very long time to resolve if the `/watch` page isn't open.
 * Resolves immediately if the video element is already ready.
 */
function waitVideoElementReady() {
    return new Promise(async (res, rej) => {
        var _a;
        try {
            const vidEl = getVideoElement();
            if (vidEl && ((_a = vidEl === null || vidEl === void 0 ? void 0 : vidEl.readyState) !== null && _a !== void 0 ? _a : 0) > 0)
                return res(vidEl);
            if (!location.pathname.startsWith("/watch"))
                await siteEvents.once("watchIdChanged");
            addSelectorListener("body", getVideoSelector(), {
                listener(vidElem) {
                    // this is just after YT has finished doing their own shenanigans with the video time and volume
                    if (vidElem.readyState === 4)
                        res(vidElem);
                    else
                        vidElem.addEventListener("canplay", () => res(vidElem), { once: true });
                },
            });
        }
        catch (err) {
            rej(err);
        }
    });
}
//#region css utils
/**
 * Adds a style element to the DOM at runtime.
 * @param css The CSS stylesheet to add
 * @param ref A reference string to identify the style element - defaults to a random 5-character string
 * @param transform A function to transform the CSS before adding it to the DOM
 */
async function addStyle(css, ref, transform = (c) => c) {
    if (!UserUtils.isDomLoaded())
        throw new Error("DOM has not finished loading yet");
    const elem = UserUtils.addGlobalStyle(await transform(await UserUtils.consumeStringGen(css)));
    elem.id = `bytm-style-${ref !== null && ref !== void 0 ? ref : UserUtils.randomId(6, 36)}`;
    return elem;
}
/**
 * Adds a global style element with the contents fetched from the specified resource starting with `css-`
 * The CSS can be transformed using the provided function before being added to the DOM.
 */
async function addStyleFromResource(key, transform = (c) => c) {
    const css = await fetchCss(key);
    if (css) {
        await addStyle(String(transform(css)), key.slice(4));
        return true;
    }
    return false;
}
/** Sets a global CSS variable on the &lt;document&gt; element with the name `--bytm-global-${name}` */
function setGlobalCssVar(name, value) {
    document.documentElement.style.setProperty(`--bytm-global-${name.toLowerCase().trim()}`, String(value));
}
/** Sets multiple global CSS variables on the &lt;document&gt; element with the name `--bytm-global-${name}` */
function setGlobalCssVars(vars) {
    for (const [name, value] of Object.entries(vars))
        setGlobalCssVar(name, value);
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
 * Returns an identifier for the currently playing media type on YTM ("song" or "video").
 * Only works on YTM and will throw if {@linkcode waitVideoElementReady} hasn't been awaited yet.
 * On YT, it will always return "video".
 */
function getCurrentMediaType() {
    if (getDomain() === "yt")
        return "video";
    const songImgElem = document.querySelector("ytmusic-player #song-image");
    if (!songImgElem)
        throw new Error("Couldn't find the song image element. Use this function only after awaiting `waitVideoElementReady()`!");
    return window.getComputedStyle(songImgElem).display !== "none" ? "song" : "video";
}
/** Copies the provided text to the clipboard and shows an error message for manual copying if the grant `GM.setClipboard` is not given. */
function copyToClipboard(text) {
    try {
        GM.setClipboard(String(text));
    }
    catch (_a) {
        showPrompt({ type: "alert", message: t("copy_to_clipboard_error", String(text)) });
    }
}
let ttPolicy;
// workaround for supporting `target="_blank"` links without compromising security:
const tempTargetAttrName = `data-tmp-target-${UserUtils.randomId(6, 36)}`;
DOMPurify.addHook("beforeSanitizeAttributes", (node) => {
    if (node.tagName === "A") {
        if (!node.hasAttribute("target"))
            node.setAttribute("target", "_self");
        if (node.hasAttribute("target"))
            node.setAttribute(tempTargetAttrName, node.getAttribute("target"));
    }
});
DOMPurify.addHook("afterSanitizeAttributes", (node) => {
    if (node.tagName === "A" && node.hasAttribute(tempTargetAttrName)) {
        node.setAttribute("target", node.getAttribute(tempTargetAttrName));
        node.removeAttribute(tempTargetAttrName);
        if (node.getAttribute("target") === "_blank")
            node.setAttribute("rel", "noopener noreferrer");
    }
});
/**
 * Sets innerHTML directly on Firefox and Safari, while on Chromium a [Trusted Types policy](https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API) is used to set the HTML.
 * If no HTML string is given, the element's innerHTML will be set to an empty string.
 */
function setInnerHtml(element, html) {
    var _a, _b;
    if (!html)
        html = "";
    if (!ttPolicy && ((_a = window === null || window === void 0 ? void 0 : window.trustedTypes) === null || _a === void 0 ? void 0 : _a.createPolicy)) {
        ttPolicy = window.trustedTypes.createPolicy("bytm-sanitize-html", {
            createHTML: (dirty) => DOMPurify.sanitize(dirty, {
                RETURN_TRUSTED_TYPE: true,
            }),
        });
    }
    element.innerHTML = (_b = ttPolicy === null || ttPolicy === void 0 ? void 0 : ttPolicy.createHTML(String(html))) !== null && _b !== void 0 ? _b : DOMPurify.sanitize(String(html), { RETURN_TRUSTED_TYPE: false });
}
/** Creates an invisible link element and clicks it to download the provided string or Blob data as a file */
function downloadFile(fileName, data, mimeType = "text/plain") {
    const blob = data instanceof Blob ? data : new Blob([data], { type: mimeType });
    const a = document.createElement("a");
    a.classList.add("bytm-hidden");
    a.href = URL.createObjectURL(blob);
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => a.remove(), 1);
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
 * All values will be stringified and then URI-encoded.
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
async function fetchCss(key) {
    try {
        const css = await (await UserUtils.fetchAdvanced(await getResourceUrl(key))).text();
        return css !== null && css !== void 0 ? css : undefined;
    }
    catch (err) {
        error("Couldn't fetch CSS due to an error:", err);
        return undefined;
    }
}
/** Cache for the vote data of YouTube videos to prevent some unnecessary requests */
const voteCache = new Map();
/** Time-to-live for the vote cache in milliseconds */
const voteCacheTTL = 1000 * 60 * 10;
/**
 * Fetches the votes object for a YouTube video from the [Return YouTube Dislike API.](https://returnyoutubedislike.com/docs)
 * @param videoID The video ID of the video
 */
async function fetchVideoVotes(videoID) {
    try {
        if (voteCache.has(videoID)) {
            const cached = voteCache.get(videoID);
            if (Date.now() - cached.timestamp < voteCacheTTL) {
                info(`Returning cached video votes for video ID '${videoID}':`, cached);
                return cached;
            }
            else
                voteCache.delete(videoID);
        }
        const votesRaw = JSON.parse((await sendRequest({
            method: "GET",
            url: `https://returnyoutubedislikeapi.com/votes?videoId=${videoID}`,
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
        info(`Fetched video votes for watch ID '${videoID}':`, votesObj);
        return votesObj;
    }
    catch (err) {
        error("Couldn't fetch video votes due to an error:", err);
        return undefined;
    }
}let welcomeDialog = null;
/** Creates and/or returns the import dialog */
async function getWelcomeDialog() {
    if (!welcomeDialog) {
        welcomeDialog = new BytmDialog({
            id: "welcome",
            width: 700,
            height: 500,
            closeBtnEnabled: true,
            closeOnBgClick: false,
            closeOnEscPress: true,
            destroyOnClose: true,
            renderHeader,
            renderBody,
            renderFooter,
        });
        welcomeDialog.on("render", retranslateWelcomeMenu);
    }
    return welcomeDialog;
}
async function renderHeader() {
    const titleWrapperElem = document.createElement("div");
    titleWrapperElem.id = "bytm-welcome-menu-title-wrapper";
    const titleLogoElem = document.createElement("img");
    titleLogoElem.id = "bytm-welcome-menu-title-logo";
    titleLogoElem.classList.add("bytm-no-select");
    titleLogoElem.src = await getResourceUrl(mode === "development" ? "img-logo_dev" : "img-logo");
    const titleElem = document.createElement("h2");
    titleElem.id = "bytm-welcome-menu-title";
    titleElem.classList.add("bytm-dialog-title");
    titleElem.role = "heading";
    titleElem.ariaLevel = "1";
    titleElem.tabIndex = 0;
    titleWrapperElem.appendChild(titleLogoElem);
    titleWrapperElem.appendChild(titleElem);
    return titleWrapperElem;
}
async function renderBody() {
    const contentWrapper = document.createElement("div");
    contentWrapper.id = "bytm-welcome-menu-content-wrapper";
    // locale switcher
    const localeCont = document.createElement("div");
    localeCont.id = "bytm-welcome-menu-locale-cont";
    const localeImg = document.createElement("img");
    localeImg.id = "bytm-welcome-menu-locale-img";
    localeImg.classList.add("bytm-no-select");
    localeImg.src = await getResourceUrl("icon-globe");
    const localeSelectElem = document.createElement("select");
    localeSelectElem.id = "bytm-welcome-menu-locale-select";
    for (const [locale, { name }] of Object.entries(locales)) {
        const localeOptionElem = document.createElement("option");
        localeOptionElem.value = locale;
        localeOptionElem.textContent = name;
        localeSelectElem.appendChild(localeOptionElem);
    }
    localeSelectElem.value = getFeature("locale");
    localeSelectElem.addEventListener("change", async () => {
        const selectedLocale = localeSelectElem.value;
        const feats = Object.assign({}, getFeatures());
        feats.locale = selectedLocale;
        setFeatures(feats);
        await initTranslations(selectedLocale);
        setLocale(selectedLocale);
        retranslateWelcomeMenu();
    });
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
        "#bytm-welcome-text-line1": (e) => setInnerHtml(e, e.ariaLabel = t("welcome_text_line_1")),
        "#bytm-welcome-text-line2": (e) => setInnerHtml(e, e.ariaLabel = t("welcome_text_line_2", scriptInfo.name)),
        "#bytm-welcome-text-line3": (e) => setInnerHtml(e, e.ariaLabel = t("welcome_text_line_3", scriptInfo.name, ...getLink(`${pkg.hosts.greasyfork}/feedback`), ...getLink(pkg.hosts.openuserjs))),
        "#bytm-welcome-text-line4": (e) => setInnerHtml(e, e.ariaLabel = t("welcome_text_line_4", ...getLink(pkg.funding.url))),
        "#bytm-welcome-text-line5": (e) => setInnerHtml(e, e.ariaLabel = t("welcome_text_line_5", ...getLink(pkg.bugs.url))),
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
async function renderFooter() {
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
    openChangelogElem.addEventListener("click", async () => {
        const dlg = await getChangelogDialog();
        await dlg.mount();
        welcomeDialog === null || welcomeDialog === void 0 ? void 0 : welcomeDialog.close();
        await dlg.open();
    });
    const closeBtnElem = document.createElement("button");
    closeBtnElem.id = "bytm-welcome-menu-footer-close";
    closeBtnElem.classList.add("bytm-btn");
    closeBtnElem.addEventListener("click", async () => {
        welcomeDialog === null || welcomeDialog === void 0 ? void 0 : welcomeDialog.close();
    });
    const leftButtonsCont = document.createElement("div");
    leftButtonsCont.id = "bytm-menu-footer-left-buttons-cont";
    leftButtonsCont.appendChild(openCfgElem);
    leftButtonsCont.appendChild(openChangelogElem);
    footerCont.appendChild(leftButtonsCont);
    footerCont.appendChild(closeBtnElem);
    return footerCont;
}// import { getAllDataExImDialog } from "./dialogs/allDataExIm.js";
//#region cns. watermark
{
    // console watermark with sexy gradient
    const [styleGradient, gradientContBg] = (() => {
        switch (mode) {
            case "production": return ["background: rgb(165, 57, 36); background: linear-gradient(90deg, rgb(154, 31, 103) 0%, rgb(135, 31, 31) 40%, rgb(165, 57, 36) 100%);", "rgb(165, 57, 36)"];
            case "development": return ["background: rgb(72, 66, 178); background: linear-gradient(90deg, rgb(38, 160, 172) 0%, rgb(33, 48, 158) 40%, rgb(72, 66, 178) 100%);", "rgb(72, 66, 178)"];
        }
    })();
    const styleCommon = "color: #fff; font-size: 1.3rem;";
    const poweredBy = `Powered by:
─ Lots of ambition and dedication
─ My song metadata API: https://api.sv443.net/geniurl
─ My userscript utility library: https://github.com/Sv443-Network/UserUtils
─ This library for semver comparison: https://github.com/omichelsen/compare-versions
─ This TrustedTypes-compatible HTML sanitization library: https://github.com/cure53/DOMPurify
─ This markdown parser library: https://github.com/markedjs/marked
─ This tiny event listener library: https://github.com/ai/nanoevents
─ TypeScript and the tslib runtime: https://github.com/microsoft/TypeScript
─ The Cousine font: https://fonts.google.com/specimen/Cousine`;
    console.log(`\
%c${scriptInfo.name}%cv${scriptInfo.version}%c • ${scriptInfo.namespace}%c

Build #${buildNumber}${mode === "development" ? " (dev mode)" : ""}

%c${poweredBy}`, `${styleCommon} ${styleGradient} font-weight: bold; padding-left: 6px; padding-right: 6px;`, `${styleCommon} background-color: ${gradientContBg}; padding-left: 8px; padding-right: 8px;`, "color: #fff; font-size: 1.2rem;", "padding: initial; font-size: 0.9rem;", "padding: initial; font-size: 1rem;");
}
//#region preInit
/** Stuff that needs to be called ASAP, before anything async happens */
function preInit() {
    var _a, _b;
    try {
        const unsupportedHandlers = [
            "FireMonkey",
        ];
        if (unsupportedHandlers.includes((_b = (_a = GM === null || GM === void 0 ? void 0 : GM.info) === null || _a === void 0 ? void 0 : _a.scriptHandler) !== null && _b !== void 0 ? _b : "_"))
            return showPrompt({ type: "alert", message: `BetterYTM does not work when using ${GM.info.scriptHandler} as the userscript manager extension and will be disabled.\nI recommend using either ViolentMonkey, TamperMonkey or GreaseMonkey.`, denyBtnText: "Close" });
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
async function init() {
    var _a;
    try {
        const domain = getDomain();
        const features = await initConfig();
        setLogLevel(features.logLevel);
        await initLyricsCache();
        const initLoc = (_a = features.locale) !== null && _a !== void 0 ? _a : "en-US";
        const locPromises = [];
        locPromises.push(initTranslations(initLoc));
        // since en-US always has the complete set of keys, it needs to always be loaded:
        initLoc !== "en-US" && locPromises.push(initTranslations("en-US"));
        await Promise.allSettled(locPromises);
        setLocale(initLoc);
        try {
            initPlugins();
        }
        catch (err) {
            error("Plugin loading error:", err);
            emitInterface("bytm:fatalError", "Error while loading plugins");
        }
        if (features.disableBeforeUnloadPopup && domain === "ytm")
            enableDiscardBeforeUnload();
        if (features.rememberSongTime)
            initRememberSongTime();
        if (!UserUtils.isDomLoaded())
            document.addEventListener("DOMContentLoaded", onDomLoad, { once: true });
        else
            onDomLoad();
    }
    catch (err) {
        error("Fatal error:", err);
    }
}
//#region onDomLoad
/** Called when the DOM has finished loading and can be queried and altered by the userscript */
async function onDomLoad() {
    const domain = getDomain();
    const feats = getFeatures();
    const ftInit = [];
    // for being able to apply domain-specific styles (prefix any CSS selector with "body.bytm-dom-yt" or "body.bytm-dom-ytm")
    document.body.classList.add(`bytm-dom-${domain}`);
    try {
        initGlobalCss();
        initObservers();
        initSvgSpritesheet();
        Promise.allSettled([
            injectCssBundle(),
            initVersionCheck(),
        ]);
    }
    catch (err) {
        error("Encountered error in feature pre-init:", err);
    }
    log(`DOM loaded and feature pre-init finished, now initializing all features for domain "${domain}"...`);
    try {
        //#region welcome dlg
        if (typeof await GM.getValue("bytm-installed") !== "string") {
            // open welcome menu with language selector
            const dlg = await getWelcomeDialog();
            dlg.on("close", () => GM.setValue("bytm-installed", JSON.stringify({ timestamp: Date.now(), version: scriptInfo.version })));
            info("Showing welcome menu");
            await dlg.open();
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
            if (feats.watchPageFullSize)
                ftInit.push(["watchPageFullSize", initWatchPageFullSize()]);
            //#region (ytm) volume
            ftInit.push(["volumeFeatures", initVolumeFeatures()]);
            //#region (ytm) song lists
            if (feats.lyricsQueueButton || feats.deleteFromQueueButton)
                ftInit.push(["queueButtons", initQueueButtons()]);
            ftInit.push(["aboveQueueBtns", initAboveQueueBtns()]);
            //#region (ytm) behavior
            if (feats.closeToastsTimeout > 0)
                ftInit.push(["autoCloseToasts", initAutoCloseToasts()]);
            ftInit.push(["autoScrollToActiveSongMode", initAutoScrollToActiveSong()]);
            //#region (ytm) input
            ftInit.push(["arrowKeySkip", initArrowKeySkip()]);
            ftInit.push(["frameSkip", initFrameSkip()]);
            if (feats.anchorImprovements)
                ftInit.push(["anchorImprovements", addAnchorImprovements()]);
            ftInit.push(["numKeysSkip", initNumKeysSkip()]);
            //#region (ytm) lyrics
            if (feats.geniusLyrics)
                ftInit.push(["playerBarLyricsBtn", addPlayerBarLyricsBtn()]);
            // #region (ytm) integrations
            if (feats.sponsorBlockIntegration)
                ftInit.push(["sponsorBlockIntegration", fixSponsorBlock()]);
            const hideThemeSongLogo = addStyleFromResource("css-hide_themesong_logo");
            if (feats.themeSongIntegration)
                ftInit.push(["themeSongIntegration", Promise.allSettled([fixThemeSong(), hideThemeSongLogo])]);
            else
                ftInit.push(["themeSongIntegration", Promise.allSettled([fixPlayerPageTheming(), hideThemeSongLogo])]);
        }
        //#region (ytm+yt) cfg menu
        try {
            if (domain === "ytm") {
                addSelectorListener("popupContainer", "tp-yt-iron-dropdown #contentWrapper ytmusic-multi-page-menu-renderer #container", {
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
            if (feats.removeShareTrackingParamSites && (feats.removeShareTrackingParamSites === domain || feats.removeShareTrackingParamSites === "all"))
                ftInit.push(["initRemShareTrackParam", initRemShareTrackParam()]);
            //#region (ytm+yt) input
            ftInit.push(["siteSwitch", initSiteSwitch(domain)]);
            if (feats.autoLikeChannels)
                ftInit.push(["autoLikeChannels", initAutoLike()]);
            //#region (ytm+yt) integrations
            if (feats.disableDarkReaderSites !== "none")
                ftInit.push(["disableDarkReaderSites", disableDarkReader()]);
        }
        emitInterface("bytm:featureInitStarted");
        const initStartTs = Date.now();
        // wait for feature init or timeout (in case an init function is hung up on a promise)
        await Promise.race([
            UserUtils.pauseFor(feats.initTimeout > 0 ? feats.initTimeout * 1000 : 8000),
            Promise.allSettled(ftInit.map(([name, prom]) => new Promise(async (res) => {
                const v = await prom;
                emitInterface("bytm:featureInitialized", name);
                res(v);
            }))),
        ]);
        emitInterface("bytm:ready");
        info(`Done initializing ${ftInit.length} features after ${Math.floor(Date.now() - initStartTs)}ms`);
        try {
            registerDevCommands();
        }
        catch (e) {
            warn("Couldn't register dev menu commands:", e);
        }
        try {
            runDevTreatments();
        }
        catch (e) {
            warn("Couldn't run dev treatments:", e);
        }
    }
    catch (err) {
        error("Feature error:", err);
        emitInterface("bytm:fatalError", "Error while initializing features");
    }
}
//#region css
/** Inserts the bundled CSS files imported throughout the script into a <style> element in the <head> */
async function injectCssBundle() {
    if (!await addStyleFromResource("css-bundle"))
        error("Couldn't inject CSS bundle due to an error");
}
/** Initializes global CSS values */
function initGlobalCss() {
    try {
        initFonts();
        const applyVars = () => {
            setGlobalCssVars({
                "inner-height": `${window.innerHeight}px`,
                "outer-height": `${window.outerHeight}px`,
                "inner-width": `${window.innerWidth}px`,
                "outer-width": `${window.outerWidth}px`,
            });
        };
        window.addEventListener("resize", applyVars);
        applyVars();
    }
    catch (err) {
        error("Couldn't initialize global CSS:", err);
    }
}
async function initFonts() {
    const fonts = {
        "Cousine": {
            woff: await getResourceUrl("font-cousine_woff"),
            woff2: await getResourceUrl("font-cousine_woff2"),
            truetype: await getResourceUrl("font-cousine_ttf"),
        },
    };
    let css = "";
    for (const [fontName, urls] of Object.entries(fonts))
        css += `\
@font-face {
  font-family: "${fontName}";
  src: ${Object.entries(urls)
            .map(([type, url]) => `url("${url}") format("${type}")`)
            .join(", ")};
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}`;
    addStyle(css, "fonts");
}
//#region svg spritesheet
/** Initializes the SVG spritesheet */
async function initSvgSpritesheet() {
    const svgUrl = await getResourceUrl("doc-svg_spritesheet");
    const div = document.createElement("div");
    div.style.display = "none";
    UserUtils.setInnerHtmlUnsafe(div, await (await UserUtils.fetchAdvanced(svgUrl)).text());
    document.body.appendChild(div);
}
//#region dev menu cmds
/** Registers dev commands using `GM.registerMenuCommand` */
function registerDevCommands() {
    if (mode !== "development")
        return;
    GM.registerMenuCommand("Reset config", async () => {
        if (await showPrompt({ type: "confirm", message: "Reset the configuration to its default values?\nThis will automatically reload the page.", confirmBtnText: "Reset" })) {
            await clearConfig();
            await reloadTab();
        }
    });
    GM.registerMenuCommand("List GM values in console with decompression", async () => {
        const keys = await GM.listValues();
        dbg(`GM values (${keys.length}):`);
        if (keys.length === 0)
            dbg("  No values found.");
        const values = {};
        let longestKey = 0;
        for (const key of keys) {
            const isEncoded = key.startsWith("_uucfg-") ? await GM.getValue(`_uucfgenc-${key.substring(7)}`, false) : false;
            const val = await GM.getValue(key, undefined);
            values[key] = typeof val !== "undefined" && isEncoded ? await UserUtils.decompress(val, compressionFormat, "string") : val;
            longestKey = Math.max(longestKey, key.length);
        }
        for (const [key, finalVal] of Object.entries(values)) {
            const isEncoded = key.startsWith("_uucfg-") ? await GM.getValue(`_uucfgenc-${key.substring(7)}`, false) : false;
            const lengthStr = String(finalVal).length > 50 ? `(${String(finalVal).length} chars) ` : "";
            dbg(`  "${key}"${" ".repeat(longestKey - key.length)} -${isEncoded ? "-[decoded]-" : ""}> ${lengthStr}${finalVal}`);
        }
    });
    GM.registerMenuCommand("List GM values in console, without decompression", async () => {
        const keys = await GM.listValues();
        dbg(`GM values (${keys.length}):`);
        if (keys.length === 0)
            dbg("  No values found.");
        const values = {};
        let longestKey = 0;
        for (const key of keys) {
            const val = await GM.getValue(key, undefined);
            values[key] = val;
            longestKey = Math.max(longestKey, key.length);
        }
        for (const [key, val] of Object.entries(values)) {
            const lengthStr = String(val).length >= 16 ? `(${String(val).length} chars) ` : "";
            dbg(`  "${key}"${" ".repeat(longestKey - key.length)} -> ${lengthStr}${val}`);
        }
    });
    GM.registerMenuCommand("Delete all GM values", async () => {
        const keys = await GM.listValues();
        if (await showPrompt({ type: "confirm", message: `Clear all ${keys.length} GM values?\nSee console for details.`, confirmBtnText: "Clear" })) {
            dbg(`Clearing ${keys.length} GM values:`);
            if (keys.length === 0)
                dbg("  No values found.");
            for (const key of keys) {
                await GM.deleteValue(key);
                dbg(`  Deleted ${key}`);
            }
        }
    });
    GM.registerMenuCommand("Delete GM values by name (comma separated)", async () => {
        var _a;
        const keys = await showPrompt({ type: "prompt", message: "Enter the name(s) of the GM value to delete (comma separated).\nEmpty input cancels the operation.", confirmBtnText: "Delete" });
        if (!keys)
            return;
        for (const key of (_a = keys === null || keys === void 0 ? void 0 : keys.split(",")) !== null && _a !== void 0 ? _a : []) {
            if (key && key.length > 0) {
                const truncLength = 400;
                const oldVal = await GM.getValue(key);
                await GM.deleteValue(key);
                dbg(`Deleted GM value '${key}' with previous value '${oldVal && String(oldVal).length > truncLength ? String(oldVal).substring(0, truncLength) + `… (${String(oldVal).length} / ${truncLength} chars.)` : oldVal}'`);
            }
        }
    });
    GM.registerMenuCommand("Reset install timestamp", async () => {
        await GM.deleteValue("bytm-installed");
        dbg("Reset install time.");
    });
    GM.registerMenuCommand("Reset version check timestamp", async () => {
        await GM.deleteValue("bytm-version-check");
        dbg("Reset version check time.");
    });
    GM.registerMenuCommand("List active selector listeners in console", async () => {
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
    });
    GM.registerMenuCommand("Compress value", async () => {
        const input = await showPrompt({ type: "prompt", message: "Enter the value to compress.\nSee console for output.", confirmBtnText: "Compress" });
        if (input && input.length > 0) {
            const compressed = await UserUtils.compress(input, compressionFormat);
            dbg(`Compression result (${input.length} chars -> ${compressed.length} chars)\nValue: ${compressed}`);
        }
    });
    GM.registerMenuCommand("Decompress value", async () => {
        const input = await showPrompt({ type: "prompt", message: "Enter the value to decompress.\nSee console for output.", confirmBtnText: "Decompress" });
        if (input && input.length > 0) {
            const decompressed = await UserUtils.decompress(input, compressionFormat);
            dbg(`Decompresion result (${input.length} chars -> ${decompressed.length} chars)\nValue: ${decompressed}`);
        }
    });
    GM.registerMenuCommand("Download DataStoreSerializer file", () => downloadData(false));
    GM.registerMenuCommand("Import all data using DataStoreSerializer", async () => {
        const input = await showPrompt({ type: "prompt", message: "Paste the content of the export file to import:", confirmBtnText: "Import" });
        if (input && input.length > 0) {
            await getStoreSerializer().deserialize(input);
            if (await showPrompt({ type: "confirm", message: "Successfully imported data using DataStoreSerializer.\nReload the page to apply changes?", confirmBtnText: "Reload" }))
                await reloadTab();
        }
    });
    GM.registerMenuCommand("Throw error (toast example)", () => error("Test error thrown by user command:", new SyntaxError("Test error")));
    GM.registerMenuCommand("Example MarkdownDialog", async () => {
        const mdDlg = new MarkdownDialog({
            id: "example",
            width: 500,
            height: 400,
            renderHeader() {
                const header = document.createElement("h1");
                header.textContent = "Example Markdown Dialog";
                return header;
            },
            body: "## This is a test dialog\n```ts\nconsole.log(\"Hello, world!\");\n```\n\n- List item 1\n- List item 2\n- List item 3",
        });
        await mdDlg.open();
    });
    GM.registerMenuCommand("Toggle dev treatments", async () => {
        const val = !await GM.getValue("bytm-dev-treatments", false);
        await GM.setValue("bytm-dev-treatments", val);
        if (await showPrompt({ type: "confirm", message: `Dev treatments are now ${val ? "enabled" : "disabled"}.\nDo you want to reload the page?`, confirmBtnText: "Reload", denyBtnText: "nothxbye" }))
            await reloadTab();
    });
    log("Registered dev menu commands");
}
async function runDevTreatments() {
    if (mode !== "development" || !await GM.getValue("bytm-dev-treatments", false))
        return;
    // const dlg = await getAllDataExImDialog();
    // await dlg.open();
}
preInit();})(UserUtils,DOMPurify,marked,compareVersions);//# sourceMappingURL=http://localhost:8710/BetterYTM.user.js.map
