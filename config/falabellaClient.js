'use strict';

const axios = require('axios');

const falabellaClient = axios.create({
    baseURL: 'https://api.falabella.com',
    timeout: 1000,
    headers: {
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Replace with your actual access token
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
