import { compress, debounce } from "@sv443-network/coreutils";
import { compressionSupported, getDomain, isValidChannelId, parseChannelIdFromUrl, tryToDecompressAndParse } from "@util/misc.ts";
import { loggers } from "@util/logging.ts";
import { t, tp } from "@util/translations.ts";
import { onInteraction } from "@util/input.ts";
import { autoLikeStore, initAutoLikeStore } from "@feat/index.ts";
import { showPrompt } from "@dialog/prompt.ts";
import { ExImDialog } from "@comp/ExImDialog.ts";
import { BytmDialog } from "@comp/BytmDialog.ts";
import { showToast } from "@comp/toast.ts";
import { createToggleInput } from "@comp/toggleInput.ts";
import { createCircularBtn } from "@comp/circularButton.ts";
import { emitSiteEvent, siteEvents } from "@/siteEvents.ts";
import { compressionFormat } from "@/constants.ts";
import type { AutoLikeData } from "@/types.ts";
import "@dialog/autoLike.css";

let autoLikeDialog: BytmDialog | null = null;
let autoLikeExImDialog: ExImDialog | null = null;

// TODO:FIXME: dialog isnt properly closed?
// to reproduce: open dialog, create new entry, confirm with enter, close dialog -> cfg menu is still inert and dialog is still open for some reason

/** Creates and/or returns the auto-like dialog */
export async function getAutoLikeDialog() {
  if(!autoLikeDialog) {
    await initAutoLikeStore();

    autoLikeDialog = new BytmDialog({
      id: "auto-like-channels",
      width: 700,
      height: 1200,
      closeBtnEnabled: true,
      closeOnBgClick: true,
      closeOnEscPress: true,
      destroyOnClose: true,
      removeListenersOnDestroy: false,
      small: true,
      verticalAlign: "top",
      renderHeader,
      renderBody,
      renderFooter,
    });

    siteEvents.on("autoLikeChannelsUpdated", async () => {
      try {
        if(autoLikeExImDialog?.isOpen())
          autoLikeExImDialog.unmount();
        if(autoLikeDialog?.isOpen()) {
          autoLikeDialog.unmount();
          await autoLikeDialog.open();
          loggers.dialog.log("Auto-like channels updated, refreshed dialog");
        }
      }
      catch(err) {
        loggers.dialog.error("Couldn't refresh auto-like channels dialog:", err);
      }
    });

    autoLikeDialog.on("open", () => document.querySelector<HTMLElement>(".bytm-auto-like-channels-searchbar")?.focus());
    autoLikeDialog.on("close", () => emitSiteEvent("autoLikeChannelsUpdated"));
  }

  if(!autoLikeExImDialog) {
    autoLikeExImDialog = new ExImDialog({
      id: "auto-like-channels-export-import",
      width: 800,
      height: 600,
      // try to compress the data if possible
      exportData: async () => await compressionSupported()
        ? await compress(JSON.stringify(autoLikeStore.getData()), compressionFormat, "string")
        : JSON.stringify(autoLikeStore.getData()),
      // copy plain when shift-clicking the copy button
      exportDataSpecial: () => JSON.stringify(autoLikeStore.getData()),
      async onImport(data) {
        try {
          const parsed = await tryToDecompressAndParse<AutoLikeData>(data);
          loggers.dialog.log("Trying to import auto-like data:", parsed);

          if(!parsed || typeof parsed !== "object")
            return await showPrompt({ type: "alert", message: t("import_error.invalid") });
          if(!parsed.channels || typeof parsed.channels !== "object" || Object.keys(parsed.channels).length === 0)
            return await showPrompt({ type: "alert", message: t("import_error.no_data") });

          await autoLikeStore.setData(parsed);
          emitSiteEvent("autoLikeChannelsUpdated");

          showToast({ message: t("import_success") });
          autoLikeExImDialog?.unmount();
        }
        catch(err) {
          loggers.dialog.error("Couldn't import auto-like channels data:", err);
        }
      },
      title: () => t("auto_like_export_import_title"),
      descImport: () => t("auto_like_import_desc"),
      descExport: () => t("auto_like_export_desc"),
    });
  }

  return autoLikeDialog;
}

//#region header

async function renderHeader() {
  const headerEl = document.createElement("h2");
  headerEl.classList.add("bytm-dialog-title");
  headerEl.role = "heading";
  headerEl.ariaLevel = "1";
  headerEl.tabIndex = 0;
  headerEl.textContent = headerEl.ariaLabel = t("auto_like_channels_dialog_title");

  return headerEl;
}

//#region body

async function renderBody() {
  const contElem = document.createElement("div");

  const descriptionEl = document.createElement("p");
  descriptionEl.classList.add("bytm-auto-like-channels-desc");
  descriptionEl.textContent = descriptionEl.ariaLabel = t("auto_like_channels_dialog_desc");
  descriptionEl.tabIndex = 0;
  contElem.appendChild(descriptionEl);

  const searchCont = document.createElement("div");
  searchCont.classList.add("bytm-auto-like-channels-search-cont");
  contElem.appendChild(searchCont);

  const searchContLeftSideEl = document.createElement("div");
  searchContLeftSideEl.classList.add("left-side");
  searchCont.appendChild(searchContLeftSideEl);

  const searchContRightSideEl = document.createElement("div");
  searchContRightSideEl.tabIndex = 0;
  searchContRightSideEl.classList.add("right-side");
  searchCont.appendChild(searchContRightSideEl);

  const searchbarEl = document.createElement("input");

  const updateCountElem = () => {
    const count = searchbarEl.value.trim().length === 0
      ? autoLikeStore.getData().channels.length
      : document.querySelectorAll<HTMLDivElement>(".bytm-auto-like-channel-row:not(.hidden)").length;
    searchContRightSideEl.innerText = searchContRightSideEl.ariaLabel = tp("auto_like_channels_entries_count", count, count);
  };
  siteEvents.on("autoLikeChannelsUpdated", updateCountElem);
  updateCountElem();

  searchbarEl.classList.add("bytm-auto-like-channels-searchbar");
  searchbarEl.placeholder = searchbarEl.ariaDescription = t("search_placeholder");
  searchbarEl.type = searchbarEl.role = "search";
  searchbarEl.tabIndex = 0;
  searchbarEl.autofocus = true;
  searchbarEl.autocomplete = searchbarEl.autocapitalize = "off";
  searchbarEl.spellcheck = false;

  searchbarEl.addEventListener("input", debounce(() => {
    const searchVal = searchbarEl.value.trim().toLowerCase();
    const rows = document.querySelectorAll<HTMLDivElement>(".bytm-auto-like-channel-row");
    for(const row of rows) {
      const sanit = (str?: string) => str?.trim().toLowerCase().replace(/\s/g, "");
      const name = sanit(row.querySelector(".bytm-auto-like-channel-name")?.textContent) ?? "";
      const id = sanit(row.querySelector(".bytm-auto-like-channel-id")?.textContent) ?? "";
      row.classList.toggle("hidden", !name.includes(searchVal) && !id.includes(searchVal));
    }
    updateCountElem();
  }, 300));

  searchContLeftSideEl.appendChild(searchbarEl);

  const searchClearEl = document.createElement("button");
  searchClearEl.classList.add("bytm-auto-like-channels-search-clear", "bytm-btn");
  searchClearEl.title = searchClearEl.ariaLabel = t("search_clear");
  searchClearEl.tabIndex = 0;
  searchClearEl.innerText = "×";

  onInteraction(searchClearEl, () => {
    searchbarEl.value = "";
    searchbarEl.dispatchEvent(new Event("input"));
  });

  searchContLeftSideEl.appendChild(searchClearEl);

  const channelListCont = document.createElement("div");
  channelListCont.id = "bytm-auto-like-channels-list";

  const setChannelEnabled = debounce(
    (id: string, enabled: boolean) => {
      autoLikeStore.setData({
        channels: autoLikeStore.getData().channels
          .map((ch) => ch.id === id ? { ...ch, enabled } : ch),
      });
    },
    100
  );

  const sortedChannels = autoLikeStore
    .getData().channels
    .sort((a, b) => a.name.localeCompare(b.name));

  for(const { name: chanName, id: chanId, enabled } of sortedChannels) {
    const rowElem = document.createElement("div");
    rowElem.classList.add("bytm-auto-like-channel-row");

    const leftCont = document.createElement("div");
    leftCont.classList.add("bytm-auto-like-channel-row-left-cont");

    const nameLabelEl = document.createElement("label");
    nameLabelEl.ariaLabel = nameLabelEl.title = chanName;
    nameLabelEl.htmlFor = `bytm-auto-like-channel-list-toggle-${chanId}`;
    nameLabelEl.classList.add("bytm-auto-like-channel-name-label");

    const chanHref = (!chanId.startsWith("@") && getDomain() === "ytm")
      ? `https://music.youtube.com/channel/${chanId}`
      : `https://youtube.com/${chanId.startsWith("@") ? chanId : `channel/${chanId}`}`;

    const nameElem = document.createElement("a");
    nameElem.classList.add("bytm-auto-like-channel-name", "bytm-link");
    nameElem.ariaLabel = nameElem.textContent = chanName;
    nameElem.href = chanHref;
    nameElem.target = "_blank";
    nameElem.rel = "noopener noreferrer";
    nameElem.tabIndex = 0;

    const idElem = document.createElement("a");
    idElem.classList.add("bytm-auto-like-channel-id", "bytm-link");
    idElem.textContent = idElem.title = chanId;
    idElem.href = chanHref;
    idElem.target = "_blank";
    idElem.rel = "noopener noreferrer";
    idElem.tabIndex = 0;

    nameLabelEl.appendChild(nameElem);
    nameLabelEl.appendChild(idElem);

    const toggleElem = await createToggleInput({
      id: `auto-like-channel-list-${chanId}`,
      labelPos: "off",
      initialValue: enabled,
      onChange: (en) => setChannelEnabled(chanId, en),
    });
    toggleElem.classList.add("bytm-auto-like-channel-toggle");
    toggleElem.title = toggleElem.ariaLabel = t("auto_like_channel_toggle_tooltip", chanName);

    const btnCont = document.createElement("div");
    btnCont.classList.add("bytm-auto-like-channel-row-btn-cont");

    const editBtn = await createCircularBtn({
      resourceName: "icon-edit",
      title: t("edit_entry"),
      async onClick() {
        const newNamePr = (await showPrompt({ type: "prompt", message: t("auto_like_channel_edit_name_prompt"), defaultValue: chanName }))?.trim();
        if(!newNamePr || newNamePr.length === 0)
          return;
        const newName = newNamePr.length > 0 ? newNamePr : chanName;

        const newIdPr = (await showPrompt({ type: "prompt", message: t("auto_like_channel_edit_id_prompt"), defaultValue: chanId }))?.trim();
        if(!newIdPr || newIdPr.length === 0)
          return;
        const newId = newIdPr.length > 0 ? getChannelIdFromPrompt(newIdPr) ?? chanId : chanId;

        await autoLikeStore.setData({
          channels: autoLikeStore.getData().channels
            .map((ch) => ch.id === chanId ? { ...ch, name: newName, id: newId } : ch),
        });

        emitSiteEvent("autoLikeChannelsUpdated");
      },
    });
    btnCont.appendChild(editBtn);

    const removeBtn = await createCircularBtn({
      resourceName: "icon-delete",
      title: t("remove_entry"),
      onClick() {
        autoLikeStore.setData({
          channels: autoLikeStore.getData().channels.filter((ch) => ch.id !== chanId),
        });
        rowElem.remove();
        emitSiteEvent("autoLikeChannelsUpdated");
      },
    });
    btnCont.appendChild(removeBtn);

    leftCont.appendChild(toggleElem);
    leftCont.appendChild(nameLabelEl);

    rowElem.appendChild(leftCont);
    rowElem.appendChild(btnCont);

    channelListCont.appendChild(rowElem);
  }

  contElem.appendChild(channelListCont);

  return contElem;
}

//#region footer

function renderFooter() {
  const wrapperEl = document.createElement("div");
  wrapperEl.classList.add("bytm-auto-like-channels-footer-wrapper");

  const addNewBtnElem = document.createElement("button");
  addNewBtnElem.classList.add("bytm-btn");
  addNewBtnElem.textContent = t("new_entry");
  addNewBtnElem.ariaLabel = addNewBtnElem.title = t("new_entry_tooltip");
  wrapperEl.appendChild(addNewBtnElem);

  const rightBtnsCont = document.createElement("div");
  rightBtnsCont.classList.add("bytm-flex-row");

  const deleteAllBtnElem = document.createElement("button");
  deleteAllBtnElem.classList.add("bytm-btn");
  deleteAllBtnElem.textContent = t("delete_all");
  deleteAllBtnElem.ariaLabel = deleteAllBtnElem.title = t("auto_like_delete_all_tooltip");
  rightBtnsCont.appendChild(deleteAllBtnElem);

  const importExportBtnElem = document.createElement("button");
  importExportBtnElem.classList.add("bytm-btn");
  importExportBtnElem.textContent = t("export_import");
  importExportBtnElem.ariaLabel = importExportBtnElem.title = t("auto_like_export_or_import_tooltip");
  rightBtnsCont.appendChild(importExportBtnElem);

  wrapperEl.appendChild(rightBtnsCont);
  
  onInteraction(addNewBtnElem, () => addAutoLikeEntryPrompts());
  onInteraction(deleteAllBtnElem, () => deleteAllAutoLikeChannelsPrompt());
  onInteraction(importExportBtnElem, () => openImportExportAutoLikeChannelsDialog());

  return wrapperEl;
}

async function openImportExportAutoLikeChannelsDialog() {
  await autoLikeExImDialog?.open();
}

// #region delete all prompt

async function deleteAllAutoLikeChannelsPrompt() {
  const confirm = await showPrompt({
    type: "confirm",
    message: t("auto_like_delete_all_confirm"),
  });

  if(!confirm)
    return;

  await autoLikeStore.setData({ channels: [] });
  emitSiteEvent("autoLikeChannelsUpdated");

  const unsub = autoLikeDialog?.on("clear", async () => {
    unsub?.();
    await autoLikeDialog?.open();
  });

  autoLikeDialog?.unmount();
}

//#region add prompt

async function addAutoLikeEntryPrompts() {
  await autoLikeStore.loadData();

  const idPrompt = (await showPrompt({ type: "prompt", message: t("add_auto_like_channel_id_prompt") }))?.trim();
  if(!idPrompt)
    return;

  const id = parseChannelIdFromUrl(idPrompt) ?? (isValidChannelId(idPrompt) ? idPrompt : null);

  if(!id || id.length <= 0)
    return await showPrompt({ type: "alert", message: t("add_auto_like_channel_invalid_id") });

  let overwriteName = false;

  const hasChannelEntry = autoLikeStore.getData().channels.find((ch) => ch.id === id);

  if(hasChannelEntry) {
    if(!await showPrompt({ type: "confirm", message: t("add_auto_like_channel_already_exists_prompt_new_name") }))
      return;
    overwriteName = true;
  }

  const name = (await showPrompt({ type: "prompt", message: t("add_auto_like_channel_name_prompt"), defaultValue: hasChannelEntry?.name }))?.trim();
  if(!name || name.length === 0)
    return;

  await autoLikeStore.setData(
    overwriteName
      ? {
        channels: autoLikeStore.getData().channels
          .map((ch) => ch.id === id ? { ...ch, name } : ch),
      }
      : {
        channels: [
          ...autoLikeStore.getData().channels,
          { id, name, enabled: true },
        ],
      }
  );

  emitSiteEvent("autoLikeChannelsUpdated");

  const unsub = autoLikeDialog?.on("clear", async () => {
    unsub?.();
    await autoLikeDialog?.open();
  });

  autoLikeDialog?.unmount();
}

function getChannelIdFromPrompt(promptStr: string) {
  const isId = promptStr.match(/^@?.+$/);
  const isUrl = promptStr.match(/^(?:https?:\/\/)?(?:www\.)?(?:music\.)?youtube\.com\/(?:channel\/|@)([a-zA-Z0-9_-]+)/);

  const id = (isId?.[0] || isUrl?.[1] || "").trim();
  return id.length > 0 ? id : null;
}
