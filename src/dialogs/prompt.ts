import type { Emitter } from "nanoevents";
import type { Stringifiable } from "@sv443-network/userutils";
import { getOS, resourceAsString, setInnerHtml, t } from "../utils/index.js";
import { BytmDialog, type BytmDialogEvents } from "../components/index.js";
import { addSelectorListener } from "../observers.js";
import "./prompt.css";

//#region types

type PromptStringGen = Stringifiable | ((type: PromptType) => Stringifiable | Promise<Stringifiable>);

export type PromptDialogRenderProps = ConfirmRenderProps | AlertRenderProps | PromptRenderProps;

export type PromptType = PromptDialogRenderProps["type"];

type ConfirmRenderProps = BaseRenderProps & {
  type: "confirm";
};

type AlertRenderProps = BaseRenderProps & {
  type: "alert";
};

type PromptRenderProps = BaseRenderProps & {
  type: "prompt";
  defaultValue?: string;
};

type BaseRenderProps = {
  message: PromptStringGen;
  confirmBtnText?: PromptStringGen;
  confirmBtnTooltip?: PromptStringGen;
  denyBtnText?: PromptStringGen;
  denyBtnTooltip?: PromptStringGen;
};

export type PromptDialogResolveVal = boolean | string | null;

export type ShowPromptProps = Partial<PromptDialogRenderProps> & Required<Pick<PromptDialogRenderProps, "message">>;

export type PromptDialogEmitter = Emitter<BytmDialogEvents & {
  resolve: (result: PromptDialogResolveVal) => void;
}>;

//#region PromptDialog

let promptDialog: PromptDialog | null = null;

class PromptDialog extends BytmDialog {
  constructor(props: PromptDialogRenderProps) {
    super({
      id: "prompt-dialog",
      width: 500,
      height: 400,
      destroyOnClose: true,
      closeBtnEnabled: true,
      closeOnBgClick: props.type === "alert",
      closeOnEscPress: true,
      small: true,
      renderHeader: () => this.renderHeader(props),
      renderBody: () => this.renderBody(props),
      renderFooter: () => this.renderFooter(props),
    });

    this.on("render", this.focusOnRender);
  }

  protected emitResolve(val: PromptDialogResolveVal) {
    this.events.emit("resolve", val);
  }

  protected async renderHeader({ type }: PromptDialogRenderProps) {
    const headerEl = document.createElement("div");
    headerEl.id = "bytm-prompt-dialog-header";
    setInnerHtml(headerEl, await resourceAsString(type === "alert" ? "icon-alert" : "icon-prompt"));

    return headerEl;
  }

  protected async renderBody({ type, message, ...rest }: PromptDialogRenderProps) {
    const contElem = document.createElement("div");
    contElem.classList.add(`bytm-prompt-type-${type}`);

    const upperContElem = document.createElement("div");
    upperContElem.id = "bytm-prompt-dialog-upper-cont";
    contElem.appendChild(upperContElem);

    const messageElem = document.createElement("p");
    messageElem.id = "bytm-prompt-dialog-message";
    messageElem.role = "alert";
    messageElem.ariaLive = "polite";
    messageElem.tabIndex = 0;
    messageElem.textContent = String(message);
    upperContElem.appendChild(messageElem);

    if(type === "prompt") {
      const inputElem = document.createElement("input");
      inputElem.id = "bytm-prompt-dialog-input";
      inputElem.type = "text";
      inputElem.autocomplete = "off";
      inputElem.spellcheck = false;
      inputElem.value = "defaultValue" in rest ? rest.defaultValue ?? "" : "";

      const inputEnterListener = (e: KeyboardEvent) => {
        if(e.key === "Enter") {
          inputElem.removeEventListener("keydown", inputEnterListener);
          this.emitResolve(inputElem?.value?.trim() ?? null);
          promptDialog?.close();
        }
      };

      inputElem.addEventListener("keydown", inputEnterListener);
      promptDialog?.once("close", () => inputElem.removeEventListener("keydown", inputEnterListener));

      upperContElem.appendChild(inputElem);
    }

    return contElem;
  }

  protected async renderFooter({ type, ...rest }: PromptDialogRenderProps) {
    const buttonsWrapper = document.createElement("div");
    buttonsWrapper.id = "bytm-prompt-dialog-button-wrapper";

    const buttonsCont = document.createElement("div");
    buttonsCont.id = "bytm-prompt-dialog-buttons-cont";

    let confirmBtn: HTMLButtonElement | undefined;
    if(type === "confirm" || type === "prompt") {
      confirmBtn = document.createElement("button");
      confirmBtn.id = "bytm-prompt-dialog-confirm";
      confirmBtn.classList.add("bytm-prompt-dialog-button");
      confirmBtn.textContent = await this.consumePromptStringGen(type, rest.confirmBtnText, t("prompt_confirm"));
      confirmBtn.ariaLabel = confirmBtn.title = await this.consumePromptStringGen(type, rest.confirmBtnTooltip, t("click_to_confirm_tooltip"));
      confirmBtn.tabIndex = 0;
      confirmBtn.addEventListener("click", () => {
        this.emitResolve(type === "confirm" ? true : (document.querySelector<HTMLInputElement>("#bytm-prompt-dialog-input"))?.value?.trim() ?? null);
        promptDialog?.close();
      }, { once: true });
    }

    const closeBtn = document.createElement("button");
    closeBtn.id = "bytm-prompt-dialog-close";
    closeBtn.classList.add("bytm-prompt-dialog-button");
    closeBtn.textContent = await this.consumePromptStringGen(type, rest.denyBtnText, t(type === "alert" ? "prompt_close" : "prompt_cancel"));
    closeBtn.ariaLabel = closeBtn.title = await this.consumePromptStringGen(type, rest.denyBtnTooltip, t(type === "alert" ? "click_to_close_tooltip" : "click_to_cancel_tooltip"));
    closeBtn.tabIndex = 0;
    closeBtn.addEventListener("click", () => {
      const resVals: Record<PromptType, boolean | null> = {
        alert: true,
        confirm: false,
        prompt: null,
      };
      this.emitResolve(resVals[type]);
      promptDialog?.close();
    }, { once: true });

    confirmBtn && getOS() !== "mac" && buttonsCont.appendChild(confirmBtn);
    buttonsCont.appendChild(closeBtn);
    confirmBtn && getOS() === "mac" && buttonsCont.appendChild(confirmBtn);

    buttonsWrapper.appendChild(buttonsCont);

    return buttonsWrapper;
  }

  /** Converts a {@linkcode stringGen} (stringifiable value or sync or async function that returns a stringifiable value) to a string - uses {@linkcode fallback} as a fallback */
  protected async consumePromptStringGen(curPromptType: PromptType, stringGen?: PromptStringGen, fallback?: Stringifiable): Promise<string> {
    if(typeof stringGen === "function")
      return await stringGen(curPromptType);
    return String(stringGen ?? fallback);
  }

  /** Called on render to focus on the confirm or cancel button or text input, depending on prompt type */
  protected focusOnRender() {
    const inputElem = document.querySelector<HTMLInputElement>("#bytm-prompt-dialog-input");

    if(inputElem)
      return inputElem.focus();

    let captureEnterKey = true;
    document.addEventListener("keydown", (e) => {
      if(e.key === "Enter" && captureEnterKey) {
        const confBtn = document.querySelector<HTMLButtonElement>("#bytm-prompt-dialog-confirm");
        const closeBtn = document.querySelector<HTMLButtonElement>("#bytm-prompt-dialog-close");

        if(confBtn || closeBtn) {
          confBtn?.click() ?? closeBtn?.click();
          captureEnterKey = false;
        }
      }
    }, { capture: true, once: true });
  }
}

//#region showPrompt fn

/** Shows a `confirm()`-like prompt dialog with the specified message and resolves true if the user confirms it or false if they deny or cancel it */
export function showPrompt(props: ConfirmRenderProps): Promise<boolean>;
/** Shows an `alert()`-like prompt dialog with the specified message and always resolves true once the user dismisses it */
export function showPrompt(props: AlertRenderProps): Promise<true>;
/** Shows a `prompt()`-like dialog with the specified message and default value and resolves the entered value if the user confirms it or null if they cancel it */
export function showPrompt(props: PromptRenderProps): Promise<string | null>;
/** Custom dialog to emulate and enhance the behavior of the native `confirm()`, `alert()`, and `prompt()` functions */
export function showPrompt({ type, ...rest }: PromptDialogRenderProps): Promise<PromptDialogResolveVal> {
  return new Promise<PromptDialogResolveVal>((resolve) => {
    if(BytmDialog.getOpenDialogs().includes("prompt-dialog"))
      promptDialog?.close();

    promptDialog = new PromptDialog({ type, ...rest });

    promptDialog.once("render" as "_", () => {
      addSelectorListener<HTMLButtonElement>("bytmDialogContainer", `#bytm-prompt-dialog-${type === "alert" ? "close" : "confirm"}`, {
        listener: (btn) => btn.focus(),
      });
    });

    // make config menu inert while prompt dialog is open
    promptDialog.once("open", () => document.querySelector("#bytm-cfg-menu")?.setAttribute("inert", "true"));
    promptDialog.once("close", () => document.querySelector("#bytm-cfg-menu")?.removeAttribute("inert"));

    let resolveVal: PromptDialogResolveVal | undefined;
    const tryResolve = () => resolve(typeof resolveVal !== "undefined" ? resolveVal : false);

    let closeUnsub: (() => void) | undefined; // eslint-disable-line prefer-const

    const resolveUnsub = promptDialog.on("resolve" as "_", (val: PromptDialogResolveVal) => {
      resolveUnsub();
      if(resolveVal !== undefined)
        return;
      resolveVal = val;
      tryResolve();
      closeUnsub?.();
    });

    closeUnsub = promptDialog.on("close", () => {
      closeUnsub!();
      if(resolveVal !== undefined)
        return;
      resolveVal = type === "alert";
      if(type === "prompt")
        resolveVal = null;
      tryResolve();
      resolveUnsub();
    });

    promptDialog.open();
  });
}
