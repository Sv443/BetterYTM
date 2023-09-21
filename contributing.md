## BetterYTM - Contributing Guide

<br><br>

### Submitting translations:
1. Copy the contents of the file [`assets/translations/en-US.json`](./assets/translations/en-US.json)
2. Replace the `en-US` part of the file name with the language code and locale code of the language you want to translate to
3. Change the metadata at the top of the file
4. Translate the strings inside the file, while making sure not to change the keys on the left side of the colon and to preserve the placeholders with the format %n, where n is an incremental number
5. If you want to submit a pull request with the translated file:
    1. Create a file in the folder [`assets/translations/`](./assets/translations/) with the format `langCode-localeCode.json`
    2. Insert your translated version of the original file
    3. Create the mapping in `src/translations.ts` at the top of the file
    4. Test your changes by following [this guide](#setting-up-the-project-for-local-development), then submit your pull request
6. Alternatively send it to me directly, [see my homepage](https://sv443.net/) for contact info

<br><br><br>

### Setting up the project for local development:
#### Requirements:
1. Have Node.js, npm and Git installed
2. Download and extract or clone this repo
3. Open a terminal in the project root and run `npm i`
4. Copy the file `.env.template` to `.env` and modify the variables inside to your needs.

<br>

#### These are the CLI commands available after setting up the project:
| Command | Description |
| --- | --- |
| `npm i` | Run once to install dependencies |
| `npm run build-prod` | Builds the userscript for production (minified) |
| `npm run build-dev` | Builds the userscript for development |
| `npm run dev` | Watches for any changes, then rebuilds and serves the userscript on port 8710, so it can be updated live if set up correctly in the userscript manager (see below). Configure request logging and more in `src/tools/serve.ts` |
| `npm run lint` | Builds the userscript with the TypeScript compiler and lints it with ESLint |

<br>

#### Extras:
When using ViolentMonkey, after running the command `npm run dev`, open [`http://localhost:8710/BetterYTM.user.js`](http://localhost:8710/BetterYTM.user.js) and select the `Track local file` option.  
This makes it so the userscript automatically updates when the code changes.  
Note: the tab needs to stay open on Firefox or the script will not update itself.