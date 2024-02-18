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
      renderBody: () => renderBody({
        latestTag,
        changelogHtml,
      }),
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

  const wrapperEl = document.createElement("div");

  const pEl = document.createElement("p");
  pEl.textContent = t("new_version_available", scriptInfo.name, scriptInfo.version, latestTag, hostPlatformNames[host]);
  wrapperEl.appendChild(pEl);

  const changelogDetailsEl = document.createElement("details");
  changelogDetailsEl.id = "bytm-version-notif-changelog-details";
  changelogDetailsEl.open = false;

  const changelogSummaryEl = document.createElement("summary");
  changelogSummaryEl.ariaLabel = changelogSummaryEl.title = changelogSummaryEl.textContent = t("expand_release_notes");
  changelogDetailsEl.appendChild(changelogSummaryEl);

  const changelogEl = document.createElement("p");
  changelogEl.id = "bytm-version-notif-changelog-cont";
  changelogEl.classList.add("bytm-markdown-container");
  changelogEl.innerHTML = changelogHtml;

  changelogEl.querySelectorAll("a").forEach((a) => {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  });

  changelogDetailsEl.appendChild(changelogEl);
  wrapperEl.appendChild(changelogDetailsEl);

  const disableUpdCheckEl = document.createElement("div");
  disableUpdCheckEl.id = "bytm-disable-update-check-wrapper";

  const checkboxEl = document.createElement("input");
  checkboxEl.type = "checkbox";
  checkboxEl.id = "bytm-disable-update-check-chkbox";
  checkboxEl.tabIndex = 0;
  checkboxEl.checked = false;

  const labelEl = document.createElement("label");
  labelEl.htmlFor = "bytm-disable-update-check-chkbox";
  labelEl.textContent = t("disable_update_check");

  disableUpdCheckEl.appendChild(checkboxEl);
  disableUpdCheckEl.appendChild(labelEl);

  wrapperEl.appendChild(disableUpdCheckEl);

  verNotifDialog?.on("close", async () => {
    const config = getFeatures();
    if(checkboxEl.checked)
      config.versionCheck = false;
    await saveFeatures(config);
  });

  const btnWrapper = document.createElement("div");
  btnWrapper.id = "bytm-version-notif-dialog-btns";

  const btnUpdate = document.createElement("button");
  btnUpdate.className = "bytm-btn";
  btnUpdate.tabIndex = 0;
  btnUpdate.textContent = t("open_update_page_install_manually", hostPlatformNames[host]);
  const btnUpdateClicked = () => {
    window.open(pkg.updates[host]);
    verNotifDialog?.close();
  };
  btnUpdate.addEventListener("click", btnUpdateClicked);
  btnUpdate.addEventListener("keydown", (e) => e.key === "Enter" && btnUpdateClicked());

  const btnClose = document.createElement("button");
  btnClose.className = "bytm-btn";
  btnClose.tabIndex = 0;
  btnClose.textContent = t("ignore_for_24h");

  checkboxEl.addEventListener("change", () => {
    if(checkboxEl.checked)
      btnClose.textContent = t("close");
    else
      btnClose.textContent = t("ignore_for_24h");
  });

  btnClose.addEventListener("click", () => verNotifDialog?.close());
  btnClose.addEventListener("keydown", (e) => e.key === "Enter" && verNotifDialog?.close());

  btnWrapper.appendChild(btnUpdate);
  btnWrapper.appendChild(btnClose);

  wrapperEl.appendChild(btnWrapper);

  return wrapperEl;
}
