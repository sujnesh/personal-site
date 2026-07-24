import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const [, , typeArg, ...titleParts] = process.argv;

if (!typeArg || titleParts.length === 0) {
	console.error('Usage: node scripts/new-entry.mjs <blog|project> "Title Here"');
	process.exit(1);
}

const title = titleParts.join(" ").trim();
const type = typeArg.toLowerCase();
const slug = title
	.toLowerCase()
	.replace(/[^a-z0-9]+/g, "-")
	.replace(/^-+|-+$/g, "");
const today = new Date().toISOString().slice(0, 10);

const configs = {
	blog: {
		dir: "src/content/blog",
		frontmatter: `---
title: "${title}"
description: "Write a short summary here."
pubDate: "${today}"
---
`,
		body: `
## Why This Matters

Write the main context in 2-3 lines.

## What I Tried

- Add your steps here
- Share what worked and what did not

## Key Takeaway

Add one clear takeaway.
`,
	},
	project: {
		dir: "src/content/projects",
		frontmatter: `---
title: "${title}"
description: "One-line summary of the project."
pubDate: "${today}"
status: "in-progress"
area: "Project area"
tags: ["tag-1", "tag-2"]
repoUrl: "https://github.com/sujnesh/repo-name"
---
`,
		body: `
## Overview

Describe what this project does.

## Highlights

- Feature or implementation detail
- Feature or implementation detail

## Next Steps

- What you plan to ship next
`,
	},
};

const config = configs[type];
if (!config) {
	console.error('Invalid type. Use "blog" or "project".');
	process.exit(1);
}

const outputDir = path.resolve(config.dir);
const outputPath = path.join(outputDir, `${slug}.md`);

await mkdir(outputDir, { recursive: true });
await writeFile(outputPath, `${config.frontmatter}\n${config.body}`, "utf8");

console.log(`Created ${type} draft: ${outputPath}`);
