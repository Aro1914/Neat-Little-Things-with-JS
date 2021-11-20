let anArray = [1, 2, 3, 4, 5];
let secondArray = ["a", "b", "c", "d", "e"];

let reversePrint = (array) => {
    let index = array.length - 1;
    array.forEach(element => {
        console.log(array[index]);
        index--;
    });
}

reversePrint(anArray);