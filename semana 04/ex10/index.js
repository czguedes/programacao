const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99, 1290.00, 15000.00];

function questao01() {
    const sal7500 = salarios.findIndex(function(valor){
        return valor > 7500
    })
    console.log(sal7500);
}

function questao02() {
    const ordemSal = salarios.sort(function (n1, n2){
        return n1 - n2
    })
    console.log(ordemSal);
}

function questao03() {
    const ordemSal = salarios.sort(function (n1, n2){
        return n2 - n1
    });
    console.log(ordemSal);
}

function questao04() {
    const salMais10k = salarios.some(function(valor){
        if(valor > 10000){
            return true
        };
        return false
    });
    console.log(salMais10k);
}

function questao05() {
    const salMais8k = []
    salarios.filter(function(valor){
        if (valor > 8000){
            salMais8k.push(valor)
        };
    })
    console.log(salMais8k);
}


function questao06() {

    const rainbow = ['vermelho', 'laranja','preto', 'azul'];
    console.log(rainbow);

    rainbow.splice(2,1) //remove 'preto'
    console.log(rainbow);

    rainbow.splice(2,0,'amarelo','verde') //adiciona 'amarelo' e 'verde'
    console.log(rainbow);

    rainbow.splice(5, 0, 'roxo') //adiciona 'roxo'
    console.log(rainbow);
}