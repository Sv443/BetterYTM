import { getFeatures } from "../config";
import { siteEvents } from "../siteEvents";
import { t } from "../translations";
import type { HotkeyObj } from "../types";
import "./hotkeyInput.css";

interface HotkeyInputProps {
  initialValue?: HotkeyObj;
  resetValue?: HotkeyObj;
  onChange: (hotkey: HotkeyObj) => void;
}

/** Creates a hotkey input element */
export function createHotkeyInput({ initialValue, resetValue, onChange }: HotkeyInputProps): HTMLElement {
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
  resetElem.classList.add("bytm-hotkey-reset", "bytm-link");
  resetElem.role = "button";
  resetElem.tabIndex = 0;
  resetElem.innerText = `(${t("reset")})`;

  const resetClicked = (e: MouseEvent | KeyboardEvent) => {
    e.preventDefault();
    e.stopImmediatePropagation();

    onChange(resetValue!);
    inputElem.value = resetValue!.code;
    inputElem.dataset.state = "inactive";
    infoElem.innerText = getHotkeyInfo(resetValue!);
  };

  resetElem.addEventListener("click", resetClicked);
  resetElem.addEventListener("keydown", (e) => e.key === "Enter" && resetClicked(e));

  if(initialValue)
    infoElem.innerText = getHotkeyInfo(initialValue);

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
    infoElem.innerText = getHotkeyInfo(hotkey);
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
    } as HotkeyObj;
    lastKeyDown = hotkey;

    inputElem.value = hotkey.code;
    inputElem.dataset.state = "inactive";
    infoElem.innerText = getHotkeyInfo(hotkey);
    inputElem.ariaLabel = inputElem.title = t("hotkey_input_click_to_cancel_tooltip");
    onChange(hotkey);
  });

  const deactivate = () => {
    siteEvents.emit("hotkeyInputActive", false);
    const curVal = getFeatures().switchSitesHotkey ?? initialValue;
    inputElem.value = curVal?.code ?? t("hotkey_input_click_to_change");
    inputElem.dataset.state = "inactive";
    inputElem.ariaLabel = inputElem.title = t("hotkey_input_click_to_change_tooltip");
    infoElem.innerText = curVal ? getHotkeyInfo(curVal) : "";
  };

  const activate = () => {
    siteEvents.emit("hotkeyInputActive", true);
    inputElem.value = "< ... >";
    inputElem.dataset.state = "active";
    inputElem.ariaLabel = inputElem.title = t("hotkey_input_click_to_cancel_tooltip");
  };

  siteEvents.on("cfgMenuClosed", deactivate);

  inputElem.addEventListener("click", () => {
    if(inputElem.dataset.state === "active")
      deactivate();
    else
      activate();
  });

  wrapperElem.appendChild(infoElem);
  wrapperElem.appendChild(inputElem);
  resetValue && wrapperElem.appendChild(resetElem);

  return wrapperElem;
}

function getHotkeyInfo(hotkey: HotkeyObj) {
  const modifiers = [] as string[];
  hotkey.ctrl && modifiers.push(t("hotkey_key_ctrl"));
  hotkey.shift && modifiers.push(t("hotkey_key_shift"));
  hotkey.alt && modifiers.push(getOS() === "mac" ? t("hotkey_key_mac_option") : t("hotkey_key_alt"));
  return modifiers.reduce((a, c) => a += `${c} + `, "");
}

/** Crude OS detection for keyboard layout purposes */
function getOS() {
  if(navigator.userAgent.match(/mac(\s?os|intel)/i))
    return "mac";
  return "other";
}
