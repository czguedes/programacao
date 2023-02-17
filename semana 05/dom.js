let lampadaQuebrada = false

function acenderLampada(){
    if(!lampadaQuebrada){
        const lampada = document.getElementById('lampada')
        lampada.src = './imagens/lampada_acesa.jpg' //muda a propriedade src do <img>
    }
}

function apagarLampada(){
    if (!lampadaQuebrada) {
        const lampada = document.getElementById('lampada')
        lampada.src='./imagens/lampada_apagada.jpg'
    }
}

function quebraLampada(){
    if (!lampadaQuebrada) {
        
        const lampada = document.getElementById('lampada')
        lampada.src = './imagens/lampada_quebrada.jpg'
        lampadaQuebrada = true
    
        //1. cria elemento
        const botaoTrocar = document.createElement('button') //cria um elemento <button>
        botaoTrocar.innerText = 'Trocar a lâmpada!' //adiciona texto no <button>
        botaoTrocar.onclick = trocarLampada //adiciona ação ao clicar
    
        //2. adiciona elemento
        const divContainer = document.querySelector('.container') //seleciona o div.container como local para adicionar o botão
        divContainer.appendChild(botaoTrocar) //insere botão como filho do .container
    }
}

function trocarLampada(){
    lampadaQuebrada = false
    apagarLampada()

    const retiraBotao = document.querySelector('button') //seleciona o botão
    retiraBotao.remove() //remove o botão
}