<!-- <{{HEADER}}> -->
<!-- THIS IS GENERATED CONTENT - DO NOT MODIFY DIRECTLY -->
<h1><img src="https://raw.githubusercontent.com/Sv443/BetterYTM/main/assets/images/logo/logo_128.png" width="96" height="96" /><br>BetterYTM</h1>

### Lots of configurable layout and user experience improvements for YouTube Music™ and YouTube™
🇨🇳&nbsp;Chinese (simpl.), 🇬🇧&nbsp;English (UK), 🇺🇸&nbsp;English (US), 🇫🇷&nbsp;French, 🇩🇪&nbsp;German, 🇮🇳&nbsp;Hindi, 🇯🇵&nbsp;Japanese, 🇵🇹&nbsp;Portuguese, 🇪🇸&nbsp;Spanish
<!-- END OF GENERATED CONTENT -->
<!-- </{{HEADER}}> -->
[**Features**](#features) • [**Installation**](#installation) • [**Integrations**](#integrations) • [**Plugins**](#plugins) • [**Support**](#support) • [**Development**](#development) • [**Attributions**](#attributions) • [**Disclaimers**](#disclaimers)
  
---

<br>

### Features:
All of these can be toggled and configured in the configuration menu.
- Layout & User Experience:
  - Auto-like your favorite channels' songs and videos
  - Show the amount of likes and dislikes on songs (powered by returnyoutubedislike.com)
  - Open any song's lyrics on genius.com which generally has higher quality than YouTube's providers
  - Quick actions on songs in a queue, to quickly open their lyrics or remove them from the queue
  - Set a custom size and step resolution for the volume slider and show a percentage label next to it
  - Improvements to clickability of song titles and thumbnails when wanting to open them in a new tab
  - Remember the time of the last played song to resume playback after reloading or reopening the tab
  - Quickly scroll to the currently active song in the queue by clicking a button
  - Remove the tracking parameter from URLs in the share menu
  - Automatically close permanent notifications
- Input / Interaction:
  - Use arrow keys to skip forward or backward by a configurable amount of time
  - Press number keys to skip to a percentage of the currently playing song
  - Press a hotkey on a video/song to switch between YouTube and YouTube Music, while keeping the video time
  - Prevent the "unsaved data" popup that sometimes appears before leaving the site
  
... and these are just the notable features, there are many more smaller features, improvements and fixes!

<br>

To toggle and configure features, after installing the userscript, click the "BetterYTM" text under the logo to open the configuration menu.  
If you disabled the watermark, you can still click your avatar in the top right corner on YTM or open the left sidebar on YT to open it.  
  
My work relies on donations, so if you like this userscript please consider [supporting development ❤️](https://github.com/sponsors/Sv443)

<br><br>

## Installation:
<b>

Requires a userscript manager browser extension.  
I really recommend ViolentMonkey: [Firefox](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/) &bull; [Chrome](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag) &bull; [Edge](https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao?hl=en-GB&gl=DE)

</b>

Once you have the extension, click the install button at the top of this page!

<br>

<sup>

Note: the `unsafeWindow` grant is required due to limitations in some browsers, [see this issue for more info.](https://github.com/Sv443/BetterYTM/issues/18#show_issue)

</sup>
<br>
<sup>

To install the latest development build [click here](https://github.com/Sv443/BetterYTM/raw/develop/dist/BetterYTM.user.js) (note: the script will not auto-update to the next release version)

</sup>

<br><br><br>

## Integrations:
BetterYTM integrates with other extensions and tools to adjust their behavior and provide a smoother experience:
- [Dark Reader](https://darkreader.org/)
- [Enhancer for YouTube](https://www.mrfdev.com/enhancer-for-youtube)
- [Return YouTube Dislike](https://returnyoutubedislike.com/)
- [SponsorBlock](https://sponsor.ajay.app/)
- [ThemeSong](https://github.com/KristofferTroncoso/ThemeSong)
  
To find out more about these integrations, [click here](./src/dev/integrations.md)

<br><br>

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
  
**For information on how to contribute to this project or how to develop a plugin for BetterYTM, see [the contributing guide](https://github.com/Sv443/BetterYTM/tree/main/contributing.md)**

<br><br>

### Attributions:
This userscript depends on these runtime libraries:
- [@sv443-network/userutils](https://github.com/Sv443-Network/UserUtils)
- [compare-versions](https://npmjs.org/package/compare-versions)
- [marked](https://npmjs.org/package/marked)
- [tslib](https://npmjs.org/package/tslib)
  
For development dependencies, please refer to `devDependencies` in [`package.json`](https://github.com/Sv443/BetterYTM/tree/main/package.json)
  
Icons:  
- Most icons are from [Material Icons](https://fonts.google.com/icons)
- For external icon attributions, see [`assets/images/external/`](https://github.com/Sv443/BetterYTM/tree/main/assets/images/external/)

<br><br>

### Disclaimers:
- I am not affiliated with or endorsed by YouTube, Google, Alphabet, Genius, or anyone else.
- I do not own any third party icons, I just re-host them [here](https://github.com/Sv443/BetterYTM/tree/main/assets/images/external/) for better stability and availability.
- I do not intend to ever collect any data about you, everything in this script is done and stored locally on your device or on the site the script runs on.
- I can't guarantee this software is without flaws. If something bad happens, I don't accept blame. I do however accept [bug reports and feature requests.](https://github.com/Sv443/BetterYTM/issues/new/choose)

<br><br><br><br>

Made with ❤️ by [Sv443](https://github.com/Sv443)  
If you like this userscript, please consider [supporting me](https://github.com/sponsors/Sv443)  
  
© 2022 Sv443 - [AGPL-3.0](https://github.com/Sv443/BetterYTM/tree/main/LICENSE.txt)
