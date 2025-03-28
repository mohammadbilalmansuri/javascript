// Day 15: Closures

// ---------- Activity 1: Understanding Closures ----------

// Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outerFunction() {
  let outerVariable = "I'm outside!";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const inner = outerFunction();
inner();

// Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function createCounter() {
  let counter = 0;

  return {
    increment: function () {
      counter++;
    },
    getValue: function () {
      return counter;
    },
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.getValue());

// ---------- Activity 2: Practical Closures ----------

// Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function createUniqueIdGenerator() {
  let lastId = 0;

  return function () {
    lastId++;
    return lastId;
  };
}

const generateId = createUniqueIdGenerator();
console.log(generateId());
console.log(generateId());

// Create a closure that captures a user's name and returns a function that greets the user by name.
function createGreeter(name) {
  return function () {
    console.log(`Hello, ${name}!`);
  };
}

const greetBilal = createGreeter("Bilal");
greetBilal();

// ---------- Activity 3: Closures in Loops ----------

// Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
function createFunctionArray() {
  let functions = [];

  for (let i = 0; i < 5; i++) {
    functions.push(
      (function (index) {
        return function () {
          console.log(index);
        };
      })(i)
    );
  }

  return functions;
}

const functionArray = createFunctionArray();
functionArray[0]();
functionArray[1]();

// ---------- Activity 4: Module Pattern ----------

// Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
const itemManager = (function () {
  let items = [];

  return {
    addItem: function (item) {
      items.push(item);
    },
    removeItem: function (item) {
      const index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
      }
    },
    listItems: function () {
      return items;
    },
  };
})();

itemManager.addItem("Apple");
itemManager.addItem("Banana");
console.log(itemManager.listItems());
itemManager.removeItem("Apple");
console.log(itemManager.listItems());

// ---------- Activity 5: Memoization ----------

// Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

// Create a memoized version of a function that calculates the factorial of a number.
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));
