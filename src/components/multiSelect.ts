import type { Stringifiable } from "@sv443-network/userutils";
import type { StringGen } from "../types.js";
import { consumeStringGen } from "../utils/misc.js";
import "./multiSelect.css";

export type MultiSelectProps<TValues extends Stringifiable = Stringifiable> = {
  /** ID that needs to be unique between all multi select elements */
  id: string;
  /** Array of options to choose from */
  options: Array<(
    & {
      value: TValues;
    }
    & (
      | {
        /** If this is given, this will be the value of the `title` and `aria-value-text` */
        labelStr: StringGen;
      }
      | {
        /** If this is set, the `htmlFor` needs to be set to `checkboxId` and a `aria-value-text` attribute should be set on the returned element that describes the current checked state */
        labelElem: HTMLLabelElement | ((checkboxId: string) => HTMLLabelElement) | ((checkboxId: string) => Promise<HTMLLabelElement>);
      }
    )
  )>;
  /** Called when the selection changes with an array of `value` properties of the selected options - empty array when nothing is selected */
  onChange: (values: TValues[]) => void;
  /** Title / tooltip */
  title?: StringGen;
};

/**
 * Creates a multi-select element with the specified options.  
 * The element starts as a `button`, when clicked it expands a list of checkbox elements that uses the popper library to anchor to the button.  
 * When the mouse leaves the list, it collapses back into the button.  
 * The `onChange` callback will be called with an array of the `value` properties of the selected options.
 */
export async function createMultiSelect<TValues extends Stringifiable = Stringifiable>({
  id,
  options,
  onChange,
  title,
}: MultiSelectProps<TValues>) {
  const containerEl = document.createElement("div");
  containerEl.classList.add("bytm-multi-select-container");

  const selectBtnEl = document.createElement("button");
  const listEl = document.createElement("div");

  const hide = () => {
    if(listEl.classList.contains("hidden"))
      return;
    listEl.classList.add("hidden");
    selectBtnEl.textContent = "Expand";
  };

  listEl.classList.add("bytm-multi-select-list");
  listEl.addEventListener("mouseleave", () => {
    hide();
  });
  hide();

  const show = () => {
    if(!listEl.classList.contains("hidden"))
      return;
    listEl.classList.remove("hidden");
    selectBtnEl.textContent = "Collapse";
  };

  selectBtnEl.classList.add("bytm-multi-select-btn");
  if(title)
    selectBtnEl.title = selectBtnEl.ariaLabel = await consumeStringGen(title);
  selectBtnEl.addEventListener("click", () => {
    if(listEl.classList.contains("hidden"))
      show();
    else
      hide();
  });
  selectBtnEl.addEventListener("mouseenter", () => {
    show();
  });
  selectBtnEl.addEventListener("mouseleave", (e) => {
    const relTarget = e.relatedTarget as HTMLElement;
    if(!["bytm-multi-select-option", "bytm-multi-select-list", "bytm-multi-select-option-label"].some((cl) => relTarget.classList.contains(cl)))
      hide();
  });

  containerEl.appendChild(selectBtnEl);
  containerEl.appendChild(listEl);

  for(const opt of options) {
    const optId = `bytm-multi-select-option-${id}-${opt.value}`;

    const optEl = document.createElement("div");
    optEl.classList.add("bytm-multi-select-option");
    optEl.dataset.value = String(opt.value);

    const checkboxEl = document.createElement("input");
    checkboxEl.id = optId;
    checkboxEl.type = "checkbox";
    checkboxEl.classList.add("bytm-multi-select-checkbox");
    checkboxEl.addEventListener("change", () => {
      onChange(
        Array.from(listEl.querySelectorAll<HTMLInputElement>(".bytm-multi-select-checkbox:checked"))
          .map(checkbox => (checkbox.closest(".bytm-multi-select-option") as HTMLElement)?.dataset.value as TValues)
          .filter(value => value !== undefined)
      );
    });
    optEl.appendChild(checkboxEl);

    if("labelElem" in opt)
      optEl.appendChild(typeof opt.labelElem === "function" ? await opt.labelElem(optId) : opt.labelElem);
    else if("labelStr" in opt) {
      const lblEl = document.createElement("label");
      lblEl.classList.add("bytm-multi-select-option-label");
      lblEl.htmlFor = optId;
      lblEl.textContent = optEl.ariaValueText = await consumeStringGen(opt.labelStr);
      optEl.appendChild(lblEl);
    }
    listEl.appendChild(optEl);
  }

  return { element: containerEl, show, hide };
}
