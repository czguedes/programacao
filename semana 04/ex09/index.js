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

    const lista = [63, 38, 10, 77, 14, 59, 85, 51, 95, 76, 24, 46, 82, 68, 67, 18, 72, 84, 98, 97]

    let soma = 0
    
    for (let index = 0; index <= 19; index++) {
        
        soma += lista[index]
               
    }

    console.log(`A soma de todos os números é ${soma}`);
}

function questao03(){
    const lista = []
    
    let soma = 0
    
    for (let index = 2; lista.length < 4; index++) {
        
        for (let i = 1; i < index; i++) {
            
            if(index % i === 0){
                soma += i
            }
            
        }
        
        if(soma === index){
            lista.push(index)
        }
        
        soma = 0
    }

    console.log(lista);

}

function questao04(){

    const lista1 = [13, 97, 24, 33, 29, 38, 45, 48, 37, 31]
    const lista2 = [58, 58, 87, 97, 20, 30, 53, 85, 1, 46]

    function juntaLista (lista1, lista2){

        const listaConcat = lista1.concat(lista2)
        
        return listaConcat
    }
    console.log(lista1, lista2);
    console.log(juntaLista(lista1, lista2));
}

function questao05(){

    const listaCompleta = [63, 38, 10, 77, 14, 59, 85, 51, 95, 76, 24, 46, 82, 68, 67, 18, 72, 84, 98, 97]
    
    let numEntrada = Number(prompt('Digite um número de 1 a 100 e direi se ele é premiado!'))

    function estaPresente(numEntrada) {

        for (let index = 0; index < listaCompleta.length; index++) {
            
            if(numEntrada === listaCompleta[index]){
                return true
            }
            
            return false
            
        }
    }

    console.log(estaPresente(numEntrada))
}

function questao06(){

    const nomesLista = []

    do {
        
        let nomes = prompt('Digite um nome: ')
        nomesLista.push(nomes)

    } while (nomesLista.length < 5)

    console.log(nomesLista)
    console.log(nomesLista.reverse())
}