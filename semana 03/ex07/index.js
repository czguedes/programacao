
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
/*
let valor = Number(prompt('Insira um valor: '))
let divValor = 0

for(let i = 1; i <= valor; i++) {

    if (valor % i == 0) {
        divValor++
        console.log(valor, i, divValor)
    }
}

if (divValor == 2) {
    document.write(`O número ${valor} é PRIMO!`)
} else {
    document.write(`O número ${valor} NÃO é PRIMO!`)
}
*/

//Q10

/*
let sexo = Number(prompt('Qual seu sexo? 1=Feminino; 2=Masculino'))
let pesoIdeal

if (sexo === 1 || sexo === 2) {
    let altura = Number(prompt('Qual sua altura?'))

    switch (sexo) {
        case 1:
            pesoIdeal = (62.1 * altura) - 44.7
            document.write(`Seu peso ideal é ${pesoIdeal.toFixed(2)} kg`)
            break;
    
        case 2:
            pesoIdeal = (72.7 * altura) - 58
            document.write(`Seu peso ideal é ${pesoIdeal.toFixed(2)} kg`)
            break;
    
        default:
            document.write('Entrada inválida')
            break;
    }    
} else {
    document.write('Entrada inválida')
}
*/

//Q11
/*
let turno = prompt('Em que turno você estuda? M = Matutino, V = Vespertino, N = Noturno')

switch (turno) {
    case 'M':
        document.write('Bom dia!')
        break;
    case 'V':
        document.write('Boa tarde!')
        break;
    case 'N':
        document.write('Boa noite!')
        break;
    default:
        document.write('Valor Inválido')
        break;
}
*/

//Q12
/*
let idade = Number(prompt('Qual sua idade?'))

if(idade < 18 || idade > 67) {
    document.write ('Você não pode doar sangue!')
} else {
    document.write ('Você pode doar sangue!')
}
*/

//Q13
/*
let numero = Number(prompt('Digite um número: '))
let imprime = " "

for(i = 0; i <= numero; i++) {

    if(i % 2 !== 0) {
        imprime += ` ${i} `
    }
}
document.write(imprime)
*/

//Q14
/*
let valor = Number(prompt('Digite um número: '))
let soma = 0

while(soma <= 500) {
    soma += valor * 3
}

console.log(`O último valor foi ${soma - (valor * 3)}.`);
*/

//Q15

/*
let ladoA = Number(prompt('Digite o valor do lado A: '))
let ladoB = Number(prompt('Digite o valor do lado B: '))
let ladoC = Number(prompt('Digite o valor do lado C: '))

let valorAB = ladoA + ladoB
let valorAC = ladoA + ladoC
let valorBC = ladoB + ladoC

if(valorAB > ladoC && valorAC > ladoB && valorBC > ladoA) {
    
    if(ladoA !== ladoB && ladoB !== ladoC){
        console.log(`Os lados formam um triângulo ESCALENO!`)
    } else if(ladoA === ladoB && ladoB === ladoC) {
        console.log(`Os lados formam um triângulo EQUILÁTERO!`)
    } else{
        console.log(`Os lados formam um triângulo ISÓSCELES!`)
    }
    
} else {
    console.log('Os lados não formam um triângulo!')
}

console.log(ladoA, ladoB, ladoC)
*/

//Q16
/*
let anoNasc = Number(prompt('Em qual ano você nasceu?'))
const anoAtual = 2023

if ((anoAtual - anoNasc) >= 16) {
    console.log('Você pode votar esse ano!')
} else {
    console.log('Você ainda não pode votar!');
}
*/

//Q17
/*
let eleitores = Number(prompt('Digite o valor de eleitores: '))
let votosValidos = Number(prompt('Digite o valor de votos válidos: '))
let votosBrancos = Number(prompt('Digite o valor de votos brancos: '))
let votosNulos = Number(prompt('Digite o valor de votos nulos: '))

if ((votosBrancos + votosNulos + votosValidos) <= eleitores) {
    const xValidos = (votosValidos / eleitores) * 100
    const xBrancos = (votosBrancos / eleitores) * 100
    const xNulos = (votosNulos / eleitores) * 100
    console.log(`
        Porcentagem de votos válidos: ${xValidos.toFixed(2)}% <br>
        Porcentagem de votos brancos: ${xBrancos.toFixed(2)}% <br>
        Porcentagem de votos nulos: ${xNulos.toFixed(2)}%
    `)
} else (
    console.log('ERRO')
)
*/

//Q18
/*
let precoTabela = Number(prompt('Valor Produto: '))
let parcelas = Number(prompt('Forma de Pagamento: 0 - A VISTA; 1 - PARCELADO'))
let precoFinal = 0

if(parcelas === 0) {

    precoFinal = 0.975 * precoTabela
    console.log(`Preço Total R$${precoFinal}`)

} else if(parcelas === 1) {

    let numParcelas = Number(prompt('Quantidade de parcelas: '))
    if (numParcelas >= 2 && numParcelas <= 5) {
        
        precoFinal = precoTabela
        console.log(`${numParcelas}x de R$${precoFinal / numParcelas}; total de R$${precoFinal}`)
        
    } else if(numParcelas >= 6 && numParcelas <= 10) {
        
        precoFinal = 1.06 * precoTabela
        console.log(`${numParcelas}x de R$${precoFinal / numParcelas}; total de R$${precoFinal}`)

    } else if(numParcelas >= 11 && numParcelas <=15) {

        precoFinal = 1.13 * precoTabela
        console.log(`${numParcelas}x de R$${precoFinal / numParcelas}; total de R$${precoFinal}`)

    } else {
        console.log('Número de parcelas inválido.')
    }
} else {
    console.log('Forma de pagamento inválida.');
}
*/