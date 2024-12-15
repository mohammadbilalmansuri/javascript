/* In JavaScript, a thenable is an object that has a then() function. 
All promises are thenables, but not all thenables are promises.

Many promise patterns, like chaining and async/await, work with any thenable. 
For example, you can use thenables in a promise chain or with async/await. */

// Example of a thenable object
const thenable = {
  then: function (onFulfilled) {
    setTimeout(() => onFulfilled(42), 1000); // Fulfills with the value `42` after 1 second
  },
};

// Using thenable in a promise chain
Promise.resolve()
  .then(() => thenable)
  .then((v) => {
    console.log(v); // Logs: 42
  });

// Using thenable with async/await
(async () => {
  const v = await thenable;
  console.log(v); // Logs: 42
})();

/* Many libraries implement thenables to enable async/await support. 
For example, Mongoose queries are thenables, although they also have an exec() 
function that returns a promise. Superagent is a popular HTTP client that also 
uses thenables. However, neither Mongoose queries nor Superagent requests are 
actually promises.

Other libraries use promises directly. For example, Axios requests are promises 
in the sense that they are instanceof Promise.

You can convert an arbitrary thenable to a promise using Promise.resolve(): */

// Converting a thenable to a promise
const p = Promise.resolve(thenable);
console.log(p instanceof Promise); // Logs: true

(async () => {
  const v = await p;
  console.log(v); // Logs: 42
})();
