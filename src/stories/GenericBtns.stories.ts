import type { StoryObj, Meta } from "@storybook/html";
import { fn } from "@storybook/test";
import { createLongBtn } from "../components/longButton.js";
import { createCircularBtn } from "../components/circularButton.js";
import "../features/input.css";
import "../features/layout.css";

//#region meta

const meta = {
  title: "Ripple",
  render,
  argTypes: {
    backgroundColor: { control: "color" },
    src: { control: "text" },
    color: { control: "color" },
    label: { control: "text" },
    onClick: { action: "onClick" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<GenericBtnStoryArgs>;

export default meta;

type GenericBtnStoryArgs = {
  type: "circular" | "long";
  backgroundColor: string;
  src: string;
  color: string;
  label: string;
  onClick: (e: MouseEvent | KeyboardEvent) => void;
};

type Story = StoryObj<GenericBtnStoryArgs>;

//#region render

function render(args: GenericBtnStoryArgs) {
  const wrapperEl = document.createElement("div");

  switch(args.type) {
  case "circular":
    createCircularBtn({
      src: args.src,
      onClick: args.onClick,
      title: args.label,
    }).then((btnEl) => wrapperEl.appendChild(btnEl));
    break;
  case "long":
    createLongBtn({
      onClick: args.onClick,
      title: args.label,
      text: args.label,
      src: args.src,
    }).then((btnEl) => wrapperEl.appendChild(btnEl));
    break;
  }

  return wrapperEl;
}

//#region stories

export const CircularButton: Story = {
  args: {
    type: "circular",
    backgroundColor: "#123489",
    color: "white",
    label: "Example",
    src: "https://picsum.photos/24",
  },
};

export const LongButton: Story = {
  args: {
    type: "long",
    backgroundColor: "#893412",
    color: "white",
    label: "Example",
    src: "https://picsum.photos/24",
  },
};
