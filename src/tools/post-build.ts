import { readFile, writeFile, stat } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { exec } from "child_process";
import pkg from "../../package.json" assert { type: "json" };

const repo = "Sv443/BetterYTM";
const userscriptDistFile = "BetterYTM.user.js";
const userscriptDistPath = `dist/${userscriptDistFile}`;
const scriptUrl = `https://raw.githubusercontent.com/${repo}/main/dist/${userscriptDistFile}`;
/** Which URLs should the userscript be active on - see https://wiki.greasespot.net/Metadata_Block#%40match */
const matchUrls = [
  "https://music.youtube.com/*", "https://www.youtube.com/*"
];

const matchDirectives = matchUrls.reduce((a, c, i) => a + `// @match           ${c}${i === matchUrls.length - 1 ? "" : "\n"}`, "");

const header = `\
// ==UserScript==
// @name            ${pkg.userscriptName}
// @homepageURL     ${pkg.homepage}#readme
// @namespace       ${pkg.homepage}
// @version         ${pkg.version}
// @description     ${pkg.description}
// @description:de  ${pkg["description:de"]}
// @license         ${pkg.license}
// @author          ${pkg.author.name}
// @copyright       ${pkg.author.name} (${pkg.author.url})
${matchDirectives}
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
    const lastCommitSha = await getLastCommitSha();
    const path = join(dirname(fileURLToPath(import.meta.url)), `../../${userscriptDistPath}`);

    // read userscript and inject build number
    const userscript = String(await readFile(path))
      .replace(/{{BUILD_NUMBER}}/gm, lastCommitSha);

    await writeFile(path, `${header}\n${userscript}${userscript.endsWith("\n") ? "" : "\n"}`);

    console.info(`Successfully added the userscript header. Last commit SHA is ${lastCommitSha}`);
    console.info(`Final size is \x1b[32m${((await stat(path)).size / 1024).toFixed(2)} KiB\x1b[0m\n`);
  }
  catch(err) {
    console.error("Error while adding userscript header:");
    console.error(err);
    setImmediate(() => process.exit(1));
  }
})();

/**
 * Used as a kind of "build number", though note it is always behind by at least one commit,
 * as the act of putting this number in the userscript changes the hash again, indefinitely
 */
function getLastCommitSha() {
  return new Promise<string>((res, rej) => {
    exec("git rev-parse HEAD", (err, stdout, stderr) => {
      if(err) {
        console.error("\x1b[31mError while checking for last Git commit. Do you have Git installed?\x1b[0m\n", stderr);
        return rej(err);
      }
      return res(String(stdout).replace(/\r?\n/gm, "").trim().substring(0, 7));
    });
  });
}
