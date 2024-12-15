// In JavaScript, semicolons are optional, but including them is a best practice for code consistency and to avoid unexpected behavior, especially during minification.
// If omitted, ensure each statement starts on a new line.

const accountId = 123456;
let accountEmail = "bilal@gmail.com";
var accountPassword = "1221"; // Although 'var' is allowed, prefer using 'const' or 'let' for better scoping.
accountCity = "Chhindwara"; // This variable is declared without 'const', 'let', or 'var', making it global. Avoid using global variables unnecessarily.

// This variable is declared but not initialized, so its value will be 'undefined'.
let accountState;

// Attempting to reassign 'accountId' will result in an error as it's declared using 'const', demonstrating the immutability of constants.
// accountId = 2; // This operation is not allowed.

// Changing the values of existing variables.
accountEmail = "mbm@google.com";
accountPassword = "21212121";
accountCity = "Bhopal";

// Outputting the values of accountId, accountEmail, and accountPassword to the console.
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);

// Utilizing console.table() method to display data in a tabular format, enhancing readability.
console.table({
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState, // 'accountState' will be displayed as 'undefined'.
});

// Prefer 'const' or 'let' over 'var' for variable declaration due to scoping issues and to encourage block-scoped variables.
// var age = 19;
