function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var til = window.document.getElementById('titulo')
    
    var data = new Date()
    var hora = data.getHours()

    var d = new Date()
    var dia = d.getDate()

    var m = new Date()
    var mes = m.getMonth()

    var a = new Date()
    var ano = a.getFullYear()

    
    msg.innerHTML = `Agora são ${hora} horas e hoje é dia ${dia} de ${ano}`

    
    if(hora >= 0 && hora <= 12){
        img.src = 'imagens/fotomanha.png'
        document.body.style.backgroundImage = "url('imagens/fundomanha.png')"
        til.innerHTML = 'Bom dia!'
    } else if(hora > 12 && hora <= 18){
        img.src = 'imagens/fototarde.png'
        document.body.style.backgroundImage = "url('imagens/fundotarde.png')"
        til.innerHTML = 'Boa tarde!'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.backgroundImage = "url('imagens/fundonoite.jpg')"
        til.innerHTML = 'Boa noite!'
    }
}

