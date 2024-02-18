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

<br><br>

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
    3. Create the mapping in `assets/locales.json` by copying the english one and editing it (please make sure it's alphabetically ordered)
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
3. Run the command `npm run tr-format -- -p -o=languageCode_localeCode`, where `languageCode_localeCode` is the part of the file name before the `.json` extension  
  This will prepare the file for translation by providing the missing keys once in English and once without any value and also formatting the file to have the same structure as the base file `en_US.json`
4. Edit the strings inside the file, while making sure not to change the keys on the left side of the colon and to preserve the placeholders with the format %n (where n is any number starting at 1).
5. Make sure there are no duplicate keys in the file
6. Run the command `npm run tr-format -- -o=languageCode_localeCode` to make sure the file is formatted correctly
7. Test for syntax errors and update translation progress with the command `npm run tr-progress`
8. Open the file [`assets/translations/README.md`](./assets/translations/README.md) to see if you're still missing any untranslated keys (you don't have to translate them all, but it would of course be nice)
9. I highly encourage you to test your changes to see if the wording fits into the respective context by following [this section](#setting-up-the-project-for-local-development)
10. Submit your pull request by [clicking here](https://github.com/Sv443/BetterYTM/compare/) and setting the `compare:` dropdown to your fork
11. Check that the CI checks just above the comment box pass and then wait for the pull request to be reviewed and merged

<br><br><br>

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
  - `--config-suffix=<value>` - Suffix to add just before the `.user.js` extension. Defaults to an empty string
    
  Shorthand commands:
  - `npm run build-prod-base` - Sets `--config-mode=production` and `--config-branch=main`  
    Used for building for production, targeting the main branch
  - `npm run build-develop` - Sets `--config-mode=development` and `--config-branch=develop`  
    Used for building for experimental versions, targeting the develop branch
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
- **`npm run --silent invisible -- "<command>"`**  
  Runs the passed command as a detached child process without giving any console output.  
  Remove `--silent` to see npm's info and error messages.
- **`npm run node-ts -- <path>`**  
  Runs the TypeScript file at the given path using the regular node binary and the node-ts loader.  
  Also enables source map support and disables experimental warnings.

<br>

#### Extras:
When using ViolentMonkey, after letting the command `npm run dev` run in the background, open [`http://localhost:8710/BetterYTM.user.js`](http://localhost:8710/BetterYTM.user.js) and select the `Track local file` option.  
This makes it so the userscript automatically updates when the code changes.  
Note: the tab needs to stay open on Firefox or the script will not update itself.

<br><br><br>

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
  Additionally to those functions, the namespace `BYTM.UserUtils` is also exposed, which contains all functions from the [UserUtils](https://github.com/Sv443-Network/UserUtils) library.

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

### Global functions:
These are the global functions that are exposed by BetterYTM through the `unsafeWindow.BYTM` object.  
The usage and example blocks on each are written in TypeScript but can be used in JavaScript as well, after removing all type annotations.  
  
- BYTM-specific:
  - [getResourceUrl()](#getresourceurl) - Returns a `blob:` URL provided by the local userscript extension for the specified BYTM resource file
  - [getSessionId()](#getsessionid) - Returns the unique session ID that is generated on every started session
- DOM:
  - [addSelectorListener()](#addselectorlistener) - Adds a listener that checks for changes in DOM elements matching a CSS selector
  - [getVideoTime()](#getvideotime) - Returns the current video time (on both YT and YTM)
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
  - [fetchLyricsUrl](#fetchlyricsurl) - Fetches the URL to the lyrics page for the specified song
  - [getLyricsCacheEntry](#getlyricscacheentry) - Tries to find a URL entry in the in-memory cache for the specified song
  - [sanitizeArtists](#sanitizeartists) - Sanitizes the specified artist string to be used in fetching a lyrics URL
  - [sanitizeSong](#sanitizesong) - Sanitizes the specified song title string to be used in fetching a lyrics URL

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
> unsafeWindow.BYTM.getSessionId(): string
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

> #### getVideoTime()
> Usage:  
> ```ts
> unsafeWindow.BYTM.getVideoTime(): Promise<number | null>
> ```
>   
> Description:  
> Returns the current video time (on both YT and YTM).  
> In case it can't be determined on YT, mouse movement is simulated to bring up the video time element and read it.  
> In order for that edge case not to throw an error, the function would need to be called in response to a user interaction event (e.g. click) due to the strict automated interaction policy in browsers.  
> Resolves with a number of seconds or `null` if the time couldn't be determined.  
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> try {
>   const videoTime = await unsafeWindow.BYTM.getVideoTime();
>   console.log(`The video time is ${videoTime}s`);
> }
> catch(err) {
>   console.error("Couldn't get the video time, probably due to automated interaction restrictions");
> }
> ```
> </details>

<br>

> #### setLocale()
> Usage:  
> ```ts
> unsafeWindow.BYTM.setLocale(locale: string): void
> ```
>   
> Description:  
> Sets the locale for BetterYTM's translations.  
> The new locale is used for all translations *after* this function is called.  
>   
> Arguments:  
> - `locale` - The locale to set. Refer to the file [`assets/locales.json`](assets/locales.json) for a list of available locales.
> 
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> unsafeWindow.BYTM.setLocale("en_UK");
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
> unsafeWindow.BYTM.saveFeatures(config: FeatureConfig): Promise<void>
> ```
>   
> Description:  
> Overwrites the current feature configuration object with the provided one.  
> The object in memory is updated synchronously, while the one in GM storage is updated asynchronously once the Promise resolves.  
>   
> Arguments:  
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
>   const promise = unsafeWindow.BYTM.saveFeatures(newConfig);
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

> #### fetchLyricsUrl()
> Usage:
> ```ts
> unsafeWindow.BYTM.fetchLyricsUrl(artist: string, song: string): Promise<string | undefined>
> ```
>   
> Description:  
> Fetches the URL to the lyrics page for the specified song.  
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
>   const lyricsUrl = await unsafeWindow.BYTM.fetchLyricsUrl("Michael Jackson", "Thriller");
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
> unsafeWindow.BYTM.getLyricsCacheEntry(artists: string, song: string): string | undefined
> ```
>   
> Description:  
> Tries to find an entry in the in-memory cache for the specified song.  
> Contrary to [`fetchLyricsUrl()`](#fetchlyricsurl), this function does not fetch anything new if there is no entry in the cache.  
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
>   const lyricsUrl = unsafeWindow.BYTM.getLyricsCacheEntry("Michael Jackson", "Thriller");
> 
>   if(lyricsUrl)
>     console.log(`The lyrics URL for Michael Jackson's Thriller is '${lyricsUrl}'`);
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


<br><br><br><br><br><br>
