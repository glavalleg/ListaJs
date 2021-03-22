/* Escreva um if para checar se o valor de um produto NÃO está entre 100 e 200 de
forma inclusiva. Faça duas maneiras para isto, uma usando o NOT (!) e outra sem
utilizá-lo.
*/
const price = 99;

if (!(price >= 100) || !(price <= 200)) {
  console.log("Sem promocao!!");
}

if (price < 100 || price > 200) {
  console.log("Sem promocao!!");
}