import { normalizeGermanIban } from "./normalizeGermanIban.js";

/**
 * Basic shape check for German IBANs.
 *
 * This intentionally checks only the public structural shape:
 * - starts with DE
 * - has 22 characters
 * - has digits after the country code
 *
 * It is not a replacement for production validation.
 */
export function isGermanIbanShape(input) {
  const iban = normalizeGermanIban(input);
  return /^DE\d{20}$/.test(iban);
}
