const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS middleware

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON data from requests

// Sample product data
let products = [
    {
        id: 1,
        name: 'Bamboo Toothbrush',
        carbonFootprint: 5,
        waterUsage: 2,
        sourcing: '100% renewable',
        greenScore: 85,
    },
    {
        id: 2,
        name: 'Reusable Water Bottle',
        carbonFootprint: 3,
        waterUsage: 1,
        sourcing: 'Recycled materials',
        greenScore: 92,
    },
    {
        id: 3,
        name: 'Organic Cotton Tote Bag',
        carbonFootprint: 4,
        waterUsage: 3,
        sourcing: 'Organic farms',
        greenScore: 88,
    },
];

// Routes
// GET /products - Returns the list of products
app.get('/products', (req, res) => {
    res.json(products);
});

// GET / - Redirects to /products
app.get('/', (req, res) => {
    res.redirect('/products');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
