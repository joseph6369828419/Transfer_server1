// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
  // Send a 'Hello, World!' response
  res.send('Hello, World!');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
