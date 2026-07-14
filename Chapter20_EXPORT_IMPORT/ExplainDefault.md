# Default vs Named Exports in JavaScript/TypeScript

## 1. Named Exports (Non-Default)

**How to export:**
```js
// utils.js
export let BASE_URL = "https://api.staging.com";
export function formatTestName(name) {
    return "TC_" + name.toUpperCase();
}

// testutils.js
export let BASE_URL = "https://app.vwo.com";
export function formatUpperCaseString(name) {
    return name.toUpperCase();
}
```

**How to import:** Must use `{}` with the exact export name (or `as` for aliases).
```js
// 170_utils.js
import { BASE_URL as bul_util, formatTestName } from "../utils.js";
import { BASE_URL as bul_testtul, formatUpperCaseString } from "../testutils.js";
```

**Key rules:**
- A module can have **multiple** named exports.
- Import name **must match** the export name (case-sensitive).
- Use `as` to rename during import (`BASE_URL as bul_util`).
- Named exports are **required** to be imported by their declared name.

---

## 2. Default Export

**How to export:**
```js
// logger.js
export default function log(message) {
    console.log("[LOG] - default " + message);
}
```

**How to import:** No `{}`, and you can **pick any name**.
```js
// 171_logger.js
import log from '../logger.js';
// You could also write: import myLogger from '../logger.js';
```

**Key rules:**
- A module can have **only one** `export default`.
- The import name is **arbitrary** — you choose what to call it.
- No `{}` needed.

---

## 3. Mixing Both in One Module

A module can have both a default export and named exports:

```js
// logger.js
export default function log(message) { ... }    // default
export function log2(message) { ... }           // named
```

Importing both:
```js
import log, { log2 } from '../logger.js';
// ^ default    ^ named
```

---

## 4. Summary Table

| Feature                 | Named Export              | Default Export            |
|-------------------------|---------------------------|---------------------------|
| `export` syntax         | `export function foo()`   | `export default function` |
| `import` syntax         | `import { foo } from ...` | `import foo from ...`     |
| Count per module        | Unlimited                 | One only                  |
| Import name flexibility | Fixed (must match / alias)| Arbitrary (any name)      |
| Renaming               | `import { foo as bar }`   | Not needed (already free) |
