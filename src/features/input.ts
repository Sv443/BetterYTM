import { DataStore, clamp, compress, decompress } from "@sv443-network/userutils";
import { error, info, log, warn, getDomain, compressionSupported, t, clearNode, resourceAsString, getCurrentChannelId, getCurrentMediaType, sanitizeChannelId, addStyleFromResource, isValidChannelId, getVideoElement, setInnerHtml, getLikeDislikeBtns } from "../utils/index.js";
import type { AutoLikeData } from "../types.js";
import { emitSiteEvent, siteEvents } from "../siteEvents.js";
import { featInfo } from "./index.js";
import { getFeature } from "../config.js";
import { compressionFormat } from "../constants.js";
import { addSelectorListener } from "../observers.js";
import { getAutoLikeDialog } from "../dialogs/autoLike.js";
import { showIconToast } from "../components/toast.js";
import { createLongBtn } from "../components/longButton.js";
import { createRipple } from "../components/ripple.js";
import "./input.css";

//#region utils

const ignoreTagNamesInput: string[] = ["INPUT", "TEXTAREA", "SELECT", "BUTTON", "A"];
const ignoreIdsInput: string[] = [
  "contenteditable-root", // comment field on YT
  "volume-slider", // volume slider on YTM
];
const ignoreClassNamesInput: string[] = [];

/** Returns true, if the given element (document.activeElement by default) is an input element that should make BYTM ignore keypresses */
export function isIgnoredInputElement(el = document.activeElement as HTMLElement | null) {
  if(!el)
    return false;

  return ignoreTagNamesInput.includes(el.tagName.toUpperCase())
    || ignoreClassNamesInput.some((cls) => el.classList.contains(cls))
    || ignoreIdsInput.includes(el.id);
}

//#region arrow key skip

let sliderEl: HTMLInputElement | undefined;

export async function initArrowKeySkip() {
  addSelectorListener<HTMLInputElement>("playerBarRightControls", "tp-yt-paper-slider#volume-slider", {
    listener: (el) => sliderEl = el,
  });

  document.addEventListener("keydown", (evt) => {
    if(!getFeature("arrowKeySupport"))
      return;

    if(["ArrowUp", "ArrowDown"].includes(evt.code) && getDomain() === "ytm")
      return handleVolumeKeyPress(evt);

    if(!["ArrowLeft", "ArrowRight"].includes(evt.code))
      return;

    const allowedClasses = ["bytm-generic-btn", "yt-spec-button-shape-next"];

    // discard the event when a (text) input is currently active, like when editing a playlist or writing a comment
    if(isIgnoredInputElement() && !allowedClasses.some((cls) => document.activeElement?.classList.contains(cls)))
      return info(`Captured valid key to skip forward or backward but the current active element is <${document.activeElement?.tagName.toLowerCase()}>, so the keypress is ignored`);

    evt.preventDefault();
    evt.stopImmediatePropagation();

    let skipBy = getFeature("arrowKeySkipBy") ?? featInfo.arrowKeySkipBy.default;
    if(evt.code === "ArrowLeft")
      skipBy *= -1;

    log(`Captured arrow key '${evt.code}' - skipping by ${skipBy} seconds`);

    const vidElem = getVideoElement();

    if(vidElem && vidElem.readyState > 0)
      vidElem.currentTime = clamp(vidElem.currentTime + skipBy, 0, vidElem.duration);
  });

  log("Added arrow key press listener");
}

function handleVolumeKeyPress(evt: KeyboardEvent) {
  evt.preventDefault();
  evt.stopImmediatePropagation();

  if(!getVideoElement())
    return warn("Couldn't find video element, so the keypress is ignored");

  if(!sliderEl)
    return warn("Couldn't find volume slider element, so the keypress is ignored");

  const step = Number(sliderEl.step);
  const newVol = clamp(
    Number(sliderEl.value)
      + (evt.code === "ArrowUp" ? 1 : -1)
      * clamp((getFeature("arrowKeyVolumeStep") ?? featInfo.arrowKeyVolumeStep.default), isNaN(step) ? 5 : step, 100),
    0,
    100,
  );

  if(newVol !== Number(sliderEl.value)) {
    sliderEl.value = String(newVol);
    sliderEl.dispatchEvent(new Event("change", { bubbles: true }));

    log(`Captured key '${evt.code}' - changed volume to ${newVol}%`);
  }
}

//#region frame skip

/** Initializes the feature that lets users skip by a frame with the period and comma keys while the video is paused */
export async function initFrameSkip() {
  document.addEventListener("keydown", async (evt) => {
    if(!getFeature("frameSkip"))
      return;

    if(!["Comma", "Period"].includes(evt.code))
      return;

    const vid = getVideoElement();
    if(!vid || vid.readyState === 0)
      return warn("Could not find video element or it hasn't loaded yet, so the keypress is ignored");

    if(!getFeature("frameSkipWhilePlaying") && (vid.playbackRate === 0 || !vid.paused))
      return;

    evt.preventDefault();
    evt.stopImmediatePropagation();

    const newTime = vid.currentTime + getFeature("frameSkipAmount") * (evt.code === "Comma" ? -1 : 1);
    vid.currentTime = clamp(newTime, 0, vid.duration);

    log(`Captured key '${evt.code}' and skipped to ${Math.floor(newTime / 60)}m ${(newTime % 60).toFixed(1)}s (${Math.floor(newTime * 1000 % 1000)}ms)`);
  });

  log("Added frame skip key press listener");
}

//#region num keys skip

/** Adds the ability to skip to a certain time in the video by pressing a number key (0-9) */
export async function initNumKeysSkip() {
  document.addEventListener("keydown", (e) => {
    if(!getFeature("numKeysSkipToTime"))
      return;
    if(!e.key.trim().match(/^[0-9]$/))
      return;
    // discard the event when an unexpected element is currently active or in focus, like when editing a playlist or when the search bar is focused
    const ignoreElement = isIgnoredInputElement();
    if((document.activeElement !== document.body && ignoreElement) || ignoreElement)
      return info("Captured valid key to skip video to, but ignored it since this element is currently active:", document.activeElement);

    const vidElem = getVideoElement();
    if(!vidElem || vidElem.readyState === 0)
      return warn("Could not find video element, so the keypress is ignored");

    const newVidTime = vidElem.duration / (10 / Number(e.key));
    if(!isNaN(newVidTime)) {
      log(`Captured number key [${e.key}], skipping to ${Math.floor(newVidTime / 60)}m ${(newVidTime % 60).toFixed(1)}s`);
      vidElem.currentTime = newVidTime;
    }
  });
  log("Added number key press listener");
}

//#region auto-like vids

let canCompress = false;

/** DataStore instance for all auto-liked channels */
export const autoLikeStore = new DataStore<AutoLikeData>({
  id: "bytm-auto-like-channels",
  formatVersion: 2,
  defaultData: {
    channels: [],
  },
  encodeData: (data) => canCompress ? compress(data, compressionFormat, "string") : data,
  decodeData: (data) => canCompress ? decompress(data, compressionFormat, "string") : data,
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
});

let autoLikeStoreLoaded = false;

/** Inits the auto-like DataStore instance */
export async function initAutoLikeStore() {
  if(autoLikeStoreLoaded)
    return;
  autoLikeStoreLoaded = true;
  return autoLikeStore.loadData();
}

/** Initializes the auto-like feature */
export async function initAutoLike() {
  try {
    canCompress = await compressionSupported();
    await initAutoLikeStore();

    //#SECTION ytm
    if(getDomain() === "ytm") {
      let timeout: ReturnType<typeof setTimeout>;
      siteEvents.on("songTitleChanged", () => {
        const autoLikeTimeoutMs = (getFeature("autoLikeTimeout") ?? 5) * 1000;
        timeout && clearTimeout(timeout);
        const ytmTryAutoLike = () => {
          const artistEls = document.querySelectorAll<HTMLAnchorElement>("ytmusic-player-bar .content-info-wrapper .subtitle a.yt-formatted-string[href]");
          const channelIds = [...artistEls].map(a => a.href.split("/").pop()).filter(a => typeof a === "string") as string[];

          const likeChan = autoLikeStore.getData().channels.find((ch) => channelIds.includes(ch.id));

          if(!likeChan || !likeChan.enabled)
            return;

          if(artistEls.length === 0 || channelIds.length === 0)
            return error("Couldn't auto-like because the artist element couldn't be found");

          const { likeBtn, likeState } = getLikeDislikeBtns();

          if(!likeBtn)
            return error("Couldn't auto-like because the like button couldn't be found");

          if(!likeState || likeState === "INDIFFERENT") {
            likeBtn.click();

            getFeature("autoLikeShowToast") && showIconToast({
              message: t(`auto_liked_a_channels_${getCurrentMediaType()}`, likeChan.name),
              subtitle: t("auto_like_click_to_configure"),
              icon: "icon-auto_like",
              onClick: () => getAutoLikeDialog().then((dlg) => dlg.open()),
            }).catch(e => error("Error while showing auto-like toast:", e));

            info(`Auto-liked ${getCurrentMediaType()} from channel '${likeChan.name}' (${likeChan.id}) - permalink: https://${getDomain() === "ytm" ? "music.youtube.com/watch?v=" : "youtu.be/"}${new URL(location.href).searchParams.get("v")}`);
          }
          else
            info("Skipping auto-like, because the like state is currently set to", likeState);
        };
        timeout = setTimeout(ytmTryAutoLike, autoLikeTimeoutMs);
        siteEvents.on("autoLikeChannelsUpdated", () => setTimeout(ytmTryAutoLike, autoLikeTimeoutMs));
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
        log("Re-rendering auto-like toggle button for channel", chanName, "with ID", chanId);

        const buttonsCont = headerCont.querySelector<HTMLElement>(".buttons");
        if(buttonsCont) {
          const lastBtn = buttonsCont.querySelector<HTMLElement>("ytmusic-subscribe-button-renderer");
          const chanName = document.querySelector<HTMLElement>("ytmusic-immersive-header-renderer .content-container yt-formatted-string[role=\"heading\"]")?.textContent ?? null;
          lastBtn && addAutoLikeToggleBtn(lastBtn, chanId, chanName).then(checkBtn);
        }
        else {
          // some channels don't have a subscribe button and instead only have a "share" button for some bullshit reason
          const shareBtnEl = headerCont.querySelector<HTMLElement>("ytmusic-menu-renderer #top-level-buttons yt-button-renderer:last-of-type");
          const chanName = headerCont.querySelector<HTMLElement>("ytmusic-visual-header-renderer .content-container h2 yt-formatted-string")?.textContent ?? null;
          shareBtnEl && chanName && addAutoLikeToggleBtn(shareBtnEl, chanId, chanName).then(checkBtn);
        }
      };

      siteEvents.on("pathChanged", (path) => {
        if(getFeature("autoLikeChannelToggleBtn") && path.match(/\/channel\/.+/)) {
          const chanId = getCurrentChannelId();
          if(!chanId)
            return error("Couldn't extract channel ID from URL");

          document.querySelectorAll<HTMLElement>(".bytm-auto-like-toggle-btn").forEach((btn) => clearNode(btn));

          addSelectorListener("browseResponse", "ytmusic-browse-response #header.ytmusic-browse-response", {
            listener: (el) => recreateBtn(el, chanId),
          });
        }
      });
    }
    //#SECTION yt
    else if(getDomain() === "yt") {
      addStyleFromResource("css-auto_like");

      let timeout: ReturnType<typeof setTimeout>;
      siteEvents.on("watchIdChanged", () => {
        const autoLikeTimeoutMs = (getFeature("autoLikeTimeout") ?? 5) * 1000;
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
                    }).catch(e => error("Error while showing auto-like toast:", e));
                    log(`Auto-liked video from channel '${likeChan.name}' (${likeChan.id})`);
                  }
                }
              });
            }
          });
        };
        siteEvents.on("autoLikeChannelsUpdated", () => setTimeout(ytTryAutoLike, autoLikeTimeoutMs));
        timeout = setTimeout(ytTryAutoLike, autoLikeTimeoutMs);
      });

      siteEvents.on("pathChanged", (path) => {
        if(path.match(/(\/?@|\/?channel\/)\S+/)) {
          const chanId = getCurrentChannelId();
          if(!chanId)
            return error("Couldn't extract channel ID from URL");

          document.querySelectorAll<HTMLElement>(".bytm-auto-like-toggle-btn").forEach((btn) => clearNode(btn));

          const recreateBtn = (headerCont: HTMLElement) => {
            const titleCont = headerCont.querySelector<HTMLElement>("ytd-channel-name #container, yt-dynamic-text-view-model.page-header-view-model-wiz__page-header-title");
            if(!titleCont)
              return;

            const checkBtn = () => setTimeout(() => {
              if(!document.querySelector(".bytm-auto-like-toggle-btn"))
                recreateBtn(headerCont);
            }, 350);

            const chanName = titleCont.querySelector<HTMLElement>("yt-formatted-string, span.yt-core-attributed-string")?.textContent ?? null;
            log("Re-rendering auto-like toggle button for channel", chanName, "with ID", chanId);

            const buttonsCont = headerCont.querySelector<HTMLElement>("#inner-header-container #buttons, yt-flexible-actions-view-model");
            if(buttonsCont) {
              addSelectorListener<0, "yt">("ytAppHeader", "#channel-header-container #other-buttons, yt-flexible-actions-view-model .yt-flexible-actions-view-model-wiz__action", {
                listener: (otherBtns) =>
                  addAutoLikeToggleBtn(otherBtns, chanId, chanName, ["left-margin", "right-margin"]).then(checkBtn),
              });
            }
            else if(titleCont)
              addAutoLikeToggleBtn(titleCont, chanId, chanName).then(checkBtn);
          };

          addSelectorListener<0, "yt">("ytAppHeader", "#channel-header-container, #page-header", {
            listener: recreateBtn,
          });
        }
      });
    }

    log("Initialized auto-like channels feature");
  }
  catch(err) {
    error("Error while auto-liking channel:", err);
  }
}

//#SECTION toggle btn

/** Adds a toggle button to enable or disable auto-liking videos from a channel */
async function addAutoLikeToggleBtn(siblingEl: HTMLElement, channelId: string, channelName: string | null, extraClasses?: string[]) {
  const chan = autoLikeStore.getData().channels.find((ch) => ch.id === channelId);

  log(`Adding auto-like toggle button for channel with ID '${channelId}' - current state:`, chan);

  siteEvents.on("autoLikeChannelsUpdated", () => {
    const buttonEl = document.querySelector<HTMLElement>(`.bytm-auto-like-toggle-btn[data-channel-id="${channelId}"]`);
    if(!buttonEl)
      return warn("Couldn't find auto-like toggle button for channel ID:", channelId);

    const enabled = autoLikeStore.getData().channels.find((ch) => ch.id === channelId)?.enabled ?? false;
    if(enabled)
      buttonEl.classList.add("toggled");
    else
      buttonEl.classList.remove("toggled");
  });

  const buttonEl = await createLongBtn({
    resourceName: `icon-auto_like${chan?.enabled ? "_enabled" : ""}`,
    text: t("auto_like"),
    title: t(`auto_like_button_tooltip${chan?.enabled ? "_enabled" : "_disabled"}`),
    toggle: true,
    toggleInitialState: chan?.enabled ?? false,
    togglePredicate(e) {
      e.shiftKey && getAutoLikeDialog().then((dlg) => dlg.open());
      return !e.shiftKey;
    },
    async onToggle(toggled) {
      try {
        await autoLikeStore.loadData();

        buttonEl.title = buttonEl.ariaLabel = t(`auto_like_button_tooltip${toggled ? "_enabled" : "_disabled"}`);

        const chanId = sanitizeChannelId(buttonEl.dataset.channelId ?? channelId);

        const imgEl = buttonEl.querySelector<HTMLElement>(".bytm-generic-btn-img");
        imgEl && setInnerHtml(imgEl, await resourceAsString(`icon-auto_like${toggled ? "_enabled" : ""}`));

        if(autoLikeStore.getData().channels.find((ch) => ch.id === chanId) === undefined) {
          await autoLikeStore.setData({
            channels: [
              ...autoLikeStore.getData().channels,
              { id: chanId, name: channelName ?? "", enabled: toggled },
            ],
          });
        }
        else {
          await autoLikeStore.setData({
            channels: autoLikeStore.getData().channels
              .map((ch) => ch.id === chanId ? { ...ch, enabled: toggled } : ch),
          });
        }

        emitSiteEvent("autoLikeChannelsUpdated");
        showIconToast({
          message: toggled ? t("auto_like_enabled_toast") : t("auto_like_disabled_toast"),
          subtitle: t("auto_like_click_to_configure"),
          icon: `icon-auto_like${toggled ? "_enabled" : ""}`,
          onClick: () => getAutoLikeDialog().then((dlg) => dlg.open()),
        }).catch(e => error("Error while showing auto-like toast:", e));
        log(`Toggled auto-like for channel '${channelName}' (ID: '${chanId}') to ${toggled ? "enabled" : "disabled"}`);
      }
      catch(err) {
        error("Error while toggling auto-like channel:", err);
      }
    }
  });
  buttonEl.classList.add(...["bytm-auto-like-toggle-btn", ...(extraClasses ?? [])]);
  buttonEl.dataset.channelId = channelId;

  siblingEl.insertAdjacentElement("afterend", createRipple(buttonEl));

  siteEvents.on("autoLikeChannelsUpdated", async () => {
    const buttonEl = document.querySelector<HTMLElement>(`.bytm-auto-like-toggle-btn[data-channel-id="${channelId}"]`);
    if(!buttonEl)
      return;

    const enabled = autoLikeStore.getData().channels.find((ch) => ch.id === channelId)?.enabled ?? false;
    if(enabled)
      buttonEl.classList.add("toggled");
    else
      buttonEl.classList.remove("toggled");

    const imgEl = buttonEl.querySelector<HTMLElement>(".bytm-generic-btn-img");
    imgEl && setInnerHtml(imgEl, await resourceAsString(`icon-auto_like${enabled ? "_enabled" : ""}`));
  });
}
