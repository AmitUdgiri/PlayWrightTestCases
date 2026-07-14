class Bug {
    constructor(title, severity) {                              // Constructor to initialize the bug's title and severity
        this.title = title;                                     // Initialize the title of the bug
        this.severity = severity;                               // Initialize the severity of the bug
    }

    display() {
        console.log("[" + this.severity + "] " + this.title);   // Display the bug's severity and title in a formatted manner
    }
}

let b1 = new Bug("Login crash", "Critical");                    // Create a new Bug object with title "Login crash" and severity "Critical"
let b2 = new Bug("Typo in footer", "Low");                      // Create a new Bug object with title "Typo in footer" and severity "Low"

b1.display();       
b2.display();