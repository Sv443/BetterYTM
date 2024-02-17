// hoist the class declaration because either rollup or babel is being a hoe
import { NanoEmitter } from "./NanoEmitter";
import { clearInner, getResourceUrl, warn } from ".";
import { t } from "./translations";
import "./BytmDialog.css";

export interface BytmDialogOptions {
  /** ID that gets added to child element IDs - has to be unique and conform to HTML ID naming rules! */
  id: string;
  /** Whether the dialog should close when the background is clicked - defaults to true */
  closeOnBgClick?: boolean;
  /** Whether the dialog should close when the escape key is pressed - defaults to true */
  closeOnEscPress?: boolean;
  /** Whether the close button should be enabled - defaults to true */
  closeBtnEnabled?: boolean;
  /** Whether the dialog should be destroyed when it's closed - defaults to false */
  destroyOnClose?: boolean;
  /** Called to render the body of the dialog */
  renderBody: () => HTMLElement;
  /** Called to render the header of the dialog - leave undefined for a blank header */
  renderHeader?: () => HTMLElement;
  /** Called to render the footer of the dialog - leave undefined for no footer */
  renderFooter?: () => HTMLElement;
}

/** ID of the last opened (top-most) dialog */
let lastDialogId: string | null = null;

/** Creates and manages a modal dialog element */
export class BytmDialog extends NanoEmitter<{
  /** Emitted just after the dialog is closed */
  close: () => void;
  /** Emitted just after the dialog is opened */
  open: () => void;
  /** Emitted just after the dialog contents are rendered */
  render: () => void;
  /** Emitted just after the dialog contents are cleared */
  clear: () => void;
  /** Emitted just before the dialog is destroyed and all listeners are removed */
  destroy: () => void;
}> {
  public readonly options;
  public readonly id;

  private dialogOpen = false;
  private dialogRendered = false;
  private listenersAttached = false;

  constructor(options: BytmDialogOptions) {
    super();

    this.options = {
      closeOnBgClick: true,
      closeOnEscPress: true,
      closeBtnEnabled: true,
      destroyOnClose: false,
      ...options,
    };
    this.id = options.id;
  }

  /** Call after DOMContentLoaded to pre-render the dialog and invisibly mount it in the DOM */
  public async mount() {
    if(this.dialogRendered)
      return;
    this.dialogRendered = true;

    const bgElem = document.createElement("div");
    bgElem.id = `bytm-${this.id}-dialog-bg`;
    bgElem.classList.add("bytm-dialog-bg");
    if(this.options.closeOnBgClick)
      bgElem.ariaLabel = bgElem.title = t("close_menu_tooltip");

    bgElem.style.visibility = "hidden";
    bgElem.style.display = "none";
    bgElem.inert = true;

    bgElem.appendChild(await this.getDialogContent());
    document.body.appendChild(bgElem);

    this.attachListeners(bgElem);

    this.events.emit("render");
  }

  /** Clears all dialog contents (unmounts them from the DOM) in preparation for a new rendering call */
  public unmount() {
    this.dialogRendered = false;

    const elem = document.querySelector<HTMLElement>(`#bytm-${this.id}-dialog-bg`);
    elem && clearInner(elem);

    document.querySelector(`#bytm-${this.id}-dialog-bg`)?.remove();

    this.events.emit("clear");
  }

  /** Clears and then re-renders the dialog */
  public async rerender() {
    this.unmount();
    await this.mount();
  }

  /**
   * Opens the dialog - also mounts it if it hasn't been mounted yet  
   * Prevents default action and immediate propagation of the passed event
   */
  public async open(e?: MouseEvent | KeyboardEvent) {
    e?.preventDefault();
    e?.stopImmediatePropagation();

    if(this.isOpen())
      return;
    this.dialogOpen = true;

    if(!this.isRendered())
      await this.mount();

    document.body.classList.add("bytm-disable-scroll");
    document.querySelector("ytmusic-app")?.setAttribute("inert", "true");
    const dialogBg = document.querySelector<HTMLElement>(`#bytm-${this.id}-dialog-bg`);

    if(!dialogBg)
      return warn(`Couldn't find background element for dialog with ID '${this.id}'`);

    dialogBg.style.visibility = "visible";
    dialogBg.style.display = "block";
    dialogBg.inert = false;

    lastDialogId = this.id;

    this.events.emit("open");
  }

  /** Closes the dialog - prevents default action and immediate propagation of the passed event */
  public close(e?: MouseEvent | KeyboardEvent) {
    e?.preventDefault();
    e?.stopImmediatePropagation();

    if(!this.isOpen())
      return;
    this.dialogOpen = false;

    document.body.classList.remove("bytm-disable-scroll");
    document.querySelector("ytmusic-app")?.removeAttribute("inert");
    const dialogBg = document.querySelector<HTMLElement>(`#bytm-${this.id}-dialog-bg`);

    if(!dialogBg)
      return warn(`Couldn't find background element for dialog with ID '${this.id}'`);

    dialogBg.style.visibility = "hidden";
    dialogBg.style.display = "none";
    dialogBg.inert = true;

    if(BytmDialog.getLastDialogId() === this.id)
      lastDialogId = null;

    this.events.emit("close");

    if(this.options.destroyOnClose)
      this.destroy();
  }

  /** Returns true if the dialog is open */
  public isOpen() {
    return this.dialogOpen;
  }

  /** Returns true if the dialog has been rendered */
  public isRendered() {
    return this.dialogRendered;
  }

  /** Clears the dialog and removes all event listeners */
  public destroy() {
    this.events.emit("destroy");
    this.unmount();
    this.unsubscribeAll();
  }

  /** Returns the ID of the top-most dialog (the dialog that has been opened last) */
  public static getLastDialogId() {
    return lastDialogId;
  }

  /** Called once to attach all generic event listeners */
  private attachListeners(bgElem: HTMLElement) {
    if(this.listenersAttached)
      return;
    this.listenersAttached = true;

    if(this.options.closeOnBgClick) {
      bgElem.addEventListener("click", (e) => {
        if(this.isOpen() && (e.target as HTMLElement)?.id === `bytm-${this.id}-dialog-bg`)
          this.close(e);
      });
    }

    if(this.options.closeOnEscPress) {
      document.body.addEventListener("keydown", (e) => {
        if(e.key === "Escape" && this.isOpen() && BytmDialog.getLastDialogId() === this.id)
          this.close(e);
      });
    }
  }

  private async getDialogContent() {
    const header = this.options.renderHeader?.();
    const footer = this.options.renderFooter?.();

    const dialogWrapperEl = document.createElement("div");
    dialogWrapperEl.id = `bytm-${this.id}-dialog`;
    dialogWrapperEl.classList.add("bytm-dialog");
    dialogWrapperEl.ariaLabel = dialogWrapperEl.title = "";

    //#SECTION header

    const headerWrapperEl = document.createElement("div");
    headerWrapperEl.classList.add("bytm-dialog-header");

    if(header) {
      const headerTitleWrapperEl = document.createElement("div");
      headerTitleWrapperEl.classList.add("bytm-dialog-title-wrapper");
      headerTitleWrapperEl.role = "heading";
      headerTitleWrapperEl.ariaLevel = "1";

      headerTitleWrapperEl.appendChild(header);
      headerWrapperEl.appendChild(headerTitleWrapperEl);
    }

    if(this.options.closeBtnEnabled) {
      const closeBtnEl = document.createElement("img");
      closeBtnEl.classList.add("bytm-dialog-close");
      closeBtnEl.src = await getResourceUrl("img-close");
      closeBtnEl.role = "button";
      closeBtnEl.tabIndex = 0;
      closeBtnEl.addEventListener("click", () => this.close());
      headerWrapperEl.appendChild(closeBtnEl);
    }

    dialogWrapperEl.appendChild(headerWrapperEl);

    // TODO:
    //#SECTION body

    const bodyWrapperEl = document.createElement("div");
    bodyWrapperEl.appendChild(this.options.renderBody());

    dialogWrapperEl.appendChild(bodyWrapperEl);

    //#SECTION footer

    if(footer) {
      dialogWrapperEl.appendChild(footer);
    }

    return dialogWrapperEl;
  }
}
