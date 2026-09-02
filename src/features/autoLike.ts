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
import { LogLevel, type AutoLikeData } from "@/types.ts";
import "@feat/autoLike.css";
import { getSelector } from "@util/data.ts";

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
          const artistEls = document.querySelectorAll<HTMLAnchorElement>(getSelector("watchPage", "channelName"));
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

            loggers.autoLike.info(`Auto-liked ${getCurrentMediaType()} from channel '${likeChan.name}' (${likeChan.id}) - permalink: https://${getDomain() === "ytm" ? "music.youtube.com/watch?v=" : "youtu.be/"}${new URL(location.href).searchParams.get("v")}`, LogLevel.Info);
          }
          else
            loggers.autoLike.info("Skipping auto-like, because the like state is currently set to", likeState);
        };
        timeout = setTimeout(() => ytmTryAutoLike(), autoLikeTimeoutMs);
        siteEvents.on("autoLikeChannelsUpdated", () => setTimeout(() => ytmTryAutoLike(), autoLikeTimeoutMs));
      });

      const recreateBtn = (headerCont: HTMLElement, chanId: string) => {
        const titleCont = headerCont.querySelector<HTMLElement>(getSelector("autoLike", "titleContainer"));
        if(!titleCont)
          return;

        const checkBtn = () => setTimeout(() => {
          if(!document.querySelector(".bytm-auto-like-toggle-btn"))
            recreateBtn(headerCont, chanId);
        }, 250);

        const chanName = titleCont.querySelector<HTMLElement>(getSelector("autoLike", "titleContainerChannelName"))?.textContent ?? null;
        loggers.autoLike.log("Re-rendering auto-like toggle button for channel", chanName, "with ID", chanId);

        const buttonsCont = headerCont.querySelector<HTMLElement>(".buttons");
        if(buttonsCont) {
          const lastBtn = buttonsCont.querySelector<HTMLElement>(getSelector("autoLike", "titleContainerButtonsContainerLastButton"));
          const chanName = document.querySelector<HTMLElement>(getSelector("autoLike", "channelName_global"))?.textContent
            ?? document.querySelector<HTMLElement>(getSelector("autoLike", "channelNameFallback_global"))?.textContent
            ?? null;
          lastBtn && addAutoLikeToggleBtn(lastBtn, chanId, chanName).then(checkBtn);
        }
        else {
          // some channels don't have a subscribe button and instead only have a "share" button for some bullshit reason
          const shareBtnEl = headerCont.querySelector<HTMLElement>(getSelector("autoLike", "titleContainerButtonsContainerShareButton"));
          const chanName = headerCont.querySelector<HTMLElement>(getSelector("autoLike", "titleContainerChannelNameAlternate"))?.textContent ?? null;
          shareBtnEl && chanName && addAutoLikeToggleBtn(shareBtnEl, chanId, chanName).then(checkBtn);
        }
      };

      const tryAddBtnYTM = () => {
        if(getFeature("autoLikeChannelToggleBtn") && location.pathname.match(/\/channel\/.+/)) {
          const chanId = getCurrentChannelId();
          if(!chanId)
            return loggers.autoLike.error("Couldn't extract channel ID from URL");

          document.querySelectorAll<HTMLElement>(".bytm-auto-like-toggle-btn").forEach((btn) => clearNode(btn));

          addSelectorListener("browseResponse", getSelector("generic", "browseResponseHeader_sub_browseResponse"), {
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
      const checkYTAutoLike = () => {
        const autoLikeTimeoutMs = (getFeature("autoLikeTimeout", 5)) * 1000;
        timeout && clearTimeout(timeout);
        if(!location.pathname.startsWith("/watch"))
          return;
        const ytTryAutoLike = () => {
          addSelectorListener<HTMLAnchorElement, "yt">("ytWatchMetadata", getSelector("watchPage", "channelName"), {
            listener(chanElem) {
              const chanElemId = chanElem.hasAttribute("href")
                ? (chanElem.href.split("/").pop()?.split("/")[0] ?? null)
                : getCurrentChannelId();

              const likeChan = autoLikeStore.getData().channels.find((ch) => ch.id === chanElemId);
              if(!likeChan || !likeChan.enabled)
                return;

              addSelectorListener<0, "yt">("ytWatchMetadata", getSelector("watchPage", "likeBtn"), {
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
      };

      if(location.pathname.startsWith("/watch"))
        checkYTAutoLike();
      siteEvents.on("watchIdChanged", () => checkYTAutoLike());

      const tryAddBtnYT = () => {
        if(location.pathname.match(/(\/?@|\/?channel\/)\S+/)) {
          const chanId = getCurrentChannelId();
          if(!chanId)
            return loggers.autoLike.error("Couldn't extract channel ID from URL");

          document.querySelectorAll<HTMLElement>(".bytm-auto-like-toggle-btn").forEach((btn) => clearNode(btn));

          const recreateBtn = (headerCont: HTMLElement) => {
            const titleCont = headerCont.querySelector<HTMLElement>(getSelector("autoLike", "titleContainer"));
            if(!titleCont)
              return;

            const checkBtn = () => setTimeout(() => {
              if(!document.querySelector(".bytm-auto-like-toggle-btn"))
                recreateBtn(headerCont);
            }, 350);

            const chanName = titleCont.querySelector<HTMLElement>(getSelector("autoLike", "titleContainerChannelName"))?.textContent ?? null;
            loggers.autoLike.log("Re-rendering auto-like toggle button for channel", chanName, "with ID", chanId);

            const buttonsCont = headerCont.querySelector<HTMLElement>(getSelector("autoLike", "titleContainerButtonsContainer"));
            if(buttonsCont) {
              addSelectorListener<0, "yt">("ytAppHeader", getSelector("autoLike", "titleContainerOtherButtons_sub_ytAppHeader"), {
                listener: (otherBtns) =>
                  addAutoLikeToggleBtn(otherBtns, chanId, chanName, ["left-margin", "right-margin"]).then(checkBtn),
              });
            }
            else if(titleCont) {
              const titleH1OrCont = titleCont.querySelector<HTMLElement>("h1") ?? titleCont;
              addAutoLikeToggleBtn(titleH1OrCont, chanId, chanName, titleH1OrCont !== titleCont ? ["left-margin-xl"] : []).then(checkBtn);
            }
          };

          addSelectorListener<0, "yt">("ytAppHeader", getSelector("generic", "pageHeaderContainer_sub_ytAppHeader"), {
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

  loggers.autoLike.log(`Adding auto-like toggle button for channel with ID '${channelId}' and name '${channelName}' - current state:`, chan);

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
