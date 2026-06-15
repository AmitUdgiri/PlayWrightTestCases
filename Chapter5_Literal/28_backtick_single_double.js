// Short summary:
// - Single quotes ('') and double quotes ("") behave the same for plain strings.
// - Backticks (``) create template literals: they allow interpolation with ${...}
//   and multiline strings without concatenation.

// Example:
const name = 'Pooja';

// single and double: equivalent for plain strings
const single = 'Hello ' + name + '!';
const double = "Hello " + name + "!";

// backtick: interpolation and multiline
const backtick = `Hello ${name}!\n This is a template literal.`;

console.log(single);   // Hello Pooja!
console.log(double);   // Hello Pooja!
console.log(backtick); // Hello Pooja!
                      // This is a template literal.

// Note: Use whichever quote style your project prefers; use backticks when
// you need interpolation or multiline strings for clarity and convenience.
