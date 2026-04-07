import { getResourceUrl, onInteraction, resourceAsString, setInnerHtml } from "@util/index.ts";
import { createRipple } from "@comp/ripple.ts";
import type { ResourceKey } from "@/types.ts";

type CircularBtnOptions = {
  /** Tooltip and aria-label of the button */
  title: string;
  /** Whether the button should have a ripple effect - defaults to true */
  ripple?: boolean;
} & (
  | {
    /** Resource key for the button icon */
    resourceName: (ResourceKey & `icon-${string}`) | "_";
  }
  | {
    src: string | Promise<string>;
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
  ripple = true,
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
    rest.onClick && onInteraction(btnElem, (e) => rest.onClick(e));
  }
  else
    throw new TypeError("Either 'href' or 'onClick' must be provided");

  btnElem.classList.add("bytm-generic-btn");
  btnElem.ariaLabel = btnElem.title = title;
  btnElem.tabIndex = 0;
  btnElem.role = "button";

  if("src" in rest || ("resourceName" in rest && !rest.resourceName.startsWith("icon-"))) {
    const imgElem = document.createElement("img");
    imgElem.classList.add("bytm-generic-btn-img");
    imgElem.src = "src" in rest
      ? await rest.src
      : await getResourceUrl(rest.resourceName);

    btnElem.appendChild(imgElem);
  }
  else if("resourceName" in rest && rest.resourceName.startsWith("icon-")) {
    setInnerHtml(btnElem, await resourceAsString(rest.resourceName));
    btnElem.querySelector("svg")?.classList.add("bytm-generic-btn-img");
  }

  return ripple ? createRipple(btnElem) : btnElem;
}
