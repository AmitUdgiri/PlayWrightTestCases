// tricky type coercion cases
console.log([] == ![]);      // true  → ([] == false) → "" == 0 → 0 == 0
console.log([] == 0);        // true  → "" == 0 → 0 == 0
console.log([] == "");       // true  → "" == ""
console.log([1] == true);    // true  → "1" == 1 → 1 == 1
console.log([1] == "1");     // true  → "1" == "1"

// null/undefined edge cases
console.log(null == 0);      // false
console.log(null >= 0);      // true  (confusing!)
console.log(null <= 0);      // true
console.log(null == undefined);  // true
console.log(null === undefined); // false

// --- Boolean coercion of numbers ---
console.log(Boolean(0));         // false
console.log(Boolean(1));         // true
console.log(Boolean(-1));        // true
console.log(Boolean(Infinity));  // true
console.log(Boolean(NaN));       // false

// --- == vs === with Boolean and numbers ---
console.log(false == 0);         // true  (0 coerces to false)
console.log(false === 0);        // false (different types)
console.log(true == 1);          // true  (1 coerces to true)
console.log(true === 1);         // false
console.log(true == 2);          // false (2 → true, but true → 1, 1 != 2)
console.log(true == "1");        // true  ("1" → 1 → true)

// --- tricky type coercion cases ---
console.log([] == ![]);          // true
console.log([] == 0);            // true
console.log([] == "");           // true
console.log([1] == true);        // true
console.log([1] == "1");         // true
console.log([1] == 1);           // true

// --- null / undefined edge cases ---
console.log(null == 0);          // false (special rule)
console.log(null >= 0);          // true  (confusing!)
console.log(null <= 0);          // true
console.log(null == undefined);  // true
console.log(null === undefined); // false

// --- NaN is never equal to anything ---
console.log(NaN == NaN);         // false
console.log(NaN === NaN);        // false
console.log(NaN == false);       // false

// --- false vs string ---
console.log(false == "false");   // false
console.log(false == "0");       // true
console.log(false == "");        // true

