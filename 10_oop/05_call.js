function SetUsername(username) {
  //complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  SetUsername.call(this, username); // here if we do not use the call so the values like variables will not be print in this object.
  // because of SetUsername object comes in callstack and come out after execution, so before completion of this object that was removed.
  // so thats why we use call method, basically call holds the reffrence of that object.
  // and here we give this (optional but right to use) because of after execution SetUsername it may possible this will be removed and do not pass some properties.
  // so thats why we give him a this for using this objects this to take all the properties of SetUername object.

  /*
    // Using 'call' to invoke 'SetUsername' within the context of the current object
    // If 'call' is not used, variables like 'username' will not be accessible within this object.
    // 'call' ensures that the 'SetUsername' function is executed with the context of 'this' object, retaining its properties.
  */

  // Assigning additional properties
  this.email = email;
  this.password = password;
}

// Creating a new object using 'createUser' constructor function
const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);
