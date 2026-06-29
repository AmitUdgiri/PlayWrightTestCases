// Check whether a year is a leap year
function checkLeapYear(year) {
	if (typeof year !== 'number' || !Number.isFinite(year) || !Number.isInteger(year)) {
		console.log('Please provide a valid integer year');
		return;
	}

	if (year % 400 === 0) {
		console.log(year + ' is a leap year');
	} else if (year % 100 === 0) {
		console.log(year + ' is not a leap year');
	} else if (year % 4 === 0) {
		console.log(year + ' is a leap year');
	} else {
		console.log(year + ' is not a leap year');
	}
}

// Example usage:
let year = 2024;
checkLeapYear(year);