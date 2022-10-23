// Quiz Variables

// Timer variables
let _timeLeft= document.getElementById('timeLeft');

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
const _loaderBlock = document.getElementById('loaderBlock');
const _quizWrapper = document.getElementById('quizWrapper');
const _quizTitle = document.getElementById('quizTitle');
const _quizBody = document.getElementById('quizBody');
const _question = document.getElementById('question');
const _answers = document.querySelector('.quiz-answers');
const _checkAnswer = document.getElementById('check-answer');
const _result = document.getElementById('result');
let correctAnswer = ""
let correctScore = askedCount = 0;
let totalQuestion = 10;
let questionCounter = 1;
let currentQuestion = {};
let questions = [];
let availableQuestions = [];

// Event Listeners 
document.addEventListener('DOMContentLoaded', () => {
  // Fetch to retrieve API learned from James Q Quick tutorial
  fetch(`https://opentdb.com/api.php?amount=50&category=11&type=multiple`)
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions.results;
        startQuiz();
    })
    .catch((err) => {
        console.error(err);
    });
})

/** 
 * Main Function to start the Quiz 
 */
function startQuiz() {
  availableQuestions = [...questions];
  _timeLeft.innerHTML = `<p><i class="fas fa-stopwatch"> 60</p>`;
  showQuestion()
  quizTime()
  _loaderBlock.classList.add('hide');
  _quizWrapper.style.display = 'flex';
  _checkAnswer.addEventListener('click', checkAnswer)
}

/**
 * Function for Timer
 * Time set to 60 seconds - after time is finished user is moved to end.html
 */
function quizTime() {
  let timeLeft = 90;
  quizTime = setInterval(function () {
    timeLeft--;
      if (timeLeft > 0) {
          _timeLeft.innerHTML = `<p><i class="fas fa-stopwatch"> ${timeLeft}</p>`;
      } else if (timeLeft === 0) {
        setTimeout(() => {
          localStorage.setItem('mostRecentScore', correctScore)
          return window.location.assign('./end.html')
        }, 300);
      }
  }, 1000);
}

/** 
 * Function that takes the data from the result fetched by getQuestion and maps the questions and answers to the html
 */
function showQuestion() {
  _checkAnswer.disabled = false;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  _question.innerHTML = currentQuestion.question;
  correctAnswer = currentQuestion.correct_answer;
  let incorrectAnswer = currentQuestion.incorrect_answers;
  let answersList = incorrectAnswer;
  answersList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
  _answers.innerHTML = `
      ${answersList.map((answer, index) => `
          <li> ${index + 1}. <span>${answer}</span> </li>
      `).join('')}
  `;
  _totalQuestions.textContent = totalQuestion;
  _checkAnswer.style.display = 'block'
  _result.className = "hide";
  _progressText.innerText = `Question ${questionCounter} of ${totalQuestion}`
  _progressBarFull.style.width = `${(questionCounter/totalQuestion) * 100}%`
  selectAnswer();
  availableQuestions.splice(questionIndex, 1)
}

/**
 * Function for selecting an answer, to avoid accidentally selecting an answer by mistake I have the answers setup to not reveal answer until "check answer" is clicked
 * User can change their selected answer before clicking "check answer"
 * Applies a .selected class to each answer that is clicked by user
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
      _result.className = "result-correct";
      _result.innerHTML = `<p> <i class = "fas fa-check"></i> Correct Answer!</p>`;
    } else {
      incorrectSound()
      _checkAnswer.style.display = 'none'
      _result.className = "result-incorrect";
      _result.innerHTML = `<p> <i class = "fas fa-times"></i> Incorrect Answer!</p> <p><small><b>Correct Answer: </b> ${correctAnswer}</b></small></p>`;
    }
  } else {
    _result.className = "result-omit";
    _result.innerHTML = `<p><i class = "fas fa-question"></i> <strong>Please select an answer!</strong></p>`;
    setTimeout(() => {
      _result.className = "hide";
    }, 500);
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
    showQuestion();
  }, 900);
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