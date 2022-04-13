import { Request, Response } from "express";
const pool = require("../config/db");
const queries = require("./queries");

const addIngredient = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, unit, category, isRare, imgUrl } = req.body;

    //check for existing ingredients
    const existingIngredients = await pool.query(queries.checkIfIngredientExists, [name]);
    if (existingIngredients.length) res.status(401).json({ error: "Ingredient already exists" });
    const newIngredient = await pool.query(
      `INSERT INTO ingredients(name) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [name],
      [unit],
      [category],
      [isRare],
      [imgUrl]
    );
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const getAllIngredients = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await pool.query(queries.getAllIngredients);
    res.status(200).json(response.rows);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const getIngredientById = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await pool.query(queries.getIngredientById, [req.params.id]);
    res.status(200).json(response.rows);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  addIngredient,
  getAllIngredients,
  getIngredientById,
};
