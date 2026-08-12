import { pureObj, randomId } from "@sv443-network/coreutils";
import { LogLevel } from "@/types.ts";

/**
 * Check below this variable for the constant variables used throughout BetterYTM.  
 * Edit them however you want, but note that it's really easy to mess something up here and make the script stop working, so it's recommended to back up the code first.  
 * Reload the page to apply changes and refer to your browser's JavaScript console (usually F12, Ctrl+Shift+K or Ctrl+Shift+I) for any errors with your changes.  
 * @deprecated This object was reworked when the build process was migrated to vite.
 */
export const rawConsts = {};
/** Path of the GitHub repo - not a URL nor a hostname nor a URL path. To be used in the construction of various GitHub-targeting URLs. */
export const repo = "Sv443/BetterYTM";
/** The mode in which the script was built (production or development). */
export const mode = __BYTM_MODE__;
/** The branch to use in various URLs that point to the GitHub repo. */
export const branch = __BYTM_BRANCH__;
/** Which host the userscript was installed from. */
export const host = __BYTM_HOST__;
/** The build number of the userscript. */
export const buildNumber = __BYTM_BUILD_NUMBER__;
/** When the script was built, as a UNIX timestamp. */
export const buildTimestamp = __BYTM_BUILD_TIMESTAMP__;
/** The source of the assets - github, jsdelivr or local. */
export const assetSource = __BYTM_ASSET_SOURCE__;
/** The port of the dev server. */
export const devServerPort = __BYTM_DEV_SERVER_PORT__;

/** URL to the changelog file */
export const changelogUrl = assetSource === "local"
  ? `http://localhost:${devServerPort}/changelog.md?build=${buildNumber}`
  : `https://raw.githubusercontent.com/${repo}/${mode==="development"?"develop":"main"}/changelog.md?build=${buildNumber}`;

/** The URL search parameters at the earliest possible time */
export const initialParams = new URL(location.href).searchParams;

/** Timestamp of when the script was initialized. */
export const initTime = Date.now();

/** Names of platforms by key of {@linkcode host} */
export const platformNames = pureObj({
  github: "GitHub",
  greasyfork: "Greasy Fork",
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
