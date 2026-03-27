[**@sv443/betterytm**](../../README.md)

***

[@sv443/betterytm](../../modules.md) / [types](../README.md) / FeatureConfig

# Interface: FeatureConfig

Defined in: [src/types.ts:764](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L764)

Feature configuration object, as saved in memory and persistent storage

## Properties

### aboveQueueBtnsSticky

> **aboveQueueBtnsSticky**: `boolean`

Defined in: [src/types.ts:851](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L851)

Whether the above queue button container should use sticky positioning

***

### advancedMode

> **advancedMode**: `boolean`

Defined in: [src/types.ts:793](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L793)

Whether to show advanced settings in the config menu

***

### anchorImprovements

> **anchorImprovements**: `boolean`

Defined in: [src/types.ts:944](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L944)

Make it so middle clicking a song to open it in a new tab (through thumbnail and song title) is easier

***

### arrowKeySkipBy

> **arrowKeySkipBy**: `number`

Defined in: [src/types.ts:934](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L934)

By how many seconds to skip when pressing the left/right arrow keys

***

### arrowKeySupport

> **arrowKeySupport**: `boolean`

Defined in: [src/types.ts:932](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L932)

Arrow keys to skip forwards and backwards and change volume

***

### arrowKeyVolumeStep

> **arrowKeyVolumeStep**: `number`

Defined in: [src/types.ts:936](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L936)

By how much to change the volume when pressing the up/down arrow keys

***

### autoCloseToasts

> **autoCloseToasts**: `boolean`

Defined in: [src/types.ts:897](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L897)

Whether to automatically close permanent toasts

***

### autoLikeChannels

> **autoLikeChannels**: `boolean`

Defined in: [src/types.ts:917](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L917)

Whether to auto-like all played videos of configured channels

***

### autoLikeChannelToggleBtn

> **autoLikeChannelToggleBtn**: `boolean`

Defined in: [src/types.ts:919](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L919)

Whether to show toggle buttons on the channel page to enable/disable auto-liking for that channel

***

### autoLikeOpenMgmtDialog

> **autoLikeOpenMgmtDialog**: `undefined`

Defined in: [src/types.ts:928](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L928)

Opens the auto-like channels management dialog

***

### autoLikeShowToast

> **autoLikeShowToast**: `boolean`

Defined in: [src/types.ts:926](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L926)

Whether to show a toast when a video is auto-liked

***

### autoLikeTimeout

> **autoLikeTimeout**: `number`

Defined in: [src/types.ts:924](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L924)

How long to wait after a video has started playing to auto-like it

***

### autoScrollToActiveSongMode

> **autoScrollToActiveSongMode**: `"never"` \| `"initialPageLoad"` \| `"videoChangeAll"` \| `"videoChangeManual"` \| `"videoChangeAuto"`

Defined in: [src/types.ts:911](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L911)

When to automatically scroll to the active song in the queue

***

### checkVersionNow

> **checkVersionNow**: `undefined`

Defined in: [src/types.ts:773](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L773)

Button to check for updates

***

### clearLyricsCache

> **clearLyricsCache**: `undefined`

Defined in: [src/types.ts:871](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L871)

Button to clear lyrics cache

***

### clearQueueBtn

> **clearQueueBtn**: `boolean`

Defined in: [src/types.ts:849](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L849)

Add a button above the queue to clear it

***

### clearSearchBarHotkey

> **clearSearchBarHotkey**: [`HotkeyObj`](../type-aliases/HotkeyObj.md)

Defined in: [src/types.ts:980](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L980)

The hotkey that needs to be pressed to clear the search bar

***

### clearSearchBarHotkeyEnabled

> **clearSearchBarHotkeyEnabled**: `boolean`

Defined in: [src/types.ts:978](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L978)

Add a hotkey to clear the search bar on both pages

***

### closeToastsTimeout

> **closeToastsTimeout**: `number`

Defined in: [src/types.ts:899](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L899)

After how many seconds to close permanent toasts

***

### currentLyricsHotkey

> **currentLyricsHotkey**: [`HotkeyObj`](../type-aliases/HotkeyObj.md)

Defined in: [src/types.ts:968](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L968)

The hotkey that needs to be pressed to open the current song's lyrics in a new tab

***

### currentLyricsHotkeyEnabled

> **currentLyricsHotkeyEnabled**: `boolean`

Defined in: [src/types.ts:966](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L966)

Add a hotkey to open the current song's lyrics in a new tab

***

### defaultObserverDebounce

> **defaultObserverDebounce**: `number`

Defined in: [src/types.ts:787](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L787)

Time in milliseconds between SelectorObserver checks - lower number = faster reaction to DOM changes but also more CPU usage

***

### deleteFromQueueButton

> **deleteFromQueueButton**: `boolean`

Defined in: [src/types.ts:843](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L843)

Add a button to each song in the queue to quickly remove it

***

### disableBeforeUnloadPopup

> **disableBeforeUnloadPopup**: `boolean`

Defined in: [src/types.ts:895](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L895)

Whether to completely disable the popup that sometimes appears before leaving the site

***

### disableDarkReaderSites

> **disableDarkReaderSites**: [`SiteSelectionOrNone`](../type-aliases/SiteSelectionOrNone.md)

Defined in: [src/types.ts:994](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L994)

On which sites to disable Dark Reader - does nothing if the extension is not installed

***

### dislikeHotkey

> **dislikeHotkey**: [`HotkeyObj`](../type-aliases/HotkeyObj.md)

Defined in: [src/types.ts:964](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L964)

The hotkey that needs to be pressed to dislike the current video/song

***

### errorOnLyricsNotFound

> **errorOnLyricsNotFound**: `boolean`

Defined in: [src/types.ts:861](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L861)

Whether to show an error when no lyrics were found

***

### fixHdrIssues

> **fixHdrIssues**: `boolean`

Defined in: [src/types.ts:829](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L829)

Whether to fix various issues in the layout when HDR is supported and active

***

### fixSpacing

> **fixSpacing**: `boolean`

Defined in: [src/types.ts:803](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L803)

Fix spacing issues in the layout

***

### focusSearchBarHotkey

> **focusSearchBarHotkey**: [`HotkeyObj`](../type-aliases/HotkeyObj.md)

Defined in: [src/types.ts:976](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L976)

The hotkey that needs to be pressed to focus the search bar

***

### focusSearchBarHotkeyEnabled

> **focusSearchBarHotkeyEnabled**: `boolean`

Defined in: [src/types.ts:974](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L974)

Add a hotkey to focus the search bar on both pages

***

### frameSkip

> **frameSkip**: `boolean`

Defined in: [src/types.ts:938](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L938)

Use . and , keys to skip by a frame while the video is paused

***

### frameSkipAmount

> **frameSkipAmount**: `number`

Defined in: [src/types.ts:942](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L942)

Amount of seconds to skip when pressing the . and , keys

***

### frameSkipWhilePlaying

> **frameSkipWhilePlaying**: `boolean`

Defined in: [src/types.ts:940](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L940)

Allow frame skipping while the song is playing

***

### geniUrlBase

> **geniUrlBase**: `string`

Defined in: [src/types.ts:863](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L863)

Base URL to use for GeniURL

***

### geniUrlToken

> **geniUrlToken**: `string`

Defined in: [src/types.ts:865](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L865)

Token to use for GeniURL

***

### geniusLyrics

> **geniusLyrics**: `boolean`

Defined in: [src/types.ts:859](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L859)

Add a button to the media controls to open the current song's lyrics on genius.com in a new tab

***

### hideCursorOnIdle

> **hideCursorOnIdle**: `boolean`

Defined in: [src/types.ts:823](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L823)

Hide the cursor when it's idling on the video element for a while

***

### hideCursorOnIdleDelay

> **hideCursorOnIdleDelay**: `number`

Defined in: [src/types.ts:825](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L825)

Delay in seconds after which the cursor should be hidden

***

### hidePlayerBarOnIdleInFullscreen

> **hidePlayerBarOnIdleInFullscreen**: `boolean`

Defined in: [src/types.ts:827](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L827)

When in fullscreen and the cursor is idling according to the `hideCursorOnIdle` feature, also hide the player bar

***

### initialTabVolumeLevel

> **initialTabVolumeLevel**: `number`

Defined in: [src/types.ts:891](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L891)

The initial volume level to set for each new session

***

### initTimeout

> **initTimeout**: `number`

Defined in: [src/types.ts:785](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L785)

Amount of seconds until the feature initialization times out

***

### likeDislikeHotkeys

> **likeDislikeHotkeys**: `boolean`

Defined in: [src/types.ts:958](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L958)

Add hotkeys for liking and disliking the current video/song

***

### likeDislikeHotkeysToggle

> **likeDislikeHotkeysToggle**: `boolean`

Defined in: [src/types.ts:960](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L960)

Whether the hotkeys should toggle the like/dislike buttons instead of only setting them

***

### likeHotkey

> **likeHotkey**: [`HotkeyObj`](../type-aliases/HotkeyObj.md)

Defined in: [src/types.ts:962](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L962)

The hotkey that needs to be pressed to like the current video/song

***

### listButtonsPlacement

> **listButtonsPlacement**: `"currentQueue"` \| `"genericLists"` \| `"everywhere"`

Defined in: [src/types.ts:845](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L845)

Where to place the buttons in the queue

***

### locale

> **locale**: `"de-DE"` \| `"en-US"` \| `"en-GB"` \| `"es-ES"` \| `"fr-FR"` \| `"hi-IN"` \| `"ja-JP"` \| `"pt-BR"` \| `"zh-CN"`

Defined in: [src/types.ts:767](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L767)

The locale to use for translations

***

### localeFallback

> **localeFallback**: `boolean`

Defined in: [src/types.ts:769](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L769)

Whether to default to US-English if the translation for the set locale is missing

***

### logEvents

> **logEvents**: `boolean`

Defined in: [src/types.ts:777](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L777)

Whether to log interface and site events to the console

***

### logHttp

> **logHttp**: `boolean`

Defined in: [src/types.ts:779](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L779)

Whether to log HTTP requests sent via `GM.xmlHttpRequest` to the console

***

### logLevel

> **logLevel**: [`LogLevel`](../enumerations/LogLevel.md)

Defined in: [src/types.ts:775](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L775)

The console log level - 0 = Debug, 1 = Info

***

### lyricsCacheMaxSize

> **lyricsCacheMaxSize**: `number`

Defined in: [src/types.ts:867](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L867)

Max size of lyrics cache

***

### lyricsCacheTTL

> **lyricsCacheTTL**: `number`

Defined in: [src/types.ts:869](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L869)

Max TTL of lyrics cache entries, in ms

***

### lyricsQueueButton

> **lyricsQueueButton**: `boolean`

Defined in: [src/types.ts:841](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L841)

Add a button to each song in the queue to quickly open its lyrics page

***

### nextHotkey

> **nextHotkey**: [`HotkeyObj`](../type-aliases/HotkeyObj.md)

Defined in: [src/types.ts:984](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L984)

The hotkey that needs to be pressed to skip to the next video/song

***

### numbersFormat

> **numbersFormat**: [`NumberLengthFormat`](../type-aliases/NumberLengthFormat.md)

Defined in: [src/types.ts:835](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L835)

Which format to use for the like/dislike ratio on the currently playing song

***

### numKeysSkipToTime

> **numKeysSkipToTime**: `boolean`

Defined in: [src/types.ts:946](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L946)

Enable skipping to a specific time in the video by pressing a number key (0-9)

***

### numKeysSkipToTimeDoublePress

> **numKeysSkipToTimeDoublePress**: `number`

Defined in: [src/types.ts:948](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L948)

Whether skipping to a specific time requires two key presses and in which time frame

***

### numKeysSkipToTimeDoublePressBuffer

> **numKeysSkipToTimeDoublePressBuffer**: `number`

Defined in: [src/types.ts:950](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L950)

Whether there's a buffer for double pressing the number keys to skip to a specific time, and how long it is in seconds

***

### openPluginDiscoverySite

> **openPluginDiscoverySite**: `undefined`

Defined in: [src/types.ts:1014](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L1014)

Button that opens the plugin discovery site

***

### openPluginList

> **openPluginList**: `undefined`

Defined in: [src/types.ts:1012](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L1012)

Button that opens the plugin list dialog

***

### playPauseHotkey

> **playPauseHotkey**: [`HotkeyObj`](../type-aliases/HotkeyObj.md)

Defined in: [src/types.ts:990](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L990)

The hotkey that needs to be pressed to play/pause the current video/song

***

### previousHotkey

> **previousHotkey**: [`HotkeyObj`](../type-aliases/HotkeyObj.md)

Defined in: [src/types.ts:986](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L986)

The hotkey that needs to be pressed to skip to the previous video/song

***

### rebindNextAndPrevious

> **rebindNextAndPrevious**: `boolean`

Defined in: [src/types.ts:982](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L982)

Whether to rebind the next [J] and previous [K] keys

***

### rebindPlayPause

> **rebindPlayPause**: `boolean`

Defined in: [src/types.ts:988](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L988)

Whether to rebind the play/pause hotkey

***

### rememberSongTime

> **rememberSongTime**: `boolean`

Defined in: [src/types.ts:901](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L901)

Remember the last song's time when reloading or restoring the tab

***

### rememberSongTimeDuration

> **rememberSongTimeDuration**: `number`

Defined in: [src/types.ts:905](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L905)

Time in seconds to remember the song time for

***

### rememberSongTimeMinPlayTime

> **rememberSongTimeMinPlayTime**: `number`

Defined in: [src/types.ts:909](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L909)

Minimum time in seconds the song needs to be played before it is remembered

***

### rememberSongTimeReduction

> **rememberSongTimeReduction**: `number`

Defined in: [src/types.ts:907](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L907)

Time in seconds to subtract from the remembered song time

***

### rememberSongTimeSites

> **rememberSongTimeSites**: [`SiteSelection`](../type-aliases/SiteSelection.md)

Defined in: [src/types.ts:903](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L903)

Where to remember the song time

***

### removeShareTrackingParam

> **removeShareTrackingParam**: `boolean`

Defined in: [src/types.ts:799](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L799)

Remove the "si" tracking parameter from links in the share menu?

***

### removeShareTrackingParamSites

> **removeShareTrackingParamSites**: [`SiteSelection`](../type-aliases/SiteSelection.md)

Defined in: [src/types.ts:801](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L801)

On which sites to remove the "si" tracking parameter from links in the share menu

***

### removeThumbnailRatingBar

> **removeThumbnailRatingBar**: `boolean`

Defined in: [src/types.ts:1008](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L1008)

Removes all thumbnail rating bars if the extension is installed

***

### resetConfig

> **resetConfig**: `undefined`

Defined in: [src/types.ts:789](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L789)

Button that resets the config to the default state

***

### resetEverything

> **resetEverything**: `undefined`

Defined in: [src/types.ts:791](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L791)

Button to reset every DataStore instance to their default values

***

### scrollToActiveSongBtn

> **scrollToActiveSongBtn**: `boolean`

Defined in: [src/types.ts:847](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L847)

Add a button above the queue to scroll to the currently playing song

***

### setInitialTabVolume

> **setInitialTabVolume**: `boolean`

Defined in: [src/types.ts:889](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L889)

Whether to set an initial volume level for each new session

***

### showToastOnGenericError

> **showToastOnGenericError**: `boolean`

Defined in: [src/types.ts:783](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L783)

Whether to show a toast on generic errors

***

### showVotes

> **showVotes**: `boolean`

Defined in: [src/types.ts:831](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L831)

Whether to show the like/dislike ratio on the currently playing song

***

### skipToRemTimeHotkey

> **skipToRemTimeHotkey**: [`HotkeyObj`](../type-aliases/HotkeyObj.md)

Defined in: [src/types.ts:972](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L972)

The hotkey that needs to be pressed to skip to the last remembered time of the current video/song

***

### skipToRemTimeHotkeyEnabled

> **skipToRemTimeHotkeyEnabled**: `boolean`

Defined in: [src/types.ts:970](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L970)

Add a hotkey to skip to the last remembered time of the current video/song

***

### songListTrackNumbers

> **songListTrackNumbers**: `"currentQueue"` \| `"genericLists"` \| `"everywhere"`

Defined in: [src/types.ts:855](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L855)

Where to add track numbers

***

### songListTrackNumbersEnabled

> **songListTrackNumbersEnabled**: `boolean`

Defined in: [src/types.ts:853](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L853)

Add track numbers to each song list item

***

### sponsorBlockIntegration

> **sponsorBlockIntegration**: `boolean`

Defined in: [src/types.ts:996](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L996)

Whether to fix the styling of some elements from the SponsorBlock extension - does nothing if the extension is not installed

***

### swapLikeDislikeButtons

> **swapLikeDislikeButtons**: `boolean`

Defined in: [src/types.ts:833](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L833)

Whether to swap the like and dislike buttons in the media controls

***

### switchBetweenSites

> **switchBetweenSites**: `boolean`

Defined in: [src/types.ts:954](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L954)

Add a hotkey to switch between the YT and YTM sites on a video/song

***

### switchSitesHotkey

> **switchSitesHotkey**: [`HotkeyObj`](../type-aliases/HotkeyObj.md)

Defined in: [src/types.ts:956](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L956)

The hotkey that needs to be pressed to initiate the site switch

***

### themeSongIntegration

> **themeSongIntegration**: `boolean`

Defined in: [src/types.ts:998](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L998)

Whether to adjust styles so they look better when using the ThemeSong extension

***

### themeSongLightness

> **themeSongLightness**: [`ColorLightnessPref`](../type-aliases/ColorLightnessPref.md)

Defined in: [src/types.ts:1000](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L1000)

Lightness of the color used when ThemeSong is enabled

***

### themeSongVisualizerHotkey

> **themeSongVisualizerHotkey**: [`HotkeyObj`](../type-aliases/HotkeyObj.md)

Defined in: [src/types.ts:1006](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L1006)

The hotkey that needs to be pressed to toggle the ThemeSong visualizer on and off

***

### themeSongVisualizerHotkeyEnabled

> **themeSongVisualizerHotkeyEnabled**: `boolean`

Defined in: [src/types.ts:1004](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L1004)

Whether to add a hotkey to toggle the ThemeSong visualizer on and off

***

### themeSongVisualizerOpacity

> **themeSongVisualizerOpacity**: `number`

Defined in: [src/types.ts:1002](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L1002)

0-100 value for how opaque the ThemeSong visualizer should be when it's enabled

***

### thumbnailOverlayAlbumArtCacheMaxSize

> **thumbnailOverlayAlbumArtCacheMaxSize**: `number`

Defined in: [src/types.ts:815](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L815)

Maximum number of entries in the album art cache

***

### thumbnailOverlayAlbumArtCacheTTL

> **thumbnailOverlayAlbumArtCacheTTL**: `number`

Defined in: [src/types.ts:813](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L813)

For how long to cache the album art images fetched from the iTunes API

***

### thumbnailOverlayBehavior

> **thumbnailOverlayBehavior**: `"never"` \| `"videosOnly"` \| `"songsOnly"` \| `"always"`

Defined in: [src/types.ts:807](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L807)

Where to show a thumbnail overlay over the video element and whether to show it at all

***

### thumbnailOverlayIndicatorOpacity

> **thumbnailOverlayIndicatorOpacity**: `number`

Defined in: [src/types.ts:819](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L819)

The opacity of the thumbnail overlay indicator element

***

### thumbnailOverlayITunesImgRes

> **thumbnailOverlayITunesImgRes**: `number`

Defined in: [src/types.ts:811](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L811)

The width and height of the image fetched from the iTunes API

***

### thumbnailOverlayPreferredSource

> **thumbnailOverlayPreferredSource**: `"yt"` \| `"am"`

Defined in: [src/types.ts:821](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L821)

Whether to prefer fetching iTunes album covers over YT thumbnails

***

### thumbnailOverlayShowIndicator

> **thumbnailOverlayShowIndicator**: `boolean`

Defined in: [src/types.ts:817](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L817)

Whether to show an indicator on the thumbnail overlay when it is active

***

### thumbnailOverlayToggleBtnShown

> **thumbnailOverlayToggleBtnShown**: `boolean`

Defined in: [src/types.ts:809](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L809)

Whether to show a button to toggle the thumbnail overlay in the media controls

***

### toastDuration

> **toastDuration**: `number`

Defined in: [src/types.ts:781](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L781)

Amount of seconds to show BYTM's toasts for

***

### truncatePlayerBarSubtitles

> **truncatePlayerBarSubtitles**: `boolean`

Defined in: [src/types.ts:805](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L805)

Whether to truncate the song title, artist name, album name, release year, and like/dislike ratio in the player bar using an ellipsis

***

### versionCheck

> **versionCheck**: `boolean`

Defined in: [src/types.ts:771](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L771)

Whether to check for updates to the script

***

### volumeSharedBetweenTabs

> **volumeSharedBetweenTabs**: `boolean`

Defined in: [src/types.ts:887](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L887)

Whether the volume should be locked to the same level across all tabs (changing in one changes in all others too)

***

### volumeSliderExponential

> **volumeSliderExponential**: `"linear"` \| `"x^2"` \| `"x^3"` \| `"x^4"` \| `"x^5"`

Defined in: [src/types.ts:875](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L875)

Use exponential scaling for the volume slider

***

### volumeSliderExponentialLabelType

> **volumeSliderExponentialLabelType**: `"positionBased"` \| `"valueBased"` \| `"both"`

Defined in: [src/types.ts:877](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L877)

Type of label to show on the volume slider when using exponential scaling

***

### volumeSliderLabel

> **volumeSliderLabel**: `boolean`

Defined in: [src/types.ts:879](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L879)

Add a percentage label to the volume slider

***

### volumeSliderScrollStep

> **volumeSliderScrollStep**: `number`

Defined in: [src/types.ts:885](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L885)

Volume slider scroll wheel sensitivity

***

### volumeSliderSize

> **volumeSliderSize**: `number`

Defined in: [src/types.ts:881](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L881)

The width of the volume slider in pixels

***

### volumeSliderStep

> **volumeSliderStep**: `number`

Defined in: [src/types.ts:883](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L883)

Volume slider sensitivity - the smaller this number, the finer the volume control

***

### watchPageFullSize

> **watchPageFullSize**: `boolean`

Defined in: [src/types.ts:837](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L837)

Whether to remove all padding around the main content on the /watch page on YTM

***

### watermarkEnabled

> **watermarkEnabled**: `boolean`

Defined in: [src/types.ts:797](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L797)

Show a BetterYTM watermark under the YTM logo

***

### yesImStillThere

> **yesImStillThere**: `boolean`

Defined in: [src/types.ts:913](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L913)

Whether to automatically click the "Yes" button on the "Are you still there?" popup
