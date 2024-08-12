// Import the Express module
const express = require('express');
const path = require('path');
// Create an Express application
const app = express();

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
  // Send a 'Hello, World!' response
  // Send an HTML file as the response
  res.sendFile(path.join(__dirname+'/hosting1.html'));
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
