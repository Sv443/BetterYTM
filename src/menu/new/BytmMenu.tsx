import { createRoot } from "react-dom/client";
import * as React from "react";
import { clearInner, getResourceUrl, NanoEmitter, warn } from "../../utils";
import { t } from "../../translations";

export interface BytmMenuConfig {
  /** ID that gets added to all child element IDs and class names */
  id: string;
  /** Called to render the body of the menu */
  renderBody: () => React.ReactNode;
  /** Called to render the header of the menu - leave undefined for a blank header */
  renderHeader?: () => React.ReactNode;
  /** Called to render the footer of the menu - leave undefined for no footer */
  renderFooter?: () => React.ReactNode;
}

interface BytmMenuEventsMap {
  /** Emitted just after the menu is closed */
  close: () => void;
  /** Emitted just after the menu is opened */
  open: () => void;
  /** Emitted just after the menu contents are rendered */
  render: () => void;
  /** Emitted just after the menu contents are cleared */
  clear: () => void;
}

/** Creates and manages a modal menu element */
export class BytmMenu extends NanoEmitter<BytmMenuEventsMap> {
  public readonly config;
  public readonly id;

  private menuOpen = false;
  private menuRendered = false;

  constructor(config: BytmMenuConfig) {
    super();

    this.config = config;
    this.id = config.id;
  }

  /** Call after DOMContentLoaded to pre-render the menu (or call just before calling open()) */
  public async render() {
    this.menuRendered = true;

    const bgElem = document.createElement("div");
    bgElem.id = `bytm-${this.id}-menu-bg`;
    bgElem.classList.add("bytm-menu-bg");
    bgElem.title = t("close_menu_tooltip");

    bgElem.style.visibility = "hidden";
    bgElem.style.display = "none";
    bgElem.inert = true;

    bgElem.addEventListener("click", (e) => {
      if(this.isOpen() && (e.target as HTMLElement)?.id === `bytm-${this.id}-menu-bg`)
        this.close(e);
    });
    document.body.addEventListener("keydown", (e) => {
      if(this.isOpen() && e.key === "Escape")
        this.close(e);
    });

    document.body.appendChild(bgElem);

    const root = createRoot(bgElem);
    root.render(await this.getMenuContent());

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

  private async getMenuContent() {
    const closeSrc = await getResourceUrl("img-close");

    const header = this.config.renderHeader?.();
    const footer = this.config.renderFooter?.();

    // TODO:
    return (
      <div id={`bytm-${this.id}-menu`} className="bytm-menu" title="">
        <div className="bytm-menu-header">
          {header ? (
            <div className="bytm-menu-title-wrapper" role="heading" aria-level={1}>
              {header}
            </div>
          ) : null}
          <img className="bytm-menu-close" src={closeSrc} role="button" tabIndex={0} onClick={() => this.close()} />
        </div>
        <div>
          {this.config.renderBody()}
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