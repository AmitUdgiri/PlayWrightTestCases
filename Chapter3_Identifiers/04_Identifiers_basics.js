// Example showing JavaScript identifier rules in one file

var firstName = "Pooja";
var _score = 100;
var $amount = 49.95;
var total2 = firstName + " has " + _score + " points";

let user_name = "Amit";
const maxValue = 500;

function calculateArea(width, height) {
  var areaResult = width * height;
  return areaResult;
}

var area = calculateArea(5, 10);

console.log(firstName);
console.log(_score);
console.log($amount);
console.log(total2);
console.log(user_name);
console.log(maxValue);
console.log(area);

// Identifier rules demonstrated:
// - Start with a letter, underscore (_), or dollar sign ($)
// - Cannot start with a digit
// - Can contain letters, digits, underscores, and dollar signs
// - Cannot use reserved keywords
// - Are case-sensitive

var name = "Pooja";
var Name = "Amit";
console.log(name, Name);

// Invalid identifiers (commented out):
// var 2ndPlace = "silver"; // invalid: cannot start with digit
// var user-name = "test";  // invalid: cannot contain hyphen
// var function = "nope";   // invalid: cannot use reserved keyword
// var my value = 20;       // invalid: cannot contain spaces
