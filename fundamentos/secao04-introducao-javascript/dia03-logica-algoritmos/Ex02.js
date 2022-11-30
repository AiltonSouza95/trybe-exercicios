let word = 'tryber';
let reverse = '';

for(index = 0; index < word.length; index += 1){
    reverse = reverse + word[(word.length - 1) - index];
}
console.log(reverse);