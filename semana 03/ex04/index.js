/*
1. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
programa deverá calcular e mostrar:
a. A menor altura do grupo;
b. A maior altura do grupo;

-ler o dado
-ler um segundo dado
-comparar com o anterior
-se o novo dado for maior/menor que o anterior, substituir
-repetir até terminar os dados
*/

const alturas = [1.70, 1.85, 1.35, 1.24, 1.55, 1.76, 1.90, 1.42, 1.33, 1.50, 1.41, 1.37, 1.72, 1.79, 1.67];

let index = 0;
let maiorAltura = alturas[index];
let menorAltura = alturas[index]

while (index < 15) {
    if (alturas[index] > maiorAltura) {
        maiorAltura = alturas[index]
    }
    if (alturas[index] < menorAltura) {
        menorAltura = alturas[index]
    }
    index++
}

console.log(`A menor altura do grupo é ${menorAltura}m e a maior é ${maiorAltura}m.`)

console.log('-------------FIM------------------')
/*
2. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
Construa um algoritmo que calcule e imprima quantos anos serão
necessários para que:
a. Lucas e Pedro tenham o mesmo tamanho;
b. Lucas seja maior que Pedro.

*/
let alturaPedro = 1.50
let alturaLucas = 1.10
let anos = 0

while (alturaLucas < alturaPedro) {
    alturaLucas += 0.03
    alturaPedro += 0.02
    anos++
    console.log(`Altura de Pedro: ${alturaPedro.toFixed(2)}m; altura de Lucas: ${alturaLucas.toFixed(2)}m; Ano ${anos};`)
}

console.log(`Foram ${anos - 1} anos até Lucas e Pedro terem a mesma altura e ${anos} anos até Lucas ser maior que Pedro.`)

console.log('-------------FIM------------------')

/*
3. Escreva um algoritmo que faça a tabuada de um número e
apresente o resultado de acordo com o modelo a seguir, sabendo
que o multiplicando deverá ser fornecido pelo usuário (n) e a
quantidade de iterações também (i).
1 * 2 = 2
2 * 2 = 4
3 * 2 = 6
...
*/
console.log('-------------FIM------------------')
/*
4. Escreva um algoritmo que percorra os números inteiros entre 1 e 250
e verifique quais números são múltiplos de 3 e quais são múltiplos
de 5.
*/
console.log('-------------FIM------------------')
/*
5. Faça um programa usando a estrutura “for” que leia um número
inteiro positivo e mostre na tela uma contagem de 0 até o valor
digitado:
Ex: Digite um valor: 9
Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!
*/
console.log('-------------FIM------------------')
/*
6. Desenvolva um algoritmo que mostre uma contagem regressiva de
30 até 1, marcando os números que forem primos, exatamente
como mostrado abaixo:
30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...
*/
console.log('-------------FIM------------------')
/*
7. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
média aritmética dos valores lidos, a quantidade de valores
positivos, a quantidade de valores negativos e o percentual de
valores negativos e positivos.
*/
console.log('-------------FIM------------------')