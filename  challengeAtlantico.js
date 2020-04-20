/* 
Dado uma string que contém somente caracteres '(', ')', '{', '}', '[' e ']', é necessário saber se é uma string válida.

Uma string será válida se:

Abertura de parenteses, chaves, colchetes são fechadas pelo mesmo tipo de caracter.
Abertura e fechadura são realizadas na ordem correta.
Uma string vázia também é considerada válida. 
*/

//Passe sua entreda como parametro para a função dentro do console.log abaixo:
console.log(challenge(""));

//A função salva a entrada na variavel memoria e faz as devidas comparações com as aberturaPadrao e fechamentoPadrao para entregar se é true ou false.
function challenge(entrada) {
  const memoria = [];
  const aberturaPadrao = ["(", "{", "["];
  const fechamentoPadrao = [")", "}", "]"];

  for (let i = 0; i < entrada.length; i++) {
    const ent = entrada[i];

    if (aberturaPadrao.includes(ent)) {
      memoria.push(ent);
    } else if (fechamentoPadrao.includes(ent)) {
      let indexFechamento = fechamentoPadrao.indexOf(ent);
      let aberturaFechamento = aberturaPadrao[indexFechamento];

      // Verifica se o ultimo elemento da memória é a abertura correta do fechamento
      if (memoria[memoria.length - 1] === aberturaFechamento) {
        memoria.pop();
      } else {
        return false;
      }
    }
  }

  return memoria.length === 0;
}
