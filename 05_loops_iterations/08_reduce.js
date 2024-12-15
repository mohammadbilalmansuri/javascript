// Using the reduce method to calculate the total sum of an array of numbers
const myNums = [1, 2, 3];

// Using a function expression
const myTotal = myNums.reduce(function (accumulator, currentValue) {
  console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
  return accumulator + currentValue;
}, 0); // 0 is the initial value of the accumulator
console.log(myTotal);

// Using an arrow function
const Total = myNums.reduce((acc, curr) => acc + curr, 0);
console.log(Total);

// Using reduce to calculate the total price of items in a shopping cart
const shoppingCart = [
  {
    itemName: "JS course",
    price: 2999,
  },
  {
    itemName: "Python course",
    price: 1999,
  },
  {
    itemName: "Mobile dev course",
    price: 4999,
  },
  {
    itemName: "Data science course",
    price: 9999,
  },
];

// Accumulating the total price
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
