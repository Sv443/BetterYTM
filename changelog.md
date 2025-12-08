<!-- I messed up with the changelog parsing so this first split marker will just have to be here forever now -->
<div class="split"></div>

<!-- #region 3.1.0 -->
## 3.1.0
- **New Features:**
  - 🎵 Show a track number in the currently playing queue and playlists (by [@indierodo](https://github.com/indierodo)).
  - 🎵 Use exponential scaling for the volume slider ([more info](https://www.dr-lex.be/info-stuff/volumecontrols.html)) (by [@cryeprecision](https://github.com/cryeprecision)).
  - 🎵 Swap like- and dislike buttons to match the layout on YT.
  - New configurable hotkeys:
    - Focus on the search bar (<kbd>Shift</kbd><kbd>F</kbd>).
    - Clear the search bar (<kbd>Shift</kbd><kbd>Delete</kbd>).
  - Require double-pressing the number keys within a configurable time frame to skip to points in the video/song time, to prevent accidental skips.
- **Improvements and Changes:**
  - Improved script initialization performance.
  - 🎵 Overhauled thumbnail overlay for better stability.
    - Fixed album artwork being fetched with wrong parameters.
    - Allow manually toggling between thumbnail providers.
    - Cache resolved AM album artwork URLs similar to how lyrics URLs are currently cached.
  - 🎵 Decoupled volume slider step and scroll step, allowing for both to work and be configured independently.
  - 🎵 The "improve links" feature now also applies to all types of song list items.  
    Clicking a list item anywhere will now start playing that song. This doesn't affect clicking and dragging them.  
    I would really love to hear feedback on this change (via GitHub discussions or Discord).
  - Improved config menu UX:
    - Added a sidenav that displays one category at a time, for a much less overwhelming experience.
    - Added feature groups, which further divide each categories' features into logical sections.
    - Removed advanced mode flag from a lot of features since there's much more breathing room now.
    - Removed the dialog title subtexts (dev / advanced mode). Instead, icons will be rendered in the footer, below the sidenav.
    - Reordered categories and features to be grouped more logically.
  - Made some GM menu commands usable by default without requiring to be compiled in dev mode, with more available when the advanced mode is enabled. Refer to the "internal changes" section for a full list.
  - Decreased the interval between saving the latest video/song time from 500ms to 250ms, meaning the restored time is more accurate without sacrificing much performance.
  - The "like" and "dislike" hotkeys now also work in the YT Shorts player.
  - The values of some features (if left unchanged), will be updated to the new defaults:
    - `initTimeout` will be changed from `8` to `5` seconds (amid initialization performance improvements).
    - `rememberSongTimeDuration` will be changed from `60` to `180` seconds.
    - `thumbnailOverlayITunesImgRes` will be changed from `1500` to `2000` pixels.
    - `frameSkipAmount` will be changed from `0.0417` to `0.0166` seconds.
  - If the `thumbnailOverlayITunesImgRes` value was set bigger than `3000`, it will now be set to the new maximum of `3000` pixels.
- **Fixes:**
  - Fixed auto-like button sometimes not appearing, as well as channel name resolution on both domains.
  - Fixed missing toggle input knob in Chromium-based browsers.
  - 🎵 Fixed SyntaxError when no AM album artwork was found.
  - Fixed Error when clicking on a BytmDialog's exit button.
  - Fixed interactivity problems with the config menu and stacked BytmDialogs when another dialog was opened over top and then closed.
  - 🎵 Fixed list buttons not disappearing with the native buttons in song lists.
  - 🎵 Fixed anchor improvements feature on the search page.
  - 🎵 Fixed rounded border in fullscreen mode when using the ThemeSong extension.
  - Fixed changelog URL pointing to the script's build commit version instead of the latest version (this is like the 5th time I fixed this).
  - Fixed hotkey inputs not deactivating when the config menu is closed.
  - Fixed minor hotkey input event memory leak when the config menu is recreated.

<details><summary><b><i>Click to expand plugin and internal changes</i></b></summary>
<sup>(I did my best to order these by relevance for each section)</sup>
  
- **Plugin Changes:**  
  *(also refer to **[version 3.1.0's API docs](https://github.com/Sv443/BetterYTM/blob/v3.1.0/contributing.md)**)*
  - **Migration guide:**
    - ⚠️ **The plugin sublicense agreement was updated to version 2** to clarify points which were worded poorly and to improve compatibility with the AGPL-3.0-only license, as well as local laws. [You can read it here.](https://github.com/Sv443/BetterYTM/blob/v3.1.0/license-for-plugins.txt)
    - ⚠️ **POT. BREAKING:** Since BYTM now *requires* plugin intents to be set, make sure to add all intents required by the authenticated functions your plugin calls to the `PluginDef` object's `intents` property (which can now also be an array instead of just a bitwise-or'ed number). Read below for a list of functions and their required intents.
    - ⚠️ If you use the `BytmDialog`, `ExImDialog` or `MarkdownDialog` classes directly, switch to the new authenticated functions `getBytmDialog()`, `getExImDialog()` and `getMarkdownDialog()`. Direct access will continue to work until version 4.0.0, but to future-proof your plugin, switch to the new functions as soon as possible, and make sure to add the `CreateModalDialogs` (32) intent to your plugin definition's `intents` property.
    - ⚠️ If you were using `bytm:ready` to reliably wait until *all* features are initialized, switch to `bytm:allReady` instead.  
      The `bytm:ready` event is still emitted, but it is now only guaranteed to be emitted when the DOM is loaded and all features have *started* to initialize.
    - All `NanoEmitter` subclasses and the interface-exposed `NanoEmitter` class reference now use [CoreUtils' new `NanoEmitter` class](https://github.com/Sv443-Network/CoreUtils/blob/main/docs.md#class-nanoemitter), which grants you access to the powerful `onMulti()` method to listen to multiple events at once, with configurable behavior.
    - The `intents` prop can now be an array of `PluginIntent` enum members.
  - **API Changes:**
    - ⚠️ **POT. BREAKING:** Plugins will no longer be able to call authenticated functions without the required intents.  
      Intents are now required to be set in the plugin definition object, though for now they will still all be granted and don't need to be explicitly allowed by the user once after installing yet.  
      The new intent `FullAccess` (512) grants all other intents, though you should only use it if your plugin truly requires all intents.  
      These are the intents that are now required for the respective functions:
      - `getFeatures()` - `ReadFeatureConfig` (1) and optionally `SeeHiddenConfigValues` (4)
      - `saveFeatures()` - `WriteFeatureConfig` (2)
      - `setLocale()` - `WriteTranslations` (16)
      - `getBytmDialog()` - `CreateModalDialogs` (32)
      - `getExImDialog()` - `CreateModalDialogs` (32)
      - `getMarkdownDialog()` - `CreateModalDialogs` (32)
      - `getAutoLikeData()` - `ReadAutoLikeData` (64)
      - `saveAutoLikeData()` - `WriteAutoLikeData` (128)
      - `getInternals()` - `InternalAccess` (256)
    - References to the dialog classes `BytmDialog`, `ExImDialog` and `MarkdownDialog` should now be obtained using the new authenticated `getBytmDialog()`, `getExImDialog()` and `getMarkdownDialog()` functions, respectively.  
    Using the direct access properties will work until version 4.0.0, but it is recommended you switch to the authenticated functions as soon as possible.
    - The `PluginDef` object's `intents` property can now be either an array of `PluginIntent` values or a single number that is the bitwise OR of the intents.
    - Plugin auth tokens are now in the format of a UUIDv4 instead of a 16-character, 36-radix string.
    - `registerPlugin()` now also returns a `permissions` object with the properties `int` and `array`, which contain all of the bitwise OR of the plugin's intents, as well as an array of the intents, that were actually granted to the plugin. The `int` property can be used with [CoreUtils' `bitSetHas()` function](https://github.com/Sv443-Network/CoreUtils/blob/main/docs.md#function-bitsethas) to check if specific intents were granted.
    - A URL to the plugin's changelog file can now be specified in the `PluginDef` object's `homepage.changelog` property.
    - The function `getLikeDislikeBtns()` now also works with the buttons in the YT Shorts player.
  - **API Additions:**
    - Added new functions to the interface:
      - `onSiteEvent()` - Adds a site event listener.
      - `onceSiteEvent()` - Adds a site event listener that is only called once and also returns a Promise for use with the async/await pattern.
      - `onMultiSiteEvents()` - Adds a listener that triggers after one of, or all of the given site events are dispatched, either continuously or just once, with configurable behavior.
      - `resourceAsString()` - Returns a BYTM resource as a string, most of which are cached between sessions in GM storage for much better performance.
      - 🔒 `getBytmDialog()` (requires intent `CreateModalDialogs` (32)) - Returns a reference to the `BytmDialog` class, which can be used to create new generic dialog instances.
      - 🔒 `getExImDialog()` (requires intent `CreateModalDialogs` (32)) - Returns a reference to the `ExImDialog` class (subclass of `BytmDialog`), to export and import serializable data.
      - 🔒 `getMarkdownDialog()` (requires intent `CreateModalDialogs` (32)) - Returns a reference to the `MarkdownDialog` class (subclass of `BytmDialog`), to render a markdown string in a modal dialog.
      - 🔒 `getInternals()` (requires intent `InternalAccess` (256)) - returns some internal function and object references that can be used by core libraries and deeper reaching plugins.
    - Added new events:
      - `bytm:preInitPlugin` (no arguments) - emitted at the earliest possible point in time, even before the DOM is loaded, to allow plugins to do any immediate but superficial initialization.
      - `bytm:allReady` (no arguments) - emitted when all features have been initialized and the interface is fully ready to use.  
        This triggers much later than `bytm:ready`, which is emitted when the DOM is loaded and all features are *starting* to initialize.  
        For the fastest response times, use `bytm:featureInitialized` for every feature your code depends on.
      - `bytm:featureInitialized:id` (no arguments) - emitted when a feature with the specified key has been initialized.  
        In TypeScript, use `"bytm:featureInitialized:myFeatureKey" as "bytm:featureInitialized:id"` to make the error go away.
      - `bytm:siteEvent:cfgMenuMounted` (no arguments) - emitted when the config menu is invisibly mounted to the DOM (not opened yet, but modifiable).
      - `bytm:siteEvent:configHeaderSelected: (name: LooseUnion<FeatureCategory>)` - emitted when a config header is selected in the config menu, with the name of the selected header. This is usually the feature category name, but can also be an info category name (currently just `"about"` and `"changelog"`).
      - `bytm:siteEvent:voteLabelsAdded` (no arguments) - emitted after the Return YouTube Dislike vote labels were added to the DOM.
      - `bytm:siteEvent:updateVolumeSliderLabel` (no arguments) - emitted to make the volume slider label update its text content.
    - Added SelectorObserver instance `searchPage`, as the root observer for the YTM search page.
    - Added new intents:
      - `InternalAccess` (256) (currently only used by `getInternals()` for deep integration or future core library usage)
      - `FullAccess` (512) (grants all intents - only use if absolutely necessary!)
- **Internal Changes:**
  - Added `@antifeature tracking` directive, to indicate that services temporarily log IP addresses and the currently playing song.
  - Added [`@sv443-network/coreutils`](https://github.com/Sv443-Network/CoreUtils) as a new core library, accessible on the BYTM API via `BYTM.CoreUtils`.
  - Updated [`@sv443-network/userutils`](https://github.com/Sv443-Network/UserUtils) to v9.4.4 to fix three bugs related to translations and the template literal placeholder format. This now allows specifying a single placeholder multiple times per translation string.
  - Made `siteEvents` system use CoreUtils' improved `NanoEmitter`, so it can now also be used to listen to multiple events using `.onMulti()`.
  - Moved `siteEvents` initialization to an earlier point, so that it is no longer initialized alongside features. It is now available to plugins at an earlier point in time, before any feature has started initializing, but still after plugin initialization has finished.
  - Made plugin-specific `events` (returned by `registerPlugin()`) use CoreUtils' new `NanoEmitter` as well.
  - Improved script performance by refactoring the feature initialization process. As an effect of this, `bytm:ready` will now emit consistently, but also earlier, and the new event `bytm:allReady` will emit much later, once all features have been initialized or the configured timeout has been reached.
  - Updated a boatload of translation values and translation keys. [Use this page to find all changes.](https://github.com/Sv443/BetterYTM/compare/v3.0.0...v3.1.0`)
  - Some resources are now cached in GM storage, when using the internal function `resourceAsString()` for even better feature init performance.
  - BYTM now targets [ES2020](https://en.wikipedia.org/wiki/ECMAScript_version_history#11th_Edition_%E2%80%93_ECMAScript_2020)
  - Added new GM menu commands:
    - These commands are now available by default:
      - Reset the config to its default values
      - Export all config data (WIP - don't rely on this yet!)
      - Export all data, including caches (WIP - don't rely on this yet!)
      - Import data from a previous export (WIP - don't rely on this yet!)
      - Download a console log file to attach to a GitHub issue
    - In advanced mode, you can also use these additional commands:
      - Decompress all GM storage values and list them in the JS console
      - List all raw GM storage values in the JS console
      - Delete all GM storage values (full wipe of *all* the data BYTM has accumulated in any way)
      - Reset the version session counter (makes the flame icons in the config menu reappear, nothing else for now)
      - List active SelectorObserver listeners in the JS console
      - Compress a value (using BYTM's default compression algorithm and encoding)
      - Decompress a value (using BYTM's default compression algorithm and encoding)
      - Log the script's initialization timings to the JS console
      - Toggle developer treatments (experiments that are not quite ready for production)
  - Removed `GM.getResourceUrl()` entirely in favor of fetching resources from a CDN for better performance and caching.
  - Arguments to the translation functions can now also be an object that map a placeholder key to a string value, e.g. `{ name: "John" }` for a translation using the new placeholder syntax, e.g. `"Hello, ${name}!"`.
  - The functions `sanitizeArtists()` and `sanitizeSong()` will now replace some common Unicode punctuation symbol variants with their ASCII counterparts (e.g. `‘` -> `'`).
  - Moved the `general` feature category to the top of the config menu.
  - Wrapped feature config elements in a new container element with the ID `bytm-ftconf-category-${categoryName}` to allow for the sidenav to disable all but one at a time.
  - Added ability to render info categories in the config menu that render arbitrary elements, instead of the typical feature-list-container style rendering.  
  Their navigation headers will be aligned to the bottom. They use the same general formatting as the new feature category containers, just with their own `categoryName` (currently they are `"about"` and `"changelog"`).
  - Added intent checking function `pluginHasPerms()` to `interface.ts`, which will now check for the given intents (or `FullAccess`) before allowing authenticated functions to be called by the invoking plugin.
  - Added CSS var `--bytm-menu-bg-highlight-2` (hex, opacity 1) as a secondary level of highlight to `--bytm-menu-bg-highlight`.
  - Renamed CSS var `--bytm-dialog-height-max` to `--bytm-dialog-target-height`, but only in the config menu due to diverging logic. All `BytmDialog`s will still use `--bytm-dialog-height-max`.
  - Improved number argument resolution of the functions in `src/utils/logging.ts` (if the last argument is a number that exceeds the range of the enum `LogLevel`, it will not be interpreted as a log level anymore, but as an actual number to be logged).
  - Added dev menu option to print an initialization timing report to the console for debugging performance issues.

</details>

<div class="pr-link-cont">
  <a href="https://github.com/Sv443/BetterYTM/pull/148" rel="noopener noreferrer">Also see pull request #148</a>
</div>

<div class="split"></div>
<br>

<!-- #region 3.0.0 -->
## 3.0.0
- **Added features:**
  - 🎵 Automatically scroll to the active song in the queue on page load or video change
  - 🎵 Make the player container use all available space on /watch
  - New configurable hotkeys:
    - 🎵 Skip forwards/backwards by a frame (<kbd>.</kbd> / <kbd>,</kbd>)
    - Like/dislike video/song (<kbd>Shift</kbd><kbd>L</kbd> / <kbd>Shift</kbd><kbd>D</kbd>)
    - 🎵 Open lyrics of current song (<kbd>O</kbd>)
    - Skip to last remembered video/song time (<kbd>Alt</kbd><kbd>R</kbd>)
    - Reconfigurable skip to beginning & previous/next video/song (<kbd>Shift</kbd><kbd>N</kbd> / <kbd>Shift</kbd><kbd>P</kbd>, disabled by default)
    - Reconfigurable play/pause (<kbd>Pause</kbd>, disabled by default)
- **Changes and improvements:**
  - Restore song/video volume after BYTM reloads the tab with the common `reloadTab()` function
  - Added an adornment icon to identify which features work only on YTM, versus on both sites
  - 🎵 Thumbnail overlay improvements:
    - Overlay now prefers to use a high res album artwork from Apple Music if the current song is in an album
    - Fixed image not being updated while in fullscreen
  - 🎵 Made above-queue button container's sticky positioning toggleable with a feature
  - Made the resolution of the browser-preferred locale more reliable
  - Implemented a more powerful translation system
  - Removed the thumbnail overlay fitting option in favor of automatically switching based on the media type
- **Fixes:**
  - Sped up installation time by loading all resources except stylesheets via regular `fetch()` and the external CDN instead of using `@resource` directives
  - Bumped z-index of dialog elements to display them correctly after a recent page update
  - Fixed white font color for BYTM config option on YT in light theme
  - 🎵 Fixed volume label not being fully hidden along with the slider
  - Config menu will now be correctly set as inert when a BytmDialog is opened over top
  - 🎵 Fixed \"remove from queue\" button sometimes deleting playlist entries instead of queue items

<details><summary>Click to expand plugin and internal changes</summary>

- **Plugin Changes:**
  - See [contributing guide](https://github.com/Sv443/BetterYTM/blob/main/contributing.md) for full documentation
  - API changes:
    - ⚠️ **BREAKING:** Renamed `createRipple()`'s `speed` prop values:
      - From `faster` to `fastest`
      - From `slower` to `slowest`
    - ⚠️ **BREAKING:** Made `hasKey()` and `hasKeyFor()` return a Promise to load the given locale if it's not found
    - ⚠️ 🎵 **BREAKING:** Removed `sideBarMini` observer instance
    - Made `getCurrentMediaType()` return `\"video\"` on YT instead of throwing an error
    - Added property `additionalProps` to the `RippleProps` argument in `createRipple()`, to assign extra props to the created or passed ripple element
  - New API functions:
    - Added `reloadTab()` as a better way to reload the page by keeping the same video time and volume and disabling BYTM features like initial tab volume
    - Added `getVideoElement()` to get the video element (if available) on the current page, on both YT and YTM
    - Added `getVideoSelector()` to get the CSS selector for the video element on the current page, on both YT and YTM
    - Added `getDefaultFeatures()` (callable without registering the plugin) to return the default / fallback feature configuration object
    - Added `getLikeDislikeBtns()` to return the like and dislike buttons on both domains, including the like/dislike state
    - Added `isIgnoredInputElement()` to check if the given or currently focused element is an input element, upon which all other keypress event listeners should be ignored
    - Added `fetchITunesAlbumInfo()` to fetch album info objects from the Apple Music / iTunes API, given an artist and album name
  - New API constants:
    - Added `initialParams` ([URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)), the search params at the initial point of loading BYTM
    - Added `sessionStorageAvailable` (boolean), whether the browser supports [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)
- **Internal Changes:**
  - Improved asset caching by using JSDelivr instead of GitHub as a CDN
  - Fixed problems with the translation system by implementing [UserUtils v9's new system](https://github.com/Sv443-Network/UserUtils/blob/v9.4.1/docs.md#translation)
  - Added JSON schemas for all JSON files in `assets`

</details>

<div class="pr-link-cont">
  <a href="https://github.com/Sv443/BetterYTM/pull/121" rel="noopener noreferrer">See pull request for more info</a>
</div>

<div class="split"></div>
<br>

<!-- #region 2.2.0 -->
## 2.2.0
- **Changes:**
  - Replaced the monospace font Cascadia Code with [Cousine](https://fonts.google.com/specimen/Cousine)
  - Due to massive incompatibilities on FireMonkey, the script will show an error and not execute under the extension anymore
- **Fixes:**
  - Fixed errors in TamperMonkey because of missing `@connect` directives
  - Fixed locale codes not using the correct format (`en_US` instead of the correct format `en-US`)
  - Fixed changelog not updating on new releases and thus the update notification dialog would also show an outdated changelog
  - Fixed auto-like channel toggle button disappearing after changing channel page tabs on both pages
  - Fixed duplicate logo if the ThemeSong extension is installed
  - Fixed tab opening with the resolved lyrics URL when ctrl-clicking the lyrics button

<details><summary>Click to expand internal and plugin changes</summary>

- **Internal Changes:**
  - **Breaking:** Changed the locale code format to match the [BCP 47](https://tools.ietf.org/html/bcp47) standard.  
    As part of this, all `_` underscores were replaced with `-` hyphens and the following locales had their country codes corrected:
    - `en-UK` -> `en-GB`
    - `ja-JA` -> `ja-JP`
  - Enabled Subresource Integrity (SRI) hashes for external resources to increase security
- **Plugin Changes:**
  - Migration guide:
    - Since locale codes now have the format `xx-YY` and two were renamed, all plugins must implement those changes

</details>

<div class="pr-link-cont">
  <a href="https://github.com/Sv443/BetterYTM/pull/114" rel="noopener noreferrer">See pull request for more info</a>
</div>

<div class="split"></div>
<br>

<!-- #region 2.1.0 -->
## 2.1.0
- **Added features:**
  - Added a feature to like songs and videos of certain channels (on both sites) automatically.  
    The button to toggle auto-liking will only show up on channel pages until the next update. Please report any issues you encounter.
  - Added the ability to show the approximate amount of likes and dislikes on the currently playing song (powered by [Return YouTube Dislike](https://returnyoutubedislike.com/))
  - Added support for themes set by the [ThemeSong](https://github.com/KristofferTroncoso/ThemeSong) extension
  - Added a dialog for listing the currently installed and active plugins including some metadata
- **Changes:**
  - Made song/video time remembering enabled by default on YT too
  - Made reset button in config menu a feature of type `button`
  - Welcome menu is now shown on YT too
  - Added <kbd>Ctrl</kbd> modifier key to every lyrics button to open a lyrics search prompt
  - Added <kbd>Shift</kbd> and <kbd>Ctrl</kbd> modifier keys to the above-queue buttons that will skip prompts or customize their behavior in other ways
  - Arrow key and number key skipping works more reliably and now also in the config menu
  - Changed default settings for some features.  
    After updating, if the values were unchanged from their previous default, they will automatically have the new default value:
    - Remember Song Time Sites: if set to `YTM only`, it changes to `both sites`
    - Volume Slider Scroll Sensitivity: if set to `10%`, it changes to `4%`
  - Made some settings require advanced mode that didn't before:
    - Fix spacing/layout issues
    - Fix HDR issues
    - Disable Dark Reader sites
    - Remove share tracking parameter sites
    - Placement of list/queue buttons
  - Removed broken feature "remove upgrade tab"
  - Removed unnecessary experimental feature "advancedLyricsFilter" as the API's native search improved a lot
  - Made all integration features configurable and gave them their own config category
  - Created a prompt dialog to replace the browser's native dialogs, which could accidentally be turned off by the user and would softlock the script
  - Made all &lt;code&gt; tags use the [Cascadia Code](https://github.com/microsoft/cascadia-code) font
- **Fixes:**
  - Fixed major bug that threw "This document requires 'TrustedHTML' assignment" errors on Chromium browsers
  - Adjusted script to UI redesign of playlists
  - Fixed song list buttons disappearing when dragging the row around
  - Fixed song list buttons not always appearing immediately
  - Fixed escape closing all open dialogs instead of one at a time
  - Fixed "added to liked songs" toast not being consistently closed
  - Fixed messed up time restoration feature on YT because of the `&t` param
  - Fixed broken autoplay queue delete button after a redesign
  - Fixed transparent player bar background in fullscreen being barely readable with thumbnail overlay active
  - Fixed thumbnail overlay not updating in fullscreen mode and in the mini player
  - Fixed video time restoring breaking after pausing for a longer time
  - Fixed toasts being shown with a 1000x higher duration than intended
  - Fixed volume slider features not working anymore when display width shrinks to below 1150px

<details><summary>Click to expand internal and plugin changes</summary>

- **Internal Changes:**
  - Updated the [UserUtils library](https://github.com/Sv443-Network/UserUtils) to v8.0.2
  - Removed `compareVersions()` and `compareVersionArrays()` in favor of including the [`compare-versions`](https://npmjs.com/package/compare-versions) library
  - Now using a single query parameter for lyrics lookup
  - Added license for plugin-related source code, see [license-for-plugins.txt](https://github.com/Sv443/BetterYTM/blob/develop/license-for-plugins.txt)
  - Added advanced feature to change the startup timeout (only impacts plugin initialization for now)
  - Now using a blue logo is instead of the red BetterYTM logo when the script was compiled in development (preview) mode
  - Added Storybook for easier and faster development of components
  - Removed the `@updateURL` and `@downloadURL` directives because their use is controversial and the script has a built-in update check now
  - Migrated to pnpm for faster compilation times
  - Moved `NanoEmitter` class over to the [UserUtils library](https://github.com/Sv443-Network/UserUtils/blob/main/docs.md#nanoemitter) (it is still re-exported by the plugin interface as before)
  - Made `getThumbnailUrl()` and `getBestThumbnailUrl()` use the domain `youtube.com` to prevent cross-origin issues
  - Added custom error instances `LyricsError` and `PluginError` for better error handling using `instanceof`
  - Changed the feature identifier key for `showVotesFormat` to `numbersFormat` as it is now generic and available to plugins through the `formatNumber()` function
  - Feature config keys will now be corrected on each page load (meaning missing keys will be set to their default and extra keys will be removed)
- **Plugin Changes:**  
  <sup>See the [contributing guide](https://github.com/Sv443/BetterYTM/blob/main/contributing.md) for the latest documentation of the plugin interface</sup>
  - Changed the way plugins are registered by making the `registerPlugin()` function the sole argument passed by the `bytm:registerPlugin` event. Call this function synchronously to register your plugin.
  - Plugins will now load at an earlier point in BetterYTM's startup sequence. This means that plugins can now be initialized before the script's features are fully initialized and the DOM is ready. Use site events to wait for the right moment to interact with the page.
  - Added new components:
    -  `createLongBtn()` to create a button with an icon and text (works either as normal or as a toggle button)  
      The design follows that of the subscribe button on YTM's channel pages, but the consistent class names make it easy to style it differently.
    - `createRipple()` to create a click ripple animation effect on a given element
    - `showToast()` to show a custom toast notification with a message string or element and duration
    - `showIconToast()` to show a custom toast notification with a message string or element, icon and duration
    - `showPrompt()` to show a styled dialog that replaces the `confirm()`, `alert()` and `prompt()` functions
    - `ExImDialog` class for creating a BytmDialog instance that is designed for exporting and importing generic data as a string
  - Changed components:
    - BytmDialog now has the option `removeListenersOnDestroy` (true by default) to configure removing all event listeners when the dialog is destroyed
    - BytmDialog's private members and methods have been changed to protected for easier extension (when using TypeScript)
  - Plugin definition changes:
    - Some intents were added or moved around in their order. See the new values in `src/types.ts -> enum PluginIntent`
  - Added interface functions:
    - `setInnerHtml()` to set the innerHTML property of an element to a sanitized string using the [Trusted Types API](https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API) and the library [DOMPurify](https://github.com/cure53/DOMPurify)
    - `getAutoLikeData()` to return the current auto-like data (authenticated function)
    - `saveAutoLikeData()` to overwrite the auto-like data (authenticated function)
    - `fetchVideoVotes()` to fetch the approximate like and dislike count of a video from [Return Youtube Dislike](https://returnyoutubedislike.com/)
    - `getDomain()` returns the current domain ("yt" or "ytm")
    - `waitVideoElementReady()` returns a promise that resolves when the video element is ready
    - `getCurrentMediaType()` (on YTM only) returns the current media type ("video" or "song")
    - `tl()` returns the translation for the provided translation key and provided locale
    - `tlp()` returns the translation for the provided translation key, including pluralization identifier and provided locale
    - `formatNumber()` formats a number according to the configured locale and configured or provided format ("short" or "long")
  - SelectorObserver / `addSelectorListener()` changes:
    - Added `ytMasthead` instance for the title bar on YT
    - Renamed all YT-specific instances to have the `yt` prefix
      - `watchFlexy` renamed to `ytWatchFlexy`
      - `watchMetadata` renamed to `ytWatchMetadata`
    - Added new SelectorObserver instance `browseResponse` for pages like `/channel/{id}`
  - Event changes:
    - Added events
      - `bytm:featureInitStarted` - emitted when the feature initialization process starts
      - `bytm:featureInitialized` - emitted every time a feature has been initialized and is passed the feature's identifier string
      - `bytm:dialogClosed` - emitted when a BytmDialog is closed and gets passed the instance
      - `bytm:dialogClosed:id` - emitted only when the dialog with the given ID is closed and gets passed the instance
      - `bytm:siteEvent:pathChanged` - emitted whenever the URL path (`location.pathname`) changes
    - Now the event `bytm:siteEvent:fullscreenToggled` is only emitted once per fullscreen change
    - Renamed event `bytm:initPlugins` to `bytm:registerPlugin` to be more consistent
    - Changed `event` property returned by `registerPlugin()` from nanoevents Emitter to NanoEmitter instance (see [the UserUtils docs](https://github.com/Sv443-Network/UserUtils/blob/main/docs.md#nanoemitter))  
      In practice this changes nothing, but it benefits from plugins having access to the additional methods `once()` for immediately unsubscribing from an event after it was emitted once and `unsubscribeAll()` to remove all event listeners.

</details>

<div class="pr-link-cont">
  <a href="https://github.com/Sv443/BetterYTM/pull/76" rel="noopener noreferrer">See pull request for more info</a>
</div>

<div class="split"></div>
<br>

<!-- #region 2.0.0 -->
## 2.0.0
- **Added features:**
	- Keep the volume synced between tabs
	- Set an initial volume level once per tab
	- Hide the cursor after a set amount of inactivity while hovering over the video
	- Show a thumbnail overlay over the video element (or open the thumbnail in a new tab) automatically and/or manually, depending on configuration
	- `?si` parameter is removed in YT's share menu too now
	- Added an "above-queue" button to clear the currently playing queue / playlist
  - Fix rendering issues when using HDR
  - Disable the Dark Reader extension on both pages (because it messes up the layout)
- **Changes / Fixes:**
  - Improved the config menu
    - Created new toggle input (because checkboxes don't come close to looking as good)
    - Added an `advanced mode` option that reveals a set of hidden settings, and lots of new settings that were previously not configurable
    - Improved styling and layout of menu substantially, especially when using different languages
    - Now an option to open the config menu is shown on YT too
    - Made a bunch of features not require a page reload anymore
  - Fixed tooltip that is set on the wrong element
  - Fixed queue buttons not being shown when navigating with tab key
  - Tons of accessibility improvements for screenreader users (feedback regarding this is strongly welcome!)

<details><summary>Click to expand internal and plugin changes</summary>

- **Internal Changes:**
  - Improved script performance
    - Implemented new [SelectorObserver](https://github.com/Sv443-Network/UserUtils/blob/main/docs.md#selectorobserver) instances to improve overall performance by quite a lot
      - Implemented rising-edge debounce for SelectorObserver instances to massively improve responsiveness
    - Added a cache to save lyrics in. Up to 1000 of the most listened to songs are saved throughout sessions for 30 days to save time and reduce server load.
  - Implemented new class BytmDialog for less duplicate code, better maintainability, the ability to make more menus easier and for them to have better accessibility
- **Plugin Interface Changes:**
  - Expanded plugin interface
    - Added function to register plugins (see [contributing guide](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#registerplugin))  
      All plugins that are not registered will have restricted access to the BetterYTM API (subject to change in the future).
    - Plugins are now given access to the classes [`BytmDialog`](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#bytmdialog) and [`NanoEmitter`](https://github.com/Sv443-Network/UserUtils/blob/main/docs.md#nanoemitter), and the functions [`onInteraction()`](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#oninteraction), [`getThumbnailUrl()`](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#getthumbnailurl), [`getBestThumbnailUrl()`](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#getbestthumbnailurl) [`createHotkeyInput()`](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#createhotkeyinput), [`createToggleInput()`](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#createtoggleinput) and [`createCircularBtn()`](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#createcircularbtn)
  - Added an experimental fuzzy filtering algorithm when fetching lyrics to eventually yield more accurate results (hidden behind advanced mode because it's far from perfect)
  - Resource URL versioning was improved, so all versions from now on will still work in the future when the URLs potentially change

</details>
<div class="pr-link-cont">
  <a href="https://github.com/Sv443/BetterYTM/pull/52" rel="noopener noreferrer">See pull request for more info</a>
</div>

<div class="split"></div>
<br>

<!-- #region 1.1.1 -->
## 1.1.1
- **Features / Changes:**
  - A new version notification dialog is now shown with the latest version's changes
  - Menus are now only created when needed
  - Moved dependencies to `@require` to reduce script size
  - Improved UX of the hotkey input in the config menu
- **Fixes:**
  - Fixed fatal error when cookies / session storage was unavailable or disabled
  - Fixed spacing around thumbnails in search results being inconsistent
  - Fixed queue button container alignment
  - Fixed Chinese translations
- **Internal Changes:**
  - Removed React JSX support
  - Small utility function refactoring
  
<div class="pr-link-cont">
  <a href="https://github.com/Sv443/BetterYTM/pull/47" rel="noopener noreferrer">See pull request for more info</a>
</div>

<div class="split"></div>
<br>

<!-- #region 1.1.0 -->
## 1.1.0
- **Features / Changes:**
  - The userscript is now available in 9 languages! To submit or edit translations, please [view this guide](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#submitting-translations)
  - Added an interface for user-created plugins ([see contributing guide for more info](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#maining-a-plugin-that-interfaces-with-betterytm))
  - Made site switch hotkey customizable
  - Userscript will now show a welcome page after first install / update
  - Feature to restore last song's time on page reload
  - Made interval of arrow key skip configurable
  - A hint is now sent to Dark Reader to disable itself (see [this](https://github.com/darkreader/darkreader/discussions/6868#discussioncomment-3109841))
  - Made volume slider scroll sensitivity configurable
  - Added details / help dialog to menu feature list
  - Added queue buttons to all types of song list
  - Added manual version check (can be disabled in config menu)
- **Fixes:**
  - BetterYTM now uses a more reliable way to skip to a certain time
  - Fixed resources not loading in Chrome
  - Fixed album list spacing getting messed up by anchor improvements styling
  - Fixed "Start at" option in share menu making tracking parameter reappear
  - Fixed selector for player queue that was changed by a YTM update
- **Internal Changes:**
  - The license of the source code has been changed from MIT to [AGPL-3.0](https://github.com/Sv443/BetterYTM/blob/main/LICENSE.txt)
  - Migrated to the Rollup bundler
    - Now multiple versions of the script are compiled for the different hosts (GitHub, GreasyFork, OpenUserJS) with slight compatibility fixes each
    - Target branch can now be specified while compiling instead of being tied to the bundler mode
  - Added support for React JSX
  - Added support for external libraries through `@require`
  
<div class="pr-link-cont">
  <a href="https://github.com/Sv443/BetterYTM/pull/35" rel="noopener noreferrer">See pull request for more info</a>
</div>

<div class="split"></div>
<br>

<!-- #region 1.0.2 -->
## 1.0.2
- **Changes:**
  - Script is now published to OpenUserJS!
  - Added an OpenUserJS link to the configuration menu

<div class="split"></div>
<br>

<!-- #region 1.0.1 -->
## 1.0.1
- **Changes:**
  - Script is now published to GreasyFork!
  - Added a GreasyFork link to the configuration menu

<div class="split"></div>
<br>

<!-- #region 1.0.0 -->
## 1.0.0
- **Added Features:**
  - Added configuration menu to toggle and configure all features
  - Added lyrics button to each song in the queue
  - Added "remove from queue" button to each song in the queue
  - Use number keys to skip to a specific point in the song
  - Added feature to make volume slider bigger and volume control finer
  - Added percentage label next to the volume slider & title on hover
  - Improvements to link hitboxes & more links in general
  - Permanent toast notifications can be automatically closed now
  - Remove tracking parameter `&si` from links in the share menu
  - Fix spacing issues throughout the site
  - Added a button to scroll to the currently active song in the queue
  - Added an easter egg to the watermark and config menu option :)
- **Changes & Fixes:**
  - Now the lyrics button will directly link to the lyrics (using my API [geniURL](https://github.com/Sv443/geniURL))
  - Video time is now kept when switching site on regular YT too
  - Fixed compatibility with the new site design
  - A loading indicator is shown while the lyrics are loading
  - Images are now smaller and cached by the userscript extension
  - Song names with hyphens are now resolved better for lyrics lookup
  - Site switch with <kbd>F9</kbd> will now keep the video time
  - Moved lots of utility code to my new library [UserUtils](https://github.com/Sv443-Network/UserUtils)
  
<div class="pr-link-cont">
  <a href="https://github.com/Sv443/BetterYTM/pull/9" rel="noopener noreferrer">See pull request for more info</a>
</div>

<div class="split"></div>
<br>

<!-- #region 0.2.0 -->
## 0.2.0

- **Added Features:**
  - Switch between YouTube and YT Music (with <kbd>F9</kbd> by default)
  - Search for song lyrics with new button in media controls
  - Remove "Upgrade to YTM Premium" tab
  
<div class="pr-link-cont">
  <a href="https://github.com/Sv443/BetterYTM/pull/3" rel="noopener noreferrer">See pull request for more info</a>
</div>

<div class="split"></div>
<br>

<!-- #region 0.1.0 -->
## 0.1.0

- **Features:**
  - Added support for arrow keys to skip forward or backward (currently only by fixed 10 second interval)
