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
  if(props.type === "area") {
    const area = document.createElement("div");
    area.style.minWidth = "800px";
    area.style.minHeight = "400px";
    area.style.position = "relative";
    area.style.display = "inline-flex";
    area.style.justifyContent = "center";
    area.style.alignItems = "center";
    area.style.overflow = "hidden";
    area.style.borderRadius = "32px";
    area.style.height = "24px";
    area.style.cursor = "pointer";
    area.tabIndex = 0;

    area.style.backgroundColor = props.backgroundColor;
    area.style.color = props.color;
    area.style.fontSize = props.fontSize;
    area.appendChild(document.createTextNode(props.label));

    area.addEventListener("click", props.onClick);
    return createRipple(area, { speed: props.speed });
  }
  else {
    const btn = document.createElement("div");
    btn.tabIndex = 0;
    btn.style.height = "24px";
    btn.style.display = "inline-flex";
    btn.style.justifyContent = "center";
    btn.style.alignItems = "center";
    btn.style.borderRadius = "24px";
    btn.style.cursor = "pointer";

    btn.innerHTML = props.label;
    btn.style.backgroundColor = props.backgroundColor;
    btn.style.color = props.color;
    btn.style.fontSize = props.fontSize;
    btn.style.padding = props.padding;

    btn.addEventListener("click", props.onClick);
    return createRipple(btn, { speed: props.speed });
  }
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
