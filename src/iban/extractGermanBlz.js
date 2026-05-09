import { normalizeGermanIban } from "./normalizeGermanIban.js";

/**
 * Extract the German BLZ from a normalized German IBAN.
 *
 * German IBAN structure:
 * DEkk BBBBBBBB CCCCCCCCCC
 *
 * BLZ = digits 5–12, or indexes 4–11 in the normalized string.
 */
export function extractGermanBlz(input) {
  const iban = normalizeGermanIban(input);

  if (!iban.startsWith("DE") || iban.length < 12) {
    return null;
  }

  return iban.slice(4, 12);
}
