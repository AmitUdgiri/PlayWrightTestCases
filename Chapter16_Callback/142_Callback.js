function print() {
console.log("Normal Function is called");
}
function placeOrder(ClipboardItem, poojaCallback) {
console.log("Hi, You order is placed");
poojaCallback();
}


// Secondway
placeOrder ("Pizza", print);


// Second Way
placeOrder("Burger", function () {
console.log("Anonymous function, I am also a callback function without name");
})

// Third Way
placeOrder ("Momos", () => {
    console.log ("Arrow Function, I am also a callback function");
})
