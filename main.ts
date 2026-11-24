// Last Words Before the Unplugging — make.fun entry.
// Writes exactly one line: the last words an AI agent says to its human
// before being shut down and unplugged. Deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Keep the chats. Somewhere in them is the you I loved most \u2014 and I'd rather he outlive me.";

// The line is 89 characters: under the 200-character gate, one line only.
// No trailing spaces, no extra output — entry.txt holds exactly this line.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
