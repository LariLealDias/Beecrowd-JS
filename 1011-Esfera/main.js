var input = require('fs').readFileSync('./1011Input.txt', 'utf8');
var lines = input.split('\n');

let raio = Number(lines[0]);
const PI = Number(3.14159);
let raioAoCubo = Math. pow(raio, 3);

let volume = (4 / 3) * PI * raioAoCubo;
let fixVolume = volume.toFixed(3);
console.log(`VOLUME = ${fixVolume}`);
