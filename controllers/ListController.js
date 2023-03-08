class ListController {
    constructor() {

    }
    buildList() {
        const listElement = document.getElementById('listaCarros')
        listElement.innerHTML = ''
        for (let index = 0; index < LISTA_CARROS.length; index++) {
            const carro = LISTA_CARROS[index];
            //console.log(carro)
            //const aux = '<div> Placa: ' + carro.placa + ' - Cor: ' + carro.cor + ' - Marca: ' +  carro.marca + ' - Modelo: ' + carro.modelo + '</div>'
            const item = `<div>Placa: ${carro.placa} - Cor: ${carro.cor} - Marca: ${carro.marca} - Modelo: ${carro.modelo} </div>`
            elementoLista.innerHTML += item 
        }
    }
}