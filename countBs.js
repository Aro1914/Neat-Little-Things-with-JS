// let countBs = (input) => {
//     let count = 0;
//     for (const _char of input) {
//         if (_char === 'B') {
//             count++;
//         }
//     }
//     console.log(count);
// }

// countBs('Beans and bitter leaf soup');

let countBs = (input, char) => {
    let count = 0;
    for (const _char of input) {
        if (_char === char) {
            count++;
        }
    }
    console.log(count);
}

countBs('Beans and bitter leaf soup', ' ');