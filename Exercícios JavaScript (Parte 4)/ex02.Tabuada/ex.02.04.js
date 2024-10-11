function Gerar() {
    var num = window.document.getElementById('numero')
    var res = window.document.getElementById('resposta')
    res.innerHTML = ''

    if (num.value === '') {
        alert('Digite um número')
    } else {
        var n = Number(num.value)
        var t = 1
        while (t <= 10) {
            var tot = n * t
            res.innerHTML += `${n} x ${t} = ${tot} <br>`
            t++
        }
    }
}