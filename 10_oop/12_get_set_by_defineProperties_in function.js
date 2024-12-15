// This is how we set getters and setters before introducing classes and the get and set methods.
// This is a function-based method.

function User(email, password) {
  // Using '_' prefix to denote private properties.
  this._email = email;
  this._password = password;

  // Using Object.defineProperty to define getters and setters.
  // Functions in JavaScript are also objects, so they can have properties like 'get' and 'set'.
  Object.defineProperty(this, "email", {
    //here we dont need to add _ infront of value it utometically understand it.
    get: function () {
      return this._email.toUpperCase(); // Modifying the email value before returning it.
    },
    set: function (value) {
      this._email = value; // Setting the email value.
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase(); // Modifying the password value before returning it.
    },
    set: function (value) {
      this._password = value; // Setting the password value.
    },
  });
}

// Creating a new User object.
const chai = new User("chai@chai.com", "chai");

// Accessing properties using getters.
console.log(chai.email); // Output: 'CHAI@CHAI.COM'
