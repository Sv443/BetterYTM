import { readFile, writeFile, stat } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import pkg from "../../package.json" assert { type: "json" };

const repo = "Sv443/BetterYTM";
const userscriptName = "BetterYTM.user.js";
const scriptUrl = `https://raw.githubusercontent.com/${repo}/main/dist/${userscriptName}`;

const header = `\
// ==UserScript==
// @name            BetterYTM
// @homepageURL     ${pkg.homepage}#readme
// @namespace       ${pkg.homepage}
// @version         ${pkg.version}
// @description     Improvements for YouTube Music
// @description:de  Verbesserungen für YouTube Music
// @license         ${pkg.license}
// @author          ${pkg.author.name}
// @copyright       ${pkg.author.name} (${pkg.author.url})
// @match           https://music.youtube.com/*
// @match           https://www.youtube.com/*
// @icon            https://raw.githubusercontent.com/${repo}/main/resources/icon/icon.png
// @run-at          document-start
// @grant           GM.getValue
// @grant           GM.setValue
// @connect         self
// @connect         youtube.com
// @connect         github.com
// @connect         githubusercontent.com
// @downloadURL     ${scriptUrl}
// @updateURL       ${scriptUrl}
// ==/UserScript==
/*
 ▄▄▄                    ▄   ▄▄▄▄▄▄   ▄
 █  █ ▄▄▄ █   █   ▄▄▄ ▄ ▄█ █  █  █▀▄▀█
 █▀▀▄ █▄█ █▀  █▀  █▄█ █▀  █   █  █   █
 █▄▄▀ ▀▄▄ ▀▄▄ ▀▄▄ ▀▄▄ █   █   █  █   █

         Made with ❤️ by Sv443
 I welcome every contribution on GitHub! */

/* Disclaimer: I am not affiliated with YouTube, Google, Alphabet, Genius or anyone else */
/* C&D this 🖕 */
`;

(async () => {
  try {
    const path = join(dirname(fileURLToPath(import.meta.url)), `../../dist/${userscriptName}`);
    const input = String(await readFile(path));
    await writeFile(path, `${header}\n${input}${input.endsWith("\n") ? "" : "\n"}`);
    console.info("Successfully added the userscript header");
    console.info(`\nFinal size is ${((await stat(path)).size / 1024).toFixed(2)} KiB\n`);
  }
  catch(err) {
    console.error("Error while adding userscript header:");
    console.error(err);
    setImmediate(() => process.exit(1));
  }
})();
