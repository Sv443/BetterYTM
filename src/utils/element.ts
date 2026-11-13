import { DatedError } from "@sv443-network/userutils";
import { loggers } from "@util/logging.ts";
import type { ElementAttributeMap } from "@/types.ts";

/**
 * Creates an element using [`GM_addElement()`](https://www.tampermonkey.net/documentation.php?q=GM_addElement#api:GM_addElement) to bypass [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP). If not available, falls back to [`document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement).  
 * @param tagName Lowercase tag name.
 * @param attributes Optional object mapping any number of the element's attribute keys to their values.
 * @returns Returns the created element with the given attributes (or none).
 */
export function createElement<
  TTagName extends keyof HTMLElementTagNameMap,
  TElement extends HTMLElementTagNameMap[TTagName],
>(
  tagName: TTagName,
  attributes?: ElementAttributeMap<TElement>,
): TElement;
/**
 * Creates an element using [`GM_addElement()`](https://www.tampermonkey.net/documentation.php?q=GM_addElement#api:GM_addElement) to bypass [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP). If not available, falls back to [`document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement).  
 * @param tagName Lowercase tag name.
 * @param modifyElement Optional function called to modify the element.
 * @returns Returns the created element with the applied modifications (or none).
 */
export function createElement<
  TTagName extends keyof HTMLElementTagNameMap,
  TElement extends HTMLElementTagNameMap[TTagName],
>(
  tagName: TTagName,
  modifyElement: (element: TElement) => TElement,
): TElement;
/**
 * Creates an element using [`GM_addElement()`](https://www.tampermonkey.net/documentation.php?q=GM_addElement#api:GM_addElement) to bypass [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP). If not available, falls back to [`document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement).  
 * @param tagName Lowercase tag name.
 * @param attributesOrModifyElementFn Optional object mapping any number of the element's attribute keys to their values, or function called to modify the element.
 * @returns Returns the created element with the given attributes or applied modifications (or none).
 */
export function createElement<
  TTagName extends keyof HTMLElementTagNameMap,
  TElement extends HTMLElementTagNameMap[TTagName],
>(
  tagName: TTagName,
  attributesOrModifyElementFn?: ElementAttributeMap<TElement> | ((element: TElement) => TElement),
): TElement {
  const attributes = typeof attributesOrModifyElementFn !== "function" ? attributesOrModifyElementFn : undefined;
  const modifyElement = typeof attributesOrModifyElementFn === "function" ? attributesOrModifyElementFn : undefined;

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
