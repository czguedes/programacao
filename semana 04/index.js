function arrumarQuarto() {
    //corpo da função
    console.log('Arrumar a cama');
    console.log('Varrer o quarto');
    console.log('Limpar a mesa');
}

//chamada da função
arrumarQuarto()

console.log('-----------------------');

function fazerComida(comida) {
    //se for bife
    console.log('picar carne');
    console.log('picar cebola e alho');
    console.log('refogar cebola e alho');
    console.log('juntar carne e fritar');
}

fazerComida('bife acebolado')

console.log('-----------------------------');


function irAoMercado(dinheiro, produto) {
    console.log('ir ao mercado a pé');
    console.log(`ir até a prateleira pra comprar ${produto}`);
    console.log(`pagar o ${produto} com o ${dinheiro}`);
    return produto
}

const retornoMercado = irAoMercado(7.50, 'queijo')
console.log(retornoMercado);

/////////////// ARRAYS //////////////////////

//conhecido como vetor ou lista;
//tipo de dado; recebe dados primitivos;
//uma lista pode ser vazia (let variavel = [];) ou ter elementos;
//cada elemento de uma lista recebe um número de índice, que sempre inicia em 0



const growdevers = [] //sintaxe de um array ==> let variavel = [elemento1, elemento2]

growdevers.push('Caio', 'Sheila', 'Layla') //.push adiciona um elemento no fim da fila

console.log(growdevers[2]); // nesse caso retorna 'Layla', pois está no index 2

growdevers[1] = 'Abner' // substitui o elemento da posição 1 ('Sheila') por 'Abner'

growdevers.unshift('Pedro') // .unshift adiciona um elemento no início da fila

growdevers.pop() // .pop remove o último elemento de uma lista

growdevers.shift() // .shift remove o primeiro elemento de uma lista