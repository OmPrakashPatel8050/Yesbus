const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// In-memory data storage (replace with a database in a real app)
let dataStore = [];

// POST endpoint to receive data from the React form
app.post('/api/data', (req, res) => {
  const { name, email, message } = req.body;
  const newData = { name, email, message };
  dataStore.push(newData);
  res.status(201).json(newData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
