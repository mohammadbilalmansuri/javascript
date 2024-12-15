const score = 400;
// console.log(score);

const balance = new Number(100); // Another way to define a number with many prototype methods.
console.log(balance); // Output: [Number: 100]

// Convert the value to a string.
console.log(balance.toString()); // Used to convert the value to a string. It only works when we declare a number or anything with the "new" object.
console.log(balance.toString().length);

// Fix the length of the precision value (100.00).
console.log(balance.toFixed(2));

const otherNumber = 123.8966;
// Set precision value within the defined range and round the number.
console.log(otherNumber.toPrecision(4));
// Output: 123.9

const hundreds = 1000000;
// Represent numbers with locale-specific formatting.
console.log(hundreds.toLocaleString("en-IN"));
// Output: 10,00,000 (Indian number formatting)

// +++++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++

// Math is a library in JavaScript that comes by default with JavaScript.
// It is an object that comes with many functionalities and methods.
console.log(Math); // In Node.js, it returns an empty object; all the properties will be shown in the browser console.

console.log(Math.abs(-4)); // Converts negative values to positive.
console.log(Math.round(4.6)); // Rounds off values.
console.log(Math.ceil(4.2)); // Rounds off value to the maximum value.
console.log(Math.floor(4.9)); // Rounds off value to the minimum value.
console.log(Math.min(4, 3, 6, 8)); // Find the minimum value.
console.log(Math.max(4, 3, 6, 8)); // Find the maximum value.

// Generate random values between 0 and 1 (1 is not included).
console.log(Math.random());

// Generate values between 1 to 10.
console.log(Math.random() * 10 + 1);

// Generate integer values between 1 to 10.
console.log(Math.floor(Math.random() * 10) + 1);

// Generate values between a specific range.
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
