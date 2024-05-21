let num = document.getElementById('inumero')
let lista = document.getElementById('iflist')
let resposta = document.getElementById('resposta')
let valoresVetor = []


function isNumero(n){
   if(Number(n) >= 1 && Number(n) <= 100){
    return true
   } else{
    return false
   }
}

function inLista(n, v){
    if(v.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}


function adicionar(){
   if(isNumero(num.value) && !inLista(num.value, valoresVetor)){
       valoresVetor.push(Number(num.value)) // ADICIONADO O NUM NA ARRAY
       let item = document.createElement('option')
       item.innerText = `O valor ${num.value} foi adicionado!`
       lista.appendChild(item)
       res.innerHTML = ''
    } else {
        alert('[ERRO ESSE NUMERO JÁ FOI DIGITADO OU É MAIOR QUE 100]')
    }
    num.value = ''
    num.focus()
}

function validação(){
    if(valoresVetor.length == 0){
        alert('Prencha os números acima!')
    } else{
        let total = valoresVetor.length
        let soma = 0
        for(let i = 0; i< valoresVetor.length; i++){
            soma += valores[i]
        }
        let media = soma / total
        let maior = Math.max(...valores)
        let menor = Math.min(...valores)

        res.innerHTML += `Ao todo temos ${total} elementos <br/>`
        res.innerHTML == `A soma dos elementos é de ${soma} <br/>`
        res.innerHTML += `A media dos elementos é de ${media} <br/>`
        res.innerHTML += `O maior número dentre os elementos é de ${maior} <br/>`
        res.innerHTML += `O menor número dentre os elementos é de ${menor}`
    }
}
