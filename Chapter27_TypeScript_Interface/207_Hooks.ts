interface TestHooks {
    (testName: string): void;

}
let beforeEachHook: TestHooks = function (TestName: string): void {
    console.log("Before Each Hook:" + TestName);
}
let afterEachHook: TestHooks = function (TestName: string): void {
    console.log("[After] Tearing down:" + TestName);
}
beforeEachHook("Login test");
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
console.log("TC-1:" + Test1.id + ":" + Test1.name + " - " + Test1.status + " - " + Test1.duration);


afterEachHook("Login test");

