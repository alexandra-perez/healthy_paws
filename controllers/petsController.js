const express = require('express');
const router = express.Router();
const { createPet, getAllPets, getPet } = require('../queries/pet');

// Get all pets
router.get('/', async (req, res) => {
  try {
    const allPets = await getAllPets();
    res.status(200).json(allPets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch pets' });
  }
});

// Get single pet by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const pet = await getPet(id);
    res.status(200).json(pet);
  } catch (error) {
    res.status(404).json({ error: `No color with the id ${id} exists` });
  }
});

// Create new pet
router.post('/', async (req, res) => {
  try {
    const newPet = await createPet(req.body);
    res.status(201).json(newPet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create pet' });
  }
});

module.exports = router;
