var input = require('fs').readFileSync('./1073Input.txt', 'utf8');
var lines = input.split('\n');


let valorN = Number(lines[0]);

for(let i = 1; i <= valorN; i++){
    if(i % 2 == 0){
        let valorAoQuadrado = Math.pow(i,2);
        console.log(`${i}^2 = ${valorAoQuadrado}`);
    }
}

