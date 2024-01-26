<div style="text-align: center;" align="center">

<h1><img src="./assets/logo/logo_128.png" width="96" height="96" /><br>BetterYTM</h1>

### Lots of configurable layout and user experience improvements for YouTube Music
Supported Languages: 🇺🇸 English, 🇩🇪 German, 🇪🇸 Spanish, 🇫🇷 French, 🇮🇳 Hindi, 🇯🇵 Japanese, 🇵🇹 Portuguese, 🇨🇳 Chinese

[**Features**](#features) • [**Installation**](#installation) • [**Plugins**](#plugins) • [**Development**](#development) • [**Attributions**](#attributions) • [**Disclaimers**](#disclaimers)

</div>
<br>

### Features:
All of these can be toggled and configured in the configuration menu.
- Layout & User Experience:
  - Open any song's lyrics on genius.com which generally has higher quality than YouTube's providers
  - Quick actions on songs in a queue, to quickly open their lyrics or remove them from the queue
  - Set a custom size and step resolution for the volume slider and show a percentage label next to it
  - Boost the audio volume past 100%
  - Improvements to clickability of song titles and thumbnails when wanting to open them in a new tab
  - Quickly scroll to the currently active song in the queue by clicking a button
  - Remove the tracking parameter from URLs in the share menu
  - Automatically close permanent notifications
  - Remove the premium tab in the sidebar
- Input / Interaction:
  - Use arrow keys to skip forward or backward by a set time (5s by default)
  - Press number keys to skip to a percentage of the currently playing song
  - Switch between YouTube and YouTube Music on a video by pressing a hotkey (F9 by default)
  - Prevent the "unsaved data" popup that sometimes appears before leaving the site
  
... and more!

<br>

To toggle and configure features, after installing the userscript, click the "BetterYTM" text under the logo to open the configuration menu.  
Alternatively or if you disabled the watermark, you can open it through the menu you get by clicking on your avatar in the top right corner.  
Note that the page needs to be reloaded for changes to take effect.  
  
My work relies on donations, so if you like this userscript please consider [supporting development ❤️](https://github.com/sponsors/Sv443)

<br><br>

## Installation:
<b>

Requires a userscript manager browser extension.  
I really recommend ViolentMonkey: [Firefox](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/) &bull; [Chrome](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag) &bull; [Edge](https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao?hl=en-GB&gl=DE)

</b>

Once you have the extension, click this button to install the userscript:  
  
<a href="https://github.com/Sv443/BetterYTM/raw/main/dist/BetterYTM.user.js" target="_blank"><img src="https://img.shields.io/badge/Install-%E2%96%BA-039e10" height="24"></a>

<br>

<sup>

Note: the `unsafeWindow` grant is required due to limitations in some browsers, [see this issue for more info.](https://github.com/Sv443/BetterYTM/issues/18#show_issue)

</sup>
<sup>

To install the latest development build [click here](https://github.com/Sv443/BetterYTM/raw/develop/dist/BetterYTM.user.js) (note: the script will not auto-update to the next release version)

</sup>

<br><br><br>

## Plugins:
BetterYTM supports plugin userscripts that can be installed in parallel and can make use of BetterYTM's pre-existing API.  
  
Currently there are no available plugins, but you can [submit an issue here, using the plugin submission template](https://github.com/Sv443/BetterYTM/issues/new/choose).  
Also refer to the [plugin creation guide](./contributing.md#developing-a-plugin-that-interfaces-with-betterytm) for more information on how to use the API.

<br><br>

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
  
© 2022 Sv443 - [AGPL-3.0](./LICENSE.txt)

</div>
