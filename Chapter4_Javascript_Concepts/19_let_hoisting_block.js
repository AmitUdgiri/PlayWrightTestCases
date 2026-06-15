// let is block scoped

let x = "global"
if (true) {
// console.log(x);  // ReferenceError: Cannot access 'x' before initialization

let x = "block";
console.log(x);

}