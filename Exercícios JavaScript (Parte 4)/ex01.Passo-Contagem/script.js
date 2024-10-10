function Contar() {
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('resposta')


    if (inicio.value === '' || fim.value === '' || fim.value === 0) {
        res.innerHTML = 'Impossível contar!'
    }
    else if (passo.value === 0 || passo.value === '') {
        window.alert('Passo inválido! Considerando PASSO 1')
        var ini = Number(inicio.value)
        var fin = Number(fim.value)
        var pas = Number(passo.value)
        res.innerHTML = ''
        for (var i = ini; i <= fin; i++) {
            res.innerHTML += `${i} `
        }
    }
    else {
        var ini = Number(inicio.value)
        var fin = Number(fim.value)
        var pas = Number(passo.value)
        res.innerHTML = ''
        for (var i = ini; i <= fin; i += pas) {
            res.innerHTML += `${i} `
        }
    }
}