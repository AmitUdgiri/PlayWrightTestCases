interface BugReport {
    id: number;
    title: string;
    severity: string;
    stepsToReproduce: string[];
}

const bugReport1: BugReport = {
    id: 1,
    title: "title",
    severity: "High",
    stepsToReproduce: ["step1", "step2", "step3"],
}
const bugReport2: BugReport = {
    id: 1,
    title: "title",
    severity: "High",
    stepsToReproduce: ["step1", "step2"],
}

