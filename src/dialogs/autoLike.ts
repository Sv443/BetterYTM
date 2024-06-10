import { debounce } from "@sv443-network/userutils";
import { getDomain, log, onInteraction, parseChannelIdFromUrl, t } from "../utils/index.js";
import { BytmDialog, createCircularBtn, createToggleInput } from "../components/index.js";
import { autoLikeStore, initAutoLikeStore } from "../features/index.js";
import { siteEvents } from "../siteEvents.js";
import "./autoLike.css";

let autoLikeDialog: BytmDialog | null = null;

/** Creates and/or returns the import dialog */
export async function getAutoLikeDialog() {
  if(!autoLikeDialog) {
    await initAutoLikeStore();

    autoLikeDialog = new BytmDialog({
      id: "auto-like-channels",
      width: 600,
      height: 1000,
      closeBtnEnabled: true,
      closeOnBgClick: true,
      closeOnEscPress: true,
      destroyOnClose: true,
      small: true,
      renderHeader,
      renderBody,
      renderFooter,
    });

    siteEvents.on("autoLikeChannelsUpdated", async () => {
      if(autoLikeDialog?.isOpen()) {
        autoLikeDialog.close();
        autoLikeDialog.unmount();
        await autoLikeDialog.open();
        log("Auto-like channels updated, refreshed dialog");
      }
    });
  }
  return autoLikeDialog;
}

async function renderHeader() {
  const headerEl = document.createElement("h2");
  headerEl.classList.add("bytm-dialog-title");
  headerEl.role = "heading";
  headerEl.ariaLevel = "1";
  headerEl.textContent = t("auto_like_channels_dialog_title");

  return headerEl;
}

async function renderBody() {
  const contElem = document.createElement("div");

  const descriptionEl = document.createElement("p");
  descriptionEl.classList.add("bytm-auto-like-channels-desc");
  descriptionEl.textContent = t("auto_like_channels_dialog_desc");
  descriptionEl.tabIndex = 0;

  contElem.appendChild(descriptionEl);

  // TODO: remove
  const addNewWrapper = document.createElement("div");
  addNewWrapper.id = "bytm-auto-like-channels-add-new-wrapper";

  const addNewEl = document.createElement("span");
  addNewEl.id = "bytm-auto-like-channels-add-new";
  addNewEl.role = "button";
  addNewEl.tabIndex = 0;
  addNewEl.textContent = `+ ${t("new_entry_tooltip")}`;
  addNewEl.title = addNewEl.ariaLabel = t("new_entry_tooltip");
  addNewEl.classList.add("bytm-link", "bytm-no-select");

  addNewWrapper.appendChild(addNewEl);

  onInteraction(addNewEl, addAutoLikeEntryPrompts);

  contElem.appendChild(addNewWrapper);

  const channelListCont = document.createElement("div");
  channelListCont.id = "bytm-auto-like-channels-list";

  const removeChannel = (id: string) => autoLikeStore.setData({
    channels: autoLikeStore.getData().channels.filter((ch) => ch.id !== id),
  });

  const setChannelEnabled = (id: string, enabled: boolean) => debounce(
    () => autoLikeStore.setData({
      channels: autoLikeStore.getData().channels
        .map((ch) => ch.id === id ? { ...ch, enabled } : ch),
    }),
    250,
    "rising"
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

    const nameElem = document.createElement("a");
    nameElem.classList.add("bytm-auto-like-channel-name", "bytm-link");
    nameElem.ariaLabel = nameElem.textContent = chanName;
    nameElem.href = `https://${getDomain() === "ytm" ? "music." : ""}youtube.com/${chanId.startsWith("@") ? chanId : `channel/${chanId}`}`;
    nameElem.target = "_blank";
    nameElem.rel = "noopener noreferrer";
    nameElem.tabIndex = 0;

    const idElem = document.createElement("span");
    idElem.classList.add("bytm-auto-like-channel-id");
    idElem.textContent = idElem.title = chanId;

    nameLabelEl.appendChild(nameElem);
    nameLabelEl.appendChild(idElem);

    const toggleElem = await createToggleInput({
      id: `bytm-auto-like-channel-list-toggle-${chanId}`,
      labelPos: "off",
      initialValue: enabled,
      onChange: (en) => setChannelEnabled(chanId, en),
    });
    toggleElem.classList.add("bytm-auto-like-channel-toggle");

    const btnCont = document.createElement("div");
    btnCont.classList.add("bytm-auto-like-channel-row-btn-cont");

    const editBtn = await createCircularBtn({
      resourceName: "icon-edit",
      title: t("edit_entry"),
      async onClick() {
        const newNamePr = prompt(t("auto_like_channel_edit_name_prompt"), chanName)?.trim();
        if(!newNamePr || newNamePr.length === 0)
          return;
        const newName = newNamePr.length > 0 ? newNamePr : chanName;

        const newIdPr = prompt(t("auto_like_channel_edit_id_prompt"), chanId)?.trim();
        if(!newIdPr || newIdPr.length === 0)
          return;
        const newId = newIdPr.length > 0 ? getChannelIdFromPrompt(newIdPr) ?? chanId : chanId;

        await autoLikeStore.setData({
          channels: autoLikeStore.getData().channels
            .map((ch) => ch.id === chanId ? { ...ch, name: newName, id: newId } : ch),
        });

        siteEvents.emit("autoLikeChannelsUpdated");
      },
    });
    btnCont.appendChild(editBtn);

    const removeBtn = await createCircularBtn({
      resourceName: "icon-delete",
      title: t("remove_entry"),
      async onClick() {
        await removeChannel(chanId);
        rowElem.remove();
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

function renderFooter() {
  const wrapperEl = document.createElement("div");
  wrapperEl.classList.add("bytm-auto-like-channels-footer-wrapper");

  const leftItemsWrapper = document.createElement("div");
  leftItemsWrapper.classList.add("bytm-dialog-footer-buttons-cont");

  const addNewBtnElem = document.createElement("button");
  addNewBtnElem.classList.add("bytm-btn");
  addNewBtnElem.textContent = t("new_entry");
  addNewBtnElem.ariaLabel = addNewBtnElem.title = t("new_entry_tooltip");
  leftItemsWrapper.appendChild(addNewBtnElem);

  const importExportBtnElem = document.createElement("button");
  importExportBtnElem.classList.add("bytm-btn");
  importExportBtnElem.textContent = t("export_import");
  importExportBtnElem.ariaLabel = importExportBtnElem.title = t("auto_like_export_or_import_tooltip");
  leftItemsWrapper.appendChild(importExportBtnElem);

  wrapperEl.appendChild(leftItemsWrapper);

  const closeBtnElem = document.createElement("button");
  closeBtnElem.classList.add("bytm-btn");
  closeBtnElem.textContent = t("close");
  closeBtnElem.ariaLabel = closeBtnElem.title = t("close_tooltip");

  wrapperEl.appendChild(closeBtnElem);

  onInteraction(addNewBtnElem, addAutoLikeEntryPrompts);
  onInteraction(importExportBtnElem, openImportExportAutoLikeChannelsDialog);
  onInteraction(closeBtnElem, () => autoLikeDialog?.close());

  return wrapperEl;
}

function openImportExportAutoLikeChannelsDialog() {
  alert("TODO: ImportExportDialog stuff");
}

async function addAutoLikeEntryPrompts() {
  await autoLikeStore.loadData();

  const idPrompt = prompt(t("add_auto_like_channel_id_prompt"))?.trim();
  if(!idPrompt)
    return;

  const id = parseChannelIdFromUrl(idPrompt) ?? (idPrompt.trim().startsWith("@") ? idPrompt.trim() : null);

  if(!id || id.length <= 0)
    return alert(t("add_auto_like_channel_invalid_id"));

  let overwriteName = false;

  if(autoLikeStore.getData().channels.some((ch) => ch.id === id)) {
    if(!confirm(t("add_auto_like_channel_already_exists_prompt_new_name")))
      return;
    overwriteName = true;
  }

  const name = prompt(t("add_auto_like_channel_name_prompt"))?.trim();
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

  siteEvents.emit("autoLikeChannelsUpdated");

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
