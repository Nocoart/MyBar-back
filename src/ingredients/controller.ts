import { Request, Response } from "express";

const addIngredient = async (req: Request, res: Response): Promise<void> => {
  console.log("in th function");
};

module.exports = {
  addIngredient,
};
