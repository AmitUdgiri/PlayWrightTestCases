// Exercise 2: Constructor with Default Values
class Environment {                                 // Define a class named Environment
    constructor(name = "staging", port = 3000) {    // Constructor with default values for name and port
        this.name = name;                           // Initialize the name property with the provided value or default to "staging"
        this.port = port;                           // Initialize the port property with the provided value or default to 3000
    }

    getURL() {                                              // Method to construct and return the URL based on the environment name and port
        return "http://" + this.name + ":" + this.port;     // Return the constructed URL string
    }
}

let env1 = new Environment();                           // Create a new Environment object with default values (name: "staging", port: 3000)
let env2 = new Environment("production", 8080);         //  Create a new Environment object with specified values (name: "production", port: 8080)

console.log(env1.getURL());
console.log(env2.getURL());