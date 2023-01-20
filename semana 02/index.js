// /*
// Criar um algoritmo para calcular a média de 3 notas e no final fazer as seguintes validações:

// -> Se a média ficar entre 9 e 10 deve ser mostrado no html a mensagem: Aprovado com nota excelente

// -> Se a média ficar entre 7 e 8 (não incluso) deve ser mostrado no html a mensagem: Aprovado com uma nota boa

// -> Se a média ficar abaixo de 7 deve ser solicitado uma outra nota que será a nota de recuperação.
// -> Se a nota de recuperação for maior que 6 deve ser mostrado a mensagem no html: Aprovado na recuperação

// -> Se a nota ficar abaixo de 6 deve ser mostrado a mensagem no html: Reprovado, estude e pratique mais.
// */

// const nota1 = 10;
// const nota2 = 9;
// const nota3 = 10;

// const media = (nota1+nota2+nota3)/3;
// console.log(media);
// if (media>=9) {
//     console.log('Aprovado com nota excelente');
// } else if (media>=7 && media<9) {
//     console.log('Aprovado com boa nota');
// } else {
//     const notaRec = 5;
//     if (notaRec>=6) {
//         console.log('Aprovado em recuperação');
//     } else {
//         console.log('Reprovado, estude mais e pratique.');
//     }
// }

// /*
// --- FAZENDO UMA CALCULADORA
// */

// const numero1 = prompt('Digite o primeiro número')

// if(!numero1 || isNaN(Number(numero1))){
//     alert('Valor inválido')
// } else {
//     const numero2 = prompt('Digite o segundo número')

//     if(!numero2 || isNaN(Number(numero2))){
//         alert('Valor inválido')
//     } else {
//         const resultado = Number(numero1) + Number(numero2)
    
//         console.log(`O resultado é: ${resultado}`)
//     }
// }

const mes = prompt('Informe o número do mês para saber qual é (de 1 a 12).')

switch (mes){
    case '1':{
        console.log('Janeiro')
        break
    }
    case '2': {
        console.log('Fevereiro');
        break
    }
    case '3': {
        console.log('Março');
        break
    }
    case '4': {
        console.log('Abril');
        break
    }
    case '5': {
        console.log('Maio');
        break
    }
    case '6': {
        console.log('Junho');
        break
    }
    case '7': {
        console.log('Julho');
        break
    }
    case '8': {
        console.log('Agosto');
        break
    }
    case '9': {
        console.log('Setembro');
        break
    }
    case '10': {
        console.log('Outubro');
        break
    }
    case '11': {
        console.log('Novembro');
        break
    }
    case '12': {
        console.log('Dezembro');
        break
    }
    default: {
        console.log('Fora do calendário')
    }
}