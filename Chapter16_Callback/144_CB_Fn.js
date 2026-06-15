function cafe(item, callMeWhenTableIsReady){
    console.log("FInding...1");
    console.log("Finding...2");
    console.log("Finding...3");
    console.log("Finding...4");
    console.log("Finding...5");
    console.log(item);
    callMeWhenTableIsReady();
}

function callMeWhenTableIsReady() {
    console.log("Table is ready, Place your order");
}


cafe ("Pizza", callMeWhenTableIsReady);
console.log()

cafe ("Burger", function () {
    console.log("Table is Ready, Place your order");
})

cafe ("Momos", () => {
    console.log("Table is Ready, Place your order");
})