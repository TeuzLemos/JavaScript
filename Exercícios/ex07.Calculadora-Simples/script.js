function Carregar() {
    var v1 = window.document.getElementById('txt1')
    var v2 = window.document.getElementById('txt2')
    var res = window.document.getElementById('resultado')
    if (v1.value === '' || v2.value === '') {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var n1 = Number(v1.value)
        var n2 = Number(v2.value)
        var total = n1 + n2
        res.innerHTML = `${total}`
    }
}