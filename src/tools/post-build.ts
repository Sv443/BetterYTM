import { readFile, writeFile } from "fs/promises";
import { dirname, join, relative } from "path";
import { fileURLToPath } from "url";
import { exec } from "child_process";
import dotenv from "dotenv";
import pkg from "../../package.json" assert { type: "json" };

const { env, exit } = process;
dotenv.config();

const mode = process.argv.find((v) => v.trim().match(/^(--)?mode=production$/)) ? "production" : "development";
const branch = mode === "production" ? "main" : "develop";
const outFileSuffix = env.OUTFILE_SUFFIX ?? "";

const repo = "Sv443/BetterYTM";
const userscriptDistFile = `BetterYTM${outFileSuffix}.user.js`;
const distFolderPath = "./dist/";
const scriptUrl = `https://raw.githubusercontent.com/${repo}/${branch}/dist/${userscriptDistFile}`;
/** Which URLs should the userscript be active on - see https://wiki.greasespot.net/Metadata_Block#%40match */
const matchUrls = [
  "https://music.youtube.com/*",
  "https://www.youtube.com/*",
];
/** Whether to trigger the bell sound in some terminals when the code has finished compiling */
const ringBell = env.RING_BELL && (env.RING_BELL.length > 0 && env.RING_BELL.trim().toLowerCase() === "true");

const matchDirectives = matchUrls.reduce((a, c) => a + `// @match           ${c}\n`, "");

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
${matchDirectives}\
// @icon            https://raw.githubusercontent.com/${repo}/${branch}/assets/icon/icon.png
// @run-at          document-start
// @grant           GM.getValue
// @grant           GM.setValue
// @grant           unsafeWindow
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
 I welcome every contribution on GitHub!
   https://github.com/Sv443/BetterYTM
*/

/* Disclaimer: I am not affiliated with YouTube, Google, Alphabet, Genius or anyone else */
/* C&D this 🖕 */
`;

(async () => {
  try {
    const rootPath = join(dirname(fileURLToPath(import.meta.url)), "../../");
    const lastCommitSha = await getLastCommitSha();

    const scriptPath = join(rootPath, distFolderPath, userscriptDistFile);
    const globalStylePath = join(rootPath, distFolderPath, "main.css");
    const globalStyle = String(await readFile(globalStylePath))
      .replace(/\n\s*\/\*.+\*\//gm, ""); // remove comment-only lines

    // read userscript and inject build number and global CSS
    const userscript = String(await readFile(scriptPath))
      .replace(/\/?\*?{{BRANCH}}\*?\/?/gm, branch)
      .replace(/\/?\*?{{BUILD_NUMBER}}\*?\/?/gm, lastCommitSha)
      .replace(/"\/?\*?{{GLOBAL_STYLE}}\*?\/?"/gm, `\`${globalStyle}\``);

    // insert userscript header and final newline
    const finalUserscript = `${header}\n${userscript}${userscript.endsWith("\n") ? "" : "\n"}`;

    await writeFile(scriptPath, finalUserscript);

    const envText = mode === "production" ? "\x1b[32mproduction" : "\x1b[33mdevelopment";
    const sizeKiB = (Buffer.byteLength(finalUserscript, "utf8") / 1024).toFixed(2);

    console.info(`Successfully built for ${envText}\x1b[0m - build number (last commit SHA): \x1b[34m${lastCommitSha}\x1b[0m`);
    console.info(`Outputted file '${relative("./", scriptPath)}' with a size of \x1b[32m${sizeKiB} KiB\x1b[0m\n`);

    ringBell && process.stdout.write("\u0007");

    // schedule exit after I/O finishes
    setImmediate(() => exit(0));
  }
  catch(err) {
    console.error("Error while adding userscript header:");
    console.error(err);

    // schedule exit after I/O finishes
    setImmediate(() => exit(1));
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
