let randomNumber = generateRandomNumber();
console.log(randomNumber);

let userInput = document.querySelector("#number");
const validation = document.querySelector(".validation");
const submit = document.querySelector("#submit");
const result = document.querySelector("#result");
const previousGuesses = document.querySelector("#previous-guesses");
const guessesRemaining = document.querySelector("#guesses-remaining");
const startNewGame = document.querySelector(".new-btn");

let previousGuessesArray = [];
let guessTurn = 1;

let playGame = true;
if (playGame) {
  submit.addEventListener("click", function (event) {
    event.preventDefault();
    const guess = parseInt(userInput.value);
    checkValidation(guess);
  });
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function checkValidation(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    validation.innerHTML = "Please enter a valid number between 1 and 100";
  } else {
    validation.innerHTML = "";
    previousGuessesArray.push(guess);
    if (guessTurn > 10) {
      resetInput(guess);
      if (guess === randomNumber) {
        result.innerHTML = `Congratulations! Your guess ${guess} is correct`;
        result.style.color = "green";
      } else {
        result.innerHTML = `Game Over. Random number was ${randomNumber}`;
      }
      endGame();
    } else {
      resetInput(guess);
      checkGuess(guess);
    }
  }
}

function resetInput(guess) {
  userInput.value = "";
  validation.innerHTML = "";
  previousGuesses.innerHTML = previousGuessesArray.join(" , ");
  // previousGuesses.innerHTML += `${guess} , `
  guessTurn++;
  // guessesRemaining.innerHTML = 11 - guessTurn
  guessesRemaining.innerHTML = 10 - guessTurn + 1;
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    result.innerHTML = `Congratulations! Your Guess ${guess} is correct`;
    result.style.color = "green";
    endGame();
  } else if (guess < randomNumber) {
    result.innerHTML = `Your number is smaller than random number`;
  } else if (guess > randomNumber) {
    result.innerHTML = `Your number is bigger than random number`;
  }
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  submit.style.cursor = "default";
  submit.setAttribute("disabled", "");
  playGame = false;
}

function newGame() {
  startNewGame.addEventListener("click", function (event) {
    randomNumber = generateRandomNumber();
    console.log(randomNumber);
    userInput.value = "";
    userInput.removeAttribute("disabled");
    submit.style.cursor = "pointer";
    submit.removeAttribute("disabled");
    previousGuessesArray = [];
    guessTurn = 1;
    previousGuesses.innerHTML = "";
    guessesRemaining.innerHTML = "10";
    result.innerHTML = "";
    result.removeAttribute("style");
    playGame = true;
  });
}
newGame();

// we can put all these code in one function and then call that function that make the code perfect for production level because use global variable make some impact in the page when mutiple developer is working in same file.
