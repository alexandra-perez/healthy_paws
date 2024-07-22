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

// Create a new pet
const createPet = async (pet) => {
  try {
    const newPet = await db.one(
      `INSERT INTO pets (name, species, gender, age, weight, is_vaccinated, existing_conditions) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [
        pet.name,
        pet.species,
        pet.gender,
        pet.age,
        pet.weight,
        pet.isVaccinated,
        pet.existingConditions,
      ]
    );
    return newPet;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Update a pet
const updatePet = async (id, pet) => {
  try {
    const updatedPet = await db.one(
      'UPDATE pets SET name=$1, species=$2, gender=$3, age=$4, weight=$5, isVaccinated=$6, existingConditions=$7 WHERE id=8 RETURNING *',
      [
        pet.name,
        pet.species,
        pet.gender,
        pet.age,
        pet.weight,
        pet.isVaccinated,
        pet.existingConditions,
      ]
    );
    return updatedPet;
  } catch (error) {
    throw error;
  }
};

// Delete a pet
const deletePet = async (id) => {
  try {
    const deletedPet = await db.one(
      'DELETE FROM pets WHERE id=$1 RETURNING *',
      id
    );
    return deletedPet;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllPets,
  getPet,
  createPet,
  deletePet,
  updatePet,
};
