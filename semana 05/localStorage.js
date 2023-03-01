// const jsonDevs = localStorage.getItem('listaDevs') 

// const listaDevs = JSON.parse(jsonDevs)

const listaDevs = JSON.parse(localStorage.getItem('listaDevs')) //recupera a lista

console.log(listaDevs); //aqui está as informações capturadas pelo form

const tbody = window.document.getElementById('tbody') //captura o <tbody> para colocar as informações nele