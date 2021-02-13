function carregar() {
    var  mensagem = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    mensagem.innerHTML = `Agora São ${hora}:${min} hrs`

    if(hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#4d6e78'
    } else if(hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#ffa960'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#19196e'
    }
}