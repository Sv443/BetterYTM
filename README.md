<div style="text-align: center;" align="center">
<!-- <{{HEADER}}> -->
<!-- THIS IS GENERATED CONTENT - DO NOT MODIFY DIRECTLY -->
<h1><img src="https://raw.githubusercontent.com/Sv443/BetterYTM/main/assets/images/logo/logo_128.png" width="96" height="96" /><br>BetterYTM</h1>

### Lots of configurable layout and user experience improvements for YouTube Music™ and YouTube™

#### [**Features**](#features) • [**Installation**](#installation) • [**Integrations**](#integrations) • [**Plugins**](#plugins) • [**Support**](#support) • [**Development**](#development) • [**Attributions**](#attributions) • [**Disclaimers**](#disclaimers)
---

Available in 🇨🇳&nbsp;Chinese (simpl.), 🇬🇧&nbsp;English (GB), 🇺🇸&nbsp;English (US), 🇫🇷&nbsp;French (FR), 🇩🇪&nbsp;German (DE), 🇮🇳&nbsp;Hindi (IN), 🇯🇵&nbsp;Japanese (JP), 🇧🇷&nbsp;Portuguese (BR), 🇪🇸&nbsp;Spanish (ES)
<!-- END OF GENERATED CONTENT -->
<!-- </{{HEADER}}> -->

</div>
<br>

### Features:
All of these can be toggled and configured in the configuration menu.
- Layout & User Experience:
  - Show the approximate amount of likes and dislikes on songs (powered by returnyoutubedislike.com)
  - Open any song's lyrics on genius.com which generally has higher quality than YouTube's providers
  - Quick actions on songs in a queue, to quickly open their lyrics or remove them from the queue
  - Quickly scroll to the currently active song in the queue by clicking a button
  - Set a custom size and step resolution for the volume slider and show a percentage label next to it
  - Remember the time of the last played song to resume playback after reloading or reopening the tab
  - Improve clickability of song titles and thumbnails when wanting to open them in a new tab
  - Remove the tracking parameter from URLs in the share menu
  - Automatically close permanent notifications
- Input & Interaction:
  - Auto-like songs and videos of your favorite creators on both YouTube and YouTube Music
  - Use arrow keys to skip forward or backward by a configurable amount of time
  - Press number keys to skip to a percentage of the currently playing song
  - Press a hotkey on a video/song to switch between YouTube and YouTube Music, while keeping the video time
  - Prevent the "unsaved data" popup that sometimes appears before leaving the site
  
... and these are just the notable features, there are many more smaller features, improvements and fixes!

<br>

To toggle and configure features, after installing the userscript, click the "BetterYTM" text under the logo to open the configuration menu.  
If you disabled the watermark, you can still open it by clicking your avatar in the top right corner on YTM or through the left sidebar on YT.  
  
> [!NOTE]  
> My work relies on donations, so if you like this userscript please consider [supporting development ❤️](https://github.com/sponsors/Sv443)

<br><br><br>

## Installation:
<b>

Requires a userscript manager browser extension.  
I really recommend Violentmonkey: [Firefox](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/) &bull; [Chrome](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag) &bull; [Edge](https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao?hl=en-GB&gl=DE)  

</b>
<sup>Other extensions are known to be less reliable and may not work as expected, especially in isolated contexts like FireMonkey or the Brave browser.</sup>

<br>

Once you have the extension, **[visit the Releases page](https://github.com/Sv443/BetterYTM/releases) and click the install button** on the latest release.

<br>

<sup>

Note: the `unsafeWindow` grant is required due to limitations in some browsers, [see this issue for more info.](https://github.com/Sv443/BetterYTM/issues/18#show_issue)

</sup>
<sup>

If you want to install the latest (potentially unstable) development build, [look for the latest pull request](https://github.com/Sv443/BetterYTM/pulls?q=sort%3Aupdated-desc+is%3Apr+is%3Aopen) and click the install button there.  
Please make sure to fully reinstall the userscript once the next release is out to avoid any issues.

</sup>

<br><br><br>

## Integrations:
BetterYTM integrates with other extensions and tools to adjust its or their behavior and provide a smoother experience:
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
<sup>

Refer to the [plugin creation guide](./contributing.md#developing-a-plugin-that-interfaces-with-betterytm) for more information or check out the [official plugin template](https://github.com/Sv443/BetterYTM-Plugin-Template) for a quick start on creating a plugin.

</sup>

Currently there are no available plugins, but you can [submit an issue using the plugin submission template](https://github.com/Sv443/BetterYTM/issues/new/choose) so it will be listed here.  

<!-- END OF GENERATED CONTENT -->
<!-- </{{PLUGINS}}> -->

<br><br>

## Support:
If you have any questions, issues, or feature requests, please [open an issue here.](https://github.com/Sv443/BetterYTM/issues/new/choose)  
You can also join my Discord server and ask your questions there or just hang out with other community members and me:  
  
[![Discord](https://img.shields.io/discord/565933531214118942)](https://dc.sv443.net/)

<br><br>

### Development:
This project is based on my extensive template for making a userscript with TypeScript and many modern language and convenience features.  
[Check it out here](https://github.com/Sv443/Userscript.ts) if you want to make your own userscripts!  
  
**For information on how to contribute to this project, see [the contributing guide](./contributing.md)**

<br><br>

### Attributions:
This userscript depends on these projects:
- [@sv443-network/userutils](https://github.com/Sv443-Network/UserUtils)
- [compare-versions](https://npmjs.org/package/compare-versions)
- [Cousine font](https://fonts.google.com/specimen/Cousine)
- [DOMPurify](https://github.com/cure53/DOMPurify)
- [Marked](https://npmjs.org/package/marked)
- [Nano Events](https://github.com/ai/nanoevents)
- [tslib](https://npmjs.org/package/tslib)
  
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
