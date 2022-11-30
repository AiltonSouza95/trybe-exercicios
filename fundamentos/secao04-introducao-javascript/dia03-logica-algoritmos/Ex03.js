let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPlavra = '';
let menorPalavra = 'qwertyuiopasdfghjklç';

for(index = 0; index < array.length; index += 1){
    if(array[index].length > maiorPlavra.length){
        maiorPlavra = array[index];
    }
}
console.log("maior palavra:", maiorPlavra);

for(index = 0; index < array.length; index += 1){
    if(array[index].length < menorPalavra.length){
        menorPalavra = array[index];
    }
}
console.log("menor palavra:", menorPalavra);