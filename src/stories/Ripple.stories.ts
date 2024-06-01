import type { StoryObj, Meta } from "@storybook/html";
import { fn } from "@storybook/test";
import { createRipple } from "../components/ripple.js";
import "../components/ripple.css";

const meta = {
  title: "Ripple Button",
  render: (args) => {
    const btn = document.createElement("div");
    btn.tabIndex = 0;
    btn.style.height = "24px";
    btn.style.display = "inline-flex";
    btn.style.justifyContent = "center";
    btn.style.alignItems = "center";
    btn.style.borderRadius = "24px";
    btn.style.cursor = "pointer";

    btn.innerHTML = args.label;
    btn.style.backgroundColor = args.backgroundColor;
    btn.style.color = args.color;
    btn.style.fontSize = args.fontSize;
    btn.style.padding = args.padding;

    btn.addEventListener("click", args.onClick);
    return createRipple(btn, { speed: args.speed });
  },
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    label: { control: "text" },
    onClick: { action: "onClick" },
    padding: { control: "text" },
    fontSize: { control: "text" },
    speed: { control: { type: "select" }, options: ["normal", "fast", "slow"] },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<RippleProps>;

export default meta;

type RippleProps = {
  backgroundColor: string;
  color: string;
  label: string;
  onClick: (e: MouseEvent) => void;
  padding: string;
  fontSize: string;
  speed: "normal" | "fast" | "slow";
};

type Story = StoryObj<RippleProps>;

export const Primary: Story = {
  args: {
    backgroundColor: "#123489",
    color: "white",
    label: "Hello I am a button",
    padding: "8px 36px",
    fontSize: "16px",
    speed: "slow",
  },
};
