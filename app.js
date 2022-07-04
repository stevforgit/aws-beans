const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('WELCOME TO HOMEPAGE!!')
});

app.listen(process.env.port || 3000, () => {
    console.log('App started!!');
})
