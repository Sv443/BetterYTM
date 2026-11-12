import { DatedError } from "@sv443-network/userutils";
import { loggers } from "@util/logging.ts";

/**
 * Creates an element using GM_addElement() if available, or falls back to 
 * @param tagName 
 * @param attributes 
 * @param modifyElement 
 * @returns 
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
