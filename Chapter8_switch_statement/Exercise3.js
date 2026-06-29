let year = 2022;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a Leap Year");

} else {
    console.log(year + " is Not a Leap Year");
}