interface TestCase {
    name: string;
    id: number;
    status: string;
    duration: number;
}

let Test1: TestCase = {
    name: "Standard User login",
    id: 101,
    status: "Pass",
    duration: 1500,
}

let Test2: TestCase = {
    name: "Standard User login",
    id: 102,
    status: "Fail",
    duration: 3200,
}

console.log("TC-1:" + Test1.id + ":" + Test1.name + " - " + Test1.status + " - " + Test1.duration);
console.log("TC-2:" + Test2.id + ":" + Test2.name + " - " + Test2.status + " - " + Test2.duration);