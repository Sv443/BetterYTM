import { access, readFile, writeFile, constants as fsconst } from "node:fs/promises";
import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";
import { exec } from "node:child_process";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { Plugin, PluginOption, ResolvedConfig } from "vite";
import k from "kleur";
import localesJson from "../../assets/locales.json" with { type: "json" };
import resourcesJson from "../../assets/resources.json" with { type: "json" };
import type en_US from "../../assets/translations/en-US.json";
import pkg from "../../package.json" with { type: "json" };

//#region consts

/** @internal - Exported for reference in `vite.config.ts` */
export const outputDir = "dist";
/** @internal - Exported for reference in `serve.ts` */
export const outputFile = "BetterYTM.user.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootPath = join(__dirname, "../../");
const assetFolderPath = join(rootPath, "assets/");
const buildStatsPath = join(rootPath, ".build.json");

//#region types

/** An entry in the file `assets/require.json` */
type RequireObj = RequireObjPkg | RequireObjUrl;

/** Static URL-based package entry */
type RequireObjUrl = {
  url: string;
  global?: string;
};

/** npm-based package entry */
type RequireObjPkg = {
  pkgName: keyof (typeof pkg)["dependencies"] | keyof (typeof pkg)["devDependencies"];
  baseUrl?: string;
  path?: string;
  global?: string;
  link?: string;
};

/** Build script stats, persisted in the file at {@linkcode buildStatsPath} */
type BuildStats = {
  mode: string;
  suffix?: string;
  sizeKiB: number;
  timestamp: number;
  uid: string;
};

//#region options

export type BtymPluginOptions = {
  buildMode: "development" | "production";
  branch: "main" | "develop";
  host: "github" | "greasyfork" | "openuserjs";
  assetSource: "local" | "github" | "jsdelivr";
  suffix: string;
  genMeta: boolean;
  compatMode: "strict" | "loose";
  devServerPort: number;
  buildNumber: string;
  buildTimestamp: number;
  buildUid: string;
};

//#region plugin factory

/** Creates the BetterYTM Vite plugin that handles userscript header generation, SRI hashes, meta file and build stats */
export function createBytmPlugin(options: BtymPluginOptions): Plugin {
  const { buildMode, host, suffix, genMeta, compatMode, devServerPort, buildNumber, buildTimestamp, buildUid } = options;
  const repo = "Sv443/BetterYTM" as const;
  const userscriptDistFile = `BetterYTM${suffix}.user.js` as const;
  const devServerUserscriptUrl = `http://localhost:${devServerPort}/BetterYTM.user.js` as const;
  const ringBell = Boolean(process.env.RING_BELL && process.env.RING_BELL.trim().toLowerCase() === "true");

  /** Extra `@grant` directives added when `mode` is `development` */
  const devGrants: string[] = [];
  const devDirectives = buildMode !== "development" || devGrants.length === 0
    ? undefined
    : devGrants.map((g) => `// @grant             ${g}`).join("\n");

  const hostScriptUrl = (() => {
    switch(host) {
    case "greasyfork": return "https://update.greasyfork.org/scripts/475682/BetterYTM.user.js" as const;
    case "openuserjs": return "https://openuserjs.org/src/scripts/Sv443/BetterYTM.user.js" as const;
    default:           return `https://raw.githubusercontent.com/${repo}/refs/heads/main/dist/${userscriptDistFile}` as const;
    }
  })();
  const hostMetaUrl = `https://raw.githubusercontent.com/${repo}/refs/heads/main/dist/${userscriptDistFile}` as const;

  // State shared between hooks
  let resolvedOutDir = "dist";
  let generatedHeader = "";
  let finalSizeKiB = 0;

  return {
    name: "betterytm",

    configResolved(config: ResolvedConfig) {
      resolvedOutDir = config.build.outDir;
    },

    async generateBundle(_outputOptions, bundle) {
      const resourcesDirectives = await getResourceDirectives(buildNumber, options);
      const requireDirectives = await getRequireDirectives();
      const localizedDescriptions = getLocalizedDescriptions();
      const localizedAntifeatures = await getLocalizedAntifeatures();

      const header = buildHeader({
        resourcesDirectives,
        requireDirectives,
        localizedDescriptions,
        localizedAntifeatures,
        buildMode,
        buildNumber,
        compatMode,
        devDirectives,
        hostMetaUrl,
        hostScriptUrl,
        options,
      });

      const subHeader = buildSubHeader(host);
      const linkedPkgs = await getLinkedPkgs();

      generatedHeader = header;

      for(const [fileName, chunk] of Object.entries(bundle)) {
        if(chunk.type === "chunk" && fileName.endsWith(".user.js")) {
          chunk.code = `${header}${subHeader}\n${linkedPkgs}${chunk.code}`;
          finalSizeKiB = Number((Buffer.byteLength(chunk.code, "utf8") / 1024).toFixed(2));
          break;
        }
      }
    },

    async closeBundle() {
      if(!generatedHeader)
        return;

      if(genMeta)
        await writeFile(join(rootPath, resolvedOutDir, `BetterYTM${suffix}.meta.js`), generatedHeader);

      const envText = (buildMode === "production" ? k.magenta : k.blue)(buildMode);

      let buildStats: Partial<BuildStats>[] = [];
      if(await fileExists(buildStatsPath)) {
        try {
          const buildJsonParsed = JSON.parse(String(await readFile(buildStatsPath)));
          buildStats = (Array.isArray(buildJsonParsed) ? buildJsonParsed : []) as Partial<BuildStats>[];
        }
        catch {}
      }

      const prevBuildStats = buildStats.find((v) => v.mode === buildMode && v.suffix === suffix)
        ?? buildStats.find((v) => v.mode === buildMode && !v.suffix);

      let sizeIndicator = "";
      if(prevBuildStats?.sizeKiB) {
        const sizeDiff = finalSizeKiB - prevBuildStats.sizeKiB;
        const sizeDiffTrunc = parseFloat(sizeDiff.toFixed(2));
        if(sizeDiffTrunc !== 0) {
          const sizeCol = (sizeDiff > 0 ? k.yellow : k.green)().bold;
          const sizeDiffNum = `${sizeDiff > 0 ? "+" : sizeDiff !== 0 ? "-" : ""}${Math.abs(sizeDiffTrunc)}`;
          sizeIndicator = ` ${k.gray("(")}${sizeCol(sizeDiffNum)}${k.gray(")")}`;
        }
      }

      const outFile = relative("./", join(rootPath, resolvedOutDir, userscriptDistFile));
      console.info([
        "",
        `Successfully built for ${envText} - build number (last commit SHA): ${buildNumber}`,
        `Outputted file '${outFile}' with a size of ${k.green(`${finalSizeKiB} KiB`)}${sizeIndicator}`,
        `Userscript URL: ${k.blue().underline(devServerUserscriptUrl)}`,
        "",
      ].join("\n"));

      const curBuildStats: BuildStats = {
        mode: buildMode,
        suffix,
        sizeKiB: finalSizeKiB,
        timestamp: buildTimestamp,
        uid: buildUid,
      };

      const newBuildStats = [
        curBuildStats,
        ...(buildStats.filter((v) => v.mode !== buildMode)),
      ];

      await writeFile(buildStatsPath, JSON.stringify(newBuildStats, undefined, 2));

      ringBell && process.stdout.write("\u0007");
    },
  } satisfies PluginOption;
}

//#region header builders

interface HeaderArgs {
  resourcesDirectives: string | undefined;
  requireDirectives: string | undefined;
  localizedDescriptions: string | undefined;
  localizedAntifeatures: string | undefined;
  buildMode: BtymPluginOptions["buildMode"];
  buildNumber: string;
  compatMode: BtymPluginOptions["compatMode"];
  devDirectives: string | undefined;
  hostMetaUrl: string;
  hostScriptUrl: string;
  options: BtymPluginOptions;
}

function buildHeader(args: HeaderArgs): string {
  const { resourcesDirectives, requireDirectives, localizedDescriptions, localizedAntifeatures, buildMode, buildNumber, compatMode, devDirectives, hostMetaUrl, hostScriptUrl, options } = args;

  const header = ([
    `\
// ==UserScript==
// @name              ${pkg.userscriptName}
// @namespace         ${pkg.namespace}
// @version           ${pkg.version}
// @homepageURL       ${pkg.homepage}#readme
// @supportURL        ${pkg.bugs.url}
// @license           ${pkg.license}
// @author            ${pkg.author.name}
// @copyright         ${pkg.author.name} (${pkg.author.url})
// @icon              ${getResourceUrl(`images/logo/logo${buildMode === "development" ? "_dev" : ""}_48.png`, buildNumber, options)}
// @match             https://music.youtube.com/*
// @match             https://www.youtube.com/*
// @match             https://m.youtube.com/*
// @match             https://youtube-nocookie.com/*
// @run-at            document-start`,
    localizedDescriptions,
    localizedAntifeatures,
    `\
// @connect           api.sv443.net
// @connect           github.com
// @connect           raw.githubusercontent.com
// @connect           youtube.com
// @connect           i.ytimg.com
// @connect           returnyoutubedislikeapi.com
// @connect           itunes.apple.com
// @noframes
// @updateURL         ${hostMetaUrl}
// @downloadURL       ${hostScriptUrl}
// @grant             GM.getValue
// @grant             GM.setValue
// @grant             GM.deleteValue
// @grant             GM.listValues
// @grant             GM.addValueChangeListener
// @grant             GM.getResourceUrl
// @grant             GM.setClipboard
// @grant             GM.xmlHttpRequest
// @grant             GM.openInTab
// @grant             GM.registerMenuCommand
// @grant             unsafeWindow`,
    resourcesDirectives,
    ...(compatMode === "strict" ? [] : [requireDirectives]),
    devDirectives,
    `\
// ==/UserScript==
/*
  ▄▄▄      ▄   ▄         ▄   ▄▄▄▄▄▄   ▄
  █  █ ▄▄  █   █   ▄▄  ▄ ▄█ █  █  █▀▄▀█
  █▀▀▄ █▄█ █▀  █▀  █▄█ █▀  █   █  █   █
  █▄▄▀ ▀▄▄ ▀▄▄ ▀▄▄ ▀▄▄ █   █   █  █   █

          Made with ❤️ by Sv443
  I welcome every contribution on GitHub!
    ${pkg.homepage}


  You can install the latest in-development version here:
  ${pkg.devVersionUrl}

*/
`,
  ] as const)
    .filter(Boolean)
    .join("\n");

  return header;
}

function buildSubHeader(host: BtymPluginOptions["host"]): string {
  const greasyForkDisclaimer = `
/*
  Note: The Greasy Fork version has to fit within a size limit of 500kB, so comments had to be removed.
  If you want install the full, unmodified version, please use one of these sources instead:
    - GitHub: ${pkg.hosts.github}
    - OpenUserJS: ${pkg.hosts.openuserjs}
*/
`;

  return `
/* Disclaimer: I am not affiliated with or endorsed by YouTube, Google, Alphabet, Genius or anyone else */
/* C&D this 🖕 */
${host === "greasyfork" ? greasyForkDisclaimer : ""}
`;
}

//#region @resource

/** Resolves the value of an entry in resources.json */
function resolveResourceVal(value: string, buildNbr: string, options: BtymPluginOptions): string {
  if(!(/\$[A-Z]+/.test(value)))
    return value;

  const { buildMode, branch, host, buildTimestamp, buildUid } = options;
  const replacements = [
    ["\\$MODE", buildMode],
    ["\\$BRANCH", branch],
    ["\\$HOST", host],
    ["\\$BUILD_NUMBER", buildNbr],
    ["\\$BUILD_TIMESTAMP", String(buildTimestamp)],
    ["\\$BUILD_UID", buildUid],
  ] as const;

  return replacements.reduce((acc, [key, val]) => acc.replace(new RegExp(key, "g"), val), value);
}

/**
 * Returns the full URL for a given resource path, based on the current mode and branch.
 * @param path If the path starts with `/`, it is treated as absolute from the project root; otherwise relative to assets folder.
 * @param ghRef The current build number, branch name or tag name to use for GitHub asset URLs.
 */
function getResourceUrl(path: string, ghRef: string | undefined, options: BtymPluginOptions): string {
  const { assetSource, devServerPort, buildUid } = options;
  let assetPath = "/assets/";
  if(path.startsWith("/"))
    assetPath = "";
  assetPath += path;
  const finalPath = `${ghRef ?? `v${pkg.version}`}${assetPath}`;
  return assetSource === "local"
    ? `http://localhost:${devServerPort}${assetPath}?b=${buildUid}`
    : (
      assetSource === "github"
        ? `https://raw.githubusercontent.com/Sv443/BetterYTM/${finalPath}`
        : `https://cdn.jsdelivr.net/gh/Sv443/BetterYTM@${finalPath}`
    );
}

/**
 * Resolves the filesystem path to a resource.
 * Paths prefixed with `/` are relative to the repository root; otherwise relative to the `assets` folder.
 */
function resolveResourcePath(path: string): string {
  if(path.startsWith("/"))
    return join(rootPath, path.slice(1));
  return join(assetFolderPath, path);
}

/** Returns a string of `@resource` directives, as defined in `assets/resources.json` */
async function getResourceDirectives(ref: string, options: BtymPluginOptions): Promise<string | undefined> {
  try {
    const { assetSource } = options;
    const resourcesRaw = JSON.parse(String(await readFile(join(assetFolderPath, "resources.json"))));
    const resources = "resources" in resourcesRaw
      ? resourcesRaw.resources as Record<string, string> | Record<string, { path: string; ref: string; integrity?: boolean }>
      : undefined;

    if(!resources)
      throw new Error("No resources found in 'assets/resources.json'");

    const extAssetPattern = new RegExp(resourcesJson.externalAssetPattern);
    const resourcesHashed: Record<string, { path: string; ref: string; hash?: string }> = {};

    for(const [name, val] of Object.entries(resources)) {
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
        ? { path: resolveResourceVal(val.path, ref, options), ref: resolveResourceVal(val.ref, ref, options), hash }
        : { path: getResourceUrl(resolveResourceVal(val, ref, options), ref, options), ref, hash };
    }

    const addResourceHashed = async (name: string, path: string, entryRef: string) => {
      try {
        if(extAssetPattern.test(name))
          return;
        if(assetSource === "local") {
          resourcesHashed[name] = { path: getResourceUrl(path, entryRef, options), ref: entryRef, hash: undefined };
          return;
        }
        else if(validUrl(path)) {
          const res = await fetch(path);
          if(!res.ok || !res.body)
            return;
          resourcesHashed[name] = { path: getResourceUrl(path, entryRef, options), ref: entryRef, hash: await getStreamHashSha256(res.body) };
          return;
        }
        resourcesHashed[name] = { path: getResourceUrl(path, entryRef, options), ref: entryRef, hash: await getFileHashSha256(path) };
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
    const directives: string[] = [];

    for(const [name, { path, ref: entryRef, hash }] of sortedResourceEntries) {
      const bufferSpace = " ".repeat(longestName - name.length);
      directives.push(`// @resource          ${name}${bufferSpace} ${
        path.match(/^https?:\/\//)
          ? path
          : getResourceUrl(path, entryRef, options)
      }${hash ? `#sha256=${hash}` : ""}`);
    }

    return directives.join("\n");
  }
  catch(err) {
    console.warn("No resource directives found:", err);
    return undefined;
  }
}

//#region @require

/** Returns the `@require` directive block for each defined package in `assets/require.json` */
async function getRequireDirectives(): Promise<string | undefined> {
  const directives: string[] = [];
  const require = JSON.parse(String(await readFile(join(assetFolderPath, "require.json")))) as RequireObj[];

  for(const entry of require) {
    if("link" in entry && typeof entry.link === "string")
      continue;
    "pkgName" in entry && directives.push(getRequireEntry(entry));
    "url" in entry && directives.push(`// @require           ${entry.url}`);
  }

  return directives.length > 0 ? directives.join("\n") : undefined;
}

/** Returns the `@require` directive for a given package entry */
function getRequireEntry(entry: RequireObjPkg): string {
  const baseUrl = entry.baseUrl ?? "https://cdn.jsdelivr.net/npm/";

  const deps = {
    ...pkg.dependencies,
    ...pkg.devDependencies,
  };

  if(!(entry.pkgName in deps))
    throw new Error(`Library '${entry.pkgName}' (referenced in 'assets/require.json') not found in package.json's dependencies or devDependencies`);

  const version = deps[entry.pkgName].replace(/[^0-9.]/g, "");
  return `// @require           ${baseUrl}${entry.pkgName}@${version}${entry.path ? `${entry.path.startsWith("/") ? "" : "/"}${entry.path}` : ""}`;
}

//#region @require (local link)

/** Returns all packages set as locally linked in `assets/require.json` */
async function getLinkedPkgs(): Promise<string> {
  const require = JSON.parse(String(await readFile(join(assetFolderPath, "require.json")))) as RequireObj[];

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
      process.exit(1);
    }
  }

  return retStr;
}

//#region @description:localized

/** Returns the `@description` directive block for each defined locale in `assets/locales.json` */
function getLocalizedDescriptions(): string | undefined {
  try {
    const descriptions: string[] = [];
    for(const [locale, { userscriptDesc, ...rest }] of Object.entries(localesJson)) {
      let loc = locale;
      if(loc.length < 5)
        loc += " ".repeat(5 - loc.length);

      if(locale === "en-US")
        descriptions.unshift(`// @description       ${userscriptDesc}`);

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
    return descriptions.join("\n");
  }
  catch(err) {
    console.warn(k.yellow("No localized descriptions found:"), err);
    return undefined;
  }
}

//#region @antifeature

/** Returns the `@antifeature` directive block for each defined antifeature, with translations */
async function getLocalizedAntifeatures(): Promise<string | undefined> {
  const antifeatures = ["tracking"] as const;
  const antifeatureDescriptions: string[] = [];

  for(const antifeature of antifeatures) {
    for(const [locale, localeData] of Object.entries(localesJson)) {
      const trFilePath = resolveResourcePath(`translations/${locale}.json`);
      const trFile = JSON.parse(String(await readFile(trFilePath))) as typeof en_US;

      if(!("meta" in trFile) || !("antifeatures" in trFile.meta) || !(antifeature in trFile.meta.antifeatures))
        continue;

      const desc = trFile.meta.antifeatures[antifeature];
      if(!desc || desc.length === 0)
        continue;

      let loc = locale;
      if(loc.length < 5)
        loc += " ".repeat(5 - loc.length);

      const getAntiFeatStr = (tagSuffix = "      ") => `// @antifeature${tagSuffix} ${antifeature} ${desc}`;

      if(locale === "en-US")
        antifeatureDescriptions.unshift(getAntiFeatStr());

      antifeatureDescriptions.push(getAntiFeatStr(`:${loc}`));

      if("altLocales" in localeData) {
        for(const altLoc of localeData.altLocales) {
          let alt = altLoc.replace(/_/, "-");
          if(alt.length < 5)
            alt += " ".repeat(5 - alt.length);
          antifeatureDescriptions.push(getAntiFeatStr(`:${alt}`));
        }
      }
    }
  }

  return antifeatureDescriptions.length > 0 ? antifeatureDescriptions.join("\n") : undefined;
}

//#region utils/fs

/** Checks if the given path exists and is readable and writable by the process */
async function fileExists(path: string): Promise<boolean> {
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
 * Uses {@linkcode resolveResourcePath} to resolve the path.
 */
function getFileHashSha256(path: string): Promise<string> {
  return new Promise((res, rej) => {
    const hash = createHash("sha256");
    const stream = createReadStream(resolveResourcePath(path));
    stream.on("data", (data: Buffer | string) => hash.update(data));
    stream.on("end", () => res(hash.digest("base64")));
    stream.on("error", rej);
  });
}

/** Calculates the SHA-256 hash of a ReadableStream */
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

/** Checks if the given string is a valid URL with a protocol that starts with `http` */
function validUrl(url: string): boolean {
  try {
    return new URL(url).protocol.startsWith("http");
  }
  catch {
    return false;
  }
}

/** @internal - Exported for re-use in `vite.config.ts` */
export function getLastCommitSha(): Promise<string> {
  return new Promise((res, rej) => {
    exec("git rev-parse --short HEAD", (err, stdout, stderr) => {
      if(err) {
        console.error(k.red("\nError while checking for latest Git commit.\nPlease ensure you have Git installed and set up properly.\n"), stderr);
        return rej(err);
      }
      return res(String(stdout).replace(/\r?\n/gm, "").trim());
    });
  });
}

/** @internal - Exported for re-use in `vite.config.ts` */
export function randomId(length = 16, radix = 16, randomCase = true): string {
  let arr = Array.from(
    { length },
    () => Math.floor(Math.random() * radix).toString(radix),
  );
  if(randomCase)
    arr = arr.map((v) => v[Math.random() > 0.5 ? "toUpperCase" : "toLowerCase"]());
  return arr.join("");
}
