const express = require('express');
const router = express.Router();
const { createPet, getAllPets, getPet, updatePet, deletePet } = require('../queries/pet');

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
    if (!pet) {
      return res.status(404).json({ error: `No pet with the id ${id} exists` });
    }
    res.status(200).json(pet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch pet' });
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

// Update a single pet
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedPet = await updatePet(id, req.body);
    if (!updatedPet) {
      return res.status(404).json({ msg: 'Pet not found' });
    }
    res.json(updatedPet);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Delete a single pet
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPet = await deletePet(id);
    if (!deletedPet) {
      return res.status(404).json({ msg: 'Pet not found' });
    }
    res.json({ msg: 'Pet deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
