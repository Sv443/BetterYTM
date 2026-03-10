import { pureObj, randomId } from "@sv443-network/coreutils";
import { LogLevel } from "./types.js";

type ConstTypes = {
  mode: "production" | "development";
  branch: "main" | "develop";
  host: "github" | "greasyfork" | "openuserjs";
  buildNumber: string;
  buildTimestamp: number;
  assetSource: "github" | "jsdelivr" | "local";
  devServerPort: number;
};

/** Raw (unparsed) constants, injected by the script at `src/tools/post-build.ts` */
const rawConsts = {
  mode: "#{{MODE}}",
  branch: "#{{BRANCH}}",
  host: "#{{HOST}}",
  buildNumber: "#{{BUILD_NUMBER}}",
  buildTimestamp: "#{{BUILD_TIMESTAMP}}",
  assetSource: "#{{ASSET_SOURCE}}",
  devServerPort: "#{{DEV_SERVER_PORT}}",
} as const satisfies Record<keyof ConstTypes, string>;

/** Parses a raw constant or falls back to a default value */
const getConst = <TKey extends keyof typeof rawConsts, TDefault extends string | number>(constKey: TKey, defaultVal: TDefault) => {
  const val = rawConsts[constKey];
  return (val.match(/^#{{.+}}$/) ? defaultVal : val) as ConstTypes[TKey] | TDefault;
};

/** Path to the GitHub repo */
export const repo = "Sv443/BetterYTM";
/** The mode in which the script was built (production or development) */
export const mode = getConst("mode", "production");
/** The branch to use in various URLs that point to the GitHub repo */
export const branch = getConst("branch", "main");
/** Which host the userscript was installed from */
export const host = getConst("host", "github");
/** The build number of the userscript */
export const buildNumber = getConst("buildNumber", "!BUILD_ERROR!");
/** When the script was built, as a UNIX timestamp */
export const buildTimestamp = Number(getConst("buildTimestamp", 0));
/** The source of the assets - github, jsdelivr or local */
export const assetSource = getConst("assetSource", "jsdelivr");
/** The port of the dev server */
export const devServerPort = Number(getConst("devServerPort", 8710));

/** URL to the changelog file */
export const changelogUrl = assetSource === "local"
  ? `http://localhost:${devServerPort}/changelog.md?build=${buildNumber}`
  : `https://raw.githubusercontent.com/${repo}/${mode==="development"?"develop":"main"}/changelog.md?build=${buildNumber}`;

/** The URL search parameters at the earliest possible time */
export const initialParams = new URL(location.href).searchParams;

/** Names of platforms by key of {@linkcode host} */
export const platformNames = pureObj({
  github: "GitHub",
  greasyfork: "GreasyFork",
  openuserjs: "OpenUserJS",
} as const);

/** Default compression format used throughout BYTM */
export const compressionFormat: CompressionFormat = "deflate-raw";

/** Whether sessionStorage is available and working */
export const sessionStorageAvailable =
  typeof sessionStorage?.setItem === "function"
  && (() => {
    try {
      const key = `_bytm_test_${randomId(6, 36, false, true)}`;
      sessionStorage.setItem(key, "test");
      sessionStorage.removeItem(key);
      return true;
    }
    catch {
      return false;
    }
  })();

/**
 * Fallback and initial value of how much info should be logged to the devtools console  
 * 0 = Debug (show everything) or 1 = Info (show only important stuff)
 */
export const defaultLogLevel: LogLevel = mode === "production" ? LogLevel.Info : LogLevel.Debug;

/** Info about the userscript, parsed from the userscript header (injected by src/tools/post-build.ts) */
export const scriptInfo = pureObj({
  name: GM_info.script.name,
  version: GM_info.script.version,
  namespace: GM_info.script.namespace,
} as const);

/** Maximum number of sessions per user to show the "new feature" adornment in the config menu. */
export const newFeatureAdornmentMaxSessionCount = 20;
