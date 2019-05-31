const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// GET /admin/add-product
router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
});

// POST /admin/add-product
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;