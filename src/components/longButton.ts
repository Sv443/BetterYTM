import { onInteraction, resourceToHTMLString } from "../utils";
import type { ResourceKey } from "../types";

type LongBtnOptions = (
  | {
    /** Resource key for the button icon */
    resourceName: ResourceKey | "_";
  }
  | {
    src: string;
  }
) & (
  | {
    /** URL to navigate to when the button is clicked */
    href: string;
  }
  | {
    /** Callback function to execute when the button is clicked */
    onClick: (event: MouseEvent | KeyboardEvent) => void;
  }
  | {
    /** Whether the button can be toggled on and off */
    toggle: true;
    /** Initial state of the button if `toggle` is `true` - defaults to `false` */
    toggleInitialState?: boolean;
    /** Callback function to execute when the button is toggled */
    onToggle: (enabled: boolean, event: MouseEvent | KeyboardEvent) => void;
  }
) & (
  {
    /** Button text */
    text: string;
    /** Tooltip and aria-label of the button */
    title: string;
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
    if("onClick" in rest && rest.onClick)
      rest.onClick(evt);
    if("toggle" in rest && rest.toggle && "onToggle" in rest && rest.onToggle)
      rest.onToggle(btnElem.classList.toggle("toggled"), evt);
  });

  btnElem.classList.add("bytm-generic-btn", "long");
  btnElem.ariaLabel = btnElem.title = title;
  btnElem.tabIndex = 0;
  btnElem.role = "button";

  const imgElem = document.createElement("div");
  imgElem.classList.add("bytm-generic-btn-img");
  imgElem.innerHTML = "src" in rest ? rest.src : await resourceToHTMLString(rest.resourceName as "_") ?? "";

  const txtElem = document.createElement("span");
  txtElem.classList.add("bytm-generic-long-btn-txt", "bytm-no-select");
  txtElem.textContent = txtElem.ariaLabel = rest.text;

  btnElem.appendChild(imgElem);
  btnElem.appendChild(txtElem);

  return btnElem;
}
