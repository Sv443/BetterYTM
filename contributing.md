## BetterYTM - Contributing Guide
Thank you for your interest in contributing to BetterYTM!  
This guide will help you get started with contributing to the project.  
If you have any questions or need help, feel free to contact me, [see my homepage](https://sv443.net/) for contact info.

<br>

- [Submitting translations](#submitting-translations)
  - [Adding translations for a new language](#adding-translations-for-a-new-language)
  - [Editing an existing translation](#editing-an-existing-translation)
- [Setting up the project for local development](#setting-up-the-project-for-local-development)
  - [Requirements](#requirements)
  - [CLI commands](#these-are-the-cli-commands-available-after-setting-up-the-project)
  - [Extras](#extras)
- [Developing a plugin that interfaces with BetterYTM](#developing-a-plugin-that-interfaces-with-betterytm)
  - [Shimming for TypeScript without errors & with autocomplete](#shimming-for-typescript-without-errors--with-autocomplete)
  - [Global functions and classes on the plugin interface](#global-functions-and-classes)

<br><br>

<!-- #region translations -->

### Submitting translations:
Thank you so much for your interest in translating BetterYTM!  
Before submitting a translation, please check on [this document](./assets/translations/README.md) if the language you want to translate to has already been translated and how many strings are still missing.

<br>

#### Adding translations for a new language:
To submit a translation, please follow these steps:  
1. Copy the contents of the default translation file [`assets/translations/en_US.json`](./assets/translations/en_US.json)
2. Replace the `en_US` part of the file name with the language code and locale code of the language you want to translate to
3. Translate the strings inside the file, while making sure not to change the keys on the left side of the colon and to preserve the placeholders with the format %n (where n is any number starting at 1).
4. If you like, you may also create a translation for the [`README-summary.md`](./README-summary.md) file for display on the userscript distribution sites  
  Please duplicate the file `README-summary.md` and call it `README-summary-languageCode_localeCode.md` and place it in the [`assets/translations/`](./assets/translations/) folder.
5. If you want to submit a pull request with the translated file:
    1. Duplicate the `en_US.json` file in the folder [`assets/translations/`](./assets/translations/) by keeping the format `languageCode_localeCode.json`
    2. Edit it to your translated version and keep the left side of the colon unchanged
    3. Create the mapping in `assets/locales.json` by copying the English one and editing it (please make sure it's alphabetically ordered)
    4. Add your name to the respective `authors` property in [`assets/locales.json`](./assets/locales.json)
    5. Test your changes by following [this section](#setting-up-the-project-for-local-development), then submit your pull request
6. Alternatively send it to me directly, [see my homepage](https://sv443.net/) for contact info  
  Make sure you also add your language to the contents of [`assets/locales.json`](./assets/locales.json)

<br>

#### Editing an existing translation:
To edit an existing translation, please follow these steps:
1. Set up the project for local development by following [this section](#setting-up-the-project-for-local-development)  
  Make sure you have forked the repository and cloned your fork instead of cloning the original repository.  
2. Find the file for the language you want to edit in the folder [`assets/translations/`](./assets/translations/)
3. Run the command `npm run tr-format -- -p -o=language_LOCALE`, where `language_LOCALE` is the part of the file name before the `.json` extension  
  This will prepare the file for translation by providing the missing keys once in English and once without any value and also formatting the file to have the same structure as the base file `en_US.json`
4. Edit the strings inside the file, while making sure not to change the keys on the left side of the colon and to preserve the placeholders with the format %n (where n is any number starting at 1).
5. Make sure there are no duplicate keys in the file
6. Run the command `npm run tr-format -- -o=language_LOCALE` to make sure the file is formatted correctly
7. Test for syntax errors and update translation progress with the command `npm run tr-progress`
8. Open the file [`assets/translations/README.md`](./assets/translations/README.md) to see if you're still missing any untranslated keys (you don't have to translate them all, but it would of course be nice)
9. I highly encourage you to test your changes to see if the wording fits into the respective context by following [this section](#setting-up-the-project-for-local-development)
10. Submit your pull request by [clicking here](https://github.com/Sv443/BetterYTM/compare/) and setting the `compare:` dropdown to your fork
11. Check that the CI checks just above the comment box pass and then wait for the pull request to be reviewed and merged

<br><br><br>

<!-- #region local dev -->

### Setting up the project for local development:
#### Requirements:
1. Have Node.js, npm and Git installed
2. Clone this repository (if you plan on contributing to the project, please [click here to fork it](https://github.com/Sv443/BetterYTM/fork) and clone your fork instead)
3. Switch to the `develop` branch by running `git checkout develop` in the project root.  
  Skip this step if you are using your own forked repository.
4. Open a terminal in the project root and run `npm i`
5. Copy the file `.env.template` to `.env` and modify the variables inside to your needs.
6. Now you can run `npm run dev` to build the userscript and host it on a development server or check out the other commands below

<br>

#### These are the CLI commands available after setting up the project:
- **`npm i`**  
  Run once to install dependencies
- **`npm run dev`**  
  This is the command you want to use to locally develop and test BetterYTM.  
  It watches for any changes, then rebuilds and serves the userscript on port 8710, so it can be updated live if set up correctly in the userscript manager (see [extras](#extras)).  
  Once it has finished building, a link will be printed to the console. Open it to install the userscript.  
  You can also configure request logging and more in `.env` and `src/tools/serve.ts`, just make sure to restart the dev server after changing anything.  
- **`npm run build-prod`**  
  Builds the userscript for production for all hosts with their respective options already set.  
  Outputs the files using a suffix predefined in the `package.json` file.  
  Use this to build the userscript for distribution on all host/CDN platforms.
- **`npm run build -- <arguments>`**  
  Builds the userscript with custom options  
  Arguments:  
  - `--config-mode=<value>` - The mode to build in. Can be either `production` or `development` (default)
  - `--config-branch=<value>` - The GitHub branch to target. Can be any branch name, but should be `main` for production and `develop` for development (default)
  - `--config-host=<value>` - The host to build for. Can be either `github` (default), `greasyfork` or `openuserjs`
  - `--config-assetSource=<value>` - Where to get the resource files from. Can be either `local` or `github` (default)
  - `--config-suffix=<value>` - Suffix to add just before the `.user.js` extension. Defaults to an empty string
    
  Shorthand commands:
  - `npm run build-prod-base` - Used for building for production, targets the main branch and the public asset source.  
    Sets `--config-mode=production` and `--config-branch=main` and `--config-assetSource=github`
  - `npm run build-preview` - Builds a preview version, targeting the develop branch and the public asset source so no local dev environment is needed.  
    Sets `--config-mode=development`, `--config-branch=develop` and `--config-assetSource=github`
- **`npm run lint`**  
  Builds the userscript with the TypeScript compiler and lints it with ESLint. Doesn't verify *all* of the functionality of the script, only syntax and TypeScript errors!
- **`npm run gen-readme`**  
  Updates the README files by inserting different parts of generated sections into them.
- **`npm run tr-progress`**  
  Checks all translation files for missing strings and updates the progress table in `assets/translations/README.md`
- **`npm run tr-format -- <arguments>`**  
  Reformats all translation files so they match that of the base file `en_US.json`  
  This includes sorting keys and adding the same empty lines and indentation.
  Arguments:  
  - `--prep` or `-p` - Prepares the files for translation via GitHub Copilot by providing the missing key once in English and once without any value
  - `--only="<value>"` or `-o="<value>"` - Only applies formatting to the files of the specified locales. Has to be a comma separated list (e.g. `-o="fr_FR,de_DE"`)
  - `--include-based` or `-b` - Also includes files which have a base locale specified
- **`npm run tr-prep`**  
  Shorthand for `npm run tr-format -- -p` (see above)
- **`npm run --silent invisible -- "<command>"`**  
  Runs the passed command as a detached child process without giving any console output. (`--` and double quotes are required!)  
  Remove `--silent` to see npm's info and error messages.
- **`npm run node-ts -- <path>`**  
  Runs the TypeScript file at the given path using the regular node binary and the node-ts loader.  
  Also enables source map support and disables experimental warnings.

> [!NOTE]
> 
> If there are a set of lone `--`, these denote the start of the arguments actually passed to the *script* process and must be preserved.  
> Any arguments before that will be interpreted by *npm*; see the difference in `npm run --silent invisible -- "echo hello"`  
> Here, `--silent` is an argument that makes npm shut up and `"echo hello"` is an argument we wanna pass to the script.

<br>

#### Extras:
When using ViolentMonkey, after letting the command `npm run dev` run in the background, open [`http://localhost:8710/BetterYTM.user.js`](http://localhost:8710/BetterYTM.user.js) and select the `Track local file` option.  
This makes it so the userscript automatically updates when the code changes.  
Note: the tab needs to stay open on Firefox or the script will not update itself.

<br><br><br>

<!-- #region plugin interface -->

### Developing a plugin that interfaces with BetterYTM:
BetterYTM has a built-in interface based on events and exposed global constants and functions that allows other userscripts to benefit from its features.  
If you want your plugin to be displayed in the readme and possibly inside the userscript itself, please [submit an issue using the plugin submission template](https://github.com/Sv443/BetterYTM/issues/new/choose)  
  
These are the ways to interact with BetterYTM; constants, events and global functions:  
- Static interaction is done through constants that are exposed through the global `BYTM` object, which is available on the `window` object.  
  These read-only properties tell you more about how BetterYTM is currently being run.  
  You can find all properties that are available and their types in the `declare global` block of [`src/types.ts`](src/types.ts)

- Dynamic interaction is done through events that are dispatched on the `window` object.  
  They all have the prefix `bytm:eventName` and are all dispatched with the `CustomEvent` interface, meaning their data can be read using the `detail` property.  
  You can find all events that are available and their types in [`src/interface.ts`](src/interface.ts)  
    
  Additionally BetterYTM has an internal system called SiteEvents. They are dispatched using the format `bytm:siteEvent:eventName`  
  You may find all SiteEvents that are available and their types in [`src/siteEvents.ts`](src/siteEvents.ts)  
  Note that the `detail` property will be an array of the arguments that can be found in the event handler at the top of [`src/siteEvents.ts`](src/siteEvents.ts)

- Another way of dynamically interacting is through global functions, which are also exposed by BetterYTM through the global `BYTM` object.  
  You can find all functions that are available in the `InterfaceFunctions` type in [`src/types.ts`](src/types.ts)  
  There is also a summary with examples [below.](#global-functions)  
  Additionally to those functions, the namespace `BYTM.UserUtils` is also exposed, which contains all exported members from the [UserUtils library.](https://github.com/Sv443-Network/UserUtils)

All of these interactions require the use of `unsafeWindow`, as the regular window object is pretty sandboxed in userscript managers.  
  
If you need specific events to be added or modified, please [submit an issue.](https://github.com/Sv443/BetterYTM/issues/new/choose)

<br>

<details><summary><b>Static interaction Example <i>(click to expand)</i></b></summary>

#### Example:
```ts
const BYTM = unsafeWindow.BYTM;

console.log(`BetterYTM was built in '${BYTM.mode}' mode`);
console.log(`BetterYTM's locale is set to '${BYTM.locale}'`);
console.log(`BetterYTM's version is '${BYTM.version} #${BYTM.buildNumber}'`);
```

</details>

<br>

<details><summary><b>Dynamic interaction examples <i>(click to expand)</i></b></summary>

#### Basic format:
```ts
window.addEventListener("bytm:eventName", (event) => {
  // can have any type, but usually it's an object or undefined
  const { detail } = event as CustomEvent<{ foo: string }>;

  console.log(detail.foo);
});

// for listening to SiteEvents:
window.addEventListener("bytm:siteEvent:eventName", (event) => {
  // always typed as array / tuple
  const { detail } = event as CustomEvent<[ foo: HTMLElement ]>;

  console.log(detail[0]);
});
```

#### Practical Example:
```ts
// listening to generic events:
window.addEventListener("bytm:ready", () => {
  console.log("The DOM is loaded and all BetterYTM features have been initialized");
});

window.addEventListener("bytm:lyricsLoaded", (event) => {
  const { detail } = event as CustomEvent<{ type: "current" | "queue", artists: string, title: string, url: string }>;

  console.log(`Lyrics URL for "${detail.artists} - ${detail.title}" has been loaded: ${detail.url}`);

  if(detail.type === "current")
    console.log("This is from the currently playing song");
  else
    console.log("This is from a song in the queue");
});

// listening to a SiteEvent:
window.addEventListener("bytm:siteEvent:queueChanged", (event) => {
  const { detail } = event as CustomEvent<[ queueItem: HTMLElement ]>;

  console.log(`The queue has been changed. It now contains ${detail[0].childNodes.length} items`);
});
```

</details>

<br>

**For global function examples [see below.](#global-functions)**

<br><br>

### Shimming for TypeScript without errors & with autocomplete:
In order for TypeScript to not throw errors while creating a plugin, you need to shim the types for BYTM.  
To do this, create a .d.ts file (for example `bytm.d.ts`) and add the following code:
```ts
declare global {
  interface Window {
    BYTM: {
      // add types here
    };
  }
}
```
You may specify all types that you need in this file.  
To find which types BetterYTM exposes, check out the `declare global` block in [`src/types.ts`](src/types.ts)  
You may also just copy it entirely, as long as all the imports also exist in your project.  
An easy way to do this might be to include BetterYTM as a Git submodule, as long as you ***stick to only using type imports***


<br><br>

<!-- #region global interface functions -->

### Global functions and classes:
These are the global functions and classes that are exposed by BetterYTM through the `unsafeWindow.BYTM` object.  
The usage and example blocks on each are written in TypeScript but can be used in JavaScript as well, after removing all type annotations.  
  
- Meta:
  - [registerPlugin()](#registerplugin) - Registers a plugin with BetterYTM with the given plugin definition object
  - [getPluginInfo()](#getplugininfo) - Returns the plugin info object for the specified plugin - also used to check if a certain plugin is registered
- BYTM-specific:
  - [getResourceUrl()](#getresourceurl) - Returns a `blob:` URL provided by the local userscript extension for the specified BYTM resource file
  - [getSessionId()](#getsessionid) - Returns the unique session ID that is generated on every started session
- DOM:
  - [BytmDialog](#bytmdialog) - A class for creating and managing dialogs
  - [addSelectorListener()](#addselectorlistener) - Adds a listener that checks for changes in DOM elements matching a CSS selector
  - [onInteraction()](#oninteraction) - Adds accessible event listeners to the specified element for button or link-like keyboard and mouse interactions
  - [getVideoTime()](#getvideotime) - Returns the current video time (on both YT and YTM)
  - [getThumbnailUrl()](#getthumbnailurl) - Returns the URL to the thumbnail of the currently playing video
  - [getBestThumbnailUrl()](#getbestthumbnailurl) - Returns the URL to the best quality thumbnail of the currently playing video
  - [createHotkeyInput()](#createhotkeyinput) - Creates a hotkey input element
  - [createToggleInput()](#createtoggleinput) - Creates a toggle input element
  - [createCircularBtn()](#createcircularbtn) - Creates a generic, circular button element
- Translations:
  - [setLocale()](#setlocale) - Sets the locale for BetterYTM
  - [getLocale()](#getlocale) - Returns the currently set locale
  - [hasKey()](#haskey) - Checks if the specified translation key exists in the currently set locale
  - [hasKeyFor()](#haskeyfor) - Checks if the specified translation key exists in the specified locale
  - [t()](#t) - Translates the specified translation key using the currently set locale
  - [tp()](#tp) - Translates the specified translation key including pluralization using the currently set locale
- Feature config:
  - [getFeatures()](#getfeatures) - Returns the current BYTM feature configuration object
  - [saveFeatures()](#savefeatures) - Overwrites the current BYTM feature configuration object with the provided one
- Lyrics:
  - [fetchLyricsUrlTop()](#fetchlyricsurltop) - Fetches the URL to the lyrics page for the specified song
  - [getLyricsCacheEntry()](#getlyricscacheentry) - Tries to find a URL entry in the in-memory cache for the specified song
  - [sanitizeArtists()](#sanitizeartists) - Sanitizes the specified artist string to be used in fetching a lyrics URL
  - [sanitizeSong()](#sanitizesong) - Sanitizes the specified song title string to be used in fetching a lyrics URL
- Other:
  - [NanoEmitter](#nanoemitter) - Abstract class for creating lightweight, type safe event emitting classes
  - [compareVersions()](#compareversions) - Crudely compares two semver version strings and returns which one is newer
  - [compareVersionArrays()](#compareversionarrays) - Crudely compares two semver version number arrays and returns which one is newer

<br><br>

> #### registerPlugin()
> Usage:
> ```ts
> unsafeWindow.BYTM.registerPlugin(pluginDef: PluginDef): PluginRegisterResult
> ```
>   
> Description:  
> Registers a plugin with BetterYTM with the given plugin definition object.  
>   
> Arguments:  
> - `pluginDef` - The properties of this plugin definition object can be found by searching for `type PluginDef` in the file [`src/types.ts`](./src/types.ts)  
>   
> The function will either throw an error if the plugin object is invalid or return a registration result object.  
> Its type can be found by searching for `type PluginRegisterResult` in the file [`src/types.ts`](./src/types.ts)  
>   
> The returned properties include:  
> - `token` - A private token that is used for authenticated function calls and that **should not be persistently stored** beyond the current session
> - `events` - A nano-events emitter object that allows you to listen for events that are dispatched by BetterYTM  
>   To find a list of all events, search for `PluginEventMap` in the file [`src/types.ts`](./src/types.ts)
> - `info` - The info object that contains all data other plugins will be able to see about your plugin
> 
> <details><summary><b>Complete example <i>(click to expand)</i></b></summary>
> 
> ```ts
> // all properties are optional unless stated otherwise
> // search for "type PluginDef" in "src/types.ts" to see the whole type
> const pluginDef = {
>   plugin: {
>     name: "My cool plugin",                           // required
>     namespace: "https://github.com/MyUsername",       // required
>     version: [4, 2, 0],                               // required
>     description: {                                    // required
>       en_US: "This plugin does cool stuff",           // required
>       de_DE: "Dieses Plugin macht coole Sachen",
>       // see all supported locale codes in "assets/locales.json"
>     },
>     iconUrl: "https://picsum.photos/128/128",
>     homepage: {
>       other: "https://example.org/MyCoolBYTMPlugin",
>       source: "https://github.com/MyUsername/MyCoolBYTMPlugin",
>       greasyfork: "...",
>       openuserjs: "...",
>     },
>   },
>   // the intents (permissions) the plugin needs to be granted
>   // search for "enum PluginIntent" in "src/types.ts" to see all available intent values
>   intents: [ 2, 16 ],
>   contributors: [
>     {
>       name: "MyUsername", // required
>       homepage: "https://github.com/MyUsername",
>       email: "somedude420@hotmail.co.bd",
>     },
>     {
>       name: "SomeOtherGuy", // required
>       homepage: "https://github.com/SomeOtherGuy",
>       email: "someotherguy@star-co.net.kp",
>     },
>   ],
> };
> 
> // private token that should not be stored persistently (in memory like this should be enough)
> let authToken: string | undefined;
> 
> // since some function calls require the token, this function can be called to get it once the plugin is fully registered
> export function getToken() {
>   return authToken;
> }
> 
> unsafeWindow.addEventListener("bytm:initPlugins", () => {
>   // register the plugin
>   const { token, events } = unsafeWindow.BYTM.registerPlugin(pluginDef);
>   // listen for the pluginRegistered event
>   events.on("pluginRegistered", (info) => {
>     // store the (private!) token for later use in authenticated function calls
>     authToken = token;
>     console.log(`${info.name} (version ${info.version.join(".")}) is registered`);
>   });
>   // for other events search for "type PluginEventMap" in "src/types.ts"
> });
> ```
> </details>

<br>

> #### getPluginInfo()
> Usage:  
> ```ts
> unsafeWindow.BYTM.getPluginInfo(token: string | undefined, name: string, namespace: string): PluginInfo | undefined
> unsafeWindow.BYTM.getPluginInfo(token: string | undefined, pluginDef: { plugin: { name: string, namespace: string } }): PluginInfo | undefined
> ```
>   
> Description:  
> Returns the plugin info object for the specified plugin. It's basically a more restricted version of the plugin definition object.  
> This object contains all information that other plugins will be able to see about your plugin.  
>   
> Arguments:
> - `token` - The private token that was returned when the plugin was registered (if not provided, the function will always return `undefined`)
> - `name` - The 'name' property of the plugin
> - `namespace` - The 'namespace' property of the plugin
> OR:
> - `pluginDef` - A plugin definition object containing at least the `plugin.name` and `plugin.namespace` properties
>   
> The function will return `undefined` if the plugin is not registered.  
> The type of the returned object can be found by searching for `type PluginInfo` in the file [`src/types.ts`](./src/types.ts)
> 
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> unsafeWindow.addEventListener("bytm:pluginsRegistered", () => {
>   const pluginInfo = unsafeWindow.BYTM.getPluginInfo("My cool plugin", "https://github.com/MyUsername");
>   if(pluginInfo) {
>     console.log(`The plugin '${pluginInfo.name}' with version '${pluginInfo.version.join(".")}' is loaded`);
>   }
>   else
>     console.error("The plugin 'My cool plugin' is not registered");
> });
> ```
> </details>

<br>

> #### getResourceUrl()
> Usage:  
> ```ts
> unsafeWindow.BYTM.getResourceUrl(): Promise<string>
> ```
>   
> Description:  
> Returns a `blob:` URL for the specified BYTM resource file.  
> You can find a list of them by looking at the `@resource` directives in the userscript header or in the files `assets/resources.json` and `src/tools/post-build.ts`  
> The resource and its URL are provided by the userscript extension and it is locally cached for quicker fetching.  
>   
> Should a resource not be defined, the function will return the equivalent URL from the GitHub repository instead.  
> Should that also fail, it will try to return a base64-encoded `data:` URI version of the resource.  
>   
> Arguments:  
> - `resourceName` - The name of the resource to get the URL for.
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> const deleteButtonImg = document.createElement("img");
> deleteButtonImg.src = await unsafeWindow.BYTM.getResourceUrl("delete");
> 
> myElement.appendChild(deleteButtonImg);
> ```
> </details>

<br>

> #### getSessionId()
> Usage:  
> ```ts
> unsafeWindow.BYTM.getSessionId(): string | null
> ```
>   
> Description:  
> Returns the unique session ID that is generated on every page load.  
> It should persist between history navigations, but not between page reloads.  
>  
> ⚠️ On privacy-focused browsers or if cookies are disabled, this function will return null since sessionStorage is not available.
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> const sessionId = unsafeWindow.BYTM.getSessionId();
> 
> if(await GM.getValue("_myPlugin-sesId") !== sessionId) {
>   console.log("New session started");
>   // do something that should only be done once per session
>   // or store values persistently that should be unique per session:
>   await GM.setValue("_myPlugin-sesId", sessionId);
> }
> ```
> </details>

<br>

> #### addSelectorListener()
> Usage:  
> ```ts
> unsafeWindow.BYTM.addSelectorListener<TElem extends Element>(observerName: ObserverName, selector: string, options: SelectorListenerOptions<TElem>): void
> ```
>   
> Description:  
> Adds a listener to the specified SelectorObserver instance that gets called when the element(s) behind the passed selector change.  
> These instances are created by BetterYTM to observe the DOM for changes.  
> See the [UserUtils SelectorObserver documentation](https://github.com/Sv443-Network/UserUtils#selectorobserver) for more info.  
>   
> Arguments:  
> - `observerName` - The name of the SelectorObserver instance to add the listener to. You can find all available instances and which parent element they observe in the file [`src/observers.ts`](src/observers.ts).
> - `selector` - The CSS selector to observe for changes.
> - `options` - The options for the listener. See the [UserUtils SelectorObserver documentation](https://github.com/Sv443-Network/UserUtils#selectorobserver)
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> // wait for the observers to exist
> unsafeWindow.addEventListener("bytm:observersReady", () => {
>   // use the "lowest" possible SelectorObserver (playerBar)
>   // and check if the lyrics button gets added or removed
>   unsafeWindow.BYTM.addSelectorListener("playerBar", "#betterytm-lyrics-button", {
>     listener: (elem) => {
>       console.log("The BYTM lyrics button changed");
>     },
>   });
> });
> ```
> </details>

<br>

> #### onInteraction()
> Usage:
> ```ts
> unsafeWindow.BYTM.onInteraction(
>   element: HTMLElement,
>   callback: (event: MouseEvent | KeyboardEvent) => void,
>   listenerOptions?: AddEventListenerOptions
> ): void
> ```
>
> Description:  
> Adds accessible event listeners to the specified element for button or link-like keyboard and mouse interactions.  
> All events passed to the callback function automatically have the default behavior prevented and stop immediate propagation, meaning no other listener of the same type will be called.  
> For keyboard events this only happens as long as the captured key is a valid interaction key (Space, Enter).  
>   
> Arguments:
> - `element` - The element to add the listeners to
> - `callback` - The function to call when the element is interacted with
> - `listenerOptions` - Optional event listener options (same as the third argument of `addEventListener`, shared between the keyboard and mouse event listeners)
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> const myButton = document.querySelector("button#myButton");
> 
> unsafeWindow.BYTM.onInteraction(myButton, (event) => {
>   if(event instanceof MouseEvent)
>     console.log("The button was clicked");
>   else if(event instanceof KeyboardEvent)
>     console.log("The button was activated with the keyboard (Space / Enter)");
> }, {
>   // if `once` is set, when either the mouse or keyboard event are triggered once,
>   // the other listener is automatically removed as well to prevent double triggering
>   once: true,
>   // you can pass `capture` to listen in the capture phase (helpful for triggering before other listeners),
>   // or an AbortController's `signal` to be able to abort the listener
> });
> ```
> </details>

<br>

> #### getVideoTime()
> Usage:  
> ```ts
> unsafeWindow.BYTM.getVideoTime(precision?: number): Promise<number | null>
> ```
>   
> Description:  
> Returns the current video time in seconds, with the given `precision` (2 decimal digits by default).  
> Rounds down if the precision is set to 0. The maximum average available precision on YTM is 6.  
>   
> In case the time can't be determined on YT, mouse movement is simulated to bring up the video time element and read it.  
> In order for that edge case not to throw an error, the function would need to be called in response to a user interaction event (e.g. click) due to the strict automated interaction policy in browsers, otherwise an error can be thrown.  
> Resolves with a number of seconds or `null` if the time couldn't be determined.  
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> try {
>   // get the video time with 3 decimal digits
>   const videoTime = await unsafeWindow.BYTM.getVideoTime(3);
>   console.log(`The video time is ${videoTime}s`);
> }
> catch(err) {
>   console.error("Couldn't get the video time, probably due to automated interaction restrictions");
> }
> ```
> </details>

<br>

> #### getThumbnailUrl()
> Usage:
> ```ts
> unsafeWindow.BYTM.getThumbnailUrl(
>   watchID: string,
>   qualityOrIndex: "maxresdefault" | "sddefault" | "hqdefault" | "mqdefault" | "default" | 0 | 1 | 2 | 3
> ): string
> ```
>   
> Description:  
> Returns the URL to the thumbnail of the video with the specified watch/video ID and quality.  
> If a number is passed, 0 will return a low quality thumbnail and 1-3 will return a low quality frame from the video.  
>   
> Arguments:
> - `watchID` - The watch/video ID of the video to get the thumbnail for
> - `qualityOrIndex` - The quality or index of the thumbnail to get. Quality strings sorted highest resolution first: `maxresdefault` > `sddefault` > `hqdefault` > `mqdefault` > `default`. If no quality is specified, `maxresdefault` (highest resolution) is used.
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> const thumbnailUrl = unsafeWindow.BYTM.getThumbnailUrl("dQw4w9WgXcQ", "maxresdefault");
> console.log(thumbnailUrl); // "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
> ```
> </details>

<br>

> #### getBestThumbnailUrl()
> Usage:
> ```ts
> unsafeWindow.BYTM.getBestThumbnailUrl(watchID: string): Promise<string | undefined>
> ```
>   
> Description:  
> Returns the URL to the best quality thumbnail of the video with the specified watch/video ID.  
> Will sequentially try to get the highest quality thumbnail available until one is found.  
> Order of quality values tried: `maxresdefault` > `sddefault` > `hqdefault` > `0`  
>   
> If no thumbnail is found, the Promise will resolve with `undefined`  
>   
> Arguments:
> - `watchID` - The watch/video ID of the video to get the thumbnail for
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> const thumbnailUrl = await unsafeWindow.BYTM.getBestThumbnailUrl("dQw4w9WgXcQ");
> console.log(thumbnailUrl); // "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
> ```
> </details>

<br>

> #### setLocale()
> Usage:  
> ```ts
> unsafeWindow.BYTM.setLocale(token: string | undefined, locale: string): void
> ```
>   
> Description:  
> Sets the locale for BetterYTM's translations.  
> The new locale is used for all translations *after* this function is called.  
>   
> Arguments:  
> - `token` - The private token that was returned when the plugin was registered (if not provided, the function will do nothing).
> - `locale` - The locale to set. Refer to the file [`assets/locales.json`](assets/locales.json) for a list of available locales.
> 
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> unsafeWindow.BYTM.setLocale(myToken, "en_UK");
> ```
> </details>

<br>

> #### getLocale()
> Usage:  
> ```ts
> unsafeWindow.BYTM.getLocale(): string
> ```
>   
> Description:  
> Returns the currently set locale.  
> 
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> unsafeWindow.BYTM.getLocale(); // "en_US"
> 
> unsafeWindow.BYTM.setLocale("en_UK");
> 
> unsafeWindow.BYTM.getLocale(); // "en_UK"
> ```
> </details>

<br>

> #### hasKey()
> Usage:  
> ```ts
> unsafeWindow.BYTM.hasKey(key: string): boolean
> ```
>   
> Description:  
> Returns true if the specified translation key exists in the currently set locale.  
>   
> Arguments:  
> - `key` - The key of the translation to check for.
> 
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> unsafeWindow.BYTM.hasKey("lyrics_rate_limited"); // true
> unsafeWindow.BYTM.hasKey("some_key_that_doesnt_exist"); // false
> ```
> </details>

<br>

> #### hasKeyFor()
> Usage:  
> ```ts
> unsafeWindow.BYTM.hasKeyFor(locale: string, key: string): boolean
> ```
>   
> Description:  
> Returns true if the specified translation key exists in the specified locale.  
>   
> Arguments:  
> - `locale` - The locale to check for the translation key in.
> - `key` - The key of the translation to check for.
> 
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> unsafeWindow.BYTM.hasKeyFor("en_UK", "lyrics_rate_limited"); // true
> unsafeWindow.BYTM.hasKeyFor("en_UK", "some_key_that_doesnt_exist"); // false
> ```
> </details>

<br>

> #### t()
> Usage:  
> ```ts
> unsafeWindow.BYTM.t(key: TFuncKey, ...values: Stringifiable[]): string
> ```
>   
> Description:  
> Returns the translation for the provided translation key and currently set locale.  
> To see a list of translations, check the file [`assets/translations/en_US.json`](assets/translations/en_US.json)  
>   
> Arguments:  
> - `translationKey` - The key of the translation to get.
> - `...values` - A spread parameter of values that can be converted to strings to replace the numbered placeholders in the translation with.
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> const customConfigMenuTitle = document.createElement("div");
> customConfigMenuTitle.textContent = unsafeWindow.BYTM.t("config_menu_title", "My cool BYTM Plugin");
> // translated text: "My cool BYTM Plugin - Configuration" (if locale is en_US or en_UK)
> ```
> </details>

<br>

> #### tp()
> Usage:  
> ```ts
> unsafeWindow.BYTM.tp(key: TFuncKey, num: number | unknown[] | NodeList, ...values: Stringifiable[]): string
> ```
>   
> Description:  
> Returns the translation for the provided translation key, including pluralization identifier and currently set locale.  
> To see a list of translations, check the file [`assets/translations/en_US.json`](assets/translations/en_US.json)  
>   
> The pluralization identifier is determined by the number of items in the second argument.  
> It can be either "1" or "n" and will be appended to the translation key separated by a hyphen.  
>   
> Arguments:  
> - `translationKey` - The key of the translation to get.
> - `num` - The number of items to determine the pluralization identifier from. Can also be an array or NodeList.
> - `...values` - A spread parameter of values that can be converted to strings to replace the numbered placeholders in the translation with.
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> try {
>   const lyrics = await unsafeWindow.BYTM.fetchLyricsUrl("Michael Jackson", "Thriller");
> }
> catch(err) {
>   if(err instanceof Error && err.status === 429) {
>     // rate limited
>     const retryAfter = err.response.headers["retry-after"];
>     const retryAfterSeconds = retryAfter ? parseInt(retryAfter) : 60;
>     const errorText = unsafeWindow.BYTM.tp("lyrics_rate_limited", retryAfterSeconds);
>     // translation key: "lyrics_rate_limited-n"
>     // translated text: "You are being rate limited.\nPlease wait 23 seconds before requesting more lyrics."
>     alert(errorText);
>   }
> }
> ```
> </details>

<br>

> #### getFeatures()
> Usage:  
> ```ts
> unsafeWindow.BYTM.getFeatures(): FeatureConfig
> ```
>   
> Description:  
> Returns the current feature configuration object synchronously from memory.  
> To see the structure of the object, check out the type `FeatureConfig` in the file [`src/types.ts`](src/types.ts)  
> If features are set to be hidden using `valueHidden: true`, their value will always be `undefined` in the returned object.  
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> const features = unsafeWindow.BYTM.getFeatures();
> console.log(`The volume slider step is currently set to ${features.volumeSliderStep}`);
> ```
> </details>

<br>

> #### saveFeatures()
> Usage:  
> ```ts
> unsafeWindow.BYTM.saveFeatures(token: string | undefined, config: FeatureConfig): Promise<void>
> ```
>   
> Description:  
> Overwrites the current feature configuration object with the provided one.  
> The object in memory is updated synchronously, while the one in GM storage is updated asynchronously once the Promise resolves.  
>   
> Arguments:  
> - `token` - The private token that was returned when the plugin was registered (if not provided, the function will do nothing).
> - `config` - The full config object to save. If properties are missing, BYTM will break!  
>   To see the structure of the object, check out the type `FeatureConfig` in the file [`src/types.ts`](src/types.ts)  
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> async function updateVolSliderStep() {
>   const oldConfig = unsafeWindow.BYTM.getFeatures();
>   const newConfig = { ...oldConfig, volumeSliderStep: 1 };
> 
>   const promise = unsafeWindow.BYTM.saveFeatures(myToken, newConfig);
>   // new config is now saved in memory, but not yet in GM storage
>   // so this already returns the updated config:
>   console.log(unsafeWindow.BYTM.getFeatures());
> 
>   await promise;
>   // now the data is saved persistently in GM storage and the page can
>   // safely be reloaded without losing the updated config data
> }
> 
> updateVolSliderStep();
> ```
> </details>

<br>

> #### fetchLyricsUrlTop()
> Usage:
> ```ts
> unsafeWindow.BYTM.fetchLyricsUrlTop(artist: string, song: string): Promise<string | undefined>
> ```
>   
> Description:  
> Fetches the top result's URL to the lyrics page for the specified song.  
> If there is already an entry in the in-memory cache for the song, it will be returned without fetching anything new.  
> URLs that are returned by this function are added to the cache automatically.  
> Returns undefined if there was an error while fetching the URL.  
>   
> Arguments:  
> - `artist` - The main artist of the song to fetch the lyrics URL for.  
>   The value needs to be sanitized with [`sanitizeArtists()`](#sanitizeartists) before being passed to this function.
> - `song` - The title of the song to fetch the lyrics URL for.  
>   The value needs to be sanitized with [`sanitizeSong()`](#sanitizesong) before being passed to this function.
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> async function getLyricsUrl() {
>   const lyricsUrl = await unsafeWindow.BYTM.fetchLyricsUrlTop("Michael Jackson", "Thriller");
> 
>   if(lyricsUrl)
>     console.log(`The lyrics URL for Michael Jackson's Thriller is '${lyricsUrl}'`);
>   else
>     console.log("Couldn't find the lyrics URL for this song");
> }
> 
> getLyricsUrl();
> ```
> </details>

<br>

> #### getLyricsCacheEntry()
> Usage:
> ```ts
> unsafeWindow.BYTM.getLyricsCacheEntry(artists: string, song: string): LyricsCacheEntry | undefined
> ```
>   
> Description:  
> Tries to find an entry in the in-memory cache for the specified song.  
> You can find the structure of the `LyricsCacheEntry` type in the file [`src/types.ts`](src/types.ts)  
> Contrary to [`fetchLyricsUrlTop()`](#fetchlyricsurltop), this function does not fetch anything new if there is no entry in the cache.  
>   
> Arguments:  
> - `artist` - The main artist of the song to grab the lyrics URL for.  
>   The value needs to be sanitized with [`sanitizeArtists()`](#sanitizeartists) before being passed to this function.
> - `song` - The title of the song to grab the lyrics URL for.  
>   The value needs to be sanitized with [`sanitizeSong()`](#sanitizesong) before being passed to this function.
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> function tryToGetLyricsUrl() {
>   const lyricsEntry = unsafeWindow.BYTM.getLyricsCacheEntry("Michael Jackson", "Thriller");
> 
>   if(lyricsEntry)
>     console.log(`The lyrics URL for Michael Jackson's Thriller is '${lyricsEntry.url}'`);
>   else
>     console.log("Couldn't find the lyrics URL for this song in cache");
> }
> 
> tryToGetLyricsUrl();
> ```
> </details>

<br>

> #### sanitizeArtists()
> Usage:
> ```ts
> unsafeWindow.BYTM.sanitizeArtists(artists: string): string
> ```
>   
> Description:  
> Sanitizes the specified artist string to be used in fetching a lyrics URL.  
> This tries to strip out special characters and co-artist names, separated by a comma or ampersand.  
> Returns (hopefully) a single artist name with leading and trailing whitespaces trimmed.  
>   
> Arguments:  
> - `artists` - The string of artist name(s) to sanitize.
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> // usually artist strings will only have one of these characters but this is just an example
> const sanitizedArtists = unsafeWindow.BYTM.sanitizeArtists(" Michael Jackson    • Paul McCartney & Freddy Mercury, Frank Sinatra");
> console.log(sanitizedArtists); // "Michael Jackson"
> ```
> </details>

<br>

> #### sanitizeSong()
> Usage:
> ```ts
> unsafeWindow.BYTM.sanitizeSong(songName: string): string
> ```
>   
> Description:  
> Sanitizes the specified song title string to be used in fetching a lyrics URL.  
> This tries to strip out special characters and everything inside regular and square parentheses like `(Foo Remix)`.  
> Returns (hopefully) a song title with leading and trailing whitespaces trimmed.  
>   
> Arguments:  
> - `songName` - The string of the song title to sanitize.
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> const sanitizedSong = unsafeWindow.BYTM.sanitizeSong(" Thriller (Freddy Mercury Cover) [Tommy Cash Remix]");
> console.log(sanitizedSong); // "Thriller"
> ```
> </details>

<br>

> #### NanoEmitter
> Usage:  
> ```ts
> new unsafeWindow.BYTM.NanoEmitter<TEventMap>(settings: NanoEmitterSettings): NanoEmitter
> ```
>   
> Abstract class that can be extended to create custom event emitting classes.  
> The methods are fully typed through the generic `TEventMap`, which is an object map of event names to a callback function signature (the type is `Record<string, (...args: any) => void>`)  
> 
> <br>
> 
> Settings properties:  
> | Property | Description |
> | :--- | :--- |
> | `publicEmit?: boolean` | If set to true, allows emitting events through the public method `emit()`<br>If false, the only way to emit events is inside your derived class using `this.events.emit()` |
> 
> <br>
> 
> Methods:
> - `on(event: string, callback: Function<any>): Function`  
>   Registers a callback for the specified event.  
>   Returns a function that can be called to unsubscribe from the event at any time.
> - `once(event: string, callback?: Function<any>): Promise<any[]>`  
>   Registers a callback for the specified event that gets called only once.  
>   The callback is called and the Promise is resolved at the same time.
> - `emit(event: string, ...args: any[]): boolean`  
>   Emits the specified event with the passed arguments.  
>   Has to be enabled through the `publicEmit` option in the constructor first!  
>   Returns true if the event was emitted successfully, false if not.
> - `unsubscribeAll(): void`  
>   Unsubscribes all listeners from all events and clears the internal listener map.
> 
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> interface MyEvents {
>   /** Emitted when the foo is bar */
>   foo: (bar: string) => void;
> }
> 
> class MyEmitter extends unsafeWindow.BYTM.NanoEmitter<MyEvents> {
>   constructor() {
>     // allow calling emit() from outside this class instance
>     super({ publicEmit: true });
>   }
> 
>   public doSomething() {
>     this.emit("foo", "baz");
>   }
> }
> 
> function run() {
>   const emitter = new MyEmitter();
> 
>   emitter.on("foo", (bar) => {
>     //                ^ automatically typed as string
>     console.log(`The bar is ${bar}`);
>   });
> 
>   // will log "The bar is baz" to the console, see above
>   emitter.doSomething();
> }
> 
> run();
> ```
> </details>

<br>

> #### BytmDialog
> Usage:  
> ```ts
> new unsafeWindow.BYTM.BytmDialog(options: BytmDialogOptions): BytmDialog
> ```
>   
> A class that can be used to create and manage a dialog with a fully customizable header, body and footer.  
>   
> Features:
> - Can be opened, closed, mounted, unmounted and destroyed at any time for full control.
> - The dialog is fully responsive and can be used on any screen size, but will not exceed the provided maximum width and height.
> - Scrollability of the body is automatically removed and the body is set to be inert (ignore keyboard input) automatically. Also works with multiple dialogs open at the same time!
> - The dialog can be closed by clicking the background, pressing the escape key or clicking the close button (freely configurable).
> - Features many helper methods and events to make it more flexible and easier to work with.
> - Has an optional small mode for a more compact appearance.
> - If needed, the relatively uniform CSS naming conventions make it easy for the appearance to be overridden by a BetterYTM plugin or userstyle.
>   
> Options properties:
> | Property | Description |
> | :-- | :-- |
> | `id: string` | ID that gets added to child element IDs - has to be unique and conform to HTML ID naming rules! |
> | `maxWidth: number` | Maximum width of the dialog in pixels |
> | `maxHeight: number` | Maximum height of the dialog in pixels |
> | `closeOnBgClick?: boolean` | Whether the dialog should close when the background is clicked - defaults to true |
> | `closeOnEscPress?: boolean` | Whether the dialog should close when the escape key is pressed - defaults to true |
> | `closeBtnEnabled?: boolean` | Whether the close button should be enabled - defaults to true |
> | `destroyOnClose?: boolean` | Whether the dialog should be destroyed when it's closed - defaults to false |
> | `small?: boolean` | Whether the menu should have a smaller overall appearance - defaults to false |
> | `renderBody: () => HTMLElement │ Promise<HTMLElement>` | Called to render the body of the dialog |
> | `renderHeader?: () => HTMLElement │ Promise<HTMLElement>` | Called to render the header of the dialog - leave undefined for a blank header |
> | `renderFooter?: () => HTMLElement │ Promise<HTMLElement>` | Called to render the footer of the dialog - leave undefined for no footer |
> 
> <br>
> 
> Methods:  
> The methods from the [`NanoEmitter`](#nanoemitter) class are also available here.  
> These are the additional methods that are exclusive to the `BytmDialog` class:  
> - `open(e?: MouseEvent | KeyboardEvent): Promise<void>`  
>   Opens the dialog - also mounts it if it hasn't been mounted yet.  
>   Prevents default action and immediate propagation if an event is passed.  
>   Resolves once the dialog is fully mounted and opened.
> - `close(e?: MouseEvent | KeyboardEvent): void`  
>   Closes the dialog - also unmounts and destroys it if the `destroyOnClose` option is set to true.  
>   Prevents default action and immediate propagation if an event is passed.  
> - `isOpen(): boolean`  
>   Returns true if the dialog is currently open, false if not.
> - `isMounted(): boolean`  
>   Returns true if the dialog is currently mounted, false if not.
> - `mount(): Promise<void>`  
>   Mounts the dialog to the DOM without making it visible - can be called before opening the dialog for the first time to pre-load all elements.  
>   Resolves once the dialog is fully mounted in the DOM.
> - `unmount(): void`  
>   Removes the dialog from the DOM.  
> - `remount(): Promise<void>`  
>   Unmounts and mounts the dialog again.  
>   This can be used to re-render the dialog's contents with new information.  
>   Resolves once the dialog is fully mounted in the DOM.
> - `destroy(): void`  
>   Unmounts and removes the dialog from the DOM and removes all event listeners.  
>   Should be called when the dialog is no longer needed.
> - `static getLastDialogId(): string`  
>   Returns the ID of the last dialog that was opened.  
>   This can be used to check if a dialog is currently open and to get its ID for further use.  
>   Static method usage: `unsafeWindow.BytmDialog.getLastDialogId()` (doesn't need a `new` instance)
> - `static getOpenDialogs(): string[]`  
>   Returns the IDs of all open dialogs, topmost (last opened) first.  
>   Static method usage: `unsafeWindow.BytmDialog.getOpenDialogs()` (doesn't need a `new` instance)
> 
> <br>
> 
> Events:  
> | Event | Description |
> | :--- | :--- |
> | `on("close", () => void)` | Emitted just **after** the dialog is closed |
> | `on("open", () => void)` | Emitted just **after** the dialog is opened |
> | `on("render", () => void)` | Emitted just **after** the dialog contents are rendered |
> | `on("clear", () => void)` | Emitted just **after** the dialog contents are cleared |
> | `on("destroy", () => void)` | Emitted just **after** the dialog is destroyed and **before** all listeners are removed |
> 
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> const dialog = new unsafeWindow.BYTM.BytmDialog({
>   id: "my-dialog",
>   maxWidth: 500,
>   maxHeight: 300,
>   closeOnBgClick: true,
>   closeOnEscPress: true,
>   closeBtnEnabled: true,
>   destroyOnClose: false,
>   small: true,
>   // add elements to the header, body and footer here, in one of these ways:
>   // - foo.appendChild(document.createElement("..."));
>   // - foo.innerHTML = "..."
>   // - ReactDOM.render(<MyComponent />, foo);
>   // - etc.
>   renderHeader: () => {
>     const header = document.createElement("div");
>     header.textContent = "This is the header of my dialog";
>     return header;
>   },
>   renderBody: () => {
>     const body = document.createElement("div");
>     body.textContent = "This is the body of my dialog";
>     return body;
>   },
>   renderFooter: () => {
>     const footer = document.createElement("div");
>     footer.textContent = "This is the footer of my dialog";
>     return footer;
>   },
> });
> 
> async function run() {
>   dialog.on("close", () => {
>     console.log("The dialog was closed");
>   });
> 
>   await dialog.open();
>   console.log("The dialog is now open");
> }
> 
> run();
> ```
> </details>

<br>

> #### createHotkeyInput()
> Usage:  
> ```ts
> unsafeWindow.BYTM.createHotkeyInput(inputProps: {
>   initialValue?: HotkeyObj,
>   onChange: (hotkey: HotkeyObj) => void,
> }): HTMLElement
> ```
>   
> Creates a hotkey input element that can be used to let the user set a hotkey.  
> The HotkeyObj type has the properties `code: string`, `shift: boolean`, `ctrl: boolean` and `alt: boolean`  
> The function `onChange` is called whenever the hotkey was changed.  
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> const hotkeyInput = unsafeWindow.BYTM.createHotkeyInput({
>   initialValue: { code: "KeyA", shift: true, ctrl: false, alt: false },
>   onChange: (hotkey) => {
>     console.log(`The hotkey was changed to ${hotkey.code} with shift: ${hotkey.shift}, ctrl: ${hotkey.ctrl} and alt: ${hotkey.alt}`);
>   },
> });
> 
> document.querySelector("#my-element").appendChild(hotkeyInput);
> ```
> </details>

<br>

> #### createToggleInput()
> Usage:  
> ```ts
> unsafeWindow.BYTM.createToggleInput(toggleProps: {
>   onChange: (value: boolean) => void,
>   initialValue?: boolean,
>   id?: string,
>   labelPos?: "off" | "left" | "right",
> })
> ```
>   
> Creates a toggle input element that behaves like a checkbox but looks better.  
> - `onChange` - Callback function that is called when the toggle is changed, gets passed the new value of the toggle as a boolean.
> - `initialValue` - Initial value of the toggle - defaults to false (toggled off).
> - `id` - Useful for getting a unique selector - if unspecified, a random ID is generated.
> - `labelPos` - Toggle builtin label "off" or change position of the label to "right" or "left", relative to the toggle.
> 
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> const toggleInput = unsafeWindow.BYTM.createToggleInput({
>   onChange: (value) => {
>     console.log(`The toggle was changed to ${value}`);
>   },
>   initialValue: true,
>   id: "my-toggle",
>   labelPos: "left",
> });
> 
> document.querySelector("#my-element").appendChild(toggleInput);
> ```
> </details>

<br>

> #### createCircularBtn()
> Usage:
> ```ts
> unsafeWindow.BYTM.createCircularBtn(btnProps: {
>   title: string,
>   // either resourceName or src has to be specified:
>   resourceName: string | undefined,
>   src: string | undefined,
>   // either href or onClick has to be specified:
>   href: string | undefined,
>   onClick: (event: MouseEvent | KeyboardEvent) => void | undefined,
> }): HTMLElement
> ```
>
> Creates a circular button element that can be used to trigger an action or navigate to a different page.  
> - `title` - The title of the button that is displayed when hovering over it. Also used as a description for accessibility.
> - `resourceName` - The name of the resource to use as the button icon (`src` can't be specified).
> - `src` - The URL of the image to use as the button icon (`resourceName` can't be specified).
> - `href` - The URL to navigate to when the button is interacted with (`onClick` can't be specified).
> - `onClick` - The function that is called when the button is clicked or interacted with (`href` can't be specified).
>
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
>
> ```ts
> const circularBtn = unsafeWindow.BYTM.createCircularBtn({
>   title: "My cool button",
>   resourceName: "icon-help",
>   onClick() {
>     console.log("The button was clicked");
>   },
> });
> 
> document.querySelector("#my-element").appendChild(circularBtn);
> ```
> </details>

<br>

> ### compareVersions()
> Usage:
> ```ts
> unsafeWindow.BYTM.compareVersions(verA: string, verB: string): -1 | 0 | 1
> ```
>   
> Description:
> Crudely compares two semver version strings.  
> The format is assumed to *always* be `MAJOR.MINOR.PATCH`, where each part is a positive integer number without leading zeroes.  
> The function returns:
> - `-1`, when `verA < verB`
> - `0`, when `verA == verB`
> - `1`, when `verA > verB`
> 
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> unsafeWindow.BYTM.compareVersions("1.2.3", "1.2.4");   // -1
> unsafeWindow.BYTM.compareVersions("1.2.3", "1.2.3");   // 0
> unsafeWindow.BYTM.compareVersions("1.2.3", "1.2.2");   // 1
> unsafeWindow.BYTM.compareVersions("1.2.3", "invalid"); // throws a TypeError
> ```
> </details>

<br>

> ### compareVersionArrays()
> Usage:
> ```ts
> unsafeWindow.BYTM.compareVersionArrays(verA: [number, number, number], verB: [number, number, number]): -1 | 0 | 1
> ```
>   
> Description:  
> Crudely compares two semver version arrays.  
> The format is assumed to *always* be `[MAJOR, MINOR, PATCH]`, where each part is a positive integer number.  
> The function returns:
> - `-1`, when `verA < verB`
> - `0`, when `verA == verB`
> - `1`, when `verA > verB`
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> unsafeWindow.BYTM.compareVersionArrays([1, 2, 3], [1, 2, 4]);   // -1
> unsafeWindow.BYTM.compareVersionArrays([1, 2, 3], [1, 2, 3]);   // 0
> unsafeWindow.BYTM.compareVersionArrays([1, 2, 3], [1, 2, 2]);   // 1
> unsafeWindow.BYTM.compareVersionArrays([1, 2, 3], [1, 2]);      // throws a TypeError
> unsafeWindow.BYTM.compareVersionArrays([1, 2, 3], [-1, 2, 3]);  // throws a TypeError
> unsafeWindow.BYTM.compareVersionArrays([1, 2, 3], [1.1, 2, 3]); // throws a TypeError
> ```
> 
> </details>

<br><br><br><br><br><br>
