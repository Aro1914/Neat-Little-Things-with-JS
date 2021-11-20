
for (let index = 1, x = 1; index <= 7; index++, x++) {
    let data = '';
    for (let redex = 7; redex >= index; redex--) {
        data += ' ';
    }
    for (let dedex = 1; dedex <= index; dedex++) {
        data += '#';
    }
    for (let cedex = 1; cedex < index; cedex++) {
        data += '#';
    } 
    console.log(data);
}
