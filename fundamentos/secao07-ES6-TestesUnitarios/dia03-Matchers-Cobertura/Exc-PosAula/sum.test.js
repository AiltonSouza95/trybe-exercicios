const sum = require('./sum');

describe('teste calculadora', () => {
    it('Teste se o retorno de sum(4, 5) é 9', () => {
        expect(sum(4 ,5)).toBe(9);
        expect(sum(0, 0)).toBe(0);
    });

    it('informa mensagem de erro se receber parametro invalido', () => {
        expect(() => sum(4, '5')).toThrowError();
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
    })
})