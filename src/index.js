const runFibonacci = require('./threadFibonacci');
runFibonacci({ iterations: 5 }).then(result => console.log(result));

console.log('lucas')