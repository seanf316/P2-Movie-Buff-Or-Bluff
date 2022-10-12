// Easy - https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=multiple
// Medium - https://opentdb.com/api.php?amount=1&category=11&difficulty=medium&type=multiple
// Hard - https://opentdb.com/api.php?amount=1&category=11&difficulty=hard&type=multiple

// Homepage Variables
const modal = document.getElementById("instructionsModal");
const instructionsBtn = document.getElementById("instructionsBtn");
const closeIcon = document.getElementsByClassName("close")[0];
const _easy = document.getElementById("easy");
const _medium = document.getElementById("medium");
const _hard = document.getElementById("hard");

// Quiz Variables/Constants

// Score
const _progressText = document.getElementById('progressText');
const _progressBarFull = document.getElementById('progressBarFull');
const _correctScore = document.getElementById('correct-score');
const _totalQuestions = document.getElementById('total-questions');
const _overallScore = document.getElementById('overall-score');

// Quiz
const _question = document.getElementById('question');
const _answers = document.querySelector('.quiz-answers');
let correctAnswer = "", correctScore = askedCount = 0, totalQuestion = 10;
let questionCounter = 1;

// Buttons
const _checkAnswer = document.getElementById('check-answer');
const _playAgain = document.getElementById('play-again');

// Event Listeners




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