// const kileDivi = document.getElementById("kilediv");
// const karenDivi = document.getElementById("karenDiv");
// const westieDivi = document.getElementById("westieDiv");
// const laviDivi = document.getElementById("laviDiv");

// const kileButton = document.getElementById("kileleshwa");
// const karenButton = document.getElementById("karen");
// const westlandsButton = document.getElementById("westlands");
// const lavingtonButton = document.getElementById("lavington");

// kileButton.addEventListener("click", () => {
//   kileDivi.style.display = "block";
//   karenDivi.style.display = "none";
//   westieDivi.style.display = "none";
//   laviDivi.style.display = "none";
// });

// karenButton.addEventListener("click", () => {
//   kileDivi.style.display = "none";
//   karenDivi.style.display = "block";
//   westieDivi.style.display = "none";
//   laviDivi.style.display = "none";
// });

// westlandsButton.addEventListener("click", () => {
//   kileDivi.style.display = "none";
//   karenDivi.style.display = "none";
//   westieDivi.style.display = "block";
//   laviDivi.style.display = "none";
// });

// lavintonButton.addEventListener("click", () => {
//   kileDivi.style.display = "none";
//   karenDivi.style.display = "none";
//   westieDivi.style.display = "none";
//   laviDiv.style.display = "block";
// });

////////////////////////////////////////////////////////////////////KILELESHWA////////////////////////////////////////////////////////////////////////////////////
function fetchAndDisplayHousesInKileleshwa() {
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
  
          // Append the house box to the kilediv
          kilediv.appendChild(houseBox);
        });
      })
      .catch(error => {
        console.log("Error fetching houses:", error);
      });
  }
  

  fetchAndDisplayHousesInKileleshwa();
  ///////////////////////////////////////////////////////////////////////////KAREN///////////////////////////////////////////////////////////////////////////////////////
  function fetchAndDisplayHousesInKaren() {
    const karendiv = document.getElementById("karenDiv");
  
    fetch("http://localhost:3000/properties")
      .then(response => response.json())
      .then(data => {
        // Filter houses in Karen
        const karenHouses = data.filter(house => house.location === "Karen");
  
        // Clear previous content
        karendiv.innerHTML = "";
  
        // Iterate through the houses and display their details in styled boxes
        karenHouses.forEach(house => {
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
  
          // Append the house box to the karendiv
          karendiv.appendChild(houseBox);
        });
      })
      .catch(error => {
        console.log("Error fetching houses:", error);
      });
  }
  

  fetchAndDisplayHousesInKaren();
////////////////////////////////////////////////////////////////////////////WESTLANS////////////////////////////////////////////////////////////////////////////////////
  function fetchAndDisplayHousesInWestlands() {
    const westieDiv = document.getElementById("westieDiv");
  
    fetch("http://localhost:3000/properties")
      .then(response => response.json())
      .then(data => {
        // Filter houses in Westlands
        const westlandsHouses = data.filter(house => house.location === "Westlands");
  
        // Clear previous content
        westieDiv.innerHTML = "";
  
        // Iterate through the houses and display their details in styled boxes
        westlandsHouses.forEach(house => {
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
  
          // Append the house box to the westieDiv
          westieDiv.appendChild(houseBox);
        });
      })
      .catch(error => {
        console.log("Error fetching houses:", error);
      });
  }
  

  fetchAndDisplayHousesInWestlands();
///////////////////////////////////////////////////////////////////////LAVINGTON////////////////////////////////////////////////////////////////////////////
  function fetchAndDisplayHousesInLavington() {
    const laviDiv = document.getElementById("laviDiv");
  
    fetch("http://localhost:3000/properties")
      .then(response => response.json())
      .then(data => {
        // Filter houses in Lavington
        const lavingtonHouses = data.filter(house => house.location === "Lavington");
  
        // Clear previous content
        laviDiv.innerHTML = "";
  
        // Iterate through the houses and display their details in styled boxes
        lavingtonHouses.forEach(house => {
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
  
          // Append the house box to the laviDiv
          laviDiv.appendChild(houseBox);
        });
      })
      .catch(error => {
        console.log("Error fetching houses:", error);
      });
  }
  

  fetchAndDisplayHousesInLavington();
  //////////////////////////////////////////////////////////////////////DONE//////////////////////////////////////////////////////////////////////////////////////
//   function addEventListeners() {
//     const kileleshwa = document.getElementById("kileleshwa");
//     const karen = document.getElementById("karen");
//     const lavington = document.getElementById("lavington");
//     const westlands = document.getElementById("westlands");

  
//     kileleshwa.addEventListener("click", () => {
//       fetchAndDisplayHousesInKileleshwa();
//     });
  
//     karen.addEventListener("click", () => {
//       fetchAndDisplayHousesInKaren();
//     });
  
//     lavington.addEventListener("click", () => {
//       fetchAndDisplayHousesInLavington();
//     });
  
//     westlands.addEventListener("click", () => {
//       fetchAndDisplayHousesInWestlands();
//     });
//   }
  
//   addEventListeners();

function addHoverEffectAndUnderlineStyling(button) {
    button.addEventListener("mouseover", () => {
      button.style.transform = "scale(1.1)";
      button.style.borderBottom = "2px solid blue";
    });
  
    button.addEventListener("mouseout", () => {
      button.style.transform = "scale(1)";
      button.style.borderBottom = "none";
    });
  }
  
  const homeButton = document.getElementById("TheHomeBar");
  const locationsButton = document.getElementById("HomeLocations");
  const servicesButton = document.getElementById("services");
  const aboutButton = document.getElementById("about");
  const contactsButton = document.getElementById("contacts");
  
  addHoverEffectAndUnderlineStyling(homeButton);
  addHoverEffectAndUnderlineStyling(locationsButton);
  addHoverEffectAndUnderlineStyling(servicesButton);
  addHoverEffectAndUnderlineStyling(aboutButton);
  addHoverEffectAndUnderlineStyling(contactsButton);
  
  