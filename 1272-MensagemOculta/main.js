var input = require('fs').readFileSync('./1272Input.txt', 'utf8');
var lines = input.split('\n');


// let qtdCasos = Number(lines[0]);
let qtdCasos = Number(lines.shift());

for(let i = 0; i < qtdCasos; i++){
    let entradaCriptografada = lines.shift().trim().split(' ');
    // console.log(entradaCriptografada);
    
    let msgDescriptografa = entradaCriptografada.map((x) => x[0]).join('');
    console.log(msgDescriptografa);
}
