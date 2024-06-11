import { BytmDialog, type BytmDialogOptions } from "./BytmDialog.js";
import { t, type TrKey } from "../utils/translations.js";
import { scriptInfo } from "../constants.js";
import { onInteraction } from "../utils/input.js";
import { copyToClipboard } from "../utils/dom.js";
import { createLongBtn, createRipple, showToast } from "./index.js";
import "./ExportImportDialog.css";

type ExImDialogOpts =
  Omit<BytmDialogOptions, "renderHeader" | "renderBody" | "renderFooter">
  & {
    /** The data to export (or a function that returns the data as string, sync or async) */
    exportData: string | (() => string | Promise<string>);
    /** Optional variant of the data, used for special cases like when shift-clicking the copy button */
    exportDataSpecial?: string | (() => string | Promise<string>);
    /** Function that gets called when the user imports data */
    onImport: (data: string) => void;
    /** Translation key for the dialog title */
    trKeyTitle: TrKey | (string & {});
    /** Translation key for the dialog description when importing */
    trKeyDescImport: TrKey | (string & {});
    /** Translation key for the dialog description when exporting */
    trKeyDescExport: TrKey | (string & {});
    /** Whether the data should be hidden by default when exporting and importing */
    dataHidden?: boolean;
  };

type ExImMode = "export" | "import";

/** Generic dialog for exporting and importing any string of data */
export class ExImDialog extends BytmDialog {
  public mode: ExImMode = "export";

  constructor(options: ExImDialogOpts) {
    super({
      renderHeader: () => ExImDialog.renderHeader(options),
      renderBody: () => ExImDialog.renderBody(options),
      closeOnBgClick: true,
      closeOnEscPress: true,
      closeBtnEnabled: true,
      destroyOnClose: true,
      small: true,
      ...options,
    });
  }

  static async renderHeader(opts: ExImDialogOpts): Promise<HTMLElement> {
    const headerEl = document.createElement("h2");
    headerEl.classList.add("bytm-menu-title");
    headerEl.role = "heading";
    headerEl.ariaLevel = "1";
    headerEl.tabIndex = 0;
    headerEl.textContent = headerEl.ariaLabel = t(opts.trKeyTitle as "_", scriptInfo.name);

    return headerEl;
  }

  static async renderBody(opts: ExImDialogOpts): Promise<HTMLElement> {
    // TODO: body
    // two horizontal panes:
    // - export:
    //   - description element with trKeyDescExport
    //   - textarea with data, if dataHidden is true, show a button to reveal it
    //   - button to copy the data to clipboard
    // - import:
    //   - description element with trKeyDescImport
    //   - textarea for user to paste data, if dataHidden is true, use password masking

    const panesCont = document.createElement("div");
    panesCont.classList.add("bytm-exim-dialog-panes-cont");

    //#region export

    const exportPane = document.createElement("div");
    exportPane.classList.add("bytm-exim-dialog-pane", "export");

    {
      const descEl = document.createElement("p");
      descEl.classList.add("bytm-exim-dialog-desc");
      descEl.role = "note";
      descEl.tabIndex = 0;
      descEl.textContent = descEl.ariaLabel = t(opts.trKeyDescExport);

      const dataEl = document.createElement("textarea");
      dataEl.classList.add("bytm-exim-dialog-data");
      dataEl.readOnly = true;
      dataEl.tabIndex = 0;
      dataEl.value = t("click_to_reveal");
      onInteraction(dataEl, async () => {
        dataEl.value = typeof opts.exportData === "function" ? await opts.exportData() : opts.exportData;
      });

      const exportCenterBtnCont = document.createElement("div");
      exportCenterBtnCont.classList.add("bytm-exim-dialog-center-btn-cont");

      const copyBtn = createRipple(await createLongBtn({
        title: t("copy_hidden_value"),
        text: t("copy"),
        resourceName: "icon-experimental",
        async onClick({ shiftKey }) {
          const copyData = shiftKey && opts.exportDataSpecial ? opts.exportDataSpecial : opts.exportData;
          copyToClipboard(typeof copyData === "function" ? await copyData() : copyData);
          await showToast({
            position: "bl",
            message: t("copied_to_clipboard"),
          });
        },
      }));

      exportCenterBtnCont.appendChild(copyBtn);
      exportPane.append(descEl, dataEl, exportCenterBtnCont);
    }

    //#region import

    const importPane = document.createElement("div");
    importPane.classList.add("bytm-exim-dialog-pane", "import");

    {
      const descEl = document.createElement("p");
      descEl.classList.add("bytm-exim-dialog-desc");
      descEl.role = "note";
      descEl.tabIndex = 0;
      descEl.textContent = descEl.ariaLabel = t(opts.trKeyDescImport);

      const dataEl = document.createElement("textarea");
      dataEl.classList.add("bytm-exim-dialog-data");
      dataEl.tabIndex = 0;

      const importCenterBtnCont = document.createElement("div");
      importCenterBtnCont.classList.add("bytm-exim-dialog-center-btn-cont");

      const importBtn = createRipple(await createLongBtn({
        title: t("start_import_tooltip"),
        text: t("import"),
        resourceName: "icon-experimental",
        onClick: () => opts.onImport(dataEl.value),
      }));

      importCenterBtnCont.appendChild(importBtn);
      importPane.append(descEl, dataEl, importCenterBtnCont);
    }

    panesCont.append(exportPane, importPane);

    // TODO: footer
    // - when export:
    //   - copy button
    //     - on click, copy exportData to clipboard
    //     - on shift-click, copy exportDataSpecial to clipboard, fall back to exportData
    // - when import:
    //   - import button

    return panesCont;
  }
}
