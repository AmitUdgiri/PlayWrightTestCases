// Private Fields (#) — Hidden Data
// PUBIC Fields 

class Credentials {
    #apiKey;                                    // Private variables are not allowed to be used outside. 
    user;


    constructor(user, key) {                    //define a constructor to initialize the object with user and key
        this.user = user; // public             // public variables can be used outside the class
        this.#apiKey = key;                     // private variables can only be used inside the class
    }
    // Custom made fuction by us
    pramodgetAuthHeader() {                     // Method to get the auth header
        return "Bearer " + this.#apiKey;        // return the auth header with the private apiKey
    }
}

let cred = new Credentials("admin", "scret_key_1234");  
console.log(cred.user);
// console.log(cred.apiKey); undefined
// console.log(cred.#apiKey); //error

const token = cred.pramodgetAuthHeader();
console.log(token);