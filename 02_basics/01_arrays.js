// Arrays can store different data types in one variable.
// The index of an array starts with 0.
// Arrays send reference values during operations, which is called shallow copy.

const myArr = [0, 1, 2, 3, 4, 5];
const Heroes = ["Salman", "Shah Rukh", "Aamir", "Hrithik", "Akshay"];

const myArr2 = new Array(1, 2, 3, 4); // Another way to create an array.

console.log(myArr[1]); // Accessing the value of any index.

//-------------------------Array methods-------------------------------

myArr.push(6); // Adds values to the array at the end.
myArr.pop(); // Removes the last value from the array without passing an index.
myArr.unshift(9); // Adds values to the start, but it shifts all values to new indexes; it's a time-consuming method.
myArr.shift(); // Removes the first value without passing an index.

console.log(myArr.includes(9)); // Checks if the value exists in the array or not.
console.log(myArr.indexOf(3)); // Checks the index of any value in the array (returns -1 if the value does not exist).

const newArr = myArr.join(); // Converts and binds array into a string.
console.log(myArr);
console.log(newArr);

// Slice and Splice methods

console.log("A ", myArr); // Includes 'A' as an indicator.
const myn1 = myArr.slice(1, 3); // slice gives a portion of the array or subarray. (1, 3) starts from index 1 and ends at index 3 but excludes the value at index 3. It doesn't change the original array.
console.log(myn1); // [1,2]

console.log("B ", myArr); // Shows that the values of the array are not changed => [0, 1, 2, 3, 4, 5]
const myn2 = myArr.splice(1, 3); // splice also gives a portion of the array, and in splice, the range value is included but it removes the portion of values from the original array.
console.log(myn2); // [1,2,3]

console.log("C ", myArr); // [0,4,5]

// The main difference between slice and splice method is that slice does not change (manipulate) the values in the original array, but splice removes the values that we take in the range from the original array.
// Slice output array [1,2] and the original array after the slice method is [0, 1, 2, 3, 4, 5]
// Splice output array [1,2,3] and the original array after the splice method is [0, 4, 5]
