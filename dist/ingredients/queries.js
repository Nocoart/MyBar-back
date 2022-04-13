"use strict";
const getAllIngredients = "SELECT * FROM ingredients";
const getIngredientById = "SELECT * FROM ingredients WHERE ingredients_id = $1";
const checkIfIngredientExists = "SELECT * FROM ingredients WHERE LOWER name = LOWER $1";
module.exports = {
    getAllIngredients,
    getIngredientById,
    checkIfIngredientExists,
};
