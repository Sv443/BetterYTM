// ==UserScript==
// @name            BetterYTM
// @homepageURL     https://github.com/Sv443/BetterYTM#readme
// @namespace       https://github.com/Sv443/BetterYTM
// @version         1.0.0
// @description     Configurable layout and UX improvements for YouTube Music
// @description:de  Konfigurierbares Layout und UX-Verbesserungen für YouTube Music
// @license         MIT
// @author          Sv443
// @copyright       Sv443 (https://github.com/Sv443)
// @match           https://music.youtube.com/*
// @match           https://www.youtube.com/*
// @icon            https://raw.githubusercontent.com/Sv443/BetterYTM/main/assets/icon/icon.png
// @run-at          document-start
// @grant           GM.getValue
// @grant           GM.setValue
// @grant           unsafeWindow
// @connect         self
// @connect         youtube.com
// @connect         github.com
// @connect         githubusercontent.com
// @downloadURL     https://raw.githubusercontent.com/Sv443/BetterYTM/main/dist/BetterYTM.user.js
// @updateURL       https://raw.githubusercontent.com/Sv443/BetterYTM/main/dist/BetterYTM.user.js
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

/***/ "./node_modules/@billjs/event-emitter/lib/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@billjs/event-emitter/lib/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {


/**
 * A simple and lightweight EventEmitter by TypeScript for Node.js or Browsers.
 *
 * @author billjs
 * @see https://github.com/billjs/event-emitter
 * @license MIT(https://opensource.org/licenses/MIT)
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * It's a class for managing events.
 * It can be extended to provide event functionality for other classes or object.
 *
 * @export
 * @class EventEmitter
 */
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        /**
         * the all event handlers are added.
         * it's a Map data structure(key-value), the key is event type, and the value is event handler.
         *
         * @memberof EventEmitter
         */
        this._eventHandlers = {};
    }
    /**
     * event type validator.
     *
     * @param {string} type event type
     * @returns {boolean}
     * @memberof EventEmitter
     */
    EventEmitter.prototype.isValidType = function (type) {
        return typeof type === 'string';
    };
    /**
     * event handler validator.
     *
     * @param {EventHandler} handler event handler
     * @returns {boolean}
     * @memberof EventEmitter
     */
    EventEmitter.prototype.isValidHandler = function (handler) {
        return typeof handler === 'function';
    };
    /**
     * listen on a new event by type and handler.
     * if listen on, the true is returned, otherwise the false.
     * The handler will not be listen if it is a duplicate.
     *
     * @param {string} type event type, it must be a unique string.
     * @param {EventHandler} handler event handler, when if the same handler is passed, listen it by only once.
     * @returns {boolean}
     * @memberof EventEmitter
     * @example
     *  const emitter = new EventEmitter();
     *  emitter.on('change:name', evt => {
     *    console.log(evt);
     *  });
     */
    EventEmitter.prototype.on = function (type, handler) {
        if (!type || !handler)
            return false;
        if (!this.isValidType(type))
            return false;
        if (!this.isValidHandler(handler))
            return false;
        var handlers = this._eventHandlers[type];
        if (!handlers)
            handlers = this._eventHandlers[type] = [];
        // when the same handler is passed, listen it by only once.
        if (handlers.indexOf(handler) >= 0)
            return false;
        handler._once = false;
        handlers.push(handler);
        return true;
    };
    /**
     * listen on an once event by type and handler.
     * when the event is fired, that will be listen off immediately and automatically.
     * The handler will not be listen if it is a duplicate.
     *
     * @param {string} type event type, it must be a unique string.
     * @param {EventHandler} handler event handler, when if the same handler is passed, listen it by only once.
     * @returns {boolean}
     * @memberof EventEmitter
     * @example
     *  const emitter = new EventEmitter();
     *  emitter.once('change:name', evt => {
     *    console.log(evt);
     *  });
     */
    EventEmitter.prototype.once = function (type, handler) {
        if (!type || !handler)
            return false;
        if (!this.isValidType(type))
            return false;
        if (!this.isValidHandler(handler))
            return false;
        var ret = this.on(type, handler);
        if (ret) {
            // set `_once` private property after listened,
            // avoid to modify event handler that has been listened.
            handler._once = true;
        }
        return ret;
    };
    /**
     * listen off an event by type and handler.
     * or listen off events by type, when if only type argument is passed.
     * or listen off all events, when if no arguments are passed.
     *
     * @param {string} [type] event type
     * @param {EventHandler} [handler] event handler
     * @returns
     * @memberof EventEmitter
     * @example
     *  const emitter = new EventEmitter();
     *  // listen off the specified event
     *  emitter.off('change:name', evt => {
     *    console.log(evt);
     *  });
     *  // listen off events by type
     *  emitter.off('change:name');
     *  // listen off all events
     *  emitter.off();
     */
    EventEmitter.prototype.off = function (type, handler) {
        // listen off all events, when if no arguments are passed.
        // it does samething as `offAll` method.
        if (!type)
            return this.offAll();
        // listen off events by type, when if only type argument is passed.
        if (!handler) {
            this._eventHandlers[type] = [];
            return;
        }
        if (!this.isValidType(type))
            return;
        if (!this.isValidHandler(handler))
            return;
        var handlers = this._eventHandlers[type];
        if (!handlers || !handlers.length)
            return;
        // otherwise, listen off the specified event.
        for (var i = 0; i < handlers.length; i++) {
            var fn = handlers[i];
            if (fn === handler) {
                handlers.splice(i, 1);
                break;
            }
        }
    };
    /**
     * listen off all events, that means every event will be emptied.
     *
     * @memberof EventEmitter
     * @example
     *  const emitter = new EventEmitter();
     *  emitter.offAll();
     */
    EventEmitter.prototype.offAll = function () {
        this._eventHandlers = {};
    };
    /**
     * fire the specified event, and you can to pass a data.
     * When fired, every handler attached to that event will be executed.
     * But, if it's an once event, listen off it immediately after called handler.
     *
     * @param {string} type event type
     * @param {*} [data] event data
     * @returns
     * @memberof EventEmitter
     * @example
     *  const emitter = new EventEmitter();
     *  emitter.fire('change:name', 'new name');
     */
    EventEmitter.prototype.fire = function (type, data) {
        if (!type || !this.isValidType(type))
            return;
        var handlers = this._eventHandlers[type];
        if (!handlers || !handlers.length)
            return;
        var event = this.createEvent(type, data);
        for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
            var handler = handlers_1[_i];
            if (!this.isValidHandler(handler))
                continue;
            if (handler._once)
                event.once = true;
            // call event handler, and pass the event argument.
            handler(event);
            // if it's an once event, listen off it immediately after called handler.
            if (event.once)
                this.off(type, handler);
        }
    };
    /**
     * check whether the specified event has been listen on.
     * or check whether the events by type has been listen on, when if only `type` argument is passed.
     *
     * @param {string} type event type
     * @param {EventHandler} [handler] event handler, optional
     * @returns {boolean}
     * @memberof EventEmitter
     * @example
     *  const emitter = new EventEmitter();
     *  const result = emitter.has('change:name');
     */
    EventEmitter.prototype.has = function (type, handler) {
        if (!type || !this.isValidType(type))
            return false;
        var handlers = this._eventHandlers[type];
        // if there are no any events, return false.
        if (!handlers || !handlers.length)
            return false;
        // at lest one event, and no pass `handler` argument, then return true.
        if (!handler || !this.isValidHandler(handler))
            return true;
        // otherwise, need to traverse the handlers.
        return handlers.indexOf(handler) >= 0;
    };
    /**
     * get the handlers for the specified event type.
     *
     * @param {string} type event type
     * @returns {EventHandler[]}
     * @memberof EventEmitter
     * @example
     *  const emitter = new EventEmitter();
     *  const handlers = emitter.getHandlers('change:name');
     *  console.log(handlers);
     */
    EventEmitter.prototype.getHandlers = function (type) {
        if (!type || !this.isValidType(type))
            return [];
        return this._eventHandlers[type] || [];
    };
    /**
     * create event object.
     *
     * @param {string} type event type
     * @param {*} [data] event data
     * @param {boolean} [once=false] is it an once event?
     * @returns {Event}
     * @memberof EventEmitter
     */
    EventEmitter.prototype.createEvent = function (type, data, once) {
        if (once === void 0) { once = false; }
        var event = { type: type, data: data, timestamp: Date.now(), once: once };
        return event;
    };
    return EventEmitter;
}());
exports.EventEmitter = EventEmitter;
/**
 * EventEmitter instance for global.
 * @type {EventEmitter}
 */
exports.globalEvent = new EventEmitter();


/***/ }),

/***/ "./changelog.md":
/*!**********************!*\
  !*** ./changelog.md ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<h1 id=\"betterytm-changelog\">BetterYTM Changelog</h1>\n<br>\n\n<h2 id=\"history\">History:</h2>\n<ul>\n<li><strong><a href=\"#100\">v1.0.0</a></strong></li>\n<li><a href=\"#020\">v0.2.0</a></li>\n<li><a href=\"#010\">v0.1.0</a></li>\n</ul>\n<hr>\n<p><br><br></p>\n<h2 id=\"100\">1.0.0</h2>\n<ul>\n<li>Added menu to configure features</li>\n<li>New configurable features:<ul>\n<li>Make volume slider bigger</li>\n<li>Choose step of volume slider for finer control</li>\n<li>TODO: Add lyrics button to each song in a playlist</li>\n</ul>\n</li>\n<li>Changes / Fixes:<ul>\n<li>Now the lyrics button will directly link to the lyrics (using my API <a href=\"https://github.com/Sv443/geniURL\">geniURL</a>)</li>\n<li>TODO: Site switch with <kbd>F9</kbd> will now keep the video time</li>\n</ul>\n</li>\n</ul>\n<br>\n\n<h2 id=\"020\">0.2.0</h2>\n<ul>\n<li>Added Features:<ul>\n<li>Switch between YouTube and YT Music (with <kbd>F9</kbd> by default)</li>\n<li>Search for song lyrics with new button in media controls</li>\n<li>Remove &quot;Upgrade to YTM Premium&quot; tab</li>\n</ul>\n</li>\n</ul>\n<br>\n\n<h2 id=\"010\">0.1.0</h2>\n<ul>\n<li>Added support for arrow keys to skip forward or backward (currently only by fixed 10 second interval)</li>\n</ul>\n<p><br><br><br><br><br><br><br><br><br></p>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./src/features/menu/menu.html":
/*!*************************************!*\
  !*** ./src/features/menu/menu.html ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<dialog id=\"bytm-menu-dialog\">\n    <div id=\"bytm-menu-header-container\">\n        <div class=\"bytm-menu-header-option\" id=\"bytm-menu-tab-options-header\" data-active=\"true\">\n            <h3>Options</h3>\n        </div>\n        <div class=\"bytm-menu-header-option\" id=\"bytm-menu-tab-info-header\" data-active=\"false\">\n            <h3>Info</h3>\n        </div>\n        <div class=\"bytm-menu-header-option\" id=\"bytm-menu-tab-changelog-header\" data-active=\"false\">\n            <h3>Changelog</h3>\n        </div>\n    </div>\n    <div id=\"bytm-menu-body\">\n        <div class=\"bytm-menu-tab-content\" id=\"bytm-menu-tab-options-content\" data-active=\"true\"></div>\n        <div class=\"bytm-menu-tab-content\" id=\"bytm-menu-tab-info-content\" data-active=\"false\">\n            ayo info\n        </div>\n        <div class=\"bytm-menu-tab-content\" id=\"bytm-menu-tab-changelog-content\" data-active=\"false\"></div>\n    </div>\n</dialog>\n";
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

/***/ "./src/features/lyrics.css":
/*!*********************************!*\
  !*** ./src/features/lyrics.css ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/features/menu/menu.css":
/*!************************************!*\
  !*** ./src/features/menu/menu.css ***!
  \************************************/
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
/* harmony export */   defaultFeatures: function() { return /* binding */ defaultFeatures; },
/* harmony export */   getFeatures: function() { return /* binding */ getFeatures; },
/* harmony export */   loadFeatureConf: function() { return /* binding */ loadFeatureConf; },
/* harmony export */   saveFeatureConf: function() { return /* binding */ saveFeatureConf; },
/* harmony export */   setDefaultFeatConf: function() { return /* binding */ setDefaultFeatConf; }
/* harmony export */ });
/* harmony import */ var _features_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features/index */ "./src/features/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const defaultFeatures = Object.keys(_features_index__WEBPACK_IMPORTED_MODULE_0__.featInfo).reduce((acc, key) => {
    acc[key] = _features_index__WEBPACK_IMPORTED_MODULE_0__.featInfo[key].default;
    return acc;
}, {});
let featuresCache;
/**
 * Returns the current FeatureConfig in memory or reads it from GM storage
 * Automatically applies defaults for non-existant keys
 * @param forceRead Set to true to force reading the config from GM storage
 */
function getFeatures(forceRead = false) {
    return __awaiter(this, void 0, void 0, function* () {
        if (featuresCache === undefined || forceRead)
            yield saveFeatureConf(featuresCache = Object.assign(Object.assign({}, defaultFeatures), yield loadFeatureConf())); // look at this sexy one liner
        return featuresCache;
    });
}
/** Loads a feature configuration saved persistently, returns an empty object if no feature configuration was saved */
function loadFeatureConf() {
    return __awaiter(this, void 0, void 0, function* () {
        const defConf = Object.freeze(Object.assign({}, defaultFeatures));
        try {
            const featureConf = yield GM.getValue("betterytm-config");
            if (typeof featureConf !== "string") {
                yield setDefaultFeatConf();
                return featuresCache = defConf;
            }
            return featuresCache = Object.freeze(featureConf ? JSON.parse(featureConf) : defConf);
        }
        catch (err) {
            yield setDefaultFeatConf();
            return featuresCache = defConf;
        }
    });
}
/**
 * Saves a feature configuration saved persistently
 * @param featureConf
 */
function saveFeatureConf(featureConf) {
    if (!featureConf || typeof featureConf != "object")
        throw new TypeError("Feature config not provided or invalid");
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)("Saving new feature config:", featureConf);
    featuresCache = Object.assign({}, featureConf);
    return GM.setValue("betterytm-config", JSON.stringify(featureConf));
}
/** Resets the featuresCache synchronously and the persistent features storage asynchronously to its default values */
function setDefaultFeatConf() {
    featuresCache = Object.assign({}, defaultFeatures);
    return GM.setValue("betterytm-config", JSON.stringify(defaultFeatures));
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
/* harmony export */   scriptInfo: function() { return /* binding */ scriptInfo; },
/* harmony export */   triesInterval: function() { return /* binding */ triesInterval; },
/* harmony export */   triesLimit: function() { return /* binding */ triesLimit; }
/* harmony export */ });
/** The branch to use in the @icon, @downloadURL and @updateURL directives */
const branch = "develop";
// export const branch = "main";
/**
 * How much info should be logged to the devtools console?
 * 0 = Debug (show everything) or 1 = Info (show only important stuff)
 */
const logLevel = 0;
/** Specifies the hard limit for repetitive tasks */
const triesLimit = 25;
/** Specifies the interval for repetitive tasks */
const triesInterval = 200;
/** Info about the userscript, parsed from the userscript header (tools/post-build.js) */
const scriptInfo = Object.freeze({
    name: GM.info.script.name,
    version: GM.info.script.version,
    namespace: GM.info.script.namespace,
    lastCommit: "841c8c3", // assert as generic string instead of union
});


/***/ }),

/***/ "./src/features/index.ts":
/*!*******************************!*\
  !*** ./src/features/index.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAnchorImprovements: function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_2__.addAnchorImprovements; },
/* harmony export */   addMediaCtrlGeniusBtn: function() { return /* reexport safe */ _lyrics__WEBPACK_IMPORTED_MODULE_3__.addMediaCtrlGeniusBtn; },
/* harmony export */   addMenu: function() { return /* reexport safe */ _menu_menu_old__WEBPACK_IMPORTED_MODULE_5__.addMenu; },
/* harmony export */   addWatermark: function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_2__.addWatermark; },
/* harmony export */   closeMenu: function() { return /* reexport safe */ _menu_menu_old__WEBPACK_IMPORTED_MODULE_5__.closeMenu; },
/* harmony export */   disableBeforeUnload: function() { return /* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_1__.disableBeforeUnload; },
/* harmony export */   enableBeforeUnload: function() { return /* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_1__.enableBeforeUnload; },
/* harmony export */   featInfo: function() { return /* binding */ featInfo; },
/* harmony export */   geniUrlBase: function() { return /* reexport safe */ _lyrics__WEBPACK_IMPORTED_MODULE_3__.geniUrlBase; },
/* harmony export */   getCurrentGeniusUrl: function() { return /* reexport safe */ _lyrics__WEBPACK_IMPORTED_MODULE_3__.getCurrentGeniusUrl; },
/* harmony export */   initArrowKeySkip: function() { return /* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_1__.initArrowKeySkip; },
/* harmony export */   initBeforeUnloadHook: function() { return /* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_1__.initBeforeUnloadHook; },
/* harmony export */   initMenu: function() { return /* reexport safe */ _menu_menu__WEBPACK_IMPORTED_MODULE_4__.initMenu; },
/* harmony export */   initQueueButtons: function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_2__.initQueueButtons; },
/* harmony export */   initSiteSwitch: function() { return /* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_1__.initSiteSwitch; },
/* harmony export */   openMenu: function() { return /* reexport safe */ _menu_menu_old__WEBPACK_IMPORTED_MODULE_5__.openMenu; },
/* harmony export */   preInitLayout: function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_2__.preInitLayout; },
/* harmony export */   removeUpgradeTab: function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_2__.removeUpgradeTab; },
/* harmony export */   setVolSliderSize: function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_2__.setVolSliderSize; },
/* harmony export */   setVolSliderStep: function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_2__.setVolSliderStep; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ "./src/features/input.ts");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ "./src/features/layout.ts");
/* harmony import */ var _lyrics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lyrics */ "./src/features/lyrics.ts");
/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu */ "./src/features/menu/menu.ts");
/* harmony import */ var _menu_menu_old__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu_old */ "./src/features/menu/menu_old.ts");




 // TODO

/** Contains all possible features with their default values and other config */
const featInfo = {
    //#SECTION input
    arrowKeySupport: {
        desc: "Arrow keys skip forwards and backwards by 10 seconds",
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
        desc: "TODO: Which hotkey needs to be pressed to switch sites?",
        type: "hotkey",
        category: "input",
        default: {
            key: "F9",
            shift: false,
            ctrl: false,
            meta: false,
        },
        visible: false,
    },
    disableBeforeUnloadPopup: {
        desc: "Completely disable the popup that sometimes appears before leaving the site",
        type: "toggle",
        category: "input",
        default: false,
    },
    anchorImprovements: {
        desc: "TODO: Make it so middle clicking a song to open it in a new tab is easier",
        type: "toggle",
        category: "input",
        default: true,
        visible: false,
    },
    //#SECTION layout
    removeUpgradeTab: {
        desc: "Remove the \"Upgrade\" / YT Music Premium tab",
        type: "toggle",
        category: "layout",
        default: true,
    },
    volumeSliderSize: {
        desc: "The width of the volume slider in pixels",
        type: "number",
        category: "layout",
        min: 10,
        max: 1000,
        step: 5,
        default: 160,
        unit: "px",
    },
    volumeSliderStep: {
        desc: "Volume slider sensitivity - the smaller this number, the finer the volume control",
        type: "slider",
        category: "layout",
        min: 1,
        max: 20,
        default: 2,
    },
    watermarkEnabled: {
        desc: `Show a ${_constants__WEBPACK_IMPORTED_MODULE_0__.scriptInfo.name} watermark under the YTM logo`,
        type: "toggle",
        category: "layout",
        default: true,
    },
    queueButtons: {
        desc: "TODO: Add buttons while hovering over a song in a queue to quickly remove it or open its lyrics",
        type: "toggle",
        category: "layout",
        default: true,
        visible: false,
    },
    //#SECTION lyrics
    geniusLyrics: {
        desc: "Add a button to the media controls to open the current song's lyrics on genius.com in a new tab",
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
/* harmony export */   initSiteSwitch: function() { return /* binding */ initSiteSwitch; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.ts");


//#MARKER arrow key skip
function initArrowKeySkip() {
    document.addEventListener("keydown", onKeyDown);
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.log)("Added key press listener");
}
/** Called when the user presses any key, anywhere */
function onKeyDown(evt) {
    var _a, _b;
    if (["ArrowLeft", "ArrowRight"].includes(evt.code)) {
        // discard the event when a (text) input is currently active, like when editing a playlist
        if (["INPUT", "TEXTAREA", "SELECT"].includes((_b = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.tagName) !== null && _b !== void 0 ? _b : "_"))
            return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.info)(`Captured valid key but the current active element is <${document.activeElement.tagName.toLowerCase()}>, so the keypress is ignored`);
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.log)(`Captured key '${evt.code}' in proxy listener`);
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
            view: unsafeWindow !== null && unsafeWindow !== void 0 ? unsafeWindow : window,
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
            // TODO: check if the code prop is correct
            const proxyProps = Object.assign(Object.assign({ code: "" }, defaultProps), keyProps);
            document.body.dispatchEvent(new KeyboardEvent("keydown", proxyProps));
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.log)(`Dispatched proxy keydown event: [${evt.code}] -> [${proxyProps.code}]`);
        }
        else
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.warn)(`Captured key '${evt.code}' has no defined behavior`);
    }
}
//#MARKER site switch
/** Initializes the site switch feature */
function initSiteSwitch(domain) {
    // TODO:
    // extra features:
    // - keep video time
    // - configurable hotkey
    document.addEventListener("keydown", (e) => {
        if (e.key === "F9")
            switchSite(domain === "yt" ? "ytm" : "yt");
    });
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.log)("Initialized site switch listener");
}
/** Switches to the other site (between YT and YTM) */
function switchSite(newDomain) {
    var _a;
    try {
        let subdomain;
        if (newDomain === "ytm")
            subdomain = "music";
        else if (newDomain === "yt")
            subdomain = "www";
        if (!subdomain)
            throw new TypeError(`Unrecognized domain '${newDomain}'`);
        const { pathname, search, hash } = new URL(location.href);
        const vt = (_a = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getVideoTime)()) !== null && _a !== void 0 ? _a : 0;
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.log)(`Found video time of ${vt} seconds`);
        const newSearch = search.includes("?") ? `${search}&t=${vt}` : `?t=${vt}`;
        const url = `https://${subdomain}.youtube.com${pathname}${newSearch}${hash}`;
        console.info(`BetterYTM - switching to domain '${newDomain}' at ${url}`);
        disableBeforeUnload();
        location.assign(url);
    }
    catch (err) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.error)("Error while switching site:", err);
    }
}
//#MARKER beforeunload popup
let beforeUnloadEnabled = true;
/** Disables the popup before leaving the site */
function disableBeforeUnload() {
    beforeUnloadEnabled = false;
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.info)("Disabled popup before leaving the site");
}
/** (Re-)enables the popup before leaving the site */
function enableBeforeUnload() {
    beforeUnloadEnabled = true;
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.info)("Enabled popup before leaving the site");
}
/**
 * Adds a spy function into `window.__proto__.addEventListener` to selectively discard beforeunload event listeners before they can be attached by the site
 */
function initBeforeUnloadHook() {
    Error.stackTraceLimit = Infinity;
    (function (original) {
        // @ts-ignore
        window.__proto__.addEventListener = function (...args) {
            if (beforeUnloadEnabled && args[0] === "beforeunload")
                return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.log)("Prevented beforeunload event listener from attaching");
            else
                return original.apply(this, args);
        };
        // @ts-ignore
    })(window.__proto__.addEventListener);
    (0,_config__WEBPACK_IMPORTED_MODULE_1__.getFeatures)().then(feats => {
        if (feats.disableBeforeUnloadPopup)
            disableBeforeUnload();
    });
    // (function(original) {
    //   window.__proto__.removeEventListener = function(type, listener, useCapture) {
    //     if(evtNames.includes(type)){
    //       console.log("------> removeEventListener " + type, listener, useCapture);
    //     }
    //     return original.apply(this, arguments);
    //   };
    // })(window.__proto__.removeEventListener);
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
/* harmony export */   addWatermark: function() { return /* binding */ addWatermark; },
/* harmony export */   initQueueButtons: function() { return /* binding */ initQueueButtons; },
/* harmony export */   preInitLayout: function() { return /* binding */ preInitLayout; },
/* harmony export */   removeUpgradeTab: function() { return /* binding */ removeUpgradeTab; },
/* harmony export */   setVolSliderSize: function() { return /* binding */ setVolSliderSize; },
/* harmony export */   setVolSliderStep: function() { return /* binding */ setVolSliderStep; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _menu_menu_old__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/menu_old */ "./src/features/menu/menu_old.ts");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.css */ "./src/features/layout.css");
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
function preInitLayout() {
    return __awaiter(this, void 0, void 0, function* () {
        features = yield (0,_config__WEBPACK_IMPORTED_MODULE_1__.getFeatures)();
    });
}
//#MARKER watermark
/** Adds a watermark beneath the logo */
function addWatermark() {
    const watermark = document.createElement("a");
    watermark.role = "button";
    watermark.id = "betterytm-watermark";
    watermark.className = "style-scope ytmusic-nav-bar";
    watermark.innerText = _constants__WEBPACK_IMPORTED_MODULE_0__.scriptInfo.name;
    watermark.title = "Open menu";
    watermark.tabIndex = 1000;
    watermark.addEventListener("click", () => (0,_menu_menu_old__WEBPACK_IMPORTED_MODULE_3__.openMenu)());
    watermark.addEventListener("keydown", (e) => e.key === "Enter" && (0,_menu_menu_old__WEBPACK_IMPORTED_MODULE_3__.openMenu)());
    const logoElem = document.querySelector("#left-content");
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.insertAfter)(logoElem, watermark);
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.log)("Added watermark element:", watermark);
}
//#MARKER remove upgrade tab
let removeUpgradeTries = 0;
/** Removes the "Upgrade" / YT Music Premium tab from the title / nav bar */
function removeUpgradeTab() {
    const tabElem = document.querySelector(".ytmusic-nav-bar ytmusic-pivot-bar-item-renderer[tab-id=\"SPunlimited\"]");
    if (tabElem) {
        tabElem.remove();
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.log)(`Removed upgrade tab after ${removeUpgradeTries} tries`);
    }
    else if (removeUpgradeTries < _constants__WEBPACK_IMPORTED_MODULE_0__.triesLimit) {
        setTimeout(removeUpgradeTab, _constants__WEBPACK_IMPORTED_MODULE_0__.triesInterval); // TODO: improve this
        removeUpgradeTries++;
    }
    else
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.error)(`Couldn't find upgrade tab to remove after ${removeUpgradeTries} tries`);
}
//#MARKER volume slider
/** Sets the volume slider to a set size */
function setVolSliderSize() {
    const { volumeSliderSize: size } = features;
    if (typeof size !== "number" || isNaN(Number(size)))
        return;
    const style = `\
.volume-slider.ytmusic-player-bar, .expand-volume-slider.ytmusic-player-bar {
  width: ${size}px !important;
}`;
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.addGlobalStyle)(style, "vol-slider");
}
/** Sets the `step` attribute of the volume slider */
function setVolSliderStep() {
    const sliderElem = document.querySelector("tp-yt-paper-slider#volume-slider");
    sliderElem.setAttribute("step", String(features.volumeSliderStep));
}
//#MARKER queue buttons
// TODO: account for the fact initially the elements might not exist, if the site was not opened directly with a video playing or via the /watch path
function initQueueButtons() {
    _utils__WEBPACK_IMPORTED_MODULE_2__.siteEvents.on("queueChanged", (evt) => {
        for (const queueItm of evt.data.childNodes) {
            if (!queueItm.classList.contains("bytm-has-queue-btns"))
                addQueueButtons(queueItm);
        }
    });
    const queueItems = document.querySelectorAll("#contents.ytmusic-player-queue > ytmusic-player-queue-item");
    if (queueItems.length === 0)
        return;
    queueItems.forEach(itm => addQueueButtons(itm));
}
function addQueueButtons(queueItem) {
    const queueBtnsCont = document.createElement("div");
    queueBtnsCont.className = "bytm-queue-btn-container";
    queueBtnsCont.innerText = "ayo";
    const songInfo = queueItem.querySelector(".song-info");
    if (!songInfo)
        return false;
    songInfo.appendChild(queueBtnsCont);
    queueItem.classList.add("bytm-has-queue-btns");
    return true;
}
//#MARKER better clickable stuff
// TODO: account for the fact initially the elements might not exist, if the site was opened directly with the /watch path
function addAnchorImprovements() {
    void 0;
}


/***/ }),

/***/ "./src/features/lyrics.ts":
/*!********************************!*\
  !*** ./src/features/lyrics.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMediaCtrlGeniusBtn: function() { return /* binding */ addMediaCtrlGeniusBtn; },
/* harmony export */   geniUrlBase: function() { return /* binding */ geniUrlBase; },
/* harmony export */   getCurrentGeniusUrl: function() { return /* binding */ getCurrentGeniusUrl; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _lyrics_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lyrics.css */ "./src/features/lyrics.css");
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
let mcCurrentSongTitle = "";
let mcLyricsButtonAddTries = 0;
/** Adds a genius.com lyrics button to the media controls bar */
function addMediaCtrlGeniusBtn() {
    return __awaiter(this, void 0, void 0, function* () {
        const likeContainer = document.querySelector(".middle-controls-buttons ytmusic-like-button-renderer#like-button-renderer");
        if (!likeContainer) {
            mcLyricsButtonAddTries++;
            if (mcLyricsButtonAddTries < _constants__WEBPACK_IMPORTED_MODULE_0__.triesLimit)
                return setTimeout(addMediaCtrlGeniusBtn, _constants__WEBPACK_IMPORTED_MODULE_0__.triesInterval); // TODO: improve this
            return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.error)(`Couldn't find element to append lyrics buttons to after ${mcLyricsButtonAddTries} tries`);
        }
        const songTitleElem = document.querySelector(".content-info-wrapper > yt-formatted-string");
        const gUrl = yield getCurrentGeniusUrl();
        const linkElem = document.createElement("a");
        linkElem.id = "betterytm-lyrics-button";
        linkElem.className = "ytmusic-player-bar";
        linkElem.title = gUrl ? "Click to open this song's lyrics in a new tab" : "Loading...";
        if (gUrl)
            linkElem.href = gUrl;
        linkElem.target = "_blank";
        linkElem.rel = "noopener noreferrer";
        linkElem.style.visibility = gUrl ? "initial" : "hidden";
        linkElem.style.display = gUrl ? "inline-flex" : "none";
        const imgElem = document.createElement("img");
        imgElem.id = "betterytm-lyrics-img";
        imgElem.src = "https://raw.githubusercontent.com/Sv443/BetterYTM/main/assets/external/genius.png";
        linkElem.appendChild(imgElem);
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)(`Inserted genius button after ${mcLyricsButtonAddTries} tries:`, linkElem);
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.insertAfter)(likeContainer, linkElem);
        mcCurrentSongTitle = songTitleElem.title;
        const onMutation = (mutations) => { var _a, mutations_1, mutations_1_1; return __awaiter(this, void 0, void 0, function* () {
            var _b, e_1, _c, _d;
            try {
                for (_a = true, mutations_1 = __asyncValues(mutations); mutations_1_1 = yield mutations_1.next(), _b = mutations_1_1.done, !_b;) {
                    _d = mutations_1_1.value;
                    _a = false;
                    try {
                        const mut = _d;
                        const newTitle = mut.target.title;
                        if (newTitle != mcCurrentSongTitle && newTitle.length > 0) {
                            const lyricsBtn = document.querySelector("#betterytm-lyrics-button");
                            if (!lyricsBtn)
                                return;
                            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)(`Song title changed from '${mcCurrentSongTitle}' to '${newTitle}'`);
                            lyricsBtn.style.cursor = "wait";
                            lyricsBtn.style.pointerEvents = "none";
                            mcCurrentSongTitle = newTitle;
                            const url = yield getCurrentGeniusUrl(); // can take a second or two
                            if (!url)
                                continue;
                            lyricsBtn.href = url;
                            lyricsBtn.title = "Click to open this song's lyrics in a new tab";
                            lyricsBtn.style.cursor = "pointer";
                            lyricsBtn.style.visibility = "initial";
                            lyricsBtn.style.display = "inline-flex";
                            lyricsBtn.style.pointerEvents = "initial";
                        }
                    }
                    finally {
                        _a = true;
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
/** Returns the genius.com lyrics site URL for the current song */
function getCurrentGeniusUrl() {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // In videos the video title contains both artist and song title, in "regular" YTM songs, the video title only contains the song title
            const isVideo = typeof ((_a = document.querySelector("ytmusic-player")) === null || _a === void 0 ? void 0 : _a.getAttribute("video-mode_")) === "string";
            const songTitleElem = document.querySelector(".content-info-wrapper > yt-formatted-string");
            const songMetaElem = document.querySelector("span.subtitle > yt-formatted-string:first-child");
            if (!songTitleElem || !songMetaElem || !songTitleElem.title)
                return null;
            const sanitizeSongName = (songName) => {
                const parensRegex = /\(.+\)/gmi;
                const squareParensRegex = /\[.+\]/gmi;
                // trim right after the song name:
                const sanitized = songName
                    .replace(parensRegex, "")
                    .replace(squareParensRegex, "");
                return sanitized.trim();
            };
            const splitArtist = (songMeta) => {
                songMeta = songMeta.split(/\s*\u2022\s*/gmiu)[0]; // split at bullet (&bull; / •) character
                if (songMeta.match(/&/))
                    songMeta = songMeta.split(/\s*&\s*/gm)[0];
                if (songMeta.match(/,/))
                    songMeta = songMeta.split(/,\s*/gm)[0];
                return songMeta.trim();
            };
            const songNameRaw = songTitleElem.title;
            const songName = sanitizeSongName(songNameRaw);
            const artistName = splitArtist(songMetaElem.title);
            /** Use when the current song is not a "real YTM song" with a static background, but rather a music video */
            const getGeniusUrlVideo = () => __awaiter(this, void 0, void 0, function* () {
                if (!songName.includes("-")) // for some fucking reason some music videos have YTM-like song title and artist separation, some don't
                    return yield getGeniusUrl(artistName, songName);
                const [artist, ...rest] = songName.split("-").map(v => v.trim());
                return yield getGeniusUrl(artist, rest.join(" "));
            });
            // TODO: artist might need further splitting before comma or ampersand
            const url = isVideo ? yield getGeniusUrlVideo() : ((_b = yield getGeniusUrl(artistName, songName)) !== null && _b !== void 0 ? _b : yield getGeniusUrlVideo());
            return url;
        }
        catch (err) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.error)("Couldn't resolve genius.com URL:", err);
            return null;
        }
    });
}
/**
   * @param artist
   * @param song
   */
function getGeniusUrl(artist, song) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fetchUrl = `${geniURLSearchTopUrl}?artist=${encodeURIComponent(artist)}&song=${encodeURIComponent(song)}`;
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.log)(`Requesting URL from geniURL at '${fetchUrl}'`);
            const result = yield (yield fetch(fetchUrl)).json();
            if (result.error) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_1__.error)("Couldn't fetch genius.com URL:", result.message);
                return undefined;
            }
            const url = result.url;
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.info)(`Found genius URL: ${url}`);
            return url;
        }
        catch (err) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.error)("Couldn't get genius URL due to error:", err);
            return undefined;
        }
    });
}


/***/ }),

/***/ "./src/features/menu/menu.ts":
/*!***********************************!*\
  !*** ./src/features/menu/menu.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeMenu: function() { return /* binding */ closeMenu; },
/* harmony export */   initMenu: function() { return /* binding */ initMenu; },
/* harmony export */   openMenu: function() { return /* binding */ openMenu; },
/* harmony export */   setActiveTab: function() { return /* binding */ setActiveTab; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils.ts");
/* harmony import */ var _changelog_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../changelog.md */ "./changelog.md");
/* harmony import */ var _menu_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.html */ "./src/features/menu/menu.html");
/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.css */ "./src/features/menu/menu.css");





//#MARKER menu
/**
 * These are the base selector values for the menu tabs
 * Header selector: `#${baseValue}-header`
 * Content selector: `#${baseValue}-content`
 */
const tabsSelectors = {
    options: "bytm-menu-tab-options",
    info: "bytm-menu-tab-info",
    changelog: "bytm-menu-tab-changelog",
};
function initMenu() {
    document.addEventListener("DOMContentLoaded", () => {
        // create menu container
        const menuContainer = document.createElement("div");
        menuContainer.id = "bytm-menu-container";
        // add menu html
        menuContainer.innerHTML = _menu_html__WEBPACK_IMPORTED_MODULE_3__["default"];
        document.body.appendChild(menuContainer);
        initMenuContents();
    });
}
let menuContTries = 0;
function initMenuContents() {
    var _a;
    if (!document.querySelector("#bytm-menu-dialog"))
        return menuContTries++ < _constants__WEBPACK_IMPORTED_MODULE_0__.triesLimit
            ? setTimeout(initMenuContents, _constants__WEBPACK_IMPORTED_MODULE_0__.triesInterval)
            : (0,_utils__WEBPACK_IMPORTED_MODULE_1__.error)(`couldn't create menu element after ${_constants__WEBPACK_IMPORTED_MODULE_0__.triesLimit} tries.`);
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
    for (const disableTab of Object.keys(tabs)) {
        document.querySelector(`#${tabs[disableTab]}-header`).dataset.active = "false";
        document.querySelector(`#${tabs[disableTab]}-content`).dataset.active = "false";
    }
    // enable new active tab
    document.querySelector(`#${tabsSelectors[tab]}-header`).dataset.active = "true";
    document.querySelector(`#${tabsSelectors[tab]}-content`).dataset.active = "true";
}
/** Opens the modal menu dialog */
function openMenu() {
    document.querySelector("#bytm-menu-dialog").showModal();
}
/** Closes the modal menu dialog */
function closeMenu() {
    document.querySelector("#bytm-menu-dialog").close();
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
    tab.innerHTML = _changelog_md__WEBPACK_IMPORTED_MODULE_2__["default"];
}


/***/ }),

/***/ "./src/features/menu/menu_old.ts":
/*!***************************************!*\
  !*** ./src/features/menu/menu_old.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMenu: function() { return /* binding */ addMenu; },
/* harmony export */   closeMenu: function() { return /* binding */ closeMenu; },
/* harmony export */   openMenu: function() { return /* binding */ openMenu; }
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/features/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/utils.ts");
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
/**
 * Adds an element to open the BetterYTM menu
 * @deprecated
 */
function addMenu() {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        // bg & menu
        const backgroundElem = document.createElement("div");
        backgroundElem.id = "betterytm-menu-bg";
        backgroundElem.title = "Click here to close the menu";
        backgroundElem.style.visibility = "hidden";
        backgroundElem.style.display = "none";
        backgroundElem.addEventListener("click", (e) => {
            if (e.target.id === "betterytm-menu-bg")
                closeMenu();
        });
        document.body.addEventListener("keydown", ({ key }) => {
            if (key === "Escape")
                closeMenu();
        });
        const menuContainer = document.createElement("div");
        menuContainer.title = "";
        menuContainer.id = "betterytm-menu";
        menuContainer.style.borderRadius = "15px";
        menuContainer.style.display = "flex";
        menuContainer.style.flexDirection = "column";
        menuContainer.style.justifyContent = "space-between";
        // title
        const titleCont = document.createElement("div");
        titleCont.style.padding = "8px 20px 15px 8px";
        titleCont.style.display = "flex";
        titleCont.style.justifyContent = "space-between";
        titleCont.id = "betterytm-menu-titlecont";
        const titleElem = document.createElement("h2");
        titleElem.id = "betterytm-menu-title";
        titleElem.innerText = `${_constants__WEBPACK_IMPORTED_MODULE_1__.scriptInfo.name} - Configuration`;
        const linksCont = document.createElement("div");
        linksCont.id = "betterytm-menu-linkscont";
        const addLink = (imgSrc, href, title) => {
            const anchorElem = document.createElement("a");
            anchorElem.className = "betterytm-menu-link";
            anchorElem.rel = "noopener noreferrer";
            anchorElem.target = "_blank";
            anchorElem.href = href;
            anchorElem.title = title;
            anchorElem.style.marginLeft = "10px";
            const imgElem = document.createElement("img");
            imgElem.className = "betterytm-menu-img";
            imgElem.src = imgSrc;
            imgElem.style.width = "32px";
            imgElem.style.height = "32px";
            anchorElem.appendChild(imgElem);
            linksCont.appendChild(anchorElem);
        };
        addLink(`https://raw.githubusercontent.com/Sv443/BetterYTM/${_constants__WEBPACK_IMPORTED_MODULE_1__.branch}/assets/external/github.png`, _constants__WEBPACK_IMPORTED_MODULE_1__.scriptInfo.namespace, `${_constants__WEBPACK_IMPORTED_MODULE_1__.scriptInfo.name} on GitHub`);
        addLink(`https://raw.githubusercontent.com/Sv443/BetterYTM/${_constants__WEBPACK_IMPORTED_MODULE_1__.branch}/assets/external/greasyfork.png`, "https://greasyfork.org/xyz", `${_constants__WEBPACK_IMPORTED_MODULE_1__.scriptInfo.name} on GreasyFork`);
        const closeElem = document.createElement("img");
        closeElem.id = "betterytm-menu-close";
        closeElem.src = `https://raw.githubusercontent.com/Sv443/BetterYTM/${_constants__WEBPACK_IMPORTED_MODULE_1__.branch}/assets/icon/close.png`;
        closeElem.title = "Click to close the menu";
        closeElem.style.marginLeft = "50px";
        closeElem.style.width = "32px";
        closeElem.style.height = "32px";
        closeElem.addEventListener("click", closeMenu);
        linksCont.appendChild(closeElem);
        titleCont.appendChild(titleElem);
        titleCont.appendChild(linksCont);
        // TODO: features
        const featuresCont = document.createElement("div");
        featuresCont.id = "betterytm-menu-opts";
        featuresCont.style.display = "flex";
        featuresCont.style.flexDirection = "column";
        featuresCont.style.overflowY = "auto";
        /** Gets called whenever the feature config is changed */
        const confChanged = (key, initialVal, newVal) => __awaiter(this, void 0, void 0, function* () {
            const fmt = (val) => typeof val === "object" ? JSON.stringify(val) : String(val);
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__.info)(`Feature config changed, key '${key}' from value '${fmt(initialVal)}' to '${fmt(newVal)}'`);
            const featConf = Object.assign({}, yield (0,_config__WEBPACK_IMPORTED_MODULE_0__.getFeatures)());
            featConf[key] = newVal;
            yield (0,_config__WEBPACK_IMPORTED_MODULE_0__.saveFeatureConf)(featConf);
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__.log)("Saved feature config changes:\n", yield GM.getValue("betterytm-config"));
        });
        const features = yield (0,_config__WEBPACK_IMPORTED_MODULE_0__.getFeatures)();
        for (const key in features) {
            const ftInfo = _index__WEBPACK_IMPORTED_MODULE_2__.featInfo[key];
            // @ts-ignore
            if (!ftInfo || ftInfo.visible === false)
                continue;
            const { desc, type, default: ftDefault } = ftInfo;
            // @ts-ignore
            const step = (_a = ftInfo === null || ftInfo === void 0 ? void 0 : ftInfo.step) !== null && _a !== void 0 ? _a : undefined;
            const val = features[key];
            const initialVal = (_b = val !== null && val !== void 0 ? val : ftDefault) !== null && _b !== void 0 ? _b : undefined;
            const ftConfElem = document.createElement("div");
            ftConfElem.id = `betterytm-ftconf-${key}`;
            ftConfElem.style.display = "flex";
            ftConfElem.style.flexDirection = "row";
            ftConfElem.style.justifyContent = "space-between";
            ftConfElem.style.padding = "8px 20px";
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
                const inputElemId = `betterytm-ftconf-${key}-input`;
                const ctrlElem = document.createElement("span");
                ctrlElem.style.display = "inline-block";
                ctrlElem.style.whiteSpace = "nowrap";
                const inputElem = document.createElement("input");
                inputElem.id = inputElemId;
                inputElem.style.marginRight = "37px";
                inputElem.type = inputType;
                if (type === "toggle")
                    inputElem.style.marginLeft = "5px";
                if (typeof initialVal !== "undefined")
                    inputElem.value = String(initialVal);
                if (type === "number" && step)
                    inputElem.step = step;
                // @ts-ignore
                if (ftInfo.min && ftInfo.max) {
                    // @ts-ignore
                    inputElem.min = ftInfo.min;
                    // @ts-ignore
                    inputElem.max = ftInfo.max;
                }
                if (type === "toggle" && typeof initialVal !== "undefined")
                    inputElem.checked = Boolean(initialVal);
                // @ts-ignore
                const unitTxt = typeof ftInfo.unit === "string" ? " " + ftInfo.unit : "";
                const fmtVal = (v) => String(v).trim();
                const toggleLabelText = (toggled) => toggled ? "On" : "Off";
                let labelElem;
                if (type === "slider") {
                    labelElem = document.createElement("label");
                    labelElem.classList.add("betterytm-ftconf-label");
                    labelElem.style.marginRight = "20px";
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
                    labelElem.classList.add("betterytm-ftconf-label");
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
                    let v = parseInt(inputElem.value);
                    if (isNaN(v))
                        v = Number(inputElem.value);
                    if (typeof initialVal !== "undefined")
                        confChanged(key, initialVal, (type !== "toggle" ? v : inputElem.checked));
                });
                const resetElem = document.createElement("button");
                resetElem.innerText = "Reset";
                resetElem.addEventListener("click", () => {
                    inputElem[type !== "toggle" ? "value" : "checked"] = ftDefault;
                    if (labelElem) {
                        if (type === "toggle")
                            labelElem.innerText = toggleLabelText(inputElem.checked);
                        else
                            labelElem.innerText = fmtVal(parseInt(inputElem.value));
                    }
                    if (typeof initialVal !== "undefined")
                        confChanged(key, initialVal, ftDefault);
                });
                labelElem && ctrlElem.appendChild(labelElem);
                ctrlElem.appendChild(inputElem);
                ctrlElem.appendChild(resetElem);
                ftConfElem.appendChild(ctrlElem);
            }
            featuresCont.appendChild(ftConfElem);
        }
        const footerElem = document.createElement("div");
        footerElem.id = "betterytm-menu-footer";
        footerElem.style.marginTop = "20px";
        footerElem.style.fontSize = "17px";
        footerElem.style.textDecoration = "underline";
        footerElem.style.padding = "10px 20px";
        footerElem.style.position = "sticky";
        footerElem.style.backgroundColor = "var(--bytm-menu-bg)";
        footerElem.style.bottom = "0";
        footerElem.innerText = "You need to reload the page to apply changes.";
        const reloadElem = document.createElement("button");
        reloadElem.style.marginLeft = "20px";
        reloadElem.innerText = "Reload now";
        reloadElem.title = "Click to reload the page";
        reloadElem.addEventListener("click", () => location.reload());
        footerElem.appendChild(reloadElem);
        featuresCont.appendChild(footerElem);
        // finalize
        const menuBody = document.createElement("div");
        menuBody.id = "betterytm-menu-body";
        menuBody.appendChild(titleCont);
        menuBody.appendChild(featuresCont);
        const versionCont = document.createElement("div");
        versionCont.style.display = "flex";
        versionCont.style.justifyContent = "space-around";
        versionCont.style.fontSize = "1.15em";
        versionCont.style.marginTop = "10px";
        versionCont.style.marginBottom = "5px";
        const versionElem = document.createElement("span");
        versionElem.id = "betterytm-menu-version";
        versionElem.innerText = `v${_constants__WEBPACK_IMPORTED_MODULE_1__.scriptInfo.version}`;
        versionCont.appendChild(versionElem);
        featuresCont.appendChild(versionCont);
        menuContainer.appendChild(menuBody);
        menuContainer.appendChild(versionCont);
        backgroundElem.appendChild(menuContainer);
        document.body.appendChild(backgroundElem);
        // add style
        const menuStyle = `\
:root {
  --bytm-menu-bg: #212121;
}

#betterytm-menu-bg {
  display: block;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 15;
  background-color: rgba(0, 0, 0, 0.6);
}

/* TODO:FIXME: needs better positioning (vw and vh === "big no no") */
#betterytm-menu {
  display: inline-block;
  position: fixed;
  width: 50vw;
  height: auto;
  left: 25vw;
  top: 10vh;
  z-index: 16;
  padding: 8px;
  color: #fff;
  background-color: var(--bytm-menu-bg);
}

#betterytm-menu-opts {
  max-height: 70vh;
  overflow: auto;
}

#betterytm-menu-titlecont {
  display: flex;
}

#betterytm-menu-title {
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 8px;
}

#betterytm-menu-linkscont {
  display: flex;
}

.betterytm-menu-link {
  display: inline-block;
}

/*.betterytm-menu-img {

}*/

#betterytm-menu-close {
  cursor: pointer;
}

.betterytm-ftconf-label {
  user-select: none;
}`;
        (0,_utils__WEBPACK_IMPORTED_MODULE_3__.log)("Added menu elem:", backgroundElem);
        (0,_utils__WEBPACK_IMPORTED_MODULE_3__.addGlobalStyle)(menuStyle, "menu");
    });
}
function closeMenu() {
    const menuBg = document.querySelector("#betterytm-menu-bg");
    menuBg.style.visibility = "hidden";
    menuBg.style.display = "none";
}
function openMenu() {
    const menuBg = document.querySelector("#betterytm-menu-bg");
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
/* harmony export */   addGlobalStyle: function() { return /* binding */ addGlobalStyle; },
/* harmony export */   error: function() { return /* binding */ error; },
/* harmony export */   getDomain: function() { return /* binding */ getDomain; },
/* harmony export */   getVideoTime: function() { return /* binding */ getVideoTime; },
/* harmony export */   info: function() { return /* binding */ info; },
/* harmony export */   initSiteEvents: function() { return /* binding */ initSiteEvents; },
/* harmony export */   insertAfter: function() { return /* binding */ insertAfter; },
/* harmony export */   log: function() { return /* binding */ log; },
/* harmony export */   removeAllObservers: function() { return /* binding */ removeAllObservers; },
/* harmony export */   setLogLevel: function() { return /* binding */ setLogLevel; },
/* harmony export */   siteEvents: function() { return /* binding */ siteEvents; },
/* harmony export */   warn: function() { return /* binding */ warn; }
/* harmony export */ });
/* harmony import */ var _billjs_event_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @billjs/event-emitter */ "./node_modules/@billjs/event-emitter/lib/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");


//#MARKER BYTM-specific
let curLogLevel = 1;
/** Sets the current log level. 0 = Debug, 1 = Info */
function setLogLevel(level) {
    curLogLevel = level;
}
function getLogLevel(...args) {
    if (typeof args.at(-1) === "number")
        return args.splice(args.length - 1, 1)[0];
    return 0;
}
/** Common prefix to be able to tell logged messages apart */
const consPrefix = `[${_constants__WEBPACK_IMPORTED_MODULE_1__.scriptInfo.name}]`;
/**
 * Logs string-compatible values to the console, as long as the log level is sufficient.
 * @param args Last parameter is logLevel: 0 = Debug, 1/undefined = Info
 */
function log(...args) {
    if (curLogLevel <= getLogLevel(...args))
        console.log(consPrefix, ...args);
}
/**
 * Logs string-compatible values to the console as info, as long as the log level is sufficient.
 * @param args Last parameter is logLevel: 0 = Debug, 1/undefined = Info
 */
function info(...args) {
    if (curLogLevel <= getLogLevel(...args))
        console.info(consPrefix, ...args);
}
/**
 * Logs string-compatible values to the console as a warning, as long as the log level is sufficient.
 * @param args Last parameter is logLevel: 0 = Debug, 1/undefined = Info
 */
function warn(...args) {
    if (curLogLevel <= getLogLevel(...args))
        console.warn(consPrefix, ...args);
}
/** Logs string-compatible values to the console as an error. */
function error(...args) {
    console.error(consPrefix, ...args);
}
/**
 * Returns the current domain as a constant string representation
 * @throws Throws if script runs on an unexpected website
 */
function getDomain() {
    const { hostname } = new URL(location.href);
    if (hostname.includes("music.youtube"))
        return "ytm";
    else if (hostname.includes("youtube"))
        return "yt";
    else
        throw new Error("BetterYTM is running on an unexpected website. Please don't tamper with the @match directives in the userscript header.");
}
/**
 * Returns the current video time in seconds
 * @param force Set to true to dispatch mouse movement events in case the video time can't be estimated
 * @returns Returns null if the video time is unavailable
 */
function getVideoTime(force = false) {
    const domain = getDomain();
    try {
        if (domain === "ytm") {
            const pbEl = document.querySelector("#progress-bar");
            return !isNaN(Number(pbEl.value)) ? Number(pbEl.value) : null;
        }
        else if (domain === "yt") {
            // YT doesn't update the progress bar when it's hidden (YTM doesn't hide it) so TODO: come up with some solution here
            // Possible solution:
            // - Use MutationObserver to detect when attributes of progress bar (selector `div.ytp-progress-bar[role="slider"]`) change
            // - Wait until the attribute increments, then save the value of `aria-valuenow` and the current system time to memory
            // - When site switch hotkey is pressed, take saved `aria-valuenow` value and add the difference between saved system time and current system time
            //   - If no value is present, use the script from `dev/ytForceShowVideoTime.js` to simulate mouse movement to force the element to update
            // - Subtract one or two seconds to make up for rounding errors
            // - profit
            // if(!ytCurrentVideoTime) {
            //   ytForceShowVideoTime();
            //   const videoTime = document.querySelector("#TODO")?.getAttribute("aria-valuenow") ?? null;
            // }
            void [force, ytForceShowVideoTime];
            return null;
        }
        return null;
    }
    catch (err) {
        error("Couldn't get video time due to error:", err);
        return null;
    }
}
/** Sends events that force the video controls to become visible for about 3 seconds */
function ytForceShowVideoTime() {
    const player = document.querySelector("#movie_player");
    if (!player)
        return false;
    const defaultProps = {
        // needed because otherwise YTM errors out - see https://github.com/Sv443/BetterYTM/issues/18#show_issue
        view: unsafeWindow !== null && unsafeWindow !== void 0 ? unsafeWindow : window,
        bubbles: true,
        cancelable: false,
    };
    player.dispatchEvent(new MouseEvent("mouseenter", defaultProps));
    const { x, y, width, height } = player.getBoundingClientRect();
    const screenY = Math.round(y + height / 2);
    const screenX = x + Math.min(50, Math.round(width / 3));
    player.dispatchEvent(new MouseEvent("mousemove", Object.assign(Object.assign({}, defaultProps), { screenY,
        screenX, movementX: 5, movementY: 0 })));
    setTimeout(() => {
        player.dispatchEvent(new MouseEvent("mouseleave", defaultProps));
    }, 4000);
    return true;
}
//#MARKER DOM
/**
 * Inserts `afterNode` as a sibling just after the provided `beforeNode`
 * @param beforeNode
 * @param afterNode
 * @returns Returns the `afterNode`
 */
function insertAfter(beforeNode, afterNode) {
    var _a;
    (_a = beforeNode.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(afterNode, beforeNode.nextSibling);
    return afterNode;
}
/**
 * Adds global CSS style through a `<style>` element in the document's `<head>`
 * @param style CSS string
 * @param ref Reference name that is included in the `<style>`'s ID - prefixed with `betterytm-style-` - defaults to a random number if left undefined
 */
function addGlobalStyle(style, ref) {
    if (typeof ref !== "string" || ref.length === 0)
        ref = String(Math.floor(Math.random() * 10000));
    const styleElem = document.createElement("style");
    styleElem.id = `betterytm-style-${ref}`;
    styleElem.innerHTML = style;
    document.head.appendChild(styleElem);
    log(`Inserted global style with ref '${ref}':`, styleElem);
}
const siteEvents = new _billjs_event_emitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
let observers = [];
/** Creates MutationObservers that check if parts of the site have changed, then emit an event on the `siteEvents` instance */
function initSiteEvents() {
    try {
        //#SECTION queue
        const queueObs = new MutationObserver(([{ addedNodes, removedNodes, target }]) => {
            if (addedNodes.length > 0 || removedNodes.length > 0) {
                info("Detected queue change - added nodes:", addedNodes.length, "- removed nodes:", removedNodes.length);
                siteEvents.fire("queueChanged", target);
            }
        });
        // only observe added or removed elements
        queueObs.observe(document.querySelector(".side-panel.modular #contents.ytmusic-player-queue"), {
            childList: true,
        });
        //#SECTION carousel shelves
        const shelfContainerObs = new MutationObserver(([{ addedNodes, removedNodes }]) => {
            if (addedNodes.length > 0 || removedNodes.length > 0) {
                info("Detected carousel shelf container change - added nodes:", addedNodes.length, "- removed nodes:", removedNodes.length);
                siteEvents.fire("carouselShelvesChanged", { addedNodes, removedNodes });
            }
        });
        shelfContainerObs.observe(document.querySelector("#contents.ytmusic-section-list-renderer"), {
            childList: true,
        });
        info("Successfully initialized SiteEvents observers");
        observers = [
            queueObs,
            shelfContainerObs,
        ];
    }
    catch (err) {
        error("Couldn't initialize SiteEvents observers due to an error:\n", err);
    }
}
/** Disconnects and deletes all observers. Run `initSiteEvents()` again to create new ones. */
function removeAllObservers() {
    observers.forEach((observer) => observer.disconnect());
    observers = [];
}


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
/*!*******************************!*\
  !*** ./src/BetterYTM.user.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _features_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/index */ "./src/features/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




// TODO: add some style
console.log(`${_constants__WEBPACK_IMPORTED_MODULE_1__.scriptInfo.name} v${_constants__WEBPACK_IMPORTED_MODULE_1__.scriptInfo.version} (${_constants__WEBPACK_IMPORTED_MODULE_1__.scriptInfo.lastCommit}) - ${_constants__WEBPACK_IMPORTED_MODULE_1__.scriptInfo.namespace}`);
console.log(`Powered by lots of ambition and my song metadata API: ${_features_index__WEBPACK_IMPORTED_MODULE_3__.geniUrlBase}`);
const domain = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getDomain)();
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0,_features_index__WEBPACK_IMPORTED_MODULE_3__.preInitLayout)();
        try {
            document.addEventListener("DOMContentLoaded", onDomLoad);
        }
        catch (err) {
            console.error(`${_constants__WEBPACK_IMPORTED_MODULE_1__.scriptInfo.name} - General Error:`, err);
        }
        try {
            (0,_features_index__WEBPACK_IMPORTED_MODULE_3__.initMenu)();
        }
        catch (err) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.error)("Couldn't initialize menu:", err);
        }
    });
}
/** Called when the DOM has finished loading and can be queried and altered by the userscript */
function onDomLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        // post-build these double quotes are replaced by backticks
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.addGlobalStyle)(`/*!***************************************************************************!*\
  !*** css ./node_modules/css-loader/dist/cjs.js!./src/features/layout.css ***!
  \***************************************************************************/

#betterytm-watermark {
    font-size: 10px;
    display: inline-block;
    position: absolute;
    left: 45px;
    top: 46px;
    z-index: 10;
    color: white;
    text-decoration: none;
    cursor: pointer;
}

@media(max-width: 615px) {
    #betterytm-watermark {
        display: none;
    }
}

#betterytm-watermark:hover {
    text-decoration: underline;
}

.side-panel.modular ytmusic-player-queue-item .song-info.ytmusic-player-queue-item {
    position: relative;
}

.side-panel.modular ytmusic-player-queue-item .song-info .bytm-queue-btn-container {
    display: none;
    position: absolute;
    right: 0;
}

.side-panel.modular ytmusic-player-queue-item:hover .song-info .bytm-queue-btn-container {
    display: inline-block;
}

/*!***************************************************************************!*\
  !*** css ./node_modules/css-loader/dist/cjs.js!./src/features/lyrics.css ***!
  \***************************************************************************/
#betterytm-lyrics-button {
    align-items: center;
    justify-content: center;
    position: relative;
    vertical-align: middle;

    margin-left: 8px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: transparent;
}

#betterytm-lyrics-button:hover {
    background-color: #383838;
}

#betterytm-lyrics-img {
    display: inline-block;
    z-index: 10;
    width: 24px;
    height: 24px;
    padding: 5px;
}

/*!******************************************************************************!*\
  !*** css ./node_modules/css-loader/dist/cjs.js!./src/features/menu/menu.css ***!
  \******************************************************************************/
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
}`, "global");
        const features = yield (0,_config__WEBPACK_IMPORTED_MODULE_0__.loadFeatureConf)();
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.log)(`Initializing features for domain '${domain}'`);
        try {
            if (domain === "ytm") {
                (0,_utils__WEBPACK_IMPORTED_MODULE_2__.initSiteEvents)();
                if (features.arrowKeySupport)
                    (0,_features_index__WEBPACK_IMPORTED_MODULE_3__.initArrowKeySkip)();
                if (features.removeUpgradeTab)
                    (0,_features_index__WEBPACK_IMPORTED_MODULE_3__.removeUpgradeTab)();
                if (features.watermarkEnabled)
                    (0,_features_index__WEBPACK_IMPORTED_MODULE_3__.addWatermark)();
                if (features.geniusLyrics)
                    (0,_features_index__WEBPACK_IMPORTED_MODULE_3__.addMediaCtrlGeniusBtn)();
                if (features.queueButtons)
                    (0,_features_index__WEBPACK_IMPORTED_MODULE_3__.initQueueButtons)();
                if (typeof features.volumeSliderSize === "number")
                    (0,_features_index__WEBPACK_IMPORTED_MODULE_3__.setVolSliderSize)();
                if (features.anchorImprovements)
                    (0,_features_index__WEBPACK_IMPORTED_MODULE_3__.addAnchorImprovements)();
                (0,_features_index__WEBPACK_IMPORTED_MODULE_3__.setVolSliderStep)();
            }
            if (["ytm", "yt"].includes(domain)) {
                if (features.switchBetweenSites)
                    (0,_features_index__WEBPACK_IMPORTED_MODULE_3__.initSiteSwitch)(domain);
                try {
                    (0,_features_index__WEBPACK_IMPORTED_MODULE_3__.addMenu)(); // TODO: remove
                }
                catch (err) {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.error)("Couldn't add menu:", err);
                }
            }
        }
        catch (err) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.error)("General error while executing feature:", err);
        }
    });
}
// stuff that needs to be called ASAP, before anything async happens
(0,_utils__WEBPACK_IMPORTED_MODULE_2__.setLogLevel)(_constants__WEBPACK_IMPORTED_MODULE_1__.logLevel);
if (domain === "ytm")
    (0,_features_index__WEBPACK_IMPORTED_MODULE_3__.initBeforeUnloadHook)();
init();

}();

//# sourceMappingURL=BetterYTM.user.js.map
