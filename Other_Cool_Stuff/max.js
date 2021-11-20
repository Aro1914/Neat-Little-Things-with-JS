let anArray = [1, 2, 3, 4];
let secondArray = [2, 4, 6, 8, 10, 12, 99, 14, 16, 18, 20, 100, 34, 5, 3, 24, 7];
let thirdArray = [1, 2, "5", "a", false, null];

let numParser = (array) => {
    for (const iterator of array) {
        if (typeof (iterator) != "number") {
            return console.log("The contents aren't all numerical");
        }
    }
    return max(array);
}

let max = (array) => {
    let maxNum = array[0];
    array.forEach(element => {
        if (element > maxNum) {
            maxNum = element;
        }
    });
    return console.log(maxNum);
}

numParser(anArray);