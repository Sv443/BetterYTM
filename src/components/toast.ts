import { clamp, pauseFor } from "@sv443-network/coreutils";
import { resourceAsString } from "@util/misc.ts";
import { loggers } from "@util/logging.ts";
import { setInnerHtml } from "@util/dom.ts";
import { getFeature } from "@/config.ts";
import type { ResourceKey } from "@/types.ts";
import "@comp/toast.css";

//#region types

/** Corner position of the toast on the screen */
export type ToastPos = "tl" | "tr" | "bl" | "br";

/** Properties for a toast */
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
    /** Optional subtitle for the toast */
    subtitle?: string;
  }
  | {
    /** Element to be shown in the toast */
    element: HTMLElement;
    /** Title property of the toast (for a11y) */
    title: string;
  }
);

/** Properties for a toast with an icon */
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

//#region vars

/** Max amount of seconds a toast can be shown for */
const maxToastDuration = 15_000;

/** Queue of future toasts to be shown */
const toastQueue: Array<() => Promise<unknown> | unknown> = [];
/** Whether a toast is currently being shown */
let showingToast = false;

/** Timeout ID for the currently shown toast */
let timeout: ReturnType<typeof setTimeout> | undefined;

// TODO:FIXME: no workis

//#region icon toast

/**
 * Shows a toast message with an icon.  
 * @returns The toast element if it could be immediately shown, otherwise `void` (like when it was queued to be shown later)
 */
export async function showIconToast({
  duration,
  position = "tr",
  iconPos = "left",
  ...rest
}: IconToastProps): Promise<HTMLDivElement | void> {
  if(typeof duration !== "number" || isNaN(duration))
    duration = getFeature("toastDuration") * 1000;
  if(duration <= 0)
    return loggers.dialog.info("Toast duration is <= 0, so it won't be shown");

  if(showingToast)
    return void toastQueue.push(() => showIconToast({ duration, position, iconPos, ...rest }));

  showingToast = true;

  const toastWrapper = document.createElement("div");
  toastWrapper.classList.add("bytm-toast-flex-wrapper");

  let toastIcon: HTMLImageElement | HTMLDivElement;
  if("iconSrc" in rest) {
    toastIcon = document.createElement("img");
    toastIcon.classList.add("bytm-toast-icon", "img");
    (toastIcon as HTMLImageElement).src = await rest.iconSrc;
  }
  else {
    toastIcon = document.createElement("div");
    toastIcon.classList.add("bytm-toast-icon");
    const iconHtml = await resourceAsString(rest.icon);
    if(iconHtml)
      setInnerHtml(toastIcon, iconHtml);

    if("iconFill" in rest && rest.iconFill)
      toastIcon.style.setProperty("--toast-icon-fill", rest.iconFill);
  }

  const toastMessage = document.createElement("div");
  toastMessage.classList.add("bytm-toast-message");
  if("message" in rest) {
    toastMessage.textContent = rest.message;
    if("subtitle" in rest && rest.subtitle) {
      const subtitleEl = document.createElement("div");
      subtitleEl.classList.add("bytm-toast-subtitle");
      subtitleEl.textContent = rest.subtitle;
      toastMessage.appendChild(subtitleEl);
    }
  }
  else
    toastMessage.appendChild(rest.element);

  iconPos === "left" && toastWrapper.appendChild(toastIcon);
  toastWrapper.appendChild(toastMessage);
  iconPos === "right" && toastWrapper.appendChild(toastIcon);

  const elem = await showToast({
    duration,
    position,
    element: toastWrapper,
    title: "message" in rest ? rest.message : rest.title,
    onClick: rest.onClick,
  });

  if(toastQueue.length > 0) {
    return new Promise<void>(resolve => {
      elem?.addEventListener("transitionend", async () => {
        const nextToast = toastQueue.shift()!;
        showingToast = false;
        return resolve(void await nextToast());
      }, { once: true });
    });
  }
  else {
    showingToast = false;
    return elem;
  }
}

//#region text toast

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
    return loggers.dialog.info("Toast duration is <= 0, so it won't be shown");

  if(showingToast)
    return void toastQueue.push(() => showToast(props));

  showingToast = true;

  if(document.querySelector("#bytm-toast"))
    await closeToast();

  const toastElem = document.createElement("div");
  toastElem.classList.add(`pos-${position.toLowerCase()}`);
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

  pauseFor(100).then(() => {
    toastElem.classList.add("visible");

    if(durationMs < Number.POSITIVE_INFINITY && durationMs > 0) {
      timeout && clearTimeout(timeout);
      timeout = setTimeout(closeToast, clamp(durationMs, 250, maxToastDuration));
    }
  });

  if(toastQueue.length > 0) {
    return new Promise<void>(resolve => {
      toastElem?.addEventListener("transitionend", async () => {
        const nextToast = toastQueue.shift()!;
        showingToast = false;
        return resolve(void await nextToast());
      }, { once: true });
    });
  }
  else {
    showingToast = false;
    return toastElem;
  }
}

/** Closes the currently open toast */
export async function closeToast() {
  if(timeout) {
    clearTimeout(timeout);
    timeout = undefined;
  }

  // query all for safety even though there should only be one at a time
  const toastEls = document.querySelectorAll("#bytm-toast");
  if(toastEls.length === 0)
    return;

  await Promise.allSettled(Array.from(toastEls).map(async (toastEl) => {
    toastEl.addEventListener("transitionend", async () => toastEl.remove(), { once: true });
    toastEl.classList.remove("visible");
  }));
}
