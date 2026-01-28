# @js-nerds/version-compare

[![npm version](https://img.shields.io/npm/v/@js-nerds/version-compare)](https://www.npmjs.com/package/@js-nerds/version-compare)
[![npm downloads](https://img.shields.io/npm/dm/@js-nerds/version-compare)](https://www.npmjs.com/package/@js-nerds/version-compare)
[![tests](https://github.com/js-nerds/version-compare/actions/workflows/build-test.yml/badge.svg?branch=main&label=tests)](https://github.com/js-nerds/version-compare/actions/workflows/build-test.yml)
[![coverage](https://codecov.io/gh/js-nerds/version-compare/branch/main/graph/badge.svg)](https://codecov.io/gh/js-nerds/version-compare)

Tiny utility to compare version strings.

## Install

```bash
npm install @js-nerds/version-compare
```

```bash
pnpm add @js-nerds/version-compare
```

```bash
yarn add @js-nerds/version-compare
```

## Usage

```ts
import { isVersionLessThanOrEqual, toVersionParts } from "@js-nerds/version-compare";

isVersionLessThanOrEqual("25.2.1", "25.2.1"); // true
isVersionLessThanOrEqual("25.2.2", "25.2.1"); // false
toVersionParts("1.2.3"); // [1, 2, 3]
```

## API

### `isVersionLessThanOrEqual(version, threshold)`

Compares two version strings and returns `true` when `version` is less than or equal to `threshold`.
Missing or invalid versions are treated as old.

**Params**
- `version: string | null` — version to check
- `threshold: string` — minimum supported version

**Returns**
- `boolean`

### `toVersionParts(value)`

Converts a version string into numeric parts.
Invalid segments are returned as `-1`.

**Params**
- `value: string` — version string

**Returns**
- `number[]`

## License

MIT

## Changelog

See `CHANGELOG.md`.
