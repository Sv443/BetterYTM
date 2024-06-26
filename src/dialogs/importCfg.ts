import { decompress } from "@sv443-network/userutils";
import { error, t, warn } from "../utils";
import { BytmDialog } from "../components";
import { compressionFormat, scriptInfo } from "../constants";
import { emitSiteEvent } from "../siteEvents";
import { formatVersion, getFeatures, migrations, setFeatures } from "../config";
import { disableBeforeUnload } from "../features";

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
  headerEl.textContent = t("import_menu_title", scriptInfo.name);

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
      /** Tries to parse an uncompressed or compressed input string as a JSON object */
      const decode = async (input: string) => {
        try {
          return JSON.parse(input);
        }
        catch {
          try {
            return JSON.parse(await decompress(input, compressionFormat, "string"));
          }
          catch(err) {
            warn("Couldn't import configuration:", err);
            return null;
          }
        }
      };
      const parsed = await decode(textAreaElem.value.trim());
      if(typeof parsed !== "object")
        return alert(t("import_error_invalid"));
      if(typeof parsed.formatVersion !== "number")
        return alert(t("import_error_no_format_version"));
      if(typeof parsed.data !== "object" || parsed.data === null || Object.keys(parsed.data).length === 0)
        return alert(t("import_error_no_data"));
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
        return alert(t("import_error_wrong_format_version", formatVersion, parsed.formatVersion));

      await setFeatures({ ...getFeatures(), ...parsed.data });

      if(confirm(t("import_success_confirm_reload"))) {
        disableBeforeUnload();
        return location.reload();
      }

      emitSiteEvent("rebuildCfgMenu", parsed.data);

      importDialog?.close();
    }
    catch(err) {
      warn("Couldn't import configuration:", err);
      alert(t("import_error_invalid"));
    }
  });

  footerElem.appendChild(importBtnElem);

  return footerElem;
}
