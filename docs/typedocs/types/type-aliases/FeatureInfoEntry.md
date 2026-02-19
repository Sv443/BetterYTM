[**betterytm**](../../README.md)

***

[betterytm](../../modules.md) / [types](../README.md) / FeatureInfoEntry

# Type Alias: FeatureInfoEntry

> **FeatureInfoEntry** = `object` & `FeatureTypeProps`

Defined in: [src/types.ts:647](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L647)

An entry of the feature info list in `src/features/index.ts`, containing all information necessary to construct the config menu, manage the persistent data, and instantiate the feature

## Type Declaration

### adornments?

> `optional` **adornments**: [`FeatAdornments`](FeatAdornments.md)

Array of functions returning HTML strings that are prepended to the feature's text description as icons

### advanced?

> `optional` **advanced**: `boolean`

Whether to only show this feature when advanced mode is activated (default false)

### category

> **category**: [`FeatureCategory`](FeatureCategory.md)

Feature category

### group

> **group**: `string`

Shared group name for related features - usually the name of the first feature or "main feature" (the feature that has the enable/disable toggle button) - groups features together in the config menu - don't use group names across cateogories!

### helpText?

> `optional` **helpText**: `string` \| () => `string`

HTML string that will be the help text for this feature  
Specifying a function is useful for pluralizing or inserting values into the translation at runtime

### renderValue()?

> `optional` **renderValue**: (`value`) => `string` \| `Promise`\<`string`\>

Transformation function called before the value is rendered in the config menu to modify it in fun ways

#### Parameters

##### value

`string`

#### Returns

`string` \| `Promise`\<`string`\>

### since

> **since**: `` `${number}.${number}.${number}` `` \| `` `${number}.${number}.${number}-${string}` ``

Semver version since when this feature key was added - adds a "new" adornment to the config menu item for a while

### supportedSites

> **supportedSites**: [`Domain`](Domain.md)[]

On which sites the feature is available

### valueHidden?

> `optional` **valueHidden**: `boolean`

Whether the value should be hidden in the config menu and from plugins
