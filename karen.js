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

//////////////////////////////////////////////////////////////////KILELESHWA////////////////////////////////////////////////////////////////////////////////////
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
  ////////////////////////////////////////////////////////////////////DONE//////////////////////////////////////////////////////////////////////////////////////


// Get the Kileleshwa link element
const kileleshwaLink = document.getElementById("kileleshwa");

// Add a click event listener to the Kileleshwa link
kileleshwaLink.addEventListener("click", () => {
  // Hide other divs
  document.getElementById("karenDiv").style.display = "none";
  document.getElementById("westieDiv").style.display = "none";
  document.getElementById("laviDiv").style.display = "none";

  // Display the Kileleshwa div
  document.getElementById("kilediv").style.display = "block";

  // Fetch and display houses in Kileleshwa
  fetchAndDisplayHousesInKileleshwa();
});

// Similarly, add click event listeners for other locations
const karenLink = document.getElementById("karen");
karenLink.addEventListener("click", () => {
  document.getElementById("kilediv").style.display = "none";
  document.getElementById("westieDiv").style.display = "none";
  document.getElementById("laviDiv").style.display = "none";
  document.getElementById("karenDiv").style.display = "block";
  fetchAndDisplayHousesInKaren();
});

const westlandsLink = document.getElementById("westlands");
westlandsLink.addEventListener("click", () => {
  document.getElementById("kilediv").style.display = "none";
  document.getElementById("karenDiv").style.display = "none";
  document.getElementById("laviDiv").style.display = "none";
  document.getElementById("westieDiv").style.display = "block";
  fetchAndDisplayHousesInWestlands();
});

const lavingtonLink = document.getElementById("lavington");
lavingtonLink.addEventListener("click", () => {
  document.getElementById("kilediv").style.display = "none";
  document.getElementById("karenDiv").style.display = "none";
  document.getElementById("westieDiv").style.display = "none";
  document.getElementById("laviDiv").style.display = "block";
  fetchAndDisplayHousesInLavington();
});

// Hide the div elements initially
document.getElementById("kilediv").style.display = "none";
document.getElementById("karenDiv").style.display = "none";
document.getElementById("westieDiv").style.display = "none";
document.getElementById("laviDiv").style.display = "none";

// Function to fetch and display all houses
function fetchAndDisplayHouses() {
    fetch("http://localhost:3000/properties")
      .then(response => response.json())
      .then(data => {
        const kilediv = document.getElementById("kilediv");
        const karendiv = document.getElementById("karenDiv");
        const westieDiv = document.getElementById("westieDiv");
        const laviDiv = document.getElementById("laviDiv");
  
        // Clear previous content
        kilediv.innerHTML = "";
        karendiv.innerHTML = "";
        westieDiv.innerHTML = "";
        laviDiv.innerHTML = "";
  
        // Iterate through the houses and display their details in styled boxes
        data.forEach(house => {
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
  
          // Append the house box to the respective location div based on house location
          if (house.location === "Kileleshwa") {
            kilediv.appendChild(houseBox);
          } else if (house.location === "Karen") {
            karendiv.appendChild(houseBox);
          } else if (house.location === "Westlands") {
            westieDiv.appendChild(houseBox);
          } else if (house.location === "Lavington") {
            laviDiv.appendChild(houseBox);
          }
        });
      })
      .catch(error => {
        console.log("Error fetching houses:", error);
      });
  }
  
  // Function to handle the form submission
  function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Get the form input values
    const name = document.getElementById("nameInput").value;
    const location = document.getElementById("locationInput").value;
    const bedrooms = document.getElementById("bedroomsInput").value;
    const bathrooms = document.getElementById("bathroomsInput").value;
    const price = document.getElementById("priceInput").value;
    const image = document.getElementById("imageInput").value;
  
    // Validate the house location
    const allowedLocations = ["Westlands", "Lavington", "Karen", "Kileleshwa"];
    if (!allowedLocations.includes(location)) {
      alert("Invalid house location. Please choose from Westlands, Lavington, Karen, or Kileleshwa.");
      return;
    }
  
    // Create a house object with the input values
    const house = {
      name: name,
      location: location,
      bedrooms: bedrooms,
      bathrooms: bathrooms,
      price: price,
      image: image
    };
  
    // Send the POST request to the server
    fetch("http://localhost:3000/properties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(house)
    })
      .then(response => response.json())
      .then(data => {
        console.log("House details posted successfully:", data);
        // Fetch and display all houses, including the newly added one
        fetchAndDisplayHouses();
      })
      .catch(error => {
        console.log("Error posting house details:", error);
        // Optionally, you can display an error message or perform any other error handling
      });
  }
  
  // Add a submit event listener to the form
  const form = document.getElementById("houseForm");
  form.addEventListener("submit", handleFormSubmit);
  
  // Fetch and display all houses on page load
  fetchAndDisplayHouses();
  