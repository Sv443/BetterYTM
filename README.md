<div style="text-align: center;" align="center">

<h1><img src="./assets/icon/icon.png" /><br>BetterYTM</h1>

Configurable layout and UX improvements for YouTube Music

</div>
<br>

### Features:
All of these features can be toggled and configured!
- Input:
    - Use arrow keys to skip forward or backward by 10 seconds
    - Switch between YouTube and YouTube Music on a video by pressing a hotkey (F9 by default) <!-- TODO: make configurable -->
- Layout:
    - Open any song's lyrics on genius.com which generally has higher quality than YouTube's providers
    - TODO: Quick actions on songs in a queue, to open their lyrics or remove them from the queue
    - Remove the "Upgrade to YT Music Premium" tab in the title bar
    - Set a custom size and step resolution for the volume slider
    - TODO: Improvements to clickability of song titles and thumbnails (to open them in a new tab better)
  
... and more!

<br>

To toggle features on or off, install the userscript, then click the "BetterYTM" text under the logo to open the settings menu.  
Note that the page needs to be reloaded for the changes to take effect.  
  
My work relies on donations, so if you like this userscript please consider [supporting development ❤️](https://github.com/sponsors/Sv443)

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

<br>

<sub>

Note: the `unsafeWindow` grant is required due to limitations in some browsers, [see this issue for more info.](https://github.com/Sv443/BetterYTM/issues/18#show_issue)

</sub>

<br><br><br>

### Development:
This project is based on my template for making a userscript with TypeScript and many modern language features.  
[Check it out here](https://github.com/Sv443/Userscript.ts) if you want to make your own userscripts!  
  
Setting up the project for local development:
1. Have Node.js, npm and Git installed
2. Download and extract or clone this repo
3. Open a terminal in the project root and run `npm i`
4. Copy the file `.env.template` to `.env` and modify the `NODE_ENV` variable to enable or disable minification.  
  If on `development` the code is readable and debuggable but also has a much bigger file size than on `production`

These are the CLI commands available after setting up the project:
| Command | Description |
| --- | --- |
| `npm i` | Run once to install dependencies |
| `npm run lint` | Lints the userscript with ESLint |
| `npm run build` | Builds the userscript |
| `npm run watch` | Watches, rebuilds and serves the userscript on port 8710, so it can be updated live if set up correctly in the userscript manager. Configure request logging and more in `src/tools/serve.ts` |
<!-- first column uses non-breaking space U+00A0 (' ') -->

When using ViolentMonkey, after running the command `npm run watch`, open [`http://localhost:8710/dist/BetterYTM.user.js`](http://localhost:8710/dist/BetterYTM.user.js) and select the `Track local file` option.  
This makes it so the userscript automatically updates when the code changes.  
Note: the tab needs to stay open on Firefox or the script will not update itself.

<br><br>

### Dependencies:
This userscript depends on these libraries:
- [@billjs/event-emitter](https://npmjs.org/package/@billjs/event-emitter)

<br><br>

### Disclaimers:
- I am not affiliated with YouTube, Google, Alphabet, Genius, or anyone else.
- I do not own any third party icons, I just re-host them here for better stability and availability.
- I do not intend to ever collect any data about you, everything in this script is done and stored locally on your device or on the site it currently runs on.
- I can't guarantee this software is without flaws. If something bad happens, I don't accept blame. I do however accept [bug reports and feature requests.](https://github.com/Sv443/BetterYTM/issues/new/choose)

<br><br><br><br><br><br>

<div align="center" style="text-align: center;">

Made with ❤️ by [Sv443](https://github.com/Sv443)  
If you like this userscript, please consider [supporting me](https://github.com/sponsors/Sv443)  
  
© 2022 Sv443 - [MIT license](./LICENSE.txt)

</div>
