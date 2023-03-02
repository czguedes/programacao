/* Desenvolva aqui a rotina */

//Declara variaveis para capturar os inputs

let valorBase;
let valorTransporte;
let valorAlimentacao;

let receitaTotal;

let valorAutomovel;
let faltas;

let totalDescontos;

let valorTotal;

//recebe os valores do localStorage e preenche os inputs com eles
function lerLocalStorage() {
  const inputs = document.getElementsByTagName("input");

  for (const input of inputs) {
    const valor = localStorage.getItem(input.id);

    if (valor) {
      input.value = valor;
    } else {
      input.value = "0";
    }
  }
}

//captura os inputs e o click do button sempre q a página é recarregada
window.addEventListener("load", function () {
  valorBase = document.getElementById("valorBase");
  valorTransporte = document.getElementById("valorTransporte");
  valorAlimentacao = document.getElementById("valorAlimentacao");

  receitaTotal = document.getElementById("receitaTotal");

  valorAutomovel = document.getElementById("valorAutomovel");
  faltas = document.getElementById("faltas");

  totalDescontos = document.getElementById("totalDescontos");

  valorTotal = document.getElementById("valorTotal");

  /* document.getElementById('btnCalcular').addEventListener('click', function (){ // botão calcular
        calcular()
    }) */

  lerLocalStorage();
});
//calcula automaticamente ao mudar o foco de um dos inputs
const blurInput = document.getElementsByTagName("input");

for (const input of blurInput) {
  input.addEventListener("blur", function () {
    calcular();
  });
}

//pega os valores dos inputs e lança para o localStorage
function enviaLocalStorage() {
  const inputs = document.getElementsByTagName("input");

  for (const input of inputs) {
    localStorage.setItem(input.id, input.value);
  }
}

//calcula os valores ao clicar no botão
function calcular() {
  const somaReceita =
    parseFloat(valorBase.value) +
    parseFloat(valorTransporte.value) +
    parseFloat(valorAlimentacao.value);

  receitaTotal.value = somaReceita;

  const somaDescontos =
    parseFloat(valorAutomovel.value) + parseFloat(faltas.value);

  totalDescontos.value = somaDescontos;

  const somaFinal = parseFloat(somaReceita) - parseFloat(somaDescontos);
  valorTotal.value = somaFinal;

  enviaLocalStorage();
}
