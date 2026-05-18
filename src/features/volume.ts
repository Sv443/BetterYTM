import { clamp, debounce, type Stringifiable } from "@sv443-network/coreutils";
import { addParent, getUnsafeWindow } from "@sv443-network/userutils";
import { getFeature } from "@/config.ts";
import { addStyleFromResource, setGlobalCssVar, setInnerHtml } from "@util/dom.ts";
import { t } from "@util/translations.ts";
import { waitVideoElementReady } from "@util/dom.ts";
import { loggers } from "@util/logging.ts";
import { getDomain, getReloadTabData, resourceAsString } from "@util/misc.ts";
import { siteEvents } from "@/siteEvents.ts";
import { featInfo } from "@feat/index.ts";
import { addSelectorListener } from "@/observers.ts";
import "@feat/volume.css";

//#region init vol features

/** Initializes all volume-related features */
export async function initVolumeFeatures() {
  let listenerOnce = false;

  // sliderElem is not technically an input element but behaves pretty much the same
  const onSliderElExists = async (type: "normal" | "expand", sliderElem: HTMLInputElement) => {
    const volSliderCont = document.createElement("div");
    volSliderCont.classList.add("bytm-vol-slider-cont");

    sliderElem.setAttribute("step", "1");

    if(getFeature("volumeSliderScrollStep") !== featInfo.volumeSliderScrollStep.default)
      initScrollStep(volSliderCont, sliderElem);

    addParent(sliderElem, volSliderCont);

    if(getFeature("volumeSliderLabel"))
      await addVolumeSliderLabel(type, sliderElem, volSliderCont);

    const updateSliderVal = (step: number) => {
      if(step && step > 0) {
        const roundedValue = Math.round(Number(sliderElem.value) / step) * step;
        if(roundedValue !== Number(sliderElem.value)) {
          sliderElem.value = sliderElem.dataset.scrollVal = String(roundedValue);
          sliderElem.setAttribute("aria-valuenow", String(roundedValue));
          sliderElem.dispatchEvent(new Event("change", { bubbles: true }));
          siteEvents.emit("updateVolumeSliderLabel");
        }
      }
    };

    sliderElem.addEventListener("mousedown", () => {
      sliderElem.dataset.dragging = "true";
    });

    sliderElem.addEventListener("mouseup", () => {
      delete sliderElem.dataset.dragging;

      if(getFeature("volumeSharedBetweenTabs"))
        sharedVolumeChanged(Number(sliderElem.value));

      updateSliderVal(getFeature("volumeSliderStep"));
    });

    sliderElem.addEventListener("scrollend", () => {
      if(getFeature("volumeSharedBetweenTabs"))
        sharedVolumeChanged(Number(sliderElem.value));

      updateSliderVal(getFeature("volumeSliderScrollStep"));
    });

    if(listenerOnce)
      return;
    listenerOnce = true;

    // the following are only run once:

    await setInitialTabVolume(sliderElem);

    if(typeof getFeature("volumeSliderSize") === "number")
      setVolSliderSize();

    if(getFeature("volumeSharedBetweenTabs"))
      checkSharedVolume();
  };

  addSelectorListener<HTMLInputElement>("playerBarRightControls", "tp-yt-paper-slider#volume-slider", {
    listener: (el) => onSliderElExists("normal", el),
  });

  let sizeSmOnce = false;
  const onResize = () => {
    if(sizeSmOnce || window.innerWidth >= 1150)
      return;
    sizeSmOnce = true;

    addSelectorListener<HTMLInputElement>("playerBarRightControls", "ytmusic-player-expanding-menu tp-yt-paper-slider#expand-volume-slider", {
      listener: (el) => onSliderElExists("expand", el),
    });
  };

  window.addEventListener("resize", debounce(onResize, Math.floor(1000 / 6)), { passive: true });
  waitVideoElementReady().then(onResize);
  onResize();
}

//#region exponential volume

const {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  get: nativeGetVolume,
  // eslint-disable-next-line @typescript-eslint/unbound-method
  set: nativeSetVolume
  // @ts-expect-error - no idea why HTMLMediaElement wouldn't exist on Window
} = Object.getOwnPropertyDescriptor(getUnsafeWindow().HTMLMediaElement.prototype, "volume") ?? {};

/** Initializes the exponential volume scaling feature */
export function initExponentialVolume() {
  if(getDomain() !== "ytm" || getFeature("volumeSliderExponential") === "linear")
    return;

  // @ts-expect-error - see above
  Object.defineProperty(getUnsafeWindow().HTMLMediaElement.prototype, "volume", {
    get() {
      const actual = nativeGetVolume?.call(this);
      if(typeof actual !== "number" || isNaN(actual))
        return actual;
      return expVolFnInv(actual);
    },
    set(value) {
      if(typeof value !== "number" || isNaN(value))
        return nativeSetVolume?.call(this, value);
      return nativeSetVolume?.call(this, expVolFn(value));
    }
  });
}

function expVolClamp(x: number) {
  return Math.min(1, Math.max(0, x));
}

/** Mapping for volume scaling - Maps [0, 1] to [0, 1] */
export function expVolFn(x: number) {
  switch(getFeature("volumeSliderExponential")) {
  case "x^2":
    return expVolClamp(Math.pow(expVolClamp(x), 2));
  case "x^3": 
    return expVolClamp(Math.pow(expVolClamp(x), 3));
  case "x^4": 
    return expVolClamp(Math.pow(expVolClamp(x), 4));
  case "x^5": 
    return expVolClamp(Math.pow(expVolClamp(x), 5));
  case "linear":
  default: 
    return expVolClamp(x);
  }
}

/** Inverse mapping for volume scaling - Maps [0, 1] to [0, 1] */
function expVolFnInv(y: number) {
  switch(getFeature("volumeSliderExponential")) {
  case "x^2":
    return expVolClamp(Math.pow(expVolClamp(y), 1/2));
  case "x^3": 
    return expVolClamp(Math.pow(expVolClamp(y), 1/3));
  case "x^4": 
    return expVolClamp(Math.pow(expVolClamp(y), 1/4));
  case "x^5": 
    return expVolClamp(Math.pow(expVolClamp(y), 1/5));
  case "linear":
  default:
    return expVolClamp(y);
  }
}

//#region scroll step

/** Initializes the volume slider scroll step feature */
function initScrollStep(volSliderCont: HTMLDivElement, sliderElem: HTMLInputElement) {
  for(const evtName of ["wheel", "scroll", "mousewheel", "DOMMouseScroll"]) {
    volSliderCont.addEventListener(evtName, (e) => {
      e.preventDefault();
      // cancels all the other events that would be fired
      e.stopImmediatePropagation();

      const delta = Number((e as WheelEvent).deltaY ?? (e as CustomEvent<number | undefined>)?.detail ?? 1);
      if(isNaN(delta))
        return loggers.volume.warn("Invalid scroll delta:", delta);

      const volumeDir = -Math.sign(delta);
      const newVolume = String(Number(sliderElem.value) + (getFeature("volumeSliderScrollStep") * volumeDir));

      sliderElem.value = newVolume;
      sliderElem.setAttribute("aria-valuenow", newVolume);
      // make the site actually change the volume
      sliderElem.dispatchEvent(new Event("change", { bubbles: true }));
    }, {
      // takes precedence over the slider's own event listener
      capture: true,
    });
  }
}

//#region volume slider label

/** Adds a percentage label to the volume slider and tooltip */
async function addVolumeSliderLabel(type: "normal" | "expand", sliderElem: HTMLInputElement, sliderContainer: HTMLDivElement) {
  const labelContElem = document.createElement("div");
  labelContElem.classList.add("bytm-vol-slider-label");
  labelContElem.style.display = "none";
  labelContElem.setAttribute("aria-hidden", "true");

  const volShared = getFeature("volumeSharedBetweenTabs");
  if(volShared) {
    const linkIconHtml = await resourceAsString("icon-link");
    if(linkIconHtml) {
      const linkIconElem = document.createElement("div");
      linkIconElem.classList.add("bytm-vol-slider-shared");
      setInnerHtml(linkIconElem, linkIconHtml);
      linkIconElem.role = "alert";
      linkIconElem.ariaLive = "polite";
      linkIconElem.title = linkIconElem.ariaLabel = t("volume_shared_tooltip");

      labelContElem.classList.add("has-icon");
      labelContElem.appendChild(linkIconElem);
    }
  }

  /** Renders the given volume value in the range [0, 100] after adjusting for the configured exponential scaling. */
  const getAdjustedVolValue = (val: number) => {
    if(isNaN(val))
      return String(val);
    val = clamp(val, 0, 100);

    const valAdjusted = (expVolFn(val / 100) * 100).toFixed(1);
    const fixedPtVal = ["0.0", "100.0"].includes(valAdjusted)
      ? valAdjusted.slice(0, -2)
      : valAdjusted;

    return fixedPtVal;
  };

  const getLabel = (value: Stringifiable) => {
    const step = Number(getFeature(sliderElem.hasAttribute("pressed") ? "volumeSliderStep" : "volumeSliderScrollStep", Number(sliderElem.step)));
    const roundedValue = Math.round(Number(value) / step) * step;
    let label = `${roundedValue}%`;

    labelContElem.classList.remove("wide");

    if(getFeature("volumeSliderExponential") !== "linear") {
      const fixedPtVal = getAdjustedVolValue(Number(value));

      const lblType = getFeature("volumeSliderExponentialLabelType");
      if(lblType === "both") {
        label += ` (${fixedPtVal}%)`;
        labelContElem.classList.add("wide");
      }
      else if(lblType === "valueBased")
        label = `${fixedPtVal}%`;
    }

    return label;
  };

  const labelElem = document.createElement("div");
  labelElem.classList.add("label");
  labelElem.textContent = getLabel(sliderElem.value);

  labelContElem.appendChild(labelElem);

  // prevent video from minimizing
  labelContElem.addEventListener("click", (e) => e.stopPropagation());
  labelContElem.addEventListener("keydown", (e) => ["Enter", "Space", " "].includes(e.key) && e.stopPropagation());

  const getSliderTooltip = (slider: HTMLInputElement) =>
    t("volume_tooltip", { volumePercent: getAdjustedVolValue(Number(slider.value)) });

  const labelFull = getSliderTooltip(sliderElem);
  sliderContainer.setAttribute("title", labelFull);
  sliderElem.setAttribute("title", labelFull);
  sliderElem.setAttribute("aria-valuetext", labelFull);

  const updateLabel = () => {
    const labelFull = getSliderTooltip(sliderElem);

    sliderContainer.setAttribute("title", labelFull);
    sliderElem.setAttribute("title", labelFull);
    sliderElem.setAttribute("aria-valuetext", labelFull);

    if(!isNaN(Number(sliderElem.dataset.scrollVal)) && Number(sliderElem.dataset.scrollVal) % getFeature("volumeSliderStep") !== 0)
      sliderElem.dataset.scrollVal = "";

    const labelElem2 = document.querySelectorAll<HTMLDivElement>(".bytm-vol-slider-label div.label");
    for(const el of labelElem2)
      el.textContent = getLabel(sliderElem.value);
  };

  sliderElem.addEventListener("change", () => updateLabel());
  siteEvents.on("updateVolumeSliderLabel", () => updateLabel());
  siteEvents.on("configChanged", () => updateLabel());

  addSelectorListener(
    "playerBarRightControls",
    type === "normal" ? ".bytm-vol-slider-cont" : "ytmusic-player-expanding-menu .bytm-vol-slider-cont",
    {
      listener: (volumeCont) => volumeCont.appendChild(labelContElem),
    }
  );

  let lastSliderVal = Number(sliderElem.value);

  /** Hide or show the ThemeSong media controls element when the volume slider is expanded */
  const setThemeSongContHidden = (hidden = true) => {
    const contEl = document.querySelector<HTMLElement>("#ts-panel-container");
    contEl?.classList[(hidden ? "add" : "remove")]("bytm-hidden");
  };

  // show label if hovering over slider or slider is focused
  const sliderHoverObserver = new MutationObserver(() => {
    if(sliderElem.classList.contains("on-hover") || document.activeElement === sliderElem) {
      labelContElem.style.display = "initial";
      labelContElem.setAttribute("aria-hidden", "false");
      labelContElem.classList.add("bytm-visible");
      setThemeSongContHidden();
    }
    else if(labelContElem.classList.contains("bytm-visible") || document.activeElement !== sliderElem) {
      labelContElem.addEventListener("transitionend", () => {
        labelContElem.style.display = "none";
        labelContElem.setAttribute("aria-hidden", "true");
        setThemeSongContHidden(false);
      }, { once: true });
      labelContElem.classList.remove("bytm-visible");
    }

    if(Number(sliderElem.value) !== lastSliderVal) {
      lastSliderVal = Number(sliderElem.value);
      updateLabel();
    }
  });

  sliderHoverObserver.observe(sliderElem, {
    attributes: true,
  });
}

//#region volume slider size

/** Sets the volume slider to a set size */
function setVolSliderSize() {
  const size = getFeature("volumeSliderSize");

  if(typeof size !== "number" || isNaN(Number(size)))
    return loggers.volume.error("Invalid volume slider size:", size);

  setGlobalCssVar("vol-slider-size", `${size}px`);
  addStyleFromResource("css-vol_slider_size");
}

//#region shared volume

/** Saves the shared volume level to persistent storage */
async function sharedVolumeChanged(vol: number) {
  try {
    await GM.setValue("bytm-shared-volume", String(lastCheckedSharedVolume = ignoreVal = vol));
  }
  catch(err) {
    loggers.volume.error("Couldn't save shared volume level due to an error:", err);
  }
}

let ignoreVal = -1;
let lastCheckedSharedVolume = -1;

/** Only call once as this calls itself after a timeout! - Checks if the shared volume has changed and updates the volume slider accordingly */
async function checkSharedVolume() {
  try {
    const vol = await GM.getValue("bytm-shared-volume");
    if(vol && lastCheckedSharedVolume !== Number(vol)) {
      if(ignoreVal === Number(vol))
        return;
      lastCheckedSharedVolume = Number(vol);

      const sliderElem = document.querySelector<HTMLInputElement>("tp-yt-paper-slider#volume-slider");
      if(sliderElem) {
        sliderElem.value = String(vol);
        sliderElem.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }

    setTimeout(checkSharedVolume, 333);
  }
  catch(err) {
    loggers.volume.error("Couldn't check for shared volume level due to an error:", err);
  }
}

export async function volumeSharedBetweenTabsDisabled() {
  await GM.deleteValue("bytm-shared-volume");
  document.querySelectorAll<HTMLElement>("#bytm-vol-slider-shared").forEach(el => el.remove());
}

//#region initial volume

/** Sets the volume slider to a set volume level when the session starts */
async function setInitialTabVolume(sliderElem: HTMLInputElement) {
  const reloadTabVol = Number((await getReloadTabData())?.volume);

  if((isNaN(reloadTabVol) || reloadTabVol === 0) && !getFeature("setInitialTabVolume"))
    return;

  const vidElem = await waitVideoElementReady();

  const initialVol = Math.round(!isNaN(reloadTabVol) && reloadTabVol > 0 ? reloadTabVol : getFeature("initialTabVolumeLevel"));

  if(isNaN(initialVol) || initialVol < 0 || initialVol > 100)
    return;

  if(getFeature("volumeSharedBetweenTabs")) {
    lastCheckedSharedVolume = ignoreVal = initialVol;
    if(getFeature("volumeSharedBetweenTabs"))
      GM.setValue("bytm-shared-volume", String(initialVol)).catch((err) => loggers.volume.error("Couldn't save shared volume level due to an error:", err));
  }
  sliderElem.value = String(initialVol);
  vidElem.volume = initialVol / 100;
  sliderElem.dispatchEvent(new Event("change", { bubbles: true }));

  const nonLinVol = getFeature("volumeSliderExponential") !== "linear";

  loggers.volume.log(`Set initial tab volume to ${initialVol}%${nonLinVol ? ` (${(expVolFn(initialVol / 100) * 100).toFixed(1)}%)` : ""}${reloadTabVol > 0 ? " from GM storage (reload)" : " from configuration (initial load)"}`);
}
