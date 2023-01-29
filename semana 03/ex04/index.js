/*Q01*/

// const alturas = [1.70, 1.85, 1.35, 1.24, 1.55, 1.76, 1.90, 1.42, 1.33, 1.50, 1.41, 1.37, 1.72, 1.79, 1.67];

// let index = 0;
// let maiorAltura = alturas[index];
// let menorAltura = alturas[index]

// while (index < 15) {
//     if (alturas[index] > maiorAltura) {
//         maiorAltura = alturas[index]
//     }
//     if (alturas[index] < menorAltura) {
//         menorAltura = alturas[index]
//     }
//     index++
// }

// console.log(`A menor altura do grupo é ${menorAltura}m e a maior é ${maiorAltura}m.`)

console.log('-------------FIM------------------')

/*Q02*/
// let alturaPedro = 1.50
// let alturaLucas = 1.10
// let anos = 0

// while (alturaLucas < alturaPedro) {
//     alturaLucas += 0.03
//     alturaPedro += 0.02
//     anos++
//     // console.log(`Altura de Pedro: ${alturaPedro.toFixed(2)}m; altura de Lucas: ${alturaLucas.toFixed(2)}m; Ano ${anos};`)
// }

// console.log(`Foram ${anos - 1} anos até Lucas e Pedro terem a mesma altura e ${anos} anos até Lucas ser maior que Pedro.`)

console.log('-------------FIM------------------')

/*Q03*/
// let multValor = Number(prompt('Digite o valor da tabuada:'))
// let iteracao = Number(prompt('Digite o intervalo final para a tabuada:'))


// for(let index = 0; index <= iteracao; index++){
//     console.log(`${index} * ${multValor} = ${index * multValor}`)

// }
console.log('-------------FIM------------------')

/*Q04*/

// let contador = 1
// let mult3 = 0
// let mult5 = 0

// while (contador <= 250) {
//     if (contador % 3 == 0) {
//         mult3++
//     }
//     if (contador % 5 == 0) {
//         mult5++
//     }
//     contador++
// }
// console.log(`No intervalo de 1 a 250 existem ${mult3} múltiplos de 3 e ${mult5} múltiplos de 5.`)

console.log('-------------FIM------------------')

/*Q05*/
// const valorFinal = Number(prompt(`Insira um valor:`))

// for (let index = 0; index <= valorFinal; index++) {
//     console.log(`${index}`)
    
// }

console.log('-------------FIM------------------')

/*Q06*/
let divisor

for(let i = 30; i >= 1; i--) { //conta de 30 a 1

    for(let cont = 30; cont >= 1; cont--) { //conta de 30 a 1
        
        if(i % cont === 0) { //divide o n externo pelo interno
            divisor++ //soma +1 no divisor
        }
    }
    
    if(divisor === 2) { //define se é primo ou não
        console.log(`[${i}]`);
    } else {
        console.log(`${i}`);
        divisor = 0 //reseta o divisor
    }
}

console.log('-------------FIM------------------')

/*Q07*/
let soma = 0
let numEscritos = ""
let numPositivo = 0
let numNegativo = 0

for(i = 0; i < 10; i++) {
    let numDigitado = Number(prompt('Digite um valor: '))
    soma += numDigitado
    numEscritos += ` ${numDigitado}`
    
    if(numDigitado > 0) {
        numPositivo++
    }
    if(numDigitado < 0){
        numNegativo++
    }
}
let media = (soma / 10).toFixed(2)
let xPositivos = (numPositivo / 10) * 100
let xNegativos = (numNegativo / 10) * 100

document.write(`
    Números Digitados: ${numEscritos} <br>
    Média: ${media} <br>
    Qte. números positivos: ${numPositivo}; % positivos: ${xPositivos} <br>
    Qte. números negativos: ${numNegativo}; % negativos: ${xNegativos}
`)

console.log('-------------FIM------------------')