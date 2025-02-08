let rows = 4;
let columns = 4;

for (let i = 0; i < rows; i++) {
    let line = '';

    for (let j = 0; j < columns; j++) {
        if (i % 2 == 0) {
            line += 'X ';
        } else {
            line += 'O ';
        }
    }
    console.log(line);
}