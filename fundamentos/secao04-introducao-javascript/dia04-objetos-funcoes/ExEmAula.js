//=========================OBJETOS====================================================
//Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:
let player = {
  name : 'Marta',
  lastName: 'Silva',
  age : 34,
  medals: { golden: 2, silver: 3 },
}

console.log("A jogadora " + player['name'] + ' ' + player['lastName'] + ' tem ' + player['age'] + ' de idade. ');
player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
//------------------------------------------------------------------------------------
console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' foi eleita a melhor do mundo por ' + 
player['bestInTheWorld'].length + " vezes.");
//------------------------------------------------------------------------------------
console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + 
' medalhas de prata.')

//===========================FOR/IN E FOR/OF==========================================
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for(let key in names){
  console.log('Olá ' + names[key]);
};
//------------------------------------------------------------------------------------
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for(let key in car) {
  console.log(key, car[key]);
};
//===========================FUNÇÕES================================================
//Função Adição (a + b)
function adicao(a, b){
  return a + b;
};

function subtracao(a, b){
  return a - b;
};

function mult(a, b){
  return a * b;
};

function div(a, b){
  return a / b;
};

function mod(a, b){
  return a % b;
};

console.log(adicao(5, 7));
console.log(subtracao(5, 7));
console.log(mult(5, 7));
console.log(div(5, 7));
console.log(mod(5, 7));

//-------------------Faça um programa que retorne o maior de dois números.--------------
function maiorNmrdouble(nmrA, nmrB){
  if(nmrA > nmrB){
    return 'O primeiro numero é maior que o segundo';
  }
  else{
    return 'O segundo numero é maior que o primeiro';
  }
}
console.log(maiorNmr(10, 15));

//-------------------Faça um programa que retorne o maior de três números.--------------
function maiorNmrTriple(nmrA, nmrB, nmrC){
  if(nmrA > nmrB && nmrA > nmrC){
    return 'O primeiro numero é maior';
  }
  else if(nmrB > nmrA && nmrB > nmrC){
    return 'O segundo numero é maior';
  }
  else{
    return 'O terceiro numero é o maior';
  }
}
console.log(maiorNmrTriple(20, 10, 15));

/*Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” 
se esse valor for positivo, “negative” se for negativo, e caso não seja 
nem positivo e nem negativo retorne “zero”.*/
function typeOfNumber(number){
  if(number > 0){
    return 'Positive'
  }
  else if(number < 0){
    return 'Negative';
  }
  else {
    return 'Zero';
  }
};
console.log(typeOfNumber(5));

/*Faça um programa que receba três constantes com os valores dos três ângulos internos de 
um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, 
caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.*/
function triangle(fNmbr, sNmbr, tNmbr){
  if(fNmbr > 0 && sNmbr > 0 && tNmbr > 0){

    if(fNmbr + sNmbr + tNmbr === 180){
     return true;
    }
    else{
      return false;
    }
  }

  else{
    return 'Error';
  }
}
console.log(triangle(60, 60, 60));