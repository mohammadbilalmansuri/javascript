// Dates

let myDate = new Date();
// console.log(myDate); // Output: 2024-01-15T09:00:15.695Z

// These prototype methods convert dates into understandable and various forms.
console.log(myDate.toString()); // Converts date into a string.
console.log(myDate.toDateString()); // Provides only the date without time.
console.log(myDate.toLocaleString()); // Provides date with time in the local timezone.
console.log(myDate.toISOString()); // Provides the date in ISO format (e.g., 2024-01-15T09:05:44.118Z).
console.log(myDate.toLocaleDateString()); // Provides the date in a localized string format (e.g., 1/15/2024).
console.log(myDate.toLocaleTimeString()); // Provides the time in a localized string format (e.g., 2:37:29 PM).
console.log(myDate.toTimeString()); // Provides the time in a string format (e.g., 14:38:14 GMT+0530 (India Standard Time)).
console.log(myDate.getMonth() + 1); // Returns the month (0-indexed), so we add 1 to get the correct month.
console.log(myDate.getDay()); // Returns the day of the week (0-indexed; 0 is Sunday).

console.log(typeof myDate); // Outputs: object

// We can declare specific dates like this.
// Note: In JavaScript, months are 0-indexed (0-11).
let myCreatedDate1 = new Date(2023, 0, 23);
console.log(myCreatedDate1.toLocaleString()); // Outputs: 1/23/2023, 12:00:00 AM

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate2.toLocaleString()); // Outputs: 1/23/2023, 5:03:00 AM

let myCreatedDate3 = new Date("2023-01-14"); // YY-MM-DD format
console.log(myCreatedDate3.toLocaleString()); // Outputs: 1/14/2023, 5:30:00 AM

let myCreatedDate4 = new Date("01-14-2023"); // MM-DD-YY format
console.log(myCreatedDate4.toLocaleString()); // Outputs: 1/14/2023, 12:00:00 AM

// This is used to obtain the timestamp in milliseconds.
let myTimeStamp = Date.now();
console.log(myTimeStamp); // Outputs: 1705310334091

console.log(myCreatedDate1.getTime()); // Used to compare dates by their value in milliseconds.
console.log(Math.floor(Date.now() / 1000)); // Converts the value to seconds.

console.log(
  `The date is ${myDate.toLocaleDateString()} and the time is ${myDate.toLocaleTimeString()}`
); // We can print dates like this as well.

// Using this way, we can define all functionalities that we want.
myDate.toLocaleString("default", {
  weekday: "long",
  timeZone: "GMT+0530",
  // More options can be added here.
});
