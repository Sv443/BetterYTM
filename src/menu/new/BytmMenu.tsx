import { createRoot } from "react-dom/client";
import * as React from "react";
// hoist the class declaration because either rollup or babel is being a hoe
import { NanoEmitter } from "../../utils/NanoEmitter";
import { clearInner, getResourceUrl, warn } from "../../utils";
import { t } from "../../translations";

export interface BytmMenuOptions {
  /** ID that gets added to child element IDs - has to be unique and conform to HTML ID naming rules! */
  id: string;
  /** Whether the menu should close when the background is clicked - defaults to true */
  closeOnBgClick?: boolean;
  /** Whether the menu should close when the escape key is pressed - defaults to true */
  closeOnEscPress?: boolean;
  /** Whether the close button should be enabled - defaults to true */
  closeBtnEnabled?: boolean;
  /** Called to render the body of the menu */
  renderBody: () => React.ReactNode;
  /** Called to render the header of the menu - leave undefined for a blank header */
  renderHeader?: () => React.ReactNode;
  /** Called to render the footer of the menu - leave undefined for no footer */
  renderFooter?: () => React.ReactNode;
}

/** ID of the last opened (top-most) menu */
let lastMenuId: string | null = null;

/** Creates and manages a modal menu element */
export class BytmMenu extends NanoEmitter<{
  /** Emitted just after the menu is closed */
  close: () => void;
  /** Emitted just after the menu is opened */
  open: () => void;
  /** Emitted just after the menu contents are rendered */
  render: () => void;
  /** Emitted just after the menu contents are cleared */
  clear: () => void;
  /** Emitted just before the menu is destroyed and all listeners are removed */
  destroy: () => void;
}> {
  public readonly options;
  public readonly id;

  private menuOpen = false;
  private menuRendered = false;
  private listenersAttached = false;

  constructor(options: BytmMenuOptions) {
    super();

    this.options = {
      closeOnBgClick: true,
      closeOnEscPress: true,
      closeBtnEnabled: true,
      ...options,
    };
    this.id = options.id;
  }

  /** Call after DOMContentLoaded to pre-render the menu (or call just before calling open()) */
  public async render() {
    if(this.menuRendered)
      return;
    this.menuRendered = true;

    const bgElem = document.createElement("div");
    bgElem.id = `bytm-${this.id}-menu-bg`;
    bgElem.classList.add("bytm-menu-bg");
    if(this.options.closeOnBgClick)
      bgElem.ariaLabel = bgElem.title = t("close_menu_tooltip");

    bgElem.style.visibility = "hidden";
    bgElem.style.display = "none";
    bgElem.inert = true;

    document.body.appendChild(bgElem);

    const root = createRoot(bgElem);
    root.render(await this.getMenuContent());

    this.attachListeners(bgElem);

    this.events.emit("render");
  }

  /** Clears all menu contents in preparation for a new rendering call */
  public clear() {
    this.menuRendered = false;

    const clearSelectors = [
      `#bytm-${this.id}-menu-bg`,
    ];

    for(const selector of clearSelectors) {
      const elem = document.querySelector<HTMLElement>(selector);
      if(!elem)
        continue;
      clearInner(elem);
    }

    document.querySelector(`#bytm-${this.id}-menu-bg`)?.remove();

    this.events.emit("clear");
  }

  /** Clears and then re-renders the menu */
  public async rerender() {
    this.clear();
    await this.render();
  }

  /**
   * Opens the menu - renders it if it hasn't been rendered yet  
   * Prevents default action and immediate propagation of the passed event
   */
  public async open(e?: MouseEvent | KeyboardEvent) {
    e?.preventDefault();
    e?.stopImmediatePropagation();

    if(this.isOpen())
      return;
    this.menuOpen = true;

    if(!this.isRendered())
      await this.render();

    document.body.classList.add("bytm-disable-scroll");
    document.querySelector("ytmusic-app")?.setAttribute("inert", "true");
    const menuBg = document.querySelector<HTMLElement>(`#bytm-${this.id}-menu-bg`);

    if(!menuBg)
      return warn(`Couldn't find background element for menu with ID '${this.id}'`);

    menuBg.style.visibility = "visible";
    menuBg.style.display = "block";
    menuBg.inert = false;

    lastMenuId = this.id;

    this.events.emit("open");
  }

  /** Closes the menu - prevents default action and immediate propagation of the passed event */
  public close(e?: MouseEvent | KeyboardEvent) {
    e?.preventDefault();
    e?.stopImmediatePropagation();

    if(!this.isOpen())
      return;
    this.menuOpen = false;

    document.body.classList.remove("bytm-disable-scroll");
    document.querySelector("ytmusic-app")?.removeAttribute("inert");
    const menuBg = document.querySelector<HTMLElement>(`#bytm-${this.id}-menu-bg`);

    if(!menuBg)
      return warn(`Couldn't find background element for menu with ID '${this.id}'`);

    menuBg.style.visibility = "hidden";
    menuBg.style.display = "none";
    menuBg.inert = true;

    if(BytmMenu.getLastMenuId() === this.id)
      lastMenuId = null;

    this.events.emit("close");
  }

  /** Returns true if the menu is open */
  public isOpen() {
    return this.menuOpen;
  }

  /** Returns true if the menu has been rendered */
  public isRendered() {
    return this.menuRendered;
  }

  /** Clears the menu and removes all event listeners */
  public destroy() {
    this.events.emit("destroy");
    this.clear();
    this.unsubscribeAll();
  }

  /** Returns the ID of the top-most menu (the menu that has been opened last) */
  public static getLastMenuId() {
    return lastMenuId;
  }

  /** Called once to attach all generic event listeners */
  private attachListeners(bgElem: HTMLElement) {
    if(this.listenersAttached)
      return;
    this.listenersAttached = true;

    if(this.options.closeOnBgClick) {
      bgElem.addEventListener("click", (e) => {
        if(this.isOpen() && (e.target as HTMLElement)?.id === `bytm-${this.id}-menu-bg`)
          this.close(e);
      });
    }

    if(this.options.closeOnEscPress) {
      document.body.addEventListener("keydown", (e) => {
        if(e.key === "Escape" && this.isOpen() && BytmMenu.getLastMenuId() === this.id)
          this.close(e);
      });
    }
  }

  private async getMenuContent() {
    const closeSrc = await getResourceUrl("img-close");

    const header = this.options.renderHeader?.();
    const footer = this.options.renderFooter?.();

    // TODO:
    return (
      <div id={`bytm-${this.id}-menu`} className="bytm-menu" title="" aria-label="">
        <div className="bytm-menu-header">
          {header ? (
            <div className="bytm-menu-title-wrapper" role="heading" aria-level={1}>
              {header}
            </div>
          ) : null}
          {this.options.closeBtnEnabled ? (
            <img className="bytm-menu-close" src={closeSrc} role="button" tabIndex={0} onClick={() => this.close()} />
          ) : null}
        </div>
        <div>
          {this.options.renderBody()}
        </div>
        {footer ? (
          <div>
            {footer}
          </div>
        ) : null}
      </div>
    );
  }
}
