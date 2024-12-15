const form = document.querySelector("form");

//this usecase will give you empty value
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // here parsFloat because the value come in the string form and to convert that is float value
  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const heightValidation = document.querySelector(".height-validation");
  const weightValidation = document.querySelector(".weight-validation");
  const result = document.querySelector("#result");

  if (height === "" || height === 0 || isNaN(height)) {
    heightValidation.innerHTML = `Please enter valid height ${height}`;
  } else if (weight === "" || weight === 0 || isNaN(weight)) {
    weightValidation.innerHTML = `Please enter valid weight ${weight}`;
  } else {
    console.log(weight);
    console.log(height);
    const bmi = (weight / (height * height)).toFixed(2);
    if (bmi < 18.5) {
      result.innerHTML = `Your BMI is ${bmi}, you are in under weight range.`;
    } else if (18.5 <= bmi && bmi <= 25.0) {
      result.innerHTML = `Your BMI is ${bmi}, your are in healthy weight range.`;
    } else if (25.0 < bmi && bmi < 30.0) {
      result.innerHTML = `Your BMI is ${bmi}, your are in over weight range.`;
    } else {
      result.innerHTML = `Your BMI is ${bmi}, your are in obesity weight range.`;
    }
  }
});
