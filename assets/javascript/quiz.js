// Easy - https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=multiple
// Medium - https://opentdb.com/api.php?amount=1&category=11&difficulty=medium&type=multiple
// Hard - https://opentdb.com/api.php?amount=1&category=11&difficulty=hard&type=multiple

// Homepage Variables
const modal = document.getElementById("instructionsModal");
const instructionsBtn = document.getElementById("instructionsBtn");
const closeIcon = document.getElementsByClassName("close")[0];
let _easy = document.getElementById("easy");
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
const _difficulty = document.getElementById('difficulty');
const _question = document.getElementById('question');
const _answers = document.querySelector('.quiz-answers');
const _result = document.getElementById('result');
let correctAnswer = "", correctScore = askedCount = 0, totalQuestion = 10;
let questionCounter = 1;

// Buttons
const _checkAnswer = document.getElementById('check-answer');
const _playAgain = document.getElementById('play-again');

// Event Listeners
// function eventListeners ()

document.addEventListener('DOMContentLoaded', () => {
  startQuiz();
})

function startQuiz (){
  getQuestion();
  setCount();
  _result.innerHTML = "";
}

async function getQuestion(){
  const APIUrl = 'https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=multiple';
  const result = await fetch(`${APIUrl}`);
  const data = await result.json();
  showQuestion(data.results[0]);
}

function showQuestion(data){
  _checkAnswer.disabled = false;
  correctAnswer = data.correct_answer;
  let incorrectAnswer = data.incorrect_answers;
  let answersList = incorrectAnswer;
  answersList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
  _difficulty.innerHTML = `${data.difficulty}`;
  _question.innerHTML = `${data.question}`;
  _answers.innerHTML = `
      ${answersList.map((answer, index) => `
          <li> ${index + 1}. <span>${answer}</span> </li>
      `).join('')}
  `;
  _progressText.innerText = `Question ${questionCounter} of ${totalQuestion}`
  _progressBarFull.style.width = `${(questionCounter/totalQuestion) * 100}%`
  selectAnswer();
}

function setCount(){
  _totalQuestions.textContent = totalQuestion;
  _correctScore.textContent = correctScore;
}

// function selectAnswer()

// function _checkAnswer()

// function checkCount()

// function restartQuiz()

// Homepage Functions
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