class Animal {
    constructor(name) {                             // Constructor to initialize the name property of the Animal class
        this.name = name;                           // Initialize the name property with the provided value
    }
    eat() {                                         // Method to simulate the eating behavior of the animal
        console.log(this.name + " is eating");
    }
    sleep() {
        console.log(this.name + " is sleeping");
    }
}

class Dog extends Animal {                          // Dog class inherits from the Animal class, allowing it to access the properties and methods of the Animal class
    constructor(name, breed) {                      //  Constructor to initialize the name and breed properties of the Dog class    
        super(name);                                //. It is used for the parent constructor. 
        this.breed = breed;                         // Initialize the breed property with the provided value    
    }
    bark() {                                        // Method to simulate the barking behavior of the dog
        console.log(this.name, " is barking!")       
    }


}
let dog = new Dog("Rex", "Labrador");               // Create a new Dog object with name "Rex" and breed "Labrador"
dog.eat();                                          // Call the eat method inherited from the Animal class
dog.sleep();                                        // Call the sleep method inherited from the Animal class4\

dog.bark();

console.log(dog.breed);
console.log(dog.name);