let score = "90"; // The score is stored as a string.

//console.log(typeof score);
//console.log(typeof(score));

// Convert the string to a number.
let valueInNumber = Number(score);

//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// "33" => 33 (Easy conversion)
// "33abc" => NaN (Not a Number)
// true => 1; false => 0

// Convert to boolean.
let isLoggedIn = "Bilal";
let booleanIsLoggedIn = Boolean(isLoggedIn);

//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "bilal" => true

// Convert to string.
let someNumber = 33;
let stringNumber = String(someNumber);

// console.log(stringNumber);
// console.log(typeof stringNumber);

// ---------------------------------- Operations --------------------------------------

let negValue = -3; // Unary minus operator, negating the value.
let addition = 2 + 2;
let subtraction = 2 - 2;
let multiplication = 2 * 2;
let exponentiation = 2 ** 3; // Exponentiation operator.
let division = 2 / 3;
let remainder = 2 % 3;

let str1 = "hello";
let str2 = " hitesh";

let str3 = str1 + str2; // String concatenation.
// console.log(str3);

// String concatenation with numbers
console.log("1" + 2); // Output: "12"
console.log(1 + "2"); // Output: "12"
console.log("1" + 2 + 2); // Output: "122"
console.log(1 + 2 + "2"); // Output: "32"

// Complex expression
console.log(((3 + 4) * 5) % 3);

// Unary plus operator (avoid using it)
console.log(+true); // Conversion to number (can be confusing).
console.log(+"");

// Avoid assigning multiple variables in one line to maintain code clarity.
// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2; // Not a good practice

let num1 = 2 + 2;
let num2 = 2 + 2;
let num3 = 2 + 2;

// Increment and decrement operators
let gameCounter = 100;
++gameCounter; // Pre-increment operator
console.log(gameCounter);

let a = 3;
let b = ++a; // Post-increment operator
console.log(a); // Output: 4
console.log(b); // Output: 4

// Links for further study
// MDN Web Docs: Expressions and Operators (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
// ECMAScript Language Specification: Type Conversion and Testing (https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion)
