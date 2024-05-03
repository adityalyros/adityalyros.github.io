// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Dummy data
let pets = [
  { id: 1, name: 'Max', breed: 'Labrador', age: 3 },
  { id: 2, name: 'Bella', breed: 'Poodle', age: 2 },
  // Add more pets as needed
];

// Routes
app.get('/pets', (req, res) => {
  res.json(pets);
});

app.post('/pets', (req, res) => {
  const pet = req.body;
  pet.id = pets.length + 1;
  pets.push(pet);
  res.status(201).json(pet);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
