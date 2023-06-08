const express = require('express');
const User = require('./user');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
    console.log('Hello World!')
})

router.get('/page', (req, res) => {
    res.send('Page')
    console.log('Page')
})

router.get('/error', (req, res) => {
    res.send('error')
    const error = new Error('401: Permissions Denied');
    error.statusCode = 401;
    throw error
})

router.use('/users', User);

module.exports = router;