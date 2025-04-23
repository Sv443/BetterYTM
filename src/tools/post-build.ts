import { access, readFile, writeFile, constants as fsconst } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { exec } from "node:child_process";
import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import k from "kleur";
import "dotenv/config";
import type { RollupArgs } from "../types.js";
import { outputDir as rollupCfgOutputDir, outputFile as rollupCfgOutputFile } from "../../rollup.config.mjs";
import localesJson from "../../assets/locales.json" with { type: "json" };
import resourcesJson from "../../assets/resources.json" with { type: "json" };
import pkg from "../../package.json" with { type: "json" };

const { argv, env, exit, stdout } = process;

//#region types

/** Any type that is either a string or can be implicitly converted to one by having a .toString() method */
type Stringifiable = string | { toString(): string; };

/** Resolves a CLI argument defined in {@linkcode RollupArgs} in the file `rollup.config.mjs` */
type CliArg<TName extends keyof Required<RollupArgs>> = Required<RollupArgs>[TName];

/** An entry in the file `assets/require.json` */
type RequireObj = RequireObjPkg | RequireObjUrl;

/** Static URL-based package entry */
type RequireObjUrl = {
  url: string;
};

/** npm-based package entry */
type RequireObjPkg = {
  pkgName: keyof (typeof pkg)["dependencies"] | keyof (typeof pkg)["devDependencies"];
  baseUrl?: string;
  path?: string;
};

/** Build script stats, persisted in the file at {@linkcode buildStatsPath} */
type BuildStats = {
  sizeKiB: number;
  mode: string;
  timestamp: number;
};

//#region vars

const buildTs = Date.now();
/** Used to force the browser and userscript extension to refresh resources */
const buildUid = randomId(12, 36);

const mode = getCliArg<CliArg<"config-mode">>("mode", "development");
const branch = getCliArg<CliArg<"config-branch">>("branch", (mode === "production" ? "main" : "develop"));
const host = getCliArg<CliArg<"config-host">>("host", "github");
const assetSource = getCliArg<CliArg<"config-assetSource">>("assetSource", "jsdelivr");
const suffix = getCliArg<CliArg<"config-suffix">>("suffix", "");
const genMeta = getCliArg<CliArg<"config-gen-meta">>("meta", "true") === "true";

const envPort = Number(env.DEV_SERVER_PORT);
/** HTTP port of the dev server */
const devServerPort = isNaN(envPort) || envPort === 0 ? 8710 : envPort;
/** Local URL of the userscript file when served by the dev server */
const devServerUserscriptUrl = `http://localhost:${devServerPort}/${rollupCfgOutputFile}` as const;
/** Extra `@grant` directives added when `mode` is `development` */
const devGrants = [
  "GM.registerMenuCommand",
] as const;

const repo = "Sv443/BetterYTM" as const;
const userscriptDistFile = `BetterYTM${suffix}.user.js` as const;
const userscriptMetaFile = `BetterYTM${suffix}.meta.js` as const;
const distFolderPath = `./${rollupCfgOutputDir}/` as const;
const assetFolderPath = "./assets/" as const;
const buildStatsPath = ".build.json" as const;

const hostScriptUrl = (() => {
  switch(host) {
  case "greasyfork": return "https://update.greasyfork.org/scripts/475682/BetterYTM.user.js" as const;
  case "openuserjs": return "https://openuserjs.org/src/scripts/Sv443/BetterYTM.user.js" as const;
  default:           return `https://github.com/${repo}/raw/refs/heads/main/dist/${userscriptDistFile}` as const;
  }
})();
const hostMetaUrl = `https://github.com/${repo}/raw/refs/heads/main/dist/${userscriptMetaFile}` as const;

/** Whether to trigger the bell sound in some terminals when the code has finished compiling */
const ringBell = Boolean(env.RING_BELL && (env.RING_BELL.length > 0 && env.RING_BELL.trim().toLowerCase() === "true"));

/** Directives that are only added in dev mode */
const devDirectives = mode !== "development"
  ? undefined
  : devGrants.reduce((a, c) => `${a}// @grant             ${c}\n`, "");

//#region main

/** Main function that transforms the code built by rollup into the final userscript */
async function main() {
  const buildNbr = await getLastCommitSha();

  try {
    const [header, subHeader] = await getHeaders(buildNbr);
    const rootPath = join(dirname(fileURLToPath(import.meta.url)), "../../");

    const scriptPath = join(rootPath, distFolderPath, userscriptDistFile);

    // read userscript and inject build number and other values
    let userscript = insertValues(
      String(await readFile(scriptPath)),
      {
        MODE: mode,
        BRANCH: branch,
        HOST: host,
        BUILD_NUMBER: buildNbr,
        ASSET_SOURCE: assetSource,
        DEV_SERVER_PORT: devServerPort,
      },
    );

    if(mode === "production")
      userscript = removeSourcemapComments(userscript);
    else
      userscript = userscript.replace(/sourceMappingURL=/gm, `sourceMappingURL=http://localhost:${devServerPort}/`);

    // insert userscript header and final newline
    const finalUserscript = `${header}${subHeader}\n${await getLinkedPkgs()}${userscript}${userscript.endsWith("\n") ? "" : "\n"}`;

    // write userscript
    await writeFile(scriptPath, finalUserscript);
    // write meta file
    genMeta && await writeFile(join(rootPath, distFolderPath, userscriptMetaFile), header);

    ringBell && stdout.write("\u0007");

    const envText = (mode === "production" ? k.magenta : k.blue)(mode);
    const sizeKiB = Number((Buffer.byteLength(finalUserscript, "utf8") / 1024).toFixed(2));

    let buildStats: Partial<BuildStats>[] = [];
    if(await exists(buildStatsPath)) {
      try {
        const buildJsonParsed = JSON.parse(String(await readFile(buildStatsPath)));
        buildStats = (Array.isArray(buildJsonParsed) ? buildJsonParsed : []) as Partial<BuildStats>[];
      }
      catch {}
    }

    const prevBuildStats = buildStats.find((v) => v.mode === mode);

    let sizeIndicator = "";
    if(prevBuildStats?.sizeKiB) {
      const sizeDiff = sizeKiB - prevBuildStats.sizeKiB;
      const sizeDiffTrunc = parseFloat(sizeDiff.toFixed(2));
      if(sizeDiffTrunc !== 0) {
        const sizeCol = (sizeDiff > 0 ? k.yellow : k.green)().bold;
        const sizeDiffNum = `${(sizeDiff > 0 ? "+" : (sizeDiff !== 0 ? "-" : ""))}${Math.abs(sizeDiffTrunc)}`;
        sizeIndicator = ` ${k.gray("(")}${sizeCol(sizeDiffNum)}${k.gray(")")}`;
      }
    }

    await createSvgSpritesheet();

    console.info([
      "",
      `Successfully built for ${envText} - build number (last commit SHA): ${buildNbr}`,
      `Outputted file '${relative("./", scriptPath)}' with a size of ${k.green(`${sizeKiB} KiB`)}${sizeIndicator}`,
      `Userscript URL: ${k.blue().underline(devServerUserscriptUrl)}`,
      "",
    ].join("\n"));

    const curBuildStats: BuildStats = {
      sizeKiB,
      mode,
      timestamp: buildTs,
    };

    const newBuildStats = [
      curBuildStats,
      ...(buildStats.filter((v) => v.mode !== mode)),
    ];

    await writeFile(buildStatsPath, JSON.stringify(newBuildStats, undefined, 2));

    schedExit(0);
  }
  catch(err) {
    console.error(k.red("Error while adding userscript header:\n"), err);
    schedExit(1);
  }
};

//#region string replacements

/** Replaces tokens in the format `#{{key}}` or `/⋆#{{key}}⋆/` of the `replacements` param with their respective value */
function insertValues(userscript: string, replacements: Record<string, Stringifiable>) {
  for(const key in replacements)
    userscript = userscript.replace(new RegExp(`(\\/\\*\\s*)?#{{${key}}}(\\s*\\*\\/)?`, "gm"), String(replacements[key]));
  return userscript;
}

/** Removes sourcemapping comments */
function removeSourcemapComments(userscript: string) {
  return userscript
    .replace(/\/\/\s?#\s?sourceMappingURL\s?=\s?.+$/gm, "");
}

//#region headers

/** Returns the header and subheader for the userscript */
async function getHeaders(buildNbr: string) {
  const resourcesDirectives = await getResourceDirectives(buildNbr);
  const requireDirectives = await getRequireDirectives();
  const localizedDescriptions = getLocalizedDescriptions();

  const header = `\
// ==UserScript==
// @name              ${pkg.userscriptName}
// @namespace         ${pkg.homepage}
// @version           ${pkg.version}
// @description       ${pkg.description}
// @homepageURL       ${pkg.homepage}#readme
// @supportURL        ${pkg.bugs.url}
// @license           ${pkg.license}
// @author            ${pkg.author.name}
// @copyright         ${pkg.author.name} (${pkg.author.url})
// @icon              ${getResourceUrl(`images/logo/logo${mode === "development" ? "_dev" : ""}_48.png`, buildNbr)}
// @match             https://music.youtube.com/*
// @match             https://www.youtube.com/*
// @run-at            document-start\
${localizedDescriptions ? "\n" + localizedDescriptions : ""}\
// @connect           api.sv443.net
// @connect           github.com
// @connect           raw.githubusercontent.com
// @connect           youtube.com
// @connect           returnyoutubedislikeapi.com
// @noframes
// @updateURL         ${hostMetaUrl}
// @downloadURL       ${hostScriptUrl}
// @grant             GM.getValue
// @grant             GM.setValue
// @grant             GM.deleteValue
// @grant             GM.listValues
// @grant             GM.getResourceUrl
// @grant             GM.setClipboard
// @grant             GM.xmlHttpRequest
// @grant             GM.openInTab
// @grant             unsafeWindow\
${resourcesDirectives ? "\n" + resourcesDirectives : ""}\
${requireDirectives ? "\n" + requireDirectives : ""}\
${devDirectives ? "\n" + devDirectives : ""}
// ==/UserScript==
/*
▄▄▄      ▄   ▄         ▄   ▄▄▄▄▄▄   ▄
█  █ ▄▄▄ █   █   ▄█▄ ▄ ▄█ █  █  █▀▄▀█
█▀▀▄ █▄█ █▀  █▀  █▄█ █▀  █   █  █   █
█▄▄▀ ▀▄▄ ▀▄▄ ▀▄▄ ▀▄▄ █   █   █  █   █

        Made with ❤️ by Sv443
I welcome every contribution on GitHub!
  https://github.com/Sv443/BetterYTM
*/
` as const;

  const subHeader = `
/* Disclaimer: I am not affiliated with or endorsed by YouTube, Google, Alphabet, Genius or anyone else */
/* C&D this 🖕 */
` as const;
  return [header, subHeader];
}

//#region @resource

/** Resolves the value of an entry in resources.json */
function resolveResourceVal(value: string, buildNbr: string) {
  if(!(/\$[A-Z]+/.test(value)))
    return value;

  const replacements = [
    ["\\$MODE", mode],
    ["\\$BRANCH", branch],
    ["\\$HOST", host],
    ["\\$BUILD_NUMBER", buildNbr],
    ["\\$UID", buildUid],
  ] as const;

  return replacements.reduce((acc, [key, val]) => acc.replace(new RegExp(key, "g"), val), value);
};

/** Returns a string of resource directives, as defined in `assets/resources.json` or undefined if the file doesn't exist or is invalid */
async function getResourceDirectives(ref: string) {
  try {
    const directives: string[] = [],
      resourcesRaw = JSON.parse(String(await readFile(join(assetFolderPath, "resources.json")))),
      resources = "resources" in resourcesRaw
        ? resourcesRaw.resources as Record<string, string> | Record<string, { path: string; buildNbr: string }>
        : undefined,
      resourcesHashed = {} as Record<string, Record<"path" | "ref", string> & Partial<Record<"hash", string>>>;

    if(!resources)
      throw new Error("No resources found in 'assets/resources.json'");

    const extAssetPattern = new RegExp(resourcesJson.externalAssetPattern);
    for(const [name, val] of Object.entries(resources)) {
      // skip over all external assets
      if(extAssetPattern.test(name))
        continue;

      const pathVal = typeof val === "object" ? val.path : val;
      const hash = (
        assetSource !== "local"
        && (typeof val === "object" && "integrity" in val ? val.integrity !== false : true)
        && !pathVal.match(/^https?:\/\//)
      )
        ? await getFileHashSha256(pathVal.replace(/\?.+/g, ""))
        : undefined;
      resourcesHashed[name] = typeof val === "object"
        ? { path: resolveResourceVal(val.path, ref), ref: resolveResourceVal(val.ref, ref), hash }
        : { path: getResourceUrl(resolveResourceVal(val, ref), ref), ref, hash };
    }

    const addResourceHashed = async (name: string, path: string, ref: string) => {
      try {
        // don't add external assets
        if(extAssetPattern.test(name))
          return;
        if(assetSource === "local") {
          resourcesHashed[name] = { path: getResourceUrl(path, ref), ref, hash: undefined };
          return;
        }
        else if(validUrl(path)) {
          // stream file from URL, hash it, add it to resourcesHashed
          const res = await fetch(path);
          if(!res.ok || !res.body)
            return;
          resourcesHashed[name] = { path: getResourceUrl(path, ref), ref, hash: await getStreamHashSha256(res.body) };
        }
        resourcesHashed[name] = { path: getResourceUrl(path, ref), ref, hash: await getFileHashSha256(path) };
      }
      catch(err) {
        console.warn(k.yellow(`Couldn't add hashed resource '${name}':`), err);
      }
    };

    await addResourceHashed("css-bundle", "/dist/BetterYTM.css", ref);

    for(const [locale] of Object.entries(localesJson))
      await addResourceHashed(`trans-${locale}`, `translations/${locale}.json`, ref);

    let longestName = 0;
    for(const name of Object.keys(resourcesHashed))
      longestName = Math.max(longestName, name.length);

    const sortedResourceEntries = Object.entries(resourcesHashed).sort(([a], [b]) => a.localeCompare(b));

    for(const [name, { path, ref: entryRef, hash }] of sortedResourceEntries) {
      const bufferSpace = " ".repeat(longestName - name.length);
      directives.push(`// @resource          ${name}${bufferSpace} ${
        path.match(/^https?:\/\//)
          ? path
          : getResourceUrl(path, entryRef)
      }${hash ? `#sha256=${hash}` : ""}`);
    }

    return directives.join("\n");
  }
  catch(err) {
    console.warn("No resource directives found:", err);
  }
}

//#region @resource SVG spritesheet

/** Compiles all `icon-*` assets into a single SVG spritesheet file and writes it to `assets/spritesheet.svg` */
async function createSvgSpritesheet() {
  try {
    const sprites: string[] = [];

    for(const [name, val] of Object.entries(resourcesJson.resources)) {
      if(!/^icon-/.test(name))
        continue;

      const iconPath = resolveResourcePath(typeof val === "string" ? val : val.path);
      const iconSvg = String(await readFile(iconPath)).replace(/\n/g, "");

      sprites.push(`<symbol id="bytm-svg-${name}">\n    ${iconSvg}\n  </symbol>`);
    }

    const spritesheet = `\
<svg xmlns="http://www.w3.org/2000/svg" id="bytm-svg-spritesheet" style="display: none;" inert="true">
  ${sprites.join("\n  ")}
</svg>`;

    await writeFile(resolveResourcePath("spritesheet.svg"), spritesheet);
  }
  catch(err) {
    console.error(k.red("Error while creating SVG spritesheet:"), err);
    return schedExit(1);
  }
}

//#region @require

/** Returns the `@require` directive block for each defined package in `assets/require.json`, using the version numbers from `package.json` if found */
async function getRequireDirectives() {
  const directives: string[] = [];
  const requireFile = String(await readFile(join(assetFolderPath, "require.json")));
  const require = JSON.parse(requireFile) as RequireObj[];

  for(const entry of require) {
    if("link" in entry && typeof entry.link === "string")
      continue;
    "pkgName" in entry && directives.push(getRequireEntry(entry));
    "url" in entry && directives.push(`// @require           ${entry.url}`);
  }

  return directives.length > 0 ? directives.join("\n") : undefined;
}

/** Returns the `@require` directive for a given package entry */
function getRequireEntry(entry: RequireObjPkg) {
  const baseUrl = entry.baseUrl ?? "https://cdn.jsdelivr.net/npm/";

  let version: string;
  const deps = {
    ...pkg.dependencies,
    ...pkg.devDependencies,
  };

  if(entry.pkgName in deps)
    version = deps[entry.pkgName].replace(/[^0-9.]/g, "");
  else
    throw new Error(`Library '${entry.pkgName}', referenced in 'assets/require.json' not found in dependencies or devDependencies`);

  return `// @require           ${baseUrl}${entry.pkgName}@${version}${entry.path ? `${entry.path.startsWith("/") ? "" : "/"}${entry.path}` : ""}`;
}

//#region @require (local link)

/** Returns all packages set as locally linked (similar to [`npm link`](https://docs.npmjs.com/cli/v9/commands/npm-link)) in `assets/require.json` */
async function getLinkedPkgs() {
  const requireFile = String(await readFile(join(assetFolderPath, "require.json")));
  const require = (JSON.parse(requireFile) as RequireObj[]);

  let retStr = "";

  for(const entry of require) {
    if(!("link" in entry) || typeof entry.link !== "string" || !("pkgName" in entry))
      continue;

    try {
      const scriptCont = String(await readFile(resolve(entry.link)));
      const trimmedScript = scriptCont
        .replace(/\n?\/\/\s*==.+==[\s\S]+\/\/\s*==\/.+==/gm, "");
      retStr += `\n// <link ${entry.pkgName}>\n${trimmedScript}\n// </link ${entry.pkgName}>\n\n`;
    }
    catch(err) {
      console.error(`Couldn't read linked package at '${entry.link}':`, err);
      schedExit(1);
    }
  }

  return retStr;
}

//#region @description:localized

/** Returns the @description directive block for each defined locale in `assets/locales.json` */
function getLocalizedDescriptions() {
  try {
    const descriptions: string[] = [];
    for(const [locale, { userscriptDesc, ...rest }] of Object.entries(localesJson)) {
      let loc = locale;
      if(loc.length < 5)
        loc += " ".repeat(5 - loc.length);
      descriptions.push(`// @description:${loc} ${userscriptDesc}`);

      if("altLocales" in rest) {
        for(const altLoc of rest.altLocales) {
          let alt = altLoc.replace(/_/, "-");
          if(alt.length < 5)
            alt += " ".repeat(5 - alt.length);
          descriptions.push(`// @description:${alt} ${userscriptDesc}`);
        }
      }
    }
    return descriptions.join("\n") + "\n";
  }
  catch(err) {
    console.warn(k.yellow("No localized descriptions found:"), err);
  }
}

//#region @resource

/**
 * Returns the full URL for a given resource path, based on the current mode and branch
 * @param path If the path starts with a /, it is treated as an absolute path, starting at project root. Otherwise it will be relative to the assets folder.
 * @param ghRef The current build number (last shortened or full-length Git commit SHA1), branch name or tag name to use when fetching the resource when the asset source is GitHub - if not specified, uses the current version number
 */
function getResourceUrl(path: string, ghRef?: string) {
  let assetPath = "/assets/";
  if(path.startsWith("/"))
    assetPath = "";
  assetPath += path;
  const finalPath = `${ghRef ?? `v${pkg.version}`}${assetPath}`;
  return assetSource === "local"
    ? `http://localhost:${devServerPort}${assetPath}?b=${buildUid}`
    : (
      assetSource === "github"
        ? `https://raw.githubusercontent.com/${repo}/${finalPath}`
        : `https://cdn.jsdelivr.net/gh/${repo}@${finalPath}`
    );
}

/**
 * Resolves the path to a resource.  
 * If prefixed with a slash, the path is relative to the repository root, otherwise it is relative to the `assets` directory.
 */
function resolveResourcePath(path: string): string {
  if(path.startsWith("/"))
    return path.slice(1);
  return `assets/${path}`;
}

//#region utils/process

/** Returns the value of a CLI argument (in the format `--arg=<value>`) or the value of `defaultVal` if it doesn't exist */
function getCliArg<TReturn extends string = string>(name: string, defaultVal: TReturn | (string & {})): TReturn
/** Returns the value of a CLI argument (in the format `--arg=<value>`) or undefined if it doesn't exist */
function getCliArg<TReturn extends string = string>(name: string, defaultVal?: TReturn | (string & {})): TReturn | undefined
/** Returns the value of a CLI argument (in the format `--arg=<value>`) or the value of `defaultVal` if it doesn't exist */
function getCliArg<TReturn extends string = string>(name: string, defaultVal?: TReturn | (string & {})): TReturn | undefined {
  const arg = argv.find((v) => v.trim().match(new RegExp(`^(--)?${name}=.+$`, "i")));
  const val = arg?.split("=")?.[1];
  return (val && val.length > 0 ? val : defaultVal)?.trim() as TReturn | undefined;
}

/** Schedules an exit after I/O events finish */
function schedExit(code: number) {
  setImmediate(() => exit(code));
}

//#region utils/git

/**
 * Used as a kind of "build number", though note it is always behind by at least one commit,
 * as the act of putting this number in the userscript and committing it changes the hash again, indefinitely
 */
function getLastCommitSha() {
  return new Promise<string>((res, rej) => {
    exec("git rev-parse --short HEAD", (err, stdout, stderr) => {
      if(err) {
        console.error(k.red("\nError while checking for latest Git commit.\nPlease ensure you have Git installed and set up properly.\n"), stderr);
        return rej(err);
      }
      return res(String(stdout).replace(/\r?\n/gm, "").trim());
    });
  });
}

//#region utils/fs

/** Checks if the given path exists and is readable and writable by the process */
async function exists(path: string) {
  try {
    await access(path, fsconst.R_OK | fsconst.W_OK);
    return true;
  }
  catch {
    return false;
  }
}

/**
 * Calculates the SHA-256 hash of the file at the given path.  
 * Uses {@linkcode resolveResourcePath()} to resolve the path, meaning paths prefixed with a slash are relative to the repository root, otherwise they are relative to the `assets` directory.
 */
function getFileHashSha256(path: string): Promise<string> {
  path = resolveResourcePath(path);

  return new Promise((res, rej) => {
    const hash = createHash("sha256");
    const stream = createReadStream(resolve(path));
    stream.on("data", data => hash.update(data));
    stream.on("end", () => res(hash.digest("base64")));
    stream.on("error", rej);
  });
}

/** Calculates the SHA-256 hash of a ReadableStream, like the `body` prop of a `fetch()` call */
function getStreamHashSha256(rStream: ReadableStream): Promise<string> {
  return new Promise((res, rej) => {
    const hash = createHash("sha256");
    rStream.pipeTo(new WritableStream({
      write(chunk) {
        hash.update(chunk);
      },
    })).then(() => res(hash.digest("base64"))).catch(rej);
  });
}

//#region utils/misc

/** Generates a random ID of the given {@linkcode length} and {@linkcode radix} */
function randomId(length = 16, radix = 16, randomCase = true) {
  let arr = Array.from(
    { length },
    () => Math.floor(Math.random() * radix).toString(radix)
  );
  if(randomCase)
    arr = arr.map((v) => v[Math.random() > 0.5 ? "toUpperCase" : "toLowerCase"]());
  return arr.join("");
}

/** Checks if the given string is a valid URL with a protocol that starts with `http` */
function validUrl(url: string) {
  try {
    return new URL(url).protocol.startsWith("http");
  }
  catch {
    return false;
  }
}

main();
