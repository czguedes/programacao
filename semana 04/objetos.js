const dados = [
    {
        nome: 'PS5',
        preco: 4500,
        cor: 'branco',
        descricao: 'Video-game',
        categoria: 'Eletrônico',
        disponivel: true
    },// {chave: valor} -> objeto
    {
        nome: 'Televisão - 65 polegadas',
        preco: 3300,
        cor: 'preto',
        descricao: '4k perfeita pra jogar',
        categoria: 'Eletrônico',
        disponivel: true

    },
    {
        nome: 'Bike',
        preco: 1099,
        cor: 'branco',
        descricao: 'Perfeita para pedalada',
        categoria: 'Esporte',
        disponivel: false

    },
    {
        nome: 'Telha',
        preco: 200,
        cor: 'esmalte',
        descricao: 'Perfeita para cobrir sua casa',
        categoria: 'Material de construção',
        disponivel: false

    },
    {
        nome: 'Caneca Growdev',
        preco: 150,
        cor: 'Branco',
        descricao: 'Sua companheira para codar',
        categoria: 'Utensílio',
        disponivel: true

    }
]

// for(let index = 0; index < dados.length; index++) {
//     if(dados[index].disponivel) { //boolean
//         console.log(dados[index].nome);
//     }
// }


//Na lista dados, para cada elemento(produto) ele vai verificar a função.
dados.forEach(function (produto){ 
    if(!produto.disponivel) {
        console.log(produto);
    }
})

//Uma função .filter retorna um array novo com os elementos filtrados

let precosMaiores = dados.filter (function(produtos){
    return produtos.preco > 1600
})

console.log(precosMaiores)

// .find => busca o primeiro item da lista que atende à condição
// Neste caso está buscando o primeiro item 'telha'

let produtoTelha = dados.find(function(produtos){
    return produtos.nome === 'Telha'
})

console.log(produtoTelha);

// Neste caso o .find vai buscar o primeiro item em que no nome apareça a palavra 'telha' (.includes)
let produtoTelhas = dados.find(function(produtos){
    return produtos.nome.includes('Telha')
})

console.log(produtoTelhas);

//.sort()
//ordena uma lista

const listaNum = [9, 7, 3, 4, 6, 0, 1, 8, 2, 5]

//lista em ordem crescente (n1 - n2)
const listaNumOrd = listaNum.sort(function(n1, n2){
    return n1 - n2
})

console.log(listaNumOrd);

//lista em ordem decrescente (n2-n1)
const listaNumDec = listaNum.sort(function(n1, n2){
    return n2 - n1
})

console.log(listaNumDec);

//para lista de strings, utilizar apenas // .sort() //

