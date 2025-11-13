import { randomId } from "@sv443-network/coreutils";
import { t } from "../utils/index.js";
import "./toggleInput.css";

export type ToggleInputProps = {
  /** Callback function that is called when the toggle is changed */
  onChange: (value: boolean) => void;
  /** Initial value of the toggle - defaults to false */
  initialValue?: boolean;
  /** Should be unique across toggle inputs. If unspecified, a random ID is generated. */
  id?: string;
  /** Toggle label off or change position of the label relative to the toggle */
  labelPos?: "off" | "left" | "right";
};

/** Creates a simple toggle element */
export async function createToggleInput({
  onChange,
  initialValue = false,
  id = randomId(6, 36),
  labelPos = "left",
}: ToggleInputProps) {
  const wrapperEl = document.createElement("div");
  wrapperEl.classList.add("bytm-toggle-wrapper", "bytm-no-select");
  wrapperEl.role = "switch";
  wrapperEl.tabIndex = 0;
  wrapperEl.ariaChecked = String(initialValue);

  const labelEl = labelPos !== "off" ? document.createElement("label") : undefined;
  if(labelEl) {
    labelEl.id = `bytm-toggle-label-${id}`;
    labelEl.classList.add("bytm-toggle-label");
    labelEl.textContent = t(`toggled_${initialValue ? "on" : "off"}`);
    if(id)
      labelEl.htmlFor = `bytm-toggle-${id}`;
    wrapperEl.setAttribute("aria-labelledby", labelEl.id);
  }

  const toggleEl = document.createElement("label");
  toggleEl.classList.add("bytm-toggle");

  const checkboxEl = document.createElement("input");
  checkboxEl.type = "checkbox";
  checkboxEl.checked = initialValue;
  checkboxEl.classList.add("bytm-toggle-checkbox");
  checkboxEl.tabIndex = -1;
  if(id)
    checkboxEl.id = `bytm-toggle-${id}`;

  const toggleSwitchEl = document.createElement("div");
  toggleSwitchEl.classList.add("bytm-toggle-switch");

  const handleToggle = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();

    onChange(checkboxEl.checked);

    if(labelEl)
      labelEl.textContent = t(`toggled_${checkboxEl.checked ? "on" : "off"}`);
    wrapperEl.ariaChecked = String(checkboxEl.checked);
  };

  checkboxEl.addEventListener("change", handleToggle, { capture: true });
  
  wrapperEl.addEventListener("keydown", (e) => {
    if(["Space", " ", "Enter"].includes(e.code)) {
      e.preventDefault();
      e.stopPropagation();
      checkboxEl.checked = !checkboxEl.checked;
      handleToggle(e);
    }
  }, { capture: true });

  wrapperEl.addEventListener("click", (e) => {
    if(e.target !== checkboxEl) {
      checkboxEl.checked = !checkboxEl.checked;
      handleToggle(e);
    }
  });

  toggleEl.appendChild(checkboxEl);
  toggleEl.appendChild(toggleSwitchEl);

  labelEl && labelPos === "left" && wrapperEl.appendChild(labelEl);
  wrapperEl.appendChild(toggleEl);
  labelEl && labelPos === "right" && wrapperEl.appendChild(labelEl);

  return wrapperEl;
}
