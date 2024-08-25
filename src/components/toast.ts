import { clamp, pauseFor } from "@sv443-network/userutils";
import { info, resourceAsString, setInnerHtmlTrusted } from "../utils/index.js";
import { getFeature } from "../config.js";
import type { ResourceKey } from "../types.js";
import "./toast.css";

export type ToastPos = "tl" | "tr" | "bl" | "br";

export type ToastProps = {
  /** Duration in milliseconds */
  duration?: number;
  /** Position of the toast on the screen */
  position?: ToastPos;
  /** Function to be called when the toast is clicked */
  onClick?: (evt?: MouseEvent) => void;
} & (
  | {
    /** Message (plus title) for the toast */
    message: string;
  }
  | {
    /** Element to be shown in the toast */
    element: HTMLElement;
    /** Title property of the toast (for a11y) */
    title: string;
  }
);

export type IconToastProps = ToastProps & {
  /** Position of the icon relative to the message */
  iconPos?: "left" | "right";
} & (
  | {
    /** An SVG icon identifier from the assets */
    icon: ResourceKey & `icon-${string}`;
    /** CSS `fill` value for all SVG path elements in the icon */
    iconFill?: string;
  }
  | {
    /** Link to an image */
    iconSrc: string | Promise<string>;
  }
);

/** Max amount of seconds a toast can be shown for */
const maxToastDuration = 30_000;

let timeout: ReturnType<typeof setTimeout> | undefined;

/** Shows a toast message with an icon */
export async function showIconToast({
  duration,
  position = "tr",
  iconPos = "left",
  ...rest
}: IconToastProps) {
  if(typeof duration !== "number" || isNaN(duration))
    duration = getFeature("toastDuration") * 1000;
  if(duration <= 0)
    return info("Toast duration is <= 0, so it won't be shown");
  const toastWrapper = document.createElement("div");
  toastWrapper.classList.add("bytm-toast-flex-wrapper");

  let toastIcon: HTMLImageElement | HTMLDivElement;
  if("iconSrc" in rest) {
    toastIcon = document.createElement("img");
    toastIcon.classList.add("bytm-toast-icon", "img");
    (toastIcon as HTMLImageElement).src = rest.iconSrc instanceof Promise
      ? await rest.iconSrc
      : rest.iconSrc;
  }
  else {
    toastIcon = document.createElement("div");
    toastIcon.classList.add("bytm-toast-icon");
    const iconHtml = await resourceAsString(rest.icon);
    if(iconHtml)
      setInnerHtmlTrusted(toastIcon, iconHtml);

    if("iconFill" in rest && rest.iconFill)
      toastIcon.style.setProperty("--toast-icon-fill", rest.iconFill);
  }

  const toastMessage = document.createElement("div");
  toastMessage.classList.add("bytm-toast-message");
  if("message" in rest)
    toastMessage.textContent = rest.message;
  else
    toastMessage.appendChild(rest.element);

  iconPos === "left" && toastWrapper.appendChild(toastIcon);
  toastWrapper.appendChild(toastMessage);
  iconPos === "right" && toastWrapper.appendChild(toastIcon);

  return await showToast({
    duration,
    position,
    element: toastWrapper,
    title: "message" in rest ? rest.message : rest.title,
    onClick: rest.onClick,
  });
}

/** Shows a toast message in the top right corner of the screen by default and uses the default timeout from the config option `toastDuration` */
export async function showToast(message: string): Promise<HTMLDivElement | void>;
/** Shows a toast message or element in the top right corner of the screen by default and uses the default timeout from the config option `toastDuration` */
export async function showToast(props: ToastProps): Promise<HTMLDivElement | void>;
/** Shows a toast message or element in the specified position (top right corner by default) and uses the default timeout from the config option `toastDuration` */
export async function showToast(arg: string | ToastProps): Promise<HTMLDivElement | void> {
  const props: ToastProps = typeof arg === "string"
    ? {
      message: arg,
      duration: getFeature("toastDuration") * 1000,
    }
    : arg;

  const {
    duration: durationMs = getFeature("toastDuration") * 1000,
    onClick,
    position = "tr",
    ...rest
  } = props;

  if(durationMs <= 0)
    return info("Toast duration is <= 0, so it won't be shown");
  const toastEl = document.querySelector("#bytm-toast");
  if(toastEl)
    await closeToast();

  const toastElem = document.createElement("div");
  onClick && toastElem.classList.add("clickable");
  toastElem.id = "bytm-toast";
  toastElem.role = "alert";
  toastElem.ariaLive = "polite";
  toastElem.ariaAtomic = "true";

  toastElem.addEventListener("click", async (e) => {
    onClick?.(e);
    await closeToast();
  }, { once: true });

  if("message" in rest)
    toastElem.title = toastElem.ariaLabel = toastElem.textContent = rest.message;
  else {
    toastElem.appendChild(rest.element);
    toastElem.title = toastElem.ariaLabel = rest.title;
  }

  document.body.appendChild(toastElem);
  
  pauseFor(100).then(async () => {
    toastElem.classList.add("visible", `pos-${position.toLowerCase()}`);

    if(durationMs < Number.POSITIVE_INFINITY && durationMs > 0) {
      timeout && clearTimeout(timeout);
      timeout = setTimeout(closeToast, clamp(durationMs, 250, maxToastDuration));
    }
  });

  return toastElem;
}

/** Closes the currently open toast */
export async function closeToast() {
  if(timeout) {
    clearTimeout(timeout);
    timeout = undefined;
  }

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
