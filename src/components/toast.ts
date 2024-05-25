import { pauseFor } from "@sv443-network/userutils";
import { resourceToHTMLString } from "../utils";
import type { ResourceKey } from "../types";
import "./toast.css";

type ToastPos = "tl" | "tr" | "bl" | "br";

type ToastProps = {
  duration?: number;
  position?: ToastPos;
} & (
  | {
    message: string;
  }
  | {
    element: HTMLElement;
    title: string;
  }
);

type IconToastProps = ToastProps & {
  icon: ResourceKey;
};

let timeout: NodeJS.Timeout | undefined;

/** Shows a toast message with an icon */
export async function showIconToast({
  icon,
  duration = 3000,
  position = "tr",
  ...rest
}: IconToastProps) {
  const toastWrapper = document.createElement("div");
  toastWrapper.classList.add("bytm-toast-flex-wrapper");

  const toastIcon = document.createElement("div");
  toastIcon.classList.add("bytm-toast-icon");
  const iconHtml = await resourceToHTMLString(icon);
  if(iconHtml)
    toastIcon.innerHTML = iconHtml;

  const toastMessage = document.createElement("div");
  toastMessage.classList.add("bytm-toast-message");
  if("message" in rest)
    toastMessage.textContent = rest.message;
  else
    toastMessage.appendChild(rest.element);

  toastWrapper.appendChild(toastIcon);
  toastWrapper.appendChild(toastMessage);

  await showToast({
    duration,
    position,
    element: toastWrapper,
    title: "message" in rest ? rest.message : rest.title,
  });
}

/** Shows a toast message in the bottom left corner of the screen by default */
export async function showToast({
  duration = 3000,
  position = "tr",
  ...rest
}: ToastProps) {
  const toastEl = document.querySelector("#bytm-toast");
  if(toastEl)
    await closeToast();

  const toastElem = document.createElement("div");
  toastElem.id = "bytm-toast";
  toastElem.role = "alert";
  toastElem.ariaLive = "assertive";
  toastElem.ariaAtomic = "true";

  toastElem.addEventListener("click", async () => await closeToast(), { once: true });

  if("message" in rest)
    toastElem.title = toastElem.ariaLabel = toastElem.textContent = rest.message;
  else {
    toastElem.appendChild(rest.element);
    toastElem.title = toastElem.ariaLabel = rest.title;
  }
  
  document.body.appendChild(toastElem);

  await pauseFor(100);

  toastElem.classList.add("visible", `pos-${position}`);

  timeout = setTimeout(async () => await closeToast(), duration);
}

/** Closes the currently open toast */
export async function closeToast() {
  const toastEl = document.querySelector("#bytm-toast");
  timeout && clearTimeout(timeout);
  if(toastEl) {
    toastEl.classList.remove("visible");

    await pauseFor(300);
    toastEl.remove();
  }
}
