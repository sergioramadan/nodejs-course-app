const express = require('express');

const router = express.Router();

// GET /admin/add-product
router.get('/add-product', (req, res, next) => {
    console.log('In the middleware!');
    res.send(
        '<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Add Product</button></form>'
    );
});

// POST /admin/add-product
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;