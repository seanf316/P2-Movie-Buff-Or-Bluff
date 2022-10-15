const username = document.querySelector('#username');
const usernameText = document.querySelector('#username-text');
const _goHome = document.getElementById('goHome');
const _endForm = document.getElementById('end-form');
const _finalText = document.getElementById('final-text');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 5;




document.addEventListener('DOMContentLoaded', () => {
    replayQuiz();
  })

function replayQuiz() {
    if (mostRecentScore == 0) {
        _endForm.style.display = 'none';
        _finalText.innerText = "Sorry you didn't answer any questions correctly you will need to go again!"
    } else {
        finalScore.innerHTML = `You corectly answered ${mostRecentScore} out of 10`;
    }
}



username.addEventListener('keyup', () => {
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
    // else if (username.value.length > 10) {
    //     usernameText.innerText = "Please enter a username between 4 & 10 characters"
    //     saveScoreBtn.disabled = true
    // }
    
});

saveHighScore = e => {
    e.preventDefault()

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
};