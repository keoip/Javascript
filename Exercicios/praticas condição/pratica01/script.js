function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var til = window.document.getElementById('titulo') //VARIAVEIS DE LIGAÇÃO
    
    var data = new Date()
    var hora = data.getHours() //PEGANDO A HORA ATUAL

    var d = new Date()
    var dia = d.getDate()// PEGANDO O DIA ATUAL

    var m = new Date()
    var mes = m.getMonth() //PEGANDO O MES ATUAL

    var a = new Date()
    var ano = a.getFullYear()//PEGANDO O ANO ATUAL

    
    msg.innerHTML = `Agora são ${hora} horas e hoje é dia ${dia} de ${ano}`

    
    if(hora >= 0 && hora <= 12){ //ESTRUTURA DE CONDIÇÃO
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

