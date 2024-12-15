// This is how to set getters and setters directly within an object. It is not commonly used nowadays and is considered rare and unconventional.
// Nowadays, class-based getters and setters are more commonly used.

const User = {
  email: "b@bm.com",
  password: "mbm",

  // Using getters and setters directly within the object.
  get email() {
    return this._email.toUpperCase(); // Modifying the email value before returning it.
  },

  set email(value) {
    this._email = value; // Setting the email value.
  },
};

// Creating a new object using Object.create.
const tea = Object.create(User); // We cannot use 'new' here because we are inheriting from another object, not a constructor function.
console.log(tea.email); // Output: 'B@BM.COM'

// 'new' is used with constructor functions, whereas Object.create is used with factory functions like objects, arrays, etc.
