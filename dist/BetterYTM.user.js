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
};//#SECTION video time
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
/** Removes all child nodes of an element without invoking the slow-ish HTML parser */
function clearInner(element) {
    while (element.hasChildNodes())
        clearNode(element.firstChild);
}
function clearNode(element) {
    while (element.hasChildNodes())
        clearNode(element.firstChild);
    element.parentNode.removeChild(element);
}// I know TS enums are impure but it doesn't really matter here, plus they look cooler
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Debug"] = 0] = "Debug";
    LogLevel[LogLevel["Info"] = 1] = "Info";
})(LogLevel || (LogLevel = {}));const modeRaw = "#{{MODE}}";
const branchRaw = "#{{BRANCH}}";
const hostRaw = "#{{HOST}}";
const buildNumberRaw = "#{{BUILD_NUMBER}}";
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
};/** Options that are applied to every SelectorObserver instance */
const defaultObserverOptions = {
    defaultDebounce: 100,
};
const observers$1 = {};
/** Call after DOM load to initialize all SelectorObserver instances */
function initObservers() {
    try {
        // #SECTION body = the entire <body> element - use sparingly due to performance impacts!
        observers$1.body = new UserUtils.SelectorObserver(document.body, Object.assign(Object.assign({}, defaultObserverOptions), { subtree: false }));
        observers$1.body.enable();
        // #SECTION playerBar = media controls bar at the bottom of the page
        const playerBarSelector = "ytmusic-app-layout ytmusic-player-bar.ytmusic-app";
        observers$1.playerBar = new UserUtils.SelectorObserver(playerBarSelector, Object.assign(Object.assign({}, defaultObserverOptions), { defaultDebounce: 200 }));
        observers$1.body.addListener(playerBarSelector, {
            listener: () => {
                log("#DBG-UU enabling playerBar observer");
                observers$1.playerBar.enable();
            },
        });
        // #SECTION playerBarInfo = song title, artist, album, etc. inside the player bar
        const playerBarInfoSelector = `${playerBarSelector} .middle-controls .content-info-wrapper`;
        observers$1.playerBarInfo = new UserUtils.SelectorObserver(playerBarInfoSelector, Object.assign(Object.assign({}, defaultObserverOptions), { attributes: true, attributeFilter: ["title"] }));
        observers$1.playerBarInfo.addListener(playerBarInfoSelector, {
            listener: () => {
                log("#DBG-UU enabling playerBarTitle observer");
                observers$1.playerBarInfo.enable();
            },
        });
        // #DEBUG example: listen for title change:
        observers$1.playerBarInfo.addListener("yt-formatted-string.title", {
            continuous: true,
            listener: (titleElem) => {
                log("#DBG-UU >>>>> title changed", titleElem.title);
            },
        });
        emitInterface("bytm:observersReady");
    }
    catch (err) {
        error("Failed to initialize observers:", err);
    }
}
/** Interface function for adding listeners to the already present observers */
function addSelectorListener(observerName, selector, options) {
    observers$1[observerName].addListener(selector, options);
}var de_DE = {
	name: "Deutsch (Deutschland)",
	nameEnglish: "German",
	emoji: "🇩🇪",
	userscriptDesc: "Konfigurierbare Layout- und Benutzererfahrungs-Verbesserungen für YouTube Music",
	authors: [
		"Sv443"
	]
};
var en_US = {
	name: "English (United States)",
	nameEnglish: "English",
	emoji: "🇺🇸",
	userscriptDesc: "Configurable layout and user experience improvements for YouTube Music",
	authors: [
		"Sv443"
	]
};
var en_UK = {
	name: "English (United Kingdom)",
	nameEnglish: "English",
	emoji: "🇬🇧",
	userscriptDesc: "Configurable layout and user experience improvements for YouTube Music",
	authors: [
		"Sv443"
	]
};
var es_ES = {
	name: "Español (España)",
	nameEnglish: "Spanish",
	emoji: "🇪🇸",
	userscriptDesc: "Mejoras de diseño y experiencia de usuario configurables para YouTube Music",
	authors: [
		"Sv443"
	]
};
var fr_FR = {
	name: "Français (France)",
	nameEnglish: "French",
	emoji: "🇫🇷",
	userscriptDesc: "Améliorations de la mise en page et de l'expérience utilisateur configurables pour YouTube Music",
	authors: [
		"Sv443"
	]
};
var hi_IN = {
	name: "हिंदी (भारत)",
	nameEnglish: "Hindi",
	emoji: "🇮🇳",
	userscriptDesc: "YouTube Music के लिए विन्यास और यूजर अनुभव में सुधार करने योग्य लेआउट और यूजर अनुभव सुधार",
	authors: [
		"Sv443"
	]
};
var ja_JA = {
	name: "日本語 (日本)",
	nameEnglish: "Japanese",
	emoji: "🇯🇵",
	userscriptDesc: "YouTube Musicのレイアウトとユーザーエクスペリエンスの改善を設定可能にする",
	authors: [
		"Sv443"
	]
};
var pt_BR = {
	name: "Português (Brasil)",
	nameEnglish: "Portuguese",
	emoji: "🇵🇹",
	userscriptDesc: "Melhorias configuráveis no layout e na experiência do usuário para o YouTube Music",
	authors: [
		"Sv443"
	]
};
var zh_CN = {
	name: "中文（简化，中国）",
	nameEnglish: "Chinese (simpl.)",
	emoji: "🇨🇳",
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
};let features$3;
function setBehaviorConfig(feats) {
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
                        yield UserUtils.pauseFor(closeTimeout);
                        toastElem.classList.remove("paper-toast-open");
                        log(`Automatically closed toast '${(_a = toastElem.querySelector("#text-container yt-formatted-string")) === null || _a === void 0 ? void 0 : _a.textContent}' after ${features$3.closeToastsTimeout * 1000}ms`);
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
                                    vidElem.currentTime = UserUtils.clamp(Math.max(entry.songTime, 0), 0, vidElem.duration);
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
//#MARKER lock volume
let volumeSliderObserverActive = false;
let sliderElem;
function overrideVolValues() {
    if (!sliderElem || !getFeatures().lockVolume)
        return;
    volumeSliderObserverActive = false;
    setTimeout(() => {
        const vidElem = document.querySelector(videoSelector);
        if (vidElem)
            vidElem.volume = getFeatures().lockVolumeLevel / 100;
        if (!sliderElem) {
            volumeSliderObserverActive = true;
            return;
        }
        sliderElem.value = String(getFeatures().lockVolumeLevel);
        sliderElem.setAttribute("aria-valuenow", String(getFeatures().lockVolumeLevel));
        const knobElem = document.querySelector("#volume-slider #sliderKnobContainer #sliderKnob");
        if (knobElem)
            knobElem.style.left = `${getFeatures().lockVolumeLevel}%`;
        const labelElem = document.querySelector("#bytm-vol-slider-label .label");
        const newLabelContent = `${getFeatures().lockVolumeLevel}%`;
        if (labelElem && labelElem.textContent !== newLabelContent)
            labelElem.textContent = newLabelContent;
        volumeSliderObserverActive = true;
    }, 10);
}
/** Locks the volume slider at a specific level */
function enableLockVolume() {
    return __awaiter(this, void 0, void 0, function* () {
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (!volumeSliderObserverActive)
                    return;
                if (mutation.target.id === "sliderBar" && mutation.type === "attributes") {
                    if (mutation.attributeName === "value" || mutation.attributeName === "aria-valuenow")
                        overrideVolValues();
                }
            }
        });
        onSelectorOld("#volume-slider tp-yt-paper-progress#sliderBar", {
            listener: (elem) => {
                sliderElem = elem;
                overrideVolValues();
                volumeSliderObserverActive = true;
                observer.observe(elem, {
                    attributeFilter: ["value", "aria-valuenow"],
                });
            }
        });
    });
}/** A fraction of this max value will be removed from the "last viewed" timestamp when adding penalized cache entries */
const maxViewedPenalty = 1000 * 60 * 60 * 24 * 5; // 5 days
/** A fraction of this max value will be removed from the "added" timestamp when adding penalized cache entries */
const maxAddedPenalty = 1000 * 60 * 60 * 24 * 15; // 15 days
let canCompress$1 = true;
const lyricsCacheMgr = new UserUtils.ConfigManager({
    id: "bytm-lyrics-cache",
    defaultConfig: {
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
    if (cache.length > getFeatures().lyricsCacheMaxSize)
        cache.pop();
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
    if (cache.length > getFeatures().lyricsCacheMaxSize)
        cache.pop();
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
});/** Abstract class that can be extended to create an event emitter with helper methods and a strongly typed event map */
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
let lastDialogId = null;
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
        Object.defineProperty(this, "listenersAttached", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        this.options = Object.assign({ closeOnBgClick: true, closeOnEscPress: true, closeBtnEnabled: true, destroyOnClose: false, smallHeader: false }, options);
        this.id = options.id;
    }
    //#MARKER public
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
            UserUtils.addGlobalStyle(`\
#bytm-${this.id}-dialog-bg {
  --bytm-dialog-width-max: ${this.options.maxWidth}px;
  --bytm-dialog-height-max: ${this.options.maxHeight}px;
}`).id = `bytm-style-dialog-${this.id}`;
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
            lastDialogId = this.id;
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
        if (BytmDialog.getLastDialogId() === this.id)
            lastDialogId = null;
        this.events.emit("close");
        if (this.options.destroyOnClose)
            this.destroy();
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
        this.events.emit("destroy");
        this.unmount();
        this.unsubscribeAll();
    }
    //#MARKER static
    /** Returns the ID of the top-most dialog (the dialog that has been opened last) */
    static getLastDialogId() {
        return lastDialogId;
    }
    //#MARKER protected
    /** Called once to attach all generic event listeners */
    attachListeners(bgElem) {
        if (this.listenersAttached)
            return;
        this.listenersAttached = true;
        if (this.options.closeOnBgClick) {
            bgElem.addEventListener("click", (e) => {
                var _a;
                if (this.isOpen() && ((_a = e.target) === null || _a === void 0 ? void 0 : _a.id) === `bytm-${this.id}-dialog-bg`)
                    this.close(e);
            });
        }
        if (this.options.closeOnEscPress) {
            document.body.addEventListener("keydown", (e) => {
                if (e.key === "Escape" && this.isOpen() && BytmDialog.getLastDialogId() === this.id)
                    this.close(e);
            });
        }
    }
    //#MARKER private
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
            //#SECTION header
            const headerWrapperEl = document.createElement("div");
            headerWrapperEl.classList.add("bytm-dialog-header");
            this.options.smallDialog && headerWrapperEl.classList.add("small");
            if (header) {
                const headerTitleWrapperEl = document.createElement("div");
                headerTitleWrapperEl.classList.add("bytm-dialog-title-wrapper");
                headerTitleWrapperEl.role = "heading";
                headerTitleWrapperEl.ariaLevel = "1";
                headerTitleWrapperEl.appendChild(header instanceof Promise ? yield header : header);
                headerWrapperEl.appendChild(headerTitleWrapperEl);
            }
            else {
                // insert element to pad the header height
                const padEl = document.createElement("div");
                padEl.classList.add("bytm-dialog-header-pad", this.options.smallDialog ? "small" : "");
                headerWrapperEl.appendChild(padEl);
            }
            if (this.options.closeBtnEnabled) {
                const closeBtnEl = document.createElement("img");
                closeBtnEl.classList.add("bytm-dialog-close");
                this.options.smallDialog && closeBtnEl.classList.add("small");
                closeBtnEl.src = yield getResourceUrl("img-close");
                closeBtnEl.role = "button";
                closeBtnEl.tabIndex = 0;
                closeBtnEl.addEventListener("click", () => this.close());
                headerWrapperEl.appendChild(closeBtnEl);
            }
            dialogWrapperEl.appendChild(headerWrapperEl);
            //#SECTION body
            const menuBodyElem = document.createElement("div");
            menuBodyElem.id = `bytm-${this.id}-dialog-body`;
            menuBodyElem.classList.add("bytm-dialog-body");
            this.options.smallDialog && menuBodyElem.classList.add("small");
            const body = this.options.renderBody();
            menuBodyElem.appendChild(body instanceof Promise ? yield body : body);
            dialogWrapperEl.appendChild(menuBodyElem);
            //#SECTION footer
            if (footer) {
                const footerWrapper = document.createElement("div");
                footerWrapper.classList.add("bytm-dialog-footer-cont");
                dialogWrapperEl.appendChild(footerWrapper);
                footerWrapper.appendChild(footer instanceof Promise ? yield footer : footer);
            }
            return dialogWrapperEl;
        });
    }
}/** EventEmitter instance that is used to detect changes to the site */
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
            queueObs.observe(document.querySelector("#side-panel #contents.ytmusic-player-queue"), {
                childList: true,
            });
            const autoplayObs = new MutationObserver(([{ addedNodes, removedNodes, target }]) => {
                if (addedNodes.length > 0 || removedNodes.length > 0) {
                    info(`Detected autoplay queue change - added nodes: ${[...addedNodes.values()].length} - removed nodes: ${[...removedNodes.values()].length}`);
                    emitSiteEvent("autoplayQueueChanged", target);
                }
            });
            autoplayObs.observe(document.querySelector("#side-panel ytmusic-player-queue #automix-contents"), {
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
}let initialHotkey;
/** Creates a hotkey input element */
function createHotkeyInput({ initialValue, onChange }) {
    var _a;
    initialHotkey = initialValue;
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
        var _a, _b;
        siteEvents.emit("hotkeyInputActive", false);
        const curVal = (_a = getFeatures().switchSitesHotkey) !== null && _a !== void 0 ? _a : initialValue;
        inputElem.value = (_b = curVal === null || curVal === void 0 ? void 0 : curVal.code) !== null && _b !== void 0 ? _b : t("hotkey_input_click_to_change");
        inputElem.dataset.state = "inactive";
        inputElem.ariaLabel = inputElem.title = t("hotkey_input_click_to_change_tooltip");
        infoElem.innerHTML = curVal ? getHotkeyInfoHtml(curVal) : "";
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
        deactivate();
        inputElem.value = initialValue.code;
        infoElem.innerHTML = getHotkeyInfoHtml(initialValue);
        resetElem.classList.add("bytm-hidden");
    };
    resetElem.addEventListener("click", resetClicked);
    resetElem.addEventListener("keydown", (e) => ["Enter", " ", "Space"].includes(e.key) && resetClicked(e));
    if (initialValue)
        infoElem.innerHTML = getHotkeyInfoHtml(initialValue);
    let lastKeyDown;
    const reservedKeys = ["ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "Meta", "Tab", "Space", " "];
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
            return deactivate();
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
}var name = "betterytm";
var userscriptName = "BetterYTM";
var version = "1.1.1";
var description = "Lots of configurable layout and user experience improvements for YouTube Music";
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
	"gen-readme": "npm run node-ts -- ./src/tools/gen-readme.ts",
	"node-ts": "node --no-warnings=ExperimentalWarning --enable-source-maps --loader ts-node/esm",
	invisible: "node src/tools/run-invisible.mjs",
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
	"@sv443-network/userutils": "^5.0.1",
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
                maxWidth: 600,
                maxHeight: 800,
                closeBtnEnabled: false,
                closeOnBgClick: false,
                closeOnEscPress: true,
                destroyOnClose: true,
                smallDialog: true,
                renderBody: () => renderBody({
                    latestTag,
                    changelogHtml,
                }),
            });
        }
        return verNotifDialog;
    });
}
let disableUpdateCheck = false;
function renderBody({ latestTag, changelogHtml, }) {
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
            yield saveFeatures(config);
        }));
        const btnWrapper = document.createElement("div");
        btnWrapper.id = "bytm-version-notif-dialog-btns";
        const btnUpdate = document.createElement("button");
        btnUpdate.className = "bytm-btn";
        btnUpdate.tabIndex = 0;
        btnUpdate.textContent = t("open_update_page_install_manually", hostPlatformNames[host]);
        const btnUpdateClicked = () => {
            window.open(pkg.updates[host]);
            verNotifDialog === null || verNotifDialog === void 0 ? void 0 : verNotifDialog.close();
        };
        btnUpdate.addEventListener("click", btnUpdateClicked);
        btnUpdate.addEventListener("keydown", (e) => e.key === "Enter" && btnUpdateClicked());
        const btnClose = document.createElement("button");
        btnClose.className = "bytm-btn";
        btnClose.tabIndex = 0;
        btnClose.textContent = t("close_and_ignore_for_24h");
        btnClose.addEventListener("click", () => verNotifDialog === null || verNotifDialog === void 0 ? void 0 : verNotifDialog.close());
        btnClose.addEventListener("keydown", (e) => e.key === "Enter" && (verNotifDialog === null || verNotifDialog === void 0 ? void 0 : verNotifDialog.close()));
        btnWrapper.appendChild(btnUpdate);
        btnWrapper.appendChild(btnClose);
        wrapperEl.appendChild(btnWrapper);
        return wrapperEl;
    });
}const releaseURL = "https://github.com/Sv443/BetterYTM/releases/latest";
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
            return yield dialog.open();
        }
        return noUpdateFound();
    });
}
/**
 * Crudely compares two semver version strings.
 * @returns Returns 1 if a > b or -1 if a < b or 0 if a == b
 */
function compareVersions(a, b) {
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
}//#MARKER create menu elements
let isCfgMenuAdded = false;
let isCfgMenuOpen = false;
/** Threshold in pixels from the top of the options container that dictates for how long the scroll indicator is shown */
const scrollIndicatorOffsetThreshold = 30;
let scrollIndicatorEnabled = true;
/** Locale at the point of initializing the config menu */
let initLocale;
/** Stringified config at the point of initializing the config menu */
let initConfig$1;
/**
 * Adds an element to open the BetterYTM menu
 * @deprecated to be replaced with new menu - see https://github.com/Sv443/BetterYTM/issues/23
 */
function addCfgMenu() {
    var _a, _b, _c, _d, _e;
    return __awaiter(this, void 0, void 0, function* () {
        if (isCfgMenuAdded)
            return;
        isCfgMenuAdded = true;
        initLocale = getFeatures().locale;
        initConfig$1 = JSON.stringify(getFeatures());
        const initLangReloadText = t("lang_changed_prompt_reload");
        //#SECTION backdrop & menu container
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
        //#SECTION title bar
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
            discord: "Discord",
            github: "GitHub",
            greasyfork: "GreasyFork",
            openuserjs: "OpenUserJS",
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
            imgElem.className = "bytm-menu-img";
            imgElem.src = imgSrc;
            imgElem.style.width = "32px";
            imgElem.style.height = "32px";
            anchorElem.appendChild(imgElem);
            anchorElem.appendChild(extendedAnchorEl);
            linksCont.appendChild(anchorElem);
        };
        addLink(yield getResourceUrl("img-discord"), "https://dc.sv443.net/", t("open_discord"), "discord");
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
        const closeElem = document.createElement("img");
        closeElem.classList.add("bytm-menu-close");
        closeElem.role = "button";
        closeElem.tabIndex = 0;
        closeElem.src = yield getResourceUrl("img-close");
        closeElem.ariaLabel = closeElem.title = t("close_menu_tooltip");
        closeElem.addEventListener("click", closeCfgMenu);
        closeElem.addEventListener("keydown", ({ key }) => key === "Enter" && closeCfgMenu());
        titleCont.appendChild(titleElem);
        titleCont.appendChild(linksCont);
        headerElem.appendChild(titleCont);
        headerElem.appendChild(closeElem);
        //#SECTION footer
        const footerCont = document.createElement("div");
        footerCont.className = "bytm-menu-footer-cont";
        const footerElemCont = document.createElement("div");
        const footerElem = document.createElement("div");
        footerElem.classList.add("bytm-menu-footer", "hidden");
        footerElem.textContent = t("reload_hint");
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
            yield openExportMenu();
            closeCfgMenu(undefined, false);
        }));
        const importElem = document.createElement("button");
        importElem.classList.add("bytm-btn");
        importElem.ariaLabel = importElem.title = t("import_tooltip");
        importElem.textContent = t("import");
        importElem.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            yield openImportMenu();
            closeCfgMenu(undefined, false);
        }));
        const buttonsCont = document.createElement("div");
        buttonsCont.id = "bytm-menu-footer-buttons-cont";
        buttonsCont.appendChild(exportElem);
        buttonsCont.appendChild(importElem);
        buttonsCont.appendChild(resetElem);
        footerCont.appendChild(footerElemCont);
        footerCont.appendChild(buttonsCont);
        //#SECTION feature list
        const featuresCont = document.createElement("div");
        featuresCont.id = "bytm-menu-opts";
        /** Gets called whenever the feature config is changed */
        const confChanged = UserUtils.debounce((key, initialVal, newVal) => __awaiter(this, void 0, void 0, function* () {
            var _f, _g;
            const fmt = (val) => typeof val === "object" ? JSON.stringify(val) : String(val);
            info(`Feature config changed at key '${key}', from value '${fmt(initialVal)}' to '${fmt(newVal)}'`);
            const featConf = JSON.parse(JSON.stringify(getFeatures()));
            featConf[key] = newVal;
            yield saveFeatures(featConf);
            // @ts-ignore
            (_g = (_f = featInfo[key]) === null || _f === void 0 ? void 0 : _f.change) === null || _g === void 0 ? void 0 : _g.call(_f, featConf);
            if (initConfig$1 !== JSON.stringify(featConf))
                footerElem.classList.remove("hidden");
            else
                footerElem.classList.add("hidden");
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
        const fmtVal = (v) => typeof v === "object" ? JSON.stringify(v) : String(v).trim();
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
                        const valFmtd = fmtVal(ftDefault);
                        featLeftSideElem.title = `${featKey}${ftInfo.advanced ? " (advanced)" : ""} - Default: ${valFmtd.length === 0 ? "(empty)" : valFmtd}`;
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
                            const helpElemClicked = (e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                openHelpDialog(featKey);
                            };
                            helpElem.addEventListener("click", helpElemClicked);
                            helpElem.addEventListener("keydown", (e) => e.key === "Enter" && helpElemClicked(e));
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
                            inputElem.value = String(initialVal).replace(/./g, "•");
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
                            labelElem.textContent = `${fmtVal(initialVal)} ${unitTxt}`;
                            inputElem.addEventListener("input", () => {
                                if (labelElem && lastDisplayedVal !== inputElem.value) {
                                    labelElem.textContent = `${fmtVal(inputElem.value)} ${unitTxt}`;
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
                                wrapperElem.addEventListener("click", () => ftInfo.click());
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
                const unitTxt = " " + (typeof ftInfo.unit === "string" ? ftInfo.unit : (
                // @ts-ignore
                typeof ftInfo.unit === "function" ? ftInfo.unit(Number(ftElem.value)) : ""));
                if (ftInfo.type === "slider")
                    labelElem.textContent = `${fmtVal(Number(value))} ${unitTxt}`;
            }
            info("Rebuilt config menu");
        });
        //#SECTION scroll indicator
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
        //#SECTION finalize
        menuContainer.appendChild(headerElem);
        menuContainer.appendChild(featuresCont);
        const subtitleElemCont = document.createElement("div");
        subtitleElemCont.id = "bytm-menu-subtitle-cont";
        const versionEl = document.createElement("a");
        versionEl.classList.add("bytm-link");
        versionEl.role = "button";
        versionEl.tabIndex = 0;
        versionEl.ariaLabel = versionEl.title = t("version_tooltip", scriptInfo.version, buildNumber);
        versionEl.textContent = `v${scriptInfo.version} (${buildNumber})${mode === "development" ? " [DEV]" : ""}`;
        const versionElemClicked = (e) => __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            yield openChangelogMenu("cfgMenu");
            closeCfgMenu(undefined, false);
        });
        versionEl.addEventListener("click", versionElemClicked);
        versionEl.addEventListener("keydown", (e) => e.key === "Enter" && versionElemClicked(e));
        let advancedIndicatorEl;
        if (getFeatures().advancedMode) {
            const indicatorIconHtml = yield resourceToHTMLString("icon-advanced_mode");
            const advancedIndicatorIconEl = document.createElement("span");
            advancedIndicatorIconEl.classList.add("bytm-advanced-mode-icon");
            if (indicatorIconHtml)
                advancedIndicatorIconEl.innerHTML = indicatorIconHtml;
            const advancedIndicatorLabelEl = document.createElement("span");
            advancedIndicatorLabelEl.classList.add("bytm-advanced-mode-indicator-label");
            advancedIndicatorLabelEl.textContent = t("advanced_mode");
            advancedIndicatorEl = document.createElement("span");
            advancedIndicatorEl.appendChild(advancedIndicatorIconEl);
            advancedIndicatorEl.appendChild(advancedIndicatorLabelEl);
        }
        subtitleElemCont.appendChild(versionEl);
        advancedIndicatorEl && subtitleElemCont.appendChild(advancedIndicatorEl);
        titleElem.appendChild(subtitleElemCont);
        menuContainer.appendChild(footerCont);
        backgroundElem.appendChild(menuContainer);
        document.body.appendChild(backgroundElem);
        window.addEventListener("resize", UserUtils.debounce(checkToggleScrollIndicator, 150));
        log("Added menu element");
        // ensure stuff is reset if menu was opened before being added
        isCfgMenuOpen = false;
        document.body.classList.remove("bytm-disable-scroll");
        (_e = document.querySelector("ytmusic-app")) === null || _e === void 0 ? void 0 : _e.removeAttribute("inert");
        backgroundElem.style.visibility = "hidden";
        backgroundElem.style.display = "none";
    });
}
/** Closes the config menu if it is open. If a bubbling event is passed, its propagation will be prevented. */
function closeCfgMenu(evt, enableScroll = true) {
    var _a;
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
}
//#MARKER help dialog
let isHelpDialogOpen = false;
/** Key of the feature currently loaded in the help dialog */
let helpDialogCurFeature;
/** Opens the feature help dialog for the given feature */
function openHelpDialog(featureKey) {
    var _a, _b, _c;
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
            const helpIconSvg = yield resourceToHTMLString("icon-help");
            if (helpIconSvg)
                titleCont.innerHTML = helpIconSvg;
            const closeElem = document.createElement("img");
            closeElem.classList.add("bytm-menu-close", "small");
            closeElem.role = "button";
            closeElem.tabIndex = 0;
            closeElem.src = yield getResourceUrl("img-close");
            closeElem.ariaLabel = closeElem.title = t("close_menu_tooltip");
            closeElem.addEventListener("click", (e) => closeHelpDialog(e));
            closeElem.addEventListener("keydown", (e) => e.key === "Enter" && closeHelpDialog(e));
            headerElem.appendChild(titleCont);
            headerElem.appendChild(closeElem);
            menuBgElem = document.createElement("div");
            menuBgElem.id = "bytm-feat-help-menu-bg";
            menuBgElem.classList.add("bytm-menu-bg");
            menuBgElem.ariaLabel = menuBgElem.title = t("close_menu_tooltip");
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
            menuContainer.ariaLabel = menuContainer.title = ""; // prevent bg title from propagating downwards
            menuContainer.classList.add("bytm-menu");
            menuContainer.id = "bytm-feat-help-menu";
            const featDescElem = document.createElement("h3");
            featDescElem.id = "bytm-feat-help-menu-desc";
            const helpTextElem = document.createElement("div");
            helpTextElem.id = "bytm-feat-help-menu-text";
            menuContainer.appendChild(headerElem);
            menuContainer.appendChild(featDescElem);
            menuContainer.appendChild(helpTextElem);
            menuBgElem.appendChild(menuContainer);
            document.body.appendChild(menuBgElem);
        }
        else
            menuBgElem = document.querySelector("#bytm-feat-help-menu-bg");
        if (helpDialogCurFeature !== featureKey) {
            // update help text
            const featDescElem = menuBgElem.querySelector("#bytm-feat-help-menu-desc");
            const helpTextElem = menuBgElem.querySelector("#bytm-feat-help-menu-text");
            featDescElem.textContent = t(`feature_desc_${featureKey}`);
            // @ts-ignore
            const helpText = (_b = (_a = featInfo[featureKey]) === null || _a === void 0 ? void 0 : _a.helpText) === null || _b === void 0 ? void 0 : _b.call(_a);
            helpTextElem.textContent = helpText !== null && helpText !== void 0 ? helpText : t(`feature_helptext_${featureKey}`);
        }
        // show menu
        const menuBg = document.querySelector("#bytm-feat-help-menu-bg");
        if (!menuBg)
            return warn("Couldn't find feature help dialog background element");
        helpDialogCurFeature = featureKey;
        menuBg.style.visibility = "visible";
        menuBg.style.display = "block";
        (_c = document.querySelector("#bytm-cfg-menu")) === null || _c === void 0 ? void 0 : _c.setAttribute("inert", "true");
    });
}
function closeHelpDialog(evt) {
    var _a;
    if (!isHelpDialogOpen)
        return;
    isHelpDialogOpen = false;
    (evt === null || evt === void 0 ? void 0 : evt.bubbles) && evt.stopPropagation();
    const menuBg = document.querySelector("#bytm-feat-help-menu-bg");
    if (!menuBg)
        return warn("Couldn't find feature help dialog background element");
    menuBg.style.visibility = "hidden";
    menuBg.style.display = "none";
    (_a = document.querySelector("#bytm-cfg-menu")) === null || _a === void 0 ? void 0 : _a.removeAttribute("inert");
}
//#MARKER export menu
let isExportMenuAdded = false;
let isExportMenuOpen = false;
let copiedTxtTimeout = undefined;
let lastUncompressedCfgString;
/** Adds a menu to copy the current configuration as compressed (if supported) or uncompressed JSON (hidden by default) */
function addExportMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        const canCompress = yield compressionSupported();
        const menuBgElem = document.createElement("div");
        menuBgElem.id = "bytm-export-menu-bg";
        menuBgElem.classList.add("bytm-menu-bg");
        menuBgElem.ariaLabel = menuBgElem.title = t("close_menu_tooltip");
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
        menuContainer.ariaLabel = menuContainer.title = ""; // prevent bg title from propagating downwards
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
        titleElem.textContent = t("export_menu_title", scriptInfo.name);
        const closeElem = document.createElement("img");
        closeElem.classList.add("bytm-menu-close");
        closeElem.role = "button";
        closeElem.tabIndex = 0;
        closeElem.src = yield getResourceUrl("img-close");
        closeElem.ariaLabel = closeElem.title = t("close_menu_tooltip");
        const closeExportMenuClicked = (e) => {
            closeExportMenu(e);
            openCfgMenu();
        };
        closeElem.addEventListener("click", (e) => closeExportMenuClicked(e));
        closeElem.addEventListener("keydown", (e) => e.key === "Enter" && closeExportMenuClicked(e));
        titleCont.appendChild(titleElem);
        headerElem.appendChild(titleCont);
        headerElem.appendChild(closeElem);
        //#SECTION body
        const menuBodyElem = document.createElement("div");
        menuBodyElem.classList.add("bytm-menu-body");
        const textElem = document.createElement("div");
        textElem.id = "bytm-export-menu-text";
        textElem.textContent = t("export_hint");
        const textAreaElem = document.createElement("textarea");
        textAreaElem.id = "bytm-export-menu-textarea";
        textAreaElem.readOnly = true;
        const cfgString = JSON.stringify({ formatVersion, data: getFeatures() });
        lastUncompressedCfgString = JSON.stringify({ formatVersion, data: getFeatures() }, undefined, 2);
        textAreaElem.value = canCompress ? yield UserUtils.compress(cfgString, compressionFormat, "string") : cfgString;
        siteEvents.on("configChanged", (data) => __awaiter(this, void 0, void 0, function* () {
            const textAreaElem = document.querySelector("#bytm-export-menu-textarea");
            const cfgString = JSON.stringify({ formatVersion, data });
            lastUncompressedCfgString = JSON.stringify({ formatVersion, data }, undefined, 2);
            if (textAreaElem)
                textAreaElem.value = canCompress ? yield UserUtils.compress(cfgString, compressionFormat, "string") : cfgString;
        }));
        //#SECTION footer
        const footerElem = document.createElement("div");
        footerElem.classList.add("bytm-menu-footer-right");
        const copyBtnElem = document.createElement("button");
        copyBtnElem.classList.add("bytm-btn");
        copyBtnElem.textContent = t("copy_to_clipboard");
        copyBtnElem.ariaLabel = copyBtnElem.title = t("copy_config_tooltip");
        const copiedTextElem = document.createElement("span");
        copiedTextElem.id = "bytm-export-menu-copied-txt";
        copiedTextElem.classList.add("bytm-menu-footer-copied");
        copiedTextElem.textContent = t("copied_notice");
        copiedTextElem.style.display = "none";
        const copyBtnClicked = (evt) => __awaiter(this, void 0, void 0, function* () {
            (evt === null || evt === void 0 ? void 0 : evt.bubbles) && evt.stopPropagation();
            const textAreaElem = document.querySelector("#bytm-export-menu-textarea");
            if (textAreaElem) {
                GM.setClipboard(String((evt === null || evt === void 0 ? void 0 : evt.shiftKey) || (evt === null || evt === void 0 ? void 0 : evt.ctrlKey) ? lastUncompressedCfgString : textAreaElem.value));
                copiedTextElem.style.display = "inline-block";
                if (typeof copiedTxtTimeout === "undefined") {
                    copiedTxtTimeout = setTimeout(() => {
                        copiedTextElem.style.display = "none";
                        copiedTxtTimeout = undefined;
                    }, 3000);
                }
            }
        });
        copyBtnElem.addEventListener("click", copyBtnClicked);
        copyBtnElem.addEventListener("keydown", (e) => e.key === "Enter" && copyBtnClicked(e));
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
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (!isExportMenuAdded)
            yield addExportMenu();
        isExportMenuAdded = true;
        if (isExportMenuOpen)
            return;
        isExportMenuOpen = true;
        document.body.classList.add("bytm-disable-scroll");
        (_a = document.querySelector("ytmusic-app")) === null || _a === void 0 ? void 0 : _a.setAttribute("inert", "true");
        const menuBg = document.querySelector("#bytm-export-menu-bg");
        if (!menuBg)
            return warn("Couldn't find export menu background element");
        menuBg.style.visibility = "visible";
        menuBg.style.display = "block";
    });
}
//#MARKER import menu
let isImportMenuAdded = false;
let isImportMenuOpen = false;
/** Adds a menu to import a configuration from compressed or uncompressed JSON (hidden by default) */
function addImportMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        const menuBgElem = document.createElement("div");
        menuBgElem.id = "bytm-import-menu-bg";
        menuBgElem.classList.add("bytm-menu-bg");
        menuBgElem.ariaLabel = menuBgElem.title = t("close_menu_tooltip");
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
        menuContainer.ariaLabel = menuContainer.title = ""; // prevent bg title from propagating downwards
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
        titleElem.textContent = t("import_menu_title", scriptInfo.name);
        const closeElem = document.createElement("img");
        closeElem.classList.add("bytm-menu-close");
        closeElem.role = "button";
        closeElem.tabIndex = 0;
        closeElem.src = yield getResourceUrl("img-close");
        closeElem.ariaLabel = closeElem.title = t("close_menu_tooltip");
        const closeImportMenuClicked = (e) => {
            closeImportMenu(e);
            openCfgMenu();
        };
        closeElem.addEventListener("click", closeImportMenuClicked);
        closeElem.addEventListener("keydown", (e) => e.key === "Enter" && closeImportMenuClicked(e));
        titleCont.appendChild(titleElem);
        headerElem.appendChild(titleCont);
        headerElem.appendChild(closeElem);
        //#SECTION body
        const menuBodyElem = document.createElement("div");
        menuBodyElem.classList.add("bytm-menu-body");
        const textElem = document.createElement("div");
        textElem.id = "bytm-import-menu-text";
        textElem.textContent = t("import_hint");
        const textAreaElem = document.createElement("textarea");
        textAreaElem.id = "bytm-import-menu-textarea";
        //#SECTION footer
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
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (!isImportMenuAdded)
            yield addImportMenu();
        isImportMenuAdded = true;
        if (isImportMenuOpen)
            return;
        isImportMenuOpen = true;
        document.body.classList.add("bytm-disable-scroll");
        (_a = document.querySelector("ytmusic-app")) === null || _a === void 0 ? void 0 : _a.setAttribute("inert", "true");
        const menuBg = document.querySelector("#bytm-import-menu-bg");
        if (!menuBg)
            return warn("Couldn't find import menu background element");
        menuBg.style.visibility = "visible";
        menuBg.style.display = "block";
    });
}
//#MARKER changelog menu
let isChangelogMenuAdded = false;
let isChangelogMenuOpen = false;
/** Adds a changelog menu (hidden by default) */
function addChangelogMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        const menuBgElem = document.createElement("div");
        menuBgElem.id = "bytm-changelog-menu-bg";
        menuBgElem.classList.add("bytm-menu-bg");
        menuBgElem.ariaLabel = menuBgElem.title = t("close_menu_tooltip");
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
        menuContainer.ariaLabel = menuContainer.title = ""; // prevent bg title from propagating downwards
        menuContainer.classList.add("bytm-menu", "top-aligned");
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
        titleElem.textContent = t("changelog_menu_title", scriptInfo.name);
        const closeElem = document.createElement("img");
        closeElem.classList.add("bytm-menu-close");
        closeElem.role = "button";
        closeElem.tabIndex = 0;
        closeElem.src = yield getResourceUrl("img-close");
        closeElem.ariaLabel = closeElem.title = t("close_menu_tooltip");
        const closeChangelogMenuClicked = (e) => {
            closeChangelogMenu(e);
            if (menuBgElem.dataset.returnTo === "cfgMenu")
                openCfgMenu();
        };
        closeElem.addEventListener("click", closeChangelogMenuClicked);
        closeElem.addEventListener("keydown", (e) => e.key === "Enter" && closeChangelogMenuClicked(e));
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
        textElem.innerHTML = yield getChangelogHtmlWithDetails();
        //#SECTION finalize
        menuBodyElem.appendChild(textElem);
        menuContainer.appendChild(headerElem);
        menuContainer.appendChild(menuBodyElem);
        menuBgElem.appendChild(menuContainer);
        document.body.appendChild(menuBgElem);
        const anchors = document.querySelectorAll("#bytm-changelog-menu-text a");
        for (const anchor of anchors) {
            anchor.ariaLabel = anchor.title = anchor.href;
            anchor.target = "_blank";
        }
    });
}
/** Closes the changelog menu if it is open. If a bubbling event is passed, its propagation will be prevented. */
function closeChangelogMenu(evt) {
    if (!isChangelogMenuOpen)
        return;
    isChangelogMenuOpen = false;
    (evt === null || evt === void 0 ? void 0 : evt.bubbles) && evt.stopPropagation();
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
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (!isChangelogMenuAdded)
            yield addChangelogMenu();
        isChangelogMenuAdded = true;
        if (isChangelogMenuOpen)
            return;
        isChangelogMenuOpen = true;
        document.body.classList.add("bytm-disable-scroll");
        (_a = document.querySelector("ytmusic-app")) === null || _a === void 0 ? void 0 : _a.setAttribute("inert", "true");
        const menuBg = document.querySelector("#bytm-changelog-menu-bg");
        if (!menuBg)
            return warn("Couldn't find changelog menu background element");
        const firstDetails = menuBg.querySelector("#bytm-changelog-menu-text details");
        if (firstDetails)
            firstDetails.open = true;
        menuBg.dataset.returnTo = returnTo;
        menuBg.style.visibility = "visible";
        menuBg.style.display = "block";
    });
}let features$2;
function setLayoutConfig(feats) {
    features$2 = feats;
}
//#MARKER BYTM-Config buttons
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
        watermark.addEventListener("click", watermarkOpenMenu);
        watermark.addEventListener("keydown", (e) => e.key === "Enter" && watermarkOpenMenu(e));
        onSelectorOld("ytmusic-nav-bar #left-content", {
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
/** Called whenever the avatar popover menu exists to add a BYTM-Configuration button to the user menu popover */
function addConfigMenuOption(container) {
    return __awaiter(this, void 0, void 0, function* () {
        const cfgOptElem = document.createElement("div");
        cfgOptElem.className = "bytm-cfg-menu-option";
        const cfgOptItemElem = document.createElement("div");
        cfgOptItemElem.className = "bytm-cfg-menu-option-item";
        cfgOptItemElem.role = "button";
        cfgOptItemElem.tabIndex = 0;
        cfgOptItemElem.ariaLabel = cfgOptItemElem.title = t("open_menu_tooltip", scriptInfo.name);
        const cfgOptItemClicked = (e) => __awaiter(this, void 0, void 0, function* () {
            const settingsBtnElem = document.querySelector("ytmusic-nav-bar ytmusic-settings-button tp-yt-paper-icon-button");
            settingsBtnElem === null || settingsBtnElem === void 0 ? void 0 : settingsBtnElem.click();
            yield UserUtils.pauseFor(20);
            if ((!e.shiftKey && !e.ctrlKey) || logoExchanged)
                openCfgMenu();
            if (!logoExchanged && (e.shiftKey || e.ctrlKey))
                exchangeLogo();
        });
        cfgOptItemElem.addEventListener("click", cfgOptItemClicked);
        cfgOptItemElem.addEventListener("keydown", (e) => e.key === "Enter" && cfgOptItemClicked(e));
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
            listener: (sliderElem) => __awaiter(this, void 0, void 0, function* () {
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
                UserUtils.addParent(sliderElem, volSliderCont);
                if (typeof features$2.volumeSliderSize === "number")
                    setVolSliderSize();
                if (features$2.volumeSliderLabel)
                    yield addVolumeSliderLabel(sliderElem, volSliderCont);
                setVolSliderStep(sliderElem);
            }),
        });
    });
}
/** Adds a percentage label to the volume slider and tooltip */
function addVolumeSliderLabel(sliderElem, sliderContainer) {
    return __awaiter(this, void 0, void 0, function* () {
        const labelContElem = document.createElement("div");
        labelContElem.id = "bytm-vol-slider-label";
        const getLabel = (value) => `${getFeatures().lockVolume ? getFeatures().lockVolumeLevel : value}%`;
        const labelElem = document.createElement("div");
        labelElem.classList.add("label");
        labelElem.textContent = getLabel(sliderElem.value);
        // prevent video from minimizing
        labelContElem.addEventListener("click", (e) => e.stopPropagation());
        const getLabelText = (slider) => { var _a; return t("volume_tooltip", getFeatures().lockVolume ? getFeatures().lockVolumeLevel : slider.value, (_a = features$2.volumeSliderStep) !== null && _a !== void 0 ? _a : slider.step); };
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
        let lockIconElem;
        const lockIconHtml = yield resourceToHTMLString("icon-lock");
        if (getFeatures().lockVolume && lockIconHtml) {
            lockIconElem = document.createElement("span");
            lockIconElem.title = lockIconElem.ariaLabel = t("volume_locked", getFeatures().lockVolumeLevel);
            lockIconElem.innerHTML = lockIconHtml;
        }
        else {
            lockIconElem = document.createElement("div");
            lockIconElem.textContent = " ";
            lockIconElem.style.minWidth = "32px";
        }
        sliderElem.addEventListener("change", () => updateLabel());
        siteEvents.on("configChanged", () => {
            updateLabel();
            if (lockIconElem)
                lockIconElem.title = lockIconElem.ariaLabel = t("volume_locked", getFeatures().lockVolumeLevel);
        });
        onSelectorOld("#bytm-vol-slider-cont", {
            listener: (volumeCont) => {
                lockIconElem && labelContElem.appendChild(lockIconElem);
                labelContElem.appendChild(labelElem);
                volumeCont.appendChild(labelContElem);
            },
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
/** Sets the volume slider to a set size */
function setVolSliderSize() {
    const { volumeSliderSize: size } = features$2;
    if (typeof size !== "number" || isNaN(Number(size)))
        return;
    UserUtils.addGlobalStyle(`\
#bytm-vol-slider-cont tp-yt-paper-slider#volume-slider {
  width: ${size}px !important;
}`).id = "bytm-style-vol-slider-size";
}
/** Sets the `step` attribute of the volume slider */
function setVolSliderStep(sliderElem) {
    sliderElem.setAttribute("step", String(features$2.volumeSliderStep));
}
//#MARKER anchor improvements
/** Adds anchors around elements and tweaks existing ones so songs are easier to open in a new tab */
function addAnchorImprovements() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const css = yield (yield UserUtils.fetchAdvanced(yield getResourceUrl("css-anchor_improvements"))).text();
            if (css)
                UserUtils.addGlobalStyle(css).id = "bytm-style-anchor-improvements";
        }
        catch (err) {
            error("Couldn't add anchor improvements CSS due to an error:", err);
        }
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
                    UserUtils.addParent(thumbnailElem, anchorElem);
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
                    log(`Added anchors around ${itemsAmt} sidebar ${UserUtils.autoPlural("item", itemsAmt)}`);
                },
            });
            onSelectorOld("ytmusic-app-layout #mini-guide ytmusic-guide-renderer ytmusic-guide-section-renderer #items ytmusic-guide-entry-renderer", {
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
//#MARKER remove share tracking param
let lastShareVal = "";
/** Removes the ?si tracking parameter from share URLs */
function removeShareTrackingParam() {
    return __awaiter(this, void 0, void 0, function* () {
        const removeSiParam = (inputElem) => {
            try {
                if (lastShareVal === inputElem.value)
                    return;
                const url = new URL(inputElem.value);
                if (!url.searchParams.has("si"))
                    return;
                lastShareVal = inputElem.value;
                url.searchParams.delete("si");
                inputElem.value = String(url);
                log(`Removed tracking parameter from share link: ${url}`);
            }
            catch (err) {
                warn("Couldn't remove tracking parameter from share link due to error:", err);
            }
        };
        onSelectorOld("tp-yt-paper-dialog ytmusic-unified-share-panel-renderer", {
            listener: (sharePanelEl) => {
                const obs = new MutationObserver(() => {
                    const inputElem = sharePanelEl.querySelector("input#share-url");
                    inputElem && removeSiParam(inputElem);
                });
                obs.observe(sharePanelEl, {
                    childList: true,
                    subtree: true,
                    attributeFilter: ["aria-hidden", "checked"],
                });
            },
        });
    });
}
//#MARKER fix margins
/** Applies global CSS to fix various spacings */
function fixSpacing() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const css = yield (yield UserUtils.fetchAdvanced(yield getResourceUrl("css-fix_spacing"))).text();
            if (css)
                UserUtils.addGlobalStyle(css).id = "bytm-style-fix-spacing";
        }
        catch (err) {
            error("Couldn't fix spacing due to an error:", err);
        }
    });
}
//#MARKER scroll to active song
/** Adds a button to the queue to scroll to the active song */
function addScrollToActiveBtn() {
    return __awaiter(this, void 0, void 0, function* () {
        onSelectorOld("#side-panel #tabsContent tp-yt-paper-tab:nth-of-type(1)", {
            listener: (tabElem) => __awaiter(this, void 0, void 0, function* () {
                const containerElem = document.createElement("div");
                containerElem.id = "bytm-scroll-to-active-btn-cont";
                const linkElem = document.createElement("div");
                linkElem.id = "bytm-scroll-to-active-btn";
                linkElem.className = "ytmusic-player-bar bytm-generic-btn";
                linkElem.ariaLabel = linkElem.title = t("scroll_to_playing");
                linkElem.role = "button";
                const imgElem = document.createElement("img");
                imgElem.className = "bytm-generic-btn-img";
                imgElem.src = yield getResourceUrl("icon-skip_to");
                linkElem.addEventListener("click", (e) => {
                    const activeItem = document.querySelector("#side-panel .ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"loading\"], #side-panel .ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"playing\"], #side-panel .ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"paused\"]");
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
}const inputIgnoreTagNames = ["INPUT", "TEXTAREA", "SELECT", "BUTTON", "A"];
let features$1;
function setInputConfig(feats) {
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
            if (inputIgnoreTagNames.includes((_b = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.tagName) !== null && _b !== void 0 ? _b : ""))
                return info(`Captured valid key to skip forward or backward but the current active element is <${(_c = document.activeElement) === null || _c === void 0 ? void 0 : _c.tagName.toLowerCase()}>, so the keypress is ignored`);
            evt.preventDefault();
            evt.stopImmediatePropagation();
            let skipBy = (_d = features$1.arrowKeySkipBy) !== null && _d !== void 0 ? _d : featInfo.arrowKeySkipBy.default;
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
const numKeysIgnoreTagNames = [...inputIgnoreTagNames, "TP-YT-PAPER-TAB"];
const numKeysIgnoreIds = ["progress-bar", "song-media-window"];
/** Adds the ability to skip to a certain time in the video by pressing a number key (0-9) */
function initNumKeysSkip() {
    return __awaiter(this, void 0, void 0, function* () {
        document.addEventListener("keydown", (e) => {
            var _a, _b, _c, _d;
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
            UserUtils.insertAfter(likeContainer, linkElem);
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
//#MARKER utils
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
        linkElem.className = "ytmusic-player-bar bytm-generic-btn";
        linkElem.ariaLabel = linkElem.title = geniusUrl ? t("open_lyrics") : t("lyrics_loading");
        if (geniusUrl)
            linkElem.href = geniusUrl;
        linkElem.role = "button";
        linkElem.target = "_blank";
        linkElem.rel = "noopener noreferrer";
        linkElem.style.visibility = hideIfLoading && geniusUrl ? "initial" : "hidden";
        linkElem.style.display = hideIfLoading && geniusUrl ? "inline-flex" : "none";
        const imgElem = document.createElement("img");
        imgElem.className = "bytm-generic-btn-img";
        imgElem.src = yield getResourceUrl("icon-lyrics");
        linkElem.appendChild(imgElem);
        return linkElem;
    });
}
/** Splits a video title that contains a hyphen into an artist and song */
function splitVideoTitle(title) {
    const [artist, ...rest] = title.split("-").map((v, i) => i < 2 ? v.trim() : v);
    return { artist, song: rest.join("-") };
}let features;
function setSongListsConfig(feats) {
    features = feats;
}
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
 * @param listType The type of list the queue item is in
 * @param classes Extra CSS classes to apply to the container
 */
function addQueueButtons(queueItem, containerParentSelector = ".song-info", listType = "currentQueue", classes = []) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        //#SECTION general queue item stuff
        const queueBtnsCont = document.createElement("div");
        queueBtnsCont.classList.add("bytm-queue-btn-container", ...classes);
        const lyricsIconUrl = yield getResourceUrl("icon-lyrics");
        const deleteIconUrl = yield getResourceUrl("icon-delete");
        //#SECTION lyrics btn
        let lyricsBtnElem;
        if (features.lyricsQueueButton) {
            lyricsBtnElem = yield createLyricsBtn(undefined, false);
            lyricsBtnElem.ariaLabel = lyricsBtnElem.title = t("open_lyrics");
            lyricsBtnElem.style.display = "inline-flex";
            lyricsBtnElem.style.visibility = "initial";
            lyricsBtnElem.style.pointerEvents = "initial";
            lyricsBtnElem.role = "link";
            lyricsBtnElem.tabIndex = 0;
            const lyricsBtnClicked = (e) => __awaiter(this, void 0, void 0, function* () {
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
                            UserUtils.openInNewTab(`https://genius.com/search?q=${encodeURIComponent(`${artistsSan} - ${songSan}`)}`);
                        return;
                    }
                }
                lyricsUrl && UserUtils.openInNewTab(lyricsUrl);
            });
            lyricsBtnElem.addEventListener("click", lyricsBtnClicked);
            lyricsBtnElem.addEventListener("keydown", (e) => e.key === "Enter" && lyricsBtnClicked(e));
        }
        //#SECTION delete from queue btn
        let deleteBtnElem;
        if (features.deleteFromQueueButton) {
            deleteBtnElem = document.createElement("a");
            deleteBtnElem.ariaLabel = deleteBtnElem.title = (listType === "currentQueue" ? t("remove_from_queue") : t("delete_from_list"));
            deleteBtnElem.classList.add("ytmusic-player-bar", "bytm-delete-from-queue", "bytm-generic-btn");
            deleteBtnElem.role = "button";
            deleteBtnElem.tabIndex = 0;
            deleteBtnElem.style.visibility = "initial";
            const imgElem = document.createElement("img");
            imgElem.classList.add("bytm-generic-btn-img");
            imgElem.src = deleteIconUrl;
            const deleteBtnClicked = (e) => __awaiter(this, void 0, void 0, function* () {
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
            });
            deleteBtnElem.addEventListener("click", deleteBtnClicked);
            deleteBtnElem.addEventListener("keydown", (e) => e.key === "Enter" && deleteBtnClicked(e));
            deleteBtnElem.appendChild(imgElem);
        }
        //#SECTION append elements to DOM
        lyricsBtnElem && queueBtnsCont.appendChild(lyricsBtnElem);
        deleteBtnElem && queueBtnsCont.appendChild(deleteBtnElem);
        (_a = queueItem.querySelector(containerParentSelector)) === null || _a === void 0 ? void 0 : _a.appendChild(queueBtnsCont);
        queueItem.classList.add("bytm-has-queue-btns");
    });
}//#MARKER feature dependencies
/** List of all available locale SelectOptions */
const localeOptions = Object.entries(locales).reduce((a, [locale, { name }]) => {
    return [...a, {
            value: locale,
            label: name,
        }];
}, [])
    .sort((a, b) => a.label.localeCompare(b.label));
/** Decoration elements that can be added next to the label */
const adornments = {
    advancedMode: () => __awaiter(void 0, void 0, void 0, function* () { var _a; return `<span class="bytm-advanced-mode-icon bytm-adorn-icon" title="${t("advanced_mode")}">${(_a = yield resourceToHTMLString("icon-advanced_mode")) !== null && _a !== void 0 ? _a : ""}</span>`; }),
    experimental: () => __awaiter(void 0, void 0, void 0, function* () { var _b; return `<span class="bytm-experimental-icon bytm-adorn-icon" title="${t("experimental_feature")}">${(_b = yield resourceToHTMLString("icon-experimental")) !== null && _b !== void 0 ? _b : ""}</span>`; }),
    globe: () => __awaiter(void 0, void 0, void 0, function* () { var _c; return (_c = yield resourceToHTMLString("icon-globe")) !== null && _c !== void 0 ? _c : ""; }),
};
//#MARKER features
/**
 * Contains all possible features with their default values and other configuration.
 *
 * **Required props:**
 * | Property | Description |
 * | :-- | :-- |
 * | `type`               | type of the feature configuration element - use autocomplete or check `FeatureTypeProps` in `src/types.ts` |
 * | `category`           | category of the feature - use autocomplete or check `FeatureCategory` in `src/types.ts` |
 * | `default`            | default value of the feature - type of the value depends on the given `type` |
 * | `enable(value: any)` | function that will be called when the feature is enabled / initialized for the first time |
 *
 * **Optional props:**
 * | Property | Description |
 * | :-- | :-- |
 * | `disable: (newValue: any) => void`                | for type `toggle` only - function that will be called when the feature is disabled - can be a synchronous or asynchronous function |
 * | `change: (prevValue: any, newValue: any)` => void | for types `number`, `select`, `slider` and `hotkey` only - function that will be called when the value is changed |
 * | `click: () => void`                               | for type `button` only - function that will be called when the button is clicked |
 * | `helpText: string / () => string`                 | function that returns an HTML string or the literal string itself that will be the help text for this feature - writing as function is useful for pluralizing or inserting values into the translation at runtime - if not set, translation with key `feature_helptext_featureKey` will be used instead, if available |
 * | `textAdornment: () => string / Promise<string>`   | function that returns an HTML string that will be appended to the text in the config menu as an adornment element - TODO: to be replaced in the big menu rework |
 * | `unit: string / (val: number) => string`          | Only if type is `number` or `slider` - The unit text that is displayed next to the input element, i.e. "px" |
 * | `min: number`                                     | Only if type is `number` or `slider` - Overwrites the default of the `min` property of the HTML input element |
 * | `max: number`                                     | Only if type is `number` or `slider` - Overwrites the default of the `max` property of the HTML input element |
 * | `step: number`                                    | Only if type is `number` or `slider` - Overwrites the default of the `step` property of the HTML input element |
 * | `options: SelectOption[] / () => SelectOption[]`  | Only if type is `select` - function that returns an array of objects with `value` and `label` properties |
 * | `advanced: boolean`                               | if true, the feature will only be shown if the advanced mode feature has been turned on |
 * | `hidden: boolean`                                 | if true, the feature will not be shown in the settings - default is undefined (false) |
 * | `valueHidden: boolean`                            | If true, the value of the feature will be hidden in the settings and via the plugin interface - default is undefined (false) |
 * | `normalize: (val: any) => any`                    | Function that will be called to normalize the value before it is saved - useful for trimming strings or other simple operations |
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
        enable: noopTODO,
    },
    volumeSliderLabel: {
        type: "toggle",
        category: "layout",
        default: true,
        enable: noopTODO,
        disable: noopTODO,
    },
    volumeSliderSize: {
        type: "number",
        category: "layout",
        min: 50,
        max: 500,
        step: 5,
        default: 150,
        unit: "px",
        enable: noopTODO,
        change: noopTODO,
    },
    volumeSliderStep: {
        type: "slider",
        category: "layout",
        min: 1,
        max: 25,
        default: 2,
        unit: "%",
        enable: noopTODO,
        change: noopTODO,
    },
    volumeSliderScrollStep: {
        type: "slider",
        category: "layout",
        min: 1,
        max: 25,
        default: 10,
        unit: "%",
        enable: noopTODO,
        change: noopTODO,
    },
    watermarkEnabled: {
        type: "toggle",
        category: "layout",
        default: true,
        enable: noopTODO,
        disable: noopTODO,
    },
    removeShareTrackingParam: {
        type: "toggle",
        category: "layout",
        default: true,
        enable: noopTODO,
        disable: noopTODO,
    },
    fixSpacing: {
        type: "toggle",
        category: "layout",
        default: true,
        enable: noopTODO,
        disable: noopTODO,
    },
    scrollToActiveSongBtn: {
        type: "toggle",
        category: "layout",
        default: true,
        enable: noopTODO,
        disable: noopTODO,
    },
    //#SECTION song lists
    lyricsQueueButton: {
        type: "toggle",
        category: "songLists",
        default: true,
        enable: noopTODO,
        disable: noopTODO,
    },
    deleteFromQueueButton: {
        type: "toggle",
        category: "songLists",
        default: true,
        enable: noopTODO,
        disable: noopTODO,
    },
    listButtonsPlacement: {
        type: "select",
        category: "songLists",
        options: () => [
            { value: "queueOnly", label: t("list_button_placement_queue_only") },
            { value: "everywhere", label: t("list_button_placement_everywhere") },
        ],
        default: "everywhere",
        enable: noopTODO,
        disable: noopTODO,
    },
    //#SECTION behavior
    disableBeforeUnloadPopup: {
        type: "toggle",
        category: "behavior",
        default: false,
        enable: noopTODO,
    },
    closeToastsTimeout: {
        type: "number",
        category: "behavior",
        min: 0,
        max: 30,
        step: 0.5,
        default: 0,
        unit: "s",
        enable: noopTODO,
        change: noopTODO,
    },
    rememberSongTime: {
        type: "toggle",
        category: "behavior",
        default: true,
        enable: noopTODO,
        disable: noopTODO, // TODO: feasible?
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
        enable: noopTODO,
        change: noopTODO,
    },
    lockVolume: {
        type: "toggle",
        category: "behavior",
        default: false,
        enable: () => noopTODO,
        disable: () => noopTODO,
    },
    lockVolumeLevel: {
        type: "slider",
        category: "behavior",
        min: 0,
        max: 100,
        step: 1,
        default: 100,
        unit: "%",
        enable: noop,
        change: () => noopTODO,
    },
    //#SECTION input
    arrowKeySupport: {
        type: "toggle",
        category: "input",
        default: true,
        enable: noopTODO,
        disable: noopTODO,
    },
    arrowKeySkipBy: {
        type: "number",
        category: "input",
        min: 0.5,
        max: 60,
        step: 0.5,
        default: 5,
        enable: noopTODO,
        change: noopTODO,
    },
    switchBetweenSites: {
        type: "toggle",
        category: "input",
        default: true,
        enable: noopTODO,
        disable: noopTODO,
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
        enable: noopTODO,
        change: noopTODO,
    },
    anchorImprovements: {
        type: "toggle",
        category: "input",
        default: true,
        enable: noopTODO,
        disable: noopTODO,
    },
    numKeysSkipToTime: {
        type: "toggle",
        category: "input",
        default: true,
        enable: noopTODO,
        disable: noopTODO,
    },
    //#SECTION lyrics
    geniusLyrics: {
        type: "toggle",
        category: "lyrics",
        default: true,
        enable: noopTODO,
        disable: noopTODO,
    },
    geniUrlBase: {
        type: "text",
        category: "lyrics",
        default: "https://api.sv443.net/geniurl",
        normalize: (val) => val.trim().replace(/\/+$/, ""),
        advanced: true,
        // TODO: to be reworked or removed in the big menu rework
        textAdornment: adornments.advancedMode,
    },
    geniUrlToken: {
        type: "text",
        valueHidden: true,
        category: "lyrics",
        default: "",
        normalize: (val) => val.trim(),
        advanced: true,
        // TODO: to be reworked or removed in the big menu rework
        textAdornment: adornments.advancedMode,
    },
    lyricsCacheMaxSize: {
        type: "slider",
        category: "lyrics",
        default: 1000,
        min: 100,
        max: 5000,
        step: 100,
        unit: (val) => tp("unit_entries", val),
        enable: noopTODO,
        change: noopTODO,
        advanced: true,
        // TODO: to be reworked or removed in the big menu rework
        textAdornment: adornments.advancedMode,
    },
    lyricsCacheTTL: {
        type: "slider",
        category: "lyrics",
        default: 21,
        min: 1,
        max: 100,
        step: 1,
        unit: (val) => tp("unit_days", val),
        enable: noopTODO,
        change: noopTODO,
        advanced: true,
        // TODO: to be reworked or removed in the big menu rework
        textAdornment: adornments.advancedMode,
    },
    clearLyricsCache: {
        type: "button",
        category: "lyrics",
        default: undefined,
        click() {
            const entries = getLyricsCache().length;
            if (confirm(tp("lyrics_clear_cache_confirm_prompt", entries, entries))) {
                clearLyricsCache();
                alert(t("lyrics_clear_cache_success"));
            }
        },
        advanced: true,
        // TODO: to be reworked or removed in the big menu rework
        textAdornment: adornments.advancedMode,
    },
    advancedLyricsFilter: {
        type: "toggle",
        category: "lyrics",
        default: false,
        enable: noopTODO,
        disable: noopTODO,
        // TODO: use dialog here?
        change: () => confirm(t("lyrics_cache_changed_clear_confirm")) && clearLyricsCache(),
        advanced: true,
        // TODO: to be reworked or removed in the big menu rework
        textAdornment: adornments.experimental,
    },
    //#SECTION general
    locale: {
        type: "select",
        category: "general",
        options: localeOptions,
        default: getPreferredLocale(),
        enable: noopTODO,
        // TODO: to be reworked or removed in the big menu rework
        textAdornment: adornments.globe,
    },
    versionCheck: {
        type: "toggle",
        category: "general",
        default: true,
        enable: noopTODO,
        disable: noopTODO,
    },
    checkVersionNow: {
        type: "button",
        category: "general",
        default: undefined,
        click: UserUtils.debounce(() => doVersionCheck(true), 750),
    },
    logLevel: {
        type: "select",
        category: "general",
        options: () => [
            { value: 0, label: t("log_level_debug") },
            { value: 1, label: t("log_level_info") },
        ],
        default: 1,
        enable: noopTODO,
    },
    advancedMode: {
        type: "toggle",
        category: "general",
        default: mode === "development",
        enable: noopTODO,
        disable: noopTODO,
        // TODO: to be reworked or removed in the big menu rework
        textAdornment: () => getFeatures().advancedMode ? adornments.advancedMode() : undefined,
    },
};
function noop() {
}
function noopTODO() {
}/** If this number is incremented, the features object data will be migrated to the new format */
const formatVersion = 5;
/** Config data format migration dictionary */
const migrations = {
    // 1 -> 2
    2: (oldData) => {
        const queueBtnsEnabled = Boolean(oldData.queueButtons);
        delete oldData.queueButtons;
        return Object.assign(Object.assign({}, oldData), { deleteFromQueueButton: queueBtnsEnabled, lyricsQueueButton: queueBtnsEnabled });
    },
    // 2 -> 3
    3: (oldData) => useDefaultConfig([
        "removeShareTrackingParam", "numKeysSkipToTime",
        "fixSpacing", "scrollToActiveSongBtn",
        "logLevel",
    ], oldData),
    // 3 -> 4
    4: (oldData) => {
        var _a, _b, _c, _d;
        const oldSwitchSitesHotkey = oldData.switchSitesHotkey;
        return Object.assign(Object.assign(Object.assign({}, oldData), { arrowKeySkipBy: 10, switchSitesHotkey: {
                code: (_a = oldSwitchSitesHotkey.key) !== null && _a !== void 0 ? _a : "F9",
                shift: Boolean((_b = oldSwitchSitesHotkey.shift) !== null && _b !== void 0 ? _b : false),
                ctrl: Boolean((_c = oldSwitchSitesHotkey.ctrl) !== null && _c !== void 0 ? _c : false),
                alt: Boolean((_d = oldSwitchSitesHotkey.meta) !== null && _d !== void 0 ? _d : false),
            }, listButtonsPlacement: "queueOnly" }), useDefaultConfig([
            "rememberSongTime", "rememberSongTimeSites",
            "volumeSliderScrollStep", "locale",
            "versionCheck",
        ], oldData));
    },
    // 4 -> 5
    5: (oldData) => useDefaultConfig([
        "geniUrlBase", "geniUrlToken",
        "lyricsCacheMaxSize", "lyricsCacheTTL",
        "clearLyricsCache", "advancedMode",
        "lockVolume", "lockVolumeLevel",
        "checkVersionNow", "advancedLyricsFilter",
    ], oldData),
};
/** Uses the passed `oldData` as the base and sets all passed `keys` to their feature default - returns a copy of the object */
function useDefaultConfig(keys, oldData) {
    const newData = Object.assign({}, oldData);
    for (const key of keys)
        newData[key] = getFeatureDefault(key);
    return newData;
}
function getFeatureDefault(key) {
    return featInfo[key].default;
}
const defaultConfig = Object.keys(featInfo)
    .reduce((acc, key) => {
    acc[key] = featInfo[key].default;
    return acc;
}, {});
let canCompress = true;
const cfgMgr = new UserUtils.ConfigManager({
    id: "bytm-config",
    formatVersion,
    defaultConfig,
    migrations,
    encodeData: (data) => canCompress ? UserUtils.compress(data, compressionFormat, "string") : data,
    decodeData: (data) => canCompress ? UserUtils.decompress(data, compressionFormat, "string") : data,
});
/** Initializes the ConfigManager instance and loads persistent data into memory */
function initConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        canCompress = yield compressionSupported();
        const oldFmtVer = Number(yield GM.getValue(`_uucfgver-${cfgMgr.id}`, NaN));
        const data = yield cfgMgr.loadData();
        log(`Initialized ConfigManager (format version = ${cfgMgr.formatVersion})`);
        if (isNaN(oldFmtVer))
            info("Config data initialized with default values");
        else if (oldFmtVer !== cfgMgr.formatVersion)
            info(`Config data migrated from version ${oldFmtVer} to ${cfgMgr.formatVersion}`);
        emitInterface("bytm:configReady", getFeaturesInterface());
        return Object.assign({}, data);
    });
}
/** Returns the current feature config from the in-memory cache as a copy */
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
}const { getUnsafeWindow } = UserUtils__namespace;
const globalFuncs = {
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
    saveFeatures,
    fetchLyricsUrlTop,
    getLyricsCacheEntry,
    sanitizeArtists,
    sanitizeSong,
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
//#MARKER proxy functions
/** Returns the current feature config, with sensitive values replaced by `undefined` */
function getFeaturesInterface() {
    const features = getFeatures();
    for (const ftKey of Object.keys(features)) {
        const info = featInfo[ftKey];
        if (info && info.valueHidden) // @ts-ignore
            features[ftKey] = undefined;
    }
    return features;
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
}//#SECTION misc
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
/** Tests whether compression via the predefined {@linkcode compressionFormat} is supported */
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
//#SECTION resources
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
}const selectorMap = new Map();
/**
 * Calls the {@linkcode listener} as soon as the {@linkcode selector} exists in the DOM.
 * Listeners are deleted when they are called once, unless `options.continuous` is set.
 * Multiple listeners with the same selector may be registered.
 * @param selector The selector to listen for
 * @param options Used for switching to `querySelectorAll()` and for calling the listener continuously
 * @template TElem The type of element that the listener will return as its argument (defaults to the generic type HTMLElement)
 * @deprecated To be replaced with UserUtils' SelectorObserver class
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
}//#MARKER menu
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
        menuContainer.ariaLabel = menuContainer.title = ""; // prevent bg title from propagating downwards
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
        titleLogoElem.src = yield getResourceUrl("img-logo");
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
            yield openChangelogMenu("exit");
            closeWelcomeMenu();
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
        localeImg.src = yield getResourceUrl("icon-globe");
        const localeSelectElem = document.createElement("select");
        localeSelectElem.id = "bytm-welcome-menu-locale-select";
        for (const [locale, { name }] of Object.entries(locales)) {
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
    var _a;
    if (!isWelcomeMenuOpen)
        return;
    isWelcomeMenuOpen = false;
    (evt === null || evt === void 0 ? void 0 : evt.bubbles) && evt.stopPropagation();
    document.body.classList.remove("bytm-disable-scroll");
    (_a = document.querySelector("ytmusic-app")) === null || _a === void 0 ? void 0 : _a.removeAttribute("inert");
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
    var _a;
    if (isWelcomeMenuOpen)
        return;
    isWelcomeMenuOpen = true;
    document.body.classList.add("bytm-disable-scroll");
    (_a = document.querySelector("ytmusic-app")) === null || _a === void 0 ? void 0 : _a.setAttribute("inert", "true");
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
}{
    // console watermark with sexy gradient
    const styleGradient = "background: rgba(165, 38, 38, 1); background: linear-gradient(90deg, rgb(154, 31, 103) 0%, rgb(135, 31, 31) 40%, rgb(184, 64, 41) 100%);";
    const styleCommon = "color: #fff; font-size: 1.5em; padding-left: 6px; padding-right: 6px;";
    console.log();
    console.log(`%c${scriptInfo.name}%cv${scriptInfo.version}%c\n\nBuild ${buildNumber} ─ ${scriptInfo.namespace}`, `font-weight: bold; ${styleCommon} ${styleGradient}`, `background-color: #333; ${styleCommon}`, "padding: initial;");
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
            document.addEventListener("DOMContentLoaded", () => {
                domLoaded = true;
            });
            const features = yield initConfig();
            yield initLyricsCache();
            yield initTranslations((_a = features.locale) !== null && _a !== void 0 ? _a : "en_US");
            setLocale((_b = features.locale) !== null && _b !== void 0 ? _b : "en_US");
            setLogLevel(features.logLevel);
            setLayoutConfig(features);
            setBehaviorConfig(features);
            setInputConfig(features);
            setSongListsConfig(features);
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
        insertGlobalStyle();
        initObservers();
        initOnSelector();
        const features = getFeatures();
        const ftInit = [];
        yield initVersionCheck();
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
                if (features.lockVolume)
                    ftInit.push(enableLockVolume());
                ftInit.push(initVolumeFeatures());
            }
            if (["ytm", "yt"].includes(domain)) {
                if (features.switchBetweenSites)
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
            Promise.allSettled(ftInit).then(() => {
                emitInterface("bytm:ready");
                try {
                    registerMenuCommands();
                }
                catch (e) {
                    void e;
                }
            });
        }
        catch (err) {
            error("Feature error:", err);
        }
    });
}
/** Inserts the bundled CSS files imported throughout the script into a <style> element in the <head> */
function insertGlobalStyle() {
    // post-build these double quotes are replaced by backticks (because if backticks are used here, the bundler converts them to double quotes)
    UserUtils.addGlobalStyle("#{{GLOBAL_STYLE}}").id = "bytm-style-global";
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
        GM.registerMenuCommand("List GM values in console with decompression", () => __awaiter(this, void 0, void 0, function* () {
            const keys = yield GM.listValues();
            console.log("GM values:");
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
            console.log("GM values:");
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
}
preInit();})(UserUtils,marked,Fuse);//# sourceMappingURL=BetterYTM.user.js.map
