import { getChangelogHtmlWithDetails, setInnerHtml, t } from "../utils/index.js";
import { BytmDialog } from "../components/BytmDialog.js";
import { scriptInfo } from "../constants.js";

let changelogDialog: BytmDialog | null = null;

/** Creates and/or returns the changelog dialog */
export async function getChangelogDialog() {
  if(!changelogDialog) {
    changelogDialog = new BytmDialog({
      id: "changelog",
      width: 1000,
      height: 800,
      closeBtnEnabled: true,
      closeOnBgClick: true,
      closeOnEscPress: true,
      small: true,
      verticalAlign: "top",
      renderHeader,
      renderBody,
    });

    changelogDialog.on("render", () => {
      const mdContElem = document.querySelector<HTMLElement>("#bytm-changelog-dialog-text");
      if(!mdContElem)
        return;

      const anchors = mdContElem.querySelectorAll<HTMLAnchorElement>("a");
      for(const anchor of anchors) {
        anchor.ariaLabel = anchor.title = anchor.href;
        anchor.target = "_blank";
      }

      const firstDetails = mdContElem.querySelector<HTMLDetailsElement>("details");
      if(firstDetails)
        firstDetails.open = true;

      const kbdElems = mdContElem.querySelectorAll<HTMLElement>("kbd");
      for(const kbdElem of kbdElems)
        kbdElem.addEventListener("selectstart", (e) => e.preventDefault());
    });
  }
  return changelogDialog;
}

async function renderHeader() {
  const headerEl = document.createElement("h2");
  headerEl.classList.add("bytm-dialog-title");
  headerEl.role = "heading";
  headerEl.ariaLevel = "1";
  headerEl.tabIndex = 0;
  headerEl.textContent = headerEl.ariaLabel = t("changelog_menu_title", scriptInfo.name);

  return headerEl;
}

async function renderBody() {
  const contElem = document.createElement("div");

  const mdContElem = document.createElement("div");
  mdContElem.id = "bytm-changelog-dialog-text";
  mdContElem.classList.add("bytm-markdown-container");
  setInnerHtml(mdContElem, await getChangelogHtmlWithDetails());

  contElem.appendChild(mdContElem);

  return contElem;
}
