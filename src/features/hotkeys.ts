import { getUnsafeWindow } from "@sv443-network/userutils";
import { enableDiscardBeforeUnload, remTimeTryRestoreTime } from "./behavior.js";
import { isIgnoredInputElement } from "./input.js";
import { getFeature } from "../config.js";
import { siteEvents } from "../siteEvents.js";
import { getLikeDislikeBtns, getVideoTime } from "../utils/dom.js";
import { getDomain } from "../utils/misc.js";
import { error, info, log, warn } from "../utils/logging.js";
import type { Domain, FeatKeysOfType, HotkeyObj } from "../types.js";

//#region init

export async function initHotkeys() {
  const promises: Promise<void>[] = [];

  if(getDomain() === "ytm")
    promises.push(initLyricsHotkey());

  promises.push(initLikeDislikeHotkeys());
  promises.push(initSiteSwitch());
  promises.push(initProxyHotkeys());
  promises.push(initSkipToRemTimeHotkey());
  promises.push(initSearchBarHotkeys());

  return await Promise.allSettled(promises);
}

//#region utils

/** Checks whether the given keyboard event matches the given hotkey object. */
function hotkeyMatches(evt: KeyboardEvent, hk: HotkeyObj) {
  return evt.code === hk.code
    && evt.shiftKey === hk.shift
    && evt.ctrlKey === hk.ctrl
    && evt.altKey === hk.alt;
}

/** Prevents bubbling and the default action of the given event. */
function preventBubble(evt: Event) {
  evt.preventDefault();
  evt.stopImmediatePropagation();
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
    if(isIgnoredInputElement())
      return;
    if(siteSwitchEnabled && hotkeyMatches(e, getFeature("switchSitesHotkey")))
      switchSite(domain === "yt" ? "ytm" : "yt");
  }, { capture: true });
  siteEvents.on("hotkeyInputActive", (hkInputActive) => {
    if(!getFeature("switchBetweenSites"))
      return;
    siteSwitchEnabled = !hkInputActive;
  });
  log("Initialized site switch listener");
}

/** Switches to the other site (between YT and YTM) */
async function switchSite(newDomain: Domain) {
  try {
    if(!(["/watch", "/playlist"].some(v => location.pathname.startsWith(v))))
      return warn("Not on a supported page, so the site switch is ignored");

    let subdomain: "music" | "www" | undefined;
    if(newDomain === "ytm")
      subdomain = "music";
    else if(newDomain === "yt")
      subdomain = "www";

    if(!subdomain)
      throw new Error(`Unrecognized domain '${newDomain}'`);

    enableDiscardBeforeUnload();

    const { pathname, search, hash } = new URL(location.href);

    const time = await getVideoTime(0);

    log(`Found video time of ${time} seconds`);

    const cleanSearch = search.split("&")
      .filter((param) => !param.match(/^\??(t|time_continue)=/))
      .join("&");

    const newSearch = typeof time === "number" && time > videoTimeThreshold ?
      cleanSearch.includes("?")
        ? `${cleanSearch.startsWith("?")
          ? cleanSearch
          : "?" + cleanSearch
        }&time_continue=${time}`
        : `?time_continue=${time}`
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
    if(isIgnoredInputElement())
      return;

    const { likeBtn, dislikeBtn, likeState } = getLikeDislikeBtns();

    if(hotkeyMatches(e, getFeature("likeHotkey"))) {
      preventBubble(e);
      if(!getFeature("likeDislikeHotkeysToggle") && likeState === "LIKE")
        return;
      likeBtn?.click();
    }
    else if(hotkeyMatches(e, getFeature("dislikeHotkey"))) {
      preventBubble(e);
      if(!getFeature("likeDislikeHotkeysToggle") && likeState === "DISLIKE")
        return;
      dislikeBtn?.click();
    }
  }, { capture: true });
}

//#region lyrics

async function initLyricsHotkey() {
  document.addEventListener("keydown", (e) => {
    if(!getFeature("currentLyricsHotkeyEnabled"))
      return;
    if(isIgnoredInputElement())
      return;

    if(hotkeyMatches(e, getFeature("currentLyricsHotkey")) && location.pathname.startsWith("/watch")) {
      preventBubble(e);

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
    if(isIgnoredInputElement())
      return;

    if(hotkeyMatches(e, getFeature("skipToRemTimeHotkey"))) {
      preventBubble(e);

      await remTimeTryRestoreTime(true);
    }
  }, { capture: true });
}

//#region search bar

async function initSearchBarHotkeys() {
  const getSearchBarInput = () => document.querySelector<HTMLInputElement>(
    getDomain() === "ytm"
      ? "ytmusic-search-box input"
      : "yt-searchbox input"
  );

  const checkFocusHotkey = (e: KeyboardEvent) => {
    if(isIgnoredInputElement() || !getFeature("focusSearchBarHotkeyEnabled"))
      return;

    preventBubble(e);

    getSearchBarInput()?.focus();

    log("Focused on the search bar");
  };

  const checkClearHotkey = (e: KeyboardEvent) => {
    if(!getFeature("clearSearchBarHotkeyEnabled"))
      return;

    preventBubble(e);

    const inputEl = getSearchBarInput();
    if(inputEl) {
      inputEl.value = "";
      inputEl.dispatchEvent(new Event("input", { bubbles: true }));
    }
  };

  document.addEventListener("keydown", (e) => {
    hotkeyMatches(e, getFeature("focusSearchBarHotkey")) && checkFocusHotkey(e);
    hotkeyMatches(e, getFeature("clearSearchBarHotkey")) && checkClearHotkey(e);
  }, {
    capture: true, // ensure precedence over YTM's own listeners
  });
}

//#region proxy hotkeys

/** Map of "proxy hotkey enable" feature keys to their respective proxy hotkey configurations */
type ProxyHotkeys = Partial<Record<
  FeatKeysOfType<boolean>,
  Array<{
    /** The feature key that contains the hotkey object */
    hkFeatKey: FeatKeysOfType<HotkeyObj>;
    /** Which key should have its default action and propagation prevented (has to be a valid [`KeyboardEvent.code`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code)) */
    preventKey?: string;
    /** Which domains this hotkey should be active on */
    domains: Domain[];
    /** Called when the hotkey was pressed and the feature is toggled on */
    onPress: (e: KeyboardEvent) => void | Promise<void>;
  }>
>>;

type DispatchProxyHkOpts =
  Required<Pick<KeyboardEventInit, "code" | "key" | "keyCode" | "which">>
  & Pick<KeyboardEventInit, "shiftKey" | "ctrlKey" | "altKey" | "metaKey">;

let lastProxyHkTime = 0;

/** All proxy hotkey groups, identified by the feature key that toggles them off or on */
const proxyHotkeys: ProxyHotkeys = {
  rebindNextAndPrevious: [
    {
      hkFeatKey: "nextHotkey",
      preventKey: "KeyJ",
      domains: ["ytm"],
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
      domains: ["ytm"],
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
      domains: ["ytm"],
      onPress: () => dispatchProxyKey({
        code: "Space",
        key: " ",
        keyCode: 32,
        which: 32,
      }),
    },
  ],
  themeSongVisualizerHotkeyEnabled: [
    {
      hkFeatKey: "themeSongVisualizerHotkey",
      domains: ["ytm"],
      onPress: () => document.querySelector<HTMLButtonElement>("#ts-visualizer-toggle")?.click(),
    },
  ],
} as const;

/** Handles all proxy hotkeys, which trigger other hotkeys instead of their own actions */
async function initProxyHotkeys() {
  document.addEventListener("keydown", (e) => {
    if(isIgnoredInputElement())
      return;

    for(const [featKey, proxyGroup] of Object.entries(proxyHotkeys)) {
      if(getFeature(featKey as "_") !== true)
        continue;

      for(const { hkFeatKey, onPress, domains, ...rest } of proxyGroup) {
        if(!domains.includes(getDomain()))
          continue;

        const nowTs = Date.now();
        // prevent hotkeys from triggering each other:
        if(nowTs - lastProxyHkTime < 15) // (holding keys makes them repeat every ~30ms, so this buffer should be adequate)
          continue;

        if("preventKey" in rest && e.code === rest.preventKey)
          preventBubble(e);

        if(hotkeyMatches(e, getFeature(hkFeatKey))) {
          lastProxyHkTime = nowTs;
          !e.defaultPrevented && e.preventDefault();
          e.bubbles && e.stopImmediatePropagation();
          onPress(e);
        }
      }
    }
  }, {
    // ensure precedence over the page's own listeners:
    capture: true,
  });
}

function dispatchProxyKey(hkProps: DispatchProxyHkOpts) {
  document.body.dispatchEvent(new KeyboardEvent("keydown", {
    ...hkProps,
    bubbles: true,
    cancelable: true,
    // see https://github.com/Sv443/BetterYTM/issues/18
    view: getUnsafeWindow(),
  }));
  log("Dispatched proxy hotkey:", hkProps);
};
