var input = require('fs').readFileSync('./1080Input.txt', 'utf8');
var lines = input.split('\n');



let numbers = [];

for(let i = 0; i < lines.length; i++ ){
    numbers.push(Number(lines[i]));
}
let bigger = Math.max(... numbers);
let position = numbers.indexOf(bigger) + 1;

console.log(bigger);
console.log(position);

