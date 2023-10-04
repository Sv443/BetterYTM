import { siteEvents } from "../siteEvents";
import { t } from "../translations";
import { HotkeyObj } from "../types";
import "./hotkeyInput.css";

interface HotkeyInputProps {
  initialValue?: HotkeyObj;
  onChange: (hotkey: HotkeyObj) => void;
}

/** Creates a hotkey input element */
export function createHotkeyInput({ initialValue, onChange }: HotkeyInputProps): HTMLElement {
  const wrapperElem = document.createElement("div");
  wrapperElem.classList.add("bytm-hotkey-wrapper");

  const infoElem = document.createElement("span");
  infoElem.classList.add("bytm-hotkey-info");
  
  const inputElem = document.createElement("input");
  inputElem.type = "button";
  inputElem.classList.add("bytm-ftconf-input", "bytm-hotkey-input", "bytm-btn");
  inputElem.dataset.state = "inactive";
  inputElem.value = initialValue?.code ?? t("hotkey_input_click_to_change");
  inputElem.title = t("hotkey_input_click_to_change_tooltip");

  if(initialValue)
    infoElem.innerText = getHotkeyInfo(initialValue);

  document.addEventListener("keypress", (e) => {
    if(inputElem.dataset.state !== "active")
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

  const deactivate = () => {
    inputElem.value = initialValue?.code ?? t("hotkey_input_click_to_change");
    inputElem.dataset.state = "inactive";
    inputElem.title = t("hotkey_input_click_to_cancel_tooltip");
    infoElem.innerText = initialValue ? getHotkeyInfo(initialValue) : "";
  };

  const reactivate = () => {
    inputElem.value = "< ... >";
    inputElem.dataset.state = "active";
    inputElem.title = t("hotkey_input_click_to_change_tooltip");
  };

  siteEvents.on("cfgMenuClosed", deactivate);

  inputElem.addEventListener("click", () => {
    if(inputElem.dataset.state === "active")
      deactivate();
    else
      reactivate();
  });

  wrapperElem.appendChild(infoElem);
  wrapperElem.appendChild(inputElem);

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
  return "win";
}
