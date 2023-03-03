var input = require('fs').readFileSync('./1072Input.txt', 'utf8');
var lines = input.split('\n');

let qtdDeCasosTeste = Number(lines[0]);

let xIn = 0
let xOut = 0;

for(let i = 1; i <= qtdDeCasosTeste; i++){
    let x = Number(lines[i]);

    if(x >= 10 && x <= 20){
        xIn++;
    }else{
        xOut++;
    }
}

console.log(`${xIn} in`);
console.log(`${xOut} out`);




