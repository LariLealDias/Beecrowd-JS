var input = require('fs').readFileSync('./1044Input.txt', 'utf8');
var lines = input.split('\n');

let [number1, number2] = input.split(' ').map(value => Number(value));

let numberMaior, numberMenor;

if(number1 > number2){
     numberMaior = number1;
     numberMenor = number2;
}else{
     numberMaior = number2;
     numberMenor = number1;
}

if(numberMaior % numberMenor === 0){
    console.log("Sao Multiplos");
}else{
    console.log("Nao sao Multiplos");
}


////  !!! Repetição de codigo, melhor padronizar o dado como no cod acima !!!
// if(number1 > number2){
//     if(number1 % number2 == 0){
//         console.log("Sao Multiplos");
//     }else{
//         console.log("Nao sao Multiplos");
//     }
// }else{
//     if(number2 % number1 == 0){
//         console.log("Sao Multiplos");
//     }else{
//         console.log("Nao sao Multiplos");
//     }
// }