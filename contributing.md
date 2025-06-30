# BetterYTM - Contributing Guide
Thank you for your interest in contributing to BetterYTM!  
This guide will help you get started with contributing to the project.  
  
It contains boatloads of information on internal workings, how to set up the project for local development, how to submit translations and how to develop a plugin that interfaces with BetterYTM.  
Also, each folder of the project should contain a `README.md` file that further explains the contents of the folder and how to work with them in much more detail.  
  
If you have any questions or need help, feel free to contact me ([visit my homepage](https://sv443.net/) for contact info).  
Or you can also [join my Discord server](https://dc.sv443.net) to get in touch or get help.  

<br>

## Table of contents:
- [Submitting translations](#submitting-translations)
  - [Adding translations for a new language](#adding-translations-for-a-new-language)
  - [Editing an existing translation](#editing-an-existing-translation)
- [Setting up the project for local development](#setting-up-the-project-for-local-development)
  - [Requirements](#requirements)
  - [CLI commands](#these-are-the-cli-commands-available-after-setting-up-the-project)
  - [Extras](#extras)
  - [Getting started](#getting-started-working-on-the-project)
  - [Procedure for specific tasks](#procedure-for-specific-tasks)
- [Developing a plugin that interfaces with BetterYTM](#developing-a-plugin-that-interfaces-with-betterytm)
  - [Shimming for TypeScript without errors & with autocomplete](#shimming-for-typescript-without-errors--with-autocomplete)
  - [Global functions and classes on the plugin interface](#global-functions-and-classes)
  - [CSS selectors and variables for use in plugins](#css-selectors-and-variables-for-use-in-plugins)

<br><br>

<!-- #region translations -->

## Submitting translations:
Thank you so much for your interest in translating BetterYTM!  
Before submitting a translation, please check on [this document](https://github.com/Sv443/BetterYTM/tree/develop/assets/translations) if the language you want to translate to has already been translated and how many strings are still missing.

<br>

### Adding translations for a new language:
> [!IMPORTANT]  
> **Please make sure you always select the `develop` branch, as the `main` branch is only used for releases and will be outdated.**  
  
To submit a translation, please follow these steps:
1. Select the `develop` branch to translate for the latest version of BetterYTM.  
  If you are setting up the project for local development, also make sure you have checked out the `develop` branch.
2. Copy the contents of the default translation file [`assets/translations/en-US.json`](./assets/translations/en-US.json)
3. Replace the `en-US` part of the file name with the language code and locale code of the language you want to translate to  
  You can find [a list of these BCP 47 codes here.](https://www.techonthenet.com/js/language_tags.php)  
  The final locale code should always be in the format `language-COUNTRY` (e.g. `en-US`, `en-GB`, ...).
4. Translate the strings inside the file, while making sure not to change the keys on the left side of the colon and to preserve the placeholders with the format `%n` (where n is any number starting at 1), as well as `${name}` (don't translate what's inside the brackets). In general, it's recommended to only cut and paste the placeholder to move it around.  
  If you don't want to finish it in one go, please remove the extra keys before submitting the file. They can always be added back by running the command `pnpm tr-format -p -o="xx-YY"` (see [this section](#editing-an-existing-translation) for more info).
5. If you like, you may also create a translation for the [`README-summary.md`](./README-summary.md) file for display on the userscript distribution sites.  
  Please duplicate the file `README-summary.md` and call it `README-summary-xx-YY.md` and place it in the [`assets/translations/`](./assets/translations/) folder.
6. If you want to submit a pull request with the translated file:
    1. Duplicate the `en-US.json` file in the folder [`assets/translations/`](./assets/translations/) by keeping the format `language-COUNTRY.json`
    2. Edit it to your translated version and keep the left side of the colon unchanged.
    3. Create the mapping in `assets/locales.json` by copying the English one and editing it (please make sure it's alphabetically ordered).
    4. Add the path to the JSON file to `assets/resources.json` by following the format of the others and also alphabetical order.
    5. Add your name to the respective `authors` properties in [`assets/locales.json`](./assets/locales.json) and the translation file.
    6. Test your changes by following [this section](#setting-up-the-project-for-local-development), then submit your pull request.
7. Alternatively send it to me directly, [see my homepage](https://sv443.net/) for contact info.  
  Make sure you also add your language to the contents of [`assets/locales.json`](./assets/locales.json)

<br>

### Editing an existing translation:
> [!IMPORTANT]  
> **Please make sure you always select the `develop` branch, as the `main` branch is only used for releases and will be outdated.**

To edit an existing translation, please follow these steps:
1. Set up the project for local development by following the instructions in [the local setup section.](#setting-up-the-project-for-local-development)  
  **Make sure you fork the repository and clone your own fork instead of the original repository, and to create a branch with a short but descriptive name.**  
2. Find the file for the language you want to edit in the folder [`assets/translations/`](./assets/translations/)
3. Run the command `pnpm tr-format -p -o="language-COUNTRY"`, where `language-COUNTRY` is the part of the file name before the `.json` extension.  
  This will prepare the file for translation by providing the missing keys once in English and once without any value and also formatting the file to have the same structure as the base file `en-US.json`
4. Edit the strings inside the file, while making sure not to change the keys on the left side of the colon and to preserve the placeholders with the format `%n` (where n is any number starting at 1), as well as `${name}` (don't translate what's inside the brackets). In general, it's recommended to only cut and paste the placeholder to move it around.
5. Make sure there are no duplicate keys in the file.
6. Run the command `pnpm tr-format -o="language-COUNTRY"` to make sure the file is formatted correctly.
7. Test for syntax errors and update translation progress with the command `pnpm tr-progress`
8. Open the file [`assets/translations/README.md`](./assets/translations/README.md) to see if you're still missing any untranslated keys (you don't have to translate them all, but it would of course be nice).
9. I highly encourage you to test your changes to see if the wording fits into the respective context by following [the local setup section.](#setting-up-the-project-for-local-development)
10. Submit your pull request by [clicking here](https://github.com/Sv443/BetterYTM/compare/) and setting the `compare:` dropdown to your fork and the `base:` dropdown to `develop`  
  Make sure to describe your changes in the pull request and reference the issue you are fixing, if applicable.
11. Check that the CI checks just above the comment box pass and then wait for the pull request to be reviewed and merged.

<br><br><br>

<!-- #region local dev -->

## Setting up the project for local development:
### Requirements:
1. Have current versions of Node.js, npm and Git installed.
2. Install pnpm by running `npm i -g pnpm`
3. Clone this repository.  
  If you plan on contributing to the project through Git, please [click here to fork it](https://github.com/Sv443/BetterYTM/fork) and clone your fork instead.
  **Also make sure to create a new branch from the upstream's `develop` branch with a short but descriptive name, and specify it when submitting your pull request at the end.**
5. Switch to the `develop` branch (or your own one) by running `git checkout -b develop` in the project root.  
  **I will only accept pull requests that originate from and are set to target the `develop` branch**, since there is usually a newer version in progress on that branch compared to `main`  
  Skip this step if you are using your own forked repository.
6. Open a terminal in the project root and run `pnpm i` to install all dependencies.
7. Copy the file `.env.template` to `.env` and modify the variables inside to your needs.
8. Now you can run `pnpm dev` to build the userscript and host it on a development server or check out the other commands below.

<br>

### These are the CLI commands available after setting up the project:
- **`pnpm i`**  
  Run once to install dependencies.
- **`pnpm dev`**  
  This is the command you want to use to locally develop and test BetterYTM.  
  It watches for any changes, then rebuilds and serves the userscript on port 8710, so it can be updated live if set up correctly in the userscript manager ([see extras](#extras)).  
  You can also configure request logging and more in `.env` and `src/tools/serve.ts`, just make sure to restart the dev server after changing anything.  
    
  This command uses the local server as the assetSource, so that all changes are immediately reflected in the built userscript. Note that this also means the server needs to keep running for the userscript to work. If it's not running, you will run into weird errors because none of the necessary assets are able to be fetched.  
  Also, no meta file will be generated, since it's not needed for local development.  
    
  Once the build is finished, a link will be printed to the console. Open it to install the userscript.
- **`pnpm dev-cdn`**  
  Works exactly like `pnpm dev`, but uses the default CDN as the asset source.  
  Practically, this means the server doesn't have to be constantly running.  
  But this also means that changes to the assets won't be reflected in the userscript until committed, pushed and the script is rebuilt.  
  Also, no meta file will be generated, since it's not needed for local development.  
    
  Once the build is finished, a link will be printed to the console. Open it to install the userscript.
- **`pnpm build-prod`**  
  Builds the userscript for production for all hosts with their respective options already set.  
  Outputs the files using a suffix predefined in the `package.json` file.  
  Use this to build the userscript for distribution on all host/CDN platforms.
- **`pnpm build <arguments>`**  
  Builds the userscript with custom options  
  Arguments:  
  - `--config-mode=<value>` - The mode to build in. Can be either `production` or `development` (default)
  - `--config-branch=<value>` - The GitHub branch to target. Can be any branch name, but should be `main` for production and `develop` for development (default)
  - `--config-host=<value>` - The host to build for. Can be either `github` (default), `greasyfork` or `openuserjs`
  - `--config-assetSource=<value>` - Where to get the resource files from. Can be either `local`, `jsdelivr` (default) or `github`
  - `--config-suffix=<value>` - Suffix to add just before the `.user.js` extension. Defaults to an empty string
  - `--config-gen-meta=<value>` - Whether or not to generate the `.meta.js` file, containing only the userscript header. Can be either `true` (default) or `false`
    
  Shorthand commands:
  - `pnpm build-prod-base` - Used for building for production, targets the main branch and the public asset source.  
    Sets `--config-mode=production` and `--config-branch=main` and `--config-assetSource=jsdelivr`
  - `pnpm build-dev` - Builds a preview version, targeting the develop branch and the public asset source so no local dev environment is needed.  
    Sets `--config-mode=development`, `--config-branch=develop` and `--config-assetSource=jsdelivr`
  - `pnpm preview` - Same as `pnpm build-prod`, but sets `--config-host=github` and `--config-assetSource=local`, then starts the dev server for a few seconds so the extension that's waiting for file changes can update the script and assets
- **`pnpm lint`**  
  Builds the userscript with the TypeScript compiler and lints it with ESLint. Doesn't verify the functionality of the script, only checks for syntax and TypeScript errors!
- **`pnpm storybook`**  
  Starts Storybook for developing and testing components. After launching, it will automatically open in your default browser.
- **`pnpm gen-readme`**  
  Updates the README files by inserting different parts of generated sections into them.
- **`pnpm tr-changed "<keys>"`**  
  Removes the provided keys (comma-separated) from all translation files but `en-US.json`  
  This is useful when the translation for one or more keys has changed and needs to be regenerated for all locales with `pnpm tr-format -p`
- **`pnpm tr-progress`**  
  Checks all translation files for missing strings and updates the progress table in `assets/translations/README.md`  
  Will also be run automatically after every script build.
- **`pnpm tr-format <arguments>`**  
  Reformats all translation files so they match that of the base file `en-US.json`  
  This includes sorting keys and adding the same empty lines and indentation.
  Arguments:  
  - `--prep` or `-p` - Prepares the files for translation via GitHub Copilot by providing the missing key once in English and once without any value
  - `--only="<value>"` or `-o="<value>"` - Only applies formatting to the files of the specified locales. Has to be a quoted, case-sensitive, comma separated list! (e.g. `-o="fr-FR,de-DE"` or `-o="pt-BR"`)
  - `--include-based` or `-b` - Also includes files which have a base locale specified
  - `--keys="<keys>"` or `-k="<keys>"` - Ignores all keys except the ones specified (comma-separated)
- **`pnpm tr-prep`**  
  Shorthand for `pnpm tr-format --prep` (see above).
- **`pnpm --silent invisible "<command>"`**  
  Runs the passed command as a child process without giving any console output. (`--` and double quotes are required!)  
  Remove `--silent` to see pnpm's info and error messages.
- **`pnpm node-ts <path>`**  
  Runs the TypeScript file at the given path using the regular node binary and [tsx.](https://tsx.is/)  
  Also enables source map support and disables experimental warnings.

> [!NOTE]  
> When you are using npm (as opposed to `pnpm`), read the following carefully:  
> You will need to use a lone ` -- ` between the command name and the arguments, for example: `pnpm tr-format -- -p -o="de-DE"`  
> This is so npm can tell the difference between arguments passed to it versus arguments passed to the script it is running.

<br>

### Extras:
- When using ViolentMonkey, after letting the command `pnpm dev` or `pnpm dev-cdn` run in the background, open [`http://localhost:8710/BetterYTM.user.js`](http://localhost:8710/BetterYTM.user.js) and select the `Track local file` option.  
  This makes it so the userscript automatically updates when the code changes.  
  Note: the tab needs to stay open on Firefox or the script will not update itself.
- To link any local JS file (like a work-in-progress library) in the userscript, add a `"link": "/path/to/script.umd.js"` property to the respective library in [`assets/require.json`](./assets/require.json) (relative or absolute path)  
  As this file will just be injected as-is at build time, make sure you are targeting a UMD or IIFE bundle that exports a variable with the name set by `"global"`.  
  In order to make TypeScript shut up, you will still need to link the library manually with `pnpm link -g /path/to/library_root`

<br>

### Getting started working on the project:
After setting the project up for local development ([see above](#setting-up-the-project-for-local-development)), you can start working on the project.  
The main files you will be working with are:  
- [`src/index.ts`](./src/index.ts) - The main entry point for the userscript and where all features are initialized
- [`src/interface.ts`](./src/interface.ts) - The file that contains all events and functions that are exposed to plugins
- [`src/types.ts`](./src/types.ts) - The file that contains all types and interfaces that are used throughout the project
- [`src/observers.ts`](./src/observers.ts) - The file that contains all mutation observers that are used to detect changes on the page
- [`src/siteEvents.ts`](./src/siteEvents.ts) - The file that contains all site- and script-specific events that are dispatched by BetterYTM
- [`src/tools`](./src/tools) - The folder that contains all CLI tools and utilities that are used throughout the project
- [`src/components`](./src/components) - The folder that contains all HTML component functions for reusable UI elements

<br>

### Procedure for specific tasks:
Here are some well explained procedures for common tasks.  
If you need help with these, don't hesitate to reach out to me (see the top of this file).  
  
- Adding a new feature:
  1. Add your feature to the `FeatureConfig` type in [`src/types.ts`](./src/types.ts) (after choosing a fitting category for it)
  2. Add your feature and its properties to the `featInfo` object in [`src/features/index.ts`](./src/features/index.ts), under the correct category
  3. Create an async initialization function for your feature in the respective category's file inside the `src/features` folder
  4. Add the init function to the `onDomLoad` function in [`src/index.ts`](./src/index.ts), under the correct "domain guard condition" and category by following the format of the other features
- Adding an asset (image, icon, stylesheet, translation file and misc. other files):
  1. Check out [`assets/README.md`](./assets/README.md) for information on all asset formats
  2. Add the asset to the `assets` folder in the root of the project, under the correct subfolder
  3. Add the asset to the [`assets/resources.json`](./assets/resources.json) file by following the format of the other entries.  
    If the path begins with a slash, it will start at the project root (where package.json is), otherwise it will start at the `assets` folder.  
    The path string or all values in the object of each resource will be passed through the function `resolveResourceVal()` in [`src/tools/post-build.ts`](./src/tools/post-build.ts) to resolve placeholders like `$BRANCH`. View all replacements by looking up that function.
  4. The asset will be immediately available in the userscript after the next build and the `@resource` directive will automatically point at the locally served asset or the GitHub CDN, depending on the build mode and if the asset key matches the `externalAssetPattern` in the `assets/resources.json` file.
  5. If the asset is an SVG icon, it will be included in the file `assets/spritesheet.svg` so it can be referenced without needing to be fetched every time it's used. This spritesheet needs to be committed before the build, find out why in the next step.
  6. **When committing, make sure to commit the assets first, then rebuild the userscript and make a second commit.**  
    This needs to be done because the build script at `src/tools/post-build.ts` will use the *previous* commit hash to create version-independent URLs for the assets. These will continue to work in the future, instead of pointing to an ever-changing branch where files could be moved, renamed or deleted at any time.
- Adding a new site event:
  1. Add your event to the `SiteEventsMap` type in [`src/siteEvents.ts`](./src/siteEvents.ts)
  2. Dispatch the event inside `initSiteEvents` in [`src/siteEvents.ts`](./src/siteEvents.ts) or at another point where it is run *independent of the feature configuration* (the only exception being domain-specific events).  
    **Always use the function `emitSiteEvent`** to dispatch the event, so it will automatically be logged and emitted to the plugin interface as well.
- Adding something to the plugin interface:
  - If you want to make a function globally available, simply add it to the `globalFuncs` variable in [`src/interface.ts`](./src/interface.ts) under the correct category.  
    If the function should require a token, create a proxy function at the bottom of the file that checks for the token and then calls the actual function (also see the bottom of the file for examples).
  - If you want to add something else like a class, constant or entire library (as long as its license allows it), add it to the `props` variable inside the function `initInterface` in [`src/interface.ts`](./src/interface.ts)
- Creating a new reusable UI component:  
  1. Create a new file in the `src/components` folder with a descriptive name
  2. Add a function that takes a single object of properties as an argument (kind of like a React component), and returns an element that extends the `HTMLElement` interface (like what the return value of `document.createElement()` is)
  3. Add a re-export inside the file [`src/components/index.ts`](./src/components/index.ts)
  4. If you want to expose the component to plugins, add it to the `globalFuncs` variable in [`src/interface.ts`](./src/interface.ts) under the category `Components`
  5. Write some documentation for the component inside this file (`contributing.md`), under the [global functions and classes section](#global-functions-and-classes) by following the format of the other documented components.
- Adding a locale (language & country code):
  1. Add the locale code and info about the locale to the file [`assets/locales.json`](./assets/locales.json) by following the format of the other entries.  
    Please make sure the alphabetical order is kept.  
    You can find [a list of BCP 47 codes here.](https://www.techonthenet.com/js/language_tags.php)  
    The final locale code should be in the format `language-COUNTRY` (e.g. `en-US`, `en-GB`, ...)
  2. Add a translation file for the locale by following the instructions in the [translations section](#adding-translations-for-a-new-language)
  3. Your locale will be immediately available in the userscript after the next build.
- Creating a release:
  1. Make sure the version in `package.json` is bumped according to [semantic versioning](https://semver.org/)
  2. Run `pnpm i` so the version is updated in the lockfile
  3. Update the `changelog.md` with the new version and an exhaustive list of changes that were made
  4. Make sure all files are committed before the built userscript is, so the next build will have the correct build number
  5. Run `pnpm build-prod` to build the userscript for all hosts
  6. Commit and push the built files
  7. Create a new release on GitHub with a tag that follows the *exact* format of the previous releases, a copy of the relevant section in the changelog and an install button that points to the built userscript on GitHub (make sure it uses the version tag in its URL to ensure the correct version is installed)
  8. Update the userscript on GreasyFork and OpenUserJS from the built files  
    GreasyFork also needs the relevant section of the changelog, but the internal and plugin changes should be trimmed out
  9. Send an announcement in the Discord server linking to the install pages and the changelog, with a summary of the most important changes
  10. Update the [BYTM plugin template](https://github.com/Sv443/BetterYTM-Plugin-Template) by setting the BYTM submodule to the *exact* commit matching the release and making sure everything else is compatible with the changes of the latest BYTM version
  11. Create a release in the BYTM plugin template repository, following the *exact* format of the previous releases


<br><br><br>

<!-- #region plugin interface -->

## Developing a plugin that interfaces with BetterYTM:
BetterYTM has a built-in interface based on events and exposed global constants and functions that allows other "plugin" userscripts to benefit from its features.  
If you want your plugin to be displayed in the readme and possibly inside the userscript itself, please [submit an issue using the plugin submission template](https://github.com/Sv443/BetterYTM/issues/new/choose)  
  
> [!TIP]  
> Want to quickly get started with a plugin? **Check out the [official plugin template.](https://github.com/Sv443/BetterYTM-Plugin-Template)**  
> It is based on Vite and TypeScript and has all the necessary setup for you to start developing a plugin right away.  
> It also contains some small examples to show you how to interact with the BYTM API.  
  
<br>

**Required knowledge:**
- Intermediate JavaScript knowledge (DOM API, events, Promise API, etc.)
  - Understanding JS types and reading TypeScript type declarations
  - [Semantic versioning](https://semver.org/) (for versioning your plugin in the correct format)
- At least basic knowledge of userscripts (start on the [GreaseSpot wiki](https://wiki.greasespot.net/Greasemonkey_Manual))
- Reading the file [`license-for-plugins.txt`](./license-for-plugins.txt) to understand the licensing conditions for plugins
  
**Recommended knowledge:**
- TypeScript (for type safety and better autocomplete)
- The source code of BetterYTM  
  This is especially regarding the files `src/interface.ts`, `src/types.ts`, `src/siteEvents.ts` and `src/observers.ts`
- Being on the lookout for pull requests, since they will list new features and changes to the interface that you probably want to prepare for
- This document, as it contains most of the information you need to know about the BetterYTM interface, or at least points you to the places where you can find the actual information
- The [official plugin template](https://github.com/Sv443/BetterYTM-Plugin-Template) for a quick start with a plugin
- The fact you can [join my Discord server](https://dc.sv443.net) to ask questions or get help with writing your plugin
  
<br>

These are the ways to interact with BetterYTM; through constants, events and global functions:  
- Static interaction is done through constants that are exposed through the global `BYTM` object, which is available on the `unsafeWindow` object.  
  These read-only properties tell you more about how BetterYTM is currently being run.  
  You can find all properties that are available and their types in the `declare global` block of [`src/types.ts`](src/types.ts)

- Dynamic interaction is done through events that are dispatched on the `unsafeWindow` object.  
  They all have the prefix `bytm:eventName` and are all dispatched with the [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) interface, meaning their data can be read using the `detail` property.  
  You can find all events that are available and their types in [`src/interface.ts`](src/interface.ts)  
    
  Additionally BetterYTM has an internal system called SiteEvents. They are dispatched using the format `bytm:siteEvent:eventName`  
  You may find all SiteEvents that are available and their types in [`src/siteEvents.ts`](src/siteEvents.ts)  
  Note that the `detail` property will be an array of the arguments that can be found in the event handler at the top of [`src/siteEvents.ts`](src/siteEvents.ts).  
    
  The interface also exposes some methods to register listeners, which offer much greater flexibility than the regular `addEventListener` method.  
  Find them in the [global functions and classes section below.](#global-functions-and-classes)

- Another way of dynamically interacting is through global functions, which are also exposed by BetterYTM through the global `BYTM` object.  
  You can find all functions that are available in the `InterfaceFunctions` type in [`src/types.ts`](src/types.ts)  
  [**Find a summary with examples below.**](#global-functions-and-classes)  

- Additionally, the following namespaces expose entire libraries for you that BetterYTM has already loaded in:
  - `unsafeWindow.BYTM.UserUtils` contains all exported members from the [UserUtils library.](https://github.com/Sv443-Network/UserUtils)  
    This library can register listeners for when CSS selectors exist, intercept events, manage persistent user configurations, allow you to modify the DOM more easily and more.
  - `unsafeWindow.BYTM.compareVersions` has all functions from the [compare-versions library.](https://npmjs.com/package/compare-versions)  
    Use it to compare semver-compliant version strings.

All of these interactions require the use of `unsafeWindow`, as the regular window object is pretty sandboxed in userscript managers.  
  
If you need specific events to be added or modified, please [submit an issue.](https://github.com/Sv443/BetterYTM/issues/new/choose)

<br>

<details><summary><b>Static interaction Example <i>(click to expand)</i></b></summary>

### Example:
```ts
const BYTM = unsafeWindow.BYTM;

console.log(`BetterYTM was built in '${BYTM.mode}' mode`);
console.log(`BetterYTM's locale is set to '${BYTM.locale}'`);
console.log(`BetterYTM's version is '${BYTM.version} #${BYTM.buildNumber}'`);
```

</details>

<br>

<details><summary><b>Dynamic interaction examples <i>(click to expand)</i></b></summary>

### Basic format:
```ts
unsafeWindow.addEventListener("bytm:eventName", (event) => {
  // can have any type, but usually it's an object or undefined
  const { detail } = event as CustomEvent<{ foo: string }>;

  console.log(detail.foo);
});

// for listening to SiteEvents:
unsafeWindow.addEventListener("bytm:siteEvent:eventName", (event) => {
  // always typed as array / tuple
  const { detail } = event as CustomEvent<[ foo: HTMLElement ]>;

  console.log(detail[0]);
});
```

### Practical Example:
```ts
// listening to generic events:
unsafeWindow.addEventListener("bytm:ready", () => {
  console.log("The DOM is loaded and all BetterYTM features have been initialized");
});

unsafeWindow.addEventListener("bytm:lyricsLoaded", (event) => {
  const { detail } = event as CustomEvent<{ type: "current" | "queue", artists: string, title: string, url: string }>;

  console.log(`Lyrics URL for "${detail.artists} - ${detail.title}" has been loaded: ${detail.url}`);

  if(detail.type === "current")
    console.log("This is from the currently playing song");
  else
    console.log("This is from a song in the queue");
});

// listening to a SiteEvent:
unsafeWindow.addEventListener("bytm:siteEvent:queueChanged", (event) => {
  const { detail } = event as CustomEvent<[ queueItem: HTMLElement ]>;

  console.log(`The queue has been changed. It now contains ${detail[0].childNodes.length} items`);
});
```

</details>

<br>

**For global function examples [see below.](#global-functions-and-classes)**

<br><br>

## Shimming for TypeScript without errors & with autocomplete:
In order for TypeScript to not throw errors while creating a plugin, you need to shim the types for BYTM.  
To do this, create a .d.ts file (for example `bytm.d.ts`) and add the following code:
```ts
import type { BytmObject, PluginDef, PluginRegisterResult } from "./bytm/src/types.js";

declare global {
  interface Window {
    BYTM: BytmObject;
  }

  // Enter BYTM's custom events you need in here so they are available on the `window` object and typed correctly.
  // When adding new events, you can basically copy them from `type InterfaceEvents` in `src/interface.ts` after wrapping them in the `CustomEvent` type.
  interface WindowEventMap {
    "bytm:registerPlugin": CustomEvent<(def: PluginDef) => PluginRegisterResult>;
  }
}
```
What is shown above assumes you have the BetterYTM source code in a folder called `bytm`. An easy way to do this is through [Git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules).  
The [official plugin template](https://github.com/Sv443/BetterYTM-Plugin-Template) includes all of this setup already so you can either use it as a reference or create your plugin based on that template.  
  
You may instead also just copy all necessary types over from the BetterYTM source code. However, this is not recommended as it may lead to inconsistencies between the plugin and BetterYTM and can just be a painful amount of work. And this could also easily violate the [plugin sublicense](./license-for-plugins.txt), making your plugin ineligible for official recognition.

<br><br>

<!-- #region global interface functions -->

## Global functions and classes:
These are the global functions and classes that are exposed by BetterYTM through the `unsafeWindow.BYTM` object.  
The usage and example blocks on each are written in TypeScript but can be used in JavaScript as well, after removing all type annotations.  
  
> [!IMPORTANT]  
> Authenticated functions are marked with 🔒 and need to be passed a per-session and per-plugin authentication token. It can be acquired by calling [registerPlugin()](#registerplugin)  

<br>
  
- Meta:
  - [registerPlugin()](#registerplugin) - Registers a plugin with BetterYTM with the given plugin definition object
  - [getPluginInfo()](#getplugininfo) 🔒 - Returns the plugin info object for the specified plugin - can be used to check if a certain plugin is registered
  - [getLibraryHook()](#getlibraryhook) 🔒 - Returns functions and instances useful for core libraries or deeper-reaching plugins
- BYTM-specific:
  - [getDomain()](#getdomain) - Returns the current domain of the page as a constant string (either "yt" or "ytm")
  - [getResourceUrl()](#getresourceurl) - Returns a `blob:` URL provided by the local userscript extension for the specified BYTM resource file
  - [getSessionId()](#getsessionid) - Returns the unique session ID that is generated on every started session
  - [reloadTab()](#reloadtab) - Reloads the current tab while preserving video time and volume and making features like initial tab volume lower priority
- DOM:
  - [BytmDialog](#bytmdialog) - A class for creating and managing modal, fully customizable dialogs
  - [ExImDialog](#eximdialog) - Subclass of BytmDialog for allowing users to export and import serializable data
  - [MarkdownDialog](#markdowndialog) - Subclass of BytmDialog for displaying markdown content
  - [setInnerHtml()](#setinnerhtml) - Sets the innerHTML property of an element after sanitizing the string with [DOMPurify](https://github.com/cure53/DOMPurify) and [Trusted Types](https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API)
  - [addSelectorListener()](#addselectorlistener) - Adds a listener that checks for changes in DOM elements matching a CSS selector
  - [onInteraction()](#oninteraction) - Adds accessible event listeners to the specified element for button or link-like keyboard and mouse interactions
  - [getVideoTime()](#getvideotime) - Returns the current video time (on both YT and YTM)
  - [getThumbnailUrl()](#getthumbnailurl) - Returns the URL to the thumbnail of the currently playing video
  - [getBestThumbnailUrl()](#getbestthumbnailurl) - Returns the URL to the best quality thumbnail of the currently playing video
  - [fetchITunesAlbumInfo()](#fetchitunesalbuminfo) - Fetches the Apple Music / iTunes album info objects for the specified artist and album name
  - [waitVideoElementReady()](#waitvideoelementready) - Waits for the video element to be queryable in the DOM - has to be called after `bytm:observersReady`
  - [getVideoElement()](#getvideoelement) - Returns the video element on the current page or null if there is none (on both YT and YTM)
  - [getVideoSelector()](#getvideoselector) - Returns the CSS selector for the video element (on both YT and YTM)
  - [getCurrentMediaType()](#getcurrentmediatype) - (On YTM only) returns the type of media that is currently playing (either "video" or "song")
  - [getLikeDislikeBtns()](#getlikedislikebtns) - Returns the like and dislike buttons for either domain, as well as the current like/dislike state
  - [isIgnoredInputElement()](#isignoredinputelement) - Checks if the given element (or `document.activeElement`) is an input element that should prevent all other keypresses from being processed
- Site Events:
  - [onSiteEvent()](#onsiteevent) - Adds a site event listener
  - [onceSiteEvent()](#oncesiteevent) - Adds a site event listener that is only called once and also returns a Promise for use with the async/await pattern
  - [onMultiSiteEvents()](#onmultisiteevents) - Adds a listener for multiple site events at once, with configurable behavior and with a shared callback function
  - [onceMultiSiteEvents()](#oncemultisiteevents) - Adds a listener for multiple site events at once, with configurable behavior and with a shared callback function that is only called once
- Components:
  - [createHotkeyInput()](#createhotkeyinput) - Creates a hotkey input element
  - [createToggleInput()](#createtoggleinput) - Creates a toggle input element
  - [createCircularBtn()](#createcircularbtn) - Creates a generic, circular button element with just an icon
  - [createLongBtn()](#createlongbtn) - Creates a generic, long and circular button element with an icon and text
  - [createRipple()](#createripple) - Creates a click ripple effect on the given element
  - [showToast()](#showtoast) - Shows a toast notification and a message string or element
  - [showIconToast()](#showicontoast) - Shows a toast notification with an icon and a message string or element
  - [showPrompt()](#showprompt) - Shows a styled prompt dialog of the type `confirm`, `alert` or `prompt`
- Translations:
  - [setLocale()](#setlocale) 🔒 - Sets the locale for BetterYTM
  - [getLocale()](#getlocale) - Returns the currently set locale
  - [hasKey()](#haskey) - Checks if the specified translation key exists in the currently set locale
  - [hasKeyFor()](#haskeyfor) - Checks if the specified translation key exists in the specified locale
  - [t()](#t) - Translates the specified translation key using the currently set locale
  - [tp()](#tp) - Translates the specified translation key including pluralization using the currently set locale
  - [tl()](#tl) - Returns the translation for the provided key and provided locale
  - [tlp()](#tlp) - Returns the translation for the provided locale and key, including pluralization identifier
- Feature config:
  - [getFeatures()](#getfeatures) 🔒 - Returns the current BYTM feature configuration object
  - [saveFeatures()](#savefeatures) 🔒 - Overwrites the current BYTM feature configuration object with the provided one
  - [getDefaultFeatures()](#getdefaultfeatures) - Returns the default feature configuration object
- Lyrics:
  - [fetchLyricsUrlTop()](#fetchlyricsurltop) - Fetches the URL to the lyrics page for the specified song
  - [getLyricsCacheEntry()](#getlyricscacheentry) - Tries to find a URL entry in the in-memory cache for the specified song
  - [sanitizeArtists()](#sanitizeartists) - Sanitizes the specified artist string to be used in fetching a lyrics URL
  - [sanitizeSong()](#sanitizesong) - Sanitizes the specified song title string to be used in fetching a lyrics URL
- Auto-Like:
  - [getAutoLikeData()](#getautolikedata) 🔒 - Returns the current auto-like data object
  - [saveAutoLikeData()](#saveautolikedata) 🔒 - Overwrites the current auto-like data object with the provided one
  - [fetchVideoVotes()](#fetchvideovotes) - Fetches the approximate like and dislike count for the video with the specified ID
- Other:
  - [NanoEmitter](#nanoemitter) - Abstract class for creating lightweight, type safe event emitting classes
  - [MultiNanoEmitter](#multinanoemitter) - Subclass of NanoEmitter that allows you to listen to multiple events at once
  - [formatNumber](#formatnumber) - Formats a number with the configured locale and passed or configured format

<br><br>

> ### registerPlugin()
> Signature:
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
> The function will either throw an error if the plugin object is invalid, or return a registration result object.  
> The error message will contain a list of problems with the passed definition.  
> Search for `type PluginRegisterResult` in the file [`src/types.ts`](./src/types.ts) to see the properties of the returned object.  
>   
> The returned properties include:  
> - `token` - A private token that is used for authenticated function calls and that **should not be persistently stored** beyond the current session
> - `events` - A [MultiNanoEmitter](#multinanoemitter) instance that allows you to listen for plugin-specific events that are dispatched by BetterYTM.  
>   To find a list of all events, search for `PluginEventMap` in the file [`src/types.ts`](./src/types.ts)
> - `info` - The info object that contains all data other plugins will be able to see about your plugin
> 
> <details><summary><b>Complete example <i>(click to expand)</i></b></summary>
> 
> ```ts
> // Search for "type PluginDef" in "src/types.ts" to see the whole type
> const pluginDef = {
>   plugin: { // required
>     // The name and namespace should combine to be unique across all plugins
>     // Also, you should never change them after releasing the plugin, so other plugins can rely on them as an identifier
>     name: "My cool plugin",                     // required
>     namespace: "https://github.com/MyUsername", // required
>     version: "4.2.0",                           // required
>     iconUrl: "https://picsum.photos/128/128",   // required
>     description: { // required
>       "en-US": "This plugin does cool stuff",      // required
>       "de-DE": "Dieses Plugin macht coole Sachen", // (all other locales are optional)
>       // (see all supported locale codes in "assets/locales.json")
>     },
>     license: { // (optional)
>       name: "MIT",                                // both required
>       url: "https://opensource.org/licenses/MIT", // both required
>     },
>     homepage: { // required
>       source: "https://github.com/MyUsername/MyCoolBYTMPlugin",     // required
>       other: "https://example.org/MyCoolBYTMPlugin",                // (optional)
>       bug: "https://github.com/MyUsername/MyCoolBYTMPlugin/issues", // (optional)
>       greasyfork: "...",                                            // (optional)
>       openuserjs: "...",                                            // (optional)
>     },
>   },
>   // The intents (requested permissions) the plugin needs to be granted by BetterYTM and the user to be able to use certain functions.
>   // Search for "enum PluginIntent" in "src/types.ts" to see all available values, then bitwise-OR all of them together to get the final intents number.
>   // If you have BYTM as a dependency/submodule, you can import the enum and join the values like so: `PluginIntent.Foo | PluginIntent.Bar`
>   // Set to 0 to indicate no permissions need to be granted.
>   intents: PluginIntent.ReadFeatureConfig | PluginIntent.CreateModalDialogs, // (optional, defaults to 0)
>   contributors: [ // (optional)
>     {                                            // (optional)
>       name: "MyUsername",                        // required
>       homepage: "https://github.com/MyUsername", // (optional)
>       email: "somedude420@hotmail.co.bd",        // (optional)
>     },
>     {                                              // (optional)
>       name: "SomeOtherGuy",                        // required
>       homepage: "https://github.com/SomeOtherGuy", // (optional)
>       email: "someotherguy@star-co.net.kp",        // (optional)
>     },
>   ],
> };
> 
> // private token for authenticated function calls (don't store this persistently, as your plugin gets a new one every page load!)
> let authToken: string | undefined;
> 
> // since some function calls require the token, this function can be called to return it once the plugin is fully registered
> export function getToken() {
>   return authToken;
> }
> 
> unsafeWindow.addEventListener("bytm:registerPlugin", (registerPlugin) => {
>   try {
>     // register the plugin
>     const { token, events } = registerPlugin(pluginDef);
> 
>     // store the private token for later use in authenticated function calls
>     authToken = token;
> 
>     // listen for the pluginRegistered event
>     events.on("pluginRegistered", (info) => {
>       console.log(`${info.name} (version ${info.version}) is registered`);
> 
>       onRegistered();
>     });
>     // for other events search for "type PluginEventMap" in "src/types.ts"
>   }
>   catch(err) {
>     console.error("Failed to register plugin:", err);
>   }
> });
> 
> // put your plugin's logic that depends on authentication in here so it only runs after registration
> function onRegistered() {
>   try {
>     // example authenticated function call:
>     const bytmFeatureConfig = unsafeWindow.BYTM.getFeatures(getToken());
>     if(!bytmFeatureConfig)
>       console.error("Failed to get feature config object, the token is probably somehow invalid");
>     else
>       console.log("Feature config object:", bytmFeatureConfig);
>   }
>   catch(err) {
>     console.error("Failed to run authenticated function call due to an underlying error:", err);
>   }
> }
> ```
> </details>

<br>

> ### getPluginInfo()
> Signatures:  
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
> - either:
>   - `name` - The "name" property of the plugin
>   - `namespace` - The "namespace" property of the plugin
> - or:
>   - `pluginDef` - A plugin definition object containing at least the `plugin.name` and `plugin.namespace` properties
>   
> The function will return `undefined` if the plugin is not registered or the token is invalid.  
> The type of the returned object can be found by searching for `type PluginInfo` in the file [`src/types.ts`](./src/types.ts)
> 
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> unsafeWindow.addEventListener("bytm:pluginsRegistered", () => {
>   const pluginInfo = unsafeWindow.BYTM.getPluginInfo(myToken, "My cool plugin", "https://github.com/MyUsername");
>   if(pluginInfo)
>     console.log(`The plugin '${pluginInfo.name}' with version '${pluginInfo.version}' is loaded`);
>   else
>     console.error("The plugin 'My cool plugin' is not registered");
> });
> ```
> </details>

<br>

> ### getLibraryHook()
> Signature:
> ```ts
> unsafeWindow.BYTM.getLibraryHook(token: string | undefined): LibraryHookObj | undefined
> ```
>   
> Description:  
> This function returns an object with functions and instances useful for core libraries or deeper-reaching plugins.  
> One such example is the [BYTMUtils library](https://github.com/Sv443/BYTMUtils), which contains many core functions and components BetterYTM depends on.  
>   
> ⚠️ Requires the intent `InternalAccess` to be granted, else always returns `undefined`.  
>   
> Arguments:  
> - `token` - The private token that was returned when the plugin was registered (if not provided, the function will throw an error)
>   
> The object returned by this function is a `LibraryHookObj` type, which contains the following properties:
> | Property | Type | Description |
> | :-- | :-- | :-- |
> | `emitInterface` | Function | Emits a generic, global interface event |
> | `emitSiteEvent` | Function | Emits an event using the siteEvents system |
> | `siteEvents` | [MultiNanoEmitter](#multinanoemitter) | Event emitting instance of the siteEvents system |
> | `addSelectorListener` | Function | Adds a listener checking for DOM changes using BYTM's own SelectorObserver instances |
> | `showPrompt` | Function | Shows a styled prompt dialog of the type `confirm`, `alert` or `prompt` |
> | `setGlobalProp` | Function | Sets a global property on the `unsafeWindow.BYTM` object |
> | `enableDiscardBeforeUnload` | Function | Enables discarding of the "beforeunload" window event (disables "unsaved data" popup) |
> | `disableDiscardBeforeUnload` | Function | Disables discarding of the "beforeunload" window event (reenables "unsaved data" popup) |

<br>

> ### getDomain()
> Signature:
> ```ts
> unsafeWindow.BYTM.getDomain(): "yt" | "ytm"
> ```
>   
> Description:  
> Returns the current domain of the page as a constant string.  
> It will return `"yt"` for YouTube and `"ytm"` for YouTube Music.  
> Throws an error if the domain is not supported by BetterYTM.  
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> try {
>   const domain = unsafeWindow.BYTM.getDomain();
> 
>   if(domain === "yt")
>     console.log("Running on YouTube");
>   else
>     console.log("Running on YouTube Music");^
> }
> catch(err) {
>   console.error("Running on an unsupported domain:", err);
> }
> ```
> </details>

<br>

> ### getResourceUrl()
> Signature:  
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

> ### getSessionId()
> Signature:  
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

> ### reloadTab()
> Signature:
> ```ts
> unsafeWindow.BYTM.reloadTab(): Promise<void>
> ```
>  
> Description:  
> Reloads the current tab while preserving video time and volume and making features like initial tab volume lower priority.  
> The tab will be reloaded, whether the video element is queryable in the DOM or not, but without video time and volume restoration in the latter case.

<br>

> ### setInnerHtml()
> Signature:  
> ```ts
> unsafeWindow.BYTM.setInnerHtml(element: HTMLElement, html?: Stringifiable | null): void
> ```
>   
> Description:  
> Sets the innerHTML property of the specified element to the provided string, after sanitizing it.  
> This is done for compatibility with the [Trusted Types API](https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API) and to prevent XSS attacks.  
> Uses the library [DOMPurify](https://github.com/cure53/DOMPurify) on default settings to sanitize the HTML.  
>   
> If the browser does not support the Trusted Types API, a regular `.innerHTML` assignment will be done.  
>   
> Arguments:  
> - `element` - The element to set the innerHTML property of
> - `html` - The HTML string to sanitize and set as the innerHTML property - if set to `undefined` or `null`, the innerHTML will be cleared
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> const myElement = document.querySelector("#myElement");
> const htmlString = "<img onload='alert(\"XSS attack!\")' src='https://picsum.photos/100/100'>";
> 
> unsafeWindow.BYTM.setInnerHtml(myElement, htmlString);
> ```
> </details>

<br>

> ### addSelectorListener()
> Signature:  
> ```ts
> unsafeWindow.BYTM.addSelectorListener<
>   TElem extends Element
> >(
>   observerName: ObserverName,
>   selector: string,
>   options: SelectorListenerOptions<TElem>
> ): void
> ```
>   
> Description:  
> Adds a listener to the specified [SelectorObserver](https://github.com/Sv443-Network/UserUtils/blob/main/docs.md#selectorobserver) instance that gets called when the element/s behind the passed selector is/are found.  
> They are immediately checked for and then checked again whenever the part of the DOM tree changes (elements get added or removed) that is observed by that specific SelectorObserver.  
>   
> The instances are chained together in a way that the least specific observer is the parent of the more specific ones.  
> This is done to limit the amount of checks that need to be run, especially on pages with a lot of dynamic content and if `continuous` listeners are used.  
> See the [UserUtils SelectorObserver documentation](https://github.com/Sv443-Network/UserUtils/blob/main/docs.md#selectorobserver) for more info and example code.  
>   
> ⚠️ Due to this chained architecture, the selector you pass can only start with an element that is a child of the observer's base element.  
> If you provide a selector that starts higher up or directly on the base element, the listener will never be called.  
> You can check which observer has which base element in the file [`src/observers.ts`](src/observers.ts)  
>   
> Arguments:  
> - `observerName` - The name of the SelectorObserver instance to add the listener to. You can find all available instances and which base element they observe in the file [`src/observers.ts`](src/observers.ts)
> - `selector` - The CSS selector to observe for changes.
> - `options` - The options for the listener. See the [UserUtils SelectorObserver documentation](https://github.com/Sv443-Network/UserUtils/blob/main/docs.md#selectorobserver)
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> // wait for the observers to exist
> unsafeWindow.addEventListener("bytm:observersReady", () => {
>   // use the "lowest" possible SelectorObserver (playerBar) to prevent unnecessary checks
>   // and call the listener as soon as the passed selector is found in the DOM
>   unsafeWindow.BYTM.addSelectorListener<HTMLAnchorElement>("playerBar", "#bytm-player-bar-lyrics-btn", {
>     listener: (lyricsBtnElem) => {
>       console.log("The player bar lyrics button was added or removed:", lyricsBtnElem);
>     },
>   });
> });
> ```
> </details>

<br>

> ### onInteraction()
> Signature:
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
> All events passed to the callback function automatically have the default behavior prevented and stop propagation, meaning no other listener of the same type will be called.  
> For keyboard events this only happens as long as the captured key is a valid interaction key (Space, Enter).  
>   
> Arguments:
> - `element` - The element to add the listeners to
> - `callback` - The function to call when the element is interacted with
> - `listenerOptions` - Optional event listener options (same as the third argument of `addEventListener`, shared between the keyboard and mouse event listeners)
>   
> - ⚠️ When using this function to call a class method, make sure to wrap the callback function in an arrow function (or `this.myMethod.bind(this)` call) to preserve the `this` context.
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> const myButton = document.querySelector("button#myButton");
> 
> // functional example:
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
> 
> // object-oriented example:
> class MyListener {
>   // called when the button is interacted with
>   private interact(event: MouseEvent | KeyboardEvent): void {
>     // since this method uses `this`, the callback needs to be provided correctly to not lose the context
>     try {
>       this.buttonElement.click();
>     }
>     catch {
>       this.listener(event);
>     }
>   }
> 
>   public doStuff(): void {
>     // - either wrap in an arrow function to preserve the `this` context:
>     // unsafeWindow.BYTM.onInteraction(myButton, (event) => this.interact(event));
> 
>     // - or use `this.interact.bind(this)` to preserve it:
>     // unsafeWindow.BYTM.onInteraction(myButton, this.interact.bind(this));
> 
>     // ⚠️ this is wrong, because the `this` context is not captured when the method is passed down via reference:
>     unsafeWindow.BYTM.onInteraction(myButton, this.interact);
>   }
> }
> 
> const listener = new MyListener();
> 
> listener.doStuff();
> ```
> </details>

<br>

> ### getVideoTime()
> Signature:  
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
> ⚠️ If the video element isn't available yet (like when not on the `/watch` page), the Promise will only resolve once the user navigates to the video page.  
> To solve this, you could use [`Promise.race()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race) in conjunction with [UserUtils' `pauseFor()` function](https://github.com/Sv443-Network/UserUtils/blob/main/docs.md#pausefor) to implement a timeout (see example).  
> You can also use the site event `bytm:siteEvent:pathChanged` to listen for navigation changes to know at which point this function should resolve quickly.  
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> const { BYTM: { UserUtils, ...BYTM } } = unsafeWindow;
> 
> try {
>   // race the video time with a timeout of 5 seconds:
>   const videoTime: number | undefined | null = await Promise.race([
>     // get the video time with 3 decimal digits:
>     BYTM.getVideoTime(3),
>     // resolve with undefined if the video time couldn't be determined after 5 seconds:
>     UserUtils.pauseFor(5000),
>   ]);
> 
>   if(typeof videoTime === "number")
>     console.log(`The video time is ${videoTime}s`);
>   else
>     console.error("Couldn't get the video time");
> }
> catch(err) {
>   console.error("Couldn't get the video time, probably due to automated interaction restrictions");
> }
> ```
> </details>

<br>

> ### getThumbnailUrl()
> Signature:
> ```ts
> unsafeWindow.BYTM.getThumbnailUrl(
>   videoID: string,
>   qualityOrIndex: "maxresdefault" | "sddefault" | "hqdefault" | "mqdefault" | "default" | 0 | 1 | 2 | 3
> ): string
> ```
>   
> Description:  
> Returns the URL to the thumbnail of the video with the specified video ID and quality (resolution).  
> If an index number is passed, 0 will return a very low resolution thumbnail and 1-3 will return a very low resolution preview frame from the video (if available).  
> For some videos, different qualities and indexes are not available. That is why using [`getBestThumbnailUrl()`](#getbestthumbnailurl) is recommended in most cases.  
>   
> Arguments:
> - `videoID` - The video ID of the video to get the thumbnail for
> - `qualityOrIndex` - The quality or index of the thumbnail to get. If no quality is specified, `maxresdefault` (highest resolution) is used.  
>   Quality values sorted by highest res first: `maxresdefault` > `sddefault` > `hqdefault` > `mqdefault` > `default`.
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> const thumbnailUrl = unsafeWindow.BYTM.getThumbnailUrl("dQw4w9WgXcQ", "maxresdefault");
> console.log(thumbnailUrl); // "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
> ```
> </details>

<br>

> ### getBestThumbnailUrl()
> Signature:
> ```ts
> unsafeWindow.BYTM.getBestThumbnailUrl(videoID: string): Promise<string | undefined>
> ```
>   
> Description:  
> Returns the URL to the best resolution thumbnail of the video with the specified video ID.  
> Will sequentially try to get the highest quality thumbnail available until one is found.  
> Resolution priority list: `maxresdefault` > `sddefault` > `hqdefault` > `0`  
>   
> This check is done by sending a HEAD request to each thumbnail URL and checking if the response status is 200.  
> Other qualities are not checked since that would be overkill (sending 4 requests is already a lot).  
>   
> If no thumbnail is found after `0` is checked, the Promise will resolve with `undefined`  
> May throw if an error occurs while fetching the thumbnails.  
>   
> Arguments:
> - `videoID` - The video ID of the video to get the thumbnail for
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> try {
>   const thumbnailUrl = await unsafeWindow.BYTM.getBestThumbnailUrl("dQw4w9WgXcQ");
>   if(thumbnailUrl)
>     console.log(thumbnailUrl); // "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
> }
> catch(err) {
>   console.error("Failed to get the best thumbnail URL:", err);
> }
> ```
> </details>

<br>

> ### fetchITunesAlbumInfo()
> Signature:
> ```ts
> unsafeWindow.BYTM.fetchITunesAlbumInfo(artist: string, album: string): Promise<ITunesAlbumObj[]>
> ```
>   
> Description:  
> Fetches the album info objects for the specified artist and album name from the Apple Music / iTunes API.  
> This can be used to get the album cover image URL and other information about the album.  
> You may change the resolution of the album image URLs behind the properties `artworkUrl60` and `artworkUrl100` to your liking (see example).  
>   
> For the type of the returned object, see the type `ITunesAlbumObj` in the file [`src/types.ts`](./src/types.ts)  
>   
> Arguments:
> - `artist` - The name of the primary artist - should be passed to [`sanitizeArtists()`](#sanitizeartists) first
> - `album` - The name of the album
> 
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> // fetch the album info for the specified artist and album name:
> const albumObjects = await unsafeWindow.BYTM.fetchITunesAlbumInfo(
>   unsafeWindow.BYTM.sanitizeArtists("The Beatles"),
>   "Abbey Road"
> );
> 
> if(albumObjects.length > 0) {
>   // try to find the best match:
>   const bestMatch = albumObjs.find((al) => (
>     (al.artistName === artist || al.artistName.toLowerCase() === artist.toLowerCase())
>     && (
>       al.collectionName === album
>       || al.collectionName.toLowerCase() === album.toLowerCase()
>       || al.collectionCensoredName === album
>       || al.collectionCensoredName.toLowerCase() === album.toLowerCase()
>     )
>   ));
>   // default to the first result if no best match was found:
>   const albumInfo = bestMatch ?? albumObjects[0]!;
> 
>   console.log("Album name:", albumObj.collectionName);
>   console.log("Album artist:", albumObj.artistName);
>   console.log("Album release date:", albumObj.releaseDate);
> 
>   // replace the 100x100 with 1800x1800 to get a much more high-res cover artwork URL:
>   const artwork1800 = albumObj.artworkUrl100.replace("100x100", "1800x1800");
>   console.log("Large cover artwork URL:", artwork1800);
> }
> else
>   console.error("No album info found for the specified artist and album name");
> ```
> </details>

<br>

> ### waitVideoElementReady()
> Signature:
> ```ts
> unsafeWindow.BYTM.waitVideoElementReady(): Promise<HTMLVideoElement>
> ```
>   
> Description:  
> Waits for the DOM to be ready and the video element to be queryable.  
> The Promise could potentially take a while, since it will only resolve if the `/watch` page is open and the video element is queryable and has the media buffered and ready.  
> If the video element already exists, the Promise will resolve immediately.  
>   
> If the user lingers on a page that doesn't have a video element, the Promise will only resolve after they navigate to the `/watch` page.  
> To curb this, you can listen to the site event `bytm:siteEvent:pathChanged` to know when the user navigates to a page where the video element is available, or use a timeout and `Promise.race()` to abort the call (see [`getVideoTime()`](#getvideotime) for an example)
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> const videoElement = await unsafeWindow.BYTM.waitVideoElementReady();
> console.log("DOM loaded and video element found:", videoElement);
> ```
> </details>

<br>

> ### getVideoElement()
> Signature:
> ```ts
> unsafeWindow.BYTM.getVideoElement(): HTMLVideoElement | null
> ```
>   
> Description:  
> Returns the video element on the current page or `null` if there is none.  
> Works on both YouTube and YouTube Music.  
> Contrary to [`waitVideoElementReady()`](#waitvideoelementready), this function will not wait until the video element is queryable in the DOM.  
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> // get the current video time and volume:
> const videoElem = unsafeWindow.BYTM.getVideoElement();
> if(videoElem.readyState && videoElem.readyState >= 2)
>   console.log("Video time:", videoElem.currentTime, "Video volume:", videoElem.volume);
> else
>   console.error("The video element is not ready yet");
> ```
> </details>

<br>

> ### getVideoSelector()
> Signature:
> ```ts
> unsafeWindow.BYTM.getVideoSelector(): string
> ```
>   
> Description:  
> Returns the CSS selector for the video element on the current page.  
> Works on both YouTube and YouTube Music.  
> 
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> // add CSS to an element that exists within the video element on both YT and YTM:
> const videoSelector = unsafeWindow.BYTM.getVideoSelector();
> const css = `${videoSelector} #my-element { border: 2px solid red; }`;
> const styleElem = unsafeWindow.BYTM.UserUtils.addGlobalStyle(css);
> styleElem.id = "my-element-style";
> ```
> </details>

<br>

> ### getCurrentMediaType()
> Signature:  
> ```ts
> unsafeWindow.BYTM.getCurrentMediaType(): "video" | "song"
> ```
>   
> Description:  
> Returns the type of media that is currently playing (works on YTM only).  
> It will return `"video"` for videos (manually uploaded to YT - plays an actual video) and `"song"` for songs (automatic YTM releases - only displays a static, square image).  
> Throws an error if [`waitVideoElementReady()`](#waitvideoelementready) hasn't been awaited yet.  
> On YT, this function will always return `"video"`.  
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> // only available on YTM:
> if(unsafeWindow.BYTM.getDomain() === "ytm") {
>   const mediaType = unsafeWindow.BYTM.getCurrentMediaType();
>   console.log(`The current media type is: ${mediaType}`); // "video" or "song"
> }
> ```
> </details>

<br>

> ### getLikeDislikeBtns()
> Signature:  
> ```ts
> unsafeWindow.BYTM.getLikeDislikeBtns(): {
>   likeBtn?: HTMLButtonElement,
>   dislikeBtn?: HTMLButtonElement,
>   btnRenderer?: HTMLElement,
>   likeState?: "LIKE" | "DISLIKE" | "INDIFFERENT",
> }
> ```
>   
> Description:  
> Returns the like and dislike buttons on either domain, if available.  
> The `btnRenderer` will be a parent element of both buttons.  
> The `likeState` property indicates the current state of the like button. It defaults to `undefined` if the buttons are not available.  
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> // get the like and dislike buttons:
> const { likeBtn, dislikeBtn, btnRenderer, likeState } = unsafeWindow.BYTM.getLikeDislikeBtns();
> if(likeBtn && dislikeBtn) {
>   console.log("Like button:", likeBtn);
>   console.log("Dislike button:", dislikeBtn);
>   console.log("Like state:", likeState); // "LIKE" | "DISLIKE" | "INDIFFERENT"
>   console.log("Button renderer:", btnRenderer);
> 
>   // call in response to a user interaction event to ensure the video/song is liked:
>   if(likeState !== "LIKE")
>     likeBtn.click();
> }
> else
>   console.error("Like and/or dislike button not available");
> ```
> </details>

<br>

> ### isIgnoredInputElement()
> Signature:  
> ```ts
> unsafeWindow.BYTM.isIgnoredInputElement(element: HTMLElement | null = document.activeElement): boolean
> ```
>   
> Description:  
> Returns true, if the given element (`document.activeElement` by default) is an input element, so that all other keypress event listeners need to be ignored.  
> This is very useful for global keypress listeners (like ones on the `document.body`), which would trigger on every keypress, even if the user is interacting with an input element, like when typing in the search bar or the comment box.  
> Determining whether the element is an input element is based on HTML IDs, classes and tag names, making it sophisticated and tailored to the YT and YTM pages, so some elements might not be supported by this function yet. In this case, please open an issue to get it added.  
>   
> Arguments:
> - `element` - The element to check. If not provided, the currently focused element (`document.activeElement`) is used.  
>   If the element is `null` (like when no argument is given and no element is focused), the function will always return `false`.
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> // add a global keypress listener to the document body:
> document.body.addEventListener("keydown", (event) => {
>   // check if the currently focused element is an input element:
>   if(unsafeWindow.BYTM.isIgnoredInputElement())
>     return console.warn("User is currently interacting with an input element, ignoring keypress event");
> 
>   console.log("The user is not typing in an input element");
>   doStuff();
> });
> 
> // or check a specific element:
> const myElement = document.querySelector("#myElement");
> console.log(unsafeWindow.BYTM.isIgnoredInputElement(myElement)); // true or false
> ```
> </details>

<br>

> ### setLocale()
> Signature:  
> ```ts
> unsafeWindow.BYTM.setLocale(token: string | undefined, locale: string): void
> ```
>   
> Description:  
> Sets the locale for BetterYTM's translations.  
> The new locale is used for all translations *after* this function is called.  
>   
> ⚠️ Requires the intent `WriteTranslations` to be granted, else always returns `undefined`.  
>   
> Arguments:  
> - `token` - The private token that was returned when the plugin was registered (if not provided, the function will do nothing).
> - `locale` - The locale to set. Refer to the keys of the object in [`assets/locales.json`](assets/locales.json) for a list of available locales.
> 
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> unsafeWindow.BYTM.setLocale(myToken, "en-GB");
> ```
> </details>

<br>

> ### getLocale()
> Signature:  
> ```ts
> unsafeWindow.BYTM.getLocale(): string
> ```
>   
> Description:  
> Returns the currently set locale.  
> Can be any key of the object in [`assets/locales.json`](assets/locales.json).  
> 
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> unsafeWindow.BYTM.getLocale(); // "en-US"
> 
> unsafeWindow.BYTM.setLocale("de-DE");
> 
> unsafeWindow.BYTM.getLocale(); // "de-DE"
> ```
> </details>

<br>

> ### hasKey()
> Signature:  
> ```ts
> unsafeWindow.BYTM.hasKey(key: string): Promise<boolean>
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
> await unsafeWindow.BYTM.hasKey("lyrics_rate_limited"); // true
> await unsafeWindow.BYTM.hasKey("some_key_that_doesnt_exist"); // false
> ```
> </details>

<br>

> ### hasKeyFor()
> Signature:  
> ```ts
> unsafeWindow.BYTM.hasKeyFor(locale: string, key: string): Promise<boolean>
> ```
>   
> Description:  
> Returns true if the specified translation key exists in the specified locale.  
> If the locale isn't loaded yet, it will be loaded before resolving the promise.  
>   
> Arguments:  
> - `locale` - The locale to check for the translation key in - refer to the keys of the object in [`assets/locales.json`](assets/locales.json).
> - `key` - The key of the translation to check for.
> 
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> await unsafeWindow.BYTM.hasKeyFor("en-GB", "lyrics_rate_limited"); // true
> await unsafeWindow.BYTM.hasKeyFor("en-GB", "some_key_that_doesnt_exist"); // false
> ```
> </details>

<br>

> ### t()
> Signature:  
> ```ts
> unsafeWindow.BYTM.t(key: TFuncKey, ...values: Stringifiable[]): string
> ```
>   
> Description:  
> Returns the translation for the provided translation key and currently set locale.  
> To see a list of translations, check the file [`assets/translations/en-US.json`](assets/translations/en-US.json)  
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
> // translated text: "My cool BYTM Plugin - Configuration" (if locale is en-US or en-GB)
> ```
> </details>

<br>

> ### tp()
> Signature:  
> ```ts
> unsafeWindow.BYTM.tp(key: TFuncKey, num: number | unknown[] | NodeList, ...values: Stringifiable[]): string
> ```
>   
> Description:  
> Returns the translation for the provided translation key, including pluralization identifier and currently set locale.  
> To see a list of translations, check the file [`assets/translations/en-US.json`](assets/translations/en-US.json)  
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

> ### tl()
> Signature:  
> ```ts
> unsafeWindow.BYTM.tl(locale: string, key: TFuncKey, ...values: Stringifiable[]): string
> ```  
>   
> Description:  
> Returns the translation for the provided translation key and locale.  
> Useful to get the translation for a specific locale without changing the currently set locale.  
>   
> Arguments:  
> - `locale` - The locale to get the translation for - refer to the keys of the object in [`assets/locales.json`](assets/locales.json).
> - `translationKey` - The key of the translation to get - find all translation keys in [`assets/translations/en-US.json`](assets/translations/en-US.json).
> - `...values` - A spread parameter of values that can be converted to strings to replace the numbered placeholders in the translation with.
> 
> For an example, see [`t()`](#t) which behaves in the same way, but uses the currently set locale instead of a specified one.

<br>

> ### tlp()
> Signature:  
> ```ts
> unsafeWindow.BYTM.tlp(locale: string, key: TFuncKey, num: number | unknown[] | NodeList, ...values: Stringifiable[]): string
> ```  
>   
> Description:  
> Returns the translation for the provided translation key, including pluralization identifier and locale.  
> Useful to get the translation for a specific locale without changing the currently set locale.  
>   
> Arguments:  
> - `locale` - The locale to get the translation for - refer to the keys of the object in [`assets/locales.json`](assets/locales.json).
> - `key` - The key of the translation to get - find all translation keys in [`assets/translations/en-US.json`](assets/translations/en-US.json).
> - `num` - The number of items to determine the pluralization identifier from. Can also be an array or NodeList.
> - `...values` - A spread parameter of values that can be converted to strings to replace the numbered placeholders in the translation with.
>   
> For an example, see [`tp()`](#tp) which behaves in the same way, but uses the currently set locale instead of a specified one.

<br>

> ### getFeatures()
> Signature:  
> ```ts
> unsafeWindow.BYTM.getFeatures(token: string | undefined): FeatureConfig | undefined
> ```
>   
> Description:  
> Returns the current feature configuration object synchronously from memory.  
> To see the structure of the object, check out the type `FeatureConfig` in the file [`src/types.ts`](src/types.ts)  
> If features are set to be hidden using `valueHidden: true`, their value will be `undefined` in the returned object, unless the plugin was granted the `SeeHiddenConfigValues` intent.  
> In the future, a plugin intent (see [`registerPlugin()`](#registerplugin)) could grant access to the hidden values, but for now, they are only accessible to BetterYTM itself.  
>   
> ⚠️ Requires the intent `ReadFeatureConfig` to be granted, else always returns `undefined`.  
> If the intent `SeeHiddenConfigValues` is granted, hidden values will not be replaced with `undefined`. Only use this intent if there really is no conceivable other way of doing what you want to do.  
>   
> Arguments:
> - `token` - The private token that was returned when the plugin was registered (if not provided, the function will return undefined).
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> const features = unsafeWindow.BYTM.getFeatures(myToken);
> console.log(`The volume slider step is currently set to ${features.volumeSliderStep}`);
> ```
> </details>

<br>

> ### saveFeatures()
> Signature:  
> ```ts
> unsafeWindow.BYTM.saveFeatures(token: string | undefined, config: FeatureConfig): Promise<void>
> ```
>   
> Description:  
> Overwrites the current feature configuration object with the provided one.  
> The object in memory is updated synchronously, while the one in GM storage is updated asynchronously once the Promise resolves.  
>   
> ⚠️ No validation is done on the provided object, so make sure it has all the required properties or you're gonna break stuff.  
> A good way to ensure that is to spread your modifications over the result of a call to [`getFeatures()`](#getfeatures) or [`getDefaultFeatures()`](#getdefaultfeatures)  
>   
> ⚠️ Requires the intent `WriteFeatureConfig` to be granted, else always returns `undefined`.  
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
>   // so this will already return the updated config:
>   console.log(unsafeWindow.BYTM.getFeatures(myToken));
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

> ### getDefaultFeatures()
> Signature:
> ```ts
> unsafeWindow.BYTM.getDefaultFeatures(): FeatureConfig
> ```
>   
> Description:  
> Returns the default feature configuration object as a copy.  
> This object is used as a fallback if the user's configuration is missing properties or when the user first installs BYTM.  
> Since all hidden properties have not been populated with the user's sensitive data, this function will return the full object.

<br>

> ### fetchLyricsUrlTop()
> Signature:
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
> async function getLyricsUrl(artists: string, song: string) {
>   const artistsSan = unsafeWindow.BYTM.sanitizeArtists(artists);
>   const songSan = unsafeWindow.BYTM.sanitizeSong(song);
>   const lyricsUrl = await unsafeWindow.BYTM.fetchLyricsUrlTop(artistsSan, songSan);
> 
>   if(lyricsUrl)
>     console.log(`The lyrics URL for '${artist} - ${song}' is:`, lyricsUrl);
>   else
>     console.log("Couldn't find the lyrics URL");
> }
> 
> await getLyricsUrl("Michael Jackson", "Thriller");
> ```
> </details>

<br>

> ### getLyricsCacheEntry()
> Signature:
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
> function tryToGetLyricsUrl(artists: string, song: string) {
>   const artistsSan = unsafeWindow.BYTM.sanitizeArtists(artists);
>   const songSan = unsafeWindow.BYTM.sanitizeSong(song);
>   const cacheEntry = await unsafeWindow.BYTM.getLyricsCacheEntry(artistsSan, songSan);
> 
>   if(cacheEntry)
>     console.log(`The lyrics URL for '${artist} - ${song}' is:`, cacheEntry.url);
>   else
>     console.log("Couldn't find the lyrics URL in the cache");
> }
> 
> await tryToGetLyricsUrl("Michael Jackson", "Thriller");
> ```
> </details>

<br>

> ### sanitizeArtists()
> Signature:
> ```ts
> unsafeWindow.BYTM.sanitizeArtists(artists: string): string
> ```
>   
> Description:  
> Sanitizes the specified artist string to be used in fetching a lyrics URL.  
> This tries to strip out special characters and co-artist names, separated by a comma, bullet or ampersand.  
> Returns (hopefully) a single artist name with leading and trailing whitespaces trimmed.  
>   
> Arguments:  
> - `artists` - The string of artist name(s) to sanitize.
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> // usually artist strings will only have one of these characters but this is just an example
> const sanitizedArtists = unsafeWindow.BYTM.sanitizeArtists("   Michael Jackson    • Paul McCartney & Freddy Mercury, Frank Sinatra   ");
> console.log(sanitizedArtists); // "Michael Jackson"
> ```
> </details>

<br>

> ### sanitizeSong()
> Signature:
> ```ts
> unsafeWindow.BYTM.sanitizeSong(songName: string): string
> ```
>   
> Description:  
> Sanitizes the specified song title string to be used in fetching a lyrics URL.  
> This tries to strip out special characters and everything inside regular and square parentheses like `(Foo Remix)` or `[Bar Cover]`.  
> Also trims all leading and trailing whitespaces.  
>   
> Arguments:  
> - `songName` - The string of the song title to sanitize.
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> const sanitizedSong = unsafeWindow.BYTM.sanitizeSong("   Thriller (Tommy Cash Remix) [Freddy Mercury Cover]   ");
> console.log(sanitizedSong); // "Thriller"
> ```
> </details>

<br>

> ### getAutoLikeData()
> Signature:  
> ```ts
> unsafeWindow.BYTM.getAutoLikeData(token: string | undefined): AutoLikeData
> ```
>   
> Description:  
> Returns the current auto-like data object synchronously from memory.  
> To see the structure of the object, check out the type `AutoLikeData` in the file [`src/types.ts`](src/types.ts)  
>   
> ⚠️ Requires the intent `ReadAutoLikeData` to be granted, else always returns `undefined`.  
>   
> Arguments:
> - `token` - The private token that was returned when the plugin was registered (if not provided, the function will return an empty object).
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> const autoLikeData = unsafeWindow.BYTM.getAutoLikeData(myToken);
> 
> // check if the channel is added to the auto-like list and if it's currently enabled
> function isEnabledForChannel(channelId: string) {
>   return autoLikeData && autoLikeData.channels.find((ch) => ch.id === channelId && ch.enabled);
> }
> 
> // channelId can be in the format UC... or @username
> console.log(isEnabledForChannel("UCXuqSBlHAE6Xw-yeJA0Tunw"));
> ```
> </details>

<br>

> ### saveAutoLikeData()
> Signature:  
> ```ts
> unsafeWindow.BYTM.saveAutoLikeData(token: string | undefined, data: AutoLikeData): Promise<void>
> ```
>   
> Description:  
> Saves the provided auto-like data object synchronously to memory and asynchronously to GM storage.  
>   
> ⚠️ Requires the intent `WriteAutoLikeData` to be granted, else always returns `undefined`.  
>   
> Arguments:
> - `token` - The private token that was returned when the plugin was registered (if not provided, the function will return an empty object).
> - `data` - The full auto-like data object to save. No validation is done so if properties are missing, BYTM will break!
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> async function toggleAutoLikeForChannel(channelId: string, channelName: string) {
>   const autoLikeData = unsafeWindow.BYTM.getAutoLikeData(myToken);
>   const channelIndex = autoLikeData.channels.findIndex((ch) => ch.id === channelId);
> 
>   if(channelIndex > -1)
>     autoLikeData.channels[channelIndex].enabled = !autoLikeData.channels[channelIndex].enabled;
>   else
>     autoLikeData.channels.push({ id: channelId, name: channelName, enabled: true });
> 
>   await unsafeWindow.BYTM.saveAutoLikeData(myToken, autoLikeData);
> }
> 
> // channelId can be in the format UC... or @username
> toggleAutoLikeForChannel("UCXuqSBlHAE6Xw-yeJA0Tunw", "Linus Sex Tips").then(() => {
>   const newAutoLikeData = unsafeWindow.BYTM.getAutoLikeData(myToken);
>   console.log("Auto-like status for the channel was toggled. New data:", newAutoLikeData);
> });
> ```
> </details>

<br>

> ### fetchVideoVotes()
> Signature:
> ```ts
> unsafeWindow.BYTM.fetchVideoVotes(videoId: string): Promise<VideoVotesObj | undefined>
> ```
>   
> Description:  
> Fetches the approximate like and dislike counts for the specified video ID, using the [ReturnYoutubeDislike](https://returnyoutubedislike.com/) API.  
> RYD will approximate the votes based on historical data and users of the browser extension. The numbers will never be 100% accurate!  
> The object returned by this function has the structure of the `VideoVotesObj` type in the file [`src/types.ts`](src/types.ts)  
> If the video ID is not found or the API is down, the function will return `undefined`  
>   
> Arguments:  
> - `videoId` - The video ID to fetch the votes for (e.g. `dQw4w9WgXcQ`)
> 
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> async function getVotes() {
>   const votes = await unsafeWindow.BYTM.fetchVideoVotes("dQw4w9WgXcQ");
> 
>   if(!votes)
>     return console.error("Couldn't fetch the votes for this video");
> 
>   console.log(`The video has ${votes.likes} likes and ${votes.dislikes} dislikes`);
> }
> 
> getVotes();
> ```
> </details>

<br>

> ### onSiteEvent()
> Signature:  
> ```ts
> unsafeWindow.BYTM.onSiteEvent<K extends keyof TEventMap>(event: K, listener: TEventMap[K]): () => void
> ```
> 
> Description:  
> Registers a listener for the specified site event.  
> The listener will be called with the event data when the event is emitted, and may be called multiple times.  
> Returns a function that can be called to unsubscribe from the event.  
>   
> See the type `SiteEventsMap` in the file [`src/siteEvents.ts`](src/siteEvents.ts) for a list of available events and their data.

<br>

> ### onceSiteEvent()
> Signature:  
> ```ts
> unsafeWindow.BYTM.onceSiteEvent<K extends keyof TEventMap>(event: K, listener: TEventMap[K]): () => void
> ```
> 
> Description:  
> Registers a listener for the specified site event that will only be called once.  
> Returns a function that can be called to unsubscribe from the event.  
>   
> See the type `SiteEventsMap` in the file [`src/siteEvents.ts`](src/siteEvents.ts) for a list of available events and their data.

<br>

> ### onMultiSiteEvents()
> Signature:  
> ```ts
> unsafeWindow.BYTM.onMultiSiteEvents(events: Array<string>, options: MultiNanoEmitterOptions, cb: TEventMap[TKey]): Array<[event: string, unsub: () => void]>
> ```
> 
> Please refer to [the method `onMulti()` of the `MultiNanoEmitter` class](#multinanoemitter) for more information on this function.

<br>

> ### onceMultiSiteEvents()
> Signature:  
> ```ts
> unsafeWindow.BYTM.onceMultiSiteEvents(events: Array<string>, options: MultiNanoEmitterOptions, cb?: (args: [event: string, args: Parameters<TEvtMap[TKey]>]): Promise<[event: string, Parameters<TEvtMap[TKey]>]>
> ```
> 
> Please refer to [the method `onceMulti()` of the `MultiNanoEmitter` class](#multinanoemitter) for more information on this function.

<br>

> ### BytmDialog
> Signature:  
> ```ts
> new unsafeWindow.BYTM.BytmDialog(options: BytmDialogOptions): BytmDialog
> ```
>   
> A class that can be used to create and manage a modal dialog with a fully customizable header, body and footer.  
>   
> Features:
> - Can be opened, closed, mounted, unmounted and destroyed at any time for full control.
> - The dialog is fully responsive and can be used on any screen size, but will not exceed the provided maximum width and height.
> - Scrollability of the body is automatically removed and the body is set to be inert (ignore keyboard input) automatically. Also works with multiple dialogs open at the same time!
> - The dialog can be closed by clicking the background, pressing the escape key or clicking the close button (freely configurable).
> - Features many helper methods and events to make it more flexible and easier to work with.
> - Has an optional small mode for a more compact appearance.
> - If needed, the relatively uniform CSS naming conventions make it easy for the appearance to be overridden by a [BetterYTM plugin](#developing-a-plugin-that-interfaces-with-betterytm) or userstyle.
>   
> Options properties:
> | Property | Description |
> | :-- | :-- |
> | `id: string` | ID that gets added to child element IDs - has to be unique and conform to HTML ID naming rules! |
> | `width: number` | Maximum and target width of the dialog in pixels |
> | `height: number` | Maximum and target height of the dialog in pixels |
> | `closeOnBgClick?: boolean` | Whether the dialog should close when the background is clicked - defaults to true |
> | `closeOnEscPress?: boolean` | Whether the dialog should close when the escape key is pressed - defaults to true |
> | `closeBtnEnabled?: boolean` | Whether the close button should be enabled - defaults to true |
> | `destroyOnClose?: boolean` | Whether the dialog should be destroyed when it's closed - defaults to false |
> | `small?: boolean` | Whether the dialog should have a smaller overall appearance - defaults to false |
> | `verticalAlign?: string` | Where the dialog should be anchored vertically ("top", "center" or "bottom") - defaults to "center" |
> | `renderBody: () => HTMLElement │ Promise<HTMLElement>` | Called to render the body of the dialog |
> | `renderHeader?: () => HTMLElement │ Promise<HTMLElement>` | Called to render the header of the dialog - leave undefined for a blank header |
> | `renderFooter?: () => HTMLElement │ Promise<HTMLElement>` | Called to render the footer of the dialog - leave undefined for no footer |
> 
> <br>
> 
> Methods:  
> The methods from the [`MultiNanoEmitter`](#multinanoemitter) class are also available here.  
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
>   width: 500,
>   height: 300,
>   closeOnBgClick: true,
>   closeOnEscPress: true,
>   closeBtnEnabled: true,
>   destroyOnClose: false,
>   small: true,
>   verticalAlign: "top", // if the content's height changes, it's better to anchor it to the top or bottom
>   // add elements to the header, body and footer here, in one of these ways:
>   // - setInnerHtml(foo, "..."); // (see contributing guide)
>   // - foo.appendChild(document.createElement("..."));
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

> ### ExImDialog
> Signature:
> ```ts
> new unsafeWindow.BYTM.ExImDialog(options: ExImDialogOptions): ExImDialog
> ```
>   
> A subclass of [BytmDialog](#bytmdialog) that can be used to create and manage a generic export/import dialog.  
>   
> Features:
> - Has all the features of the [BytmDialog](#bytmdialog) class
> - Can be used to export and import any kind of data that can be serialized to a string
> - Built-in textareas for the user to paste or copy data to/from
> - Copy to clipboard button for the export textarea
> - Ability to copy a second variety of the data when shift-clicking the copy button
> - Exported data is hidden by default in case it contains sensitive information
> - Text can be given as a constant string or "lazy-loaded" via sync or async function
>   
> Options properties:  
> All properties from the [BytmDialog](#bytmdialog) class are available here as well, except for `renderHeader`, `renderBody` and `renderFooter`  
> | Property | Description |
> | :-- | :-- |
> | `title: string \| (() => (string \| Promise<string>))` | Title of the dialog |
> | `descImport: string \| (() => (string \| Promise<string>))` | Description of the dialog when importing |
> | `descExport: string \| (() => (string \| Promise<string>))` | Description of the dialog when exporting |
> | `onImport: (data: string) => void` | Callback function that gets called when the user imports data |
> | `exportData: string \| (() => (string \| Promise<string>))` | The data to export (or a function that returns the data as string, either sync or async) |
> | `exportDataSpecial?: string \| (() => (string \| Promise<string>))` | Optional variant of the data, used for special cases like when shift-clicking the copy button |
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> const exImDialog = new unsafeWindow.BYTM.ExImDialog({
>   id: "my-exim-dialog",
>   width: 500,
>   height: 400,
>   exportData,
>   exportDataSpecial,
>   onImport,
>   title: "My ExIm Dialog",
>   descImport: "Past the data you want to import below and click import!",
>   descExport: "Copy the data below to save it or share it with others. Warning: may contain sensitive information!",
> });
> 
> type MyDataType = { foo: string };
> 
> async function exportData() {
>   // compress the data to save space
>   const exportData = JSON.stringify({ foo: "bar" });
>   return await unsafeWindow.BYTM.UserUtils.compress(exportData, "deflate");
> }
> 
> function exportDataSpecial() {
>   // return the data uncompressed when shift-clicking the copy button
>   return JSON.stringify({ foo: "bar" });
> }
> 
> async function onImport(data: string) {
>   let decompData: string;
>   try {
>     // since the data could either be compressed or not, try to decompress it and see if it errors
>     decompData = await unsafeWindow.BYTM.UserUtils.decompress(data, "deflate");
>   }
>   catch {
>     // the data is not compressed, so just use it as is
>     decompData = data;
>   }
> 
>   let parsedData: MyDataType;
>   try {
>     parsedData = JSON.parse(decompData);
>   }
>   catch(err) {
>     console.error("The user imported invalid data");
>     return;
>   }
> 
>   console.log("The user successfully imported data:", parsedData);
> }
> 
> async function run() {
>   exImDialog.on("close", () => {
>     console.log("The dialog was closed");
>   });
> 
>   await exImDialog.open();
>   console.log("The dialog is now open");
> }
> 
> run();
> ```
> </details>

<br>

> ### MarkdownDialog
> Signature:
> ```ts
> new unsafeWindow.BYTM.MarkdownDialog(options: MarkdownDialogOptions): MarkdownDialog
> ```
>
> A subclass of [BytmDialog](#bytmdialog) that can be used to create and manage a dialog that renders its entire body using GitHub-flavored Markdown (and HTML mixins).  
> Note: the provided `id` will be prefixed with `md-` to avoid conflicts with other dialogs.  
>   
> Features:
> - Has all the features of the [BytmDialog](#bytmdialog) class
> - Can be used to display any kind of information in a dialog that can be written in Markdown
> - Supports GitHub-flavored Markdown and HTML mixins like `<details>` and `<summary>`
>   
> Options properties:  
> All properties from the [BytmDialog](#bytmdialog) class are available here as well, except for `renderBody` (which was replaced by `body`)  
> | Property | Description |
> | :-- | :-- |
> | `body: string \| (() => string \| Promise<string>)` | Markdown content to render in the dialog. Can be a string or a sync or async function that returns a string. |
>   
> Methods:  
> The methods from the [`MultiNanoEmitter`](#multinanoemitter) and [`BytmDialog`](#bytmdialog) classes are also available here.  
> - `static parseMd(md: string): Promise<string>`  
>   Parses the provided Markdown string (with GitHub flavor and HTML mixins) and returns the HTML representation as a string.
> - `protected renderBody(): Promise<void>`  
>   Renders the Markdown content to the dialog's body element. You can only override this method if you create a subclass of `MarkdownDialog`  
>   If you do, you can use `parseMd()` to render a custom mixture of Markdown HTML and JavaScript-created elements to the body.
> 
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> const markdownDialog = new unsafeWindow.BYTM.MarkdownDialog({
>   id: "my-markdown-dialog",
>   width: 400,
>   height: 600,
>   body: `\
> # Look at this table:
> | Column 1 | Column 2 |
> | --: | :-- |
> | Hello | World |
> 
> <br /><br /><br /><br />
> 
> <details>
>   <summary>Click me!</summary>
>   I'm a hidden text block!
> </details>`,
> });
> ```
> </details>

<br>

> ### createHotkeyInput()
> Signature:  
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

> ### createToggleInput()
> Signature:  
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

> ### createCircularBtn()
> Signature:
> ```ts
> unsafeWindow.BYTM.createCircularBtn(props: CircularBtnProps): Promise<HTMLElement>
> ```
> 
> Creates a circular button element containing an icon that can be used to trigger an action or navigate to a different page.  
> 
> Properties:
> - `title: string` - The title that is displayed when hovering over the button. Also used as a description for accessibility.
> - either of:
>   - `resourceName: string` - Name of the resource starting with `icon-` to use as the button icon (see [`assets/resources.json`](assets/resources.json))
>   - `src: string | Promise<string>` - URL of the image to use as the button icon
> - either of:
>   - `href: string` - URL to navigate to when the button is clicked or interacted with.
>   - `onClick: (evt: MouseEvent | KeyboardEvent) => void` - Function that's called when the button is clicked or interacted with
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

> ### createLongBtn()
> Signature:  
> ```ts
> unsafeWindow.BYTM.createLongBtn(props: LongBtnProps): Promise<HTMLElement>
> ```
>   
> Creates a long button element that can be used to trigger an action or navigate to a different page.  
> It can also be set up to act as a toggle button with rich CSS classes for customization.  
>   
> Properties:
> - `text: string` - The text to display on the button
> - `title: string` - The title of the button that is displayed when hovering over it. Also used as a description for accessibility
> - `iconPosition?: "left" | "right"` - The position of the icon relative to the text. Can be "left" or "right" (defaults to "left")
> - either of:
>   - `resourceName: string` - Name of the resource to use as the icon (see [`assets/resources.json`](assets/resources.json))
>   - `src: string` - URL of the image to use as the icon
> - either of:
>   - `href: string` - URL to navigate to when the button is clicked or interacted with.
>   - `onClick: (evt: MouseEvent | KeyboardEvent) => void` - Function to call when the button is clicked or interacted with
>   - `toggle: true` - Set to true to make the button act as a toggle button  
>     In addition, there are these props:
>     - `onToggle: (state: boolean, evt: MouseEvent | KeyboardEvent) => void` - Function to call when the button is interacted with
>     - `toggleInitialState?: boolean` - The initial value of the toggle button (optional, defaults to false)
>     - `togglePredicate?: (evt: MouseEvent | KeyboardEvent) => boolean` - Gets called every toggle attempt to determine if the state should swap and `onToggle` should be called
> 
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> // link:
> const linkBtn = unsafeWindow.BYTM.createLongBtn({
>   resourceName: "icon-help",
>   href: "https://example.com/help?topic=foo",
>   text: "Help",
>   title: "Click to open the help page for this topic",
>   iconPosition: "right",
> });
> 
> // button:
> const btn = unsafeWindow.BYTM.createLongBtn({
>   src: "https://example.com/icon.png",
>   onClick(evt: MouseEvent | KeyboardEvent) {
>     console.log("The button was clicked");
>   },
>   text: "Upload",
>   title: "Click to upload a file",
> });
> 
> // toggle:
> const toggleBtn = unsafeWindow.BYTM.createLongBtn({
>   resourceName: "icon-globe",
>   toggle: true,
>   toggleInitialState: true,
>   togglePredicate: (evt) => {
>     // don't toggle if shift is pressed and instead do something special
>     evt.shiftKey && doSomething(evt);
>     return !evt.shiftKey;
>   },
>   onToggle(state: boolean, evt: MouseEvent | KeyboardEvent) {
>     console.log(`The button was toggled ${state ? "on" : "off"}`);
>   },
>   text: "Toggle",
>   title: "Click to toggle something",
> });
> ```
> </details>

<br>

> ### createRipple()
> Signatures:  
> ```ts
> // if an element is provided, the ripple effect will be applied to it:
> unsafeWindow.BYTM.createRipple<TElement>(rippleElement: TElement, props?: RippleProps): TElement
> // if no element is provided, an empty div will be created with the ripple effect:
> unsafeWindow.BYTM.createRipple(rippleElement?: undefined, props?: RippleProps): HTMLDivElement
> ```
>   
> Creates a circular, expanding ripple effect on the specified element or creates a new one with the effect already applied if none is provided.  
> Returns either the new element or the initially passed one.  
> External CSS overrides can be used to change the color, size, speed values and opacity.  
> The exact speed values and variable names and locations can be found in [`src/components/ripple.css`](./src/components/ripple.css)
>   
> `RippleProps` properties:  
> - `speed?: string` - The speed of the ripple effect. Can be "fastest", "fast", "normal", "slow" or "slowest" (defaults to "normal").
> - `triggerEvent?: "mousedown" | "mouseup" | string` - The event that should trigger the ripple effect (defaults to "mousedown").
> - `additionalProps?: TElement | HTMLDivElement` - Additional properties to apply to the created or passed ripple element.
> 
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> const myBoringButton = document.querySelector("#my-boring-button");
> if(myBoringButton)
>   unsafeWindow.BYTM.createRipple(myBoringButton, { speed: "slowest" }); // it's as easy as this
> 
> // or create an empty div with the ripple effect:
> const myRippleDiv = unsafeWindow.BYTM.createRipple({ speed: "fast" });
> ```
> </details>

<br>

> ### showToast()
> Signatures:  
> ```ts
> unsafeWindow.BYTM.showToast(props: ToastProps): Promise<void>;
> unsafeWindow.BYTM.showToast(message: string): Promise<void>;
> ```
>   
> Shows a toast notification with the specified message or element for the given duration and anchored in the specified corner of the viewport.  
> If a toast is already shown, it will be immediately closed and the new one will be shown shortly afterwards.  
> If the second overload is used, the duration will default to the value of the `toastDuration` option in the feature config.  
>   
> Properties for first overload:
> - either:
>   - for showing a string:
>     - `message: string` - The message to show in the toast
>     - `subtitle?: string` - An optional subtitle to show below the message
>   - for showing a generic element:
>     - `element: HTMLElement` - The element to show in the toast
>     - `title: string` - The hover and accessibility title of the toast
> - and any of:
>   - `duration?: number` - Duration in milliseconds to show the toast for (defaults to what is set in the feature config) - use `Infinity` for a persistent toast and `0` to not show it at all
>   - `position?: ToastPos` - Corner position of the toast on the screen. Can be `"tl"`, `"tr"`, `"bl"` or `"br"` (defaults to `"tr"`)
> 
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> unsafeWindow.BYTM.showToast({
>   message: "Nothing suspicious here",
>   duration: 2524140,
>   position: "bl",
> });
> ```
> </details>

<br>

> ### showIconToast()
> Signature:  
> ```ts
> unsafeWindow.BYTM.showIconToast(props: IconToastProps): Promise<void>
> ```
>   
> Shows a toast notification with the specified icon, message and duration anchored in the specified corner of the viewport.  
> If a toast is already shown, it will be immediately closed and the new one will be shown shortly afterwards.  
>   
> Properties:
> - either:
>   - for showing a string:
>     - `message: string` - The message to show in the toast
>     - `subtitle?: string` - An optional subtitle to show below the message
>   - for showing a generic element:
>     - `element: HTMLElement` - The element to show in the toast
>     - `title: string` - The hover and accessibility title of the toast
> - and either:
>   - for using an &lt;img&gt; with a URL:
>     - `iconSrc: string | Promise<string>` - URL to the image file to use as the icon
>   - or when using a BYTM SVG resource:
>     - `icon: string` - Any SVG resource name (has to start with `icon-`!) to use as the icon (see [`assets/resources.json`](assets/resources.json))
>     - `iconFill?: string` - CSS color value to set the icon's &lt;path&gt; elements' `fill` property to
> - and any of:
>   - `duration?: number` - Duration in milliseconds to show the toast for (defaults to what is set in the feature config)
>   - `position?: ToastPos` - Corner position of the toast on the screen. Can be `"tl"`, `"tr"`, `"bl"` or `"br"` (defaults to `"tr"`)
> 
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> unsafeWindow.BYTM.showIconToast({
>   message: "This is an icon toast",
>   icon: "icon-help",
>   iconFill: "var(--bytm-warning-col)", // find all values in src/dialogs.css
>   duration: 3_000,
>   position: "bl",
> });
> ```
> </details>

<br>

> ### showPrompt()
> Signature:  
> ```ts
> unsafeWindow.BYTM.showPrompt(props: ShowPromptProps): Promise<boolean>
> ```
>   
> Shows a prompt dialog with the specified message and type.  
> If another prompt is already shown, it will be closed (and resolve as closed or canceled) and the new one will be shown immediately afterwards.  
>   
> If the type is `alert`, the user can only close the prompt.  
> In this case the Promise always resolves with `true`.  
>   
> For the type `confirm`, the user can choose between confirming or canceling the prompt.  
> In this case the Promise resolves with `true` if the user confirmed and `false` if the user canceled or closed.  
>   
> If the type `prompt` is used, the user can input a text value.  
> In this case the Promise resolves with the entered text if the user confirmed and `null` if the user canceled or closed.  
> If the user confirms with an empty text field, the Promise resolves with an empty string.  
> Additionally, the property `defaultValue` can be used to set the preset value for the input field.  
>   
> Properties:  
> - `message: string | ((type: string) => string | Promise<string>)` - The message to show in the prompt
> - `type: "confirm" | "alert" | "prompt"` - The type of the prompt. Can be "confirm", "alert" or "prompt"
> - for type "prompt" only:
>   - `defaultValue?: string` - The default value for the input field (only has an effect when using type "prompt")
> - for overriding button text and tooltips:
>   - `confirmBtnText?: string | ((type: string) => string | Promise<string>)` - Text for the confirm button (only when using type "confirm" or "prompt")
>   - `confirmBtnTooltip?: string | ((type: string) => string | Promise<string>)` - Tooltip for the confirm button (only when using type "confirm" or "prompt")
>   - `denyBtnText?: string | ((type: string) => string | Promise<string>)` - Text for the deny button (shows up for all types)
>   - `denyBtnTooltip?: string | ((type: string) => string | Promise<string>)` - Tooltip for the deny button (shows up for all types)
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> const itemName = await unsafeWindow.BYTM.showPrompt({
>   type: "prompt",
>   message: "Enter the name of the item to delete:",
>   // default value for the input field:
>   defaultValue: "My Item",
> });
> 
> const confirmed = itemName && await unsafeWindow.BYTM.showPrompt({
>   type: "confirm",
>   message: "Are you sure you want to delete this?",
>   confirmBtnText: "Yes, delete",
>   denyBtnText: "No, cancel",
>   // can also be sync or async functions:
>   confirmBtnTooltip: () => "Click to confirm the deletion",
>   // and the type parameter can be used for further customization:
>   denyBtnTooltip: async (type: "confirm" | "alert" | "prompt") => await getText(`prompts.${type}.cancel_deletion`),
> });
> 
> if(confirmed && itemName) {
>   await deleteItem(itemName);
>   unsafeWindow.BYTM.showPrompt({
>     type: "alert",
>     message: () => `Deleted "${itemName}" successfully.`,
>     // only the deny button is shown in alerts:
>     denyBtnText: "Sure thing",
>     denyBtnTooltip: "Click to close the dialog, bud",
>   });
> }
> else
>   console.log("The user canceled one of the prompts.");
> ```
> </details>

<br>

> ### formatNumber()
> Signature:
> ```ts
> unsafeWindow.BYTM.formatNumber(num: number, notation?: "short" | "long"): string
> ```
>   
> Formats a number according to the configured locale and notation (unless specified).  
> The default notation can be found in `numbersFormat` in `src/features/index.ts`  
>   
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> const { formatNumber, setLocale } = unsafeWindow.BYTM;
> 
> // (underscores in numbers are ignored in JS/TS)
> const num = 123_456_789;
> 
> setLocale(myToken, "de-DE");             // German's commas and dots are swapped compared to English:
> console.log(formatNumber(num, "short")); // 123,5 Mio.
> console.log(formatNumber(num, "long"));  // 123.456.789
> 
> setLocale(myToken, "hi-IN");             // In Hindi, the separators are sometimes every two digits:
> console.log(formatNumber(num, "long"));  // 12,34,56,789
> ```
> </details>

<br>

> ### NanoEmitter
> Signature:  
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

<br><br>

> ### MultiNanoEmitter
> Signature:
> ```ts
> new unsafeWindow.BYTM.MultiNanoEmitter<TEventMap>(settings: NanoEmitterSettings): MultiNanoEmitter
> ```
>   
> A subclass of [NanoEmitter](#nanoemitter) that can be used to create an event emitter whose listeners only trigger when one of, all, or a given subset of the events are emitted.  
> Everything in this class is the same as in [NanoEmitter](#nanoemitter), except for the new methods below.
>   
> Methods:
> - `onMulti(events: Array<string>, options: MultiNanoEmitterOptions, cb: TEventMap[TKey]): Array<[event: string, unsub: () => void]>`  
>   Registers a callback for the given events.  
>   `options` defines when the callback should be called, as well as allows passing an AbortSignal to cancel the listener at any time.  
>   The function returns an array of tuples, each containing the event name and a function to unsubscribe from that specific event. Note that unsubscribing events that are required to trigger the callback might mean it will never be called.
> - `onceMulti(events: Array<string>, options: MultiNanoEmitterOptions, cb?: (args: [event: string, args: Parameters<TEvtMap[TKey]>]): Promise<[event: string, Parameters<TEvtMap[TKey]>]>`  
>   Registers a callback for the given events that gets called only once. Alternatively, the returned Promise also resolves with the parameters that would have been passed to the callback at the same time.  
>   Differently to the regular `once()` method, this one returns a tuple of the event name that triggered the callback and the parameters that would have been passed to the callback.  
>   The `options` parameter is the same as in `onMulti()`.
> 
> ### MultiNanoEmitterOptions
> 
> | Property | Description |
> | :-- | :-- |
> | `waitFor?: "all" \| "any" \| (keyof TEvtMap \| "_")[]` | Whether to wait for all events or any event to be emitted, or a specific subset of events. |
> | `signal?: AbortSignal` | If provided, calling `abort()` on the signal will cancel each listener it was passed to and prevent them from being called. |
> 
> <details><summary><b>Example <i>(click to expand)</i></b></summary>
> 
> ```ts
> interface MyEvents {
>   foo: (val: number) => void;
>   bar: (val: number) => void;
> }
> 
> const emitter = new unsafeWindow.BYTM.MultiNanoEmitter<MyEvents>({
>   publicEmit: true, // allow calling emit() from outside this class instance
> });
> 
> const ac = new AbortController();
> 
> const unsubs = emitter.onMulti(["foo", "bar"], { waitFor: "any", signal: ac.signal }, ([event, args]) => {
>   // event is either "foo" or "bar"
>   console.log(`The event "${event}" was emitted with args:`, args);
> });
> 
> function unsubFrom(name: keyof MyEvents) {
>   // unsubscribe from the passed event name, if it exists
>   const unsubFns = unsubs.filter(([evt]) => evt === name);
>   for(const [, unsubFn] of unsubFns)
>     unsubFn();
> }
> 
> function unsubAll() {
>   // unsubscribe from all events ac.signal was passed to
>   ac.abort();
> }
> 
> 
> // randomly emits "foo" or "bar" after a short delay
> const randVal = unsafeWindow.BYTM.UserUtils.randRange(1);
> setTimeout(() => emitter.emit(randVal === 1 ? "foo" : "bar", randVal), 1000);
> ```
> </details>

<br><br>

## CSS selectors and variables for use in plugins:
Just like the JS functions and variables, BetterYTM also provides a set of CSS selectors and variables that can be used to assist when styling elements in a plugin.  
  
These are the available selectors:  

| Selector | Description |
| :-- | :-- |
| `.bytm-dom-yt` | Applied to the &lt;body&gt;, only when on YT |
| `.bytm-dom-ytm` | Applied to the &lt;body&gt;, only when on YT Music |
| `.bytm-no-select` | Prevents text selection on the element and all its children |
| `.bytm-generic-btn` | Needs to be applied to a button's wrapper element to give it the generic BetterYTM button appearance |
| `.bytm-generic-btn-img` | Needs to be given to the button's svg icon or img element so it gets styled correctly |
| `#bytm-dialog-container` | This is the container that holds all BytmDialog elements |

<br>

And these are the available CSS variables:  

| Variable | Type | Description |
| :-- | :-- | :-- |
| `--bytm-font-monospace` | `fonts` | Monospace font(s) used for code blocks and similar elements |
| `--bytm-themed-icon-col` | `hex_color` | Default color for icons that respects the page theme (on YT) |
| `--bytm-themed-bg-col` | `hex_color` | Default background color that prefers the theme set by the ThemeSong extension (on YTM only) |
| `--bytm-global-inner-width` | `px` | Inner width of the viewport |
| `--bytm-global-inner-height` | `px` | Inner height of the viewport |
| `--bytm-global-outer-width` | `px` | Outer width of the viewport |
| `--bytm-global-outer-height` | `px` | Outer height of the viewport |

<br><br><br><br><br><br>
