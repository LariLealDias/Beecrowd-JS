var input = require('fs').readFileSync('./2242Input.txt', 'utf8');
var lines = input.split('\n');



const vogal = (letter) => ['a', 'e', 'i', 'o', 'u'].includes(letter);

let Laught = lines.shift().trim().split('');

let onlyVogal = Laught.filter((x) => vogal(x));
let inverse = [...onlyVogal];
onlyVogal = onlyVogal.join('');
inverse.reverse();
inverse = inverse.join('');

console.log((onlyVogal === inverse) ? 'S' : 'N');












//Try in another time
// let inputLaught = [lines[0]];
// console.log(` ARRAY input = ${inputLaught}`);

// let char = [];
// let vogais = ['a', 'e', 'i', 'o', 'u'];
// let ordemVogais = [];

// for(let i = 0; i < inputLaught.length; i++){
//     for(let j = 0; j < inputLaught[i].length; j++){
//         char.push(inputLaught[i][j]);
//     }
//     console.log(` todas as letras = ${char}`);

//     if(char.includes(vogais)){
//         ordemVogais.push();
//         console.log(`Only vogais: ${ordemVogais}`);
//     }else{
//         console.log(`N = ${ordemVogais}`);
//     }
// }
