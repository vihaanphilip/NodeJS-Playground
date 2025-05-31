const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');
app.use([logger, authorize]); // middleware functions

// req => middleware => res
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>');
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>');
})

app.get('/api/products', (req, res) => {
    res.send('<h1>Products</h1>');
})

app.get('/api/items', (req, res) => {
    res.send('<h1>Items</h1>');
})

app.listen(4000, () => {
    console.log('Server is listening on port 4000...');
})