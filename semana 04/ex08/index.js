function questao01(){

    function calcMedia(nota1, nota2, nota3, letra) {
        let media;
        if (letra == 'a','A') {
            media = ((nota1 + nota2 + nota3) / 3).toFixed(2)
            return media
        } else {
            media = ((nota1 * 5) + (nota2 * 3) + (nota3 * 2)) /10
            return media
        }
    }
    let nota1 = Number(prompt('Digite um valor: ')) ,
        nota2 = Number(prompt('Digite um valor: ')) ,
        nota3 = Number(prompt('Digite um valor: '))
    let letra = prompt('Digite "A" para média aritmética e "P" para média ponderada')
    console.log(calcMedia(nota1, nota2, nota3, letra))
}

function questao02(){

    function numInteiro(num) {
        if (num % 2 !== 0) {
            return false
        } else {
            return true
        }

    }
    let num = Number(prompt('Digite um valor: '))
    console.log(numInteiro(num))
}

function questao03(){

    function ePrimo(num2) {

        if (num2 >= 0) {
            let contador = 0

            for (let index = 1; index <= num2; index++) {
                if (num2 % index === 0) {
                    contador++
                }

            }

            if (contador === 2) {
                return console.log('É primo')
            } else {
                return console.log('Não é primo')
            }
        } else {
            return console.log('O valor é inválido')
        }
    }

    let num2 = Number(prompt('Digite um valor: '))
    ePrimo(num2)
}

function questao04(){

    function dataCompleta(entrada) {
    
        let horas = Math.round(entrada / 3600);
        let min = entrada % 3600;
        let minutos = Math.round(min/60)
        let seg = min % 60
        let segundos = Math.round(seg)
    
        return console.log(`${horas}h:${minutos}min:${segundos}s`)    
    }
    let entrada = Number(prompt('Digite um valor: '))
    dataCompleta(entrada)
}

function questao05(){}

function questao06(){

    function acessoAoSite(){
        alert('Bem-vindo ao site!!')
    }

    acessoAoSite()
}

function questao07(){

    function mostraMensagem() {
        let aplicacao = 'DJ Cleito Rasta, olha a pedra!'
        console.log(`Acesso à aplicação ${aplicacao}`)
        alert(`Bem vindo à aplicação ${aplicacao}`)
    }

    mostraMensagem()
}

function questao08(){
    function mostrarDobro(num){
        let conta = num * 2
        return conta
    }

    let num = Number(prompt('Digite um valor inteiro: '))
    alert(`O dobro de ${num} é ${mostrarDobro(num)}`)
}

function questao09(){}