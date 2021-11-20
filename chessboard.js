let board = ''
for (let index = 1; index <= 8; index++) {
    if (index % 2 == 0) {
        for (let x = 1; x <= 4; x++) {
            board += '# ';
            if (x == 4) {
                board += '\n';
            }
        }
    } else {
        for (let x = 1; x <= 4; x++) {
            board += ' #';
            if (x == 4) {
                board += '\n';
            }
        }
    }
}
console.log(board);