<div style="text-align: center;" align="center">
<!-- <{{HEADER}}> -->
<!-- THIS IS GENERATED CONTENT - DO NOT MODIFY DIRECTLY -->
<h1><img src="https://raw.githubusercontent.com/Sv443/BetterYTM/main/assets/images/logo/logo_128.png" width="96" height="96" /><br>BetterYTM</h1>

### Lots of configurable layout and user experience improvements for YouTube Music™ and YouTube™

<h4>With translations for: <abbr title="Portuguese (Brazil)">🇧🇷&nbsp;BR</abbr>, <abbr title="Chinese (Simplified, China)">🇨🇳&nbsp;CN</abbr>, <abbr title="German (Germany)">🇩🇪&nbsp;DE</abbr>, <abbr title="Spanish (Spain)">🇪🇸&nbsp;ES</abbr>, <abbr title="French (France)">🇫🇷&nbsp;FR</abbr>, <abbr title="Hindi (India)">🇮🇳&nbsp;IN</abbr>, <abbr title="Japanese (Japan)">🇯🇵&nbsp;JP</abbr></h4>

---
#### [**Features**](#features) • [**Installation**](#installation) • [**Integrations**](#integrations) • [**Plugins**](#plugins) • [**Support**](#support) • [**Privacy**](#privacy) • [**Development**](#development) • [**Attributions**](#attributions) • [**Disclaimers**](#disclaimers)
<!-- END OF GENERATED CONTENT -->
<!-- </{{HEADER}}> -->

</div>
<br>

### Features
All of these can be toggled and configured in the configuration menu.
- Layout & User Experience:
  - Show the approximate amount of likes and dislikes on songs (powered by returnyoutubedislike.com)
  - Open any song's lyrics on genius.com which generally has higher quality than YouTube's providers
  - Set a custom size and step resolution for the volume slider and show a percentage label next to it
  - Quick actions on songs in a queue, to quickly open their lyrics or remove them from the queue
  - Quickly scroll to the currently active song in the queue by clicking a button
  - Remember the time of the last played song to resume playback after reloading or reopening the tab
  - Improve clickability of song titles and thumbnails when wanting to open them in a new tab
  - Remove the tracking parameter from URLs in the share menu
  - Automatically close permanent notifications
  - Shrink the dead space on the /watch page
- Input & Interaction:
  - Auto-like songs and videos of your favorite creators on both YT and YT Music
  - Use arrow keys to skip forward or backward and control volume
  - Press number keys to skip to a percentage of the currently playing song
  - Custom hotkeys that allow you to switch between YT and YTM, like or dislike, open the lyrics, and more
  - Prevent the "unsaved data" popup that sometimes appears before leaving the site
  
... and these are just the notable features, there are many more smaller features, improvements and fixes!

<br>

To toggle and configure features, after installing the userscript, click the "BetterYTM" text under the logo to open the configuration menu.  
If you disabled the watermark, you can still open it by clicking your avatar in the top right corner on YTM or through the left sidebar on YT.  
  
> [!NOTE]
> 
> My work relies on donations, so if you like this userscript please consider [supporting development ❤️](https://github.com/sponsors/Sv443)

<br><br><br>

## Installation
Note: by installing BetterYTM, you agree to the [license terms](./LICENSE.txt), [disclaimers](#disclaimers) and [privacy notice.](#privacy)
1. **Install a userscript manager browser extension - I really recommend Violentmonkey ([Firefox](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/), [Chrome](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag), [Edge](https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao?hl=en-GB&gl=DE)).**  
  <sub>Other extensions are known to not work as expected, especially in isolated contexts like with FireMonkey or the Brave browser (<a href="https://github.com/Sv443/BetterYTM/issues/115#issuecomment-2468374348" target="_blank">more info here</a>).</sub>

2. **Then, [visit the Releases page](https://github.com/Sv443/BetterYTM/releases) and click the install button on the latest release.**  
  <sub>Note: the `unsafeWindow` grant is required due to limitations in some browsers (<a href="https://github.com/Sv443/BetterYTM/issues/18#show_issue" target="_blank">more info here</a>).</sub>

<br>
  
If you want to install the latest (potentially unstable) development build, [look for the latest pull request](https://github.com/Sv443/BetterYTM/pulls?q=sort%3Aupdated-desc+is%3Apr+is%3Aopen) and click the install button there.  
Please make sure to manually remove and reinstall the userscript once the next release is out to avoid any issues.

<br><br>

## Integrations
BetterYTM integrates with other extensions and tools to adjust its or their behavior and provide a smoother experience:
- [Dark Reader](https://darkreader.org/) (disabled fully or partially)
- [Enhancer for YouTube](https://www.mrfdev.com/enhancer-for-youtube) (BYTM respects the set theme)
- [Return YouTube Dislike](https://returnyoutubedislike.com/) (shows approx. like and dislike counts)
- [SponsorBlock](https://sponsor.ajay.app/) (compatibility adjustments)
- [ThemeSong](https://github.com/KristofferTroncoso/ThemeSong) (BYTM respects the set theme)
- [Apple Music](https://music.apple.com/) (album artworks for thumbnail overlay)
  
To find out more about these integrations, [click here](./src/dev/integrations.md)

<br><br>

## Plugins
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

## Support
If you have any questions, issues, or feature requests, please [open an issue here.](https://github.com/Sv443/BetterYTM/issues/new/choose)  
You can also join my Discord server and ask your questions there or just hang out with other community members and me:  
  
[![Discord](https://img.shields.io/discord/565933531214118942)](https://dc.sv443.net/)

<br><br>

## Privacy
BetterYTM does not collect any data about you that isn't strictly necessary for its features to work.  
Your userscript manager extension's storage API is used to store all settings and collected data locally on your device.  
Open its settings to see and manage this data. Delete the userscript to automatically delete all associated data.  
  
BetterYTM makes use of external services and APIs to provide some of its features, which may collect data about you.  
In every case, only the bare minimum of data is sent to these services and only when necessary for the function of the script.  
  
- [Return YouTube Dislike - Security FAQ](https://github.com/Anarios/return-youtube-dislike/blob/main/Docs/SECURITY-FAQ.md) (video ID, IP address)
- [geniURL - Privacy Policy](https://sv443.net/privacypolicy/en) (song and artist names, script version, IP address)
- [Apple Music - Privacy Policy](https://www.apple.com/legal/privacy/data/en/apple-music/) (album and artist names, IP address)

<br><br>

### Development
This project is based on my extensive template for making a userscript with TypeScript and many modern language and convenience features.  
[Check it out here](https://github.com/Sv443/Userscript.ts) if you want to make your own userscripts!  
  
**For information on how to set this project up locally, contribute to it, or create plugins for BetterYTM, see [the contributing guide](./contributing.md)**  
  
> [!NOTE]  
> Each folder contains a `README.md` file with further information about the contents. If you want to know more about a specific part of the project, please refer to these files.

<br><br>

### Attributions
This userscript depends on these projects:
- [@sv443-network/userutils](https://github.com/Sv443-Network/UserUtils)
- [compare-versions](https://npmjs.org/package/compare-versions)
- [Cousine font](https://fonts.google.com/specimen/Cousine)
- [DOMPurify](https://github.com/cure53/DOMPurify)
- [Marked](https://npmjs.org/package/marked)
- [Nano Events](https://github.com/ai/nanoevents)
- [tslib](https://npmjs.org/package/tslib)
  
For development dependencies, please refer to `devDependencies` in [`package.json`](./package.json)
  
#### Icon attributions
- Most icons are from [Material Icons](https://fonts.google.com/icons)
- For external icon attributions, see [`assets/images/external/README.md`](assets/images/external/README.md)

<br><br>

### Disclaimers
- I am not affiliated with or endorsed by YouTube, Google, Alphabet, Genius, or anyone else.
- I don't own and have not modified any third party icons, I just re-host them as they are [here](https://github.com/Sv443/BetterYTM/tree/main/assets/images/external/) for ensured availability and compatibility.
- I do not intend to ever collect any data about the end user. Everything in this script is done and stored locally on your device or on the site the script runs on.  
  Do note that requests to external services may collect data about you, to the extent that those services do (which usually boils down your IP address and the videos you're watching).
- This script comes as-is, so I can't guarantee this software is without flaws. If something bad happens, I don't accept blame. I will however gladly accept your [bug reports and feature requests](https://github.com/Sv443/BetterYTM/issues/new/choose) or [contributions to the code or translations.](https://github.com/Sv443/BetterYTM/blob/main/contributing.md)

<br><br><br><br>

<div align="center" style="text-align: center;">

Made with ❤️ by [Sv443](https://github.com/Sv443)  
If you like this userscript, please consider [supporting me](https://github.com/sponsors/Sv443)  
  
© 2022 Sv443 - [AGPL-3.0](./LICENSE.txt)

</div>
