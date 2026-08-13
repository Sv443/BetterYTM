import { DataStore } from "@sv443-network/coreutils";
import { GMStorageEngine } from "@sv443-network/userutils";
import { getFeature } from "@/config.ts";
import { addSelectorListener } from "@/observers.ts";
import { emitSiteEvent, siteEvents } from "@/siteEvents.ts";
import { compressionFormat } from "@/constants.ts";
import { getCurrentChannelId, getDomain, isValidChannelId, resourceAsString, sanitizeChannelId } from "@util/misc.ts";
import { addStyleFromResource, clearNode, getCurrentMediaType, getLikeDislikeBtns, setInnerHtml } from "@util/dom.ts";
import { loggers } from "@util/logging.ts";
import { t } from "@util/translations.ts";
import { getAutoLikeDialog } from "@dialog/autoLike.ts";
import { showIconToast } from "@comp/toast.ts";
import { createLongBtn } from "@comp/longButton.ts";
import { createRipple } from "@comp/ripple.ts";
import type { AutoLikeData } from "@/types.ts";
import "@feat/autoLike.css";

// TODO:FIXME: race condition: multiple buttons can appear on YT channel pages, with both the @ID format as well as UC... (extraneous)

//#region store

/** DataStore instance for all auto-liked channels */
export const autoLikeStore = new DataStore<AutoLikeData>({
  id: "bytm-auto-like-channels",
  formatVersion: 2,
  defaultData: {
    channels: [],
  },
  engine: new GMStorageEngine(),
  compressionFormat,
  migrations: {
    // 1 -> 2 (v2.1-pre) - add @ prefix to channel IDs if missing
    2: (oldData: AutoLikeData) => ({
      channels: oldData.channels.map((ch) => ({
        ...ch,
        id: isValidChannelId(ch.id.trim())
          ? ch.id.trim()
          : `@${ch.id.trim()}`,
      })),
    }),
  },
  nanoEmitterOptions: {
    publicEmit: false,
    catchUpEvents: ["loadData"],
  },
});

let autoLikeStoreLoaded = false;

/** Inits the auto-like DataStore instance */
export async function initAutoLikeStore() {
  if(autoLikeStoreLoaded)
    return;
  autoLikeStoreLoaded = true;
  return autoLikeStore.loadData();
}

//#region init auto-like

/** Initializes the auto-like feature */
export async function initAutoLike() {
  try {
    await initAutoLikeStore();

    //#region ytm
    if(getDomain() === "ytm") {
      let timeout: ReturnType<typeof setTimeout>;
      siteEvents.on("songTitleChanged", () => {
        const autoLikeTimeoutMs = (getFeature("autoLikeTimeout", 5)) * 1000;
        timeout && clearTimeout(timeout);
        const ytmTryAutoLike = () => {
          const artistEls = document.querySelectorAll<HTMLAnchorElement>("ytmusic-player-bar .content-info-wrapper .subtitle a.yt-formatted-string[href]");
          const channelIds = [...artistEls].map(a => a.href.split("/").pop()).filter(a => typeof a === "string") as string[];

          const likeChan = autoLikeStore.getData().channels.find((ch) => channelIds.includes(ch.id));

          if(!likeChan || !likeChan.enabled)
            return;

          if(artistEls.length === 0 || channelIds.length === 0)
            return loggers.autoLike.error("Couldn't auto-like because the artist element couldn't be found");

          const { likeBtn, likeState } = getLikeDislikeBtns();

          if(!likeBtn)
            return loggers.autoLike.error("Couldn't auto-like because the like button couldn't be found");

          if(!likeState || likeState === "INDIFFERENT") {
            likeBtn.click();

            getFeature("autoLikeShowToast") && showIconToast({
              message: t(`auto_liked_a_channels_${getCurrentMediaType()}`, likeChan.name),
              subtitle: t("auto_like_click_to_configure"),
              icon: "icon-auto_like",
              onClick: () => getAutoLikeDialog().then((dlg) => dlg.open()),
            }).catch(e => loggers.autoLike.error("Error while showing auto-like toast:", e));

            loggers.autoLike.info(`Auto-liked ${getCurrentMediaType()} from channel '${likeChan.name}' (${likeChan.id}) - permalink: https://${getDomain() === "ytm" ? "music.youtube.com/watch?v=" : "youtu.be/"}${new URL(location.href).searchParams.get("v")}`);
          }
          else
            loggers.autoLike.info("Skipping auto-like, because the like state is currently set to", likeState);
        };
        timeout = setTimeout(() => ytmTryAutoLike(), autoLikeTimeoutMs);
        siteEvents.on("autoLikeChannelsUpdated", () => setTimeout(() => ytmTryAutoLike(), autoLikeTimeoutMs));
      });

      const recreateBtn = (headerCont: HTMLElement, chanId: string) => {
        const titleCont = headerCont.querySelector<HTMLElement>("ytd-channel-name #container, yt-dynamic-text-view-model.page-header-view-model-wiz__page-header-title, ytmusic-immersive-header-renderer .ytmusic-immersive-header-renderer yt-formatted-string.title");
        if(!titleCont)
          return;

        const checkBtn = () => setTimeout(() => {
          if(!document.querySelector(".bytm-auto-like-toggle-btn"))
            recreateBtn(headerCont, chanId);
        }, 250);

        const chanName = titleCont.querySelector<HTMLElement>("yt-formatted-string, span.yt-core-attributed-string")?.textContent ?? null;
        loggers.autoLike.log("Re-rendering auto-like toggle button for channel", chanName, "with ID", chanId);

        const buttonsCont = headerCont.querySelector<HTMLElement>(".buttons");
        if(buttonsCont) {
          const lastBtn = buttonsCont.querySelector<HTMLElement>("ytmusic-subscribe-button-renderer");
          const chanName = document.querySelector<HTMLElement>(".ytmusic-immersive-header-renderer > h1 > yt-formatted-string")?.textContent
            ?? document.querySelector<HTMLElement>("ytmusic-immersive-header-renderer .content-container yt-formatted-string[role=\"heading\"]")?.textContent
            ?? null;
          lastBtn && addAutoLikeToggleBtn(lastBtn, chanId, chanName).then(checkBtn);
        }
        else {
          // some channels don't have a subscribe button and instead only have a "share" button for some bullshit reason
          const shareBtnEl = headerCont.querySelector<HTMLElement>("ytmusic-menu-renderer #top-level-buttons yt-button-renderer:last-of-type");
          const chanName = headerCont.querySelector<HTMLElement>("ytmusic-visual-header-renderer .content-container h2 yt-formatted-string")?.textContent ?? null;
          shareBtnEl && chanName && addAutoLikeToggleBtn(shareBtnEl, chanId, chanName).then(checkBtn);
        }
      };

      const tryAddBtnYTM = () => {
        if(getFeature("autoLikeChannelToggleBtn") && location.pathname.match(/\/channel\/.+/)) {
          const chanId = getCurrentChannelId();
          if(!chanId)
            return loggers.autoLike.error("Couldn't extract channel ID from URL");

          document.querySelectorAll<HTMLElement>(".bytm-auto-like-toggle-btn").forEach((btn) => clearNode(btn));

          addSelectorListener("browseResponse", "ytmusic-browse-response #header.ytmusic-browse-response", {
            listener: (el) => recreateBtn(el, chanId),
          });
        }
      };

      siteEvents.on("pathChanged", () => tryAddBtnYTM());
      tryAddBtnYTM();
    }
    //#region yt
    
    // TODO:FIXME: doesnt work with new yt ui

    else if(getDomain() === "yt") {
      addStyleFromResource("css-auto_like");

      let timeout: ReturnType<typeof setTimeout>;
      siteEvents.on("watchIdChanged", () => {
        const autoLikeTimeoutMs = (getFeature("autoLikeTimeout", 5)) * 1000;
        timeout && clearTimeout(timeout);
        if(!location.pathname.startsWith("/watch"))
          return;
        const ytTryAutoLike = () => {
          addSelectorListener<HTMLAnchorElement, "yt">("ytWatchMetadata", "#owner ytd-channel-name yt-formatted-string a", {
            listener(chanElem) {
              const chanElemId = chanElem.href.split("/").pop()?.split("/")[0] ?? null;

              const likeChan = autoLikeStore.getData().channels.find((ch) => ch.id === chanElemId);
              if(!likeChan || !likeChan.enabled)
                return;

              addSelectorListener<0, "yt">("ytWatchMetadata", "#actions ytd-menu-renderer like-button-view-model button", {
                listener(likeBtn) {
                  if(likeBtn.getAttribute("aria-pressed") !== "true") {
                    likeBtn.click();
                    getFeature("autoLikeShowToast") && showIconToast({
                      message: t("auto_liked_a_channels_video", likeChan.name),
                      subtitle: t("auto_like_click_to_configure"),
                      icon: "icon-auto_like",
                      onClick: () => getAutoLikeDialog().then((dlg) => dlg.open()),
                    }).catch(e => loggers.autoLike.error("Error while showing auto-like toast:", e));
                    loggers.autoLike.log(`Auto-liked video from channel '${likeChan.name}' (${likeChan.id})`);
                  }
                }
              });
            }
          });
        };
        siteEvents.on("autoLikeChannelsUpdated", () => setTimeout(ytTryAutoLike, autoLikeTimeoutMs));
        timeout = setTimeout(ytTryAutoLike, autoLikeTimeoutMs);
      });

      const tryAddBtnYT = () => {
        if(location.pathname.match(/(\/?@|\/?channel\/)\S+/)) {
          const chanId = getCurrentChannelId();
          if(!chanId)
            return loggers.autoLike.error("Couldn't extract channel ID from URL");

          document.querySelectorAll<HTMLElement>(".bytm-auto-like-toggle-btn").forEach((btn) => clearNode(btn));

          const recreateBtn = (headerCont: HTMLElement) => {
            const titleCont = headerCont.querySelector<HTMLElement>("ytd-channel-name #container, yt-dynamic-text-view-model.page-header-view-model-wiz__page-header-title, yt-page-header-view-model yt-dynamic-text-view-model");
            if(!titleCont)
              return;

            const checkBtn = () => setTimeout(() => {
              if(!document.querySelector(".bytm-auto-like-toggle-btn"))
                recreateBtn(headerCont);
            }, 350);

            const chanName = titleCont.querySelector<HTMLElement>("yt-formatted-string, h1 > .yt-core-attributed-string")?.textContent ?? null;
            loggers.autoLike.log("Re-rendering auto-like toggle button for channel", chanName, "with ID", chanId);

            const buttonsCont = headerCont.querySelector<HTMLElement>("#inner-header-container #buttons, yt-flexible-actions-view-model");
            if(buttonsCont) {
              addSelectorListener<0, "yt">("ytAppHeader", "#channel-header-container #other-buttons, yt-flexible-actions-view-model .yt-flexible-actions-view-model-wiz__action, yt-flexible-actions-view-model .ytFlexibleActionsViewModelAction", {
                listener: (otherBtns) =>
                  addAutoLikeToggleBtn(otherBtns, chanId, chanName, ["left-margin", "right-margin"]).then(checkBtn),
              });
            }
            else if(titleCont) {
              const titleH1OrCont = titleCont.querySelector<HTMLElement>("h1") ?? titleCont;
              addAutoLikeToggleBtn(titleH1OrCont, chanId, chanName, titleH1OrCont !== titleCont ? ["left-margin-xl"] : []).then(checkBtn);
            }
          };

          addSelectorListener<0, "yt">("ytAppHeader", "#channel-header-container, #page-header, #page-header-container", {
            listener: recreateBtn,
          });
        }
      };

      siteEvents.on("pathChanged", () => tryAddBtnYT());
      tryAddBtnYT();
    }

    loggers.autoLike.log("Initialized auto-like channels feature");
  }
  catch(err) {
    loggers.autoLike.error("Error while auto-liking channel:", err);
  }
}

//#region toggle btn

/** Adds a toggle button to enable or disable auto-liking videos from a channel */
async function addAutoLikeToggleBtn(siblingEl: HTMLElement, channelId: string, channelName: string | null, extraClasses?: string[]) {
  const chan = autoLikeStore.getData().channels.find((ch) => ch.id === channelId);

  loggers.autoLike.log(`Adding auto-like toggle button for channel with ID '${channelId}' - current state:`, chan);

  siteEvents.on("autoLikeChannelsUpdated", async () => {
    const buttonEl = document.querySelector<HTMLElement>(`.bytm-auto-like-toggle-btn[data-channel-id="${channelId}"]`);
    if(!buttonEl)
      return loggers.autoLike.warn("Couldn't find auto-like toggle button for channel ID:", channelId);

    const enabled = autoLikeStore.getData().channels.find((ch) => ch.id === channelId)?.enabled ?? false;

    if(enabled)
      buttonEl.classList.add("toggled");
    else
      buttonEl.classList.remove("toggled");

    const imgEl = buttonEl.querySelector<HTMLElement>(".bytm-generic-btn-img");
    imgEl && setInnerHtml(imgEl, await resourceAsString(`icon-auto_like${enabled ? "_enabled" : ""}`));
  });

  const buttonEl = await createLongBtn({
    resourceName: `icon-auto_like${chan?.enabled ? "_enabled" : ""}`,
    text: t("auto_like"),
    title: t(`auto_like_button_tooltip${chan?.enabled ? "_enabled" : "_disabled"}`),
    toggle: true,
    toggleInitialState: chan?.enabled ?? false,
    togglePredicate({ shiftKey, ctrlKey }) {
      const shiftOrCtrl = shiftKey || ctrlKey;
      shiftOrCtrl && getAutoLikeDialog().then((dlg) => dlg.open());
      return !shiftOrCtrl;
    },
    async onToggle(isToggled) {
      try {
        await autoLikeStore.loadData();

        buttonEl.title = buttonEl.ariaLabel = t(`auto_like_button_tooltip${isToggled ? "_enabled" : "_disabled"}`);

        const chanId = sanitizeChannelId(buttonEl.dataset.channelId ?? channelId);

        const imgEl = buttonEl.querySelector<HTMLElement>(".bytm-generic-btn-img");
        imgEl && setInnerHtml(imgEl, await resourceAsString(`icon-auto_like${isToggled ? "_enabled" : ""}`));

        if(autoLikeStore.getData().channels.some((ch) => ch.id === chanId)) {
          await autoLikeStore.setData({
            channels: autoLikeStore.getData().channels
              .map((ch) => ch.id === chanId ? { ...ch, enabled: isToggled } : ch),
          });
        }
        else {
          await autoLikeStore.setData({
            channels: [
              ...autoLikeStore.getData().channels,
              { id: chanId, name: channelName ?? "", enabled: isToggled },
            ],
          });
        }

        emitSiteEvent("autoLikeChannelsUpdated");
        showIconToast({
          message: isToggled ? t("auto_like_enabled_toast") : t("auto_like_disabled_toast"),
          subtitle: t("auto_like_click_to_configure"),
          icon: `icon-auto_like${isToggled ? "_enabled" : ""}`,
          onClick: () => getAutoLikeDialog().then((dlg) => dlg.open()),
        }).catch(e => loggers.autoLike.error("Error while showing auto-like toast:", e));
        loggers.autoLike.log(`Toggled auto-like for channel '${channelName}' (ID: '${chanId}') to ${isToggled ? "enabled" : "disabled"}`);
      }
      catch(err) {
        loggers.autoLike.error("Error while toggling auto-like channel:", err);
      }
    }
  });
  buttonEl.classList.add(...["bytm-auto-like-toggle-btn", ...(extraClasses ?? [])]);
  buttonEl.dataset.channelId = channelId;

  siblingEl.insertAdjacentElement("afterend", createRipple(buttonEl));
}
