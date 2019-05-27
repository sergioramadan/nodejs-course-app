const http = require('http');
const fs = require('fs');

// Create an instance of the http server to handle HTTP requests
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    // Use main path to generate the form
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    // Once the message form is received, store DUMMY text and redirects back to '/'
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString(); // TODO: Learn more about Buffer
            const message =  parsedBody.split('=')[1];

            //Way to handle writeFile Asyncroniously
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        });
    }

    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js</h1></body>');
    res.write('</html>');
    return res.end();
};

module.exports = requestHandler;
