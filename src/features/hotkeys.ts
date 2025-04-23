import { getUnsafeWindow } from "@sv443-network/userutils";
import { getFeature } from "../config.js";
import { inputIgnoreTagNames } from "./input.js";
import { siteEvents } from "../siteEvents.js";
import { enableDiscardBeforeUnload, remTimeTryRestoreTime } from "./behavior.js";
import { getLikeDislikeBtns, getVideoTime } from "../utils/dom.js";
import { getDomain } from "../utils/misc.js";
import { error, info, log, warn } from "../utils/logging.js";
import type { Domain, FeatKeysOfType, HotkeyObj } from "../types.js";

export async function initHotkeys() {
  const promises: Promise<void>[] = [];

  promises.push(initLikeDislikeHotkeys());
  promises.push(initLyricsHotkey());
  promises.push(initSiteSwitch());
  promises.push(initProxyHotkeys());
  promises.push(initSkipToRemTimeHotkey());

  return await Promise.allSettled(promises);
}

function hotkeyMatches(e: KeyboardEvent, hk: HotkeyObj) {
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
    if(siteSwitchEnabled && hotkeyMatches(e, getFeature("switchSitesHotkey")))
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

    const { likeBtn, dislikeBtn } = getLikeDislikeBtns();

    if(hotkeyMatches(e, getFeature("likeHotkey")))
      likeBtn?.click();
    else if(hotkeyMatches(e, getFeature("dislikeHotkey")))
      dislikeBtn?.click();
  });
}

//#region lyrics

async function initLyricsHotkey() {
  document.addEventListener("keydown", (e) => {
    if(!getFeature("currentLyricsHotkeyEnabled"))
      return;
    if(inputIgnoreTagNames.includes(document.activeElement?.tagName ?? ""))
      return;

    if(hotkeyMatches(e, getFeature("currentLyricsHotkey"))) {
      e.preventDefault();
      e.stopImmediatePropagation();

      const lyricsBtn = document.getElementById("bytm-player-bar-lyrics-btn");
      lyricsBtn?.click();
    }
  }, { capture: true });
}

//#region skip to remembered

async function initSkipToRemTimeHotkey() {
  document.addEventListener("keydown", async (e) => {
    if(!getFeature("skipToRemTimeHotkeyEnabled"))
      return;
    if(inputIgnoreTagNames.includes(document.activeElement?.tagName ?? ""))
      return;

    if(hotkeyMatches(e, getFeature("skipToRemTimeHotkey"))) {
      e.preventDefault();
      e.stopImmediatePropagation();

      await remTimeTryRestoreTime(true);
    }
  });
}

//#region proxy hotkeys

//TODO:FIXME: proxy hotkeys are triggered when input is active

type HotkeyProxyGroup = {
  /** The feature key that contains the hotkey object */
  hkFeatKey: FeatKeysOfType<HotkeyObj>;
  /** Which key should have its default action and propagation prevented */
  preventKey?: string;
  /** Called when the hotkey was pressed and the feature is toggled on */
  onPress: (e: KeyboardEvent) => void | Promise<void>;
};

type ProxyHotkeys = Partial<Record<FeatKeysOfType<boolean>, HotkeyProxyGroup[]>>;

let lastProxyHk = 0;

/** Handles all proxy hotkeys, which trigger other hotkeys instead of their own actions */
async function initProxyHotkeys() {
  const dispatchProxyKey = (hkProps: Pick<KeyboardEventInit, "code" | "key" | "keyCode" | "which" | "shiftKey" | "ctrlKey" | "altKey" | "metaKey">) => {
    document.body.dispatchEvent(new KeyboardEvent("keydown", {
      ...hkProps,
      bubbles: true,
      cancelable: false,
      view: getUnsafeWindow(),
    }));
    log("Dispatched proxy hotkey:", hkProps);
  };

  /** All proxy hotkey groups, identified by the feature key that toggles them off or on */
  const proxyHotkeys: ProxyHotkeys = {
    rebindNextAndPrevious: [
      {
        hkFeatKey: "nextHotkey",
        preventKey: "KeyJ",
        onPress: () => dispatchProxyKey({
          code: "KeyJ",
          key: "j",
          keyCode: 74,
          which: 74,
        }),
      },
      {
        hkFeatKey: "previousHotkey",
        preventKey: "KeyK",
        onPress: () => dispatchProxyKey({
          code: "KeyK",
          key: "k",
          keyCode: 75,
          which: 75,
        }),
      },
    ],
    rebindPlayPause: [
      {
        hkFeatKey: "playPauseHotkey",
        preventKey: "Space",
        onPress: () => dispatchProxyKey({
          code: "Space",
          key: " ",
          keyCode: 32,
          which: 32,
        }),
      },
    ]
  } as const;

  document.addEventListener("keydown", (e) => {
    if(inputIgnoreTagNames.includes(document.activeElement?.tagName ?? ""))
      return;

    for(const [featKey, proxyGroup] of Object.entries(proxyHotkeys)) {
      if(getFeature(featKey as "_") !== true)
        continue;

      for(const { hkFeatKey, onPress, ...rest } of proxyGroup) {
        // prevent hotkeys from triggering each other:
        if(Date.now() - lastProxyHk < 15) // (holding keys makes them repeat every ~30ms)
          continue;
        const nowTs = Date.now();

        if("preventKey" in rest && e.code === rest.preventKey) {
          e.preventDefault();
          e.stopImmediatePropagation();
        }

        if(hotkeyMatches(e, getFeature(hkFeatKey))) {
          lastProxyHk = nowTs;
          !e.defaultPrevented && e.preventDefault();
          e.bubbles && e.stopImmediatePropagation();
          onPress(e);
        }
      }
    }
  }, {
    // ensure precedence over YTM's own listeners:
    capture: true,
  });
}
