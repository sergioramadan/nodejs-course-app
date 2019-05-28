const express = require('express');

// Create an instance of the http server to handle HTTP requests
const app = express();

app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); // Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from express!</h1>');
});

// Start the server on port 3000
app.listen(3000);
console.log('Node server running and listening on port 3000');
