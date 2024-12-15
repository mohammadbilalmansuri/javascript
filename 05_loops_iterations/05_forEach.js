// ---- forEach loop ----

// An array containing programming languages
const coding = ["js", "ruby", "java", "python", "cpp"];

// Using forEach loop with an anonymous function as a callback
// (val) it does not matters we can put anything in the place of val
coding.forEach(function (val) {
  console.log(val); // Output each language in the array
});

// Using an arrow function as a callback in forEach loop
coding.forEach((item) => {
  console.log(item); // Output each language in the array
});

// Defining a function to print an item
function printMe(item) {
  console.log(item); // Output each language in the array
}

// Passing a pre-defined function to the forEach loop
coding.forEach(printMe);

// Using forEach loop with index and array parameters
coding.forEach((item, index, arr) => {
  console.log(item, index, arr); // Output each language along with its index and the array itself
});

// An array of objects representing programming languages
const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

// Using forEach loop to access and print a property of each object
myCoding.forEach((item) => {
  console.log(item.languageName); // Output the name of each programming language
});
