// Day 11: Promises and Async/Await

// ---------- Activity 1: Understanding Promises ----------

// Create a promise that resolves with a message after a 2-second timeout and log the message to the console
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds");
  }, 2000);
});

promise1.then((message) => {
  console.log(message);
});

// Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch()
const promise2 = new Promise((_, reject) => {
  setTimeout(() => {
    reject("Promise rejected after 2 seconds");
  }, 2000);
});

promise2.catch((error) => {
  console.error(error);
});

// ---------- Activity 2: Chaining Promises ----------

// Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order
const fetchData = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

fetchData("Fetching data from server...")
  .then((message) => {
    console.log(message);
    return fetchData("Processing data...");
  })
  .then((message) => {
    console.log(message);
    return fetchData("Data processed successfully");
  })
  .then((message) => {
    console.log(message);
  });

// ---------- Activity 3: Using Async/Await ----------

// Write an async function that waits for a promise to resolve and then logs the resolved value
const asyncFunction = async () => {
  const message = await fetchData("Async/Await: Fetching data...");
  console.log(message);
};

asyncFunction();

// Write an async function that handles a rejected promise using try-catch and logs the error message
const asyncFunctionWithErrorHandling = async () => {
  try {
    const message = await promise2;
    console.log(message);
  } catch (error) {
    console.error("Async/Await Error:", error);
  }
};

asyncFunctionWithErrorHandling();

// ---------- Activity 4: Fetching Data from an API ----------

// Use the fetch API to get data from a public API and log the response data to the console using promises
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((data) => console.log("Fetch API with Promises:", data))
  .catch((error) => console.error("Fetch API Error:", error));

// Use the fetch API to get data from a public API and log the response data to the console using async/await
const fetchDataWithAsyncAwait = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const data = await response.json();
    console.log("Fetch API with Async/Await:", data);
  } catch (error) {
    console.error("Fetch API Error:", error);
  }
};

fetchDataWithAsyncAwait();

// ---------- Activity 5: Concurrent Promises ----------

// Use Promise.all to wait for multiple promises to resolve and then log all their values
const promise3 = fetchData("Promise 3 resolved");
const promise4 = fetchData("Promise 4 resolved");

Promise.all([promise3, promise4]).then((values) => {
  console.log("Promise.all values:", values);
});

// Use Promise.race to log the value of the first promise that resolves among multiple promises
const promise5 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 5 resolved first"), 500)
);
const promise6 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 6 resolved second"), 1000)
);

Promise.race([promise5, promise6]).then((value) => {
  console.log("Promise.race value:", value);
});
