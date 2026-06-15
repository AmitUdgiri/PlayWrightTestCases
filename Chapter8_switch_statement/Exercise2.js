let marks = 86;

switch (true) {
    case (marks >= 90):
        console.log("A");
        break;
    case (marks >= 80 && marks <= 89):
        console.log("B");
        break;
    case (marks >= 70 && marks <= 79):
        console.log("C");
        break;
    case (marks >= 60 && marks <= 69):
        console.log("D");
        break;
    default:
        console.log("Fail");
}