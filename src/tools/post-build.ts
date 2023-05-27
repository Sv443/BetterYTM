import { readFile, writeFile, stat } from "fs/promises";
import pkg from "../../package.json";
import { join } from "path";

const userscriptName = "BetterYTM.user.js";
const url = pkg.repository.url.replace("git+", "").replace(".git", "");
const scriptUrl = pkg.repository.url.replace("git+", "").replace(".git", "") + "/raw/main/dist/" + userscriptName;

const header = `// ==UserScript==
// @name            BetterYTM
// @homepageURL     ${pkg.homepage}
// @namespace       ${url}
// @version         ${pkg.version}
// @description     Improvements for YouTube Music
// @description:de  Verbesserungen für YouTube Music
// @license         ${pkg.license}
// @author          ${pkg.author.name}
// @copyright       ${pkg.author.name} <${pkg.author.email}>
// @match           https://music.youtube.com/*
// @match           https://www.youtube.com/*
// @icon            https://raw.githubusercontent.com/Sv443/BetterYTM/main/resources/icon/v2.1_200.png
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
    const path = join(__dirname, `../../dist/${userscriptName}`);
    const input = String(await readFile(path));
    await writeFile(path, `${header}\n${input}${input.endsWith("\n") ? "" : "\n"}`);
    console.info("Successfully added the userscript header");
    console.info(`\nFinal size is ${((await stat(path)).size / 1000).toFixed(2)} KB`);
  }
  catch(err) {
    console.error("Error while adding userscript header:");
    console.error(err);
    setImmediate(() => process.exit(1));
  }
})();
