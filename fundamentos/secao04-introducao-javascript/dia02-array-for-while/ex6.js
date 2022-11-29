let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let cont = 0;

for (i = 0; i < numbers.length; i += 1){
    if ( numbers[i] % 2 != 0){
        cont = cont + 1;
    }
}

if(cont != 0){
    console.log(cont, 'numeros impares');
}
else{
    console.log('nao existe numeros impares');
}