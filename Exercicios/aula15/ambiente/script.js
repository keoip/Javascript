let num = [5 , 8 , 2 , 9 , 3]
num.push(1)// ADICIONA UM ELEMENTO NA ARRAY
num.sort() // ORGANIZA DE FORMA CRESCENTE A ARRAY
console.log(num)
console.log(`O vetor tem ${num.length} posições`)//MOSTRA AS POSIÇÕES DA ARRAY
let pos = num.indexOf(3)
if(pos == -1){
    console.log(`O valor não foi encontrado`)
} else{
    console.log(`O valor está na posição ${pos}`)
}


