class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  // This method is used to generate or add an ID for every new user.
  static createId() {
    // 'static' is used to prevent access to this method from any child objects or inherited classes.
    return `123`; // A random number would typically be generated here, but '123' is used for illustration (understand).
  }
}

const hitesh = new User("hitesh");
// Attempting to call 'createId' on an instance of User will generate an error because it's a static method.
// console.log(hitesh.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");
// Similarly, attempting to call 'createId' on an instance of Teacher will also generate an error.
// console.log(iphone.createId());

// However, static methods can be called directly on the class itself:
console.log(User.createId()); // Output: '123'
console.log(Teacher.createId()); // Output: '123'
