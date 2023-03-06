var input = require('fs').readFileSync('./1132Input.txt', 'utf8');
var lines = input.split('\n');


let input1 = Number(lines[0]);
let input2 = Number(lines[1]);

let inputMaior, inputMenor;
let divisor = 13;
let resultado = 0;

//normalizar dados
if(input1 > input2){
    inputMaior = input1;
    inputMenor = input2;
}else{
    inputMaior = input2;
    inputMenor = input1;
}


for(let i = inputMenor; i <= inputMaior; i++){
    if(i % divisor !== 0){
        resultado += i;
    }
}

console.log(resultado);
