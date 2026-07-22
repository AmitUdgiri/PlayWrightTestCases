interface APIResponse {
    body: string;
    header?: object;
    responseTime?: number;
}

let response1: APIResponse = {
    body: "Code successfully run",
}

let response2: APIResponse = {
    body: "An error occurred",
    header: { "Content-Type": "application/json" },
    responseTime: 2500
}

console.log("Response 1: " + response1.body);
console.log("Response 2: " + response2.body + " - Header: " + JSON.stringify(response2.header) + " - Response Time: " + response2.responseTime);