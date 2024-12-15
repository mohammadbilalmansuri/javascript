// Truthy values: 1, true, "0", "false", " ", [], {}, function(){}
// Any falsy value in a string is considered a truthy value

// Falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN

const userEmail = [];

// Checking if userEmail exists (truthy) or not (falsy)
if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// Checking if array userEmail is empty or not
if (userEmail.length === 0) {
  console.log("Array is empty");
}

// Checking if object emptyObj is empty or not
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// false = 0 (true)
// "" = 0 (true)
// false = "" (true)

// Nullish Coalescing Operator (??): for handling null and undefined values
let val1 = 5 ?? 10;
console.log(val1); // 5

val1 = null ?? 10;
console.log(val1); // 10

val1 = undefined ?? 15;
console.log(val1); // 15

val1 = null ?? 10 ?? 20;
console.log(val1); // 10

// Ternary Operator: used for conditional expressions
// Syntax: condition ? trueValue : falseValue
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
