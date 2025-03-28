// Day 14: Classes

// ---------- Activity 1: Class Definition ----------

// Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  // Add a method to the Person class that updates the age property and logs the updated age.
  updateAge(newAge) {
    this.age = newAge;
    console.log(`Updated age: ${this.age}`);
  }
}

const person = new Person("Bilal", 19);
console.log(person.greet());
person.updateAge(20);

// ---------- Activity 2: Class Inheritance ----------

// Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getStudentId() {
    return `Student ID: ${this.studentId}`;
  }

  // Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
  greet() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }
}

const student = new Student("Bilal", 19, "1001");
console.log(student.getStudentId());
console.log(student.greet());

// ---------- Activity 3: Static Methods and Properties ----------

// Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
class PersonWithStatic {
  static genericGreeting() {
    return "Hello! This is a generic greeting.";
  }
}

console.log(PersonWithStatic.genericGreeting());

// Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
class StudentWithStatic extends Person {
  static studentCount = 0;

  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    StudentWithStatic.studentCount++;
  }
}

const student1 = new StudentWithStatic("Bilal", 19, "1001");
const student2 = new StudentWithStatic("Rehan", 18, "1002");
console.log(`Total students: ${StudentWithStatic.studentCount}`);

// ---------- Activity 4: Getters and Setters ----------

// Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
class PersonWithGetSet {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const personWithGetSet = new PersonWithGetSet("Bilal", "Mansuri", 19);
console.log(personWithGetSet.fullName);
personWithGetSet.fullName = "Rehan Mansuri";
console.log(personWithGetSet.fullName);

// ---------- Activity 5: Private Fields (Optional) ----------

// Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited: ${amount}, New Balance: ${this.#balance}`);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Insufficient balance");
    } else {
      this.#balance -= amount;
      console.log(`Withdrew: ${amount}, New Balance: ${this.#balance}`);
    }
  }

  getBalance() {
    return this.#balance;
  }
}

// Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
const account = new Account();
account.deposit(100);
account.withdraw(30);
account.withdraw(80);
console.log(`Final Balance: ${account.getBalance()}`);
