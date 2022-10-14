const username = document.querySelector('#username');
const usernameText = document.querySelector('#username-text');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 5;

finalScore.innerHTML = `You corectly answered ${mostRecentScore} out of 10`;

username.addEventListener('keyup', () => {
    if (username.value.length > 8) {
        usernameText.innerText = "Please enter a username less then 8 characters"
        saveScoreBtn.disabled = true
    } else {
        usernameText.innerText = ""
        saveScoreBtn.disabled = false
    }    
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