import { t } from "../translations";
import { scriptInfo, host } from "../constants";
import { getFeatures } from "../config";
import { error, info, sendRequest } from "../utils";
import pkg from "../../package.json" assert { type: "json" };
// import { BytmMenu } from "src/menu/new/BytmMenu";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";

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

    const latestTag = res.finalUrl.split("/").pop()?.replace(/[a-zA-Z]/g, "");

    if(!latestTag)
      return;

    const versionComp = compareVersions(scriptInfo.version, latestTag);

    info("Version check - current version:", scriptInfo.version, "- latest version:", latestTag);

    if(versionComp < 0) {
      const platformNames: Record<typeof host, string> = {
        github: "GitHub",
        greasyfork: "GreasyFork",
        openuserjs: "OpenUserJS",
      };

      // const menu = new BytmMenu({
      //   id: "version-check",
      //   closeOnBgClick: false,
      //   closeOnEscPress: false,
      //   renderBody() {
      //     return (
      //       <div>
      //         <p>
      //           {t("new_version_available", scriptInfo.name, scriptInfo.version, latestTag, platformNames[host])}
      //         </p>
      //         <button
      //           className="bytm-btn"
      //           onClick={() => window.open(pkg.updates[host])}
      //         >
      //           {t("update_now")}
      //         </button>
      //       </div>
      //     );
      //   },
      // });

      // menu.on("close", () => menu.destroy());

      // await menu.open();

      // TODO: replace with custom dialog
      if(confirm(t("new_version_available", scriptInfo.name, scriptInfo.version, latestTag, platformNames[host])))
        window.open(pkg.updates[host]);
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
