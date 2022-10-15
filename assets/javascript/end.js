const username = document.querySelector('#username');
const usernameText = document.querySelector('#username-text');
const _endForm = document.getElementById('end-form');
const finalScore = document.querySelector('#finalScore');
const _finalTextContainer = document.getElementById('finalTextContainer');
const _finalText = document.getElementById('final-text');
const _finalQuote = document.getElementById('final-quote');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const _controlBtns = document.getElementById('control-buttons');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 5;


// Event Listeners
username.addEventListener('keyup', usernameEnter);
document.addEventListener('DOMContentLoaded', () => {
    replayQuiz();
})



function replayQuiz() {
    if (mostRecentScore == 0) {
        _endForm.style.display = 'none';
        _finalText.innerHTML = `Sorry my friend you answered <strong>0</strong> questions correctly, not everyone is cursed with knowledge.<br>Play again to get your name on the Highscores Table.`
        _finalQuote.innerHTML = `“Everybody looses a couple, and you either pack up and go home or keep fighting.” - Seabiscuit 2003`
    } else {
        finalScore.innerHTML = `You correctly answered ${mostRecentScore} out of 10`;
        if (mostRecentScore < 3) {
            _finalText.innerHTML = `Not the best my friend but certainly not the worst, you have made it onto the Leaderboard.`
            _finalQuote.innerHTML = `“Worrying about losing keeps you winning.” - Sweet November 2001`
        } else if (mostRecentScore > 3 && mostRecentScore <= 5) {
            _finalText.innerHTML = `Now your getting there keep going young Padawan.`
            _finalQuote.innerHTML = `“You know what makes you feel okay about losing? Winning.” - Molly's Game 2017`
        } else if (mostRecentScore > 5 && mostRecentScore <= 7) {
            _finalText.innerHTML = `Good job my friend now that's what we want see you at the Leaderboard summit`
            _finalQuote.innerHTML = `“Oh, I don't lose. People who bet on me to lose lose. And they lose big.” - Ocean's 13 2007`
        } else if (mostRecentScore > 7 && mostRecentScore <= 9) {
            _finalText.innerHTML = `We are in the presence of greatness you are going straight to the top.`
            _finalQuote.innerHTML = `“Winners forget they're in a race, they just love to run.” - With Honors 1994`
        } else if (mostRecentScore = 10) {
            _finalText.innerHTML = `Well my friend you have acheived Perfection - Be Proud - Be Humble`
            _finalQuote.innerHTML = `“All I'm asking for is total perfection.” - The Lego Movie 2014`
        }
        _controlBtns.style.display = 'none';
        usernameEnter();
    }
}

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

function saveHighScore(event) {
    event.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)
    highScores.sort((a, b) => {
        return b.score - a.score
    })

    highScores.splice(10)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('./highscores.html')
}