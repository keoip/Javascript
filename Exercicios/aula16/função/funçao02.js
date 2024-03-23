function somar(n1=0, n2=0){// O N1=0 E N2=0 SÃO PARAMETROS PREDIFINIDOS PARA CASO NÃO SEJA DEFINIDO OS VALORES PARA N1 E N2
        return n1 + n2 // RETURNA O VALOR DE N1 + N2
}
let resp =(somar(7, 6)) // CHAMA A FUNÇAÕ COM DOIS PARAMETROS REAIS DENTRO
if(resp < 0){ 
    console.log(`Seu resultado é ${resp} e é negativo!`)
} else {
    console.log(`O resultado é  ${resp}`)
}