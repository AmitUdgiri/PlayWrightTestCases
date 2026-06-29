// ========================================
// null vs undefined in JavaScript
// ========================================

// undefined → variable declared but value not assigned
// null      → intentional empty value

// --- undefined ---
let a;
console.log(a);           // undefined

function foo() {}
console.log(foo());      // undefined

const obj = {};
console.log(obj.x);      // undefined

// --- null ---
let b = null;
console.log(b);          // null

// null is explicitly set by you
const user = null;       // no user logged in

// --- Key Difference ---
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (historical JS bug)

// Loose equality (==) treats them as equal
console.log(null == undefined);  // true

// Strict equality (===) does NOT
console.log(null === undefined); // false

// --- When to use what ---
// undefined → JS uses it when something is missing
// null      → you use it to mean "empty" or "nothing"

// --- Quick Rule ---
// undefined = "I didn't set it"
// null      = "I set it to nothing"
