// Template literals

let firstName = "Pooja";
let fullName = `${firstName} Udgiri`;
console.log(fullName); 


const env = "Staging";
const userId = 12345;
const apiurl = `https://api.example.com/${env}/users/${userId}`;
const url = ` https://api.${env}.example.com/users/${userId}`;
console.log(url);
console.log(apiurl);
