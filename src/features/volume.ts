import { addParent, type Stringifiable } from "@sv443-network/userutils";
import { getFeatures } from "../config.js";
import { addStyleFromResource, error, log, resourceToHTMLString, t, waitVideoElementReady } from "../utils/index.js";
import { siteEvents } from "../siteEvents.js";
import { featInfo } from "./index.js";
import "./volume.css";
import { addSelectorListener } from "src/observers";

//#region init vol features

/** Initializes all volume-related features */
export async function initVolumeFeatures() {
  // not technically an input element but behaves pretty much the same
  addSelectorListener<HTMLInputElement>("playerBarRightControls", "tp-yt-paper-slider#volume-slider", {
    listener: async (sliderElem) => {
      const volSliderCont = document.createElement("div");
      volSliderCont.id = "bytm-vol-slider-cont";

      if(getFeatures().volumeSliderScrollStep !== featInfo.volumeSliderScrollStep.default)
        initScrollStep(volSliderCont, sliderElem);

      addParent(sliderElem, volSliderCont);

      if(typeof getFeatures().volumeSliderSize === "number")
        setVolSliderSize();

      if(getFeatures().volumeSliderLabel)
        await addVolumeSliderLabel(sliderElem, volSliderCont);

      setVolSliderStep(sliderElem);

      if(getFeatures().volumeSharedBetweenTabs) {
        sliderElem.addEventListener("change", () => sharedVolumeChanged(Number(sliderElem.value)));
        checkSharedVolume();
      }

      if(getFeatures().setInitialTabVolume)
        setInitialTabVolume(sliderElem);
    },
  });
}

//#region scroll step

/** Initializes the volume slider scroll step features */
function initScrollStep(volSliderCont: HTMLDivElement, sliderElem: HTMLInputElement) {
  for(const evtName of ["wheel", "scroll", "mousewheel", "DOMMouseScroll"]) {
    volSliderCont.addEventListener(evtName, (e) => {
      e.preventDefault();
      // cancels all the other events that would be fired
      e.stopImmediatePropagation();

      const delta = (e as WheelEvent).deltaY ?? (e as CustomEvent<number | undefined>).detail ?? 1;
      const volumeDir = -Math.sign(delta);
      const newVolume = String(Number(sliderElem.value) + (getFeatures().volumeSliderScrollStep * volumeDir));

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
async function addVolumeSliderLabel(sliderElem: HTMLInputElement, sliderContainer: HTMLDivElement) {
  const labelContElem = document.createElement("div");
  labelContElem.id = "bytm-vol-slider-label";

  const volShared = getFeatures().volumeSharedBetweenTabs;
  if(volShared) {
    const linkIconHtml = await resourceToHTMLString("icon-link");
    if(linkIconHtml) {
      const linkIconElem = document.createElement("div");
      linkIconElem.id = "bytm-vol-slider-shared";
      linkIconElem.innerHTML = linkIconHtml;
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
    t("volume_tooltip", slider.value, getFeatures().volumeSliderStep ?? slider.step);

  const labelFull = getLabelText(sliderElem);
  sliderContainer.setAttribute("title", labelFull);
  sliderElem.setAttribute("title", labelFull);
  sliderElem.setAttribute("aria-valuetext", labelFull);

  const updateLabel = () => {
    const labelFull = getLabelText(sliderElem);

    sliderContainer.setAttribute("title", labelFull);
    sliderElem.setAttribute("title", labelFull);
    sliderElem.setAttribute("aria-valuetext", labelFull);

    const labelElem2 = document.querySelector<HTMLDivElement>("#bytm-vol-slider-label div.label");
    if(labelElem2)
      labelElem2.textContent = getLabel(sliderElem.value);
  };

  sliderElem.addEventListener("change", () => updateLabel());
  siteEvents.on("configChanged", () => {
    updateLabel();
  });

  addSelectorListener("playerBarRightControls", "#bytm-vol-slider-cont", {
    listener: (volumeCont) => volumeCont.appendChild(labelContElem),
  });

  let lastSliderVal = Number(sliderElem.value);

  // show label if hovering over slider or slider is focused
  const sliderHoverObserver = new MutationObserver(() => {
    if(sliderElem.classList.contains("on-hover") || document.activeElement === sliderElem)
      labelContElem.classList.add("bytm-visible");
    else if(labelContElem.classList.contains("bytm-visible") || document.activeElement !== sliderElem)
      labelContElem.classList.remove("bytm-visible");

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
  const { volumeSliderSize: size } = getFeatures();

  if(typeof size !== "number" || isNaN(Number(size)))
    return error("Invalid volume slider size:", size);

  addStyleFromResource(
    "css-vol_slider_size",
    (css) => css.replace(/\/\*\s*\{WIDTH\}\s*\*\//gm, `${size}px`),
  );
}

//#region volume slider step

/** Sets the `step` attribute of the volume slider */
function setVolSliderStep(sliderElem: HTMLInputElement) {
  sliderElem.setAttribute("step", String(getFeatures().volumeSliderStep));
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
  document.querySelector<HTMLElement>("#bytm-vol-slider-shared")?.remove();
}

//#region initial volume

/** Sets the volume slider to a set volume level when the session starts */
async function setInitialTabVolume(sliderElem: HTMLInputElement) {
  await waitVideoElementReady();
  const initialVol = getFeatures().initialTabVolumeLevel;
  if(getFeatures().volumeSharedBetweenTabs) {
    lastCheckedSharedVolume = ignoreVal = initialVol;
    if(getFeatures().volumeSharedBetweenTabs)
      GM.setValue("bytm-shared-volume", String(initialVol));
  }
  sliderElem.value = String(initialVol);
  sliderElem.dispatchEvent(new Event("change", { bubbles: true }));
  log(`Set initial tab volume to ${initialVol}%`);
}
