let isEven = (a) => {
    // a == 0 ? console.log(true) : a == 1 ? console.log(false) : isEven(a - 2);
    if (a < 0) {
        a = (a * -2) / 2
        console.log('You entered a negative value, but the absolute value being even is...');
    }
    if (a == 0) {
        console.log(true);
    } else if (a == 1) {
        console.log(false);
    } else {
        isEven(a - 2);
    }
}

isEven(-1);