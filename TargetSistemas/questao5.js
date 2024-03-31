// Função para inverter os caracteres de uma string
function inverterString(string) {
  let novaString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    novaString += string[i];
  }
  return novaString;
}

// Exemplo de uso
const minhaString = "Hello, world!";
const stringInvertida = inverterString(minhaString);
console.log("String original:", minhaString);
console.log("String invertida:", stringInvertida);
