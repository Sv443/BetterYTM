import { compress } from "@sv443-network/userutils";
import { compressionSupported, copyToClipboard, onInteraction, t } from "../utils/index.js";
import { BytmDialog } from "../components/index.js";
import { compressionFormat, scriptInfo } from "../constants.js";
import { formatVersion, getFeatures } from "../config.js";
import { siteEvents } from "src/siteEvents";

let exportDialog: BytmDialog | null = null;
let copiedTxtTimeout: ReturnType<typeof setTimeout> | undefined = undefined;
let lastUncompressedCfgString: string | undefined;

/** Creates and/or returns the export dialog */
export async function getExportDialog() {
  if(!exportDialog) {
    exportDialog = new BytmDialog({
      id: "export",
      width: 600,
      height: 500,
      closeBtnEnabled: true,
      closeOnBgClick: true,
      closeOnEscPress: true,
      small: true,
      renderHeader,
      renderBody,
      renderFooter,
    });

    exportDialog.on("close", () => {
      const textAreaElem = document.querySelector<HTMLTextAreaElement>("#bytm-export-dialog-bg #bytm-export-menu-textarea");
      if(textAreaElem) {
        textAreaElem.value = t("click_to_reveal_sensitive_info");
        textAreaElem.setAttribute("revealed", "false");
      }

      const copiedTxtElem = document.querySelector<HTMLElement>("#bytm-export-menu-copied-txt");
      if(copiedTxtElem) {
        copiedTxtElem.style.display = "none";
        if(typeof copiedTxtTimeout === "number") {
          clearTimeout(copiedTxtTimeout);
          copiedTxtTimeout = undefined;
        }
      }
    });
  }
  return exportDialog;
}

async function renderHeader() {
  const headerEl = document.createElement("h2");
  headerEl.classList.add("bytm-menu-title");
  headerEl.role = "heading";
  headerEl.ariaLevel = "1";
  headerEl.textContent = t("export_menu_title", scriptInfo.name);

  return headerEl;
}

async function renderBody() {
  const canCompress = await compressionSupported();

  const contElem = document.createElement("div");

  const textElem = document.createElement("div");
  textElem.id = "bytm-export-menu-text";
  textElem.textContent = t("export_hint");

  const textAreaElem = document.createElement("textarea");
  textAreaElem.id = "bytm-export-menu-textarea";
  textAreaElem.readOnly = true;
  lastUncompressedCfgString = JSON.stringify({ formatVersion, data: getFeatures() }, undefined, 2);
  textAreaElem.value = t("click_to_reveal_sensitive_info");
  textAreaElem.setAttribute("revealed", "false");

  const textAreaInteraction = async ({ shiftKey }: MouseEvent | KeyboardEvent) => {
    const cfgString = JSON.stringify({ formatVersion, data: getFeatures() });
    lastUncompressedCfgString = JSON.stringify({ formatVersion, data: getFeatures() }, undefined, 2);
    textAreaElem.value = shiftKey
      ? lastUncompressedCfgString
      : (canCompress
        ? await compress(cfgString, compressionFormat, "string")
        : cfgString
      );
    textAreaElem.setAttribute("revealed", "true");
  };

  onInteraction(textAreaElem, textAreaInteraction);

  siteEvents.on("configChanged", async (data) => {
    const textAreaElem = document.querySelector<HTMLTextAreaElement>("#bytm-export-menu-textarea");
    const cfgString = JSON.stringify({ formatVersion, data });
    lastUncompressedCfgString = JSON.stringify({ formatVersion, data }, undefined, 2);
    if(textAreaElem) {
      if(textAreaElem.getAttribute("revealed") !== "true")
        return;
      textAreaElem.value = canCompress ? await compress(cfgString, compressionFormat, "string") : cfgString;
    }
  });

  contElem.appendChild(textElem);
  contElem.appendChild(textAreaElem);

  return contElem;
}

async function renderFooter() {
  const footerElem = document.createElement("div");
  footerElem.classList.add("bytm-menu-footer-right");

  const copyBtnElem = document.createElement("button");
  copyBtnElem.classList.add("bytm-btn");
  copyBtnElem.textContent = t("copy_to_clipboard");
  copyBtnElem.ariaLabel = copyBtnElem.title = t("copy_config_tooltip");

  const copiedTextElem = document.createElement("span");
  copiedTextElem.id = "bytm-export-menu-copied-txt";
  copiedTextElem.role = "status";
  copiedTextElem.classList.add("bytm-menu-footer-copied");
  copiedTextElem.textContent = t("copied");
  copiedTextElem.style.display = "none";

  onInteraction(copyBtnElem, async (evt: MouseEvent | KeyboardEvent) => {
    evt?.bubbles && evt.stopPropagation();
    copyToClipboard(
      evt.shiftKey && lastUncompressedCfgString
        ? lastUncompressedCfgString
        : await compress(JSON.stringify({ formatVersion, data: getFeatures() }), compressionFormat, "string")
    );
    copiedTextElem.style.display = "inline-block";
    if(typeof copiedTxtTimeout === "undefined") {
      copiedTxtTimeout = setTimeout(() => {
        copiedTextElem.style.display = "none";
        copiedTxtTimeout = undefined;
      }, 3000);
    }
  });

  // flex-direction is row-reverse
  footerElem.appendChild(copyBtnElem);
  footerElem.appendChild(copiedTextElem);

  return footerElem;
}
