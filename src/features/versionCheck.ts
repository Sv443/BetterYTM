import { scriptInfo } from "../constants.js";
import { getFeature } from "../config.js";
import { error, info, sendRequest, t } from "../utils/index.js";
import { getVersionNotifDialog, showPrompt } from "../dialogs/index.js";
import { compare } from "compare-versions";
import { LogLevel } from "../types.js";

const releaseURL = "https://github.com/Sv443/BetterYTM/releases/latest";

/** Initializes the version check feature */
export async function initVersionCheck() {
  try {
    if(getFeature("versionCheck") === false)
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
  const noUpdateFound = () => notifyNoUpdatesFound ? showPrompt({ message: t("no_updates_found") }) : undefined;

  const latestTag = res.finalUrl.split("/").pop()?.replace(/[a-zA-Z]/g, "");

  if(!latestTag)
    return await noUpdateFound();

  info("Version check - current version:", scriptInfo.version, "- latest version:", latestTag, LogLevel.Info);

  if(compare(scriptInfo.version, latestTag, "<")) {
    const dialog = await getVersionNotifDialog({ latestTag });
    await dialog.open();
    return;
  }
  return await noUpdateFound();
}
