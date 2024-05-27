import { DataStore, clamp, compress, decompress } from "@sv443-network/userutils";
import { error, getVideoTime, info, log, warn, getVideoSelector, getDomain, compressionSupported, t, clearNode, resourceToHTMLString } from "../utils";
import type { Domain } from "../types";
import { isCfgMenuOpen } from "../menu/menu_old";
import { disableBeforeUnload } from "./behavior";
import { siteEvents } from "../siteEvents";
import { featInfo } from "./index";
import { getFeature } from "../config";
import { compressionFormat } from "../constants";
import { addSelectorListener } from "../observers";
import { createLongBtn, showIconToast } from "../components";
import { getAutoLikeDialog } from "../dialogs";
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
    
    const vidElem = document.querySelector<HTMLVideoElement>(getVideoSelector());
    
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
      .filter((param) => !param.match(/^\??t=/))
      .join("&");

    const newSearch = typeof vt === "number" && vt > videoTimeThreshold ?
      cleanSearch.includes("?")
        ? `${cleanSearch.startsWith("?")
          ? cleanSearch
          : "?" + cleanSearch
        }&t=${vt}`
        : `?t=${vt}`
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

const numKeysIgnoreTagNames = [...inputIgnoreTagNames, "TP-YT-PAPER-TAB"];
const numKeysIgnoreIds = ["song-media-window"];

/** Adds the ability to skip to a certain time in the video by pressing a number key (0-9) */
export async function initNumKeysSkip() {
  document.addEventListener("keydown", (e) => {
    if(!getFeature("numKeysSkipToTime"))
      return;
    if(!e.key.trim().match(/^[0-9]$/))
      return;
    if(isCfgMenuOpen)
      return;
    // discard the event when an unexpected element is currently active or in focus, like when editing a playlist or when the search bar is focused
    const ignoreElement = numKeysIgnoreIds.includes(document.activeElement?.id ?? "") // video element or player bar active
      || numKeysIgnoreTagNames.includes(document.activeElement?.tagName ?? ""); // other element active
    if((document.activeElement !== document.body && ignoreElement) || ignoreElement)
      return info("Captured valid key to skip video to, but ignored it since an unexpected element is active:", document.activeElement);

    const vidElem = document.querySelector<HTMLVideoElement>(getVideoSelector());
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

//#region auto-like channels

let canCompress = false;

/** DataStore instance for all auto-liked channels */
export const autoLikeStore = new DataStore<{
  channels: {
    /** 24-character channel ID or user ID without the @ */
    id: string;
    /** Channel name (for display purposes only) */
    name: string;
    /** Whether the channel should be auto-liked */
    enabled: boolean;
  }[];
}>({
  id: "bytm-auto-like-channels",
  formatVersion: 1,
  defaultData: {
    channels: [],
  },
  encodeData: (data) => canCompress ? compress(data, compressionFormat, "string") : data,
  decodeData: (data) => canCompress ? decompress(data, compressionFormat, "string") : data,
  // migrations: {},
});

let autoLikeStoreLoaded = false;

/** Inits the auto-like DataStore instance */
export function initAutoLikeStore() {
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
    if(getDomain() === "ytm") {
      let timeout: NodeJS.Timeout;
      siteEvents.on("songTitleChanged", () => {
        timeout && clearTimeout(timeout);
        timeout = setTimeout(() => {
          // TODO: support multiple artists
          const artistEls = document.querySelectorAll<HTMLAnchorElement>("ytmusic-player-bar .content-info-wrapper .subtitle a.yt-formatted-string[href]");
          const channelIds = [...artistEls].map(a => a.href.split("/").pop()).filter(a => typeof a === "string") as string[];

          const likeChan = autoLikeStore.getData().channels.find((ch) => channelIds.includes(ch.id));

          if(!likeChan || !likeChan.enabled)
            return;

          if(artistEls.length === 0)
            return error("Couldn't auto-like channel because the artist element couldn't be found");

          const likeRenderer = document.querySelector<HTMLElement>(".middle-controls-buttons ytmusic-like-button-renderer");
          const likeBtn = likeRenderer?.querySelector<HTMLButtonElement>("#button-shape-like button");

          if(!likeRenderer || !likeBtn)
            return error("Couldn't auto-like channel because the like button couldn't be found");

          if(likeRenderer.getAttribute("like-status") !== "LIKE") {
            likeBtn.click();
            log(`Auto-liked channel '${likeChan.name}' (ID: '${likeChan.id}')`);
          }
        }, (getFeature("autoLikeTimeout") ?? 5) * 1000);
      });

      siteEvents.on("pathChanged", (path) => {
        if(getFeature("autoLikeChannelToggleBtn") && path.match(/\/channel\/.+/)) {
          const chanId = path.split("/").pop();
          if(!chanId)
            return error("Couldn't extract channel ID from URL");

          document.querySelectorAll<HTMLElement>(".bytm-auto-like-toggle-btn").forEach((btn) => clearNode(btn));

          addSelectorListener("browseResponse", "ytmusic-browse-response #header.ytmusic-browse-response", {
            listener(headerCont) {
              const buttonsCont = headerCont.querySelector<HTMLElement>(".buttons");
              if(buttonsCont) {
                const lastBtn = buttonsCont.querySelector<HTMLElement>("ytmusic-subscribe-button-renderer");
                const chanName = document.querySelector<HTMLElement>("ytmusic-immersive-header-renderer .content-container yt-formatted-string[role=\"heading\"]")?.textContent ?? null;
                lastBtn && addAutoLikeToggleBtn(lastBtn, chanId, chanName);
              }
              else {
                // some channels don't have a subscribe button and instead only have a "share" button for some bullshit reason
                // (this is only the case on YTM, on YT the subscribe button exists and works perfectly fine)

                const shareBtnEl = headerCont.querySelector<HTMLElement>("ytmusic-menu-renderer #top-level-buttons yt-button-renderer:last-of-type");
                const chanName = headerCont.querySelector<HTMLElement>("ytmusic-visual-header-renderer .content-container h2 yt-formatted-string")?.textContent ?? null;
                shareBtnEl && chanName && addAutoLikeToggleBtn(shareBtnEl, chanId, chanName);
              }
            }
          });
        }
      });
    }
    else if(getDomain() === "yt") {
      let timeout: NodeJS.Timeout;
      siteEvents.on("watchIdChanged", () => {
        timeout && clearTimeout(timeout);
        if(!location.pathname.startsWith("/watch"))
          return;
        timeout = setTimeout(() => {
          addSelectorListener<HTMLAnchorElement, "yt">("watchMetadata", "#owner ytd-channel-name yt-formatted-string a", {
            listener(chanElem) {
              let chanId = chanElem.href.split("/").pop();
              if(chanId?.startsWith("@"))
                chanId = chanId.slice(1);

              const likeChan = autoLikeStore.getData().channels.find((ch) => ch.id === chanId);
              if(!likeChan || !likeChan.enabled)
                return;

              addSelectorListener<0, "yt">("watchMetadata", "#actions ytd-menu-renderer like-button-view-model button", {
                listener(likeBtn) {
                  if(likeBtn.getAttribute("aria-pressed") !== "true") {
                    likeBtn.click();
                    getFeature("autoLikeShowToast") && showIconToast({
                      message: t("auto_liked_video"),
                      icon: "icon-auto_like",
                    });
                    log(`Auto-liked channel '${likeChan.name}' (ID: '${likeChan.id}')`);
                  }
                }
              });
            }
          });
        }, (getFeature("autoLikeTimeout") ?? 5) * 1000);
      });

      siteEvents.on("pathChanged", (path) => {
        if(path.match(/(\/?@|\/channel\/).+/)) {
          const chanId = path.split("/").pop()?.replace(/@/g, "");
          if(!chanId)
            return error("Couldn't extract channel ID from URL");

          document.querySelectorAll<HTMLElement>(".bytm-auto-like-toggle-btn").forEach((btn) => clearNode(btn));

          addSelectorListener<0, "yt">("ytChannelHeader", "#channel-header-container", {
            listener(headerCont) {
              const titleCont = headerCont.querySelector<HTMLElement>("ytd-channel-name #container");
              if(!titleCont)
                return;

              const chanName = titleCont.querySelector<HTMLElement>("yt-formatted-string")?.textContent ?? null;

              const buttonsCont = headerCont.querySelector<HTMLElement>("#inner-header-container #buttons");
              if(buttonsCont) {
                addSelectorListener<0, "yt">("ytChannelHeader", "#channel-header-container #other-buttons", {
                  listener(otherBtns) {
                    addAutoLikeToggleBtn(otherBtns, chanId, chanName, ["left-margin"]);
                  }
                });
              }
              else if(titleCont)
                addAutoLikeToggleBtn(titleCont, chanId, chanName);
            }
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

async function addAutoLikeToggleBtn(siblingEl: HTMLElement, channelId: string, channelName: string | null, extraClasses?: string[]) {
  const chan = autoLikeStore.getData().channels.find((ch) => ch.id === channelId);

  const buttonEl = await createLongBtn({
    resourceName: `icon-auto_like${chan?.enabled ? "_enabled" : ""}`,
    text: t("auto_like"),
    title: t(`auto_like_button_tooltip${chan?.enabled ? "_enabled" : "_disabled"}`),
    toggle: true,
    toggleInitialState: chan?.enabled ?? false,
    async onToggle(toggled, evt) {
      try {
        await autoLikeStore.loadData();

        if(evt.shiftKey) {
          buttonEl.classList.toggle("toggled");
          getAutoLikeDialog().then((dlg) => dlg.open());
          return;
        }

        buttonEl.title = buttonEl.ariaLabel = t(`auto_like_button_tooltip${toggled ? "_enabled" : "_disabled"}`);

        const chanId = buttonEl.dataset.channelId ?? channelId;

        const imgEl = buttonEl.querySelector<HTMLElement>(".bytm-generic-btn-img");
        const imgHtml = await resourceToHTMLString(`icon-auto_like${toggled ? "_enabled" : ""}`);
        if(imgEl && imgHtml)
          imgEl.innerHTML = imgHtml;

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
        showIconToast({
          message: toggled ? t("auto_like_enabled_toast") : t("auto_like_disabled_toast"),
          icon: `icon-auto_like${toggled ? "_enabled" : ""}`,
        });
        log(`Toggled auto-like for channel '${channelName}' (ID: '${chanId}') to ${toggled ? "enabled" : "disabled"}`);
      }
      catch(err) {
        error("Error while toggling auto-like channel:", err);
      }
    }
  });
  buttonEl.classList.add(...["bytm-auto-like-toggle-btn", ...(extraClasses ?? [])]);
  buttonEl.dataset.channelId = channelId;

  siblingEl.insertAdjacentElement("afterend", buttonEl);
}
