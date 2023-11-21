/******/ var __webpack_modules__ = ({

/***/ "./changelog.md":
/*!**********************!*\
  !*** ./changelog.md ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<h2 id=\"110\">1.1.0</h2>\n<ul>\n<li><strong>Added Features:</strong><ul>\n<li>The userscript is now available in 9 languages! To submit or edit translations, please <a href=\"https://github.com/Sv443/BetterYTM/blob/main/contributing.md#submitting-translations\">view this guide</a></li>\n<li>Added an audio amplification button to the media controls</li>\n<li>Added feature to restore the song time when reloading or restoring the tab</li>\n<li>BetterYTM now sends a hint to the Dark Reader extension to disable itself if it isn&#39;t already</li>\n</ul>\n</li>\n<li><strong>Changes &amp; Fixes:</strong><ul>\n<li>Interval of arrow key skipping is configurable now</li>\n<li>Site switch hotkey is also configurable now</li>\n<li>Skipping to a specific point in the song is more reliable now</li>\n</ul>\n</li>\n</ul>\n<div class=\"split\"></div>\n<br>\n\n<h2 id=\"102\">1.0.2</h2>\n<ul>\n<li><strong>Changes:</strong><ul>\n<li>Script is now published to OpenUserJS!</li>\n<li>Added a OpenUserJS link to the configuration menu</li>\n</ul>\n</li>\n</ul>\n<div class=\"split\"></div>\n<br>\n\n<h2 id=\"101\">1.0.1</h2>\n<ul>\n<li><strong>Changes:</strong><ul>\n<li>Script is now published to GreasyFork!</li>\n<li>Added a GreasyFork link to the configuration menu</li>\n</ul>\n</li>\n</ul>\n<div class=\"split\"></div>\n<br>\n\n<h2 id=\"100\">1.0.0</h2>\n<ul>\n<li><strong>Added Features:</strong><ul>\n<li>Added configuration menu to toggle and configure all features</li>\n<li>Added lyrics button to each song in the queue</li>\n<li>Added &quot;remove from queue&quot; button to each song in the queue</li>\n<li>Use number keys to skip to a specific point in the song</li>\n<li>Added feature to make volume slider bigger and volume control finer</li>\n<li>Added percentage label next to the volume slider &amp; title on hover</li>\n<li>Improvements to link hitboxes &amp; more links in general</li>\n<li>Permanent toast notifications can be automatically closed now</li>\n<li>Remove tracking parameter <code>&amp;si</code> from links in the share menu</li>\n<li>Fix spacing issues throughout the site</li>\n<li>Added a button to scroll to the currently active song in the queue</li>\n<li>Added an easter egg to the watermark and config menu option :)</li>\n</ul>\n</li>\n<li><strong>Changes &amp; Fixes:</strong><ul>\n<li>Now the lyrics button will directly link to the lyrics (using my API <a href=\"https://github.com/Sv443/geniURL\">geniURL</a>)</li>\n<li>Video time is now kept when switching site on regular YT too</li>\n<li>Fixed compatibility with the new site design</li>\n<li>A loading indicator is shown while the lyrics are loading</li>\n<li>Images are now smaller and cached by the userscript extension</li>\n<li>Song names with hyphens are now resolved better for lyrics lookup</li>\n<li>Site switch with <kbd>F9</kbd> will now keep the video time</li>\n<li>Moved lots of utility code to my new library <a href=\"https://github.com/Sv443-Network/UserUtils\">UserUtils</a></li>\n</ul>\n</li>\n</ul>\n<div class=\"split\"></div>\n<br>\n\n<h2 id=\"020\">0.2.0</h2>\n<ul>\n<li><strong>Added Features:</strong><ul>\n<li>Switch between YouTube and YT Music (with <kbd>F9</kbd> by default)</li>\n<li>Search for song lyrics with new button in media controls</li>\n<li>Remove &quot;Upgrade to YTM Premium&quot; tab</li>\n</ul>\n</li>\n</ul>\n<div class=\"split\"></div>\n<br>\n\n<h2 id=\"010\">0.1.0</h2>\n<ul>\n<li>Added support for arrow keys to skip forward or backward (currently only by fixed 10 second interval)</li>\n</ul>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./src/features/layout.css":
/*!*********************************!*\
  !*** ./src/features/layout.css ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/features/songLists.css":
/*!************************************!*\
  !*** ./src/features/songLists.css ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/menu/hotkeyInput.css":
/*!**********************************!*\
  !*** ./src/menu/hotkeyInput.css ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/menu/menu_old.css":
/*!*******************************!*\
  !*** ./src/menu/menu_old.css ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/menu/welcomeMenu.css":
/*!**********************************!*\
  !*** ./src/menu/welcomeMenu.css ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearConfig: function() { return /* binding */ clearConfig; },
/* harmony export */   defaultConfig: function() { return /* binding */ defaultConfig; },
/* harmony export */   formatVersion: function() { return /* binding */ formatVersion; },
/* harmony export */   getFeatures: function() { return /* binding */ getFeatures; },
/* harmony export */   initConfig: function() { return /* binding */ initConfig; },
/* harmony export */   migrations: function() { return /* binding */ migrations; },
/* harmony export */   saveFeatures: function() { return /* binding */ saveFeatures; },
/* harmony export */   setDefaultFeatures: function() { return /* binding */ setDefaultFeatures; }
/* harmony export */ });
/* harmony import */ var _sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sv443-network/userutils */ "../../svn/UserUtils/dist/index.mjs");
/* harmony import */ var _features_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/index */ "./src/features/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _siteEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./siteEvents */ "./src/siteEvents.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
        return Object.assign(Object.assign({}, oldData), { locale: getFeatureDefault("locale"), boostGain: getFeatureDefault("boostGain"), boostGainPercentage: getFeatureDefault("boostGainPercentage"), rememberSongTime: getFeatureDefault("rememberSongTime"), arrowKeySkipBy: 10, switchSitesHotkey: {
                code: (_a = oldSwitchSitesHotkey.key) !== null && _a !== void 0 ? _a : "F9",
                shift: (_b = oldSwitchSitesHotkey.shift) !== null && _b !== void 0 ? _b : false,
                ctrl: (_c = oldSwitchSitesHotkey.ctrl) !== null && _c !== void 0 ? _c : false,
                alt: (_d = oldSwitchSitesHotkey.meta) !== null && _d !== void 0 ? _d : false,
            }, listButtonsPlacement: "queueOnly" });
    },
};
function getFeatureDefault(key) {
    return _features_index__WEBPACK_IMPORTED_MODULE_1__.featInfo[key].default;
}
const defaultConfig = Object.keys(_features_index__WEBPACK_IMPORTED_MODULE_1__.featInfo)
    .reduce((acc, key) => {
    acc[key] = _features_index__WEBPACK_IMPORTED_MODULE_1__.featInfo[key].default;
    return acc;
}, {});
const cfgMgr = new _sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.ConfigManager({
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
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.log)(`Initialized ConfigManager (format version = ${cfgMgr.formatVersion})`);
        if (isNaN(oldFmtVer))
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.info)("Config data initialized with default values");
        else if (oldFmtVer !== cfgMgr.formatVersion)
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.info)(`Config data migrated from version ${oldFmtVer} to ${cfgMgr.formatVersion}`);
        return data;
    });
}
/** Returns the current feature config from the in-memory cache */
function getFeatures() {
    return cfgMgr.getData();
}
/** Saves the feature config synchronously to the in-memory cache and asynchronously to the persistent storage */
function saveFeatures(featureConf) {
    return __awaiter(this, void 0, void 0, function* () {
        yield cfgMgr.setData(featureConf);
        (0,_siteEvents__WEBPACK_IMPORTED_MODULE_3__.emitSiteEvent)("configChanged", cfgMgr.getData());
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.info)("Saved new feature config:", featureConf);
    });
}
/** Saves the default feature config synchronously to the in-memory cache and asynchronously to persistent storage */
function setDefaultFeatures() {
    return __awaiter(this, void 0, void 0, function* () {
        yield cfgMgr.saveDefaultData();
        (0,_siteEvents__WEBPACK_IMPORTED_MODULE_3__.emitSiteEvent)("configChanged", cfgMgr.getData());
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.info)("Reset feature config to its default values");
    });
}
/** Clears the feature config from the persistent storage - since the cache will be out of whack, this should only be run before a site re-/unload */
function clearConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        yield cfgMgr.deleteConfig();
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.info)("Deleted config from persistent storage");
    });
}


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   branch: function() { return /* binding */ branch; },
/* harmony export */   defaultLogLevel: function() { return /* binding */ defaultLogLevel; },
/* harmony export */   mode: function() { return /* binding */ mode; },
/* harmony export */   repo: function() { return /* binding */ repo; },
/* harmony export */   scriptInfo: function() { return /* binding */ scriptInfo; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/types.ts");

const modeRaw = "{{MODE}}";
const branchRaw = "{{BRANCH}}";
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
const defaultLogLevel = mode === "production" ? _types__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Info : _types__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug;
/** Info about the userscript, parsed from the userscript header (tools/post-build.js) */
const scriptInfo = {
    name: GM.info.script.name,
    version: GM.info.script.version,
    namespace: GM.info.script.namespace,
    buildNumber: "{{BUILD_NUMBER}}", // asserted as generic string instead of literal
};


/***/ }),

/***/ "./src/features/behavior.ts":
/*!**********************************!*\
  !*** ./src/features/behavior.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disableBeforeUnload: function() { return /* binding */ disableBeforeUnload; },
/* harmony export */   disableDarkReader: function() { return /* binding */ disableDarkReader; },
/* harmony export */   enableBeforeUnload: function() { return /* binding */ enableBeforeUnload; },
/* harmony export */   initAutoCloseToasts: function() { return /* binding */ initAutoCloseToasts; },
/* harmony export */   initBeforeUnloadHook: function() { return /* binding */ initBeforeUnloadHook; },
/* harmony export */   initRememberSongTime: function() { return /* binding */ initRememberSongTime; },
/* harmony export */   preInitBehavior: function() { return /* binding */ preInitBehavior; }
/* harmony export */ });
/* harmony import */ var _sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sv443-network/userutils */ "../../svn/UserUtils/dist/index.mjs");
/* harmony import */ var _onSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../onSelector */ "./src/onSelector.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "./src/types.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




let features;
function preInitBehavior(feats) {
    features = feats;
}
//#MARKER beforeunload popup
let beforeUnloadEnabled = true;
/** Disables the popup before leaving the site */
function disableBeforeUnload() {
    beforeUnloadEnabled = false;
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.info)("Disabled popup before leaving the site");
}
/** (Re-)enables the popup before leaving the site */
function enableBeforeUnload() {
    beforeUnloadEnabled = true;
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.info)("Enabled popup before leaving the site");
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
                        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.info)("Prevented beforeunload event listener from being called");
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
            const closeTimeout = Math.max(features.closeToastsTimeout * 1000 + animTimeout, animTimeout);
            (0,_onSelector__WEBPACK_IMPORTED_MODULE_1__.onSelectorOld)("tp-yt-paper-toast#toast", {
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
                        yield (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.pauseFor)(closeTimeout);
                        toastElem.classList.remove("paper-toast-open");
                        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.log)(`Automatically closed toast '${(_a = toastElem.querySelector("#text-container yt-formatted-string")) === null || _a === void 0 ? void 0 : _a.innerText}' after ${features.closeToastsTimeout * 1000}ms`);
                        // wait for the transition to finish
                        yield (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.pauseFor)(animTimeout);
                        toastElem.style.display = "none";
                    }
                }),
            });
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.log)("Initialized automatic toast closing");
        }
        catch (err) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.error)("Error in automatic toast closing:", err);
        }
    });
}
/** After how many milliseconds a remembered entry should expire */
const remSongEntryExpiry = 1000 * 60 * 1;
/** Minimum time a song has to be played before it is committed to GM storage */
const remSongMinTime = 10;
let remSongsCache = [];
/** Remembers the time of the last played song and resumes playback from that time */
function initRememberSongTime() {
    return __awaiter(this, void 0, void 0, function* () {
        const storedDataRaw = yield GM.getValue("bytm-rem-songs");
        if (!storedDataRaw)
            yield GM.setValue("bytm-rem-songs", "[]");
        remSongsCache = JSON.parse(String(storedDataRaw !== null && storedDataRaw !== void 0 ? storedDataRaw : "[]"));
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.log)(`Initialized song time remembering with ${remSongsCache.length} initial entries`);
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
                    (0,_onSelector__WEBPACK_IMPORTED_MODULE_1__.onSelectorOld)(_utils__WEBPACK_IMPORTED_MODULE_2__.videoSelector, {
                        listener: (vidElem) => __awaiter(this, void 0, void 0, function* () {
                            if (vidElem) {
                                const applyTime = () => __awaiter(this, void 0, void 0, function* () {
                                    if (isNaN(entry.songTime))
                                        return;
                                    vidElem.currentTime = (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.clamp)(Math.max(entry.songTime, 0), 0, vidElem.duration);
                                    yield delRemSongData(entry.watchID);
                                    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.info)(`Restored song time to ${Math.floor(entry.songTime / 60)}m, ${(entry.songTime % 60).toFixed(1)}s`, _types__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Info);
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
            const songTime = (_a = yield (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getVideoTime)()) !== null && _a !== void 0 ? _a : 0;
            const paused = (_c = (_b = document.querySelector(_utils__WEBPACK_IMPORTED_MODULE_2__.videoSelector)) === null || _b === void 0 ? void 0 : _b.paused) !== null && _c !== void 0 ? _c : false;
            // don't immediately update to reduce race conditions and only update if the video is playing
            // also it just sounds better if the song starts at the beginning if only a couple seconds have passed
            if (songTime > remSongMinTime && !paused) {
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
                if (entry && songTime <= remSongMinTime)
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
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.info)("Sent hint to Dark Reader to disable itself");
    }
}


/***/ }),

/***/ "./src/features/index.ts":
/*!*******************************!*\
  !*** ./src/features/index.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAnchorImprovements: function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_3__.addAnchorImprovements; },
/* harmony export */   addConfigMenuOption: function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_3__.addConfigMenuOption; },
/* harmony export */   addLyricsCacheEntry: function() { return /* reexport safe */ _lyrics__WEBPACK_IMPORTED_MODULE_6__.addLyricsCacheEntry; },
/* harmony export */   addMediaCtrlLyricsBtn: function() { return /* reexport safe */ _lyrics__WEBPACK_IMPORTED_MODULE_6__.addMediaCtrlLyricsBtn; },
/* harmony export */   addScrollToActiveBtn: function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_3__.addScrollToActiveBtn; },
/* harmony export */   addWatermark: function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_3__.addWatermark; },
/* harmony export */   createLyricsBtn: function() { return /* reexport safe */ _lyrics__WEBPACK_IMPORTED_MODULE_6__.createLyricsBtn; },
/* harmony export */   disableBeforeUnload: function() { return /* reexport safe */ _behavior__WEBPACK_IMPORTED_MODULE_4__.disableBeforeUnload; },
/* harmony export */   disableDarkReader: function() { return /* reexport safe */ _behavior__WEBPACK_IMPORTED_MODULE_4__.disableDarkReader; },
/* harmony export */   enableBeforeUnload: function() { return /* reexport safe */ _behavior__WEBPACK_IMPORTED_MODULE_4__.enableBeforeUnload; },
/* harmony export */   featInfo: function() { return /* binding */ featInfo; },
/* harmony export */   fixSpacing: function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_3__.fixSpacing; },
/* harmony export */   geniUrlBase: function() { return /* reexport safe */ _lyrics__WEBPACK_IMPORTED_MODULE_6__.geniUrlBase; },
/* harmony export */   getCurrentLyricsUrl: function() { return /* reexport safe */ _lyrics__WEBPACK_IMPORTED_MODULE_6__.getCurrentLyricsUrl; },
/* harmony export */   getGeniusUrl: function() { return /* reexport safe */ _lyrics__WEBPACK_IMPORTED_MODULE_6__.getGeniusUrl; },
/* harmony export */   getLyricsCacheEntry: function() { return /* reexport safe */ _lyrics__WEBPACK_IMPORTED_MODULE_6__.getLyricsCacheEntry; },
/* harmony export */   improveLogo: function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_3__.improveLogo; },
/* harmony export */   initArrowKeySkip: function() { return /* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_5__.initArrowKeySkip; },
/* harmony export */   initAutoCloseToasts: function() { return /* reexport safe */ _behavior__WEBPACK_IMPORTED_MODULE_4__.initAutoCloseToasts; },
/* harmony export */   initBeforeUnloadHook: function() { return /* reexport safe */ _behavior__WEBPACK_IMPORTED_MODULE_4__.initBeforeUnloadHook; },
/* harmony export */   initNumKeysSkip: function() { return /* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_5__.initNumKeysSkip; },
/* harmony export */   initQueueButtons: function() { return /* reexport safe */ _songLists__WEBPACK_IMPORTED_MODULE_7__.initQueueButtons; },
/* harmony export */   initRememberSongTime: function() { return /* reexport safe */ _behavior__WEBPACK_IMPORTED_MODULE_4__.initRememberSongTime; },
/* harmony export */   initSiteSwitch: function() { return /* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_5__.initSiteSwitch; },
/* harmony export */   initVolumeFeatures: function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_3__.initVolumeFeatures; },
/* harmony export */   preInitBehavior: function() { return /* reexport safe */ _behavior__WEBPACK_IMPORTED_MODULE_4__.preInitBehavior; },
/* harmony export */   preInitInput: function() { return /* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_5__.preInitInput; },
/* harmony export */   preInitLayout: function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_3__.preInitLayout; },
/* harmony export */   preInitSongLists: function() { return /* reexport safe */ _songLists__WEBPACK_IMPORTED_MODULE_7__.preInitSongLists; },
/* harmony export */   removeShareTrackingParam: function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_3__.removeShareTrackingParam; },
/* harmony export */   removeUpgradeTab: function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_3__.removeUpgradeTab; },
/* harmony export */   sanitizeArtists: function() { return /* reexport safe */ _lyrics__WEBPACK_IMPORTED_MODULE_6__.sanitizeArtists; },
/* harmony export */   sanitizeSong: function() { return /* reexport safe */ _lyrics__WEBPACK_IMPORTED_MODULE_6__.sanitizeSong; },
/* harmony export */   splitVideoTitle: function() { return /* reexport safe */ _lyrics__WEBPACK_IMPORTED_MODULE_6__.splitVideoTitle; }
/* harmony export */ });
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../translations */ "./src/translations.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _assets_locales_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/locales.json */ "./assets/locales.json");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout */ "./src/features/layout.ts");
/* harmony import */ var _behavior__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./behavior */ "./src/features/behavior.ts");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input */ "./src/features/input.ts");
/* harmony import */ var _lyrics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lyrics */ "./src/features/lyrics.ts");
/* harmony import */ var _songLists__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./songLists */ "./src/features/songLists.ts");








const localeOptions = Object.entries(_assets_locales_json__WEBPACK_IMPORTED_MODULE_2__).reduce((a, [locale, { name }]) => {
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
 * | Prop | Description |
 * | :-- | :-- |
 * | `type` | type of the feature - see below for possible values |
 * | `category` | category of the feature - see what `FeatureCategory` above expands to for possible values |
 * | `default` | default value of the feature - type of the value depends on the `type` property |
 * | `enable(value: any)` | function that will be called when the feature is enabled / initialized for the first time |
 *
 * **Optional props:**
 * | Prop | Description |
 * | :-- | :-- |
 * | `disable(newValue: any)` | for type `toggle` only - function that will be called when the feature is disabled - can be a synchronous or asynchronous function |
 * | `change(prevValue: any, newValue: any)` | for types `number`, `select`, `slider` and `hotkey` only - function that will be called when the value is changed |
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
    boostGain: {
        type: "toggle",
        category: "layout",
        default: true,
        enable: () => void "TODO",
        disable: () => void "TODO",
    },
    boostGainPercentage: {
        type: "slider",
        category: "layout",
        min: 125,
        max: 300,
        default: 200,
        step: 25,
        unit: "%",
        enable: () => void "TODO",
        change: () => void "TODO",
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
            { value: "queueOnly", label: (0,_translations__WEBPACK_IMPORTED_MODULE_0__.t)("list_button_placement_queue_only") },
            { value: "everywhere", label: (0,_translations__WEBPACK_IMPORTED_MODULE_0__.t)("list_button_placement_everywhere") },
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
        disable: () => void "TODO", // TODO: feasible?
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
        default: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getPreferredLocale)(),
        enable: () => void "TODO",
    },
    logLevel: {
        type: "select",
        category: "general",
        options: () => [
            { value: 0, label: (0,_translations__WEBPACK_IMPORTED_MODULE_0__.t)("log_level_debug") },
            { value: 1, label: (0,_translations__WEBPACK_IMPORTED_MODULE_0__.t)("log_level_info") },
        ],
        default: 1,
        enable: () => void "TODO",
    },
};


/***/ }),

/***/ "./src/features/input.ts":
/*!*******************************!*\
  !*** ./src/features/input.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initArrowKeySkip: function() { return /* binding */ initArrowKeySkip; },
/* harmony export */   initNumKeysSkip: function() { return /* binding */ initNumKeysSkip; },
/* harmony export */   initSiteSwitch: function() { return /* binding */ initSiteSwitch; },
/* harmony export */   preInitInput: function() { return /* binding */ preInitInput; }
/* harmony export */ });
/* harmony import */ var _sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sv443-network/userutils */ "../../svn/UserUtils/dist/index.mjs");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _menu_menu_old__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu_old */ "./src/menu/menu_old.ts");
/* harmony import */ var _behavior__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./behavior */ "./src/features/behavior.ts");
/* harmony import */ var _siteEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../siteEvents */ "./src/siteEvents.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ "./src/features/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






let features;
function preInitInput(feats) {
    features = feats;
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
                return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.info)(`Captured valid key to skip forward or backward but the current active element is <${(_c = document.activeElement) === null || _c === void 0 ? void 0 : _c.tagName.toLowerCase()}>, so the keypress is ignored`);
            evt.preventDefault();
            evt.stopImmediatePropagation();
            let skipBy = (_d = features.arrowKeySkipBy) !== null && _d !== void 0 ? _d : _index__WEBPACK_IMPORTED_MODULE_5__.featInfo.arrowKeySkipBy.default;
            if (evt.code === "ArrowLeft")
                skipBy *= -1;
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)(`Captured arrow key '${evt.code}' - skipping by ${skipBy} seconds`);
            const vidElem = document.querySelector(_utils__WEBPACK_IMPORTED_MODULE_1__.videoSelector);
            if (vidElem)
                vidElem.currentTime = (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.clamp)(vidElem.currentTime + skipBy, 0, vidElem.duration);
        });
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)("Added arrow key press listener");
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
            const hotkey = features.switchSitesHotkey;
            if (siteSwitchEnabled && e.code === hotkey.code && e.shiftKey === hotkey.shift && e.ctrlKey === hotkey.ctrl && e.altKey === hotkey.alt)
                switchSite(domain === "yt" ? "ytm" : "yt");
        });
        _siteEvents__WEBPACK_IMPORTED_MODULE_4__.siteEvents.on("hotkeyInputActive", (state) => {
            siteSwitchEnabled = !state;
        });
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)("Initialized site switch listener");
    });
}
/** Switches to the other site (between YT and YTM) */
function switchSite(newDomain) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!(["/watch", "/playlist"].some(v => location.pathname.startsWith(v))))
                return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.warn)("Not on a supported page, so the site switch is ignored");
            let subdomain;
            if (newDomain === "ytm")
                subdomain = "music";
            else if (newDomain === "yt")
                subdomain = "www";
            if (!subdomain)
                throw new Error(`Unrecognized domain '${newDomain}'`);
            (0,_behavior__WEBPACK_IMPORTED_MODULE_3__.disableBeforeUnload)();
            const { pathname, search, hash } = new URL(location.href);
            const vt = yield (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getVideoTime)();
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)(`Found video time of ${vt} seconds`);
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
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.info)(`Switching to domain '${newDomain}' at ${newUrl}`);
            location.assign(newUrl);
        }
        catch (err) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.error)("Error while switching site:", err);
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
            if (_menu_menu_old__WEBPACK_IMPORTED_MODULE_2__.isCfgMenuOpen)
                return;
            // discard the event when a (text) input is currently active, like when editing a playlist or when the search bar is focused
            if (document.activeElement !== document.body
                && !["progress-bar"].includes((_b = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : "_")
                && !["BUTTON", "A"].includes((_d = (_c = document.activeElement) === null || _c === void 0 ? void 0 : _c.tagName) !== null && _d !== void 0 ? _d : "_"))
                return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.info)("Captured valid key to skip video to but an unexpected element is focused, so the keypress is ignored");
            const vidElem = document.querySelector(_utils__WEBPACK_IMPORTED_MODULE_1__.videoSelector);
            if (!vidElem)
                return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.warn)("Could not find video element, so the keypress is ignored");
            const newVidTime = vidElem.duration / (10 / Number(e.key));
            if (!isNaN(newVidTime)) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)(`Captured number key [${e.key}], skipping to ${Math.floor(newVidTime / 60)}m ${(newVidTime % 60).toFixed(1)}s`);
                vidElem.currentTime = newVidTime;
            }
        });
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)("Added number key press listener");
    });
}


/***/ }),

/***/ "./src/features/layout.ts":
/*!********************************!*\
  !*** ./src/features/layout.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAnchorImprovements: function() { return /* binding */ addAnchorImprovements; },
/* harmony export */   addConfigMenuOption: function() { return /* binding */ addConfigMenuOption; },
/* harmony export */   addScrollToActiveBtn: function() { return /* binding */ addScrollToActiveBtn; },
/* harmony export */   addWatermark: function() { return /* binding */ addWatermark; },
/* harmony export */   fixSpacing: function() { return /* binding */ fixSpacing; },
/* harmony export */   improveLogo: function() { return /* binding */ improveLogo; },
/* harmony export */   initVolumeFeatures: function() { return /* binding */ initVolumeFeatures; },
/* harmony export */   preInitLayout: function() { return /* binding */ preInitLayout; },
/* harmony export */   removeShareTrackingParam: function() { return /* binding */ removeShareTrackingParam; },
/* harmony export */   removeUpgradeTab: function() { return /* binding */ removeUpgradeTab; }
/* harmony export */ });
/* harmony import */ var _sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sv443-network/userutils */ "../../svn/UserUtils/dist/index.mjs");
/* harmony import */ var _onSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../onSelector */ "./src/onSelector.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../translations */ "./src/translations.ts");
/* harmony import */ var _menu_menu_old__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu/menu_old */ "./src/menu/menu_old.ts");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout.css */ "./src/features/layout.css");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







let features;
function preInitLayout(feats) {
    features = feats;
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
        watermark.innerText = _constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.name;
        watermark.title = (0,_translations__WEBPACK_IMPORTED_MODULE_4__.t)("open_menu_tooltip", _constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.name);
        watermark.tabIndex = 1000;
        improveLogo();
        watermark.addEventListener("click", (e) => {
            e.stopPropagation();
            menuOpenAmt++;
            if ((!e.shiftKey || logoExchanged) && menuOpenAmt !== 5)
                (0,_menu_menu_old__WEBPACK_IMPORTED_MODULE_5__.openCfgMenu)();
            if ((!logoExchanged && e.shiftKey) || menuOpenAmt === 5)
                exchangeLogo();
        });
        // when using the tab key to navigate
        watermark.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.stopPropagation();
                menuOpenAmt++;
                if ((!e.shiftKey || logoExchanged) && menuOpenAmt !== 5)
                    (0,_menu_menu_old__WEBPACK_IMPORTED_MODULE_5__.openCfgMenu)();
                if ((!logoExchanged && e.shiftKey) || menuOpenAmt === 5)
                    exchangeLogo();
            }
        });
        (0,_onSelector__WEBPACK_IMPORTED_MODULE_1__.onSelectorOld)("ytmusic-nav-bar #left-content", {
            listener: (logoElem) => (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.insertAfter)(logoElem, watermark),
        });
        (0,_utils__WEBPACK_IMPORTED_MODULE_3__.log)("Added watermark element");
    });
}
/** Turns the regular `<img>`-based logo into inline SVG to be able to animate and modify parts of it */
function improveLogo() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (improveLogoCalled)
                return;
            improveLogoCalled = true;
            const res = yield (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.fetchAdvanced)("https://music.youtube.com/img/on_platform_logo_dark.svg");
            const svg = yield res.text();
            (0,_onSelector__WEBPACK_IMPORTED_MODULE_1__.onSelectorOld)("ytmusic-logo a", {
                listener: (logoElem) => {
                    var _a;
                    logoElem.classList.add("bytm-mod-logo", "bytm-no-select");
                    logoElem.innerHTML = svg;
                    logoElem.querySelectorAll("ellipse").forEach((e) => {
                        e.classList.add("bytm-mod-logo-ellipse");
                    });
                    (_a = logoElem.querySelector("path")) === null || _a === void 0 ? void 0 : _a.classList.add("bytm-mod-logo-path");
                    (0,_utils__WEBPACK_IMPORTED_MODULE_3__.log)("Swapped logo to inline SVG");
                },
            });
        }
        catch (err) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__.error)("Couldn't improve logo due to an error:", err);
        }
    });
}
/** Exchanges the default YTM logo into BetterYTM's logo with a sick ass animation */
function exchangeLogo() {
    (0,_onSelector__WEBPACK_IMPORTED_MODULE_1__.onSelectorOld)(".bytm-mod-logo", {
        listener: (logoElem) => __awaiter(this, void 0, void 0, function* () {
            if (logoElem.classList.contains("bytm-logo-exchanged"))
                return;
            logoExchanged = true;
            logoElem.classList.add("bytm-logo-exchanged");
            const iconUrl = yield (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getResourceUrl)("logo");
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
        cfgOptItemElem.ariaLabel = cfgOptItemElem.title = (0,_translations__WEBPACK_IMPORTED_MODULE_4__.t)("open_menu_tooltip", _constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.name);
        cfgOptItemElem.addEventListener("click", (e) => __awaiter(this, void 0, void 0, function* () {
            const settingsBtnElem = document.querySelector("ytmusic-nav-bar ytmusic-settings-button tp-yt-paper-icon-button");
            settingsBtnElem === null || settingsBtnElem === void 0 ? void 0 : settingsBtnElem.click();
            menuOpenAmt++;
            yield (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.pauseFor)(100);
            if ((!e.shiftKey || logoExchanged) && menuOpenAmt !== 5)
                (0,_menu_menu_old__WEBPACK_IMPORTED_MODULE_5__.openCfgMenu)();
            if ((!logoExchanged && e.shiftKey) || menuOpenAmt === 5)
                exchangeLogo();
        }));
        const cfgOptIconElem = document.createElement("img");
        cfgOptIconElem.className = "bytm-cfg-menu-option-icon";
        cfgOptIconElem.src = yield (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getResourceUrl)("logo");
        const cfgOptTextElem = document.createElement("div");
        cfgOptTextElem.className = "bytm-cfg-menu-option-text";
        cfgOptTextElem.innerText = (0,_translations__WEBPACK_IMPORTED_MODULE_4__.t)("config_menu_option", _constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.name);
        cfgOptItemElem.appendChild(cfgOptIconElem);
        cfgOptItemElem.appendChild(cfgOptTextElem);
        cfgOptElem.appendChild(cfgOptItemElem);
        container.appendChild(cfgOptElem);
        improveLogo();
        (0,_utils__WEBPACK_IMPORTED_MODULE_3__.log)("Added BYTM-Configuration button to menu popover");
    });
}
//#MARKER remove upgrade tab
/** Removes the "Upgrade" / YT Music Premium tab from the sidebar */
function removeUpgradeTab() {
    return __awaiter(this, void 0, void 0, function* () {
        (0,_onSelector__WEBPACK_IMPORTED_MODULE_1__.onSelectorOld)("ytmusic-app-layout tp-yt-app-drawer #contentContainer #guide-content #items ytmusic-guide-entry-renderer:nth-of-type(4)", {
            listener: (tabElemLarge) => {
                tabElemLarge.remove();
                (0,_utils__WEBPACK_IMPORTED_MODULE_3__.log)("Removed large upgrade tab");
            },
        });
        (0,_onSelector__WEBPACK_IMPORTED_MODULE_1__.onSelectorOld)("ytmusic-app-layout #mini-guide ytmusic-guide-renderer #sections ytmusic-guide-section-renderer[is-primary] #items ytmusic-guide-entry-renderer:nth-of-type(4)", {
            listener: (tabElemSmall) => {
                tabElemSmall.remove();
                (0,_utils__WEBPACK_IMPORTED_MODULE_3__.log)("Removed small upgrade tab");
            },
        });
    });
}
//#MARKER volume slider
function initVolumeFeatures() {
    return __awaiter(this, void 0, void 0, function* () {
        // not technically an input element but behaves pretty much the same
        (0,_onSelector__WEBPACK_IMPORTED_MODULE_1__.onSelectorOld)("tp-yt-paper-slider#volume-slider", {
            listener: (sliderElem) => {
                const volSliderCont = document.createElement("div");
                volSliderCont.id = "bytm-vol-slider-cont";
                (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.addParent)(sliderElem, volSliderCont);
                if (typeof features.volumeSliderSize === "number")
                    setVolSliderSize();
                if (features.volumeSliderLabel)
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
    const getLabelText = (slider) => { var _a; return (0,_translations__WEBPACK_IMPORTED_MODULE_4__.t)("volume_tooltip", slider.value, (_a = features.volumeSliderStep) !== null && _a !== void 0 ? _a : slider.step); };
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
    (0,_onSelector__WEBPACK_IMPORTED_MODULE_1__.onSelectorOld)("#bytm-vol-slider-cont", {
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
    const { volumeSliderSize: size } = features;
    if (typeof size !== "number" || isNaN(Number(size)))
        return;
    (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.addGlobalStyle)(`\
#bytm-vol-slider-cont tp-yt-paper-slider#volume-slider {
  width: ${size}px !important;
}`);
}
/** Sets the `step` attribute of the volume slider */
function setVolSliderStep(sliderElem) {
    sliderElem.setAttribute("step", String(features.volumeSliderStep));
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
                    (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.addParent)(thumbnailElem, anchorElem);
                }
            };
            // home page
            (0,_onSelector__WEBPACK_IMPORTED_MODULE_1__.onSelectorOld)("#contents.ytmusic-section-list-renderer ytmusic-carousel-shelf-renderer ytmusic-responsive-list-item-renderer", {
                continuous: true,
                all: true,
                listener: addListItemAnchors,
            });
            // related tab in /watch
            (0,_onSelector__WEBPACK_IMPORTED_MODULE_1__.onSelectorOld)("ytmusic-tab-renderer[page-type=\"MUSIC_PAGE_TYPE_TRACK_RELATED\"] ytmusic-responsive-list-item-renderer", {
                continuous: true,
                all: true,
                listener: addListItemAnchors,
            });
            // playlists
            (0,_onSelector__WEBPACK_IMPORTED_MODULE_1__.onSelectorOld)("#contents.ytmusic-section-list-renderer ytmusic-playlist-shelf-renderer ytmusic-responsive-list-item-renderer", {
                continuous: true,
                all: true,
                listener: addListItemAnchors,
            });
            // generic shelves
            (0,_onSelector__WEBPACK_IMPORTED_MODULE_1__.onSelectorOld)("#contents.ytmusic-section-list-renderer ytmusic-shelf-renderer ytmusic-responsive-list-item-renderer", {
                continuous: true,
                all: true,
                listener: addListItemAnchors,
            });
        }
        catch (err) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__.error)("Couldn't improve carousel shelf anchors due to an error:", err);
        }
        //#SECTION sidebar
        try {
            const addSidebarAnchors = (sidebarCont) => {
                const items = sidebarCont.parentNode.querySelectorAll("ytmusic-guide-entry-renderer tp-yt-paper-item");
                improveSidebarAnchors(items);
                return items.length;
            };
            (0,_onSelector__WEBPACK_IMPORTED_MODULE_1__.onSelectorOld)("ytmusic-app-layout tp-yt-app-drawer #contentContainer #guide-content #items ytmusic-guide-entry-renderer", {
                listener: (sidebarCont) => {
                    const itemsAmt = addSidebarAnchors(sidebarCont);
                    (0,_utils__WEBPACK_IMPORTED_MODULE_3__.log)(`Added anchors around ${itemsAmt} sidebar ${(0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.autoPlural)("item", itemsAmt)}`);
                },
            });
            (0,_onSelector__WEBPACK_IMPORTED_MODULE_1__.onSelectorOld)("ytmusic-app-layout #mini-guide ytmusic-guide-renderer ytmusic-guide-section-renderer #items ytmusic-guide-entry-renderer", {
                listener: (miniSidebarCont) => {
                    const itemsAmt = addSidebarAnchors(miniSidebarCont);
                    (0,_utils__WEBPACK_IMPORTED_MODULE_3__.log)(`Added anchors around ${itemsAmt} mini sidebar ${(0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.autoPlural)("item", itemsAmt)}`);
                },
            });
        }
        catch (err) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__.error)("Couldn't add anchors to sidebar items due to an error:", err);
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
        anchorElem.title = (0,_translations__WEBPACK_IMPORTED_MODULE_4__.t)("middle_click_open_tab");
        anchorElem.addEventListener("click", (e) => {
            e.preventDefault();
        });
        (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.addParent)(item, anchorElem);
    });
}
//#MARKER remove share tracking param
/** Continuously removes the ?si tracking parameter from share URLs */
function removeShareTrackingParam() {
    return __awaiter(this, void 0, void 0, function* () {
        (0,_onSelector__WEBPACK_IMPORTED_MODULE_1__.onSelectorOld)("yt-copy-link-renderer input#share-url", {
            continuous: true,
            listener: (inputElem) => {
                try {
                    const url = new URL(inputElem.value);
                    if (!url.searchParams.has("si"))
                        return;
                    url.searchParams.delete("si");
                    inputElem.value = String(url);
                    (0,_utils__WEBPACK_IMPORTED_MODULE_3__.log)(`Removed tracking parameter from share link: ${url}`);
                }
                catch (err) {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_3__.warn)("Couldn't remove tracking parameter from share link due to error:", err);
                }
            },
        });
    });
}
//#MARKER fix margins
/** Applies global CSS to fix various spacings */
function fixSpacing() {
    return __awaiter(this, void 0, void 0, function* () {
        (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.addGlobalStyle)(`\
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
        (0,_onSelector__WEBPACK_IMPORTED_MODULE_1__.onSelectorOld)(".side-panel.modular #tabsContent tp-yt-paper-tab:nth-of-type(1)", {
            listener: (tabElem) => __awaiter(this, void 0, void 0, function* () {
                const containerElem = document.createElement("div");
                containerElem.id = "bytm-scroll-to-active-btn-cont";
                const linkElem = document.createElement("div");
                linkElem.id = "bytm-scroll-to-active-btn";
                linkElem.className = "ytmusic-player-bar bytm-generic-btn";
                linkElem.title = (0,_translations__WEBPACK_IMPORTED_MODULE_4__.t)("scroll_to_playing");
                linkElem.role = "button";
                const imgElem = document.createElement("img");
                imgElem.className = "bytm-generic-btn-img";
                imgElem.src = yield (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getResourceUrl)("skip_to");
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


/***/ }),

/***/ "./src/features/lyrics.ts":
/*!********************************!*\
  !*** ./src/features/lyrics.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLyricsCacheEntry: function() { return /* binding */ addLyricsCacheEntry; },
/* harmony export */   addMediaCtrlLyricsBtn: function() { return /* binding */ addMediaCtrlLyricsBtn; },
/* harmony export */   createLyricsBtn: function() { return /* binding */ createLyricsBtn; },
/* harmony export */   geniUrlBase: function() { return /* binding */ geniUrlBase; },
/* harmony export */   getCurrentLyricsUrl: function() { return /* binding */ getCurrentLyricsUrl; },
/* harmony export */   getGeniusUrl: function() { return /* binding */ getGeniusUrl; },
/* harmony export */   getLyricsCacheEntry: function() { return /* binding */ getLyricsCacheEntry; },
/* harmony export */   sanitizeArtists: function() { return /* binding */ sanitizeArtists; },
/* harmony export */   sanitizeSong: function() { return /* binding */ sanitizeSong; },
/* harmony export */   splitVideoTitle: function() { return /* binding */ splitVideoTitle; }
/* harmony export */ });
/* harmony import */ var _sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sv443-network/userutils */ "../../svn/UserUtils/dist/index.mjs");
/* harmony import */ var _onSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../onSelector */ "./src/onSelector.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../translations */ "./src/translations.ts");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interface */ "./src/interface.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (undefined && undefined.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};





/** Base URL of geniURL */
const geniUrlBase = "https://api.sv443.net/geniurl";
/** GeniURL endpoint that gives song metadata when provided with a `?q` or `?artist` and `?song` parameter - [more info](https://api.sv443.net/geniurl) */
const geniURLSearchTopUrl = `${geniUrlBase}/search/top`;
/**
 * The threshold to pass to geniURL's fuzzy filtering.
 * From fuse.js docs: At what point does the match algorithm give up. A threshold of 0.0 requires a perfect match (of both letters and location), a threshold of 1.0 would match anything.
 * Set to undefined to use the default.
 */
const threshold = 0.55;
/** Ratelimit budget timeframe in seconds - should reflect what's in geniURL's docs */
const geniUrlRatelimitTimeframe = 30;
const thresholdParam = threshold ? `&threshold=${(0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.clamp)(threshold, 0, 1)}` : "";
void thresholdParam; // TODO: re-add once geniURL 1.4 is released
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
        (0,_onSelector__WEBPACK_IMPORTED_MODULE_1__.onSelectorOld)(".middle-controls-buttons ytmusic-like-button-renderer#like-button-renderer", { listener: addActualMediaCtrlLyricsBtn });
    });
}
/** Actually adds the lyrics button after the like button renderer has been verified to exist */
function addActualMediaCtrlLyricsBtn(likeContainer) {
    return __awaiter(this, void 0, void 0, function* () {
        const songTitleElem = document.querySelector(".content-info-wrapper > yt-formatted-string");
        if (!songTitleElem)
            return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.warn)("Couldn't find song title element");
        // run parallel without awaiting so the MutationObserver below can observe the title element in time
        (() => __awaiter(this, void 0, void 0, function* () {
            const gUrl = yield getCurrentLyricsUrl();
            const linkElem = yield createLyricsBtn(gUrl !== null && gUrl !== void 0 ? gUrl : undefined);
            linkElem.id = "betterytm-lyrics-button";
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.log)("Inserted lyrics button into media controls bar");
            (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.insertAfter)(likeContainer, linkElem);
        }))();
        currentSongTitle = songTitleElem.title;
        const spinnerIconUrl = yield (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getResourceUrl)("spinner");
        const lyricsIconUrl = yield (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getResourceUrl)("lyrics");
        const errorIconUrl = yield (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getResourceUrl)("error");
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
                        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.info)(`Song title changed from '${currentSongTitle}' to '${newTitle}'`);
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
                            imgElem.title = (0,_translations__WEBPACK_IMPORTED_MODULE_3__.t)("lyrics_not_found_click_open_search");
                            lyricsBtn.style.cursor = "pointer";
                            lyricsBtn.style.pointerEvents = "all";
                            lyricsBtn.style.display = "inline-flex";
                            lyricsBtn.style.visibility = "visible";
                            lyricsBtn.href = `https://genius.com/search${query}`;
                            continue;
                        }
                        lyricsBtn.href = url;
                        lyricsBtn.title = (0,_translations__WEBPACK_IMPORTED_MODULE_3__.t)("open_current_lyrics");
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
                (0,_interface__WEBPACK_IMPORTED_MODULE_4__.emitInterface)("bytm:lyricsLoaded", {
                    type: "current",
                    artists: artistName,
                    title: songName,
                    url,
                });
            }
            return url;
        }
        catch (err) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.error)("Couldn't resolve lyrics URL:", err);
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
                (0,_utils__WEBPACK_IMPORTED_MODULE_2__.info)(`Found lyrics URL in cache: ${cacheEntry}`);
                return cacheEntry;
            }
            const startTs = Date.now();
            const fetchUrl = `${geniURLSearchTopUrl}?disableFuzzy&artist=${encodeURIComponent(artist)}&song=${encodeURIComponent(song)}`;
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.log)(`Requesting URL from geniURL at '${fetchUrl}'`);
            const fetchRes = yield (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.fetchAdvanced)(fetchUrl);
            if (fetchRes.status === 429) {
                const waitSeconds = Number((_a = fetchRes.headers.get("retry-after")) !== null && _a !== void 0 ? _a : geniUrlRatelimitTimeframe);
                alert((0,_translations__WEBPACK_IMPORTED_MODULE_3__.tp)("lyrics_rate_limited", waitSeconds, waitSeconds));
                return undefined;
            }
            else if (fetchRes.status < 200 || fetchRes.status >= 300) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_2__.error)(`Couldn't fetch lyrics URL from geniURL - status: ${fetchRes.status} - response: ${(_c = (_b = (yield fetchRes.json()).message) !== null && _b !== void 0 ? _b : yield fetchRes.text()) !== null && _c !== void 0 ? _c : "(none)"}`);
                return undefined;
            }
            const result = yield fetchRes.json();
            if (typeof result === "object" && result.error) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_2__.error)("Couldn't fetch lyrics URL:", result.message);
                return undefined;
            }
            const url = result.url;
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.info)(`Found lyrics URL (after ${Date.now() - startTs}ms): ${url}`);
            addLyricsCacheEntry(artist, song, url);
            return url;
        }
        catch (err) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.error)("Couldn't get lyrics URL due to error:", err);
            return undefined;
        }
    });
}
/** Creates the base lyrics button element */
function createLyricsBtn(geniusUrl, hideIfLoading = true) {
    return __awaiter(this, void 0, void 0, function* () {
        const linkElem = document.createElement("a");
        linkElem.className = "ytmusic-player-bar bytm-generic-btn";
        linkElem.title = geniusUrl ? (0,_translations__WEBPACK_IMPORTED_MODULE_3__.t)("open_lyrics") : (0,_translations__WEBPACK_IMPORTED_MODULE_3__.t)("lyrics_loading");
        if (geniusUrl)
            linkElem.href = geniusUrl;
        linkElem.role = "button";
        linkElem.target = "_blank";
        linkElem.rel = "noopener noreferrer";
        linkElem.style.visibility = hideIfLoading && geniusUrl ? "initial" : "hidden";
        linkElem.style.display = hideIfLoading && geniusUrl ? "inline-flex" : "none";
        const imgElem = document.createElement("img");
        imgElem.className = "bytm-generic-btn-img";
        imgElem.src = yield (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getResourceUrl)("lyrics");
        linkElem.appendChild(imgElem);
        return linkElem;
    });
}
/** Splits a video title that contains a hyphen into an artist and song */
function splitVideoTitle(title) {
    const [artist, ...rest] = title.split("-").map((v, i) => i < 2 ? v.trim() : v);
    return { artist, song: rest.join("-") };
}


/***/ }),

/***/ "./src/features/songLists.ts":
/*!***********************************!*\
  !*** ./src/features/songLists.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initQueueButtons: function() { return /* binding */ initQueueButtons; },
/* harmony export */   preInitSongLists: function() { return /* binding */ preInitSongLists; }
/* harmony export */ });
/* harmony import */ var _sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sv443-network/userutils */ "../../svn/UserUtils/dist/index.mjs");
/* harmony import */ var _onSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../onSelector */ "./src/onSelector.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../translations */ "./src/translations.ts");
/* harmony import */ var _siteEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../siteEvents */ "./src/siteEvents.ts");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../interface */ "./src/interface.ts");
/* harmony import */ var _lyrics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lyrics */ "./src/features/lyrics.ts");
/* harmony import */ var _songLists_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./songLists.css */ "./src/features/songLists.css");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








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
                (0,_utils__WEBPACK_IMPORTED_MODULE_2__.log)(`Added buttons to ${amt} new queue ${(0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.autoPlural)("item", amt)}`);
        };
        // current queue
        _siteEvents__WEBPACK_IMPORTED_MODULE_4__.siteEvents.on("queueChanged", addCurrentQueueBtns);
        _siteEvents__WEBPACK_IMPORTED_MODULE_4__.siteEvents.on("autoplayQueueChanged", addCurrentQueueBtns);
        const queueItems = document.querySelectorAll("#contents.ytmusic-player-queue > ytmusic-player-queue-item");
        if (queueItems.length > 0) {
            queueItems.forEach(itm => addQueueButtons(itm));
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.log)(`Added buttons to ${queueItems.length} existing "current song queue" ${(0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.autoPlural)("item", queueItems)}`);
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
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.log)(`Added buttons to ${queueItems.length} new "generic song list" ${(0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.autoPlural)("item", queueItems)}`);
        };
        const listSelectors = [
            "ytmusic-playlist-shelf-renderer #contents",
            "ytmusic-section-list-renderer[main-page-type=\"MUSIC_PAGE_TYPE_ALBUM\"] ytmusic-shelf-renderer #contents",
            "ytmusic-section-list-renderer[main-page-type=\"MUSIC_PAGE_TYPE_ARTIST\"] ytmusic-shelf-renderer #contents",
        ];
        if (features.listButtonsPlacement === "everywhere") {
            for (const selector of listSelectors) {
                (0,_onSelector__WEBPACK_IMPORTED_MODULE_1__.onSelectorOld)(selector, {
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
        const lyricsIconUrl = yield (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getResourceUrl)("lyrics");
        const deleteIconUrl = yield (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getResourceUrl)("delete");
        //#SECTION lyrics btn
        let lyricsBtnElem;
        if (features.lyricsQueueButton) {
            lyricsBtnElem = yield (0,_lyrics__WEBPACK_IMPORTED_MODULE_6__.createLyricsBtn)(undefined, false);
            lyricsBtnElem.title = (0,_translations__WEBPACK_IMPORTED_MODULE_3__.t)("open_lyrics");
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
                const artistsSan = (0,_lyrics__WEBPACK_IMPORTED_MODULE_6__.sanitizeArtists)(artist);
                const songSan = (0,_lyrics__WEBPACK_IMPORTED_MODULE_6__.sanitizeSong)(song);
                const splitTitle = (0,_lyrics__WEBPACK_IMPORTED_MODULE_6__.splitVideoTitle)(songSan);
                const cachedLyricsUrl = songSan.includes("-")
                    ? (0,_lyrics__WEBPACK_IMPORTED_MODULE_6__.getLyricsCacheEntry)(splitTitle.artist, splitTitle.song)
                    : (0,_lyrics__WEBPACK_IMPORTED_MODULE_6__.getLyricsCacheEntry)(artistsSan, songSan);
                if (cachedLyricsUrl)
                    lyricsUrl = cachedLyricsUrl;
                else if (!songInfo.hasAttribute("data-bytm-loading")) {
                    const imgEl = lyricsBtnElem === null || lyricsBtnElem === void 0 ? void 0 : lyricsBtnElem.querySelector("img");
                    if (!imgEl)
                        return;
                    if (!cachedLyricsUrl) {
                        songInfo.setAttribute("data-bytm-loading", "");
                        imgEl.src = yield (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getResourceUrl)("spinner");
                        imgEl.classList.add("bytm-spinner");
                    }
                    lyricsUrl = cachedLyricsUrl !== null && cachedLyricsUrl !== void 0 ? cachedLyricsUrl : yield (0,_lyrics__WEBPACK_IMPORTED_MODULE_6__.getGeniusUrl)(artistsSan, songSan);
                    if (lyricsUrl) {
                        (0,_interface__WEBPACK_IMPORTED_MODULE_5__.emitInterface)("bytm:lyricsLoaded", {
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
                        if (confirm((0,_translations__WEBPACK_IMPORTED_MODULE_3__.t)("lyrics_not_found_confirm_open_search")))
                            (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.openInNewTab)(`https://genius.com/search?q=${encodeURIComponent(`${artistsSan} - ${songSan}`)}`);
                        return;
                    }
                }
                lyricsUrl && (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.openInNewTab)(lyricsUrl);
            }));
        }
        //#SECTION delete from queue btn
        let deleteBtnElem;
        if (features.deleteFromQueueButton) {
            deleteBtnElem = document.createElement("a");
            Object.assign(deleteBtnElem, {
                title: (0,_translations__WEBPACK_IMPORTED_MODULE_3__.t)("remove_from_queue"),
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
                    yield (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.pauseFor)(20);
                    queuePopupCont = document.querySelector("ytmusic-app ytmusic-popup-container tp-yt-iron-dropdown");
                    queuePopupCont === null || queuePopupCont === void 0 ? void 0 : queuePopupCont.setAttribute("data-bytm-hidden", "true");
                    // a little bit janky and unreliable but the only way afaik
                    const removeFromQueueBtn = queuePopupCont === null || queuePopupCont === void 0 ? void 0 : queuePopupCont.querySelector("tp-yt-paper-listbox ytmusic-menu-service-item-renderer:nth-of-type(3)");
                    yield (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.pauseFor)(10);
                    removeFromQueueBtn === null || removeFromQueueBtn === void 0 ? void 0 : removeFromQueueBtn.click();
                }
                catch (err) {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.error)("Couldn't remove song from queue due to error:", err);
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


/***/ }),

/***/ "./src/interface.ts":
/*!**************************!*\
  !*** ./src/interface.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emitInterface: function() { return /* binding */ emitInterface; },
/* harmony export */   initInterface: function() { return /* binding */ initInterface; },
/* harmony export */   setGlobalProp: function() { return /* binding */ setGlobalProp; }
/* harmony export */ });
/* harmony import */ var _sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sv443-network/userutils */ "../../svn/UserUtils/dist/index.mjs");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");



/** Initializes the BYTM interface */
function initInterface() {
    const props = Object.assign({ mode: _constants__WEBPACK_IMPORTED_MODULE_1__.mode,
        branch: _constants__WEBPACK_IMPORTED_MODULE_1__.branch }, _constants__WEBPACK_IMPORTED_MODULE_1__.scriptInfo);
    for (const [key, value] of Object.entries(props))
        setGlobalProp(key, value);
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.log)("Initialized BYTM interface");
}
/** Sets a global property on the window.BYTM object */
function setGlobalProp(key, value) {
    // use unsafeWindow so the properties are available outside of the userscript's scope
    const win = (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.getUnsafeWindow)();
    if (!win.BYTM)
        win.BYTM = {};
    win.BYTM[key] = value;
}
/** Emits an event on the BYTM interface */
function emitInterface(type, ...data) {
    (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.getUnsafeWindow)().dispatchEvent(new CustomEvent(type, { detail: data[0] }));
}


/***/ }),

/***/ "./src/menu/hotkeyInput.ts":
/*!*********************************!*\
  !*** ./src/menu/hotkeyInput.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHotkeyInput: function() { return /* binding */ createHotkeyInput; }
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _siteEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../siteEvents */ "./src/siteEvents.ts");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../translations */ "./src/translations.ts");
/* harmony import */ var _hotkeyInput_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hotkeyInput.css */ "./src/menu/hotkeyInput.css");




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
    inputElem.value = (_a = initialValue === null || initialValue === void 0 ? void 0 : initialValue.code) !== null && _a !== void 0 ? _a : (0,_translations__WEBPACK_IMPORTED_MODULE_2__.t)("hotkey_input_click_to_change");
    inputElem.title = (0,_translations__WEBPACK_IMPORTED_MODULE_2__.t)("hotkey_input_click_to_change_tooltip");
    const resetElem = document.createElement("a");
    resetElem.classList.add("bytm-hotkey-reset", "bytm-link");
    resetElem.role = "button";
    resetElem.innerText = `(${(0,_translations__WEBPACK_IMPORTED_MODULE_2__.t)("reset")})`;
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
        inputElem.title = (0,_translations__WEBPACK_IMPORTED_MODULE_2__.t)("hotkey_input_click_to_cancel_tooltip");
        onChange(hotkey);
    });
    const deactivate = () => {
        var _a, _b;
        _siteEvents__WEBPACK_IMPORTED_MODULE_1__.siteEvents.emit("hotkeyInputActive", false);
        const curVal = (_a = (0,_config__WEBPACK_IMPORTED_MODULE_0__.getFeatures)().switchSitesHotkey) !== null && _a !== void 0 ? _a : initialValue;
        inputElem.value = (_b = curVal === null || curVal === void 0 ? void 0 : curVal.code) !== null && _b !== void 0 ? _b : (0,_translations__WEBPACK_IMPORTED_MODULE_2__.t)("hotkey_input_click_to_change");
        inputElem.dataset.state = "inactive";
        inputElem.title = (0,_translations__WEBPACK_IMPORTED_MODULE_2__.t)("hotkey_input_click_to_change_tooltip");
        infoElem.innerText = curVal ? getHotkeyInfo(curVal) : "";
    };
    const activate = () => {
        _siteEvents__WEBPACK_IMPORTED_MODULE_1__.siteEvents.emit("hotkeyInputActive", true);
        inputElem.value = "< ... >";
        inputElem.dataset.state = "active";
        inputElem.title = (0,_translations__WEBPACK_IMPORTED_MODULE_2__.t)("hotkey_input_click_to_cancel_tooltip");
    };
    _siteEvents__WEBPACK_IMPORTED_MODULE_1__.siteEvents.on("cfgMenuClosed", deactivate);
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
    hotkey.ctrl && modifiers.push((0,_translations__WEBPACK_IMPORTED_MODULE_2__.t)("hotkey_key_ctrl"));
    hotkey.shift && modifiers.push((0,_translations__WEBPACK_IMPORTED_MODULE_2__.t)("hotkey_key_shift"));
    hotkey.alt && modifiers.push(getOS() === "mac" ? (0,_translations__WEBPACK_IMPORTED_MODULE_2__.t)("hotkey_key_mac_option") : (0,_translations__WEBPACK_IMPORTED_MODULE_2__.t)("hotkey_key_alt"));
    return modifiers.reduce((a, c) => a += `${c} + `, "");
}
/** Crude OS detection for keyboard layout purposes */
function getOS() {
    if (navigator.userAgent.match(/mac(\s?os|intel)/i))
        return "mac";
    return "other";
}


/***/ }),

/***/ "./src/menu/menu_old.ts":
/*!******************************!*\
  !*** ./src/menu/menu_old.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCfgMenu: function() { return /* binding */ addCfgMenu; },
/* harmony export */   closeCfgMenu: function() { return /* binding */ closeCfgMenu; },
/* harmony export */   isCfgMenuOpen: function() { return /* binding */ isCfgMenuOpen; },
/* harmony export */   openCfgMenu: function() { return /* binding */ openCfgMenu; },
/* harmony export */   openChangelogMenu: function() { return /* binding */ openChangelogMenu; }
/* harmony export */ });
/* harmony import */ var _sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sv443-network/userutils */ "../../svn/UserUtils/dist/index.mjs");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _features_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/index */ "./src/features/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _siteEvents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../siteEvents */ "./src/siteEvents.ts");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../translations */ "./src/translations.ts");
/* harmony import */ var _changelog_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../changelog.md */ "./changelog.md");
/* harmony import */ var _menu_old_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu_old.css */ "./src/menu/menu_old.css");
/* harmony import */ var _hotkeyInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hotkeyInput */ "./src/menu/hotkeyInput.ts");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../package.json */ "./package.json");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};












//#MARKER create menu elements
let isCfgMenuAdded = false;
let isCfgMenuOpen = false;
/** Threshold in pixels from the top of the options container that dictates for how long the scroll indicator is shown */
const scrollIndicatorOffsetThreshold = 30;
let scrollIndicatorEnabled = true;
let initLocale;
/**
 * Adds an element to open the BetterYTM menu
 * @deprecated to be replaced with new menu - see https://github.com/Sv443/BetterYTM/issues/23
 */
function addCfgMenu() {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        if (isCfgMenuAdded)
            return;
        isCfgMenuAdded = true;
        initLocale = (0,_config__WEBPACK_IMPORTED_MODULE_1__.getFeatures)().locale;
        const initLangReloadText = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("lang_changed_prompt_reload");
        const toggled_on = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("toggled_on");
        const toggled_off = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("toggled_off");
        //#SECTION backdrop & menu container
        const backgroundElem = document.createElement("div");
        backgroundElem.id = "bytm-cfg-menu-bg";
        backgroundElem.classList.add("bytm-menu-bg");
        backgroundElem.title = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("close_menu_tooltip");
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
        titleElem.innerText = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("config_menu_title", _constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.name);
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
        addLink(yield (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getResourceUrl)("github"), _constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.namespace, (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("open_github", _constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.name));
        addLink(yield (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getResourceUrl)("discord"), "https://dc.sv443.net/", (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("open_discord"));
        addLink(yield (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getResourceUrl)("greasyfork"), _package_json__WEBPACK_IMPORTED_MODULE_10__.cdn.greasyfork, (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("open_greasyfork", _constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.name));
        addLink(yield (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getResourceUrl)("openuserjs"), _package_json__WEBPACK_IMPORTED_MODULE_10__.cdn.openuserjs, (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("open_openuserjs", _constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.name));
        const closeElem = document.createElement("img");
        closeElem.classList.add("bytm-menu-close");
        closeElem.src = yield (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getResourceUrl)("close");
        closeElem.title = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("close_menu_tooltip");
        closeElem.addEventListener("click", closeCfgMenu);
        titleCont.appendChild(titleElem);
        titleCont.appendChild(linksCont);
        headerElem.appendChild(titleCont);
        headerElem.appendChild(closeElem);
        //#SECTION feature list
        const featuresCont = document.createElement("div");
        featuresCont.id = "bytm-menu-opts";
        /** Gets called whenever the feature config is changed */
        const confChanged = (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.debounce)((key, initialVal, newVal) => __awaiter(this, void 0, void 0, function* () {
            const fmt = (val) => typeof val === "object" ? JSON.stringify(val) : String(val);
            (0,_utils__WEBPACK_IMPORTED_MODULE_4__.info)(`Feature config changed at key '${key}', from value '${fmt(initialVal)}' to '${fmt(newVal)}'`);
            const featConf = JSON.parse(JSON.stringify((0,_config__WEBPACK_IMPORTED_MODULE_1__.getFeatures)()));
            featConf[key] = newVal;
            yield (0,_config__WEBPACK_IMPORTED_MODULE_1__.saveFeatures)(featConf);
            if (initLocale !== featConf.locale) {
                yield (0,_translations__WEBPACK_IMPORTED_MODULE_6__.initTranslations)(featConf.locale);
                (0,_translations__WEBPACK_IMPORTED_MODULE_6__.setLocale)(featConf.locale);
                const newText = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("lang_changed_prompt_reload");
                const confirmText = newText !== initLangReloadText ? `${newText}\n\n────────────────────────────────\n\n${initLangReloadText}` : newText;
                if (confirm(confirmText)) {
                    closeCfgMenu();
                    (0,_features_index__WEBPACK_IMPORTED_MODULE_3__.disableBeforeUnload)();
                    location.reload();
                }
            }
            else if ((0,_translations__WEBPACK_IMPORTED_MODULE_6__.getLocale)() !== featConf.locale)
                (0,_translations__WEBPACK_IMPORTED_MODULE_6__.setLocale)(featConf.locale);
        }));
        const featureCfg = (0,_config__WEBPACK_IMPORTED_MODULE_1__.getFeatures)();
        const featureCfgWithCategories = Object.entries(_features_index__WEBPACK_IMPORTED_MODULE_3__.featInfo)
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
            catHeaderElem.innerText = `${(0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)(`feature_category_${category}`)}:`;
            featuresCont.appendChild(catHeaderElem);
            for (const featKey in featObj) {
                const ftInfo = _features_index__WEBPACK_IMPORTED_MODULE_3__.featInfo[featKey];
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
                    const textElem = document.createElement("span");
                    textElem.innerText = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)(`feature_desc_${featKey}`);
                    ftConfElem.appendChild(textElem);
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
                                wrapperElem = (0,_hotkeyInput__WEBPACK_IMPORTED_MODULE_9__.createHotkeyInput)({
                                    initialValue: initialVal,
                                    resetValue: _features_index__WEBPACK_IMPORTED_MODULE_3__.featInfo.switchSitesHotkey.default,
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
        _siteEvents__WEBPACK_IMPORTED_MODULE_5__.siteEvents.on("rebuildCfgMenu", (newConfig) => {
            for (const ftKey in _features_index__WEBPACK_IMPORTED_MODULE_3__.featInfo) {
                const ftElem = document.querySelector(`#bytm-ftconf-${ftKey}-input`);
                const labelElem = document.querySelector(`#bytm-ftconf-${ftKey}-label`);
                if (!ftElem)
                    continue;
                const ftInfo = _features_index__WEBPACK_IMPORTED_MODULE_3__.featInfo[ftKey];
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
            (0,_utils__WEBPACK_IMPORTED_MODULE_4__.info)("Rebuilt config menu");
        });
        //#SECTION scroll indicator
        const scrollIndicator = document.createElement("img");
        scrollIndicator.id = "bytm-menu-scroll-indicator";
        scrollIndicator.src = yield (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getResourceUrl)("arrow_down");
        scrollIndicator.role = "button";
        scrollIndicator.title = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("scroll_to_bottom");
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
        footerElem.innerText = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("reload_hint");
        const reloadElem = document.createElement("button");
        reloadElem.classList.add("bytm-btn");
        reloadElem.style.marginLeft = "10px";
        reloadElem.innerText = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("reload_now");
        reloadElem.title = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("reload_tooltip");
        reloadElem.addEventListener("click", () => {
            closeCfgMenu();
            (0,_features_index__WEBPACK_IMPORTED_MODULE_3__.disableBeforeUnload)();
            location.reload();
        });
        footerElem.appendChild(reloadElem);
        const resetElem = document.createElement("button");
        resetElem.classList.add("bytm-btn");
        resetElem.title = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("reset_tooltip");
        resetElem.innerText = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("reset");
        resetElem.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            if (confirm((0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("reset_confirm"))) {
                yield (0,_config__WEBPACK_IMPORTED_MODULE_1__.setDefaultFeatures)();
                closeCfgMenu();
                (0,_features_index__WEBPACK_IMPORTED_MODULE_3__.disableBeforeUnload)();
                location.reload();
            }
        }));
        const exportElem = document.createElement("button");
        exportElem.classList.add("bytm-btn");
        exportElem.title = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("export_tooltip");
        exportElem.innerText = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("export");
        exportElem.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            closeCfgMenu();
            openExportMenu();
        }));
        const importElem = document.createElement("button");
        importElem.classList.add("bytm-btn");
        importElem.title = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("import_tooltip");
        importElem.innerText = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("import");
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
        versionElem.title = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("version_tooltip", _constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.version, _constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.buildNumber);
        versionElem.innerText = `v${_constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.version} (${_constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.buildNumber})`;
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
        window.addEventListener("resize", (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.debounce)(checkToggleScrollIndicator, 150));
        yield addChangelogMenu();
        yield addExportMenu();
        yield addImportMenu();
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.log)("Added menu element");
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
    _siteEvents__WEBPACK_IMPORTED_MODULE_5__.siteEvents.emit("cfgMenuClosed");
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
        const verticalScroll = (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.isScrollable)(featuresCont).vertical;
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
//#MARKER export menu
let isExportMenuOpen = false;
let copiedTxtTimeout = undefined;
/** Adds a menu to copy the current configuration as JSON (hidden by default) */
function addExportMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        const menuBgElem = document.createElement("div");
        menuBgElem.id = "bytm-export-menu-bg";
        menuBgElem.classList.add("bytm-menu-bg");
        menuBgElem.title = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("close_menu_tooltip");
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
        titleElem.innerText = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("export_menu_title", _constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.name);
        const closeElem = document.createElement("img");
        closeElem.classList.add("bytm-menu-close");
        closeElem.src = yield (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getResourceUrl)("close");
        closeElem.title = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("close_menu_tooltip");
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
        textElem.innerText = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("export_hint");
        const textAreaElem = document.createElement("textarea");
        textAreaElem.id = "bytm-export-menu-textarea";
        textAreaElem.readOnly = true;
        textAreaElem.value = JSON.stringify({ formatVersion: _config__WEBPACK_IMPORTED_MODULE_1__.formatVersion, data: (0,_config__WEBPACK_IMPORTED_MODULE_1__.getFeatures)() });
        _siteEvents__WEBPACK_IMPORTED_MODULE_5__.siteEvents.on("configChanged", (data) => {
            const textAreaElem = document.querySelector("#bytm-export-menu-textarea");
            if (textAreaElem)
                textAreaElem.value = JSON.stringify({ formatVersion: _config__WEBPACK_IMPORTED_MODULE_1__.formatVersion, data });
        });
        //#SECTION footer
        const footerElem = document.createElement("div");
        footerElem.classList.add("bytm-menu-footer-right");
        const copyBtnElem = document.createElement("button");
        copyBtnElem.classList.add("bytm-btn");
        copyBtnElem.innerText = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("copy_to_clipboard");
        copyBtnElem.title = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("copy_config_tooltip");
        const copiedTextElem = document.createElement("span");
        copiedTextElem.id = "bytm-export-menu-copied-txt";
        copiedTextElem.classList.add("bytm-menu-footer-copied");
        copiedTextElem.innerText = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("copied_notice");
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
        return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.warn)("Couldn't find export menu background element");
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
        return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.warn)("Couldn't find export menu background element");
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
        menuBgElem.title = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("close_menu_tooltip");
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
        titleElem.innerText = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("import_menu_title", _constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.name);
        const closeElem = document.createElement("img");
        closeElem.classList.add("bytm-menu-close");
        closeElem.src = yield (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getResourceUrl)("close");
        closeElem.title = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("close_menu_tooltip");
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
        textElem.innerText = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("import_hint");
        const textAreaElem = document.createElement("textarea");
        textAreaElem.id = "bytm-import-menu-textarea";
        //#SECTION footer
        const footerElem = document.createElement("div");
        footerElem.classList.add("bytm-menu-footer-right");
        const importBtnElem = document.createElement("button");
        importBtnElem.classList.add("bytm-btn");
        importBtnElem.innerText = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("import");
        importBtnElem.title = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("start_import_tooltip");
        importBtnElem.addEventListener("click", (evt) => __awaiter(this, void 0, void 0, function* () {
            (evt === null || evt === void 0 ? void 0 : evt.bubbles) && evt.stopPropagation();
            const textAreaElem = document.querySelector("#bytm-import-menu-textarea");
            if (!textAreaElem)
                return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.warn)("Couldn't find import menu textarea element");
            try {
                const parsed = JSON.parse(textAreaElem.value.trim());
                if (typeof parsed !== "object")
                    return alert((0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("import_error_invalid"));
                if (typeof parsed.formatVersion !== "number")
                    return alert((0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("import_error_no_format_version"));
                if (typeof parsed.data !== "object")
                    return alert((0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("import_error_no_data"));
                if (parsed.formatVersion < _config__WEBPACK_IMPORTED_MODULE_1__.formatVersion) {
                    let newData = JSON.parse(JSON.stringify(parsed.data));
                    const sortedMigrations = Object.entries(_config__WEBPACK_IMPORTED_MODULE_1__.migrations)
                        .sort(([a], [b]) => Number(a) - Number(b));
                    let curFmtVer = Number(parsed.formatVersion);
                    for (const [fmtVer, migrationFunc] of sortedMigrations) {
                        const ver = Number(fmtVer);
                        if (curFmtVer < _config__WEBPACK_IMPORTED_MODULE_1__.formatVersion && curFmtVer < ver) {
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
                else if (parsed.formatVersion !== _config__WEBPACK_IMPORTED_MODULE_1__.formatVersion)
                    return alert((0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("import_error_wrong_format_version", _config__WEBPACK_IMPORTED_MODULE_1__.formatVersion, parsed.formatVersion));
                yield (0,_config__WEBPACK_IMPORTED_MODULE_1__.saveFeatures)(Object.assign(Object.assign({}, (0,_config__WEBPACK_IMPORTED_MODULE_1__.getFeatures)()), parsed.data));
                if (confirm((0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("import_success_confirm_reload"))) {
                    (0,_features_index__WEBPACK_IMPORTED_MODULE_3__.disableBeforeUnload)();
                    return location.reload();
                }
                (0,_siteEvents__WEBPACK_IMPORTED_MODULE_5__.emitSiteEvent)("rebuildCfgMenu", parsed.data);
                closeImportMenu();
                openCfgMenu();
            }
            catch (err) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_4__.warn)("Couldn't import configuration:", err);
                alert((0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("import_error_invalid"));
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
        return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.warn)("Couldn't find import menu background element");
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
        return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.warn)("Couldn't find import menu background element");
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
        menuBgElem.title = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("close_menu_tooltip");
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
        titleElem.innerText = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("changelog_menu_title", _constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.name);
        const closeElem = document.createElement("img");
        closeElem.classList.add("bytm-menu-close");
        closeElem.src = yield (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getResourceUrl)("close");
        closeElem.title = (0,_translations__WEBPACK_IMPORTED_MODULE_6__.t)("close_menu_tooltip");
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
        textElem.innerHTML = _changelog_md__WEBPACK_IMPORTED_MODULE_7__["default"];
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
        return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.warn)("Couldn't find changelog menu background element");
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
        return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.warn)("Couldn't find changelog menu background element");
    menuBg.dataset.returnTo = returnTo;
    menuBg.style.visibility = "visible";
    menuBg.style.display = "block";
}


/***/ }),

/***/ "./src/menu/welcomeMenu.ts":
/*!*********************************!*\
  !*** ./src/menu/welcomeMenu.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addWelcomeMenu: function() { return /* binding */ addWelcomeMenu; },
/* harmony export */   closeWelcomeMenu: function() { return /* binding */ closeWelcomeMenu; },
/* harmony export */   openWelcomeMenu: function() { return /* binding */ openWelcomeMenu; },
/* harmony export */   showWelcomeMenu: function() { return /* binding */ showWelcomeMenu; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../translations */ "./src/translations.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _siteEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../siteEvents */ "./src/siteEvents.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _menu_old__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu_old */ "./src/menu/menu_old.ts");
/* harmony import */ var _assets_locales_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/locales.json */ "./assets/locales.json");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../package.json */ "./package.json");
/* harmony import */ var _welcomeMenu_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./welcomeMenu.css */ "./src/menu/welcomeMenu.css");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









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
        titleLogoElem.src = yield (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getResourceUrl)("logo");
        const titleElem = document.createElement("h2");
        titleElem.id = "bytm-welcome-menu-title";
        titleElem.className = "bytm-menu-title";
        titleElem.role = "heading";
        titleElem.ariaLevel = "1";
        titleWrapperElem.appendChild(titleLogoElem);
        titleWrapperElem.appendChild(titleElem);
        const titleCloseElem = document.createElement("img");
        titleCloseElem.id = "bytm-welcome-menu-title-close";
        titleCloseElem.classList.add("bytm-menu-close");
        titleCloseElem.src = yield (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getResourceUrl)("close");
        titleCloseElem.addEventListener("click", closeWelcomeMenu);
        headerElem.appendChild(titleWrapperElem);
        headerElem.appendChild(titleCloseElem);
        //#SECTION footer
        const footerCont = document.createElement("div");
        footerCont.id = "bytm-welcome-menu-footer-cont";
        footerCont.className = "bytm-menu-footer-cont";
        const openCfgElem = document.createElement("button");
        openCfgElem.id = "bytm-welcome-menu-open-cfg";
        openCfgElem.classList.add("bytm-btn");
        openCfgElem.addEventListener("click", () => {
            closeWelcomeMenu();
            (0,_menu_old__WEBPACK_IMPORTED_MODULE_5__.openCfgMenu)();
        });
        const openChangelogElem = document.createElement("button");
        openChangelogElem.id = "bytm-welcome-menu-open-changelog";
        openChangelogElem.classList.add("bytm-btn");
        openChangelogElem.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            closeWelcomeMenu();
            yield (0,_menu_old__WEBPACK_IMPORTED_MODULE_5__.addCfgMenu)();
            (0,_menu_old__WEBPACK_IMPORTED_MODULE_5__.openChangelogMenu)("exit");
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
        localeImg.src = yield (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getResourceUrl)("globe");
        const localeSelectElem = document.createElement("select");
        localeSelectElem.id = "bytm-welcome-menu-locale-select";
        for (const [locale, { name }] of Object.entries(_assets_locales_json__WEBPACK_IMPORTED_MODULE_6__)) {
            const localeOptionElem = document.createElement("option");
            localeOptionElem.value = locale;
            localeOptionElem.innerText = name;
            localeSelectElem.appendChild(localeOptionElem);
        }
        localeSelectElem.value = (0,_config__WEBPACK_IMPORTED_MODULE_2__.getFeatures)().locale;
        localeSelectElem.addEventListener("change", () => __awaiter(this, void 0, void 0, function* () {
            const selectedLocale = localeSelectElem.value;
            const feats = Object.assign({}, (0,_config__WEBPACK_IMPORTED_MODULE_2__.getFeatures)());
            feats.locale = selectedLocale;
            (0,_config__WEBPACK_IMPORTED_MODULE_2__.saveFeatures)(feats);
            yield (0,_translations__WEBPACK_IMPORTED_MODULE_1__.initTranslations)(selectedLocale);
            (0,_translations__WEBPACK_IMPORTED_MODULE_1__.setLocale)(selectedLocale);
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
        "#bytm-welcome-menu-title": (e) => e.innerText = (0,_translations__WEBPACK_IMPORTED_MODULE_1__.t)("welcome_menu_title", _constants__WEBPACK_IMPORTED_MODULE_4__.scriptInfo.name),
        "#bytm-welcome-menu-title-close": (e) => e.title = (0,_translations__WEBPACK_IMPORTED_MODULE_1__.t)("close_menu_tooltip"),
        "#bytm-welcome-menu-open-cfg": (e) => {
            e.innerText = (0,_translations__WEBPACK_IMPORTED_MODULE_1__.t)("config_menu");
            e.title = (0,_translations__WEBPACK_IMPORTED_MODULE_1__.t)("open_config_menu_tooltip");
        },
        "#bytm-welcome-menu-open-changelog": (e) => {
            e.innerText = (0,_translations__WEBPACK_IMPORTED_MODULE_1__.t)("open_changelog");
            e.title = (0,_translations__WEBPACK_IMPORTED_MODULE_1__.t)("open_changelog_tooltip");
        },
        "#bytm-welcome-menu-footer-close": (e) => {
            e.innerText = (0,_translations__WEBPACK_IMPORTED_MODULE_1__.t)("close");
            e.title = (0,_translations__WEBPACK_IMPORTED_MODULE_1__.t)("close_menu_tooltip");
        },
        "#bytm-welcome-text-line1": (e) => e.innerHTML = (0,_translations__WEBPACK_IMPORTED_MODULE_1__.t)("welcome_text_line_1"),
        "#bytm-welcome-text-line2": (e) => e.innerHTML = (0,_translations__WEBPACK_IMPORTED_MODULE_1__.t)("welcome_text_line_2", _constants__WEBPACK_IMPORTED_MODULE_4__.scriptInfo.name),
        "#bytm-welcome-text-line3": (e) => e.innerHTML = (0,_translations__WEBPACK_IMPORTED_MODULE_1__.t)("welcome_text_line_3", _constants__WEBPACK_IMPORTED_MODULE_4__.scriptInfo.name, ...getLink(`${_package_json__WEBPACK_IMPORTED_MODULE_7__.cdn.greasyfork}/feedback`), ...getLink(_package_json__WEBPACK_IMPORTED_MODULE_7__.cdn.openuserjs)),
        "#bytm-welcome-text-line4": (e) => e.innerHTML = (0,_translations__WEBPACK_IMPORTED_MODULE_1__.t)("welcome_text_line_4", ...getLink(_package_json__WEBPACK_IMPORTED_MODULE_7__.funding.url)),
        "#bytm-welcome-text-line5": (e) => e.innerHTML = (0,_translations__WEBPACK_IMPORTED_MODULE_1__.t)("welcome_text_line_5", ...getLink(_package_json__WEBPACK_IMPORTED_MODULE_7__.bugs.url)),
    };
    for (const [selector, cb] of Object.entries(changes)) {
        const elem = document.querySelector(selector);
        if (!elem) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.warn)(`Couldn't find element ${selector} in welcome menu`);
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
    _siteEvents__WEBPACK_IMPORTED_MODULE_3__.siteEvents.emit("welcomeMenuClosed");
    if (!menuBg)
        return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.warn)("Couldn't find welcome menu background element");
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
        return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.warn)("Couldn't find welcome menu background element");
    menuBg.style.visibility = "visible";
    menuBg.style.display = "block";
}
/** Shows the welcome menu and returns a promise that resolves when the menu is closed */
function showWelcomeMenu() {
    return new Promise((resolve) => {
        const unsub = _siteEvents__WEBPACK_IMPORTED_MODULE_3__.siteEvents.on("welcomeMenuClosed", () => {
            unsub();
            resolve();
        });
        openWelcomeMenu();
    });
}


/***/ }),

/***/ "./src/observers.ts":
/*!**************************!*\
  !*** ./src/observers.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initObservers: function() { return /* binding */ initObservers; },
/* harmony export */   observers: function() { return /* binding */ observers; }
/* harmony export */ });
/* harmony import */ var _sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sv443-network/userutils */ "../../svn/UserUtils/dist/index.mjs");

/** Options that are applied to every SelectorObserver instance */
const defaultObserverOptions = {
    defaultDebounce: 100,
};
const observers = {};
/** Call after DOM load to initialize all SelectorObserver instances */
function initObservers() {
    observers.body = new _sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.SelectorObserver(document.body, Object.assign(Object.assign({}, defaultObserverOptions), { subtree: false }));
    observers.body.enable();
    const playerBarSelector = "ytmusic-app-layout ytmusic-player-bar.ytmusic-app";
    observers.playerBar = new _sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.SelectorObserver(playerBarSelector, Object.assign(Object.assign({}, defaultObserverOptions), { defaultDebounce: 200 }));
    observers.body.addListener(playerBarSelector, {
        listener: () => {
            console.log("#DBG-UU enabling playerBar observer");
            observers.playerBar.enable();
        },
    });
    const playerBarInfoSelector = `${playerBarSelector} .middle-controls .content-info-wrapper`;
    observers.playerBarInfo = new _sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.SelectorObserver(playerBarInfoSelector, Object.assign(Object.assign({}, defaultObserverOptions), { attributes: true, attributeFilter: ["title"] }));
    observers.playerBarInfo.addListener(playerBarInfoSelector, {
        listener: () => {
            console.log("#DBG-UU enabling playerBarTitle observer");
            observers.playerBarInfo.enable();
        },
    });
    // #DEBUG example: listen for title change:
    observers.playerBarInfo.addListener("yt-formatted-string.title", {
        continuous: true,
        listener: (titleElem) => {
            console.log("#DBG-UU >>>>> title changed", titleElem.title);
        },
    });
}


/***/ }),

/***/ "./src/onSelector.ts":
/*!***************************!*\
  !*** ./src/onSelector.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSelectorMap: function() { return /* binding */ getSelectorMap; },
/* harmony export */   initOnSelector: function() { return /* binding */ initOnSelector; },
/* harmony export */   onSelectorOld: function() { return /* binding */ onSelectorOld; },
/* harmony export */   removeOnSelector: function() { return /* binding */ removeOnSelector; }
/* harmony export */ });
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
/**
 * Removes all listeners registered in {@linkcode onSelectorOld()} that have the given selector
 * @returns Returns true when all listeners with the associated selector were found and removed, false otherwise
 */
function removeOnSelector(selector) {
    return selectorMap.delete(selector);
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
/** Returns all currently registered selectors, as a map of selector strings to their associated options */
function getSelectorMap() {
    return selectorMap;
}


/***/ }),

/***/ "./src/siteEvents.ts":
/*!***************************!*\
  !*** ./src/siteEvents.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emitSiteEvent: function() { return /* binding */ emitSiteEvent; },
/* harmony export */   initSiteEvents: function() { return /* binding */ initSiteEvents; },
/* harmony export */   removeAllObservers: function() { return /* binding */ removeAllObservers; },
/* harmony export */   siteEvents: function() { return /* binding */ siteEvents; }
/* harmony export */ });
/* harmony import */ var nanoevents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoevents */ "./node_modules/nanoevents/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface */ "./src/interface.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



/** EventEmitter instance that is used to detect changes to the site */
const siteEvents = (0,nanoevents__WEBPACK_IMPORTED_MODULE_2__.createNanoEvents)();
let observers = [];
/** Disconnects and deletes all observers. Run `initSiteEvents()` again to create new ones. */
function removeAllObservers() {
    observers.forEach((observer, i) => {
        observer.disconnect();
        delete observers[i];
    });
    observers = [];
}
/** Creates MutationObservers that check if parts of the site have changed, then emit an event on the `siteEvents` instance. */
function initSiteEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //#SECTION queue
            // the queue container always exists so it doesn't need an extra init function
            const queueObs = new MutationObserver(([{ addedNodes, removedNodes, target }]) => {
                if (addedNodes.length > 0 || removedNodes.length > 0) {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.info)(`Detected queue change - added nodes: ${[...addedNodes.values()].length} - removed nodes: ${[...removedNodes.values()].length}`);
                    emitSiteEvent("queueChanged", target);
                }
            });
            // only observe added or removed elements
            queueObs.observe(document.querySelector(".side-panel.modular #contents.ytmusic-player-queue"), {
                childList: true,
            });
            const autoplayObs = new MutationObserver(([{ addedNodes, removedNodes, target }]) => {
                if (addedNodes.length > 0 || removedNodes.length > 0) {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.info)(`Detected autoplay queue change - added nodes: ${[...addedNodes.values()].length} - removed nodes: ${[...removedNodes.values()].length}`);
                    emitSiteEvent("autoplayQueueChanged", target);
                }
            });
            autoplayObs.observe(document.querySelector(".side-panel.modular ytmusic-player-queue #automix-contents"), {
                childList: true,
            });
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.info)("Successfully initialized SiteEvents observers");
            observers = observers.concat([
                queueObs,
                autoplayObs,
            ]);
        }
        catch (err) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.error)("Couldn't initialize SiteEvents observers due to an error:\n", err);
        }
    });
}
/** Emits a site event with the given key and arguments */
function emitSiteEvent(key, ...args) {
    siteEvents.emit(key, ...args);
    (0,_interface__WEBPACK_IMPORTED_MODULE_1__.emitInterface)(`bytm:siteEvent:${key}`, args);
}


/***/ }),

/***/ "./src/translations.ts":
/*!*****************************!*\
  !*** ./src/translations.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLocale: function() { return /* binding */ getLocale; },
/* harmony export */   initTranslations: function() { return /* binding */ initTranslations; },
/* harmony export */   setLocale: function() { return /* binding */ setLocale; },
/* harmony export */   t: function() { return /* binding */ t; },
/* harmony export */   tp: function() { return /* binding */ tp; }
/* harmony export */ });
/* harmony import */ var _sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sv443-network/userutils */ "../../svn/UserUtils/dist/index.mjs");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface */ "./src/interface.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const fetchOpts = {
    timeout: 10000,
};
const initializedLocales = new Set();
/** Initializes the translations */
function initTranslations(locale) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (initializedLocales.has(locale))
            return;
        try {
            const transUrl = yield (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getResourceUrl)(`tr-${locale}`);
            const transFile = yield (yield (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.fetchAdvanced)(transUrl, fetchOpts)).json();
            // merge with base translations if specified
            const baseTransUrl = transFile.base ? yield (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getResourceUrl)(`tr-${transFile.base}`) : undefined;
            const baseTransFile = baseTransUrl ? yield (yield (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.fetchAdvanced)(baseTransUrl, fetchOpts)).json() : undefined;
            _sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.tr.addLanguage(locale, Object.assign(Object.assign({}, ((_a = baseTransFile === null || baseTransFile === void 0 ? void 0 : baseTransFile.translations) !== null && _a !== void 0 ? _a : {})), transFile.translations));
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.info)(`Loaded translations for locale '${locale}'`);
        }
        catch (err) {
            const errStr = `Couldn't load translations for locale '${locale}'`;
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.error)(errStr, err);
            throw new Error(errStr);
        }
    });
}
/** Sets the current language for translations */
function setLocale(locale) {
    _sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.tr.setLanguage(locale);
    (0,_interface__WEBPACK_IMPORTED_MODULE_2__.setGlobalProp)("locale", locale);
    (0,_interface__WEBPACK_IMPORTED_MODULE_2__.emitInterface)("bytm:setLocale", { locale });
}
/** Returns the currently set language */
function getLocale() {
    return _sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.tr.getLanguage();
}
/** Returns the translated string for the given key, after optionally inserting values */
function t(key, ...values) {
    return (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.tr)(key, ...values);
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


/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogLevel: function() { return /* binding */ LogLevel; }
/* harmony export */ });
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Debug"] = 0] = "Debug";
    LogLevel[LogLevel["Info"] = 1] = "Info";
})(LogLevel || (LogLevel = {}));


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearInner: function() { return /* binding */ clearInner; },
/* harmony export */   dbg: function() { return /* binding */ dbg; },
/* harmony export */   error: function() { return /* binding */ error; },
/* harmony export */   getDomain: function() { return /* binding */ getDomain; },
/* harmony export */   getPreferredLocale: function() { return /* binding */ getPreferredLocale; },
/* harmony export */   getResourceUrl: function() { return /* binding */ getResourceUrl; },
/* harmony export */   getSessionId: function() { return /* binding */ getSessionId; },
/* harmony export */   getVideoTime: function() { return /* binding */ getVideoTime; },
/* harmony export */   info: function() { return /* binding */ info; },
/* harmony export */   log: function() { return /* binding */ log; },
/* harmony export */   setLogLevel: function() { return /* binding */ setLogLevel; },
/* harmony export */   videoSelector: function() { return /* binding */ videoSelector; },
/* harmony export */   warn: function() { return /* binding */ warn; }
/* harmony export */ });
/* harmony import */ var _sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sv443-network/userutils */ "../../svn/UserUtils/dist/index.mjs");
/* harmony import */ var _onSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onSelector */ "./src/onSelector.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./src/types.ts");
/* harmony import */ var _assets_locales_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/locales.json */ "./assets/locales.json");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interface */ "./src/interface.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







//#SECTION logging
let curLogLevel = _types__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Info;
/** Common prefix to be able to tell logged messages apart and filter them in devtools */
const consPrefix = `[${_constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.name}]`;
const consPrefixDbg = `[${_constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.name}/#DEBUG]`;
/** Sets the current log level. 0 = Debug, 1 = Info */
function setLogLevel(level) {
    if (curLogLevel !== level)
        console.log(consPrefix, "Setting log level to", level === 0 ? "Debug" : "Info");
    curLogLevel = level;
    (0,_interface__WEBPACK_IMPORTED_MODULE_5__.setGlobalProp)("logLevel", level);
}
/** Extracts the log level from the last item from spread arguments - returns 0 if the last item is not a number or too low or high */
function getLogLevel(args) {
    const minLogLvl = 0, maxLogLvl = 1;
    if (typeof args.at(-1) === "number")
        return (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.clamp)(args.splice(args.length - 1)[0], minLogLvl, maxLogLvl);
    return _types__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Debug;
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
/** Logs all passed values to the console with a debug-specific prefix */
function dbg(...args) {
    console.log(consPrefixDbg, ...args);
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
                (0,_onSelector__WEBPACK_IMPORTED_MODULE_1__.onSelectorOld)("tp-yt-paper-slider#progress-bar tp-yt-paper-progress#sliderBar", {
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
                (0,_onSelector__WEBPACK_IMPORTED_MODULE_1__.onSelectorOld)(pbSelector, { listener: observe });
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
        view: (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.getUnsafeWindow)(),
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
                    return `https://raw.githubusercontent.com/${_constants__WEBPACK_IMPORTED_MODULE_2__.repo}/${_constants__WEBPACK_IMPORTED_MODULE_2__.branch}${resourcePath}`;
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
    if (Object.entries(_assets_locales_json__WEBPACK_IMPORTED_MODULE_4__).find(([key]) => key === navLang))
        return navLang;
    for (const loc of navLangs) {
        if (Object.entries(_assets_locales_json__WEBPACK_IMPORTED_MODULE_4__).find(([key]) => key === loc))
            return loc;
    }
    // if navigator.languages has entries that aren't locale codes in the format xx_XX
    if (navigator.languages.some(lang => lang.match(/^[a-z]{2}$/))) {
        for (const lang of navLangs) {
            const foundLoc = (_a = Object.entries(_assets_locales_json__WEBPACK_IMPORTED_MODULE_4__).find(([key]) => key.startsWith(lang))) === null || _a === void 0 ? void 0 : _a[0];
            if (foundLoc)
                return foundLoc;
        }
    }
    return "en_US";
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
}
function getSessionId() {
    let sesId = window.sessionStorage.getItem("bytm-session-id");
    if (!sesId || !window.name) {
        window.name = sesId = (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.randomId)(8, 36);
        window.sessionStorage.setItem("bytm-session-id", sesId);
    }
    return window.name = sesId;
}


/***/ }),

/***/ "./node_modules/nanoevents/index.js":
/*!******************************************!*\
  !*** ./node_modules/nanoevents/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNanoEvents: function() { return /* binding */ createNanoEvents; }
/* harmony export */ });
let createNanoEvents = () => ({
  emit(event, ...args) {
    let callbacks = this.events[event] || []
    for (let i = 0, length = callbacks.length; i < length; i++) {
      callbacks[i](...args)
    }
  },
  events: {},
  on(event, cb) {
    this.events[event]?.push(cb) || (this.events[event] = [cb])
    return () => {
      this.events[event] = this.events[event]?.filter(i => cb !== i)
    }
  }
})


/***/ }),

/***/ "../../svn/UserUtils/dist/index.mjs":
/*!******************************************!*\
  !*** ../../svn/UserUtils/dist/index.mjs ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigManager: function() { return /* binding */ ConfigManager; },
/* harmony export */   SelectorObserver: function() { return /* binding */ SelectorObserver; },
/* harmony export */   addGlobalStyle: function() { return /* binding */ addGlobalStyle; },
/* harmony export */   addParent: function() { return /* binding */ addParent; },
/* harmony export */   autoPlural: function() { return /* binding */ autoPlural; },
/* harmony export */   clamp: function() { return /* binding */ clamp; },
/* harmony export */   debounce: function() { return /* binding */ debounce; },
/* harmony export */   fetchAdvanced: function() { return /* binding */ fetchAdvanced; },
/* harmony export */   getUnsafeWindow: function() { return /* binding */ getUnsafeWindow; },
/* harmony export */   insertAfter: function() { return /* binding */ insertAfter; },
/* harmony export */   insertValues: function() { return /* binding */ insertValues; },
/* harmony export */   interceptEvent: function() { return /* binding */ interceptEvent; },
/* harmony export */   interceptWindowEvent: function() { return /* binding */ interceptWindowEvent; },
/* harmony export */   isScrollable: function() { return /* binding */ isScrollable; },
/* harmony export */   mapRange: function() { return /* binding */ mapRange; },
/* harmony export */   openInNewTab: function() { return /* binding */ openInNewTab; },
/* harmony export */   pauseFor: function() { return /* binding */ pauseFor; },
/* harmony export */   preloadImages: function() { return /* binding */ preloadImages; },
/* harmony export */   randRange: function() { return /* binding */ randRange; },
/* harmony export */   randomId: function() { return /* binding */ randomId; },
/* harmony export */   randomItem: function() { return /* binding */ randomItem; },
/* harmony export */   randomItemIndex: function() { return /* binding */ randomItemIndex; },
/* harmony export */   randomizeArray: function() { return /* binding */ randomizeArray; },
/* harmony export */   takeRandomItem: function() { return /* binding */ takeRandomItem; },
/* harmony export */   tr: function() { return /* binding */ tr; }
/* harmony export */ });
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
function randRange(...args) {
  let min, max;
  if (typeof args[0] === "number" && typeof args[1] === "number")
    [min, max] = args;
  else if (typeof args[0] === "number" && typeof args[1] !== "number") {
    min = 0;
    [max] = args;
  } else
    throw new TypeError(`Wrong parameter(s) provided - expected: "number" and "number|undefined", got: "${typeof args[0]}" and "${typeof args[1]}"`);
  min = Number(min);
  max = Number(max);
  if (isNaN(min) || isNaN(max))
    return NaN;
  if (min > max)
    throw new TypeError(`Parameter "min" can't be bigger than "max"`);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomId(length = 16, radix = 16) {
  const arr = new Uint8Array(length);
  crypto.getRandomValues(arr);
  return Array.from(
    arr,
    (v) => mapRange(v, 0, 255, 0, radix).toString(radix).substring(0, 1)
  ).join("");
}

// lib/array.ts
function randomItem(array) {
  return randomItemIndex(array)[0];
}
function randomItemIndex(array) {
  if (array.length === 0)
    return [void 0, void 0];
  const idx = randRange(array.length - 1);
  return [array[idx], idx];
}
function takeRandomItem(arr) {
  const [itm, idx] = randomItemIndex(arr);
  if (idx === void 0)
    return void 0;
  arr.splice(idx, 1);
  return itm;
}
function randomizeArray(array) {
  const retArray = [...array];
  if (array.length === 0)
    return array;
  for (let i = retArray.length - 1; i > 0; i--) {
    const j = Math.floor(randRange(0, 1e4) / 1e4 * (i + 1));
    [retArray[i], retArray[j]] = [retArray[j], retArray[i]];
  }
  return retArray;
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
function preloadImages(srcUrls, rejects = false) {
  const promises = srcUrls.map((src) => new Promise((res, rej) => {
    const image = new Image();
    image.src = src;
    image.addEventListener("load", () => res(image));
    image.addEventListener("error", (evt) => rejects && rej(evt));
  }));
  return Promise.allSettled(promises);
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
function interceptEvent(eventObject, eventName, predicate = () => true) {
  if (typeof Error.stackTraceLimit === "number" && Error.stackTraceLimit < 1e3) {
    Error.stackTraceLimit = 1e3;
  }
  (function(original) {
    eventObject.__proto__.addEventListener = function(...args) {
      var _a, _b;
      const origListener = typeof args[1] === "function" ? args[1] : (_b = (_a = args[1]) == null ? void 0 : _a.handleEvent) != null ? _b : () => void 0;
      args[1] = function(...a) {
        if (args[0] === eventName && predicate(Array.isArray(a) ? a[0] : a))
          return;
        else
          return origListener.apply(this, a);
      };
      original.apply(this, args);
    };
  })(eventObject.__proto__.addEventListener);
}
function interceptWindowEvent(eventName, predicate = () => true) {
  return interceptEvent(getUnsafeWindow(), eventName, predicate);
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
function insertValues(str, ...values) {
  return str.replace(/%\d/gm, (match) => {
    var _a, _b;
    const argIndex = Number(match.substring(1)) - 1;
    return (_b = (_a = values[argIndex]) != null ? _a : match) == null ? void 0 : _b.toString();
  });
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


//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./assets/locales.json":
/*!*****************************!*\
  !*** ./assets/locales.json ***!
  \*****************************/
/***/ (function(module) {

module.exports = JSON.parse('{"de_DE":{"name":"Deutsch (Deutschland)","userscriptDesc":"Konfigurierbare Layout- und Benutzererfahrungs-Verbesserungen für YouTube Music","authors":["Sv443"]},"en_US":{"name":"English (United States)","userscriptDesc":"Configurable layout and user experience improvements for YouTube Music","authors":["Sv443"]},"en_UK":{"name":"English (United Kingdom)","userscriptDesc":"Configurable layout and user experience improvements for YouTube Music","authors":["Sv443"]},"es_ES":{"name":"Español (España)","userscriptDesc":"Mejoras de diseño y experiencia de usuario configurables para YouTube Music","authors":["Sv443"]},"fr_FR":{"name":"Français (France)","userscriptDesc":"Améliorations de la mise en page et de l\'expérience utilisateur configurables pour YouTube Music","authors":["Sv443"]},"hi_IN":{"name":"हिंदी (भारत)","userscriptDesc":"YouTube Music के लिए विन्यास और यूजर अनुभव में सुधार करने योग्य लेआउट और यूजर अनुभव सुधार","authors":["Sv443"]},"ja_JA":{"name":"日本語 (日本)","userscriptDesc":"YouTube Musicのレイアウトとユーザーエクスペリエンスの改善を設定可能にする","authors":["Sv443"]},"pt_BR":{"name":"Português (Brasil)","userscriptDesc":"Melhorias configuráveis no layout e na experiência do usuário para o YouTube Music","authors":["Sv443"]},"zh_CN":{"name":"中文（简化，中国）","userscriptDesc":"可配置的布局和YouTube Music的用户体验改进","authors":["Sv443"]}}');

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ (function(module) {

module.exports = JSON.parse('{"name":"betterytm","userscriptName":"BetterYTM","version":"1.1.0","description":"Configurable layout and user experience improvements for YouTube Music","homepage":"https://github.com/Sv443/BetterYTM","main":"./src/index.ts","type":"module","scripts":{"test":"npm run node-ts -- ./test.ts","build-prod":"webpack --env mode=production","build-dev":"webpack --env mode=development","post-build":"npm run node-ts -- ./src/tools/post-build.ts","serve":"npm run node-ts -- ./src/tools/serve.ts","dev":"concurrently \\"nodemon --exec npm run build-dev\\" \\"npm run serve\\"","lint":"tsc --noEmit && eslint .","tr-progress":"npm run node-ts -- ./src/tools/tr-progress.ts","node-ts":"node --no-warnings=ExperimentalWarning --enable-source-maps --loader ts-node/esm"},"engines":{"node":">=18","npm":">=8"},"repository":{"type":"git","url":"git+https://github.com/Sv443/BetterYTM.git"},"author":{"name":"Sv443","url":"https://github.com/Sv443"},"license":"AGPL-3.0","bugs":{"url":"https://github.com/Sv443/BetterYTM/issues"},"funding":{"type":"github","url":"https://github.com/sponsors/Sv443"},"cdn":{"greasyfork":"https://greasyfork.org/en/scripts/475682-betterytm","openuserjs":"https://openuserjs.org/scripts/Sv443/BetterYTM"},"dependencies":{"@sv443-network/userutils":"^3.0.0","nanoevents":"^8.0.0"},"devDependencies":{"@types/express":"^4.17.17","@types/greasemonkey":"^4.0.4","@types/node":"^20.2.4","@typescript-eslint/eslint-plugin":"^6.7.4","@typescript-eslint/parser":"^6.7.4","concurrently":"^8.1.0","css-loader":"^6.8.1","css-minimizer-webpack-plugin":"^5.0.0","dotenv":"^16.1.4","eslint":"^8.51.0","express":"^4.18.2","html-loader":"^4.2.0","markdown-loader":"^8.0.0","mini-css-extract-plugin":"^2.7.6","nodemon":"^3.0.1","ts-loader":"^9.4.3","ts-node":"^10.9.1","tslib":"^2.5.2","typescript":"^5.0.4","webpack-cli":"^5.1.1"},"browserslist":["last 1 version","> 1%","not dead"],"nodemonConfig":{"watch":["src/**","assets/**","webpack.config.js",".env","changelog.md"],"ext":"ts,js,json,html,css,svg,png","ignore":["dist/*","dev/*"]}}');

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ !function() {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = function(exports, definition) {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ !function() {
/******/ 	__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ }();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ !function() {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ }();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sv443-network/userutils */ "../../svn/UserUtils/dist/index.mjs");
/* harmony import */ var _onSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onSelector */ "./src/onSelector.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/config.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _siteEvents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./siteEvents */ "./src/siteEvents.ts");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./translations */ "./src/translations.ts");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interface */ "./src/interface.ts");
/* harmony import */ var _menu_menu_old__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/menu_old */ "./src/menu/menu_old.ts");
/* harmony import */ var _menu_welcomeMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu/welcomeMenu */ "./src/menu/welcomeMenu.ts");
/* harmony import */ var _features_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/index */ "./src/features/index.ts");
/* harmony import */ var _observers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./observers */ "./src/observers.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};












{
    // console watermark with sexy gradient
    const styleGradient = "background: rgba(165, 38, 38, 1); background: linear-gradient(90deg, rgb(154, 31, 103) 0%, rgb(135, 31, 31) 40%, rgb(184, 64, 41) 100%);";
    const styleCommon = "color: #fff; font-size: 1.5em; padding-left: 6px; padding-right: 6px;";
    console.log();
    console.log(`%c${_constants__WEBPACK_IMPORTED_MODULE_3__.scriptInfo.name}%cv${_constants__WEBPACK_IMPORTED_MODULE_3__.scriptInfo.version}%c\n\nBuild #${_constants__WEBPACK_IMPORTED_MODULE_3__.scriptInfo.buildNumber} ─ ${_constants__WEBPACK_IMPORTED_MODULE_3__.scriptInfo.namespace}`, `font-weight: bold; ${styleCommon} ${styleGradient}`, `background-color: #333; ${styleCommon}`, "padding: initial;");
    console.log([
        "Powered by:",
        "─ lots of ambition",
        `─ my song metadata API: ${_features_index__WEBPACK_IMPORTED_MODULE_10__.geniUrlBase}`,
        "─ my userscript utility library: https://github.com/Sv443-Network/UserUtils",
        "─ this tiny event listener library: https://github.com/ai/nanoevents",
    ].join("\n"));
    console.log();
}
let domLoaded = false;
const domain = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getDomain)();
/** Stuff that needs to be called ASAP, before anything async happens */
function preInit() {
    (0,_utils__WEBPACK_IMPORTED_MODULE_4__.log)("Session ID:", (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getSessionId)());
    (0,_interface__WEBPACK_IMPORTED_MODULE_7__.initInterface)();
    (0,_utils__WEBPACK_IMPORTED_MODULE_4__.setLogLevel)(_constants__WEBPACK_IMPORTED_MODULE_3__.defaultLogLevel);
    if (domain === "ytm")
        (0,_features_index__WEBPACK_IMPORTED_MODULE_10__.initBeforeUnloadHook)();
    init();
}
function init() {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            registerMenuCommands();
        }
        catch (e) {
            void e;
        }
        try {
            document.addEventListener("DOMContentLoaded", () => {
                domLoaded = true;
            });
            const features = yield (0,_config__WEBPACK_IMPORTED_MODULE_2__.initConfig)();
            yield (0,_translations__WEBPACK_IMPORTED_MODULE_6__.initTranslations)((_a = features.locale) !== null && _a !== void 0 ? _a : "en_US");
            (0,_translations__WEBPACK_IMPORTED_MODULE_6__.setLocale)((_b = features.locale) !== null && _b !== void 0 ? _b : "en_US");
            (0,_utils__WEBPACK_IMPORTED_MODULE_4__.setLogLevel)(features.logLevel);
            (0,_features_index__WEBPACK_IMPORTED_MODULE_10__.preInitLayout)(features);
            (0,_features_index__WEBPACK_IMPORTED_MODULE_10__.preInitBehavior)(features);
            (0,_features_index__WEBPACK_IMPORTED_MODULE_10__.preInitInput)(features);
            (0,_features_index__WEBPACK_IMPORTED_MODULE_10__.preInitSongLists)(features);
            if (features.disableBeforeUnloadPopup && domain === "ytm")
                (0,_features_index__WEBPACK_IMPORTED_MODULE_10__.disableBeforeUnload)();
            if (!domLoaded)
                document.addEventListener("DOMContentLoaded", onDomLoad);
            else
                onDomLoad();
            if (features.rememberSongTime)
                (0,_features_index__WEBPACK_IMPORTED_MODULE_10__.initRememberSongTime)();
        }
        catch (err) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_4__.error)("General Error:", err);
        }
        // init menu separately from features
        try {
            void "TODO(v1.2):";
            // initMenu();
        }
        catch (err) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_4__.error)("Couldn't initialize menu:", err);
        }
    });
}
/** Called when the DOM has finished loading and can be queried and altered by the userscript */
function onDomLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        // post-build these double quotes are replaced by backticks (because if backticks are used here, webpack converts them to double quotes)
        (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.addGlobalStyle)("{{GLOBAL_STYLE}}");
        (0,_observers__WEBPACK_IMPORTED_MODULE_11__.initObservers)();
        (0,_onSelector__WEBPACK_IMPORTED_MODULE_1__.initOnSelector)();
        const features = (0,_config__WEBPACK_IMPORTED_MODULE_2__.getFeatures)();
        const ftInit = [];
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.log)(`DOM loaded. Initializing features for domain "${domain}"...`);
        try {
            if (domain === "ytm") {
                (0,_features_index__WEBPACK_IMPORTED_MODULE_10__.disableDarkReader)();
                ftInit.push((0,_siteEvents__WEBPACK_IMPORTED_MODULE_5__.initSiteEvents)());
                if (typeof (yield GM.getValue("bytm-installed")) !== "string") {
                    // open welcome menu with language selector
                    yield (0,_menu_welcomeMenu__WEBPACK_IMPORTED_MODULE_9__.addWelcomeMenu)();
                    (0,_utils__WEBPACK_IMPORTED_MODULE_4__.info)("Showing welcome menu");
                    yield (0,_menu_welcomeMenu__WEBPACK_IMPORTED_MODULE_9__.showWelcomeMenu)();
                    yield GM.setValue("bytm-installed", JSON.stringify({ timestamp: Date.now(), version: _constants__WEBPACK_IMPORTED_MODULE_3__.scriptInfo.version }));
                }
                try {
                    ftInit.push((0,_menu_menu_old__WEBPACK_IMPORTED_MODULE_8__.addCfgMenu)()); // TODO(v1.2): remove
                }
                catch (err) {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_4__.error)("Couldn't add menu:", err);
                }
                _observers__WEBPACK_IMPORTED_MODULE_11__.observers.body.addListener("tp-yt-iron-dropdown #contentWrapper ytd-multi-page-menu-renderer #container.menu-container", {
                    listener: _features_index__WEBPACK_IMPORTED_MODULE_10__.addConfigMenuOption,
                });
                if (features.arrowKeySupport)
                    ftInit.push((0,_features_index__WEBPACK_IMPORTED_MODULE_10__.initArrowKeySkip)());
                if (features.removeUpgradeTab)
                    ftInit.push((0,_features_index__WEBPACK_IMPORTED_MODULE_10__.removeUpgradeTab)());
                if (features.watermarkEnabled)
                    ftInit.push((0,_features_index__WEBPACK_IMPORTED_MODULE_10__.addWatermark)());
                if (features.geniusLyrics)
                    ftInit.push((0,_features_index__WEBPACK_IMPORTED_MODULE_10__.addMediaCtrlLyricsBtn)());
                if (features.deleteFromQueueButton || features.lyricsQueueButton)
                    ftInit.push((0,_features_index__WEBPACK_IMPORTED_MODULE_10__.initQueueButtons)());
                if (features.anchorImprovements)
                    ftInit.push((0,_features_index__WEBPACK_IMPORTED_MODULE_10__.addAnchorImprovements)());
                if (features.closeToastsTimeout > 0)
                    ftInit.push((0,_features_index__WEBPACK_IMPORTED_MODULE_10__.initAutoCloseToasts)());
                if (features.removeShareTrackingParam)
                    ftInit.push((0,_features_index__WEBPACK_IMPORTED_MODULE_10__.removeShareTrackingParam)());
                if (features.numKeysSkipToTime)
                    ftInit.push((0,_features_index__WEBPACK_IMPORTED_MODULE_10__.initNumKeysSkip)());
                if (features.fixSpacing)
                    ftInit.push((0,_features_index__WEBPACK_IMPORTED_MODULE_10__.fixSpacing)());
                if (features.scrollToActiveSongBtn)
                    ftInit.push((0,_features_index__WEBPACK_IMPORTED_MODULE_10__.addScrollToActiveBtn)());
                ftInit.push((0,_features_index__WEBPACK_IMPORTED_MODULE_10__.initVolumeFeatures)());
            }
            if (["ytm", "yt"].includes(domain)) {
                if (features.switchBetweenSites)
                    ftInit.push((0,_features_index__WEBPACK_IMPORTED_MODULE_10__.initSiteSwitch)(domain));
            }
            Promise.all(ftInit).then(() => {
                (0,_interface__WEBPACK_IMPORTED_MODULE_7__.emitInterface)("bytm:ready");
            });
        }
        catch (err) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_4__.error)("Feature error:", err);
        }
    });
}
void ["TODO:", initFeatures];
function initFeatures() {
    return __awaiter(this, void 0, void 0, function* () {
        const ftInit = [];
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.log)(`DOM loaded. Initializing features for domain "${domain}"...`);
        for (const [ftKey, ftInfo] of Object.entries(_features_index__WEBPACK_IMPORTED_MODULE_10__.featInfo)) {
            try {
                const res = ftInfo.enable();
                if (res instanceof Promise)
                    ftInit.push(res);
                else
                    ftInit.push(Promise.resolve());
            }
            catch (err) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_4__.error)(`Couldn't initialize feature "${ftKey}" due to error:`, err);
            }
        }
        _siteEvents__WEBPACK_IMPORTED_MODULE_5__.siteEvents.on("configOptionChanged", (ftKey, oldValue, newValue) => {
            try {
                // @ts-ignore
                if (_features_index__WEBPACK_IMPORTED_MODULE_10__.featInfo[ftKey].change) {
                    // @ts-ignore
                    _features_index__WEBPACK_IMPORTED_MODULE_10__.featInfo[ftKey].change(oldValue, newValue);
                }
                // @ts-ignore
                else if (_features_index__WEBPACK_IMPORTED_MODULE_10__.featInfo[ftKey].disable) {
                    // @ts-ignore
                    const disableRes = _features_index__WEBPACK_IMPORTED_MODULE_10__.featInfo[ftKey].disable();
                    if (disableRes instanceof Promise)
                        disableRes.then(() => _features_index__WEBPACK_IMPORTED_MODULE_10__.featInfo[ftKey].enable());
                    else
                        _features_index__WEBPACK_IMPORTED_MODULE_10__.featInfo[ftKey].enable();
                }
                else {
                    // TODO: set "page reload required" flag in new menu
                    if (confirm("[Work in progress]\nYou changed an option that requires a page reload to be applied.\nReload the page now?")) {
                        (0,_features_index__WEBPACK_IMPORTED_MODULE_10__.disableBeforeUnload)();
                        location.reload();
                    }
                }
            }
            catch (err) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_4__.error)(`Couldn't change feature "${ftKey}" due to error:`, err);
            }
        });
        Promise.all(ftInit).then(() => {
            (0,_interface__WEBPACK_IMPORTED_MODULE_7__.emitInterface)("bytm:ready");
        });
    });
}
function registerMenuCommands() {
    if (_constants__WEBPACK_IMPORTED_MODULE_3__.mode === "development") {
        GM.registerMenuCommand("Reset config", () => __awaiter(this, void 0, void 0, function* () {
            if (confirm("Reset the configuration to its default values?\nThis will automatically reload the page.")) {
                yield (0,_config__WEBPACK_IMPORTED_MODULE_2__.clearConfig)();
                (0,_features_index__WEBPACK_IMPORTED_MODULE_10__.disableBeforeUnload)();
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
        // TODO: check if this works lol
        GM.registerMenuCommand("List active selector listeners", () => __awaiter(this, void 0, void 0, function* () {
            const lines = [];
            let listenersAmt = 0;
            for (const [obsName, obs] of Object.entries(_observers__WEBPACK_IMPORTED_MODULE_11__.observers)) {
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
            console.log(`Showing currently active listeners for ${Object.keys(_observers__WEBPACK_IMPORTED_MODULE_11__.observers).length} observers with ${listenersAmt} total listeners:\n${lines.join("\n")}`);
            alert("See console.");
        }), "s");
    }
}
preInit();

}();

//# sourceMappingURL=BetterYTM.user.js.map