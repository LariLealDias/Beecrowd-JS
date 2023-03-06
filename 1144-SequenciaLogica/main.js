var input = require('fs').readFileSync('./1144Input.txt', 'utf8');
var lines = input.split('\n');


let inputNumber = Number(lines[0]);
let resultadoMultiplo1, resultadoMultiplo2 ;
let resultadoSoma1, resultadoSoma2;

for(i = 1; i <= inputNumber; i++){
    resultadoMultiplo1 = i * i;
    resultadoMultiplo2 = resultadoMultiplo1 * i;
    resultadoSoma1 = resultadoMultiplo1 + 1;
    resultadoSoma2 = resultadoMultiplo2 + 1;

    console.log(`${i} ${resultadoMultiplo1} ${resultadoMultiplo2}`);
    console.log(`${i} ${resultadoSoma1} ${resultadoSoma2}`);

    // console.log(`${i} ${i * i} ${(i*i) * i}`);
}
