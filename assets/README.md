## Asset formats explained

<br>

### Images:
- PNG images and external assets are stored in `assets/images`
- SVG images are stored in `assets/icons`
- CSS files in `assets/style`
- Translations are in `assets/translations`

<br>

## JSON file formats:
> [!NOTE]  
> Note: If a property is wrapped with square brackets (`[name]`), it means that the property is optional

<br>

### [`locales.json`](locales.json)
This file contains a definition of the available locales and translations.  
The keys of the object are the locale codes, and the values are the locale objects, with the following properties:  
  
| Property         | Type       | Description                                                |
| :--------------- | :--------- | :--------------------------------------------------------- |
| `name`           | `string`   | The name of the locale in the locale's language            |
| `nameEnglish`    | `string`   | The name of the locale in English                          |
| `emoji`          | `string`   | The flag emoji of the locale                               |
| `userscriptDesc` | `string`   | The description of the userscript in the locale's language |
| `authors`        | `string[]` | The authors of the translations                            |

<br>

### [`plugins.json`](plugins.json)
(Not fully implemented yet, but should still be filled out when a plugin is added)  
  
For the structure of this array of objects, see `type PluginObj` in [`src/types.ts`](../src/types.ts)

<br>

### [`require.json`](require.json)
This file contains the npm libraries that are loaded into the runtime through the `@require` userscript directive.  
It's an array of objects, which each have one of the following sets of properties:  
  
Using npm and a CDN:
| Property    | Type      | Description                                                                           |
| :---------- | :-------- | :------------------------------------------------------------------------------------ |
| `pkgName`   | `string`  | The name of the npm package, as in `npm i <pkgName>`                                  |
| `path`      | `string`  | The path to the file that should be loaded, relative to the library root dir          |
| `global`    | `string`  | The name of the global variable that the library exports                              |
| `[baseUrl]` | `string`  | Base URL of the CDN to use - `https://cdn.jsdelivr.net/npm/` by default               |
| `[link]`    | `boolean` | Whether `npm link` is active and the library should instead be included in the bundle |


Using a direct URL:
| Property | Type      | Description                                                                           |
| :------- | :-------- | :------------------------------------------------------------------------------------ |
| `url`    | `string`  | URL to the file to include                                                            |
| `global` | `string`  | The name of the global variable that the library exports                              |
| `[link]` | `boolean` | Whether `npm link` is active and the library should instead be included in the bundle |