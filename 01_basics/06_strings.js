const name = "Bilal";
const repoCount = 50;

// console.log(name + repoCount + " Value"); // Not recommended

// String Interpolation: modern method using placeholders
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);

// Another way to declare a string is like an object, which has many methods; it works like an object.
const gameName = new String("mohammad-bilal-mansuri"); // 'new' is an object here; "String" is called a string constructor.

console.log(gameName[0]); // We can access key-value pairs from that string.

// console.log(gameName.__proto__);

// ---------------------String Methods------------------------

console.log(gameName.length); // Used to know the length of the string.

console.log(gameName.toUpperCase()); // Used to make all characters uppercase.

console.log(gameName.charAt(2)); // Used to know the value at the specified index.

console.log(gameName.indexOf("d")); // Used to know the index of any character in the string.

// Generates a substring from a string. The substring starts with index 0 and goes till 4 (4th index value is not included).
const newString = gameName.substring(0, 4);
console.log(newString);

// Works similarly to the substring method, but here we can give negative values for the start index to generate a substring from the end.
const anotherString = gameName.slice(-4, 4);
console.log(anotherString);

const newStringOne = "   bilal    ";
console.log(newStringOne);
console.log(newStringOne.trim()); // Used to remove spaces from the start and end.
console.log(newStringOne.trimStart()); // Used to remove spaces from the start only.
console.log(newStringOne.trimEnd()); // Used to remove spaces from the end only.

const url = "https://bilal.com/bilal%20mansuri";
console.log(url.replace("%20", "-")); // Used to replace values in a string.

console.log(url.includes("bilal")); // Used to check if a value exists in a string.

console.log(gameName.split("-")); // Used to split a string into parts in the form of an array based on the given delimiter.

//---------------------------------------------------------------------------------------------
// All important methods in one string.

const str = "Hello, I am Bilal Mansuri";

// Explanation of each method with expected output
console.log("1. Length:", str.length); // Output: 18

console.log("2. charAt(0):", str.charAt(0)); // Output: H

console.log("3. concat():", str.concat(", I am a web developer")); // Output: Hello, I am Bilal Mansuri, I am a web developer

console.log("4. indexOf('bilal'):", str.indexOf("Bilal")); // Output: 9

console.log("5. substring(0, 5):", str.substring(0, 5)); // Output: Hello

console.log("6. replace('Hello', 'Hi'):", str.replace("Hello", "Hi")); // Output: Hi, I am Bilal Mansuri

console.log("7. toLowerCase():", str.toLowerCase()); // Output: hello, i am Bilal Mansuri

console.log("8. toUpperCase():", str.toUpperCase()); // Output: HELLO, I AM BILAL MANSURI

console.log("9. trim():", str.trim()); // Removes spaces from start and end

console.log("10. startsWith('Hello'):", str.startsWith("Hello")); // Output: true

console.log("11. endsWith('ji'):", str.endsWith("ji")); // Output: false

console.log("12. slice(0, 5):", str.slice(0, 5)); // Output: Hello

console.log("13. split(','):", str.split(",")); // Output: [ 'Hello', ' I am Bilal Mansuri']

console.log("14. trimStart():", str.trimStart()); // Removes spaces from start

console.log("15. trimEnd():", str.trimEnd()); // Removes spaces from end

console.log("16. charAt(7):", str.charAt(7)); // Output: I

// Links for further study:
// MDN Web Docs: String (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
