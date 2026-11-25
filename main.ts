// The Tired Dark Lord: A 100-Word Villain Monologue
// Entry program for the make.fun bounty
// "u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb".
//
// The program writes a single monologue of about 100 words to
// /output/entry.txt. The speaker is a fantasy villain, the Ashen
// Lord of the Nine Valleys, who has kept a hero waiting at his
// door. His tiredness is never announced outright: it lives in
// the pauses, the small domestic deflections (a wobbling step,
// a torch out of oil, a map left half finished) and the final
// request to put the dying off until tomorrow. He still has a
// scheme (the poison, the trapdoor, the rehearsed speech) and a
// history (the half-conquered valleys), so he stays a villain
// even while asking, in effect, for the night off.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const MONOLOGUE =
  "Come in. Mind the third step, it wobbles, and the torch needs oil " +
  "since spring. You came to slay me, I suppose. Everyone does, " +
  "eventually, usually on a Tuesday. Sit. The throne is cold, the " +
  "crown pinches behind the ears, and the map of the Nine Valleys " +
  "lies on the table where I left it, half conquered, half " +
  "forgotten. I have the poison, the trapdoor, the speech about " +
  "destiny. All rehearsed. But the candles burn low, the ravens " +
  "have roosted, and honestly, hero, could we do the dying " +
  "tomorrow? Tonight I would rather lock the gate and sleep.";

const OUT_PATH = "/output/entry.txt";

// Guardrails from the competition gate: the sealed scorer only
// accepts UTF-8 text of 1 to 600 characters, and the brief asks
// for about 100 words. Fail loudly instead of writing a bad entry.
const words = MONOLOGUE.trim().split(/\s+/).length;
if (MONOLOGUE.length < 1 || MONOLOGUE.length > 600) {
  throw new Error(`entry is ${MONOLOGUE.length} characters, outside 1-600`);
}
if (words < 95 || words > 100) {
  throw new Error(`entry is ${words} words, outside 95-100`);
}

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, MONOLOGUE, "utf8");
console.log(`wrote ${MONOLOGUE.length} characters (${words} words) to ${OUT_PATH}`);
