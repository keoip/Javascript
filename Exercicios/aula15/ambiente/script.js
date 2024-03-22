let valor = [5,9,4,7,3,6,1,2,8]
valor.sort() // ORGANIZA A ARRAY DE FORMA CRESCENTE
let v = valor.indexOf(5) // () SIGNIFICA O VALOR DENTRO DA ARRAY E NÃO O INDICE, A CHAVE NELE
if(v == -1){
    console.log('Esse valor não existe')
} else {
    console.log(`Este valor está na posição ${v}`)
}

for(let c in valor){ // "FOR" PARA ARRAYS, SIMPLICANDO COLOCANDO SÓ DOIS(O COMEÇO E A ARRAY)
    console.log(valor[c])
}


/* REPETIÇÃO COM TESTE LOGICO NO FINAL
let c = 0
do{
    console.log(`O indice ${c} está na posição ${valor[c]}`)
    c++
} while(c < valor.length)
*/





/* REPETIÇÃO COM TESTE LOGICO NO COMEÇO
let c = 0
while(c <valor.length){
    console.log(`o indice ${c} está na posição ${valor[c]}`)
    c++
}
*/





/* REPETIÇAÕ "FOR" QUE INCURTA O COMEÇO, TESTE LOGICO, INCREMENTO, TUDO NESSA ORDEM
for(let c = 0; c < valor.length; c++){
    console.log(`O indice ${c} está na posição ${valor[c]}`)
}
*/