const express = require('express');
const router = express.Router();

// Mock orders data
const orders = [
    { id: 1, item: 'Product A', quantity: 2, price: 20.0 },
    { id: 2, item: 'Product B', quantity: 1, price: 15.0 },
    { id: 3, item: 'Product C', quantity: 3, price: 30.0 }
];

// GET route to fetch orders
router.get('/', (req, res) => {
    res.json(orders);
});

module.exports = router;