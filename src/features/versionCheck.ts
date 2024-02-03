import { t } from "../translations";
import { scriptInfo, host } from "../constants";
import { getFeatures } from "../config";
import { info } from "../utils";
import pkg from "../../package.json" assert { type: "json" };

const releaseURL = "https://github.com/Sv443/BetterYTM/releases/latest";

export async function checkVersion() {
  if(getFeatures().versionCheck === false)
    return info("Version check is disabled");

  const lastCheck = await GM.getValue("bytm-versionCheck", 0);
  if(Date.now() - lastCheck < 1000 * 60 * 60 * 24)
    return;

  await GM.setValue("bytm-versionCheck", Date.now());

  const res = await fetch(releaseURL);
  const latestTag = res.url.split("/").pop();

  if(!latestTag)
    return;

  if(compareVersions(scriptInfo.version, latestTag) < 0) {
    const platformNames: Record<typeof host, string> = {
      github: "GitHub",
      greasyfork: "GreasyFork",
      openuserjs: "OpenUserJS",
    };
    if(confirm(t("new_version_available", scriptInfo.name, scriptInfo.version, latestTag, platformNames[host])))
      window.open(pkg.releases[host]);
  }
}

/**
 * Compares two semver version strings.  
 * @returns Returns 1 if a > b, -1 if a < b, 0 if a == b
 */
function compareVersions(a: string, b: string) {
  const pa = a.split(".");
  const pb = b.split(".");
  for (let i = 0; i < 3; i++) {
    const na = Number(pa[i]);
    const nb = Number(pb[i]);
    if (na > nb) return 1;
    if (nb > na) return -1;
    if (!isNaN(na) && isNaN(nb)) return 1;
    if (isNaN(na) && !isNaN(nb)) return -1;
  }
  return 0;
}
