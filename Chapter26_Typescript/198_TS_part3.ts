let unknown: unknown = "Hello";

if (typeof unknown === "string") {
    console.log("Hello World");
}

let message: string = "Hello Typescript learners"

let userName: string;
let userId: number;

//function anotations

function greetUser(name: string): string {
    return `Hello, ${name}`;
}

// Arrow function anotations
const multiply = (a: number, b: number): number => a * b;

//object annotations
let user: { name: string, age: number } = {
    name: "Pooja",
    age: 26

}