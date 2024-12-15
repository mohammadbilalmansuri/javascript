// Object Literals: Represent objects with properties and methods defined directly within curly braces.
const user = {
  username: "bilal",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Retrieved user details from the database");
    console.log(`Username: ${this.username}`);
    console.log(this); // 'this' refers to the current object or context.
  },
};
console.log(user.username);
console.log(user.getUserDetails());
console.log(this); // In a Node.js environment, 'this' does not have a global context.

// -----------------------------------------------------------------------------------------------------------------
// Constructor Function:

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  // 'return this;' is not necessary because it's implicit.
}

// new is a constructor function, it use to create new context.
// new give a copy of context. so the other contexts will not be effected.
// new gives new instance everytime means give an empty object or context and then new values comes in it.

// it can simply understant like that-
// step 1 - first an object created then
// step 2 - then the constructor function call because of new keyword
// step 3 - all the arguments inside constructor function inject in this
// step 4 - and things under this passed in new object or context with the help of 'new' keyword, it works like classes.

const userOne = new User("hitesh", 12, true);
console.log(userOne);
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userTwo);
console.log(userOne.constructor);

// if we do not use new here so it directly effect the orignal object.

// const userOne = User("hitesh", 12, true)
// console.log(userOne);
// const userTwo = User("ChaiAurCode", 11, false)
// console.log(userOne); // here the things will be override means userTwo things will print

// --------------------------------------------------------------------------------------------------

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

// 'instanceof' checks if an object was created from a specific constructor or class.
console.log(auto instanceof Car); // Expected output: true
console.log(auto instanceof Object); // Expected output: true
