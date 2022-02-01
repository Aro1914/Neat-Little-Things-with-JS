let btn = document.querySelector('button');

const r = () => {
    return Math.floor(Math.random() * 256);
}

const g = () => {
    return Math.floor(Math.random() * 256);
}

const b = () => {
    return Math.floor(Math.random() * 256);
}

btn.addEventListener('click', () => {
    let red = r();
    let redCompliment = 255 - red;
    let green = g();
    let greenCompliment = 255 - green;
    let blue = b();
    let blueCompliment = 255 - blue;
    document.querySelector('body').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    btn.style.backgroundColor = `rgb(${redCompliment}, ${greenCompliment}, ${blueCompliment})`;
    btn.style.color = `rgb(${red}, ${green}, ${blue})`;
});