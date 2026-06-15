// let - Block Scoped
let a = 10;

let retryCount = 0;
retryCount = retryCount + 3;
retryCount = retryCount + 2;
console.log("Retry attempt:", retryCount);


let testStatus = "pending";

if (testStatus === "pending") 
    {
        let executionTime = 1200;
        console.log("Inside block:", executionTime);
    }

// console.log(executionTime);