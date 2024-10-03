function Validar() {
    var ema = window.document.getElementById('email')
    var sen = window.document.getElementById('senha')
    var men = window.document.getElementById('mensagem')
    if (ema.value === '' || sen.value === '') {
        window.alert('[ERRO]')
        men.innerHTML = 'Preencha os dados'
    } else {
        window.alert('Concluído')
        men.innerHTML = 'Dados preenchidos'
    }
}