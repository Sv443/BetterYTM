## BetterYTM Docs - Getting Started

### Table of Contents
- [**Getting Started**](#getting-started)
  - [Background Knowledge](#background-knowledge)
  - [**Concepts**](#concepts)
  - [Interaction Summary](#interaction-summary)
  - [**Plugin Template**](#plugin-template)
  - [**TODO: Creating a Simple Plugin**](#creating-a-simple-plugin)
  - [**Most Useful API Features**](#most-useful-api-features)

<br>

## Getting Started
This section will walk you through the basics of using the BetterYTM API.  
1. Firstly, you will get the most out of this guide by [bringing some background knowledge.](#background-knowledge) This is not to discourage you, just know there are simply some things that will be harder to understand without the recommended knowledge.
2. Next, [take a look at the interaction summary](#interaction-summary) to get an overview of how the API works and what it can do.
3. Now you can start making your own plugins by making one from scratch, or [starting with the official plugin template.](#plugin-template)
  
- Take a look at [the most useful API features](#most-useful-api-features) to get a quick overview of the features I deemed commonly used in development or just overall useful.
- [The API Reference](#api-reference) will give you a detailed overview of all the API features, including code examples for each.

<br>

### Background Knowledge
**This guide assumes you're familiar with:**  
- Intermediate frontend JavaScript knowledge (DOM API, events, Promise API, etc.)
- Understanding JS types and being able to read and decipher TypeScript type declarations
- [Semantic versioning](https://semver.org/) for ensuring consistent compatibility and to emphasize breaking changes
- Basic knowledge of userscripts (I recommend starting with the [GreaseSpot wiki](https://wiki.greasespot.net/Greasemonkey_Manual) and [Violentmonkey guide](https://violentmonkey.github.io/guide/creating-a-userscript/))
- Reading the file [`license-for-plugins.txt`](./license-for-plugins.txt) to understand the licensing conditions for plugins
  
**The following would help a lot, but aren't strict prerequisites:**
- Intermediate TypeScript (for type safety and better autocomplete)
- Parts of the source code of BetterYTM.  
  I recommend looking at the files `src/interface.ts`, `src/types.ts`, `src/siteEvents.ts` and `src/observers.ts`, they contain the bulk of the API-relevant code, or can at least point you to the places where the API features are implemented.
- Being on the lookout for pull requests, since they will list new features and changes to the interface that you probably want to prepare for
- This document, as it contains most of the information you need to know about the BetterYTM interface, or at least points you to the places where you can find the actual information
- The [official plugin template](https://github.com/Sv443/BetterYTM-Plugin-Template) for a quick start with a plugin
- The fact you can [join my Discord server](https://dc.sv443.net) to ask questions or get help with writing your plugin

<br>

### Concepts
Firstly, here are some concepts and mechanics that are important to understand when working with BetterYTM:
- **Domains:**  
  BYTM works on both `music.youtube.com` and `www.youtube.com`, and has some domain-specific features, a different set of [SelectorObserver instances](./api.md#function-addselectorlistener) and events that only get emitted on a specific domain.  
  You can check which domain you're on with the [`getDomain()` function.](./api.md#function-getdomain)
- **Resources / Assets:**  
  BYTM has a set of resources (images, icons, CSS files, fonts, documents, etc.) that it uses internally and also makes available to plugins.
- **Constants:**  
  Some constants are available on `unsafeWindow.BYTM` that give you some generic info about BYTM, such as its version, build number, whether session storage is available and more.
- **DataStore:**  
  This class is currently provided by [UserUtils](https://github.com/Sv443-Network/UserUtils/blob/main/docs.md#datastore), but will soon be replaced by [CoreUtils' class of the same name.](https://github.com/Sv443-Network/CoreUtils/blob/main/docs.md#datastore)  
  It is a powerful JSON-based key-value store, that persists data in [GreaseMonkey stoarge](https://wiki.greasespot.net/GM_setValue) by default, and also supports data migrations from outdated formats, compression and bulk imports and exports including integrity check via [DataStoreSerializer.](https://github.com/Sv443-Network/UserUtils/blob/main/docs.md#datastoreserializer)  
  BYTM has many of these instances strewn throughout its codebase, for example to store the feature configuration, auto-like data, lyrics cache and more.
- **Observers / SelectorObserver instances / MutationObservers:**  
  BYTM uses [UserUtils' SelectorObserver class](https://github.com/Sv443-Network/UserUtils/blob/main/docs.md#selectorobserver) to watch for changes in the DOM, so each feature can be easily initialized at just the right time.  
  Internally, it leverages the [MutationObserver API](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) to do this somewhat efficiently.  
  The function [`addSelectorListener()`](./api.md#function-addselectorlistener) is a wrapper around BYTM's instances of this class that makes it very easy to use.  
  Please read up on the SelectorObserver documentation to understand the problems you may run into and how to avoid them.
- **Site Events:**  
  This is a generic event system based on [CoreUtils' NanoEmitter class](https://github.com/Sv443-Network/CoreUtils/blob/main/docs.md#nanoemitter) that is used for random BYTM features as well as an abstraction layer for stuff that happens on the site.  
  All site events are prefixed with `bytm:siteEvent:` and can be listened to with [the `onSiteEvent()` function](./api.md#function-onsiteevent) or via `unsafeWindow.addEventListener("...")`.
- **Interface Events:**  
  Interface events don't use the NanoEmitter class, but are instead emitted as [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) events on the `window` object, so they can be listened to with the standard [DOM event system](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).  
  They are prefixed with just `bytm:` and are mostly intended for plugin communication, which is why they're in a separate system.  
  All site events will also be emitted on the interface.
- **Components:**  
  BYTM also has a set of reusable UI components in the form of functions that create `HTMLElement` instances with a certain style and behavior.  
  Use them to more easily create your plugin's UIs and have a consistent look and feel with the rest of BYTM.  
    
  The [BytmDialog class](./api.md#function-getbytmdialog) is a very powerful and flexible dialog class that can be used to create modal dialogs with custom content, buttons, styles and behavior.  
  It is also the foundation for some of the predefined dialog subclasses, such as [MarkdownDialog](./api.md#function-getmarkdowndialog), [ExImDialog](./api.md#function-geteximdialog) and the [`showPrompt()` dialog.](./api.md#function-showprompt)
- **Translations:**  
  BYTM uses [UserUtils' translation system](https://github.com/Sv443-Network/UserUtils/blob/main/docs.md#translation) for a simple but still powerful enough way to translate strings.  
  Out of the box, it supports pluralization via key suffixes, nested keys (though BYTM doesn't yet), value interpolation and default language fallbacks.  
  Use the functions [`t()`](./api.md#function-t), [`tp()`](./api.md#function-tp), [`tl()`](./api.md#function-tl) and [`tlp()`](./api.md#function-tlp) to access BYTM's translations for the currently set locale, or a given locale.

<br>

### Interaction Summary
Generally, these are the ways to interact with the BetterYTM API:
1. **Event Listeners**:  
  You can listen for events that are emitted via these ways:  
    - **Interface Events**:  
      These events are emitted on the BetterYTM plugin interface via the `window` object and the [default DOM event system](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).  
      They all use the [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) interface, which means all associated data is in the form of a [tuple](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types) in the `detail` property.  
      They are also all prefixed with `bytm:` to avoid conflicts with other events.  
        
      Find a list of all interface events and the arguments they pass by searching for `type InterfaceEvents` in `src/interface.ts`.
    - **Site Events**:  
      This is a system that's used for script-internal features, so that they may communicate in that way.  
      They are also emitted on the `window` object, but are prefixed with `bytm:siteEvent:`.  
        
      Note that the arguments will be turned into a [tuple](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types) in the `detail` property of the event.  
      Find a list of all site events and the arguments they pass by searching for `type SiteEventsMap` in `src/siteEvents.ts`.  
    - **Plugin-specific Events**:  
      These events will be emitted on the `events` property returned by the [`registerPlugin()` function.](./api.md#function-registerplugin)  
      This includes a handful of special events only used for direct communication from BYTM to your plugin, as well as all interface and site events with their usual prefixes.  
      Note that the ones solely used for communication with your plugin will not have any prefix.  
        
      Find a list of these events by searching for `type PluginEventMap` in `src/types.ts`.  
2. **Interface Functions, Classes and Constants**:  
    - The API provides a set of utility functions, classes and constants that will no doubt come in handy when creating your plugin's features.  
      They are available on the `unsafeWindow.BYTM` object, which will exist before the plugin is registered.  
      To see the full structure of this object, search for `type BytmObject` in `src/types.ts`.  
      Note: the use of [`unsafeWindow`](https://www.tampermonkey.net/documentation.php?locale=en#api:unsafeWindow) is necessary where indicated, to be able to interact with the normally sandboxed `window` object in userscripts.  
    - [Click here for a summary of the most useful features.](#most-useful-api-features)  
    - Also [check out the full API Reference](./api.md) for a detailed overview of all functions, classes and constants, including code examples for each.
3. **Libraries**:  
  BetterYTM exposes a set of libraries that can be used without having to include them in your plugin:  
    - `unsafeWindow.BYTM.CoreUtils` contains all exported members from [the CoreUtils library.](https://github.com/Sv443-Network/CoreUtils)  
      It will soon be the main dependency of UserUtils, and contains some more utility functions and updated features from UserUtils, as well as updated versions of the classes and functions from `UserUtils`.
    - `unsafeWindow.BYTM.UserUtils` contains all exported members from [the UserUtils library.](https://github.com/Sv443-Network/UserUtils)  
      This DOM- & UserScript-specific library can register listeners for when CSS selectors exist, intercept events, manage persistent user configurations, allow you to modify the DOM more easily and more.  
      Large parts of it will soon be replaced by the CoreUtils library, so it is recommended to use the CoreUtils library where possible.
    - `unsafeWindow.BYTM.compareVersions` has all functions from [the compare-versions library.](https://npmjs.com/package/compare-versions)  
      Use it to compare semver-compliant version strings, for example to check if BYTM or another installed plugin is compatible with your plugin.

<br>

### Plugin Template
BetterYTM comes with a GitHub template repository that gives a solid starting point for your plugins.  
It includes the basic boilerplate that registers your plugin, some example code to help you get started, a modern, fast and efficient build toolchain, and some GitHub CI workflows.  
[**Click here to view the template repository and the instructions for setting it up.**](https://github.com/Sv443/BetterYTM-Plugin-Template#readme)  
  
- [The "creating a simple plugin" section](#creating-a-simple-plugin) will walk you through the process of creating a plugin using this template as a starting point.
- Since [the template is licensed under the Unlicense](https://github.com/Sv443/BetterYTM-Plugin-Template/blob/main/LICENSE.txt), the code is essentially in the public domain and you may change whatever you want, without any restrictions.  
- If you are not into the idea of hosting your code on GitHub, you may also clone or download and extract it, at the cost of not having the default CI workflows.

<br>

### Creating a Simple Plugin
In this section, we will use the [official plugin template](#plugin-template) to create a simple plugin that ...

<!--

TODO:
1. Setup repo
2. Replace placeholders
3. Create plugin definition object
4. Register plugin
5. Add a feature / features that showcase:
  - adding interface and site event listeners
  - adding dom element listeners
  - creating a BYTM component element
  - reading constants

-->

<br>

### Most Useful API Features
This is just a non-exhaustive list of the API features and utilities that I find most useful:
- Functions:
  - [`addSelectorListener()`](./api.md#function-addselectorlistener) - Listen for an element matching a selector to exist or be updated.
  - [`function reloadTab()`](./api.md#function-reloadtab) - Reloads the current tab while remembering the volume and video time as well as disabling features like initial tab volume.
  - [`function setInnerHtml()`](./api.md#function-setinnerhtml) - Sets the inner HTML of an element using [DOMPurify](https://github.com/cure53/DOMPurify) and the [Trusted Types API.](https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API)
  - [`function onInteraction()`](./api.md#function-oninteraction) - Listen for a user interaction event, such as a click or spacebar press.
  - [`function getVideoTime()`](./api.md#function-getvideotime) - Returns the current video time in seconds.
  - [`function waitVideoElementReady()`](./api.md#function-waitvideoelementready) - Waits for the video element to be ready, and returns it.
  - [`function getLikeDislikeBtns()`](./api.md#function-getlikedislikebtns) - Returns the current like/dislike state, the like and dislike buttons, as well as their container element.
  - [`function isIgnoredInputElement()`](./api.md#function-isigoredinputelement) - Checks if the currently focused element is an input element, so that other interactions can be ignored.
  - [`function onSiteEvent()`](./api.md#function-onsiteevent) - Listen for a specific site event.
  - [`function onMultiSiteEvents()`](./api.md#function-onmultisiteevents) - Listen for multiple site events at once.
  - [`function resourceAsString()`](./api.md#function-resourceasstring) - Returns the cached content of a BYTM resource as a string.
  - [`function showToast()`](./api.md#function-showtoast) - Shows a toast notification.
  - [`function showPrompt()`](./api.md#function-showprompt) - Shows a modal dialog mimicking the native `prompt()`, `alert()` and `confirm()` functions.
  - [`function formatNumber()`](./api.md#function-formatnumber) - Formats a number with the configured locale and passed or configured format.
  - [`function getInternals()`](./api.md#function-getinternals) - Returns a selection of internal functions and objects that can be used by core libraries and deeper reaching plugins.
- Classes:
  - [`function getBytmDialog()`](./api.md#function-getbytmdialog) - A generic dialog class that allows you to create and manage modal dialogs with custom content and styles.
  - [`function getMarkdownDialog()`](./api.md#function-getmarkdowndialog) - A dialog that displays markdown content.
  - [`class NanoEmitter`](./api.md#class-nanoemitter) - A class for creating lightweight, type-safe event emitters in OOP or FP style.
- Events:
  - [Event Overview and Timings](./api.md#overview-and-timings)
  - [`bytm:observersReady`](./api.md#bytm-observersready)
  - [`bytm:featureInitialized:id`](./api.md#bytm-featureinitialized-id)
  - [`bytm:allReady`](./api.md#bytm-allready)
  - [`bytm:dialogOpened:id`](./api.md#bytm-dialogopened-id)
  - [`bytm:siteEvent:configChanged`](./api.md#bytm-siteevent-configchanged)
  - [`bytm:siteEvent:queueChanged`](./api.md#bytm-siteevent-queuechanged)
  - [`bytm:siteEvent:autoplayQueueChanged`](./api.md#bytm-siteevent-autoplayqueuechanged)
  - [`bytm:siteEvent:songTitleChanged`](./api.md#bytm-siteevent-songtitlechanged)
  - [`bytm:siteEvent:watchIdChanged`](./api.md#bytm-siteevent-watchidchanged)
  - [`bytm:siteEvent:pathChanged`](./api.md#bytm-siteevent-pathchanged)
  - [`bytm:siteEvent:fullscreenToggled`](./api.md#bytm-siteevent-fullscreentoggled)

<br><br>

<div style="text-align: center;" align="center">

[🏠 API Docs - Home](./README.md) &nbsp; | &nbsp; [Next: API Reference ▶️](./api.md)
</div>
