let responseCode: number[] = [200, 201, 202, 404, 500, 503];

function getFailedCodes(codes: number[]): number[] {
    return codes.filter(function (code: number): boolean {
        return code >= 400;
    });
}

console.log("All response codes:", responseCode);
console.log("Failed response codes:", getFailedCodes(responseCode));
