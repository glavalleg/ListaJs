// 23
const pinguim = {
  nome: "Spheniscidae",
  reino: "Animalia",
  filo: "Chordata",
  classe: "Aves",
  ordem: "Sphenisciformes",
  genero: "Aptenodytes",
};

// 24
console.log("Olá, eu sou um pinguim e meu nome é "+ pinguim.nome);

// 25
pinguim.podeVoar = false;

// 26
pinguim.emitirSom = () =>
  console.log("CHIRP CHIRP! É assim que os pinguins se parecem?");

// 27
pinguim.fly = function () {
  if (this.podeVoar) console.log("Eu posso voar!");
  else console.log("Não posso voar!");
};

// 28
pinguim.fly();

// 29
for (let propriedade in pinguim) console.log(propriedade);
console.log();

// 30
for (let propriedade in pinguim) console.log(pinguim[propriedade]);
console.log();