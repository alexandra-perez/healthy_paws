DROP DATABASE IF EXISTS pets_dev;
CREATE DATABASE pets_dev;

\c pets_dev;

CREATE TABLE pets (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
species TEXT NOT NULL,
gender TEXT NOT NULL,
age INT NOT NULL,
weight INT NOT NULL,
isVaccinated BOOLEAN DEFAULT FALSE,
existingConditions TEXT DEFAULT ''
);
