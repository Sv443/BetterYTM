/** Import HTML as modules - https://stackoverflow.com/a/47705264/3323672 */
declare module "*.html" {
  /** Content of the HTML file as a string */
  export default {} as string;
}

declare module "*.md" {
  export default {} as {
    /** Content of the markdown file, converted to an HTML string */
    html: string;
    metadata: Record<string, unknown>;
    filename: string;
    path: string;
  };
}
