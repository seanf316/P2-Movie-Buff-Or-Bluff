// End Page Variables
const username = document.querySelector('#username');
const usernameText = document.querySelector('#username-text');
const _endForm = document.getElementById('end-form');
const finalScore = document.querySelector('#finalScore');
const _finalText = document.getElementById('final-text');
const _finalQuote = document.getElementById('final-quote');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const _controlBtns = document.getElementById('control-buttons');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];


// Event Listeners
username.addEventListener('input', usernameEnter);
saveScoreBtn.addEventListener('click', saveHighScore);
document.addEventListener('DOMContentLoaded', () => {
    endQuiz();
})

/**
 * Function to stop user entering a username for Leaderboard if score is 0.
 * Displays a message to user depending on score
 * Displays a movie quote to user depending on score
 */
function endQuiz() {
    if (mostRecentScore == 0) {
        finalScore.style.display = 'none';
        _endForm.style.display = 'none';
        _finalText.innerHTML = `Sorry my friend you answered <strong>0</strong> questions correctly, not everyone is cursed with knowledge. Play again to get your name on the Highscores Leaderboard.`
        _finalQuote.innerHTML = `“Everybody looses a couple, and you either pack up and go home or keep fighting.” - Seabiscuit (2003)`
    } else {
        finalScore.innerHTML = `You got ${mostRecentScore} out of 10 correct!`;
        if (mostRecentScore <= 3) {
            _finalText.innerHTML = `Not the best my friend but certainly not the worst, you have made it onto the Leaderboard.`
            _finalQuote.innerHTML = `“Worrying about losing keeps you winning.” - Sweet November (2001)`
        } else if (mostRecentScore > 3 && mostRecentScore <= 5) {
            _finalText.innerHTML = `Now you're getting there keep going young Padawan.`
            _finalQuote.innerHTML = `“You know what makes you feel okay about losing? Winning.” - Molly's Game (2017)`
        } else if (mostRecentScore > 5 && mostRecentScore <= 7) {
            _finalText.innerHTML = `Good job my friend now that's what we want to see, your heading toward the Leaderboard summit.`
            _finalQuote.innerHTML = `“Oh, I don't lose. People who bet on me to lose lose. And they lose big.” - Ocean's 13 (2007)`
        } else if (mostRecentScore > 7 && mostRecentScore <= 9) {
            _finalText.innerHTML = `We are in the presence of greatness you are going straight to the top.`
            _finalQuote.innerHTML = `“Winners forget they're in a race, they just love to run.” - With Honors (1994)`
        } else if (mostRecentScore == 10) {
            _finalText.innerHTML = `I guess you really are a Movie Buff - Absolute Perfection!`
            _finalQuote.innerHTML = `“All I'm asking for is total perfection.” - The Lego Movie (2014)`
        }
        _controlBtns.style.display = 'none';
        usernameEnter();
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
        usernameText.innerText = "Please enter a username between 4 & 10 characters without spaces"
        saveScoreBtn.disabled = true
    } else if (username.value.length >= 11) {
        usernameText.innerText = "Please enter a username between 4 & 10 characters without spaces"
        saveScoreBtn.disabled = true
    }else {
        usernameText.innerText = ""
        saveScoreBtn.disabled = false
    }
}

/** 
 * Function to save the Highscores to local storage. Created using information from a Brian Design video
 * It will push the username and most recent score to the Highscores table.
*/
function saveHighScore(event) {
    event.preventDefault()
    const score = {
        score: mostRecentScore,
        name: username.value
    }
    //Allows up to 10 Highscores and after that it will replace the lowest score
    highScores.push(score)
    highScores.sort((a, b) => {
        return b.score - a.score
    })
    highScores.splice(10)
    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('./highscores.html')
}