// ==UserScript==
// @name            BetterYTM
// @namespace       https://github.com/Sv443/BetterYTM#readme
// @version         0.1.0
// @description:en  Improvements for YouTube Music
// @description:de  Verbesserungen für YouTube Music
// @author          Sv443
// @license         MIT
// @match           https://music.youtube.com/watch*
// @icon            https://www.google.com/s2/favicons?domain=music.youtube.com
// @grant           none
// @run-at          document-start
// ==/UserScript==


/**
 * This is where you can enable or disable features  
 * If this userscript ever becomes something I might add like a menu to toggle these
 */
 const features = Object.freeze({
    /** Whether arrow keys should skip forwards and backwards by 10 seconds */
    arrowKeySupport: true,
    /** The theme color - accepts any CSS color value - default is "#ff0000" */
    themeColor: "#0f0",
});




const info = Object.freeze({
    name: GM.info.script.name, // eslint-disable-line no-undef
    version: GM.info.script.version, // eslint-disable-line no-undef
    namespace: GM.info.script.namespace, // eslint-disable-line no-undef
});

//#MARKER init

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
    document.addEventListener("keydown", onKeyDown);

    if(features.themeColor != "#f00" && features.themeColor != "#ff0000")
        applyTheme();
}

/**
 * Called when the user presses keys
 * @param {KeyboardEvent} evt
 */
function onKeyDown(evt)
{
    if(features.arrowKeySupport && ["ArrowLeft", "ArrowRight"].includes(evt.code))
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

/**
 * Applies the set theme color
 */
function applyTheme()
{
    const formatRegex = /^(\d{3}){1,2}$/;

    const color = features.themeColor.match(formatRegex) ? `#${color}` : color;

    /**
     * A list of changes to be made to the page to apply the theme color
     */
    const themeChanges = [
        {
            elem: document.querySelector("#progressContainer > #primaryProgress"),
            prop: "background",
            important: false,
        },
        {
            elem: document.querySelector(),
            prop: "",
            important: false,
        },
        {
            elem: document.querySelector(),
            prop: "",
            important: false,
        },
    ];

    themeChanges.forEach(change => {
        if(change.elem)
        {
            const value = change.important === true ? `${color} !important` : color;

            change.elem.style[change.prop] = value;
        }
    });
}


(() => init())();