// Get the popup and close button elements
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-btn");

// Function to close the popup
function closePopup() {
  popup.style.display = "none";
}

// Add a click event listener to the close button
closeBtn.addEventListener("click", closePopup);

// Show the popup when the page loads
window.addEventListener("load", () => {
  popup.style.display = "block";
});
