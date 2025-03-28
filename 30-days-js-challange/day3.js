// Day 3: Control Structures

// ---------- Activity 1: if-else statements ----------

// Feature request 1: Number Check Script- Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
let num = 5;
if (num > 0) {
  console.log(`${num} is positive`); // 5 is positive
} else if (num < 0) {
  console.log(`${num} is negative`);
} else {
  console.log(`${num} is zero`);
}
// Feature request 2: Voting Eligibility Script - Create a script to check if a person is eligible to vote based on their age and log the result.
let age = 20;
if (age >= 18) {
  console.log(`Person is eligible to vote`); // Person is eligible to vote
} else {
  console.log(`Person is not eligible to vote`);
}

// ---------- Activity 2: Nested if-else statements ----------

let a = 5,
  b = 10,
  c = 3;
if (a >= b && a >= c) {
  console.log(`${a} is the largest`);
} else if (b >= a && b >= c) {
  console.log(`${b} is the largest`); // 10 is the largest
} else {
  console.log(`${c} is the largest`);
}

// ---------- Activity 3: Switch Cases ----------

// Feature request 3: Day of the Week Script - Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
let day = 1;
switch (day) {
  case 1:
    console.log("Monday"); // Monday
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// Feature request 4: Grade Assignment Script - Create a script that uses a switch case to assign a grade based on a score and logs the grade.
let score = 95;
switch (true) {
  case score >= 75:
    console.log("Grade A"); // Grade A
    break;
  case score >= 60 && score < 75:
    console.log("Grade B");
    break;
  case score >= 45 && score < 60:
    console.log("Grade C");
    break;
  case score >= 33 && score < 45:
    console.log("Grade D");
    break;
  case score >= 0 && score < 33:
    console.log("Grade F");
    break;
  default:
    console.log("Invalid score");
}

// ---------- Activity 4: Conditional (Ternary) Operator ----------

let num1 = 10;
let result = num1 % 2 === 0 ? "even" : "odd";
console.log(`${num1} is ${result}`); // 10 is even

// ---------- Activity 5: Combining Conditions ----------

// Feature request 5: : Leap Year Check Script - Write a script that checks if a year is a leap year using multiple conditions and logs the result.
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year`); // 2024 is a leap year
} else {
  console.log(`${year} is not a leap year`);
}
