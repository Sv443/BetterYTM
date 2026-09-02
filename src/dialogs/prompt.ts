import { consumeStringGen, type StringGen, type Stringifiable } from "@sv443-network/coreutils";
import { getOS, resourceAsString, setInnerHtml, t } from "@util/index.ts";
import { BytmDialog, type BytmDialogOptions } from "@comp/BytmDialog.ts";
import "@dialog/prompt.css";

//#region types

/** StringGen variant used by the {@linkcode showPrompt()} function - gets passed the type as a parameter */
export type PromptStringGen = Stringifiable | ((type: PromptType) => Stringifiable | Promise<Stringifiable>);

/** Props for rendering the prompt dialog - see {@linkcode showPrompt()} */
export type PromptDialogRenderProps = ConfirmRenderProps | AlertRenderProps | PromptRenderProps;

/** Type of prompt dialog to show - see {@linkcode showPrompt()} */
export type PromptType = PromptDialogRenderProps["type"];

/** Props for rendering an `alert()`-like prompt dialog - see {@linkcode showPrompt()} */
export type AlertRenderProps = BaseRenderProps & {
  type: "alert";
};

/** Props for rendering a `confirm()`-like prompt dialog - see {@linkcode showPrompt()} */
export type ConfirmRenderProps = BaseRenderProps & ConfirmBtnProps & {
  type: "confirm";
};

/** Props for rendering a `prompt()`-like dialog - see {@linkcode showPrompt()} */
export type PromptRenderProps = BaseRenderProps & ConfirmBtnProps & {
  type: "prompt";
  /** Initial value of the text input field - defaults to an empty string if not provided */
  defaultValue?: StringGen;
  /** Whether to render the text input as a textarea - defaults to false (single line input) */
  textarea?: boolean;
};

/** Props for all prompt dialog types with a confirm button ("confirm" and "prompt"). */
type ConfirmBtnProps = {
  /** Text for the confirm button (only for types "confirm" and "prompt"). Defaults to the tr key "prompt_confirm" for both types if not provided. */
  confirmBtnText?: PromptStringGen;
  /** Tooltip for the confirm button (only for types "confirm" and "prompt"). Defaults to the tr key "click_to_confirm_tooltip" for both types if not provided. */
  confirmBtnTooltip?: PromptStringGen;
  /** Whether to show the confirm button (only for types "confirm" and "prompt") - defaults to true if not provided. */
  confirmBtnEnabled?: boolean;
};

/** Position of extra buttons relative to the built-in confirm and close buttons */
export type ExtraButtonsPosition = "before" | "between" | "after";

/** Base props for rendering any type of prompt dialog - see {@linkcode showPrompt()} */
export type BaseRenderProps = {
  /** Message to show in the dialog body. */
  message: PromptStringGen;
  /** Text for the close/cancel button. Defaults to the tr key "prompt_close" for type "alert" and "prompt_cancel" for type "confirm" and "prompt" if not provided. */
  denyBtnText?: PromptStringGen;
  /** Tooltip for the close/cancel button. Defaults to the tr key "click_to_close_tooltip" for type "alert" and "click_to_cancel_tooltip" for type "confirm" and "prompt" if not provided. */
  denyBtnTooltip?: PromptStringGen;
  /** Whether to show the close/cancel button - defaults to true if not provided. */
  denyBtnEnabled?: boolean;
  /**
   * Array of functions that create extra button elements appended to the footer row - placement controlled by {@linkcode extraButtonsPosition}  
   * The function gets passed the dialog instance as a parameter.  
   * Note: these are completely unmanaged by the prompt dialog, so they won't make it resolve, and also won't close it when clicked.  
   * - ⚠️ If custom buttons close the dialog, make sure to call the method {@linkcode PromptDialog.emitResolve()} on the passed instance to properly emit a resolve event with the final value.
   */
  extraButtons?: ((dialog: PromptDialog) => Promise<HTMLButtonElement> | HTMLButtonElement)[];
  /** Where to place {@linkcode extraButtons} relative to the built-in confirm/close buttons - defaults to `"between"` */
  extraButtonsPosition?: ExtraButtonsPosition;
  /** Partial override of the underlying {@linkcode BytmDialog} options (except `id` and render functions) */
  dialogOptions?: Partial<Omit<BytmDialogOptions, "id" | "renderBody" | "renderHeader" | "renderFooter">>;
};

/** Any value that can be returned by the {@linkcode showPrompt()} function */
export type PromptDialogResolveVal = boolean | string | null;

//#region PromptDialog

let promptDialog: PromptDialog | null = null;
const promptDialogId = "prompt";

/**
 * This is a custom dialog to emulate and enhance the behavior of the native `confirm()`, `alert()`, and `prompt()` functions.  
 * It supports various customizations - see {@linkcode showPrompt()} for details.
 */
export class PromptDialog extends BytmDialog {
  public readonly type: PromptType;
  constructor(props: PromptDialogRenderProps) {
    super({
      id: promptDialogId,
      width: 500,
      height: 400,
      destroyOnClose: true,
      closeBtnEnabled: true,
      closeOnBgClick: true,
      closeOnEscPress: true,
      small: true,
      ...props.dialogOptions,
      renderHeader: () => this.renderHeader(props),
      renderBody: () => this.renderBody(props),
      renderFooter: () => this.renderFooter(props),
    });
    this.type = props.type;

    const unsub = this.on("render", () => {
      if(this.options.destroyOnClose)
        unsub();
      setTimeout(() => this.focusOnRender(), 25);
    });
  }

  /** Emits the "resolve" event with the specified value. Should be called every time the dialog is about to be closed. */
  public emitResolve(val: PromptDialogResolveVal) {
    this.events.emit("resolve", val);
  }

  /** Returns the current value of the text input field if the dialog type is "prompt", null if it's empty, and undefined for other dialog types. */
  public getInputValue() {
    if(this.type !== "prompt")
      return undefined;
    return document.querySelector<HTMLInputElement>("#bytm-dialog-container #bytm-prompt-dialog-input")?.value?.trim() ?? null;
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
      const isTA = "textarea" in rest && rest.textarea;
      const inputElem = document.createElement(isTA ? "textarea" : "input");
      inputElem.id = "bytm-prompt-dialog-input";
      if(isTA) {
        (inputElem as HTMLTextAreaElement).wrap = "off";
        (inputElem as HTMLTextAreaElement).rows = 4;
      }
      else
        (inputElem as HTMLInputElement).type = "text";
      inputElem.autofocus = true;
      inputElem.autocomplete = "off";
      inputElem.spellcheck = false;
      inputElem.value = "defaultValue" in rest && rest.defaultValue
        ? await consumeStringGen(rest.defaultValue)
        : "";

      // dont ask me why intersecting the input and textarea de-narrows the gd event type
      const inputEnterListener = (e: Event) => {
        if("key" in e && e.key === "Enter") {
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
    // wrappers for alignment and spacing:

    const buttonsWrapper = document.createElement("div");
    buttonsWrapper.id = "bytm-prompt-dialog-button-wrapper";

    const buttonsCont = document.createElement("div");
    buttonsCont.id = "bytm-prompt-dialog-buttons-cont";

    // confirm button (only for types "confirm" & "prompt"):

    const confirmBtn = (type === "confirm" || type === "prompt") && ("confirmBtnEnabled" in rest && rest.confirmBtnEnabled === false ? undefined : document.createElement("button"));
    if(confirmBtn) {
      const { confirmBtnText, confirmBtnTooltip } = rest as ConfirmBtnProps;
      confirmBtn.id = "bytm-prompt-dialog-confirm";
      confirmBtn.classList.add("bytm-prompt-dialog-button");
      confirmBtn.textContent = await this.consumePromptStringGen(type, confirmBtnText, t("prompt_confirm"));
      confirmBtn.ariaLabel = confirmBtn.title = await this.consumePromptStringGen(type, confirmBtnTooltip, t("click_to_confirm_tooltip"));
      confirmBtn.tabIndex = 0;
      if(type === "confirm")
        confirmBtn.autofocus = true;
      confirmBtn.addEventListener("click", () => {
        this.emitResolve(type === "confirm" ? true : (document.querySelector<HTMLInputElement>("#bytm-prompt-dialog-input"))?.value?.trim() ?? null);
        promptDialog?.close();
      }, { once: true });
    }

    // close/cancel button:

    const closeBtn = rest.denyBtnEnabled === false ? undefined : document.createElement("button");
    if(closeBtn) {
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
        this.emitResolve(resVals[type]);
        promptDialog?.close();
      }, { once: true });
    }

    // extra buttons:

    const { extraButtons = [], extraButtonsPosition = "between" } = rest;
    const isMac = getOS() === "mac";

    const appendExtraButtons = async () => {
      for(const getBtnFn of extraButtons) {
        const btn = await getBtnFn(this);
        if(btn instanceof HTMLElement) {
          buttonsCont.appendChild(btn);
          if(btn instanceof HTMLButtonElement)
            btn.classList.add("bytm-prompt-dialog-button");
        }
      }
    };

    if(extraButtonsPosition === "before")
      await appendExtraButtons();

    // adjust order for Mac vs other OSes to match native dialogs
    if(!isMac) {
      confirmBtn && buttonsCont.appendChild(confirmBtn);
      if(extraButtonsPosition === "between")
        await appendExtraButtons();
      closeBtn && buttonsCont.appendChild(closeBtn);
    }
    else {
      closeBtn && buttonsCont.appendChild(closeBtn);
      if(extraButtonsPosition === "between")
        await appendExtraButtons();
      confirmBtn && buttonsCont.appendChild(confirmBtn);
    }

    if(extraButtonsPosition === "after")
      await appendExtraButtons();

    buttonsWrapper.appendChild(buttonsCont);

    return buttonsWrapper;
  }

  /** Converts a {@linkcode PromptStringGen} (stringifiable value or sync or async function that returns a stringifiable value) to a string - uses {@linkcode fallback} as a fallback */
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
          confBtn && "click" in confBtn
            ? confBtn.click()
            : closeBtn?.click();
          captureEnterKey = false;
        }
      }
    }, { capture: true, once: true });
  }
}

//#region showPrompt fn

/** Shows a `confirm()`-like prompt dialog with the specified message and resolves true if the user confirms it or false if they deny or cancel it */
export function showPrompt(props: ConfirmRenderProps): Promise<boolean>;
/** Shows an `alert()`-like prompt dialog with the specified message and always resolves true once the user dismisses it - for this type, only the close button will exist */
export function showPrompt(props: AlertRenderProps): Promise<true>;
/** Shows a `prompt()`-like dialog with the specified message and default value and resolves the entered value if the user confirms it or null if they cancel it */
export function showPrompt(props: PromptRenderProps): Promise<string | null>;
/** Custom dialog to emulate and enhance the behavior of the native `confirm()`, `alert()`, and `prompt()` functions */
export function showPrompt({ type, ...rest }: PromptDialogRenderProps): Promise<PromptDialogResolveVal> {
  return new Promise<PromptDialogResolveVal>((resolve) => {
    if(BytmDialog.getOpenDialogs().includes(promptDialogId))
      promptDialog?.close();

    promptDialog = new PromptDialog({ type, ...rest });

    // focus on the most relevant button when the dialog opens to allow using the enter key immediately
    promptDialog.once("open", () => document.querySelector<HTMLButtonElement>(`#bytm-prompt-dialog-${type === "alert" ? "close" : "confirm"}`)?.focus());

    // make config menu inert while prompt dialog is open
    promptDialog.once("open", () => document.querySelector("#bytm-cfg-menu")?.setAttribute("inert", "true"));
    promptDialog.once("close", () => document.querySelector("#bytm-cfg-menu")?.removeAttribute("inert"));

    let resolveVal: PromptDialogResolveVal | undefined;
    const tryResolve = () => resolve(typeof resolveVal !== "undefined" ? resolveVal : false);

    let closeUnsub: (() => void) | undefined; // eslint-disable-line prefer-const

    const resolveUnsub = promptDialog.on("resolve", (val: PromptDialogResolveVal) => {
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
