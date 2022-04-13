const getAllIngredients = "SELECT * FROM ingredient";
const getIngredientById = "SELECT * FROM ingredient WHERE ingredient_id = $1";
const checkIfIngredientExists = "SELECT i FROM ingredient i WHERE LOWER(i.name) = LOWER($1)";

const updateIngredientFieldById = "UPDATE ingredient SET $1=$2 WHERE ingredient_id = $3";
const deleteIngredientById = "DELETE ingredient WHERE ingredient_id = $1";

module.exports = {
  getAllIngredients,
  getIngredientById,
  checkIfIngredientExists,

  updateIngredientFieldById,
  deleteIngredientById,
};
