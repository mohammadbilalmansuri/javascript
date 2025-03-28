// These things plays an important role in the optimaization process.

// Arrays in JavaScript have different types based on their structure and contents, affecting optimization.

// the values in array called elements

// Types of Arrays

// 1. Continues(Packed) Arrays =>
const arr1 = [1, 2, 3, 4, 5, 6, 7]; // continues values without holes

// 2. Holey Arrays
const arr2 = [1, 2, , 4, 5, , 6]; // holes between values

// Subtype of both-
// a. SMI(Small Integer Type)
// b. Packed Element
// c. Double (float, sring, function)

const arr3 = [1, 2, 3, 4, 5]; // PACKED_SMI_ELEMENTS => this is the most optimized type of array.
arr3.push(6.0);
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ] => PACKED_DOUBLE_ELEMENTS

arr3.push("seven");
console.log(arr3); // [ 1, 2, 3, 4, 5, 6, 'seven' ] => PACKED_ELEMENTS

// Ones a PACKED_SMI_ELEMENTS array switch to PACKED_DOUBLE_ELEMENTS array it can not be switch back to PACKED_SMI_ELEMENTS array anymore.
// if you think you will remove that double values and the array switch back to there assumed type so it is not even possible.
// this is not only for these two types it s for all means if a array converts to a diffrent type by performing some opration on it so it will change there type and can not be come into the previous tupe.
// In technical words once an array goes downgrade it will not we upgrade again because the compiler or interpter can not optimized thins like that.

arr3[10] = 11;
console.log(arr3); // [ 1, 2, 3, 4, 5, 6, 'seven', <3 empty items>, 11 ] => HOLEY_ELEMENTS

console.log(arr3.length); // 11
console.log(arr3[9]); // undefined // these are very costly things in term of optimization because we are checking a holey value.
console.log(arr3[15]); // undefined

// How these checkings done-

// 1. If the array is continues array => in this condition only bound check perform it simply check the index we are asking is in range if it is it gives the value and if the index is out of range it simply give undefined.

// 2. If the array contains holes it will proceed through these operations =>
// Bound Check => It checks the index we are accessing is in the index range or not if it is in the index range so it gives proceed next and if the index is out of range it gives undefined.
// hasOwnProperty(arr3, 9) => If the index is in range so that is checked with this method and if the value is exits it gives the value but if the index content holey or empty value so it proceed it in next step for confermation.
// hasOwnproperty(arr3.prototype, 10) => then it will check the value in prototype
// hasOwnproperty(Oject.prototype, 10) => because javascript has the prototypal nature so it confirm it in objct prototype of the array and then give undefined if the value is not exits.

// In JavaScript these hasOwnProperty checkings are the most expensive checking in term of optimization.
// thats why holes are very expensive.

// Array comparition on the basis of optimizaion=>
// Continues Arrays(PACKED_SMI_ELEMENTS > PACKED_DOUBLE_ELEMENTS > PACKED_ELEMENTS) >  Holey Arrays(HOLEY_SMI_ELEMENTS > HOLEY_DOUBLE_ELEMENTS > HOLEY_ELEMENTS)

// -----------------------------------------------------------------------------------------------------------------

const arr4 = new Array(3); // creating an array and defining the range of index and then assign values.
console.log(arr4); // [ <3 empty items> ]  => HOLEY_SMI_ELEMENTS
arr4[0] = "1"; // will go in last downgrade => HOLEY_ELEMENTS
arr4[1] = "2";
arr4[2] = "3";

// better approach in terms of optimization-
const arr5 = []; // SMI_ELEMENTS
arr5.push("1"); // PACKED_ELEMENTS
arr5.push("1");
arr5.push("1");

const arr6 = [1, 2, 3, 4, 5];
arr6.push(NaN); // PACKED_DOUBLE
arr6.push(Infinity); //PACKED_DOUBLE

// For better optimization use predefined methods fo performing some operations if method exits for there operation rather than creating own methods.
