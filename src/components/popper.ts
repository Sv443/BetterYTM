import { randomId } from "@sv443-network/userutils";
import "./popper.css";

export type PopperProps = {
  id?: string;
  referenceElement: HTMLElement;
  popperContent: HTMLElement;
  placement?: "top" | "bottom" | "left" | "right";
};

/**
 * Creates a popper-type tooltip anchored to the `referenceElement` that will be displayed when the `referenceElement` is hovered over.  
 * The `popperElement` will be displayed in the specified `placement` relative to the `referenceElement`.
 */
export function createPopper({
  id = `bytm-popper-${randomId(5, 36)}`,
  referenceElement,
  popperContent,
  placement = "bottom",
}: PopperProps) {
  referenceElement.classList.add("bytm-popper-reference", placement);
  referenceElement.setAttribute("aria-describedby", id);
  referenceElement.dataset.popperId = id;
  popperContent.classList.add("bytm-popper-content", placement, "hidden");
  popperContent.id = id;

  const updatePos = () => {
    const refRect = referenceElement.getBoundingClientRect();
    const popperRect = popperContent.getBoundingClientRect();

    let top: number;
    let left: number;

    console.log(placement, refRect, popperRect);

    switch(placement) {
    case "top":
      top = refRect.top - popperRect.height;
      left = refRect.left + (refRect.width - popperRect.width) / 2;
      break;
    case "bottom":
      top = refRect.bottom;
      left = refRect.left + (refRect.width - popperRect.width) / 2;
      break;
    case "left":
      top = refRect.top + (refRect.height - popperRect.height) / 2;
      left = refRect.left - popperRect.width;
      break;
    case "right":
      top = refRect.top + (refRect.height - popperRect.height) / 2;
      left = refRect.right;
      break;
    }

    popperContent.style.top = `${top}px`;
    popperContent.style.left = `${left}px`;
  };

  const showPopper = () => {
    if(!popperContent.classList.contains("hidden"))
      return;
    popperContent.classList.remove("hidden");
    popperContent.setAttribute("aria-hidden", "false");
    updatePos();
  };

  const hidePopper = () => {
    if(popperContent.classList.contains("hidden"))
      return;
    popperContent.classList.add("hidden");
    popperContent.setAttribute("aria-hidden", "true");
  };

  referenceElement.addEventListener("mouseenter", () => {
    showPopper();
  });
  referenceElement.addEventListener("mouseleave", (e) => {
    const relTarget = e.relatedTarget as HTMLElement;
    if(!relTarget || !["bytm-popper-reference", "bytm-popper-content"].some((cl) => relTarget.classList.contains(cl)))
      hidePopper();
  });
  popperContent.addEventListener("mouseenter", () => {
    showPopper();
  });
  popperContent.addEventListener("mouseleave", (e) => {
    const relTarget = e.relatedTarget as HTMLElement;
    if(!relTarget || !["bytm-popper-reference", "bytm-popper-content"].some((cl) => relTarget.classList.contains(cl)))
      hidePopper();
  });
};
