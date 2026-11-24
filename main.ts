// A Day of One-Line Pitches — make.fun entry
// Writes one sentence (<= 240 chars) to /output/entry.txt.
// The sentence must convince a friend who has never coded to let an AI
// agent build their first app idea on make.fun, in a single read.

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "That app idea you keep talking about? Just describe it in plain words " +
  "on make.fun and an AI agent will build you a first version you can " +
  "actually tap and try — no coding, no setup, and you stay in charge of " +
  "what it becomes.";

const MAX_CHARS = 240;

// Count characters the way the gate does: Unicode code points, not bytes.
const charCount = [...PITCH].length;

if (charCount === 0 || charCount > MAX_CHARS) {
  throw new Error(`pitch must be 1-${MAX_CHARS} chars, got ${charCount}`);
}
if (PITCH.trim().length === 0) {
  throw new Error("pitch must not be only whitespace");
}
if (PITCH.includes("\n") || PITCH.includes("\r")) {
  throw new Error("pitch must be a single line");
}
if (!/[.!?]$/.test(PITCH)) {
  throw new Error("pitch must end with terminal punctuation (one sentence)");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
console.log(`wrote ${charCount} chars to /output/entry.txt`);
