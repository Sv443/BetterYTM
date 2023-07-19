import type { LogLevel } from "./types";

const modeRaw = "{{MODE}}";
const branchRaw = "{{BRANCH}}";

/** The mode in which the script was built (production or development) */
export const mode = modeRaw.match(/^{{.+}}$/) ? "production" : modeRaw;
/** The branch to use in various URLs that point to the GitHub repo */
export const branch = branchRaw.match(/^{{.+}}$/) ? "main" : branchRaw;

/**
 * How much info should be logged to the devtools console?  
 * 0 = Debug (show everything) or 1 = Info (show only important stuff)
 */
export const logLevel: LogLevel = mode === "production" ? 1 : 0;

/** Info about the userscript, parsed from the userscript header (tools/post-build.js) */
export const scriptInfo = {
  name: GM.info.script.name,
  version: GM.info.script.version,
  namespace: GM.info.script.namespace,
  lastCommit: "{{BUILD_NUMBER}}" as string, // assert as generic string instead of union
};
