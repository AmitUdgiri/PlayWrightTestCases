// Comparsion 0p
// >, <, >=, <=, ==, ===, !=, !==
// = -> Assignment opearator
//= -> losse comparsion 
// =- > strict.comparsion 

let x = 5;
let y = "5";

// Equality (value only)
console.log(x == y);   // true

// Strict Equality (value + type)
console.log(x === y);  // false

// Inequality
console.log(x != 8);   // true

// Strict Inequality
console.log(x !== y);  // true

// Greater / Less
console.log(x > 3);    // true
console.log(x < 3);    // false

// Greater or Equal / Less or Equal
console.log(x >= 5);   // true or 5===5, or gate --> true
console.log(x <= 4);   // false

// 10 > 5 // true
// 10 < 5 // false
// 10 >= 10 // true
// 10 <= 9 // false
