// console.log(score); //refrence error; cannot access 'score' before initialization
// let score = 100; 


{

// TDZ for "score" starts here
// console.log(score);      // ReferenceError!
// score = 50;              // ReferenceError!
// typeof score;            // ReferenceError!
// -- TDZ for "score" ends here

let score = 100;        // Declaration reached, TDZ ends
console.log(score);     // 100 (safe to access now)
}