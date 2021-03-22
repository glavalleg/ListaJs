/*Peça ao usuário para digitar vários nomes. Exiba na tela todos os
nomes digitados, porém de maneira invertida (do último para o
  primeiro).
  */

function imprimirNomes(nome) {
  
  let nomes = nome.split(",");
  console.log(nomes.reverse())

}

let nome = prompt("Digite nomes separadas por vírgula",0);
console.log(imprimirNomes(nome));