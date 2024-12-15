// Function Definition
function sayMyName() {
  console.log("B");
  console.log("I");
  console.log("L");
  console.log("A");
  console.log("L");
}
sayMyName(); // Function execution: sayMyName is a reference, and () indicates execution

// Parameters are the values defined when declaring a function
function addTwoNumbers(number1, number2) {
  // console.log(number1 + number2);

  // let result = number1 + number2
  // return result
  return number1 + number2;
}

// Calling the function with arguments
const result = addTwoNumbers(3, 5); // the value while calling the function called arguments
console.log("Result: ", result);

// Function with default parameter
function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("bilal")); // Output: "bilal just logged in"

// shoping cart situation

// Rest parameter: Using the rest operator (...) to handle a variable number of arguments
function calculateCartPrice(...items) {
  return items;
}

console.log(calculateCartPrice(200, 400, 500, 2000)); // Output: [ 200, 400, 500, 2000 ]

// Using rest parameter along with regular parameters
function calculateCartPrice(val1, val2, ...items) {
  // Takes the first two values in val1 and val2, and the rest are stored in the array items
  return items;
}

console.log(calculateCartPrice(10, 20, 30, 40)); // Output: [ 30, 40 ]

// Function to handle objects
const user = {
  username: "bilal",
  age: 19,
};

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
}

handleObject(user); // Output: Username is bilal and age is 19

// Passing an object directly as an argument
handleObject({
  username: "sameer",
  age: 25,
});

// Function to return the second value from an array
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray)); // Output: 400
console.log(returnSecondValue([10, 20, 30, 40])); // Output: 20

// Functional argument

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function doOperation(a, b, op) {
  return op(a, b);
}

console.log(doOperation(1, 2, sum));
