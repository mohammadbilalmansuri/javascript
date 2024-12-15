const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using map to create a new array by adding 10 to each number
const nums = myNumbers.map((num) => {
  return num + 10;
});
console.log(nums);

// Chaining map and filter methods
const newNums = myNumbers
  .map((num) => num * 10) // Multiply each number by 10
  .map((num) => num + 1) // Add 1 to each number
  .filter((num) => num >= 40); // Filter numbers greater than or equal to 40
console.log(newNums);
