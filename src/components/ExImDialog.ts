import { BytmDialog, type BytmDialogOptions } from "./BytmDialog.js";
import { t } from "../utils/translations.js";
import { onInteraction } from "../utils/input.js";
import { copyToClipboard } from "../utils/dom.js";
import { createLongBtn, createRipple, showToast } from "./index.js";
import "./ExImDialog.css";

type ExImDialogOpts =
  & Omit<BytmDialogOptions, "renderHeader" | "renderBody" | "renderFooter">
  & {
    /** Title of the dialog */
    title: string | (() => (string | Promise<string>));
    /** Description when importing */
    descImport: string | (() => (string | Promise<string>));
    /** Description when exporting */
    descExport: string | (() => (string | Promise<string>));
    /** Function that gets called when the user imports data */
    onImport: (data: string) => void;
    /** The data to export (or a function that returns the data as string, sync or async) */
    exportData: string | (() => (string | Promise<string>));
    /** Optional variant of the data, used for special cases like when shift-clicking the copy button */
    exportDataSpecial?: string | (() => (string | Promise<string>));
  };

//#region class

/** Generic dialog for exporting and importing any string of data */
export class ExImDialog extends BytmDialog {
  constructor(options: ExImDialogOpts) {
    super({
      renderHeader: () => ExImDialog.renderHeader(options),
      renderBody: () => ExImDialog.renderBody(options),
      renderFooter: undefined,
      closeOnBgClick: true,
      closeOnEscPress: true,
      closeBtnEnabled: true,
      unmountOnClose: true,
      small: true,
      ...options,
    });
  }

  //#region header

  static async renderHeader(opts: ExImDialogOpts): Promise<HTMLElement> {
    const headerEl = document.createElement("h2");
    headerEl.classList.add("bytm-menu-title");
    headerEl.role = "heading";
    headerEl.ariaLevel = "1";
    headerEl.tabIndex = 0;
    headerEl.textContent = headerEl.ariaLabel = typeof opts.title === "function"
      ? await opts.title()
      : opts.title;

    return headerEl;
  }

  //#region body

  static async renderBody(opts: ExImDialogOpts): Promise<HTMLElement> {
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
      descEl.textContent = descEl.ariaLabel = typeof opts.descExport === "function"
        ? await opts.descExport()
        : opts.descExport;

      const dataEl = document.createElement("textarea");
      dataEl.classList.add("bytm-exim-dialog-data");
      dataEl.readOnly = true;
      dataEl.tabIndex = 0;
      dataEl.value = t("click_to_reveal");
      onInteraction(dataEl, async () => {
        dataEl.value = typeof opts.exportData === "function" ? await opts.exportData() : opts.exportData;
        dataEl.setSelectionRange(0, dataEl.value.length);
      });

      const exportCenterBtnCont = document.createElement("div");
      exportCenterBtnCont.classList.add("bytm-exim-dialog-center-btn-cont");

      const copyBtn = createRipple(await createLongBtn({
        title: t("copy_to_clipboard"),
        text: t("copy"),
        resourceName: "icon-copy",
        async onClick({ shiftKey }) {
          const copyData = shiftKey && opts.exportDataSpecial ? opts.exportDataSpecial : opts.exportData;
          copyToClipboard(typeof copyData === "function" ? await copyData() : copyData);
          await showToast({ message: t("copied_to_clipboard") });
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
      descEl.textContent = descEl.ariaLabel = typeof opts.descImport === "function"
        ? await opts.descImport()
        : opts.descImport;

      const dataEl = document.createElement("textarea");
      dataEl.classList.add("bytm-exim-dialog-data");
      dataEl.tabIndex = 0;

      const importCenterBtnCont = document.createElement("div");
      importCenterBtnCont.classList.add("bytm-exim-dialog-center-btn-cont");

      const importBtn = createRipple(await createLongBtn({
        title: t("start_import_tooltip"),
        text: t("import"),
        resourceName: "icon-upload",
        onClick: () => opts.onImport(dataEl.value),
      }));

      importCenterBtnCont.appendChild(importBtn);
      importPane.append(descEl, dataEl, importCenterBtnCont);
    }

    panesCont.append(exportPane, importPane);

    return panesCont;
  }
}
