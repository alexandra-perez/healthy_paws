const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// const petsController = require('./controllers/petsController');
// app.use('/pets', petsController);

app.get('/', (req, res) => {
  res.send('Welcome to HealthyPaws');
});

app.get('/*', (req, res) => {
  res.status(404).json({ error: 'Not found' });
});

module.exports = app;
