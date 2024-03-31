// Função para completar a sequência a)
function proximoElementoA() {
  let ultimoNumero = 7; // Último número conhecido da sequência
  return ultimoNumero + 2; // A sequência aumenta de 2 em 2
}

// Função para completar a sequência b)
function proximoElementoB() {
  let ultimoNumero = 64; // Último número conhecido da sequência
  return ultimoNumero * 2; // Cada número é o dobro do anterior
}

// Função para completar a sequência c)
function proximoElementoC() {
  let ultimoNumero = 36; // Último número conhecido da sequência
  return Math.pow(Math.sqrt(ultimoNumero) + 1, 2); // O próximo número é o quadrado do próximo número natural
}

// Função para completar a sequência d)
function proximoElementoD() {
  let ultimoNumero = 64; // Último número conhecido da sequência
  let proximoNumeroPar = Math.sqrt(ultimoNumero) + 2; // Próximo número par
  return Math.pow(proximoNumeroPar, 2); // O próximo número é o quadrado do próximo número par
}

// Função para completar a sequência e)
function proximoElementoE() {
  let numeros = [1, 1, 2, 3, 5, 8]; // Últimos números conhecidos da sequência de Fibonacci
  return numeros[numeros.length - 1] + numeros[numeros.length - 2]; // O próximo número é a soma dos dois números anteriores
}

// As sequências f) a resposta seria 200, pois são apenas numeros que começam com "D"

// Testando as funções
console.log("Próximo elemento de a):", proximoElementoA());
console.log("Próximo elemento de b):", proximoElementoB());
console.log("Próximo elemento de c):", proximoElementoC());
console.log("Próximo elemento de d):", proximoElementoD());
console.log("Próximo elemento de e):", proximoElementoE());
