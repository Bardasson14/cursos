const PORT = 8081;

const express = require('express');
const app = express();

app.get('/products', (req, res, next)=> {
    res.send({
        nome: 'Notebook',
        preco: 123.45
    })
});

app.listen(PORT, ()=>{
    console.log('Connected to server!');
});
