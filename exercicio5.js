/* Peça ao usuário para digitar várias idades separadas por vírgula
em um input e exiba quantas pessoas são maior de idade (18
anos) e quantas são menores.

 */

function ChecarAdultos(age) {
  let adultos = 0
  let ages = age.split(",");
  ages.forEach(i => {
    if(i>=18)
    adultos++
  });
  return adultos
}

let age = prompt("Digite idades separadas por vírgula",0);
console.log(ChecarAdultos(age));