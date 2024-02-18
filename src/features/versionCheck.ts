import { scriptInfo } from "../constants";
import { getFeatures } from "../config";
import { error, info, sendRequest } from "../utils";
import { getVersionNotifDialog } from "../dialogs";

const releaseURL = "https://github.com/Sv443/BetterYTM/releases/latest";

export async function checkVersion() {
  try {
    if(getFeatures().versionCheck === false)
      return info("Version check is disabled");

    const lastCheck = await GM.getValue("bytm-version-check", 0);
    if(Date.now() - lastCheck < 1000 * 60 * 60 * 24)
      return;

    await GM.setValue("bytm-version-check", Date.now());

    const res = await sendRequest({
      method: "GET",
      url: releaseURL,
    });

    // const latestTag = res.finalUrl.split("/").pop()?.replace(/[a-zA-Z]/g, "");
    const latestTag = "1.2.3";

    if(!latestTag)
      return;

    const versionComp = compareVersions(scriptInfo.version, latestTag);

    info("Version check - current version:", scriptInfo.version, "- latest version:", latestTag);

    if(versionComp < 0) {
      const dialog = await getVersionNotifDialog({ latestTag });
      await dialog.open();
    }
  }
  catch(err) {
    error("Version check failed:", err);
  }
}

/**
 * Crudely compares two semver version strings.  
 * @returns Returns 1 if a > b or -1 if a < b or 0 if a == b
 */
function compareVersions(a: string, b: string) {
  const pa = a.split(".");
  const pb = b.split(".");
  for(let i = 0; i < 3; i++) {
    const na = Number(pa[i]);
    const nb = Number(pb[i]);
    if(na > nb) return 1;
    if(nb > na) return -1;
    if(!isNaN(na) && isNaN(nb)) return 1;
    if(isNaN(na) && !isNaN(nb)) return -1;
  }
  return 0;
}
