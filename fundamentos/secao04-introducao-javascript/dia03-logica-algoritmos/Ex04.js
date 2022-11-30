let maiorNumeroPrimo =0;
let nmr;

for(index = 2; index < 51; index += 1){
    nmr = true;
    for(indexSec = 2; indexSec < index; indexSec += 1){
        if(index % indexSec === 0){
            primo = false;
        }
    }

    if(nmr){
        maiorNumeroPrimo = index;
    }
}
console.log(maiorNumeroPrimo);