var input = require('fs').readFileSync('./1151Input.txt', 'utf8');
var lines = input.split('\n');

let inputNumber = Number(lines[0]);

let sequencia = [];
sequencia[0] = 0;
sequencia[1] = 1;


for(let i = 2; i <= inputNumber; i++){

    sequencia[i] = sequencia[i - 1] + sequencia[ i- 2];
}

// for (let i = 0; i < inputNumber; i++) {
//     console.log(sequencia[i]);
//   }


console.log(sequencia.slice(0, inputNumber).join(' '));
                //do indice 0 ao informado no Input, com um ' ' entre os elementos
