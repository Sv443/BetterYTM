import type { StoryObj, Meta } from "@storybook/html";
import { fn } from "@storybook/test";
import { createRipple } from "../components/ripple.js";
import "../components/ripple.css";

//#region meta

const meta = {
  title: "Ripple",
  render,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    label: { control: "text" },
    onClick: { action: "onClick" },
    padding: { control: "text" },
    fontSize: { control: "text" },
    speed: { control: { type: "select" }, options: ["faster", "fast", "normal", "slow", "slower"] },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<RippleProps>;

export default meta;

type RippleProps = {
  type: "button" | "area";
  backgroundColor: string;
  color: string;
  label: string;
  onClick: (e: MouseEvent) => void;
  padding: string;
  fontSize: string;
  speed: "faster" | "fast" | "normal" | "slow" | "slower";
};

type Story = StoryObj<RippleProps>;

//#region render

function render(props: RippleProps) {
  const rippleEl = createRipple(document.createElement("div"), { speed: props.speed });

  switch(props.type) {
  case "area":
    rippleEl.style.minWidth = "1000px";
    rippleEl.style.minHeight = "600px";
    rippleEl.style.position = "relative";
    rippleEl.style.display = "inline-flex";
    rippleEl.style.justifyContent = "center";
    rippleEl.style.alignItems = "center";
    rippleEl.style.overflow = "hidden";
    rippleEl.style.borderRadius = "32px";
    rippleEl.style.height = "24px";
    rippleEl.style.cursor = "pointer";
    rippleEl.tabIndex = 0;

    rippleEl.style.backgroundColor = props.backgroundColor;
    rippleEl.style.color = props.color;
    rippleEl.style.fontSize = props.fontSize;
    rippleEl.appendChild(document.createTextNode(props.label));

    rippleEl.addEventListener("click", props.onClick);
    break;
  case "button":
    rippleEl.tabIndex = 0;
    rippleEl.style.height = "24px";
    rippleEl.style.display = "inline-flex";
    rippleEl.style.justifyContent = "center";
    rippleEl.style.alignItems = "center";
    rippleEl.style.borderRadius = "24px";
    rippleEl.style.cursor = "pointer";

    rippleEl.innerHTML = props.label;
    rippleEl.style.backgroundColor = props.backgroundColor;
    rippleEl.style.color = props.color;
    rippleEl.style.fontSize = props.fontSize;
    rippleEl.style.padding = props.padding;

    rippleEl.addEventListener("click", props.onClick);
    break;
  }

  return rippleEl;
}

//#region stories

export const Button: Story = {
  args: {
    type: "button",
    backgroundColor: "#123489",
    color: "white",
    label: "Hello I am a button",
    padding: "8px 36px",
    fontSize: "16px",
    speed: "normal",
  },
};

export const Area: Story = {
  args: {
    type: "area",
    backgroundColor: "#893412",
    color: "white",
    label: "Hello I am an area",
    fontSize: "32px",
    speed: "slow",
  },
};
