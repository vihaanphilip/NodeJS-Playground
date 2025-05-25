const express = require('express');
const path = require('path');

const app = express();
const { products } = require('./data');

// Serve static files from /public
// app.use(express.static('./public'));

// Route for homepage
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './index.html'));
// });

// app.get('/', (req, res) => {
//   res.json([{
//     id: 1,
//     name: 'John Doe',
//     age: 30
//   }, {
//     id: 2,
//     name: 'Jane Smith',
//     age: 25
//   }]);
// });


// app.get('/', (req, res) => {
//     res.json(products);
// } 
// );


// Route to get all products
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
}
);

// Route to get all products except price and desc
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    }
);
    res.json(newProducts);
}
);

// // Route to get first product
// app.get('/api/products/1', (req, res) => {
//     const singleProduct = products.find(
//         (product) => product.id === 1
//     );
//     if (!singleProduct) {
//         return res.status(404).send('<h1>Product not found</h1>');
//     }
//     res.json(singleProduct);
// }
// );

// Route to get first product
app.get('/api/products/:productId', (req, res) => {
    // console.log(req);
    // console.log(req.params);
    const { productId } = req.params;
    const singleProduct = products.find(
        (product) => product.id === Number(productId) // Convert productId to number
    );
    if (!singleProduct) {
        return res.status(404).send('<h1>Product not found</h1>');
    }
    res.json(singleProduct);
}
);

app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
    console.log(req.params);
    const { productId, reviewId } = req.params;
    res.send(`Product ID: ${productId}, Review ID: ${reviewId}`);
}
);


// http://localhost:4000/api/v1/query?name=huh&age=20
app.get('/api/v1/query', (req, res) => {
    // console.log(req.query);
    // res.send('Query parameters received');
    const { search, limit } = req.query;
    let sortedProducts = [...products];
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        });
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
        // return res.status(200).send('<h1>No products matched your search</h1>');
        return res.status(200).json({ success: true, data: [] });
    }
    res.status(200).json(sortedProducts);

}
);

// // 404 handler (should be before app.listen)
// app.use((req, res) => {
//   res.status(404).send('<h1>Resource not found</h1>');
// });

// Start server
app.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
