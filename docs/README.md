# BetterYTM API Docs
The BetterYTM API is a collection of event emitters, functions, classes and constants that can be accessed by any script with unfiltered `window` access (e.g. userscripts via `unsafeWindow`, or browser extensions with the right permissions).  
It is designed to be used by plugins, extensions, and even unrelated scripts, to ease interaction with the YouTube Music™ web app.  
This document and the ones it references will walk you through the API and its usage.  

<br>

## Table of Contents
- [**Getting Started**](#getting-started)
  - [Background Knowledge](#background-knowledge)
  - [Interaction Summary](#interaction-summary)
  - [**Plugin Template**](#plugin-template)
  - [**TODO: Creating a Simple Plugin**](#creating-a-simple-plugin)
  - [**Most Useful API Features**](#most-useful-api-features)
- [**TODO: API Reference**](#api-reference)
  - [**Full Feature Overview**](#full-feature-overview)
- [**TODO: Contributing**](#contributing)
  - [TODO: Reporting Issues](#reporting-issues)
  - [TODO: Contributing Guide](#contributing-guide)

<br>

## Getting Started
This section will walk you through the basics of using the BetterYTM API.  
1. Firstly, you will get the most out of this guide by [bringing some background knowledge.](#background-knowledge) This is not to discourage you, just know there are simply some things that will be harder to understand without the recommended knowledge.
2. Next, [take a look at the interaction summary](#interaction-summary) to get an overview of how the API works and what it can do.
3. Now you can start making your own plugins by making one from scratch, or [starting with the official plugin template.](#plugin-template)
  
- Take a look at [the most useful API features](#most-useful-api-features) to get a quick overview of the features I deemed commonly used in development or just overall useful.
- [The API Reference](#api-reference) will give you a detailed overview of all the API features, including code examples for each.

<br>

### Background Knowledge
**This guide assumes you're familiar with:**  
- Intermediate frontend JavaScript knowledge (DOM API, events, Promise API, etc.)
- Understanding JS types and being able to read and decipher TypeScript type declarations
- [Semantic versioning](https://semver.org/) for ensuring consistent compatibility and to emphasize breaking changes
- Basic knowledge of userscripts (I recommend starting with the [GreaseSpot wiki](https://wiki.greasespot.net/Greasemonkey_Manual) and [Violentmonkey guide](https://violentmonkey.github.io/guide/creating-a-userscript/))
- Reading the file [`license-for-plugins.txt`](./license-for-plugins.txt) to understand the licensing conditions for plugins
  
**The following would help a lot, but aren't strict prerequisites:**
- Intermediate TypeScript (for type safety and better autocomplete)
- Parts of the source code of BetterYTM.  
  I recommend looking at the files `src/interface.ts`, `src/types.ts`, `src/siteEvents.ts` and `src/observers.ts`, they contain the bulk of the API-relevant code, or can at least point you to the places where the API features are implemented.
- Being on the lookout for pull requests, since they will list new features and changes to the interface that you probably want to prepare for
- This document, as it contains most of the information you need to know about the BetterYTM interface, or at least points you to the places where you can find the actual information
- The [official plugin template](https://github.com/Sv443/BetterYTM-Plugin-Template) for a quick start with a plugin
- The fact you can [join my Discord server](https://dc.sv443.net) to ask questions or get help with writing your plugin

<br>

### Interaction Summary
Generally, these are the ways to interact with the BetterYTM API:
1. **Event Listeners**:  
  You can listen for events that are emitted via these ways:  
    - **Interface Events**:  
      These events are emitted on the BetterYTM plugin interface via the `window` object and the [default DOM event system](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).  
      They all use the [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) interface, which means all associated data is in the form of a [tuple](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types) in the `detail` property.  
      They are also all prefixed with `bytm:` to avoid conflicts with other events.  
        
      Find a list of all interface events and the arguments they pass by searching for `type InterfaceEvents` in `src/interface.ts`.
    - **Site Events**:  
      This is a system that's used for script-internal features, so that they may communicate in that way.  
      They are also emitted on the `window` object, but are prefixed with `bytm:siteEvent:`.  
        
      Note that the arguments will be turned into a [tuple](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types) in the `detail` property of the event.  
      Find a list of all site events and the arguments they pass by searching for `type SiteEventsMap` in `src/siteEvents.ts`.  
    - **Plugin-specific Events**:  
      These events will be emitted on the `events` property returned by the [`registerPlugin()` function.](#function-registerplugin)  
      This includes a handful of special events only used for direct communication from BYTM to your plugin, as well as all interface and site events with their usual prefixes.  
      Note that the ones solely used for communication with your plugin will not have any prefix.  
        
      Find a list of these events by searching for `type PluginEventMap` in `src/types.ts`.  
2. **Interface Functions, Classes and Constants**:  
    - The API provides a set of utility functions, classes and constants that will no doubt come in handy when creating your plugin's features.  
      They are available on the `unsafeWindow.BYTM` object, which will exist before the plugin is registered.  
      To see the full structure of this object, search for `type BytmObject` in `src/types.ts`.  
      Note: the use of [`unsafeWindow`](https://www.tampermonkey.net/documentation.php?locale=en#api:unsafeWindow) is necessary where indicated, to be able to interact with the normally sandboxed `window` object in userscripts.  
    - [Click here for a summary of the most useful features.](#most-useful-api-features)  
    - Also [consider checking out the full API Reference](#api-reference) for a detailed overview of all functions, classes and constants, including code examples for each.
3. **Libraries**:  
  BetterYTM exposes a set of libraries that can be used without having to include them in your plugin:  
    - `unsafeWindow.BYTM.CoreUtils` contains all exported members from [the CoreUtils library.](https://github.com/Sv443-Network/CoreUtils)  
      It will soon be the main dependency of UserUtils, and contains some more utility functions and updated features from UserUtils, as well as updated versions of the classes and functions from `UserUtils`.
    - `unsafeWindow.BYTM.UserUtils` contains all exported members from [the UserUtils library.](https://github.com/Sv443-Network/UserUtils)  
      This DOM- & UserScript-specific library can register listeners for when CSS selectors exist, intercept events, manage persistent user configurations, allow you to modify the DOM more easily and more.  
      Large parts of it will soon be replaced by the CoreUtils library, so it is recommended to use the CoreUtils library where possible.
    - `unsafeWindow.BYTM.compareVersions` has all functions from [the compare-versions library.](https://npmjs.com/package/compare-versions)  
      Use it to compare semver-compliant version strings, for example to check if BYTM or another installed plugin is compatible with your plugin.

<br>

### Plugin Template
BetterYTM comes with a GitHub template repository that gives a solid starting point for your plugins.  
It includes the basic boilerplate that registers your plugin, some example code to help you get started, a modern, fast and efficient build toolchain, and some GitHub CI workflows.  
[**Click here to view the template repository and the instructions for setting it up.**](https://github.com/Sv443/BetterYTM-Plugin-Template#readme)  
  
- [The "creating a simple plugin" section](#creating-a-simple-plugin) will walk you through the process of creating a plugin using this template as a starting point.
- If you are not into the idea of hosting your code on GitHub, you may also clone or download and extract it, at the cost of not having the default CI workflows.
- Since [the template is licensed under the Unlicense](https://github.com/Sv443/BetterYTM-Plugin-Template/blob/main/LICENSE.txt), the code is essentially in the public domain and you may change whatever you want, without any restrictions.

<br>

### Creating a Simple Plugin
In this section, we will use the [official plugin template](#plugin-template) to create a simple plugin that ...

<!--

TODO:
1. Setup repo
2. Replace placeholders
3. Create plugin definition object
4. Register plugin
5. Add a feature / features that showcase:
  - adding interface and site event listeners
  - adding dom element listeners
  - creating a BYTM component element
  - reading constants

-->

<br>

### Most Useful API Features
This is just a non-exhaustive list of the API features and utilities that I find most useful:
- Functions:
  - [`addSelectorListener()`](#function-addselectorlistener) - Listen for an element matching a selector to exist or be updated.
  - [`function reloadTab()`](#function-reloadtab) - Reloads the current tab while remembering the volume and video time as well as disabling features like initial tab volume.
  - [`function setInnerHtml()`](#function-setinnerhtml) - Sets the inner HTML of an element using [DOMPurify](https://github.com/cure53/DOMPurify) and the [Trusted Types API.](https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API)
  - [`function onInteraction()`](#function-oninteraction) - Listen for a user interaction event, such as a click or spacebar press.
  - [`function getVideoTime()`](#function-getvideotime) - Returns the current video time in seconds.
  - [`function waitVideoElementReady()`](#function-waitvideoelementready) - Waits for the video element to be ready, and returns it.
  - [`function getLikeDislikeBtns()`](#function-getlikedislikebtns) - Returns the current like/dislike state, the like and dislike buttons, as well as their container element.
  - [`function isIgnoredInputElement()`](#function-isigoredinputelement) - Checks if the currently focused element is an input element, so that other interactions can be ignored.
  - [`function onSiteEvent()`](#function-onsiteevent) - Listen for a specific site event.
  - [`function onMultiSiteEvents()`](#function-onmultisiteevents) - Listen for multiple site events at once.
  - [`function showToast()`](#function-showtoast) - Shows a toast notification.
  - [`function showPrompt()`](#function-showprompt) - Shows a modal dialog mimicking the native `prompt()`, `alert()` and `confirm()` functions.
  - [`function formatNumber()`](#function-formatnumber) - Formats a number with the configured locale and passed or configured format.
  - [`function getInternals()`](#function-getinternals) - Returns a selection of internal functions and objects that can be used by core libraries and deeper reaching plugins.
- Classes:
  - [`function getBytmDialog()`](#function-getbytmdialog) - A generic dialog class that allows you to create and manage modal dialogs with custom content and styles.
  - [`function getMarkdownDialog()`](#function-getmarkdowndialog) - A dialog that displays markdown content.
  - [`class NanoEmitter`](#class-nanoemitter) - A class for creating lightweight, type-safe event emitters in OOP or FP style.
- Events:
  - [`bytm:observersReady`](#event-bytm-observersReady)
  - [`bytm:featureInitialized`](#event-bytm-featureInitialized)
  - [`bytm:allReady`](#event-bytm-allReady)
  - [`bytm:dialogOpened:id`](#event-bytm-dialogOpened-id)
  - [`bytm:siteEvent:configChanged`](#event-bytm-siteEvent-configChanged)
  - [`bytm:siteEvent:queueChanged`](#event-bytm-siteEvent-queueChanged)
  - [`bytm:siteEvent:autoplayQueueChanged`](#event-bytm-siteEvent-autoplayQueueChanged)
  - [`bytm:siteEvent:songTitleChanged`](#event-bytm-siteEvent-songTitleChanged)
  - [`bytm:siteEvent:watchIdChanged`](#event-bytm-siteEvent-watchIdChanged)
  - [`bytm:siteEvent:pathChanged`](#event-bytm-siteEvent-pathChanged)
  - [`bytm:siteEvent:fullscreenToggled`](#event-bytm-siteEvent-fullscreenToggled)

<br>

## API Reference
This section will give you a detailed overview of all the API features, including code examples for each.  
It is recommended to read the [Getting Started](#getting-started) section first.

<br>

### Full Feature Overview
Here's everything BetterYTM offers in terms of API features, organized by category.  
Note: The 🔒 emoji means it's an authenticated function and you're *required* to [register your plugin](#function-registerplugin) in order to use them.  
- Meta:
  - [`function registerPlugin()`](#function-registerplugin) - Registers a plugin with BetterYTM with the given plugin definition object
  - [`function getPluginInfo()`](#function-getplugininfo) 🔒 - Returns the plugin info object for the specified plugin - can be used to check if a certain plugin is registered
  - [`function getInternals()`](#function-getInternals) 🔒 - Returns functions and instances useful for core libraries or deeper-reaching plugins
- BYTM-specific:
  - [`function getDomain()`](#function-getdomain) - Returns the current domain of the page as a constant string (either "yt" or "ytm")
  - [`function getResourceUrl()`](#function-getresourceurl) - Returns a `blob:` URL provided by the local userscript extension for the specified BYTM resource file
  - [`function getSessionId()`](#function-getsessionid) - Returns the unique session ID that is generated on every started session
  - [`function reloadTab()`](#function-reloadtab) - Reloads the current tab while preserving video time and volume and making features like initial tab volume lower priority
- DOM:
  - [`function getBytmDialog()`](#function-getbytmdialog) - A generic class for creating and managing modal, fully customizable dialogs
  - [`function getExImDialog()`](#function-geteximdialog) - Subclass of BytmDialog for allowing users to export and import serializable data
  - [`function getMarkdownDialog()`](#function-getmarkdowndialog) - Subclass of BytmDialog for displaying markdown content
  - [`function setInnerHtml()`](#function-setinnerhtml) - Sets the innerHTML property of an element after sanitizing the string with [DOMPurify](https://github.com/cure53/DOMPurify) and [Trusted Types](https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API)
  - [`function addSelectorListener()`](#function-addselectorlistener) - Adds a listener that checks for changes in DOM elements matching a CSS selector
  - [`function onInteraction()`](#function-oninteraction) - Adds accessible event listeners to the specified element for button or link-like keyboard and mouse interactions
  - [`function getVideoTime()`](#function-getvideotime) - Returns the current video time (on both YT and YTM)
  - [`function getThumbnailUrl()`](#function-getthumbnailurl) - Returns the URL to the thumbnail of the currently playing video
  - [`function getBestThumbnailUrl()`](#function-getbestthumbnailurl) - Returns the URL to the best quality thumbnail of the currently playing video
  - [`function fetchITunesAlbumInfo()`](#function-fetchitunesalbuminfo) - Fetches the Apple Music / iTunes album info objects for the specified artist and album name
  - [`function waitVideoElementReady()`](#function-waitvideoelementready) - Waits for the video element to be queryable in the DOM - has to be called after `bytm:observersReady`
  - [`function getVideoElement()`](#function-getvideoelement) - Returns the video element on the current page or null if there is none (on both YT and YTM)
  - [`function getVideoSelector()`](#function-getvideoselector) - Returns the CSS selector for the video element (on both YT and YTM)
  - [`function getCurrentMediaType()`](#function-getcurrentmediatype) - (On YTM only) returns the type of media that is currently playing (either "video" or "song")
  - [`function getLikeDislikeBtns()`](#function-getlikedislikebtns) - Returns the like and dislike buttons for either domain, as well as the current like/dislike state
  - [`function isIgnoredInputElement()`](#function-isignoredinputelement) - Checks if the given element (or `document.activeElement`) is an input element that should prevent all other keypresses from being processed
- Site Events:
  - [`function onSiteEvent()`](#function-onsiteevent) - Adds a site event listener
  - [`function onceSiteEvent()`](#function-oncesiteevent) - Adds a site event listener that is only called once and also returns a Promise for use with the async/await pattern
  - [`function onMultiSiteEvents()`](#function-onmultisiteevents) - Adds a listener for multiple site events at once, with configurable behavior and with a shared callback function
- Components:
  - [`function createHotkeyInput()`](#function-createhotkeyinput) - Creates a hotkey input element
  - [`function createToggleInput()`](#function-createtoggleinput) - Creates a toggle input element
  - [`function createCircularBtn()`](#function-createcircularbtn) - Creates a generic, circular button element with just an icon
  - [`function createLongBtn()`](#function-createlongbtn) - Creates a generic, long and circular button element with an icon and text
  - [`function createRipple()`](#function-createripple) - Creates a click ripple effect on the given element
  - [`function showToast()`](#function-showtoast) - Shows a toast notification and a message string or element
  - [`function showIconToast()`](#function-showicontoast) - Shows a toast notification with an icon and a message string or element
  - [`function showPrompt()`](#function-showprompt) - Shows a styled prompt dialog of the type `confirm`, `alert` or `prompt`
- Translations:
  - [`function setLocale()`](#function-setlocale) 🔒 - Sets the locale for BetterYTM
  - [`function getLocale()`](#function-getlocale) - Returns the currently set locale
  - [`function hasKey()`](#function-haskey) - Checks if the specified translation key exists in the currently set locale
  - [`function hasKeyFor()`](#function-haskeyfor) - Checks if the specified translation key exists in the specified locale
  - [`function t()`](#function-t) - Translates the specified translation key using the currently set locale
  - [`function tp()`](#function-tp) - Translates the specified translation key including pluralization using the currently set locale
  - [`function tl()`](#function-tl) - Returns the translation for the provided key and provided locale
  - [`function tlp()`](#function-tlp) - Returns the translation for the provided locale and key, including pluralization identifier
- Feature config:
  - [`function getFeatures()`](#function-getfeatures) 🔒 - Returns the current BYTM feature configuration object
  - [`function saveFeatures()`](#function-savefeatures) 🔒 - Overwrites the current BYTM feature configuration object with the provided one
  - [`function getDefaultFeatures()`](#function-getdefaultfeatures) - Returns the default feature configuration object
- Lyrics:
  - [`function fetchLyricsUrlTop()`](#function-fetchlyricsurltop) - Fetches the URL to the lyrics page for the specified song
  - [`function getLyricsCacheEntry()`](#function-getlyricscacheentry) - Tries to find a URL entry in the in-memory cache for the specified song
  - [`function sanitizeArtists()`](#function-sanitizeartists) - Sanitizes the specified artist string to be used in fetching a lyrics URL
  - [`function sanitizeSong()`](#function-sanitizesong) - Sanitizes the specified song title string to be used in fetching a lyrics URL
- Auto-Like:
  - [`function getAutoLikeData()`](#function-getautolikedata) 🔒 - Returns the current auto-like data object
  - [`function saveAutoLikeData()`](#function-saveautolikedata) 🔒 - Overwrites the current auto-like data object with the provided one
  - [`function fetchVideoVotes()`](#function-fetchvideovotes) - Fetches the approximate like and dislike count for the video with the specified ID
- Other:
  - [`class NanoEmitter`](#class-nanoemitter) - Class for creating lightweight, type safe event emitting classes
  - [`function formatNumber()`](#function-formatnumber) - Formats a number with the configured locale and passed or configured format
- Events:
  - [`bytm:observersReady`](#event-bytm-observersReady)
  - [`bytm:featureInitialized`](#event-bytm-featureInitialized)
  - [`bytm:allReady`](#event-bytm-allReady)
  - [`bytm:dialogOpened:id`](#event-bytm-dialogOpened-id)
  - [`bytm:siteEvent:configChanged`](#event-bytm-siteEvent-configChanged)
  - [`bytm:siteEvent:queueChanged`](#event-bytm-siteEvent-queueChanged)
  - [`bytm:siteEvent:autoplayQueueChanged`](#event-bytm-siteEvent-autoplayQueueChanged)
  - [`bytm:siteEvent:songTitleChanged`](#event-bytm-siteEvent-songTitleChanged)
  - [`bytm:siteEvent:watchIdChanged`](#event-bytm-siteEvent-watchIdChanged)
  - [`bytm:siteEvent:pathChanged`](#event-bytm-siteEvent-pathChanged)
  - [`bytm:siteEvent:fullscreenToggled`](#event-bytm-siteEvent-fullscreenToggled)