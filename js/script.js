var link = document.querySelector(".linkSelectionDate");
var selectionForm = document.querySelector(".selectionForm");
var form =  selectionForm.querySelector(".searchForm");
var arrivalDate =  selectionForm.querySelector("[id=arrivalDate]");
var departureDate =  selectionForm.querySelector("[id=departureDate]");
var adultNumber =  selectionForm.querySelector("[id=adultNumber]");
var childrenNumber =  selectionForm.querySelector("[id=childrenNumber]");
var storage = localStorage.getItem("arrivalDate");


link.addEventListener("click",function(event) {
  event.preventDefault();
  selectionForm.classList.add("selectionFormShow");
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
    if (selectionForm.classList.contains("selectionFormShow")) {
      selectionForm.classList.remove("selectionFormShow");
    }
  }
});
form.addEventListener("submit", function(event) {
  if (!arrivalDate.value || !departureDate.value || !adultNumber.value || !childrenNumber.value) {
  event.preventDefault();
  selectionForm.classList.add("selectionFormError");
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
