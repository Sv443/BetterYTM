## BetterYTM Docs - API Reference

### Table of Contents
- [**TODO: API Reference**](#api-reference)
  - [**Full Feature Overview**](#full-feature-overview)
    - [Meta](#meta)
    - [BYTM-specific](#bytm-specific)
    - [DOM](#dom)
    - [Components](#components)
    - [Translations](#translations)
    - [Feature Config](#feature-config)
    - [Lyrics](#lyrics)
    - [Auto-Like](#auto-like)
    - [Other](#other)
    - [Events](#events)

<br>

## API Reference
This section will give you a detailed overview of all the API features, including code examples for each.  
It is recommended to read the [Getting Started](#getting-started) section first.

<br>

### Full Feature Overview
Here's everything BetterYTM offers in terms of API features, organized by category.  
Note: The 🔒 emoji means it's an authenticated function and you're *required to [register your plugin](#function-registerplugin)* in order to use them.  
- [Meta:](#meta)
  - [`function registerPlugin()`](#function-registerplugin) - Registers a plugin with BetterYTM with the given plugin definition object
  - [`function getPluginInfo()`](#function-getplugininfo) 🔒 - Returns the plugin info object for the specified plugin - can be used to check if a certain plugin is registered
  - [`function getInternals()`](#function-getInternals) 🔒 - Returns functions and instances useful for core libraries or deeper-reaching plugins
- [BYTM-specific:](#bytm-specific)
  - [`function getDomain()`](#function-getdomain) - Returns the current domain of the page as a constant string (either "yt" or "ytm")
  - [`function getResourceUrl()`](#function-getresourceurl) - Returns an `https:`, `blob:` or `data:` URI provided by the local userscript extension for the specified BYTM resource
  - [`function resourceAsString()`](#function-resourceasstring) - Returns the cached content of a BYTM resource as a string
  - [`function getSessionId()`](#function-getsessionid) - Returns the unique session ID that is generated on every started session
  - [`function reloadTab()`](#function-reloadtab) - Reloads the current tab while preserving video time and volume and making features like initial tab volume lower priority
- [DOM:](#dom)
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
- [Site Events:](#Site events)
  - [`function onSiteEvent()`](#function-onsiteevent) - Adds a site event listener
  - [`function onceSiteEvent()`](#function-oncesiteevent) - Adds a site event listener that is only called once and also returns a Promise for use with the async/await pattern
  - [`function onMultiSiteEvents()`](#function-onmultisiteevents) - Adds a listener for multiple site events at once, with configurable behavior and with a shared callback function
- [Components:](#components)
  - [`function createHotkeyInput()`](#function-createhotkeyinput) - Creates a hotkey input element
  - [`function createToggleInput()`](#function-createtoggleinput) - Creates a toggle input element
  - [`function createCircularBtn()`](#function-createcircularbtn) - Creates a generic, circular button element with just an icon
  - [`function createLongBtn()`](#function-createlongbtn) - Creates a generic, long and circular button element with an icon and text
  - [`function createRipple()`](#function-createripple) - Creates a click ripple effect on the given element
  - [`function showToast()`](#function-showtoast) - Shows a toast notification and a message string or element
  - [`function showIconToast()`](#function-showicontoast) - Shows a toast notification with an icon and a message string or element
  - [`function showPrompt()`](#function-showprompt) - Shows a styled prompt dialog of the type `confirm`, `alert` or `prompt`
- [Translations:](#translations)
  - [`function setLocale()`](#function-setlocale) 🔒 - Sets the locale for BetterYTM
  - [`function getLocale()`](#function-getlocale) - Returns the currently set locale
  - [`function hasKey()`](#function-haskey) - Checks if the specified translation key exists in the currently set locale
  - [`function hasKeyFor()`](#function-haskeyfor) - Checks if the specified translation key exists in the specified locale
  - [`function t()`](#function-t) - Translates the specified translation key using the currently set locale
  - [`function tp()`](#function-tp) - Translates the specified translation key including pluralization using the currently set locale
  - [`function tl()`](#function-tl) - Returns the translation for the provided key and provided locale
  - [`function tlp()`](#function-tlp) - Returns the translation for the provided locale and key, including pluralization identifier
- [Feature Config:](#feature-config)
  - [`function getFeatures()`](#function-getfeatures) 🔒 - Returns the current BYTM feature configuration object
  - [`function saveFeatures()`](#function-savefeatures) 🔒 - Overwrites the current BYTM feature configuration object with the provided one
  - [`function getDefaultFeatures()`](#function-getdefaultfeatures) - Returns the default feature configuration object
- [Lyrics:](#lyrics)
  - [`function fetchLyricsUrlTop()`](#function-fetchlyricsurltop) - Fetches the URL to the lyrics page for the specified song
  - [`function getLyricsCacheEntry()`](#function-getlyricscacheentry) - Tries to find a URL entry in the in-memory cache for the specified song
  - [`function sanitizeArtists()`](#function-sanitizeartists) - Sanitizes the specified artist string to be used in fetching a lyrics URL
  - [`function sanitizeSong()`](#function-sanitizesong) - Sanitizes the specified song title string to be used in fetching a lyrics URL
- [Auto-Like:](#auto-like)
  - [`function getAutoLikeData()`](#function-getautolikedata) 🔒 - Returns the current auto-like data object
  - [`function saveAutoLikeData()`](#function-saveautolikedata) 🔒 - Overwrites the current auto-like data object with the provided one
  - [`function fetchVideoVotes()`](#function-fetchvideovotes) - Fetches the approximate like and dislike count for the video with the specified ID
- [Other:](#other)
  - [`class NanoEmitter`](#class-nanoemitter) - Class for creating lightweight, type safe event emitting classes
  - [`function formatNumber()`](#function-formatnumber) - Formats a number with the configured locale and passed or configured format
- [Events:](#events)
  - [**Event Overview and Timings**](#overview-and-timings)
  - [Event List:](#list)
    - Interface Events:
      - Init:
        - [`bytm:observersReady`](#bytm-observersready) - [addSelectorListener()](#function-addselectorlistener) can be used
        - [`bytm:featureInitStarted`](#bytm-featureinitstarted) - features start initializing
        - [`bytm:featureInitialized`](#bytm-featureinitialized) - a feature has been initialized
        - [`bytm:featureInitialized:id`](#bytm-featureinitialized-id) - a feature has been initialized
        - [`bytm:ready`](#bytm-ready) - BYTM general init is done, features may still be initializing
        - [`bytm:allReady`](#bytm-allready) - all features are initialized
        - [`bytm:fatalError`](#bytm-fatalerror) - fatal error during init
      - Plugins:
        - [`bytm:preInitPlugin`](#bytm-preinitplugin) - earliest possible plugin entrypoint
        - [`bytm:registerPlugin`](#bytm-registerplugin) - regular plugin entrypoint
      - Data:
        - [`bytm:configReady`](#bytm-configready) - feature config is loaded
        - [`bytm:lyricsCacheReady`](#bytm-lyricscacheready) - lyrics cache is loaded
        - [`bytm:setLocale`](#bytm-setlocale) - locale was set
        - [`bytm:lyricsLoaded`](#bytm-lyricsloaded) - lyrics for a song were loaded
        - [`bytm:lyricsCacheCleared`](#bytm-lyricscachecleared)
        - [`bytm:lyricsCacheEntryAdded`](#bytm-lyricscacheentryadded)
      - Dialogs:
        - [`bytm:dialogOpened`](#bytm-dialogopened) - a BytmDialog was opened
        - [`bytm:dialogOpened:id`](#bytm-dialogopened-id) - a BytmDialog was opened
        - [`bytm:dialogClosed`](#bytm-dialogclosed) - a BytmDialog was closed
        - [`bytm:dialogClosed:id`](#bytm-dialogclosed-id) - a BytmDialog was closed
    - Site Events:
      - Feature Config:
        - [`bytm:siteEvent:configChanged`](#bytm-siteevent-configchanged) - the config object was changed
        - [`bytm:siteEvent:configOptionChanged`](#bytm-siteevent-configoptionchanged) - a cfg menu option was changed
        - [`bytm:siteEvent:configHeaderSelected`](#bytm-siteevent-configheaderselected) - a cfg menu header was selected
        - [`bytm:siteEvent:rebuildCfgMenu`](#bytm-siteevent-rebuildcfgmenu) - makes the cfg menu rebuild itself
        - [`bytm:siteEvent:cfgMenuMounted`](#bytm-siteevent-cfgmenumounted) - the cfg menu was mounted
        - [`bytm:siteEvent:recreateCfgMenu`](#bytm-siteevent-recreatecfgmenu) - makes the cfg menu completely recreate and remount itself
        - [`bytm:siteEvent:cfgMenuClosed`](#bytm-siteevent-cfgmenuclosed) - the cfg menu was closed
      - Site:
        - [`bytm:siteEvent:queueChanged`](#bytm-siteevent-queuechanged) - the current queue changed
        - [`bytm:siteEvent:autoplayQueueChanged`](#bytm-siteevent-autoplayqueuechanged) - the autoplay queue changed
        - [`bytm:siteEvent:songTitleChanged`](#bytm-siteevent-songtitlechanged) - the song title changed
        - [`bytm:siteEvent:watchIdChanged`](#bytm-siteevent-watchidchanged) - the watch/video ID changed
        - [`bytm:siteEvent:pathChanged`](#bytm-siteevent-pathchanged) - the URL path changed
        - [`bytm:siteEvent:fullscreenToggled`](#bytm-siteevent-fullscreentoggled) - fullscreen mode was toggled
      - Features:
        - [`bytm:siteEvent:voteLabelsAdded`](#bytm-siteevent-votelabelsadded) - the like/dislike vote labels were added to the buttons
        - [`bytm:siteEvent:updateVolumeSliderLabel`](#bytm-siteevent-updatevolumesliderlabel) - makes the volume slider labels update manually
        - [`bytm:siteEvent:autoLikeChannelsUpdated`](#bytm-siteevent-autolikechannelsupdated) - the auto-like channels list was updated
      - Misc:
        - [`bytm:siteEvent:welcomeMenuClosed`](#bytm-siteevent-welcomemenuclosed) - the welcome menu was closed
        - [`bytm:siteEvent:hotkeyInputActive`](#bytm-siteevent-hotkeyinputactive) - any hotkey input was focused or unfocused

<br>

### Events
### Event Overview and Timings

The following is a list of events in chronological order, grouped by the init phase and certain user actions.  
The timings might be slightly off in each session, but this should give you a good idea of when to expect which event.  
  
> [!NOTE]  
> `[Interface]` means the event is only emitted via the interface event system (`unsafeWindow.addEventListener("...")`)  
> `[Both]` means the event is emitted via both the interface and the site event system (`unsafeWindow.addEventListener("...")` and `unsafeWindow.BYTM.onSiteEvent("...")`, `onceSiteEvent()` and `onMultiSiteEvents()`)

### 1. Init on YTM home page
- `[Interface]` : [`bytm:preInitPlugin`](#bytm-preinitplugin)
- `[Interface]` : [`bytm:configReady`](#bytm-configready)
- `[Interface]` : [`bytm:lyricsCacheReady`](#bytm-lyricscacheready)
- `[Interface]` : [`bytm:registerPlugin`](#bytm-registerplugin)
- `[Interface]` : [`bytm:setLocale`](#bytm-setlocale)
- `[Interface]` : [`bytm:featureInitStarted`](#bytm-featureinitstarted)
- `[Interface]` : [`bytm:ready`](#bytm-ready)
- Repeated for every feature:  
  - `[Interface]` : [`bytm:featureInitialized:id`](#bytm-featureinitialized-id)  
  - `[Interface]` : [`bytm:featureInitialized`](#bytm-featureinitialized)
- `[Interface]` : [`bytm:observersReady`](#bytm-observersready)
- `[Interface]` : [`bytm:allReady`](#bytm-allready)
- `[Both]     ` : [`bytm:siteEvent:cfgMenuMounted`](#bytm-siteevent-cfgmenumounted)

### 2. Navigate to `/watch`
- `[Both]     ` : [`bytm:siteEvent:fullscreenToggled`](#bytm-siteevent-fullscreentoggled)
- `[Both]     ` : [`bytm:siteEvent:watchIdChanged`](#bytm-siteevent-watchidchanged)
- `[Interface]` : [`bytm:siteEvent:voteLabelsAdded`](#bytm-siteevent-votelabelsadded)
- `[Both]     ` : [`bytm:siteEvent:pathChanged`](#bytm-siteevent-pathchanged)
- `[Both]     ` : [`bytm:siteEvent:queueChanged`](#bytm-siteevent-queuechanged)
- `[Both]     ` : [`bytm:siteEvent:songTitleChanged`](#bytm-siteevent-songtitlechanged)
- `[Interface]` : [`bytm:lyricsCacheEntryAdded`](#bytm-lyricscacheentryadded)
- `[Interface]` : [`bytm:lyricsLoaded`](#bytm-lyricsloaded)

### 3. Open config menu and change a setting
- `[Interface]` : [`bytm:dialogOpened:cfg-menu`](#bytm-dialogopened-cfg-menu)
- `[Interface]` : [`bytm:dialogOpened`](#bytm-dialogopened)
- `[Both]     ` : [`bytm:siteEvent:configHeaderSelected`](#bytm-siteevent-configheaderselected)
- `[Both]     ` : [`bytm:siteEvent:configChanged`](#bytm-siteevent-configchanged)
- `[Both]     ` : [`bytm:siteEvent:configOptionChanged`](#bytm-siteevent-configoptionchanged)

<br><br>

<div style="text-align: center;" align="center">

[◀️ Previous: Getting Started](./getting-started.md)</a> &nbsp; | &nbsp; [🏠 API Docs - Home](./README.md) &nbsp; | &nbsp; [Next: Contributing ▶️](./contributing.md)
</div>
