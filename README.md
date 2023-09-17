<div style="text-align: center;" align="center">

<h1><img src="./assets/icon/icon_128.png" width="96" height="96" /><br>BetterYTM</h1>

### Configurable layout and UX improvements for YouTube Music

<b>

[Features](#features) • [Installation](#installation) • [Development](#development) • [Attributions](#attributions) • [Disclaimers](#disclaimers)

</b>
</div>
<br>

### Features:
All of these can be configured in the menu that can be found by clicking on your avatar.
- Layout:
  - Open any song's lyrics on genius.com which generally has higher quality than YouTube's providers
  - Quick actions on songs in a queue, to quickly open their lyrics or remove them from the queue
  - Set a custom size and step resolution for the volume slider
  - Remove the premium tab in the sidebar
  - Improvements to clickability of song titles and thumbnails when wanting to open them in a new tab
  - Remove the tracking parameter from URLs in the share menu
- Input:
  - Use arrow keys to skip forward or backward by 10 seconds
  - Press number keys to skip to a percentage of the currently playing song
  - Switch between YouTube and YouTube Music on a video by pressing the hotkey F9 <!-- TODO(v1.1): make configurable -->
  - Prevent the "unsaved data" popup that sometimes appears before leaving the site
  
... and more!

<br>

To toggle features on or off, install the userscript, then click the "BetterYTM" text under the logo to open the configuration menu.  
Alternatively or if you disabled the watermark, you can open the menu by clicking on your avatar in the top right corner.  
Note that the page needs to be reloaded for the changes to take effect.  
  
My work relies on donations, so if you like this userscript please consider [supporting development ❤️](https://github.com/sponsors/Sv443)

<br><br>

## Installation:
<b>

Requires a userscript manager browser extension.  
I really recommend ViolentMonkey: [Firefox](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/) &bull; [Chrome](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag) &bull; [Edge](https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao?hl=en-GB&gl=DE)

</b>

Once you have the extension, click this button to install the userscript:  
  
<a href="https://github.com/Sv443/BetterYTM/raw/main/BetterYTM.user.js" target="_blank"><img src="https://img.shields.io/badge/Install-%E2%96%BA-039e10" height="24"></a>

<br>

<sup>

Note: the `unsafeWindow` grant is required due to limitations in some browsers, [see this issue for more info.](https://github.com/Sv443/BetterYTM/issues/18#show_issue)

</sup>
<sup>

To install the latest development build [click here](https://github.com/Sv443/BetterYTM/raw/main/BetterYTM.user.js) (note: the script will not auto-update to the next release version)

</sup>

<br><br><br>

### Development:
This project is based on my extensive template for making a userscript with TypeScript and many modern language and convenience features.  
[Check it out here](https://github.com/Sv443/Userscript.ts) if you want to make your own userscripts!  
  
**For information on how to contribute to this project, see [the contributing guide](./contributing.md)**

<br><br>

### Attributions:
This userscript depends on these runtime libraries:
- [nanoevents](https://npmjs.org/package/nanoevents)
- [@sv443-network/userutils](https://github.com/Sv443-Network/UserUtils)
  
For development dependencies, please refer to `devDependencies` in [`package.json`](./package.json)
  
Icons:  
- Most icons are from [Material Icons](https://fonts.google.com/icons)
- For external icon attributions, see [`assets/external/`](assets/external/README.md)

<br><br>

### Disclaimers:
- I am not affiliated with or endorsed by YouTube, Google, Alphabet, Genius, or anyone else.
- I do not own any third party icons, I just re-host them [here](./assets/external/) for better stability and availability.
- I do not intend to ever collect any data about you, everything in this script is done and stored locally on your device or on the site the script runs on.
- I can't guarantee this software is without flaws. If something bad happens, I don't accept blame. I do however accept [bug reports and feature requests.](https://github.com/Sv443/BetterYTM/issues/new/choose)

<br><br><br><br>

<div align="center" style="text-align: center;">

Made with ❤️ by [Sv443](https://github.com/Sv443)  
If you like this userscript, please consider [supporting me](https://github.com/sponsors/Sv443)  
  
© 2022 Sv443 - [MIT license](./LICENSE.txt)

</div>
