// let name = prompt("What is your name?"); // Prompting user for input

// console.log("Hello," + name + "! Welcome to JavaScript Basics.");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", function(name) {
  console.log("Hello, " + name + "! Welcome to JavaScript Basics.");
  rl.close();
});