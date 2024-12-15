// Immediately Invoked Function Expressions (IIFE) are used to prevent variable pollution in the global scope and execute immediately.

// Syntax: ()() - The first set of parentheses contains the function definition, and the second set executes the function.

// Named IIFE: 'chai' is the name of this IIFE
(function chai() {
  console.log(`DB CONNECTED`);
})(); // Semicolon is necessary to denote the end of the IIFE, especially when multiple IIFEs exist in the file.

// Simple IIFE without a name
((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("bilal");
