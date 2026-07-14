class Car {                                             //define a class
    // CAB
    //  Constructor. 
    constructor(name_given_during_obj_creation) {       
        //constructor is a special method that is called when an object is created from a class. It is used to initialize the object's properties.
        this.name = name_given_during_obj_creation;     
        //this keyword is used to refer to the current object instance. It allows you to access the properties and methods of the object being created.
    }
    // Attribute 
    // Behavior. 
    drive() {                                       // Method 
        console.log("i am driving", this.name);
    }

}

const tesla = new Car("Model S");                   // Create an object of the Car class and pass the name "Model S" as an argument to the constructor. The constructor initializes the name property of the tesla object with the value "Model S".
tesla.drive();

const i10 = new Car("grand I10");
i10.drive();