// Important for interviews

// Checking if a value is changeable or not
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
/* Output
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

console.log(Math.PI); // Output: 3.141592653589793

// Math.PI is not changeable because its descriptor forcibly sets writable, enumerable, and configurable to false by c++ in javascirpt execution code.

Math.PI = 5; // Attempting to change the value of PI will not have any effect.
console.log(Math.PI); // Output: 3.141592653589793 (Original value of PI remains unchanged)

// -----------------------------------------------------------------------------------

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("Chai order placed");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name")); // Output: Descriptor of the 'name' property

// We can define property descriptors for any value like this:
Object.defineProperty(chai, "name", {
  // Here, defineProperty is used for a single property, but defineProperties can be used for multiple properties.
  // writable: false,
  enumerable: true, // If set to false, the property will not be iterated in loops.
});

console.log(Object.getOwnPropertyDescriptor(chai, "name")); // Output: Updated descriptor for the 'name' property

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    // This condition ensures that functions are not included in the loop.
    // it is for stop the loop in object if the function comes after ending all values, it simply means we dont want function perform this loop opertion.
    console.log(`${key} : ${value}`);
  }
}
