import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const readmePath = join(fileURLToPath(import.meta.url), "../../../README.md");
const readmeSummaryPath = join(fileURLToPath(import.meta.url), "../../../README-summary.md");

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

    const result = await modifyReadme(content.split(/\r?\n/gm), {
      HEADER: genHeader,
    });

    await writeFile(readmePath, result);
  }

  console.log("\n\x1b[32mReadme files generated successfully\x1b[0m\n");

  setImmediate(() => process.exit(0));
}

async function modifyReadme(readmeLines: string[], changes: Record<string, () => Promise<string>>) {
  for(const [name, getContent] of Object.entries(changes)) {
    const beginRegex = new RegExp(`<!--\\s?#\\{\\{${name.toUpperCase()}\\}\\}\\s?-->`, "gm");
    const endRegex = new RegExp(`<!--\\s?#\\{\\{/${name.toUpperCase()}\\}\\}\\s?-->`, "gm");

    // find line number that matches beginRegex
    const beginLine = readmeLines.findIndex((line) => beginRegex.test(line));
    if(beginLine === -1)
      continue;

    // find line number that matches endRegex
    const endLine = readmeLines.findIndex((line) => endRegex.test(line));
    if(endLine === -1)
      throw new Error(`No end tag found for ${name.toUpperCase()}`);

    // replace the content between the two lines
    const newContent = await getContent();
    readmeLines = [
      ...readmeLines.slice(0, beginLine + 1),
      newContent,
      ...readmeLines.slice(endLine),
    ];
  }

  return readmeLines.join("\n");
}

async function genHeader() {
  return `\
<h1><img src="./assets/logo/logo_128.png" width="96" height="96" /><br>BetterYTM</h1>

Test
### Lots of configurable layout and user experience improvements for YouTube Music
Supported Languages: 🇺🇸 English, 🇩🇪 German, 🇪🇸 Spanish, 🇫🇷 French, 🇮🇳 Hindi, 🇯🇵 Japanese, 🇵🇹 Portuguese, 🇨🇳 Chinese
`;
}

run();
