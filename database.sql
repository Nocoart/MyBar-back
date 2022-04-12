CREATE DATABASE my_bar_db;

--\c into my_bar_DB

CREATE TABLE cocktails(
    cocktail_id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE ingredients(
    ingredients_id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE,
    unit VARCHAR(10) NOT NULL,
    category VARCHAR(20) NOT NULL,
    isRare BOOLEAN NOT NULL,
    imgUrl VARCHAR(150)
);


--"id": "sTHzlGIVhBdKcxdf",
-- "name": "Ligth Rum",
-- "unit": "cl",
-- "category": "alcohol",
-- "isRare": false,
-- "imgUrl": "https://www.thecocktaildb.com/images/ingredients/Light%20Rum.png"