import { getDomain, t } from "../utils";
import { BytmDialog, createCircularBtn, createToggleInput } from "../components";
import { autoLikeChannelsStore } from "../features";
import { debounce } from "@sv443-network/userutils";

let autoLikeChannelsDialog: BytmDialog | null = null;

/** Creates and/or returns the import dialog */
export function getAutoLikeChannelsDialog() {
  if(!autoLikeChannelsDialog) {
    autoLikeChannelsDialog = new BytmDialog({
      id: "auto-like-channels",
      width: 500,
      height: 700,
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

  const channelListCont = document.createElement("div");
  channelListCont.id = "bytm-auto-like-channels-list";

  const removeChannel = (id: string) => debounce(
    () => autoLikeChannelsStore.setData({
      channels: autoLikeChannelsStore.getData().channels.filter((ch) => ch.id !== id),
    }),
    250,
    "falling"
  );

  const setChannelEnabled = (id: string, enabled: boolean) => debounce(
    () => autoLikeChannelsStore.setData({
      channels: autoLikeChannelsStore.getData().channels.map((ch) => ch.id === id ? { ...ch, enabled } : ch),
    }),
    250,
    "falling"
  );

  for(const { name, id, enabled } of autoLikeChannelsStore.getData().channels) {
    const rowElem = document.createElement("div");
    rowElem.classList.add("bytm-auto-like-channel-row");

    const leftCont = document.createElement("div");
    leftCont.classList.add("bytm-auto-like-channel-row-left-cont");

    const nameLabelEl = document.createElement("label");
    nameLabelEl.ariaLabel = nameLabelEl.title = name;
    nameLabelEl.htmlFor = `bytm-auto-like-channel-list-toggle-${id}`;

    const nameElem = document.createElement("a");
    nameElem.classList.add("bytm-auto-like-channel-name", "bytm-link");
    nameElem.ariaLabel = nameElem.textContent = name;
    nameElem.href = `https://${getDomain() === "yt" ? "" : "music."}youtube.com/channel/${id}`;
    nameElem.target = "_blank";
    nameElem.rel = "noopener noreferrer";
    nameElem.tabIndex = 0;

    nameLabelEl.appendChild(nameElem);

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
