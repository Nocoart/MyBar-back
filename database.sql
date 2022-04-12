CREATE DATABASE my_bar_DB;

--\c into my_bar_DB

CREATE TABLE cocktails(
    cocktail_id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE ingredients(
    ingredients_id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);