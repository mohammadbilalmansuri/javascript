// Day 5: Functions

// ---------- Activity 1: Function Declaration ----------

// Feature Request 1: Even or Odd Function Script
// Write a function to check if a number is even or odd and log the result to the console.
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
}
checkEvenOdd(4);
checkEvenOdd(7);

// Feature Request 2: Square Calculation Function Script
// Write a function to calculate the square of a number and return the result.
function calculateSquare(num) {
  return num * num;
}
console.log(calculateSquare(5));
console.log(calculateSquare(9));

// ---------- Activity 2: Function Expression ----------

// Write a function expression to find the maximum of two numbers and log the result to the console.
const findMax = function (a, b) {
  return a > b ? a : b;
};
console.log(findMax(5, 10));
console.log(findMax(7, 3));

// Feature Request 3: Concatenation Function Script
// Write a function expression to concatenate two strings and return the result.
const concatenateStrings = function (str1, str2) {
  return str1 + str2;
};
console.log(concatenateStrings("Hello, ", "World!"));
console.log(concatenateStrings("JavaScript ", "Functions"));

// ---------- Activity 3: Arrow Functions ----------

// Feature Request 4: Sum Calculation Arrow Function Script
// Write an arrow function to calculate the sum of two numbers and return the result.
const sum = (a, b) => a + b;
console.log(sum(5, 10));
console.log(sum(7, 3));

// Write an arrow function to check if a string contains a specific character and return a boolean value.
const containsCharacter = (str, char) => str.includes(char);
console.log(containsCharacter("JavaScript", "J"));
console.log(containsCharacter("Functions", "z"));

// ---------- Activity 4: Function Parameters and Default Values ----------

// Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5, 10));
console.log(multiply(7));

// Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greet(name, age = 18) {
  return `Hello, ${name}! You are ${age} years old.`;
}
console.log(greet("Bilal", 19));
console.log(greet("Hitesh"));

// ---------- Activity 5: Higher-Order Functions ----------

// Feature Request 5: Higher-Order Function Script
// Write a higher-order function that takes a function and a number, and calls the function that many times.
function repeatFunction(fn, times) {
  for (let i = 0; i < times; i++) {
    fn();
  }
}

repeatFunction(() => console.log("Hello!"), 3);

// Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function applyFunctions(fn1, fn2, value) {
  return fn2(fn1(value));
}
const double = (x) => x * 2;
const increment = (x) => x + 1;
console.log(applyFunctions(double, increment, 5));
