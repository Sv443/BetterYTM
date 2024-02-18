import { host, scriptInfo } from "../constants";
import { BytmDialog, getChangelogMd, parseMarkdown, t } from "../utils";
import { getFeatures, saveFeatures } from "../config";
import pkg from "../../package.json" assert { type: "json" };

let verNotifDialog: BytmDialog | null = null;

export type VersionNotifDialogRenderProps = {
  latestTag: string;
};

/** Creates and/or returns the dialog to be shown when a new version is available */
export async function getVersionNotifDialog({
  latestTag,
}: VersionNotifDialogRenderProps) {
  if(!verNotifDialog) {
    const changelogMdFull = await getChangelogMd();
    const changelogMd = changelogMdFull.split("<div class=\"split\">")[1];
    const changelogHtml = await parseMarkdown(changelogMd);

    verNotifDialog = new BytmDialog({
      id: "version-notif",
      maxWidth: 600,
      maxHeight: 800,
      closeOnBgClick: false,
      closeOnEscPress: true,
      destroyOnClose: true,
      smallMenu: true,
      renderBody: () => renderBody({ latestTag, changelogHtml }),
    });
  }
  return verNotifDialog!;
}

function renderBody({
  latestTag,
  changelogHtml,
}: {
  latestTag: string;
  changelogHtml: string;
}) {
  const hostPlatformNames: Record<typeof host, string> = {
    github: "GitHub",
    greasyfork: "GreasyFork",
    openuserjs: "OpenUserJS",
  };

  // TODO:
  void changelogHtml;

  const wrapperEl = document.createElement("div");

  const pEl = document.createElement("p");
  pEl.textContent = t("new_version_available", scriptInfo.name, scriptInfo.version, latestTag, hostPlatformNames[host]);
  wrapperEl.appendChild(pEl);

  const disableUpdCheckEl = document.createElement("div");
  disableUpdCheckEl.id = "bytm-disable-update-check-wrapper";

  const checkboxEl = document.createElement("input");
  checkboxEl.type = "checkbox";
  checkboxEl.id = "bytm-disable-update-check-chkbox";
  checkboxEl.checked = false;

  const labelEl = document.createElement("label");
  labelEl.htmlFor = "bytm-disable-update-check-chkbox";
  labelEl.textContent = t("disable_update_check");

  disableUpdCheckEl.appendChild(checkboxEl);
  disableUpdCheckEl.appendChild(labelEl);

  wrapperEl.appendChild(disableUpdCheckEl);

  verNotifDialog!.on("close", async () => {
    const config = getFeatures();
    if(checkboxEl.checked)
      config.versionCheck = false;
    await saveFeatures(config);
  });

  const btnWrapper = document.createElement("div");
  btnWrapper.id = "bytm-version-notif-dialog-btns";

  const btnUpdate = document.createElement("button");
  btnUpdate.className = "bytm-btn";
  btnUpdate.textContent = t("open_update_page", hostPlatformNames[host]);
  btnUpdate.addEventListener("click", () => {
    window.open(pkg.updates[host]);
    verNotifDialog!.close();
  });

  const btnIgnore = document.createElement("button");
  btnIgnore.className = "bytm-btn";
  btnIgnore.textContent = t("ignore_for_24h");
  btnIgnore.addEventListener("click", () => verNotifDialog!.close());

  btnWrapper.appendChild(btnUpdate);
  btnWrapper.appendChild(btnIgnore);

  wrapperEl.appendChild(btnWrapper);

  return wrapperEl;
}
