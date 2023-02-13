const {info, printMessage} = require('./printMessage');

describe('funcao printMessage', () => {
    it('verifica se existe a propriedade personagem no objeto', () => {
        expect(info).toHaveProperty('personagem');
    });

    it('teste função printMessage', () => {
        expect(printMessage(info)).toMatch('Boas vindas,');
        expect(printMessage(info)).toMatch(info.personagem);
    });

    it('testa mensagens de erro da funçao printMessage', () => {
        expect(printMessage('Margarida')).toThrow('objeto inválido');
    });
})