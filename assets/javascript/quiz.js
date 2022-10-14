// Easy - https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=multiple
// Medium - https://opentdb.com/api.php?amount=1&category=11&difficulty=medium&type=multiple
// Hard - https://opentdb.com/api.php?amount=1&category=11&difficulty=hard&type=multiple

// Homepage Variables
const modal = document.getElementById("instructionsModal");
const instructionsBtn = document.getElementById("instructionsBtn");
const closeIcon = document.getElementsByClassName("close")[0];

// Quiz Variables/Constants
const _userContainer = document.getElementById('userContainer')
const _username = document.getElementById('username')
const _usernameText = document.getElementById('usernameText');
const _startQuizBtn = document.getElementById('startQuizBtn');

// Score
const _progressText = document.getElementById('progressText');
const _progressBarFull = document.getElementById('progressBarFull');
const _correctScore = document.getElementById('correct-score');
const _totalQuestions = document.getElementById('total-questions');
const _overallScore = document.getElementById('overall-score');

// Quiz
const _quiz = document.getElementById('quiz');
const _question = document.getElementById('question');
const _answers = document.querySelector('.quiz-answers');
const _result = document.getElementById('result');
const _quotes = document.getElementById('quotesyo');
let correctAnswer = "",
  correctScore = askedCount = 0,
  totalQuestion = 10;
let questionCounter = 1;

// Buttons
const _checkAnswer = document.getElementById('check-answer');
const _playAgain = document.getElementById('play-again');

// Event Listeners 


function eventListeners() {
  _checkAnswer.addEventListener('click', checkAnswer);
  _playAgain.addEventListener('click', restartQuiz);
}

document.addEventListener('DOMContentLoaded', () => {
  startQuiz();
})

function startQuiz() {
  getQuestion();
  eventListeners();
  setCount();
}

async function getQuestion() {
  const APIUrl = 'https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=multiple';
  const result = await fetch(`${APIUrl}`);
  const data = await result.json();
  showQuestion(data.results[0]);
  _quotes.style.display = 'none';
}

function showQuestion(data) {
  _checkAnswer.disabled = false;
  correctAnswer = data.correct_answer;
  let incorrectAnswer = data.incorrect_answers;
  let answersList = incorrectAnswer;
  answersList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
  _question.innerHTML = `${data.question}`;
  _answers.innerHTML = `
      ${answersList.map((answer, index) => `
          <li> ${index + 1}. <span>${answer}</span> </li>
      `).join('')}
  `;
  _result.style.display = 'none';
  _progressText.innerText = `Question ${questionCounter} of ${totalQuestion}`
  _progressBarFull.style.width = `${(questionCounter/totalQuestion) * 100}%`
  selectAnswer();
}

function setCount() {
  _totalQuestions.textContent = totalQuestion;
  _correctScore.textContent = correctScore;
}

function selectAnswer() {
  _answers.querySelectorAll('li').forEach((answer) => {
    answer.addEventListener('click', () => {
      if (_answers.querySelector('.selected')) {
        const activeAnswer = _answers.querySelector('.selected');
        activeAnswer.classList.remove('selected')
      }
      answer.classList.add('selected');
    })
  })
}

function checkAnswer() {
  _checkAnswer.disabled = true;
  if (_answers.querySelector('.selected')) {
    let selectAnswer = _answers.querySelector('.selected span').textContent;
    if (selectAnswer == correctAnswer) {
      correctScore++;
      _result.style.display = 'block';
      _result.innerHTML = `<p> <i class = "fas fa-check"></i> Correct Answer!</p>`;
    } else {
      _result.style.display = 'block';
      _result.innerHTML = `<p> <i class = "fas fa-times"></i> Incorrect Answer!</p> <p><small><b>Correct Answer: </b> ${correctAnswer}</b></small></p>`;
    }
    checkCount();
  } else {
    _result.style.display = 'block';
    _result.innerHTML = `<p><i class = "fas fa-question"></i> Please select and answer!</p>`;
    _checkAnswer.disabled = false;
  }
}

function checkCount() {
  askedCount++;
  questionCounter++;
  setCount();
  if (askedCount == totalQuestion) {
    setTimeout(() => {
      _checkAnswer.style.display = 'none';
      localStorage.setItem('mostRecentScore', correctScore)
      return window.location.assign('/end.html')
    }, 1000);
  } else {
    if (askedCount == 1) {
      _quotes.style.display = 'block';
      _quotes.innerHTML = `"May the Force be with you!"`;
    } else if (askedCount === 3) {
      _quotes.style.display = 'block';
      _quotes.innerHTML = `"With great power comes great responsibilty..."`;
    } else if (askedCount === 5) {
      _quotes.style.display = 'block';
      _quotes.innerHTML = `"You cant handle the truth!"`;
    } else if (askedCount === 7) {
      _quotes.style.display = 'block';
      _quotes.innerHTML = `"My mama always said life was like a box of chocolates..."`;
    } else if (askedCount === 9) {
      _quotes.style.display = 'block';
      _quotes.innerHTML = `"I'll be back..."`;
    } 
    setTimeout(() => {
      getQuestion();
    }, 1000);
  }
}

function restartQuiz() {
  correctScore = askedCount = 0;
  questionCounter = 1;
  _playAgain.style.display = 'none';
  _checkAnswer.style.display = 'block';
  _checkAnswer.disabled = false;
  _overallScore.innerHTML = "";
  setCount();
  getQuestion();
}

// Homepage Functions
instructionsBtn.onclick = function () {
  modal.style.display = "block";
}

closeIcon.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}