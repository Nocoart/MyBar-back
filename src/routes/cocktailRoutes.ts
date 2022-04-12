import express, { Application, Request, Response, NextFunction, IRouter } from "express";

const router: IRouter = express.Router();
const pool = require("../db");

//get all cocktails

router.get("/cocktail/all", (req: Request, res: Response): void => {
  res.json("in the route");
});

//create cocktail

router.post("/cocktail/create", async (req: Request, res: Response): Promise<void> => {
  try {
  } catch (error: any) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
