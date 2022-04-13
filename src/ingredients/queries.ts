const getAllIngredients = "SELECT * FROM ingredient";
const getIngredientById = "SELECT * FROM ingredient WHERE ingredient_id = $1";
const checkIfIngredientExists = "SELECT i FROM ingredient i WHERE LOWER i.name = LOWER $1";

module.exports = {
  getAllIngredients,
  getIngredientById,
  checkIfIngredientExists,
};
