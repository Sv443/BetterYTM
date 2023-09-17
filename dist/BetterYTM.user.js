// ==UserScript==
// @name           BetterYTM
// @homepageURL    https://github.com/Sv443/BetterYTM#readme
// @namespace      https://github.com/Sv443/BetterYTM
// @version        1.0.0
// @description    Configurable layout and UX improvements for YouTube Music
// @description:de Konfigurierbares Layout und UX-Verbesserungen für YouTube Music
// @license        MIT
// @author         Sv443
// @copyright      Sv443 (https://github.com/Sv443)
// @icon           https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/icon/icon_48.png
// @match          https://music.youtube.com/*
// @match          https://www.youtube.com/*
// @run-at         document-start
// @downloadURL    https://raw.githubusercontent.com/Sv443/BetterYTM/develop/dist/BetterYTM.user.js
// @updateURL      https://raw.githubusercontent.com/Sv443/BetterYTM/develop/dist/BetterYTM.user.js
// @connect        api.sv443.net
// @grant          GM.getValue
// @grant          GM.setValue
// @grant          GM.getResourceUrl
// @grant          GM.setClipboard
// @grant          unsafeWindow
// @noframes
// @resource       icon       https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/icon/icon_48.png
// @resource       close      https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/close.png
// @resource       delete     https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/delete.svg
// @resource       error      https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/error.svg
// @resource       lyrics     https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/lyrics.svg
// @resource       spinner    https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/spinner.svg
// @resource       arrow_down https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/arrow_down.svg
// @resource       github     https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/external/github.png
// @resource       greasyfork https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/external/greasyfork.png
// @grant          GM.deleteValue
// @grant          GM.registerMenuCommand
// @grant          GM.listValues
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

/* Disclaimer: I am not affiliated with YouTube, Google, Alphabet, Genius or anyone else */
/* C&D this 🖕 */

/******/ var __webpack_modules__ = ({

/***/ "./changelog.md":
/*!**********************!*\
  !*** ./changelog.md ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<h2 id=\"100\">1.0.0</h2>\n<ul>\n<li>Added Features:<ul>\n<li>Added configuration menu to toggle and configure all features</li>\n<li>Added lyrics button to each song in the queue</li>\n<li>Added &quot;remove from queue&quot; button to each song in the queue</li>\n<li>Use number keys to skip to a specific point in the song</li>\n<li>Added feature to make volume slider bigger and volume control finer</li>\n<li>Added percentage label next to the volume slider &amp; title on hover</li>\n<li>Improvements to link hitboxes &amp; more links in general</li>\n<li>Permanent toast notifications can be automatically closed now</li>\n<li>Remove tracking parameter <code>&amp;si=...</code> from links in the share menu</li>\n<li>Added an easter egg to the watermark and config menu option :)</li>\n</ul>\n</li>\n<li>Changes &amp; Fixes:<ul>\n<li>Now the lyrics button will directly link to the lyrics (using my API <a href=\"https://github.com/Sv443/geniURL\">geniURL</a>)</li>\n<li>Video time is now kept when switching site on regular YT too</li>\n<li>Fixed compatibility with the new site design</li>\n<li>A loading indicator is shown while the lyrics are loading</li>\n<li>Images are now smaller and cached by the userscript extension</li>\n<li>Song names with hyphens are now resolved better for lyrics lookup</li>\n<li>Site switch with <kbd>F9</kbd> will now keep the video time</li>\n<li>Moved lots of utility code to my new library <a href=\"https://github.com/Sv443-Network/UserUtils\">UserUtils</a></li>\n</ul>\n</li>\n</ul>\n<br>\n\n<h2 id=\"020\">0.2.0</h2>\n<ul>\n<li>Added Features:<ul>\n<li>Switch between YouTube and YT Music (with <kbd>F9</kbd> by default)</li>\n<li>Search for song lyrics with new button in media controls</li>\n<li>Remove &quot;Upgrade to YTM Premium&quot; tab</li>\n</ul>\n</li>\n</ul>\n<br>\n\n<h2 id=\"010\">0.1.0</h2>\n<ul>\n<li>Added support for arrow keys to skip forward or backward (currently only by fixed 10 second interval)</li>\n</ul>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./src/menu/menu.html":
/*!****************************!*\
  !*** ./src/menu/menu.html ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<dialog id=\"bytm-menu-dialog\">\n  <div id=\"bytm-menu-header-container\">\n    <div class=\"bytm-menu-header-option\" id=\"bytm-menu-tab-options-header\" data-active=\"true\">\n      <h3>Options</h3>\n    </div>\n    <div class=\"bytm-menu-header-option\" id=\"bytm-menu-tab-info-header\" data-active=\"false\">\n      <h3>Info</h3>\n    </div>\n    <div class=\"bytm-menu-header-option\" id=\"bytm-menu-tab-changelog-header\" data-active=\"false\">\n      <h3>Changelog</h3>\n    </div>\n  </div>\n  <div id=\"bytm-menu-body\">\n    <div class=\"bytm-menu-tab-content\" id=\"bytm-menu-tab-options-content\" data-active=\"true\"></div>\n    <div class=\"bytm-menu-tab-content\" id=\"bytm-menu-tab-info-content\" data-active=\"false\">\n      ayo info\n    </div>\n    <div class=\"bytm-menu-tab-content\" id=\"bytm-menu-tab-changelog-content\" data-active=\"false\"></div>\n  </div>\n</dialog>\n";
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

/***/ "./src/menu/menu.css":
/*!***************************!*\
  !*** ./src/menu/menu.css ***!
  \***************************/
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
/* harmony import */ var _sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sv443-network/userutils */ "./node_modules/@sv443-network/userutils/dist/index.mjs");
/* harmony import */ var _features_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/index */ "./src/features/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ "./src/events.ts");
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
const formatVersion = 3;
/** Config data format migration dictionary */
const migrations = {
    // 1 -> 2
    2: (oldData) => {
        const queueBtnsEnabled = Boolean(oldData.queueButtons);
        delete oldData.queueButtons;
        return Object.assign(Object.assign({}, oldData), { deleteFromQueueButton: queueBtnsEnabled, lyricsQueueButton: queueBtnsEnabled });
    },
    // 2 -> 3
    3: (oldData) => (Object.assign(Object.assign({}, oldData), { removeShareTrackingParam: true, numKeysSkipToTime: true })),
};
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
        _events__WEBPACK_IMPORTED_MODULE_3__.siteEvents.emit("configChanged", cfgMgr.getData());
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.info)("Saved new feature config:", featureConf);
    });
}
/** Saves the default feature config synchronously to the in-memory cache and asynchronously to persistent storage */
function setDefaultFeatures() {
    return __awaiter(this, void 0, void 0, function* () {
        yield cfgMgr.saveDefaultData();
        _events__WEBPACK_IMPORTED_MODULE_3__.siteEvents.emit("configChanged", cfgMgr.getData());
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
/* harmony export */   logLevel: function() { return /* binding */ logLevel; },
/* harmony export */   mode: function() { return /* binding */ mode; },
/* harmony export */   scriptInfo: function() { return /* binding */ scriptInfo; }
/* harmony export */ });
const modeRaw = "development";
const branchRaw = "develop";
/** The mode in which the script was built (production or development) */
const mode = (modeRaw.match(/^{{.+}}$/) ? "production" : modeRaw);
/** The branch to use in various URLs that point to the GitHub repo */
const branch = (branchRaw.match(/^{{.+}}$/) ? "main" : branchRaw);
/**
 * How much info should be logged to the devtools console
 * 0 = Debug (show everything) or 1 = Info (show only important stuff)
 */
const logLevel = mode === "production" ? 1 : 0;
/** Info about the userscript, parsed from the userscript header (tools/post-build.js) */
const scriptInfo = {
    name: GM.info.script.name,
    version: GM.info.script.version,
    namespace: GM.info.script.namespace,
    lastCommit: "9e17b58", // assert as generic string instead of literal
};


/***/ }),

/***/ "./src/events.ts":
/*!***********************!*\
  !*** ./src/events.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initSiteEvents: function() { return /* binding */ initSiteEvents; },
/* harmony export */   removeAllObservers: function() { return /* binding */ removeAllObservers; },
/* harmony export */   siteEvents: function() { return /* binding */ siteEvents; }
/* harmony export */ });
/* harmony import */ var nanoevents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoevents */ "./node_modules/nanoevents/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
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
const siteEvents = (0,nanoevents__WEBPACK_IMPORTED_MODULE_1__.createNanoEvents)();
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
                    siteEvents.emit("queueChanged", target);
                }
            });
            // only observe added or removed elements
            queueObs.observe(document.querySelector(".side-panel.modular #contents.ytmusic-player-queue"), {
                childList: true,
            });
            const autoplayObs = new MutationObserver(([{ addedNodes, removedNodes, target }]) => {
                if (addedNodes.length > 0 || removedNodes.length > 0) {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.info)(`Detected autoplay queue change - added nodes: ${[...addedNodes.values()].length} - removed nodes: ${[...removedNodes.values()].length}`);
                    siteEvents.emit("autoplayQueueChanged", target);
                }
            });
            autoplayObs.observe(document.querySelector(".side-panel.modular ytmusic-player-queue #automix-contents"), {
                childList: true,
            });
            //#SECTION home page observers
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


/***/ }),

/***/ "./src/features/index.ts":
/*!*******************************!*\
  !*** ./src/features/index.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAnchorImprovements: function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_2__.addAnchorImprovements; },
/* harmony export */   addConfigMenuOption: function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_2__.addConfigMenuOption; },
/* harmony export */   addLyricsCacheEntry: function() { return /* reexport safe */ _lyrics__WEBPACK_IMPORTED_MODULE_3__.addLyricsCacheEntry; },
/* harmony export */   addMediaCtrlLyricsBtn: function() { return /* reexport safe */ _lyrics__WEBPACK_IMPORTED_MODULE_3__.addMediaCtrlLyricsBtn; },
/* harmony export */   addMenu: function() { return /* reexport safe */ _menu_menu_old__WEBPACK_IMPORTED_MODULE_5__.addMenu; },
/* harmony export */   addWatermark: function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_2__.addWatermark; },
/* harmony export */   categoryNames: function() { return /* binding */ categoryNames; },
/* harmony export */   closeMenu: function() { return /* reexport safe */ _menu_menu_old__WEBPACK_IMPORTED_MODULE_5__.closeMenu; },
/* harmony export */   createLyricsBtn: function() { return /* reexport safe */ _lyrics__WEBPACK_IMPORTED_MODULE_3__.createLyricsBtn; },
/* harmony export */   disableBeforeUnload: function() { return /* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_1__.disableBeforeUnload; },
/* harmony export */   enableBeforeUnload: function() { return /* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_1__.enableBeforeUnload; },
/* harmony export */   featInfo: function() { return /* binding */ featInfo; },
/* harmony export */   geniUrlBase: function() { return /* reexport safe */ _lyrics__WEBPACK_IMPORTED_MODULE_3__.geniUrlBase; },
/* harmony export */   getCurrentLyricsUrl: function() { return /* reexport safe */ _lyrics__WEBPACK_IMPORTED_MODULE_3__.getCurrentLyricsUrl; },
/* harmony export */   getGeniusUrl: function() { return /* reexport safe */ _lyrics__WEBPACK_IMPORTED_MODULE_3__.getGeniusUrl; },
/* harmony export */   getLyricsCacheEntry: function() { return /* reexport safe */ _lyrics__WEBPACK_IMPORTED_MODULE_3__.getLyricsCacheEntry; },
/* harmony export */   initArrowKeySkip: function() { return /* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_1__.initArrowKeySkip; },
/* harmony export */   initAutoCloseToasts: function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_2__.initAutoCloseToasts; },
/* harmony export */   initBeforeUnloadHook: function() { return /* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_1__.initBeforeUnloadHook; },
/* harmony export */   initMenu: function() { return /* reexport safe */ _menu_menu__WEBPACK_IMPORTED_MODULE_4__.initMenu; },
/* harmony export */   initNumKeysSkip: function() { return /* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_1__.initNumKeysSkip; },
/* harmony export */   initQueueButtons: function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_2__.initQueueButtons; },
/* harmony export */   initSiteSwitch: function() { return /* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_1__.initSiteSwitch; },
/* harmony export */   initVolumeFeatures: function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_2__.initVolumeFeatures; },
/* harmony export */   isMenuOpen: function() { return /* reexport safe */ _menu_menu_old__WEBPACK_IMPORTED_MODULE_5__.isMenuOpen; },
/* harmony export */   openMenu: function() { return /* reexport safe */ _menu_menu_old__WEBPACK_IMPORTED_MODULE_5__.openMenu; },
/* harmony export */   preInitLayout: function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_2__.preInitLayout; },
/* harmony export */   removeShareTrackingParam: function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_2__.removeShareTrackingParam; },
/* harmony export */   removeUpgradeTab: function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_2__.removeUpgradeTab; },
/* harmony export */   sanitizeArtists: function() { return /* reexport safe */ _lyrics__WEBPACK_IMPORTED_MODULE_3__.sanitizeArtists; },
/* harmony export */   sanitizeSong: function() { return /* reexport safe */ _lyrics__WEBPACK_IMPORTED_MODULE_3__.sanitizeSong; },
/* harmony export */   splitVideoTitle: function() { return /* reexport safe */ _lyrics__WEBPACK_IMPORTED_MODULE_3__.splitVideoTitle; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ "./src/features/input.ts");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ "./src/features/layout.ts");
/* harmony import */ var _lyrics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lyrics */ "./src/features/lyrics.ts");
/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu/menu */ "./src/menu/menu.ts");
/* harmony import */ var _menu_menu_old__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu/menu_old */ "./src/menu/menu_old.ts");






/** Mapping of feature category identifiers to readable strings */
const categoryNames = {
    input: "Input",
    layout: "Layout",
    lyrics: "Lyrics",
};
/** Contains all possible features with their default values and other configuration */
const featInfo = {
    //#SECTION layout
    removeUpgradeTab: {
        desc: "Remove the Upgrade / Premium tab",
        type: "toggle",
        category: "layout",
        default: true,
    },
    volumeSliderLabel: {
        desc: "Add a percentage label next to the volume slider",
        type: "toggle",
        category: "layout",
        default: true,
    },
    volumeSliderSize: {
        desc: "The width of the volume slider in pixels",
        type: "number",
        category: "layout",
        min: 50,
        max: 500,
        step: 5,
        default: 150,
        unit: "px",
    },
    volumeSliderStep: {
        desc: "Volume slider sensitivity (by how little percent the volume can be changed at a time)",
        type: "slider",
        category: "layout",
        min: 1,
        max: 25,
        default: 2,
        unit: "%",
    },
    watermarkEnabled: {
        desc: `Show a ${_constants__WEBPACK_IMPORTED_MODULE_0__.scriptInfo.name} watermark under the site logo that opens this config menu`,
        type: "toggle",
        category: "layout",
        default: true,
    },
    deleteFromQueueButton: {
        desc: "Add a button to each song in the queue to quickly remove it",
        type: "toggle",
        category: "layout",
        default: true,
    },
    closeToastsTimeout: {
        desc: "After how many seconds to close permanent notifications - 0 to only close them manually (default behavior)",
        type: "number",
        category: "layout",
        min: 0,
        max: 30,
        step: 0.5,
        default: 0,
        unit: "s",
    },
    removeShareTrackingParam: {
        desc: "Remove the tracking parameter (&si=...) from links in the share popup",
        type: "toggle",
        category: "layout",
        default: true,
    },
    //#SECTION input
    arrowKeySupport: {
        desc: "Use arrow keys to skip forwards and backwards by 10 seconds",
        type: "toggle",
        category: "input",
        default: true,
    },
    switchBetweenSites: {
        desc: "Add F9 as a hotkey to switch between the YT and YTM sites on a video / song",
        type: "toggle",
        category: "input",
        default: true,
    },
    switchSitesHotkey: {
        hidden: true,
        desc: "TODO(v1.1): Which hotkey needs to be pressed to switch sites?",
        type: "hotkey",
        category: "input",
        default: {
            key: "F9",
            shift: false,
            ctrl: false,
            meta: false,
        },
    },
    disableBeforeUnloadPopup: {
        desc: "Prevent the confirmation popup that appears when trying to leave the site while a song is playing",
        type: "toggle",
        category: "input",
        default: false,
    },
    anchorImprovements: {
        desc: "Add and improve links all over the page so things can be opened in a new tab easier",
        type: "toggle",
        category: "input",
        default: true,
    },
    numKeysSkipToTime: {
        desc: "Enable skipping to a specific time in the video by pressing a number key (0-9)",
        type: "toggle",
        category: "input",
        default: true,
    },
    //#SECTION lyrics
    geniusLyrics: {
        desc: "Add a button to the media controls of the currently playing song to open its lyrics on genius.com",
        type: "toggle",
        category: "lyrics",
        default: true,
    },
    lyricsQueueButton: {
        desc: "Add a button to each song in the queue to quickly open its lyrics page",
        type: "toggle",
        category: "lyrics",
        default: true,
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
/* harmony export */   disableBeforeUnload: function() { return /* binding */ disableBeforeUnload; },
/* harmony export */   enableBeforeUnload: function() { return /* binding */ enableBeforeUnload; },
/* harmony export */   initArrowKeySkip: function() { return /* binding */ initArrowKeySkip; },
/* harmony export */   initBeforeUnloadHook: function() { return /* binding */ initBeforeUnloadHook; },
/* harmony export */   initNumKeysSkip: function() { return /* binding */ initNumKeysSkip; },
/* harmony export */   initSiteSwitch: function() { return /* binding */ initSiteSwitch; }
/* harmony export */ });
/* harmony import */ var _sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sv443-network/userutils */ "./node_modules/@sv443-network/userutils/dist/index.mjs");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _menu_menu_old__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu_old */ "./src/menu/menu_old.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



//#MARKER arrow key skip
function initArrowKeySkip() {
    document.addEventListener("keydown", (evt) => {
        var _a, _b, _c;
        if (!["ArrowLeft", "ArrowRight"].includes(evt.code))
            return;
        // discard the event when a (text) input is currently active, like when editing a playlist
        if (["INPUT", "TEXTAREA", "SELECT"].includes((_b = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.tagName) !== null && _b !== void 0 ? _b : "_"))
            return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.info)(`Captured valid key to skip forward or backward but the current active element is <${(_c = document.activeElement) === null || _c === void 0 ? void 0 : _c.tagName.toLowerCase()}>, so the keypress is ignored`);
        onArrowKeyPress(evt);
    });
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)("Added arrow key press listener");
}
/** Called when the user presses any key, anywhere */
function onArrowKeyPress(evt) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)(`Captured key '${evt.code}' in proxy listener`);
    // ripped this stuff from the console, most of these are probably unnecessary but this was finnicky af and I am sick and tired of trial and error
    const defaultProps = {
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        target: document.body,
        currentTarget: document.body,
        originalTarget: document.body,
        explicitOriginalTarget: document.body,
        srcElement: document.body,
        type: "keydown",
        bubbles: true,
        cancelBubble: false,
        cancelable: true,
        isTrusted: true,
        repeat: false,
        // needed because otherwise YTM errors out - see https://github.com/Sv443/BetterYTM/issues/18#show_issue
        view: (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.getUnsafeWindow)(),
    };
    let invalidKey = false;
    let keyProps = {};
    switch (evt.code) {
        case "ArrowLeft":
            keyProps = {
                code: "KeyH",
                key: "h",
                keyCode: 72,
                which: 72,
            };
            break;
        case "ArrowRight":
            keyProps = {
                code: "KeyL",
                key: "l",
                keyCode: 76,
                which: 76,
            };
            break;
        default:
            invalidKey = true;
            break;
    }
    if (!invalidKey) {
        const proxyProps = Object.assign(Object.assign({ code: "" }, defaultProps), keyProps);
        document.body.dispatchEvent(new KeyboardEvent("keydown", proxyProps));
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)(`Dispatched proxy keydown event: [${evt.code}] -> [${proxyProps.code}]`);
    }
    else
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.warn)(`Captured key '${evt.code}' has no defined behavior`);
}
//#MARKER site switch
/** switch sites only if current video time is greater than this value */
const videoTimeThreshold = 3;
/** Initializes the site switch feature */
function initSiteSwitch(domain) {
    document.addEventListener("keydown", (e) => {
        if (e.key === "F9")
            switchSite(domain === "yt" ? "ytm" : "yt");
    });
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)("Initialized site switch listener");
}
/** Switches to the other site (between YT and YTM) */
function switchSite(newDomain) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (newDomain === "ytm" && !location.href.includes("/watch"))
                return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.warn)("Not on a video page, so the site switch is ignored");
            let subdomain;
            if (newDomain === "ytm")
                subdomain = "music";
            else if (newDomain === "yt")
                subdomain = "www";
            if (!subdomain)
                throw new Error(`Unrecognized domain '${newDomain}'`);
            disableBeforeUnload();
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
                        : "?" + cleanSearch}&t=${vt - 1}`
                    : `?t=${vt - 1}`
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
//#MARKER beforeunload popup
let beforeUnloadEnabled = true;
/** Disables the popup before leaving the site */
function disableBeforeUnload() {
    beforeUnloadEnabled = false;
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.info)("Disabled popup before leaving the site");
}
/** (Re-)enables the popup before leaving the site */
function enableBeforeUnload() {
    beforeUnloadEnabled = true;
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.info)("Enabled popup before leaving the site");
}
/**
 * Adds a spy function into `window.__proto__.addEventListener` to selectively discard `beforeunload`
 * event listeners before they can be called by the site.
 */
function initBeforeUnloadHook() {
    Error.stackTraceLimit = 1000; // default is 25 on FF so this should hopefully be more than enough
    (function (original) {
        // @ts-ignore
        window.__proto__.addEventListener = function (...args) {
            const origListener = typeof args[1] === "function" ? args[1] : args[1].handleEvent;
            args[1] = function (...a) {
                if (!beforeUnloadEnabled && args[0] === "beforeunload")
                    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.info)("Prevented beforeunload event listener from being called");
                else
                    return origListener.apply(this, a);
            };
            original.apply(this, args);
        };
        // @ts-ignore
    })(window.__proto__.addEventListener);
}
//#MARKER number keys skip to time
/** Adds the ability to skip to a certain time in the video by pressing a number key (0-9) */
function initNumKeysSkip() {
    document.addEventListener("keydown", (e) => {
        var _a, _b, _c, _d;
        if (!e.key.trim().match(/^[0-9]$/))
            return;
        if (_menu_menu_old__WEBPACK_IMPORTED_MODULE_2__.isMenuOpen)
            return;
        // discard the event when a (text) input is currently active, like when editing a playlist or when the search bar is focused
        if (document.activeElement !== document.body
            && !["progress-bar"].includes((_b = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : "_")
            && !["BUTTON", "A"].includes((_d = (_c = document.activeElement) === null || _c === void 0 ? void 0 : _c.tagName) !== null && _d !== void 0 ? _d : "_"))
            return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.info)("Captured valid key to skip video to but an unexpected element is focused, so the keypress is ignored");
        skipToTimeKey(Number(e.key));
    });
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)("Added number key press listener");
}
/** Returns the x position as a fraction of timeKey in maxWidth */
function getX(timeKey, maxWidth) {
    if (timeKey >= 10)
        return maxWidth;
    return Math.floor((maxWidth / 10) * timeKey);
}
/** Calculates DOM-relative offsets of the bounding client rect of the passed element - see https://stackoverflow.com/a/442474/11187044 */
function getOffsetRect(elem) {
    let left = 0;
    let top = 0;
    const rect = elem.getBoundingClientRect();
    while (elem && !isNaN(elem.offsetLeft) && !isNaN(elem.offsetTop)) {
        left += elem.offsetLeft - elem.scrollLeft;
        top += elem.offsetTop - elem.scrollTop;
        elem = elem.offsetParent;
    }
    return {
        top,
        left,
        width: rect.width,
        height: rect.height,
    };
}
/** Emulates a click on the video progress bar at the position calculated from the passed time key (0-9) */
function skipToTimeKey(key) {
    // not technically a progress element but behaves pretty much the same
    const progressElem = document.querySelector("tp-yt-paper-slider#progress-bar tp-yt-paper-progress#sliderBar");
    if (!progressElem)
        return;
    const rect = getOffsetRect(progressElem);
    const x = getX(key, rect.width);
    const y = rect.top - rect.height / 2;
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)(`Skipping to time key ${key} (x offset: ${x}px of ${rect.width}px)`);
    const evt = new MouseEvent("mousedown", {
        clientX: x,
        clientY: Math.round(y),
        // @ts-ignore
        layerX: x,
        layerY: Math.round(rect.height / 2),
        target: progressElem,
        bubbles: true,
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
        button: 0,
        buttons: 1,
        which: 1,
        isTrusted: true,
        offsetX: 0,
        offsetY: 0,
        // needed because otherwise YTM errors out - see https://github.com/Sv443/BetterYTM/issues/18#show_issue
        view: (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.getUnsafeWindow)(),
    });
    progressElem.dispatchEvent(evt);
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
/* harmony export */   addWatermark: function() { return /* binding */ addWatermark; },
/* harmony export */   initAutoCloseToasts: function() { return /* binding */ initAutoCloseToasts; },
/* harmony export */   initQueueButtons: function() { return /* binding */ initQueueButtons; },
/* harmony export */   initVolumeFeatures: function() { return /* binding */ initVolumeFeatures; },
/* harmony export */   preInitLayout: function() { return /* binding */ preInitLayout; },
/* harmony export */   removeShareTrackingParam: function() { return /* binding */ removeShareTrackingParam; },
/* harmony export */   removeUpgradeTab: function() { return /* binding */ removeUpgradeTab; }
/* harmony export */ });
/* harmony import */ var _sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sv443-network/userutils */ "./node_modules/@sv443-network/userutils/dist/index.mjs");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events */ "./src/events.ts");
/* harmony import */ var _menu_menu_old__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu/menu_old */ "./src/menu/menu_old.ts");
/* harmony import */ var _lyrics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lyrics */ "./src/features/lyrics.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index */ "./src/features/index.ts");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout.css */ "./src/features/layout.css");
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
let menuOpenAmt = 0, logoExchanged = false;
/** Adds a watermark beneath the logo */
function addWatermark() {
    const watermark = document.createElement("a");
    watermark.role = "button";
    watermark.id = "bytm-watermark";
    watermark.className = "style-scope ytmusic-nav-bar bytm-no-select";
    watermark.innerText = _constants__WEBPACK_IMPORTED_MODULE_1__.scriptInfo.name;
    watermark.title = "Open menu";
    watermark.tabIndex = 1000;
    improveLogo();
    watermark.addEventListener("click", (e) => {
        e.stopPropagation();
        menuOpenAmt++;
        if ((!e.shiftKey || logoExchanged) && menuOpenAmt !== 5)
            (0,_menu_menu_old__WEBPACK_IMPORTED_MODULE_4__.openMenu)();
        if ((!logoExchanged && e.shiftKey) || menuOpenAmt === 5)
            exchangeLogo();
    });
    // when using the tab key to navigate
    watermark.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.stopPropagation();
            menuOpenAmt++;
            if ((!e.shiftKey || logoExchanged) && menuOpenAmt !== 5)
                (0,_menu_menu_old__WEBPACK_IMPORTED_MODULE_4__.openMenu)();
            if ((!logoExchanged && e.shiftKey) || menuOpenAmt === 5)
                exchangeLogo();
        }
    });
    const logoElem = document.querySelector("#left-content");
    (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.insertAfter)(logoElem, watermark);
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.log)("Added watermark element");
}
/** Turns the regular `<img>`-based logo into inline SVG to be able to animate and modify parts of it */
function improveLogo() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.fetchAdvanced)("https://music.youtube.com/img/on_platform_logo_dark.svg");
            const svg = yield res.text();
            (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.onSelector)("ytmusic-logo a", {
                listener: (logoElem) => {
                    var _a;
                    logoElem.classList.add("bytm-mod-logo", "bytm-no-select");
                    logoElem.innerHTML = svg;
                    logoElem.querySelectorAll("ellipse").forEach((e) => {
                        e.classList.add("bytm-mod-logo-ellipse");
                    });
                    (_a = logoElem.querySelector("path")) === null || _a === void 0 ? void 0 : _a.classList.add("bytm-mod-logo-path");
                    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.log)("Swapped logo to inline SVG");
                },
            });
        }
        catch (err) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.error)("Couldn't improve logo due to an error:", err);
        }
    });
}
/** Exchanges the default YTM logo into BetterYTM's logo with a sick ass animation */
function exchangeLogo() {
    (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.onSelector)(".bytm-mod-logo", {
        listener: (logoElem) => __awaiter(this, void 0, void 0, function* () {
            if (logoElem.classList.contains("bytm-logo-exchanged"))
                return;
            logoExchanged = true;
            logoElem.classList.add("bytm-logo-exchanged");
            const iconUrl = yield (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getResourceUrl)("icon");
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
/** Called whenever the menu exists to add a BYTM-Configuration button to the user menu popover */
function addConfigMenuOption(container) {
    return __awaiter(this, void 0, void 0, function* () {
        const cfgOptElem = document.createElement("div");
        cfgOptElem.role = "button";
        cfgOptElem.className = "bytm-cfg-menu-option";
        const cfgOptItemElem = document.createElement("div");
        cfgOptItemElem.className = "bytm-cfg-menu-option-item";
        cfgOptItemElem.ariaLabel = cfgOptItemElem.title = "Click to open BetterYTM's configuration menu";
        cfgOptItemElem.addEventListener("click", (e) => __awaiter(this, void 0, void 0, function* () {
            const settingsBtnElem = document.querySelector("ytmusic-nav-bar ytmusic-settings-button tp-yt-paper-icon-button");
            settingsBtnElem === null || settingsBtnElem === void 0 ? void 0 : settingsBtnElem.click();
            menuOpenAmt++;
            yield (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.pauseFor)(100);
            if ((!e.shiftKey || logoExchanged) && menuOpenAmt !== 5)
                (0,_menu_menu_old__WEBPACK_IMPORTED_MODULE_4__.openMenu)();
            if ((!logoExchanged && e.shiftKey) || menuOpenAmt === 5)
                exchangeLogo();
        }));
        const cfgOptIconElem = document.createElement("img");
        cfgOptIconElem.className = "bytm-cfg-menu-option-icon";
        cfgOptIconElem.src = yield (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getResourceUrl)("icon");
        const cfgOptTextElem = document.createElement("div");
        cfgOptTextElem.className = "bytm-cfg-menu-option-text";
        cfgOptTextElem.innerText = "BetterYTM Configuration";
        cfgOptItemElem.appendChild(cfgOptIconElem);
        cfgOptItemElem.appendChild(cfgOptTextElem);
        cfgOptElem.appendChild(cfgOptItemElem);
        container.appendChild(cfgOptElem);
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.log)("Added BYTM-Configuration button to menu popover");
    });
}
//#MARKER remove upgrade tab
/** Removes the "Upgrade" / YT Music Premium tab from the sidebar */
function removeUpgradeTab() {
    (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.onSelector)("ytmusic-app-layout tp-yt-app-drawer #contentContainer #guide-content #items ytmusic-guide-entry-renderer:nth-of-type(4)", {
        listener: (tabElemLarge) => {
            tabElemLarge.remove();
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.log)("Removed large upgrade tab");
        },
    });
    (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.onSelector)("ytmusic-app-layout #mini-guide ytmusic-guide-renderer #sections ytmusic-guide-section-renderer[is-primary] #items ytmusic-guide-entry-renderer:nth-of-type(4)", {
        listener: (tabElemSmall) => {
            tabElemSmall.remove();
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.log)("Removed small upgrade tab");
        },
    });
}
//#MARKER volume slider
function initVolumeFeatures() {
    // not technically an input element but behaves pretty much the same
    (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.onSelector)("tp-yt-paper-slider#volume-slider", {
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
}
/** Adds a percentage label to the volume slider and tooltip */
function addVolumeSliderLabel(sliderElem, sliderCont) {
    const labelElem = document.createElement("div");
    labelElem.className = "bytm-vol-slider-label";
    labelElem.innerText = `${sliderElem.value}%`;
    // prevent video from minimizing
    labelElem.addEventListener("click", (e) => e.stopPropagation());
    const getLabelTexts = (slider) => {
        const labelShort = `${slider.value}%`;
        const sensText = features.volumeSliderStep !== _index__WEBPACK_IMPORTED_MODULE_6__.featInfo.volumeSliderStep.default ? ` (Sensitivity: ${slider.step}%)` : "";
        const labelFull = `Volume: ${labelShort}${sensText}`;
        return { labelShort, labelFull };
    };
    const { labelFull } = getLabelTexts(sliderElem);
    sliderCont.setAttribute("title", labelFull);
    sliderElem.setAttribute("title", labelFull);
    sliderElem.setAttribute("aria-valuetext", labelFull);
    const updateLabel = () => {
        const { labelShort, labelFull } = getLabelTexts(sliderElem);
        sliderCont.setAttribute("title", labelFull);
        sliderElem.setAttribute("title", labelFull);
        sliderElem.setAttribute("aria-valuetext", labelFull);
        const labelElem2 = document.querySelector(".bytm-vol-slider-label");
        if (labelElem2)
            labelElem2.innerText = labelShort;
    };
    sliderElem.addEventListener("change", () => updateLabel());
    (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.onSelector)("#bytm-vol-slider-cont", {
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
//#MARKER queue buttons
function initQueueButtons() {
    const addQueueBtns = (evt) => {
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
    _events__WEBPACK_IMPORTED_MODULE_3__.siteEvents.on("queueChanged", addQueueBtns);
    _events__WEBPACK_IMPORTED_MODULE_3__.siteEvents.on("autoplayQueueChanged", addQueueBtns);
    const queueItems = document.querySelectorAll("#contents.ytmusic-player-queue > ytmusic-player-queue-item");
    if (queueItems.length === 0)
        return;
    queueItems.forEach(itm => addQueueButtons(itm));
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.log)(`Added buttons to ${queueItems.length} existing queue ${(0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.autoPlural)("item", queueItems)}`);
}
/**
 * Adds the buttons to each item in the current song queue.
 * Also observes for changes to add new buttons to new items in the queue.
 * @param queueItem The element with tagname `ytmusic-player-queue-item` to add queue buttons to
 */
function addQueueButtons(queueItem) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        //#SECTION general queue item stuff
        const queueBtnsCont = document.createElement("div");
        queueBtnsCont.className = "bytm-queue-btn-container";
        const lyricsIconUrl = yield (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getResourceUrl)("lyrics");
        const deleteIconUrl = yield (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getResourceUrl)("delete");
        //#SECTION lyrics btn
        let lyricsBtnElem;
        if (features.lyricsQueueButton) {
            lyricsBtnElem = yield (0,_lyrics__WEBPACK_IMPORTED_MODULE_5__.createLyricsBtn)(undefined, false);
            lyricsBtnElem.title = "Open this song's lyrics in a new tab";
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
                const artistsSan = (0,_lyrics__WEBPACK_IMPORTED_MODULE_5__.sanitizeArtists)(artist);
                const songSan = (0,_lyrics__WEBPACK_IMPORTED_MODULE_5__.sanitizeSong)(song);
                const splitTitle = (0,_lyrics__WEBPACK_IMPORTED_MODULE_5__.splitVideoTitle)(songSan);
                const cachedLyricsUrl = songSan.includes("-")
                    ? (0,_lyrics__WEBPACK_IMPORTED_MODULE_5__.getLyricsCacheEntry)(splitTitle.artist, splitTitle.song)
                    : (0,_lyrics__WEBPACK_IMPORTED_MODULE_5__.getLyricsCacheEntry)(artistsSan, songSan);
                if (cachedLyricsUrl)
                    lyricsUrl = cachedLyricsUrl;
                else if (!songInfo.hasAttribute("data-bytm-loading")) {
                    const imgEl = lyricsBtnElem.querySelector("img");
                    if (!cachedLyricsUrl) {
                        songInfo.setAttribute("data-bytm-loading", "");
                        imgEl.src = yield (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getResourceUrl)("spinner");
                        imgEl.classList.add("bytm-spinner");
                    }
                    lyricsUrl = cachedLyricsUrl !== null && cachedLyricsUrl !== void 0 ? cachedLyricsUrl : yield (0,_lyrics__WEBPACK_IMPORTED_MODULE_5__.getGeniusUrl)(artistsSan, songSan);
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
                        if (confirm("Couldn't find a lyrics page for this song.\nDo you want to open genius.com to manually search for it?"))
                            (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.openInNewTab)(`https://genius.com/search?q=${encodeURIComponent(`${artistsSan} ${songSan}`)}`);
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
                title: "Remove this song from the queue",
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
        (_a = queueItem.querySelector(".song-info")) === null || _a === void 0 ? void 0 : _a.appendChild(queueBtnsCont);
        queueItem.classList.add("bytm-has-queue-btns");
    });
}
//#MARKER anchor improvements
/** Adds anchors around elements and tweaks existing ones so songs are easier to open in a new tab */
function addAnchorImprovements() {
    //#SECTION carousel shelves
    try {
        const preventDefault = (e) => e.preventDefault();
        /** Adds anchor improvements to &lt;ytmusic-responsive-list-item-renderer&gt; */
        const addListItemAnchors = (items) => {
            var _a;
            for (const item of items) {
                if (item.classList.contains("bytm-anchor-improved"))
                    return;
                item.classList.add("bytm-anchor-improved");
                const thumbnailElem = item.querySelector(".left-items");
                const titleElem = item.querySelector(".title-column .title a");
                if (!thumbnailElem || !titleElem)
                    return;
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
        (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.onSelector)("#contents.ytmusic-section-list-renderer ytmusic-carousel-shelf-renderer ytmusic-responsive-list-item-renderer", {
            continuous: true,
            all: true,
            listener: addListItemAnchors,
        });
        // related tab in /watch
        (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.onSelector)("ytmusic-tab-renderer[page-type=\"MUSIC_PAGE_TYPE_TRACK_RELATED\"] ytmusic-responsive-list-item-renderer", {
            continuous: true,
            all: true,
            listener: addListItemAnchors,
        });
        // playlists
        (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.onSelector)("#contents.ytmusic-section-list-renderer ytmusic-playlist-shelf-renderer ytmusic-responsive-list-item-renderer", {
            continuous: true,
            all: true,
            listener: addListItemAnchors,
        });
        // generic shelves
        (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.onSelector)("#contents.ytmusic-section-list-renderer ytmusic-shelf-renderer ytmusic-responsive-list-item-renderer", {
            continuous: true,
            all: true,
            listener: addListItemAnchors,
        });
    }
    catch (err) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.error)("Couldn't improve carousel shelf anchors due to an error:", err);
    }
    //#SECTION sidebar
    try {
        const addSidebarAnchors = (sidebarCont) => {
            const items = sidebarCont.parentNode.querySelectorAll("ytmusic-guide-entry-renderer tp-yt-paper-item");
            improveSidebarAnchors(items);
            return items.length;
        };
        (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.onSelector)("ytmusic-app-layout tp-yt-app-drawer #contentContainer #guide-content #items ytmusic-guide-entry-renderer", {
            listener: (sidebarCont) => {
                const itemsAmt = addSidebarAnchors(sidebarCont);
                (0,_utils__WEBPACK_IMPORTED_MODULE_2__.log)(`Added anchors around ${itemsAmt} sidebar ${(0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.autoPlural)("item", itemsAmt)}`);
            },
        });
        (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.onSelector)("ytmusic-app-layout #mini-guide ytmusic-guide-renderer ytmusic-guide-section-renderer #items ytmusic-guide-entry-renderer", {
            listener: (miniSidebarCont) => {
                const itemsAmt = addSidebarAnchors(miniSidebarCont);
                (0,_utils__WEBPACK_IMPORTED_MODULE_2__.log)(`Added anchors around ${itemsAmt} mini sidebar ${(0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.autoPlural)("item", itemsAmt)}`);
            },
        });
    }
    catch (err) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.error)("Couldn't add anchors to sidebar items due to an error:", err);
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
        anchorElem.title = "Middle click to open in a new tab";
        anchorElem.addEventListener("click", (e) => {
            e.preventDefault();
        });
        (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.addParent)(item, anchorElem);
    });
}
//#MARKER auto close toasts
/** Closes toasts after a set amount of time */
function initAutoCloseToasts() {
    try {
        const animTimeout = 300;
        const closeTimeout = Math.max(features.closeToastsTimeout * 1000 + animTimeout, animTimeout);
        (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.onSelector)("tp-yt-paper-toast#toast", {
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
}
//#MARKER remove share tracking param
/** Continuously removes the ?si tracking parameter from share URLs */
function removeShareTrackingParam() {
    (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.onSelector)("yt-copy-link-renderer input#share-url", {
        continuous: true,
        listener: (inputElem) => {
            try {
                const url = new URL(inputElem.value);
                if (!url.searchParams.has("si"))
                    return;
                url.searchParams.delete("si");
                inputElem.value = String(url);
                (0,_utils__WEBPACK_IMPORTED_MODULE_2__.log)(`Removed tracking parameter from share link: ${url}`);
            }
            catch (err) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_2__.warn)("Couldn't remove tracking parameter from share link due to error:", err);
            }
        },
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
/* harmony import */ var _sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sv443-network/userutils */ "./node_modules/@sv443-network/userutils/dist/index.mjs");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
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
    (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.onSelector)(".middle-controls-buttons ytmusic-like-button-renderer#like-button-renderer", { listener: addActualMediaCtrlLyricsBtn });
}
// TODO: add error.svg if the request fails
/** Actually adds the lyrics button after the like button renderer has been verified to exist */
function addActualMediaCtrlLyricsBtn(likeContainer) {
    return __awaiter(this, void 0, void 0, function* () {
        const songTitleElem = document.querySelector(".content-info-wrapper > yt-formatted-string");
        // run parallel without awaiting so the MutationObserver below can observe the title element in time
        (() => __awaiter(this, void 0, void 0, function* () {
            const gUrl = yield getCurrentLyricsUrl();
            const linkElem = yield createLyricsBtn(gUrl !== null && gUrl !== void 0 ? gUrl : undefined);
            linkElem.id = "betterytm-lyrics-button";
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)("Inserted lyrics button into media controls bar");
            (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.insertAfter)(likeContainer, linkElem);
        }))();
        currentSongTitle = songTitleElem.title;
        const spinnerIconUrl = yield (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getResourceUrl)("spinner");
        const lyricsIconUrl = yield (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getResourceUrl)("lyrics");
        const errorIconUrl = yield (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getResourceUrl)("error");
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
                            return;
                        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.info)(`Song title changed from '${currentSongTitle}' to '${newTitle}'`);
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
                            imgElem.src = errorIconUrl;
                            imgElem.title = "Couldn't find lyrics URL";
                            continue;
                        }
                        lyricsBtn.href = url;
                        lyricsBtn.title = "Open the current song's lyrics in a new tab";
                        lyricsBtn.style.cursor = "pointer";
                        lyricsBtn.style.visibility = "initial";
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
            const songMetaElem = document.querySelector("span.subtitle > yt-formatted-string:first-child");
            if (!songTitleElem || !songMetaElem || !songTitleElem.title)
                return undefined;
            const songNameRaw = songTitleElem.title;
            const songName = sanitizeSong(songNameRaw);
            const artistName = sanitizeArtists(songMetaElem.title);
            /** Use when the current song is not a "real YTM song" with a static background, but rather a music video */
            const getGeniusUrlVideo = () => __awaiter(this, void 0, void 0, function* () {
                if (!songName.includes("-")) // for some fucking reason some music videos have YTM-like song title and artist separation, some don't
                    return yield getGeniusUrl(artistName, songName);
                const { artist, song } = splitVideoTitle(songName);
                return yield getGeniusUrl(artist, song);
            });
            const url = isVideo ? yield getGeniusUrlVideo() : yield getGeniusUrl(artistName, songName);
            return url;
        }
        catch (err) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.error)("Couldn't resolve lyrics URL:", err);
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
                (0,_utils__WEBPACK_IMPORTED_MODULE_1__.info)(`Found lyrics URL in cache: ${cacheEntry}`);
                return cacheEntry;
            }
            const startTs = Date.now();
            const fetchUrl = `${geniURLSearchTopUrl}?artist=${encodeURIComponent(artist)}&song=${encodeURIComponent(song)}${thresholdParam}`;
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)(`Requesting URL from geniURL at '${fetchUrl}'`);
            const fetchRes = yield (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.fetchAdvanced)(fetchUrl);
            if (fetchRes.status === 429) {
                alert(`You are being rate limited.\nPlease wait ${(_a = fetchRes.headers.get("retry-after")) !== null && _a !== void 0 ? _a : geniUrlRatelimitTimeframe} seconds before requesting more lyrics.`);
                return undefined;
            }
            else if (fetchRes.status < 200 || fetchRes.status >= 300) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_1__.error)(`Couldn't fetch lyrics URL from geniURL - status: ${fetchRes.status} - response: ${(_c = (_b = (yield fetchRes.json()).message) !== null && _b !== void 0 ? _b : yield fetchRes.text()) !== null && _c !== void 0 ? _c : "(none)"}`);
                return undefined;
            }
            const result = yield fetchRes.json();
            if (typeof result === "object" && result.error) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_1__.error)("Couldn't fetch lyrics URL:", result.message);
                return undefined;
            }
            const url = result.url;
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.info)(`Found lyrics URL (after ${Date.now() - startTs}ms): ${url}`);
            addLyricsCacheEntry(artist, song, url);
            return url;
        }
        catch (err) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.error)("Couldn't get lyrics URL due to error:", err);
            return undefined;
        }
    });
}
/** Creates the base lyrics button element */
function createLyricsBtn(geniusUrl, hideIfLoading = true) {
    return __awaiter(this, void 0, void 0, function* () {
        const linkElem = document.createElement("a");
        linkElem.className = "ytmusic-player-bar bytm-generic-btn";
        linkElem.title = geniusUrl ? "Click to open this song's lyrics in a new tab" : "Loading lyrics URL...";
        if (geniusUrl)
            linkElem.href = geniusUrl;
        linkElem.role = "button";
        linkElem.target = "_blank";
        linkElem.rel = "noopener noreferrer";
        linkElem.style.visibility = hideIfLoading && geniusUrl ? "initial" : "hidden";
        linkElem.style.display = hideIfLoading && geniusUrl ? "inline-flex" : "none";
        const imgElem = document.createElement("img");
        imgElem.className = "bytm-generic-btn-img";
        imgElem.src = yield (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getResourceUrl)("lyrics");
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

/***/ "./src/menu/menu.ts":
/*!**************************!*\
  !*** ./src/menu/menu.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeMenu: function() { return /* binding */ closeMenu; },
/* harmony export */   initMenu: function() { return /* binding */ initMenu; },
/* harmony export */   openMenu: function() { return /* binding */ openMenu; },
/* harmony export */   setActiveTab: function() { return /* binding */ setActiveTab; }
/* harmony export */ });
/* harmony import */ var _changelog_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../changelog.md */ "./changelog.md");
/* harmony import */ var _menu_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.html */ "./src/menu/menu.html");
/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.css */ "./src/menu/menu.css");



// REQUIREMENTS:
// - modal using the <dialog> element
// - sections with headers
// - support for "custom widgets"
// - debounce or save on button press to store new configuration
// - much better scaling including no vw and vh units
// - cleanup function per feature so a page reload is not always needed
//#MARKER menu
/**
 * The base selector values for the menu tabs
 * Header selector format: `#${baseValue}-header`
 * Content selector format: `#${baseValue}-content`
 */
const tabsSelectors = {
    options: "bytm-menu-tab-options",
    info: "bytm-menu-tab-info",
    changelog: "bytm-menu-tab-changelog",
};
/** Called from init(), before DOMContentLoaded is fired  */
function initMenu() {
    document.addEventListener("DOMContentLoaded", () => {
        // create menu container
        const menuContainer = document.createElement("div");
        menuContainer.id = "bytm-menu-container";
        // add menu html
        menuContainer.innerHTML = _menu_html__WEBPACK_IMPORTED_MODULE_1__["default"];
        document.body.appendChild(menuContainer);
        initMenuContents();
    });
}
function initMenuContents() {
    var _a;
    // hook events
    for (const tab in tabsSelectors) {
        const selector = tabsSelectors[tab];
        (_a = document.querySelector(`#${selector}-header`)) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            setActiveTab(tab);
        });
    }
    // init tab contents
    initOptionsContent();
    initInfoContent();
    initChangelogContent();
}
/** Opens the specified tab */
function setActiveTab(tab) {
    const tabs = Object.assign({}, tabsSelectors);
    delete tabs[tab];
    // disable all but new active tab
    for (const [, val] of Object.entries(tabs)) {
        document.querySelector(`#${val}-header`).dataset.active = "false";
        document.querySelector(`#${val}-content`).dataset.active = "false";
    }
    // enable new active tab
    document.querySelector(`#${tabsSelectors[tab]}-header`).dataset.active = "true";
    document.querySelector(`#${tabsSelectors[tab]}-content`).dataset.active = "true";
}
/** Opens the modal menu dialog */
function openMenu() {
    var _a;
    (_a = document.querySelector("#bytm-menu-dialog")) === null || _a === void 0 ? void 0 : _a.showModal();
}
/** Closes the modal menu dialog */
function closeMenu() {
    var _a;
    (_a = document.querySelector("#bytm-menu-dialog")) === null || _a === void 0 ? void 0 : _a.close();
}
//#MARKER menu tab contents
function initOptionsContent() {
    const tab = document.querySelector("#bytm-menu-tab-options-content");
    void tab;
}
function initInfoContent() {
    const tab = document.querySelector("#bytm-menu-tab-info-content");
    void tab;
}
function initChangelogContent() {
    const tab = document.querySelector("#bytm-menu-tab-changelog-content");
    tab.innerHTML = _changelog_md__WEBPACK_IMPORTED_MODULE_0__["default"];
}


/***/ }),

/***/ "./src/menu/menu_old.ts":
/*!******************************!*\
  !*** ./src/menu/menu_old.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMenu: function() { return /* binding */ addMenu; },
/* harmony export */   closeMenu: function() { return /* binding */ closeMenu; },
/* harmony export */   isMenuOpen: function() { return /* binding */ isMenuOpen; },
/* harmony export */   openMenu: function() { return /* binding */ openMenu; }
/* harmony export */ });
/* harmony import */ var _sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sv443-network/userutils */ "./node_modules/@sv443-network/userutils/dist/index.mjs");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _features_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/index */ "./src/features/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events */ "./src/events.ts");
/* harmony import */ var _changelog_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../changelog.md */ "./changelog.md");
/* harmony import */ var _menu_old_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu_old.css */ "./src/menu/menu_old.css");
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
let isMenuOpen = false;
/** Threshold in pixels from the top of the options container that dictates for how long the scroll indicator is shown */
const scrollIndicatorOffsetThreshold = 30;
let scrollIndicatorEnabled = true;
/**
 * Adds an element to open the BetterYTM menu
 * @deprecated to be replaced with new menu - see https://github.com/Sv443/BetterYTM/issues/23
 */
function addMenu() {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        //#SECTION backdrop & menu container
        const backgroundElem = document.createElement("div");
        backgroundElem.id = "bytm-cfg-menu-bg";
        backgroundElem.classList.add("bytm-menu-bg");
        backgroundElem.title = "Click here to close the menu";
        backgroundElem.style.visibility = "hidden";
        backgroundElem.style.display = "none";
        backgroundElem.addEventListener("click", (e) => {
            var _a;
            if (isMenuOpen && ((_a = e.target) === null || _a === void 0 ? void 0 : _a.id) === "bytm-cfg-menu-bg")
                closeMenu(e);
        });
        document.body.addEventListener("keydown", (e) => {
            if (isMenuOpen && e.key === "Escape")
                closeMenu(e);
        });
        const menuContainer = document.createElement("div");
        menuContainer.title = ""; // prevent bg title from propagating downwards
        menuContainer.classList.add("bytm-menu");
        menuContainer.id = "bytm-cfg-menu";
        //#SECTION title bar
        const headerElem = document.createElement("div");
        headerElem.classList.add("bytm-menu-header");
        const titleCont = document.createElement("div");
        titleCont.id = "bytm-menu-titlecont";
        titleCont.role = "heading";
        titleCont.ariaLevel = "1";
        const titleElem = document.createElement("h2");
        titleElem.id = "bytm-menu-title";
        titleElem.innerText = `${_constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.name} - Configuration`;
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
        addLink(yield (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getResourceUrl)("github"), _constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.namespace, `Open ${_constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.name} on GitHub`);
        // TODO:
        // addLink(await getResourceUrl("greasyfork"), "https://greasyfork.org/en/users/184165-sv443", `Open ${scriptInfo.name} on GreasyFork`);
        const closeElem = document.createElement("img");
        closeElem.classList.add("bytm-menu-close");
        closeElem.src = yield (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getResourceUrl)("close");
        closeElem.title = "Click to close the menu";
        closeElem.addEventListener("click", closeMenu);
        titleCont.appendChild(titleElem);
        titleCont.appendChild(linksCont);
        headerElem.appendChild(titleCont);
        headerElem.appendChild(closeElem);
        //#SECTION feature list
        const featuresCont = document.createElement("div");
        featuresCont.id = "bytm-menu-opts";
        featuresCont.style.display = "flex";
        featuresCont.style.flexDirection = "column";
        featuresCont.style.overflowY = "auto";
        /** Gets called whenever the feature config is changed */
        const confChanged = (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.debounce)((key, initialVal, newVal) => __awaiter(this, void 0, void 0, function* () {
            const fmt = (val) => typeof val === "object" ? JSON.stringify(val) : String(val);
            (0,_utils__WEBPACK_IMPORTED_MODULE_4__.info)(`Feature config changed at key '${key}', from value '${fmt(initialVal)}' to '${fmt(newVal)}'`);
            const featConf = Object.assign({}, (0,_config__WEBPACK_IMPORTED_MODULE_1__.getFeatures)());
            featConf[key] = newVal;
            yield (0,_config__WEBPACK_IMPORTED_MODULE_1__.saveFeatures)(featConf);
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
        const toggleLabelText = (toggled) => toggled ? "On" : "Off";
        for (const category in featureCfgWithCategories) {
            const featObj = featureCfgWithCategories[category];
            const catHeaderElem = document.createElement("h3");
            catHeaderElem.classList.add("bytm-ftconf-category-header");
            catHeaderElem.role = "heading";
            catHeaderElem.ariaLevel = "2";
            catHeaderElem.innerText = `${_features_index__WEBPACK_IMPORTED_MODULE_3__.categoryNames[category]}:`;
            featuresCont.appendChild(catHeaderElem);
            for (const featKey in featObj) {
                const ftInfo = _features_index__WEBPACK_IMPORTED_MODULE_3__.featInfo[featKey];
                // @ts-ignore
                if (!ftInfo || ftInfo.hidden === true)
                    continue;
                const { desc, type, default: ftDefault } = ftInfo;
                // @ts-ignore
                const step = (_a = ftInfo === null || ftInfo === void 0 ? void 0 : ftInfo.step) !== null && _a !== void 0 ? _a : undefined;
                const val = featureCfg[featKey];
                const initialVal = (_b = val !== null && val !== void 0 ? val : ftDefault) !== null && _b !== void 0 ? _b : undefined;
                const ftConfElem = document.createElement("div");
                ftConfElem.classList.add("bytm-ftitem");
                {
                    const textElem = document.createElement("span");
                    textElem.style.display = "inline-block";
                    textElem.style.fontSize = "15px";
                    textElem.innerText = desc;
                    ftConfElem.appendChild(textElem);
                }
                {
                    let inputType = "text";
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
                    }
                    const inputElemId = `bytm-ftconf-${featKey}-input`;
                    const ctrlElem = document.createElement("span");
                    ctrlElem.style.display = "inline-flex";
                    ctrlElem.style.alignItems = "center";
                    ctrlElem.style.whiteSpace = "nowrap";
                    const inputElem = document.createElement("input");
                    inputElem.classList.add("bytm-ftconf-input");
                    inputElem.id = inputElemId;
                    inputElem.type = inputType;
                    if (type === "toggle")
                        inputElem.style.marginLeft = "5px";
                    if (typeof initialVal !== "undefined")
                        inputElem.value = String(initialVal);
                    if (type === "number" && step)
                        inputElem.step = step;
                    // @ts-ignore
                    if (typeof ftInfo.min !== "undefined" && ftInfo.max !== "undefined") {
                        // @ts-ignore
                        inputElem.min = ftInfo.min;
                        // @ts-ignore
                        inputElem.max = ftInfo.max;
                    }
                    if (type === "toggle" && typeof initialVal !== "undefined")
                        inputElem.checked = Boolean(initialVal);
                    // @ts-ignore
                    const unitTxt = typeof ftInfo.unit === "string" ? " " + ftInfo.unit : "";
                    let labelElem;
                    if (type === "slider") {
                        labelElem = document.createElement("label");
                        labelElem.classList.add("bytm-ftconf-label");
                        labelElem.style.marginRight = "10px";
                        labelElem.style.fontSize = "16px";
                        labelElem.htmlFor = inputElemId;
                        labelElem.innerText = fmtVal(initialVal) + unitTxt;
                        inputElem.addEventListener("input", () => {
                            if (labelElem)
                                labelElem.innerText = fmtVal(parseInt(inputElem.value)) + unitTxt;
                        });
                    }
                    else if (type === "toggle") {
                        labelElem = document.createElement("label");
                        labelElem.classList.add("bytm-ftconf-label");
                        labelElem.style.paddingLeft = "10px";
                        labelElem.style.paddingRight = "5px";
                        labelElem.style.fontSize = "16px";
                        labelElem.htmlFor = inputElemId;
                        labelElem.innerText = toggleLabelText(Boolean(initialVal)) + unitTxt;
                        inputElem.addEventListener("input", () => {
                            if (labelElem)
                                labelElem.innerText = toggleLabelText(inputElem.checked) + unitTxt;
                        });
                    }
                    inputElem.addEventListener("input", () => {
                        let v = Number(String(inputElem.value).trim());
                        if (isNaN(v))
                            v = Number(inputElem.value);
                        if (typeof initialVal !== "undefined")
                            confChanged(featKey, initialVal, (type !== "toggle" ? v : inputElem.checked));
                    });
                    if (labelElem) {
                        labelElem.id = `bytm-ftconf-${featKey}-label`;
                        ctrlElem.appendChild(labelElem);
                    }
                    ctrlElem.appendChild(inputElem);
                    ftConfElem.appendChild(ctrlElem);
                }
                featuresCont.appendChild(ftConfElem);
            }
        }
        _events__WEBPACK_IMPORTED_MODULE_5__.siteEvents.on("rebuildCfgMenu", (newConfig) => {
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
        });
        //#SECTION scroll indicator
        const scrollIndicator = document.createElement("img");
        scrollIndicator.id = "bytm-menu-scroll-indicator";
        scrollIndicator.src = yield (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getResourceUrl)("arrow_down");
        scrollIndicator.role = "button";
        scrollIndicator.title = "Click to scroll to the bottom";
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
        footerCont.id = "bytm-menu-footer-cont";
        const footerElem = document.createElement("div");
        footerElem.id = "bytm-menu-footer";
        footerElem.style.fontSize = "17px";
        footerElem.style.textDecoration = "underline";
        footerElem.innerText = "You need to reload the page to apply changes";
        const reloadElem = document.createElement("button");
        reloadElem.classList.add("bytm-btn");
        reloadElem.style.marginLeft = "10px";
        reloadElem.innerText = "Reload now";
        reloadElem.title = "Click to reload the page";
        reloadElem.addEventListener("click", () => {
            closeMenu();
            location.reload();
        });
        footerElem.appendChild(reloadElem);
        const resetElem = document.createElement("button");
        resetElem.classList.add("bytm-btn");
        resetElem.title = "Click to reset all settings to their default values";
        resetElem.innerText = "Reset";
        resetElem.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            if (confirm("Do you really want to reset all settings to their default values?\nThe page will be automatically reloaded.")) {
                yield (0,_config__WEBPACK_IMPORTED_MODULE_1__.setDefaultFeatures)();
                closeMenu();
                location.reload();
            }
        }));
        const exportElem = document.createElement("button");
        exportElem.classList.add("bytm-btn");
        exportElem.title = "Click to export your current configuration";
        exportElem.innerText = "Export";
        exportElem.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            closeMenu();
            openExportMenu();
        }));
        const importElem = document.createElement("button");
        importElem.classList.add("bytm-btn");
        importElem.title = "Click to import a configuration you have previously exported";
        importElem.innerText = "Import";
        importElem.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            closeMenu();
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
        versionElem.role = "button";
        versionElem.title = `Version ${_constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.version} (build ${_constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.lastCommit}) - click to open the changelog`;
        versionElem.innerText = `v${_constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.version} (${_constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.lastCommit})`;
        versionElem.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeMenu();
            openChangelogMenu();
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
/** Closes the menu if it is open. If a bubbling event is passed, its propagation will be prevented. */
function closeMenu(evt) {
    if (!isMenuOpen)
        return;
    isMenuOpen = false;
    (evt === null || evt === void 0 ? void 0 : evt.bubbles) && evt.stopPropagation();
    document.body.classList.remove("bytm-disable-scroll");
    const menuBg = document.querySelector("#bytm-cfg-menu-bg");
    menuBg.style.visibility = "hidden";
    menuBg.style.display = "none";
}
/** Opens the menu if it is closed */
function openMenu() {
    if (isMenuOpen)
        return;
    isMenuOpen = true;
    document.body.classList.add("bytm-disable-scroll");
    const menuBg = document.querySelector("#bytm-cfg-menu-bg");
    menuBg.style.visibility = "visible";
    menuBg.style.display = "block";
    checkToggleScrollIndicator();
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
/** Adds a menu to copy the current configuration as JSON (hidden by default) */
function addExportMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        const menuBgElem = document.createElement("div");
        menuBgElem.id = "bytm-export-menu-bg";
        menuBgElem.classList.add("bytm-menu-bg");
        menuBgElem.title = "Click here to close the menu";
        menuBgElem.style.visibility = "hidden";
        menuBgElem.style.display = "none";
        menuBgElem.addEventListener("click", (e) => {
            var _a;
            if (isExportMenuOpen && ((_a = e.target) === null || _a === void 0 ? void 0 : _a.id) === "bytm-export-menu-bg") {
                closeExportMenu(e);
                openMenu();
            }
        });
        document.body.addEventListener("keydown", (e) => {
            if (isExportMenuOpen && e.key === "Escape") {
                closeExportMenu(e);
                openMenu();
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
        titleCont.id = "bytm-menu-titlecont";
        titleCont.role = "heading";
        titleCont.ariaLevel = "1";
        const titleElem = document.createElement("h2");
        titleElem.id = "bytm-menu-title";
        titleElem.innerText = `${_constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.name} - Export Configuration`;
        const closeElem = document.createElement("img");
        closeElem.classList.add("bytm-menu-close");
        closeElem.src = yield (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getResourceUrl)("close");
        closeElem.title = "Click to close the menu";
        closeElem.addEventListener("click", (e) => {
            closeExportMenu(e);
            openMenu();
        });
        titleCont.appendChild(titleElem);
        headerElem.appendChild(titleCont);
        headerElem.appendChild(closeElem);
        //#SECTION body
        const menuBodyElem = document.createElement("div");
        menuBodyElem.classList.add("bytm-menu-body");
        const textElem = document.createElement("div");
        textElem.id = "bytm-export-menu-text";
        textElem.innerText = "Copy the following text to export your configuration:";
        const textAreaElem = document.createElement("textarea");
        textAreaElem.id = "bytm-export-menu-textarea";
        textAreaElem.readOnly = true;
        textAreaElem.value = JSON.stringify({ formatVersion: _config__WEBPACK_IMPORTED_MODULE_1__.formatVersion, data: (0,_config__WEBPACK_IMPORTED_MODULE_1__.getFeatures)() });
        _events__WEBPACK_IMPORTED_MODULE_5__.siteEvents.on("configChanged", (data) => {
            const textAreaElem = document.querySelector("#bytm-export-menu-textarea");
            if (textAreaElem)
                textAreaElem.value = JSON.stringify({ formatVersion: _config__WEBPACK_IMPORTED_MODULE_1__.formatVersion, data });
        });
        //#SECTION footer
        const footerElem = document.createElement("div");
        footerElem.classList.add("bytm-menu-footer-right");
        const copyBtnElem = document.createElement("button");
        copyBtnElem.classList.add("bytm-btn");
        copyBtnElem.innerText = "Copy to clipboard";
        copyBtnElem.title = "Click to copy the configuration to your clipboard";
        const copiedTextElem = document.createElement("span");
        copiedTextElem.classList.add("bytm-menu-footer-copied");
        copiedTextElem.innerText = "Copied!";
        copiedTextElem.style.display = "none";
        copyBtnElem.addEventListener("click", (evt) => __awaiter(this, void 0, void 0, function* () {
            (evt === null || evt === void 0 ? void 0 : evt.bubbles) && evt.stopPropagation();
            const textAreaElem = document.querySelector("#bytm-export-menu-textarea");
            if (textAreaElem) {
                GM.setClipboard(textAreaElem.value);
                copiedTextElem.style.display = "inline-block";
                setTimeout(() => {
                    copiedTextElem.style.display = "none";
                }, 3000);
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
        menuBgElem.title = "Click here to close the menu";
        menuBgElem.style.visibility = "hidden";
        menuBgElem.style.display = "none";
        menuBgElem.addEventListener("click", (e) => {
            var _a;
            if (isImportMenuOpen && ((_a = e.target) === null || _a === void 0 ? void 0 : _a.id) === "bytm-import-menu-bg") {
                closeImportMenu(e);
                openMenu();
            }
        });
        document.body.addEventListener("keydown", (e) => {
            if (isImportMenuOpen && e.key === "Escape") {
                closeImportMenu(e);
                openMenu();
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
        titleCont.id = "bytm-menu-titlecont";
        titleCont.role = "heading";
        titleCont.ariaLevel = "1";
        const titleElem = document.createElement("h2");
        titleElem.id = "bytm-menu-title";
        titleElem.innerText = `${_constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.name} - Import Configuration`;
        const closeElem = document.createElement("img");
        closeElem.classList.add("bytm-menu-close");
        closeElem.src = yield (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getResourceUrl)("close");
        closeElem.title = "Click to close the menu";
        closeElem.addEventListener("click", (e) => {
            closeImportMenu(e);
            openMenu();
        });
        titleCont.appendChild(titleElem);
        headerElem.appendChild(titleCont);
        headerElem.appendChild(closeElem);
        //#SECTION body
        const menuBodyElem = document.createElement("div");
        menuBodyElem.classList.add("bytm-menu-body");
        const textElem = document.createElement("div");
        textElem.id = "bytm-import-menu-text";
        textElem.innerText = "Paste the configuration you want to import into the field below, then click the import button";
        const textAreaElem = document.createElement("textarea");
        textAreaElem.id = "bytm-import-menu-textarea";
        //#SECTION footer
        const footerElem = document.createElement("div");
        footerElem.classList.add("bytm-menu-footer-right");
        const importBtnElem = document.createElement("button");
        importBtnElem.classList.add("bytm-btn");
        importBtnElem.innerText = "Import";
        importBtnElem.title = "Click to import the configuration";
        importBtnElem.addEventListener("click", (evt) => __awaiter(this, void 0, void 0, function* () {
            (evt === null || evt === void 0 ? void 0 : evt.bubbles) && evt.stopPropagation();
            const textAreaElem = document.querySelector("#bytm-import-menu-textarea");
            if (!textAreaElem)
                return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.warn)("Couldn't find import menu textarea element");
            try {
                const parsed = JSON.parse(textAreaElem.value.trim());
                if (typeof parsed !== "object")
                    return alert("The imported data is not an object");
                if (typeof parsed.formatVersion !== "number")
                    return alert("The imported data does not contain a format version");
                if (typeof parsed.data !== "object")
                    return alert("The imported object does not contain any data");
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
                    return alert(`The imported data is in an unsupported format version (expected ${_config__WEBPACK_IMPORTED_MODULE_1__.formatVersion} or lower, got ${parsed.formatVersion})`);
                yield (0,_config__WEBPACK_IMPORTED_MODULE_1__.saveFeatures)(parsed.data);
                _events__WEBPACK_IMPORTED_MODULE_5__.siteEvents.emit("rebuildCfgMenu", parsed.data);
                if (confirm("Successfully imported the configuration.\nDo you want to reload the page now to apply changes?"))
                    return location.reload();
                closeImportMenu();
                openMenu();
            }
            catch (err) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_4__.warn)("Couldn't import configuration:", err);
                alert("The imported data is not a valid configuration");
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
        menuBgElem.title = "Click here to close the menu";
        menuBgElem.style.visibility = "hidden";
        menuBgElem.style.display = "none";
        menuBgElem.addEventListener("click", (e) => {
            var _a;
            if (isChangelogMenuOpen && ((_a = e.target) === null || _a === void 0 ? void 0 : _a.id) === "bytm-changelog-menu-bg") {
                closeChangelogMenu(e);
                openMenu();
            }
        });
        document.body.addEventListener("keydown", (e) => {
            if (isChangelogMenuOpen && e.key === "Escape") {
                closeChangelogMenu(e);
                openMenu();
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
        titleCont.id = "bytm-menu-titlecont";
        titleCont.role = "heading";
        titleCont.ariaLevel = "1";
        const titleElem = document.createElement("h2");
        titleElem.id = "bytm-menu-title";
        titleElem.innerText = `${_constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.name} - Changelog`;
        const closeElem = document.createElement("img");
        closeElem.classList.add("bytm-menu-close");
        closeElem.src = yield (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getResourceUrl)("close");
        closeElem.title = "Click to close the menu";
        closeElem.addEventListener("click", (e) => {
            closeChangelogMenu(e);
            openMenu();
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
        textElem.innerHTML = _changelog_md__WEBPACK_IMPORTED_MODULE_6__["default"];
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
/** Opens the changelog menu if it is closed */
function openChangelogMenu() {
    if (isChangelogMenuOpen)
        return;
    isChangelogMenuOpen = true;
    document.body.classList.add("bytm-disable-scroll");
    const menuBg = document.querySelector("#bytm-changelog-menu-bg");
    if (!menuBg)
        return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.warn)("Couldn't find changelog menu background element");
    menuBg.style.visibility = "visible";
    menuBg.style.display = "block";
}


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dbg: function() { return /* binding */ dbg; },
/* harmony export */   error: function() { return /* binding */ error; },
/* harmony export */   getDomain: function() { return /* binding */ getDomain; },
/* harmony export */   getResourceUrl: function() { return /* binding */ getResourceUrl; },
/* harmony export */   getVideoTime: function() { return /* binding */ getVideoTime; },
/* harmony export */   info: function() { return /* binding */ info; },
/* harmony export */   log: function() { return /* binding */ log; },
/* harmony export */   setLogLevel: function() { return /* binding */ setLogLevel; },
/* harmony export */   warn: function() { return /* binding */ warn; }
/* harmony export */ });
/* harmony import */ var _sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sv443-network/userutils */ "./node_modules/@sv443-network/userutils/dist/index.mjs");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");


//#SECTION logging
let curLogLevel = 1;
/** Sets the current log level. 0 = Debug, 1 = Info */
function setLogLevel(level) {
    curLogLevel = level;
}
/** Extracts the log level from the last item from spread arguments - returns 0 if the last item is not a number or too low or high */
function getLogLevel(args) {
    const minLogLvl = 0, maxLogLvl = 1;
    if (typeof args.at(-1) === "number")
        return (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.clamp)(args.splice(args.length - 1)[0], minLogLvl, maxLogLvl);
    return 0;
}
/** Common prefix to be able to tell logged messages apart and filter them in devtools */
const consPrefix = `[${_constants__WEBPACK_IMPORTED_MODULE_1__.scriptInfo.name}]`;
const consPrefixDbg = `[${_constants__WEBPACK_IMPORTED_MODULE_1__.scriptInfo.name}/#DEBUG]`;
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
/**
 * Returns the current video time in seconds
 * Dispatches mouse movement events in case the video time can't be estimated
 * @returns Returns null if the video time is unavailable
 */
function getVideoTime() {
    return new Promise((res) => {
        const domain = getDomain();
        try {
            if (domain === "ytm") {
                (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.onSelector)("#progress-bar", {
                    listener: (pbEl) => res(!isNaN(Number(pbEl.value)) ? Number(pbEl.value) : null)
                });
            }
            else if (domain === "yt") {
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
                        res(videoTime);
                        mut.disconnect();
                    }
                    else
                        setTimeout(() => {
                            res(videoTime >= 0 && !isNaN(videoTime) ? videoTime : null);
                            mut.disconnect();
                        }, 500);
                };
                (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.onSelector)(pbSelector, { listener: observe });
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
// /** Parses a video time string in the format `[hh:m]m:ss` to the equivalent number of seconds - returns 0 if input couldn't be parsed */
// function parseVideoTime(videoTime: string) {
//   const matches = /^((\d{1,2}):)?(\d{1,2}):(\d{2})$/.exec(videoTime);
//   if(!matches)
//     return 0;
//   const [, , hrs, min, sec] = matches as unknown as [string, string | undefined, string | undefined, string, string];
//   let finalTime = 0;
//   if(hrs)
//     finalTime += Number(hrs) * 60 * 60;
//   finalTime += Number(min) * 60 + Number(sec);
//   return isNaN(finalTime) ? 0 : finalTime;
// }
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
/** Returns the URL of a resource by its name, as defined in `assets/resources.json`, from GM resource cache - [see GM.getResourceUrl docs](https://wiki.greasespot.net/GM.getResourceUrl) */
function getResourceUrl(name) {
    return GM.getResourceUrl(name);
}


/***/ }),

/***/ "./node_modules/@sv443-network/userutils/dist/index.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/@sv443-network/userutils/dist/index.mjs ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigManager: function() { return /* binding */ ConfigManager; },
/* harmony export */   addGlobalStyle: function() { return /* binding */ addGlobalStyle; },
/* harmony export */   addParent: function() { return /* binding */ addParent; },
/* harmony export */   amplifyMedia: function() { return /* binding */ amplifyMedia; },
/* harmony export */   autoPlural: function() { return /* binding */ autoPlural; },
/* harmony export */   clamp: function() { return /* binding */ clamp; },
/* harmony export */   debounce: function() { return /* binding */ debounce; },
/* harmony export */   fetchAdvanced: function() { return /* binding */ fetchAdvanced; },
/* harmony export */   getSelectorMap: function() { return /* binding */ getSelectorMap; },
/* harmony export */   getUnsafeWindow: function() { return /* binding */ getUnsafeWindow; },
/* harmony export */   initOnSelector: function() { return /* binding */ initOnSelector; },
/* harmony export */   insertAfter: function() { return /* binding */ insertAfter; },
/* harmony export */   interceptEvent: function() { return /* binding */ interceptEvent; },
/* harmony export */   interceptWindowEvent: function() { return /* binding */ interceptWindowEvent; },
/* harmony export */   isScrollable: function() { return /* binding */ isScrollable; },
/* harmony export */   mapRange: function() { return /* binding */ mapRange; },
/* harmony export */   onSelector: function() { return /* binding */ onSelector; },
/* harmony export */   openInNewTab: function() { return /* binding */ openInNewTab; },
/* harmony export */   pauseFor: function() { return /* binding */ pauseFor; },
/* harmony export */   preloadImages: function() { return /* binding */ preloadImages; },
/* harmony export */   randRange: function() { return /* binding */ randRange; },
/* harmony export */   randomItem: function() { return /* binding */ randomItem; },
/* harmony export */   randomItemIndex: function() { return /* binding */ randomItemIndex; },
/* harmony export */   randomizeArray: function() { return /* binding */ randomizeArray; },
/* harmony export */   removeOnSelector: function() { return /* binding */ removeOnSelector; },
/* harmony export */   takeRandomItem: function() { return /* binding */ takeRandomItem; }
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
function mapRange(value, range_1_min, range_1_max, range_2_min, range_2_max) {
  if (Number(range_1_min) === 0 && Number(range_2_min) === 0)
    return value * (range_2_max / range_1_max);
  return (value - range_1_min) * ((range_2_max - range_2_min) / (range_1_max - range_1_min)) + range_2_min;
}
function randRange(...args) {
  let min, max;
  if (typeof args[0] === "number" && typeof args[1] === "number") {
    [min, max] = args;
  } else if (typeof args[0] === "number" && typeof args[1] !== "number") {
    min = 0;
    max = args[0];
  } else
    throw new TypeError(`Wrong parameter(s) provided - expected: "number" and "number|undefined", got: "${typeof args[0]}" and "${typeof args[1]}"`);
  min = Number(min);
  max = Number(max);
  if (isNaN(min) || isNaN(max))
    throw new TypeError(`Parameters "min" and "max" can't be NaN`);
  if (min > max)
    throw new TypeError(`Parameter "min" can't be bigger than "max"`);
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

// lib/config.ts
var ConfigManager = class {
  /**
   * Creates an instance of ConfigManager to manage a user configuration that is cached in memory and persistently saved across sessions.  
   * Supports migrating data from older versions of the configuration to newer ones and populating the cache with default data if no persistent data is found.  
   *   
   * ⚠️ Requires the directives `@grant GM.getValue` and `@grant GM.setValue`  
   * ⚠️ Make sure to call `loadData()` at least once after creating an instance, or the returned data will be the same as `options.defaultConfig`
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
  /** Returns a copy of the data from the in-memory cache. Use `loadData()` to get fresh data from persistent storage (usually not necessary since the cache should always exactly reflect persistent storage). */
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
   * The in-memory cache will be left untouched, so you may still access the data with `getData()`.  
   * Calling `loadData()` or `setData()` after this method was called will recreate persistent storage with the cached or default data.  
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
function interceptEvent(eventObject, eventName, predicate) {
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
function interceptWindowEvent(eventName, predicate) {
  return interceptEvent(getUnsafeWindow(), eventName, predicate);
}
function amplifyMedia(mediaElement, multiplier = 1) {
  const context = new (window.AudioContext || window.webkitAudioContext)();
  const result = {
    mediaElement,
    amplify: (multiplier2) => {
      result.gain.gain.value = multiplier2;
    },
    getAmpLevel: () => result.gain.gain.value,
    context,
    source: context.createMediaElementSource(mediaElement),
    gain: context.createGain()
  };
  result.source.connect(result.gain);
  result.gain.connect(context.destination);
  result.amplify(multiplier);
  return result;
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

// lib/onSelector.ts
var selectorMap = /* @__PURE__ */ new Map();
function onSelector(selector, options) {
  let selectorMapItems = [];
  if (selectorMap.has(selector))
    selectorMapItems = selectorMap.get(selector);
  selectorMapItems.push(options);
  selectorMap.set(selector, selectorMapItems);
  checkSelectorExists(selector, selectorMapItems);
}
function removeOnSelector(selector) {
  return selectorMap.delete(selector);
}
function checkSelectorExists(selector, options) {
  const deleteIndices = [];
  options.forEach((option, i) => {
    try {
      const elements = option.all ? document.querySelectorAll(selector) : document.querySelector(selector);
      if (elements !== null && elements instanceof NodeList && elements.length > 0 || elements !== null) {
        option.listener(elements);
        if (!option.continuous)
          deleteIndices.push(i);
      }
    } catch (err) {
      console.error(`Couldn't call listener for selector '${selector}'`, err);
    }
  });
  if (deleteIndices.length > 0) {
    const newOptsArray = options.filter((_, i) => !deleteIndices.includes(i));
    if (newOptsArray.length === 0)
      selectorMap.delete(selector);
    else {
      selectorMap.set(selector, newOptsArray);
    }
  }
}
function initOnSelector(options = {}) {
  const observer = new MutationObserver(() => {
    for (const [selector, options2] of selectorMap.entries())
      checkSelectorExists(selector, options2);
  });
  observer.observe(document.body, __spreadValues({
    subtree: true,
    childList: true
  }, options));
}
function getSelectorMap() {
  return selectorMap;
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
/* harmony import */ var _sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sv443-network/userutils */ "./node_modules/@sv443-network/userutils/dist/index.mjs");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/config.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events */ "./src/events.ts");
/* harmony import */ var _features_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/index */ "./src/features/index.ts");
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
    console.log(`%c${_constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.name}%cv${_constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.version}%c\n\nBuild #${_constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.lastCommit} ─ ${_constants__WEBPACK_IMPORTED_MODULE_2__.scriptInfo.namespace}`, `font-weight: bold; ${styleCommon} ${styleGradient}`, `background-color: #333; ${styleCommon}`, "padding: initial;");
    console.log([
        "Powered by:",
        "─ lots of ambition",
        `─ my song metadata API: ${_features_index__WEBPACK_IMPORTED_MODULE_5__.geniUrlBase}`,
        "─ my userscript utility library: https://github.com/Sv443-Network/UserUtils",
        "─ this tiny event listener library: https://github.com/ai/nanoevents",
    ].join("\n"));
    console.log();
}
const domain = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getDomain)();
/** Stuff that needs to be called ASAP, before anything async happens */
function preInit() {
    (0,_utils__WEBPACK_IMPORTED_MODULE_3__.setLogLevel)(_constants__WEBPACK_IMPORTED_MODULE_2__.logLevel);
    if (domain === "ytm")
        (0,_features_index__WEBPACK_IMPORTED_MODULE_5__.initBeforeUnloadHook)();
    init();
}
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            registerMenuCommands();
        }
        catch (e) {
            void e;
        }
        // init DOM-dependant stuff like features
        try {
            document.addEventListener("DOMContentLoaded", onDomLoad);
        }
        catch (err) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__.error)("General Error:", err);
        }
        // init config
        try {
            const ftConfig = yield (0,_config__WEBPACK_IMPORTED_MODULE_1__.initConfig)();
            (0,_features_index__WEBPACK_IMPORTED_MODULE_5__.preInitLayout)(ftConfig);
            if ((0,_config__WEBPACK_IMPORTED_MODULE_1__.getFeatures)().disableBeforeUnloadPopup)
                (0,_features_index__WEBPACK_IMPORTED_MODULE_5__.disableBeforeUnload)();
        }
        catch (err) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__.error)("Error while initializing ConfigManager:", err);
        }
        // init menu separately from features
        try {
            void ["TODO(v1.1):", _features_index__WEBPACK_IMPORTED_MODULE_5__.initMenu];
            // initMenu();
        }
        catch (err) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__.error)("Couldn't initialize menu:", err);
        }
    });
}
/** Called when the DOM has finished loading and can be queried and altered by the userscript */
function onDomLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        // post-build these double quotes are replaced by backticks (because if backticks are used here, webpack converts them to double quotes)
        (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.addGlobalStyle)(`/*!*************************************************************************!*\
  !*** css ./node_modules/css-loader/dist/cjs.js!./src/menu/menu_old.css ***!
  \*************************************************************************/
.bytm-menu-bg {
  --bytm-menu-bg: #333333;
  --bytm-menu-bg-highlight: #1e1e1e;
  --bytm-menu-separator-color: #797979;
  --bytm-menu-border-radius: 15px;
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
  position: relative;
  overflow: auto;
  padding: 30px 0px;
}

.bytm-menu-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  padding: 15px 20px 15px 20px;
  background-color: var(--bytm-menu-bg);
  border: 2px solid var(--bytm-menu-separator-color);
  border-style: none none solid none;
  border-radius: var(--bytm-menu-border-radius) var(--bytm-menu-border-radius) 0px 0px;
}

#bytm-menu-titlecont {
  display: flex;
  align-items: center;
}

#bytm-menu-title {
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

#bytm-menu-footer-cont {
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
  background-color: var(--bytm-menu-bg-highlight);
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
  padding: 8px 20px;
}

.bytm-ftconf-label {
  user-select: none;
}

.bytm-ftconf-input[type=number] {
  width: 75px;
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

.bytm-markdown-container a, #bytm-menu-version {
  color: #369bff;
  text-decoration: none;
  cursor: pointer;
}

.bytm-markdown-container a:hover, #bytm-menu-version:hover {
  text-decoration: underline;
}

.bytm-markdown-container kbd {
  --easing: cubic-bezier(0.31, 0.58, 0.24, 1.15);
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
  transition: padding 0.1s var(--easing), box-shadow 0.1s var(--easing);
}

.bytm-markdown-container kbd:active {
  padding-bottom: 2px;
  box-shadow: inset 0 0 0 #61666c;
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
  margin-top: 20px;
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

/*!***************************************************************************!*\
  !*** css ./node_modules/css-loader/dist/cjs.js!./src/features/layout.css ***!
  \***************************************************************************/
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
  top: 46px;
  z-index: 10;
  color: white;
  text-decoration: none;
  cursor: pointer;
}

#bytm-watermark:hover {
  text-decoration: underline;
}

/* #MARKER queue buttons */

.side-panel.modular ytmusic-player-queue-item .song-info.ytmusic-player-queue-item {
  position: relative;
}

.side-panel.modular ytmusic-player-queue-item .bytm-queue-btn-container {
  background: rgb(0, 0, 0);
  background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%);
  display: none;
  position: absolute;
  right: 0;
  padding-left: 25px;
  height: 100%;
}

.side-panel.modular ytmusic-player-queue-item:hover .bytm-queue-btn-container {
  display: inline-block;
}

.side-panel.modular ytmusic-player-queue-item[play-button-state="loading"] .bytm-queue-btn-container,
.side-panel.modular ytmusic-player-queue-item[play-button-state="playing"] .bytm-queue-btn-container,
.side-panel.modular ytmusic-player-queue-item[play-button-state="paused"] .bytm-queue-btn-container {
  /* using a var() with predefined value from YTM is not viable since the nesting changes the actual value of the variable */
  background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(29, 29, 29, 1) 15%);
}

ytmusic-app ytmusic-popup-container tp-yt-iron-dropdown[data-bytm-hidden=true] {
  display: none !important;
}

/* #MARKER anchor improvements */

ytmusic-responsive-list-item-renderer .left-items {
  margin-right: 0 !important;
}

.bytm-carousel-shelf-anchor {
  margin-right: 16px;
}

/* #MARKER volume slider */

#bytm-vol-slider-cont {
  position: relative;
}

.bytm-vol-slider-label {
  opacity: 0.000001;
  position: absolute;
  font-size: 15px;
  top: 50%;
  left: 0;
  transform: translate(calc(-50% - 10px), -50%);
  text-align: right;
  transition: opacity 0.2s ease;
}

.bytm-vol-slider-label.bytm-visible {
  opacity: 1;
}

/*!*********************************************************************!*\
  !*** css ./node_modules/css-loader/dist/cjs.js!./src/menu/menu.css ***!
  \*********************************************************************/
/* #bytm-menu-backdrop {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#bytm-menu-backdrop[data-menu-open="true"] {
    display: flex;
} */

#bytm-menu-header-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-color: #ffffff;
    border-style: none solid none none;
}

.bytm-menu-header-option {
    display: "flex";
    justify-content: center;
    align-items: center;
    border-color: #ffffff;
    border-style: solid none solid none;
}

#bytm-menu-header-option h3 {
    margin: 0;
}

.bytm-menu-tab[data-active="true"] {
    display: none;
}

.bytm-menu-tab[data-active="false"] {
    display: none;
}


/*# sourceMappingURL=http://localhost:8710/global.css.map*/`);
        (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.initOnSelector)();
        const features = (0,_config__WEBPACK_IMPORTED_MODULE_1__.getFeatures)();
        (0,_utils__WEBPACK_IMPORTED_MODULE_3__.log)(`Initializing features for domain "${domain}"...`);
        try {
            if (domain === "ytm") {
                try {
                    (0,_features_index__WEBPACK_IMPORTED_MODULE_5__.addMenu)(); // TODO(v1.1): remove
                }
                catch (err) {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_3__.error)("Couldn't add menu:", err);
                }
                (0,_events__WEBPACK_IMPORTED_MODULE_4__.initSiteEvents)();
                (0,_sv443_network_userutils__WEBPACK_IMPORTED_MODULE_0__.onSelector)("tp-yt-iron-dropdown #contentWrapper ytd-multi-page-menu-renderer #container.menu-container", { listener: _features_index__WEBPACK_IMPORTED_MODULE_5__.addConfigMenuOption });
                if (features.arrowKeySupport)
                    (0,_features_index__WEBPACK_IMPORTED_MODULE_5__.initArrowKeySkip)();
                if (features.removeUpgradeTab)
                    (0,_features_index__WEBPACK_IMPORTED_MODULE_5__.removeUpgradeTab)();
                if (features.watermarkEnabled)
                    (0,_features_index__WEBPACK_IMPORTED_MODULE_5__.addWatermark)();
                if (features.geniusLyrics)
                    (0,_features_index__WEBPACK_IMPORTED_MODULE_5__.addMediaCtrlLyricsBtn)();
                if (features.deleteFromQueueButton || features.lyricsQueueButton)
                    (0,_features_index__WEBPACK_IMPORTED_MODULE_5__.initQueueButtons)();
                if (features.anchorImprovements)
                    (0,_features_index__WEBPACK_IMPORTED_MODULE_5__.addAnchorImprovements)();
                if (features.closeToastsTimeout > 0)
                    (0,_features_index__WEBPACK_IMPORTED_MODULE_5__.initAutoCloseToasts)();
                if (features.removeShareTrackingParam)
                    (0,_features_index__WEBPACK_IMPORTED_MODULE_5__.removeShareTrackingParam)();
                if (features.numKeysSkipToTime)
                    (0,_features_index__WEBPACK_IMPORTED_MODULE_5__.initNumKeysSkip)();
                (0,_features_index__WEBPACK_IMPORTED_MODULE_5__.initVolumeFeatures)();
            }
            if (["ytm", "yt"].includes(domain)) {
                if (features.switchBetweenSites)
                    (0,_features_index__WEBPACK_IMPORTED_MODULE_5__.initSiteSwitch)(domain);
            }
        }
        catch (err) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__.error)("Feature error:", err);
        }
    });
}
function registerMenuCommands() {
    if (_constants__WEBPACK_IMPORTED_MODULE_2__.mode === "development") {
        GM.registerMenuCommand("Reset config", () => __awaiter(this, void 0, void 0, function* () {
            if (confirm("Are you sure you want to reset the configuration to its default values?\nThis will automatically reload the page.")) {
                yield (0,_config__WEBPACK_IMPORTED_MODULE_1__.clearConfig)();
                location.reload();
            }
        }), "r");
        GM.registerMenuCommand("List GM values", () => __awaiter(this, void 0, void 0, function* () {
            alert("See console.");
            const keys = yield GM.listValues();
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__.log)("GM values:");
            if (keys.length === 0)
                (0,_utils__WEBPACK_IMPORTED_MODULE_3__.log)("  No values found.");
            for (const key of keys)
                (0,_utils__WEBPACK_IMPORTED_MODULE_3__.log)(`  ${key} -> ${yield GM.getValue(key)}`);
        }), "l");
        GM.registerMenuCommand("Clear all GM values", () => __awaiter(this, void 0, void 0, function* () {
            if (confirm("Are you sure you want to clear all GM values?")) {
                const keys = yield GM.listValues();
                (0,_utils__WEBPACK_IMPORTED_MODULE_3__.log)("Clearing GM values:");
                if (keys.length === 0)
                    (0,_utils__WEBPACK_IMPORTED_MODULE_3__.log)("  No values found.");
                for (const key of keys) {
                    yield GM.deleteValue(key);
                    (0,_utils__WEBPACK_IMPORTED_MODULE_3__.log)(`  Deleted ${key}`);
                }
            }
        }), "c");
    }
}
preInit();

}();

//# sourceMappingURL=http://localhost:8710/BetterYTM.user.js.map
