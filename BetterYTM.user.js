// ==UserScript==
// @name            BetterYTM
// @homepageURL     https://github.com/Sv443/BetterYTM#readme
// @namespace       https://github.com/Sv443/BetterYTM
// @version         1.0.0
// @description     Improvements for YouTube Music
// @description:de  Verbesserungen für YouTube Music
// @license         MIT
// @author          Sv443
// @copyright       Sv443 <contact@sv443.net> (https://github.com/Sv443)
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
/* C&D this 🖕 */


"use-strict";

(async () => {
/** Set to true to enable debug mode for more output in the JS console */
const dbg = true;

// const branch = "main";
const branch = "develop"; // #DEBUG

/** Contains all possible features with their default values and other config */
const featInfo = {
    arrowKeySupport: {
        desc: "Arrow keys skip forwards and backwards by 10 seconds",
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
        desc: "Add a button to the media controls to open the current song's lyrics on genius.com in a new tab",
        type: "toggle",
        default: true,
    },
    lyricsButtonsOnSongQueue: {
        desc: "TODO: Add a lyrics button to each song in the queue (\"up next\" tab)",
        type: "toggle",
        default: true,
    },
    volumeSliderSize: {
        desc: "The width of the volume slider in pixels",
        type: "number",
        min: 10,
        max: 1000,
        step: 5,
        default: 160,
    },
    volumeSliderStep: {
        desc: "Volume slider sensitivity - the smaller this number, the finer the volume control",
        type: "slider",
        min: 1,
        max: 20,
        default: 2,
    },
    watermarkEnabled: {
        desc: "Show a BetterYTM watermark under the YTM logo",
        type: "toggle",
        default: true,
    },
};

/** @type {FeatureConfig} */
const defaultFeatures = Object.keys(featInfo).reduce((acc, key) => {
    acc[key] = featInfo[key].default;
    return acc;
}, {});

const featureConf = await loadFeatureConf();

// console.log("bytm load", featureConf);

const features = { ...defaultFeatures, ...featureConf };
// const features = { ...defaultFeatures };

// console.log("bytm save", features);

await saveFeatureConf(features);


//#MARKER types


/** @typedef {"yt"|"ytm"} Domain Constant string representation of which domain this script is currently running on */

/** @typedef {typeof defaultFeatures} FeatureConfig */


//#MARKER init


/** Specifies the hard limit for repetitive tasks */
const triesLimit = 50;
/** Specifies the interval for repetitive tasks */
const triesInterval = 150;

/** Base URL of geniURL */
const geniUrlBase = "https://api.sv443.net/geniurl";

/** GeniURL endpoint that gives song metadata when provided with a `?q` or `?artist` and `?song` parameter - [more info](https://api.sv443.net/geniurl) */
const geniURLSearchTopUrl = `${geniUrlBase}/search/top`;

const info = Object.freeze({
    name: GM.info.script.name,
    version: GM.info.script.version,
    namespace: GM.info.script.namespace,
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

            if(features.watermarkEnabled)
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
        
        const imgElem = document.createElement("img");
        imgElem.className = "betterytm-menu-img";
        imgElem.src = imgSrc;
        imgElem.style.width = "32px";
        imgElem.style.height = "32px";

        anchorElem.appendChild(imgElem);
        linksCont.appendChild(anchorElem);
    };

    addLink(`https://raw.githubusercontent.com/Sv443/BetterYTM/${branch}/resources/external/github.png`, info.namespace, `${info.name} on GitHub`);
    addLink(`https://raw.githubusercontent.com/Sv443/BetterYTM/${branch}/resources/external/greasyfork.png`, "https://greasyfork.org/xyz", `${info.name} on GreasyFork`);

    const closeElem = document.createElement("img");
    closeElem.id = "betterytm-menu-close";
    closeElem.src = `https://raw.githubusercontent.com/Sv443/BetterYTM/${branch}/resources/icon/close.png`;
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

        dbg && console.log("#DEBUG", await GM.getValue("betterytm-config"));
    };

    const featKeys = Object.keys(features);
    for(const key of featKeys)
    {
        const ftInfo = featInfo[key];

        if(!ftInfo)
            continue;

        const { desc, type, default: ftDef, step } = ftInfo;
        const val = features[key];

        const initialVal = val || ftDef;

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

            const inputElemId = `betterytm-ftconf-${key}-input`;

            const ctrlElem = document.createElement("span");
            ctrlElem.style.display = "inline-block";
            ctrlElem.style.whiteSpace = "nowrap";

            const inputElem = document.createElement("input");
            inputElem.id = inputElemId;
            inputElem.style.marginRight = "37px";
            if(type === "toggle") inputElem.style.marginLeft = "5px";
            inputElem.type = inputType;
            inputElem.value = initialVal;
            if(type === "number" && step) inputElem.step = step;

            if(ftInfo.min && ftInfo.max)
            {
                inputElem.min = ftInfo.min;
                inputElem.max = ftInfo.max;
            }

            if(type === "toggle")
                inputElem.checked = initialVal;

            const fmtVal = v => String(v);
            const toggleLabelText = toggled => toggled ? "On" : "Off";

            let labelElem;
            if(type === "slider")
            {
                labelElem = document.createElement("label");
                labelElem.classList.add("betterytm-ftconf-label");
                labelElem.style.marginRight = "20px";
                labelElem.style.fontSize = "16px";
                labelElem.htmlFor = inputElemId;
                labelElem.innerText = fmtVal(initialVal);

                inputElem.addEventListener("change", () => labelElem.innerText = fmtVal(parseInt(inputElem.value)));
            }
            else if(type === "toggle")
            {
                labelElem = document.createElement("label");
                labelElem.classList.add("betterytm-ftconf-label");
                labelElem.style.paddingLeft = "10px";
                labelElem.style.paddingRight = "5px";
                labelElem.style.fontSize = "16px";
                labelElem.htmlFor = inputElemId;
                labelElem.innerText = toggleLabelText(initialVal);

                inputElem.addEventListener("change", () => labelElem.innerText = toggleLabelText(inputElem.checked));
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
                {
                    if(type === "toggle")
                        labelElem.innerText = toggleLabelText(inputElem.checked);
                    else
                        labelElem.innerText = fmtVal(parseInt(inputElem.value));
                }

                confChanged(key, initialVal, ftDef);
            });

            labelElem && ctrlElem.appendChild(labelElem);
            ctrlElem.appendChild(inputElem);
            ctrlElem.appendChild(resetElem);

            ftConfElem.appendChild(ctrlElem);
        }

        featuresCont.appendChild(ftConfElem);
    }

    const footerElem = document.createElement("div");
    footerElem.style.marginTop = "20px";
    footerElem.style.fontSize = "17px";
    footerElem.style.textDecoration = "underline";
    footerElem.style.padding = "8px 20px";
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
    versionElem.innerText = `v${info.version}`;

    versionCont.appendChild(versionElem);
    featuresCont.appendChild(versionCont);

    menuContainer.appendChild(menuBody);
    menuContainer.appendChild(versionCont);

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
        height: auto;
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

    /*.betterytm-menu-img {

    }*/

    #betterytm-menu-close {
        cursor: pointer;
    }

    .betterytm-ftconf-label {
        user-select: none;
    }
    `;

    dbg && console.log("BetterYTM: Added menu elem:", backgroundElem);

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
        setTimeout(removeUpgradeTab, triesInterval); // TODO: improve this
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
    const watermark = document.createElement("span");
    watermark.id = "betterytm-watermark";
    watermark.className = "style-scope ytmusic-nav-bar";
    watermark.innerText = info.name;
    watermark.title = "Open menu";

    watermark.addEventListener("click", () => openMenu());


    const style = `\
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
            return setTimeout(addMediaCtrlGeniusBtn, triesInterval); // TODO: improve this

        return console.error(`BetterYTM: Couldn't find element to append lyrics buttons to after ${mcLyricsButtonAddTries} tries`);
    }

    const songTitleElem = document.querySelector(".content-info-wrapper > yt-formatted-string");


    const gUrl = await getCurrentGeniusUrl();

    const linkElem = document.createElement("a");
    linkElem.id = "betterytm-lyrics-button";
    linkElem.className = "ytmusic-player-bar";
    linkElem.title = gUrl ? "Click to open this song's lyrics in a new tab" : "Loading...";
    if(gUrl)
        linkElem.href = gUrl;
    linkElem.target = "_blank";
    linkElem.rel = "noopener noreferrer";
    linkElem.style.visibility = gUrl ? "initial" : "hidden";
    linkElem.style.display = gUrl ? "inline-flex" : "none";

    const style = `\
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

            if(newTitle != mcCurrentSongTitle && newTitle.length > 0)
            {
                const lyricsBtn = document.querySelector("#betterytm-lyrics-button");

                dbg && console.log(`BetterYTM: Song title changed from '${mcCurrentSongTitle}' to '${newTitle}'`);

                lyricsBtn.style.cursor = "wait";
                lyricsBtn.style.pointerEvents = "none";

                mcCurrentSongTitle = newTitle;

                const url = await getCurrentGeniusUrl(); // can take a second or two
                if(url)
                {
                    lyricsBtn.href = url;

                    lyricsBtn.title = "Click to open this song's lyrics in a new tab";
                    lyricsBtn.style.cursor = "pointer";
                    lyricsBtn.style.visibility = "initial";
                    lyricsBtn.style.display = "inline-flex";
                    lyricsBtn.style.pointerEvents = "initial";
                }
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
            const parensRegex = /\(.+\)/gmi;
            const squareParensRegex = /\[.+\]/gmi;

            // trim right after the song name:
            let sanitized = songName
                .replace(parensRegex, "")
                .replace(squareParensRegex, "");

            return sanitized.trim();
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

        /** Use when the current song is not a "real YTM song" with a static background, but rather a music video */
        const getGeniusUrlVideo = async () => {
            if(!songName.includes("-")) // for some fucking reason some music videos have YTM-like song title and artist separation, some don't
                return await getGeniusUrl(artistName, songName);

            const [artist, ...rest] = songName.split("-").map(v => v.trim());

            return await getGeniusUrl(artist, rest.join(" "));
        };

        // TODO: artist might need further splitting before comma or ampersand

        const url = isVideo ? await getGeniusUrlVideo() : (await getGeniusUrl(artistName, songName) ?? await getGeniusUrlVideo());

        return url;
    }
    catch(err)
    {
        console.error(`BetterYTM: Couldn't resolve genius.com URL:`, err);
        return null;
    }
}

/**
 * @param {string} artist
 * @param {string} song
 * @returns {Promise<string|undefined>}
 */
async function getGeniusUrl(artist, song)
{
    try
    {
        const fetchUrl = `${geniURLSearchTopUrl}?artist=${encodeURIComponent(artist)}&song=${encodeURIComponent(song)}`;

        dbg && console.log(`BetterYTM: Requesting URL from geniURL at '${fetchUrl}'`);

        const result = await (await fetch(fetchUrl)).json();

        if(result.error)
        {
            console.error("BetterYTM: Couldn't fetch genius.com URL:", result.message);
            return undefined;
        }

        const url = result.url;

        dbg && console.info(`BetterYTM: Found genius URL: ${url}`);

        return url;
    }
    catch(err)
    {
        console.error("BetterYTM: Couldn't get genius URL due to error:", err);
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
    styleElem.id = `betterytm-style-${ref}`;

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
        const featureConf = await GM.getValue("betterytm-config");

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

    return GM.setValue("betterytm-config", JSON.stringify(featureConf));
}

/** @returns {Promise<void>} */
function setDefaultFeatConf()
{
    return GM.setValue("betterytm-config", JSON.stringify(defaultFeatures));
}

init(); // call init() when script is loaded
})();
