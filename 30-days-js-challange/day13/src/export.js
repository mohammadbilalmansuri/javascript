// Activity 1: Creating and Exporting Modules

// Task 1: Create a module that exports a function to add two numbers
export function add(a, b) {
  return a + b;
}
// Task 2: Create a module that exports an object representing a person with properties and methods
export const person = {
  name: "Bilal",
  age: 19,
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
};

// ---------- Activity 2: Named and Default Exports ----------

// Create a module that exports multiple functions using named exports
// Task 3: Create a module that exports multiple functions using named exports
export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// Task 4: Create a module that exports a single function using default export
export default function subtract(a, b) {
  return a - b;
}

// ---------- Activity 3: Importing Entire Modules ----------

// Task 5: Import the entire constants module as an object
import * as constants from "./constants.js";
console.log(constants.PI);
console.log(constants.square(3));
console.log(constants.cube(2));
