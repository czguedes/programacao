const data = [
    {
    nome: 'Roger Medeiros',
    sexo: 'M',
    salario: 3250,
    },
    {
    nome: 'Carolina Silva',
    sexo: 'F',
    salario: 1200,
    },
    {
    nome: 'Cristina Avila',
    sexo: 'F',
    salario: 8100,
    },
    {
    nome: 'Gustavo Hoffman',
    sexo: 'M',
    salario: 5200.35,
    },
    {
    nome: 'Eva Trindade',
    sexo: 'F',
    salario: 2501,
    },
    {
    nome: 'Andre Mathias',
    sexo: 'M',
    salario: 1750,
    },
    {
    nome: 'Joice Castro da Silva',
    
    sexo: 'F',
    salario: 3350.25,
    },
    ];

//1. Imprima no console a quantidade de pessoas Total.

console.log('A quantidade total de pessoas é: ',data.length)

//2. Imprima no console a quantidade de  pessoas do sexo Feminino.

let mulheres = 0

data.filter(function (pessoas){
    if(pessoas.sexo === 'F'){
        mulheres++
    }
})

console.log('O número de funcionárias do sexo feminino é: ',mulheres);

//3. Imprima no console a soma do salário de todas as pessoas.

let somaSalario = 0

data.forEach(element => {
    somaSalario += element.salario
});

console.log('A soma do salário de todos os funcionários é: R$',somaSalario);

//4. Imprima no console a média do salário de todas as pessoas.

console.log(`A média dos salários de todos os funcionários será ${(somaSalario/data.length).toFixed(2)}`);

//5. Imprima no console a soma do salário de todos as pessoas do sexo Masculino

let salarioMasc = 0

data.forEach(function(element) {
    if (element.sexo === 'M'){
        salarioMasc += element.salario
    }
});

console.log('A soma dos salários de todos os funcionários do sexo masculino é R$', salarioMasc);

//6. Imprima no console a média do salário de todas as pessoas do sexo Masculino

const numMasc = data.filter(function (element){
    return element.sexo === 'M'
})

console.log(`A média do salário de todos os funcionários do sexo masculin será `, (salarioMasc/numMasc.length).toFixed(2));

//7. Utilize a função Some, para descobrir se existe algum salário superior a R$ 7.000, imprima verdadeiro no console caso exista, caso contrário falso.

const mais7k = data.some(function (pessoa){
    return pessoa.salario > 7000 ? true : false
})

console.log(mais7k);

//8. Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'.

const achaEva = data.findIndex(function(eva){
    return eva.nome === 'Eva Trindade'
})

console.log('A posição de Eva Trindade é ',achaEva);

//9. Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva".

const filtroSilva = data.filter(function (nomeSilva) {
    return nomeSilva.nome.includes('Silva')
})

console.log(filtroSilva);

//10. Imprima os nomes utilizando o MAP

const nomesFunc = data.map(function (nomes) {
    return nomes.nome
})

console.log(nomesFunc);