function calcular(){

    let inicio = document.getElementById('iinicio')
    let fim = document.getElementById('ifim')
    let passo = document.getElementById('ipasso')
    let res = document.getElementById('resposta') //VARIAVEIS DE LIGAÇÃO

    if(inicio.value.length == 0 || 
       fim.value.length == 0 ||
       passo.value.length == 0 //VERFICANDOSE A CAIXA NÃO ESTÁ VAZIA
    ){
        alert('[ERRO]')
    } else{
        res.innerHTML = 'Contando: <br/>'

        let i = Number(iinicio.value)//MANIPULAÇÕES PARA NUMERO
        let f = Number(ifim.value)
        let p = Number(ipasso.value)

        if(i < f){
            //CONTAGEM PROGRESSIVA
            for( let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else{
            //CONTAGEM REGRESSIVA
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
    }
}
