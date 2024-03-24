
function calcular(){
    let num1 = Number(document.getElementById('in1').value);
    let num2 = Number(document.getElementById('in2').value);
    let opcoes = document.getElementsByName('conta');
    let resp  = document.getElementById('resposta');
    let conta = '';
    

    if(num1 === '' || num2 == '' ){
        alert('[Prencha as caixas acima!]')
    } else{
        if(opcoes[0].checked){
            conta = 'Soma';
           let soma = num1 + num2;
           resp.innerText = `A soma de ${num1} e ${num2} é de ${soma}`;
        } else if(opcoes[1].checked){
            conta = 'subtração'
            let sub = num1 - num2
            resp.innerText = `A substração entre ${num1} e ${num2} é de ${sub}`
        } else if(opcoes[2].checked){
            conta = 'multiplicação'
            let multi = num1 * num2
            resp.innerText = `A multiplicação entre ${num1} e ${num2} é de ${multi}`
        } else {
            conta = 'divisão'
            if(num1 < num2){
                alert('Coloque o maior valor na primeira caixa!')
            } else{
                let div = num1 / num2
                resp.innerText = `A divisão entre ${num1} e ${num2} é de ${div}`
            }
        }
    }
}