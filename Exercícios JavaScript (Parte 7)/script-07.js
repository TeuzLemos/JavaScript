var num = window.document.getElementById('numero')
var val = window.document.getElementById('valor')
var res = window.document.getElementById('resultado')
var lista = []


function Adicionar() {
    var n = Number(num.value)
    if (n > 100 ||n == 0 ) {
        alert('Valor inválido')
    } else {
        lista.push(n)
        var item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        val.appendChild(item)
    }
}

function Finalizar() {
    //TOTAL DE NÚMEROS CADASTRADOS
    res.innerHTML = `<br>Ao todo, temos ${lista.length} números cadastrados<br>`
    //

    //MAIOR NÚMERO INFORMADO
    var maior = 0
    for (let c = 0; c < lista.length; c++) {
        if (lista[c] > maior) {
            var maior = lista[c]
        }
    }
    res.innerHTML += `<br>O maior número informado foi ${maior}<br>`
    //

    //MENOR NÚMERO INFORMADO
    var menor = lista[0]
    for (let c = 0; c > lista.length; c++) {
        if (lista[c] < menor) {
            var menor = lista[c]
        }
    }
    res.innerHTML += `<br>O menor número informado foi ${menor} <br>`
    //

    //SOMA DE TODOS OS VALORES
    var soma = 0
    for (let c = 0; c < lista.length; c++) {
        soma += lista[c]
    }
    res.innerHTML += `<br>Somando todos os valores, temos ${soma}<br>`
    //

    //MEDIA ENTRE OS VALORES
    var media = (soma / lista.length)
    res.innerHTML += `<br>A média dos valores digitados é ${media}<br>`
    //
}
