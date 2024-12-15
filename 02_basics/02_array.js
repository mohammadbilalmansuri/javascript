const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

// marvel_heros.push(dc_heros)  // this is not a good method to merge two array, basically it puts array in the array
// console.log(marvel_heros); // ['thor', 'Ironman', 'spiderman' ['superman', 'flash', 'batman']]
// console.log(marvel_heros[3]); // here index 3 gives that array

// Merging arrays using concat method
const allHeros = marvel_heros.concat(dc_heros); // merge arrays in one array and returns a new array

console.log(allHeros); // ['Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman']

// Merging arrays using spread operator (modern way)
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros); // ['Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman']

// Arrays inside arrays
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// Flattening arrays to remove nested arrays
const real_another_array = another_array.flat(Infinity); // it removes all array inside an array and merge all values in one value     // () in paranthese we need give give the depth of the array means the level of nexing //we can put infinity in that so it will goes to the last depth of the array
console.log(real_another_array);
// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// Checking if a value is an array
console.log(Array.isArray("Bilal")); // false

// Converting a string into an array of characters
console.log(Array.from("Bilal")); // ['B', 'i', 'l', 'a', 'l']

console.log(Array.from({ name: "hitesh" })); // interesting => because like this it will only give an empty array we have to declare in the paranthese for we need the array of keys or values

// it will work like this => right way
// Converting an object into an array of values, keys, and entries
const obj = {
  name: "Bilal",
  age: 19,
};
const newArray = Object.values(obj); // Array of all values in the object
console.log(newArray); // ['Bilal', 19]
const newArray1 = Object.keys(obj); // Array of all keys in the object
console.log(newArray1); // ['name', 'age']
const newArray2 = Object.entries(obj); // Array of all key-value pairs in an array
console.log(newArray2); // [['name', 'Bilal'], ['age', 19]]

// Creating an array from multiple variables
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
