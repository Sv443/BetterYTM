import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, readdirSync, existsSync, unlinkSync } from "node:fs";
import { join, resolve } from "node:path";

const rootDir = resolve(import.meta.dirname, "../..");
const changesetDir = join(rootDir, ".changeset");
const changelogPath = join(rootDir, "changelog.md");
const prevChangelogPath = `${changelogPath}.prev`;
const packageJsonPath = join(rootDir, "package.json");

console.log("Renaming current changelog file if it exists to preserve it.");
if(existsSync(changelogPath)) {
  writeFileSync(prevChangelogPath, readFileSync(changelogPath, "utf-8"), "utf-8");
  unlinkSync(changelogPath);
}

console.log("Collecting summaries from changeset files before they are consumed.");
const changesetFiles = readdirSync(changesetDir)
  .filter(f => f.endsWith(".md") && f !== "README.md");

const summaries = [];
for(const file of changesetFiles) {
  const content = readFileSync(join(changesetDir, file), "utf-8");
  // Split on the YAML frontmatter delimiters (---)
  const parts = content.split("---");
  if(parts.length >= 3) {
    const summary = parts.slice(2).join("---").trim();
    if(summary)
      summaries.push(summary);
  }
}

console.log("Running changeset version (bumps package.json version, removes changeset files).");
execSync("pnpm changeset version", { stdio: "inherit", cwd: rootDir });

console.log("Removing any auto-generated CHANGELOG.md (we maintain our own changelog.md).");
const autoChangelogPath = join(rootDir, "CHANGELOG.md");
if(existsSync(autoChangelogPath))
  unlinkSync(autoChangelogPath);

console.log("Skipping changelog update if there were no changeset entries.");
if(summaries.length === 0) {
  console.log("No changeset summaries found, skipping changelog update.");
  process.exit(0);
}

console.log("Reading the new version from package.json.");
const pkg = JSON.parse(readFileSync(packageJsonPath, "utf-8"));
const newVersion = pkg.version;

console.log("Building the new changelog entry in the project's existing format.");
const entryBody = summaries.join("\n\n");
const newEntry = [
  "",
  `<!-- #region ${newVersion} -->`,
  `## ${newVersion}`,
  entryBody,
  "",
  '<div class="split"></div>',
  "<br>",
].join("\n");

console.log("Renaming previous changelog file back.");
if(existsSync(prevChangelogPath)) {
  const oldContent = readFileSync(prevChangelogPath, "utf-8");
  writeFileSync(changelogPath, oldContent, "utf-8");
  unlinkSync(prevChangelogPath);
}

console.log("Inserting changes after the first 'div.split' element in changelog.md.");
const changelog = readFileSync(changelogPath, "utf-8");
const splitMarker = '<div class="split"></div>';
const firstSplitIdx = changelog.indexOf(splitMarker);
if(firstSplitIdx === -1)
  throw new Error("Could not find the first split marker in changelog.md");

const insertAfter = firstSplitIdx + splitMarker.length;
const updatedChangelog = changelog.slice(0, insertAfter) + "\n" + newEntry + changelog.slice(insertAfter);

writeFileSync(changelogPath, updatedChangelog, "utf-8");
console.log(styleText("green", `Updated changelog.md with version ${newVersion}`));
