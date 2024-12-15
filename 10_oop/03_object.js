// Prototype provides access to 'new', 'this', class, and prototype inheritance in JavaScript.

// In JavaScript, everything is an object, which can be traced back to the object prototype.

// Objects in JavaScript follow a depth hierarchy: string --> object --> null, where object is the final prototype.
// arrays --> object --> null

// While getters and setters are available, they are not commonly used.

// Functions in JavaScript are both functions and objects. They behave like functions but can also be treated as objects.

function multipleBy5(num) {
  return num * 5;
}
multipleBy5.power = 2;

console.log(multipleBy5(5)); // Output: 25
console.log(multipleBy5.power); // Output: 2
console.log(multipleBy5.prototype); // Output: The prototype of the function 'multipleBy5'
// here the prototype above is 'this' of function multipleBy5 beause it contents some context, property and methods inside it.

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

// Custom methods can be added to the prototype of a constructor function.
createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`Score is ${this.score}`);
};

// here simple thing about 'this' is whoever called the function he do work of him.

// The 'new' keyword is essential to properly initialize objects created from constructor functions.
const tea = createUser("tea", 250); // Without 'new', properties are not properly set.

// tea.printMe()
//here it will not run things that we want because we only define the method in prototype.
// but we haven't tell the variable 'tea' that we have declare some additional properties, for this we use new keyword.
// thats why the new keyword plays an important role.

const chai = new createUser("chai", 25); // 'new' keyword initializes properties correctly.

chai.printMe();

/*
  
  // Behind the scenes of using the 'new' keyword:
  
  A new object is created: The new keyword initiates the creation of a new JavaScript object.
  
  A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.
  
  The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.
  
  The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
  
  */
