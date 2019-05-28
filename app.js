const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.send('<h1>Page not found</h1>');
});

// Start the server on port 3000
app.listen(3000);
console.log('Node server running and listening on port 3000');
