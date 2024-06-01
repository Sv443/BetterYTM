const interactionKeys = ["Enter", " ", "Space"];

/**
 * Adds generic, accessible interaction listeners to the passed element.  
 * All listeners have the default behavior prevented and stop propagation (for keyboard events only as long as the captured key is valid).
 * @param listenerOptions Provide a {@linkcode listenerOptions} object to configure the listeners
 */
export function onInteraction<TElem extends HTMLElement>(elem: TElem, listener: (evt: MouseEvent | KeyboardEvent) => void, listenerOptions?: AddEventListenerOptions) {
  const proxListener = (e: MouseEvent | KeyboardEvent) => {
    if(e instanceof KeyboardEvent) {
      if(interactionKeys.includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
      }
      else return;
    }
    else if(e instanceof MouseEvent) {
      e.preventDefault();
      e.stopPropagation();
    }

    // clean up the other listener that isn't automatically removed if `once` is set
    listenerOptions?.once && e.type === "keydown" && elem.removeEventListener("click", proxListener, listenerOptions);
    listenerOptions?.once && e.type === "click" && elem.removeEventListener("keydown", proxListener, listenerOptions);
    listener(e);
  };
  elem.addEventListener("click", proxListener, listenerOptions);
  elem.addEventListener("keydown", proxListener, listenerOptions);
}
