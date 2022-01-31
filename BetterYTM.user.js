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
// @match           https://genius.com/search*
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
// @require         https://cdn.jsdelivr.net/npm/fuse.js/dist/fuse.js
// ==/UserScript==


/* Disclaimer: I am not affiliated with YouTube, Google, Alphabet, Genius or anyone else */
/* C&D this, Susan 🖕 */


(async () => {
"use-strict";


const defaultFeatures = {
    /** Whether arrow keys should skip forwards and backwards by 10 seconds */
    arrowKeySupport: true,
    /** Whether to remove the "Upgrade" / YT Music Premium tab */
    removeUpgradeTab: true,

    /** Whether to add a button or key combination (TODO) to switch between the YT and YTM sites on a video */
    switchBetweenSites: true,
    /** Adds a button to the media controls bar to search for the current song's lyrics on genius.com in a new tab */
    geniusLyrics: true,
    /** This option makes the genius.com lyrics search button from above automatically open the best matching result */
    geniusAutoclickBestResult: true,
    /** Whether to add a border around the best matching result to visualize it before redirecting */
    visualizeBestResult: true,

    /** Set to true to remove the watermark under the YTM logo */
    removeWatermark: false,
};

const featureConf = await loadFeatureConf();

console.log("bytm load", featureConf);

const features = { ...defaultFeatures, ...featureConf };

console.log("bytm save", features);

await saveFeatureConf(features);


/** Set to true to enable debug mode for more output in the JS console */
const dbg = false;


//#MARKER types


/** @typedef {"yt"|"ytm"|"genius"} Domain Constant string representation of which domain this script is currently running on */

/**
 * @typedef {({ search: string, value?: T })} SearchItem An item that can be searched for in a fuse.js fuzzy search
 * @template T If the search string differs from the actual desired value, set the value prop with this template type
 */


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
function onDomLoad()
{
    const domain = getDomain();

    dbg && console.info(`BetterYTM: Initializing features for domain '${domain}'`);

    try
    {
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

        if(["ytm", "yt"].includes(domain))
        {
            if(features.switchBetweenSites)
                initSiteSwitch(domain);
        }

        if(domain === "genius")
        {
            if(features.geniusAutoclickBestResult)
                autoclickGeniusResult();
        }
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

            dbg && console.info(`BetterYTM: Dispatched proxy keydown event: [${evt.code}] -> [${proxyProps.code}]`);
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


    dbg && console.info(`BetterYTM: Added watermark element:`, watermark);
}

//#SECTION genius.com lyrics button

let currentSongTitle = "";
let lyricsButtonAddTries = 0;

/**
 * Adds a genius.com lyrics button to the media controls bar
 */
function addGeniusButton()
{
    const likeContainer = document.querySelector(".middle-controls-buttons ytmusic-like-button-renderer#like-button-renderer");

    if(!likeContainer)
    {
        lyricsButtonAddTries++;
        if(lyricsButtonAddTries < triesLimit)
            return setTimeout(addGeniusButton, 250); // TODO: improve this

        return console.error(`BetterYTM: Couldn't find like buttons to append lyrics button to after ${lyricsButtonAddTries} tries`);
    }

    const songTitleElem = document.querySelector(".content-info-wrapper > yt-formatted-string");


    const gUrl = getGeniusUrl();

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

    dbg && console.info(`BetterYTM: Inserted genius button after ${lyricsButtonAddTries} tries:`, linkElem);

    insertAfter(likeContainer, linkElem);


    currentSongTitle = songTitleElem.title;

    /** @param {MutationRecord[]} mutations */
    const onMutation = (mutations) => {
        mutations.forEach(mut => {
            const newTitle = mut.target.title;

            if(newTitle != currentSongTitle)
            {
                dbg && console.info(`BetterYTM: Song title changed from '${currentSongTitle}' to '${newTitle}'`);

                currentSongTitle = newTitle;

                const lyricsBtn = document.querySelector("#betterytm-lyrics-button");
                lyricsBtn.href = getGeniusUrl();
                lyricsBtn.style.visibility = "initial";
            }
        });
    };

    // since YT and YTM don't reload the page on video change, MutationObserver needs to be used
    const obs = new MutationObserver(onMutation);

    obs.observe(songTitleElem, { attributes: true, attributeFilter: [ "title" ] });
}

/**
 * Returns the genius.com search URL for the current song
 * @returns {string|null}
 */
function getGeniusUrl()
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

        const sn = encodeURIComponent(songName);
        const an = encodeURIComponent(artistName);

        /** Autoclick URL params */
        const acParams = features.geniusAutoclickBestResult ? `&bytm-ac-sn=${sn}&bytm-ac-an=${an}` : "";

        const url = `https://genius.com/search?q=${sn}%20${an}${acParams}`;

        dbg && console.info(`BetterYTM: Resolved genius.com URL for song '${songName}' by '${artistName}': ${url}`);

        return url;
    }
    catch(err)
    {
        console.error(`BetterYTM: Couldn't resolve genius.com URL:`, err);
    }
}

//#SECTION autoclick best genius.com result

/**
 * Automatically clicks the best matching result in a genius.com search
 */
function autoclickGeniusResult()
{
    if(!location.pathname.includes("/search"))
        return;

    const miniCards = document.querySelectorAll(".mini_card-title_and_subtitle");

    if(!miniCards || miniCards.length == 0)
    {
        if(geniusAutoclickTries < Math.round(triesLimit * 2.5)) // tries limit higher due to lower timeout
        {
            geniusAutoclickTries++;
            return setTimeout(autoclickGeniusResult, 100); // TODO: improve this
        }
        else
            return console.error(`BetterYTM: Couldn't find result minicards after ${geniusAutoclickTries} tries`);
    }

    const params = getGeniusAcParams();

    if(!params)
        return console.info("BetterYTM: No query params present, not autoclicking");

    const { songName, artistName } = params;

    const resultNode = findMatchingGeniusResult(songName, artistName);

    if(!resultNode)
        return console.error("BetterYTM: Couldn't find matching result node");

    if(features.visualizeBestResult)
    {
        const grandpaNode = resultNode.parentElement.parentElement;
        grandpaNode.style.border = "2px dashed yellow";
        grandpaNode.style.borderRadius = "7px";
        grandpaNode.style.padding = "7px";
    }

    dbg && console.info(`BetterYTM: Found matching result node after ${geniusAutoclickTries} tries:`, resultNode);

    resultNode.click();
}

let geniusAutoclickTries = 0;

/**
 * Finds a result minicard node that matches the provided song and artist names (case insensitive)
 * @param {string} song
 * @param {string} artist
 * @returns {Element|null}
 */
function findMatchingGeniusResult(song, artist)
{
    const miniCards = document.querySelectorAll(".mini_card-title_and_subtitle");

    dbg && console.info(`BetterYTM: Found ${miniCards.length} minicards in results, searching for match...`);

    /** @type {SearchItem<Element>[]} */
    const searchElems = [];

    for(const card of miniCards)
    {
        if(card.childNodes && card.childNodes.length > 0)
        {
            const title = Array.from(card.childNodes).find(cn => cn.classList && cn.classList.contains("mini_card-title"));
            const subTitle = Array.from(card.childNodes).find(cn => cn.classList && cn.classList.contains("mini_card-subtitle"));

            if(!title || !subTitle || !title.innerText || !subTitle.innerText)
                continue;

            const songName = title.innerText.toLowerCase();
            const artistName = subTitle.innerText.toLowerCase();

            const search = `${songName} ${artistName}`;

            searchElems.push({ search, value: card });
        }
    }

    if(searchElems.length === 0)
        return null;

    try
    {
        const fuseOpts = {
            includeScore: true,
            isCaseSensitive: false,
            findAllMatches: true,
            threshold: 0.7,
            keys: [ "search" ],
        };

        // fuzzy search for best accuracy and reliability
        const fuse = new Fuse(searchElems, fuseOpts); // eslint-disable-line no-undef

        /** @type {({ item: SearchItem<Element>, refIndex: number, score: number })[]} */
        const searchResults = fuse.search(`${song} ${artist}`);

        if(searchResults.length > 0)
        {
            console.log(`BetterYTM: Found ${searchResults.length} results:`, searchResults);

            const resultCard = searchResults[0].item.value;
            const resultText = searchResults[0].item.search;

            console.log(`BetterYTM: Found best result '${resultText}':`, resultCard);

            return resultCard;
        }

        return null;
    }
    catch(err)
    {
        console.error("BetterYTM: Couldn't fuzzy search for matching result:", err);
    }
}

/**
 * Returns autoclick query params if they exist, else returns null
 * @returns {({ songName: string, artistName: string })|null}
 */
function getGeniusAcParams()
{
    const params = location.search.substring(1).split(/&/g);

    if(params.find(p => p.includes("bytm-ac-sn=")) && params.find(p => p.includes("bytm-ac-an=")))
    {
        const songName = decodeURIComponent(params.find(p => p.includes("bytm-ac-sn=")).split(/=/)[1]);
        const artistName = decodeURIComponent(params.find(p => p.includes("bytm-ac-an=")).split(/=/)[1]);

        return { songName, artistName };
    }

    return null;
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
    else if(hostname.includes("genius"))
        return "genius";
    else
        throw new Error("BetterYTM is running on an unexpected website");
}

/**
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

    dbg && console.info(`BetterYTM: Inserted global style with ref '${ref}':`, styleElem);
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
