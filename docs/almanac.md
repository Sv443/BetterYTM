# Almanac
Explains terms and concepts used throughout BetterYTM's codebase and plugin API.

- **[Internals](#internals)**
  - [TODO: Constants](#constants)
  - [Domains](#domains)
  - [TODO: Features](#features)
    - [Feature Info](#feature-info)
    - [Feature Key](#feature-key)
    - [TODO: Feature Configuration](#feature-configuration)
    - [Advanced Mode](#advanced-mode)
    - [Feature Adornments](#feature-adornments)
  - [TODO: User Interface](#user-interface)
    - [TODO: Configuration Menu](#configuration-menu)
  - [Build Information](#build-information)
    - [Build Mode](#build-mode)
    - [Build Time](#build-time)
    - [Build Number](#build-number)
    - [Build UID](#build-uid)
    - [Asset Source](#asset-source)
    - [Source Branch](#source-branch)
    - [Compatibility Mode](#compatibility-mode)
    - [Host Platform](#host-platform)
  - [TODO: Site Events](#site-events)
  - [TODO: Menu Commands](#menu-commands)
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
In `src/features/index.ts` the variable `featInfo` is exported, which contains a list of all of these features.  
  
This list is mainly used to create all the [config menu](#configuration-menu) options, but also other parts of the script, like the [interface events.](#interface-events)  
  
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

<br>

### Feature Configuration
> Also referred to as just "config(uration)".
  


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
foo

<br>

### Build Number
foo

<br>

### Build UID
foo

<br>

### Asset Source
foo

<br>

### Source Branch
foo

<br>

### Compatibility Mode
foo

<br>

### Host Platform
foo


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

