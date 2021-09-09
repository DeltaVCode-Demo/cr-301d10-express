'use strict';
// Load from .env file
require('dotenv').config();

// Sorta like import
const express = require('express');

// Constructor-ish for a new Express app
const app = express();

// Enable CORS to use from React
const cors = require('cors');
app.use(cors()); // "middleware"


// Pass home callback function
app.get('/', (request, response) => {
  response.send('no place like home');
});

const items = ['apple', 'banana'];
app.get('/shoppingList', (request, response) => {
  console.log('query', request.query);
  // send items in response as application/json
  response.json(items);
});


// Figure out what PORT to listen on
const PORT = process.env.PORT || 3001;

// Start the server on PORT
app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});
