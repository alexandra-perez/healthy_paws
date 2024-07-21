DROP DATABASE IF EXISTS pets_prod;
CREATE DATABASE pets_prod;

\c pets_prod;

CREATE TABLE pets (
name TEXT NOT NULL,
species TEXT NOT NULL,
gender TEXT NOT NULL,
age INT NOT NULL,
weight INT NOT NULL,
isVaccinated BOOLEAN DEFAULT FALSE,
existingConditions TEXT DEFAULT ''
);