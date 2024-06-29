// hoist the class declaration because either rollup or babel is being a hoe
import { NanoEmitter } from "../utils/NanoEmitter.js";
import { addStyle, clearInner, getDomain, getResourceUrl, onInteraction, warn } from "../utils/index.js";
import { t } from "../utils/translations.js";
import { emitInterface } from "../interface.js";
import "./BytmDialog.css";

export interface BytmDialogOptions {
  /** ID that gets added to child element IDs - has to be unique and conform to HTML ID naming rules! */
  id: string;
  /** Target and max width of the dialog in pixels */
  width: number;
  /** Target and max height of the dialog in pixels */
  height: number;
  /** Whether the dialog should close when the background is clicked - defaults to true */
  closeOnBgClick?: boolean;
  /** Whether the dialog should close when the escape key is pressed - defaults to true */
  closeOnEscPress?: boolean;
  /** Whether the close button should be enabled - defaults to true */
  closeBtnEnabled?: boolean;
  /** Whether the dialog should be destroyed when it's closed - defaults to false */
  destroyOnClose?: boolean;
  /** Whether the dialog should be unmounted when it's closed - defaults to true - superseded by destroyOnClose */
  unmountOnClose?: boolean;
  /** Whether the dialog should have a smaller overall appearance - defaults to false */
  small?: boolean;
  /** Where to align or anchor the dialog vertically - defaults to "center" */
  verticalAlign?: "top" | "center" | "bottom";
  /** Called to render the body of the dialog */
  renderBody: () => HTMLElement | Promise<HTMLElement>;
  /** Called to render the header of the dialog - leave undefined for a blank header */
  renderHeader?: () => HTMLElement | Promise<HTMLElement>;
  /** Called to render the footer of the dialog - leave undefined for no footer */
  renderFooter?: () => HTMLElement | Promise<HTMLElement>;
}

// TODO: remove export as soon as config menu is migrated to use BytmDialog
/** ID of the last opened (top-most) dialog */
export let currentDialogId: string | null = null;
/** IDs of all currently open dialogs, top-most first */
export const openDialogs: string[] = [];
/** TODO: remove as soon as config menu is migrated to use BytmDialog */
export const setCurrentDialogId = (id: string | null) => currentDialogId = id;

/** Creates and manages a modal dialog element */
export class BytmDialog extends NanoEmitter<{
  /** Emitted just **after** the dialog is closed */
  close: () => void;
  /** Emitted just **after** the dialog is opened */
  open: () => void;
  /** Emitted just **after** the dialog contents are rendered */
  render: () => void;
  /** Emitted just **after** the dialog contents are cleared */
  clear: () => void;
  /** Emitted just **after** the dialog is destroyed and **before** all listeners are removed */
  destroy: () => void;
}> {
  public readonly options;
  public readonly id;

  private dialogOpen = false;
  private dialogMounted = false;

  constructor(options: BytmDialogOptions) {
    super();

    this.options = {
      closeOnBgClick: true,
      closeOnEscPress: true,
      closeBtnEnabled: true,
      destroyOnClose: false,
      unmountOnClose: true,
      smallHeader: false,
      verticalAlign: "center",
      ...options,
    };
    this.id = options.id;
  }

  //#region public

  /** Call after DOMContentLoaded to pre-render the dialog and invisibly mount it in the DOM */
  public async mount() {
    if(this.dialogMounted)
      return;
    this.dialogMounted = true;

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

    addStyle(`\
#bytm-${this.id}-dialog-bg {
  --bytm-dialog-width-max: ${this.options.width}px;
  --bytm-dialog-height-max: ${this.options.height}px;
}`, `dialog-${this.id}-vars`);

    this.events.emit("render");
    return bgElem;
  }

  /** Closes the dialog and clears all its contents (unmounts elements from the DOM) in preparation for a new rendering call */
  public unmount() {
    this.close();

    this.dialogMounted = false;

    const clearSelectors = [
      `#bytm-${this.id}-dialog-bg`,
      `#bytm-style-dialog-${this.id}`,
    ];

    for(const sel of clearSelectors) {
      const elem = document.querySelector<HTMLElement>(sel);
      elem?.hasChildNodes() && clearInner(elem);
      document.querySelector(sel)?.remove();
    }

    this.events.emit("clear");
  }

  /** Clears the DOM of the dialog and then renders it again */
  public async remount() {
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

    if(openDialogs.includes(this.id))
      throw new Error(`A dialog with the same ID of '${this.id}' already exists and is open!`);

    if(!this.isMounted())
      await this.mount();

    const dialogBg = document.querySelector<HTMLElement>(`#bytm-${this.id}-dialog-bg`);

    if(!dialogBg)
      return warn(`Couldn't find background element for dialog with ID '${this.id}'`);

    dialogBg.style.visibility = "visible";
    dialogBg.style.display = "block";
    dialogBg.inert = false;

    currentDialogId = this.id;
    openDialogs.unshift(this.id);

    // make sure all other dialogs are inert
    for(const dialogId of openDialogs) {
      if(dialogId !== this.id) {
        // special treatment for the old config menu, as always
        if(dialogId === "cfg-menu")
          document.querySelector("#bytm-cfg-menu-bg")?.setAttribute("inert", "true");
        else
          document.querySelector(`#bytm-${dialogId}-dialog-bg`)?.setAttribute("inert", "true");
      }
    }

    // make sure body is inert and scroll is locked
    document.body.classList.add("bytm-disable-scroll");
    document.querySelector(getDomain() === "ytm" ? "ytmusic-app" : "ytd-app")?.setAttribute("inert", "true");

    this.events.emit("open");
    emitInterface("bytm:dialogOpened", this as BytmDialog);
    emitInterface(`bytm:dialogOpened:${this.id}` as "bytm:dialogOpened:id", this as BytmDialog);

    return dialogBg;
  }

  /** Closes the dialog - prevents default action and immediate propagation of the passed event */
  public close(e?: MouseEvent | KeyboardEvent) {
    e?.preventDefault();
    e?.stopImmediatePropagation();

    if(!this.isOpen())
      return;
    this.dialogOpen = false;

    const dialogBg = document.querySelector<HTMLElement>(`#bytm-${this.id}-dialog-bg`);

    if(!dialogBg)
      return warn(`Couldn't find background element for dialog with ID '${this.id}'`);

    dialogBg.style.visibility = "hidden";
    dialogBg.style.display = "none";
    dialogBg.inert = true;

    openDialogs.splice(openDialogs.indexOf(this.id), 1);
    currentDialogId = openDialogs[0] ?? null;

    // make sure the new top-most dialog is not inert
    if(currentDialogId) {
      // special treatment for the old config menu, as always
      if(currentDialogId === "cfg-menu")
        document.querySelector("#bytm-cfg-menu-bg")?.removeAttribute("inert");
      else
        document.querySelector(`#bytm-${currentDialogId}-dialog-bg`)?.removeAttribute("inert");
    }

    // remove the scroll lock and inert attribute on the body if no dialogs are open
    if(openDialogs.length === 0) {
      document.body.classList.remove("bytm-disable-scroll");
      document.querySelector(getDomain() === "ytm" ? "ytmusic-app" : "ytd-app")?.removeAttribute("inert");
    }

    this.events.emit("close");
    emitInterface("bytm:dialogClosed", this as BytmDialog);
    emitInterface(`bytm:dialogClosed:${this.id}` as "bytm:dialogClosed:id", this as BytmDialog);

    if(this.options.destroyOnClose)
      this.destroy();
    // don't destroy *and* unmount at the same time
    else if(this.options.unmountOnClose)
      this.unmount();
  }

  /** Returns true if the dialog is currently open */
  public isOpen() {
    return this.dialogOpen;
  }

  /** Returns true if the dialog is currently mounted */
  public isMounted() {
    return this.dialogMounted;
  }

  /** Clears the DOM of the dialog and removes all event listeners */
  public destroy() {
    this.unmount();
    this.events.emit("destroy");
    this.unsubscribeAll();
  }

  //#region static

  /** Returns the ID of the top-most dialog (the dialog that has been opened last) */
  public static getCurrentDialogId() {
    return currentDialogId;
  }

  /** Returns the IDs of all currently open dialogs, top-most first */
  public static getOpenDialogs() {
    return openDialogs;
  }

  //#region protected

  /** Called once to attach all generic event listeners */
  protected attachListeners(bgElem: HTMLElement) {
    if(this.options.closeOnBgClick) {
      bgElem.addEventListener("click", (e) => {
        if(this.isOpen() && (e.target as HTMLElement)?.id === `bytm-${this.id}-dialog-bg`)
          this.close(e);
      });
    }

    if(this.options.closeOnEscPress) {
      document.body.addEventListener("keydown", (e) => {
        if(e.key === "Escape" && this.isOpen() && BytmDialog.getCurrentDialogId() === this.id)
          this.close(e);
      });
    }
  }

  //#region private

  /** Returns the dialog content element and all its children */
  private async getDialogContent() {
    const header = this.options.renderHeader?.();
    const footer = this.options.renderFooter?.();

    const dialogWrapperEl = document.createElement("div");
    dialogWrapperEl.id = `bytm-${this.id}-dialog`;
    dialogWrapperEl.classList.add("bytm-dialog");
    dialogWrapperEl.ariaLabel = dialogWrapperEl.title = "";
    dialogWrapperEl.role = "dialog";
    dialogWrapperEl.setAttribute("aria-labelledby", `bytm-${this.id}-dialog-title`);
    dialogWrapperEl.setAttribute("aria-describedby", `bytm-${this.id}-dialog-body`);

    if(this.options.verticalAlign !== "center")
      dialogWrapperEl.classList.add(`align-${this.options.verticalAlign}`);

    //#region header

    const headerWrapperEl = document.createElement("div");
    headerWrapperEl.classList.add("bytm-dialog-header");
    this.options.small && headerWrapperEl.classList.add("small");

    if(header) {
      const headerTitleWrapperEl = document.createElement("div");
      headerTitleWrapperEl.id = `bytm-${this.id}-dialog-title`;
      headerTitleWrapperEl.classList.add("bytm-dialog-title-wrapper");
      headerTitleWrapperEl.role = "heading";
      headerTitleWrapperEl.ariaLevel = "1";

      headerTitleWrapperEl.appendChild(header instanceof Promise ? await header : header);
      headerWrapperEl.appendChild(headerTitleWrapperEl);
    }
    else {
      // insert element to pad the header height
      const padEl = document.createElement("div");
      padEl.classList.add("bytm-dialog-header-pad", this.options.small ? "small" : "");
      headerWrapperEl.appendChild(padEl);
    }

    if(this.options.closeBtnEnabled) {
      const closeBtnEl = document.createElement("img");
      closeBtnEl.classList.add("bytm-dialog-close");
      this.options.small && closeBtnEl.classList.add("small");
      closeBtnEl.src = await getResourceUrl("img-close");
      closeBtnEl.role = "button";
      closeBtnEl.tabIndex = 0;
      closeBtnEl.alt = closeBtnEl.title = closeBtnEl.ariaLabel = t("close_menu_tooltip");
      onInteraction(closeBtnEl, () => this.close());
      headerWrapperEl.appendChild(closeBtnEl);
    }

    dialogWrapperEl.appendChild(headerWrapperEl);

    //#region body

    const dialogBodyElem = document.createElement("div");
    dialogBodyElem.id = `bytm-${this.id}-dialog-body`;
    dialogBodyElem.classList.add("bytm-dialog-body");
    this.options.small && dialogBodyElem.classList.add("small");

    const body = this.options.renderBody();

    dialogBodyElem.appendChild(body instanceof Promise ? await body : body);
    dialogWrapperEl.appendChild(dialogBodyElem);

    //#region footer

    if(footer) {
      const footerWrapper = document.createElement("div");
      footerWrapper.classList.add("bytm-dialog-footer-cont");
      dialogWrapperEl.appendChild(footerWrapper);
      footerWrapper.appendChild(footer instanceof Promise ? await footer : footer);
    }

    return dialogWrapperEl;
  }
}
