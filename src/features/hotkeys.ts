import { getFeature } from "../config.js";
import { inputIgnoreTagNames } from "./input.js";
import { siteEvents } from "../siteEvents.js";
import { enableDiscardBeforeUnload } from "./behavior.js";
import { getVideoTime } from "../utils/dom.js";
import { getDomain } from "../utils/misc.js";
import { error, info, log, warn } from "../utils/logging.js";
import type { Domain, HotkeyObj } from "../types.js";

export async function initHotkeys() {
  const promises: Promise<void>[] = [];

  if(getFeature("likeDislikeHotkeys"))
    promises.push(initLikeDislikeHotkeys());

  if(getFeature("switchBetweenSites"))
    promises.push(initSiteSwitch());

  return await Promise.allSettled(promises);
}

function keyPressed(e: KeyboardEvent, hk: HotkeyObj) {
  return e.code === hk.code && e.shiftKey === hk.shift && e.ctrlKey === hk.ctrl && e.altKey === hk.alt;
}

//#region site switch

/** switch sites only if current video time is greater than this value */
const videoTimeThreshold = 3;
let siteSwitchEnabled = true;

/** Initializes the site switch feature */
export async function initSiteSwitch() {
  const domain = getDomain();
  document.addEventListener("keydown", (e) => {
    if(!getFeature("switchBetweenSites"))
      return;
    if(inputIgnoreTagNames.includes(document.activeElement?.tagName ?? ""))
      return;
    if(siteSwitchEnabled && keyPressed(e, getFeature("switchSitesHotkey")))
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

    enableDiscardBeforeUnload();

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

//#region like/dislike

async function initLikeDislikeHotkeys() {
  document.addEventListener("keydown", (e) => {
    if(!getFeature("likeDislikeHotkeys"))
      return;
    if(inputIgnoreTagNames.includes(document.activeElement?.tagName ?? ""))
      return;

    if(keyPressed(e, getFeature("likeHotkey"))) {
      const likeRendererEl = document.querySelector<HTMLElement>(".middle-controls-buttons ytmusic-like-button-renderer");
      const likeBtnEl = likeRendererEl?.querySelector<HTMLButtonElement>("#button-shape-like button");
      likeBtnEl?.click();
    }
    else if(keyPressed(e, getFeature("dislikeHotkey"))) {
      const dislikeRendererEl = document.querySelector<HTMLElement>(".middle-controls-buttons ytmusic-like-button-renderer");
      const dislikeBtnEl = dislikeRendererEl?.querySelector<HTMLButtonElement>("#button-shape-dislike button");
      dislikeBtnEl?.click();
    }
  });
}
