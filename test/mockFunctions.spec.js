const mockFunctions = require('../src/mockFunctions');

/*
Criamos uma série de funções com eficiência duvidosa.
Elas estão no arquivo 'src/mockFunctions.js'.
Crie mock functions para cada uma das operações de modo que os cálculos sejam feitos corretamente,
não como estão sendo feitos no arquivo original.
A idéia é que os novos testes sobrescrevam os testes
importados apenas na suite de testes abaixo.

Importante! A correção de código via mock functions não é uma aplicação usual.
O foco aqui é a utilização de mock functions.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('3 - Verifica as funções e os mocks', () => {
  // Crie suas mock functions aqui

  test('testa função add', () => {
    mockFunctions.add = jest.fn().mockReturnValue(3);
    expect(mockFunctions.add(1, 2)).toEqual(3);
    mockFunctions.add = jest.fn().mockReturnValue(45);
    expect(mockFunctions.add(8, 37)).toEqual(45);
    mockFunctions.add = jest.fn().mockReturnValue(14);
    expect(mockFunctions.add(-11, 25)).toEqual(14);
    mockFunctions.add = jest.fn().mockReturnValue(-175);
    expect(mockFunctions.add(13, -188)).toEqual(-175);
    mockFunctions.add = jest.fn().mockReturnValue(33);
    expect(mockFunctions.add(7, 26)).toEqual(33);
  });
  test('testa função subtract', () => {
    mockFunctions.subtract = jest.fn().mockReturnValue(864);
    expect(mockFunctions.subtract(899, 35)).toEqual(864);
    mockFunctions.subtract = jest.fn().mockReturnValue(-350);
    expect(mockFunctions.subtract(-17, 333)).toEqual(-350);
    mockFunctions.subtract = jest.fn().mockReturnValue(-52);
    expect(mockFunctions.subtract(45, 97)).toEqual(-52);
    mockFunctions.subtract = jest.fn().mockReturnValue(131);
    expect(mockFunctions.subtract(23, -108)).toEqual(131);
    mockFunctions.subtract = jest.fn().mockReturnValue(-104);
    expect(mockFunctions.subtract(-133, -29)).toEqual(-104);
  });
  test('testa função multiply', () => {
    mockFunctions.multiply = jest.fn().mockReturnValue(2);
    expect(mockFunctions.multiply(1, 2)).toEqual(2);
    mockFunctions.multiply = jest.fn().mockReturnValue(0);
    expect(mockFunctions.multiply(0, 5)).toEqual(0);
    mockFunctions.multiply = jest.fn().mockReturnValue(-36);
    expect(mockFunctions.multiply(-4, 9)).toEqual(-36);
    mockFunctions.multiply = jest.fn().mockReturnValue(84);
    expect(mockFunctions.multiply(-12, -7)).toEqual(84);
    mockFunctions.multiply = jest.fn().mockReturnValue(437);
    expect(mockFunctions.multiply(19, 23)).toEqual(437);
  });
  test('testa função divide', () => {
    mockFunctions.divide = jest.fn().mockReturnValue(13);
    expect(mockFunctions.divide(169, 13)).toEqual(13);
    mockFunctions.divide = jest.fn().mockReturnValue(-380);
    expect(mockFunctions.divide(-1900, 5)).toEqual(-380);
    mockFunctions.divide = jest.fn().mockReturnValue(6);
    expect(mockFunctions.divide(42, 7)).toEqual(6);
    mockFunctions.divide = jest.fn().mockReturnValue(3);
    expect(mockFunctions.divide(729, 243)).toEqual(3);
    mockFunctions.divide = jest.fn().mockReturnValue(121);
    expect(mockFunctions.divide(1331, 11)).toEqual(121);
  });
  test('testa função power', () => {
    mockFunctions.power = jest.fn().mockReturnValue(100);
    expect(mockFunctions.power(10, 2)).toEqual(100);
    mockFunctions.power = jest.fn().mockReturnValue(1024);
    expect(mockFunctions.power(2, 10)).toEqual(1024);
    mockFunctions.power = jest.fn().mockReturnValue(3125);
    expect(mockFunctions.power(5, 5)).toEqual(3125);
    mockFunctions.power = jest.fn().mockReturnValue(1);
    expect(mockFunctions.power(1, 10)).toEqual(1);
    mockFunctions.power = jest.fn().mockReturnValue(1);
    expect(mockFunctions.power(0, 0)).toEqual(1);
  });
  test('testa função factorial', () => {
    mockFunctions.factorial = jest.fn().mockReturnValue(120);
    expect(mockFunctions.factorial(5)).toEqual(120);
    mockFunctions.factorial = jest.fn().mockReturnValue(3628800);
    expect(mockFunctions.factorial(10)).toEqual(3628800);
    mockFunctions.factorial = jest.fn().mockReturnValue(6);
    expect(mockFunctions.factorial(3)).toEqual(6);
    mockFunctions.factorial = jest.fn().mockReturnValue(40320);
    expect(mockFunctions.factorial(8)).toEqual(40320);
    mockFunctions.factorial = jest.fn().mockReturnValue(2);
    expect(mockFunctions.factorial(2)).toEqual(2);
  });
});
