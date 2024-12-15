// Singleton Objects
// Object.create() is a constructor method to create a singleton object.

// Object Literals
// In objects, keys are typically strings, but we don't need to explicitly write keys as strings; JavaScript automatically assumes them as strings.

// Declaration of a symbol
const mySym = Symbol("key1");

const JsUser = {
  name: "Bilal",
  "full name": "Bilal Mansuri", // Keys with spaces or special characters are accessed using square brackets //// key as a string and it will not access by "JsUser.full name", it will be acceced by "JsUser["full name"]
  [mySym]: "mykey1", // Including a symbol key in an object using square brackets (if we do not use [] so the datatype of symbol will be a string)
  age: 19,
  location: "Chhindwara",
  email: "bilal@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Thursday"],
};

// Accessing values from the object
console.log(JsUser.email);
console.log(JsUser["email"]); // Alternative method to access values
console.log(JsUser["full name"]);
console.log(JsUser[mySym]); // Accessing a symbol from the object

// Modifying values in the object
JsUser.email = "bilalmansuri@gmail.com"; // Changing the value of email

// Assigning functions to the object
JsUser.greeting = function () {
  console.log("Hello JS user");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`); // 'this' keyword refers to the current object and its properties
};

console.log(JsUser.greeting()); // Invoking the greeting function
console.log(JsUser.greetingTwo()); // Invoking the greetingTwo function
