import { debounce, isScrollable, pauseFor } from "@sv443-network/userutils";
import { defaultConfig, getFeatures, saveFeatures, setDefaultFeatures } from "../../config";
import { scriptInfo } from "../../constants";
import { FeatureCategory, FeatInfoKey, categoryNames, featInfo } from "../index";
import { FeatureConfig } from "../../types";
import { getResourceUrl, info, log } from "../../utils";
import "./menu_old.css";

//#MARKER create menu elements

let isMenuOpen = false;
let scrollIndicatorShown = true;

/**
 * Adds an element to open the BetterYTM menu
 * @deprecated to be replaced with new menu - see https://github.com/Sv443/BetterYTM/issues/23
 */
export async function addMenu() {
  //#SECTION backdrop & menu container
  const backgroundElem = document.createElement("div");
  backgroundElem.id = "bytm-menu-bg";
  backgroundElem.title = "Click here to close the menu";
  backgroundElem.style.visibility = "hidden";
  backgroundElem.style.display = "none";
  backgroundElem.addEventListener("click", (e) => {
    if(isMenuOpen && (e.target as HTMLElement)?.id === "bytm-menu-bg")
      closeMenu(e);
  });
  document.body.addEventListener("keydown", (e) => {
    if(isMenuOpen && e.key === "Escape")
      closeMenu(e);
  });

  const menuContainer = document.createElement("div");
  menuContainer.title = "";
  menuContainer.id = "bytm-menu";
  menuContainer.style.borderRadius = "15px";
  menuContainer.style.display = "flex";
  menuContainer.style.flexDirection = "column";
  menuContainer.style.justifyContent = "space-between";


  //#SECTION title bar
  const titleCont = document.createElement("div");
  titleCont.id = "bytm-menu-titlecont";

  const titleElem = document.createElement("h2");
  titleElem.id = "bytm-menu-title";
  titleElem.role = "heading";
  titleElem.ariaLevel = "1";
  titleElem.innerText = `${scriptInfo.name} - Configuration`;

  const linksCont = document.createElement("div");
  linksCont.id = "bytm-menu-linkscont";

  const addLink = (imgSrc: string, href: string, title: string) => {
    const anchorElem = document.createElement("a");
    anchorElem.className = "bytm-menu-link bytm-no-select";
    anchorElem.rel = "noopener noreferrer";
    anchorElem.target = "_blank";
    anchorElem.href = href;
    anchorElem.title = title;

    const imgElem = document.createElement("img");
    imgElem.className = "bytm-menu-img";
    imgElem.src = imgSrc;
    imgElem.style.width = "32px";
    imgElem.style.height = "32px";

    anchorElem.appendChild(imgElem);
    linksCont.appendChild(anchorElem);
  };

  addLink(await getResourceUrl("github"), scriptInfo.namespace, `Open ${scriptInfo.name} on GitHub`);
  // TODO:
  // addLink(await getResourceUrl("greasyfork"), "https://greasyfork.org/en/users/184165-sv443", `Open ${scriptInfo.name} on GreasyFork`);

  const closeElem = document.createElement("img");
  closeElem.id = "bytm-menu-close";
  closeElem.src = await getResourceUrl("close");
  closeElem.title = "Click to close the menu";
  closeElem.style.marginLeft = "50px";
  closeElem.style.width = "32px";
  closeElem.style.height = "32px";
  closeElem.addEventListener("click", closeMenu);

  linksCont.appendChild(closeElem);

  titleCont.appendChild(titleElem);
  titleCont.appendChild(linksCont);


  //#SECTION feature list
  const featuresCont = document.createElement("div");
  featuresCont.id = "bytm-menu-opts";
  featuresCont.style.display = "flex";
  featuresCont.style.flexDirection = "column";
  featuresCont.style.overflowY = "auto";

  /** Gets called whenever the feature config is changed */
  const confChanged = debounce(async (key: keyof typeof defaultConfig, initialVal: number | boolean | Record<string, unknown>, newVal: number | boolean | Record<string, unknown>) => {
    const fmt = (val: unknown) => typeof val === "object" ? JSON.stringify(val) : String(val);
    info(`Feature config changed at key '${key}', from value '${fmt(initialVal)}' to '${fmt(newVal)}'`);

    const featConf = { ...getFeatures() };

    featConf[key] = newVal as never;

    await saveFeatures(featConf);
  });

  const featureCfg = getFeatures();
  const featureCfgWithCategories = Object.entries(featInfo)
    .reduce(
      (acc, [key, { category }]) => {
        if(!acc[category])
          acc[category] = {} as Record<FeatInfoKey, unknown>;
        acc[category][key as FeatInfoKey] = featureCfg[key as FeatInfoKey];
        return acc;
      },
    {} as Record<FeatureCategory, Record<FeatInfoKey, unknown>>,
    );

  for(const category in featureCfgWithCategories) {
    const featObj = featureCfgWithCategories[category as FeatureCategory];

    const catHeaderElem = document.createElement("h3");
    catHeaderElem.classList.add("bytm-ftconf-category-header");
    catHeaderElem.role = "heading";
    catHeaderElem.ariaLevel = "2";
    catHeaderElem.innerText = `${categoryNames[category as FeatureCategory]}:`;
    featuresCont.appendChild(catHeaderElem);

    for(const featKey in featObj) {
      const ftInfo = featInfo[featKey as keyof typeof featureCfg];

      // @ts-ignore
      if(!ftInfo || ftInfo.hidden === true)
        continue;

      const { desc, type, default: ftDefault } = ftInfo;

      // @ts-ignore
      const step = ftInfo?.step ?? undefined;
      const val = featureCfg[featKey as keyof typeof featureCfg];

      const initialVal = val ?? ftDefault ?? undefined;

      const ftConfElem = document.createElement("div");
      ftConfElem.classList.add("bytm-ftitem");

      {
        const textElem = document.createElement("span");
        textElem.style.display = "inline-block";
        textElem.style.fontSize = "15px";
        textElem.innerText = desc;

        ftConfElem.appendChild(textElem);
      }

      {
        let inputType = "text";
        switch(type)
        {
        case "toggle":
          inputType = "checkbox";
          break;
        case "slider":
          inputType = "range";
          break;
        case "number":
          inputType = "number";
          break;
        }

        const inputElemId = `bytm-ftconf-${featKey}-input`;

        const ctrlElem = document.createElement("span");
        ctrlElem.style.display = "inline-flex";
        ctrlElem.style.alignItems = "center";
        ctrlElem.style.whiteSpace = "nowrap";

        const inputElem = document.createElement("input");
        inputElem.classList.add("bytm-ftconf-input");
        inputElem.id = inputElemId;
        inputElem.type = inputType;
        if(type === "toggle")
          inputElem.style.marginLeft = "5px";
        if(typeof initialVal !== "undefined")
          inputElem.value = String(initialVal);
        if(type === "number" && step)
          inputElem.step = step;

        // @ts-ignore
        if(typeof ftInfo.min !== "undefined" && ftInfo.max !== "undefined") {
          // @ts-ignore
          inputElem.min = ftInfo.min;
          // @ts-ignore
          inputElem.max = ftInfo.max;
        }

        if(type === "toggle" && typeof initialVal !== "undefined")
          inputElem.checked = Boolean(initialVal);

        // @ts-ignore
        const unitTxt = typeof ftInfo.unit === "string" ? " " + ftInfo.unit : "";

        const fmtVal = (v: unknown) => String(v).trim();
        const toggleLabelText = (toggled: boolean) => toggled ? "On" : "Off";

        let labelElem: HTMLLabelElement | undefined;
        if(type === "slider") {
          labelElem = document.createElement("label");
          labelElem.classList.add("bytm-ftconf-label");
          labelElem.style.marginRight = "10px";
          labelElem.style.fontSize = "16px";
          labelElem.htmlFor = inputElemId;
          labelElem.innerText = fmtVal(initialVal) + unitTxt;

          inputElem.addEventListener("input", () => {
            if(labelElem)
              labelElem.innerText = fmtVal(parseInt(inputElem.value)) + unitTxt;
          });
        }
        else if(type === "toggle") {
          labelElem = document.createElement("label");
          labelElem.classList.add("bytm-ftconf-label");
          labelElem.style.paddingLeft = "10px";
          labelElem.style.paddingRight = "5px";
          labelElem.style.fontSize = "16px";
          labelElem.htmlFor = inputElemId;
          labelElem.innerText = toggleLabelText(Boolean(initialVal)) + unitTxt;

          inputElem.addEventListener("input", () => {
            if(labelElem)
              labelElem.innerText = toggleLabelText(inputElem.checked) + unitTxt;
          });
        }

        inputElem.addEventListener("input", () => {
          let v = Number(String(inputElem.value).trim());
          if(isNaN(v))
            v = Number(inputElem.value);
          if(typeof initialVal !== "undefined")
            confChanged(featKey as keyof FeatureConfig, initialVal, (type !== "toggle" ? v : inputElem.checked));
        });

        labelElem && ctrlElem.appendChild(labelElem);
        ctrlElem.appendChild(inputElem);

        ftConfElem.appendChild(ctrlElem);
      }

      featuresCont.appendChild(ftConfElem);
    }
  }

  //#SECTION scroll indicator
  const scrollIndicator = document.createElement("img");
  scrollIndicator.id = "bytm-menu-scroll-indicator";
  scrollIndicator.role = "button";
  scrollIndicator.title = "Click to scroll to the bottom";
  scrollIndicator.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIC05NjAgOTYwIDk2MCIgd2lkdGg9IjQ4Ij4KICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNDU3LjMwOC03NzkuOTk5djUxMy42OTJMMjEyLjAwMS01MTEuOTk5bC0zMiAzMS45OTlMNDgwLTE4MC4wMDEgNzc5Ljk5OS00ODBsLTMyLTMxLjk5OS0yNDUuMzA3IDI0NS42OTJ2LTUxMy42OTJoLTQ1LjM4NFoiLz4KPC9zdmc+";
  //#DEBUG scrollIndicatorElem.src = await getResourceUrl("arrow_down");
  featuresCont.appendChild(scrollIndicator);

  scrollIndicator.addEventListener("click", () => {
    const bottomAnchor = document.querySelector("#bytm-menu-bottom-anchor");
    bottomAnchor?.scrollIntoView({
      behavior: "smooth",
    });
  });

  featuresCont.addEventListener("scroll", async (evt: Event) => {
    const scrollPos = (evt.target as HTMLDivElement)?.scrollTop ?? 0;
    const scrollIndicator = document.querySelector<HTMLImageElement>("#bytm-menu-scroll-indicator");

    if(!scrollIndicator)
      return;

    if(scrollPos > 10 && scrollIndicatorShown) {
      scrollIndicatorShown = false;
      scrollIndicator.classList.add("hidden");
      await pauseFor(200);
      scrollIndicator.style.visibility = "hidden";
    }
    else if(scrollPos <= 10 && !scrollIndicatorShown) {
      scrollIndicatorShown = true;
      scrollIndicator.style.visibility = "initial";
      scrollIndicator.classList.remove("hidden");
    }
  });

  const bottomAnchor = document.createElement("div");
  bottomAnchor.id = "bytm-menu-bottom-anchor";
  featuresCont.appendChild(bottomAnchor);

  //#SECTION footer
  const footerCont = document.createElement("div");
  footerCont.id = "bytm-menu-footer-cont";

  const footerElem = document.createElement("div");
  footerElem.id = "bytm-menu-footer";
  footerElem.style.fontSize = "17px";
  footerElem.style.textDecoration = "underline";
  footerElem.innerText = "You need to reload the page to apply changes";

  const reloadElem = document.createElement("button");
  reloadElem.classList.add("bytm-btn");
  reloadElem.style.marginLeft = "20px";
  reloadElem.innerText = "Reload now";
  reloadElem.title = "Click to reload the page";
  reloadElem.addEventListener("click", () => location.reload());

  const resetElem = document.createElement("button");
  resetElem.classList.add("bytm-cfg-reset-btn", "bytm-btn");
  resetElem.title = "Click to reset all settings to their default values";
  resetElem.innerText = "Reset";
  resetElem.addEventListener("click", async () => {
    if(confirm("Do you really want to reset all settings to their default values?\nThe page will be automatically reloaded.")) {
      await setDefaultFeatures();
      closeMenu();
      location.reload();
    }
  });

  footerElem.appendChild(reloadElem);
  footerCont.appendChild(footerElem);
  footerCont.appendChild(resetElem);

  featuresCont.appendChild(footerCont);


  //#SECTION finalize
  const menuBody = document.createElement("div");
  menuBody.id = "bytm-menu-body";
  menuBody.appendChild(titleCont);
  menuBody.appendChild(featuresCont);

  const versionCont = document.createElement("div");
  versionCont.style.display = "flex";
  versionCont.style.justifyContent = "space-around";
  versionCont.style.fontSize = "1.15em";
  versionCont.style.marginTop = "5px";

  const versionElem = document.createElement("span");
  versionElem.id = "bytm-menu-version";
  versionElem.innerText = `v${scriptInfo.version}`;

  versionCont.appendChild(versionElem);
  featuresCont.appendChild(versionCont);

  menuContainer.appendChild(menuBody);
  menuContainer.appendChild(versionCont);

  backgroundElem.appendChild(menuContainer);

  document.body.appendChild(backgroundElem);

  log("Added menu element");
}

//#MARKER utilities

/** Closes the menu if it is open. If a bubbling event is passed, its propagation will be prevented. */
export function closeMenu(evt?: MouseEvent | KeyboardEvent) {
  if(!isMenuOpen)
    return;
  isMenuOpen = false;
  evt?.bubbles && evt.stopPropagation();

  document.body.removeAttribute("no-y-overflow");
  const menuBg = document.querySelector("#bytm-menu-bg") as HTMLElement;

  menuBg.style.visibility = "hidden";
  menuBg.style.display = "none";
}

/** Opens the menu if it is closed */
export function openMenu() {
  if(isMenuOpen)
    return;
  isMenuOpen = true;

  document.body.setAttribute("no-y-overflow", "");
  const menuBg = document.querySelector("#bytm-menu-bg") as HTMLElement;

  menuBg.style.visibility = "visible";
  menuBg.style.display = "block";

  const featuresCont = document.querySelector<HTMLElement>("#bytm-menu-opts");
  const scrollIndicator = document.querySelector<HTMLElement>("#bytm-menu-scroll-indicator");

  // disable scroll indicator if container doesn't scroll
  if(featuresCont && scrollIndicator && !isScrollable(featuresCont).vertical) {
    scrollIndicatorShown = false;
    scrollIndicator.classList.add("hidden");
    scrollIndicator.style.visibility = "hidden";
  }
}
