let min = (x, y) => {
    if (Number(x) == Number(y)) {
        return 'Equal values';
    } else if (Number(x) < Number(y)) {
        return x;
    } else {
        return y;
    }
}

console.log(min('9', '10'));