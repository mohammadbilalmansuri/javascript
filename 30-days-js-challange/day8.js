// Day 8: ES6+ Features

// ---------- Activity 1: Template Literals ----------

// Feature Request 1: Template Literals Script

// Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let person_name = "Bilal";
let age = 19;
let greeting = `Hello, my name is ${person_name} and I am ${age} years old.`;
console.log(greeting);

// Create a multi-line string using template literals and log it to the console.
let multiLineString = `Hello I am mohammad bilal mansuri.
I am a software engineer.`;
console.log(multiLineString);

// ---------- Activity 2: Destructuring ----------

// Feature Request 2: Destructuring Script

// Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let numbers = [1, 2, 3, 4, 5];
let [first, second] = numbers;
console.log("First element:", first);
console.log("Second element:", second);

// Use object destructuring to extract the title and author from a book object and log them to the console.
let book = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  year: 2008,
};
let { title, author } = book;
console.log("Title:", title);
console.log("Author:", author);

// ---------- Activity 3: Spread and Rest Operators ----------

// Feature Request 3: Spread and Rest Operators Script

// Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
let newNumbers = [...numbers, 6, 7, 8];
console.log("New array with spread operator:", newNumbers);

// Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...args) {
  return args.reduce((acc, num) => acc + num, 0);
}
console.log("Sum with rest operator:", sum(1, 2, 3, 4, 5));

// ---------- Activity 4: Default Parameters ----------

// Feature Request 4: Default Parameters Script

// Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function multiply(a, b = 1) {
  return a * b;
}
console.log("Product with default parameter:", multiply(5, 10));
console.log("Product with default parameter:", multiply(7));

// ---------- Activity 5: Enhanced Object Literals ----------

// Feature Request 5: Enhanced Object Literals Script

// Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let person = {
  person_name,
  age,
  greet() {
    return `Hello, my name is ${this.person_name} and I am ${this.age} years old.`;
  },
};
console.log("Enhanced object literal:", person);
console.log("Greeting method:", person.greet());

// Create an object with computed property names based on variables and log the object to the console.
let propName = "dynamicProperty";
let dynamicObject = {
  [propName]: "This is a dynamic property",
};
console.log("Object with computed property names:", dynamicObject);
