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
