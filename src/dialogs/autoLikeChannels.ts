import { getDomain, onInteraction, t } from "../utils";
import { BytmDialog, createCircularBtn, createToggleInput } from "../components";
import { autoLikeChannelsStore } from "../features";
import { debounce } from "@sv443-network/userutils";

let autoLikeChannelsDialog: BytmDialog | null = null;

/** Creates and/or returns the import dialog */
export async function getAutoLikeChannelsDialog() {
  if(!autoLikeChannelsDialog) {
    await autoLikeChannelsStore.loadData();
    autoLikeChannelsDialog = new BytmDialog({
      id: "auto-like-channels",
      width: 600,
      height: 800,
      closeBtnEnabled: true,
      closeOnBgClick: true,
      closeOnEscPress: true,
      small: true,
      renderHeader,
      renderBody,
    });
  }
  return autoLikeChannelsDialog;
}

async function renderHeader() {
  const headerEl = document.createElement("h2");
  headerEl.classList.add("bytm-dialog-title");
  headerEl.role = "heading";
  headerEl.ariaLevel = "1";
  headerEl.textContent = t("auto_like_channels_dialog_title"); // TODO

  return headerEl;
}

async function renderBody() {
  const contElem = document.createElement("div");

  const descriptionEl = document.createElement("p");
  descriptionEl.classList.add("bytm-auto-like-channels-desc");
  descriptionEl.textContent = t("auto_like_channels_dialog_desc"); // TODO

  contElem.appendChild(descriptionEl);

  const addNewEl = document.createElement("div");
  addNewEl.id = "bytm-auto-like-channels-add-new";
  addNewEl.role = "button";
  addNewEl.tabIndex = 0;
  addNewEl.textContent = `+ ${t("add_new")}`;
  addNewEl.classList.add("bytm-link");

  onInteraction(addNewEl, async () => {
    const id = prompt(t("add_auto_like_channel_id_prompt")); // TODO
    if(!id)
      return;

    let overwriteName = false;

    if(autoLikeChannelsStore.getData().channels.some((ch) => ch.id === id)) {
      if(!confirm(t("add_auto_like_channel_already_exists_prompt_new_name"))) // TODO
        return;
      overwriteName = true;
    }

    const name = prompt(t("add_auto_like_channel_name_prompt")); // TODO
    if(!name)
      return;

    await autoLikeChannelsStore.setData(
      overwriteName
        ? {
          channels: autoLikeChannelsStore.getData().channels
            .map((ch) => ch.id === id ? { ...ch, name } : ch),
        }
        : {
          channels: [
            ...autoLikeChannelsStore.getData().channels,
            { id, name, enabled: true },
          ],
        }
    );

    const unsub = autoLikeChannelsDialog?.on("clear", async () => {
      unsub?.();
      await autoLikeChannelsDialog?.open();
    });

    autoLikeChannelsDialog?.unmount();
  });

  contElem.appendChild(addNewEl);

  const channelListCont = document.createElement("div");
  channelListCont.id = "bytm-auto-like-channels-list";

  const removeChannel = (id: string) => autoLikeChannelsStore.setData({
    channels: autoLikeChannelsStore.getData().channels.filter((ch) => ch.id !== id),
  });

  const setChannelEnabled = (id: string, enabled: boolean) => debounce(
    () => autoLikeChannelsStore.setData({
      channels: autoLikeChannelsStore.getData().channels
        .map((ch) => ch.id === id ? { ...ch, enabled } : ch),
    }),
    250,
    "rising"
  );

  const sortedChannels = autoLikeChannelsStore
    .getData().channels
    .sort((a, b) => a.name.localeCompare(b.name));

  for(const { name, id, enabled } of sortedChannels) {
    const rowElem = document.createElement("div");
    rowElem.classList.add("bytm-auto-like-channel-row");

    const leftCont = document.createElement("div");
    leftCont.classList.add("bytm-auto-like-channel-row-left-cont");

    const nameLabelEl = document.createElement("label");
    nameLabelEl.ariaLabel = nameLabelEl.title = name;
    nameLabelEl.htmlFor = `bytm-auto-like-channel-list-toggle-${id}`;
    nameLabelEl.classList.add("bytm-auto-like-channel-name-label");

    const nameElem = document.createElement("a");
    nameElem.classList.add("bytm-auto-like-channel-name", "bytm-link");
    nameElem.ariaLabel = nameElem.textContent = name;
    nameElem.href = `https://${getDomain() === "yt" ? "" : "music."}youtube.com/channel/${id}`;
    nameElem.target = "_blank";
    nameElem.rel = "noopener noreferrer";
    nameElem.tabIndex = 0;

    const idElem = document.createElement("span");
    idElem.classList.add("bytm-auto-like-channel-id");
    idElem.textContent = idElem.title = id;

    nameLabelEl.appendChild(nameElem);
    nameLabelEl.appendChild(idElem);

    const toggleElem = await createToggleInput({
      id: `bytm-auto-like-channel-list-toggle-${id}`,
      labelPos: "off",
      initialValue: enabled,
      onChange: (en) => setChannelEnabled(id, en),
    });
    toggleElem.classList.add("bytm-auto-like-channel-toggle");

    const removeBtn = await createCircularBtn({
      resourceName: "icon-delete",
      title: t("remove_entry"),
      onClick() {
        removeChannel(id);
        rowElem.remove();
      },
    });

    leftCont.appendChild(toggleElem);
    leftCont.appendChild(nameLabelEl);

    rowElem.appendChild(leftCont);
    rowElem.appendChild(removeBtn);

    channelListCont.appendChild(rowElem);
  }

  contElem.appendChild(channelListCont);

  return contElem;
}
