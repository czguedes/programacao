//Questão 01

document.getElementById('btn-1').addEventListener('click', function(){
    const nomeUsuario = prompt('Olá! Qual seu nome?')
    document.getElementById('paragrafo').innerHTML = `Olá ${nomeUsuario}, seu site está ficando dinâmico!`
})

//Questão 02
let btnContador = 0

document.getElementById('btn-mais').addEventListener('click', function(){
    btnContador++
    document.getElementById('contador').innerHTML = `O contador está com ${btnContador} cliques!`
    document.getElementById('contador').removeAttribute('style')
})

document.getElementById('btn-zerar').addEventListener('click', function(){
    btnContador = 0
    document.getElementById('contador').setAttribute('style', 'display: none')
})