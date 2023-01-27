
//Q01
/*
let idade = Number(prompt("Digite um numero:"));

if (idade >= 18) {
    console.log("Pode dirigir!");
} else {
    console.log("Não pode dirigir");
} 
*/

//Q02
/*
let idade = Number(prompt("Digite sua idade:"));
let cnh = prompt("Possui CNH? S | N");

if (idade >= 18 && cnh.toUpperCase() == "S") {
    document.write("Pode dirigir!");
} else {
    document.write("Não pode dirigir");
}
*/

//Q03
/*
const numDia = Number(prompt("Digite um valor: "));

if (numDia == 1) {
    console.log("Domingo");
} else if (numDia == 2) {
    console.log("Segunda");
} else if (numDia == 3) {
    console.log("Terça");
} else if (numDia == 4) {
    console.log("Quarta");
} else if (numDia == 5) {
    console.log("Quinta");
} else if (numDia == 6) {
    console.log("Sexta");
} else if (numDia == 7) {
    console.log("Sábado");
} else {
    console.log("Não é um dia da Semana");
}
*/

//Q04
/*
const numDia = Number(prompt("Digite um valor: "));

switch (numDia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Não é um dia da Semana");
}
*/

//Q05
/*
for (let contador = 1; contador <= 10; contador++) {
    if (contador % 2 == 0) {
        console.log(contador);
    }
}
*/

//Q06
/*
let trinta = true;
let contador = 0; //contador infinito
let impar = 0; //qtd de numeros impares

while (trinta) {
    if (contador % 2 != 0) {
        impar++;
        document.write(`${contador}, `);
        console.log(impar);
    }
    contador++;

    if (impar == 30) {
        trinta = false;
    }
}
*/

//Q07
/*
let contador = 10;
let soma = 0;

do {
    soma += contador;
    contador++;
} while (contador <= 100);
document.write(soma);
*/

//Q08
/*
let salario = 1903.98;
if (salario < 1903.98) {
    document.write("ISENTO DE IR");
} else {
    document.write("TRIBUTADO NO IR");
}
*/

//Q09
let valor = Number(prompt('Insira um valor maior que zero: '))
let divValor = 0

for(let i = 1; i <= valor; i++) {

    if (valor % i == 0 && valor / 1 == valor) {
        divValor++
        console.log(valor, i, divValor)
    }
}

if (divValor == 2) {
    document.write(`O número ${valor} é PRIMO!`)
} else {
    document.write(`O número ${valor} NÃO é PRIMO!`)
}