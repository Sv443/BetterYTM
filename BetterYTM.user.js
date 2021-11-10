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
// @grant           none
// @run-at          document-start
// @connect         self
// @connect         *.youtube.com
// @downloadURL     https://raw.githubusercontent.com/Sv443/BetterYTM/main/BetterYTM.user.js
// @updateURL       https://raw.githubusercontent.com/Sv443/BetterYTM/main/BetterYTM.user.js
// ==/UserScript==

/* Disclaimer: I am not affiliated with YouTube, Google, Alphabet or anyone else */
/* C&D this Susan 🖕 */



/*
 █▀▀▀█ ▄▄▄ █   █    ▀  ▄▄▄  ▄▄▄▄ ▄▄▄
 ▀▀▬▄▄ █▄█ █▀  █▀  ▀█  █  █ █ ▄▄ █▄▄ ▀
 █▄▄▄█ █▄▄ █▄▄ █▄▄ ▄█▄ █  █ █▄▄█ ▄▄█ ▄
*/

/**
 * This is where you can enable or disable features  
 * If this userscript ever becomes something I might add like a menu to toggle these
 */
 const features = Object.freeze({
    /** Whether arrow keys should skip forwards and backwards by 10 seconds */
    arrowKeySupport: true,
    /** Whether to add a button or key combination (TODO) to switch between the YouTube and YouTube Music pages */
    switchBetweenSites: true,

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
    console.log(`${info.name} v${info.version} - ${info.namespace}`);

    document.addEventListener("DOMContentLoaded", onDomLoad);
}

//#MARKER events

/**
 * Called when the DOM has finished loading
 */
function onDomLoad()
{
    const domain = getDomain();

    if(features.arrowKeySupport && domain === "ytm")
        document.addEventListener("keydown", onKeyDown);

    if(features.switchBetweenSites)
        initSiteSwitch(domain);

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
        switch(evt.code)
        {
            case "ArrowLeft":
                // ripped this stuff from the console, most of these are probably unnecessary but this was finnicky af and I am sick and tired of trial and error
                document.body.dispatchEvent(new KeyboardEvent("keydown", {
                    altKey: false,
                    bubbles: true,
                    cancelBubble: false,
                    cancelable: true,
                    charCode: 0,
                    code: "KeyH",
                    composed: true,
                    ctrlKey: false,
                    currentTarget: null,
                    defaultPrevented: evt.defaultPrevented,
                    explicitOriginalTarget: document.body,
                    isTrusted: true,
                    key: "h",
                    keyCode: 72,
                    metaKey: false,
                    originalTarget: document.body,
                    repeat: false,
                    shiftKey: false,
                    srcElement: document.body,
                    target: document.body,
                    type: "keydown",
                    view: window,
                    which: 72,
                }));

                break;
            case "ArrowRight":
                // ripped this stuff from the console, most of these are probably unnecessary but this was finnicky af and I am sick and tired of trial and error
                document.body.dispatchEvent(new KeyboardEvent("keydown", {
                    altKey: false,
                    bubbles: true,
                    cancelBubble: false,
                    cancelable: true,
                    charCode: 0,
                    code: "KeyL",
                    composed: true,
                    ctrlKey: false,
                    currentTarget: null,
                    defaultPrevented: evt.defaultPrevented,
                    explicitOriginalTarget: document.body,
                    isTrusted: true,
                    key: "l",
                    keyCode: 76,
                    metaKey: false,
                    originalTarget: document.body,
                    repeat: false,
                    shiftKey: false,
                    srcElement: document.body,
                    target: document.body,
                    type: "keydown",
                    view: window,
                    which: 76,
                }));

                break;
            default:
                console.warn("Unknown key", evt.code);

                break;
        }
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
    // - create button element
    // - bind event to switch href
    // 
    // extra features:
    // - keep video time

    const button = document.createElement("button");

    if(domain === "yt")
    {
        button.on("click", switchSite(domain));
    }
    else if(domain === "ytm")
    {
        button.on("click", switchSite(domain));
    }
}

/**
 * Switches to the other site (between YT and YTM)
 * @param {Domain} domain
 */
function switchSite(domain)
{
    let subdomain;
    if(domain === "yt")
        subdomain = "music";
    else if(domain === "ytm")
        subdomain = "www";

    if(!subdomain)
        throw new TypeError(`Unrecognized domain '${domain}'`);

    const { pathname, search } = new URL(location.href);

    const url = `https://${subdomain}.youtube.com${pathname}${search}`;


    console.info(`BetterYTM - switching to domain '${domain}' at ${url}`);

    location.href = url;
}

//# SECTION theme

// /**
//  * Applies the set theme color
//  */
// function applyTheme()
// {
//     const formatRegex = /^(\d{3}){1,2}$/;

//     const color = features.themeColor.match(formatRegex) ? `#${color}` : color;

//     /**
//      * A list of changes to be made to the page to apply the theme color
//      */
//     const themeChanges = [
//         {
//             elem: document.querySelector("#progressContainer > #primaryProgress"),
//             prop: "background",
//             important: false,
//         },
//         {
//             elem: document.querySelector(),
//             prop: "",
//             important: false,
//         },
//         {
//             elem: document.querySelector(),
//             prop: "",
//             important: false,
//         },
//     ];

//     themeChanges.forEach(change => {
//         if(change.elem)
//         {
//             const value = change.important === true ? `${color} !important` : color;

//             change.elem.style[change.prop] = value;
//         }
//     });
// }

//#MARKER other

/**
 * Returns the current domain as a string representation
 * @returns {Domain}
 */
function getDomain()
{
    // TODO: maybe improve this
    return location.href.toLowerCase().includes("music.youtube") ? "ytm" : "yt"; // other cases are caught by `@match`es above
}



(() => init())(); // call init() when file is loaded
