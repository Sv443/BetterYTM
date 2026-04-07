[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/types](../README.md) / InterfaceFunctions

# Type Alias: InterfaceFunctions

> **InterfaceFunctions** = `object`

Defined in: [src/types.ts:451](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L451)

All functions exposed by the interface on the global `BYTM` object

## Properties

### addSelectorListener

> **addSelectorListener**: *typeof* [`addSelectorListener`](../../observers/functions/addSelectorListener.md)

Defined in: [src/types.ts:483](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L483)

Adds a listener to one of the already present SelectorObserver instances

***

### createCircularBtn

> **createCircularBtn**: *typeof* [`createCircularBtn`](../../components/circularButton/functions/createCircularBtn.md)

Defined in: [src/types.ts:569](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L569)

Creates a new circular button component

***

### createHotkeyInput

> **createHotkeyInput**: *typeof* [`createHotkeyInput`](../../components/hotkeyInput/functions/createHotkeyInput.md)

Defined in: [src/types.ts:565](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L565)

Creates a new hotkey input component

***

### createRipple

> **createRipple**: *typeof* [`createRipple`](../../components/ripple/functions/createRipple.md)

Defined in: [src/types.ts:571](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L571)

Creates a new ripple effect on the provided element or creates an empty element that has the effect

***

### createToggleInput

> **createToggleInput**: *typeof* [`createToggleInput`](../../components/toggleInput/functions/createToggleInput.md)

Defined in: [src/types.ts:567](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L567)

Creates a new toggle input component

***

### fetchITunesAlbumInfo

> **fetchITunesAlbumInfo**: *typeof* [`fetchITunesAlbumInfo`](../../utils/functions/fetchITunesAlbumInfo.md)

Defined in: [src/types.ts:497](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L497)

Fetches the Apple Music / iTunes album info objects for the given artist and album names

***

### fetchLyricsUrlTop

> **fetchLyricsUrlTop**: *typeof* [`fetchLyricsUrlTop`](../../features/functions/fetchLyricsUrlTop.md)

Defined in: [src/types.ts:551](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L551)

Fetches the lyrics URL of the top search result for the provided song and artist. Before a request is sent, the cache is checked for a match.

***

### fetchVideoVotes

> **fetchVideoVotes**: *typeof* [`fetchVideoVotes`](../../utils/functions/fetchVideoVotes.md)

Defined in: [src/types.ts:561](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L561)

Returns the votes for the provided video ID from the ReturnYoutubeDislike API

***

### formatNumber

> **formatNumber**: *typeof* [`formatNumber`](../../utils/functions/formatNumber.md)

Defined in: [src/types.ts:581](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L581)

Formats a number to a string using the configured locale and configured or passed number notation

***

### getAutoLikeData

> **getAutoLikeData**: *typeof* [`getAutoLikeDataInterface`](../../interface/functions/getAutoLikeDataInterface.md)

Defined in: [src/types.ts:557](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L557)

🔒 Returns the current auto-like data

***

### getBestThumbnailUrl

> **getBestThumbnailUrl**: *typeof* [`getBestThumbnailUrl`](../../utils/functions/getBestThumbnailUrl.md)

Defined in: [src/types.ts:495](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L495)

Returns the thumbnail URL with the best quality for the provided video ID

***

### getCurrentMediaType

> **getCurrentMediaType**: *typeof* [`getCurrentMediaType`](../../utils/functions/getCurrentMediaType.md)

Defined in: [src/types.ts:505](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L505)

(On YTM only) returns the current media type (video or song)

***

### getDefaultFeatures()

> **getDefaultFeatures**: () => [`FeatureConfig`](../interfaces/FeatureConfig.md)

Defined in: [src/types.ts:543](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L543)

Returns the default feature configuration

#### Returns

[`FeatureConfig`](../interfaces/FeatureConfig.md)

***

### getDomain

> **getDomain**: *typeof* [`getDomain`](../../utils/functions/getDomain.md)

Defined in: [src/types.ts:460](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L460)

Returns the current domain as a constant string representation

***

### getFeatures

> **getFeatures**: *typeof* [`getFeaturesInterface`](../../interface/functions/getFeaturesInterface.md)

Defined in: [src/types.ts:539](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L539)

🔒 Returns the current feature configuration

***

### getInternals

> **getInternals**: *typeof* [`getInternals`](../../interface/functions/getInternals.md)

Defined in: [src/types.ts:456](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L456)

🔒 Returns a selection of internal functions and objects that can be used by core libraries and deeper reaching plugins

***

### getLikeDislikeBtns

> **getLikeDislikeBtns**: *typeof* [`getLikeDislikeBtns`](../../utils/functions/getLikeDislikeBtns.md)

Defined in: [src/types.ts:507](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L507)

Returns the like and dislike elements, as well as the current state of them as a string constant

***

### getLocale

> **getLocale**: *typeof* [`getLocale`](../../utils/functions/getLocale.md)

Defined in: [src/types.ts:523](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L523)

Returns the current locale

***

### getLyricsCacheEntry

> **getLyricsCacheEntry**: *typeof* [`getLyricsCacheEntry`](../../features/functions/getLyricsCacheEntry.md)

Defined in: [src/types.ts:553](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L553)

Returns the lyrics cache entry for the provided song and artist, if there is one. Never sends a request on its own.

***

### getPluginInfo

> **getPluginInfo**: *typeof* [`getPluginInfo`](../../interface/functions/getPluginInfo.md)

Defined in: [src/types.ts:454](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L454)

🔒 Checks if the plugin with the given name and namespace is registered and returns an info object about it

***

### getResourceUrl

> **getResourceUrl**: *typeof* [`getResourceUrl`](../../utils/functions/getResourceUrl.md)

Defined in: [src/types.ts:468](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L468)

Returns the URL of a resource as defined in `assets/resources.json`  
There are also some resources like translation files that get added by `tools/post-build.ts`  
  
The returned URL is a `blob:` URL served up by the userscript extension  
This makes the resource fast to fetch and also prevents CORS issues

***

### getSessionId

> **getSessionId**: *typeof* [`getSessionId`](../../utils/functions/getSessionId.md)

Defined in: [src/types.ts:475](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L475)

Returns the unique session ID for the current tab

***

### getThumbnailUrl

> **getThumbnailUrl**: *typeof* [`getThumbnailUrl`](../../utils/functions/getThumbnailUrl.md)

Defined in: [src/types.ts:493](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L493)

Returns the thumbnail URL for the provided video ID and thumbnail quality

***

### getVideoElement

> **getVideoElement**: *typeof* [`getVideoElement`](../../utils/functions/getVideoElement.md)

Defined in: [src/types.ts:501](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L501)

Returns the video element on the current page for both YTM and YT - returns null if it couldn't be found

***

### getVideoSelector

> **getVideoSelector**: *typeof* [`getVideoSelector`](../../utils/functions/getVideoSelector.md)

Defined in: [src/types.ts:503](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L503)

Returns the CSS selector to the video element for both YTM and YT

***

### getVideoTime

> **getVideoTime**: *typeof* [`getVideoTime`](../../utils/functions/getVideoTime.md)

Defined in: [src/types.ts:491](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L491)

Returns the current video time (on both YT and YTM)  
In case it can't be determined on YT, mouse movement is simulated to bring up the video time  
In order for that edge case not to error out, the function would need to be called in response to a user interaction event (e.g. click) due to the strict autoplay policy in browsers

***

### hasKey

> **hasKey**: *typeof* [`hasKey`](../../utils/functions/hasKey.md)

Defined in: [src/types.ts:525](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L525)

Returns whether a translation key exists for the set locale

***

### hasKeyFor

> **hasKeyFor**: *typeof* [`hasKeyFor`](../../utils/functions/hasKeyFor.md)

Defined in: [src/types.ts:527](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L527)

Returns whether a translation key exists for the provided locale

***

### isIgnoredInputElement

> **isIgnoredInputElement**: *typeof* [`isIgnoredInputElement`](../../features/functions/isIgnoredInputElement.md)

Defined in: [src/types.ts:509](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L509)

Checks whether the given element (or document.activeElement by default) is input element, so all other global keypresses should be ignored

***

### onceSiteEvent

> **onceSiteEvent**: *typeof* `siteEvents.once`

Defined in: [src/types.ts:515](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L515)

Adds a site event listener that is only called once and also returns a Promise for use with the async/await pattern

***

### onInteraction

> **onInteraction**: *typeof* [`onInteraction`](../../utils/functions/onInteraction.md)

Defined in: [src/types.ts:485](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L485)

Registers accessible interaction listeners (click, enter, space) on the provided element

***

### onMultiSiteEvents

> **onMultiSiteEvents**: *typeof* `siteEvents.onMulti`

Defined in: [src/types.ts:517](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L517)

Adds a listener for multiple site events at once, with configurable behavior

***

### onSiteEvent

> **onSiteEvent**: *typeof* `siteEvents.on`

Defined in: [src/types.ts:513](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L513)

Adds a site event listener

***

### reloadTab

> **reloadTab**: *typeof* [`reloadTab`](../../utils/functions/reloadTab.md)

Defined in: [src/types.ts:477](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L477)

Smarter version of `location.reload()` that remembers video time and volume and makes other features like initial tab volume stand down if used

***

### resourceAsString

> **resourceAsString**: *typeof* [`resourceAsString`](../../utils/functions/resourceAsString.md)

Defined in: [src/types.ts:473](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L473)

Returns the string content of a resource as defined in `assets/resources.json` as a Promise.  
Uses a builtin cache to speed up subsequent calls, even across sessions.

***

### sanitizeArtists

> **sanitizeArtists**: *typeof* [`sanitizeArtists`](../../features/functions/sanitizeArtists.md)

Defined in: [src/types.ts:547](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L547)

Sanitizes the provided artist string - this needs to be done before calling other lyrics related functions!

***

### sanitizeSong

> **sanitizeSong**: *typeof* [`sanitizeSong`](../../features/functions/sanitizeSong.md)

Defined in: [src/types.ts:549](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L549)

Sanitizes the provided song title string - this needs to be done before calling other lyrics related functions!

***

### saveAutoLikeData

> **saveAutoLikeData**: *typeof* [`saveAutoLikeDataInterface`](../../interface/functions/saveAutoLikeDataInterface.md)

Defined in: [src/types.ts:559](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L559)

🔒 Overwrites the auto-like data

***

### saveFeatures

> **saveFeatures**: *typeof* [`saveFeaturesInterface`](../../interface/functions/saveFeaturesInterface.md)

Defined in: [src/types.ts:541](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L541)

🔒 Overwrites the feature configuration with the provided one

***

### setInnerHtml

> **setInnerHtml**: *typeof* [`setInnerHtml`](../../utils/functions/setInnerHtml.md)

Defined in: [src/types.ts:481](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L481)

Sets the innerHTML property of the provided element to a sanitized version of the provided HTML string

***

### setLocale

> **setLocale**: *typeof* [`setLocaleInterface`](../../interface/functions/setLocaleInterface.md)

Defined in: [src/types.ts:521](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L521)

🔒 Sets the locale for all new translations

***

### showIconToast

> **showIconToast**: *typeof* [`showIconToast`](../../components/toast/functions/showIconToast.md)

Defined in: [src/types.ts:575](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L575)

Shows a toast with the provided text and an icon

***

### showPrompt

> **showPrompt**: *typeof* [`showPromptInterface`](../../interface/functions/showPromptInterface.md)

Defined in: [src/types.ts:577](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L577)

Shows a styled confirm() or alert() dialog with the provided message

***

### showToast

> **showToast**: *typeof* [`showToast`](../../components/toast/functions/showToast.md)

Defined in: [src/types.ts:573](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L573)

Shows a toast with the provided text

***

### t

> **t**: *typeof* [`t`](../../utils/functions/t.md)

Defined in: [src/types.ts:529](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L529)

Returns the translation for the provided translation key and currently set locale (check the files in the folder `assets/translations`)

***

### tl

> **tl**: *typeof* [`tl`](../../utils/functions/tl.md)

Defined in: [src/types.ts:533](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L533)

Returns the translation for the provided translation key and provided locale (check the files in the folder `assets/translations`)

***

### tlp

> **tlp**: *typeof* [`tlp`](../../utils/functions/tlp.md)

Defined in: [src/types.ts:535](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L535)

Returns the translation for the provided translation key, including pluralization identifier and provided locale (check the files in the folder `assets/translations`)

***

### tp

> **tp**: *typeof* [`tp`](../../utils/functions/tp.md)

Defined in: [src/types.ts:531](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L531)

Returns the translation for the provided translation key, including pluralization identifier and set locale (check the files in the folder `assets/translations`)

***

### waitVideoElementReady

> **waitVideoElementReady**: *typeof* [`waitVideoElementReady`](../../utils/functions/waitVideoElementReady.md)

Defined in: [src/types.ts:499](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L499)

Resolves the returned promise when the video element is queryable in the DOM
