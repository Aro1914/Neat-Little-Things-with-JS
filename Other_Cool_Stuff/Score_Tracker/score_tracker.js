let score1 = document.querySelector('#p1Score');
let score2 = document.querySelector('#p2Score');

let games = document.querySelector('#games');

let input = document.querySelector('#numInput');

let p1btn = document.querySelector('#p1btn');
let p2btn = document.querySelector('#p2btn');

let reset = document.querySelector('#reset');

input.addEventListener('change', () => {
    games.innerHTML = input.value;
    gameOver();
});

p1btn.addEventListener('click', () => {
    increase(true);
});

p2btn.addEventListener('click', () => {
    increase(false);
});

reset.addEventListener('click', () => {
    resetAll();
}); 

const increase = (param) => {
    let score;
    if (param) {
        score = Number(score1.textContent);
        score++;
        score1.innerHTML = score;
        gameOver();
    } else {
        score = Number(score2.textContent);
        score++;
        score2.innerHTML = score;
        gameOver();
    }
}

const scores = document.querySelectorAll('h2 span');

const gameOver = () => {
    scores.forEach(element => {
        element.classList.remove('winner');
        element.classList.remove('draw');
    });

    const gamesPlayed = Number(games.textContent);
    const totalScore = Number(score1.innerHTML) + Number(score2.innerHTML);
    if (gamesPlayed === totalScore) {
        p1btn.disabled = true;
        p2btn.disabled = true;
    } else if (p1btn.disabled === true && gamesPlayed > totalScore) {
        p1btn.disabled = false;
        p2btn.disabled = false;
    } else if (gamesPlayed < totalScore) {
        resetAll();
    }

    const s1 = Number(score1.innerHTML);
    const s2 = Number(score2.innerHTML);
    if (gamesPlayed === totalScore && s1 > s2) {
        score1.classList.add('winner');
    } else if (gamesPlayed === totalScore && s1 < s2) {
        score2.classList.add('winner');
    } else if (gamesPlayed === totalScore) {
        scores.forEach(element => {
            element.classList.add('draw');
        });
    }
}

const resetAll = () => {
    score1.innerHTML = '0';
    score2.innerHTML = '0';
    p1btn.disabled = false;
    p2btn.disabled = false;
    scores.forEach(element => {
        element.classList.remove('winner');
        element.classList.remove('draw');
    });
}

