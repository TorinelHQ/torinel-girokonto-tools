# Torinel Girokonto Tools

Open documented tool logic behind Torinel's German Girokonto workflows.

Torinel builds finance tools for Germany that help users make safer account decisions. This repository documents the logic behind selected Girokonto tools so the methodology is transparent, testable, and versioned.

## Included tools

### German IBAN helpers

- normalize German IBANs
- format IBANs in print form
- validate German IBAN checksums
- extract the German BLZ from the IBAN

German IBAN structure:

```text
DEkk BBBBBBBB CCCCCCCCCC
```

The BLZ is digits 5–12 of the normalized IBAN.

### BLZ / bank lookup helpers

- exact BLZ lookup
- canonical bank directory record shape
- duplicate handling by confidence and completeness
- Bundesbank import helper

The repository does not bundle the full official Bundesbank BLZ directory. It includes the importer and schema so official BLZ exports can be imported, validated, and published separately under the appropriate data terms.

### Girokonto-Kündigungsassistent logic

- cancellation risk status
- German cancellation letter generation
- recipient/address handoff from BLZ lookup

The generated letter is intentionally neutral and does not include Torinel branding.

### Girokonto-Wechsel-Check logic

- switching readiness score
- risk status model
- missing next steps
- handoff to cancellation readiness

## Why this repository exists

Users rely on financial tools when switching or cancelling bank accounts. Torinel documents the tool logic publicly to make the approach easier to audit and improve.

This repository is not legal advice, financial advice, or a replacement for a bank's own terms and conditions.

## Quick example

```ts
import { extractGermanBlz } from '@torinel/girokonto-tools/iban';

const blz = extractGermanBlz('DE98 7016 9614 0000 0081 92');
console.log(blz); // 70169614
```

## Repository structure

```text
src/
  iban/          German IBAN normalization, formatting, validation
  blz/           BLZ lookup, directory schema, Bundesbank importer
  kuendigung/    Cancellation letter and risk logic
  wechsel/       Account-switching readiness logic
  shared/        Shared risk state model
examples/        Example usage
tests/           Regression tests
docs/            Methodology notes
```

## Test cases

The tests include the key German IBAN/BLZ extraction cases used by Torinel's Girokonto-Kündigungsassistent:

- `DE98 7016 9614 0000 0081 92` → BLZ `70169614`
- `DE35 7116 0000 0002 1583 53` → BLZ `71160000`
- `DE89 3704 0044 0532 0130 00` → BLZ `37040044`

## Install locally

```bash
npm install
npm test
```

## Data integrity principles

The BLZ lookup should always follow this order:

1. Normalize IBAN
2. Extract exact BLZ
3. Perform exact BLZ lookup
4. Return canonical bank record
5. Do not let fuzzy bank-name inference overwrite an exact BLZ result

## License

MIT for the code in this repository.

Bundesbank data, bank names, addresses, and third-party data sources may have separate data terms. This repository does not grant rights to external data.
