// Condicional simples com IF

var anoNascimento = 2003;
if(anoNascimento>2003){
    console.log("A pessoa nasceu depois de 2003");
}
if(anoNascimento < 2003){
    console.log("A pessoa nasceu antes de 2003");
}
if(anoNascimento == 2003){
    console.log("A pessoa nasceu em 2003.")
}

// Condições simples com If-Else
var anoNascimento =2005;
if(anoNascimento > 2000) { 
    console.log("A pessoa nasceu depois de 2000.");
} else {
    console.log("A pessoa nasceu em 2000 ou antes.");
}

// Condições compostas com If
const login = "admin"
const senha = "12345"

var loginUser = "admin";
var senhaUser = "12345";

if(loginUser == login && senhaUser == senha) {
    console.log("Acesso permitido!");
}else { 
    console.log("Acesso negado!");
}

//Desvio condicional aninhado - IF-ELSEIF-ELSE
var semaforo = "vermelho";
if(semaforo == "verde"){
    console.log("Siga")
}else if(semaforo == "amarelo"){
    console.log("Atençao");
}else {
    console.log("Pare");
} 

// Desvio condicional IF com bloco de comandos 
var idade = 18

if (idade <=18){
    console.log("Entreu no if ...");
    idade++;
console.log("Incrementei a idade...");
console.log("A nova idade é", idade);
console.log("Agora estou saindo do bloco if");
}
console.log("Terminei");


// Criando variáveis locais com "let" (Só existe dentro do bloco onde foram tiradas)
var mes = "Agosto"
var dia = 15;

if( dia == 15 && mes == "Agosto"){
    let mensagem = "Hoje é dia 15 de Agosto";
    console.log(mensagem);
}
console.log("Tentando acessar a variável local fora do bloco, vai dar erro!");
//console.log(mensagem);

// Criando uma função com desvio condicional IF
const desconto = (valorCompra) =>{
let desconto = 0;

    if (valorCompra >= 1000) {
        desconto = (valorCompra * 12) / 100;
}

return desconto;
};

var totalCompra = 950;
console.log("Valor total da compra: R$",totalCompra,";;; desconto R$", desconto(totalCompra));
var totalCompra = 950;
console.log("Valor total da compra: R$",totalCompra,";;; desconto R$", desconto(totalCompra));


// Desvio  condicional If inline (ternario)
// condição ? expressão_se_verdadeiro : expressão_se_falso
var preco = 500;
var resultado = preco <= 100 ? "Ta barato!" : "vish, ta muito caro!";
// O operador acima é o mesmo que escrever:
// if(preço <=100){
//  resultado = "ta barato!"
// else{
//  resultado = "vish, ta muito caro!"
// }
console.log("Preço: R$", preco, "-", resultado);

//Desvio condicional - Switch Case 
console.log("-------------------switch Case----------------------");
switch (1){ 
    case 1:
        console.log("O usuario digitou o número 1!");
    break;

default:
  console.log("O usuario informou um numero diferente de 1!");
  break;
}

console.log("-----------------------------------------");
//Menu de seleção 
var menuSelecionado = "Home";

switch (menuSelecionado) {
  case "Home":
    console.log("Você clicou no link 'home'!");
    break;
 case "Quem somos":
  console.log("Você clicou no link 'Quem somos'");
  break;
  case "Contato":
    console.log("Você clicou no link 'Contato'");
    break;

  default:
    console.log("Opçao inválida de menu");
    break;
}

// Varias opções com mesmo case - Switch Case
var mes = 15;

switch (mes) { 
 case 1: 
 case 2:
 case 3:
    console.log("primeiro trimestre");
    break;

 case 4: 
 case 5:
 case 6:
    console.log("Segundo trimestre");
    break;

case 7: 
case 8:
case 9:
    console.log("Terceiro trimestre");
    break;

case 10: 
case 11:
case 12:
    console.log("Quarto trimestre");
    break;

default: 
 console.log("Mês inválido")
 break;
}