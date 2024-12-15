// const tinderUser = new Object(); // This is a singleton object
const tinderUser = {}; // This is a non-singleton object

// Assigning values to the tinderUser object
tinderUser.id = "12345";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

// Nested object example
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Bilal",
      lastname: "Mansuri",
    },
  },
};
console.log(regularUser.fullname.userfullname.firstname);

// Merging objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { obj1, obj2 }; // Merges objects inside an object (not recommended)
console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2); // Merges objects using Object.assign(), here paranthesis as empty object is used for target object and other object are sources
console.log(obj5);

const obj6 = { ...obj1, ...obj2 }; // Merges objects using the spread operator
console.log(obj6);

// Array of objects
const users = [
  {
    id: 1,
    email: "a@gmail.com",
  },
  {
    id: 2,
    email: "b@gmail.com",
  },
  {
    id: 3,
    email: "c@gmail.com",
  },
];

console.log(users[1].email);

// Object methods
console.log(Object.keys(tinderUser)); // Accesses all the keys of the object in an array
console.log(Object.values(tinderUser)); // Accesses all the values of the object in an array
console.log(Object.entries(tinderUser)); // Accesses all the entries of the object in an array

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // Checks if the object has a specific property

// Destructuring
const course = {
  coursename: "JavaScript",
  price: "999",
  courseInstructor: "Hitesh",
};

const { courseInstructor: instructor } = course; // Renames the key 'courseInstructor' to 'instructor', other way to access the values from the object with variable

// console.log(courseInstructor); // it gives an error because we change the key name
console.log(instructor);

// --------------------API's-------------------
// JSON file structure example
/*
{
    "name": "Hitesh",
    "coursename": "JS in Hindi",
    "price": "free"
}
*/

// API structure example with nesting
// [{}, {}, {}];
