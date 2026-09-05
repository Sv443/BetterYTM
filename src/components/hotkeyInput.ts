import { emitSiteEvent, siteEvents } from "@/siteEvents.ts";
import { getOS, hasKey, interactionKeys, onInteraction, setInnerHtml, t } from "@util/index.ts";
import type { HotkeyObj } from "@/types.ts";
import "@comp/hotkeyInput.css";

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
  if(typeof initialValue?.code === "string")
    getHkInputContent(initialValue).then(content => {
      inputElem.innerText = content;
    });
  else
    inputElem.innerText = t("hotkey_input_click_to_change");
  inputElem.ariaLabel = inputElem.title = createTitle(hotkeyToString(initialValue));

  const resetElem = document.createElement("span");
  resetElem.classList.add("bytm-hotkey-reset", "bytm-link", "bytm-hidden");
  resetElem.role = "button";
  resetElem.tabIndex = 0;
  resetElem.textContent = `(${t("reset")})`;
  resetElem.ariaLabel = resetElem.title = t("hotkey_input_click_to_reset_tooltip");

  const deactivate = (force = false) => {
    if(!otherHotkeyInputActive && !force)
      return;
    emitSiteEvent("hotkeyInputActive", false);
    otherHotkeyInputActive = false;
    const curHk = currentHotkey ?? initialValue;
    if(typeof curHk?.code === "string") {
      getHkInputContent(curHk).then(content => {
        inputElem.innerText = content;
      });
    }
    else
      inputElem.innerText = t("hotkey_input_click_to_change");
    inputElem.dataset.state = infoElem.dataset.state = "inactive";
    inputElem.ariaLabel = inputElem.title = createTitle(hotkeyToString(curHk));
    setInnerHtml(infoElem, curHk ? getHotkeyModifiersHtml(curHk) : "");
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

  // bandaid fix for the legacy config menu
  const remountAC = new AbortController();
  siteEvents.once("recreateCfgMenu", () => remountAC.abort());

  window.addEventListener("bytm:dialogClosed:cfg-menu", () => inputElem.dataset.state === "active" && deactivate(true), { signal: remountAC.signal });

  onInteraction(resetElem, async (e: MouseEvent | KeyboardEvent) => {
    e.preventDefault();
    e.stopImmediatePropagation();

    onChange(initialValue!);
    currentHotkey = initialValue!;
    deactivate();
    inputElem.innerText = await getHkInputContent(initialValue!);
    setInnerHtml(infoElem, getHotkeyModifiersHtml(initialValue!));
    resetElem.classList.add("bytm-hidden");
    inputElem.ariaLabel = inputElem.title = createTitle(hotkeyToString(initialValue));
  });

  if(initialValue)
    setInnerHtml(infoElem, getHotkeyModifiersHtml(initialValue));

  let lastKeyDown: HotkeyObj | undefined;

  document.addEventListener("keypress", async (e) => {
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

    inputElem.innerText = await getHkInputContent(hotkey);
    inputElem.dataset.state = infoElem.dataset.state = "inactive";
    setInnerHtml(infoElem, getHotkeyModifiersHtml(hotkey));
    inputElem.ariaLabel = inputElem.title = t("click_to_cancel_tooltip");

    onChange(hotkey);
    currentHotkey = hotkey;
  }, { signal: remountAC.signal });

  document.addEventListener("keydown", async (e) => {
    if(reservedKeys.filter(k => k !== "Tab").includes(e.code))
      return;
    if(inputElem.dataset.state !== "active")
      return;
    if(e.code === "Tab" || e.code === "Escape" || interactionKeys.includes(e.code)) {
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

    inputElem.innerText = await getHkInputContent(hotkey);
    inputElem.dataset.state = infoElem.dataset.state = "inactive";
    setInnerHtml(infoElem, getHotkeyModifiersHtml(hotkey));
  }, { signal: remountAC.signal });

  const unsub = siteEvents.on("cfgMenuClosed", deactivate);
  remountAC.signal.addEventListener("abort", () => unsub());

  inputElem.addEventListener("click", () => {
    if(inputElem.dataset.state === "inactive")
      activate();
    else
      deactivate();
  }, { signal: remountAC.signal });
  inputElem.addEventListener("keydown", (e) => {
    if(reservedKeys.includes(e.code))
      return;
    if(inputElem.dataset.state === "inactive")
      activate();
  }, { signal: remountAC.signal });

  wrapperElem.appendChild(resetElem);
  wrapperElem.appendChild(infoElem);
  wrapperElem.appendChild(inputElem);

  return wrapperElem;
}

/** Returns HTML for the hotkey modifier keys info element */
function getHotkeyModifiersHtml(hotkey: HotkeyObj) {
  const modifiers = [] as string[];
  hotkey.ctrl && modifiers.push(`<kbd class="bytm-kbd">${t("hotkey_modifier.ctrl")}</kbd>`);
  hotkey.shift && modifiers.push(`<kbd class="bytm-kbd">${t("hotkey_modifier.shift")}</kbd>`);
  hotkey.alt && modifiers.push(`<kbd class="bytm-kbd">${getOS() === "mac" ? t("hotkey_modifier.mac_option") : t("hotkey_modifier.alt")}</kbd>`);
  return `\
<div class="bytm-hotkey-input-modifier-container" style="display: flex; align-items: center;">
  <span>
    ${modifiers.reduce((a, c) => `${a ? a + " " : ""}${c}`, "")}
  </span>
  <span style="padding: 0px 5px; height: 20px;">
    ${modifiers.length > 0 ? "+" : ""}
  </span>
</div>`;
}

async function getHkInputContent(hotkey: HotkeyObj) {
  const trimCode = ({ code }: HotkeyObj) => {
    if(/^Key[A-Z].+$/.test(code))
      return code.slice(3);
    if(/^Digit[0-9].+$/.test(code))
      return code.slice(5);
    return code.trim();
  };

  const keyCodeTrKey = `key_code.${hotkey.code}`;
  const keyStr = await hasKey(keyCodeTrKey)
    ? t(keyCodeTrKey)
    : trimCode(hotkey);

  return keyStr;
}

/** Converts a hotkey object to a string, with optional whitespace padding between symbols */
export function hotkeyToString(hotkey: HotkeyObj | undefined, padding = false) {
  if(!hotkey)
    return t("hotkey_input_none_selected");
  let str = "";
  const p = padding ? " " : "";
  if(hotkey.ctrl)
    str += `${t("hotkey_modifier.ctrl")}${p}+${p}`;
  if(hotkey.shift)
    str += `${t("hotkey_modifier.shift")}${p}+${p}`;
  if(hotkey.alt)
    str += `${getOS() === "mac" ? t("hotkey_modifier.mac_option") : t("hotkey_modifier.alt")}${p}+${p}`;
  str += hotkey.code;
  return str;
}
