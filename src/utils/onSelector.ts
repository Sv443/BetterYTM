/** Options for the {@linkcode onSelectorOld()} function */
export type OnSelectorOpts<TElem extends Element = HTMLElement> = SelectorOptsOne<TElem> | SelectorOptsAll<TElem>;

type SelectorOptsOne<TElem extends Element> = SelectorOptsCommon & {
  /** Whether to use `querySelectorAll()` instead - default is false */
  all?: false;
  /** Gets called whenever the selector was found in the DOM */
  listener: (element: TElem) => void;
};

type SelectorOptsAll<TElem extends Element> = SelectorOptsCommon & {
  /** Whether to use `querySelectorAll()` instead - default is false */
  all: true;
  /** Gets called whenever the selector was found in the DOM */
  listener: (elements: NodeListOf<TElem>) => void;
};

type SelectorOptsCommon = {
  /** Whether to call the listener continuously instead of once - default is false */
  continuous?: boolean;
};

const selectorMap = new Map<string, OnSelectorOpts[]>();

/**
 * Calls the {@linkcode listener} as soon as the {@linkcode selector} exists in the DOM.  
 * Listeners are deleted when they are called once, unless `options.continuous` is set.  
 * Multiple listeners with the same selector may be registered.
 * @param selector The selector to listen for
 * @param options Used for switching to `querySelectorAll()` and for calling the listener continuously
 * @template TElem The type of element that the listener will return as its argument (defaults to the generic type HTMLElement)
 * @deprecated To be replaced with UserUtils' SelectorObserver class
 */
export function onSelectorOld<TElem extends Element = HTMLElement>(
  selector: string,
  options: OnSelectorOpts<TElem>,
) {
  let selectorMapItems: OnSelectorOpts[] = [];
  if(selectorMap.has(selector))
    selectorMapItems = selectorMap.get(selector)!;

  // I don't feel like dealing with intersecting types, this should work just fine at runtime
  // @ts-ignore
  selectorMapItems.push(options);

  selectorMap.set(selector, selectorMapItems);
  checkSelectorExists(selector, selectorMapItems);
}

/**
 * Removes all listeners registered in {@linkcode onSelectorOld()} that have the given selector
 * @returns Returns true when all listeners with the associated selector were found and removed, false otherwise
 */
export function removeOnSelector(selector: string) {
  return selectorMap.delete(selector);
}

function checkSelectorExists<TElem extends Element = HTMLElement>(selector: string, options: OnSelectorOpts<TElem>[]) {
  const deleteIndices: number[] = [];
  options.forEach((option, i) => {
    try {
      const elements = option.all ? document.querySelectorAll<TElem>(selector) : document.querySelector<TElem>(selector);
      if((elements !== null && elements instanceof NodeList && elements.length > 0) || elements !== null) {
        // I don't feel like dealing with intersecting types, this should work just fine at runtime
        // @ts-ignore
        option.listener(elements);
        if(!option.continuous)
          deleteIndices.push(i);
      }
    }
    catch(err) {
      console.error(`Couldn't call listener for selector '${selector}'`, err);
    }
  });

  if(deleteIndices.length > 0) {
    const newOptsArray = options.filter((_, i) => !deleteIndices.includes(i));
    if(newOptsArray.length === 0)
      selectorMap.delete(selector);
    else {
      // once again laziness strikes
      // @ts-ignore
      selectorMap.set(selector, newOptsArray);
    }
  }
}

/**
 * Initializes a MutationObserver that checks for all registered selectors whenever an element is added to or removed from the `<body>`
 * @param options For fine-tuning what triggers the MutationObserver's checking function - `subtree` and `childList` are set to true by default
 */
export function initOnSelector(options: MutationObserverInit = {}) {
  const observer = new MutationObserver(() => {
    for(const [selector, options] of selectorMap.entries())
      checkSelectorExists(selector, options);
  });

  observer.observe(document.body, {
    subtree: true,
    childList: true,
    ...options,
  });
}

/** Returns all currently registered selectors, as a map of selector strings to their associated options */
export function getSelectorMap() {
  return selectorMap;
}
