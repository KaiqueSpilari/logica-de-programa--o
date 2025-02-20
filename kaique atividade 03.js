/***************************************************** 
              Lista de Exercicios 03 
*****************************************************/ 
//1. Crie um array de frutas com os seguintes elementos: Banana, Maçã, Pera, Uva, Morango.
//2. Adicione uma tangerina no final 
//3. Adicione uma goiaba no inicio
//4. Exiba o conteúdo do indice S.
//5. Exclua o elemento Uva
//6. Crie uma cópia do array apenas com os elementos com indices 2, 3 e 4. 

console.log("-----------------atividade1----------------------")
var frutas = ["Banana","Maça","Pera","Uva","Morango"]
console.table(frutas);
console.log("-------------------atividade2-----------------")
frutas.push("tangerina")
console.table(frutas);
console.log("-------------------------atividade3---------------")
frutas.unshift("Goiaba")
console.table(frutas);
console.log("-----------------atividade4------------------------------")
console.log(frutas[5]);
console.log("-----------------------atividade5------------------")
var posiçao = frutas.indexOf("Uva");
frutas.splice(posiçao, 1);
console.log(frutas);
console.log("--------------------atividade6-----------------")
var copia = frutas.slice(2, 5);
console.table(copia);