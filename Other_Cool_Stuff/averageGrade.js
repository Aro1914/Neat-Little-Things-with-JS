let scores = [90, 98, 89, 100, 100, 86, 94];

let scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49]

const averageGrade = (array) => {
    let total = Number();
    array.forEach(element => {
        total += element;
    });
    return Math.round(total / array.length);
}

console.log(averageGrade(scores));
console.log(averageGrade(scores2));      