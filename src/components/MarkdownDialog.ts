import { marked } from "marked";
import { setInnerHtml } from "../utils/dom.js";
import { consumeStringGen } from "../utils/misc.js";
import { BytmDialog, type BytmDialogOptions } from "./BytmDialog.js";
import type { StringGen } from "../types.js";

type MarkdownDialogOptions = Omit<BytmDialogOptions, "renderBody"> & {
  /** The markdown to render */
  body: StringGen;
};

export class MarkdownDialog extends BytmDialog {
  protected opts: MarkdownDialogOptions;

  constructor(options: MarkdownDialogOptions) {
    super({
      ...options,
      id: `md-${options.id}`,
      renderBody: () => this.renderBody(),
    });
    this.opts = options;
  }

  /** Parses the passed markdown string (supports GitHub flavor and HTML mixins) and returns it as an HTML string */
  public static async parseMd(md: string): Promise<string> {
    return await marked.parse(md, {
      async: true,
      gfm: true,
      breaks: true,
    });
  }


  /** Renders the dialog body elements from a markdown string using what's set in `this.opts.body` */
  protected async renderBody(): Promise<HTMLElement> {
    const bodyEl = document.createElement("div");
    bodyEl.classList.add("bytm-md-dialog-body");

    const mdCont = await consumeStringGen(this.opts.body);

    const markdownEl = document.createElement("div");
    markdownEl.classList.add("bytm-markdown-dialog-content", "bytm-markdown-container");
    markdownEl.tabIndex = 0;
    setInnerHtml(markdownEl, await MarkdownDialog.parseMd(mdCont));

    bodyEl.appendChild(markdownEl);

    return bodyEl;
  }
}
