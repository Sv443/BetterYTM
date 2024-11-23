<!-- I messed up with the changelog parsing so this first split marker will just have to be here forever now -->
<div class="split"></div>

<!-- #region 2.2.1 -->
## 2.2.1
- **Changes:**
  - The above-queue-button container's sticky positioning can now be turned off with a new advanced feature toggle in the config menu
  - Made finding the preferred locale based on the browser's language settings more reliable

<details><summary>Click to expand internal and plugin changes</summary>

- **Plugin Changes:**
  - Added authenticated function `reloadTab()` to keep video time and volume and disable BYTM features like initial tab volume
  - Exposed the constants `initialParams` (initial URLParams object) and `sessionStorageAvailable` (bool) on the BYTM API

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
  - Moved `NanoEmitter` class over to the [UserUtils library](https://github.com/Sv443-Network/UserUtils#nanoemitter) (it is still re-exported by the plugin interface as before)
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
    - Changed `event` property returned by `registerPlugin()` from nanoevents Emitter to NanoEmitter instance (see [the UserUtils docs](https://github.com/Sv443-Network/UserUtils#nanoemitter))  
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
    - Implemented new [SelectorObserver](https://github.com/Sv443-Network/UserUtils#selectorobserver) instances to improve overall performance by quite a lot
      - Implemented rising-edge debounce for SelectorObserver instances to massively improve responsiveness
    - Added a cache to save lyrics in. Up to 1000 of the most listened to songs are saved throughout sessions for 30 days to save time and reduce server load.
  - Implemented new class BytmDialog for less duplicate code, better maintainability, the ability to make more menus easier and for them to have better accessibility
- **Plugin Interface Changes:**
  - Expanded plugin interface
    - Added function to register plugins (see [contributing guide](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#registerplugin))  
      All plugins that are not registered will have restricted access to the BetterYTM API (subject to change in the future).
    - Plugins are now given access to the classes [`BytmDialog`](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#bytmdialog) and [`NanoEmitter`](https://github.com/Sv443-Network/UserUtils#nanoemitter), and the functions [`onInteraction()`](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#oninteraction), [`getThumbnailUrl()`](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#getthumbnailurl), [`getBestThumbnailUrl()`](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#getbestthumbnailurl) [`createHotkeyInput()`](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#createhotkeyinput), [`createToggleInput()`](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#createtoggleinput) and [`createCircularBtn()`](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#createcircularbtn)
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
