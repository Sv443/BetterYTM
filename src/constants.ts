import type { LogLevel } from "./types";
import { randomId } from "./utils";

const modeRaw = "{{MODE}}";
const branchRaw = "{{BRANCH}}";

/** The mode in which the script was built (production or development) */
export const mode = (modeRaw.match(/^{{.+}}$/) ? "production" : modeRaw) as "production" | "development";
/** The branch to use in various URLs that point to the GitHub repo */
export const branch = (branchRaw.match(/^{{.+}}$/) ? "main" : branchRaw) as "main" | "develop";
/** Path to the GitHub repo */
export const repo = "Sv443/BetterYTM";
/** Random ID for the current BYTM / tab session (hexadecimal, all lowercase) */
export const sessionID = randomId(16);

/**
 * How much info should be logged to the devtools console  
 * 0 = Debug (show everything) or 1 = Info (show only important stuff)
 */
export const defaultLogLevel: LogLevel = mode === "production" ? 1 : 0;

/** Info about the userscript, parsed from the userscript header (tools/post-build.js) */
export const scriptInfo = {
  name: GM.info.script.name,
  version: GM.info.script.version,
  namespace: GM.info.script.namespace,
  buildNumber: "{{BUILD_NUMBER}}" as string, // asserted as generic string instead of literal
};
