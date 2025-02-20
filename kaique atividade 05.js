/***************************************************** 
                Lista de Exercícios 04
*****************************************************/
// 1. Crie uma função que receba como parâmetro o ano de nascimento de uma pessoa e retorne sua idadade
// 2, Crie uma função que receba a quantidade de combustível de um carro e retorne quantos Kms ele pode viajar com esse combustível. considere que o veículo faz uma média de 12 Kms/L.

console.log("-----------------atividade01--------------");
function nascimento(nome, ano) {
    let idade = 2025 - ano;
    console.log("O", nome, "nasceu no ano", ano, "e tem", idade, "anos");
}
nascimento("kaique", "2009");

console.log("-----------------atividade01--------------");
const combustível = (litros) => {
    return litros * 12;
};
var car1 = 20
var car2 = 8
var car3 = 2 
console.log("Carro 1: ",car1, "->", combustível(car1),"Kms,")
console.log("Carro 2: ",car2, "->", combustível(car2),"Kms,")
console.log("Carro 3: ",car3, "->", combustível(car3),"Kms,")