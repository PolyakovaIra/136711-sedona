var link-button = document.querySelector(".data-button");
var button = document.querySelector(".button");
var close = document.querySelector(".container");
var storage = localStorage.getItem ("amount")

link-button.addEventListener("click",function(event) {
  event.preventDefault();
  button.classList.add("button-show");
});
close.addEventListener("click", function(event) {
  event.preventDefault();
  button.classList.remove("button-show");
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (button.classList.contains("button-show")) {
      button.classList.remove("button-show");
    }
  }
};
