// Promise:
// - A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// - It has three states: pending, fulfilled, or rejected.
// - Useful for handling asynchronous tasks like database calls, cryptography, and network requests.

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

//---------------------------------------------------------------------------------------------------------

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  // then is connected with resolved means the function in then performed when the async task is succefully completed.
  console.log("Promise consumed");
});

//---------------------------------------------------------------------------------------------------------

// Chaining Promises: Defining a Promise without declaration using chaining.
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

//---------------------------------------------------------------------------------------------------------

// Resolving a Promise with data and accessing it in the 'then' method.
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "bilal", email: "bilal@mansuri.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

//---------------------------------------------------------------------------------------------------------

// Handling Promise rejection and chaining multiple 'then' and 'catch' methods.
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "bilal", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username; // it will not shown in the global scope it transfers to te next then or catch
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    // catch is conected with reject and the reject parameter can access by catch function parameter
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected")); // the promise either resolved or rejected it will definetly print.

// we can use multiple times then or catch with chaining but finally comes only once in the last

//---------------------------------------------------------------------------------------------------------

// Async/Await: Using async-await to handle Promises more elegantly.
// we can use async-await in place of then-catch.

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});
async function consumePromiseFive() {
  // async define an asynchronous task

  try {
    // async-await can not handle errors directly, we can also use async await without try-catch but if a condition can give an error so we need to use try-catch. it simply means when a promise resolved try will execute and if it rejected catch will be execute.

    const response = await promiseFive; // here await means waiting for asynchronous task
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive(); // caliing the promise

//---------------------------------------------------------------------------------------------------------

// Promise.all: Resolving multiple Promises concurrently.
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  // promise.all => it is used to call multiple promises and can perform same operation after reject and resolve all promises
  console.log(values); // Expected output: [3, 42, "foo"]
});

//---------------------------------------------------------------------------------------------------------

// Fetch API: Sending requests for data asynchronously.

// as we know this data should print after above data but it will be print first then the above data will print. because fetch operations are priority tasks.

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json(); // some time the responce comes in string or other data types thats why we add json() to convert that data in json. it takes some time to convert for that we use await in front of it.
    console.log(data);
  } catch (error) {
    console.log("Error: ", error);
  }
}
getAllUsers();

// Fetch with then-catch:
fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // this is also called theneble like chaining
    console.log(data);
  })
  .catch((error) => console.log(error));

// References:
// - Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// - Using Fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// --------- More about Async await syntax -----------

// The async and await syntax in JavaScript provides a way to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain.
// It builds on top of Promises and allows you to avoid chaining .then() and .catch() methods while still working with asynchronous operations.
// async/await is essentially syntactic sugar on top of Promises.

/* Write code that
logs hi after 1 second
logs hello 3 seconds after step 1
logs hello there 5 seconds after step 2 */

function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function solve() {
  await setTimeoutPromisified(1000);
  console.log("hi");
  await setTimeoutPromisified(3000);
  console.log("hello");
  await setTimeoutPromisified(5000);
  console.log("hi there");
}

solve();

/* Things to keep in mind
1. You can only call await inside a function if that function is async
2. You cant have a top level await  */

// -- See "06_io_operations_and_moreAboutPromises.js" file to understand -
// 1. I/O operations with promises, async-await and callbacks.
// 2. err first callback vs rejects in promises
