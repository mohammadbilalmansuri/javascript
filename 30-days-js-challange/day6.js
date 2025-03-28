// Day 6: Arrays

// ---------- Activity 1: Array Creation and Access ----------

// Create an array of numbers from 1 to 5 and log the array to the console.
let numbers = [1, 2, 3, 4, 5];
console.log("Array:", numbers);

// Access the first and last elements of the array and log them to the console.
console.log("First element:", numbers[0]);
console.log("Last element:", numbers[numbers.length - 1]);

// ---------- Activity 2: Array Methods (Basic) ----------

// Use the push method to add a new number to the end of the array and log the updated array.
numbers.push(6);
console.log("After push:", numbers);

// Use the pop method to remove the last element from the array and log the updated array.
numbers.pop();
console.log("After pop:", numbers);

// Use the shift method to remove the first element from the array and log the updated array.
numbers.shift();
console.log("After shift:", numbers);

// Use the unshift method to add a new number to the beginning of the array and log the updated array.
numbers.unshift(0);
console.log("After unshift:", numbers);

// ---------- Activity 3: Array Methods (Intermediate) ----------

// Use the map method to create a new array where each number is doubled and log the new array.
let doubledNumbers = numbers.map((num) => num * 2);
console.log("Doubled array:", doubledNumbers);

// Use the filter method to create a new array with only even numbers and log the new array.
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even numbers array:", evenNumbers);

// Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of array elements:", sum);

// ---------- Activity 4: Array Iteration ----------

// Use a for loop to iterate over the array and log each element to the console.
for (let i = 0; i < numbers.length; i++) {
  console.log("For loop element:", numbers[i]);
}

// Use the forEach method to iterate over the array and log each element to the console.
numbers.forEach((num) => console.log("forEach element:", num));

// ---------- Activity 5: Multi-dimensional Arrays ----------

// Create a two-dimensional array (matrix) and log the entire array to the console.
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("Matrix:", matrix);

// Access and log a specific element from the two-dimensional array.
console.log("Element at [1][1]:", matrix[1][1]);

// ---------- Feature Requests ----------

// Feature Request 1: Array Manipulation Script
let array = [1, 2, 3, 4, 5];
array.push(6);
array.pop();
array.shift();
array.unshift(0);
console.log("Array Manipulation:", array);

// Feature Request 2: Array Transformation Script
let transformedArray = array
  .map((num) => num * 2)
  .filter((num) => num % 2 === 0)
  .reduce((acc, num) => acc + num, 0);
console.log("Array Transformation:", transformedArray);

// Feature Request 3: Array Iteration Script
array.forEach((num) => console.log("forEach in Feature Request:", num));
for (let i = 0; i < array.length; i++) {
  console.log("For loop in Feature Request:", array[i]);
}

// Feature Request 4: Two-dimensional Array Script
let twoDimArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("Two-dimensional Array:", twoDimArray);
console.log("Specific element [2][2]:", twoDimArray[2][2]);
