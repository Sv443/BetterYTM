[**@sv443/betterytm**](../../README.md)

***

[@sv443/betterytm](../../modules.md) / [types](../README.md) / FeatureInfoEntry

# Type Alias: FeatureInfoEntry

> **FeatureInfoEntry** = `object` & `FeatureTypeProps`

Defined in: [src/types.ts:721](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L721)

An entry of the feature info list in `src/features/index.ts`, containing all information necessary to construct the config menu, manage the persistent data, and instantiate the feature.

## Type Declaration

### adornments?

> `optional` **adornments**: [`FeatAdornments`](FeatAdornments.md)

Array of functions returning HTML strings that are prepended to the feature's text description in the config menu.  
For a list of available adornments, search for `const adornments` in `src/features/index.ts`.

### advanced?

> `optional` **advanced**: `boolean`

Whether to only show this feature when advanced mode is activated (default is false).

### category

> **category**: [`FeatureCategory`](FeatureCategory.md)

Feature category, see [FeatureCategory](FeatureCategory.md)

### group

> **group**: `string`

Group name for related features - groups features together in the config menu.  
This is usually the name of the first feature or "main feature" (the feature that has the enable/disable toggle button) but can be any string.  
- ⚠️ Don't reuse group names across multiple cateogories!

### helpText?

> `optional` **helpText**: `string` \| () => `string`

String that may contain HTML that will be the help text for this feature.  
Specifying a function may be useful for pluralizing or inserting values into the translation at runtime.

### renderValue()?

> `optional` **renderValue**: (`value`) => `string` \| `Promise`\<`string`\>

Transformation function that will be called before the value is rendered in the config menu, to modify it in fun ways.

#### Parameters

##### value

`string`

#### Returns

`string` \| `Promise`\<`string`\>

### since

> **since**: `` `${number}.${number}.${number}` `` \| `` `${number}.${number}.${number}-${string}` ``

Semver version since when this feature was added. Responsible for showing the "new feature" icon in the config menu.

### supportedSites

> **supportedSites**: [`Domain`](Domain.md)[]

On which sites the feature is available.

### valueHidden?

> `optional` **valueHidden**: `boolean`

Whether the value should be hidden in the config menu (when of type "text") and from plugins that don't have the `SeeHiddenConfigValues` intent granted.
