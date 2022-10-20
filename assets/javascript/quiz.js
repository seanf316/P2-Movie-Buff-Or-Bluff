// Quiz Variables/Constants
// Images
const _siteLogoMobile = document.getElementById('siteLogoMobile');
const _siteLogoDesktop = document.getElementById('siteLogoDesktop');

// Score
const _progressText = document.getElementById('progressText');
const _progressBar = document.getElementById('progressBar');
const _progressBarFull = document.getElementById('progressBarFull');
const _totalQuestions = document.getElementById('total-questions');

// Sounds
let isPlaying = false;
const _audioLogo = document.getElementById('audioLogo');
const audioOffIcon = document.getElementsByClassName("sound-off");
const audioOnIcon = document.getElementsByClassName("sound-on");
const buttonAudio = new Audio("assets/sounds/button-click.mp3");
const correctAudio = new Audio("assets/sounds/correct-sound.mp3");
const incorrectAudio = new Audio("assets/sounds/incorrect-sound.mp3");

// Quiz
const _quizWrapper = document.getElementById('quizWrapper');
const _question = document.getElementById('question');
const _answers = document.querySelector('.quiz-answers');
const _checkAnswer = document.getElementById('check-answer');
const _result = document.getElementById('result');
let correctAnswer = ""
let correctScore = askedCount = 0;
let totalQuestion = 10;
let questionCounter = 1;

// Event Listeners 
document.addEventListener('DOMContentLoaded', () => {
  startQuiz();
  
})

/** 
 * Main Function to start the Quiz 
 */
function startQuiz() {
  getQuestion();
  _checkAnswer.addEventListener('click', checkAnswer)
}


/**
 * Function to get questions from opentdb.com API
 */
async function getQuestion() {
  const APIUrl = 'https://opentdb.com/api.php?amount=1&category=11&type=multiple';
  const result = await fetch(`${APIUrl}`);
  const data = await result.json();
  console.log(data)
  showQuestion(data.results[0]);
  removeHide(_siteLogoMobile, _siteLogoDesktop, _audioLogo, _progressBar, _checkAnswer)
}


function removeHide() {
    for (let i = 0; i < arguments.length; i++) {
      arguments[i].classList.remove('hide');
    }
}

/** 
 * Function that takes the data from the result fetched by getQuestions and maps the questions and answers to the html
 */
function showQuestion(data) {
  _checkAnswer.disabled = false;
  correctAnswer = data.correct_answer;
  let incorrectAnswer = data.incorrect_answers;
  let answersList = incorrectAnswer;

  // Takes all the incorrect answers and joins it with the correct answer and randomises the correct answer position
  answersList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
  _question.innerHTML = `${data.question}`;
  _answers.innerHTML = `
      ${answersList.map((answer, index) => `
          <li> ${index + 1}. <span>${answer}</span> </li>
      `).join('')}
  `;
  _totalQuestions.textContent = totalQuestion;
  _checkAnswer.style.display = 'block'
  _result.style.display = 'none';
  _progressText.innerText = `Question ${questionCounter} of ${totalQuestion}`
  _progressBarFull.style.width = `${(questionCounter/totalQuestion) * 100}%`
  selectAnswer();
}


/**
 * Function for selecting answer, to avoid accidentally selecting an answer by mistake I have the answers setup to not reval answer until "check answer" is clicked
 * User can change their selected answer before clicking "check answer"
 */
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

/**
 * Function to check answer
 * If answer selected is correct user will be met with a Correct Answer display and a sound effect indicating correct
 * If answer selected is incorrect user will be met with a Incorrect Answer display and a sound effect indicating incorrect, It will detail what the correct answer was too
 * If user clicks "Check Answer" without selecting an answer they will be met with a "Please select and answer!" display and button will be disabled
 */
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

/**
 * Function to increase question count, score and log score for Highscore Leaderboard
 */
function checkCount() {
  askedCount++;
  questionCounter++;
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

// function restartQuiz() {
//   correctScore = askedCount = 0;
//   questionCounter = 1;
//   _checkAnswer.style.display = 'block';
//   _checkAnswer.disabled = false;
//   getQuestion();
// }

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