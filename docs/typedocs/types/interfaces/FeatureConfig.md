[**betterytm**](../../README.md)

***

[betterytm](../../modules.md) / [types](../README.md) / FeatureConfig

# Interface: FeatureConfig

Defined in: [src/types.ts:683](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L683)

Feature configuration object, as saved in memory and persistent storage

## Properties

### aboveQueueBtnsSticky

> **aboveQueueBtnsSticky**: `boolean`

Defined in: [src/types.ts:760](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L760)

Whether the above queue button container should use sticky positioning

***

### advancedMode

> **advancedMode**: `boolean`

Defined in: [src/types.ts:706](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L706)

Whether to show advanced settings in the config menu

***

### anchorImprovements

> **anchorImprovements**: `boolean`

Defined in: [src/types.ts:855](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L855)

Make it so middle clicking a song to open it in a new tab (through thumbnail and song title) is easier

***

### arrowKeySkipBy

> **arrowKeySkipBy**: `number`

Defined in: [src/types.ts:845](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L845)

By how many seconds to skip when pressing the left/right arrow keys

***

### arrowKeySupport

> **arrowKeySupport**: `boolean`

Defined in: [src/types.ts:843](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L843)

Arrow keys to skip forwards and backwards and change volume

***

### arrowKeyVolumeStep

> **arrowKeyVolumeStep**: `number`

Defined in: [src/types.ts:847](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L847)

By how much to change the volume when pressing the up/down arrow keys

***

### autoCloseToasts

> **autoCloseToasts**: `boolean`

Defined in: [src/types.ts:808](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L808)

Whether to automatically close permanent toasts

***

### autoLikeChannels

> **autoLikeChannels**: `boolean`

Defined in: [src/types.ts:828](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L828)

Whether to auto-like all played videos of configured channels

***

### autoLikeChannelToggleBtn

> **autoLikeChannelToggleBtn**: `boolean`

Defined in: [src/types.ts:830](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L830)

Whether to show toggle buttons on the channel page to enable/disable auto-liking for that channel

***

### autoLikeOpenMgmtDialog

> **autoLikeOpenMgmtDialog**: `undefined`

Defined in: [src/types.ts:839](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L839)

Opens the auto-like channels management dialog

***

### autoLikeShowToast

> **autoLikeShowToast**: `boolean`

Defined in: [src/types.ts:837](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L837)

Whether to show a toast when a video is auto-liked

***

### autoLikeTimeout

> **autoLikeTimeout**: `number`

Defined in: [src/types.ts:835](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L835)

How long to wait after a video has started playing to auto-like it

***

### autoScrollToActiveSongMode

> **autoScrollToActiveSongMode**: `"never"` \| `"initialPageLoad"` \| `"videoChangeAll"` \| `"videoChangeManual"` \| `"videoChangeAuto"`

Defined in: [src/types.ts:822](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L822)

When to automatically scroll to the active song in the queue

***

### checkVersionNow

> **checkVersionNow**: `undefined`

Defined in: [src/types.ts:692](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L692)

Button to check for updates

***

### clearLyricsCache

> **clearLyricsCache**: `undefined`

Defined in: [src/types.ts:780](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L780)

Button to clear lyrics cache

***

### clearQueueBtn

> **clearQueueBtn**: `boolean`

Defined in: [src/types.ts:758](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L758)

Add a button above the queue to clear it

***

### clearSearchBarHotkey

> **clearSearchBarHotkey**: [`HotkeyObj`](../type-aliases/HotkeyObj.md)

Defined in: [src/types.ts:891](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L891)

The hotkey that needs to be pressed to clear the search bar

***

### clearSearchBarHotkeyEnabled

> **clearSearchBarHotkeyEnabled**: `boolean`

Defined in: [src/types.ts:889](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L889)

Add a hotkey to clear the search bar on both pages

***

### closeToastsTimeout

> **closeToastsTimeout**: `number`

Defined in: [src/types.ts:810](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L810)

After how many seconds to close permanent toasts

***

### currentLyricsHotkey

> **currentLyricsHotkey**: [`HotkeyObj`](../type-aliases/HotkeyObj.md)

Defined in: [src/types.ts:879](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L879)

The hotkey that needs to be pressed to open the current song's lyrics in a new tab

***

### currentLyricsHotkeyEnabled

> **currentLyricsHotkeyEnabled**: `boolean`

Defined in: [src/types.ts:877](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L877)

Add a hotkey to open the current song's lyrics in a new tab

***

### deleteFromQueueButton

> **deleteFromQueueButton**: `boolean`

Defined in: [src/types.ts:752](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L752)

Add a button to each song in the queue to quickly remove it

***

### disableBeforeUnloadPopup

> **disableBeforeUnloadPopup**: `boolean`

Defined in: [src/types.ts:806](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L806)

Whether to completely disable the popup that sometimes appears before leaving the site

***

### disableDarkReaderSites

> **disableDarkReaderSites**: [`SiteSelectionOrNone`](../type-aliases/SiteSelectionOrNone.md)

Defined in: [src/types.ts:905](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L905)

On which sites to disable Dark Reader - does nothing if the extension is not installed

***

### dislikeHotkey

> **dislikeHotkey**: [`HotkeyObj`](../type-aliases/HotkeyObj.md)

Defined in: [src/types.ts:875](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L875)

The hotkey that needs to be pressed to dislike the current video/song

***

### errorOnLyricsNotFound

> **errorOnLyricsNotFound**: `boolean`

Defined in: [src/types.ts:770](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L770)

Whether to show an error when no lyrics were found

***

### fixHdrIssues

> **fixHdrIssues**: `boolean`

Defined in: [src/types.ts:738](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L738)

Whether to fix various issues in the layout when HDR is supported and active

***

### fixSpacing

> **fixSpacing**: `boolean`

Defined in: [src/types.ts:716](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L716)

Fix spacing issues in the layout

***

### focusSearchBarHotkey

> **focusSearchBarHotkey**: [`HotkeyObj`](../type-aliases/HotkeyObj.md)

Defined in: [src/types.ts:887](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L887)

The hotkey that needs to be pressed to focus the search bar

***

### focusSearchBarHotkeyEnabled

> **focusSearchBarHotkeyEnabled**: `boolean`

Defined in: [src/types.ts:885](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L885)

Add a hotkey to focus the search bar on both pages

***

### frameSkip

> **frameSkip**: `boolean`

Defined in: [src/types.ts:849](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L849)

Use . and , keys to skip by a frame while the video is paused

***

### frameSkipAmount

> **frameSkipAmount**: `number`

Defined in: [src/types.ts:853](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L853)

Amount of seconds to skip when pressing the . and , keys

***

### frameSkipWhilePlaying

> **frameSkipWhilePlaying**: `boolean`

Defined in: [src/types.ts:851](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L851)

Allow frame skipping while the song is playing

***

### geniUrlBase

> **geniUrlBase**: `string`

Defined in: [src/types.ts:772](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L772)

Base URL to use for GeniURL

***

### geniUrlToken

> **geniUrlToken**: `string`

Defined in: [src/types.ts:774](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L774)

Token to use for GeniURL

***

### geniusLyrics

> **geniusLyrics**: `boolean`

Defined in: [src/types.ts:768](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L768)

Add a button to the media controls to open the current song's lyrics on genius.com in a new tab

***

### hideCursorOnIdle

> **hideCursorOnIdle**: `boolean`

Defined in: [src/types.ts:734](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L734)

Hide the cursor when it's idling on the video element for a while

***

### hideCursorOnIdleDelay

> **hideCursorOnIdleDelay**: `number`

Defined in: [src/types.ts:736](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L736)

Delay in seconds after which the cursor should be hidden

***

### initialTabVolumeLevel

> **initialTabVolumeLevel**: `number`

Defined in: [src/types.ts:802](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L802)

The initial volume level to set for each new session

***

### initTimeout

> **initTimeout**: `number`

Defined in: [src/types.ts:700](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L700)

Amount of seconds until the feature initialization times out

***

### likeDislikeHotkeys

> **likeDislikeHotkeys**: `boolean`

Defined in: [src/types.ts:869](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L869)

Add hotkeys for liking and disliking the current video/song

***

### likeDislikeHotkeysToggle

> **likeDislikeHotkeysToggle**: `boolean`

Defined in: [src/types.ts:871](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L871)

Whether the hotkeys should toggle the like/dislike buttons instead of only setting them

***

### likeHotkey

> **likeHotkey**: [`HotkeyObj`](../type-aliases/HotkeyObj.md)

Defined in: [src/types.ts:873](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L873)

The hotkey that needs to be pressed to like the current video/song

***

### listButtonsPlacement

> **listButtonsPlacement**: `"currentQueue"` \| `"genericLists"` \| `"everywhere"`

Defined in: [src/types.ts:754](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L754)

Where to place the buttons in the queue

***

### locale

> **locale**: `"de-DE"` \| `"en-US"` \| `"en-GB"` \| `"es-ES"` \| `"fr-FR"` \| `"hi-IN"` \| `"ja-JP"` \| `"pt-BR"` \| `"zh-CN"`

Defined in: [src/types.ts:686](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L686)

The locale to use for translations

***

### localeFallback

> **localeFallback**: `boolean`

Defined in: [src/types.ts:688](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L688)

Whether to default to US-English if the translation for the set locale is missing

***

### logLevel

> **logLevel**: [`LogLevel`](../enumerations/LogLevel.md)

Defined in: [src/types.ts:694](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L694)

The console log level - 0 = Debug, 1 = Info

***

### lyricsCacheMaxSize

> **lyricsCacheMaxSize**: `number`

Defined in: [src/types.ts:776](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L776)

Max size of lyrics cache

***

### lyricsCacheTTL

> **lyricsCacheTTL**: `number`

Defined in: [src/types.ts:778](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L778)

Max TTL of lyrics cache entries, in ms

***

### lyricsQueueButton

> **lyricsQueueButton**: `boolean`

Defined in: [src/types.ts:750](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L750)

Add a button to each song in the queue to quickly open its lyrics page

***

### nextHotkey

> **nextHotkey**: [`HotkeyObj`](../type-aliases/HotkeyObj.md)

Defined in: [src/types.ts:895](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L895)

The hotkey that needs to be pressed to skip to the next video/song

***

### numbersFormat

> **numbersFormat**: [`NumberLengthFormat`](../type-aliases/NumberLengthFormat.md)

Defined in: [src/types.ts:744](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L744)

Which format to use for the like/dislike ratio on the currently playing song

***

### numKeysSkipToTime

> **numKeysSkipToTime**: `boolean`

Defined in: [src/types.ts:857](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L857)

Enable skipping to a specific time in the video by pressing a number key (0-9)

***

### numKeysSkipToTimeDoublePress

> **numKeysSkipToTimeDoublePress**: `number`

Defined in: [src/types.ts:859](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L859)

Whether skipping to a specific time requires two key presses and in which time frame

***

### numKeysSkipToTimeDoublePressBuffer

> **numKeysSkipToTimeDoublePressBuffer**: `number`

Defined in: [src/types.ts:861](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L861)

Whether there's a buffer for double pressing the number keys to skip to a specific time, and how long it is in seconds

***

### openPluginDiscoverySite

> **openPluginDiscoverySite**: `undefined`

Defined in: [src/types.ts:919](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L919)

Button that opens the plugin discovery site

***

### openPluginList

> **openPluginList**: `undefined`

Defined in: [src/types.ts:917](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L917)

Button that opens the plugin list dialog

***

### playPauseHotkey

> **playPauseHotkey**: [`HotkeyObj`](../type-aliases/HotkeyObj.md)

Defined in: [src/types.ts:901](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L901)

The hotkey that needs to be pressed to play/pause the current video/song

***

### previousHotkey

> **previousHotkey**: [`HotkeyObj`](../type-aliases/HotkeyObj.md)

Defined in: [src/types.ts:897](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L897)

The hotkey that needs to be pressed to skip to the previous video/song

***

### rebindNextAndPrevious

> **rebindNextAndPrevious**: `boolean`

Defined in: [src/types.ts:893](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L893)

Whether to rebind the next [J] and previous [K] keys

***

### rebindPlayPause

> **rebindPlayPause**: `boolean`

Defined in: [src/types.ts:899](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L899)

Whether to rebind the play/pause hotkey

***

### rememberSongTime

> **rememberSongTime**: `boolean`

Defined in: [src/types.ts:812](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L812)

Remember the last song's time when reloading or restoring the tab

***

### rememberSongTimeDuration

> **rememberSongTimeDuration**: `number`

Defined in: [src/types.ts:816](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L816)

Time in seconds to remember the song time for

***

### rememberSongTimeMinPlayTime

> **rememberSongTimeMinPlayTime**: `number`

Defined in: [src/types.ts:820](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L820)

Minimum time in seconds the song needs to be played before it is remembered

***

### rememberSongTimeReduction

> **rememberSongTimeReduction**: `number`

Defined in: [src/types.ts:818](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L818)

Time in seconds to subtract from the remembered song time

***

### rememberSongTimeSites

> **rememberSongTimeSites**: [`SiteSelection`](../type-aliases/SiteSelection.md)

Defined in: [src/types.ts:814](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L814)

Where to remember the song time

***

### removeShareTrackingParam

> **removeShareTrackingParam**: `boolean`

Defined in: [src/types.ts:712](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L712)

Remove the "si" tracking parameter from links in the share menu?

***

### removeShareTrackingParamSites

> **removeShareTrackingParamSites**: [`SiteSelection`](../type-aliases/SiteSelection.md)

Defined in: [src/types.ts:714](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L714)

On which sites to remove the "si" tracking parameter from links in the share menu

***

### removeThumbnailRatingBar

> **removeThumbnailRatingBar**: `boolean`

Defined in: [src/types.ts:913](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L913)

Removes all thumbnail rating bars if the extension is installed

***

### resetConfig

> **resetConfig**: `undefined`

Defined in: [src/types.ts:702](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L702)

Button that resets the config to the default state

***

### resetEverything

> **resetEverything**: `undefined`

Defined in: [src/types.ts:704](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L704)

Button to reset every DataStore instance to their default values

***

### scrollToActiveSongBtn

> **scrollToActiveSongBtn**: `boolean`

Defined in: [src/types.ts:756](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L756)

Add a button above the queue to scroll to the currently playing song

***

### setInitialTabVolume

> **setInitialTabVolume**: `boolean`

Defined in: [src/types.ts:800](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L800)

Whether to set an initial volume level for each new session

***

### showToastOnGenericError

> **showToastOnGenericError**: `boolean`

Defined in: [src/types.ts:698](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L698)

Whether to show a toast on generic errors

***

### showVotes

> **showVotes**: `boolean`

Defined in: [src/types.ts:740](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L740)

Whether to show the like/dislike ratio on the currently playing song

***

### skipToRemTimeHotkey

> **skipToRemTimeHotkey**: [`HotkeyObj`](../type-aliases/HotkeyObj.md)

Defined in: [src/types.ts:883](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L883)

The hotkey that needs to be pressed to skip to the last remembered time of the current video/song

***

### skipToRemTimeHotkeyEnabled

> **skipToRemTimeHotkeyEnabled**: `boolean`

Defined in: [src/types.ts:881](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L881)

Add a hotkey to skip to the last remembered time of the current video/song

***

### songListTrackNumbers

> **songListTrackNumbers**: `"currentQueue"` \| `"genericLists"` \| `"everywhere"`

Defined in: [src/types.ts:764](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L764)

Where to add track numbers

***

### songListTrackNumbersEnabled

> **songListTrackNumbersEnabled**: `boolean`

Defined in: [src/types.ts:762](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L762)

Add track numbers to each song list item

***

### sponsorBlockIntegration

> **sponsorBlockIntegration**: `boolean`

Defined in: [src/types.ts:907](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L907)

Whether to fix the styling of some elements from the SponsorBlock extension - does nothing if the extension is not installed

***

### swapLikeDislikeButtons

> **swapLikeDislikeButtons**: `boolean`

Defined in: [src/types.ts:742](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L742)

Whether to swap the like and dislike buttons in the media controls

***

### switchBetweenSites

> **switchBetweenSites**: `boolean`

Defined in: [src/types.ts:865](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L865)

Add a hotkey to switch between the YT and YTM sites on a video/song

***

### switchSitesHotkey

> **switchSitesHotkey**: [`HotkeyObj`](../type-aliases/HotkeyObj.md)

Defined in: [src/types.ts:867](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L867)

The hotkey that needs to be pressed to initiate the site switch

***

### themeSongIntegration

> **themeSongIntegration**: `boolean`

Defined in: [src/types.ts:909](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L909)

Whether to adjust styles so they look better when using the ThemeSong extension

***

### themeSongLightness

> **themeSongLightness**: [`ColorLightnessPref`](../type-aliases/ColorLightnessPref.md)

Defined in: [src/types.ts:911](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L911)

Lightness of the color used when ThemeSong is enabled

***

### thumbnailOverlayAlbumArtCacheMaxSize

> **thumbnailOverlayAlbumArtCacheMaxSize**: `number`

Defined in: [src/types.ts:726](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L726)

Maximum number of entries in the album art cache

***

### thumbnailOverlayAlbumArtCacheTTL

> **thumbnailOverlayAlbumArtCacheTTL**: `number`

Defined in: [src/types.ts:724](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L724)

For how long to cache the album art images fetched from the iTunes API

***

### thumbnailOverlayBehavior

> **thumbnailOverlayBehavior**: `"never"` \| `"videosOnly"` \| `"songsOnly"` \| `"always"`

Defined in: [src/types.ts:718](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L718)

Where to show a thumbnail overlay over the video element and whether to show it at all

***

### thumbnailOverlayIndicatorOpacity

> **thumbnailOverlayIndicatorOpacity**: `number`

Defined in: [src/types.ts:730](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L730)

The opacity of the thumbnail overlay indicator element

***

### thumbnailOverlayITunesImgRes

> **thumbnailOverlayITunesImgRes**: `number`

Defined in: [src/types.ts:722](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L722)

The width and height of the image fetched from the iTunes API

***

### thumbnailOverlayPreferredSource

> **thumbnailOverlayPreferredSource**: `"yt"` \| `"am"`

Defined in: [src/types.ts:732](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L732)

Whether to prefer fetching iTunes album covers over YT thumbnails

***

### thumbnailOverlayShowIndicator

> **thumbnailOverlayShowIndicator**: `boolean`

Defined in: [src/types.ts:728](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L728)

Whether to show an indicator on the thumbnail overlay when it is active

***

### thumbnailOverlayToggleBtnShown

> **thumbnailOverlayToggleBtnShown**: `boolean`

Defined in: [src/types.ts:720](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L720)

Whether to show a button to toggle the thumbnail overlay in the media controls

***

### toastDuration

> **toastDuration**: `number`

Defined in: [src/types.ts:696](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L696)

Amount of seconds to show BYTM's toasts for

***

### versionCheck

> **versionCheck**: `boolean`

Defined in: [src/types.ts:690](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L690)

Whether to check for updates to the script

***

### volumeSharedBetweenTabs

> **volumeSharedBetweenTabs**: `boolean`

Defined in: [src/types.ts:798](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L798)

Whether the volume should be locked to the same level across all tabs (changing in one changes in all others too)

***

### volumeSliderExponential

> **volumeSliderExponential**: `"linear"` \| `"x^2"` \| `"x^3"` \| `"x^4"` \| `"x^5"`

Defined in: [src/types.ts:786](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L786)

Use exponential scaling for the volume slider

***

### volumeSliderExponentialLabelType

> **volumeSliderExponentialLabelType**: `"positionBased"` \| `"valueBased"` \| `"both"`

Defined in: [src/types.ts:788](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L788)

Type of label to show on the volume slider when using exponential scaling

***

### volumeSliderLabel

> **volumeSliderLabel**: `boolean`

Defined in: [src/types.ts:790](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L790)

Add a percentage label to the volume slider

***

### volumeSliderScrollStep

> **volumeSliderScrollStep**: `number`

Defined in: [src/types.ts:796](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L796)

Volume slider scroll wheel sensitivity

***

### volumeSliderSize

> **volumeSliderSize**: `number`

Defined in: [src/types.ts:792](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L792)

The width of the volume slider in pixels

***

### volumeSliderStep

> **volumeSliderStep**: `number`

Defined in: [src/types.ts:794](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L794)

Volume slider sensitivity - the smaller this number, the finer the volume control

***

### watchPageFullSize

> **watchPageFullSize**: `boolean`

Defined in: [src/types.ts:746](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L746)

Whether to remove all padding around the main content on the /watch page on YTM

***

### watermarkEnabled

> **watermarkEnabled**: `boolean`

Defined in: [src/types.ts:710](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L710)

Show a BetterYTM watermark under the YTM logo

***

### yesImStillThere

> **yesImStillThere**: `boolean`

Defined in: [src/types.ts:824](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L824)

Whether to automatically click the "Yes" button on the "Are you still there?" popup
