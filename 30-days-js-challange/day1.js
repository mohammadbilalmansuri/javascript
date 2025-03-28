// Activity 1: Variable Declaration
var myNumber = 1;
let myString = "Hello I am Bilal";

console.log(myNumber); // 1
console.log(myString); // Hello I am Bilal

// Activity 2: Constant Declaration
const isLoggedIn = false;
console.log(isLoggedIn); // false

// Activity 3: Data Types
let var1 = 1;
console.log(typeof var1); // number

let var2 = "This is an string";
console.log(typeof var2); //string

let var3 = true;
console.log(typeof var3); // boolean

let var4 = {
  name: "Bilal",
  age: 19,
  isChallenging: true,
};
console.log(typeof var4); // object

let var5 = [1, 2, 3, 4, 5];
console.log(typeof var5); // object

// Activity 4: Reassigning Variables
let value = 2;
console.log(value); // 2

value = 3;
console.log(value); // 3

// Activity 5: Understanding "const"
const myName = "Mohammad Bilal Mansuri";
// myName = "Bilal Mansuri"; // TypeError: Assignment to constant variable.

// Feature Request 1: Declare every type of variable and log his values with type
let numVar = 13;
let stringVar = "Hello, World!";
let booleanVar = true;
let objectVar = { name: "Bilal", age: 19 };
let arrayVar = [1, 2, 3, 4, 5];
let undefinedVar;
let nullVar = null;
let symbolVar = Symbol("symbol");
let bigIntVar = 12345678901234567890n;

console.log("Value:", numVar, "Type:", typeof numVar); // Value: 13 Type: number
console.log("Value:", stringVar, "Type:", typeof stringVar); // Value: Hello, World! Type: string
console.log("Value:", booleanVar, "Type:", typeof booleanVar); // Value: true Type: boolean
console.log("Value:", objectVar, "Type:", typeof objectVar); // Value: { name: 'Bilal', age: 19 } Type: object
console.log("Value:", arrayVar, "Type:", typeof arrayVar); // Value: [ 1, 2, 3, 4, 5 ] Type: object
console.log("Value:", undefinedVar, "Type:", typeof undefinedVar); // Value: undefined Type: undefined
console.log("Value:", nullVar, "Type:", typeof nullVar); // Value: null Type: object
console.log("Value:", symbolVar, "Type:", typeof symbolVar); // Value: Symbol(symbol) Type: symbol
console.log("Value:", bigIntVar, "Type:", typeof bigIntVar); // Value: 12345678901234567890n Type: bigint

// Feature Request 2: Difference Between "let" and "const"
let mutableVariable = "Initial Value";
console.log(mutableVariable); // Initial Value

mutableVariable = "Updated Value";
console.log(mutableVariable); // Updated Value

const immutableVariable = "Initial Value";
console.log(immutableVariable); // Initial Value

immutableVariable = "Updated Value"; // TypeError: Assignment to constant variable.
