// for of loop

// common scenarios
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings) {
  if (greet == " ") {
    continue;
  }
  console.log(`one of char is ${greet}`);
}

// ------Maps in JS--------
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India"); // it will not print because map returns unique values

console.log(map);
for (const [key, value] of map) {
  console.log(key, ":-", value);
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }
// object have diffrent methods to iterate, this will not work in object

// Iterating over an object using Object.entries()
for (const [key, value] of Object.entries(myObject)) {
  console.log(key, ":-", value);
}
