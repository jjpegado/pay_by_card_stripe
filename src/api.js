const axios = require('axios');
const apiKey = require('./apiKey');

const instanciaAxios = axios.create({
    baseURL: 'https://api.stripe.com/v1',
    headers: {
        authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Stripe-Version': '2020-08-27'
    }
})

module.exports = instanciaAxios