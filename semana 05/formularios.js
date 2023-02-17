function cadastro(eventSubmit){
    alert('Cadastro concluído!')
    eventSubmit.preventDefault() //previne de manter informações no navegador

    const form = document.querySelector('#formulario-cadastro') //captura o formulario

    const techUsuario = [] //recebe os itens do checkbox que estão marcados

    for (const indexTecnologia of form.techUsuario) {
        if(indexTecnologia.checked){ //entra no if só os itens do checkbox que estao checados (true)
            techUsuario.push(indexTecnologia.value)
        }
    } //for..of -> parecido com o for tradicional, mas de forma resumida. É diferente do forEach pois não é uma técnica de array!! OBS: o forEach funciona!!!

    const growdevers = {
        nomeCompleto: form.nomeCompleto.value,
        dataNasc: form.dataNasc.value,
        emailUsuario: form.emailUsuario.value,
        telefoneUsuario: form.telefoneUsuario.value,
        enderecoUsuario: form.enderecoUsuario.value,
        pretSalario: form.pretSalario.value,
        areaAtuacao: form.areaAtuacao.value,
        seniorUsuario: form.seniorUsuario.value,
        techUsuario: techUsuario, //pega a const que recebeu os checkbox marcados
        experienciaUsuario: form.experienciaUsuario.value,
    }
    
    console.log(growdevers);

    form.reset() //reseta o formulário
}