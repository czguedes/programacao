/* 
1. Desenvolva um algoritmo que faça o cálculo do índice de massa
corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário
que digite sua altura, em seguida solicitar que digite seu peso e que
lhe exiba o status. O status vai variar da seguinte forma:
a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
“Você está abaixo da faixa de peso ideal”;
b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
“Você está acima da faixa de peso ideal”;
c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
24,99, o status a ser mostrado será “Você está dentro da faixa
de peso ideal”.

--variaveis

const peso
const altura
const imc = peso/(altura * altura)

--passos

ler peso e altura
calcular imc
mostrar resultado
    imc < 18.5 = “Você está abaixo da faixa de peso ideal”
    imc > 24.9 = “Você está acima da faixa de peso ideal”
    imc >= 18.5 && imc <= 24.9 = “Você está dentro da faixa de peso ideal”
*/

const pesoImc = 85
const altura = 1.83
const imc = pesoImc/(altura**2)

console.log(imc)

if(imc >= 18.5 && imc <= 24.9){
    console.log('Você está dentro da faixa de peso ideal')
} else if(imc < 18.5){
    console.log('Você está abaixo da faixa de peso ideal')
} else if(imc > 24.9){
    console.log('“Você está acima da faixa de peso ideal”')
} else{console.log('Valores Incomuns')}

console.log('FIM DO EXERCÍCIO')

/*
2. Escreva um algoritmo que solicite 2 números e uma operação
matemática. O algoritmo deve realizar o cálculo com os 2 números
digitados conforme a operação informada.

--variaveis
const num1
const num2
const calc = '+', '-', '*', '/'

--passos

receber valores de num 1 e num2
receber valor de calc e resolver
imprimir
*/

const num1 = 10
const num2 = 48
const calc = '/'

if (calc === '+'){
    const soma = num1 + num2
    console.log(soma)
} else if(calc === '-'){
    const sub = num1 - num2
    console.log(sub)
} else if(calc === '*'){
    const mult = num1 * num2
    console.log(mult);
} else if(calc === '/'){
    const div = num1 / num2
    console.log(div);
} else {
    console.log('ERRO')
}

console.log('FIM DO EXERCÍCIO')

/*
3. Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
a conta do usuário deve ser criada já com um saldo positivo. O
usuário precisa informar a quantidade de dinheiro que deseja
retirar, esse valor deve ser um número positivo, múltiplo de 5 e
menor do que o saldo. Cada saque eletrônico cobra uma taxa de
R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
certo com o saque, e se o usuário informar um valor maior que o
saldo deve ser informado ao usuário que o mesmo não tem dinheiro
suficiente em conta para realizar o saque.

OBS: Na verificação se o valor do saque é maior que o saldo deve
ser considerado e também contabilizado o valor da taxa a ser
cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
da taxa do saque não pode ser maior que o saldo disponível.

--variaveis

let saldo
const saque
const taxa = 4.50
const valorSaque = saque % 5
para saque: saldo>0, saque + taxa < saldo e valorSaque = 0
*/

let saldo = 500
const saque = 495
const taxa = 4.50
const valorSaque = saque % 5

if(saque + taxa > saldo) {
    console.log('Saldo insuficiente')
} else if (saque > 0 && valorSaque == 0) {
    console.log ('Saque realizado com sucesso')
    saldo = saldo - (saque + taxa)
    console.log(`Seu novo saldo é de R$${saldo}`)
} else {console.log('Retirada impossível')}

console.log('FIM DO EXERCÍCIO')

/*
4. Faça um algoritmo que leia a idade e peso de um atleta e imprima
a sua categoria, de acordo com a seguinte tabela:

Idade Peso Categoria
Até 12 anos - Infantil
13 a 16 anos Até 40kg Juvenil leve
Acima de 40kg Juvenil pesado
17 a 24 anos Até 45kg Sênior leve
Acima de 45kg até 60kg Sênior médio
Acima de 60kg Sênior pesado
Acima de 24 anos - Veterano

-- variaveis
const peso
const idade

-- passos
ler dados e encaixar numa categoria
    infantil = idade <= 12
    juvenil leve = idade <= 12 && peso <= 40
    juvenil pesado = idade <= 12 && peso > 40
    senior leve = idade <= 24 && peso <= 45
    senior medio = idade <= 24 && peso <= 60
    senior pesado = idade <= 24 && peso > 60
    veterano = idade > 24
mostrar categoria
*/

const peso = 61
const idade = 25

console.log(`Peso informado: ${peso} kg; idade informada: ${idade} anos.`)

if(idade <= 12){
    console.log('Categoria Infantil')
} else if(idade <= 16 && peso <= 40){
    console.log('Categoria Juvenil Leve')
} else if(idade <= 16 && peso > 40){
    console.log('Categoria Juvenil Pesado')
} else if(idade <= 24 && peso <= 45){
    console.log('Categoria Sênior Leve')
} else if(idade <= 24 && peso <= 60){
    console.log('Categoria Sênior Médio')
} else if(idade <= 24 && peso > 60){
    console.log('Categoria Sênior Pesado')
} else{console.log('Categoria Veterano')}

console.log('FIM DO EXERCÍCIO')

/*
5. Escreva um programa que pergunte a velocidade de um carro. Caso
ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
km acima da velocidade permitida.

-- VARIAVEIS

ler variaveis
    const velCarro
    const valorMulta = (velCarro - 80) * 5
conferir a velocidade do carro
    se velCarro > 80, aplicar multa e exibir mensagem
    se velCarro <= 80, normal 
*/

const velCarro = 90
const valorMulta = (velCarro - 80) * 5

console.log(`Velocidade lida: ${velCarro} km/h`)

if(velCarro > 80){
    console.log(`ATENÇÃO! Você foi multado em R$${valorMulta} por estar andando a uma velocidade de ${velCarro} km/h.`)
} else {}

console.log('FIM DO EXERCÍCIO')