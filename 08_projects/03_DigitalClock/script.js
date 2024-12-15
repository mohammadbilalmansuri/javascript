const date = document.getElementById("date");
const time = document.getElementById("time");

// setInterval(function, timeIntervel)
// it is use to repedetely call any function (here for reffreshing time and date)
setInterval(function () {
  let myDate = new Date();
  // console.log(myDate.toLocaleDateString());
  // console.log(myDate.toLocaleTimeString());
  date.innerHTML = myDate.toLocaleDateString("en-IN");
  time.innerHTML = myDate.toLocaleTimeString("en-IN");
}, 1000);

// cronjob is use in server for reffreshing time
