// Inheritance in classes: Inheritance in JavaScript classes allows one class to inherit properties and methods from another class. This mechanism enables code reuse, making it easier to create new classes that are based on existing ones, without having to duplicate code.

class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  // 'extends' is used to inherit properties and methods from another class. (like __proto__ and setPrototypeOf)
  constructor(username, email, password) {
    super(username); // 'super' is used to call the constructor of the parent class. // use to access the property of that class (it works like call)
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

// Creating a new Teacher object.
const chai = new Teacher("chai", "chai@teacher.com", "123");

chai.addCourse(); // Calling method from the Teacher class.
chai.logMe(); // Calling method from the User class.

// Creating a new User object.
const masalaChai = new User("masalaChai");

masalaChai.logMe(); // Calling method from the User class.

// Checking instance of chai.
console.log(chai instanceof Teacher); // Expected output: true
console.log(chai instanceof User); // Expected output: true
