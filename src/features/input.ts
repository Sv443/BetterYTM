import { clamp } from "@sv443-network/userutils";
import { error, getVideoTime, info, log, warn, ytmVideoSelector } from "../utils";
import type { Domain, FeatureConfig } from "../types";
import { isCfgMenuOpen } from "../menu/menu_old";
import { disableBeforeUnload } from "./behavior";
import { siteEvents } from "../siteEvents";
import { featInfo } from "./index";

let features: FeatureConfig;

export function preInitInput(feats: FeatureConfig) {
  features = feats;
}

//#MARKER arrow key skip

export async function initArrowKeySkip() {
  document.addEventListener("keydown", (evt) => {
    if(!["ArrowLeft", "ArrowRight"].includes(evt.code))
      return;
    // discard the event when a (text) input is currently active, like when editing a playlist
    if(["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName ?? "_"))
      return info(`Captured valid key to skip forward or backward but the current active element is <${document.activeElement?.tagName.toLowerCase()}>, so the keypress is ignored`);

    evt.preventDefault();
    evt.stopImmediatePropagation();

    let skipBy = features.arrowKeySkipBy ?? featInfo.arrowKeySkipBy.default;
    if(evt.code === "ArrowLeft")
      skipBy *= -1;

    log(`Captured arrow key '${evt.code}' - skipping by ${skipBy} seconds`);
    
    const vidElem = document.querySelector<HTMLVideoElement>(ytmVideoSelector);
    
    if(vidElem)
      vidElem.currentTime = clamp(vidElem.currentTime + skipBy, 0, vidElem.duration);
  });
  log("Added arrow key press listener");
}

//#MARKER site switch

/** switch sites only if current video time is greater than this value */
const videoTimeThreshold = 3;
let siteSwitchEnabled = true;

/** Initializes the site switch feature */
export async function initSiteSwitch(domain: Domain) {
  document.addEventListener("keydown", (e) => {
    const hotkey = features.switchSitesHotkey;
    if(siteSwitchEnabled && e.code === hotkey.code && e.shiftKey === hotkey.shift && e.ctrlKey === hotkey.ctrl && e.altKey === hotkey.alt)
      switchSite(domain === "yt" ? "ytm" : "yt");
  });
  siteEvents.on("hotkeyInputActive", (state) => {
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

    const vt = await getVideoTime();

    log(`Found video time of ${vt} seconds`);

    const cleanSearch = search.split("&")
      .filter((param) => !param.match(/^\??t=/))
      .join("&");

    const newSearch = typeof vt === "number" && vt > videoTimeThreshold ?
      cleanSearch.includes("?")
        ? `${cleanSearch.startsWith("?")
          ? cleanSearch
          : "?" + cleanSearch
        }&t=${vt - 1}`
        : `?t=${vt - 1}`
      : cleanSearch;
    const newUrl = `https://${subdomain}.youtube.com${pathname}${newSearch}${hash}`;

    info(`Switching to domain '${newDomain}' at ${newUrl}`);
    location.assign(newUrl);
  }
  catch(err) {
    error("Error while switching site:", err);
  }
}

//#MARKER number keys skip to time

/** Adds the ability to skip to a certain time in the video by pressing a number key (0-9) */
export async function initNumKeysSkip() {
  document.addEventListener("keydown", (e) => {
    if(!e.key.trim().match(/^[0-9]$/))
      return;
    if(isCfgMenuOpen)
      return;
    // discard the event when a (text) input is currently active, like when editing a playlist or when the search bar is focused
    if(
      document.activeElement !== document.body
      && !["progress-bar"].includes(document.activeElement?.id ?? "_")
      && !["BUTTON", "A"].includes(document.activeElement?.tagName ?? "_")
    )
      return info("Captured valid key to skip video to but an unexpected element is focused, so the keypress is ignored");

    const vidElem = document.querySelector<HTMLVideoElement>(ytmVideoSelector);
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
