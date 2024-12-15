let myName = "hitesh     ";
let mychannel = "chai     ";

console.log(myName.trueLength); // This is used to check the true length of a string.
// We can achieve this with the trim method, but if we want it to apply to all strings by default, we need to create a method for that purpose.
// Below is an example of how to create such a method.

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spider power is ${this.spiderman}`);
  },
};

// The 'bilal' property will be present in all data types like strings, arrays, etc., because Object is the top-level hierarchy of these.
Object.prototype.bilal = function () {
  console.log(`Bilal is present in all objects`);
};
heroPower.bilal();
myHeros.bilal();

// However, the 'heyHitesh' property will only be present in arrays.
Array.prototype.heyHitesh = function () {
  console.log(`Bilal says hello`);
};
myHeros.heyHitesh();
// heroPower.heyHitesh() // it will give an error.

// ----------------------------------------------------------------------------------------
// Inheritance:

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport, // Links two objects to share their properties.
};

Teacher.__proto__ = User; // This is the old way of accessing properties of another object, known as prototypal inheritance.

// Modern syntax:
Object.setPrototypeOf(TeachingSupport, Teacher); // This means TeachingSupport is accessing properties from Teacher.

// ------------------------------------------------------------------------------------------
// Solution for trimming whitespace that we have discussed the top:

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};
anotherUsername.trueLength();

// Using the trueLength property directly on a string:
"hitesh".trueLength();
"iceTea".trueLength();
