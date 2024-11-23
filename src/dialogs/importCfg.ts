import { error, tryToDecompressAndParse, t, warn, log, reloadTab } from "../utils/index.js";
import { BytmDialog } from "../components/index.js";
import { scriptInfo } from "../constants.js";
import { emitSiteEvent } from "../siteEvents.js";
import { formatVersion, getFeatures, migrations, setFeatures } from "../config.js";
import { disableBeforeUnload } from "../features/index.js";
import { FeatureConfig } from "src/types.js";
import { showPrompt } from "./prompt.js";

let importDialog: BytmDialog | null = null;

/** Creates and/or returns the import dialog */
export async function getImportDialog() {
  if(!importDialog) {
    importDialog = new BytmDialog({
      id: "import",
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
  }
  return importDialog;
}

async function renderHeader() {
  const headerEl = document.createElement("h2");
  headerEl.classList.add("bytm-dialog-title");
  headerEl.role = "heading";
  headerEl.ariaLevel = "1";
  headerEl.tabIndex = 0;
  headerEl.textContent = headerEl.ariaLabel = t("import_menu_title", scriptInfo.name);

  return headerEl;
}

async function renderBody() {
  const contElem = document.createElement("div");

  const textElem = document.createElement("div");
  textElem.id = "bytm-import-menu-text";
  textElem.textContent = t("import_hint");

  const textAreaElem = document.createElement("textarea");
  textAreaElem.id = "bytm-import-menu-textarea";

  contElem.appendChild(textElem);
  contElem.appendChild(textAreaElem);

  return contElem;
}

async function renderFooter() {
  const footerElem = document.createElement("div");
  footerElem.classList.add("bytm-menu-footer-right");

  const importBtnElem = document.createElement("button");
  importBtnElem.classList.add("bytm-btn");
  importBtnElem.textContent = t("import");
  importBtnElem.ariaLabel = importBtnElem.title = t("start_import_tooltip");

  importBtnElem.addEventListener("click", async (evt) => {
    evt?.bubbles && evt.stopPropagation();
    const textAreaElem = document.querySelector<HTMLTextAreaElement>("#bytm-import-menu-textarea");
    if(!textAreaElem)
      return warn("Couldn't find import menu textarea element");
    try {
      const parsed = await tryToDecompressAndParse<{ data: FeatureConfig, formatVersion: number }>(textAreaElem.value.trim());
      log("Trying to import config object:", parsed);

      if(!parsed || typeof parsed !== "object")
        return await showPrompt({ type: "alert", message: t("import_error_invalid") });
      if(typeof parsed.formatVersion !== "number")
        return await showPrompt({ type: "alert", message: t("import_error_no_format_version") });
      if(typeof parsed.data !== "object" || parsed.data === null || Object.keys(parsed.data).length === 0)
        return await showPrompt({ type: "alert", message: t("import_error_no_data") });
      if(parsed.formatVersion < formatVersion) {
        let newData = JSON.parse(JSON.stringify(parsed.data));
        const sortedMigrations = Object.entries(migrations)
          .sort(([a], [b]) => Number(a) - Number(b));

        let curFmtVer = Number(parsed.formatVersion);

        for(const [fmtVer, migrationFunc] of sortedMigrations) {
          const ver = Number(fmtVer);
          if(curFmtVer < formatVersion && curFmtVer < ver) {
            try {
              const migRes = JSON.parse(JSON.stringify(migrationFunc(newData)));
              newData = migRes instanceof Promise ? await migRes : migRes;
              curFmtVer = ver;
            }
            catch(err) {
              error(`Error while running migration function for format version ${fmtVer}:`, err);
            }
          }
        }
        parsed.formatVersion = curFmtVer;
        parsed.data = newData;
      }
      else if(parsed.formatVersion !== formatVersion)
        return await showPrompt({ type: "alert", message: t("import_error_wrong_format_version", formatVersion, parsed.formatVersion) });

      await setFeatures({ ...getFeatures(), ...parsed.data });

      if(await showPrompt({ type: "confirm", message: t("import_success_confirm_reload") })) {
        disableBeforeUnload();
        return reloadTab();
      }

      emitSiteEvent("rebuildCfgMenu", parsed.data);

      importDialog?.close();
    }
    catch(err) {
      warn("Couldn't import configuration:", err);
      await showPrompt({ type: "alert", message: t("import_error_invalid") });
    }
  });

  footerElem.appendChild(importBtnElem);

  return footerElem;
}
