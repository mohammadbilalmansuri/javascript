// Day 13: Modules

// ---------- Activity 1: Creating and Exporting Modules ----------

// Task 1: Import and use the add function from export.js
import { add } from "./export.js";
console.log(add(2, 3));

// Task 2: Import and use the person object from export.js
import { person } from "./export.js";
console.log(person.greet());

// ---------- Activity 2: Named and Default Exports ----------

// Task 3: Import and use the multiply and divide functions from export.js
import { multiply, divide } from "./export.js";
console.log(multiply(4, 5));
console.log(divide(10, 2));

// Task 4: Import and use the subtract function from export.js as default export
import subtract from "./export.js";
console.log(subtract(10, 5));

// ---------- Activity 3: Importing Entire Constants ----------

// Import the entire constants module as an object
import * as constants from "./constants.js";

// ---------- Activity 4: Using Third-Party Modules ----------

// Task 6: Install lodash using npm and import it
import _ from "lodash";
console.log(_.capitalize("hello world"));

// Task 7: Install axios using npm and import it
import axios from "axios";
axios
  .get("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
