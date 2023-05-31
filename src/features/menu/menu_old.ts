import { defaultFeatures, getFeatures, saveFeatureConf } from "../../config";
import { dbg, info } from "../../constants";
import { featInfo } from "../index";
import { FeatureConfig } from "../../types";
import { addGlobalStyle } from "../../utils";

const branch = dbg ? "develop" : "main";

//#MARKER menu

/** Adds an element to open the BetterYTM menu */
export async function addMenu() {
  // bg & menu
  const backgroundElem = document.createElement("div");
  backgroundElem.id = "betterytm-menu-bg";
  backgroundElem.title = "Click here to close the menu";
  backgroundElem.style.visibility = "hidden";
  backgroundElem.style.display = "none";
  backgroundElem.addEventListener("click", (e) => {
    if((e.target as HTMLElement).id === "betterytm-menu-bg")
      closeMenu();
  });

  const menuContainer = document.createElement("div");
  menuContainer.title = "";
  menuContainer.id = "betterytm-menu";
  menuContainer.style.borderRadius = "15px";
  menuContainer.style.display = "flex";
  menuContainer.style.flexDirection = "column";
  menuContainer.style.justifyContent = "space-between";


  // title
  const titleCont = document.createElement("div");
  titleCont.style.padding = "8px 20px 15px 8px";
  titleCont.style.display = "flex";
  titleCont.style.justifyContent = "space-between";
  titleCont.id = "betterytm-menu-titlecont";

  const titleElem = document.createElement("h2");
  titleElem.id = "betterytm-menu-title";
  titleElem.innerText = `${info.name} - Configuration`;

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
    imgElem.className = "betterytm-menu-img";
    imgElem.src = imgSrc;
    imgElem.style.width = "32px";
    imgElem.style.height = "32px";

    anchorElem.appendChild(imgElem);
    linksCont.appendChild(anchorElem);
  };

  addLink(`https://raw.githubusercontent.com/Sv443/BetterYTM/${branch}/resources/external/github.png`, info.namespace, `${info.name} on GitHub`);
  addLink(`https://raw.githubusercontent.com/Sv443/BetterYTM/${branch}/resources/external/greasyfork.png`, "https://greasyfork.org/xyz", `${info.name} on GreasyFork`);

  const closeElem = document.createElement("img");
  closeElem.id = "betterytm-menu-close";
  closeElem.src = `https://raw.githubusercontent.com/Sv443/BetterYTM/${branch}/resources/icon/close.png`;
  closeElem.title = "Click to close the menu";
  closeElem.style.marginLeft = "50px";
  closeElem.style.width = "32px";
  closeElem.style.height = "32px";
  closeElem.addEventListener("click", closeMenu);

  linksCont.appendChild(closeElem);

  titleCont.appendChild(titleElem);
  titleCont.appendChild(linksCont);


  // TODO: features
  const featuresCont = document.createElement("div");
  featuresCont.id = "betterytm-menu-opts";
  featuresCont.style.display = "flex";
  featuresCont.style.flexDirection = "column";

  /** Gets called whenever the feature config is changed */
  const confChanged = async (key: keyof typeof defaultFeatures, initialVal: number | boolean | Record<string, unknown>, newVal: number | boolean | Record<string, unknown>) => {
    const fmt = (val: unknown) => typeof val === "object" ? JSON.stringify(val) : String(val);
    dbg && console.info(`BetterYTM: Feature config changed, key '${key}' from value '${fmt(initialVal)}' to '${fmt(newVal)}'`);

    const featConf = { ...await getFeatures() };

    featConf[key] = newVal as never;

    await saveFeatureConf(featConf);

    dbg && console.log("BetterYTM: Saved feature config changes:\n", await GM.getValue("betterytm-config"));
  };

  const features = await getFeatures();

  const featKeys = Object.keys(features);
  for(const key of featKeys) {
    const ftInfo = featInfo[key as keyof typeof features];

    if(!ftInfo)
      continue;

    const { desc, type, default: ftDef } = ftInfo;

    // @ts-ignore
    const step = ftInfo?.step ?? undefined;
    const val = features[key as keyof typeof features];

    const initialVal = val || ftDef || undefined;

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
      ctrlElem.style.display = "inline-block";
      ctrlElem.style.whiteSpace = "nowrap";

      const inputElem = document.createElement("input");
      inputElem.id = inputElemId;
      inputElem.style.marginRight = "37px";
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
      const unitTxt = ftInfo?.unit ? " " + ftInfo.unit : "";

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
            labelElem.innerText = fmtVal(parseInt(inputElem.value));
        });
      }
      else if(type === "toggle" && typeof initialVal !== "undefined") {
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

      inputElem.addEventListener("input", ({ currentTarget }) => {
        const elem = currentTarget as HTMLInputElement;
        let v = parseInt(elem.value);
        if(isNaN(v))
          v = Number(elem.value);
        if(typeof initialVal !== "undefined")
          confChanged(key as keyof FeatureConfig, initialVal, (type !== "toggle" ? v : elem.checked));
      });

      const resetElem = document.createElement("button");
      resetElem.innerText = "Reset";
      resetElem.addEventListener("click", () => {
        inputElem[type !== "toggle" ? "value" : "checked"] = ftDef as never;

        if(labelElem) {
          if(type === "toggle")
            labelElem.innerText = toggleLabelText(inputElem.checked) + unitTxt;
          else
            labelElem.innerText = fmtVal(parseInt(inputElem.value)) + unitTxt;
        }

        if(typeof initialVal !== "undefined")
          confChanged(key as keyof FeatureConfig, initialVal, ftDef);
      });

      labelElem && ctrlElem.appendChild(labelElem);
      ctrlElem.appendChild(inputElem);
      ctrlElem.appendChild(resetElem);

      ftConfElem.appendChild(ctrlElem);
    }

    featuresCont.appendChild(ftConfElem);
  }

  const footerElem = document.createElement("div");
  footerElem.style.marginTop = "20px";
  footerElem.style.fontSize = "17px";
  footerElem.style.textDecoration = "underline";
  footerElem.style.padding = "8px 20px";
  footerElem.innerText = "You need to reload the page to apply changes.";

  const reloadElem = document.createElement("button");
  reloadElem.style.marginLeft = "20px";
  reloadElem.innerText = "Reload now";
  reloadElem.title = "Click to reload the page";
  reloadElem.addEventListener("click", () => location.reload());

  footerElem.appendChild(reloadElem);
  featuresCont.appendChild(footerElem);


  // finalize
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
  versionElem.innerText = `v${info.version}`;

  versionCont.appendChild(versionElem);
  featuresCont.appendChild(versionCont);

  menuContainer.appendChild(menuBody);
  menuContainer.appendChild(versionCont);

  backgroundElem.appendChild(menuContainer);

  document.body.appendChild(backgroundElem);


  // add style
  const menuStyle = `\
#betterytm-menu-bg {
  display: block;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 15;
  background-color: rgba(0, 0, 0, 0.6);
}

/* TODO:FIXME: needs better positioning (vw and vh === "big no no") */
#betterytm-menu {
  display: inline-block;
  position: fixed;
  width: 50vw;
  height: auto;
  min-height: 500px;
  left: 25vw;
  top: 25vh;
  z-index: 16;
  overflow: auto;
  padding: 8px;
  color: #fff;
  background-color: #212121;
}

#betterytm-menu-titlecont {
  display: flex;
}

#betterytm-menu-title {
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 8px;
}

#betterytm-menu-linkscont {
  display: flex;
}

.betterytm-menu-link {
  display: inline-block;
}

/*.betterytm-menu-img {

}*/

#betterytm-menu-close {
  cursor: pointer;
}

.betterytm-ftconf-label {
  user-select: none;
}`;

  dbg && console.log("BetterYTM: Added menu elem:", backgroundElem);

  addGlobalStyle(menuStyle, "menu");
}

export function closeMenu() {
  const menuBg = document.querySelector("#betterytm-menu-bg") as HTMLElement;

  menuBg.style.visibility = "hidden";
  menuBg.style.display = "none";
}

export function openMenu() {
  const menuBg = document.querySelector("#betterytm-menu-bg") as HTMLElement;

  menuBg.style.visibility = "visible";
  menuBg.style.display = "block";
}
