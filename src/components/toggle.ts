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
  /** Toggle label off or change position of the label relative to the toggle */
  labelPos?: "off" | "left" | "right";
}

/** Creates a simple toggle element */
export async function createToggle({
  onChange,
  initialValue = false,
  id = randomId(8, 26),
  labelPos = "left",
}: ToggleProps) {
  const wrapperEl = document.createElement("div");
  wrapperEl.classList.add("bytm-toggle-wrapper", "bytm-no-select");
  wrapperEl.role = "switch";
  wrapperEl.tabIndex = 0;

  const labelEl = labelPos !== "off" && document.createElement("label");
  if(labelEl) {
    labelEl.classList.add("bytm-toggle-label");
    labelEl.textContent = t(`toggled_${initialValue ? "on" : "off"}`);
    if(id)
      labelEl.htmlFor = `bytm-toggle-${id}`;
  }

  const toggleWrapperEl = document.createElement("div");
  toggleWrapperEl.classList.add("bytm-toggle");
  toggleWrapperEl.tabIndex = -1;

  const toggleEl = document.createElement("input");
  toggleEl.type = "checkbox";
  toggleEl.checked = initialValue;
  toggleEl.dataset.toggled = String(Boolean(initialValue));
  toggleEl.tabIndex = -1;
  if(id)
    toggleEl.id = `bytm-toggle-${id}`;

  const toggleKnobEl = document.createElement("div");
  toggleKnobEl.classList.add("bytm-toggle-knob");
  toggleKnobEl.innerHTML = "&nbsp;";

  const toggleElClicked = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();

    onChange(toggleEl.checked);

    toggleEl.dataset.toggled = String(Boolean(toggleEl.checked));
    if(labelEl)
      labelEl.textContent = t(`toggled_${toggleEl.checked ? "on" : "off"}`);
    wrapperEl.ariaValueText = t(`toggled_${toggleEl.checked ? "on" : "off"}`);
  };

  toggleEl.addEventListener("change", toggleElClicked);
  wrapperEl.addEventListener("keydown", (e) => {
    if(["Space", " ", "Enter"].includes(e.code)) {
      toggleEl.checked = !toggleEl.checked;
      toggleElClicked(e);
    }
  });

  toggleEl.appendChild(toggleKnobEl);
  toggleWrapperEl.appendChild(toggleEl);

  labelEl && labelPos === "left" && wrapperEl.appendChild(labelEl);
  wrapperEl.appendChild(toggleWrapperEl);
  labelEl && labelPos === "right" && wrapperEl.appendChild(labelEl);

  return wrapperEl;
}
