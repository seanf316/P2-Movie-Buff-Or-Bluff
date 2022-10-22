// Homepage Variables
const modal = document.getElementById("instructionsModal");
const highScoreBtn = document.getElementById('highScoresbtn');
const instructionsBtn = document.getElementById("instructionsBtn");
const closeIcon = document.getElementsByClassName("close")[0];

// Event Listeners
instructionsBtn.addEventListener('click', modalShow);
closeIcon.addEventListener('click', modalHide);
highScoreBtn.addEventListener("click", () => {
  return window.location.assign('./highscores.html')
})

// Homepage Functions
function modalShow() {  
    modal.style.display = "block";
  }

function modalHide() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}