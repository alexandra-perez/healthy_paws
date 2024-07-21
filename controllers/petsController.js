const express = require('express');
const router = express.Router();
const { createPet , getAllPets } = require('../queries/pet');


router.post('/', async (req, res) => {
    try {
        const newPet = await createPet(req.body);
        res.status(201).json(newPet);
    } catch (error){
        console.error(error);
        res.status(500).json({ error: 'Failed to create pet'});
    }
});

router.get('/', async (req, res) => {
    try {
        const allPets = await getAllPets();
        res.status(200).json(allPets);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch pets'});
    }
});

module.exports = router;