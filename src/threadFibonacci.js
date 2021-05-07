//Hello world Thread example
const fb = require('fibonacci');
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

const runFibonacci = workerData => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(__filename, { workerData }); //nasce - pronta
    
    //bloqueado ou dormindo  
    worker.on('message', resolve); 
    worker.on('error', reject);
    worker.on('exit', code => {
      if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
};


if (!isMainThread) {
  //executando
  const result = fb.iterate(workerData.iterations);
  parentPort.postMessage(result);
}

module.exports = runFibonacci;