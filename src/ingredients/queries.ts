const getAllIngredients = "SELECT * FROM ingredients";
const getIngredientById = "SELECT * FROM ingredients WHERE ingredients_id = $1";

module.exports = {
  getAllIngredients,
  getIngredientById,
};
