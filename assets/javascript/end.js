const username = document.querySelector('#username');
const usernameText = document.querySelector('#username-text');
const _goHome = document.getElementById('goHome');
const _endForm = document.getElementById('end-form');
const _finalTextContainer = document.getElementById('finalTextContainer');
const _finalText = document.getElementById('final-text');
const _finalQuote = document.getElementById('final-quote');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 5;


// Event Listeners
username.addEventListener('keyup', usernameEnter);
document.addEventListener('DOMContentLoaded', () => {
    replayQuiz();
  })

  function usernameEnter() {
    if (username.value.length < 4) {
        usernameText.innerText = "Please enter a username between 4 & 10 characters"
        saveScoreBtn.disabled = true
    } else if (username.value.length >= 11) {
        usernameText.innerText = "Please enter a username between 4 & 10 characters"
        saveScoreBtn.disabled = true
    } else {
        usernameText.innerText = ""
        saveScoreBtn.disabled = false   
    }
}

function replayQuiz() {
    if (mostRecentScore == 0) {
        _endForm.style.display = 'none';
        _finalText.innerHTML = `Sorry my friend you answered <strong>0</strong> questions correctly, not everyone is cursed with knowledge.<br>Play again to get your name on the Highscores Table.`
        _finalQuote.innerHTML = `“Everybody looses a couple, and you either pack up and go home or keep fighting.” - Seabiscuit 2003`
    } else {
        finalScore.innerHTML = `You corectly answered ${mostRecentScore} out of 10`;
        _finalTextContainer.style.display = 'none';
        usernameEnter();
    }
}

function saveHighScore (event) {
    event.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)
    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(10)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')
}
