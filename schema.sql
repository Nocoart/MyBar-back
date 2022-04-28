CREATE DATABASE my_bar_db;

--\c into my_bar_DB

-- TABLE CREATION

CREATE TABLE ingredient(
    ingredient_id SERIAL PRIMARY KEY,
    ingredient_name VARCHAR(50) UNIQUE,
    unit VARCHAR(10) NOT NULL,
    category VARCHAR(20) NOT NULL,
    is_rare BOOLEAN DEFAULT false,
    ingredient_img_url TEXT
);


CREATE TABLE cocktail(
    cocktail_id SERIAL PRIMARY KEY,
    cocktail_name VARCHAR(100) UNIQUE NOT NULL,
    glass VARCHAR(50),
    is_alcoholic BOOLEAN DEFAULT true,
    is_common BOOLEAN DEFAULT true,
    cocktail_img_url TEXT
);


CREATE TABLE measure(
    measure_id SERIAL PRIMARY KEY,
    ingredients_id ,
    quantity ,
    cocktail_id ,
)

--"id": "sTHzlGIVhBdKcxdf",
-- "name": "Light Rum",
-- "unit": "cl",
-- "category": "alcohol",
-- "isRare": false,
-- "imgUrl": "https://www.thecocktaildb.com/images/ingredients/Light%20Rum.png"