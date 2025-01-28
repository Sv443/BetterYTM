import { consumeStringGen, type SerializedDataStore } from "@sv443-network/userutils";
import { copyToClipboard, downloadFile, error, onInteraction, t } from "../utils/index.js";
import { createLongBtn, createRipple, showToast } from "../components/index.js";
import { ExImDialog, type ExImDialogOpts } from "../components/ExImDialog.js";
import { getSerializerStoresIds, getStoreSerializer } from "../serializer.js";
import packageJson from "../../package.json" with { type: "json" };

let allDataExImDialog: ExImDialog | undefined;

/** Creates and/or returns the AllDataExIm dialog */
export async function getAllDataExImDialog() {
  if(!allDataExImDialog) {
    const eximOpts: ExImDialogOpts = {
      id: "all-data-exim",
      width: 800,
      height: 1000,
      closeBtnEnabled: true,
      closeOnBgClick: true,
      closeOnEscPress: true,
      destroyOnClose: true,
      removeListenersOnDestroy: false,
      small: true,
      verticalAlign: "top",
      title: () => t("all_data_exim_title"),
      descExport: () => t("all_data_exim_export_desc"),
      descImport: () => t("all_data_exim_import_desc"),
      exportData: async () => await getStoreSerializer().serialize(),
      onImport,
    };

    allDataExImDialog = new ExImDialog({
      ...eximOpts,
      renderBody: async () => await renderBody(eximOpts),
    });
  }
  return allDataExImDialog;
}

/** Creates and/or returns the AutoLikeExIm dialog */
async function onImport(data: string) {
  try {
    const serializer = getStoreSerializer();
    await serializer.deserialize(data);

    showToast(t("import_success"));
  }
  catch(err) {
    error(err);
    showToast(t("import_error"));
  }
}

async function renderBody(opts: ExImDialogOpts): Promise<HTMLElement> {
  const panesCont = document.createElement("div");
  panesCont.classList.add("bytm-all-data-exim-dialog-panes-cont");

  //#region export

  const exportPane = document.createElement("div");
  exportPane.classList.add("bytm-all-data-exim-dialog-pane", "export");

  {
    const descEl = document.createElement("p");
    descEl.classList.add("bytm-all-data-exim-dialog-desc");
    descEl.role = "note";
    descEl.tabIndex = 0;
    descEl.textContent = descEl.ariaLabel = await consumeStringGen(opts.descExport);

    const exportPartsCont = document.createElement("div");
    exportPartsCont.classList.add("bytm-all-data-exim-dialog-export-parts-cont");

    const dataEl = document.createElement("textarea");
    dataEl.classList.add("bytm-all-data-exim-dialog-data");
    dataEl.readOnly = true;
    dataEl.tabIndex = 0;
    dataEl.value = t("click_to_reveal");

    for(const id of getSerializerStoresIds()) {
      const rowEl = document.createElement("div");
      rowEl.classList.add("bytm-all-data-exim-dialog-export-part-row");
      rowEl.title = t(`data_stores.disable.${id}`);

      const chkEl = document.createElement("input");
      chkEl.type = "checkbox";
      chkEl.id = `bytm-all-data-exim-dialog-export-part-${id}`;
      chkEl.dataset.storeId = id;
      chkEl.checked = true;
      chkEl.title = t(`data_stores.disable.${id}`);

      chkEl.addEventListener("change", async () => {
        if(dataEl.classList.contains("revealed"))
          dataEl.value = filter(await consumeStringGen(opts.exportData));
      });

      const lblEl = document.createElement("label");
      lblEl.htmlFor = chkEl.id;
      lblEl.textContent = t(`data_stores.disable.${id}`);

      rowEl.append(chkEl, lblEl);
      exportPartsCont.appendChild(rowEl);
    }

    const filter = (data: string) => {
      const exportIds: string[] = [];

      for(const chkEl of exportPartsCont.querySelectorAll<HTMLInputElement>("input[type=checkbox]"))
        chkEl.checked && chkEl.dataset.storeId && exportIds.push(chkEl.dataset.storeId);

      return JSON.stringify(
        (JSON.parse(data) as SerializedDataStore[])
          .filter(({ id }) => exportIds.includes(id)),
        undefined,
        2,
      );
    };

    onInteraction(dataEl, async () => {
      dataEl.classList.add("revealed");
      dataEl.value = filter(await consumeStringGen(opts.exportData));
      dataEl.setSelectionRange(0, dataEl.value.length);
    });

    const exportCenterBtnCont = document.createElement("div");
    exportCenterBtnCont.classList.add("bytm-all-data-exim-dialog-center-btn-cont");

    const cpBtn = createRipple(await createLongBtn({
      title: t("copy_to_clipboard"),
      text: t("copy"),
      resourceName: "icon-copy",
      async onClick({ shiftKey }) {
        const copyData = shiftKey && opts.exportDataSpecial ? opts.exportDataSpecial : opts.exportData;
        copyToClipboard(filter(await consumeStringGen(copyData)));
        await showToast({ message: t("copied_to_clipboard") });
      },
    }));

    const dlBtn = createRipple(await createLongBtn({
      title: t("download_file"),
      text: t("download"),
      resourceName: "icon-arrow_down",
      async onClick({ shiftKey }) {
        const dlData = filter(await consumeStringGen(shiftKey && opts.exportDataSpecial ? opts.exportDataSpecial : opts.exportData));
        copyToClipboard(dlData);

        const pad = (num: number, len = 2) => String(num).padStart(len, "0");

        const d = new Date();
        const dateStr = `${pad(d.getFullYear(), 4)}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}_${pad(d.getHours())}-${pad(d.getMinutes())}`;
        const fileName = `BetterYTM ${packageJson.version} data export ${dateStr}.json`;

        downloadFile(fileName, dlData, "application/json");
        await showToast({ message: t("downloaded_file_hint") });
      },
    }));

    exportCenterBtnCont.append(cpBtn, dlBtn);
    exportPane.append(descEl, dataEl, exportPartsCont, exportCenterBtnCont);
  }

  //#region import

  const importPane = document.createElement("div");
  importPane.classList.add("bytm-all-data-exim-dialog-pane", "import");

  {
    // TODO: file upload field
    // TODO: select which stores to import

    const descEl = document.createElement("p");
    descEl.classList.add("bytm-all-data-exim-dialog-desc");
    descEl.role = "note";
    descEl.tabIndex = 0;
    descEl.textContent = descEl.ariaLabel = await consumeStringGen(opts.descImport);

    const dataEl = document.createElement("textarea");
    dataEl.classList.add("bytm-all-data-exim-dialog-data");
    dataEl.tabIndex = 0;

    const importCenterBtnCont = document.createElement("div");
    importCenterBtnCont.classList.add("bytm-all-data-exim-dialog-center-btn-cont");

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
