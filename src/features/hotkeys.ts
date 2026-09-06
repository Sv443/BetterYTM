import { getUnsafeWindow, openInNewTab } from "@sv443-network/userutils";
import { enableDiscardBeforeUnload, remTimeTryRestoreTime } from "@feat/behavior.ts";
import { isIgnoredInputElement } from "@feat/input.ts";
import { getFeature } from "@/config.ts";
import { siteEvents } from "@/siteEvents.ts";
import { getLikeDislikeBtns, getVideoTime, setInnerHtml } from "@util/dom.ts";
import { getDomain, resourceAsString } from "@util/misc.ts";
import { loggers } from "@util/logging.ts";
import { LogLevel, type Domain, type FeatKeysOfType, type HotkeyObj } from "@/types.ts";
import { promptLyricsSearch } from "@feat/lyrics.ts";
import "./hotkeys.css";
import { t } from "@util/translations.ts";
import { onInteraction } from "@util/input.ts";
import { hotkeyToString } from "@comp/hotkeyInput.ts";

//#region init

export async function initHotkeys() {
  const inits: [name: string, promise: Promise<void>][] = [];

  // ytm only:
  if(getDomain() === "ytm")
    inits.push(["initOpenLyricsHotkey", initOpenLyricsHotkey()]);

  // shared:
  inits.push(
    ["initSearchLyricsPromptHotkey", initSearchLyricsPromptHotkey()],
    ["initLikeDislikeHotkeys", initLikeDislikeHotkeys()],
    ["initSiteSwitchHotkey", initSiteSwitchHotkey()],
    ["initProxyHotkeys", initProxyHotkeys()],
    ["initSkipToRemTimeHotkey", initSkipToRemTimeHotkey()],
    ["initSearchBarHotkeys", initSearchBarHotkeys()],
    ["initInteractionLockHotkey", initInteractionLockHotkey()],
  );

  const results = await Promise.allSettled(inits.map(([, promise]) => promise));

  results.forEach((res, i) => {
    if(res.status === "rejected")
      loggers.hotkey.error(`Error while initializing hotkey feature '${inits[i][0]}':`, res.reason);
  });

  loggers.hotkey.info("Initialized all hotkey features", LogLevel.Info);

  return results;
}

//#region utils

/** Checks whether the given keyboard event matches the given hotkey object. */
function hotkeyMatches(evt: KeyboardEvent, hk: HotkeyObj) {
  if(typeof hk !== "object" || typeof hk.code !== "string")
    return false;

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

/** Switch sites only if current video time is greater than this value. */
const videoTimeThreshold = 3;
/** Global flag that gets turned off by active hotkey input elements. */
let siteSwitchEnabled = true;

/** Initializes the site switch feature. */
export async function initSiteSwitchHotkey() {
  const domain = getDomain();
  document.addEventListener("keydown", (e) => {
    if(!getFeature("switchBetweenSites"))
      return;
    if(isIgnoredInputElement())
      return;
    if(siteSwitchEnabled) {
      if(hotkeyMatches(e, getFeature("switchSitesNewTabHotkey"))) {
        preventBubble(e);
        switchSite(domain === "yt" ? "ytm" : "yt", true);
      }
      else if(hotkeyMatches(e, getFeature("switchSitesHotkey"))) {
        preventBubble(e);
        switchSite(domain === "yt" ? "ytm" : "yt");
      }
    }
  }, { capture: true });
  siteEvents.on("hotkeyInputActive", (hkInputActive) => {
    if(!getFeature("switchBetweenSites"))
      return;
    siteSwitchEnabled = !hkInputActive;
  });
  loggers.hotkey.log("Initialized site switch listener");
}

/** Switches to the other site (between YT and YTM). */
async function switchSite(newDomain: Domain, inNewTab = false) {
  try {
    if(!(["/watch", "/playlist"].some(v => location.pathname.startsWith(v))))
      return loggers.hotkey.warn("Not on a supported page, so the site switch is ignored");

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

    loggers.hotkey.log(`Found video time of ${time} seconds`);

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

    loggers.hotkey.info(`Switching to domain '${newDomain}' at ${newUrl}`);
    if(inNewTab)
      openInNewTab(newUrl, true);
    else
      location.assign(newUrl);
  }
  catch(err) {
    loggers.hotkey.error("Error while switching site:", err);
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
      loggers.hotkey.log("Like hotkey pressed, liking the video...");
      likeBtn?.click();
    }
    else if(hotkeyMatches(e, getFeature("dislikeHotkey"))) {
      preventBubble(e);
      if(!getFeature("likeDislikeHotkeysToggle") && likeState === "DISLIKE")
        return;
      loggers.hotkey.log("Dislike hotkey pressed, disliking the video...");
      dislikeBtn?.click();
    }
  }, { capture: true });
}

//#region lyrics

async function initOpenLyricsHotkey() {
  document.addEventListener("keydown", (e) => {
    if(!getFeature("currentLyricsHotkeyEnabled"))
      return;
    if(isIgnoredInputElement())
      return;

    if(hotkeyMatches(e, getFeature("currentLyricsHotkey")) && location.pathname.startsWith("/watch")) {
      preventBubble(e);

      const lyricsBtn = document.getElementById("bytm-player-bar-lyrics-btn");
      loggers.hotkey.log("Open song lyrics hotkey pressed, opening page...");
      lyricsBtn?.click();
    }
  }, { capture: true });
}

// TODO:FIXME: stopped working fsr
async function initSearchLyricsPromptHotkey() {
  document.addEventListener("keydown", async (e) => {
    if(!getFeature("lyricsSearchPromptHotkeyEnabled"))
      return;
    if(isIgnoredInputElement())
      return;

    if(hotkeyMatches(e, getFeature("lyricsSearchPromptHotkey"))) {
      preventBubble(e);

      loggers.hotkey.log("Lyrics search prompt hotkey pressed, opening dialog...");
      await promptLyricsSearch();
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

      loggers.hotkey.log("Skip to remembered time hotkey pressed, restoring video time...");
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

    loggers.hotkey.log("Focused on the search bar");
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

//#region interaction lock

async function initInteractionLockHotkey() {
  const ilOverlayEl = document.createElement("div");
  ilOverlayEl.id = "bytm-interaction-lock-overlay";
  ilOverlayEl.classList.add("hidden");
  ilOverlayEl.inert = true;

  const ilContainerEl = document.createElement("div");
  ilContainerEl.id = "bytm-interaction-lock-overlay-cont";

  const ilLockEl = document.createElement("span");
  ilLockEl.id = "bytm-interaction-lock-overlay-lock-img";
  resourceAsString("icon-lock").then(svg => setInnerHtml(ilLockEl, svg));
  ilContainerEl.appendChild(ilLockEl);

  const getHotkeyParts = (hk: HotkeyObj, asHtml = false): string => {
    const hotkeyPartsRaw = [
      ...(hk.ctrl ? [t("hotkey_modifier.ctrl")] : []),
      ...(hk.shift ? [t("hotkey_modifier.shift")] : []),
      ...(hk.alt ? [t("hotkey_modifier.alt")] : []),
      hk.code,
    ];

    const hotkeyParts = (
      asHtml
        ? hotkeyPartsRaw.map(p => `<kbd class="bytm-kbd">${p}</kbd>`)
        : hotkeyPartsRaw
    ).join(" + ");

    return t("interaction_lock_message", { hotkeyParts });
  };

  const ilMessageEl = document.createElement("span");
  ilMessageEl.id = "bytm-interaction-lock-overlay-message";
  ilMessageEl.ariaLive = "polite";
  ilMessageEl.tabIndex = 0;
  ilMessageEl.title = getHotkeyParts(getFeature("interactionLockHotkey"));
  ilContainerEl.appendChild(ilMessageEl);

  /** Forces the aria-live region to (re-)announce the lock message, since toggling visibility alone doesn't count as a content update for screen readers. */
  const announceMessage = () => {
    const html = getHotkeyParts(getFeature("interactionLockHotkey"), true);
    setInnerHtml(ilMessageEl, "");
    requestAnimationFrame(() => setInnerHtml(ilMessageEl, html));
  };

  const ilButtonEl = document.createElement("button");
  ilButtonEl.id = "bytm-interaction-lock-disable-btn";
  ilButtonEl.classList.add("bytm-btn");
  ilButtonEl.type = "button";
  ilButtonEl.tabIndex = 0;
  ilButtonEl.textContent = ilButtonEl.ariaLabel = t("interaction_lock_unlock_button");
  ilContainerEl.appendChild(ilButtonEl);

  ilOverlayEl.appendChild(ilContainerEl);
  document.body.appendChild(ilOverlayEl);

  let ilOverlayEnabled = false;
  let ilHideTimeout: ReturnType<typeof setTimeout> | undefined;

  /** Shows the overlay and (re-)starts the timer that automatically hides it again. */
  const show = () => {
    if(getFeature("interactionLockOverlayTimeout") === 0)
      return;
    const initial = Boolean(document.querySelector("#bytm-interaction-lock-overlay.hidden"));
    loggers.hotkey.log("Showing the interaction lock overlay");
    clearTimeout(ilHideTimeout);
    ilOverlayEl.classList.remove("hidden");
    ilHideTimeout = setTimeout(hide, getFeature("interactionLockOverlayTimeout") * 1000);
    initial && document.querySelector<HTMLButtonElement>("#bytm-interaction-lock-overlay-message")?.focus();
    setInnerHtml(ilMessageEl, getHotkeyParts(getFeature("interactionLockHotkey"), true));
  };

  /** Hides the overlay without changing the locked state. */
  const hide = () => {
    loggers.hotkey.log("Hiding the interaction lock overlay");
    clearTimeout(ilHideTimeout);
    ilOverlayEl.classList.add("hidden");
    setInnerHtml(ilMessageEl, "");
  };

  /** Locks all page interactions outside of the overlay and shows it. */
  const lock = () => {
    ilOverlayEnabled = true;
    ilOverlayEl.inert = false;
    for(const child of Array.from(document.body.children))
      if(child !== ilOverlayEl)
        (child as HTMLElement).inert = true;
    loggers.hotkey.log("Locked page interactions");
    show();
    announceMessage();
    ilMessageEl.focus();
  };

  /** Unlocks all page interactions and hides the overlay. */
  const unlock = () => {
    ilOverlayEnabled = false;
    ilOverlayEl.inert = true;
    for(const child of Array.from(document.body.children))
      if(child !== ilOverlayEl)
        (child as HTMLElement).inert = false;
    loggers.hotkey.log("Unlocked page interactions");
    hide();
  };

  onInteraction(ilButtonEl, () => unlock());

  // reset the auto-hide timer whenever focus moves within the overlay (e.g. via Tab),
  // so it doesn't disappear while being navigated with the keyboard:
  ilOverlayEl.addEventListener("focusin", () => {
    if(ilOverlayEnabled)
      show();
  });

  // stop events targeting the overlay from bubbling up and triggering third party listeners:
  for(const evtName of ["keydown", "keyup", "mousedown", "click"] as const) {
    ilOverlayEl.addEventListener(evtName, (e) => {
      if(ilOverlayEnabled)
        e.stopPropagation();
    });
  }

  document.addEventListener("keydown", (e) => {
    if(getFeature("interactionLockHotkeyEnabled")) {
      if(hotkeyMatches(e, getFeature("interactionLockHotkey"))) {
        preventBubble(e);
        ilOverlayEnabled ? unlock() : lock();
      }
      else if(ilOverlayEnabled) {
        // allow interacting with elements inside the overlay itself (e.g. the unlock button)
        if((e.target as HTMLElement)?.closest("#bytm-interaction-lock-overlay"))
          return;
        // remind the user of the hotkey and block all other keystrokes
        preventBubble(e);
        show();

        const hk: HotkeyObj = {
          ctrl: e.ctrlKey,
          shift: e.shiftKey,
          alt: e.altKey,
          code: e.code,
        };
        loggers.hotkey.log(`Dismissing key '${hotkeyToString(hk, true)}' because the interaction lock is engaged. Press '${hotkeyToString(getFeature("interactionLockHotkey"), true)}' to disengage it.`);
      }
    }
    else if(ilOverlayEnabled) {
      // feature was disabled while the page was locked, so undo the lock
      unlock();
    }
  }, { capture: true });

  document.addEventListener("mousedown", (e) => {
    if(getFeature("interactionLockHotkeyEnabled") && ilOverlayEnabled) {
      if(e instanceof KeyboardEvent && hotkeyMatches(e, getFeature("interactionLockHotkey")))
        return; // pass to other handler

      if(!(e.target as HTMLElement)?.closest("#bytm-interaction-lock-overlay")) {
        loggers.hotkey.log(`Dismissing mouse button press because the interaction lock is engaged. Press '${hotkeyToString(getFeature("interactionLockHotkey"), true)}' to disengage it.`);
        preventBubble(e);
        show();
      }
    }
  }, { capture: true });

  loggers.hotkey.log(`Initialized interaction lock hotkey (currently ${getFeature("interactionLockHotkeyEnabled") ? "enabled" : "disabled"})`);
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
      onPress: (e) => {
        const toggleEl = document.querySelector<HTMLButtonElement>("#ts-visualizer-toggle");
        if(toggleEl) {
          preventBubble(e);
          toggleEl.click();
        }
      },
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
  loggers.hotkey.log("Dispatched proxy hotkey:", hkProps);
};
