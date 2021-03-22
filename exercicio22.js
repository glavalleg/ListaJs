/*Escreva uma função somarValores(). Peça o usuário para digitar um valor no Prompt
armazenando este valor em um array. Faça isso enquanto o usuário entrar com um
valor não numérico ou apertar “Esc” ou “Cancelar”.
Calcule e retorne a soma dos valores deste array de itens.*/


const somarValores = (arr) =>
        arr.reduce((prev, curr) => prev + Number(curr), 0);

let valores = []
while(true){
  const valor = prompt("Entre com um valor");
  if (!valor || isNaN(valor)) break;
  valores.push(valor);
}
alert('Soma: '+ somarValores(valores));