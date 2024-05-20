<div style="text-align: center;" align="center">
<!-- <{{HEADER}}> -->
<!-- THIS IS GENERATED CONTENT - DO NOT MODIFY DIRECTLY -->
<h1><img src="https://raw.githubusercontent.com/Sv443/BetterYTM/main/assets/images/logo/logo_128.png" width="96" height="96" /><br>BetterYTM</h1>

### Lots of configurable layout and user experience improvements for YouTube Music™ and YouTube™
Supported Languages: 🇩🇪&nbsp;German, 🇺🇸&nbsp;English (US), 🇬🇧&nbsp;English (UK), 🇪🇸&nbsp;Spanish, 🇫🇷&nbsp;French, 🇮🇳&nbsp;Hindi, 🇯🇵&nbsp;Japanese, 🇵🇹&nbsp;Portuguese, 🇨🇳&nbsp;Chinese (simpl.)
<!-- END OF GENERATED CONTENT -->
<!-- </{{HEADER}}> -->
[**Features**](#features) • [**Installation**](#installation) • [**Plugins**](#plugins) • [**Support**](#support) • [**Development**](#development) • [**Attributions**](#attributions) • [**Disclaimers**](#disclaimers)
  
---

</div>
<br>

<!-- TODO: -->

### Features:
All of these can be toggled and configured in the configuration menu.
- Layout & User Experience:
  - Open any song's lyrics on genius.com which generally has higher quality than YouTube's providers
  - Quick actions on songs in a queue, to quickly open their lyrics or remove them from the queue
  - Set a custom size and step resolution for the volume slider and show a percentage label next to it
  - Improvements to clickability of song titles and thumbnails when wanting to open them in a new tab
  - Remember the time of the last played song to resume playback after reloading or reopening the tab
  - Quickly scroll to the currently active song in the queue by clicking a button
  - Remove the tracking parameter from URLs in the share menu
  - Automatically close permanent notifications
  - Remove the premium tab in the sidebar
- Input / Interaction:
  - Use arrow keys to skip forward or backward by a configurable amount of time
  - Press number keys to skip to a percentage of the currently playing song
  - Press a hotkey on a video/song to switch between YouTube and YouTube Music, while keeping the video time
  - Prevent the "unsaved data" popup that sometimes appears before leaving the site
  
... and these are just the notable features, there are many more smaller improvements and bugfixes!

<br><br>

To toggle and configure features, after installing the userscript, click the "BetterYTM" text under the logo to open the configuration menu.  
Alternatively or if you disabled the watermark, you can open it through the popover menu opened by clicking your avatar in the top right corner.  
  
> [!NOTE]  
> My work relies on donations, so if you like this userscript please consider [supporting development ❤️](https://github.com/sponsors/Sv443)

<br><br><br>

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

To install the latest development build [click here](https://github.com/Sv443/BetterYTM/raw/develop/dist/BetterYTM.user.js) (the script should auto-update to the next release version)

</sup>

<br><br><br>

## Plugins:
BetterYTM supports plugin userscripts that can be installed in parallel and can make use of BetterYTM's pre-existing API.  
  
<!-- <{{PLUGINS}}> -->
<!-- THIS IS GENERATED CONTENT - DO NOT MODIFY DIRECTLY -->
Currently there are no available plugins, but you can [submit an issue using the plugin submission template](https://github.com/Sv443/BetterYTM/issues/new/choose) so it will be listed here.  
Also refer to the [plugin creation guide](./contributing.md#developing-a-plugin-that-interfaces-with-betterytm) for more information on how to use the API to create a plugin.
<!-- END OF GENERATED CONTENT -->
<!-- </{{PLUGINS}}> -->

<br><br>

## Support:
If you have any questions, issues, or feature requests, please [open an issue here.](https://github.com/Sv443/BetterYTM/issues/new/choose)  
You can also join my Discord server and ask your questions there or just hang out with other community members and me:  
  
[![Discord](https://img.shields.io/discord/565933531214118942)](https://discord.gg/aBH4uRG)

<br><br>

### Development:
This project is based on my extensive template for making a userscript with TypeScript and many modern language and convenience features.  
[Check it out here](https://github.com/Sv443/Userscript.ts) if you want to make your own userscripts!  
  
**For information on how to contribute to this project, see [the contributing guide](./contributing.md)**

<br><br>

### Attributions:
This userscript depends on these runtime libraries:
- [marked](https://npmjs.org/package/marked)
- [nanoevents](https://npmjs.org/package/nanoevents)
- [@sv443-network/userutils](https://github.com/Sv443-Network/UserUtils)
  
For development dependencies, please refer to `devDependencies` in [`package.json`](./package.json)
  
Icons:  
- Most icons are from [Material Icons](https://fonts.google.com/icons)
- For external icon attributions, see [`assets/images/external/`](assets/images/external/README.md)

<br><br>

### Disclaimers:
- I am not affiliated with or endorsed by YouTube, Google, Alphabet, Genius, or anyone else.
- I do not own any third party icons, I just re-host them [here](./assets/images/external/) for better stability and availability.
- I do not intend to ever collect any data about you, everything in this script is done and stored locally on your device or on the site the script runs on.
- I can't guarantee this software is without flaws. If something bad happens, I don't accept blame. I do however accept [bug reports and feature requests.](https://github.com/Sv443/BetterYTM/issues/new/choose)

<br><br><br><br>

<div align="center" style="text-align: center;">

Made with ❤️ by [Sv443](https://github.com/Sv443)  
If you like this userscript, please consider [supporting me](https://github.com/sponsors/Sv443)  
  
© 2022 Sv443 - [AGPL-3.0](./LICENSE.txt)

</div>
