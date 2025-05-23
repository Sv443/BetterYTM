import { emitSiteEvent, siteEvents } from "../siteEvents.js";
import { getOS, onInteraction, setInnerHtml, t } from "../utils/index.js";
import type { HotkeyObj } from "../types.js";
import "./hotkeyInput.css";

type HotkeyInputProps = {
  initialValue?: HotkeyObj;
  onChange: (hotkey: HotkeyObj) => void;
  /** Function that returns the title and aria-label for the input element, given the hotkey value */
  createTitle?: (value: string) => string;
};

let otherHotkeyInputActive = false;

const reservedKeys = ["ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "Meta", "Tab", "Space", " "];

/** Creates a hotkey input element */
export function createHotkeyInput({ initialValue, onChange, createTitle }: HotkeyInputProps): HTMLElement {
  const initialHotkey: HotkeyObj | undefined = initialValue;
  let currentHotkey: HotkeyObj | undefined;

  if(!createTitle)
    createTitle = (value) => value;

  const wrapperElem = document.createElement("div");
  wrapperElem.classList.add("bytm-hotkey-wrapper");

  const infoElem = document.createElement("span");
  infoElem.classList.add("bytm-hotkey-info");

  const inputElem = document.createElement("button");
  inputElem.role = "button";
  inputElem.classList.add("bytm-ftconf-input", "bytm-hotkey-input", "bytm-btn");
  inputElem.dataset.state = infoElem.dataset.state = "inactive";
  inputElem.innerText = initialValue?.code ?? t("hotkey_input_click_to_change");
  inputElem.ariaLabel = inputElem.title = createTitle(hotkeyToString(initialValue));

  const resetElem = document.createElement("span");
  resetElem.classList.add("bytm-hotkey-reset", "bytm-link", "bytm-hidden");
  resetElem.role = "button";
  resetElem.tabIndex = 0;
  resetElem.textContent = `(${t("reset")})`;
  resetElem.ariaLabel = resetElem.title = t("hotkey_input_click_to_reset_tooltip");

  const deactivate = () => {
    if(!otherHotkeyInputActive)
      return;
    emitSiteEvent("hotkeyInputActive", false);
    otherHotkeyInputActive = false;
    const curHk = currentHotkey ?? initialValue;
    inputElem.innerText = curHk?.code ?? t("hotkey_input_click_to_change");
    inputElem.dataset.state = infoElem.dataset.state = "inactive";
    inputElem.ariaLabel = inputElem.title = createTitle(hotkeyToString(curHk));
    setInnerHtml(infoElem, curHk ? getHotkeyInfoHtml(curHk) : "");
  };

  const activate = () => {
    if(otherHotkeyInputActive)
      return;
    emitSiteEvent("hotkeyInputActive", true);
    otherHotkeyInputActive = true;
    inputElem.innerText = "< ... >";
    inputElem.dataset.state = infoElem.dataset.state = "active";
    inputElem.ariaLabel = inputElem.title = t("click_to_cancel_tooltip");
  };

  const resetClicked = (e: MouseEvent | KeyboardEvent) => {
    e.preventDefault();
    e.stopImmediatePropagation();

    onChange(initialValue!);
    currentHotkey = initialValue!;
    deactivate();
    inputElem.innerText = initialValue!.code;
    setInnerHtml(infoElem, getHotkeyInfoHtml(initialValue!));
    resetElem.classList.add("bytm-hidden");
    inputElem.ariaLabel = inputElem.title = createTitle(hotkeyToString(initialValue));
  };

  onInteraction(resetElem, resetClicked);

  if(initialValue)
    setInnerHtml(infoElem, getHotkeyInfoHtml(initialValue));

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

    inputElem.innerText = hotkey.code;
    inputElem.dataset.state = infoElem.dataset.state = "inactive";
    setInnerHtml(infoElem, getHotkeyInfoHtml(hotkey));
    inputElem.ariaLabel = inputElem.title = t("click_to_cancel_tooltip");

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

    inputElem.innerText = hotkey.code;
    inputElem.dataset.state = infoElem.dataset.state = "inactive";
    setInnerHtml(infoElem, getHotkeyInfoHtml(hotkey));
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

/** Returns HTML for the hotkey modifier keys info element */
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

/** Converts a hotkey object to a string */
function hotkeyToString(hotkey: HotkeyObj | undefined) {
  if(!hotkey)
    return t("hotkey_key_none");
  let str = "";
  if(hotkey.ctrl)
    str += `${t("hotkey_key_ctrl")}+`;
  if(hotkey.shift)
    str += `${t("hotkey_key_shift")}+`;
  if(hotkey.alt)
    str += `${getOS() === "mac" ? t("hotkey_key_mac_option") : t("hotkey_key_alt")}+`;
  str += hotkey.code;
  return str;
}
