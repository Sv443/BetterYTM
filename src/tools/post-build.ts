import { access, readFile, writeFile, constants as fsconstants } from "node:fs/promises";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { randomUUID } from "node:crypto";
import { exec } from "node:child_process";
import dotenv from "dotenv";
import { outputDir as rollupCfgOutputDir, outputFile as rollupCfgOutputFile } from "../../rollup.config.mjs";
import locales from "../../assets/locales.json" assert { type: "json" };
import pkg from "../../package.json" assert { type: "json" };
import type { RollupArgs } from "../types";

/** Any type that is either a string or can be implicitly converted to one by having a .toString() method */
type Stringifiable = string | { toString(): string; };

/** An entry in the file `assets/require.json` */
type RequireObj = (
  | { version: string; npm: string; }
  | { url: string; }
);

const buildTs = Date.now();
/** Used to force the browser and userscript extension to refresh resources */
const buildUuid = randomUUID();

const { env, exit } = process;
dotenv.config();

type CliArg<TName extends keyof Required<RollupArgs>> = Required<RollupArgs>[TName];

const mode = getCliArg<CliArg<"config-mode">>("mode", "development");
const branch = getCliArg<CliArg<"config-branch">>("branch", (mode === "production" ? "main" : "develop"));
const host = getCliArg<CliArg<"config-host">>("host", "github");
const suffix = getCliArg<CliArg<"config-suffix">>("suffix", "");

const envPort = Number(env.DEV_SERVER_PORT);
/** HTTP port of the dev server */
const devServerPort = isNaN(envPort) || envPort === 0 ? 8710 : envPort;
const devServerUserscriptUrl = `http://localhost:${devServerPort}/${rollupCfgOutputFile}`;

const repo = "Sv443/BetterYTM";
const userscriptDistFile = `BetterYTM${suffix}.user.js`;
const distFolderPath = `./${rollupCfgOutputDir}/`;
const assetFolderPath = "./assets/";
const scriptUrl = (() => {
  switch(host) {
  case "greasyfork":
    return "https://update.greasyfork.org/scripts/475682/BetterYTM.user.js";
  case "openuserjs":
    return "https://openuserjs.org/install/Sv443/BetterYTM.user.js";
  case "github":
  default:
    return `https://raw.githubusercontent.com/${repo}/${branch}/dist/${userscriptDistFile}`;
  }
})();

/** Whether to trigger the bell sound in some terminals when the code has finished compiling */
const ringBell = Boolean(env.RING_BELL && (env.RING_BELL.length > 0 && env.RING_BELL.trim().toLowerCase() === "true"));

type BuildStats = {
  sizeKiB: number;
  mode: string;
  timestamp: number;
};

/** Directives that are only added in dev mode */
const devDirectives = mode === "development" ? `\
// @grant             GM.registerMenuCommand
// @grant             GM.listValues\
` : undefined;

(async () => {
  const resourcesDirectives = await getResourceDirectives();
  const requireDirectives = await getRequireDirectives();
  const localizedDescriptions = getLocalizedDescriptions();

  const header = `\
// ==UserScript==
// @name              ${pkg.userscriptName}
// @namespace         ${pkg.homepage}
// @version           ${pkg.version}
// @description       ${pkg.description}\
${localizedDescriptions ? "\n" + localizedDescriptions : ""}\
// @homepageURL       ${pkg.homepage}#readme
// @supportURL        ${pkg.bugs.url}
// @license           ${pkg.license}
// @author            ${pkg.author.name}
// @copyright         ${pkg.author.name} (${pkg.author.url})
// @icon              ${getAssetUrl("logo/logo_48.png")}
// @match             https://music.youtube.com/*
// @match             https://www.youtube.com/*
// @run-at            document-start
// @downloadURL       ${scriptUrl}
// @updateURL         ${scriptUrl}
// @connect           api.sv443.net
// @connect           github.com
// @connect           raw.githubusercontent.com
// @grant             GM.getValue
// @grant             GM.setValue
// @grant             GM.deleteValue
// @grant             GM.getResourceUrl
// @grant             GM.setClipboard
// @grant             GM.xmlHttpRequest
// @grant             unsafeWindow
// @noframes\
${resourcesDirectives ? "\n" + resourcesDirectives : ""}\
${requireDirectives ? "\n" + requireDirectives : ""}\
${devDirectives ? "\n" + devDirectives : ""}
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

/* Disclaimer: I am not affiliated with or endorsed by YouTube, Google, Alphabet, Genius or anyone else */
/* C&D this 🖕 */
`;

  try {
    const rootPath = join(dirname(fileURLToPath(import.meta.url)), "../../");
    const lastCommitSha = await getLastCommitSha();

    const scriptPath = join(rootPath, distFolderPath, userscriptDistFile);
    const globalStylePath = join(rootPath, distFolderPath, "global.css");
    let globalStyle = String(await readFile(globalStylePath));
    if(mode === "production")
      globalStyle = remSourcemapComments(globalStyle);

    // read userscript and inject build number and global CSS
    let userscript = insertValues(
      String(await readFile(scriptPath)),
      {
        MODE: mode,
        BRANCH: branch,
        HOST: host,
        BUILD_NUMBER: lastCommitSha,
      },
    )
      // needs special treatment because the double quotes need to be replaced with backticks
      .replace(/"(\/\*)?#{{GLOBAL_STYLE}}(\*\/)?"/gm, `\`${globalStyle}\``);

    if(mode === "production")
      userscript = remSourcemapComments(userscript);
    else
      userscript = userscript.replace(/sourceMappingURL=/gm, `sourceMappingURL=http://localhost:${devServerPort}/`);

    // replace with arrow IIFE
    userscript = userscript.replace(/\(function\s?\(ReactDOM,\s?React\)\s?\{/m, "((ReactDOM, React) => {");
    userscript = userscript.replace(/\(function\s?\(\s*\)\s?\{/m, "(() => {");
    userscript = userscript.replace(/\(function \(reactDom, React\) \{/m, "((reactDOM, React) => {");

    // insert userscript header and final newline
    const finalUserscript = `${header}\n${userscript}${userscript.endsWith("\n") ? "" : "\n"}`;

    await writeFile(scriptPath, finalUserscript);

    const envText = `${mode === "production" ? "\x1b[32m" : "\x1b[33m"}${mode}`;
    const sizeKiB = Number((Buffer.byteLength(finalUserscript, "utf8") / 1024).toFixed(2));

    let buildStats: Partial<BuildStats> = {};
    if(await exists(".build.json")) {
      try {
        buildStats = JSON.parse(String(await readFile(".build.json"))) as BuildStats;
      }
      catch(e) { void e; }
    }

    let sizeIndicator = "";
    if(buildStats.sizeKiB) {
      const sizeDiff = sizeKiB - buildStats.sizeKiB;
      sizeIndicator = " \x1b[2m[\x1b[0m\x1b[1m" + (sizeDiff > 0 ? "\x1b[33m↑↑↑" : (sizeDiff !== 0 ? "\x1b[32m↓↓↓" : "\x1b[32m===")) + "\x1b[0m\x1b[2m]\x1b[0m";
    }

    console.info();
    console.info(`Successfully built for ${envText}\x1b[0m - build number (last commit SHA): ${lastCommitSha}`);
    console.info(`Outputted file '${relative("./", scriptPath)}' with a size of \x1b[32m${sizeKiB} KiB\x1b[0m${sizeIndicator}`);
    console.info(`Userscript URL: \x1b[34m\x1b[4m${devServerUserscriptUrl}\x1b[0m`);
    console.info();

    ringBell && process.stdout.write("\u0007");

    const buildStatsNew: BuildStats = {
      sizeKiB,
      mode,
      timestamp: buildTs,
    };
    await writeFile(".build.json", JSON.stringify(buildStatsNew));

    // schedule exit after I/O finishes
    setImmediate(() => exit(0));
  }
  catch(err) {
    console.error("\x1b[31mError while adding userscript header:\x1b[0m");
    console.error(err);

    // schedule exit after I/O finishes
    setImmediate(() => exit(1));
  }
})();

/** Replaces tokens in the format `#{{key}}` or `/⋆#{{key}}⋆/` of the `replacements` param with their respective value */
function insertValues(userscript: string, replacements: Record<string, Stringifiable>) {
  for(const key in replacements)
    userscript = userscript.replace(new RegExp(`(\\/\\*)?#{{${key}}}(\\*\\/)?`, "gm"), String(replacements[key]));
  return userscript;
}

/** Removes sourcemapping comments */
function remSourcemapComments(input: string) {
  return input
    .replace(/\/\/#\s?sourceMappingURL\s?=\s?.+$/gm, "");
}

/**
 * Used as a kind of "build number", though note it is always behind by at least one commit,
 * as the act of putting this number in the userscript and committing it changes the hash again, indefinitely
 */
function getLastCommitSha() {
  return new Promise<string>((res, rej) => {
    exec("git rev-parse --short HEAD", (err, stdout, stderr) => {
      if(err) {
        console.error("\x1b[31mError while checking for last Git commit. Do you have Git installed?\x1b[0m\n", stderr);
        return rej(err);
      }
      return res(String(stdout).replace(/\r?\n/gm, "").trim());
    });
  });
}

async function exists(path: string) {
  try {
    await access(path, fsconstants.R_OK | fsconstants.W_OK);
    return true;
  }
  catch(err) {
    return false;
  }
}

/** Returns a string of resource directives, as defined in `assets/resources.json` or undefined if the file doesn't exist or is invalid */
async function getResourceDirectives() {
  try {
    const directives: string[] = [];
    const resourcesFile = String(await readFile(join(assetFolderPath, "resources.json")));
    const resources = JSON.parse(resourcesFile) as Record<string, string>;

    for(const [locale] of Object.entries(locales))
      resources[`trans-${locale}`] = `translations/${locale}.json`;

    let longestName = 0;
    for(const name of Object.keys(resources))
      longestName = Math.max(longestName, name.length);

    for(const [name, path] of Object.entries(resources)) {
      const bufferSpace = " ".repeat(longestName - name.length);
      directives.push(`// @resource          ${name}${bufferSpace} ${
        path.match(/^https?:\/\//)
          ? path
          : getAssetUrl(path)
      }`);
    }

    return directives.join("\n");
  }
  catch(err) {
    console.warn("No resource directives found:", err);
  }
}

export async function getRequireDirectives() {
  const directives: string[] = [];
  const requireFile = String(await readFile(join(assetFolderPath, "require.json")));
  const require = JSON.parse(requireFile) as RequireObj[];

  for(const entry of require) {
    "npm" in entry && "version" in entry && directives.push(`// @require           https://cdn.jsdelivr.net/npm/${entry.npm}@${entry.version}`);
    "url" in entry && directives.push(`// @require           ${entry.url}`);
  }

  return directives.length > 0 ? directives.join("\n") : undefined;
}

/** Returns the @description directive block for each defined locale in `assets/locales.json` */
function getLocalizedDescriptions() {
  try {
    const descriptions: string[] = [];
    for(const [locale, { userscriptDesc }] of Object.entries(locales)) {
      let loc = locale.replace(/_/, "-");
      if(loc.length < 5)
        loc += " ".repeat(5 - loc.length);
      descriptions.push(`// @description:${loc} ${userscriptDesc}`);
    }
    return descriptions.join("\n") + "\n";
  }
  catch(err) {
    console.warn("\x1b[33mNo localized descriptions found:\x1b[0m", err);
  }
}

/** Returns the full URL for a given relative asset path, based on the current mode */
function getAssetUrl(relativePath: string) {
  return mode === "development"
    ? `http://localhost:${devServerPort}/assets/${relativePath}?t=${buildUuid}`
    : `https://raw.githubusercontent.com/${repo}/${branch}/assets/${relativePath}`;
}

/** Returns the value of a CLI argument (in the format `--arg=<value>`) or the value of `defaultVal` if it doesn't exist */
function getCliArg<TReturn extends string = string>(name: string, defaultVal: TReturn | (string & {})): TReturn
/** Returns the value of a CLI argument (in the format `--arg=<value>`) or undefined if it doesn't exist */
function getCliArg<TReturn extends string = string>(name: string, defaultVal?: TReturn | (string & {})): TReturn | undefined
/** Returns the value of a CLI argument (in the format `--arg=<value>`) or the value of `defaultVal` if it doesn't exist */
function getCliArg<TReturn extends string = string>(name: string, defaultVal?: TReturn | (string & {})): TReturn | undefined {
  const arg = process.argv.find((v) => v.trim().match(new RegExp(`^(--)?${name}=.+$`)));
  const val = arg?.split("=")?.[1];
  return (val && val.length > 0 ? val : defaultVal)?.trim() as TReturn | undefined;
}
