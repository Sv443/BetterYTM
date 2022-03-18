// ==UserScript==
// @name            BetterYTM
// @namespace       https://github.com/Sv443/BetterYTM#readme
// @version         1.0.0
// @license         MIT
// @author          Sv443
// @copyright       Sv443 <contact@sv443.net> (https://github.com/Sv443)
// @description     Improvements for YouTube Music
// @description:de  Verbesserungen für YouTube Music
// @match           https://music.youtube.com/*
// @match           https://www.youtube.com/*
// @icon            https://raw.githubusercontent.com/Sv443/BetterYTM/main/resources/icon/v2.1_200.png
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


"use-strict";

(async () => {
/** Set to true to enable debug mode for more output in the JS console */
const dbg = true;

// const branch = "main";
const branch = "develop"; // #DEBUG#

const featInfo = {
    arrowKeySupport: {
        desc: "Arrow keys should skip forwards and backwards by 10 seconds",
        type: "toggle",
        default: true,
    },
    removeUpgradeTab: {
        desc: "Remove the \"Upgrade\" / YT Music Premium tab",
        type: "toggle",
        default: true,
    },
    switchBetweenSites: {
        desc: "Add F9 as a hotkey to switch between the YT and YTM sites on a video / song",
        type: "toggle",
        default: true,
    },
    geniusLyrics: {
        desc: "Add a button to the media controls bar to search for the current song's lyrics on genius.com in a new tab",
        type: "toggle",
        default: true,
    },
    lyricsButtonsOnSongQueue: {
        desc: "TODO: Add a lyrics button to each song in the queue (\"up next\" tab)",
        type: "toggle",
        default: true,
    },
    volumeSliderSize: {
        desc: "Set the width of the volume slider",
        type: "number",
        min: 10,
        max: 1000,
        default: 175,
    },
    volumeSliderStep: {
        desc: "The smaller this number, the finer the volume control",
        type: "slider",
        min: 1,
        max: 20,
        default: 2,
    },
    removeWatermark: {
        desc: "Remove the watermark under the YTM logo",
        type: "toggle",
        default: false,
    },
};

/** @type {FeatureConfig} */
const defaultFeatures = Object.keys(featInfo).reduce((acc, key) => {
    acc[key] = featInfo[key].default;
    return acc;
}, {});

const featureConf = await loadFeatureConf();

console.log("bytm load", featureConf);

const features = { ...defaultFeatures, ...featureConf };
// const features = { ...defaultFeatures };

console.log("bytm save", features);

await saveFeatureConf(features);


//#MARKER types


/** @typedef {"yt"|"ytm"} Domain Constant string representation of which domain this script is currently running on */

/** @typedef {typeof defaultFeatures} FeatureConfig */


//#MARKER init


/** Specifies the hard limit for repetitive tasks */
const triesLimit = 40;

/** Base URL of geniURL */
const geniUrlBase = "https://api.sv443.net/geniurl";

/** GeniURL endpoint that gives song metadata when provided with a `?q` parameter - [more info](https://api.sv443.net/geniurl) */
const geniURLSearchTopUrl = `${geniUrlBase}/search/top`;

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
        console.log(`Powered by lots of ambition and my song metadata API called geniURL: ${geniUrlBase}`);

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

            if(typeof features.volumeSliderSize === "number")
                setVolSliderSize(features.volumeSliderSize);

            setVolSliderStep();
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
    menuContainer.style.borderRadius = "15px";


    // title
    const titleCont = document.createElement("div");
    titleCont.style.padding = "8px 20px";
    titleCont.style.display = "flex";
    titleCont.style.justifyContent = "space-between";
    titleCont.id = "betterytm-menu-titlecont";

    const titleElem = document.createElement("h2");
    titleElem.id = "betterytm-menu-title";
    titleElem.innerText = "BetterYTM - Configuration";

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

        const linkElem = document.createElement("img");
        linkElem.className = "betterytm-menu-img";
        linkElem.src = imgSrc;

        anchorElem.appendChild(linkElem);
        linksCont.appendChild(anchorElem);
    };

    addLink(`https://raw.githubusercontent.com/Sv443/BetterYTM/${branch}/resources/external/github.png`, info.namespace, `${info.name} on GitHub`);
    addLink(`https://raw.githubusercontent.com/Sv443/BetterYTM/${branch}/resources/external/greasyfork.png`, "https://greasyfork.org/xyz", `${info.name} on GreasyFork`);

    const closeElem = document.createElement("img");
    closeElem.id = "betterytm-menu-close";
    closeElem.src = `https://raw.githubusercontent.com/Sv443/BetterYTM/${branch}/resources/icon/close.png`;
    closeElem.title = "Click to close the menu";
    closeElem.style.marginLeft = "20px";
    closeElem.addEventListener("click", closeMenu);

    linksCont.appendChild(closeElem);

    titleCont.appendChild(titleElem);
    titleCont.appendChild(linksCont);


    // TODO: features
    const featuresCont = document.createElement("div");
    featuresCont.id = "betterytm-menu-opts";
    featuresCont.style.display = "flex";
    featuresCont.style.flexDirection = "column";

    /**
     * Gets called whenever the feature config is changed
     * @param {keyof typeof defaultFeatures} key
     * @param {number|boolean} initialVal
     * @param {number|boolean} newVal
     */
    const confChanged = async (key, initialVal, newVal) => {
        dbg && console.info(`BetterYTM: Feature config changed, key '${key}' from value '${initialVal}' to '${newVal}'`);

        /** @type {FeatureConfig} */
        const featConf = {...(await loadFeatureConf())};

        featConf[key] = newVal;

        await saveFeatureConf(featConf);

        dbg && console.log("BetterYTM: Saved feature config changes");

        console.log("#DEBUG", await GM.getValue("bytm-config")); // eslint-disable-line no-undef
    };

    const featKeys = Object.keys(features);
    for(const key of featKeys)
    {
        const ftInfo = featInfo[key];

        if(!ftInfo)
            continue;

        const { desc, type, default: ftDef } = ftInfo;
        const val = features[key];

        const initialVal = val || ftDef;

        const ftConfElem = document.createElement("div");
        ftConfElem.id = `bytm-ftconf-${key}`;
        ftConfElem.style.display = "flex";
        ftConfElem.style.flexDirection = "row";
        ftConfElem.style.justifyContent = "space-between";
        ftConfElem.style.padding = "8px 20px";

        {
            const textElem = document.createElement("span");
            textElem.style.display = "inline-block";
            textElem.style.fontSize = "16px";
            textElem.innerText = desc;

            ftConfElem.appendChild(textElem);
        }

        {
            let inputType;
            switch(type)
            {
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

            const inputElemId = `bytm-ftconf-${key}-input`;

            const ctrlElem = document.createElement("span");
            ctrlElem.style.display = "inline-block";
            ctrlElem.style.whiteSpace = "nowrap";

            const inputElem = document.createElement("input");
            inputElem.id = inputElemId;
            inputElem.style.marginRight = "20px";
            inputElem.type = inputType;
            inputElem.value = initialVal;

            if(ftInfo.min && ftInfo.max)
            {
                inputElem.min = ftInfo.min;
                inputElem.max = ftInfo.max;
            }

            if(type === "toggle")
                inputElem.checked = initialVal;

            const fmtVal = v => typeof v === "number" ? `${v}px` : v;

            let labelElem;
            if(type === "slider")
            {
                labelElem = document.createElement("label");
                labelElem.style.marginRight = "20px";
                labelElem.style.fontSize = "16px";
                labelElem["for"] = inputElemId;
                labelElem.innerText = fmtVal(initialVal);

                inputElem.addEventListener("change", () => labelElem.innerText = fmtVal(parseInt(inputElem.value)));
            }

            inputElem.addEventListener("change", ({ currentTarget }) => {
                let v = parseInt(currentTarget.value);
                if(isNaN(v))
                    v = currentTarget.value;
                confChanged(key, initialVal, (type !== "toggle" ? v : currentTarget.checked));
            });

            const resetElem = document.createElement("button");
            resetElem.innerText = "Reset";
            resetElem.addEventListener("click", () => {
                inputElem[type !== "toggle" ? "value" : "checked"] = ftDef;

                if(labelElem)
                    labelElem.innerText = fmtVal(parseInt(inputElem.value));

                confChanged(key, initialVal, ftDef);
            });

            labelElem && ctrlElem.appendChild(labelElem);
            ctrlElem.appendChild(inputElem);
            ctrlElem.appendChild(resetElem);

            ftConfElem.appendChild(ctrlElem);
        }

        featuresCont.appendChild(ftConfElem);
    }


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

    /* #DEBUG */ openMenu();

    addGlobalStyle(menuStyle, "menu");
}

function closeMenu()
{
    const menuBg = document.querySelector("#betterytm-menu-bg");

    menuBg.style.visibility = "hidden";
    menuBg.style.display = "none";
}

function openMenu()
{
    const menuBg = document.querySelector("#betterytm-menu-bg");

    menuBg.style.visibility = "visible";
    menuBg.style.display = "block";
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
    linkElem.style.display = gUrl ? "initial" : "none";

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

    const onMutation = async (/**@type {MutationRecord[]}*/ mutations) => {
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
                lyricsBtn.style.display = "initial";
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
 * @returns {Promise<string|null>}
 */
async function getCurrentGeniusUrl()
{
    try
    {
        // In videos the video title contains both artist and song title, in "regular" YTM songs, the video title only contains the song title
        const isVideo = typeof document.querySelector("ytmusic-player").getAttribute("video-mode_") === "string";

        const songTitleElem = document.querySelector(".content-info-wrapper > yt-formatted-string");
        const songMetaElem = document.querySelector("span.subtitle > yt-formatted-string:first-child");

        if(!songTitleElem || !songMetaElem || !songTitleElem.title)
            return null;

        /** @param {string} songName */
        const sanitizeSongName = (songName) => {
            const songNameRegex = /\((\w|\d|\s|[.,\-_&/])+\)/gmi;
            let sanitized;

            if(songName.match(songNameRegex))
                sanitized = songName.replace(songNameRegex, ""); // should hopefully trim right after the song name

            return (sanitized ?? songName).trim();
        };

        /** @param {string} songMeta */
        const splitArtist = (songMeta) => {
            songMeta = songMeta.split(/\s*\u2022\s*/gmiu)[0]; // split at bullet (&bull; / •) character

            if(songMeta.match(/&/))
                songMeta = songMeta.split(/\s*&\s*/gm)[0];

            if(songMeta.match(/,/))
                songMeta = songMeta.split(/,\s*/gm)[0];

            return songMeta.trim();
        }

        const songNameRaw = songTitleElem.title;
        const songName = sanitizeSongName(songNameRaw);

        const artistName = splitArtist(songMetaElem.title);

        const defQuery = encodeURIComponent(`${artistName} ${songName}`);

        /** Use when the current song is not a "real YTM song" with a static background, but rather a music video */
        const getGeniusUrlVideo = async () => {
            if(!songName.includes("-")) // for some fucking reason some music videos have YTM-like song title and artist separation, some don't
                return await getGeniusUrl(defQuery);

            const query = encodeURIComponent(songName.split("-").map(v => v.trim()).join(" "));

            return await getGeniusUrl(query);
        };

        // TODO: artist might need further splitting before comma or ampersand

        const url = isVideo ? await getGeniusUrlVideo() : (await getGeniusUrl(defQuery) ?? await getGeniusUrlVideo());

        return url;
    }
    catch(err)
    {
        console.error(`BetterYTM: Couldn't resolve genius.com URL:`, err);
        return null;
    }
}

/**
 * @param {string} query
 * @returns {Promise<string|undefined>}
 */
async function getGeniusUrl(query)
{
    try
    {
        dbg && console.log(`BetterYTM: Fetching genius URL from geniURL API for query '${query}'`);
        const result = await (await fetch(`${geniURLSearchTopUrl}?q=${query}`)).json();

        if(result.error)
        {
            console.error("BetterYTM: Couldn't fetch genius.com URL:", result.message);
            return undefined;
        }

        return result?.url;
    }
    catch(err)
    {
        console.error("Couldn't get genius URL due to error:", err);
        return undefined;
    }
}

// #SECTION volume slider

/**
 * Sets the volume slider to a set size
 */
function setVolSliderSize()
{
    const { volumeSliderSize: size } = features;

    if(typeof size !== "number" || isNaN(parseInt(size)))
        return;

const style = `\
.volume-slider.ytmusic-player-bar, .expand-volume-slider.ytmusic-player-bar {
    width: ${size}px !important;
}`;

    addGlobalStyle(style, "vol_slider_size");
}

/**
 * Sets the `step` attribute of the volume slider
 */
function setVolSliderStep()
{
    const sliderElem = document.querySelector("tp-yt-paper-slider#volume-slider");

    sliderElem.setAttribute("step", features.volumeSliderStep);
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
 * Adds global CSS style through a `<style>` element in the document's `<head>`
 * @param {string} style CSS string
 * @param {string} [ref] Reference name that is included in the `<style>`'s ID - defaults to a random number if left undefined
 */
function addGlobalStyle(style, ref)
{
    if(typeof ref !== "string" || ref.length === 0)
        ref = String(Math.floor(Math.random() * 1000));

    const styleElem = document.createElement("style");
    styleElem.id = `bytm-style-${ref}`;

    if(styleElem.styleSheet)
        styleElem.styleSheet.cssText = style;
    else
        styleElem.appendChild(document.createTextNode(style));

    document.querySelector("head").appendChild(styleElem);

    dbg && console.log(`BetterYTM: Inserted global style with ref '${ref}':`, styleElem);
}

//#SECTION feature config

/**
 * Loads a feature configuration saved persistently, returns an empty object if no feature configuration was saved
 * @returns {Promise<Readonly<FeatureConfig | {}>>}
 */
async function loadFeatureConf()
{
    const defConf = Object.freeze({...defaultFeatures});

    try
    {
        /** @type {string} */
        const featureConf = await GM.getValue("bytm-config"); // eslint-disable-line no-undef

        if(!featureConf)
        {
            await setDefaultFeatConf();
            return defConf;
        }

        return Object.freeze(featureConf ? JSON.parse(featureConf) : {});
    }
    catch(err)
    {
        await setDefaultFeatConf();
        return defConf;
    }
}

/**
 * Saves a feature configuration saved persistently
 * @param {FeatureConfig} featureConf
 * @returns {Promise<void>}
 */
function saveFeatureConf(featureConf)
{
    if(!featureConf || typeof featureConf != "object")
        throw new TypeError("Feature config not provided or invalid");

    return GM.setValue("bytm-config", JSON.stringify(featureConf)); // eslint-disable-line no-undef
}

/**
 * @returns {Promise<void>}
 */
function setDefaultFeatConf()
{
    return GM.setValue("bytm-config", JSON.stringify(defaultFeatures)); // eslint-disable-line no-undef
}

init(); // call init() when script is loaded
})();
