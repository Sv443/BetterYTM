import "./ripple.css";

/**
 * Creates an element with a ripple effect on click.
 * @param clickEl If passed, this element will be modified to have the ripple effect. Otherwise, a new element will be created.
 * @returns The passed element or the newly created element with the ripple effect.
 */
export function createRipple<TElem extends HTMLElement>(rippleElement: TElem): TElem;
/**
 * Creates an element with a ripple effect on click.
 * @param clickEl If passed, this element will be modified to have the ripple effect. Otherwise, a new element will be created.
 * @returns The passed element or the newly created element with the ripple effect.
 */
export function createRipple(rippleElement: undefined): HTMLDivElement;
/**
 * Creates an element with a ripple effect on click.
 * @param clickEl If passed, this element will be modified to have the ripple effect. Otherwise, a new element will be created.
 * @returns The passed element or the newly created element with the ripple effect.
 */
export function createRipple<TElem extends HTMLElement>(rippleElement?: TElem) {
  const rippleEl = rippleElement ?? document.createElement("div");
  rippleEl.classList.add("bytm-ripple");

  rippleEl.addEventListener("click", (e) => {
    const x = (e as MouseEvent).clientX - (e.target as HTMLElement)?.offsetLeft ?? 0;
    const y = (e as MouseEvent).clientY - (e.target as HTMLElement)?.offsetTop ?? 0;

    const rippleAreaEl = document.createElement("span");
    rippleAreaEl.classList.add("bytm-ripple-area");
    rippleAreaEl.style.left = x + "px";
    rippleAreaEl.style.top = y + "px";

    if(rippleEl.firstChild)
      rippleEl.insertBefore(rippleAreaEl, rippleEl.firstChild);
    else
      rippleEl.appendChild(rippleAreaEl);

    // setTimeout(() => rippleAreaEl.remove(), 250);
  });

  return rippleEl;
}
