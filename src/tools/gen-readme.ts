import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import type { PluginDef } from "../types.js";
import locales from "../../assets/locales.json" with { type: "json" };
import pluginsJson from "../../assets/plugins.json" with { type: "json" };
import pkgJson from "../../package.json" with { type: "json" };

/** Map of section name and an async function that returns the new content for that section */
const changes = {
  HEADER: genHeader,
  PLUGINS: genPluginList,
};

/** Get the path and content of all README files that need sections to be regenerated */
async function getReadmeFiles() {
  const readmePath = join(fileURLToPath(import.meta.url), "../../../README.md");
  const readmeSummaryPath = join(fileURLToPath(import.meta.url), "../../../README-summary.md");

  return [
    { path: readmePath, content: await readFile(readmePath, "utf-8") },
    { path: readmeSummaryPath, content: await readFile(readmeSummaryPath, "utf-8") },
  ];
}



const pluginList = pluginsJson as PluginDef[];
void ["TODO:", pluginList];

async function run() {
  const readmeFiles = await getReadmeFiles();

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

    const beginRegex = new RegExp(`\\s*<!--\\s?<\\{\\{\\s?${name.toUpperCase()}\\s?\\}\\}>\\s?-->\\s*`, "g");
    const endRegex = new RegExp(`\\s*<!--\\s?</\\{\\{\\s?${name.toUpperCase()}\\s?\\}\\}>\\s?-->\\s*`, "g");

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
    retLines.push("<!-- THIS IS GENERATED CONTENT - DO NOT MODIFY DIRECTLY -->");
    retLines.push(...newContent.split(/\r?\n/gm));
    retLines.push("<!-- END OF GENERATED CONTENT -->");
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
<h1><img src="https://raw.githubusercontent.com/Sv443/BetterYTM/main/assets/images/logo/logo_128.png" width="96" height="96" /><br>${pkgJson.userscriptName}</h1>

### ${pkgJson.description}
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
