'use strict';

const axios = require('axios');

const falabellaClient = axios.create({
    baseURL: process.env.FALABELLA_API_URL || 'https://api.falabella.com/v500.0.0',
    timeout: 10000, // 10 seconds to accommodate Falabella API response times
    headers: {
        'Authorization': `Bearer ${process.env.FALABELLA_API_KEY || ''}`,
        'Content-Type': 'application/json',
    }
});

// Request interceptor
falabellaClient.interceptors.request.use((config) => {
    // Do something before request is sent
    console.log('Request:', config);
    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
});

// Response interceptor
falabellaClient.interceptors.response.use((response) => {
    // Do something with response data
    console.log('Response:', response);
    return response;
}, (error) => {
    // Do something with response error
    return Promise.reject(error);
});

module.exports = falabellaClient;
