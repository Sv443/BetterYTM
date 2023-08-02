/** Import HTML as modules - https://stackoverflow.com/a/47705264/3323672 */
declare module "*.html" {
  /** Content of the HTML file as a string */
  const htmlContent: string;
  export default htmlContent;
}

declare module "*.svg" {
  /** Content of the SVG file as a string */
  const htmlContent: string;
  export default htmlContent;
}

declare module "*.md" {
  /** Content of the markdown file, converted to an HTML string */
  const htmlContent: string;
  export default htmlContent;
}

// generic shim so TS doesn't complain *too* much
declare global {
  interface Window {
    __proto__: {
      addEventListener: (evt: string, listener: () => unknown, capture?: boolean) => void;
    };
  }
}
