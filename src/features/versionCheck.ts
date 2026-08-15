import { compare, validateStrict } from "compare-versions";
import { repo, scriptInfo } from "@/constants.ts";
import { getFeature } from "@/config.ts";
import { sendRequest } from "@util/xhr.ts";
import { t } from "@util/translations.ts";
import { loggers } from "@util/logging.ts";
import { getVersionNotifDialog } from "@dialog/versionNotif.ts";
import { showPrompt } from "@dialog/prompt.ts";
import { LogLevel } from "@/types.ts";

/** Initializes the version check feature */
export async function initVersionCheck() {
  try {
    if(getFeature("versionCheck") === false)
      return loggers.misc.info("Version check is disabled");

    const lastCheck = await GM.getValue("bytm-version-check", 0);
    if(Date.now() - lastCheck < 1000 * 60 * 60 * 24)
      return;

    await doVersionCheck(false);
  }
  catch(err) {
    loggers.misc.error("Version check failed:", err);
  }
}

/**
 * Checks for a new version of the script and shows a dialog.  
 * If {@linkcode notifyNoNewVerFound} is set to true, a dialog is also shown if no updates were found.
 */
export async function doVersionCheck(notifyNoNewVerFound = false) {
  await GM.setValue("bytm-version-check", Date.now());

  const res = await sendRequest({
    method: "GET",
    url: `https://github.com/${repo}/releases/latest`,
  });

  // TODO: small dialog for "no update found" message?
  const noNewVerFound = () => notifyNoNewVerFound ? showPrompt({ type: "alert", message: t("no_new_version_found") }) : undefined;

  let latestTag: string | undefined;
  const { hostname, pathname } = new URL(res.finalUrl);
  if(hostname === "github.com" && pathname.startsWith(`/${repo}/releases/tag/`))
    latestTag = pathname.split("/").pop()?.replace(/[a-zA-Z]/g, "");
  
  if(!latestTag || !validateStrict(latestTag))
    return await noNewVerFound();

  loggers.misc.info("Version check results - current version:", scriptInfo.version, "- latest version:", latestTag, "- from URL:", res.finalUrl, LogLevel.Info);

  if(compare(scriptInfo.version, latestTag, "<")) {
    const dialog = await getVersionNotifDialog({ latestTag });
    await dialog.open();
    return;
  }
  return await noNewVerFound();
}
