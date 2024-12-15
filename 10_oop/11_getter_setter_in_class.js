class User {
  constructor(email, password) {
    // Using '_' prefix to denote private properties to avoid naming conflicts.
    this.email = email;
    this.password = password;
  }

  // getters and setters are use to get or set the value that can be accessed outside the class, getters and setters are autometically presents in the class.

  // simply we can understand if we define a value in the class consturcter for creatig the object and some values are private or sensitive and you dont want to show that to anyone like passoword.
  // and someone want to access the values outside so if you want to show him diffrent or something that relate to the orignal value but not the real value.
  // so you can set that vallue in getter and setter so he will get the value which is set in getter, but the actual values that is it will be in the value set in the setter.

  // here we added _ infront of email and password because of if use same values that we have assign in the constructor it will be confused for executer pr call stack because same thing are doing constructor, setter and getter at a tie so in result we didn't get anything because tis prosess will go in a loop so finally the limit of call stack execution will be full and it get en error at last.
  // the behind the scene for _ is unerscore show we are defining a private property and it is not use for normal user. so it find the property exist or not after underscore value.

  // Getters and setters are used to access or modify values that can be accessed outside the class.
  // They are automatically present in the class.

  // Getters modify the value before returning it, allowing for controlled access.
  get email() {
    return this._email.toUpperCase(); // Modifying the email value before returning it.
  }
  set email(value) {
    this._email = value; // Setting the email value (same as the constructor).
  }

  // Getters can also concatenate additional information or modify the value before returning it.
  get password() {
    return `${this._password}bilal`; // Appending 'bilal' to the password value before returning it.
  }
  set password(value) {
    this._password = value; // Setting the password value (same as the constructor).
  }
}

// Creating a new User object.
const bilal = new User("bilal@mansuri.com", "mohammad");

// Accessing properties using getters.
console.log(bilal.password); // Output: 'mohammadbilal'
console.log(bilal.email); // Output: 'BILAL@MANSURI.COM'
