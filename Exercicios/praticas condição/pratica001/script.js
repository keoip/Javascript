function carregar(){

    var til = window.document.getElementById('titulo')
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')

    var h = new Date()
    var hora = h.getHours()

    var m = new Date()
    var minuto = m.getMinutes()

    var me = new Date()
    var mes = me.getMonth()

    var a = new Date()
    var ano = a.getFullYear()


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