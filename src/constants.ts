import { randomId } from "@sv443-network/userutils";
import { LogLevel } from "./types.js";
import { pureObj } from "./utils/misc.js";

type ConstTypes = {
  mode: "production" | "development";
  branch: "main" | "develop";
  host: "github" | "greasyfork" | "openuserjs";
  buildNumber: string;
  assetSource: "github" | "jsdelivr" | "local";
  devServerPort: number;
};

// these strings will have their values replaced by the post-build script:
const rawConsts = {
  mode: "#{{MODE}}",
  branch: "#{{BRANCH}}",
  host: "#{{HOST}}",
  buildNumber: "#{{BUILD_NUMBER}}",
  assetSource: "#{{ASSET_SOURCE}}",
  devServerPort: "#{{DEV_SERVER_PORT}}",
} as const satisfies Record<keyof ConstTypes, string>;

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
/** The source of the assets - github, jsdelivr or local */
export const assetSource = getConst("assetSource", "jsdelivr");
/** The port of the dev server */
export const devServerPort = Number(getConst("devServerPort", 8710));

/** URL to the changelog file */
export const changelogUrl = `https://raw.githubusercontent.com/${repo}/${buildNumber??branch}/changelog.md`;

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

/** Info about the userscript, parsed from the userscript header (tools/post-build.js) */
export const scriptInfo = pureObj({
  name: GM.info.script.name,
  version: GM.info.script.version,
  namespace: GM.info.script.namespace,
} as const);
