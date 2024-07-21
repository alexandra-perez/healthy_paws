const express = require('express');
const router = express.Router();
const db = require('../db');

const createPet = async (req, res) => {
  const {
    name,
    species,
    gender,
    age,
    weight,
    isVaccinated,
    existingConditions,
  } = req.body;

  try {
    const result = await db.one(
      `INSERT INTO pets (name, species, gender, age, weight, isVaccinated, existingConditions) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`
    );
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create pet' });
  }
};