var input = require('fs').readFileSync('./1003Input.txt', 'utf8');
var lines = input.split('\n');


let input1 = parseInt(lines[0]);
let input2 = parseInt(lines[1]);

let soma = input1 + input2;

console.log(`SOMA = ${soma}`);