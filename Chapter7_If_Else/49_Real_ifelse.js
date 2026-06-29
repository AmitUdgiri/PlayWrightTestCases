let age = 18;

if (age >= 18) {
console.log("You are an adult.");
} else {
console.log("You are a minor.");
}

let isLoggedIn = true;  
let userRole = "editor";


    if (isLoggedIn) {

        if (userRole == "admin") {
            console.log("admin can do all the things");
        } else if (userRole === "editor") {
            console.log("Welcome Editor - Edit access granted.");
        } else if (userRole === "viewer") {
            console.log("Welcome Viewer - Read-only access.");
        }
}     else {
console. log("No idea which role you are ");
}
