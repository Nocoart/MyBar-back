import express, { Application, Request, Response, NextFunction, IRouter } from "express";
const router: IRouter = express.Router();

const controller = require("./controller");

router.post("/add", controller.addIngredient);
router.get("/all", controller.getAllIngredients);
router.get("/:id", controller.getIngredientById);

//
//
//
//
//
//
//
//

// INSERT INTO ingredients(name, unit, category, isRare, imgUrl) VALUES ('Ligth Rum', 'Cl', 'alcohol', false, 'https://www.thecocktaildb.com/images/ingredients/Light%20Rum.png')

// try {
//   const newIngredient = await pool.query(
//     `INSERT INTO ingredients(name) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
//     [name],
//     [unit],
//     [category],
//     [isRare],
//     [imgUrl]
//   );
//   res.status(200).json(newIngredient);
// } catch (error: any) {
//   console.log(error);
//   res.status(400).json(error.message);
// }
// });

module.exports = router;
