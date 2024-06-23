import { pauseFor } from "@sv443-network/userutils";
import { info, resourceToHTMLString } from "../utils/index.js";
import { getFeature } from "../config.js";
import type { ResourceKey } from "../types.js";
import "./toast.css";

type ToastPos = "tl" | "tr" | "bl" | "br";

type ToastProps = {
  /** Duration in seconds */
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

type IconToastProps = ToastProps & (
  | {
    icon: ResourceKey & `icon-${string}`;
  }
  | {
    iconSrc: string | Promise<string>;
  }
);

let timeout: ReturnType<typeof setTimeout> | undefined;

/** Shows a toast message with an icon */
export async function showIconToast({
  duration = getFeature("toastDuration"),
  position = "tr",
  ...rest
}: IconToastProps) {
  if(duration <= 0)
    return info("Toast duration is <= 0, so it won't be shown");
  const toastWrapper = document.createElement("div");
  toastWrapper.classList.add("bytm-toast-flex-wrapper");

  if("iconSrc" in rest) {
    const toastIcon = document.createElement("img");
    toastIcon.classList.add("bytm-toast-icon", "img");
    toastIcon.src = rest.iconSrc instanceof Promise ? await rest.iconSrc : rest.iconSrc;
    toastWrapper.appendChild(toastIcon);
  }
  else {
    const toastIcon = document.createElement("div");
    toastIcon.classList.add("bytm-toast-icon");
    const iconHtml = await resourceToHTMLString(rest.icon);
    if(iconHtml)
      toastIcon.innerHTML = iconHtml;
    toastWrapper.appendChild(toastIcon);
  }

  const toastMessage = document.createElement("div");
  toastMessage.classList.add("bytm-toast-message");
  if("message" in rest)
    toastMessage.textContent = rest.message;
  else
    toastMessage.appendChild(rest.element);

  toastWrapper.appendChild(toastMessage);

  await showToast({
    duration,
    position,
    element: toastWrapper,
    title: "message" in rest ? rest.message : rest.title,
  });
}

/** Shows a toast message in the top right corner of the screen by default */
export async function showToast({
  duration = getFeature("toastDuration"),
  position = "tr",
  ...rest
}: ToastProps) {
  if(duration <= 0)
    return info("Toast duration is <= 0, so it won't be shown");
  const toastEl = document.querySelector("#bytm-toast");
  if(toastEl)
    await closeToast();

  const toastElem = document.createElement("div");
  toastElem.id = "bytm-toast";
  toastElem.role = "alert";
  toastElem.ariaLive = "polite";
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

  timeout = setTimeout(async () => await closeToast(), duration * 1000);
}

/** Closes the currently open toast */
export async function closeToast() {
  timeout && clearTimeout(timeout);

  const toastEls = document.querySelectorAll("#bytm-toast");
  if(toastEls.length === 0)
    return;

  await Promise.allSettled(Array.from(toastEls).map(async (toastEl) => {
    toastEl.classList.remove("visible");

    await pauseFor(300);
    toastEl.remove();
    await pauseFor(100);
  }));
}
