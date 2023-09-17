import { debounce, isScrollable } from "@sv443-network/userutils";
import { defaultConfig, getFeatures, migrations, saveFeatures, setDefaultFeatures } from "../config";
import { scriptInfo } from "../constants";
import { FeatureCategory, FeatInfoKey, categoryNames, featInfo } from "../features/index";
import { getResourceUrl, info, log, warn } from "../utils";
import { formatVersion } from "../config";
import { siteEvents } from "../events";
import { FeatureConfig } from "../types";
import changelogContent from "../../changelog.md";
import "./menu_old.css";

//#MARKER create menu elements

export let isMenuOpen = false;

/** Threshold in pixels from the top of the options container that dictates for how long the scroll indicator is shown */
const scrollIndicatorOffsetThreshold = 30;
let scrollIndicatorEnabled = true;

/**
 * Adds an element to open the BetterYTM menu
 * @deprecated to be replaced with new menu - see https://github.com/Sv443/BetterYTM/issues/23
 */
export async function addMenu() {
  //#SECTION backdrop & menu container
  const backgroundElem = document.createElement("div");
  backgroundElem.id = "bytm-cfg-menu-bg";
  backgroundElem.classList.add("bytm-menu-bg");
  backgroundElem.title = "Click here to close the menu";
  backgroundElem.style.visibility = "hidden";
  backgroundElem.style.display = "none";
  backgroundElem.addEventListener("click", (e) => {
    if(isMenuOpen && (e.target as HTMLElement)?.id === "bytm-cfg-menu-bg")
      closeMenu(e);
  });
  document.body.addEventListener("keydown", (e) => {
    if(isMenuOpen && e.key === "Escape")
      closeMenu(e);
  });

  const menuContainer = document.createElement("div");
  menuContainer.title = ""; // prevent bg title from propagating downwards
  menuContainer.classList.add("bytm-menu");
  menuContainer.id = "bytm-cfg-menu";


  //#SECTION title bar
  const headerElem = document.createElement("div");
  headerElem.classList.add("bytm-menu-header");

  const titleCont = document.createElement("div");
  titleCont.id = "bytm-menu-titlecont";
  titleCont.role = "heading";
  titleCont.ariaLevel = "1";

  const titleElem = document.createElement("h2");
  titleElem.id = "bytm-menu-title";
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
  closeElem.classList.add("bytm-menu-close");
  closeElem.src = await getResourceUrl("close");
  closeElem.title = "Click to close the menu";
  closeElem.addEventListener("click", closeMenu);

  titleCont.appendChild(titleElem);
  titleCont.appendChild(linksCont);

  headerElem.appendChild(titleCont);
  headerElem.appendChild(closeElem);


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

  const fmtVal = (v: unknown) => String(v).trim();
  const toggleLabelText = (toggled: boolean) => toggled ? "On" : "Off";

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

        if(labelElem) {
          labelElem.id = `bytm-ftconf-${featKey}-label`;
          ctrlElem.appendChild(labelElem);
        }
        ctrlElem.appendChild(inputElem);

        ftConfElem.appendChild(ctrlElem);
      }

      featuresCont.appendChild(ftConfElem);
    }
  }

  siteEvents.on("rebuildCfgMenu", (newConfig) => {
    for(const ftKey in featInfo) {
      const ftElem = document.querySelector<HTMLInputElement>(`#bytm-ftconf-${ftKey}-input`);
      const labelElem = document.querySelector<HTMLLabelElement>(`#bytm-ftconf-${ftKey}-label`);
      if(!ftElem)
        continue;

      const ftInfo = featInfo[ftKey as keyof typeof featInfo];
      const value = newConfig[ftKey as keyof FeatureConfig];

      if(ftInfo.type === "toggle")
        ftElem.checked = Boolean(value);
      else
        ftElem.value = String(value);

      if(!labelElem)
        continue;
        
      // @ts-ignore
      const unitTxt = typeof ftInfo.unit === "string" ? " " + ftInfo.unit : "";
      if(ftInfo.type === "slider")
        labelElem.innerText = fmtVal(Number(value)) + unitTxt;
      else if(ftInfo.type === "toggle")
        labelElem.innerText = toggleLabelText(Boolean(value)) + unitTxt;
    }
  });

  //#SECTION scroll indicator
  const scrollIndicator = document.createElement("img");
  scrollIndicator.id = "bytm-menu-scroll-indicator";
  scrollIndicator.src = await getResourceUrl("arrow_down");
  scrollIndicator.role = "button";
  scrollIndicator.title = "Click to scroll to the bottom";

  featuresCont.appendChild(scrollIndicator);

  scrollIndicator.addEventListener("click", () => {
    const bottomAnchor = document.querySelector("#bytm-menu-bottom-anchor");
    bottomAnchor?.scrollIntoView({
      behavior: "smooth",
    });
  });

  featuresCont.addEventListener("scroll", (evt: Event) => {
    const scrollPos = (evt.target as HTMLDivElement)?.scrollTop ?? 0;
    const scrollIndicator = document.querySelector<HTMLImageElement>("#bytm-menu-scroll-indicator");

    if(!scrollIndicator)
      return;

    if(scrollIndicatorEnabled && scrollPos > scrollIndicatorOffsetThreshold && !scrollIndicator.classList.contains("bytm-hidden")) {
      scrollIndicator.classList.add("bytm-hidden");
    }
    else if(scrollIndicatorEnabled && scrollPos <= scrollIndicatorOffsetThreshold && scrollIndicator.classList.contains("bytm-hidden")) {
      scrollIndicator.classList.remove("bytm-hidden");
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
  reloadElem.style.marginLeft = "10px";
  reloadElem.innerText = "Reload now";
  reloadElem.title = "Click to reload the page";
  reloadElem.addEventListener("click", () => {
    closeMenu();
    location.reload();
  });

  footerElem.appendChild(reloadElem);

  const resetElem = document.createElement("button");
  resetElem.classList.add("bytm-btn");
  resetElem.title = "Click to reset all settings to their default values";
  resetElem.innerText = "Reset";
  resetElem.addEventListener("click", async () => {
    if(confirm("Do you really want to reset all settings to their default values?\nThe page will be automatically reloaded.")) {
      await setDefaultFeatures();
      closeMenu();
      location.reload();
    }
  });
  const exportElem = document.createElement("button");
  exportElem.classList.add("bytm-btn");
  exportElem.title = "Click to export your current configuration";
  exportElem.innerText = "Export";
  exportElem.addEventListener("click", async () => {
    closeMenu();
    openExportMenu();
  });
  const importElem = document.createElement("button");
  importElem.classList.add("bytm-btn");
  importElem.title = "Click to import a configuration you have previously exported";
  importElem.innerText = "Import";
  importElem.addEventListener("click", async () => {
    closeMenu();
    openImportMenu();
  });

  const buttonsCont = document.createElement("div");
  buttonsCont.id = "bytm-menu-footer-buttons-cont";
  buttonsCont.appendChild(exportElem);
  buttonsCont.appendChild(importElem);
  buttonsCont.appendChild(resetElem);

  footerCont.appendChild(footerElem);
  footerCont.appendChild(buttonsCont);


  //#SECTION finalize
  menuContainer.appendChild(headerElem);
  menuContainer.appendChild(featuresCont);

  const versionCont = document.createElement("div");
  versionCont.id = "bytm-menu-version-cont";

  const versionElem = document.createElement("a");
  versionElem.id = "bytm-menu-version";
  versionElem.title = `Version ${scriptInfo.version} - Build ${scriptInfo.lastCommit}`;
  versionElem.innerText = `v${scriptInfo.version} (${scriptInfo.lastCommit})`;

  versionElem.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    closeMenu();
    openChangelogMenu();
  });

  versionCont.appendChild(versionElem);

  menuContainer.appendChild(footerCont);
  menuContainer.appendChild(versionCont);

  backgroundElem.appendChild(menuContainer);

  document.body.appendChild(backgroundElem);

  window.addEventListener("resize", debounce(checkToggleScrollIndicator, 150));

  await addChangelogMenu();
  await addExportMenu();
  await addImportMenu();

  log("Added menu element");
}

/** Closes the menu if it is open. If a bubbling event is passed, its propagation will be prevented. */
export function closeMenu(evt?: MouseEvent | KeyboardEvent) {
  if(!isMenuOpen)
    return;
  isMenuOpen = false;
  evt?.bubbles && evt.stopPropagation();

  document.body.classList.remove("bytm-disable-scroll");
  const menuBg = document.querySelector("#bytm-cfg-menu-bg") as HTMLElement;

  menuBg.style.visibility = "hidden";
  menuBg.style.display = "none";
}

/** Opens the menu if it is closed */
export function openMenu() {
  if(isMenuOpen)
    return;
  isMenuOpen = true;

  document.body.classList.add("bytm-disable-scroll");
  const menuBg = document.querySelector("#bytm-cfg-menu-bg") as HTMLElement;

  menuBg.style.visibility = "visible";
  menuBg.style.display = "block";

  checkToggleScrollIndicator();
}

/** Checks if the features container is scrollable and toggles the scroll indicator accordingly */
function checkToggleScrollIndicator() {
  const featuresCont = document.querySelector<HTMLElement>("#bytm-menu-opts");
  const scrollIndicator = document.querySelector<HTMLElement>("#bytm-menu-scroll-indicator");

  
  // disable scroll indicator if container doesn't scroll
  if(featuresCont && scrollIndicator) {
    const verticalScroll = isScrollable(featuresCont).vertical;
    /** If true, the indicator's threshold is under the available scrollable space and so it should be disabled */
    const underThreshold = featuresCont.scrollHeight - featuresCont.clientHeight <= scrollIndicatorOffsetThreshold;

    if(!underThreshold && verticalScroll && !scrollIndicatorEnabled) {
      scrollIndicatorEnabled = true;
      scrollIndicator.classList.remove("bytm-hidden");
    }
    if((!verticalScroll && scrollIndicatorEnabled) || underThreshold) {
      scrollIndicatorEnabled = false;
      scrollIndicator.classList.add("bytm-hidden");
    }
  }
}

//#MARKER export menu

let isExportMenuOpen = false;

/** Adds a menu to copy the current configuration as JSON (hidden by default) */
async function addExportMenu() {
  const menuBgElem = document.createElement("div");
  menuBgElem.id = "bytm-export-menu-bg";
  menuBgElem.classList.add("bytm-menu-bg");
  menuBgElem.title = "Click here to close the menu";
  menuBgElem.style.visibility = "hidden";
  menuBgElem.style.display = "none";
  menuBgElem.addEventListener("click", (e) => {
    if(isExportMenuOpen && (e.target as HTMLElement)?.id === "bytm-export-menu-bg") {
      closeExportMenu(e);
      openMenu();
    }
  });
  document.body.addEventListener("keydown", (e) => {
    if(isExportMenuOpen && e.key === "Escape") {
      closeExportMenu(e);
      openMenu();
    }
  });

  const menuContainer = document.createElement("div");
  menuContainer.title = ""; // prevent bg title from propagating downwards
  menuContainer.classList.add("bytm-menu");
  menuContainer.id = "bytm-export-menu";

  //#SECTION title bar
  const headerElem = document.createElement("div");
  headerElem.classList.add("bytm-menu-header");

  const titleCont = document.createElement("div");
  titleCont.id = "bytm-menu-titlecont";
  titleCont.role = "heading";
  titleCont.ariaLevel = "1";

  const titleElem = document.createElement("h2");
  titleElem.id = "bytm-menu-title";
  titleElem.innerText = `${scriptInfo.name} - Export Configuration`;

  const closeElem = document.createElement("img");
  closeElem.classList.add("bytm-menu-close");
  closeElem.src = await getResourceUrl("close");
  closeElem.title = "Click to close the menu";
  closeElem.addEventListener("click", (e) => {
    closeExportMenu(e);
    openMenu();
  });

  titleCont.appendChild(titleElem);

  headerElem.appendChild(titleCont);
  headerElem.appendChild(closeElem);

  //#SECTION body

  const menuBodyElem = document.createElement("div");
  menuBodyElem.classList.add("bytm-menu-body");

  const textElem = document.createElement("div");
  textElem.id = "bytm-export-menu-text";
  textElem.innerText = "Copy the following text to export your configuration:";

  const textAreaElem = document.createElement("textarea");
  textAreaElem.id = "bytm-export-menu-textarea";
  textAreaElem.readOnly = true;
  textAreaElem.value = JSON.stringify({ formatVersion, data: getFeatures() });

  siteEvents.on("configChanged", (data) => {
    const textAreaElem = document.querySelector<HTMLTextAreaElement>("#bytm-export-menu-textarea");
    if(textAreaElem)
      textAreaElem.value = JSON.stringify({ formatVersion, data });
  });

  //#SECTION footer
  const footerElem = document.createElement("div");
  footerElem.classList.add("bytm-menu-footer-right");

  const copyBtnElem = document.createElement("button");
  copyBtnElem.classList.add("bytm-btn");
  copyBtnElem.innerText = "Copy to clipboard";
  copyBtnElem.title = "Click to copy the configuration to your clipboard";

  const copiedTextElem = document.createElement("span");
  copiedTextElem.classList.add("bytm-menu-footer-copied");
  copiedTextElem.innerText = "Copied!";
  copiedTextElem.style.display = "none";
  
  copyBtnElem.addEventListener("click", async (evt) => {
    evt?.bubbles && evt.stopPropagation();
    const textAreaElem = document.querySelector<HTMLTextAreaElement>("#bytm-export-menu-textarea");
    if(textAreaElem) {
      GM.setClipboard(textAreaElem.value);
      copiedTextElem.style.display = "inline-block";
      setTimeout(() => {
        copiedTextElem.style.display = "none";
      }, 3000);
    }
  });

  // flex-direction is row-reverse
  footerElem.appendChild(copyBtnElem);
  footerElem.appendChild(copiedTextElem);

  //#SECTION finalize

  menuBodyElem.appendChild(textElem);
  menuBodyElem.appendChild(textAreaElem);
  menuBodyElem.appendChild(footerElem);

  menuContainer.appendChild(headerElem);
  menuContainer.appendChild(menuBodyElem);
  
  menuBgElem.appendChild(menuContainer);

  document.body.appendChild(menuBgElem);
}

/** Closes the export menu if it is open. If a bubbling event is passed, its propagation will be prevented. */
function closeExportMenu(evt: MouseEvent | KeyboardEvent) {
  if(!isExportMenuOpen)
    return;
  isExportMenuOpen = false;
  evt?.bubbles && evt.stopPropagation();

  document.body.classList.remove("bytm-disable-scroll");
  const menuBg = document.querySelector<HTMLElement>("#bytm-export-menu-bg");

  if(!menuBg)
    return warn("Couldn't find export menu background element");

  menuBg.style.visibility = "hidden";
  menuBg.style.display = "none";
}

/** Opens the export menu if it is closed */
function openExportMenu() {
  if(isExportMenuOpen)
    return;
  isExportMenuOpen = true;

  document.body.classList.add("bytm-disable-scroll");
  const menuBg = document.querySelector<HTMLElement>("#bytm-export-menu-bg");

  if(!menuBg)
    return warn("Couldn't find export menu background element");

  menuBg.style.visibility = "visible";
  menuBg.style.display = "block";
}

//#MARKER import menu

let isImportMenuOpen = false;

/** Adds a menu to import a configuration from JSON (hidden by default) */
async function addImportMenu() {
  const menuBgElem = document.createElement("div");
  menuBgElem.id = "bytm-import-menu-bg";
  menuBgElem.classList.add("bytm-menu-bg");
  menuBgElem.title = "Click here to close the menu";
  menuBgElem.style.visibility = "hidden";
  menuBgElem.style.display = "none";
  menuBgElem.addEventListener("click", (e) => {
    if(isImportMenuOpen && (e.target as HTMLElement)?.id === "bytm-import-menu-bg") {
      closeImportMenu(e);
      openMenu();
    }
  });
  document.body.addEventListener("keydown", (e) => {
    if(isImportMenuOpen && e.key === "Escape") {
      closeImportMenu(e);
      openMenu();
    }
  });

  const menuContainer = document.createElement("div");
  menuContainer.title = ""; // prevent bg title from propagating downwards
  menuContainer.classList.add("bytm-menu");
  menuContainer.id = "bytm-import-menu";

  //#SECTION title bar
  const headerElem = document.createElement("div");
  headerElem.classList.add("bytm-menu-header");

  const titleCont = document.createElement("div");
  titleCont.id = "bytm-menu-titlecont";
  titleCont.role = "heading";
  titleCont.ariaLevel = "1";

  const titleElem = document.createElement("h2");
  titleElem.id = "bytm-menu-title";
  titleElem.innerText = `${scriptInfo.name} - Import Configuration`;

  const closeElem = document.createElement("img");
  closeElem.classList.add("bytm-menu-close");
  closeElem.src = await getResourceUrl("close");
  closeElem.title = "Click to close the menu";
  closeElem.addEventListener("click", (e) => {
    closeImportMenu(e);
    openMenu();
  });

  titleCont.appendChild(titleElem);

  headerElem.appendChild(titleCont);
  headerElem.appendChild(closeElem);

  //#SECTION body

  const menuBodyElem = document.createElement("div");
  menuBodyElem.classList.add("bytm-menu-body");

  const textElem = document.createElement("div");
  textElem.id = "bytm-import-menu-text";
  textElem.innerText = "Paste the configuration you want to import into the field below, then click the import button";

  const textAreaElem = document.createElement("textarea");
  textAreaElem.id = "bytm-import-menu-textarea";

  //#SECTION footer
  const footerElem = document.createElement("div");
  footerElem.classList.add("bytm-menu-footer-right");

  const importBtnElem = document.createElement("button");
  importBtnElem.classList.add("bytm-btn");
  importBtnElem.innerText = "Import";
  importBtnElem.title = "Click to import the configuration";

  importBtnElem.addEventListener("click", async (evt) => {
    evt?.bubbles && evt.stopPropagation();
    const textAreaElem = document.querySelector<HTMLTextAreaElement>("#bytm-import-menu-textarea");
    if(!textAreaElem)
      return warn("Couldn't find import menu textarea element");
    try {
      const parsed = JSON.parse(textAreaElem.value.trim());
      if(typeof parsed !== "object")
        return alert("The imported data is not an object");
      if(typeof parsed.formatVersion !== "number")
        return alert("The imported data does not contain a format version");
      if(typeof parsed.data !== "object")
        return alert("The imported object does not contain any data");
      if(parsed.formatVersion < formatVersion) {
        let newData = JSON.parse(JSON.stringify(parsed.data));
        const sortedMigrations = Object.entries(migrations)
          .sort(([a], [b]) => Number(a) - Number(b));

        let curFmtVer = Number(parsed.formatVersion);

        for(const [fmtVer, migrationFunc] of sortedMigrations) {
          const ver = Number(fmtVer);
          if(curFmtVer < formatVersion && curFmtVer < ver) {
            try {
              const migRes = JSON.parse(JSON.stringify(migrationFunc(newData)));
              newData = migRes instanceof Promise ? await migRes : migRes;
              curFmtVer = ver;
            }
            catch(err) {
              console.error(`Error while running migration function for format version ${fmtVer}:`, err);
            }
          }
        }
        parsed.formatVersion = curFmtVer;
        parsed.data = newData;
      }
      else if(parsed.formatVersion !== formatVersion)
        return alert(`The imported data is in an unsupported format version (expected ${formatVersion} or lower, got ${parsed.formatVersion})`);

      await saveFeatures(parsed.data);

      siteEvents.emit("rebuildCfgMenu", parsed.data);

      if(confirm("Successfully imported the configuration.\nDo you want to reload the page now to apply changes?"))
        return location.reload();

      closeImportMenu();
      openMenu();
    }
    catch(err) {
      warn("Couldn't import configuration:", err);
      alert("The imported data is not a valid configuration");
    }
  });

  footerElem.appendChild(importBtnElem);

  //#SECTION finalize

  menuBodyElem.appendChild(textElem);
  menuBodyElem.appendChild(textAreaElem);
  menuBodyElem.appendChild(footerElem);

  menuContainer.appendChild(headerElem);
  menuContainer.appendChild(menuBodyElem);
  
  menuBgElem.appendChild(menuContainer);

  document.body.appendChild(menuBgElem);
}

/** Closes the import menu if it is open. If a bubbling event is passed, its propagation will be prevented. */
function closeImportMenu(evt?: MouseEvent | KeyboardEvent) {
  if(!isImportMenuOpen)
    return;
  isImportMenuOpen = false;
  evt?.bubbles && evt.stopPropagation();

  document.body.classList.remove("bytm-disable-scroll");
  const menuBg = document.querySelector<HTMLElement>("#bytm-import-menu-bg");

  const textAreaElem = document.querySelector<HTMLTextAreaElement>("#bytm-import-menu-textarea");
  if(textAreaElem)
    textAreaElem.value = "";

  if(!menuBg)
    return warn("Couldn't find import menu background element");

  menuBg.style.visibility = "hidden";
  menuBg.style.display = "none";
}

/** Opens the import menu if it is closed */
function openImportMenu() {
  if(isImportMenuOpen)
    return;
  isImportMenuOpen = true;

  document.body.classList.add("bytm-disable-scroll");
  const menuBg = document.querySelector<HTMLElement>("#bytm-import-menu-bg");

  if(!menuBg)
    return warn("Couldn't find import menu background element");

  menuBg.style.visibility = "visible";
  menuBg.style.display = "block";
}

//#MARKER changelog menu

let isChangelogMenuOpen = false;

/** TODO: Adds a changelog menu (hidden by default) */
async function addChangelogMenu() {
  const menuBgElem = document.createElement("div");
  menuBgElem.id = "bytm-changelog-menu-bg";
  menuBgElem.classList.add("bytm-menu-bg");
  menuBgElem.title = "Click here to close the menu";
  menuBgElem.style.visibility = "hidden";
  menuBgElem.style.display = "none";
  menuBgElem.addEventListener("click", (e) => {
    if(isChangelogMenuOpen && (e.target as HTMLElement)?.id === "bytm-changelog-menu-bg") {
      closeChangelogMenu(e);
      openMenu();
    }
  });
  document.body.addEventListener("keydown", (e) => {
    if(isChangelogMenuOpen && e.key === "Escape") {
      closeChangelogMenu(e);
      openMenu();
    }
  });

  const menuContainer = document.createElement("div");
  menuContainer.title = ""; // prevent bg title from propagating downwards
  menuContainer.classList.add("bytm-menu");
  menuContainer.id = "bytm-changelog-menu";

  //#SECTION title bar
  const headerElem = document.createElement("div");
  headerElem.classList.add("bytm-menu-header");

  const titleCont = document.createElement("div");
  titleCont.id = "bytm-menu-titlecont";
  titleCont.role = "heading";
  titleCont.ariaLevel = "1";

  const titleElem = document.createElement("h2");
  titleElem.id = "bytm-menu-title";
  titleElem.innerText = `${scriptInfo.name} - Changelog`;

  const closeElem = document.createElement("img");
  closeElem.classList.add("bytm-menu-close");
  closeElem.src = await getResourceUrl("close");
  closeElem.title = "Click to close the menu";
  closeElem.addEventListener("click", (e) => {
    closeImportMenu(e);
    openMenu();
  });

  titleCont.appendChild(titleElem);

  headerElem.appendChild(titleCont);
  headerElem.appendChild(closeElem);

  //#SECTION body

  const menuBodyElem = document.createElement("div");
  menuBodyElem.id = "bytm-changelog-menu-body";
  menuBodyElem.classList.add("bytm-menu-body");

  const textElem = document.createElement("div");
  textElem.id = "bytm-changelog-menu-text";
  textElem.innerHTML = changelogContent;

  //#SECTION finalize

  menuBodyElem.appendChild(textElem);

  menuContainer.appendChild(headerElem);
  menuContainer.appendChild(menuBodyElem);
  
  menuBgElem.appendChild(menuContainer);

  document.body.appendChild(menuBgElem);
}

/** Closes the changelog menu if it is open. If a bubbling event is passed, its propagation will be prevented. */
function closeChangelogMenu(evt?: MouseEvent | KeyboardEvent) {
  if(!isChangelogMenuOpen)
    return;
  isChangelogMenuOpen = false;
  evt?.bubbles && evt.stopPropagation();

  document.body.classList.remove("bytm-disable-scroll");
  const menuBg = document.querySelector<HTMLElement>("#bytm-changelog-menu-bg");

  if(!menuBg)
    return warn("Couldn't find changelog menu background element");

  menuBg.style.visibility = "hidden";
  menuBg.style.display = "none";
}

/** Opens the changelog menu if it is closed */
function openChangelogMenu() {
  if(isChangelogMenuOpen)
    return;
  isChangelogMenuOpen = true;

  document.body.classList.add("bytm-disable-scroll");
  const menuBg = document.querySelector<HTMLElement>("#bytm-changelog-menu-bg");

  if(!menuBg)
    return warn("Couldn't find changelog menu background element");

  menuBg.style.visibility = "visible";
  menuBg.style.display = "block";
}
