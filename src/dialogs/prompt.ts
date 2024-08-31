import type { Emitter } from "nanoevents";
import type { Stringifiable } from "@sv443-network/userutils";
import { getOS, resourceAsString, setInnerHtml, t } from "../utils/index.js";
import { BytmDialog, type BytmDialogEvents } from "../components/index.js";
import "./prompt.css";

export type PromptDialogRenderProps = {
  type: "confirm" | "alert";
  message: Stringifiable;
};

export type ShowPromptProps = Partial<PromptDialogRenderProps> & Required<Pick<PromptDialogRenderProps, "message">>;

export type PromptDialogEmitter = Emitter<BytmDialogEvents & {
  resolve: (result: boolean) => void;
}>;

let promptDialog: PromptDialog | null = null;

// TODO: implement prompt() equivalent for text input
class PromptDialog extends BytmDialog {
  constructor(props: PromptDialogRenderProps) {
    super({
      id: "prompt-dialog",
      width: 400,
      height: 400,
      destroyOnClose: true,
      closeBtnEnabled: true,
      closeOnBgClick: props.type === "alert",
      closeOnEscPress: true,
      small: true,
      renderHeader: () => this.renderHeader(props),
      renderBody: () => this.renderBody(props),
    });
  }

  async renderHeader({ type }: PromptDialogRenderProps) {
    const headerEl = document.createElement("div");
    headerEl.id = "bytm-prompt-dialog-header";
    const iconSvg = await resourceAsString(type === "alert" ? "icon-alert" : "icon-confirm");
    if(iconSvg)
      setInnerHtml(headerEl, iconSvg);

    return headerEl;
  }

  async renderBody({ type, message }: PromptDialogRenderProps) {
    const resolve = (val: boolean) => (this.events as PromptDialogEmitter).emit("resolve", val);

    const contElem = document.createElement("div");

    const messageElem = document.createElement("h3");
    messageElem.role = "subheading";
    messageElem.tabIndex = 0;
    messageElem.textContent = String(message);
    messageElem.id = "bytm-prompt-dialog-message";
    contElem.appendChild(messageElem);

    const buttonsWrapper = document.createElement("div");
    buttonsWrapper.id = "bytm-prompt-dialog-button-wrapper";

    const buttonsCont = document.createElement("div");
    buttonsCont.id = "bytm-prompt-dialog-buttons-cont";

    let confirmBtn: HTMLButtonElement | undefined;
    if(type === "confirm") {
      confirmBtn = document.createElement("button");
      confirmBtn.textContent = confirmBtn.ariaLabel = confirmBtn.title = t("prompt_confirm");
      confirmBtn.id = "bytm-prompt-dialog-confirm";
      confirmBtn.tabIndex = 0;
      confirmBtn.addEventListener("click", () => {
        resolve(true);
        promptDialog?.close();
      }, { once: true });
    }

    const closeBtn = document.createElement("button");
    closeBtn.textContent = closeBtn.ariaLabel = closeBtn.title = t(type === "alert" ? "prompt_close" : "prompt_cancel");
    closeBtn.id = "bytm-prompt-dialog-close";
    closeBtn.tabIndex = 0;
    closeBtn.addEventListener("click", () => {
      resolve(type === "alert");
      promptDialog?.close();
    }, { once: true });

    confirmBtn && getOS() !== "mac" && buttonsCont.appendChild(confirmBtn);
    buttonsCont.appendChild(closeBtn);
    confirmBtn && getOS() === "mac" && buttonsCont.appendChild(confirmBtn);

    buttonsWrapper.appendChild(buttonsCont);
    contElem.appendChild(buttonsWrapper);

    return contElem;
  }
}

/** Shows a prompt dialog of the specified type and resolves true if the user confirms it or false if they cancel it - always resolves true with type "alert" */
export function showPrompt({
  type = "alert",
  message,
}: ShowPromptProps) {
  return new Promise<boolean>((resolve) => {
    if(BytmDialog.getOpenDialogs().includes("prompt-dialog"))
      promptDialog?.close();

    promptDialog = new PromptDialog({
      type,
      message,
    });

    // make config menu inert while prompt dialog is open
    promptDialog.once("open", () => document.querySelector("#bytm-cfg-menu")?.setAttribute("inert", "true"));
    promptDialog.once("close", () => document.querySelector("#bytm-cfg-menu")?.removeAttribute("inert"));

    let resolveVal: boolean | undefined;
    const tryResolve = () => resolve(typeof resolveVal === "boolean" ? resolveVal : false);

    const resolveUnsub = promptDialog.on("resolve" as "_", (val: boolean) => {
      resolveUnsub();
      if(resolveVal)
        return;
      resolveVal = val;
      tryResolve();
    });

    const closeUnsub = promptDialog.on("close", () => {
      closeUnsub();
      if(resolveVal)
        return;
      resolveVal = type === "alert";
      tryResolve();
    });

    promptDialog.open();
  });
}

//@ts-ignore
unsafeWindow.showPrompt = showPrompt;
