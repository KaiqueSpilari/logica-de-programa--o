//**********************************************************
                    // Lista de exercícios 06
// ********************************************************* /
/*
 Criar uma função que receba o nome e a idade de uma pessoa e retorne uma mensagem informando se ela pode votar no Brasil.

 Regras para votação no Brasil:
 Menores de 16 anos: Não podem votar.
 Entre 16 e 17 anos ou acima de 70 anos: O voto é facultativo.
 Entre 18 e 70 anos: O voto é obrigatório.
*/
console.log("-----------------atividade01----------------");
var idade = 16;
var nome = "larissa"
var votação = idade >= 16 ? "nao pode votar" : "pode votar";
console.log("idade:", idade, "-", votação);

var idade = 70;
var nome = "ana"
var votação = idade <= 70 ? "pode votar" : "nao pode votar";
console.log("idade:", idade, "-", votação);

var idade = 18;
var nome = "manuela"
var votação = idade <= 18 ? "pode votar" : "nao pode votar";
console.log("idade:", idade, "-", votação);

// Correção do Gustavo 

const podeVotar = (idade) => { //isso é uma função 
if (idade < 16){
    return "Não pode votar";
 }else if(idade >=18 && idade < 70) {
    return "Você pode votar!"
 }else {
    return "Seu voto é facultativo!";
 }
var nome = ["Ygona", "lucas", "Fernanda", "Batata", "Cristinne"];
console.log("Olá", nome[0], "você tem 16 anos e", podeVotar(16));
console.log("Olá", nome[1], "você tem 22 anos e", podeVotar(16));
console.log("Olá", nome[2], "você tem 70 anos e", podeVotar(16));
console.log("Olá", nome[3], "você tem 12 anos e", podeVotar(16));
console.log("Olá", nome[4], "você tem 67 anos e", podeVotar(16));
};

console.log("Olá", nome[0])