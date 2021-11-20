// let size = 3;
// let farmInventory = (cows, chicken, pigs) => {
//     while (String(cows).length < size || String(chicken).length < size || String(pigs).length < size) {
//         if (String(cows).length < size)
//             cows = '0' + cows;
//         if (String(chicken).length < size)
//             chicken = '0' + chicken;
//         if (String(pigs).length < size)
//             pigs = '0' + pigs;
//     }
//     console.log(`${cows} cows\n${chicken} chicken\n${pigs} pigs`);
// }

// farmInventory(5, 444, 7);

// A better version of how to do the above block of code

function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(5, 444, 7);
