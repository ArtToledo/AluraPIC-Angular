import { isLowerCase } from './lower-case.validator';

describe('A Função isLowerCase', () => {
  it('deve confirmar quando recebe um texto em caixa baixa', () => {
    const valor = 'mario'; //preparação
    const resultado = isLowerCase(valor); //execução

    expect(resultado).toBeTruthy();
  });

  it('deve validar quando o valor enviado não está em caixa baixa', () => {
    expect(isLowerCase('Mario')).toBeFalsy();
  });
});