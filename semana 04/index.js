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
