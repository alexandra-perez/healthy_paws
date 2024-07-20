DROP DATABASE IF EXISTS pets_dev;
CREATE DATABASE pets_dev;

\c pets_dev;

CREATE TABLE pets (
name TEXT NOT NULL,
species TEXT NOT NULL,
gender TEXT NOT NULL,
age INT NOT NULL,
weight INT NOT NULL,
isVaccinated boolean DEFAULT FALSE,
existingConditions: DEFAULT '',
);