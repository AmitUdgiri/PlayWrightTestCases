let number = 7;

if (typeof number !== 'number' || !Number.isFinite(number)) {
  console.log('Please provide a finite number');
} else if (number % 2 === 0) {
  console.log(number + ' is even');
} else {
  console.log(number + ' is odd');
}

