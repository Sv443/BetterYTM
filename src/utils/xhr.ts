import type { Stringifiable } from "@sv443-network/userutils";
import type { HttpUrlString } from "../types";

/**
 * Constructs a URL from a base URL and a record of query parameters.  
 * If a value is null, the parameter will be valueless.  
 * All values will be stringified using their `toString()` method and then URI-encoded.
 * @returns Returns a string instead of a URL object
 */
export function constructUrlString(baseUrl: HttpUrlString, params: Record<string, Stringifiable | null>) {
  return `${baseUrl}?${
    Object.entries(params)
      .filter(([,v]) => v !== undefined)
      .map(([key, val]) => `${key}${val === null ? "" : `=${encodeURIComponent(String(val))}`}`)
      .join("&")
  }`;
}

/**
 * Constructs a URL from a base URL and a record of query parameters.  
 * If a value is null, the parameter will be valueless.  
 * All values will be URI-encoded.  
 * @returns Returns a URL object instead of a string
 */
export function constructUrl(base: HttpUrlString, params: Record<string, Stringifiable | null>) {
  return new URL(constructUrlString(base, params));
}

/**
 * Sends a request with the specified parameters and returns the response as a Promise.  
 * Ignores the CORS policy, contrary to fetch and fetchAdvanced.
 */
export function sendRequest<T = any>(details: GM.Request<T>) {
  return new Promise<GM.Response<T>>((resolve, reject) => {
    GM.xmlHttpRequest({
      timeout: 10_000,
      ...details,
      onload: resolve,
      onerror: reject,
      ontimeout: reject,
      onabort: reject,
    });
  });
}
