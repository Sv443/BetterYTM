import { addParent, debounce, type Stringifiable } from "@sv443-network/userutils";
import { getFeature } from "../config.js";
import { addStyleFromResource, error, log, resourceAsString, setGlobalCssVar, setInnerHtml, t, waitVideoElementReady, warn } from "../utils/index.js";
import { siteEvents } from "../siteEvents.js";
import { featInfo } from "./index.js";
import { addSelectorListener } from "../observers.js";
import "./volume.css";

//#region init vol features

/** Initializes all volume-related features */
export async function initVolumeFeatures() {
  let listenerOnce = false;

  // sliderElem is not technically an input element but behaves pretty much the same
  const listener = async (type: "normal" | "expand", sliderElem: HTMLInputElement) => {
    const volSliderCont = document.createElement("div");
    volSliderCont.classList.add("bytm-vol-slider-cont");

    if(getFeature("volumeSliderScrollStep") !== featInfo.volumeSliderScrollStep.default)
      initScrollStep(volSliderCont, sliderElem);

    addParent(sliderElem, volSliderCont);

    if(getFeature("volumeSliderLabel"))
      await addVolumeSliderLabel(type, sliderElem, volSliderCont);

    setVolSliderStep(sliderElem);

    if(getFeature("volumeSharedBetweenTabs"))
      sliderElem.addEventListener("change", () => sharedVolumeChanged(Number(sliderElem.value)));

    if(listenerOnce)
      return;
    listenerOnce = true;

    // the following are only run once:

    setInitialTabVolume(sliderElem);

    if(typeof getFeature("volumeSliderSize") === "number")
      setVolSliderSize();

    if(getFeature("volumeSharedBetweenTabs"))
      checkSharedVolume();
  };

  addSelectorListener<HTMLInputElement>("playerBarRightControls", "tp-yt-paper-slider#volume-slider", {
    listener: (el) => listener("normal", el),
  });

  let sizeSmOnce = false;
  const onResize = () => {
    if(sizeSmOnce || window.innerWidth >= 1150)
      return;
    sizeSmOnce = true;

    addSelectorListener<HTMLInputElement>("playerBarRightControls", "ytmusic-player-expanding-menu tp-yt-paper-slider#expand-volume-slider", {
      listener: (el) => listener("expand", el),
    });
  };

  window.addEventListener("resize", debounce(onResize, 150));
  waitVideoElementReady().then(onResize);
  onResize();
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
        return warn("Invalid scroll delta:", delta);

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

  const getLabel = (value: Stringifiable) => `${value}%`;

  const labelElem = document.createElement("div");
  labelElem.classList.add("label");
  labelElem.textContent = getLabel(sliderElem.value);

  labelContElem.appendChild(labelElem);

  // prevent video from minimizing
  labelContElem.addEventListener("click", (e) => e.stopPropagation());
  labelContElem.addEventListener("keydown", (e) => ["Enter", "Space", " "].includes(e.key) && e.stopPropagation());

  const getLabelText = (slider: HTMLInputElement) =>
    t("volume_tooltip", slider.value, getFeature("volumeSliderStep") ?? slider.step);

  const labelFull = getLabelText(sliderElem);
  sliderContainer.setAttribute("title", labelFull);
  sliderElem.setAttribute("title", labelFull);
  sliderElem.setAttribute("aria-valuetext", labelFull);

  const updateLabel = () => {
    const labelFull = getLabelText(sliderElem);

    sliderContainer.setAttribute("title", labelFull);
    sliderElem.setAttribute("title", labelFull);
    sliderElem.setAttribute("aria-valuetext", labelFull);

    const labelElem2 = document.querySelectorAll<HTMLDivElement>(".bytm-vol-slider-label div.label");
    for(const el of labelElem2)
      el.textContent = getLabel(sliderElem.value);
  };

  sliderElem.addEventListener("change", updateLabel);
  siteEvents.on("configChanged", updateLabel);

  addSelectorListener(
    "playerBarRightControls",
    type === "normal" ? ".bytm-vol-slider-cont" : "ytmusic-player-expanding-menu .bytm-vol-slider-cont",
    {
      listener: (volumeCont) => volumeCont.appendChild(labelContElem),
    }
  );

  let lastSliderVal = Number(sliderElem.value);

  // show label if hovering over slider or slider is focused
  const sliderHoverObserver = new MutationObserver(() => {
    if(sliderElem.classList.contains("on-hover") || document.activeElement === sliderElem) {
      labelContElem.style.display = "initial";
      labelContElem.setAttribute("aria-hidden", "false");
      labelContElem.classList.add("bytm-visible");
    }
    else if(labelContElem.classList.contains("bytm-visible") || document.activeElement !== sliderElem) {
      labelContElem.addEventListener("transitionend", () => {
        labelContElem.style.display = "none";
        labelContElem.setAttribute("aria-hidden", "true");
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
    return error("Invalid volume slider size:", size);

  setGlobalCssVar("vol-slider-size", `${size}px`);
  addStyleFromResource("css-vol_slider_size");
}

//#region volume slider step

/** Sets the `step` attribute of the volume slider */
function setVolSliderStep(sliderElem: HTMLInputElement) {
  sliderElem.setAttribute("step", String(getFeature("volumeSliderStep")));
}

//#region shared volume

/** Saves the shared volume level to persistent storage */
async function sharedVolumeChanged(vol: number) {
  try {
    await GM.setValue("bytm-shared-volume", String(lastCheckedSharedVolume = ignoreVal = vol));
  }
  catch(err) {
    error("Couldn't save shared volume level due to an error:", err);
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
    error("Couldn't check for shared volume level due to an error:", err);
  }
}

export async function volumeSharedBetweenTabsDisabled() {
  await GM.deleteValue("bytm-shared-volume");
  document.querySelectorAll<HTMLElement>("#bytm-vol-slider-shared").forEach(el => el.remove());
}

//#region initial volume

/** Sets the volume slider to a set volume level when the session starts */
async function setInitialTabVolume(sliderElem: HTMLInputElement) {
  const reloadTabVol = Number(await GM.getValue("bytm-reload-tab-volume", 0));
  GM.deleteValue("bytm-reload-tab-volume").catch(() => void 0);

  if((isNaN(reloadTabVol) || reloadTabVol === 0) && !getFeature("setInitialTabVolume"))
    return;

  await waitVideoElementReady();

  const initialVol = Math.round(!isNaN(reloadTabVol) && reloadTabVol > 0 ? reloadTabVol : getFeature("initialTabVolumeLevel"));

  if(isNaN(initialVol) || initialVol < 0 || initialVol > 100)
    return;

  if(getFeature("volumeSharedBetweenTabs")) {
    lastCheckedSharedVolume = ignoreVal = initialVol;
    if(getFeature("volumeSharedBetweenTabs"))
      GM.setValue("bytm-shared-volume", String(initialVol)).catch((err) => error("Couldn't save shared volume level due to an error:", err));
  }
  sliderElem.value = String(initialVol);
  sliderElem.dispatchEvent(new Event("change", { bubbles: true }));

  log(`Set initial tab volume to ${initialVol}%${reloadTabVol > 0 ? " (from GM storage)" : " (from configuration)"}`);
}
