import { host, scriptInfo } from "../constants";
import { BytmDialog, t } from "../utils";
import pkg from "../../package.json" assert { type: "json" };

let verNotifDialog: BytmDialog | null = null;

export type VersionNotifDialogRenderProps = {
  latestTag: string;
};

/** Returns the dialog shown when a new version is available */
export function getVersionNotifDialog({
  latestTag,
}: VersionNotifDialogRenderProps) {
  if(!verNotifDialog) {
    verNotifDialog = new BytmDialog({
      id: "version-notif",
      closeOnBgClick: false,
      closeOnEscPress: false,
      destroyOnClose: true,
      renderBody: () => renderBody(latestTag),
    });
  }
  return verNotifDialog!;
}

function renderBody(latestTag: string) {
  const platformNames: Record<typeof host, string> = {
    github: "GitHub",
    greasyfork: "GreasyFork",
    openuserjs: "OpenUserJS",
  };

  // TODO:
  const wrapperEl = document.createElement("div");

  const pEl = document.createElement("p");
  pEl.textContent = t("new_version_available", scriptInfo.name, scriptInfo.version, latestTag, platformNames[host]);
  wrapperEl.appendChild(pEl);

  const btnEl = document.createElement("button");
  btnEl.className = "bytm-btn";
  btnEl.textContent = t("update_now");
  btnEl.addEventListener("click", () => window.open(pkg.updates[host]));
  wrapperEl.appendChild(btnEl);

  return wrapperEl;
}
