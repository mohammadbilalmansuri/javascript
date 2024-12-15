// Creating an object with properties and a method
const user = {
  username: "bilal",
  age: 19,

  // Defining a method inside the object
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to the website`);
    console.log(this); // Printing the current context (the user object)
  },
};

// Calling the method defined in the object
user.welcomeMessage();

// Modifying the username property and calling the method again
user.username = "sam";
user.welcomeMessage();

// In the browser, 'this' refers to the global window object, but in Node.js, it refers to an empty object
console.log(this);

// function chai() {
//   let username = "bilal";
//   console.log(this.username); //undefined => this not works in functions
// }
// chai();

// const chai = function () {
//   let username = "hitesh";
//   console.log(this.username);
// };

// --------------- Arrow Functions -----------------

// Arrow function does not have its own 'this', it inherits 'this' from the parent context
const chai = () => {
  let username = "hitesh";
  console.log(this); // In this context, 'this' refers to the parent context
};
chai();

// Arrow functions are commonly used for concise function definitions

// Arrow function with multiple parameters and explicit return
const addTwo = (num1, num2) => {
  return num1 + num2;
};

// Arrow function with implicit return (single expression)
const add_Two = (num1, num2) => num1 + num2;

// Arrow function with implicit return and parentheses for clarity (commonly used in React)
const AddTwo = (num1, num2) => num1 + num2;

// Arrow function returning an object (wrapped in parentheses to avoid confusion with function block)
const returnObj = () => ({ username: "hitesh" });
console.log(returnObj());
