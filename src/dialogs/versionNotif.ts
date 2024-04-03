import { host, scriptInfo } from "../constants";
import { getChangelogMd, getResourceUrl, onInteraction, parseMarkdown, t } from "../utils";
import { BytmDialog, createToggleInput } from "../components";
import { getFeatures, setFeatures } from "../config";
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
      closeBtnEnabled: false,
      closeOnBgClick: false,
      closeOnEscPress: true,
      destroyOnClose: true,
      smallDialog: true,
      renderHeader,
      renderBody: () => renderBody({
        latestTag,
        changelogHtml,
      }),
    });
  }
  return verNotifDialog;
}

async function renderHeader() {
  const headerEl = document.createElement("div");
  headerEl.role = "heading";
  headerEl.ariaLevel = "1";

  const logoEl = document.createElement("img");
  logoEl.classList.add("bytm-dialog-header-img", "bytm-no-select");
  logoEl.src = await getResourceUrl("img-logo");
  logoEl.alt = "BetterYTM logo";

  headerEl.appendChild(logoEl);
  return headerEl;
}

let disableUpdateCheck = false;

async function renderBody({
  latestTag,
  changelogHtml,
}: {
  latestTag: string;
  changelogHtml: string;
}) {
  disableUpdateCheck = false;

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
  changelogSummaryEl.role = "button";
  changelogSummaryEl.tabIndex = 0;
  changelogSummaryEl.ariaLabel = changelogSummaryEl.title = changelogSummaryEl.textContent = t("expand_release_notes");
  changelogDetailsEl.appendChild(changelogSummaryEl);

  changelogDetailsEl.addEventListener("toggle", () => {
    changelogSummaryEl.ariaLabel = changelogSummaryEl.title = changelogSummaryEl.textContent = changelogDetailsEl.open ? t("collapse_release_notes") : t("expand_release_notes");
  });

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

  const disableToggleEl = await createToggleInput({
    id: "disable-update-check",
    initialValue: false,
    labelPos: "off",
    onChange(checked) {
      disableUpdateCheck = checked;
      if(checked)
        btnClose.textContent = t("close_and_ignore_until_reenabled");
      else
        btnClose.textContent = t("close_and_ignore_for_24h");
    },
  });

  const labelWrapperEl = document.createElement("div");
  labelWrapperEl.classList.add("bytm-disable-update-check-toggle-label-wrapper");

  const labelEl = document.createElement("label");
  labelEl.htmlFor = "bytm-toggle-disable-update-check";
  labelEl.textContent = t("disable_update_check");

  const secondaryLabelEl = document.createElement("span");
  secondaryLabelEl.classList.add("bytm-secondary-label");
  secondaryLabelEl.textContent = t("reenable_in_config_menu");

  labelWrapperEl.appendChild(labelEl);
  labelWrapperEl.appendChild(secondaryLabelEl);

  disableUpdCheckEl.appendChild(disableToggleEl);
  disableUpdCheckEl.appendChild(labelWrapperEl);

  wrapperEl.appendChild(disableUpdCheckEl);

  verNotifDialog?.on("close", async () => {
    const config = getFeatures();
    config.versionCheck = !disableUpdateCheck;
    await setFeatures(config);
  });

  const btnWrapper = document.createElement("div");
  btnWrapper.id = "bytm-version-notif-dialog-btns";

  const btnUpdate = document.createElement("button");
  btnUpdate.className = "bytm-btn";
  btnUpdate.tabIndex = 0;
  btnUpdate.textContent = t("open_update_page_install_manually", hostPlatformNames[host]);

  onInteraction(btnUpdate, () => {
    window.open(pkg.updates[host]);
    verNotifDialog?.close();
  });

  const btnClose = document.createElement("button");
  btnClose.className = "bytm-btn";
  btnClose.tabIndex = 0;
  btnClose.textContent = t("close_and_ignore_for_24h");

  onInteraction(btnClose, () => verNotifDialog?.close());

  btnWrapper.appendChild(btnUpdate);
  btnWrapper.appendChild(btnClose);

  wrapperEl.appendChild(btnWrapper);

  return wrapperEl;
}
