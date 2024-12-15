const coding = ["js", "ruby", "java", "python", "cpp"];

// Using forEach to log each item in the array
coding.forEach((item) => {
  console.log(item);
  // forEach does not return anything
});

// The forEach method does not return a new array; it just iterates over the elements.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter to create a new array with numbers greater than 4
const newNums = myNums.filter((num) => {
  return num > 4;
});
console.log(newNums);

// Using forEach with conditional logic to achieve the same result
const numbers = [];
myNums.forEach((num) => {
  if (num > 4) {
    numbers.push(num);
  }
});
console.log(numbers);

// An array of book objects
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// Filtering books with genre 'History'
let userBooks = books.filter((bk) => bk.genre === "History");
console.log(userBooks);

// Further filtering books published after 1999 and with genre 'History'
userBooks = books.filter((bk) => {
  return bk.publish >= 1999 && bk.genre === "History";
});
console.log(userBooks);
