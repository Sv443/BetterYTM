import type { LooseUnion } from "@sv443-network/userutils";
import "./ripple.css";

type RippleProps<TElem extends HTMLElement> = {
  /** How fast should the animation be - defaults to "normal" */
  speed?: "fastest" | "fast" | "normal" | "slow" | "slowest";
  /** The event that should trigger the ripple effect - defaults to "mousedown" */
  triggerEvent?: LooseUnion<"mousedown" | "mouseup">;
  /** Additional props to assign to the created or passed ripple element */
  additionalProps?: TElem;
};

/**
 * Creates an element with a ripple effect on click.
 * @param rippleElement If passed, this element will be modified to have the ripple effect. Otherwise, a new element will be created.
 * @returns The passed element or the newly created element with the ripple effect.
 */
export function createRipple<TElem extends HTMLElement>(rippleElement: TElem, properties?: RippleProps<TElem>): TElem;
/**
 * Creates an element with a ripple effect on click.
 * @param rippleElement If passed, this element will be modified to have the ripple effect. Otherwise, a new element will be created.
 * @returns The passed element or the newly created element with the ripple effect.
 */
export function createRipple(rippleElement?: undefined, properties?: RippleProps<HTMLDivElement>): HTMLDivElement;
/**
 * Creates an element with a ripple effect on click.
 * @param rippleElement If passed, this element will be modified to have the ripple effect. Otherwise, a new element will be created.
 * @returns The passed element or the newly created element with the ripple effect.
 */
export function createRipple<TElem extends HTMLElement>(rippleElement?: TElem, properties?: RippleProps<TElem>) {
  const props = {
    speed: "normal",
    ...properties,
  };

  const rippleEl = rippleElement ?? document.createElement("div");

  "additionalProps" in props && Object.assign(rippleEl, props.additionalProps);
  rippleEl.classList.add("bytm-ripple", props.speed);

  const updateRippleWidth = () => rippleEl.style.setProperty("--bytm-ripple-cont-width", `${rippleEl.clientWidth}px`);

  rippleEl.addEventListener(props?.triggerEvent ?? "mousedown", (e) => {
    updateRippleWidth();

    const x = (e as MouseEvent).clientX - rippleEl.getBoundingClientRect().left;
    const y = (e as MouseEvent).clientY - rippleEl.getBoundingClientRect().top;

    const rippleAreaEl = document.createElement("span");
    rippleAreaEl.classList.add("bytm-ripple-area");
    rippleAreaEl.style.left = `${Math.round(x)}px`;
    rippleAreaEl.style.top = `${Math.round(y)}px`;

    if(rippleEl.firstChild)
      rippleEl.insertBefore(rippleAreaEl, rippleEl.firstChild);
    else
      rippleEl.appendChild(rippleAreaEl);

    rippleAreaEl.addEventListener("animationend", () => rippleAreaEl.remove());
  });

  updateRippleWidth();
  return rippleEl;
}
