import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import locales from "../../assets/locales.json" assert { type: "json" };
import pkg from "../../package.json" assert { type: "json" };

const readmePath = join(fileURLToPath(import.meta.url), "../../../README.md");
const readmeSummaryPath = join(fileURLToPath(import.meta.url), "../../../README-summary.md");

const changes = {
  HEADER: genHeader,
};

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
  const lines = [];
  for(const [name, getContent] of Object.entries(changes)) {
    const beginRegex = new RegExp(`<!--\\s?#\\{\\{\\s?${name.toUpperCase()}\\s?\\}\\}\\s?-->`, "gm");
    const endRegex = new RegExp(`<!--\\s?#\\{\\{\\s?/${name.toUpperCase()}\\s?\\}\\}\\s?-->`, "gm");

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
    lines.push(...readmeLines.splice(0, beginLine + 1));
    lines.push(...newContent.split(/\r?\n/gm));
    lines.push(...readmeLines.splice(endLine - beginLine - 1));
  }

  return lines.length > 0 ? lines.join("\n") : readmeLines.join("\n");
}

async function genHeader() {
  const langStr = Object.values(locales).reduce((acc, { nameEnglish, emoji }, i) => {
    return `${acc}${i > 0 ? ", " : ""}${emoji} ${nameEnglish}`;
  }, "");
  return `\
<h1><img src="./assets/logo/logo_128.png" width="96" height="96" /><br>${pkg.userscriptName}</h1>

### ${pkg.description}
Supported Languages: ${langStr}\
`;
}

run();
