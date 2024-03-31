function verificaFibonacci(numero) {
  let a = 0;
  let b = 1;
  let temp;

  while (a <= numero) {
    if (a === numero) {
      return `${numero} pertence à sequência de Fibonacci.`;
    }
    temp = a + b;
    a = b;
    b = temp;
  }

  return `${numero} não pertence à sequência de Fibonacci.`;
}

// Exemplo de uso:
const numeroInformado = 22; // Altere este valor para o número desejado
console.log(verificaFibonacci(numeroInformado));
