import { Request, Response } from "express";
const pool = require("../../db");

const addIngredient = async (req: Request, res: Response): Promise<void> => {
  console.log("in th function");
};

const getAllIngredients = async (req: Request, res: Response): Promise<void> => {
  console.log("get all ingredients func");
};

module.exports = {
  addIngredient,
  getAllIngredients,
};
