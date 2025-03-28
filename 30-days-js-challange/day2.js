// Day 2: Operators

// Activity 1: Arithmetic Operations
let num1 = 8;
let num2 = 4;

let sum = num1 + num2;
console.log(sum); // 12

let sub = num1 - num2;
console.log(sub); // 4

let mul = num1 * num2;
console.log(mul); // 32

let div = num1 / num2;
console.log(div); // 2

let mod = num1 % num2;
console.log(mod); // 0

// Activity 2: Assignment Operations
num1 += num2;
console.log(num1); // 12

num1 -= num2;
console.log(num1); // 8

// Activity 3: Comparison Operators
let num1str = "8";

console.log(num1 > num2); // true
console.log(num1 < num2); // false

console.log(num1 >= num2); // true
console.log(num1 <= num2); // false

console.log(num1 == num1str); // true // loose check
console.log(num1 === num1str); // false // strict check

let a = true;
let b = false;

console.log(a && b); // false

console.log(a || b); // true

console.log(!a); // false

// Activity 5: Ternary Operator
let isPositive = num1 > 0 ? true : false;
console.log(isPositive); // true

// Feature Request 1: Arithmetic Operations Script - Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results
function performArithmeticOperations(num1, num2) {
  console.log(`Addition of ${num1} and ${num2} is : ${num1 + num2}`);
  console.log(`Subtraction of ${num1} and ${num2} is : ${num1 - num2}`);
  console.log(`Multiplication of ${num1} and ${num2} is : ${num1 * num2}`);
  console.log(`Division of ${num1} and ${num2} is : ${num1 / num2}`);
  console.log(`Remainder of ${num1} and ${num2} is : ${num1 % num2}`);
}
performArithmeticOperations(50, 10);
// Output:
// Addition of 50 and 10 is : 60
// Subtraction of 50 and 10 is : 40
// Multiplication of 50 and 10 is : 500
// Division of 50 and 10 is : 5
// Remainder of 50 and 10 is : 0

// Feature Request 2: Comparison and Logical Operators Script: - Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
function compareAndLog(num1, num2) {
  console.log(`${num1} > ${num2} : ${num1 > num2}`);
  console.log(`${num1} < ${num2} : ${num1 < num2}`);
  console.log(`${num1} >= ${num2} : ${num1 >= num2}`);
  console.log(`${num1} <= ${num2} : ${num1 <= num2}`);
  console.log(`${num1} == ${num2} : ${num1 == num2}`);
  console.log(`${num1} === ${num2} : ${num1 === num2}`);
  console.log(`${num1} != ${num2} : ${num1 != num2}`);
  console.log(`${num1} !== ${num2} : ${num1 !== num2}`);

  console.log(
    `(${num1} > ${num2}) && (${num1} === ${num2}) : ${
      num1 > num2 && num1 === num2
    }`
  );
  console.log(
    `(${num1} > ${num2}) || (${num1} === ${num2}) : ${
      num1 > num2 || num1 === num2
    }`
  );
  console.log(`!(${num1} > ${num2}) : ${!(num1 > num2)}`);
}

compareAndLog(8, 5);
// Output:
// 8 > 5 : true
// 8 < 5 : false
// 8 >= 5 : true
// 8 <= 5 : false
// 8 == 5 : false
// 8 === 5 : false
// 8 != 5 : true
// 8 !== 5 : true
// (8 > 5) && (8 === 5) : false
// (8 > 5) || (8 === 5) : true
// !(8 > 5) : false

// Feature Request 3: Ternary Operators Script: - Write a script that uses ternary operators to determine if a number is positive, negative, or zero and logs the result.
function checkNumber(num) {
  const result = num > 0 ? "positive" : num < 0 ? "negative" : "zero";
  console.log(`The number ${num} is ${result}.`);
}

checkNumber(10); // Output: The number 10 is positive.
checkNumber(-5); // Output: The number -5 is negative.
checkNumber(0); // Output: The number 0 is zero.
