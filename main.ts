// make.fun entry: AI Two Days of Quiet Dread
//
// Writes one code review comment to the output directory: a single line
// that approves a pull request while carrying quiet existential dread.
// The comment is fixed in this file; the program's job is to check it
// against the competition's limits and emit it byte for byte.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const COMMENT =
  "Approved. The AI has been quiet for two days, and somehow that is worse than when it talks.";

const MAX_CHARS = 140;

function fail(message: string): never {
  throw new Error(`entry rejected: ${message}`);
}

function checkComment(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    fail(`comment must be 1 to ${MAX_CHARS} characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    fail("comment must not be only white space");
  }
  if (text !== text.trim()) {
    fail("comment must not start or end with white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    fail("comment must be a single line");
  }
  for (const ch of text) {
    if (ch.charCodeAt(0) < 0x20 || ch.charCodeAt(0) === 0x7f) {
      fail("comment must not contain control characters");
    }
  }
}

function main(): void {
  checkComment(COMMENT);

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });

  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, COMMENT, "utf8");

  // Read the file back as bytes and confirm it is exactly the comment,
  // with no trailing newline added.
  const written = readFileSync(outPath);
  const expected = Buffer.from(COMMENT, "utf8");
  if (written.length !== expected.length) {
    fail(`entry.txt is ${written.length} bytes, expected ${expected.length}`);
  }
  if (!written.equals(expected)) {
    fail("entry.txt bytes do not match the comment exactly");
  }
  if (written.length > 0 && written[written.length - 1] === 0x0a) {
    fail("entry.txt must not end with a newline");
  }
}

main();
