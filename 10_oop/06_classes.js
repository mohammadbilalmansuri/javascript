// Classes were introduced in JavaScript after ES6 (2015).

// In JavaScript, classes are a way to define blueprints for creating objects (these objects are different from the objects defined in the last section).

class User {
  constructor(username, email, password) {
    // The constructor is automatically called when a new object is created with this class.
    // While not necessary to write every time, it's good practice to include.
    this.username = username;
    this.email = email;
    this.password = password;
  }

  // Methods can be defined inside the class.
  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUserName() {
    return `${this.username.toUpperCase()}`;
  }
}

// Creating a new object using the User class.
const chai = new User("chai", "chai@gmail.com", "123");

console.log(chai.encryptPassword());
console.log(chai.changeUserName());

// Behind the scenes, classes work similarly to constructor functions.

function createUser(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

createUser.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

createUser.prototype.changeUserName = function () {
  return `${this.username.toUpperCase()}`;
};

// Creating a new object using the createUser constructor function.
const tea = new createUser("tea", "tea@gmail.com", "123");

console.log(tea.encryptPassword());
console.log(tea.changeUserName());
