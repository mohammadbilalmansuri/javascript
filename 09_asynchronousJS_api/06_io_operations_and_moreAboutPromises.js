// these are I/O bound tasks // normal code of js is CPU bound tasks

const fs = require("fs"); // Node File System Module.

const file1data = fs.readFileSync("06_1.txt", "utf-8");
console.log("File 1 Data: ", file1data);

const file2data = fs.readFileSync("06_2.txt", "utf-8");
console.log("File 2 Data: ", file2data);

// The avobe i/o operation is the syncronous way. but not the right way to do so.

// --------------------------------------------
// Let's see how the i/o operation can be asyncrounous. mostly we do and recommend this way to do i/o operation.

function print(error, content) {
  error ? console.log("File not found!", error) : console.log("Data", content);
}

fs.readFile("06_1.txt", "utf-8", print);
fs.readFile("06_2.txt", "utf-8", print);

// Syncronous setTimeout

function setTimeoutSync(cb, duration) {
  let startTime = new Date().getTime();
  while (1) {
    let currentTime = new Date().getTime();
    if (currentTime - startTime > duration) break;
  }
  cb();
}

setTimeoutSync(() => {
  console.log("Done");
}, 5000);

// this synchronous setTimeout code excute first than the read file because this is an cpu intensive task so the thread will be busy until this complete whether the read file happened fist than this it wait in the callback queue ad when the thread will be free it will execute.

// ---------- Assignments ------------

// Create the promisified version of setTimeout, readFile and fetch.

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function readFileAsync(path, encoding = "utf8") {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

delay(2000).then(() => {
  console.log("2 seconds delay completed");
});

fetchData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log("Fetched Data:", data))
  .catch((err) => console.error("Error fetching data:", err));

readFileAsync("06_1.txt")
  .then((data) => console.log("File 06_1.txt Data:", data))
  .catch((err) => console.error("Error reading file 06_1.txt:", err));

// ================================================================

/* Q: Write a function that
1. Reads the contents of a file
2. Trims the extra space from the left and right
3. Writes it back to the file */

// --- 1. Callback approach

function cleanFile(filePath, callback) {
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return callback(err);
    }
    data = data.trim();
    fs.writeFile(filePath, data, function (err) {
      if (err) {
        return callback(err);
      }
      callback(null, "File has been cleaned!");
    });
  });
}

function onDone(err, message) {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log(message);
  }
}

cleanFile("06_3.txt", onDone); // Call the cleanFile function with the file path and callback

// --- 2. Promise/Async-Await Approach

const fsWithPromises = require("fs").promises;

async function cleanFileAsync(filePath) {
  try {
    let data = await fsWithPromises.readFile(filePath, "utf8");
    data = data.trim();
    await fsWithPromises.writeFile(filePath, data);
    console.log("File has been cleaned!");
  } catch (err) {
    console.log("Error:", err);
  }
}

(async () => {
  await cleanFileAsync("06_3.txt");
})();

// ==============================================================
// err first callback vs rejects in promises

// Callbacks
function afterDone(err, data) {
  if (err) {
    console.log("Error while reading file");
  } else {
    console.log(data);
  }
}

fs.readFile("06_3.txt", "utf-8", afterDone);

// Promises

function readFilePromisified(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, "utf-8", function (err, data) {
      if (err) {
        reject("Error while reading file");
      } else {
        resolve(data);
      }
    });
  });
}

function onComplete(data) {
  console.log(data);
}

function onError(err) {
  console.log("Error: " + err);
}

readFilePromisified("a.txt").then(onComplete).catch(onError);
