function recebeForm(event){ //recebe o input do form
    event.preventDefault() //previne funções indesejadas
    
    const form = document.getElementById('formulario') //captura o formulário e facilita a sua navegação pelo DOM

    const checkboxes = document.querySelectorAll('input[name="areaInteresse"]:checked') //captura os itens checados no <input type = "checkbox" name="areaInteresse">

    form.nomeUsuario.value ? form.nomeUsuario.value : alert('Digite um nome válido.') //validações de campos obrigatórios preenchidos
    form.endUsuario.value ? form.endUsuario.value : alert('Digite um endereço válido.')
    form.cidadeUsuario.value ? form.cidadeUsuario.value : alert('Digite um nome válido.')
    form.estadoUsuario.value ? form.estadoUsuario.value : alert('Escolha um Estado.')
    if(checkboxes.length === 0){
        alert('Selecione pelo menos uma área de interesse')
        return
    } //valida a escolha de um Estado e impede a continuação do logaritmo caso algum campo não tenha sido preenchido 

    const areaInteresse = [] //recebe os itens capturados pela const checkboxes (linha 6)

    for (const item of checkboxes) {    //percorre toda a const checkboxes (linha 6) e dá push nos itens checados
        areaInteresse.push(item.value)
    }
    
    const usuario = { //cadastra o usuário para cada valor recebido
        nome: form.nomeUsuario.value,
        endereco: form.endUsuario.value,
        cidade: form.cidadeUsuario.value,
        estado: form.estadoUsuario.value,
        natCargo: form.naturezaCargo.value,
        areaInt: areaInteresse, //se fosse usado areaInt: checkboxes seria retornado um array do DOM que dificultaria a leitura e obtenção do valor, por isso da criação e uso da const areaInteresse e do for...of
        bio: form.curriculo.value
    }
        
    alert('Formulário enviado com sucesso!')
    console.log(usuario);
    form.reset() //reseta os campos do formulário após finalizá-lo
}