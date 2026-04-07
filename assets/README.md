## Assets explained

<br>

### Runtime:
All contents of the subfolders of `assets/` are **not** bundled into the userscript. Instead, they need to be fetched from the CDN at runtime. This is done to massively reduce the bundle size and to extend the cache lifetime of the assets.  
  
- Use the functions `getResourceUrl()` or `resourceAsString()` in `src/utils/misc.ts` to fetch the URL or content.  
- For dynamically loaded stylesheets in `assets/styles/` specifically, the `addStyleFromResource()` function in `src/utils/dom.ts` can be used to effortlessly add them to the page.  
  Note that CSS files included via `import ".../fileName.css";` in the source code are bundled into the file at `dist/BetterYTM.css` and will be automatically loaded into the page at initialization time via `injectCssBundle()` in `src/index.ts`.

<br>

### Images:
| Path | Contents |
| :-- | :-- |
| [`assets/images/`](./images/) | Own PNG/JPG/GIF images |
| [`assets/images/external/`](./images/external/) | External images |
| [`assets/images/logo/`](./images/logo/) | The BYTM logo files |
| [`assets/icons/`](./icons/) | SVG icons |
| [`assets/styles/`](./styles/) | Dynamically loaded CSS stylesheets |
| [`assets/translations/`](./translations/) | Translations |

<br>

## JSON file formats:
> [!NOTE]  
> A property that's followed by a question mark means it is optional.

<br>

### [`data.json`](data.json)
This file is used to serve a set of static data to the userscript, to be able to react to domain and layout changes faster and to be able to send out global announcements to users.  
Additionally, the userscript contains a fallback version of this file from the time of the build, which is used if the runtime version fails to load for any reason (e.g. GitHub being down or unresponsive, the remote file being renamed or deleted, etc.).  
  
It has the following contents:
| Property | Description |
| :-- | :-- |
| `formatVersion` | uint version number for the format of this file. If the runtime format doesn't match, only the bundled version of the static data will be used. |
| `domains` | Contains information about the domains the userscript supports, like the display name variations and a hostname-to-domain-identifier mapping. |
| `alerts` | A list of global announcements that should be shown to users in a dismissible dialog. Each announcement has a unique ID, a translatable title and message and constraints for a date or version range. The message supports markdown formatting and will be sanitized with DOMPurify to prevent potential XSS vulnerabilities. |
| `selectors` | Contains all CSS selectors used in the userscript, as a mapping of selector identifier and domain identifier to the actual selector string. This allows to react to layout changes by just updating the selectors in this file, without needing to change the userscript code and publish a whole new version and wait for users to slowly update to it. |

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
  
Configure which resources will always be fetched from the external asset source (GitHub's CDN) by editing the regexp pattern in the `externalAssetPattern` property.  
The regexp pattern at `preloadAssetPattern` defines which resources will be preloaded immediately on page load.  
Note that these regexp patterns need double escaping (e.g. `\\\"`) because they are stored as strings in JSON.  
  
Under the `resources` prop is an object, whose keys are the resource names and the values are the path to the resource or a configuration object (props are listed in the table below).  
The path to the resource can be relative, in which case it's resolved relative to the `assets` directory.  
If it starts with a slash, it will be resolved relative to the project root (where `package.json` is).  
Otherwise, it will be treated as a static URL.  
  
All values will be run through the function `resolveResourceVal()` in [`src/tools/post-build.ts`](../src/tools/post-build.ts) to replace placeholders with dynamic values.  
For example, `$BRANCH` will be replaced with the build branch name. Find all possible replacements in that function's declaration.  
  
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
  
Inside the file is an array of objects, which each have one of the following sets of properties:  
  
Using npm packages via a CDN:
| Property   | Type      | Description                                                                                            |
| :--------- | :-------- | :----------------------------------------------------------------------------------------------------- |
| `pkgName`  | `string`  | The name of the npm package, as in `npm i pkgName`                                                     |
| `path`     | `string`  | The path to the UMD or global var declaration bundle that should be loaded, relative to the library root dir |
| `global`   | `string`  | The name of the global variable that the library exports                                               |
| `baseUrl?` | `string`  | Base URL of the CDN to use - `https://cdn.jsdelivr.net/npm/` by default - package will be appended as `pkgName@versionFromPkgJson` |
| `link?`    | `string` | Includes the file at the given path (like to a library UMD bundle) in the final bundle via direct string injection |

Using a direct URL (not recommended because of potential versioning inconsistencies):
| Property | Type      | Description                                                                         |
| :------- | :-------- | :---------------------------------------------------------------------------------- |
| `url`    | `string`  | URL to the file to include                                                          |
| `global` | `string`  | The name of the global variable that the library exports                            |
| `link?`  | `string` | Includes the file at the given path (like to a library UMD bundle) in the final bundle via direct string injection |
