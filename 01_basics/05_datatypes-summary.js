// ----------------- Primitive Data Types -----------------------------

// JavaScript has 7 primitive data types: String, Number, Boolean, null, undefined, Symbol, BigInt.

const name = "Bilal"; // String
const score = 100; // Number
const scoreValue = 100.3; // Number with decimal point

const isLoggedIn = false; // Boolean
const outsideTemp = null; // null (Note: The data type of null is technically 'object', which is a known quirk in JavaScript.)
let userEmail; // undefined (no value assigned yet)

const id = Symbol("123"); // Symbol
const anotherId = Symbol("123");

console.log(id === anotherId); // Outputs: false
console.log(typeof anotherId); // Outputs: symbol

const bigNumber = 3456543576654356754n; // BigInt

// ------------------ Reference (Non-primitive) Data Types --------------------------

// Arrays, Objects, Functions

const heroes = ["Salman", "Shahrukh", "Aamir"]; // Array

// Object
let myObj = {
  name: "Bilal",
  age: 19,
};

// Function
const myFunction = function () {
  console.log("Hello, I am Mohammad Bilal Mansuri");
};

// JavaScript is a dynamically typed language, meaning we don't need to define data types explicitly.

// Links for further study:
// ECMAScript Language Specification: Data Types and Values (https://262.ecma-international.org/5.1/#sec-11.4.3)

// ===========================================================================================

// Stack Memory: Used for all primitive data types.
// In stack memory, a copy of the value is stored when a variable is defined.

let myName = "Bilal Mansuri";
let fullName = myName; // A copy of 'myName' is stored in 'fullName'.
fullName = "Mohammad Bilal Mansuri"; // Changing 'fullName' does not affect 'myName'.

console.log(myName); // Outputs: Bilal Mansuri
console.log(fullName); // Outputs: Mohammad Bilal Mansuri

// Heap Memory: Used for all Non-primitive data types.
// In heap memory, a reference to the original value is stored.

let user1 = {
  name: "Bilal",
  email: "bilal@gmail.com",
  age: 19,
};

let user2 = user1;
user2.email = "bilalmansuri@gmail.com";

// Changes to 'user2' are reflected in 'user1' because heap memory stores references.
console.log(user1.email); // Outputs: bilalmansuri@gmail.com
console.log(user2.email); // Outputs: bilalmansuri@gmail.com
