import { getResourceUrl, onInteraction } from "../utils";
import type { ResourceKey } from "../types";

type CreateGenericBtnOptions = {
  /** Resource key for the button icon */
  resourceName: ResourceKey | "_";
  /** Tooltip and aria-label of the button */
  title: string;
}
& (
  {
    /** URL to navigate to when the button is clicked */
    href: string;
    onClick?: undefined;
  } | {
    href?: undefined;
    /** Callback function to execute when the button is clicked */
    onClick: (event: MouseEvent | KeyboardEvent) => void;
  }
);

/**
 * Creates a generic button element.  
 * If `href` is provided, the button will be an anchor element.  
 * If `onClick` is provided, the button will be a div element.
 */
export async function createGenericBtn({
  resourceName,
  title,
  href,
  onClick,
}: CreateGenericBtnOptions) {
  let btnElem: HTMLElement;
  if(href) {
    btnElem = document.createElement("a");
    (btnElem as HTMLAnchorElement).href = href;
    btnElem.role = "button";
    (btnElem as HTMLAnchorElement).target = "_blank";
    (btnElem as HTMLAnchorElement).rel = "noopener noreferrer";
  }
  else {
    btnElem = document.createElement("div");
    onClick && onInteraction(btnElem, onClick);
  }

  btnElem.classList.add("bytm-generic-btn");
  btnElem.ariaLabel = btnElem.title = title;

  const imgElem = document.createElement("img");
  imgElem.classList.add("bytm-generic-btn-img");
  imgElem.src = await getResourceUrl(resourceName);

  btnElem.appendChild(imgElem);

  return btnElem;
}
