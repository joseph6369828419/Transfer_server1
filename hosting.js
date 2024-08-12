const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content-Type
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    // Send the response body as "Hello World"
    res.end('Hello World\n');
});

// Set the server to listen on port 3000
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
  });
  