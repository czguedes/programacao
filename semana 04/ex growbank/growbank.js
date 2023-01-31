/*
Exercício
Crie um algoritmo chamado “Growbank”.
Este algoritmo deve solicitar uma entrada do usuário por meio de um input com as seguintes opções:


Informar o saldo atual do usuário e as seguintes opções:

[Seu saldo é: R$ xxx,xx]

1 - Depósito
2 - Saque
3 - Transferência
0 - Sair



Enquanto o usuário selecionar uma das opções diferentes de 0, o algoritmo deve rodar a instrução selecionada pelo usuário;

[Utilizar Switch-case]

Caso opção 1 seja selecionada:
    Solicitar um valor a ser depositado; (valor maior que zero)
    Incrementar no saldo 
    Retornar para o menu anterior

Caso opção 2 seja selecionada:
    Solicitar um valor a ser sacado; (valor maior que zero e menor que o saldo disponível na conta);
    Deve ser apresentado mensagem de erro ao usuário;
    Decrementar o valor sacado do saldo;
    Retornar para o menu anterior;

Caso opção 3 seja selecionada
    Solicitar um valor a ser transferido (valor maior que zero e menor que o saldo disponível)
Deve ser apresentado mensagem de erro ao usuário;
    Decrementar o valor do saldo
    Solicitar para quem deve ser transferido (transferência usando e-mail)
    Retornar ao menu anterior

Caso a opção selecionada seja 0
    Encerrar algoritmo;
*/

let saldo, vlr, saque, desc=true, op;


saldo = Number(prompt("Bem vindo(a) ao Growbank!! Faça um primeiro depósito: "))

if(isNaN(saldo) || saldo < 0) {
    while (isNaN(saldo) || saldo < 0) {
        saldo = Number(window.prompt('O valor inserido é inválido! Por favor, insira um valor válido: '))    
    }
}

while (desc){
   
    window.alert(`Seu saldo é de R$${saldo}!`)
    op = Number(window.prompt(`Informe o número da operação deseja fazer:

    1 - Depósito
    2 - Saque
    3 - Transferência
    0 - Sair`))

    switch (op) {
        
        case 0:
            desc = false
             
            break
            
        case 1:
            vlr = Number(window.prompt("Informe o valor a ser depositado: "));

            if(isNaN(vlr) || vlr < 0){
                
                while (isNaN(vlr) || vlr < 0) {

                    vlr = Number(window.prompt("Valor informado é inválido, Informe outro valor para o depósito: R$ "));

                }
            }

            saldo += vlr;

            alert("Deposito realizado com sucesso!");

            break;
            
        case 2:
            
            saque = Number(window.prompt("Informe o valor do saque: R$ "));
            console.log(saque);
            
            if(isNaN(saque) || saque < 0){
                
                while (isNaN(saque) || saque < 0) {

                    saque = Number(window.prompt("Valor informado é inválido, Informe outro valor para o saque: R$ "));

                }
            }

            if(saque > saldo) {

                while (saque > saldo){

                    saque = Number(window.prompt(`Saldo disponivel R$ ${saldo.toFixed(2)}.
                    Valor do saque informado é maior que o saldo disponível,
                    informe um valor menor que o saldo para o saque: R$ `))
                }
            } else {
                saldo -= saque;
            }

            alert(`Saque realizado com sucesso, seu saldo atual é R$ ${saldo.toFixed(2)}`);
            
                
            break;
            
        case 3:
            let saque = Number(prompt('Qual é o valor da transferência?'));
            const email = prompt('Digite o email de quem vai receber o valor');
            
            while (saque <= 0 || saque > saldo || isNaN(saque)) {
                saque = Number(prompt(`
                Valor indisponível, digite um valor maior que 0 ou menor que o seu saldo`));
            }
            saldo -= saque;

            alert(`Você transferiu R${saque}, para ${email}. Seu saldo atual é: ${saldo}`)
        break;

        default:
            window.prompt('Entrada inválida!')
            break;
    }
   
            
          
}