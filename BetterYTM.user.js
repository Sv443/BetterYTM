// ==UserScript==
// @name            BetterYTM
// @name:de         BetterYTM
// @namespace       https://github.com/Sv443/BetterYTM#readme
// @version         1.0.0
// @license         MIT
// @author          Sv443
// @copyright       Sv443 <contact@sv443.net> (https://github.com/Sv443)
// @description     Improvements for YouTube Music
// @description:de  Verbesserungen für YouTube Music
// @match           https://music.youtube.com/*
// @match           https://www.youtube.com/*
// @icon            https://www.google.com/s2/favicons?domain=music.youtube.com
// @run-at          document-start
// @grant           GM.getValue
// @grant           GM.setValue
// @connect         self
// @connect         youtube.com
// @connect         github.com
// @connect         githubusercontent.com
// @downloadURL     https://raw.githubusercontent.com/Sv443/BetterYTM/main/BetterYTM.user.js
// @updateURL       https://raw.githubusercontent.com/Sv443/BetterYTM/main/BetterYTM.user.js
// ==/UserScript==


/* Disclaimer: I am not affiliated with YouTube, Google, Alphabet, Genius or anyone else */
/* C&D this, Susan 🖕 */


(async () => {
"use-strict";


/** Set to true to enable debug mode for more output in the JS console */
const dbg = true;


const defaultFeatures = {
    /** Whether arrow keys should skip forwards and backwards by 10 seconds */
    arrowKeySupport: true,
    /** Whether to remove the "Upgrade" / YT Music Premium tab */
    removeUpgradeTab: true,

    /** Whether to add a button or key combination (TODO) to switch between the YT and YTM sites on a video */
    switchBetweenSites: true,
    /** Adds a button to the media controls bar to search for the current song's lyrics on genius.com in a new tab */
    geniusLyrics: true,
    /** Adds a lyrics button to each song in the queue ("up next" tab) */
    lyricsButtonsOnSongQueue: true,

    /** Set to true to remove the watermark under the YTM logo */
    removeWatermark: false,
};

const featureConf = await loadFeatureConf();

console.log("bytm load", featureConf);

const features = { ...defaultFeatures, ...featureConf };

console.log("bytm save", features);

await saveFeatureConf(features);


//#MARKER types


/** @typedef {"yt"|"ytm"} Domain Constant string representation of which domain this script is currently running on */


//#MARKER init


/** Specifies the hard limit for repetitive tasks */
const triesLimit = 20;

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
async function onDomLoad()
{
    const domain = getDomain();

    dbg && console.log(`BetterYTM: Initializing features for domain '${domain}'`);

    try
    {
        if(domain === "ytm")
        {
            if(features.arrowKeySupport)
            {
                document.addEventListener("keydown", onKeyDown);
                dbg && console.log(`BetterYTM: Added key press listener`);
            }

            if(features.removeUpgradeTab)
                removeUpgradeTab();

            if(!features.removeWatermark)
                addWatermark();

            if(features.geniusLyrics)
                await addMediaCtrlGeniusBtn();

            if(features.lyricsButtonsOnSongQueue)
                await addQueueGeniusBtns();
        }

        if(["ytm", "yt"].includes(domain))
        {
            if(features.switchBetweenSites)
                initSiteSwitch(domain);

            try
            {
                addMenu();
            }
            catch(err)
            {
                console.error("BetterYTM: Couldn't add menu:", err);
            }
        }
    }
    catch(err)
    {
        console.error(`BetterYTM: General error while executing feature:`, err);
    }

    // if(features.themeColor != "#f00" && features.themeColor != "#ff0000")
    //     applyTheme();
}


//#MARKER menu


/**
 * Adds an element to open the BetterYTM menu
 */
function addMenu()
{
    // const domain = getDomain();


    // bg & menu
    const backgroundElem = document.createElement("div");
    backgroundElem.id = "betterytm-menu-bg";
    backgroundElem.title = "Click here to close the menu";
    backgroundElem.style.visibility = "hidden";
    backgroundElem.style.display = "none";
    backgroundElem.addEventListener("click", (e) => {
        if(e.target.id === "betterytm-menu-bg")
            closeMenu();
    });

    const menuContainer = document.createElement("div");
    menuContainer.title = "";
    menuContainer.id = "betterytm-menu";


    // title
    const titleCont = document.createElement("div");
    titleCont.id = "betterytm-menu-titlecont";

    const titleElem = document.createElement("h2");
    titleElem.id = "betterytm-menu-title";
    titleElem.innerText = "BetterYTM - Menu";

    const linksCont = document.createElement("div");
    linksCont.id = "betterytm-menu-linkscont";

    const addLink = (imgSrc, href, title) => {
        const anchorElem = document.createElement("a");
        anchorElem.className = "betterytm-menu-link";
        anchorElem.rel = "noopener noreferrer";
        anchorElem.target = "_blank";
        anchorElem.href = href;
        anchorElem.title = title;

        const linkElem = document.createElement("img");
        linkElem.className = "betterytm-menu-img";
        linkElem.src = imgSrc;

        anchorElem.appendChild(linkElem);
        linksCont.appendChild(anchorElem);
    };

    addLink("TODO:github.png", info.namespace, `${info.name} on GitHub`);
    addLink("TODO:greasyfork.png", "https://greasyfork.org/", `${info.name} on GreasyFork`);

    const closeElem = document.createElement("img");
    closeElem.id = "betterytm-menu-close";
    closeElem.src = "TODO:close.png";
    closeElem.title = "Click to close the menu";
    closeElem.addEventListener("click", closeMenu);

    titleCont.appendChild(titleElem);
    titleCont.appendChild(linksCont);
    titleCont.appendChild(closeElem);


    // TODO: features
    const featuresCont = document.createElement("div");
    featuresCont.id = "betterytm-menu-opts";


    // finalize
    menuContainer.appendChild(titleCont);
    menuContainer.appendChild(featuresCont);
    backgroundElem.appendChild(menuContainer);

    document.body.appendChild(backgroundElem);


    // add style
    const menuStyle = `\
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

    #betterytm-menu {
        display: inline-block;
        position: fixed;
        width: 50vw;
        height: 50vh;
        min-height: 500px;
        left: 25vw;
        top: 25vh;
        z-index: 16;
        overflow: auto;
        padding: 8px;
        color: #fff;
        background-color: #212121;
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

    .betterytm-menu-img {

    }

    #betterytm-menu-close {
        cursor: pointer;
    }
    `;

    dbg && console.log("BetterYTM: Added menu elem:", backgroundElem);

    /* #DEBUG */ //openMenu();

    addGlobalStyle(menuStyle, "menu");
}

function closeMenu()
{
    const menuBg = document.querySelector("#betterytm-menu-bg");

    menuBg.style.visibility = "hidden";
    menuBg.style.display = "none";
}

// function openMenu()
// {
//     const menuBg = document.querySelector("#betterytm-menu-bg");

//     menuBg.style.visibility = "visible";
//     menuBg.style.display = "block";
// }


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
        // discard the event when a (text) input is currently active, like when editing a playlist
        if(["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName))
            return dbg && console.info(`BetterYTM: Captured valid key but the current active element is <${document.activeElement.tagName.toLowerCase()}>, so the keypress is ignored`);

        dbg && console.log(`BetterYTM: Captured key '${evt.code}' in proxy listener`);

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

            dbg && console.log(`BetterYTM: Dispatched proxy keydown event: [${evt.code}] -> [${proxyProps.code}]`);
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
    dbg && console.log(`BetterYTM: Initialized site switch listener`);
}

/**
 * Switches to the other site (between YT and YTM)
 * @param {Domain} newDomain
 */
function switchSite(newDomain)
{
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

        dbg && console.log(`BetterYTM: Found video time of ${vt} seconds`);

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
        dbg && console.log(`BetterYTM: Removed upgrade tab after ${removeUpgradeTries} tries`);
    }
    else if(removeUpgradeTries < triesLimit)
    {
        setTimeout(removeUpgradeTab, 250); // TODO: improve this
        removeUpgradeTries++;
    }
    else
        console.error(`BetterYTM: Couldn't find upgrade tab to remove after ${removeUpgradeTries} tries`);
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


    const style = `\
    #betterytm-watermark {
        display: inline-block;
        position: absolute;
        left: 45px;
        top: 43px;
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
    }`;

    addGlobalStyle(style, "watermark");


    const logoElem = document.querySelector("#left-content");
    insertAfter(logoElem, watermark);


    dbg && console.log(`BetterYTM: Added watermark element:`, watermark);
}

//#SECTION genius.com lyrics button

let mcCurrentSongTitle = "";
let mcLyricsButtonAddTries = 0;

/**
 * Adds a genius.com lyrics button to the media controls bar
 */
async function addMediaCtrlGeniusBtn()
{
    const likeContainer = document.querySelector(".middle-controls-buttons ytmusic-like-button-renderer#like-button-renderer");

    if(!likeContainer)
    {
        mcLyricsButtonAddTries++;
        if(mcLyricsButtonAddTries < triesLimit)
            return setTimeout(addMediaCtrlGeniusBtn, 250); // TODO: improve this

        return console.error(`BetterYTM: Couldn't find element to append lyrics buttons to after ${mcLyricsButtonAddTries} tries`);
    }

    const songTitleElem = document.querySelector(".content-info-wrapper > yt-formatted-string");


    const gUrl = await getCurrentGeniusUrl();

    const linkElem = document.createElement("a");
    linkElem.id = "betterytm-lyrics-button";
    linkElem.className = "ytmusic-player-bar";
    linkElem.title = "Search for lyrics on genius.com";
    linkElem.href = gUrl;
    linkElem.target = "_blank";
    linkElem.rel = "noopener noreferrer";
    linkElem.style.visibility = gUrl ? "initial" : "hidden";

    const style = `\
    #betterytm-lyrics-button {
        display: inline-flex;
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
    }`;

    addGlobalStyle(style, "lyrics");


    const imgElem = document.createElement("img");
    imgElem.id = "betterytm-lyrics-img";
    imgElem.src = "https://raw.githubusercontent.com/Sv443/BetterYTM/main/resources/external/genius.png";

    linkElem.appendChild(imgElem);

    dbg && console.log(`BetterYTM: Inserted genius button after ${mcLyricsButtonAddTries} tries:`, linkElem);

    insertAfter(likeContainer, linkElem);


    mcCurrentSongTitle = songTitleElem.title;

    /** @param {MutationRecord[]} mutations */
    const onMutation = async (mutations) => {
        for await(const mut of mutations)
        {
            const newTitle = mut.target.title;

            if(newTitle != mcCurrentSongTitle)
            {
                const lyricsBtn = document.querySelector("#betterytm-lyrics-button");

                dbg && console.log(`BetterYTM: Song title changed from '${mcCurrentSongTitle}' to '${newTitle}'`);

                lyricsBtn.style.cursor = "wait";
                lyricsBtn.style.pointerEvents = "none";

                mcCurrentSongTitle = newTitle;

                lyricsBtn.href = await getCurrentGeniusUrl(); // can take a second or two

                lyricsBtn.style.cursor = "pointer";
                lyricsBtn.style.visibility = "initial";
                lyricsBtn.style.pointerEvents = "initial";
            }
        }
    };

    // since YT and YTM don't reload the page on video change, MutationObserver needs to be used
    const obs = new MutationObserver(onMutation);

    obs.observe(songTitleElem, { attributes: true, attributeFilter: [ "title" ] });
}


/**
 * Adds genius lyrics buttons to the song queue
 */
async function addQueueGeniusBtns()
{

}

/**
 * Returns the genius.com lyrics site URL for the current song
 * @returns {string|null}
 */
async function getCurrentGeniusUrl()
{
    try
    {
        const songTitleElem = document.querySelector(".content-info-wrapper > yt-formatted-string");
        const songMetaElem = document.querySelector("span.subtitle > yt-formatted-string:first-child");

        if(!songTitleElem || !songMetaElem || !songTitleElem.title)
            return null;

        const sanitizeSongName = (songName) => {
            let sanitized;

            if(songName.match(/\(|feat|ft/gmi))
            {
                // should hopefully trim right after the song name
                sanitized = songName.substring(0, songName.indexOf("("));
            }

            return (sanitized || songName).trim();
        };

        /** @param {string} songMeta */
        const splitArtist = (songMeta) => {
            songMeta = songMeta.split(/\s*\u2022\s*/gmiu)[0]; // split at &bull; (•) character

            if(songMeta.match(/&/))
                songMeta = songMeta.split(/\s*&\s*/gm)[0];

            if(songMeta.match(/,/))
                songMeta = songMeta.split(/,\s*/gm)[0];

            return songMeta;
        }

        const songNameRaw = songTitleElem.title;
        const songName = sanitizeSongName(songNameRaw);

        const artistName = splitArtist(songMetaElem.title);

        // TODO: artist might need further splitting before comma or ampersand
        // TODO: song title might need *less* splitting for something like "MyNewSong (wip)"

        const query = encodeURIComponent(`${artistName} ${songName}`);

        return getGeniusUrl(query);
    }
    catch(err)
    {
        console.error(`BetterYTM: Couldn't resolve genius.com URL:`, err);
    }
}

/**
 * @param {string} query
 * @returns {string|null}
 */
async function getGeniusUrl(query)
{
    const result = await (await fetch(`https://api.sv443.net/geniurl/search/top?q=${query}`)).json();

    if(result.error)
    {
        console.error("BetterYTM: Couldn't fetch genius.com URL:", result.message);
        return null;
    }

    return result.url;
}


//#MARKER other


/**
 * Returns the current domain as a constant string representation
 * @throws {Error} If script runs on an unexpected website
 * @returns {Domain}
 */
function getDomain()
{
    const { hostname } = new URL(location.href);

    if(hostname.includes("music.youtube"))
        return "ytm";
    else if(hostname.includes("youtube"))
        return "yt";
    else
        throw new Error("BetterYTM is running on an unexpected website");
}

/**
 * TODO: this is entirely broken now
 * Returns the current video time in seconds
 * @returns {number|null} Returns null if the video time is unavailable
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
 * Inserts `afterNode` as a sibling just after the provided `beforeNode`
 * @param {HTMLElement} beforeNode
 * @param {HTMLElement} afterNode
 * @returns {HTMLElement} Returns the `afterNode`
 */
function insertAfter(beforeNode, afterNode)
{
    beforeNode.parentNode.insertBefore(afterNode, beforeNode.nextSibling);
    return afterNode;
}

/**
 * Adds global CSS style through a &lt;style&gt; element in the document's &lt;head&gt;
 * @param {string} style CSS string
 * @param {string} ref Reference name that is included in the &lt;style&gt;'s ID
 */
function addGlobalStyle(style, ref)
{
    const styleElem = document.createElement("style");
    styleElem.id = `betterytm-${ref}-style`;

    if(styleElem.styleSheet)
        styleElem.styleSheet.cssText = style;
    else
        styleElem.appendChild(document.createTextNode(style));

    document.querySelector("head").appendChild(styleElem);

    dbg && console.log(`BetterYTM: Inserted global style with ref '${ref}':`, styleElem);
}

/**
 * Loads a feature configuration saved persistently, returns an empty object if no feature configuration was saved
 * @returns {Promise<Readonly<typeof defaultFeatures | {}>>}
 */
async function loadFeatureConf()
{
    /** @type {string} */
    const featureConf = await GM.getValue("bytm-featureconf"); // eslint-disable-line no-undef

    return Object.freeze(featureConf ? JSON.parse(featureConf) : {});
}

/**
 * Saves a feature configuration saved persistently
 * @param {typeof defaultFeatures} featureConf
 * @returns {Promise<void>}
 */
function saveFeatureConf(featureConf)
{
    if(!featureConf || typeof featureConf != "object")
        throw new TypeError("Feature config not provided or invalid");

    return GM.setValue("bytm-featureconf", JSON.stringify(featureConf)); // eslint-disable-line no-undef
}

init(); // call init() when script is loaded
})();
