let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let comp = 9999;

for(i = 0; i < numbers.length; i+=1){
        if (numbers[i] < comp){
            comp = numbers[i];
        }
    }
console.log(comp);