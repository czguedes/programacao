function questao01(){
    const lista = [ 55, 4, 15, 56, 99, 61, 47, 60, 81, 19, 8, 54, 38, 68, 23]
    let numPares = ''

    for (let index = 0; index <= 15; index++) {
        
        if (lista[index] % 2 === 0){
            numPares += `${lista[index]}, `
        }
        
    }
    console.log(`São pares: `, numPares);
}

function questao02(){
    const lista = [63, 38, 10, 77, 14, 59, 85, 51,	95,	76, 24,	46,	82,	68,	67, 18,	72,	84,	98,	97]
    let soma = 0

    for (let index = 0; index <= 20; index++) {

        soma += lista[index] 
        console.log(soma);       
    }

    console.log(`A soma de todos os 20 números é ${soma}!`);
}