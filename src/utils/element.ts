import { DatedError } from "@sv443-network/userutils";
import { loggers } from "@util/logging.ts";

/**
 * Creates an element using [`GM_addElement()`](https://www.tampermonkey.net/documentation.php?q=GM_addElement#api:GM_addElement) to bypass [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP). If not available, falls back to `document.createElement()`.  
 * @param tagName Lowercase tag name.
 * @param attributes Optional object mapping any number of the element's attribute keys to their values.
 * @param modifyElement Optional function called to modify the element in a way simple object assignment can't.
 * @returns Returns the created element with the given attributes (or none).
 */
export function createElement<
  TTagName extends keyof HTMLElementTagNameMap,
  TElement extends HTMLElementTagNameMap[TTagName],
>(
  tagName: TTagName,
  attributes?: {
    [TAttr in keyof TElement]?: TElement[TAttr];
  },
  modifyElement?: (element: TElement) => TElement,
): TElement {
  try {
    const elem = GM_addElement(tagName, attributes ?? {}) as TElement;
    if(!(elem instanceof HTMLElement))
      throw new DatedError(`Value returned by GM_addElement() of type '${typeof elem}' is not an instance of HTMLElement.`);
    modifyElement?.(elem);
    if(!(elem instanceof HTMLElement))
      throw new DatedError(`Value returned by modifyElement() of type '${typeof elem}' is not an instance of HTMLElement.`);
    return elem;
  }
  catch(err) {
    loggers.misc.warn("Couldn't create element using GM.createElement() API, defaulting to document.createElement() at the cost of potential CSP-related issues...", { cause: err });
    const elem = document.createElement(tagName) as TElement;
    for(const [key, val] of Object.entries(attributes ?? {}))
      elem[key as keyof typeof elem] = val;
    modifyElement?.(elem);
    return elem;
  }
}
