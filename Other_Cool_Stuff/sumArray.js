let anArray = [1, 2, 3, 4];
let secondArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let thirdArray = [1, 2, "5", "a", false, null];

let numParser = (array) => {
    for (const iterator of array) {
        if (typeof (iterator) != "number") {
            return console.log("The contents can't be summed");
        }
    }
    return sumArrays(array);
}

let sumArrays = (array) => {
    let total = 0;
    array.forEach(element => {
        total += element;
    });
    return console.log(total);
}

numParser(anArray);
