const express = require('express');
const router = express.Router();
const { fetchOrders } = require('../services/ordersService');

// GET route to fetch orders
router.get('/', async (req, res) => {
    try {
        const userId = req.query.userId;
        const orders = await fetchOrders(userId);
        res.json(orders);
    } catch (error) {
        const message = error.cause?.message || error.message || 'Unknown error';
        res.status(502).json({ status: 'error', error: message });
    }
});

module.exports = router;