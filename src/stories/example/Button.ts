import "./button.css";

export type ButtonProps = {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
};

export const createButton = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  onClick,
}: ButtonProps) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = label;
  if(onClick)
    btn.addEventListener("click", onClick);

  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  btn.classList.add("storybook-button", `storybook-button--${size}`, mode);

  if(backgroundColor)
    btn.style.backgroundColor = backgroundColor;

  return btn;
};
