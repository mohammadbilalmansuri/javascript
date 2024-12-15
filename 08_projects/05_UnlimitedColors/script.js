const body = document.querySelector("body");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
    // color = color + hex[Math.floor(Math.random() * 16)]
  }

  body.style.backgroundColor = color;
};

let changeColorInterval; // reffrence for setInterval

start.addEventListener("click", function (e) {
  // changeColorInterval = setInterval(randomColor, 1000)

  // it is not neccesary to use the if condition but this gives us flexibility, it is a good practice
  if (!changeColorInterval) {
    changeColorInterval = setInterval(randomColor, 1000);
  }
});

stop.addEventListener("click", function (e) {
  clearInterval(changeColorInterval);
  changeColorInterval = null; // to flush the interval
});

/*
const body = document.querySelector('body')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

//  This function generates random colors
const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
        // color = color + hex[Math.floor(Math.random() * 16)]
    }
    
    body.style.backgroundColor = color
}

start.addEventListener('click', function (e) {
   let changeColorInterval = setInterval(randomColor, 1000)

    stop.addEventListener('click', function (e) {
        clearInterval(changeColorInterval);
        changeColorInterval = null // to flush the interval
    })
})
*/
