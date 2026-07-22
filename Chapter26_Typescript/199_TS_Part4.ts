function sayHello(Message: string): void {
    console.log(Message);
}

//Finction anotations
function greet(name: string): string {
    return `Hello ${name}`;

}

//never - function that never returns value
function throwError(message: string): never {
    throw new Error(message);

}

function infiniteLoop(): never {
    while (true) { }
}
