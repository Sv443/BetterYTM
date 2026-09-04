# Almanac
Explains terms and concepts used throughout BetterYTM's codebase and plugin API.

- **[Plugins](#plugins)**
  - [Plugin Interface](#plugin-interface)
    - [Authenticated Interface Functions](#authenticated-interface-functions)
  - [Plugin Scripts](#plugin-scripts)
  - [Plugin Registration](#plugin-registration)
    - [Plugin Definition](#plugin-definition)
    - [Plugin Info](#plugin-info)
    - [Plugin Intents](#plugin-intents)
    - [Plugin Permissions](#plugin-permissions)
  - [Plugin List](#plugin-list)
  - [Developer Plugin](#developer-plugin)

<br><br>

## Plugins
Plugins are third-party scripts that can benefit from the work that has been done in BetterYTM to abstract certain aspects of its own fundamentals, as well as the websites it runs on.  
Refer to [the Plugin Interface section](#plugin-interface) for more info.

<br>

### Plugin Interface
> Also referred to as just "interface"
  
This encompasses the APIs exposed by BetterYTM that allow other [scripts / plugins](#plugin-scripts) to benefit from the work that has been done to abstract away complex tasks regarding interaction with the YTM and YT pages.  
  
For example, [`globalThis.BYTM.getVideoElement()`](../contributing.md#getvideoelement) can be used if you need access to the video element on the current page. This feature alone benefits from the fact BetterYTM runs on both YTM and YT, so on both sites the correct element will be returned, as well as the fact that BetterYTM [fetches data like CSS selectors remotely](#remote-data), which means this function has a high chance to continue working, even after a short downtime due to a page redesign.

<br>

### Authenticated Interface Functions
Contrary to the non-authenticated ones, functions like [`globalThis.BYTM.getBytmDialog()`](../contributing.md#getbytmdialog) require an [authentication token](#plugin-token) to be provided, else they will mostly just return `undefined` (while some others like [`globalThis.BYTM.getFeatures()`](../contributing.md#getfeatures) just return reduced data).  
This token is acquired after successfully [registering the script as a plugin.](#plugin-registration)

<br>

### Plugin Scripts
> Also referred to as just "plugin"
  
Any bit of JavaScript code that has access to the same tab (and the same [`window` object](https://developer.mozilla.org/en-US/docs/Web/API/Window)) BetterYTM runs on, can register itself as a plugin.  
This will expose some new functions that were previously not accessible on [BetterYTM's interface.](#plugin-interface)

<br>

### Plugin Registration
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

### Plugin List
This is a menu that can be opened via the BetterYTM configuration menu.  
It shows a list of all installed and [registered](#plugin-registration) plugins, including links to their homepage, bug tracker, etc., and the [permissions](#plugin-permissions) that were granted to them.  
The information is taken from each plugin's [definition object.](#plugin-definition)

<br>

### Developer Plugin
This plugin will be automatically created and [registered](#plugin-registration) when the script's [development mode](#development-mode) is active.  
It's mainly used in combination with a [GM menu command](#menu-commands) to get a token with full permissions for testing the [plugin interface](#plugin-interface) and does nothing else on its own.  
  
The plugin has a key in the format `${bytmNamespace}+${randomId}/Developer Plugin` and the same version as BetterYTM.  
`randomId` is an ID generated every time the plugin is registered. It's purposely random to discourage interaction with this plugin.
