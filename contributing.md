## BetterYTM - Contributing Guide

<br>

#### Setting up the project for local development:
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