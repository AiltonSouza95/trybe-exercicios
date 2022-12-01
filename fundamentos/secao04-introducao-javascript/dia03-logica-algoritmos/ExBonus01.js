let nmr = 3;

for (line = 0; line < nmr; line += 1) {   
    let char = '';
    for (column = 0; column < nmr; column += 1){
        char = char + "*";
    }
    console.log(char);
}
console.log();