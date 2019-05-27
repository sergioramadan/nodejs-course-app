const http = require('http');
const routes = require('./routes');

// Create an instance of the http server to handle HTTP requests
let app = http.createServer(routes);

// Start the server on port 3000
app.listen(3000);
console.log('Node server running on port 3000');
