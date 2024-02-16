import { host, scriptInfo } from "../constants";
import { BytmDialog, getChangelogMd, parseMarkdown, t } from "../utils";
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
      closeOnBgClick: false,
      closeOnEscPress: false,
      destroyOnClose: true,
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
  const platformNames: Record<typeof host, string> = {
    github: "GitHub",
    greasyfork: "GreasyFork",
    openuserjs: "OpenUserJS",
  };

  // TODO:
  void changelogHtml;

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
