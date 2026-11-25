import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Agent Motto Battle — entry: one short original motto, 77 chars.
const MOTTO = "Ask me anything. I will answer confidently, incorrectly, and at great length.";

// The grader mounts the output dir at /output; MAKEFUN_OUTPUT_DIR points there.
// join() keeps the path correct even if the env value ends with a slash.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MOTTO, "utf8");
