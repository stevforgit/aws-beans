const { parentPort, workerData } = require("worker_threads");




const longProcess = () => {
    console.log('Running long Process in worker thread.')
    setTimeout(() => {
        parentPort.postMessage({ done: true });
    }, 5000);
};


longProcess();