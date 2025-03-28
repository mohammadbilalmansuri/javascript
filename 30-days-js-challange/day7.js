// Day 7: Objects

// Feature Request 1: Book Object Script Starts Here

// ---------- Activity 1: Object Creation and Access ----------

// Create an object representing a book with properties like title, author, and year, and log the object to the console and then access and log the title and author properties of the book object.
let book = {
  title: "30 Days JavaScript Challenge",
  author: "Bilal Mansuri",
  year: 2024,
};
console.log("Book:", book);
console.log(`Author of the ${book.title} is ${book.author}`);

// ---------- Activity 2: Object Methods ----------

// Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.getDetails = function () {
  return `${this.title} by ${this.author}`;
};
console.log("Book details:", book.getDetails());

// Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = function (newYear) {
  this.year = newYear;
};
book.updateYear(2021);
console.log("Updated book object:", book);

// Feature Request 1: Book Object Script Ends Here

// Feature Request 2: Library Object Script Start Here

// ---------- Activity 3: Nested Objects ----------

// Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
let library = {
  name: "City Library",
  books: [
    {
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      year: 2008,
    },
    { title: "Eloquent JavaScript", author: "Marijn Haverbeke", year: 2018 },
    { title: "You Don't Know JS", author: "Kyle Simpson", year: 2015 },
  ],
};
console.log("Library object:", library);

// Access and log the name of the library and the titles of all the books in the library.
console.log("Library name:", library.name);
library.books.forEach((book) => console.log("Book title:", book.title));

// ---------- Activity 4: The this Keyword ----------

// Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book.getTitleAndYear = function () {
  return `${this.title} (${this.year})`;
};
console.log("Title and year:", book.getTitleAndYear());

// Feature Request 2: Library Object Script Ends Here

// Feature Request 3: Object Iteration Script Starts Here

// ---------- Activity 5: Object Iteration ----------

// Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (let key in book) {
  if (book.hasOwnProperty(key)) {
    console.log(`${key}: ${book[key]}`);
  }
}

// Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log("Keys:", Object.keys(book));
console.log("Values:", Object.values(book));

// Feature Request 3: Object Iteration Script Ends Here
