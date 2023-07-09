function toggleHouseForm() {
    const sellButton = document.getElementById("sellButton");
    const houseFormDiv = document.getElementById("houseFormDiv");
  
    sellButton.addEventListener("click", function() {
      // Toggle the visibility of the houseFormDiv
      houseFormDiv.style.display = houseFormDiv.style.display === "none" ? "block" : "none";
    });
  }
  
toggleHouseForm();
