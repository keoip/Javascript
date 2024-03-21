function Verificar() {
  var nascimento = window.document.getElementById("inascimento").value;
  var sexo = window.document.getElementsByName("sexo");
  var resp = window.document.getElementById("resp"); //VARIAVEIS DE LIGAÇÃO

  var data = new Date();
  var ano = data.getFullYear();//PEGANDO O ANO ATUAL
  var nasc = Number(nascimento); //MANIPULAÇAO
  var idade = ano - nasc; // CONTA DO ANO ATUAL MENOS O NASCIMENTO DA PESSOA
  var genero = ""; //VARIAVEL SEM VALOR NO MOMENTO EXPLICAÇÃO MAIS A FRENTE
  var img = document.createElement("img"); //CRIANDO UMA IMG VIA JAVASCRIPT
  img.setAttribute("id", "foto"); //ADICIONANDO ID PARA A IMG

  if (sexo[0].checked) { //ESTRUTURA DE CONDIÇAÕ
    genero = "Homem"; //VARIAVEL QUE ANTES ESTAVA VAZIA AGORA ESTÁ ATRIBUIDA O VALOR DE STRING "HOMEM"
    if (idade >= 0 && idade < 10) { //SE FOR HOMEM E DEPENDENDO DA IDADE IRÁ COLOCAR UMA FOTO DIFERENTE
      img.setAttribute("src", "imagens/fotocriancahomem.png")
    } else if (idade < 21) {
      img.setAttribute("src", "imagens/fotohomemjovem.png");
    } else if (idade < 50) {
      img.setAttribute("src", "imagens/fotohomemadulto.jpg");
    } else {
      img.setAttribute("src", "imagens/fotohomemvelho.png");
    }
  } else if (sexo[1].checked) { //ESTRUTURA DE CONDIÇÃO
    genero = "Mulher"; //VARIAVEL VAZIA QUE NO MOMENTO ESTÁ COM O VALOR DE STRING "MULHER"
    if (idade >= 0 && idade < 10) { //SE FOR MULHER E DEPEDENDO DA IDADE A IMAGEM IRÁ MUDAR
      img.setAttribute('src', 'imagens/fotocriancamulher.png')
    } else if (idade < 21) {
      img.setAttribute('src', 'imagens/fotomulherjovem.png')
    } else if (idade < 50) {
      img.setAttribute('src', 'fotomulheradulta.png')
    } else {
      img.setAttribute('src', 'imagens/fotomulhervelha.png')
    }
  } else {
    resp.innerHTML = "Por favor, selecione o sexo.";
    return;
  }

  resp.innerHTML = `Detectamos um(a)  ${genero} de ${idade} anos de idade.`;
  resp.appendChild(img); //APPENDCHILD É NECESSARIO SEMPRE QUE CRIAMOS UM ELEMENTO PELO JAVASCRIPT
}
