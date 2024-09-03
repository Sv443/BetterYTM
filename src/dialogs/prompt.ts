import type { Emitter } from "nanoevents";
import type { Stringifiable } from "@sv443-network/userutils";
import { getOS, resourceAsString, setInnerHtml, t } from "../utils/index.js";
import { BytmDialog, type BytmDialogEvents } from "../components/index.js";
import "./prompt.css";

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

export type ShowPromptProps = Partial<PromptDialogRenderProps> & Required<Pick<PromptDialogRenderProps, "message">>;

export type PromptDialogEmitter = Emitter<BytmDialogEvents & {
  resolve: (result: boolean | string | null) => void;
}>;

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
  }

  protected async renderHeader({ type }: PromptDialogRenderProps) {
    const headerEl = document.createElement("div");
    headerEl.id = "bytm-prompt-dialog-header";
    const iconSvg = await resourceAsString(type === "alert" ? "icon-alert" : "icon-confirm");
    if(iconSvg)
      setInnerHtml(headerEl, iconSvg);

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
      inputElem.autofocus = true;

      upperContElem.appendChild(inputElem);
    }

    return contElem;
  }

  protected async renderFooter({ type, ...rest }: PromptDialogRenderProps) {
    const resolve = (val: boolean | string | null) => (this.events as PromptDialogEmitter).emit("resolve", val);

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
      confirmBtn.autofocus = type === "confirm";
      confirmBtn.addEventListener("click", () => {
        resolve(type === "confirm" ? true : (document.querySelector<HTMLInputElement>("#bytm-prompt-dialog-input"))?.value?.trim() ?? null);
        promptDialog?.close();
      }, { once: true });
    }

    const closeBtn = document.createElement("button");
    closeBtn.id = "bytm-prompt-dialog-close";
    closeBtn.classList.add("bytm-prompt-dialog-button");
    closeBtn.textContent = await this.consumePromptStringGen(type, rest.denyBtnText, t(type === "alert" ? "prompt_close" : "prompt_cancel"));
    closeBtn.ariaLabel = closeBtn.title = await this.consumePromptStringGen(type, rest.denyBtnTooltip, t(type === "alert" ? "click_to_close_tooltip" : "click_to_cancel_tooltip"));
    closeBtn.tabIndex = 0;
    if(type === "alert")
      closeBtn.autofocus = true;
    closeBtn.addEventListener("click", () => {
      const resVals: Record<PromptType, boolean | null> = {
        alert: true,
        confirm: false,
        prompt: null,
      };
      resolve(resVals[type]);
      promptDialog?.close();
    }, { once: true });

    confirmBtn && getOS() !== "mac" && buttonsCont.appendChild(confirmBtn);
    buttonsCont.appendChild(closeBtn);
    confirmBtn && getOS() === "mac" && buttonsCont.appendChild(confirmBtn);

    buttonsWrapper.appendChild(buttonsCont);

    return buttonsWrapper;
  }

  protected async consumePromptStringGen(type: PromptType, txtGen?: PromptStringGen, fallback?: Stringifiable): Promise<string> {
    if(typeof txtGen === "function")
      return await txtGen(type);
    return String(txtGen ?? fallback);
  }
}

/** Shows a confirm() or alert() prompt dialog of the specified type and resolves true if the user confirms it or false if they cancel it - always resolves true with type "alert" */
export function showPrompt(props: ConfirmRenderProps | AlertRenderProps): Promise<boolean>;
/** Shows a prompt() dialog with the specified message and default value and resolves the entered value if the user confirms it or null if they cancel it */
export function showPrompt(props: PromptRenderProps): Promise<string | null>;
export function showPrompt({ type, ...rest }: PromptDialogRenderProps): Promise<boolean | string | null> {
  return new Promise<boolean | string | null>((resolve) => {
    if(BytmDialog.getOpenDialogs().includes("prompt-dialog"))
      promptDialog?.close();

    promptDialog = new PromptDialog({ type, ...rest });

    // make config menu inert while prompt dialog is open
    promptDialog.once("open", () => document.querySelector("#bytm-cfg-menu")?.setAttribute("inert", "true"));
    promptDialog.once("close", () => document.querySelector("#bytm-cfg-menu")?.removeAttribute("inert"));

    let resolveVal: boolean | string | null | undefined;
    const tryResolve = () => resolve(typeof resolveVal !== "undefined" ? resolveVal : false);

    const resolveUnsub = promptDialog.on("resolve" as "_", (val: boolean | string | null) => {
      resolveUnsub();
      if(resolveVal !== undefined)
        return;
      resolveVal = val;
      tryResolve();
    });

    const closeUnsub = promptDialog.on("close", () => {
      closeUnsub();
      if(resolveVal !== undefined)
        return;
      resolveVal = type === "alert";
      if(type === "prompt")
        resolveVal = null;
      tryResolve();
    });

    promptDialog.open();
  });
}
