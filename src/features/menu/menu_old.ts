import { debounce } from "@sv443-network/userutils";
import { defaultFeatures, getFeatures, saveFeatureConf, setDefaultFeatConf } from "../../config";
import { scriptInfo } from "../../constants";
import { featInfo } from "../index";
import { FeatureConfig } from "../../types";
import { getResourceUrl, info, log } from "../../utils";
import "./menu_old.css";

//#MARKER create menu elements

let isMenuOpen = false;

/**
 * Adds an element to open the BetterYTM menu
 * @deprecated to be replaced with new menu - see https://github.com/Sv443/BetterYTM/issues/23
 */
export async function addMenu() {
  //#SECTION backdrop & menu container
  const backgroundElem = document.createElement("div");
  backgroundElem.id = "betterytm-menu-bg";
  backgroundElem.title = "Click here to close the menu";
  backgroundElem.style.visibility = "hidden";
  backgroundElem.style.display = "none";
  backgroundElem.addEventListener("click", (e) => {
    if(isMenuOpen && (e.target as HTMLElement)?.id === "betterytm-menu-bg")
      closeMenu(e);
  });
  document.body.addEventListener("keydown", (e) => {
    if(isMenuOpen && e.key === "Escape")
      closeMenu(e);
  });

  const menuContainer = document.createElement("div");
  menuContainer.title = "";
  menuContainer.id = "betterytm-menu";
  menuContainer.style.borderRadius = "15px";
  menuContainer.style.display = "flex";
  menuContainer.style.flexDirection = "column";
  menuContainer.style.justifyContent = "space-between";


  //#SECTION title bar
  const titleCont = document.createElement("div");
  titleCont.style.padding = "8px 20px 15px 20px";
  titleCont.style.display = "flex";
  titleCont.style.justifyContent = "space-between";
  titleCont.id = "betterytm-menu-titlecont";

  const titleElem = document.createElement("h2");
  titleElem.id = "betterytm-menu-title";
  titleElem.classList.add("bytm-no-select");
  titleElem.innerText = `${scriptInfo.name} - Configuration`;

  const linksCont = document.createElement("div");
  linksCont.id = "betterytm-menu-linkscont";

  const addLink = (imgSrc: string, href: string, title: string) => {
    const anchorElem = document.createElement("a");
    anchorElem.className = "betterytm-menu-link";
    anchorElem.rel = "noopener noreferrer";
    anchorElem.target = "_blank";
    anchorElem.href = href;
    anchorElem.title = title;
    anchorElem.style.marginLeft = "10px";
        
    const imgElem = document.createElement("img");
    imgElem.className = "betterytm-menu-img bytm-no-select";
    imgElem.src = imgSrc;
    imgElem.style.width = "32px";
    imgElem.style.height = "32px";

    anchorElem.appendChild(imgElem);
    linksCont.appendChild(anchorElem);
  };

  addLink(await getResourceUrl("github"), scriptInfo.namespace, `${scriptInfo.name} on GitHub`);
  addLink(await getResourceUrl("greasyfork"), "https://greasyfork.org/TODO", `${scriptInfo.name} on GreasyFork`);

  const closeElem = document.createElement("img");
  closeElem.id = "betterytm-menu-close";
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
  featuresCont.id = "betterytm-menu-opts";
  featuresCont.style.display = "flex";
  featuresCont.style.flexDirection = "column";
  featuresCont.style.overflowY = "auto";

  /** Gets called whenever the feature config is changed */
  const confChanged = debounce(async (key: keyof typeof defaultFeatures, initialVal: number | boolean | Record<string, unknown>, newVal: number | boolean | Record<string, unknown>) => {
    const fmt = (val: unknown) => typeof val === "object" ? JSON.stringify(val) : String(val);
    info(`Feature config changed, key '${key}' from value '${fmt(initialVal)}' to '${fmt(newVal)}'`);

    const featConf = { ...await getFeatures() };

    featConf[key] = newVal as never;

    await saveFeatureConf(featConf);

    log("Saved feature config changes:\n", await GM.getValue("betterytm-config"));
  });

  const features = await getFeatures();

  for(const key in features) {
    const ftInfo = featInfo[key as keyof typeof features];

    // @ts-ignore
    if(!ftInfo || ftInfo.visible === false)
      continue;

    const { desc, type, default: ftDefault } = ftInfo;

    // @ts-ignore
    const step = ftInfo?.step ?? undefined;
    const val = features[key as keyof typeof features];

    const initialVal = val ?? ftDefault ?? undefined;

    const ftConfElem = document.createElement("div");
    ftConfElem.id = `betterytm-ftconf-${key}`;
    ftConfElem.style.display = "flex";
    ftConfElem.style.flexDirection = "row";
    ftConfElem.style.justifyContent = "space-between";
    ftConfElem.style.padding = "8px 20px";

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

      const inputElemId = `betterytm-ftconf-${key}-input`;

      const ctrlElem = document.createElement("span");
      ctrlElem.style.display = "inline-flex";
      ctrlElem.style.alignItems = "center";
      ctrlElem.style.whiteSpace = "nowrap";

      const inputElem = document.createElement("input");
      inputElem.id = inputElemId;
      inputElem.type = inputType;
      if(type === "toggle")
        inputElem.style.marginLeft = "5px";
      if(typeof initialVal !== "undefined")
        inputElem.value = String(initialVal);
      if(type === "number" && step)
        inputElem.step = step;

      // @ts-ignore
      if(ftInfo.min && ftInfo.max) {
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
        labelElem.classList.add("betterytm-ftconf-label");
        labelElem.style.marginRight = "20px";
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
        labelElem.classList.add("betterytm-ftconf-label");
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
          confChanged(key as keyof FeatureConfig, initialVal, (type !== "toggle" ? v : inputElem.checked));
      });

      labelElem && ctrlElem.appendChild(labelElem);
      ctrlElem.appendChild(inputElem);

      ftConfElem.appendChild(ctrlElem);
    }

    featuresCont.appendChild(ftConfElem);
  }

  //#SECTION footer
  const footerCont = document.createElement("div");
  footerCont.id = "betterytm-menu-footer-cont";
  footerCont.style.display = "flex";
  footerCont.style.flexDirection = "row";
  footerCont.style.justifyContent = "space-between";
  footerCont.style.padding = "10px 20px";
  footerCont.style.marginTop = "20px";
  footerCont.style.position = "sticky";
  footerCont.style.bottom = "0";
  footerCont.style.backgroundColor = "var(--bytm-menu-bg)";

  const footerElem = document.createElement("div");
  footerElem.id = "betterytm-menu-footer";
  footerElem.style.fontSize = "17px";
  footerElem.style.textDecoration = "underline";
  footerElem.innerText = "You need to reload the page to apply changes.";

  const reloadElem = document.createElement("button");
  reloadElem.style.marginLeft = "20px";
  reloadElem.innerText = "Reload now";
  reloadElem.title = "Click to reload the page";
  reloadElem.addEventListener("click", () => location.reload());

  const resetElem = document.createElement("button");
  resetElem.className = "bytm-cfg-reset-btn";
  resetElem.title = "Click to reset all settings to their default value";
  resetElem.innerText = "Reset";
  resetElem.addEventListener("click", async () => {
    if(confirm("Do you really want to reset all settings to their default value?\nThe page will automatically reload if you proceed.")) {
      await setDefaultFeatConf();
      location.reload();
    }
  });

  footerElem.appendChild(reloadElem);
  footerCont.appendChild(footerElem);
  footerCont.appendChild(resetElem);

  featuresCont.appendChild(footerCont);


  //#SECTION finalize
  const menuBody = document.createElement("div");
  menuBody.id = "betterytm-menu-body";
  menuBody.appendChild(titleCont);
  menuBody.appendChild(featuresCont);

  const versionCont = document.createElement("div");
  versionCont.style.display = "flex";
  versionCont.style.justifyContent = "space-around";
  versionCont.style.fontSize = "1.15em";
  versionCont.style.marginTop = "10px";
  versionCont.style.marginBottom = "5px";

  const versionElem = document.createElement("span");
  versionElem.id = "betterytm-menu-version";
  versionElem.innerText = `v${scriptInfo.version}`;

  versionCont.appendChild(versionElem);
  featuresCont.appendChild(versionCont);

  menuContainer.appendChild(menuBody);
  menuContainer.appendChild(versionCont);

  backgroundElem.appendChild(menuContainer);

  document.body.appendChild(backgroundElem);

  log("Added menu element:", backgroundElem);
}

//#MARKER utilities

export function closeMenu(e?: MouseEvent | KeyboardEvent) {
  if(!isMenuOpen)
    return;
  isMenuOpen = false;
  e?.bubbles && e.stopPropagation();

  document.body.classList.remove("bytm-disable-scroll");
  const menuBg = document.querySelector("#betterytm-menu-bg") as HTMLElement;

  menuBg.style.visibility = "hidden";
  menuBg.style.display = "none";
}

// function that opens the menu, it should do the inverse of closeMenu()
export function openMenu() {
  if(isMenuOpen)
    return;
  isMenuOpen = true;

  document.body.classList.add("bytm-disable-scroll");
  const menuBg = document.querySelector("#betterytm-menu-bg") as HTMLElement;

  menuBg.style.visibility = "visible";
  menuBg.style.display = "block";
}
