const key = document.querySelector("#key");
const keyCode = document.querySelector("#keyCode");
const code = document.querySelector("#code");
const cursor = document.querySelector("#cursor");
const body = document.querySelector("body");

window.addEventListener("keydown", (e) => {
  key.innerHTML = `You Pressed : ${e.key === " " ? "space" : e.key}`; // ternary operator for space
  keyCode.innerHTML = `Key Code is : ${e.keyCode}`;
  code.innerHTML = `Code : ${e.code}`;
});

body.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.x}px`;
  cursor.style.top = `${e.y}px`;
});
