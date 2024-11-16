import { DataStore, clamp, compress, decompress } from "@sv443-network/userutils";
import { error, getVideoTime, info, log, warn, getDomain, compressionSupported, t, clearNode, resourceAsString, getCurrentChannelId, getCurrentMediaType, sanitizeChannelId, addStyleFromResource, isValidChannelId, getVideoElement, setInnerHtml } from "../utils/index.js";
import type { AutoLikeData, Domain } from "../types.js";
import { disableBeforeUnload } from "./behavior.js";
import { emitSiteEvent, siteEvents } from "../siteEvents.js";
import { featInfo } from "./index.js";
import { getFeature } from "../config.js";
import { compressionFormat } from "../constants.js";
import { addSelectorListener } from "../observers.js";
import { createLongBtn, createRipple, showIconToast } from "../components/index.js";
import { getAutoLikeDialog } from "../dialogs/index.js";
import "./input.css";

export const inputIgnoreTagNames = ["INPUT", "TEXTAREA", "SELECT", "BUTTON", "A"];

//#region arrow key skip

export async function initArrowKeySkip() {
  document.addEventListener("keydown", (evt) => {
    if(!getFeature("arrowKeySupport"))
      return;

    if(!["ArrowLeft", "ArrowRight"].includes(evt.code))
      return;

    const allowedClasses = ["bytm-generic-btn", "yt-spec-button-shape-next"];

    // discard the event when a (text) input is currently active, like when editing a playlist
    if(
      (inputIgnoreTagNames.includes(document.activeElement?.tagName ?? "") || ["volume-slider"].includes(document.activeElement?.id ?? ""))
      && !allowedClasses.some((cls) => document.activeElement?.classList.contains(cls))
    )
      return info(`Captured valid key to skip forward or backward but the current active element is <${document.activeElement?.tagName.toLowerCase()}>, so the keypress is ignored`);

    evt.preventDefault();
    evt.stopImmediatePropagation();

    let skipBy = getFeature("arrowKeySkipBy") ?? featInfo.arrowKeySkipBy.default;
    if(evt.code === "ArrowLeft")
      skipBy *= -1;

    log(`Captured arrow key '${evt.code}' - skipping by ${skipBy} seconds`);

    const vidElem = getVideoElement();

    if(vidElem)
      vidElem.currentTime = clamp(vidElem.currentTime + skipBy, 0, vidElem.duration);
  });
  log("Added arrow key press listener");
}

//#region site switch

/** switch sites only if current video time is greater than this value */
const videoTimeThreshold = 3;
let siteSwitchEnabled = true;

/** Initializes the site switch feature */
export async function initSiteSwitch(domain: Domain) {
  document.addEventListener("keydown", (e) => {
    if(!getFeature("switchBetweenSites"))
      return;
    if(inputIgnoreTagNames.includes(document.activeElement?.tagName ?? ""))
      return;
    const hk = getFeature("switchSitesHotkey");
    if(siteSwitchEnabled && e.code === hk.code && e.shiftKey === hk.shift && e.ctrlKey === hk.ctrl && e.altKey === hk.alt)
      switchSite(domain === "yt" ? "ytm" : "yt");
  });
  siteEvents.on("hotkeyInputActive", (state) => {
    if(!getFeature("switchBetweenSites"))
      return;
    siteSwitchEnabled = !state;
  });
  log("Initialized site switch listener");
}

/** Switches to the other site (between YT and YTM) */
async function switchSite(newDomain: Domain) {
  try {
    if(!(["/watch", "/playlist"].some(v => location.pathname.startsWith(v))))
      return warn("Not on a supported page, so the site switch is ignored");

    let subdomain;
    if(newDomain === "ytm")
      subdomain = "music";
    else if(newDomain === "yt")
      subdomain = "www";

    if(!subdomain)
      throw new Error(`Unrecognized domain '${newDomain}'`);

    disableBeforeUnload();

    const { pathname, search, hash } = new URL(location.href);

    const vt = await getVideoTime(0);

    log(`Found video time of ${vt} seconds`);

    const cleanSearch = search.split("&")
      .filter((param) => !param.match(/^\??(t|time_continue)=/))
      .join("&");

    const newSearch = typeof vt === "number" && vt > videoTimeThreshold ?
      cleanSearch.includes("?")
        ? `${cleanSearch.startsWith("?")
          ? cleanSearch
          : "?" + cleanSearch
        }&time_continue=${vt}`
        : `?time_continue=${vt}`
      : cleanSearch;
    const newUrl = `https://${subdomain}.youtube.com${pathname}${newSearch}${hash}`;

    info(`Switching to domain '${newDomain}' at ${newUrl}`);
    location.assign(newUrl);
  }
  catch(err) {
    error("Error while switching site:", err);
  }
}

//#region num keys skip

const numKeysIgnoreTagNames = [...inputIgnoreTagNames];

/** Adds the ability to skip to a certain time in the video by pressing a number key (0-9) */
export async function initNumKeysSkip() {
  document.addEventListener("keydown", (e) => {
    if(!getFeature("numKeysSkipToTime"))
      return;
    if(!e.key.trim().match(/^[0-9]$/))
      return;
    // discard the event when an unexpected element is currently active or in focus, like when editing a playlist or when the search bar is focused
    const ignoreElement = numKeysIgnoreTagNames.includes(document.activeElement?.tagName ?? "");
    if((document.activeElement !== document.body && ignoreElement) || ignoreElement)
      return info("Captured valid key to skip video to, but ignored it since this element is currently active:", document.activeElement);

    const vidElem = getVideoElement();
    if(!vidElem)
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

          if(artistEls.length === 0)
            return error("Couldn't auto-like channel because the artist element couldn't be found");

          const likeRendererEl = document.querySelector<HTMLElement>(".middle-controls-buttons ytmusic-like-button-renderer");
          const likeBtnEl = likeRendererEl?.querySelector<HTMLButtonElement>("#button-shape-like button");

          if(!likeRendererEl || !likeBtnEl)
            return error("Couldn't auto-like channel because the like button couldn't be found");

          if(likeRendererEl.getAttribute("like-status") !== "LIKE") {
            likeBtnEl.click();

            getFeature("autoLikeShowToast") && showIconToast({
              message: t(`auto_liked_a_channels_${getCurrentMediaType()}`, likeChan.name),
              subtitle: t("auto_like_click_to_configure"),
              icon: "icon-auto_like",
              onClick: () => getAutoLikeDialog().then((dlg) => dlg.open()),
            }).catch(e => error("Error while showing auto-like toast:", e));

            log(`Auto-liked ${getCurrentMediaType()} from channel '${likeChan.name}' (${likeChan.id})`);
          }
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
        const imgHtml = await resourceAsString(`icon-auto_like${toggled ? "_enabled" : ""}`);
        if(imgEl && imgHtml)
          setInnerHtml(imgEl, imgHtml);

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
    const imgHtml = await resourceAsString(`icon-auto_like${enabled ? "_enabled" : ""}`);
    if(imgEl && imgHtml)
      setInnerHtml(imgEl, imgHtml);
  });
}
