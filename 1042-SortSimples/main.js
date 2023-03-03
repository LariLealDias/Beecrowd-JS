var input = require('fs').readFileSync('./1042Input.txt', 'utf8');
var lines = input.split('\n');

let [inputA, inputB, inputC] = input.split(' ').map(value => parseFloat(value));

let valueOfInputs = [inputA, inputB, inputC];
valueOfInputs.sort((a, b) => a - b);

valueOfInputs.forEach(i => {
    console.log(i);
});
console.log();
console.log(inputA);
console.log(inputB);
console.log(inputC);


