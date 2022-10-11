// Homepage Variables
const modal = document.getElementById("instructionsModal");
const instructionsBtn = document.getElementById("instructionsBtn");
const closeIcon = document.getElementsByClassName("close")[0];

// Event Listeners
instructionsBtn.onclick = function() {
  modal.style.display = "block";
}

closeIcon.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}