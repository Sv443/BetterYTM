## Asset formats explained

<br>

### Images:
- Own PNG/JPG/GIF images are stored in [`assets/images`](./images)
- External images are stored in [`assets/images/external`](./images/external)
- The BYTM logo files are in [`assets/images/logo`](./images/logo)
- SVG icons are stored in [`assets/icons`](./icons)
- CSS stylesheets are in [`assets/style`](./style)
- Translations are in [`assets/translations`](./translations)

<br>

## JSON file formats:
> [!NOTE]
> 
> Note: a property that's followed by a question mark means it is optional.

<br>

### [`locales.json`](locales.json)
This file contains a definition of the available locales, which dictate the userscript header description, available locale setting values, translations and more.  
The keys of the object are the locale codes (which follow the [BCP 47 standard](https://en.wikipedia.org/wiki/IETF_language_tag)), and the values are objects with the following properties (all required):  
  
| Property         | Type       | Description                                                |
| :--------------- | :--------- | :--------------------------------------------------------- |
| `name`           | `string`   | The name of the locale in the locale's language            |
| `nameEnglish`    | `string`   | The name of the locale in English                          |
| `emoji`          | `string`   | The flag emoji of the locale                               |
| `userscriptDesc` | `string`   | The description of the userscript in the locale's language |
| `authors`        | `string[]` | The authors of the translations                            |
| `altLocales`     | `string[]` | Alternative locales that are similar to this one           |

<br>

### [`plugins.json`](plugins.json)
(Not implemented yet. As soon as a plugin is added, this needs to be fleshed out)  
  
<!-- TODO: For the structure of this array of objects, see `type PluginObj` in [`src/types.ts`](../src/types.ts) -->

<br>

### [`resources.json`](resources.json)
This file contains the resources that are loaded into the runtime through the `@resource` userscript directive.  
That includes icons, images, CSS files, fonts, translations and other assets.  
Configure which resources will always be fetched from the external asset source (GitHub's CDN) by editing the regexp patterns in the `alwaysExternalAssetPatterns` property.  
  
Inside the file is an object under the `resources` prop, whose keys are the resource names and the values are the path to the resource or a configuration object (props are listed in the table below).  
The path to the resource can be relative, in which case it's resolved relative to the `assets` directory.  
If it starts with a slash, it will be resolved relative to the project root (where `package.json` is).  
  
All values will be run through the function `resolveResourceVal()` in [`src/tools/post-build.ts`](./src/tools/post-build.ts) to replace placeholders with dynamic values.  
For example, `$BRANCH` will be replaced with the branch name. Find all possible replacements in that function's declaration.  
  
The configuration object can have the following properties:
| Property | Type     | Description              |
| :------- | :------- | :----------------------- |
| `path`   | `string` | The path to the resource |
| `ref?`   | `string` | The GitHub ref to use for the resource, e.g. `main`, a Git tag like `v2.0.0` or a commit hash - defaults to the branch resolved in [`src/tools/post-build.ts`](./src/tools/post-build.ts) |

<br>

### [`require.json`](require.json)
This file contains the npm libraries that are loaded into the runtime through the `@require` userscript directive.  
This is done to massively reduce the bundle size and make use of the userscript manager extension's caching.  
Each library will be set as an external in the [rollup configuration](../rollup.config.js) to prevent it from including it in the bundle.  
The version of each package will be parsed from [`package.json`](../package.json)'s `dependencies` or `devDependencies` to ensure consistent versions across the project.  
  
Inside the file is an array of objects, which each have one of the following properties:  
  
Using npm packages through a CDN:
| Property   | Type      | Description                                                                                            |
| :--------- | :-------- | :----------------------------------------------------------------------------------------------------- |
| `pkgName`  | `string`  | The name of the npm package, as in `npm i pkgName`                                                     |
| `path`     | `string`  | The path to the file that should be loaded, relative to the library root dir                           |
| `global`   | `string`  | The name of the global variable that the library exports                                               |
| `baseUrl?` | `string`  | Base URL of the CDN to use - `https://cdn.jsdelivr.net/npm/` by default - package will be appended as `pkgName@versionFromPkgJson` |
| `link?`    | `boolean` | Whether `npm link` is active and the library should be force-included in the bundle (false by default) |

Using a direct URL:
| Property | Type      | Description                                                                         |
| :------- | :-------- | :---------------------------------------------------------------------------------- |
| `url`    | `string`  | URL to the file to include                                                          |
| `global` | `string`  | The name of the global variable that the library exports                            |
| `link?`  | `boolean` | Whether `npm link` is active and the library should be force-included in the bundle |