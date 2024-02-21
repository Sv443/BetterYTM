import { randomId } from "@sv443-network/userutils";
import { t } from "../utils";
import "./toggle.css";

export interface ToggleProps {
  /** Callback function that is called when the toggle is changed */
  onChange: (value: boolean) => void;
  /** Initial value of the toggle - defaults to false */
  initialValue?: boolean;
  /** If unspecified, a random ID is generated */
  id?: string;
  /** Position of the label relative to the toggle */
  labelPos?: "left" | "right";
}

/** Creates a simple toggle element */
export async function createToggle({
  onChange,
  initialValue = false,
  id = randomId(8, 24),
  labelPos = "left",
}: ToggleProps) {
  const wrapperEl = document.createElement("div");
  wrapperEl.classList.add("bytm-toggle-wrapper", "bytm-no-select");
  wrapperEl.role = "switch";
  wrapperEl.tabIndex = 0;
  wrapperEl.ariaValueText = t(`toggled_${initialValue ? "on" : "off"}`);

  const labelEl = document.createElement("label");
  labelEl.classList.add("bytm-toggle-label");
  labelEl.textContent = t(`toggled_${initialValue ? "on" : "off"}`);
  if(id)
    labelEl.htmlFor = `bytm-toggle-${id}`;

  const toggleEl = document.createElement("input");
  toggleEl.classList.add("bytm-toggle");
  toggleEl.type = "checkbox";
  toggleEl.checked = initialValue;
  toggleEl.tabIndex = -1;
  if(id)
    toggleEl.id = `bytm-toggle-${id}`;

  const toggleElClicked = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();

    onChange(toggleEl.checked);
    labelEl.textContent = wrapperEl.ariaValueText = t(`toggled_${toggleEl.checked ? "on" : "off"}`);
  };

  toggleEl.addEventListener("change", toggleElClicked);
  wrapperEl.addEventListener("keydown", (e) => {
    if(["Space", " ", "Enter"].includes(e.code)) {
      toggleEl.checked = !toggleEl.checked;
      toggleElClicked(e);
    }
  });

  labelPos === "left" && wrapperEl.appendChild(labelEl);
  wrapperEl.appendChild(toggleEl);
  labelPos === "right" && wrapperEl.appendChild(labelEl);

  return wrapperEl;
}
