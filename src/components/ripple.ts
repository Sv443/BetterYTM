import "./ripple.css";

type RippleProps = {
  /** How fast should the animation be - defaults to "normal" */
  speed?: "faster" | "fast" | "normal" | "slow" | "slower";
};

/**
 * Creates an element with a ripple effect on click.
 * @param clickEl If passed, this element will be modified to have the ripple effect. Otherwise, a new element will be created.
 * @returns The passed element or the newly created element with the ripple effect.
 */
export function createRipple<TElem extends HTMLElement>(rippleElement: TElem, properties?: RippleProps): TElem;
/**
 * Creates an element with a ripple effect on click.
 * @param clickEl If passed, this element will be modified to have the ripple effect. Otherwise, a new element will be created.
 * @returns The passed element or the newly created element with the ripple effect.
 */
export function createRipple(rippleElement?: undefined, properties?: RippleProps): HTMLDivElement;
/**
 * Creates an element with a ripple effect on click.
 * @param clickEl If passed, this element will be modified to have the ripple effect. Otherwise, a new element will be created.
 * @returns The passed element or the newly created element with the ripple effect.
 */
export function createRipple<TElem extends HTMLElement>(rippleElement?: TElem, properties?: RippleProps) {
  const props = {
    speed: "normal",
    ...properties,
  };

  const rippleEl = rippleElement ?? document.createElement("div");
  rippleEl.classList.add("bytm-ripple", props.speed);

  const updateRippleWidth = () => 
    rippleEl.style.setProperty("--bytm-ripple-cont-width", `${rippleEl.clientWidth}px`);

  rippleEl.addEventListener("mousedown", (e) => {
    updateRippleWidth();

    const x = (e as MouseEvent).clientX - rippleEl.getBoundingClientRect().left;
    const y = (e as MouseEvent).clientY - rippleEl.getBoundingClientRect().top;

    const rippleAreaEl = document.createElement("span");
    rippleAreaEl.classList.add("bytm-ripple-area");
    rippleAreaEl.style.left = `${x}px`;
    rippleAreaEl.style.top = `${y}px`;

    if(rippleEl.firstChild)
      rippleEl.insertBefore(rippleAreaEl, rippleEl.firstChild);
    else
      rippleEl.appendChild(rippleAreaEl);

    rippleAreaEl.addEventListener("animationend", () => rippleAreaEl.remove());
  });

  updateRippleWidth();
  return rippleEl;
}
