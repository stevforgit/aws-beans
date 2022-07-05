const { Worker, isMainThread, parentPort, MessageChannel } = require('node:worker_threads');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200);
});

app.get('/home', (req, res) => {
    res.status(200).send('some text');
});

app.get('/long-process', (req, res) => {
    console.log(__filename);
    const worker = new Worker('./worker.js');
    worker.on('message', (data) => {
        console.log('Data from Worker ', data);
    });


    res.status(200).send('Processing!!');
});



app.listen(process.env.PORT || 3000, () => {
    console.log('App started on port process.env.port');
});
