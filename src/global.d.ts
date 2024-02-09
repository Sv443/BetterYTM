import type { mountDom, h } from "@gera2ld/jsx-dom";

declare global {
  /** from @violentmonkey/dom */
  declare const VM: {
    /** Mounts a JSX element into a DOM element */
    m: typeof mountDom;
    /** Like React.createElement */
    h: typeof h;
  };
}
