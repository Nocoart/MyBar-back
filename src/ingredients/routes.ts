import express, { Application, Request, Response, NextFunction, IRouter } from "express";
const router: IRouter = express.Router();

const pool = require("../db");

const controller = require("./controller");

//add new ingredient
router.post("/add", controller.addIngredient);

//get all ingredients
router.get("/list", controller.getAllIngredients);

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
//   const { name, unit, category, isRare, imgUrl } = req.body;
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
