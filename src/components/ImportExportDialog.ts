import { BytmDialog, type BytmDialogOptions } from "./BytmDialog.js";
import type { TrKey } from "../utils/translations.js";

type ImportExportDialogOpts =
  Omit<BytmDialogOptions, "renderHeader" | "renderBody" | "renderFooter">
  & {
    /** The data to export (or a function that returns the data as string, sync or async) */
    exportData: string | (() => string | Promise<string>);
    /** Optional variant of the data, used for special cases like when shift-clicking the copy button */
    exportDataSpecial?: string | (() => string | Promise<string>);
    /** Function that gets called when the user imports data */
    onImport: (data: string) => void;
    /** Translation key for the dialog title */
    trKeyTitle: TrKey;
    /** Translation key for the dialog description when importing */
    trKeyDescImport: TrKey;
    /** Translation key for the dialog description when exporting */
    trKeyDescExport: TrKey;
    /** Whether the data should be hidden by default when exporting and importing */
    dataHidden?: boolean;
  };

/** Generic dialog for importing and exporting any string of data */
export class ImportExportDialog extends BytmDialog {
  constructor(options: ImportExportDialogOpts) {
    super({
      renderHeader: () => ImportExportDialog.renderHeader(options),
      renderBody: () => ImportExportDialog.renderBody(options),
      renderFooter: () => ImportExportDialog.renderFooter(options),
      closeOnBgClick: true,
      closeOnEscPress: true,
      closeBtnEnabled: true,
      destroyOnClose: true,
      small: true,
      ...options,
    });
  }

  static async renderHeader(_options: ImportExportDialogOpts): Promise<HTMLElement> {
    // TODO:
    // render header with trKeyTitle

    return document.createElement("div");
  }

  static async renderBody(_opts: ImportExportDialogOpts): Promise<HTMLElement> {
    // TODO:
    // two horizontal tabs:
    // - export:
    //   - description element with trKeyDescExport
    //   - textarea with data, if dataHidden is true, show a button to reveal it
    //   - button to copy the data to clipboard
    // - import:
    //   - description element with trKeyDescImport
    //   - textarea for user to paste data, if dataHidden is true, use password masking

    return document.createElement("div");
  }

  static async renderFooter(_options: ImportExportDialogOpts): Promise<HTMLElement> {
    // TODO:
    // - when export:
    //   - copy button
    //     - on click, copy exportData to clipboard
    //     - on shift-click, copy exportDataSpecial to clipboard, fall back to exportData
    // - when import:
    //   - import button

    return document.createElement("div");
  }
}
