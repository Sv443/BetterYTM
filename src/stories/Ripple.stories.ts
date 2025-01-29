import type { StoryObj, Meta } from "@storybook/html";
import { fn } from "@storybook/test";
import { createRipple } from "../components/ripple.js";
import { createCircularBtn } from "../components/circularButton.js";
import { createLongBtn } from "../components/longButton.js";
import "../components/ripple.css";
import "../features/layout.css";

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
    speed: { control: { type: "select" }, options: ["fastest", "fast", "normal", "slow", "slowest"] },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<RippleProps>;

export default meta;

type RippleProps = {
  type: "area" | "circularRippleBtn" | "longRippleBtn";
  backgroundColor: string;
  color: string;
  label: string;
  onClick: (e: MouseEvent | KeyboardEvent) => void;
  padding: string;
  fontSize: string;
  speed: "fastest" | "fast" | "normal" | "slow" | "slowest";
};

type Story = StoryObj<RippleProps>;

//#region render

function render(props: RippleProps) {
  let rippleElem: HTMLElement;

  switch(props.type) {
  case "area":
    rippleElem = createRipple(document.createElement("div"), { speed: props.speed });

    rippleElem.style.minWidth = "1000px";
    rippleElem.style.minHeight = "600px";
    rippleElem.style.position = "relative";
    rippleElem.style.display = "inline-flex";
    rippleElem.style.justifyContent = "center";
    rippleElem.style.alignItems = "center";
    rippleElem.style.overflow = "hidden";
    rippleElem.style.borderRadius = "50px";
    rippleElem.style.height = "24px";
    rippleElem.style.cursor = "pointer";
    rippleElem.style.userSelect = "none";
    rippleElem.tabIndex = 0;

    rippleElem.style.backgroundColor = props.backgroundColor;
    rippleElem.style.color = props.color;
    rippleElem.style.fontSize = props.fontSize;
    rippleElem.appendChild(document.createTextNode(props.label));

    rippleElem.addEventListener("click", props.onClick);
    break;
  case "circularRippleBtn":
    rippleElem = document.createElement("span");
    createCircularBtn({
      resourceName: "icons/image.svg" as "_",
      onClick: props.onClick,
      title: props.label,
    }).then((btnEl) => {
      const rippleBtnEl = createRipple(btnEl, { speed: props.speed });
      rippleElem.appendChild(rippleBtnEl);
    }).catch((err) => console.error("Error creating circular button:", err));

    rippleElem.addEventListener("click", props.onClick);
    break;
  case "longRippleBtn":
    rippleElem = document.createElement("span");
    createLongBtn({
      resourceName: "icons/image.svg" as "_",
      onClick: props.onClick,
      title: props.label,
      text: props.label,
    }).then((btnEl) => {
      const rippleBtnEl = createRipple(btnEl, { speed: props.speed });
      rippleElem.appendChild(rippleBtnEl);
    }).catch((err) => console.error("Error creating long button:", err));

    rippleElem.addEventListener("click", props.onClick);
    break;
  }

  return rippleElem;
}

//#region stories

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

export const CircularRippleBtn: Story = {
  args: {
    type: "circularRippleBtn",
    label: "Button da circular",
    speed: "normal",
  },
};

export const LongRippleBtn: Story = {
  args: {
    type: "longRippleBtn",
    label: "Button da long way",
    speed: "normal",
  },
};
