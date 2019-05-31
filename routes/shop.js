const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    const products = adminData.products || []; // Products info
    res.render('shop', { pageTitle: 'Shop', path: '/', prods: products }); // Pug View to render and parameters
});

module.exports = router;