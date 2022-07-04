const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200);
});

app.get('/home', (req, res) => {
    res.status(200).send('some text');
});



app.listen(process.env.PORT || 3000, () => {
    console.log('App started on port process.env.port');
})
