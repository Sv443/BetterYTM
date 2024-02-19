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
  
[See pull request for more info](https://github.com/Sv443/BetterYTM/pull/47)

<div class="split"></div>
<br>

## 1.1.0
- **Features / Changes:**
  - The userscript is now available in 9 languages! To submit or edit translations, please [view this guide](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#submitting-translations)
  - Added an interface for user-created plugins ([see contributing guide for more info](https://github.com/Sv443/BetterYTM/blob/develop/contributing.md#developing-a-plugin-that-interfaces-with-betterytm))
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
  
[See pull request for more info](https://github.com/Sv443/BetterYTM/pull/35)

<div class="split"></div>
<br>

## 1.0.2
- **Changes:**
  - Script is now published to OpenUserJS!
  - Added a OpenUserJS link to the configuration menu

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
  
[See pull request for more info](https://github.com/Sv443/BetterYTM/pull/9)

<div class="split"></div>
<br>

## 0.2.0

- **Added Features:**
  - Switch between YouTube and YT Music (with <kbd>F9</kbd> by default)
  - Search for song lyrics with new button in media controls
  - Remove "Upgrade to YTM Premium" tab
  
[See pull request for more info](https://github.com/Sv443/BetterYTM/pull/3)

<div class="split"></div>
<br>

## 0.1.0

- Added support for arrow keys to skip forward or backward (currently only by fixed 10 second interval)
