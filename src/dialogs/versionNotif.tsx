import { host, scriptInfo } from "../constants";
import { BytmMenu, t } from "../utils";
import pkg from "../../package.json" assert { type: "json" };
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";

let verNotifDialog: BytmMenu | null = null;

export type VersionNotifDialogRenderProps = {
  latestTag: string;
};

/** Returns the dialog shown when a new version is available */
export function getVersionNotifDialog({
  latestTag,
}: VersionNotifDialogRenderProps) {
  if(!verNotifDialog) {
    verNotifDialog = new BytmMenu({
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

  return (
    <div>
      <p>
        {t("new_version_available", scriptInfo.name, scriptInfo.version, latestTag, platformNames[host])}
      </p>
      <button
        className="bytm-btn"
        onClick={() => window.open(pkg.updates[host])}
      >
        {t("update_now")}
      </button>
    </div>
  );
}
