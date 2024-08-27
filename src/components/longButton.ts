import { onInteraction, resourceAsString, setInnerHtml } from "../utils/index.js";
import { createRipple } from "./ripple.js";
import type { ResourceKey } from "../types.js";

type LongBtnOptions = {
  /** Button text */
  text: string;
  /** Tooltip and aria-label of the button */
  title: string;
  /** Icon position inside the button - defaults to `left` */
  iconPosition?: "left" | "right";
  /** Whether the button should have a ripple effect - defaults to true */
  ripple?: boolean;
} & (
  | {
    /** Resource key for the button icon, added as inline SVG */
    resourceName: (ResourceKey & `icon-${string}`) | "_";
  }
  | {
    /** URL to the button icon - SVG will not be added inline this way, but as an <img>! */
    src: string;
  }
) & (
  | {
    /** URL to navigate to when the button is clicked */
    href: string;
  }
  | {
    /** Callback function to execute when the button is clicked */
    onClick: (evt: MouseEvent | KeyboardEvent) => void;
  }
  | {
    /** Whether the button can be toggled on and off */
    toggle: true;
    /** Initial state of the button if `toggle` is `true` - defaults to `false` */
    toggleInitialState?: boolean;
    /** Callback function to execute when the button is toggled */
    onToggle: (enabled: boolean, evt: MouseEvent | KeyboardEvent) => void;
    /** Predicate function to determine if the button should be toggled on click */
    togglePredicate?: (evt: MouseEvent | KeyboardEvent) => boolean;
  }
);

/**
 * Creates a generic, circular, long button element with an icon and text.  
 * Has classes for the enabled and disabled states for easier styling.  
 * If `href` is provided, the button will be an anchor element.  
 * If `onClick` or `onToggle` is provided, the button will be a div element.  
 * Provide either `resourceName` or `src` to specify the icon inside the button.
 */
export async function createLongBtn({
  title,
  text,
  iconPosition,
  ripple,
  ...rest
}: LongBtnOptions) {
  if(["href", "onClick", "onToggle"].every((key) => !(key in rest)))
    throw new TypeError("Either 'href', 'onClick' or 'onToggle' must be provided");

  let btnElem: HTMLElement;
  if("href" in rest && rest.href) {
    btnElem = document.createElement("a");
    (btnElem as HTMLAnchorElement).href = rest.href;
    btnElem.role = "button";
    (btnElem as HTMLAnchorElement).target = "_blank";
    (btnElem as HTMLAnchorElement).rel = "noopener noreferrer";
  }
  else
    btnElem = document.createElement("div");

  if("toggle" in rest && rest.toggle) {
    btnElem.classList.add("bytm-toggle");
    if("toggleInitialState" in rest && rest.toggleInitialState)
      btnElem.classList.add("toggled");
  }

  onInteraction(btnElem, (evt) => {
    if("onClick" in rest)
      rest.onClick(evt);
    if("toggle" in rest && rest.toggle && (rest.togglePredicate ?? (() => true))(evt))
      rest.onToggle(btnElem.classList.toggle("toggled"), evt);
  });

  btnElem.classList.add("bytm-generic-btn", "long");
  btnElem.ariaLabel = btnElem.title = title;
  btnElem.tabIndex = 0;
  btnElem.role = "button";

  const imgElem = document.createElement("src" in rest ? "img" : "div");
  imgElem.classList.add("bytm-generic-btn-img", iconPosition ?? "left");
  if("src" in rest)
    (imgElem as HTMLImageElement).src = rest.src;
  else
    setInnerHtml(imgElem, await resourceAsString(rest.resourceName as "_") ?? "");

  const txtElem = document.createElement("span");
  txtElem.classList.add("bytm-generic-long-btn-txt", "bytm-no-select");
  txtElem.textContent = txtElem.ariaLabel = text;

  iconPosition === "left" || !iconPosition && btnElem.appendChild(imgElem);
  btnElem.appendChild(txtElem);
  iconPosition === "right" && btnElem.appendChild(imgElem);

  return ripple ? createRipple(btnElem, { speed: "normal" }) : btnElem;
}
