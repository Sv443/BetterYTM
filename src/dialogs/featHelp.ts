import { resourceAsString, t } from "../utils/index.js";
import { BytmDialog } from "../components/index.js";
import { featInfo } from "../features/index.js";
import type { FeatureKey } from "../types.js";

let featHelpDialog: BytmDialog | null = null;
let curFeatKey: FeatureKey | null = null;

export type FeatHelpDialogRenderProps = {
  featKey: FeatureKey;
};

/** Creates or modifies the help dialog for a specific feature and returns it */
export async function getFeatHelpDialog({
  featKey,
}: FeatHelpDialogRenderProps) {
  curFeatKey = featKey;
  if(!featHelpDialog) {
    featHelpDialog = new BytmDialog({
      id: "feat-help",
      width: 600,
      height: 400,
      closeBtnEnabled: true,
      closeOnBgClick: true,
      closeOnEscPress: true,
      small: true,
      renderHeader,
      renderBody,
    });

    // make config menu inert while help dialog is open
    featHelpDialog.on("open", () => document.querySelector("#bytm-cfg-menu")?.setAttribute("inert", "true"));
    featHelpDialog.on("close", () => document.querySelector("#bytm-cfg-menu")?.removeAttribute("inert"));
  }
  return featHelpDialog;
}

async function renderHeader() {
  const headerEl = document.createElement("div");
  const helpIconSvg = await resourceAsString("icon-help");
  if(helpIconSvg)
    headerEl.innerHTML = helpIconSvg;

  return headerEl;
}

async function renderBody() {
  const contElem = document.createElement("div");

  const featDescElem = document.createElement("h3");
  featDescElem.role = "subheading";
  featDescElem.tabIndex = 0;
  featDescElem.textContent = t(`feature_desc_${curFeatKey}`);
  featDescElem.id = "bytm-feat-help-dialog-desc";

  const helpTextElem = document.createElement("div");
  helpTextElem.id = "bytm-feat-help-dialog-text";
  helpTextElem.tabIndex = 0;
  // @ts-ignore
  const helpText: string | undefined = featInfo[curFeatKey!]?.helpText?.();
  helpTextElem.textContent = helpText ?? t(`feature_helptext_${curFeatKey}`);

  contElem.appendChild(featDescElem);
  contElem.appendChild(helpTextElem);

  return contElem;
}
