//Show multiple output in single console log
const num1 = 14.9;
const num2 = 66.5;
const num3 = 25.5;
const num4= 100;

// lets begin the trick 

const product = (num2 *num3) / num4;
const product2 = (product *num1) + (product /num4);

// show the trick

console.log ("The output of the trick is:" + Math.round(product)
+ " and " + Math.trunc(product2));
