const highScoresList = document.querySelector('#highScoresList')
const _clearBtn = document.getElementById('clearBtn')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML =
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('');

_clearBtn.addEventListener('click', removeHighscores);

function removeHighscores() {
    localStorage.clear();
    return window.location.assign('/index.html')
}