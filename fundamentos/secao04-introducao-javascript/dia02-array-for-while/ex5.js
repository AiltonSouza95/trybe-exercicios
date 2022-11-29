let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let comp = 0;

for(i = 0; i < numbers.length -1; i+=1){
    for(j = 1; j < numbers.length; j +=1){
        if (numbers[j] > numbers[i]){
            comp = numbers[j];
        }
    }
}
console.log(comp);