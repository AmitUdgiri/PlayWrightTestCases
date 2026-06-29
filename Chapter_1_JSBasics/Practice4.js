// take the input from the user
const readline = require("readline");
const number = prompt("Enter the number: ");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const result = Math.sqrt(number);
console.log("The square root of " + number + " is " + result);