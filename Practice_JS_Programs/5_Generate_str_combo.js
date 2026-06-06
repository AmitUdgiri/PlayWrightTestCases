function generateCombinations(str)    // Function to generate all combinations of a string
{                                     // Base case: if the string is empty, return an array with an empty string
    let result = [];                  // Array to store combinations
    for (let i = 0; i< str.length; i++) { // Loop through each character in the string
        for (let j = i+1; j <= str.length; j++) { // Loop to create combinations starting from the current character
            result.push (str.slice(i,j)); // Add the combination to the result array
            }}

    return result; // Return the array of combinations
    }
let Text = "abcd";
console.log(generateCombinations("abcd"));

