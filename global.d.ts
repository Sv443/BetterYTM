/** Import HTML as modules - https://stackoverflow.com/a/47705264/3323672 */
declare module "*.html" {
  /** Content of the HTML file as a string */
  const htmlContent: string;
  export default htmlContent;
}

declare module "*.md" {
  /** Content of the markdown file, converted to an HTML string */
  const htmlContent: string;
  export default htmlContent;
}

declare module "*.css" {
  /** Content of the CSS file as a string */
  const cssContent: string;
  export default cssContent;
}
