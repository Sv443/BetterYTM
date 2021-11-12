/* eslint-disable no-undef */


// ==UserScript==
// @require       https://openuserjs.org/src/libs/sizzle/GM_config.js
// @grant         GM_getValue
// @grant         GM_setValue
// ==/UserScript==


GM_config.init(
{
    "id": "MyConfig", // The id used for this instance of GM_config
    "title": "ayo",
    "fields": // Fields object
    {
        "name": // This is the id of the field
        {
            "label": "Name", // Appears next to field
            "type": "text", // Makes this setting a text field
            "default": "Sizzle McTwizzle" // Default value if user doesn"t change it
        }
    }
});


GM_config.open();


GM_config.get("name");
