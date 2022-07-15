// const amqp = require('amqplib/callback_api');
// const CONN_URL = 'amqp://localhost:5673';

// let ch = null;
// amqp.connect(CONN_URL, function (err, conn) {
//     conn.createChannel(function (err, channel) {
//         ch = channel;

//         ch.consume('user-message', function (msg) {
//             console.log('User message ', msg.content.toString());
//         }, { noAck: false });

//         ch.consume('admin-message', function (msg) {
//             const data = JSON.parse(msg.content.toString());
//             console.log('Admin message consumer I ', data._id);
//             setTimeout(() => {
//                 ch.ack(msg);
//             }, 10000);
//         });

//         ch.consume('admin-message', function (msg) {
//             console.log('Admin message consumer II ', msg.content.toString());
//             setTimeout(() => {
//                 ch.ack(msg);
//             }, 30000);
//         });

//     });
// });

// const publishToQueue = async (queueName, data) => {
//     console.log('Pbliojks')
//     ch.sendToQueue(queueName, Buffer.from(JSON.stringify(data)), { persistent: true });
// }

// process.on('exit', (code) => {
//     ch.close();
//     console.log('Closing RabbitMQ!');
// });

// module.exports = {
//     publishToQueue
// }
