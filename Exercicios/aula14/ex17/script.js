function tabuada(){

    let num = document.getElementById('inum')
    let res = document.getElementById('resposta') //VARIAVEIS DE LIGAÇÃO
    
    if(num.value.length == 0){ //VERIFICANDO SE A CAIXA NÃO ESTÁ VAZIA
        alert('[ERRO]')
    } else {
        res.innerHTML = '' //DEIXANDO A LET RES SEM NADA ANTES DE TER A TABUADA
        let n = Number(inum.value) //MANIPULAÇÃO
        let c = 1 //ESTRUTURA DE REPETIÇÃO
        while(c <= 10){ //DE 1 ATÉ 10
            res.innerHTML += `${n} x ${c} = ${n*c} <br/>`
            c++
        }
    }

}

