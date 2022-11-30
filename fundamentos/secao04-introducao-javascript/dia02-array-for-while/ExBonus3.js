let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arraySec = [];

for (i = 0; i < numbers.length; i += 1) {
  if (i + 1 < numbers.length) {
    arraySec.push(numbers[i] * numbers[i + 1]);
  } 

  else {
    arraySec.push(numbers[i] * 2);
  }
}

console.log(arraySec);