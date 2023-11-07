## BetterYTM - Contributing Guide
Thank you for your interest in contributing to BetterYTM!  
This guide will help you get started with contributing to the project.  
If you have any questions or need help, feel free to contact me, [see my homepage](https://sv443.net/) for contact info.

<br>

- [Submitting translations](#submitting-translations)
- [Setting up the project for local development](#setting-up-the-project-for-local-development)
  - [Requirements](#requirements)
  - [CLI commands](#these-are-the-cli-commands-available-after-setting-up-the-project)
  - [Extras](#extras)
- [Developing a plugin that interfaces with BetterYTM](#developing-a-plugin-that-interfaces-with-betterytm)

<br><br>

### Submitting translations:
Thank you so much for your interest in translating BetterYTM!  
Before submitting a translation, please check on [this document](./assets/translations/README.md) if the language you want to translate to has already been translated and how many strings are still missing.  
If a language is already fully translated but you are interested in improving the translations, you can just follow the same steps as below.  
  
If you want to submit or edit a translation, please follow these steps:  
1. Copy the contents of the default translation file [`assets/translations/en_US.json`](./assets/translations/en_US.json)
2. Replace the `en_US` part of the file name with the language code and locale code of the language you want to translate to
3. Translate the strings inside the file, while making sure not to change the keys on the left side of the colon and to preserve the placeholders with the format %n.
4. If you like, you may also create a translation for the [`README-summary.md`](./README-summary.md) file for display on the userscript distribution sites
5. If you want to submit a pull request with the translated file:
  1. Create a file in the folder [`assets/translations/`](./assets/translations/) with the format `langCode-localeCode.json`
  2. Insert your translated version of the original file
  3. Create the mapping in `assets/locales.json` (please make sure it's alphabetically ordered)
  4. Add that translated property inside of the `header` in [`src/tools/post-build.ts`](src/tools/post-build.ts) by following the same format as the other translation(s)
  5. Test your changes by following [this guide](#setting-up-the-project-for-local-development), then submit your pull request
6. Alternatively send it to me directly, [see my homepage](https://sv443.net/) for contact info  
  Make sure you also add your language to the contents of [`assets/locales.json`](./assets/locales.json)

<br><br><br>

### Setting up the project for local development:
#### Requirements:
1. Have Node.js, npm and Git installed
2. Download and extract or clone this repo
3. Open a terminal in the project root and run `npm i`
4. Copy the file `.env.template` to `.env` and modify the variables inside to your needs.

<br>

#### These are the CLI commands available after setting up the project:
| Command | Description |
| --- | --- |
| `npm i` | Run once to install dependencies |
| `npm run build-prod` | Builds the userscript for production |
| `npm run build-dev` | Builds the userscript for development |
| `npm run dev` | Watches for any changes, then rebuilds and serves the userscript on port 8710, so it can be updated live if set up correctly in the userscript manager (see below). Configure request logging and more in `.env` and `src/tools/serve.ts` |
| `npm run lint` | Builds the userscript with the TypeScript compiler and lints it with ESLint. Doesn't actually verify the functionality of the script though! |
| `npm run tr-progress` | Checks all translation files for missing strings and updates the progress table in `assets/translations/README.md` |

<br>

#### Extras:
When using ViolentMonkey, after letting the command `npm run dev` run in the background, open [`http://localhost:8710/BetterYTM.user.js`](http://localhost:8710/BetterYTM.user.js) and select the `Track local file` option.  
This makes it so the userscript automatically updates when the code changes.  
Note: the tab needs to stay open on Firefox or the script will not update itself.

<br><br><br>

### Developing a plugin that interfaces with BetterYTM:
BetterYTM has a built-in interface based on events that allows other userscripts to benefit from its features.  
If you want your plugin to be displayed in the readme and possibly inside the userscript itself, please contact me [(see my homepage)](https://sv443.net/)  
  
There are two ways to interact with BetterYTM, static and dynamic:  
- Static interaction is done through the global `BYTM` object, which is available on the `window` object.  
  This is pretty much reserved for read-only properties that tell you more about how BetterYTM is currently being run.  
  You can find all properties that are available and their types in the `declare global` block of [`src/types.ts`](src/types.ts)
- Dynamic interaction is done through events that are dispatched on the `window` object.  
  They all have the prefix `bytm:eventName` and are all dispatched with the `CustomEvent` interface, meaning their data can be read using the `detail` property.  
  You can find all events that are available and their types in [`src/interface.ts`](src/interface.ts)  
    
  Additionally BetterYTM has an internal system called SiteEvents. They are dispatched using the format `bytm:siteEvent:eventName`  
  You may find all SiteEvents that are available and their types in [`src/siteEvents.ts`](src/siteEvents.ts)  
  Note that the `detail` property will be an array of the arguments that can be found in the event handler at the top of [`src/siteEvents.ts`](src/siteEvents.ts)

If you need specific events to be added or modified, please submit an issue.

<br>

<details><summary>Static interaction example - click to expand</summary>

#### Example:
The `window.` prefix is optional since all properties are already globally available.
```ts
console.log(`BetterYTM was built in '${BYTM.mode}' mode`);
console.log(`BetterYTM's locale is set to '${BYTM.locale}'`);
console.log(`BetterYTM's version is '${BYTM.version} #${BYTM.buildNumber}'`);
```

#### Shimming for TypeScript without errors & with autocomplete:
Create a .d.ts file (for example `types.d.ts`) and add the following code:
```ts
declare global {
  interface Window {
    BYTM: {
      foo: string;
    };
  }
}
```
You may specify all types that you need in this file.  
To find which types BetterYTM exposes, check out the `declare global` block in [`src/types.ts`](src/types.ts)  
You may also just copy it entirely.

</details>

<br>

<details><summary>Dynamic interaction examples - click to expand</summary>

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

  console.log(`The queue has been changed. It now contains ${detail.childNodes.length} items`);
});
```

</details>

<br><br><br><br><br><br>
