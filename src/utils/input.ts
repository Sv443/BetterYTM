const interactionKeys = ["Enter", " ", "Space"];

type ListenerOpts = AddEventListenerOptions & {
  preventDefault?: boolean;
  stopPropagation?: boolean;
};

/**
 * Adds generic, accessible interaction listeners to the passed element.  
 * All listeners have the default behavior prevented and stop propagation (for keyboard events this only applies as long as the captured key is included in {@linkcode interactionKeys}).
 * @param listenerOptions Provide a {@linkcode listenerOptions} object to configure the listeners
 */
export function onInteraction<TElem extends HTMLElement>(elem: TElem, listener: (evt: MouseEvent | KeyboardEvent) => void, listenerOptions?: ListenerOpts) {
  const { preventDefault = true, stopPropagation = true, ...listenerOpts } = listenerOptions ?? {};

  const proxListener = (e: MouseEvent | KeyboardEvent) => {
    if(e instanceof KeyboardEvent) {
      if(interactionKeys.includes(e.key)) {
        preventDefault && e.preventDefault();
        stopPropagation && e.stopPropagation();
      }
      else return;
    }
    else if(e instanceof MouseEvent) {
      preventDefault && e.preventDefault();
      stopPropagation && e.stopPropagation();
    }

    // clean up the other listener that isn't automatically removed if `once` is set
    listenerOpts?.once && e.type === "keydown" && elem.removeEventListener("click", proxListener, listenerOpts);
    listenerOpts?.once && e.type === "click" && elem.removeEventListener("keydown", proxListener, listenerOpts);
    listener(e);
  };
  elem.addEventListener("click", proxListener, listenerOpts);
  elem.addEventListener("keydown", proxListener, listenerOpts);
}
