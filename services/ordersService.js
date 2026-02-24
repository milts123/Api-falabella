// ordersService.js

const falabellaClient = require('../config/falabellaClient');

/**
 * Fetch orders from Falabella API
 * @param {string} userId - User ID to fetch orders for
 * @returns {Promise<Object>} - A promise that resolves to the orders data
 */
async function fetchOrders(userId) {
    try {
        const response = await falabellaClient.get('/orders', {
            params: { userId }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching orders:', error.message);
        throw error;
    }
}

module.exports = { fetchOrders };