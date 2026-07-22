interface Calculator {
    add(a: number, b: number): number;
    Substract(a: number, b: number): number;
    multiply(a: number, b: number): number;
}

const calci: Calculator = {
    add: (a, b) => a + b,
    Substract: (a, b) => a - b,
    multiply: (a, b) => a * b,

}

console.log(calci);
