// Add event listener to the "Kileleshwa" item
document.getElementById("kileleshwa").addEventListener("click", function() {
    // Navigate to the new page when "Kileleshwa" is clicked
    window.location.href = "kileleshwa.html";
});


// // Add event listener to the "Locations" item
// document.getElementById("HomeLocations").addEventListener("click", function() {
//     // Scroll to the div with class "locations"
//     document.querySelector(".locations").scrollIntoView({ behavior: 'smooth' });
// });
// Add event listener to the "Locations" item
// Add event listener to the "Locations" item
var homeLocations = document.getElementById("HomeLocations");

homeLocations.addEventListener("click", function() {
    // Scroll to the div with class "locations"
    document.querySelector(".locations").scrollIntoView({ behavior: 'smooth' });

    // Add a CSS class to style the clicked element
    homeLocations.classList.add("clicked");

    // Remove the CSS class after a certain time delay (e.g., 2 seconds)
    setTimeout(function() {
        homeLocations.classList.remove("clicked");
    }, 200);
});

document.getElementById("kileleshwa").addEventListener("click", function() {
    // Navigate to the new page when "Kileleshwa" is clicked
    window.location.href = "kileleshwa.html";
});
document.getElementById("karen").addEventListener("click", function() {
    // Navigate to the new page when "Kileleshwa" is clicked
    window.location.href = "karen.html";
});
document.getElementById("lavington").addEventListener("click", function() {
    // Navigate to the new page when "Kileleshwa" is clicked
    window.location.href = "lavington.html";
});
document.getElementById("westlands").addEventListener("click", function() {
    // Navigate to the new page when "Kileleshwa" is clicked
    window.location.href = "westlands.html";
});

  

  