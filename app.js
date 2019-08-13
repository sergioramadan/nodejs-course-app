const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.engine(
    'hbs', // applies extension to all files but the layout
    handlebars({
        layoutsDir: 'views/layouts/',
        defaultLayout: 'main-layout',
        extname: 'hbs' // applies extension to the layout but the other files
    })
);

app.set('view engine', 'hbs'); // Setting Handlebars as template tool and .hbs as file extension
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

// Start the server on port 3000
app.listen(3000);
console.log('Node server running and listening on port 3000');
