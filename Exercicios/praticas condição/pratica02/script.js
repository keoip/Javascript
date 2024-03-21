function Verificar() {
  var nascimento = window.document.getElementById("inascimento").value;
  var sexo = window.document.getElementsByName("sexo");
  var resp = window.document.getElementById("resp");

  var data = new Date();
  var ano = data.getFullYear();
  var nasc = Number(nascimento);
  var idade = ano - nasc;
  var genero = "";
  var img = document.createElement("img");
  img.setAttribute("id", "foto");

  if (sexo[0].checked) {
    genero = "Homem";
    if (idade >= 0 && idade < 10) {
      img.setAttribute("src", "imagens/fotocriancahomem.png")
    } else if (idade < 21) {
      img.setAttribute("src", "imagens/fotohomemjovem.png");
    } else if (idade < 50) {
      img.setAttribute("src", "imagens/fotohomemadulto.jpg");
    } else {
      img.setAttribute("src", "imagens/fotohomemvelho.png");
    }
  } else if (sexo[1].checked) {
    genero = "Mulher";
    if (idade >= 0 && idade < 10) {
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
  resp.appendChild(img);
}
