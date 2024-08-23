const express = require('express');
const app = express();
const cors = require('cors');
const data = require('./data.json');

app.use(cors());
app.use(express.json());

// Endpoint to get all products
app.get('/', (req, res) => {
    res.json(data);
});

// Endpoint to get a specific product by ID
app.get('/product/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const product = data.find(item => item.id === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
