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

const kilediv = document.getElementById("kilediv");

fetch("http://localhost:3000/properties")
  .then(response => response.json())
  .then(data => {
    // Filter houses in Kileleshwa
    const kileleshwaHouses = data.filter(house => house.location === "Kileleshwa");

    // Clear previous content
    kilediv.innerHTML = "";

    // Iterate through the houses and display their details in styled boxes
    kileleshwaHouses.forEach(house => {
      // Create a box element for each house
      const houseBox = document.createElement("div");
      houseBox.classList.add("house-box");

      // Create an image element for the house
      const imageElement = document.createElement("img");
      imageElement.src = house.image;
      imageElement.alt = house.name;
      imageElement.classList.add("house-image");

      // Create individual elements for other house details
      const nameElement = document.createElement("p");
      nameElement.textContent = `Name: ${house.name}`;

      const bedroomsElement = document.createElement("p");
      bedroomsElement.textContent = `Bedrooms: ${house.bedrooms}`;

      const bathroomsElement = document.createElement("p");
      bathroomsElement.textContent = `Bathrooms: ${house.bathrooms}`;

      const priceElement = document.createElement("p");
      priceElement.textContent = `Price: ${house.price}`;

      // Append the elements to the house box
      houseBox.appendChild(imageElement);
      houseBox.appendChild(nameElement);
      houseBox.appendChild(bedroomsElement);
      houseBox.appendChild(bathroomsElement);
      houseBox.appendChild(priceElement);

      // Append the house box to the kileDiv
      kilediv.appendChild(houseBox);
    });
  })
  .catch(error => {
    console.log("Error fetching houses:", error);
  });
