const { get } = require('express/lib/response');
const db = require('../db/dbConfig');

// Get all pets
const getAllPets = async () => {
  try {
    const allPets = await db.any('SELECT * FROM pets');
    return allPets;
  } catch (error) {
    return error;
  }
};

// Get single pet by ID
const getPet = async (id) => {
  try {
    const pet = await db.one('SELECT * FROM pets WHERE id=$1', id);
    return pet;
  } catch (error) {
    return error;
  }
};

// Delete a pet
const deletePet = async (id) => {
  try {
    const pet = await db.one('DELETE * FROM pets WHERE id=$1 RETURNING *', id);
  } catch (error) {
    return error;
  }
};

// Update a pet
const updatePet = async (id, pet) => {
  try {
    const pet = await db.one(
      'UPDATE pets SET name=$1, species=$2, gender=$3, age=$4, weight=$5, isVaccinated=$6, existingConditions=$7 WHERE id=$8 RETURNING *',
      [
        pet.name,
        pet.species,
        pet.gender,
        pet.age,
        pet.weight,
        pet.isVaccinated,
        pet.existingConditions,
        id,
      ]
    );
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllPets,
  getPet,
  deletePet,
  updatePet,
};
