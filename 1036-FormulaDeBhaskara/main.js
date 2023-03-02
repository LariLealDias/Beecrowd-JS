var input = require('fs').readFileSync('./1036Input.txt', 'utf8');
var lines = input.split('\n');


let [a, b, c] = input.split(' ').map(value => parseFloat(value));

let delta = Math.pow(b, 2) - 4 * a * c;

if (delta < 0 || a === 0) {
  console.log("Impossivel calcular");
} else {
  let r1 = (-b + Math.sqrt(delta)) / (2 * a);
  let r2 = (-b - Math.sqrt(delta)) / (2 * a);
  
  console.log(`R1 = ${r1.toFixed(5)}`);
  console.log(`R2 = ${r2.toFixed(5)}`);
}



