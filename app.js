const { Worker, isMainThread, parentPort, MessageChannel } = require('node:worker_threads');
const express = require('express');
const bodyParser = require('body-parser');
const cluster = require('cluster');
const os = require('os');

const mongoose = require("mongoose");

var uri = "mongodb://user:password@nodejs-nginx.cloudns.ph:27017/mern";






// const { publishToQueue } = require('./services/messageService');

console.log(os.cpus().length);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send('Healthy');
});

app.get('/connect', (req, res) => {
    try {


        mongoose.disconnect();

        mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

        const connection = mongoose.connection;

        connection.once("open", function () {
            console.log("MongoDB database connection established successfully");
            res.status(200).send('Connected!!!');
        });
    } catch (err) {

        res.status(200).send('Unable to connect!!!', err);
    }
});

app.post('/msg', async (req, res) => {
    let { queueName, payload } = req.body;
    // await publishToQueue(queueName, payload);
    res.status(200).send('200');
});

app.get('/home', (req, res) => {
    console.log(process.pid)
    for (let i = 0; i < 100000; i++) {
        for (let i = 0; i < 100000; i++) {

        }

    }
    res.status(200).send(`some text!!!!!!XXXX ${process.pid}`);
});

app.get('/long-process', (req, res) => {
    console.log(__filename);
    const worker = new Worker('./worker.js');
    worker.on('message', (data) => {
        console.log('Data from Worker ', data);
    });
    res.status(200).send('Processing!!');
});


app.listen(process.env.PORT || 8080, () => {
    console.log('App started on port process.env.port', process.pid);
});








