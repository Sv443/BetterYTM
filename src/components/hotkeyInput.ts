import { siteEvents } from "../siteEvents.js";
import { onInteraction, t } from "../utils/index.js";
import type { HotkeyObj } from "../types.js";
import "./hotkeyInput.css";

interface HotkeyInputProps {
  initialValue?: HotkeyObj;
  onChange: (hotkey: HotkeyObj) => void;
}

let otherHotkeyInputActive = false;

const reservedKeys = ["ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "Meta", "Tab", "Space", " "];

/** Creates a hotkey input element */
export function createHotkeyInput({ initialValue, onChange }: HotkeyInputProps): HTMLElement {
  const initialHotkey: HotkeyObj | undefined = initialValue;
  let currentHotkey: HotkeyObj | undefined;

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
    if(!otherHotkeyInputActive)
      return;
    siteEvents.emit("hotkeyInputActive", false);
    otherHotkeyInputActive = false;
    const curHk = currentHotkey ?? initialValue;
    inputElem.value = curHk?.code ?? t("hotkey_input_click_to_change");
    inputElem.dataset.state = "inactive";
    inputElem.ariaLabel = inputElem.title = t("hotkey_input_click_to_change_tooltip");
    infoElem.innerHTML = curHk ? getHotkeyInfoHtml(curHk) : "";
  };

  const activate = () => {
    if(otherHotkeyInputActive)
      return;
    siteEvents.emit("hotkeyInputActive", true);
    otherHotkeyInputActive = true;
    inputElem.value = "< ... >";
    inputElem.dataset.state = "active";
    inputElem.ariaLabel = inputElem.title = t("hotkey_input_click_to_cancel_tooltip");
  };

  const resetClicked = (e: MouseEvent | KeyboardEvent) => {
    e.preventDefault();
    e.stopImmediatePropagation();

    onChange(initialValue!);
    currentHotkey = initialValue!;
    deactivate();
    inputElem.value = initialValue!.code;
    infoElem.innerHTML = getHotkeyInfoHtml(initialValue!);
    resetElem.classList.add("bytm-hidden");
  };

  onInteraction(resetElem, resetClicked);

  if(initialValue)
    infoElem.innerHTML = getHotkeyInfoHtml(initialValue);

  let lastKeyDown: HotkeyObj | undefined;

  document.addEventListener("keypress", (e) => {
    if(inputElem.dataset.state === "inactive")
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
    } satisfies HotkeyObj;

    inputElem.value = hotkey.code;
    inputElem.dataset.state = "inactive";
    infoElem.innerHTML = getHotkeyInfoHtml(hotkey);
    inputElem.ariaLabel = inputElem.title = t("hotkey_input_click_to_cancel_tooltip");

    onChange(hotkey);
    currentHotkey = hotkey;
  });

  document.addEventListener("keydown", (e) => {
    if(reservedKeys.filter(k => k !== "Tab").includes(e.code))
      return;
    if(inputElem.dataset.state !== "active")
      return;
    if(e.code === "Tab" || e.code === " " || e.code === "Space" || e.code === "Escape" || e.code === "Enter") {
      deactivate();
      return;
    }
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
    currentHotkey = hotkey;

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
  inputElem.addEventListener("keydown", (e) => {
    if(reservedKeys.includes(e.code))
      return;
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
