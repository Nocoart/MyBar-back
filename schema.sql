CREATE DATABASE my_bar_db;

--\c into my_bar_DB

CREATE TABLE cocktail(
    cocktail_id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE ingredient(
    ingredients_id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE,
    unit VARCHAR(10) NOT NULL,
    category VARCHAR(20) NOT NULL,
    isRare BOOLEAN DEFAULT false,
    imgUrl VARCHAR(150)
);




--"id": "sTHzlGIVhBdKcxdf",
-- "name": "Light Rum",
-- "unit": "cl",
-- "category": "alcohol",
-- "isRare": false,
-- "imgUrl": "https://www.thecocktaildb.com/images/ingredients/Light%20Rum.png"