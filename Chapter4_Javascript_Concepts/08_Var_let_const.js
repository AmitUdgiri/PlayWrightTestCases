// for, Fuctions

var testCases = ["login", "logout", "Signup", "Delete Account", "Modify Account"];

for (var i = 0; i <testCases.length; i++) {
    console.log("Running test case:", testCases[i])
}
console.log("loop counter leaked outside:", i);

