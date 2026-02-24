// ordersService.js

const fetch = require('node-fetch');

// Base URL for the Falabella API
const API_URL = 'https://api.falabella.com/orders';

/**
 * Fetch orders from Falabella API
 * @param {string} userId - User ID to fetch orders for
 * @returns {Promise<Object>} - A promise that resolves to the orders data
 */
async function fetchOrders(userId) {
    try {
        const response = await fetch(`${API_URL}?userId=${userId}`);

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const orders = await response.json();
        return orders;
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
}

module.exports = { fetchOrders };