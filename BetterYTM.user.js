// ==UserScript==
// @name            BetterYTM
// @name:de         BetterYTM
// @namespace       https://github.com/Sv443/BetterYTM#readme
// @version         0.2.0
// @license         MIT
// @author          Sv443
// @copyright       Sv443 <contact@sv443.net> (https://github.com/Sv443)
// @description     Improvements for YouTube Music
// @description:de  Verbesserungen für YouTube Music
// @match           https://music.youtube.com/*
// @match           https://www.youtube.com/*
// @icon            https://www.google.com/s2/favicons?domain=music.youtube.com
// @run-at          document-start
// @connect         self
// @connect         *.youtube.com
// @downloadURL     https://raw.githubusercontent.com/Sv443/BetterYTM/main/BetterYTM.user.js
// @updateURL       https://raw.githubusercontent.com/Sv443/BetterYTM/main/BetterYTM.user.js
// ==/UserScript==

/* Disclaimer: I am not affiliated with YouTube, Google, Alphabet or anyone else */
/* C&D this, Susan 🖕 */

(() => {
"use-strict";


/*
    █▀▀█ ▄▄▄ █   █    ▀  ▄▄▄  ▄▄▄▄ ▄▄▄
    ▀▀▄▄ █▄█ █▀  █▀  ▀█  █  █ █ ▄▄ █▄▄ ▀
    █▄▄█ █▄▄ █▄▄ █▄▄ ▄█▄ █  █ █▄▄█ ▄▄█ ▄
*/

/**
 * This is where you can enable or disable features  
 * If this userscript ever becomes something I might add like a menu to toggle these
 */
const features = Object.freeze({
  	// --- Quality of Life ---
    /** Whether arrow keys should skip forwards and backwards by 10 seconds */
    arrowKeySupport: true,
  	/** Whether to remove the "Upgrade" / YT Music Premium tab */
    removeUpgradeTab: true,

		// --- Extra Features ---
    /** Whether to add a button or key combination (TODO) to switch between the YT and YTM sites on a video */
    switchBetweenSites: true,

  	// --- Other ---
  	/** Set to true to remove the watermark next to the YTM logo */
  	removeWatermark: false,

    // /** The theme color - accepts any CSS color value - default is "#ff0000" */
    // themeColor: "#0f0",
});









//#MARKER types


/** @typedef {"yt"|"ytm"} Domain */


//#MARKER init


const info = Object.freeze({
    name: GM.info.script.name, // eslint-disable-line no-undef
    version: GM.info.script.version, // eslint-disable-line no-undef
    namespace: GM.info.script.namespace, // eslint-disable-line no-undef
});

function init()
{
    try
    {
        console.log(`${info.name} v${info.version} - ${info.namespace}`);

        document.addEventListener("DOMContentLoaded", onDomLoad);
    }
    catch(err)
    {
        console.error("BetterYTM - General Error:", err instanceof Error ? err : new Error(err));
    }
}


//#MARKER events


/**
 * Called when the DOM has finished loading (after `DOMContentLoaded` is emitted)
 */
function onDomLoad()
{
    const domain = getDomain();

    if(features.arrowKeySupport && domain === "ytm")
        document.addEventListener("keydown", onKeyDown);

    if(features.switchBetweenSites)
        initSiteSwitch(domain);
  
  	if(features.removeUpgradeTab)
    {
      	const tabElem = document.querySelector(`.ytmusic-nav-bar ytmusic-pivot-bar-item-renderer[tab-id="SPunlimited"]`);
      	tabElem.innerHTML = "";
      	tabElem.outerHTML = "";
    }
  
  	if(!features.removeWatermark)
    {
      	const watermark = document.createElement("a");

      	watermark.id = "betterytm-watermark";
      	watermark.className = "style-scope ytmusic-nav-bar";

      	watermark.innerText = info.name;
      	watermark.title = `${info.name} v${info.version}`;

      	watermark.href = info.namespace;
      	watermark.target = "_blank";
      	watermark.rel = "noopener noreferrer";


      	const style = `
						#betterytm-watermark {
					  		position: absolute;
								left: 45px;
								top: 43px;
								z-index: 10;
								color: white;
								text-decoration: none;
								cursor: pointer;
						}

						#betterytm-watermark:hover {
					  		text-decoration: underline;
						}
				`;

      	const styleElem = document.createElement("style");

      	if(styleElem.styleSheet)
    				styleElem.styleSheet.cssText = style;
				else
    				styleElem.appendChild(document.createTextNode(style));

      	document.querySelector("head").appendChild(styleElem);


      	const logoElem = document.querySelector("#left-content");
    		logoElem.parentNode.insertBefore(watermark, logoElem.nextSibling);
    }

    // if(features.themeColor != "#f00" && features.themeColor != "#ff0000")
    //     applyTheme();
}


//#MARKER features


//#SECTION arrow key skip

/**
 * Called when the user presses keys
 * @param {KeyboardEvent} evt
 */
function onKeyDown(evt)
{
    if(["ArrowLeft", "ArrowRight"].includes(evt.code))
    {
        // ripped this stuff from the console, most of these are probably unnecessary but this was finnicky af and I am sick and tired of trial and error
        const defaultProps = {
            altKey: false,
            bubbles: true,
            cancelBubble: false,
            cancelable: true,
            charCode: 0,
            composed: true,
            ctrlKey: false,
            currentTarget: null,
            defaultPrevented: evt.defaultPrevented,
            explicitOriginalTarget: document.body,
            isTrusted: true,
            metaKey: false,
            originalTarget: document.body,
            repeat: false,
            shiftKey: false,
            srcElement: document.body,
            target: document.body,
            type: "keydown",
            view: window,
        };

        let invalidKey = false;
        let keyProps = {};

        switch(evt.code)
        {
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
            // console.warn("BetterYTM - Unknown key", evt.code);
            invalidKey = true;

            break;
        }

        if(!invalidKey)
            document.body.dispatchEvent(new KeyboardEvent("keydown", { ...defaultProps, ...keyProps }));
    }
}

//#SECTION site switch

/**
 * Initializes the site switch feature
 * @param {Domain} domain
 */
function initSiteSwitch(domain)
{
    // TODO:
    // extra features:
    // - keep video time

    document.addEventListener("keydown", (e) => {
        if(e.key == "F9")
            switchSite(domain === "yt" ? "ytm" : "yt");
    });
}

/**
 * Switches to the other site (between YT and YTM)
 * @param {Domain} newDomain
 */
function switchSite(newDomain)
{
    console.log(`BYTM/Debug: Switching from domain ${getDomain()} to ${newDomain}`);

    try
    {
        let subdomain;
        if(newDomain === "ytm")
            subdomain = "music";
        else if(newDomain === "yt")
            subdomain = "www";

        if(!subdomain)
            throw new TypeError(`Unrecognized domain '${newDomain}'`);


        const { pathname, search, hash } = new URL(location.href);

        const newSearch = search.includes("?") ? `${search}&t=${getVideoTime()}` : `?t=${getVideoTime()}`;

        const url = `https://${subdomain}.youtube.com${pathname}${newSearch}${hash}`;

        console.info(`BetterYTM - switching to domain '${newDomain}' at ${url}`);

        location.href = url;
    }
    catch(err)
    {
        console.error(err instanceof Error ? err : new Error(err));
    }
}

/**
 * Returns the current video time in seconds
 * @param {Domain} [domain]
 * @returns {number|null} Returns null if video time is unavailable
 */
function getVideoTime(domain)
{
    if(typeof domain !== "string")
        domain = getDomain();

    if(domain === "ytm")
    {
        const pbEl = document.querySelector("#progress-bar");
        return pbEl.value ?? null;
    }
    else if(domain === "yt") // YT doesn't update the progress bar when it's hidden (YTM doesn't hide it) so TODO: come up with some solution here
        return 0;

    return null;
}


//#MARKER other


/**
 * Returns the current domain as a string representation
 * @returns {Domain}
 */
function getDomain()
{
    const { hostname } = new URL(location.href);
    return hostname.toLowerCase().includes("music") ? "ytm" : "yt"; // other cases are caught by the `@match`es at the top
}


init(); // call init() when script is loaded
})();
