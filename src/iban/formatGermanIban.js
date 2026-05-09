import { normalizeGermanIban } from "./normalizeGermanIban.js";

/**
 * Format a German IBAN in groups of four characters for display.
 */
export function formatGermanIban(input) {
  const normalized = normalizeGermanIban(input);
  return normalized.replace(/(.{4})/g, "$1 ").trim();
}
