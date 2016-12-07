var link = document.querySelector(".data-button");
var button = document.querySelector(".button");
var form = button.querySelector(".search");
var arrivalDate = button.querySelector("[id=arrivalDate]");
var departureDate = button.querySelector("[id=departureDate]");
var adultNumber = button.querySelector("[id=adultNumber]");
var childrenNumber = button.querySelector("[id=childrenNumber]");
var storage = localStorage.getItem("arrivalDate");


link.addEventListener("click",function(event) {
  event.preventDefault();
  button.classList.add("button-show");
  arrivalDate.focus();

  if (storage){
    arrivalDate.value = storage;
    departureDate.focus();
  } else {
    arrivalDate.focus();
  }
});

window.addEventListener("keydown",function(event) {
  if (event.keyCode === 27) {
    if (button.classList.contains("button-show")) {
      button.classList.remove("button-show");
    }
  }
});
form.addEventListener("submit", function(event) {
  if (!arrivalDate.value || !departureDate.value || !adultNumber.value || !childrenNumber.value) {
  event.preventDefault();
  button.classList.add("button-error");
  console.log("Введите даты заезда и выезда");
} else {
  localStorage.setItem("arrivalDate", arrivalDate.value);
  localStorage.setItem("departureDate", departureDate.value);
  localStorage.setItem("adultNumber", adultNumber.value);
  localStorage.setItem("childrenNumber", childrenNumber.value);
}
});

function initialize () {
  var mapOptions = {
    center: new
    gooogle.maps.LatLng(34.8694705,-111.763207)
  }
  var map = new
  google.maps.Map(document.getElementById("map-canvas"),
  mapOptions);
}
