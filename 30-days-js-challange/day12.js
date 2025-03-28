// Day 12: Error Handling

// ---------- Activity 1: Basic Error Handling with Try-Catch ----------

// Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console
function throwError() {
  throw new Error("This is an intentional error");
}

try {
  throwError();
} catch (error) {
  console.error("Error:", error.message);
}

// Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 2));
  console.log(divide(10, 0));
} catch (error) {
  console.error("Error:", error.message);
}

// ---------- Activity 2: Finally Block ----------

// Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow
function executeWithFinally() {
  try {
    console.log("In the try block");
    throw new Error("Error in try block");
  } catch (error) {
    console.error("Caught an error:", error.message);
  } finally {
    console.log("In the finally block");
  }
}

executeWithFinally();

// ---------- Activity 3: Custom Error Objects ----------

// Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function throwCustomError() {
  throw new CustomError("This is a custom error");
}

try {
  throwCustomError();
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}

// Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block
function validateInput(input) {
  if (!input) {
    throw new CustomError("Input cannot be empty");
  }
  return "Valid input";
}

try {
  console.log(validateInput("Valid input"));
  console.log(validateInput(""));
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}

// ---------- Activity 4: Error Handling in Promises ----------

// Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console
const randomPromise = new Promise((resolve, reject) => {
  const random = Math.random();
  if (random > 0.5) {
    resolve("Promise resolved");
  } else {
    reject("Promise rejected");
  }
});

randomPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message
async function handleRandomPromise() {
  try {
    const message = await randomPromise;
    console.log(message);
  } catch (error) {
    console.error("Error:", error);
  }
}

handleRandomPromise();

// ---------- Activity 5: Graceful Error Handling in Fetch ----------

// Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .catch((error) => {
    console.error("Fetch API Error:", error);
  });

// Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message
async function fetchDataWithErrorHandling() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchDataWithErrorHandling();
