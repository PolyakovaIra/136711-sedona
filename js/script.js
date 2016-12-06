var link = document.querySelector(".data-button");
var button = document.querySelector(".button");
var form = button.querySelector("input-data");
var data = button.querySelector("[id=form-data]");
var data2 = button.querySelector("[id=form-data2]");
var human = button.querySelector("[id=human]");
var children = button.querySelector("[id=children]");
var storage = localStorage.getItem("data");
var storage = localStorage.getItem("data2");
var storage = localStorage.getItem("human");

link.addEventListener("click",function(event) {
  event.preventDefault();
  button.classList.add("button-show");
  data.focus();

  if (storge){
    data.value = storage;
    data2.focus();
  } else {
    data.focus();
  }
});

window.addEventListener("keydown",function(event) {
  if (event.keyCode === 27) {
    if (button.classList.contains("button-show")) {
      button.classList.remove("button-show");
    }
  }
});
submit.addEventListener("submit", function(event) {
  if (!data.value || !data2.value) {
  event.preventDefault();
  button.classList.add("button-error");
  console.log("Введите даты заезда и выезда");
} else {
  localStorage.setItem("data", data.value);
  localStorage.setItem("data2", data2.value);
}
});
submit.addEventListener("submit", function(event) {
  if (!human.value) {
  event.preventDefault();
  console.log("Введите количество людей");
}else {
  localStorage.setItem("human", human.value);
}
});
