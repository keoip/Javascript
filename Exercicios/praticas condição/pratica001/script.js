function carregar(){

    var til = window.document.getElementById('titulo')
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')

    var atual = new Date()
    var hora = atual.getHours()

    var minuto = atual.getMinutes()

    var mes = atual.getMonth()

    var ano = atual.getFullYear()


    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos de ${mes} de ${ano}`

    

    if(hora >= 0 && hora < 12){
        img.src = 'imagens/fotomanha.png'
        til.innerHTML = 'Bom dia!'
    } else if(hora >= 12 && hora < 18){
        img.src = 'imagens/fototarde.png'
        til.innerHTML = 'Boa tarde!'
    } else {
        img.src = 'imagens/fotonoite.png'
        til.innerHTML = 'Boa noite!'
    }
}