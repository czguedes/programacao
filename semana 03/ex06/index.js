//Q01
/*
let saida = true
let somaIdades = 0
let index = 0
saida = true


while (saida) {
    let idadeAlunos = Number(prompt('Digite sua idade: '))

    if(idadeAlunos !== 999) {
        somaIdades += idadeAlunos
        index++
    } else {
        saida = false
    }
}

console.log(`A média da idade da turma com ${index} alunos é ${somaIdades/index}`);
*/

//Q02
/*
let salH = 0
let salM = 0

let saida = true

while (saida) {
    
    let salario = Number(prompt('Digite o salário: '))
    let sexo = Number(prompt('Sexo: 0 - Homem; 1 - Mulher'))
    
    if(sexo === 0) {
        salH += salario
    } else if (sexo === 1) {
        salM += salario
    } else {
        alert('Entrada Inválida')
    }

    let exit = confirm('Deseja adicionar mais uma entrada?')

    if(exit) {
        continue
    } else {
        saida = false
    }
}

console.log(`
Salário pago aos homens: R$${salH}
Salário pago às mulheres: R$${salM}
`);
*/

//Q03
/*
let valorInicial = Number(prompt('Digite o valor inicial: '))
let valorFinal = Number(prompt('Digite o valor final: '))
let inc = Number(prompt('Digite o valor do incremento: '))
let contagem = ''


for(i = valorInicial; i <= valorFinal; i += inc){
    contagem += ` ${i} `
}

console.log(contagem, 'ACABOU!')
*/

//Q04
/*
let nome = prompt('Qual o nome?')
let sexo = Number(prompt('Qual o sexo? 0 - Masculino; 1 - Feminino'))
let valor = Number(prompt('Valor da compra: '))

if(sexo === 0) {
    console.log(`
    Sr.${nome} 
    Valor da compra: R$${valor} 
    Valor com desconto: R$${valor * 0.95}
    `)
} else if(sexo === 1) {
    console.log(`
    Sra.${nome} 
    Valor da compra: R$${valor} 
    Valor com desconto: R$${valor * 0.87} 
    Parabéns!!!
    `)
} else {
    console.log('Cadê o desconto dos não-bináries?!');
}
*/

//Q05
/*
let viagem = Number(prompt('Qual a distância da sua viagem?'))

if(viagem <= 200 && viagem > 0) {
    console.log(`Sua viagem de ${viagem}km ficará por R$${viagem * 0.50}`);
} else {
    console.log(`Sua viagem de ${viagem}km ficará por R$${viagem * 0.45}`);
}
*/

//Q06
/*
let largura = Number(prompt('Qual a largura do seu terreno?'))
let comprimento = Number(prompt('Qual o comprimento do seu terreno?'))

let area = largura * comprimento

if(area < 100 && area > 0) {
    console.log(`Seu terreno de ${area}m² configura-se como TERRENO POPULAR`)
} else if(area >= 100 && area < 500) {
    console.log(`Seu terreno de ${area}m² configura-se como TERRENO MASTER`)
} else {
    console.log(`Seu terreno de ${area}m² configura-se como TERRENO VIP`)
}
*/