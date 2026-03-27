[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/types](../README.md) / PluginDef

# Type Alias: PluginDef

> **PluginDef** = `object`

Defined in: [src/types.ts:331](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/types.ts#L331)

An object that describes a BYTM plugin

## Properties

### contributors?

> `optional` **contributors**: `object`[]

Defined in: [src/types.ts:368](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/types.ts#L368)

Info about the plugin contributors

#### email?

> `optional` **email**: `string`

(optional) Email address of this contributor

#### name

> **name**: `string`

Name of this contributor

#### url?

> `optional` **url**: `string`

(optional) URL to this plugin contributor's homepage / GitHub profile

***

### intents?

> `optional` **intents**: `number` \| [`PluginIntent`](../enumerations/PluginIntent.md)[]

Defined in: [src/types.ts:366](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/types.ts#L366)

Intents (permissions) BYTM has to grant the plugin for it to work - use bitwise OR to combine multiple intents

***

### plugin

> **plugin**: [`PluginInfo`](PluginInfo.md) & `object`

Defined in: [src/types.ts:332](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/types.ts#L332)

#### Type Declaration

##### description

> **description**: `Partial`\<`Record`\<keyof *typeof* [`assets/locales.json`](../../../assets/locales.json/README.md), `string`\>\> & `object`

Descriptions of at least en-US and optionally any other locale supported by BYTM.  
When an untranslated locale is set, the description will default to the value of en-US

###### Type Declaration

###### en-US

> **en-US**: `string`

##### homepage

> **homepage**: `object`

Homepage URLs for the plugin

###### homepage.bug?

> `optional` **bug**: `string`

URL to the plugin's bug tracker page, like GitHub issues.

###### homepage.changelog?

> `optional` **changelog**: `string`

URL to the plugin's changelog file.

###### homepage.greasyfork?

> `optional` **greasyfork**: `string`

URL to the plugin's GreasyFork page.

###### homepage.openuserjs?

> `optional` **openuserjs**: `string`

URL to the plugin's OpenUserJS page.

###### homepage.other?

> `optional` **other**: `string`

Any other homepage URL.

###### homepage.source

> **source**: `string`

URL to the plugin's source code (i.e. Git repo) - closed source plugins are not officially accepted at the moment.

##### iconUrl?

> `optional` **iconUrl**: `string`

URL to the plugin's icon - recommended size: 48x48 to 128x128

##### license?

> `optional` **license**: `object`

Optional license information for the plugin

###### license.name

> **name**: `string`

License [SPDX identifier](https://spdx.org/licenses/) or short name

###### license.url

> **url**: `string`

URL to the license text
