import assert from "node:assert/strict";
import {
  normalizeGermanIban,
  formatGermanIban,
  extractGermanBlz,
  isGermanIbanShape
} from "../src/iban/index.js";

const input = "DE89 3704 0044 0532 0130 00";

assert.equal(normalizeGermanIban(input), "DE89370400440532013000");
assert.equal(formatGermanIban(input), "DE89 3704 0044 0532 0130 00");
assert.equal(extractGermanBlz(input), "37040044");
assert.equal(isGermanIbanShape(input), true);

assert.equal(extractGermanBlz("FR7630006000011234567890189"), null);
assert.equal(isGermanIbanShape("DE123"), false);

console.log("All public IBAN helper tests passed.");
