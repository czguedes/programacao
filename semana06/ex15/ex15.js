function recebeForm(event){
    event.preventDefault()
    
    const form = document.getElementById('formulario')

    const checkboxes = document.querySelectorAll('input[name="areaInteresse"]:checked')

    form.nomeUsuario.value ? form.nomeUsuario.value : alert('Digite um nome válido.')
    form.endUsuario.value ? form.endUsuario.value : alert('Digite um endereço válido.')
    form.cidadeUsuario.value ? form.cidadeUsuario.value : alert('Digite um nome válido.')
    form.estadoUsuario.value ? form.estadoUsuario.value : alert('Escolha um Estado.')
    if(checkbox.length === 0){
        alert('Selecione pelo menos uma área de interesse')
        return
    }

    const areaInteresse = []

    for (const item of checkboxes) {
        areaInteresse.push(item.value)
    }
    
    const usuario = {
        nome: form.nomeUsuario.value,
        endereco: form.endUsuario.value,
        cidade: form.cidadeUsuario.value,
        estado: form.estadoUsuario.value,
        natCargo: form.naturezaCargo.value,
        areaInt: checkboxes,
        bio: form.curriculo.value
    }
        
    alert('Formulário enviado com sucesso!')
    console.log(usuario);
    form.reset()
}

