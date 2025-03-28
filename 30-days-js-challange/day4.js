// Day 4: Loops

// ---------- Activity 1: For Loop ----------

// Feature Request 1: Number Printing Script Part 1
// Print numbers from 1 to 10 using a for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Feature Request 2: Multiplication Table Script
// Print the multiplication table of 5 using a for loop
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// ---------- Activity 2: While Loop ----------

// Feature Request 1: Number Printing Script Part 2
// Print numbers from 1 to 10 using a while loop
let a = 1;
while (a <= 10) {
  console.log(a);
  a++;
}

// Feature Request 4: Sum Calculation Script
// Calculate the sum of numbers from 1 to 10 using a while loop
let sum = 0;
let i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(`Sum: ${sum}`);

// Print numbers from 10 to 1 using a while loop
let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}

// ---------- Activity 3: Do...While Loop ----------

// Print numbers from 1 to 5 using a do...while loop
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

// Feature Request 5: Factorial Calculation Script
// Calculate the factorial of a number using a do...while loop
let number = 5;
let factorial = 1;
let l = 1;
do {
  factorial *= l;
  l++;
} while (l <= number);
console.log(`Factorial of ${number} is ${factorial}`);

// ---------- Activity 4: Nested Loops ----------

// Feature Request 3: Pattern Printing Script
// Print a pattern of stars using nested loops
let rows = 5;
for (let m = 1; m <= rows; m++) {
  let pattern = "";
  for (let n = 1; n <= m; n++) {
    pattern += "* ";
  }
  console.log(pattern);
}

// ---------- Activity 5: Loop Control Statements ----------

// Print numbers from 1 to 10, but skip the number 5 using the continue statement
for (let o = 1; o <= 10; o++) {
  if (o === 5) {
    continue;
  }
  console.log(o);
}

// Print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement
for (let p = 1; p <= 10; p++) {
  if (p === 7) {
    break;
  }
  console.log(p);
}
