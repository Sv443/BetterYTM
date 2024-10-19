import type { StoryObj, Meta } from "@storybook/html";
import type { Stringifiable } from "@sv443-network/userutils";
import { fn } from "@storybook/test";
import "../features/layout.css";
import "./multiSelect.css";

//#region meta

const meta = {
  title: "MultiSelect",
  render,
  argTypes: {
    onChange: { action: "onClick" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onChange: fn() },
} satisfies Meta<GenericBtnStoryArgs>;

export default meta;

type GenericBtnStoryArgs = {
  onChange: (values: Stringifiable[]) => void;
};

type Story = StoryObj<GenericBtnStoryArgs>;

//#region render

function render(args: GenericBtnStoryArgs) {
  const wrapperEl = document.createElement("div");

  createMultiSelect({
    ...args,
    id: "multi-select-1",
    options: [
      { value: "val1", labelStr: "Option 1" },
      { value: "val2", labelStr: async () => "Option 2" },
      {
        value: "val3",
        labelElem: (chkId: string) => {
          const el = document.createElement("label");
          el.textContent = "Option 3";
          el.htmlFor = chkId;
          return el;
        },
      },
    ],
  }).then(multiSelect => wrapperEl.appendChild(multiSelect));

  return wrapperEl;
}

type StringGen = Stringifiable | (() => Stringifiable | Promise<Stringifiable>);

type MultiSelectProps<TValues extends Stringifiable = Stringifiable> = {
  /** ID that is unique between all multi select elements */
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

async function createMultiSelect<TValues extends Stringifiable = Stringifiable>({
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
    listEl.classList.add("hidden");
    selectBtnEl.textContent = "Expand";
  };

  listEl.classList.add("bytm-multi-select-list");
  listEl.addEventListener("mouseleave", () => {
    hide();
  });
  hide();

  const show = () => {
    listEl.classList.remove("hidden");
    selectBtnEl.textContent = "Collapse";
  };

  selectBtnEl.classList.add("bytm-multi-select-btn");
  if(title)
    selectBtnEl.title = selectBtnEl.ariaLabel = await consumeStringGen(title);
  selectBtnEl.textContent = "Expand";
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

  const getCheckedOptions = (): TValues[] => {
    return Array.from(listEl.querySelectorAll<HTMLInputElement>(".bytm-multi-select-checkbox:checked"))
      .map(checkbox => (checkbox.closest(".bytm-multi-select-option") as HTMLElement)?.dataset.value as TValues)
      .filter(value => value !== undefined);
  };

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
      onChange(getCheckedOptions());
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

  return containerEl;
}

async function consumeStringGen(strGen: StringGen): Promise<string> {
  return String(typeof strGen === "function" ? await strGen() : strGen);
}

//#region stories

export const MultiSelect: Story = {
  args: {
  },
};
