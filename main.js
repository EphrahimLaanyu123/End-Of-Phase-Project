// var homeLocations = document.getElementById("HomeLocations");

// homeLocations.addEventListener("click", function() {
//     // Scroll to the div with class "locations"
//     document.querySelector(".locations").scrollIntoView({ behavior: 'smooth' });

//     // Add a CSS class to style the clicked element
//     homeLocations.classList.add("clicked");

//     // Remove the CSS class after a certain time delay (e.g., 2 seconds)
//     setTimeout(function() {
//         homeLocations.classList.remove("clicked");
//     }, 200);
// });

// document.getElementById("kileleshwa").addEventListener("click", function() {
//     // Navigate to the new page when "Kileleshwa" is clicked
//     window.location.href = "kileleshwa.html";
// });
// document.getElementById("karen").addEventListener("click", function() {
//     // Navigate to the new page when "Kileleshwa" is clicked
//     window.location.href = "karen.html";
// });
// document.getElementById("lavington").addEventListener("click", function() {
//     // Navigate to the new page when "Kileleshwa" is clicked
//     window.location.href = "lavington.html";
// });
// document.getElementById("westlands").addEventListener("click", function() {
//     // Navigate to the new page when "Kileleshwa" is clicked
//     window.location.href = "westlands.html";
// });

// fetch('http://localhost:3000/properties')
//   .then(response => response.json())
//   .then(data => {
//     // Filter the data to get the houses in Kileleshwa
//     const kileleshwaHouses = data.filter(house => house.location === "Kileleshwa");

//     // Check if there are houses in Kileleshwa
//     if (kileleshwaHouses.length > 0) {
//       // Take the details of the first house in Kileleshwa
//       const house = kileleshwaHouses[0];

//       // Get the HTML elements to display the house details
//       const houseNameElement = document.getElementById("houseName");
//       const bedroomsElement = document.getElementById("bedrooms");
//       const bathroomsElement = document.getElementById("bathrooms");
//       const priceElement = document.getElementById("price");

//       // Set the house details in the HTML elements
//       houseNameElement.textContent = house.name;
//       bedroomsElement.textContent = house.bedrooms;
//       bathroomsElement.textContent = house.bathrooms;
//       priceElement.textContent = house.price;
//     }
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });
// fetch('http://localhost:3000/properties')
//   .then(response => response.json())
//   .then(data => {
//     const kileleshwaHouses = data.filter(house => house.location === "Kileleshwa");

//     if (kileleshwaHouses.length > 0) {
//       const house = kileleshwaHouses[0];

//       const houseDetailsContainer = document.getElementById("houseDetails");

//       // Create HTML elements to display the house details
//       const houseNameElement = document.createElement("h2");
//       houseNameElement.textContent = house.name;
//       houseDetailsContainer.appendChild(houseNameElement);

//       const bedroomsElement = document.createElement("p");
//       bedroomsElement.textContent = "Bedrooms: " + house.bedrooms;
//       houseDetailsContainer.appendChild(bedroomsElement);

//       const bathroomsElement = document.createElement("p");
//       bathroomsElement.textContent = "Bathrooms: " + house.bathrooms;
//       houseDetailsContainer.appendChild(bathroomsElement);

//       const priceElement = document.createElement("p");
//       priceElement.textContent = "Price: " + house.price;
//       houseDetailsContainer.appendChild(priceElement);
//     }
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });
const houses = [
    {
        "id": 1,
        "name": "Cozy Cottage",
        "type": "House",
        "location": "Kileleshwa",
        "bedrooms": 2,
        "bathrooms": 1,
        "price": 1200,
        "available": true,
        "image": "cozy_cottage.jpg"
    },
    // Add other house objects here
];

const houseList = document.getElementById("house-list");

houses.forEach(house => {
    const houseElement = document.createElement("div");
    houseElement.classList.add("house");

    const imageElement = document.createElement("img");
    imageElement.src = house.image;
    imageElement.alt = house.name;
    houseElement.appendChild(imageElement);

    const detailsElement = document.createElement("div");
    detailsElement.classList.add("house-details");

    const titleElement = document.createElement("h2");
    titleElement.classList.add("house-title");
    titleElement.textContent = house.name;
    detailsElement.appendChild(titleElement);

    const locationElement = document.createElement("p");
    locationElement.classList.add("house-location");
    locationElement.textContent = `Location: ${house.location}`;
    detailsElement.appendChild(locationElement);

    const priceElement = document.createElement("p");
    priceElement.classList.add("house-price");
    priceElement.textContent = `Price: $${house.price}`;
    detailsElement.appendChild(priceElement);

    const availabilityElement = document.createElement("p");
    availabilityElement.classList.add("house-availability");
    availabilityElement.textContent = house.available ? "Available" : "Not Available";
    detailsElement.appendChild(availabilityElement);

    const bookTourElement = document.createElement("p");
    bookTourElement.classList.add("book-tour");
    bookTourElement.innerHTML = `<a href="book-tour.html?houseId=${house.id}">Book Tour</a>`;
    detailsElement.appendChild(bookTourElement);

    houseElement.appendChild(detailsElement);

    houseList.appendChild(houseElement);
});

