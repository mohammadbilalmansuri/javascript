// Global scope differs between browsers and Node.js
// Values in the global scope are accessible in block scope, but block scope values exist only within that block

//var c = 300
let a = 300;
if (true) {
  // Block scope
  let a = 10; // Inner block scope variable

  // const b = 20
  // var c = 30

  console.log("INNER: ", a); // Output: 10
}
console.log(a); // Output: 300
// console.log(b);
// console.log(c);

// ------------------ Nested Scope ------------------
function one() {
  // Outer function scope
  const username = "bilal"; // Variable in outer function scope

  function two() {
    // Inner function scope
    const website = "youtube"; // Variable in inner function scope
    console.log(username); // Output: bilal

    // console.log(website); // it will show not defined
  }
  two(); // Call inner function
}
one(); // Call outer function

if (true) {
  // Outer block scope
  const username = "bilal"; // Variable in outer block scope
  if (username === "bilal") {
    // Inner block scope
    const website = " youtube"; // Variable in inner block scope
    console.log(username + website); // Output: bilal youtube
  }
  // console.log(website); // Error: website is not defined
}
// console.log(username); // Error: username is not defined

// ------------------ Interesting ------------------

// Function declarations are hoisted, so they can be called before they are declared
console.log(addOne(5)); // Output: 6
function addOne(num) {
  // Normal function
  return num + 1;
}

// Function expressions are not hoisted, so they cannot be called before they are defined
addTwo(5); // Error: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
  // Function expression
  return num + 2;
};
// addTwo(5); // Works after the function expression is defined
