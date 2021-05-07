const runFibonacci = require('./threadFibonacci');
runFibonacci({ iterations: 10000 }).then(result => console.log(result));

console.log('lucas')