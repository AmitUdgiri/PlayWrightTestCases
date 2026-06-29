let order = new Promise(function(resolve,reject){
    let foodReady = true;
    if (foodReady) {
        resolve("Food is Ready, Pizza will be served");
    } else {
        reject("Food is not ready, Pizza will not be served");
    }

})

console.log(order);
