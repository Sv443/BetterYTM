# BetterYTM
Userscript that improves [YouTube Music](https://music.youtube.com/)

<br>

## Features:
- Input:
    - Use arrow keys to skip forward or backward by 10 seconds
    - Switch between YouTube and YouTube Music on a video by pressing a hotkey (F9 by default)
    - TODO: Automatically dismiss "are you still there" popup
- Layout:
    - Remove the "Upgrade to YT Music Premium" tab in the title bar
    - Set a custom size and step resolution for the volume slider
    - Quickly open any song's lyrics on genius.com
  
... and more!

<br>

To toggle features on or off, install the userscript, then click the "BetterYTM" text under the logo to open the settings menu.  
Note that the page needs to be reloaded for the changes to take effect.

<br><br>

## Installation:
**Requires a userscript manager browser extension. I recommend the following:**
> Firefox: [ViolentMonkey](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/) or [TamperMonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)  
> Chrome: [ViolentMonkey](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag) or [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)  
> Edge: [ViolentMonkey](https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao?hl=en-GB&gl=DE) or [TamperMonkey](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

<br>

Once you have the extension, click this button to install the userscript:  
  
<!-- <a href="https://github.com/Sv443/BetterYTM/raw/main/BetterYTM.user.js" target="_blank"><img src="https://img.shields.io/badge/Install-%E2%96%BA-039e10" height="24"></a> -->
<a href="https://github.com/Sv443/BetterYTM/raw/main/BetterYTM.user.js" target="_blank"><img src="https://img.shields.io/badge/Install-%E2%96%BC-039e10" height="24"></a>

<br><br>

### Development:
| Command | Description |
| --- | --- |
| `npm i` | Run once to install dependencies |
| `npm run lint` | Lints the userscript with ESLint |
| `npm run build` | Builds the userscript |
| `npm run watch` | Watches, rebuilds and serves the userscript on port 8710, so it can be updated live if set up correctly in the userscript manager |

When using ViolentMonkey, after running the command `npm run watch`, open [`http://localhost:8710/BetterYTM.user.js`](http://localhost:8710/BetterYTM.user.js) and select the `Track local file` option.  
This makes it so the userscript automatically updates when the code changes.


<br><br>

### Disclaimers:
- I am not affiliated with YouTube, Google, Alphabet, Genius, or anyone else.
- I do not own any third party icons, I just re-host them here for better stability and availability.
- I do not intend to ever collect any data about you, everything in this script is done and stored locally on your device or on the respective site's servers.
- I can't guarantee this software is without flaws. If something bad happens, I don't accept blame. I do however accept [bug reports and feature requests.](https://github.com/Sv443/BetterYTM/issues/new)

<br><br><br><br><br><br>

<div align="center" style="text-align: center;">

Made with ❤️ by [Sv443](https://github.com/Sv443)  
If you like this userscript, please consider [supporting me](https://github.com/sponsors/Sv443)  
  
© 2022 Sv443 - [MIT license](./LICENSE.txt)

</div>
