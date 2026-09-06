# Almanac
Explains terms and concepts used throughout BetterYTM's codebase and plugin API.

- **[Internals](#internals)**
  - [Constants](#constants)
  - [Domains](#domains)
  - [Features](#features)
    - [Feature Info](#feature-info)
    - [Feature Key](#feature-key)
    - [Feature Configuration](#feature-configuration)
    - [Config Data Migration](#config-data-migration)
    - [Advanced Mode](#advanced-mode)
    - [Feature Adornments](#feature-adornments)
  - [User Interface](#user-interface)
    - [Configuration Menu](#configuration-menu)
    - [Export & Import Dialog](#export--import-dialog)
    - [Markdown Dialog](#markdown-dialog)
  - [Build Information](#build-information)
    - [Build Mode](#build-mode)
    - [Build Time](#build-time)
    - [Build Number](#build-number)
    - [Build UID](#build-uid)
    - [Asset Source](#asset-source)
    - [Source Branch](#source-branch)
    - [Compatibility Mode](#compatibility-mode)
    - [Host Platform](#host-platform)
  - [Site Events](#site-events)
  - [TODO: Session ID](#session-id)
  - [TODO: Broadcasts](#broadcasts)
    - [TODO: Broadcast Packets](#broadcast-packets)
    - [TODO: TxID](#txid)
  - [TODO: Menu Commands](#menu-commands)
  - [TODO: Resources](#resources)
    - [TODO: Assets](#assets)
    - [TODO: Remote Static Data](#remote-static-data)
      - [TODO: Global Alerts](#global-alerts)
  - [TODO: Caches](#caches)
    - [TODO: Resource Cache](#resource-cache)
    - [TODO: Lyrics Cache](#lyrics-cache)
- **[Libraries](#libraries)**
  - [DataStore](#datastore)
  - [DataStoreSerializer](#datastoreserializer)
- **[Plugins](#plugins)**
  - [Plugin Interface](#plugin-interface)
    - [Authenticated Interface Functions](#authenticated-interface-functions)
    - [TODO: Interface Events](#interface-events)
  - [Plugin Scripts](#plugin-scripts)
  - [Plugin Registration](#plugin-registration)
    - [Plugin Definition](#plugin-definition)
    - [Plugin Info](#plugin-info)
    - [Plugin Intents](#plugin-intents)
    - [Plugin Permissions](#plugin-permissions)
  - [Plugin List](#plugin-list)
  - [Developer Plugin](#developer-plugin)


<br><br>
<hr />
<br><br>


<!-- #region internals -->
# Internals
This covers most internal systems used by BetterYTM.  
Contrary to the [information about plugins](#plugins), this section is only relevant for contributions to BetterYTM's codebase, or if you want to learn about the underlying systems behind the [plugin interface.](#plugin-interface)

<br>

## Constants
These are variables defined in the file [`src/constants.ts`](../src/constants.ts).  
They include the [build info](#build-information), as well as other static values that are used by BetterYTM at runtime.

<br>

## Domains
> Also referred to as "domain identifier" or "domain ID".
  
The URL domains BetterYTM supports.  
At the moment, the possible values are `yt` (YouTube) and `ytm` (YouTube Music).

<br>

## Features
BetterYTM's source code is split into the main boilerplate, and a modular system consisting of many features.  
Each feature has a [set of information](#feature-info) that defines the way the feature can be configured in the [config menu](#configuration-menu), as well as other parts of the script, like the [interface events.](#interface-events)

<br>

### Feature Info
BetterYTM divides its source code into the main boilerplate, and a [modular feature system.](#features)  
In [`src/features/index.ts`](../src/features/index.ts) the variable `featInfo` is exported, which contains a list of all of these features.  
  
This list is mainly used to create all the [config menu](#configuration-menu) options, but also influences other parts of the script, like the [interface events.](#interface-events)  
  
The `featInfo` object is keyed by a [feature key.](#feature-key)  
Each feature's information object has to have the following properties:
- `type`: Decides which HTML input element will be used for the config menu. This consists of simple elements like `text`, `number`, `slider`, `button` and `select` to `toggle` and `hotkey`. This also decides which other props can be specified. It's best to use the IDE's autocomplete for this.
- `category`: Defines which "tab" of the config menu the feature shows up in. Categories will use the translation key `feature_category.${category}`
- `group`: Used to group together features within the overarching categories. Groups will receive a header with the translation key `feature_group_header.${group}`
- `supportedSites`: Array of [domain identifiers](#domains) of sites where the feature is supported. The value can also influence whether a "YTM only" [feature adornment](#feature-adornments) shows up in the config menu.
- `since`: [Semver](https://semver.org/) version of which release the feature was first added in.
- `default`: The value of the feature before the user ever configures it. The type of value depends on the set `type` property.

These properties are optional (some may also depend on the `type` property if specified):
- `adornments`: Array of functions that return [adornment icons.](#feature-adornments)
- `reloadMenuPrompt`: Whether a prompt should be shown to reload the config menu when the option was changed (to re-render the menu).
- `reloadRequired`: Whether a page reload should be recommended to make changes take effect.
- `min`, `max`, `step`, `unit`: For numeric features, the upper and lower bounds, the step (input sensitivity), and an optional unit text to add next to the input.
- `advanced`: If set to true, the feature can only be configured if the [`advancedMode` feature](#advanced-mode) is enabled.

<br>

### Feature Key
This is a string that is used to identify each [feature.](#features)  
It's written in `camelCase` and there are a few conventions:
- Toggle features that turn a different option on or off usually end in `Enabled`
- Hotkey features usually end in `Hotkey`
- Feature keys are usually not edited after their initial creation, as that requires manual [config migration.](#config-data-migration)

<br>

### Feature Configuration
> Also referred to as just "config(uration)" or just "features".
  
An object that maps [feature keys](#feature-key) to the feature's current value, as displayed in the [config menu.](#configuration-menu)  
This data is stored in a [DataStore](#datastore) so its data can be migrated when the format gets updated in an incompatible way, and can be easily [serialized together with all other DataStores.](#datastoreserializer)

<br>

### Config Data Migration
The [feature configuration](#feature-configuration) is stored in a [DataStore](#datastore), and as such it has the ability to automatically migrate to an updated format when a provided format version integer is increased.  
This migration process is completely invisible to the user and will ensure that their selected configuration options will be respected for years and years to come, through many BetterYTM updates.  
  
For more information on the actual data migration process, check out the [`DataStore` class](https://github.com/Sv443-Network/CoreUtils/blob/main/docs.md#class-datastore) and [`DataMigrationsDict` type](https://github.com/Sv443-Network/CoreUtils/blob/main/docs.md#type-datamigrationsdict) documentation.

<br>

### Advanced Mode
This is a [BetterYTM feature](#features) that, if enabled, unlocks some more options in the [configuration menu](#configuration-menu), as well as some [menu commands.](#menu-commands)  
  
The feature can be found near the bottom of the "General" category and will prompt for a menu reload so the new options can be shown.  
  
As for the [menu commands](#menu-commands), click your userscript manager's icon in your browser's user interface, and you should find a list of commands offered by BetterYTM.

<br>

### Feature Adornments
> Also referred to as "adornment icons" or just "adornments".
  
These are icons that show up next to the [features](#features) in the [config menu](#configuration-menu), to quickly inform the user of certain things, like when a feature:
- only works on the [YTM domain.](#domains)
- needs a page reload to make config changes take effect.
- requires the [`advancedMode` feature](#advanced-mode) to be enabled to see the feature in the config mode.
- is privacy-sensitive (the feature may expose information about the user, as little as the IP address is enough to count).
- was added in the latest version (stops showing up after loading the page a certain amount of times).

<br>

## User Interface
The various ways BetterYTM visually modifies the page.  
This section touches on the [configuration menu](#configuration-menu) and the different [BytmDialog](#bytmdialog) instances for displaying modal dialogs.

<br>

### Configuration Menu
> Also referred to as just "config menu" or "config dialog".
  
This is the main dialog in BetterYTM.  
It's used for configuring every single [feature](#features), as well as displaying the [changelog](../changelog.md) and some of the [build information.](#build-information)  
  
The config menu can be opened in multiple ways:
- Via your userscript manager extension's menu commands (click its icon in your browser's menu bar).
- If the `watermarkEnabled` feature is on, by clicking the `BetterYTM` text under the logo on the YTM page.
- In the profile popover menu on the YTM page. <!-- TODO: and YT too -->
- In the left sidebar menu on the YT page.
  
Despite it looking similar to all other [`BytmDialog` instances](#bytmdialog), it is a fully separate implementation, as it existed way before that class was made.  
This has some unfortunate side effects like being bloated, having all sorts of custom event hooks to make it compatible with stacked `BytmDialog`s, etc.  
Another side effect is that the `bytm:dialogOpened[:id]` and `bytm:dialogClosed[:id]` [site events](#site-events) don't get passed an instance as the sole parameter.

<br>

### Export & Import Dialog
> Also referred to as "exim menu" or "ExImDialog".
  
This dialog is made using the [`BytmDialog` class.](#bytmdialog) It's used for exporting any arbitrary data, as long as it's in string form.  
Throughout BetterYTM it's used to export or import the [feature config data](#feature-configuration) and the auto-like feature's data.  
The export & import dialog can be opened from the footer of the respective dialog.  
  
For exporting, two sets of data can be supplied. The regular data will be shown in the `<textarea>` element and will be what's copied by default. The special data can only be obtained by shift-clicking the copy button. Usually this is used to gain access to the un-encoded data.  
When importing, both cases need to be implicitly covered by the implementation.

<br>

### Markdown Dialog
This dialog is made using the [`BytmDialog` class.](#bytmdialog) It will render an arbitrary Markdown string as its body using the [marked library](https://marked.js.org/) and the [GitHub-flavored Markdown syntax.](https://github.github.com/gfm/)  
It can also sanitize any interpolated HTML using DOMPurify (this prevents TrustedTypes-related errors on pages with a strict Content Security Policy).

<br>

## Build Information
> Also referred to as "static build info(rmation)", and closely related to ["constants"](#constants).
  
When BetterYTM is built (when its source code is turned into the final versions inside `dist/`), a chunk of data is injected into the final userscripts.  
  
This data can be viewed in a table inside the final userscript, by searching for `Build Information` (should be around line 100-200).  
To change it without having to go through the process of manually building BetterYTM, search for `var rawConsts` (or `rawConsts =`), and edit the variables below that line. Note that this could cause the script to stop working, so it's recommended to back up the code beforehand.  
  
The static build information consists of the following values:
- [Build Mode](#build-mode)
- [Build Time](#build-time)
- [Build Number](#build-number)
- [Build UID](#build-uid)
- [Asset Source](#asset-source)
- [Source Branch](#source-branch)
- [Compatibility Mode](#compatibility-mode)
- [Host Platform](#host-platform)

<br>

### Build Mode
> Also referred to as just "mode".
  
This string value can be either "development" or "production".  
The default mode is "production", which is what the versions are set to that are distributed on the release pages.  
  
In "development" mode, many parts of the script start exposing more information and setting default values that would make sense for a developer.  
For example:
- The config menu feature rows will gain a tooltip that exposes some of the information from the [feature info object.](#feature-info)

<br>

### Build Time
A [unix epoch](https://en.wikipedia.org/wiki/Unix_time) timestamp number of when the script was built.

<br>

### Build Number
8-character [Git commit SHA-1 hash](https://graphite.com/guides/git-hashing) of the commit before the build commit.  
This hash is used in various URLs to target very specific versions of the codebase's assets, to ensure each version of the script remains functional well into the future.

<br>

### Build UID
12-character alphanumeric ID that is randomly generated when the script is built.  
This ID is appended to URLs (like when fetching the changelog), to bypass any cached asset that might have become outdated after an updated version of BetterYTM was installed.

<br>

### Asset Source
Which source the asset is loaded from.  
Can be any of the following:
- `jsdelivr`: Preferred source, as it caches the assets longer than GitHub.  
  Loaded from the JSDelivr CDN (URL `https://cdn.jsdelivr.net/gh/Sv443/BetterYTM@${assetPath}`)
- `github`: Alternative source with minimal caching, useful when fetching the latest versions is paramount.  
  Loaded from the GitHub CDN (URL `https://raw.githubusercontent.com/Sv443/BetterYTM/${assetPath}`)
- `local`: Loaded from a locally running dev server (`pnpm serve` command).  
  (URL `http://localhost:8710${assetPath}?b=${buildUid}`)

<br>

### Source Branch
The [Git branch](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) that is targeted for most GitHub-repository-related actions, like fetching assets.

<br>

### Compatibility Mode
By default, a script compiled with `loose` compatibility will load its libraries using the [`@require` GreaseMonkey API](https://wiki.greasespot.net/Metadata_Block#@require).  
With `strict` compatibility (`pnpm build-prod-compat` or `pnpm build-dev-compat`), all libraries will be included in the bundled script, significantly increasing its size, but also improving dependency-related issues with different browsers and userscript manager extensions.

<br>

### Host Platform
The platform that is intended to host the built script.  
In general this only decides which of the three platforms (GitHub, Greasy Fork and OpenUserJS) are highlighted in user interfaces, but for Greasy Fork specifically, code comments are also stripped out to reduce the size so the script can fit in the 500kB size limit.

<br>

## Site Events
This is one of the two event systems used by BetterYTM (the other one being [interface events](#interface-events)).  
Site events either pertain to the contents of the site running BetterYTM changing, the URL path changing, or other changes of a similar nature.  
Additionally, some features will use site events to send data to each other; for example the `showVotes` feature announces when it updates, so the `swapLikeDislikeButtons` feature can apply its changes.  
  
The site events can be listened to via the [plugin interface](#plugin-interface) functions `onSiteEvent()`, `onceSiteEvent()` and `onMultiSiteEvents()`.  
The full `NanoEmitter` instance used for this system is also available via the interface function `getInternals()` when the [`InternalAccess` (256) intent](#plugin-intents) is granted. There are also the functions `emitInterface()` and `emitSiteEvent()` to emit custom or existing events from a plugin.  
  
For a list of all site events and their arguments, refer to the file [`src/siteEvents.ts`](../src/siteEvents.ts) and search for `type SiteEventsMap`.


<br><br>
<hr />
<br><br>


<!-- #region libraries -->
# Libraries
BetterYTM's source code depends on the following notable libraries:

- `@sv443-network/coreutils` - Core JavaScript utilities - exposed via `BYTM.CoreUtils`
  - [DataStore](#datastore) - Used for persistently storing migratable data in BetterYTM
- `@sv443-network/userutils` - Userscript and generic DOM utilities - exposed via `BYTM.UserUtils`
- `compare-versions` - Tiny library used for comparing and validating [semver versions](https://semver.org/) - exposed via `BYTM.compareVersions`
- `marked` - Used to render Markdown as HTML - available via `BYTM.parseMarkdown()`
- `dompurify` - Used to sanitize remotely fetched HTML in a [Trusted Types](https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API) compatible way, for added security - available via `BYTM.parseMarkdown()`, `BYTM.setInnerHtml()` and `BYTM.sanitizeHtml()`
- `tslib` - Helps importing other libraries and executing them in a more efficient way at runtime
  
Some of them are exposed via the [plugin interface](#plugin-interface), so plugins don't need to re-import the libraries as long as the required version isn't super specific.

<br>

## DataStore
[Click here for the full documentation.](https://github.com/Sv443-Network/CoreUtils/blob/main/docs.md#class-datastore)  
  
This class belongs to the [CoreUtils library](https://github.com/Sv443-Network/CoreUtils) and is used to store all the persistent data BetterYTM needs to function.  
It supports data migrations when a format version number is incremented, and works in a modular way using different engines, like the [GMStorageEngine](https://github.com/Sv443-Network/UserUtils/blob/main/docs.md#class-gmstorageengine) exported by the [UserUtils library.](https://github.com/Sv443-Network/UserUtils)  
  
Some of the data stored this way includes the [feature configuration](#feature-configuration), a [resource cache](#resource-cache), the channels for the auto-like feature, and more.

<br>

## DataStoreSerializer
[Click here for the full documentation.](https://github.com/Sv443-Network/CoreUtils/blob/main/docs.md#class-datastoreserializer)  
  
This class belongs to the [CoreUtils library](https://github.com/Sv443-Network/CoreUtils) and is used to export and import the data of multiple [DataStore instances](#datastore) at the same time.  
It is highly integrated in the whole DataStore ecosystem, dispatching useful events and offering extra methods that make working with multiple DataStores much easier in general.  
  
BetterYTM employs two global serializer instances (in [`src/serializers.ts`](../src/serializers.ts)):
- `serializer`: Contains all user-provided data, like the [feature config](#feature-configuration), auto-like channels, dismissed [global alerts](#global-alerts) and more.
- `fullSerializer`: Contains all DataStore instances, including all the ones with user-provided data and also ones used for caching data, like the [lyrics cache](#lyrics-cache), [resource cache](#resource-cache) and more.

<br><br>
<hr />
<br><br>


<!-- #region plugins -->
# Plugins
Plugins are third-party scripts that can benefit from the work that has been done in BetterYTM to abstract certain aspects of its own fundamentals, as well as the websites it runs on.  
Refer to [the Plugin Interface section](#plugin-interface) for more info.

<br>

## Plugin Interface
> Also referred to as just "interface"
  
This encompasses the APIs exposed by BetterYTM that allow other [scripts / plugins](#plugin-scripts) to benefit from the work that has been done to abstract away complex tasks regarding interaction with the YTM and YT pages.  
  
For example, [`globalThis.BYTM.getVideoElement()`](../contributing.md#getvideoelement) can be used if you need access to the video element on the current page. This feature alone benefits from the fact BetterYTM runs on both YTM and YT, so on both sites the correct element will be returned, as well as the fact that BetterYTM [fetches data like CSS selectors remotely](#remote-data), which means this function has a high chance to continue working, even after a short downtime due to a page redesign.

<br>

### Authenticated Interface Functions
Contrary to the non-authenticated ones, functions like [`globalThis.BYTM.getBytmDialog()`](../contributing.md#getbytmdialog) require an [authentication token](#plugin-token) to be provided, else they will mostly just return `undefined` (while some others like [`globalThis.BYTM.getFeatures()`](../contributing.md#getfeatures) just return reduced data).  
This token is acquired after successfully [registering the script as a plugin.](#plugin-registration)

<br>

## Plugin Scripts
> Also referred to as just "plugin"
  
Any bit of JavaScript code that has access to the same tab (and the same [`window` object](https://developer.mozilla.org/en-US/docs/Web/API/Window)) BetterYTM runs on, can register itself as a plugin.  
This will expose some new functions that were previously not accessible on [BetterYTM's interface.](#plugin-interface)

<br>

## Plugin Registration
BetterYTM allows [plugin scripts](#plugin-scripts) to go through an event-callback-driven registration process. This is a somewhat time-sensitive task and has to be done every single time the page loads, and will grant the plugin [a token in UUIDv4 format](#plugin-token), which it can use to call [authenticated functions](#authenticated-interface-functions) on [the interface.](#plugin-interface)  
  
Registration is done after the events [`bytm:preInitPlugin`](./api.md#bytm-preinitplugin) or [`bytm:registerPlugin`](./api.md#bytm-registerplugin) are emitted on the [`window` object.](https://developer.mozilla.org/en-US/docs/Web/API/Window) As the sole parameter, the [`registerPlugin()` function](../contributing.md#registerplugin) is passed, which takes a [plugin definition object](#plugin-definition) and returns the final information about the registered plugin, as well as which of the [requested intents](#plugin-intents) have been [granted as permissions.](#plugin-permissions)

<br>

### Plugin Definition
The plugin definition object contains all the information BetterYTM needs to identify plugins, display information about them in the [plugin list](#plugin-list), and to request [intents](#plugin-intents) to be granted and turned into [permissions](#plugin-permissions) by the user.

<br>

### Plugin Info
A reduced version of the [plugin definition object.](#plugin-definition)  
This contains all the information plugins are able to see about *each other*, while the full plugin definition is only visible to BetterYTM and the plugin itself.

<br>

### Plugin Token
> Also referred to as "auth(entication) token", or just "token"
  
A string in [UUIDv4 format](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random)) that is received by a [plugin script](#plugin-scripts) upon completing the [registration process](#plugin-registration) successfully. It can then be used to call [authenticated functions](#authenticated-interface-functions) on the [plugin interface.](#plugin-interface)

<br>

### Plugin Intents
When a [plugin script](#plugin-scripts) tries to [register with BetterYTM](#plugin-registration), it can request to gain access to a set of [plugin permissions.](#plugin-permissions)  
With permissions granted, certain functions are unlocked to the script that have had to be hidden by default to protect user privacy or inform them of what the installed plugin will be doing under the hood.  
  
Since these permissions first need to be granted by the user, a distinction is made between pre-registration permissions, which are called ***intents*** (since the plugin *intends* to get those permissions), and the actual user-granted, post-registration permissions called ***permissions*** (since the plugin now actually *has* the permissions).  
  
Intents are either specified as a [bit field / bit set](https://en.wikipedia.org/wiki/Bit_field) or an array of numbers corresponding to the permission enumeration members, when passing the [plugin definition](#plugin-definition) to the [`registerPlugin()` function.](../contributing.md#registerplugin)  
Search for "enum PluginIntent" in "src/types.ts" in the BetterYTM source code to see all available values.

<br>

### Plugin Permissions
After a [plugin script](#plugin-scripts) has [registered with BetterYTM](#plugin-registration), the user can decide which of the [requested intents](#plugin-intents) should actually be granted.  

<br>

## Plugin List
This is a menu that can be opened via the BetterYTM configuration menu.  
It shows a list of all installed and [registered](#plugin-registration) plugins, including links to their homepage, bug tracker, etc., and the [permissions](#plugin-permissions) that were granted to them.  
The information is taken from each plugin's [definition object.](#plugin-definition)

<br>

## Developer Plugin
This plugin will be automatically created and [registered](#plugin-registration) when the script's [development mode](#development-mode) is active.  
It's mainly used in combination with a [GM menu command](#menu-commands) to get a token with full permissions for testing the [plugin interface](#plugin-interface) and does nothing else on its own.  
  
The plugin has a key in the format `${bytmNamespace}+${randomId}/Developer Plugin` and the same version as BetterYTM.  
`randomId` is an 8-character alphanumeric ID generated every time the plugin is registered. It's purposely random to discourage interaction with this plugin.


<br><br>
<hr />
<br><br>

