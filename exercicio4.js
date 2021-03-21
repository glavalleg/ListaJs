/* Peça ao usuário para digitar 5 números em uma caixa de texto,
separados por vírgula, Verifique qual é o maior número e exiba-o.
 */

function ChecarMaior(number) {
  let num = number.split(",");
  return Math.max.apply(null, num);

}

let number = prompt("Digite numeros separadas por vírgula",0);
console.log(calcularMaior(number));