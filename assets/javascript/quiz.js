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
let correctAnswer = ""
let correctScore = askedCount = 0;
let totalQuestion = 10;
let questionCounter = 1;

// Sounds
let isPlaying = true;
const audioOffIcon = document.getElementsByClassName("sound-off");
const audioOnIcon = document.getElementsByClassName("sound-on");
const buttonAudio = new Audio("assets/sounds/button-click.mp3");
const correctAudio = new Audio("assets/sounds/correct-sound.mp3");
const incorrectAudio = new Audio("assets/sounds/incorrect-sound.mp3");

// Buttons
const _checkAnswer = document.getElementById('check-answer');
const _playAgain = document.getElementById('play-again');

// Event Listeners 
document.addEventListener('DOMContentLoaded', () => {
  startQuiz();
})

function startQuiz() {
  getQuestion();
  eventListeners();
  setCount();
}

async function getQuestion() {
  const tokenURL = 'https://opentdb.com/api_token.php?command=request';
  const tokenResult = await fetch(`${tokenURL}`);
  const tokenData = await tokenResult.json();
  console.log(tokenData.token);
  const APIUrl = 'https://opentdb.com/api.php?amount=1&category=11&type=multiple&token=8e6c699607059c91927d8fe478b5490148aad65482b3ce74cbaeaf232175d164';
  const result = await fetch(`${APIUrl}`);
  const data = await result.json();
  console.log(data)
  showQuestion(data.results[0]);
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
  _checkAnswer.style.display = 'block'
  _result.style.display = 'none';
  _progressText.innerText = `Question ${questionCounter} of ${totalQuestion}`
  _progressBarFull.style.width = `${(questionCounter/totalQuestion) * 100}%`
  selectAnswer();
}

function eventListeners() {
  _checkAnswer.addEventListener('click', checkAnswer);
  _playAgain.addEventListener('click', restartQuiz);
}

function setCount() {
  _totalQuestions.textContent = totalQuestion;
  _correctScore.textContent = correctScore;
}

function selectAnswer() {
  _answers.querySelectorAll('li').forEach((answer) => {
    answer.addEventListener('click', () => {
      if (_answers.querySelector('.selected')) {
        buttonSound();
        const activeAnswer = _answers.querySelector('.selected');
        activeAnswer.classList.remove('selected')
      }
      buttonSound();
      answer.classList.add('selected');
    })
  })
}

function checkAnswer() {
  _checkAnswer.disabled = true;
  if (_answers.querySelector('.selected')) {
    let selectAnswer = _answers.querySelector('.selected span').textContent;
    checkCount();
    if (selectAnswer == correctAnswer) {
      correctSound()
      _checkAnswer.style.display = 'none'
      correctScore++;
      _result.style.display = 'block';
      _result.style.backgroundColor = 'green'
      _result.style.color = 'var(--light-color)'
      _result.innerHTML = `<p> <i class = "fas fa-check"></i> Correct Answer!</p>`;
    } else {
      incorrectSound()
      _checkAnswer.style.display = 'none'
      _result.style.display = 'block';
      _result.style.backgroundColor = 'rgb(182, 26, 26)'
      _result.style.color = 'var(--light-color)'
      _result.innerHTML = `<p> <i class = "fas fa-times"></i> Incorrect Answer!</p> <p><small><b>Correct Answer: </b> ${correctAnswer}</b></small></p>`;
    }
  } else {
    _result.style.display = 'block';
    _result.style.backgroundColor = 'var(--main-color)'
    _result.style.color = 'var(--accent-color)'
    _result.innerHTML = `<p><i class = "fas fa-question"></i> <strong>Please select and answer!</strong></p>`;
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
      return window.location.assign('./end.html')
    }, 300);
  }
  setTimeout(() => {
    getQuestion();
  }, 500);
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

// Sound Functions

/**
 * Loop through the audio-icon-logo and call toggleAudio() when the player clicks
 */
let audioIconLogo = document.getElementsByClassName("audio-icon-logo");
for (let i = 0; i < audioIconLogo.length; i++) {
  audioIconLogo[i].addEventListener("click", () => {
    toggleAudio();
  });
}

/**
 * Lets the player have the option whether to have sounds on or not
 */
 function toggleAudio() {
  isPlaying ? toggleAudioOff() : toggleAudioOn();
}

/**
 * Toggle audio on
 */
function toggleAudioOn() {
  isPlaying = true;
  for (let i = 0; i < audioOffIcon.length && audioOnIcon.length; i++) {
    audioOffIcon[i].classList.add("hide");
    audioOnIcon[i].classList.remove("hide");
  }
}

/**
 * Toggle audio off
 */
function toggleAudioOff() {
  isPlaying = false;
  for (let i = 0; i < audioOffIcon.length && audioOnIcon.length; i++) {
    audioOffIcon[i].classList.remove("hide");
    audioOnIcon[i].classList.add("hide");
  }
}

/**
 * Play a sound when the player answers correctly
 */
 function correctSound() {
  if (isPlaying) {
    correctAudio.play();
  } else {
    correctAudio.pause();
  }
}

/**
 * Play a sound when the player answers incorrectly
 */
function incorrectSound() {
  if (isPlaying) {
    incorrectAudio.play();
  } else {
    incorrectAudio.pause();
  }
}

/**
 * Play a sound when the player clicks a button
 */
function buttonSound() {
  if (isPlaying) {
    buttonAudio.play();
  } else {
    buttonAudio.pause();
  }
}