function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours().toString().padStart(2, '0')
    var minutos = data.getMinutes().toString().padStart(2, '0')
    var segundos = data.getSeconds().toString().padStart(2, '0')
    msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos}`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'img/foto-manha.jpg'
        document.body.style.backgroundImage = 'linear-gradient(rgb( 198, 200, 197), rgb( 248, 240, 229 ), rgb( 119, 136, 91 ), rgb(69, 80, 48) )'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'img/foto-tarde.jpg'
        document.body.style.backgroundImage = 'linear-gradient(rgb(120, 48, 23), rgb(156, 102, 55), rgb(201, 121, 48), rgb(70, 58, 60))'
    } else {
        //BOA NOITE
        img.src = 'img/foto-noite.jpg'
        document.body.style.backgroundImage = 'linear-gradient(rgb(13, 16, 21), rgb(17, 30, 36), rgb(59, 79, 86), rgb(67, 74, 82))'
    }
}
setInterval(carregar, 1000);