/*Crie uma função para validar um CPF. A função deverá receber um número como
input e retornar se este número é um CPF válido. Para este número ser considerado
válido ele deve ter 11 dígitos e a soma dos seus dígitos não poderá ser maior que
80.
*/
let validaCpf = (cpf) => {
  let digitos = cpf.length
  let numeros = cpf.split("");
  let soma =0;
  for (let i=0;i<numeros.length;i++) {
      soma = soma + Number(numeros[i]);
    }
    console.log(soma)
    return soma <= 80 && digitos ===11

}
cpf = prompt("Entre com seu cpf",0);
console.log(validaCpf(cpf) )
