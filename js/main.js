
var nome = "Thiago de Santana Gonçalves";
var idade = 37;
var frase = "O Japão é o melhor time do mundo!"

alert("Bem vindo " + nome);

console.log("sua idade é " + idade);
console.log(frase.replace("Japão", "Brasil"));

var lista = ["abacate", "banana", "carambola"];

console.log(lista[0]);
console.log(lista.toString());

lista.push("uva");
console.log(lista.toString());

lista.pop(); //retira o ultimo
console.log(lista.toString());
console.log(lista[1].toString());
console.log(lista.join(" - ").toString());

var fruta = {nome: "maçã", cor: "vermelha"};

console.log(fruta);