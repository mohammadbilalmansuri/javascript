// Switch statement to determine the month based on the provided input
const month = "march";

switch (month) {
  case "jan":
    console.log("January");
    break;
  case "feb":
    console.log("February");
    break;
  case "march":
    console.log("March");
    break;
  case "april":
    console.log("April");
    break;
  default:
    console.log("Default case matched");
    break;
}

// If break statements are omitted, all cases after the matching one will be executed until a break is encountered

// means if we do not use break in upper case so it will execute all case exept default(means default will not be executed)
