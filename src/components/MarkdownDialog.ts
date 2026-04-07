import { marked } from "marked";
import { consumeStringGen, type StringGen } from "@sv443-network/coreutils";
import { sanitizeHtml, setInnerHtml } from "@util/dom.ts";
import { BytmDialog, type BytmDialogOptions } from "@comp/BytmDialog.ts";

/** Options for the MarkdownDialog - a `body` prop is required instead of `renderBody` */
type MarkdownDialogOptions = Omit<BytmDialogOptions, "renderBody"> & {
  /** The markdown to render */
  body: StringGen;
  /** Whether to use DOMPurify to sanitize the parsed markdown HTML. Defaults to false. */
  sanitizeBody?: boolean;
  /** If defined, will be called to allow modification of the body wrapper and markdown container elements. */
  modifyBodyElements?: (bodyWrapper: HTMLDivElement, markdownContainer: HTMLDivElement) => void | Promise<void>;
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
  public static async parseMd(md: string, sanitize = false): Promise<string> {
    const parsed = await marked.parse(md, {
      async: true,
      gfm: true,
      breaks: true,
    });
    return sanitize ? sanitizeHtml(parsed) : parsed;
  }


  /** Renders the dialog body elements from a markdown string using what's set in `this.opts.body` */
  protected async renderBody(): Promise<HTMLElement> {
    const bodyEl = document.createElement("div");
    bodyEl.classList.add("bytm-md-dialog-body");

    const mdCont = await consumeStringGen(this.opts.body);

    const markdownEl = document.createElement("div");
    markdownEl.classList.add("bytm-markdown-dialog-content", "bytm-markdown-container");
    markdownEl.tabIndex = 0;
    setInnerHtml(markdownEl, await MarkdownDialog.parseMd(mdCont, this.opts.sanitizeBody));

    if(this.opts.modifyBodyElements)
      await this.opts.modifyBodyElements(bodyEl, markdownEl);

    bodyEl.appendChild(markdownEl);

    return bodyEl;
  }
}
