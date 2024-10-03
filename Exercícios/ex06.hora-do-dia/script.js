function carregar() {
    var msg = window.document.getElementById('msg')
    var tempo = new Date()
    var hora = tempo.getHours()
    var minutos = tempo.getMinutes()
    var segundos = tempo.getSeconds()
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;
    
    msg.innerHTML = `${hora}:${minutos}:${segundos}`

    if (hora >= 6 && hora < 18) {
        msg.style.color = 'green'
    } else {
        msg.style.color = 'blue'
    }
}
setInterval(carregar, 1000);

