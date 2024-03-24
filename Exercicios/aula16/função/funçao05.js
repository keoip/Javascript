// RECURSIVIDADE
//CHAMAR UMA FUNÇÃO DENTRO DA MESMA

function fatorial(n){
    if(n==1){
        return 1
    } else{
        return n * fatorial(n-1) // CHAMANDO DA FUNÇÃO DANDO OS PARAMETROS DENTRO DELA MESMA
    }
}

console.log(fatorial(5))