const myFizzBuzz = require('./myFizzBuzz');

describe('testa a função myFizzBuzz', () => {
  it('Testa valores de saida com diferentes parametros recebidos', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(1)).toBe(1);
    expect(myFizzBuzz('2')).toBe(false);
  });
});