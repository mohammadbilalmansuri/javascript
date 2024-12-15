const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  // console.log(button);
  button.addEventListener("click", function (e) {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id); // we can not target class

    // First Method
    body.setAttribute("class", `${e.target.id}`);

    // Second method
    /*
        if (e.target.id === 'light') {
            body.setAttribute('class', 'light')
        }
        if (e.target.id === 'dark') {
            body.setAttribute('class', 'dark')
        }
        if (e.target.id === 'c1') {
            body.setAttribute('class', 'c1')
        }
        if (e.target.id === 'c2') {
            body.setAttribute('class', 'c2')
        }
        if (e.target.id === 'c3') {
            body.setAttribute('class', 'c3')
        }
        if (e.target.id === 'c4') {
            body.setAttribute('class', 'c4')
        }
        if (e.target.id === 'bg1') {
            body.setAttribute('class', 'bg1')
        }bg1
        if (e.target.id === 'bg2') {
            body.setAttribute('class', 'bg2')
        }
        if (e.target.id === 'bg3') {
            body.setAttribute('class', 'bg3')
        }
        if (e.target.id === 'bg4') {
            body.setAttribute('class', 'bg4')
        }
        */
  });
});
