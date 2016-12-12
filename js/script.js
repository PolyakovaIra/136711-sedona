var link = document.querySelector(".link-selection-date");
var selectionForm = document.querySelector(".selection-form");
var form = selectionForm.querySelector(".search-form");
var arrivalDate = selectionForm.querySelector("[id=arrival-date]");
var departureDate = selectionForm.querySelector("[id=departure-date]");
var adultNumber = selectionForm.querySelector("[id=adult-number]");
var childrenNumber = selectionForm.querySelector("[id=children-number]");
var storage = localStorage.getItem("arrival-date");


link.addEventListener("click",function(event) {
  event.preventDefault();
  selectionForm.classList.add("selection-form-show");
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
    if (selectionForm.classList.contains("selection-form-show")) {
      selectionForm.classList.remove("selection-form-show");
    }
  }
});
form.addEventListener("submit", function(event) {
  if (!arrivalDate.value || !departureDate.value || !adultNumber.value || !childrenNumber.value) {
  event.preventDefault();
  selectionForm.classList.add("selection-form-error");
  console.log("Введите даты заезда и выезда");
} else {
  localStorage.setItem("arrivalDate", arrivalDate.value);
  localStorage.setItem("departureDate", departureDate.value);
  localStorage.setItem("adultNumber", adultNumber.value);
  localStorage.setItem("childrenNumber", childrenNumber.value);
}
});

function initMap() {
 var sedona = {lat: 34.869867, lng: -111.760978};
 var map = new google.maps.Map(document.getElementById('map-canvas'), {
   center: sedona,
   scrollwheel: false,
   zoom: 9,
   disableDefaultUI: true
 });
 var marker = new google.maps.Marker({
   position: sedona,
   map: map
 });
}
