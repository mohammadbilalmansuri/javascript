console.log("Getting data 1 ...");

// Function to get data asynchronously with a callback
function getData(dataId, getNextData) {
  // Simulating asynchronous behavior with setTimeout
  setTimeout(() => {
    console.log("data", dataId);
    // Checking if there's a callback for the next data
    if (getNextData) {
      // Calling the callback to get the next data
      getNextData();
    }
  }, 2000); // Simulating a delay of 2000 milliseconds
}

// Callback Hell: Nested calls to getData function
getData(1, () => {
  console.log("Getting data 2 ...");
  getData(2, () => {
    console.log("Getting data 3 ...");
    getData(3, () => {
      console.log("Getting data 4 ...");
      getData(4, () => {
        console.log("All data successfully loaded.");
      });
    });
  });
});

// ----------- Why we use Promises over callbacks ------------

/* Q: Write code that
1. logs "step 1 done" after 1 second
2. logs "step 2 done" 3 seconds after step 1
3. logs "step 3 done" 5 seconds after step 2 */

// --- Callback Hell

setTimeout(function () {
  console.log("hi");
  setTimeout(function () {
    console.log("hello");

    setTimeout(function () {
      console.log("hello there");
    }, 5000);
  }, 3000);
}, 1000);

// Alt solution (doesn't really have callback hell)
function step3Done() {
  console.log("step 3 done");
}

function step2Done() {
  console.log("step 2 done");
  setTimeout(step3Done, 5000);
}

function step1Done() {
  console.log("step 1 done");
  setTimeout(step2Done, 3000);
}

setTimeout(step1Done, 1000);

// --- Promisified version

function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

setTimeoutPromisified(1000).then(function () {
  console.log("setp 1 done");
  setTimeoutPromisified(3000).then(function () {
    console.log("step 2 done");
    setTimeoutPromisified(5000).then(function () {
      console.log("step 3 done");
    });
  });
});

// Alt solution

setTimeoutPromisified(1000)
  .then(function () {
    console.log("hi");
    return setTimeoutPromisified(3000);
  })
  .then(function () {
    console.log("hello");
    return setTimeoutPromisified(5000);
  })
  .then(function () {
    console.log("hello there");
  });
