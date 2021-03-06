const PORT = 8081;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');

app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/products', (req, res, next) => {
    res.send(db.getProducts())
});

app.get('/products/:id', (req, res, next)=>{
    res.send(db.getProduct(req.params.id))
});

app.post('/products/', (req, res, next) => {
    const product = db.saveProduct({
        name: req.body.name,
        price: req.body.price
    });
    res.send(product); //JSON
});

app.listen(PORT, () => {
    console.log('Connected to server!');
});
