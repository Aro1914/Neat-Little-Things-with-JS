// Numerical Arrays; not that an array can't store multiple data types though
let anArray = [1, 1, 1, 1];
let secondArray = [1, 2, 3, 4];
let thirdArray = [1, 1, 1, 2];

// Alphabetical Arrays
let forthArray = ["a", "a", "a", "a", "a"];
let fifthArray = ["a", "b", "c", "d", "e"];
let sixthArray = ["a", "a", "a", "a", "b"];

let isUniform = (array) => {
    const element = array[0];
    for (let index = 1; index < array.length; index++) {
        if (array[index] !== element) {
            return console.log(false);
        }
    }
    return console.log(true);
}

isUniform(anArray);