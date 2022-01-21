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
// @connect         youtube.com
// @connect         github.com
// @connect         githubusercontent.com
// @downloadURL     https://raw.githubusercontent.com/Sv443/BetterYTM/main/BetterYTM.user.js
// @updateURL       https://raw.githubusercontent.com/Sv443/BetterYTM/main/BetterYTM.user.js
// ==/UserScript==

/* Disclaimer: I am not affiliated with YouTube, Google, Alphabet, Genius or anyone else */
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
    /** Adds a button to the media controls bar to open the current song's genius.com lyrics in a new tab */
    geniusLyrics: true,

    // --- Other ---
    /** Set to true to remove the watermark under the YTM logo */
    removeWatermark: false,

    // /** The theme color - accepts any CSS color value - default is "#ff0000" */
    // themeColor: "#0f0",
});



/** Set to true to enable debug mode for more output in the JS console */
const dbg = true;









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
        console.error("BetterYTM - General Error:", err);
    }
}


//#MARKER events


/**
 * Called when the DOM has finished loading (after `DOMContentLoaded` is emitted)
 */
function onDomLoad()
{
    const domain = getDomain();

    dbg && console.info(`BetterYTM: Initializing features for domain '${domain}'`);

    try
    {
        // YTM-specific
        if(domain === "ytm")
        {
            if(features.arrowKeySupport)
            {
                document.addEventListener("keydown", onKeyDown);
                dbg && console.info(`BetterYTM: Added key press listener`);
            }

            if(features.removeUpgradeTab)
                removeUpgradeTab();

            if(!features.removeWatermark)
                addWatermark();

            if(features.geniusLyrics)
                addGeniusButton();
        }

        // Both YTM and YT
        if(features.switchBetweenSites)
            initSiteSwitch(domain);
    }
    catch(err)
    {
        console.error(`BetterYTM: General error while executing feature:`, err);
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
        dbg && console.info(`BetterYTM: Captured key '${evt.code}' in proxy listener`);

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
        {
            const proxyProps = { ...defaultProps, ...keyProps };

            document.body.dispatchEvent(new KeyboardEvent("keydown", proxyProps));

            dbg && console.info(`BetterYTM: Dispatched proxy keydown event [${evt.code}] -> [${proxyProps.code}]`);
        }
        else if(dbg)
            console.warn(`BetterYTM: Captured key '${evt.code}' has no defined behavior`);
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
    dbg && console.info(`BetterYTM: Initialized site switch listener`);
}

/**
 * Switches to the other site (between YT and YTM)
 * @param {Domain} newDomain
 */
function switchSite(newDomain)
{
    dbg && console.info(`BetterYTM: Switching from domain '${getDomain()}' to '${newDomain}'`);

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

        const vt = getVideoTime() ?? 0;

        dbg && console.info(`BetterYTM: Found video time of ${vt} seconds`);

        const newSearch = search.includes("?") ? `${search}&t=${vt}` : `?t=${vt}`;

        const url = `https://${subdomain}.youtube.com${pathname}${newSearch}${hash}`;

        console.info(`BetterYTM - switching to domain '${newDomain}' at ${url}`);

        location.href = url;
    }
    catch(err)
    {
        console.error(`BetterYTM: Error while switching site:`, err);
    }
}

//#SECTION remove upgrade tab

let removeUpgradeTries = 0;

/**
 * Removes the "Upgrade" / YT Music Premium tab from the title / nav bar
 */
function removeUpgradeTab()
{
    const tabElem = document.querySelector(`.ytmusic-nav-bar ytmusic-pivot-bar-item-renderer[tab-id="SPunlimited"]`);
    if(tabElem)
    {
        tabElem.remove();
        dbg && console.info(`BetterYTM: Removed upgrade tab after ${removeUpgradeTries} tries`);
    }
    else if(removeUpgradeTries < 10)
    {
        setTimeout(removeUpgradeTab, 250); // TODO: improve this
        removeUpgradeTries++;
    }
    else if(dbg)
        console.info(`BetterYTM: Couldn't find upgrade tab to remove after ${removeUpgradeTries} tries`);
}

//#SECTION add watermark

/**
 * Adds a watermark beneath the logo
 */
function addWatermark()
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
    styleElem.id = "betterytm-watermark-style";

    if(styleElem.styleSheet)
        styleElem.styleSheet.cssText = style;
    else
        styleElem.appendChild(document.createTextNode(style));

    document.querySelector("head").appendChild(styleElem);


    const logoElem = document.querySelector("#left-content");
    logoElem.parentNode.insertBefore(watermark, logoElem.nextSibling);


    dbg && console.info(`BetterYTM: Added watermark element:`, watermark);
}

//#SECTION genius.com lyrics button

let currentSong = "";

function addGeniusButton()
{
    const menuElem = document.querySelector(".middle-controls-buttons tp-yt-paper-icon-button.dropdown-trigger");
    if(!menuElem)
        return setTimeout(addGeniusButton, 250); // TODO: improve this

    const linkElem = document.createElement("a");
    linkElem.id = "betterytm-genius-button";
    linkElem.title = "Search for lyrics on genius.com";
    linkElem.href = getGeniusUrl();
    linkElem.target = "_blank";
    linkElem.rel = "noopener noreferrer";

    const imgElem = document.createElement("img");
    imgElem.src = "https://raw.githubusercontent.com/Sv443/BetterYTM/develop/resources/external/genius.png";
    imgElem.style = "z-index: 10; width: 24px; height: 24px; padding: 8px; padding-left: 16px;";

    linkElem.appendChild(imgElem);

    dbg && console.info(`BetterYTM: Inserted genius button:`, linkElem);

    menuElem.parentNode.insertBefore(linkElem, menuElem.nextSibling);

    currentSong = document.querySelector(".content-info-wrapper > yt-formatted-string").title;

    setInterval(() => { // TODO: improve this maybe idk
        let newSong = document.querySelector(".content-info-wrapper > yt-formatted-string").title;

        if(newSong != currentSong)
        {
            dbg && console.info(`BetterYTM: Detected song change, refreshing genius button`);

            currentSong = newSong;

            const lyricsBtn = document.querySelector("#betterytm-genius-button");
            lyricsBtn.href = getGeniusUrl();
        }
    }, 1000);
}


//#MARKER other


/**
 * Returns the current domain as a constant string representation
 * @returns {Domain}
 */
function getDomain()
{
    const { hostname } = new URL(location.href);
    return hostname.toLowerCase().includes("music") ? "ytm" : "yt"; // other cases are caught by the `@match`es at the top
}

/**
 * Returns the current video time in seconds
 * @returns {number|null} Returns null if video time is unavailable
 */
function getVideoTime()
{
    const domain = getDomain();

    try
    {
        if(domain === "ytm")
        {
            const pbEl = document.querySelector("#progress-bar");
            return pbEl.value ?? null;
        }
        else if(domain === "yt") // YT doesn't update the progress bar when it's hidden (YTM doesn't hide it) so TODO: come up with some solution here
            return 0;

        return null;
    }
    catch(err)
    {
        console.error("BetterYTM: Couldn't get video time due to error:", err);
        return null;
    }
}

/**
 * Returns the genius.com search URL for the current song
 */
function getGeniusUrl()
{
    try
    {
        const sanitizeSongName = (songName) => {
            let sanitized;

            if(songName.match(/\(|feat|ft/gmi))
            {
                // should hopefully trim right after the song name
                sanitized = songName.substring(0, songName.indexOf("("));
            }

            return (sanitized || songName).trim();
        };

        const songNameRaw = document.querySelector(".content-info-wrapper > yt-formatted-string").title;
        const songName = sanitizeSongName(songNameRaw);

        const songMeta = document.querySelector("span.subtitle > yt-formatted-string:first-child").title;
        const artist = songMeta.split(/\s*\u2022\s*/gmiu)[0];

        const url = `https://genius.com/search?q=${encodeURIComponent(artist)}%20${encodeURIComponent(songName)}`;

        dbg && console.info(`BetterYTM: Resolved genius.com URL for song '${songName}' by '${artist}': ${url}`);

        return url;
    }
    catch(err)
    {
        console.error(`BetterYTM: Couldn't resolve genius.com URL:`, err);
    }
}

init(); // call init() when script is loaded
})();
