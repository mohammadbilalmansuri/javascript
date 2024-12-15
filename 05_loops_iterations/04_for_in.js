// ---- for in loop ----

// An object containing programming language shortcuts and their full names
const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

// Iterating through the object using a for...in loop
for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`); // Outputting each key-value pair
}

// An array of programming language shortcuts
const programming = ["js", "rb", "py", "java", "cpp"];

// Iterating through the array using a for...in loop
for (const key in programming) {
  console.log(`value in ${key} is ${programming[key]}`); // Outputting each index-value pair
}

// Creating a Map
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("IN", "India"); // Overriding the value for the key "IN"

// The map is not directly iterable using for...in loop
// Uncommenting the code below will result in an error
// for (const key in map) {
//     console.log(key);
// }
