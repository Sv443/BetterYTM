import { getFeatures } from "../config";
import { siteEvents } from "../siteEvents";
import { t } from ".";
import type { HotkeyObj } from "../types";
import "./hotkeyInput.css";

interface HotkeyInputProps {
  initialValue?: HotkeyObj;
  onChange: (hotkey: HotkeyObj) => void;
}

let initialHotkey: HotkeyObj | undefined;

/** Creates a hotkey input element */
export function createHotkeyInput({ initialValue, onChange }: HotkeyInputProps): HTMLElement {
  initialHotkey = initialValue;

  const wrapperElem = document.createElement("div");
  wrapperElem.classList.add("bytm-hotkey-wrapper");

  const infoElem = document.createElement("span");
  infoElem.classList.add("bytm-hotkey-info");
  
  const inputElem = document.createElement("input");
  inputElem.type = "button";
  inputElem.classList.add("bytm-ftconf-input", "bytm-hotkey-input", "bytm-btn");
  inputElem.dataset.state = "inactive";
  inputElem.value = initialValue?.code ?? t("hotkey_input_click_to_change");
  inputElem.ariaLabel = inputElem.title = t("hotkey_input_click_to_change_tooltip");

  const resetElem = document.createElement("span");
  resetElem.classList.add("bytm-hotkey-reset", "bytm-link", "bytm-hidden");
  resetElem.role = "button";
  resetElem.tabIndex = 0;
  resetElem.textContent = `(${t("reset")})`;
  resetElem.ariaLabel = resetElem.title = t("reset");

  const deactivate = () => {
    siteEvents.emit("hotkeyInputActive", false);
    const curVal = getFeatures().switchSitesHotkey ?? initialValue;
    inputElem.value = curVal?.code ?? t("hotkey_input_click_to_change");
    inputElem.dataset.state = "inactive";
    inputElem.ariaLabel = inputElem.title = t("hotkey_input_click_to_change_tooltip");
    infoElem.innerHTML = curVal ? getHotkeyInfoHtml(curVal) : "";
  };

  const activate = () => {
    siteEvents.emit("hotkeyInputActive", true);
    inputElem.value = "< ... >";
    inputElem.dataset.state = "active";
    inputElem.ariaLabel = inputElem.title = t("hotkey_input_click_to_cancel_tooltip");
  };

  const resetClicked = (e: MouseEvent | KeyboardEvent) => {
    e.preventDefault();
    e.stopImmediatePropagation();

    onChange(initialValue!);
    deactivate();
    inputElem.value = initialValue!.code;
    infoElem.innerHTML = getHotkeyInfoHtml(initialValue!);
    resetElem.classList.add("bytm-hidden");
  };

  resetElem.addEventListener("click", resetClicked);
  resetElem.addEventListener("keydown", (e) => ["Enter", " ", "Space"].includes(e.key) && resetClicked(e));

  if(initialValue)
    infoElem.innerHTML = getHotkeyInfoHtml(initialValue);

  let lastKeyDown: HotkeyObj | undefined;

  document.addEventListener("keypress", (e) => {
    if(inputElem.dataset.state !== "active")
      return;
    if(lastKeyDown?.code === e.code && lastKeyDown?.shift === e.shiftKey && lastKeyDown?.ctrl === e.ctrlKey && lastKeyDown?.alt === e.altKey)
      return;
    e.preventDefault();
    e.stopImmediatePropagation();

    const hotkey = {
      code: e.code,
      shift: e.shiftKey,
      ctrl: e.ctrlKey,
      alt: e.altKey,
    } as HotkeyObj;
    inputElem.value = hotkey.code;
    inputElem.dataset.state = "inactive";
    infoElem.innerHTML = getHotkeyInfoHtml(hotkey);
    inputElem.ariaLabel = inputElem.title = t("hotkey_input_click_to_cancel_tooltip");
    onChange(hotkey);
  });

  document.addEventListener("keydown", (e) => {
    if(inputElem.dataset.state !== "active")
      return;
    if(["ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight"].includes(e.code))
      return;
    e.preventDefault();
    e.stopImmediatePropagation();

    const hotkey = {
      code: e.code,
      shift: e.shiftKey,
      ctrl: e.ctrlKey,
      alt: e.altKey,
    } satisfies HotkeyObj;

    const keyChanged = initialHotkey?.code !== hotkey.code || initialHotkey?.shift !== hotkey.shift || initialHotkey?.ctrl !== hotkey.ctrl || initialHotkey?.alt !== hotkey.alt;
    lastKeyDown = hotkey;

    onChange(hotkey);

    if(keyChanged) {
      deactivate();
      resetElem.classList.remove("bytm-hidden");
    }
    else
      resetElem.classList.add("bytm-hidden");

    inputElem.value = hotkey.code;
    inputElem.dataset.state = "inactive";
    infoElem.innerHTML = getHotkeyInfoHtml(hotkey);
  });

  siteEvents.on("cfgMenuClosed", deactivate);

  inputElem.addEventListener("click", () => {
    if(inputElem.dataset.state === "inactive")
      activate();
    else
      deactivate();
  });
  inputElem.addEventListener("keydown", () => {
    if(inputElem.dataset.state === "inactive")
      activate();
  });

  wrapperElem.appendChild(resetElem);
  wrapperElem.appendChild(infoElem);
  wrapperElem.appendChild(inputElem);

  return wrapperElem;
}

function getHotkeyInfoHtml(hotkey: HotkeyObj) {
  const modifiers = [] as string[];
  hotkey.ctrl && modifiers.push(`<kbd class="bytm-kbd">${t("hotkey_key_ctrl")}</kbd>`);
  hotkey.shift && modifiers.push(`<kbd class="bytm-kbd">${t("hotkey_key_shift")}</kbd>`);
  hotkey.alt && modifiers.push(`<kbd class="bytm-kbd">${getOS() === "mac" ? t("hotkey_key_mac_option") : t("hotkey_key_alt")}</kbd>`);
  return `\
<div style="display: flex; align-items: center;">
  <span>
    ${modifiers.reduce((a, c) => `${a ? a + " " : ""}${c}`, "")}
  </span>
  <span style="padding: 0px 5px;">
    ${modifiers.length > 0 ? "+" : ""}
  </span>
</div>`;
}

/** Crude OS detection for keyboard layout purposes */
function getOS() {
  if(navigator.userAgent.match(/mac(\s?os|intel)/i))
    return "mac";
  return "other";
}
