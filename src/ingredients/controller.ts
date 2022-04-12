import { Request, Response } from "express";
const pool = require("../config/db");
const queries = require("./queries");

const addIngredient = async (req: Request, res: Response): Promise<void> => {
  console.log("in th function");
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
    const response = await pool.query(queries.getIngredientById, [req.body.id]);
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
