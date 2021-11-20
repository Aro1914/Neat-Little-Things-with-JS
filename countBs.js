// The commented block of code below, defines a function that takes in a string and returns the number of times the alphabet B occurs in it.

// let countBs = (input) => {
//     let count = 0;
//     for (const _char of input.toUpperCase()) {
//         if (_char === 'B') {
//             count++;
//         }
//     }
//     console.log(count);
// }

// countBs('Beans and bitter leaf soup');

// The below block of code counts and returns the number of times any character passed as the second argument appears in the first string argument

let countBs = (input, char) => {
    let count = 0;
    for (const _char of String(input).toUpperCase()) {
        if (_char === String(char).toUpperCase()) {
            count++;
        }
    }
    console.log(count);
}

countBs('b1b2b3b4b5b1b2b2b3b3b3', 'b');