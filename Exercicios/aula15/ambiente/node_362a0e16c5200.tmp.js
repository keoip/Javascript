let valor = [5,9,4,7,3,6,1,2,8]
valor.sort()
let v = valor.indexOf(5) // () SIGNIFICA O VALOR DENTRO DA ARRAY E NÃO O INDICE, A CHAVE NELE
if(v == -1){
    console.log('Esse valor não existe')
} else {
    console.log(`Este valor está na posição ${v}`)
}


let c = 0
while(c<valor.length){
    console.log(`o indice ${c} está na posição ${valor[c]}`)
}






/*
for(let c = 0; c < valor.length; c++){
    console.log(`O indice ${c} está na posição ${valor[c]}`)
}
*/



/*
for(let c in valor){
    console.log(valor[c])
}
*/

