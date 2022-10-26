// Quiz Variables

// Timer variables
let quizTime = document.getElementById('timeLeft');

// Score
const progressText = document.getElementById('progressText');
const progressBarFull = document.getElementById('progressBarFull');
const totalQuestionsText = document.getElementById('total-questions');

// Sounds
let isPlaying = false;
let audioIconLogo = document.getElementsByClassName("audio-icon-logo");
const audioOffIcon = document.getElementsByClassName("sound-off");
const audioOnIcon = document.getElementsByClassName("sound-on");
const buttonAudio = new Audio("assets/sounds/button-click.mp3");
const correctAudio = new Audio("assets/sounds/correct-sound.mp3");
const incorrectAudio = new Audio("assets/sounds/incorrect-sound.mp3");

// Quiz
const loaderBlock = document.getElementById('loaderBlock');
const quizWrapper = document.getElementById('quizWrapper');
const quizQuestion = document.getElementById('question');
const quizAnswers = document.querySelector('.quiz-answers');
const answerCheck = document.getElementById('check-answer');
const answerResult = document.getElementById('result');
let timeLeft;
let correctAnswer = "";
let correctScore = 0;
let totalQuestion = 10;
let questionCounter = 1;
let currentQuestion = {};
let questions = [];
let availableQuestions = [];

// End Page Variables
const username = document.querySelector('#username');
const usernameText = document.querySelector('#username-text');
const endForm = document.getElementById('end-form');
const endPage = document.getElementById('endPage');
const finalScore = document.querySelector('#finalScore');
const finalText = document.getElementById('final-text');
const finalQuote = document.getElementById('final-quote');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const controlBtns = document.getElementById('control-buttons');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// Event Listeners 
username.addEventListener('input', usernameEnter);
saveScoreBtn.addEventListener('click', saveHighScore);
audioIconLogo[0].addEventListener("click", toggleAudio);
document.addEventListener('DOMContentLoaded', () => {
  // Fetch to retrieve API learned from James Q Quick tutorial
  fetch(`https://opentdb.com/api.php?amount=10&category=11&type=multiple`)
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
});

/** 
 * Main Function to start the Quiz 
 */
function startQuiz() {
  availableQuestions = [...questions];
  quizTime.innerHTML = `<p><i class="fas fa-stopwatch"> 90</p>`;
  showQuestion();
  quizTimer();
  loaderBlock.classList.add('hide');
  quizWrapper.style.display = 'flex';
  answerCheck.addEventListener('click', checkAnswer);
}

/**
 * Function for Timer
 * Time set to 60 seconds - after time is finished user is moved to end.html
 */
function quizTimer() {
  let quizTimeAmount = 90;
  timeLeft = setInterval(function () {
    quizTimeAmount--;
    if (quizTimeAmount > 0) {
      quizTime.innerHTML = `<p><i class="fas fa-stopwatch"> ${quizTimeAmount}</p>`;
    } else if (quizTimeAmount === 0) {
      setTimeout(() => {
        stopTimer();
        quizWrapper.style.display = 'none';
        endPage.style.display = 'flex';
        endQuiz();
        localStorage.setItem('mostRecentScore', correctScore);
      }, 300);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(quizTime);
}

/** 
 * Function that takes the data from the result fetched by getQuestion and maps the questions and answers to the html
 * Parts of this function where taken and altered from a GeekProbin video
 */
function showQuestion() {
  answerCheck.disabled = false;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  quizQuestion.innerHTML = currentQuestion.question;
  correctAnswer = currentQuestion.correct_answer;
  let incorrectAnswer = currentQuestion.incorrect_answers;
  let answersList = incorrectAnswer;
  answersList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
  quizAnswers.innerHTML = `
      ${answersList.map((answer, index) => `
          <li> ${index + 1}. <span>${answer}</span> </li>
      `).join('')}
  `;
  totalQuestionsText.textContent = totalQuestion;
  answerCheck.style.display = 'block';
  answerResult.className = "hide";
  progressText.innerText = `Question ${questionCounter} of ${totalQuestion}`;
  progressBarFull.style.width = `${(questionCounter/totalQuestion) * 100}%`;
  selectAnswer();
  availableQuestions.splice(questionIndex, 1);
}

/**
 * Function for selecting an answer, to avoid accidentally selecting an answer by mistake I have the answers setup to not reveal answer until "check answer" is clicked
 * User can change their selected answer before clicking "check answer"
 * Applies a .selected class to each answer that is clicked by user
 * Parts of this function where taken and altered from a GeekProbin video
 */
function selectAnswer() {
  quizAnswers.querySelectorAll('li').forEach((answer) => {
    answer.addEventListener('click', () => {
      if (quizAnswers.querySelector('.selected')) {
        buttonSound();
        const activeAnswer = quizAnswers.querySelector('.selected');
        activeAnswer.classList.remove('selected');
      }
      buttonSound();
      answer.classList.add('selected');
    });
  });
}

/**
 * Function to check answer
 * If answer selected is correct user will be met with a Correct Answer display and a sound effect indicating correct
 * If answer selected is incorrect user will be met with a Incorrect Answer display and a sound effect indicating incorrect, It will detail what the correct answer was too
 * If user clicks "Check Answer" without selecting an answer they will be met with a "Please select and answer!" display and button will be disabled
 * Parts of this function where taken and altered from a GeekProbin video
 */
function checkAnswer() {
  answerCheck.disabled = true;
  if (quizAnswers.querySelector('.selected')) {
    let selectAnswer = quizAnswers.querySelector('.selected span').textContent;
    checkCount();
    if (selectAnswer == HTMLDecode(correctAnswer)) {
      correctSound();
      answerCheck.style.display = 'none';
      correctScore++;
      answerResult.className = "result-correct";
      answerResult.innerHTML = `<p> <i class = "fas fa-check"></i> Correct Answer!</p>`;
    } else {
      incorrectSound();
      answerCheck.style.display = 'none';
      answerResult.className = "result-incorrect";
      answerResult.innerHTML = `<p> <i class = "fas fa-times"></i> Incorrect Answer!</p> <p><small><b>Correct Answer: </b> ${correctAnswer}</b></small></p>`;
    }
  } else {
    answerResult.className = "result-omit";
    answerResult.innerHTML = `<p><i class = "fas fa-question"></i> <strong>Please select an answer!</strong></p>`;
    setTimeout(() => {
      answerResult.className = "hide";
    }, 500);
    answerCheck.disabled = false;
  }
}


/**
 * Function to decodeHtml for the correctAnswers(removes Special Character Codes for HTML)
 * This function was taken from a GeekProbin video
 */
 function HTMLDecode(textString) {
  let doc = new DOMParser().parseFromString(textString, "text/html");
  return doc.documentElement.textContent;
}

/**
 * Function to increase question count, score and log score for Highscore Leaderboard
 * Parts of this function where taken and altered from a Brian Design video
 */
function checkCount() {
  if (questionCounter == totalQuestion) {
    setTimeout(() => {
      quizWrapper.style.display = 'none';
      endPage.style.display = 'flex';
      endQuiz();
      localStorage.setItem('mostRecentScore', correctScore);
    }, 300);
  }
  setTimeout(() => {
    questionCounter++;
    showQuestion();
  }, 900);
}

/**
 * Function to stop user entering a username for Leaderboard if score is 0.
 * Displays a message to user depending on score
 * Displays a movie quote to user depending on score
 */
function endQuiz() {
  switch (true) {
    case correctScore == 0:
      finalScore.style.display = 'none';
      endForm.style.display = 'none';
      finalText.innerHTML = `Sorry my friend you answered <strong>0</strong> questions correctly, not everyone is cursed with knowledge. Play again to get your name on the Highscores Leaderboard.`;
      finalQuote.innerHTML = `“Everybody looses a couple, and you either pack up and go home or keep fighting.” - Seabiscuit (2003)`;
      break;
    case correctScore <= 3:
      finalScore.innerHTML = `You got ${correctScore} out of 10 correct!`;
      finalText.innerHTML = `Not the best my friend but certainly not the worst, you have made it onto the Leaderboard.`;
      finalQuote.innerHTML = `“Worrying about losing keeps you winning.” - Sweet November (2001)`;
      controlBtns.style.display = 'none';
      usernameEnter();
      break;
    case correctScore > 3 && correctScore <= 5:
      finalScore.innerHTML = `You got ${correctScore} out of 10 correct!`;
      finalText.innerHTML = `Now you're getting there keep going young Padawan.`;
      finalQuote.innerHTML = `“You know what makes you feel okay about losing? Winning.” - Molly's Game (2017)`;
      controlBtns.style.display = 'none';
      usernameEnter();
      break;
    case correctScore > 5 && correctScore <= 7:
      finalScore.innerHTML = `You got ${correctScore} out of 10 correct!`;
      finalText.innerHTML = `Good job my friend now that's what we want to see, your heading toward the Leaderboard summit.`;
      finalQuote.innerHTML = `“Oh, I don't lose. People who bet on me to lose lose. And they lose big.” - Ocean's 13 (2007)`;
      controlBtns.style.display = 'none';
      usernameEnter();
      break;
    case correctScore > 7 && correctScore <= 9:
      finalScore.innerHTML = `You got ${correctScore} out of 10 correct!`;
      finalText.innerHTML = `We are in the presence of greatness you are going straight to the top.`;
      finalQuote.innerHTML = `“Winners forget they're in a race, they just love to run.” - With Honors (1994)`;
      controlBtns.style.display = 'none';
      usernameEnter();
      break;
    case correctScore == 10:
      finalScore.innerHTML = `You got ${correctScore} out of 10 correct!`;
      finalText.innerHTML = `I guess you really are a Movie Buff - Absolute Perfection!`;
      finalQuote.innerHTML = `“All I'm asking for is total perfection.” - The Lego Movie (2014)`;
      controlBtns.style.display = 'none';
      usernameEnter();
      break;
  }
}

/**
 * Function to stop user entering empty spaces as username, also it alerts user that username has to be between 4 & 10 characters.
 * Alert will disappear if the user enters 4 or more characters but we re-appear if more then 10 characters are entered.
 */
function usernameEnter() {
  let userBox = username.value;
  userBox = userBox.replace(/\s/g, '');
  username.value = userBox;
  if (username.value.length <= 3) {
    usernameText.innerText = "Please enter a username between 4 & 10 characters without spaces";
    saveScoreBtn.disabled = true;
  } else if (username.value.length >= 11) {
    usernameText.innerText = "Please enter a username between 4 & 10 characters without spaces";
    saveScoreBtn.disabled = true;
  } else {
    usernameText.innerText = "";
    saveScoreBtn.disabled = false;
  }
}

/** 
 * Function to save the Highscores to local storage. Created using information from a Brian Design video
 * It will push the username and most recent score to the Highscores table.
 * Parts of this function where taken and altered from a Brian Design video
 */
function saveHighScore(event) {
  event.preventDefault();
  const score = {
    score: correctScore,
    name: username.value
  };
  //Allows up to 10 Highscores and after that it will replace the lowest score
  highScores.push(score);
  highScores.sort((a, b) => {
    return b.score - a.score;
  });
  highScores.splice(10);
  localStorage.setItem('highScores', JSON.stringify(highScores));
  window.location.assign('./highscores.html');
}

// Sound Functions

/**
 * Lets the player have the option whether to have sounds on or not
 */
function toggleAudio() {
  return isPlaying ? toggleAudioOff() : toggleAudioOn();
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
    buttonAudio.play();
  }
}

/**
 * Play a sound when the player answers correctly
 */
function correctSound() {
  if (isPlaying) {
    correctAudio.play();
  }
}

/**
 * Play a sound when the player answers incorrectly
 */
function incorrectSound() {
  if (isPlaying) {
    incorrectAudio.play();
  }
}

/**
 * Play a sound when the player clicks a button
 */
function buttonSound() {
  if (isPlaying) {
    buttonAudio.play();
  }
}