[**@sv443/betterytm**](../../README.md)

***

[@sv443/betterytm](../../modules.md) / [types](../README.md) / InterfaceFunctions

# Type Alias: InterfaceFunctions

> **InterfaceFunctions** = `object`

Defined in: [src/types.ts:400](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L400)

All functions exposed by the interface on the global `BYTM` object

## Properties

### addSelectorListener

> **addSelectorListener**: *typeof* `addSelectorListener`

Defined in: [src/types.ts:432](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L432)

Adds a listener to one of the already present SelectorObserver instances

***

### createCircularBtn

> **createCircularBtn**: *typeof* [`createCircularBtn`](../../components/circularButton/functions/createCircularBtn.md)

Defined in: [src/types.ts:518](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L518)

Creates a new circular button component

***

### createHotkeyInput

> **createHotkeyInput**: *typeof* [`createHotkeyInput`](../../components/hotkeyInput/functions/createHotkeyInput.md)

Defined in: [src/types.ts:514](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L514)

Creates a new hotkey input component

***

### createRipple

> **createRipple**: *typeof* [`createRipple`](../../components/ripple/functions/createRipple.md)

Defined in: [src/types.ts:520](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L520)

Creates a new ripple effect on the provided element or creates an empty element that has the effect

***

### createToggleInput

> **createToggleInput**: *typeof* [`createToggleInput`](../../components/toggleInput/functions/createToggleInput.md)

Defined in: [src/types.ts:516](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L516)

Creates a new toggle input component

***

### fetchITunesAlbumInfo

> **fetchITunesAlbumInfo**: *typeof* `fetchITunesAlbumInfo`

Defined in: [src/types.ts:446](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L446)

Fetches the Apple Music / iTunes album info objects for the given artist and album names

***

### fetchLyricsUrlTop

> **fetchLyricsUrlTop**: *typeof* `fetchLyricsUrlTop`

Defined in: [src/types.ts:500](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L500)

Fetches the lyrics URL of the top search result for the provided song and artist. Before a request is sent, the cache is checked for a match.

***

### fetchVideoVotes

> **fetchVideoVotes**: *typeof* `fetchVideoVotes`

Defined in: [src/types.ts:510](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L510)

Returns the votes for the provided video ID from the ReturnYoutubeDislike API

***

### formatNumber

> **formatNumber**: *typeof* `formatNumber`

Defined in: [src/types.ts:530](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L530)

Formats a number to a string using the configured locale and configured or passed number notation

***

### getAutoLikeData

> **getAutoLikeData**: *typeof* [`getAutoLikeDataInterface`](../../interface/functions/getAutoLikeDataInterface.md)

Defined in: [src/types.ts:506](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L506)

🔒 Returns the current auto-like data

***

### getBestThumbnailUrl

> **getBestThumbnailUrl**: *typeof* `getBestThumbnailUrl`

Defined in: [src/types.ts:444](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L444)

Returns the thumbnail URL with the best quality for the provided video ID

***

### getCurrentMediaType

> **getCurrentMediaType**: *typeof* `getCurrentMediaType`

Defined in: [src/types.ts:454](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L454)

(On YTM only) returns the current media type (video or song)

***

### getDefaultFeatures()

> **getDefaultFeatures**: () => [`FeatureConfig`](../interfaces/FeatureConfig.md)

Defined in: [src/types.ts:492](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L492)

Returns the default feature configuration

#### Returns

[`FeatureConfig`](../interfaces/FeatureConfig.md)

***

### getDomain

> **getDomain**: *typeof* `getDomain`

Defined in: [src/types.ts:409](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L409)

Returns the current domain as a constant string representation

***

### getFeatures

> **getFeatures**: *typeof* [`getFeaturesInterface`](../../interface/functions/getFeaturesInterface.md)

Defined in: [src/types.ts:488](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L488)

🔒 Returns the current feature configuration

***

### getInternals

> **getInternals**: *typeof* [`getInternals`](../../interface/functions/getInternals.md)

Defined in: [src/types.ts:405](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L405)

🔒 Returns a selection of internal functions and objects that can be used by core libraries and deeper reaching plugins

***

### getLikeDislikeBtns

> **getLikeDislikeBtns**: *typeof* `getLikeDislikeBtns`

Defined in: [src/types.ts:456](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L456)

Returns the like and dislike elements, as well as the current state of them as a string constant

***

### getLocale

> **getLocale**: *typeof* `getLocale`

Defined in: [src/types.ts:472](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L472)

Returns the current locale

***

### getLyricsCacheEntry

> **getLyricsCacheEntry**: *typeof* `getLyricsCacheEntry`

Defined in: [src/types.ts:502](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L502)

Returns the lyrics cache entry for the provided song and artist, if there is one. Never sends a request on its own.

***

### getPluginInfo

> **getPluginInfo**: *typeof* [`getPluginInfo`](../../interface/functions/getPluginInfo.md)

Defined in: [src/types.ts:403](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L403)

🔒 Checks if the plugin with the given name and namespace is registered and returns an info object about it

***

### getResourceUrl

> **getResourceUrl**: *typeof* `getResourceUrl`

Defined in: [src/types.ts:417](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L417)

Returns the URL of a resource as defined in `assets/resources.json`  
There are also some resources like translation files that get added by `tools/post-build.ts`  
  
The returned URL is a `blob:` URL served up by the userscript extension  
This makes the resource fast to fetch and also prevents CORS issues

***

### getSessionId

> **getSessionId**: *typeof* `getSessionId`

Defined in: [src/types.ts:424](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L424)

Returns the unique session ID for the current tab

***

### getThumbnailUrl

> **getThumbnailUrl**: *typeof* `getThumbnailUrl`

Defined in: [src/types.ts:442](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L442)

Returns the thumbnail URL for the provided video ID and thumbnail quality

***

### getVideoElement

> **getVideoElement**: *typeof* `getVideoElement`

Defined in: [src/types.ts:450](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L450)

Returns the video element on the current page for both YTM and YT - returns null if it couldn't be found

***

### getVideoSelector

> **getVideoSelector**: *typeof* `getVideoSelector`

Defined in: [src/types.ts:452](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L452)

Returns the CSS selector to the video element for both YTM and YT

***

### getVideoTime

> **getVideoTime**: *typeof* `getVideoTime`

Defined in: [src/types.ts:440](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L440)

Returns the current video time (on both YT and YTM)  
In case it can't be determined on YT, mouse movement is simulated to bring up the video time  
In order for that edge case not to error out, the function would need to be called in response to a user interaction event (e.g. click) due to the strict autoplay policy in browsers

***

### hasKey

> **hasKey**: *typeof* `hasKey`

Defined in: [src/types.ts:474](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L474)

Returns whether a translation key exists for the set locale

***

### hasKeyFor

> **hasKeyFor**: *typeof* `hasKeyFor`

Defined in: [src/types.ts:476](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L476)

Returns whether a translation key exists for the provided locale

***

### isIgnoredInputElement

> **isIgnoredInputElement**: *typeof* `isIgnoredInputElement`

Defined in: [src/types.ts:458](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L458)

Checks whether the given element (or document.activeElement by default) is input element, so all other global keypresses should be ignored

***

### onceSiteEvent

> **onceSiteEvent**: *typeof* `siteEvents.once`

Defined in: [src/types.ts:464](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L464)

Adds a site event listener that is only called once and also returns a Promise for use with the async/await pattern

***

### onInteraction

> **onInteraction**: *typeof* `onInteraction`

Defined in: [src/types.ts:434](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L434)

Registers accessible interaction listeners (click, enter, space) on the provided element

***

### onMultiSiteEvents

> **onMultiSiteEvents**: *typeof* `siteEvents.onMulti`

Defined in: [src/types.ts:466](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L466)

Adds a listener for multiple site events at once, with configurable behavior

***

### onSiteEvent

> **onSiteEvent**: *typeof* `siteEvents.on`

Defined in: [src/types.ts:462](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L462)

Adds a site event listener

***

### reloadTab

> **reloadTab**: *typeof* `reloadTab`

Defined in: [src/types.ts:426](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L426)

Smarter version of `location.reload()` that remembers video time and volume and makes other features like initial tab volume stand down if used

***

### resourceAsString

> **resourceAsString**: *typeof* `resourceAsString`

Defined in: [src/types.ts:422](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L422)

Returns the string content of a resource as defined in `assets/resources.json` as a Promise.  
Uses a builtin cache to speed up subsequent calls, even across sessions.

***

### sanitizeArtists

> **sanitizeArtists**: *typeof* `sanitizeArtists`

Defined in: [src/types.ts:496](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L496)

Sanitizes the provided artist string - this needs to be done before calling other lyrics related functions!

***

### sanitizeSong

> **sanitizeSong**: *typeof* `sanitizeSong`

Defined in: [src/types.ts:498](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L498)

Sanitizes the provided song title string - this needs to be done before calling other lyrics related functions!

***

### saveAutoLikeData

> **saveAutoLikeData**: *typeof* [`saveAutoLikeDataInterface`](../../interface/functions/saveAutoLikeDataInterface.md)

Defined in: [src/types.ts:508](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L508)

🔒 Overwrites the auto-like data

***

### saveFeatures

> **saveFeatures**: *typeof* [`saveFeaturesInterface`](../../interface/functions/saveFeaturesInterface.md)

Defined in: [src/types.ts:490](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L490)

🔒 Overwrites the feature configuration with the provided one

***

### setInnerHtml

> **setInnerHtml**: *typeof* `setInnerHtml`

Defined in: [src/types.ts:430](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L430)

Sets the innerHTML property of the provided element to a sanitized version of the provided HTML string

***

### setLocale

> **setLocale**: *typeof* [`setLocaleInterface`](../../interface/functions/setLocaleInterface.md)

Defined in: [src/types.ts:470](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L470)

🔒 Sets the locale for all new translations

***

### showIconToast

> **showIconToast**: *typeof* [`showIconToast`](../../components/toast/functions/showIconToast.md)

Defined in: [src/types.ts:524](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L524)

Shows a toast with the provided text and an icon

***

### showPrompt

> **showPrompt**: *typeof* [`showPromptInterface`](../../interface/functions/showPromptInterface.md)

Defined in: [src/types.ts:526](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L526)

Shows a styled confirm() or alert() dialog with the provided message

***

### showToast

> **showToast**: *typeof* [`showToast`](../../components/toast/functions/showToast.md)

Defined in: [src/types.ts:522](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L522)

Shows a toast with the provided text

***

### t

> **t**: *typeof* `t`

Defined in: [src/types.ts:478](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L478)

Returns the translation for the provided translation key and currently set locale (check the files in the folder `assets/translations`)

***

### tl

> **tl**: *typeof* `tl`

Defined in: [src/types.ts:482](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L482)

Returns the translation for the provided translation key and provided locale (check the files in the folder `assets/translations`)

***

### tlp

> **tlp**: *typeof* `tlp`

Defined in: [src/types.ts:484](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L484)

Returns the translation for the provided translation key, including pluralization identifier and provided locale (check the files in the folder `assets/translations`)

***

### tp

> **tp**: *typeof* `tp`

Defined in: [src/types.ts:480](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L480)

Returns the translation for the provided translation key, including pluralization identifier and set locale (check the files in the folder `assets/translations`)

***

### waitVideoElementReady

> **waitVideoElementReady**: *typeof* `waitVideoElementReady`

Defined in: [src/types.ts:448](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L448)

Resolves the returned promise when the video element is queryable in the DOM
