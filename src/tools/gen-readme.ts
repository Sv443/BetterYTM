import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import locales from "../../assets/locales.json" assert { type: "json" };
import pluginsJson from "../../assets/plugins.json" assert { type: "json" };
import pkg from "../../package.json" assert { type: "json" };
import type { PluginDef } from "../types";

const readmePath = join(fileURLToPath(import.meta.url), "../../../README.md");
const readmeSummaryPath = join(fileURLToPath(import.meta.url), "../../../README-summary.md");

const changes = {
  HEADER: genHeader,
  PLUGINS: genPluginList,
};

const pluginList = pluginsJson as PluginDef[];
void ["TODO:", pluginList];

async function run() {
  const readmeFiles = [
    {
      path: readmePath,
      content: await readFile(readmePath, "utf-8"),
    },
    {
      path: readmeSummaryPath,
      content: await readFile(readmeSummaryPath, "utf-8"),
    },
  ];

  for(const { path, content } of readmeFiles) {
    console.info(`- Generating '${path}'`);

    const result = await modifyReadme(content.split(/\r?\n/gm), changes);

    await writeFile(path, result);
  }

  console.log("\n\x1b[32mReadme files generated successfully\x1b[0m\n");

  setImmediate(() => process.exit(0));
}

async function modifyReadme(readmeLines: string[], changes: Record<string, () => Promise<string>>) {
  let lines = [...readmeLines];
  let retLines = [] as string[];
  for(const [name, getContent] of Object.entries(changes)) {
    retLines = [];

    const beginRegex = new RegExp(`<!--\\s?<\\{\\{\\s?${name.toUpperCase()}\\s?\\}\\}>\\s?-->`, "gm");
    const endRegex = new RegExp(`<!--\\s?</\\{\\{\\s?${name.toUpperCase()}\\s?\\}\\}>\\s?-->`, "gm");

    // find line number that matches beginRegex
    const beginLine = lines.findIndex((line) => beginRegex.test(line));
    if(beginLine === -1)
      continue;

    // find line number that matches endRegex
    const endLine = lines.findIndex((line) => endRegex.test(line));
    if(endLine === -1)
      throw new Error(`No end tag found for ${name.toUpperCase()}`);

    // replace the content between the two lines
    const newContent = await getContent();
    retLines.push(...lines.splice(0, beginLine + 1));
    retLines.push(...newContent.split(/\r?\n/gm));
    retLines.push(...lines.splice(endLine - beginLine - 1));

    lines = [...retLines];
  }

  return retLines.length > 0 ? retLines.join("\n") : readmeLines.join("\n");
}

async function genHeader() {
  const langStr = Object.values(locales).reduce((acc, { nameEnglish, emoji }, i) => {
    return `${acc}${i > 0 ? ", " : ""}${emoji}&nbsp;${nameEnglish}`;
  }, "");
  return `\
<h1><img src="https://raw.githubusercontent.com/Sv443/BetterYTM/main/assets/images/logo/logo_128.png" width="96" height="96" /><br>${pkg.userscriptName}</h1>

### ${pkg.description}
Supported Languages: ${langStr}\
`;
}

async function genPluginList() {
  return `\
Currently there are no available plugins, but you can [submit an issue using the plugin submission template](https://github.com/Sv443/BetterYTM/issues/new/choose) so it will be listed here.  
Also refer to the [plugin creation guide](./contributing.md#developing-a-plugin-that-interfaces-with-betterytm) for more information on how to use the API to create a plugin.\
`;
}

run();
