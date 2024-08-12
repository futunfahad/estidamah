// script.js

// Get the popup div and the button that opens it
var popup = document.getElementById("popup");
var popupBtn = document.getElementById("popupBtn");
var closeBtn = document.getElementById("closeBtn");


// Function to open the popup
function openPopup() {
  popup.style.display = "block";
}

// Function to close the popup
function closePopup() {
  popup.style.display = "none";
}

// Event listeners for the button and close button
/*window.onload = function() {
    openPopup();
  };*/

popupBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);
