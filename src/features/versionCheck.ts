import { scriptInfo } from "../constants";
import { getFeatures } from "../config";
import { error, info, sendRequest, t } from "../utils";
import { getVersionNotifDialog } from "../dialogs";

const releaseURL = "https://github.com/Sv443/BetterYTM/releases/latest";

/** Initializes the version check feature */
export async function initVersionCheck() {
  try {
    if(getFeatures().versionCheck === false)
      return info("Version check is disabled");

    const lastCheck = await GM.getValue("bytm-version-check", 0);
    if(Date.now() - lastCheck < 1000 * 60 * 60 * 24)
      return;

    await doVersionCheck(false);
  }
  catch(err) {
    error("Version check failed:", err);
  }
}

/**
 * Checks for a new version of the script and shows a dialog.  
 * If {@linkcode notifyNoUpdatesFound} is set to true, a dialog is also shown if no updates were found.
 */
export async function doVersionCheck(notifyNoUpdatesFound = false) {
  await GM.setValue("bytm-version-check", Date.now());

  const res = await sendRequest({
    method: "GET",
    url: releaseURL,
  });

  // TODO: small dialog for "no update found" message?
  const noUpdateFound = () => notifyNoUpdatesFound ? alert(t("no_updates_found")) : undefined;

  const latestTag = res.finalUrl.split("/").pop()?.replace(/[a-zA-Z]/g, "");

  if(!latestTag)
    return noUpdateFound();

  const versionComp = compareVersions(scriptInfo.version, latestTag);

  info("Version check - current version:", scriptInfo.version, "- latest version:", latestTag);

  if(versionComp < 0) {
    const dialog = await getVersionNotifDialog({ latestTag });
    await dialog.open();
    return;
  }
  return noUpdateFound();
}

/**
 * Crudely compares two semver version strings.  
 * The format is assumed to *always* be `MAJOR.MINOR.PATCH`, where each part is a number.
 * @returns Returns 1 if `a > b`, or -1 if `a < b`, or 0 if `a == b`
 */
export function compareVersions(a: string, b: string) {
  a = String(a).trim();
  b = String(b).trim();

  if([a, b].some(v => !v.match(/^\d+\.\d+\.\d+$/)))
    throw new TypeError("Invalid version format, expected 'MAJOR.MINOR.PATCH'");

  const pa = a.split(".");
  const pb = b.split(".");
  for(let i = 0; i < 3; i++) {
    const na = Number(pa[i]);
    const nb = Number(pb[i]);
    if(na > nb)
      return 1;
    if(nb > na)
      return -1;
    if(!isNaN(na) && isNaN(nb))
      return 1;
    if(isNaN(na) && !isNaN(nb))
      return -1;
  }
  return 0;
}

/**
 * Compares two version arrays.  
 * The format is assumed to *always* be `[MAJOR, MINOR, PATCH]`, where each part is a positive integer number.
 * @returns Returns 1 if `a > b`, or -1 if `a < b`, or 0 if `a == b`
 */
export function compareVersionArrays(a: [major: number, minor: number, patch: number], b: [major: number, minor: number, patch: number]) {
  if([a, b].some(v => !Array.isArray(v) || v.length !== 3 || v.some(iv => !Number.isInteger(iv) || iv < 0)))
    throw new TypeError("Invalid version format, expected '[MAJOR, MINOR, PATCH]' consisting only of positive integers");
  for(let i = 0; i < 3; i++) {
    if(a[i] > b[i])
      return 1;
    if(b[i] > a[i])
      return -1;
  }
  return 0;
}
