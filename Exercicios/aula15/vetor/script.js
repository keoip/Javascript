let valores = [3,7,4,2,1,5,6]
valores.sort()
/*
for( c = 0; c < valores.length; c++ ){
    console.log(`A posição ${c} tem o valor ${valores[c]}`)
}
*/

for(let c in valores){ // VERSÃO SIMPLIFICADA DA ESTRUTURA FOR MAS PARA ARRAYS
    console.log(`o indice ${c} está no elemento ${valores[c]}`)
}