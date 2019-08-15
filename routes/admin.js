const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// GET /admin/add-product
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
});

// POST /admin/add-product
router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
});

module.exports = router;