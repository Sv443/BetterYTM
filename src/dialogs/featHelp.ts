import { resourceToHTMLString, t } from "../utils";
import { BytmDialog } from "../components";
import { featInfo } from "../features";
import type { FeatureKey } from "../types";

let featHelpDialog: BytmDialog | null = null;

export type FeatHelpDialogRenderProps = {
  featKey: FeatureKey;
};

/** Creates and/or returns the help dialog for a specific feature */
export async function getFeatHelpDialog({
  featKey,
}: FeatHelpDialogRenderProps) {
  if(!featHelpDialog) {
    featHelpDialog = new BytmDialog({
      id: "feat-help",
      maxWidth: 600,
      maxHeight: 400,
      closeBtnEnabled: true,
      closeOnBgClick: true,
      closeOnEscPress: true,
      destroyOnClose: true,
      small: true,
      renderHeader,
      renderBody: () => renderBody({ featKey }),
    });

    featHelpDialog.on("destroy", () => featHelpDialog = null);

    // make config menu inert while help dialog is open
    featHelpDialog.on("open", () => document.querySelector("#bytm-cfg-menu")?.setAttribute("inert", "true"));
    featHelpDialog.on("close", () => document.querySelector("#bytm-cfg-menu")?.removeAttribute("inert"));
  }
  return featHelpDialog;
}

async function renderHeader() {
  const headerEl = document.createElement("div");
  headerEl.role = "heading";
  headerEl.ariaLevel = "1";
  const helpIconSvg = await resourceToHTMLString("icon-help");
  if(helpIconSvg)
    headerEl.innerHTML = helpIconSvg;

  return headerEl;
}

async function renderBody({
  featKey,
}: {
  featKey: FeatureKey;
}) {
  const contElem = document.createElement("div");

  const featDescElem = document.createElement("h3");
  featDescElem.role = "subheading";
  featDescElem.textContent = t(`feature_desc_${featKey}`);
  featDescElem.id = "bytm-feat-help-menu-desc";

  const helpTextElem = document.createElement("div");
  helpTextElem.id = "bytm-feat-help-menu-text";
  // @ts-ignore
  const helpText: string | undefined = featInfo[featKey]?.helpText?.();
  helpTextElem.textContent = helpText ?? t(`feature_helptext_${featKey}`);

  contElem.appendChild(featDescElem);
  contElem.appendChild(helpTextElem);

  return contElem;
}
