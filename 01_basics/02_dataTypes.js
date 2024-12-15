"use strict"; // Enforce strict mode to catch common coding mistakes

// Strict mode helps catch common coding mistakes and promotes cleaner, more secure JavaScript code.

// In browser environments, 'alert' is used to create pop-up messages, but it's not available in Node.js.
// alert(3 + 3);  // This line would cause an error in Node.js.
// alert("Hello, this is an alert"); // Avoid using 'alert' in Node.js environments.

/*
console.log(3 
    +
    3)
    
// While technically valid, maintaining high code readability is important; avoid unnecessary line breaks.
*/

let name = "hitesh"; // String
let age = 18; // Number
let isLoggedIn = false; // Boolean
let state; // Undefined (no value assigned yet)

// ---------------------------- Primitive Data Types ----------------------------------

// JavaScript has several primitive data types:
// - Number: Represents numeric values.
// - BigInt: Represents integers of arbitrary precision.
// - String: Represents textual data.
// - Boolean: Represents true or false values.
// - Null: Represents an intentional absence of any object value.
// - Undefined: Represents variables that have not been assigned a value.
// - Symbol: Represents unique values, often used for object properties.

console.log(typeof undefined); // Outputs 'undefined'.
console.log(typeof null); // Outputs 'object' (Note: typeof null is a known quirk in JavaScript).

// 'typeof' is used to determine the data type of values stored in variables.
