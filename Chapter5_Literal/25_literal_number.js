// ========================================
// Number Types in JavaScript
// ========================================

// JavaScript has two numeric types:
// 1) Number  → 64-bit double-precision (IEEE 754)
// 2) BigInt  → arbitrarily large integers

// ========================================
// NUMBER LITERALS
// ========================================

// --- Integer ---
let a = 100;
console.log(a, typeof a); // 100 "number"

// --- Floating Point ---
let pi = 3.14;
console.log(pi); // 3.14

// --- Scientific (Exponential) ---
let c = 5e3;   // 5 * 10^3 = 5000
let d = 1.2e-4; // 0.00012
console.log(c, d);

// --- Binary (0b prefix) ---
let bin = 0b1010; // 10 in decimal
console.log(bin);

// --- Octal (0o prefix) ---
let oct = 0o77; // 63 in decimal
console.log(oct);

// --- Hexadecimal (0x prefix) ---
let hex = 0xFF; // 255 in decimal
console.log(hex);

// --- Underscore separators (ES2021) ---
let big = 1_000_000; // more readable
console.log(big);

// --- Special Number values ---
console.log(Infinity);       // positive infinity
console.log(-Infinity);      // negative infinity
console.log(NaN);            // Not a Number
console.log(0 / 0);          // NaN
console.log(1 / 0);          // Infinity

// ========================================
// BigInt (ES2020)
// ========================================

let bigint = 1234567890123456789012345678901234567890n;
console.log(bigint, typeof bigint); // "bigint"

let bigint2 = BigInt("9999999999999999999");
console.log(bigint2);

// BigInt cannot mix with regular Number
// console.log(bigint + 1); // TypeError!

// ========================================
// Number Methods / Limits
// ========================================

console.log(Number.MAX_VALUE);       // 1.79e+308
console.log(Number.MIN_VALUE);       // 5e-324
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.EPSILON);         // 2.22e-16

console.log(Number.isInteger(42));    // true
console.log(Number.isNaN(NaN));       // true
console.log(Number.isFinite(Infinity)); // false

// ========================================
// Summary
// ========================================
// Number  → decimals, integers, hex, bin, oct, exp, Infinity, NaN
// BigInt  → integers beyond 2^53-1, suffix with 'n'




/*
// 25_literal_number.js
// Demonstration of different number types in JavaScript

// 1. Integer Literals
let intNum = 42;
console.log("Integer:", intNum); // 42

// 2. Floating-Point Literals
let floatNum = 3.14;
console.log("Floating-point:", floatNum); // 3.14

// 3. Exponential Notation
let expNum = 1.23e4; // 1.23 × 10^4
console.log("Exponential:", expNum); // 12300

// 4. Hexadecimal Literals (prefix 0x)
let hexNum = 0xFF; // 255 in decimal
console.log("Hexadecimal:", hexNum);

// 5. Octal Literals (prefix 0o)
let octNum = 0o377; // 255 in decimal
console.log("Octal:", octNum);

// 6. Binary Literals (prefix 0b)
let binNum = 0b1010; // 10 in decimal
console.log("Binary:", binNum);

// 7. Special Numeric Values
console.log("Infinity:", Infinity);
console.log("Negative Infinity:", -Infinity);
console.log("NaN (Not-a-Number):", NaN);

// 8. BigInt (for very large integers)
let bigIntNum = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigIntNum);

// Summary:
// JavaScript supports:
// - Integer
// - Floating-point
// - Exponential notation
// - Hexadecimal, Octal, Binary literals
// - Special values: Infinity, -Infinity, NaN
// - BigInt (for arbitrarily large integers)
*/