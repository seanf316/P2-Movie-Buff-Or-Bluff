// Highscores Variables

const highScoresList = document.querySelector('#highScoresTable');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const _clearBtn = document.getElementById('clearBtn');
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}/${month}/${year}`;

// Maps the name, score & date to Highscores table - Idea taken and altered from a Brian Design Video
highScoresList.innerHTML =
highScores.map(score => {
    return `
        <tr>
        <td>${score.name}</td>
        <td>${score.score}</td>
        <td>${currentDate}</td>
        </tr>`;
}).join('');

_clearBtn.addEventListener('click', removeHighscores);

function removeHighscores() {
    localStorage.clear();
    return window.location.assign('./index.html');
}