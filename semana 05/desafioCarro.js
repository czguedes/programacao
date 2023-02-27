let sair = false
const veiculos = [];

do {
    const operacao = Number(prompt(`
    
        No momento existem ${veiculos.length} carros cadastrados!
    
        Escolha uma das opções para interagir com o sistema.
    
        1. Cadastrar veículo
        2. Listar todos os veículos
        3. Filtrar veículos por marca
        4. Atualizar veículo
        5. Remover veículo
        6. Sair do sistema
    
    `));

    switch (operacao) {
        case 1:
            cadastro();
            break
        case 2:
            listarVeiculos();
            break
        case 3:
            filtrarVeiculosMarca();
            break
        case 4:
            atualizarVeiculos();
            break
        case 5:
            removerVeiculo();
            break
        case 6:
            sair = true;
            break
        default:
            alert('Opção não é válida!');
    }
    
    
} while (!sair);


function cadastro() {
    const carro = {
        id: gerarId(),
        modelo: prompt('Digite o modelo do veículo: '),
        marca: prompt('Digite a marca do veículo: '),
        ano: Number(prompt('Digite o ano do veículo: ')),
        cor: prompt('Digite a cor do veículo: '),
        preco: Number(prompt('Digite o preço do veículo: ')),
    }

    veiculos.push(carro);
}

function gerarId() {
    return veiculos.length + 1; //trocar método de gerar id
}

function listarVeiculos(){
    
    let listaFiltrados = '';

        veiculos.forEach(function(item) {
            
            listaFiltrados += `ID: ${item.id} | Modelo: ${item.modelo} | Cor: ${item.cor} | Preço: R$ ${item.preco}  | Ano: ${item.ano} | Marca: ${item.marca} \n`
        })

    alert(listaFiltrados);
    
}

function filtrarVeiculosMarca() {
    const marca = prompt("Digite a marca que deseja filtrar: ");
    const marcaFiltrada = veiculos.filter(function(item) {
        return item.marca === marca;
    })

    if (marcaFiltrada.length === 0) {
        alert("Nenhum carro foi cadastrado com a marca digitada.");
    } else {
        let listaFiltrados = '';

        marcaFiltrada.forEach(function(item) {
            listaFiltrados += `ID: ${item.id} | Modelo: ${item.modelo} | Cor: ${item.cor} | Preço: R$ ${item.preco}  \n`
        })

        alert(listaFiltrados);
    }
}
        
function atualizarVeiculos() {
    const atualizar = Number(prompt("Digite o ID do veículo."));
    
    const filtrado = veiculos.find (function (id) {
        return id.id === atualizar
    });

    if (filtrado) {
        
        filtrado.cor = prompt('Digite a nova cor: ');
        filtrado.preco = Number(prompt('Digite o novo valor: '));
        veiculos.splice(filtrado.id - 1, 1, filtrado);

    } else {
        alert('Veículo não encontrado');
        return
    }
}

function removerVeiculo() {
    const id = Number(prompt('Digite o ID do veículo: '));

    const filtrado = veiculos.find(function (item) {
        return item.id === id;
    })

    if (filtrado) {
        veiculos.splice(id - 1, 1);
        alert()
    } else {
        alert('Veiculo não encontrado!');
        return
    }
}