import { getResourceUrl, onInteraction } from "../utils";
import type { ResourceKey } from "../types";

type CircularBtnOptions = (
  | {
    /** Resource key for the button icon */
    resourceName: ResourceKey | "_";
    /** Tooltip and aria-label of the button */
    title: string;
  }
  | {
    src: string;
    /** Tooltip and aria-label of the button */
    title: string;
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
);

/**
 * Creates a generic, circular button element.  
 * If `href` is provided, the button will be an anchor element.  
 * If `onClick` is provided, the button will be a div element.  
 * Provide either `resourceName` or `src` to specify the icon inside the button.
 */
export async function createCircularBtn({
  title,
  ...rest
}: CircularBtnOptions) {
  let btnElem: HTMLElement;
  if("href" in rest && rest.href) {
    btnElem = document.createElement("a");
    (btnElem as HTMLAnchorElement).href = rest.href;
    btnElem.role = "button";
    (btnElem as HTMLAnchorElement).target = "_blank";
    (btnElem as HTMLAnchorElement).rel = "noopener noreferrer";
  }
  else if("onClick" in rest && rest.onClick) {
    btnElem = document.createElement("div");
    rest.onClick && onInteraction(btnElem, rest.onClick);
  }
  else
    throw new TypeError("Either 'href' or 'onClick' must be provided");

  btnElem.classList.add("bytm-generic-btn");
  btnElem.ariaLabel = btnElem.title = title;
  btnElem.tabIndex = 0;
  btnElem.role = "button";

  const imgElem = document.createElement("img");
  imgElem.classList.add("bytm-generic-btn-img");
  imgElem.src = "src" in rest ? rest.src : await getResourceUrl(rest.resourceName);

  btnElem.appendChild(imgElem);

  return btnElem;
}
