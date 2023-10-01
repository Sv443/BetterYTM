## 1.1.0
- **Added Features:**
  - The userscript is now available in 8 languages! To submit or edit translations, please [view this guide](https://github.com/Sv443/BetterYTM/blob/main/contributing.md#submitting-translations)
  - Added an audio amplification button to the media controls
  - Added feature to restore the song time when reloading or restoring the tab

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
  - Remove tracking parameter `&si=...` from links in the share menu
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

<div class="split"></div>
<br>

## 0.2.0

- **Added Features:**
  - Switch between YouTube and YT Music (with <kbd>F9</kbd> by default)
  - Search for song lyrics with new button in media controls
  - Remove "Upgrade to YTM Premium" tab

<div class="split"></div>
<br>

## 0.1.0

- Added support for arrow keys to skip forward or backward (currently only by fixed 10 second interval)
