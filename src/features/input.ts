import { DataStore, clamp, compress, decompress } from "@sv443-network/userutils";
import { error, getVideoTime, info, log, warn, getVideoSelector, getDomain, compressionSupported, t, clearNode, resourceToHTMLString } from "../utils";
import type { Domain } from "../types";
import { isCfgMenuOpen } from "../menu/menu_old";
import { disableBeforeUnload } from "./behavior";
import { siteEvents } from "../siteEvents";
import { featInfo } from "./index";
import { getFeatures } from "../config";
import { compressionFormat } from "../constants";
import { addSelectorListener } from "../observers";
import { createLongBtn } from "../components/longButton";
import { getAutoLikeChannelsDialog, initAutoLikeChannelsStore } from "../dialogs";
import "./input.css";

export const inputIgnoreTagNames = ["INPUT", "TEXTAREA", "SELECT", "BUTTON", "A"];

//#region arrow key skip

export async function initArrowKeySkip() {
  document.addEventListener("keydown", (evt) => {
    if(!getFeatures().arrowKeySupport)
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

    let skipBy = getFeatures().arrowKeySkipBy ?? featInfo.arrowKeySkipBy.default;
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
    if(!getFeatures().switchBetweenSites)
      return;
    const hk = getFeatures().switchSitesHotkey;
    if(siteSwitchEnabled && e.code === hk.code && e.shiftKey === hk.shift && e.ctrlKey === hk.ctrl && e.altKey === hk.alt)
      switchSite(domain === "yt" ? "ytm" : "yt");
  });
  siteEvents.on("hotkeyInputActive", (state) => {
    if(!getFeatures().switchBetweenSites)
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
const numKeysIgnoreIds = ["progress-bar", "song-media-window"];

/** Adds the ability to skip to a certain time in the video by pressing a number key (0-9) */
export async function initNumKeysSkip() {
  document.addEventListener("keydown", (e) => {
    if(!getFeatures().numKeysSkipToTime)
      return;
    if(!e.key.trim().match(/^[0-9]$/))
      return;
    if(isCfgMenuOpen)
      return;
    // discard the event when an unexpected element is currently active or in focus, like when editing a playlist or when the search bar is focused
    if(
      document.activeElement !== document.body // short-circuit if nothing is active
      || numKeysIgnoreIds.includes(document.activeElement?.id ?? "") // video element or player bar active
      || numKeysIgnoreTagNames.includes(document.activeElement?.tagName ?? "") // other element active
    )
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

export const autoLikeChannelsStore = new DataStore<{
  channels: {
    id: string;
    name: string;
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

export async function initAutoLikeChannels() {
  try {
    canCompress = await compressionSupported();
    await initAutoLikeChannelsStore();
    if(getDomain() === "ytm") {
      let timeout: NodeJS.Timeout;
      // TODO:FIXME: needs actual fix instead of timeout
      siteEvents.on("songTitleChanged", () => {
        timeout && clearTimeout(timeout);
        timeout = setTimeout(() => {
          // TODO: support multiple artists
          const artistEls = document.querySelectorAll<HTMLAnchorElement>("ytmusic-player-bar .content-info-wrapper .subtitle a.yt-formatted-string[href]");
          const channelIds = [...artistEls].map(a => a.href.split("/").pop()).filter(a => typeof a === "string") as string[];

          const likeChan = autoLikeChannelsStore.getData().channels.find((ch) => channelIds.includes(ch.id));

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
        }, 5_000);
      });

      siteEvents.on("pathChanged", (path) => {
        if(path.match(/\/channel\/.+/)) {
          const chanId = path.split("/").pop();
          if(!chanId)
            return error("Couldn't extract channel ID from URL");

          document.querySelectorAll<HTMLElement>(".bytm-auto-like-toggle-btn").forEach((btn) => clearNode(btn));

          addSelectorListener("browseResponse", "ytmusic-browse-response #header .actions .buttons", {
            listener(buttonsCont) {
              const lastBtn = buttonsCont.querySelector<HTMLElement>("ytmusic-subscribe-button-renderer");
              const chanName = document.querySelector<HTMLElement>("ytmusic-immersive-header-renderer .content-container yt-formatted-string[role=\"heading\"]")?.textContent ?? null;
              lastBtn && addAutoLikeToggleBtn(lastBtn, chanId, chanName);
            }
          });
        }
      });
    }
    else if(getDomain() === "yt") {
      // TODO:
    }
  }
  catch(err) {
    error("Error while auto-liking channel:", err);
  }
}

async function addAutoLikeToggleBtn(sibling: HTMLElement, chanId: string, chanName: string | null) {
  const chan = autoLikeChannelsStore.getData().channels.find((ch) => ch.id === chanId);

  const buttonEl = await createLongBtn({
    resourceName: `icon-auto_like${chan?.enabled ? "_enabled" : "_disabled"}`,
    text: t("auto_like"),
    title: t("auto_like_channel_toggle"),
    toggle: true,
    toggleInitialState: chan?.enabled ?? false,
    async onToggle(toggled, evt) {
      if(evt.shiftKey) {
        buttonEl.classList.toggle("toggled");
        getAutoLikeChannelsDialog().then((dlg) => dlg.open());
        return;
      }

      const imgEl = buttonEl.querySelector<HTMLElement>(".bytm-generic-btn-img");
      const imgHtml = await resourceToHTMLString(`icon-auto_like_${toggled ? "enabled" : "disabled"}`);
      if(imgEl && imgHtml)
        imgEl.innerHTML = imgHtml;

      if(autoLikeChannelsStore.getData().channels.find((ch) => ch.id === chanId) === undefined) {
        await autoLikeChannelsStore.setData({
          channels: [
            ...autoLikeChannelsStore.getData().channels,
            { id: chanId, name: chanName ?? "", enabled: toggled },
          ],
        });
      }
      else {
        await autoLikeChannelsStore.setData({
          channels: autoLikeChannelsStore.getData().channels
            .map((ch) => ch.id === chanId ? { ...ch, enabled: toggled } : ch),
        });
      }
    }
  });
  buttonEl.classList.add("bytm-auto-like-toggle-btn");
  buttonEl.dataset.channelId = chanId;

  sibling.insertAdjacentElement("afterend", buttonEl);
}
