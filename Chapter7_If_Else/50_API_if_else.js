if ("hello") console.log("String is truthy"); // // "hello" = truthy
if (42) console.log("Number is truthy");
if ({}) console.log("Empty object is truthy!");
if ([]) console.log("Empty array is truthy!");

console.log("Won't print");

// if.("") console. log("Won't print");
// if.(null).console.log("Won't.print");
// if.(undefined) console.log("Won't.print");
// if.(NaN).console.log("Won't.print");
//if.(0)console.log("Won't.print");

let name = undefined;
if (name) {
console.log("Hi");
} else {
console.log("Bye");
}