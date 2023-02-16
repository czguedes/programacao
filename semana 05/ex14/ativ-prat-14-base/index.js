const card = document.querySelectorAll(".card");
card.forEach((card) => {
    card.style.backgroundColor = "darkorange";
});

const titulo = document.querySelectorAll(".titulo-card");
titulo.forEach((titulo) => {
    titulo.style.color = "#2b385b";
    titulo.innerHTML = "Meu Card";
});

function editarCard() {
    alert("Clicou em Editar!");
}

const botaoEditar = document.querySelectorAll(".botao-editar");
botaoEditar.forEach((botaoEditar) => {
    botaoEditar.addEventListener("click", editarCard);
});

function apagarCard() {
    let confirmarApagar = confirm("Deseja mesmo apagar?");
    confirmarApagar === true ? alert("Confirmado!") : alert("Cancelou!");
}

const botaoApagar = document.querySelectorAll(".botao-apagar");
botaoApagar.forEach((botaoApagar) => {
    botaoApagar.addEventListener("click", apagarCard);
});

const descricao = document.querySelectorAll(".descricao-card");
descricao.forEach(function (descricao) {
    descricao.innerHTML = "Editado com JavaScript";
});
