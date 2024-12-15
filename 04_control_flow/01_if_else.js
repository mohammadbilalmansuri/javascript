// Conditional statement to check if the temperature is 25
const temperature = 25;
if (temperature === 25) {
  console.log("Temperature is 25");
} else if (temperature < 25) {
  console.log("Temperature is less than 25");
} else {
  console.log("Temperature is greater than 25");
}

//---------------------------------------------------

// Conditional statement to check user's power based on their score
const score = 200;
if (score > 100) {
  let power = "fly";
  console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`); //error

//---------------------------------------------------

// Nested conditional statement to check the balance amount
const balance = 500;

// if (balance > 500) console.log("test"),console.log("test2"); // short hand notation, not recomended

if (balance <= 500) {
  if (balance === 500) {
    console.log("Balance is exactly 500");
  } else {
    console.log("Balance is less than 500");
  }
} else if (balance < 1000) {
  console.log("Balance is less than 1000");
} else {
  console.log("Balance is greater than 1000");
}

//---------------------------------------------------

// Conditional statements to check user's login status and authentication method
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("Allow user to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User is logged in");
}
