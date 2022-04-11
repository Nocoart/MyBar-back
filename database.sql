CREATE DATABASE my_bar_database;

--\c into my_bar_database

CREATE TABLE cocktails(
    cocktail_id SERIAL PRIMARY KEY,
    name VARCHAR(200)
);
