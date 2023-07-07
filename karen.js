// const kileleshwaBtn = document.getElementById("kileleshwa");
// const kileDiv = document.getElementById("kilediv");

// kileDiv.style.display = "none"; // Hide the kilediv initially

// kileleshwaBtn.addEventListener("click", () => {
//   if (kileDiv.style.display === "none") {
//     kileDiv.style.display = "block"; // Show the kilediv when clicked
//   } else {
//     kileDiv.style.display = "none"; // Hide the kilediv if already shown
//   }
// });


// const karenBtn = document.getElementById("kileleshwa");
// const karenDiv = document.getElementById("karendiv");

// karenDiv.style.display = "none"; // Hide the kilediv initially

// karenBtn.addEventListener("click", () => {
//   if (karenDiv.style.display === "none") {
//     karenDiv.style.display = "block"; // Show the kilediv when clicked
//   } else {
//     karenDiv.style.display = "none"; // Hide the kilediv if already shown
//   }
// });


// const laviBtn = document.getElementById("lavington");
// const laviDiv = document.getElementById("lavidiv");

// laviDiv.style.display = "none"; // Hide the lavidiv initially

// laviBtn.addEventListener("click", () => {
//   if (laviDiv.style.display === "none") {
//     laviDiv.style.display = "block"; // Show the lavidiv when clicked
//   } else {
//     laviDiv.style.display = "none"; // Hide the lavidiv if already shown
//   }
// });

// const westieBtn = document.getElementById("westlands");
// const westieDiv = document.getElementById("westiediv");

// westieDiv.style.display = "none"; // Hide the lavidiv initially

// westieBtn.addEventListener("click", () => {
//   if (westieDiv.style.display === "none") {
//     westieDiv.style.display = "block"; // Show the lavidiv when clicked
//   } else {
//     westieDiv.style.display = "none"; // Hide the lavidiv if already shown
//   }
// });
const kileleshwaBtn = document.getElementById("kileleshwa");
const kileDiv = document.getElementById("kilediv");

const karenBtn = document.getElementById("karen");
const karenDiv = document.getElementById("karenDiv");

const laviBtn = document.getElementById("lavington");
const laviDiv = document.getElementById("laviDiv");

const westieBtn = document.getElementById("westlands");
const westieDiv = document.getElementById("westieDiv");

kileleshwaBtn.addEventListener("click", () => {
  kileDiv.style.display = "block";
  karenDiv.style.display = "none";
  laviDiv.style.display = "none";
  westieDiv.style.display = "none";
});

karenBtn.addEventListener("click", () => {
  kileDiv.style.display = "none";
  karenDiv.style.display = "block";
  laviDiv.style.display = "none";
  westieDiv.style.display = "none";
});

laviBtn.addEventListener("click", () => {
  kileDiv.style.display = "none";
  karenDiv.style.display = "none";
  laviDiv.style.display = "block";
  westieDiv.style.display = "none";
});

westieBtn.addEventListener("click", () => {
  kileDiv.style.display = "none";
  karenDiv.style.display = "none";
  laviDiv.style.display = "none";
  westieDiv.style.display = "block";
});


const kileleshwaBtnn = document.getElementById("kileleshwa");
const kilediv = document.getElementById("kileDiv");

kileleshwaBtnn.addEventListener("click", () => {
  // Fetch houses in Kileleshwa
  fetchHousesInKileleshwa()
    .then(houses => {
      // Clear previous content
      kilediv.innerHTML = "";

      // Create and append house details to kileDiv
      houses.forEach(house => {
        const houseDetails = document.createElement("p");
        houseDetails.textContent = `${house.name}, ${house.bedrooms} bedrooms, ${house.bathrooms} bathrooms, $${house.price}`;
        kilediv.appendChild(houseDetails);
      });
    })
    .catch(error => {
      console.log("Error fetching houses:", error);
    });
});

function fetchHousesInKileleshwa() {
  return fetch("http://localhost:3000/properties")
    .then(response => response.json())
    .then(data => {
      // Filter houses in Kileleshwa
      const kileleshwaHouses = data.properties.filter(house => house.location === "Kileleshwa");
      return kileleshwaHouses;
    });
}
