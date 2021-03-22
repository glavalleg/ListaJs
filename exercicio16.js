/*Escreva um bloco de código que irá perguntar através do prompt a identificação do
visitante:
a) Se o visitante digitar “Admin” abra um prompt perguntando a senha. Se o
input for vazio ou apertar Esc exiba um alerta com “Cancelado”, se for uma
outra string exiba um alerta com a mensagem “Não conheço você”.
b) A senha deverá ser checada da seguinte maneira:
i) Se for igual a “UniBH” - exiba um alerta “Bem vindo”,
ii) Se for uma outra string - exiba um alerta “Senha incorreta!”)
iii) Se for vazio ou cancelado - exiba “Cancelado”
*/
let identificacao = prompt("Digite a identificação",null)
if(identificacao == "Admin"){
  let senha = prompt("Digite a senha")
  if (senha === "UniBH") alert("Bem vindo!");
  else if (!senha) alert("Cancelado");
        else alert("Senha incorreta!");
} else if (!identificacao) {
  alert("Cancelado");
} else {
  alert("Não conheço você");
}
