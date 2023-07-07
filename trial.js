const kileDivi = document.getElementById("kilediv");
const karenDivi = document.getElementById("karenDiv");
const westieDivi = document.getElementById("westieDiv");
const laviDivi = document.getElementById("laviDiv");

const kileButton = document.getElementById("kileleshwa");
const karenButton = document.getElementById("karen");
const westlandsButton = document.getElementById("westlands");
const lavingtonButton = document.getElementById("lavington");

kileButton.addEventListener("click", () => {
  kileDivi.style.display = "block";
  karenDivi.style.display = "none";
  westieDivi.style.display = "none";
  laviDivi.style.display = "none";
});

karenButton.addEventListener("click", () => {
  kileDivi.style.display = "none";
  karenDivi.style.display = "block";
  westieDivi.style.display = "none";
  laviDivi.style.display = "none";
});

westlandsButton.addEventListener("click", () => {
  kileDivi.style.display = "none";
  karenDivi.style.display = "none";
  westieDivi.style.display = "block";
  laviDivi.style.display = "none";
});

lavingtonButton.addEventListener("click", () => {
  kileDivi.style.display = "none";
  karenDivi.style.display = "none";
  westieDivi.style.display = "none";
  laviDivi.style.display = "block";
});

  

  