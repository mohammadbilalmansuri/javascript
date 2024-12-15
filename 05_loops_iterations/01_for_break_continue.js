// for loop
/*
// Syntax:
// for (initialization; condition; afterthought) {
//     statement
// }
*/

// Iterating from 0 to 10
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 is the best number");
  }
  console.log(element);
}
// console.log(element); // error

// Nested for loops to print multiplication table
for (let i = 1; i <= 10; i++) {
  console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// Iterating over an array
let myArray = ["flash", "batman", "superman"];
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

// ------- break and continue statements --------

// Exiting the loop when index reaches 5
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    break;
  }
  console.log(`Value of index is ${index}`);
}

// Skipping the iteration when index equals 5
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of i is ${index}`);
}
