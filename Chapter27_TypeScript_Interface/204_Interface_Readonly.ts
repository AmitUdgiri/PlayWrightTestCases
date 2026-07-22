interface APIResponse {
    readonly statusCode: number;
    body: string;
    header?: object;
    responseTime?: number;
}

//Readonly - Cannot be modified after initialization
// ? - is optional property


let response: APIResponse = {
    statusCode: 200,
    body: '{"user": "admin"}',
}

console.log("Status:", response.statusCode);
console.log("Body:", response.body);
console.log("Headers:", response.header);