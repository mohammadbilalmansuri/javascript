// Comparison operators examples:
// console.log(2 > 1);  // true
// console.log(2 >= 1); // true
// console.log(2 < 1);  // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true

// It is important to ensure that the data types of values being compared are the same to avoid unexpected behavior due to type coercion.
// console.log("2" > 1); // true, but not recommended due to type coercion.

// In JavaScript, comparison and equality operators work differently:

// Comparison operators convert null to a number, treating it as 0.
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true, because null is converted to 0 in comparison.

// However, with undefined, all comparisons result in false.
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// The strict equality (===) and strict inequality (!==) operators compare both values and data types.
// console.log("2" === 2); // false, because the types are different (string vs. number).

// Note: Always prefer strict equality (===) to avoid unexpected type coercion behavior.
