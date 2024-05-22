<!-- I messed up with the changelog parsing so this is just how it will have to be -->
<div class="split"></div>

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
- **Internal Changes:**
  - Improved script performance
    - Implemented new [SelectorObserver](https://github.com/Sv443-Network/UserUtils#selectorobserver) instances to improve overall performance by quite a lot
      - Implemented rising-edge debounce for SelectorObserver instances to massively improve responsiveness
    - Added a cache to save lyrics in. Up to 1000 of the most listened to songs are saved throughout sessions for 30 days to save time and reduce server load.
  - Implemented new class BytmDialog for less duplicate code, better maintainability, the ability to make more menus easier and for them to have better accessibility
  - Expanded plugin interface
    - Added function to register plugins (see [contributing guide](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#registerplugin))  
      All plugins that are not registered will have restricted access to the BetterYTM API (subject to change in the future).
    - Plugins are now given access to the classes [`BytmDialog`](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#bytmdialog) and [`NanoEmitter`](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#nanoemitter), and the functions [`onInteraction()`](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#oninteraction), [`getThumbnailUrl()`](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#getthumbnailurl), [`getBestThumbnailUrl()`](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#getbestthumbnailurl) [`createHotkeyInput()`](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#createhotkeyinput), [`createToggleInput()`](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#createtoggleinput) and [`createCircularBtn()`](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#createcircularbtn)
  - Added an experimental fuzzy filtering algorithm when fetching lyrics to eventually yield more accurate results (hidden behind advanced mode because it's far from perfect)
  - Resource URL versioning was improved, so all versions from now on will still work in the future when the URLs could change

<div class="pr-link-cont">
  <a href="https://github.com/Sv443/BetterYTM/pull/52" rel="noopener noreferrer">See pull request for more info</a>
</div>

<div class="split"></div>
<br>

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

## 1.0.2
- **Changes:**
  - Script is now published to OpenUserJS!
  - Added an OpenUserJS link to the configuration menu

<div class="split"></div>
<br>

## 1.0.1
- **Changes:**
  - Script is now published to GreasyFork!
  - Added a GreasyFork link to the configuration menu

<div class="split"></div>
<br>

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

## 0.1.0

- **Features:**
  - Added support for arrow keys to skip forward or backward (currently only by fixed 10 second interval)
