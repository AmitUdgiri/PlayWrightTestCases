// var is function scoped.
var v = 10;

console.log(v); // Global scope


function printHello() {
    console.log("Hello playwright learners");
    var v = 30; //local scope
    console.log(v); 
    if (true){
        var v = 50; 
        console.log(v);
    }
}

printHello ();

