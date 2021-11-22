// The array that holds the background-color of each choice div
let bgColor = [];

let banner = document.querySelector('h1');
let hidden = document.querySelector('h1 span');
let message = document.querySelector('#message');

let tiles = 6;

// Define the function to load the Game or just reset the bgs of each choice div
let goal;
const loadGame = (x) => {
    for (let index = 0; index < x; index++) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        bgColor[index] = `rgb(${r}, ${g}, ${b})`;
    }

    let random = () => Math.floor((Math.random() * x));

    goal = `${bgColor[random()]}`;

    hidden.textContent = goal.toUpperCase();

    let choices = document.querySelectorAll('#choices div');

    for (let index = 0; index < x; index++) {
        choices[index].style.backgroundColor = `${bgColor[index]}`;
        choices[index].addEventListener('click', e => {
            if (choices[index].style.backgroundColor === goal) {
                for (let index = 0; index < x; index++) {
                    choices[index].style.backgroundColor = goal;
                    banner.style.backgroundColor = goal;
                    banner.style.transition = 'background-color 0.5s';
                    message.textContent = 'CORRECT!';
                }
            } else {
                choices[index].style.backgroundColor = 'var(--bg-color)';
                choices[index].style.transition = 'background-color 0.5s';
                message.textContent = 'TRY AGAIN!';
            }
        })
    }

    if (x === 3) {
        for (let index = 3; index < 6; index++) {
            choices[index].style.display = 'none';
        }
    } else {
        for (let index = 0; index < 6; index++) {
            choices[index].style.display = 'block';
        }
    }

}

// Load the Game
loadGame(tiles);

// Getting reference to the New Color button
let loadBtn = document.querySelector('#tool-bar>button');
loadBtn.addEventListener('click', () => {
    loadGame(tiles);
    banner.style.backgroundColor = 'var(--global-color)';
    message.textContent = 'TRY ONE!';
});

// Setting the click event listener for the setting buttons
let modeSetters = document.querySelectorAll('#settings button');
modeSetters[0].addEventListener('click', () => {
    tiles = 3;
    modeSetters[0].classList.toggle('selected');
    modeSetters[1].classList.toggle('selected');
    loadGame(tiles);
});
modeSetters[1].addEventListener('click', () => {
    tiles = 6
    modeSetters[1].classList.toggle('selected');
    modeSetters[0].classList.toggle('selected');
    loadGame(tiles);
});